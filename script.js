const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
function toast(msg,type="success"){const root=$("#toast-root");if(!root)return;const el=document.createElement("div");el.className=`toast ${type}`;el.setAttribute("role",type==="error"?"alert":"status");el.setAttribute("aria-live",type==="error"?"assertive":"polite");el.innerHTML=`<span>${type==="success"?"✓":type==="error"?"!":"i"}</span><div>${msg}</div>`;root.appendChild(el);setTimeout(()=>el.classList.add("out"),3200);setTimeout(()=>el.remove(),3600)}
const phase10TextSources=new WeakMap();
const phase10AttrSources=new WeakMap();
function phase10ApplyStaticTranslations(lang=getState().language||"en"){
 const walk=(root)=>{if(!root)return;const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);const nodes=[];while(walker.nextNode())nodes.push(walker.currentNode);nodes.forEach(n=>{const p=n.parentElement;if(!p||["SCRIPT","STYLE","NOSCRIPT","TEXTAREA"].includes(p.tagName))return;const value=n.nodeValue||"";if(!phase10TextSources.has(n))phase10TextSources.set(n,value);const source=phase10TextSources.get(n)||"",trim=source.trim();if(!trim)return;const translated=phase10TranslatePhrase(source,lang);if(translated!==n.nodeValue)n.nodeValue=translated;});
 root.querySelectorAll?.("[aria-label],[title],[placeholder]").forEach(el=>["aria-label","title","placeholder"].forEach(a=>{const key=el+":"+a;let src=phase10AttrSources.get(el);if(!src){src={};phase10AttrSources.set(el,src);}const v=el.getAttribute(a);if(v&&!src[a])src[a]=v;if(src[a])el.setAttribute(a,phase10TranslatePhrase(src[a],lang));}));
 };
 walk(document.body);
 // Restore language selector options because option labels are intentionally controlled.
 const sel=$("#languageSelect");if(sel){const current=lang;sel.innerHTML=Object.entries(PHASE10_LANGUAGES).map(([id,label])=>`<option value="${id}">🌐 ${label}</option>`).join("");sel.value=current;sel.setAttribute("aria-label",translations[lang]?.ui?.Language||"Language");}
 // Translate explicit data-i18n values after phrase pass.
 const t=translations[lang]||translations.en;$$('[data-i18n]').forEach(el=>{const v=el.dataset.i18n.split('.').reduce((o,k)=>o?.[k],t);if(v)el.textContent=v;});
 document.documentElement.lang=lang;
}
function setLanguage(lang){const safe=PHASE10_LANGUAGES[lang]?lang:"en";saveState({language:safe});phase10ApplyStaticTranslations(safe);}
function localeForLanguage(lang=getState().language||"en"){return ({en:"en-IN",hi:"hi-IN",mr:"mr-IN",ta:"ta-IN",te:"te-IN"}[lang]||"en-IN");}
function formatDateTimeLocalized(value,options){const d=value instanceof Date?value:new Date(value);if(Number.isNaN(d.getTime()))return String(value||"");return d.toLocaleString(localeForLanguage(),options);}
function phase10EnhanceAccessibility(){
 document.querySelectorAll('button,a,input,select,textarea').forEach(el=>{if(el.matches('button,a')&&!el.textContent.trim()&&!el.getAttribute('aria-label')){const icon=el.className||"action";el.setAttribute('aria-label',String(icon).replace(/[^a-zA-Z]+/g,' ').trim()||'Action');}if(el.matches('input,select,textarea')&&!el.getAttribute('aria-label')&&!el.closest('label')){const hint=el.getAttribute('placeholder')||el.id||el.name||'Form field';el.setAttribute('aria-label',phase10TranslatePhrase(hint));}});
 document.querySelectorAll('.modal').forEach(m=>{if(m.classList.contains('hidden'))return;const close=m.querySelector('.modal-close');if(close)close.setAttribute('aria-label',translations[getState().language]?.ui?.Close||'Close');const title=m.querySelector('h1,h2,h3');if(title)m.setAttribute('aria-label',title.textContent.trim());});
}
function phase10ValidateTranslations(){const missing=validateTranslations();const keys=Object.values(missing).flat();if(keys.length)console.warn('Phase 10 missing translation keys:',missing);return missing;}

