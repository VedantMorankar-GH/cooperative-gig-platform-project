/* Phase 12 — prototype security, privacy, RBAC and data-governance layer. */
(function(){
  // Shared output encoder for any user-controlled text placed into dynamic HTML.
  window.escHtml=window.escHtml||function(value){return String(value??"").replace(/[&<>"']/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[ch]));};
  const ROLES_SAFE=["customer","worker","federationAdmin","admin"];
  const roleFromUser=(u)=>ROLES_SAFE.includes(u?.roleId)?u.roleId:null;
  const originalCurrentUser=window.currentUser;
  const originalCurrentRole=window.currentRole;
  const originalSaveState=window.saveState;
  const originalGetState=window.getState;

  function stateUserRecord(state,u){
    if(!u?.id)return null;
    return (state.users||[]).find(x=>(x.id||x.userId)===u.id)||null;
  }
  function secureIdentity(){
    const state=originalGetState();
    const stored=state.currentUser;
    if(!stored)return null;
    const record=stateUserRecord(state,stored);
    const role=roleFromUser(stored);
    if(!record || !role || record.roleId!==role || (state.currentRole && state.currentRole!==role))return null;
    return {...record,...stored,roleId:role};
  }
  window.currentUser=function(){return secureIdentity();};
  window.currentRole=function(){const u=secureIdentity();return u?u.roleId:null;};
  window.secureCurrentRole=window.currentRole;

  function hasRole(role){return window.currentRole()===role;}
  function hasAnyRole(roles){return Array.isArray(roles)&&roles.includes(window.currentRole());}
  function getWorkerForUser(userId){const s=originalGetState();return s.workers.find(w=>w.userId===userId||w.id===userId)||null;}
  function getCustomerForUser(userId){const s=originalGetState();return s.customers.find(c=>c.userId===userId||c.id===userId)||null;}
  function getFederationForUser(userId){const u=secureIdentity(),s=originalGetState();const fedId=u?.federationId||u?.entityId;return s.federations.find(f=>f.id===fedId)||null;}
  function cooperativeInUserFederation(coopId,userId=secureIdentity()?.id){const coop=originalGetState().cooperatives.find(c=>c.id===coopId);const fed=getFederationForUser(userId);return !!coop&&!!fed&&coop.federationId===fed.id;}

  function canAccessBooking(user,booking){
    if(!user||!booking)return false;
    const role=roleFromUser(user);
    if(role==="admin")return true;
    if(role==="customer"){
      const c=getCustomerForUser(user.id);return !!c&&booking.customerId===c.id;
    }
    if(role==="worker"){
      const w=getWorkerForUser(user.id);return !!w&&((booking.primaryWorkerId===w.id)||Array.isArray(booking.selectedWorkerIds)&&booking.selectedWorkerIds.includes(w.id)||(originalGetState().assignments||[]).some(a=>a.bookingId===booking.id&&a.workerId===w.id));
    }
    if(role==="federationAdmin")return cooperativeInUserFederation(booking.cooperativeId||booking.originCooperativeId,user.id)||(booking.federationId&&booking.federationId===user.federationId);
    return false;
  }
  function canAccessWorkerProfile(user,worker){
    if(!user||!worker)return false;
    const role=roleFromUser(user);
    if(role==="admin")return true;
    if(role==="worker")return worker.id===getWorkerForUser(user.id)?.id;
    if(role==="federationAdmin")return cooperativeInUserFederation(worker.cooperativeId,user.id);
    if(role==="customer"){
      const s=originalGetState();const c=getCustomerForUser(user.id);
      return !!c&&s.bookings.some(b=>b.customerId===c.id&&(b.primaryWorkerId===worker.id||(b.selectedWorkerIds||[]).includes(worker.id)));
    }
    return false;
  }
  function canAccessConversation(user,conversation){
    if(!user||!conversation)return false;
    const role=roleFromUser(user);
    if(role==="admin")return false; // Platform Admin does not automatically receive private chats.
    if(role==="customer")return getCustomerForUser(user.id)?.id===conversation.customerId;
    if(role==="worker")return getWorkerForUser(user.id)?.id===conversation.workerId;
    return false; // Federation operations do not imply private conversation access.
  }
  function canSubmitReview(user,booking){
    if(!user||roleFromUser(user)!=="customer"||!booking)return false;
    const c=getCustomerForUser(user.id),s=originalGetState();
    const workerId=booking.primaryWorkerId||booking.selectedWorkerIds?.[0];
    return !!c&&booking.customerId===c.id&&booking.status==="COMPLETED"&&!!workerId;
  }
  function canManageVerification(user,worker){return !!user&&["federationAdmin","admin"].includes(roleFromUser(user))&&!!worker&&(roleFromUser(user)==="admin"||cooperativeInUserFederation(worker.cooperativeId,user.id));}
  function canResolveComplaint(user,complaint){
    if(!user||!complaint)return false;const role=roleFromUser(user);
    if(role==="admin")return true;
    if(role!=="federationAdmin")return false;
    const b=getState().bookings.find(x=>x.id===complaint.bookingId);
    return !!b&&canAccessBooking(user,b);
  }
  function canAccess(resource,action,user=secureIdentity(),record=null){
    const matrix={booking:canAccessBooking,worker:canAccessWorkerProfile,conversation:canAccessConversation,review:(u,r)=>!!u&&roleFromUser(u)==="customer",verification:canManageVerification,complaint:canResolveComplaint};
    const fn=matrix[resource];return typeof fn==="function"?!!fn(user,record,action):false;
  }
  Object.assign(window,{hasRole,hasAnyRole,canAccessBooking,canAccessWorkerProfile,canAccessConversation,canSubmitReview,canManageVerification,canResolveComplaint,canAccess});

  // Prototype data minimization: recursively strip secret-like fields before persistence.
  const SECRET_KEY=/^(password|passwd|passcode|token|accessToken|refreshToken|authToken|secret|secretKey|apiKey|privateKey)$/i;
  function sanitize(value,key){
    if(SECRET_KEY.test(String(key||"")))return undefined;
    if(Array.isArray(value))return value.map(v=>sanitize(v)).filter(v=>v!==undefined);
    if(value&&typeof value==="object"){
      const out={};Object.entries(value).forEach(([k,v])=>{const clean=sanitize(v,k);if(clean!==undefined)out[k]=clean;});return out;
    }
    return value;
  }
  window.sanitizePrototypeState=sanitize;

  window.saveState=function(patch){
    const before=originalGetState();
    const cleanPatch=sanitize(patch)||{};
    const next=originalSaveState(cleanPatch);
    const beforeUser=before.currentUser?.id||null,afterUser=next.currentUser?.id||null;
    const beforeRole=before.currentRole||null,afterRole=next.currentRole||null;
    if((beforeUser!==afterUser||beforeRole!==afterRole)&&Array.isArray(next.auditLog)){
      const action=afterUser?"DEMO_LOGIN":"LOGOUT";
      next.auditLog.push({id:`audit-session-${Date.now()}`,action,actor:afterUser||beforeUser||"anonymous",target:"session",timestamp:new Date().toISOString(),description:action==="DEMO_LOGIN"?`Demo session started for role ${afterRole}.`:`Demo session ended.`});
      originalSaveState({auditLog:next.auditLog});
    }
    return next;
  };

  // Explicitly keep logout from deleting domain/demo records.
  window.logout=function(){
    const state=originalGetState(),user=secureIdentity();
    if(user&&Array.isArray(state.auditLog))state.auditLog.push({id:`audit-logout-${Date.now()}`,action:"LOGOUT",actor:user.id,target:"session",timestamp:new Date().toISOString(),description:"Demo session ended; domain data retained."});
    state.currentUser=null;state.currentRole=null;state.userRole=null;state.activeBookingId=null;
    originalSaveState({currentUser:null,currentRole:null,userRole:null,activeBookingId:null,auditLog:state.auditLog});
    location.href="index.html";
  };

  // Development-facing audit/validation helpers.
  window.securityAuditSnapshot=function(){
    const s=originalGetState();
    return {roleCount:ROLES_SAFE.length,currentRole:window.currentRole(),sessionUser:s.currentUser?.id||null,hasPasswords:Object.keys(s).some(k=>SECRET_KEY.test(k)),auditRecords:Array.isArray(s.auditLog)?s.auditLog.length:0,language:s.language};
  };
  window.validatePrototypeSecurity=function(){
    const s=originalGetState();
    const issues=[];
    if(!ROLES_SAFE.includes(window.currentRole())&&s.currentUser)issues.push("Invalid current session role");
    if(JSON.stringify(s).match(/"(?:password|token|secret|apiKey)"\s*:/i))issues.push("Secret-like field found in state");
    if(!Array.isArray(s.auditLog))issues.push("Audit log missing");
    return {ok:issues.length===0,issues};
  };

  // Ensure protected booking page is customer-only and cannot be opened as another role.
  document.addEventListener("DOMContentLoaded",function(){
    if(location.pathname.toLowerCase().endsWith("/booking.html")||location.pathname.toLowerCase().endsWith("booking.html")){
      if(window.currentRole()!=="customer")location.replace("login.html?next=booking");
    }
  });
})();

/* Mutation guards for high-impact Phase 4–11 operations. */
(function(){
  const wrap=(name,guard)=>{
    if(typeof window[name]!=="function")return;
    const original=window[name];
    window[name]=function(...args){
      const user=window.currentUser();
      if(!guard(user,...args)){
        if(typeof window.toast==="function")window.toast("You are not authorized to perform this action.","error");
        return null;
      }
      return original.apply(this,args);
    };
  };
  wrap("federationComplaintUpdate",(u,id)=>{const c=getState().complaints.find(x=>x.id===id);return !!u&&window.canResolveComplaint(u,c);});
  wrap("escalateComplaint",(u,id)=>{const c=getState().complaints.find(x=>x.id===id);return !!u&&window.canResolveComplaint(u,c);});
  wrap("createAssistanceRequest",(u,bookingId)=>{const b=getState().bookings.find(x=>x.id===bookingId);return !!u&&window.hasAnyRole(["federationAdmin","admin"])&&!!b&&window.canAccessBooking(u,b);});
  wrap("selectCrossCooperativeWorker",(u,requestId)=>{if(!u||!window.hasAnyRole(["federationAdmin","admin"]))return false;const r=getState().assistanceRequests.find(x=>x.id===requestId);const b=r&&getState().bookings.find(x=>x.id===r.bookingId);return !!r&&!!b&&window.canAccessBooking(u,b);});
  wrap("submitDemoInsuranceClaim",(u,workerId)=>window.hasRole("worker")&&window.canAccessWorkerProfile(u,getState().workers.find(w=>w.id===workerId)));
})();