function initLanguage(){const s=getState();setLanguage(s.language||"en");const sel=$("#languageSelect");if(sel)sel.addEventListener("change",e=>setLanguage(e.target.value))}
function goBook(){if(!currentUser())location.href="login.html?next=booking";else location.href="booking.html"}
function phase10LocalizedService(service){const lang=getState().language||"en";const names={electrician:["Electrician","इलेक्ट्रीशियन","इलेक्ट्रीशियन","எலக்ட்ரீஷியன்","ఎలక్ట్రీషియన్"],plumber:["Plumber","प्लंबर","प्लंबर","குழாய் பணியாளர்","ప్లంబర్"],carpenter:["Carpenter","बढ़ई","सुतार","தச்சர்","వడ్రంగి"],painter:["Painter","पेंटर","पेंटर","வண்ணப்பூச்சாளர்","పెయింటర్"],cleaner:["Cleaner","सफाईकर्मी","स्वच्छता कामगार","துப்புரவு பணியாளர்","క్లీనర్"],gardener:["Gardener","माली","माळी","தோட்டக்காரர்","తోటమాలి"],driver:["Driver","ड्राइवर","ड्रायव्हर","ஓட்டுநர்","డ్రైవర్"],caregiver:["Caregiver","देखभालकर्ता","केअरगिव्हर","பராமரிப்பாளர்","సంరక్షణ కార్మికుడు"],technician:["Technician","तकनीशियन","तंत्रज्ञ","தொழில்நுட்ப நிபுணர்","టెక్నీషియన్"],helper:["Domestic Helper","घरेलू सहायक","घरगुती मदतनीस","வீட்டு உதவியாளர்","గృహ సహాయకుడు"]};const idx={en:0,hi:1,mr:2,ta:3,te:4}[lang]??0;return {...service,name:names[service.id]?.[idx]||service.name};}

function initHome(){const grid=$("#serviceGrid");if(grid)grid.innerHTML=SERVICES.map((x,i)=>{const sx=phase10LocalizedService(x);return `<article class="service-card reveal" style="--delay:${i*40}ms"><div class="service-icon">${sx.icon}</div><h3>${sx.name}</h3><p>${sx.desc}</p><button class="service-link" data-action="book">${translations[getState().language||"en"].nav.book} →</button></article>`}).join("");$$("[data-action=book]").forEach(b=>b.addEventListener("click",goBook));$$("[data-role-login]").forEach(b=>b.addEventListener("click",()=>location.href=`login.html?role=${b.dataset.roleLogin}`));const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.08});$$(".reveal").forEach(e=>obs.observe(e));$$("[data-count]").forEach(e=>{const n=+e.dataset.count;let cur=0;const start=performance.now();function tick(t){cur=Math.min(n,Math.floor(n*(t-start)/900));e.textContent=cur.toLocaleString()+"+";if(cur<n)requestAnimationFrame(tick)}requestAnimationFrame(tick)})}
function initLogin(){
 const grid=$("#roleGrid"),btn=$("#loginContinue"),fields=$("#customerFields"),name=$("#loginName"),phone=$("#loginPhone"),email=$("#loginEmail"),username=$("#loginUsername"),password=$("#loginPassword"),hint=$("#credentialHint"),error=$("#loginError");
 if(!grid||!btn)return;
 const credentials={
  customer:{username:"customer",password:"customer123"},
  worker:{username:"CG-W-1001",password:"worker123"},
  federationAdmin:{username:"federation",password:"federation123"},
  admin:{username:"admin",password:"admin123"}
 };
 let selected=new URLSearchParams(location.search).get("role")||"customer";
 if(!ROLES.some(r=>r.id===selected))selected="customer";
 const showFields=()=>{
  const isCustomer=selected==="customer";
  if(fields)fields.classList.toggle("hidden",!isCustomer);
  const c=credentials[selected];
  if(hint&&c)hint.innerHTML=`<span>Demo credentials for <b>${escHtml(ROLES.find(r=>r.id===selected)?.title||selected)}</b>${selected==="worker"?" · Employee ID":""}</span><code>${escHtml(c.username)} / ${escHtml(c.password)}</code>`;
 };
 function render(){
  grid.innerHTML=ROLES.map(r=>`<button type="button" class="role-card ${selected===r.id?"selected":""}" data-role="${r.id}"><span>${r.icon}</span><div><b>${r.title}</b><small>${r.desc}</small></div><i>${selected===r.id?"✓":"○"}</i></button>`).join("");
  $$(".role-card").forEach(c=>c.onclick=()=>{selected=c.dataset.role;render();username?.focus();});
  showFields();
 }
 function fail(msg){if(error){error.textContent=msg;error.classList.remove("hidden");}else toast(msg,"error");}
 function clearError(){error?.classList.add("hidden");}
 function doLogin(){
  clearError();
  const c=credentials[selected],u=(username?.value||"").trim(),pw=password?.value||"";
  if(!u||!pw)return fail("Enter your login name and password.");
  if(!c||u!==c.username||pw!==c.password)return fail("Invalid login name or password for the selected role. Use the demo credentials shown below the fields.");
  if(selected==="customer"){
   const n=(name?.value||"").trim(),ph=(phone?.value||"").trim(),em=(email?.value||"").trim();
   if(n.length<2||!/^[-+() 0-9]{10,16}$/.test(ph)||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em))return fail("Customer login also needs a valid name, 10–16 digit phone number and email address.");
   const state=getState(),initials=n.split(/\s+/).map(x=>x[0]).join("").slice(0,2).toUpperCase(),demo={...DEMO_USERS.customer,name:n,initials},customer={...(state.customers||[]).find(x=>x.id==="c1"),id:"c1",userId:"u-customer",name:n,initials,phone:ph,email:em,area:"Pune",active:true};
   saveState({currentUser:demo,userRole:"customer",currentRole:"customer",customers:(state.customers||[]).map(x=>x.id==="c1"?customer:x),users:(state.users||[]).map(x=>x.id==="u-customer"?{...x,name:n,initials,phone:ph,email:em}:x)});
  }else{
   const demo=DEMO_USERS[selected];
   if(!demo)return fail("Selected demo account is unavailable.");
   saveState({currentUser:{...demo},userRole:selected,currentRole:selected});
  }
  toast(`Signed in as ${ROLES.find(r=>r.id===selected)?.title||selected}.`);
  const params=new URLSearchParams(location.search),next=params.get("next");
  setTimeout(()=>{location.href=next==="booking"&&selected==="customer"?"booking.html":`dashboard.html?role=${encodeURIComponent(selected)}`;},120);
 }
 render();
 [username,password,name,phone,email].filter(Boolean).forEach(el=>el.addEventListener("input",clearError));
 btn.addEventListener("click",doLogin);
 document.querySelector("#loginForm")?.addEventListener("submit",e=>{e.preventDefault();doLogin();});
}
function initWorkerRegister(){
 const form=$("#workerRegistrationForm");if(!form)return;
 const serviceSelect=$("#primaryService"),coopSelect=$("#cooperativeId"),daysRoot=$("#workingDays"),error=$("#registrationError");
 serviceSelect.innerHTML='<option value="">Select service</option>'+SERVICES.map(s=>`<option value="${s.id}">${s.name}</option>`).join("");
 coopSelect.innerHTML='<option value="">Select cooperative</option>'+getState().cooperatives.filter(c=>c.active!==false).map(c=>`<option value="${c.id}">${c.name} — ${c.area}</option>`).join("");
 daysRoot.innerHTML=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"].map(d=>`<label><input type="checkbox" name="workingDay" value="${d}"><span>${d.slice(0,3)}</span></label>`).join("");
 form.addEventListener("submit",e=>{
  e.preventDefault();error.classList.add("hidden");
  const fd=new FormData(form),workingDays=[...form.querySelectorAll('[name="workingDay"]:checked')].map(x=>x.value),photo=form.querySelector('[name="photo"]')?.files?.[0]?.name||null;
  const data={fullName:String(fd.get("fullName")||"").trim(),photo,phone:String(fd.get("phone")||"").trim(),email:String(fd.get("email")||"").trim(),address:String(fd.get("address")||"").trim(),primaryService:String(fd.get("primaryService")||""),additionalSkills:String(fd.get("additionalSkills")||"").split(",").map(x=>x.trim()).filter(Boolean),yearsExperience:fd.get("yearsExperience"),previousExperience:String(fd.get("previousExperience")||"").trim(),serviceAreas:String(fd.get("serviceAreas")||"").split(",").map(x=>x.trim()).filter(Boolean),preferredWorkingAreas:String(fd.get("preferredWorkingAreas")||"").split(",").map(x=>x.trim()).filter(Boolean),cooperativeId:String(fd.get("cooperativeId")||""),membershipStatus:String(fd.get("membershipStatus")||""),workingDays,preferredHours:String(fd.get("preferredHours")||"").trim()};
  const valid=data.fullName&&data.phone&&data.email&&data.address&&data.primaryService&&data.cooperativeId&&data.serviceAreas.length&&data.preferredWorkingAreas.length&&data.preferredHours&&workingDays.length&&Number(data.yearsExperience)>=0;
  if(!valid){error.textContent="Please complete all required fields and select at least one working day.";error.classList.remove("hidden");return;}
  try{const w=registerWorker(data);saveState({currentUser:{id:w.userId,userId:w.userId,name:w.name,initials:w.avatar,role:"Worker",roleId:"worker",entityId:w.id,workerId:w.id},currentRole:"worker",userRole:"worker"});location.href="dashboard.html?role=worker";}catch(err){error.textContent=err.message||"Registration could not be completed.";error.classList.remove("hidden");}
 });
}

function initCommon(){phase10ValidateTranslations();phase10EnhanceAccessibility();const observer=new MutationObserver(()=>{phase10EnhanceAccessibility();});observer.observe(document.body,{childList:true,subtree:true});document.addEventListener("keydown",e=>{if(e.key==="Escape"){const m=document.querySelector(".modal:not(.hidden)");if(m){m.classList.add("hidden");const close=m.querySelector(".modal-close");close?.focus();}}});initLanguage();if($("#menuToggle"))$("#menuToggle").onclick=()=>{$("#mainNav").classList.toggle("open");$("#menuToggle").setAttribute("aria-expanded",$("#mainNav").classList.contains("open"))};if($("#logoutBtn"))$("#logoutBtn").onclick=logout}
document.addEventListener("DOMContentLoaded",()=>{initCommon();initHome();initLogin();initWorkerRegister()});

/* =========================================================
   PHASE 13 — PRESENTATION / ACCESSIBILITY ENHANCEMENTS
   No business state or workflow rules are changed here.
   ========================================================= */
function phase13AddSkipLink(){
  if(document.querySelector('.skip-link'))return;
  const target=document.querySelector('main')||document.querySelector('.dash-content');
  if(!target)return;
  if(!target.id)target.id='main-content';
  const a=document.createElement('a');
  a.className='skip-link';a.href=`#${target.id}`;a.textContent='Skip to main content';
  document.body.prepend(a);
}
function phase13CloseMobileMenus(){
  const nav=document.querySelector('#mainNav');
  const toggle=document.querySelector('#menuToggle');
  if(nav?.classList.contains('open')){nav.classList.remove('open');toggle?.setAttribute('aria-expanded','false');}
  document.querySelector('#sidebar')?.classList.remove('open');
}
function phase13ModalState(){
  const open=document.querySelector('.modal:not(.hidden)');
  document.body.classList.toggle('modal-open',!!open);
  document.querySelectorAll('.modal').forEach(m=>{
    const isOpen=!m.classList.contains('hidden');
    m.setAttribute('aria-hidden',String(!isOpen));
    if(isOpen){
      const title=m.querySelector('h1,h2,h3');
      if(title&&!title.id)title.id=`modal-title-${document.querySelectorAll('.modal').length}`;
      if(title)m.setAttribute('aria-labelledby',title.id);
    }
  });
}
function phase13FocusTrap(e){
  if(e.key!=='Tab')return;
  const modal=document.querySelector('.modal:not(.hidden)');
  if(!modal)return;
  const items=[...modal.querySelectorAll('button:not([disabled]),a[href],input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])')];
  if(!items.length)return;
  const first=items[0],last=items[items.length-1];
  if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}
  else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}
}
function phase13NavigationPolish(){
  document.addEventListener('click',e=>{
    const link=e.target.closest('#mainNav a');
    if(link)phase13CloseMobileMenus();
  });
  document.addEventListener('keydown',phase13FocusTrap);
  const observer=new MutationObserver(()=>phase13ModalState());
  document.querySelectorAll('.modal').forEach(m=>observer.observe(m,{attributes:true,attributeFilter:['class']}));
  phase13ModalState();
}
function phase13Init(){
  phase13AddSkipLink();
  phase13NavigationPolish();
}
const phase13Ready=()=>phase13Init();
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',phase13Ready,{once:true});else phase13Ready();
