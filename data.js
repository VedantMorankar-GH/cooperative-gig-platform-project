const SERVICES = [
 {id:"electrician",name:"Electrician",icon:"⚡",desc:"Wiring, fans, switches & electrical repairs"},
 {id:"plumber",name:"Plumber",icon:"🔧",desc:"Leaks, taps, pipes & bathroom repairs"},
 {id:"carpenter",name:"Carpenter",icon:"🪚",desc:"Furniture, doors, fittings & woodwork"},
 {id:"painter",name:"Painter",icon:"🎨",desc:"Walls, touch-ups & painting work"},
 {id:"cleaner",name:"Cleaner",icon:"🧹",desc:"Home and community cleaning"},
 {id:"gardener",name:"Gardener",icon:"🌿",desc:"Plants, lawns & garden maintenance"},
 {id:"driver",name:"Driver",icon:"🚗",desc:"Local driving and transport support"},
 {id:"caregiver",name:"Caregiver",icon:"🫶",desc:"Everyday care and assistance"},
 {id:"technician",name:"Technician",icon:"🛠",desc:"Appliance and technical support"},
 {id:"helper",name:"Domestic Helper",icon:"🏠",desc:"Reliable household assistance"}
];
const WORKERS = [
 {id:"w1",employeeId:"CG-W-1001",name:"Amit Patil",service:"electrician",skill:"Electrician",exp:5,rating:4.8,jobs:428,area:"Kothrud",eta:"10–15 min",coop:"Pune Electrical Workers Cooperative",avatar:"AP",online:true,serviceCoverageKm:20,reviews:[["Rajesh K.","Excellent work and very professional.","Work quality"],["Meera S.","Arrived on time and fixed the issue quickly.","Punctuality"],["Sonal P.","Clear explanation and polite behaviour.","Behaviour"]]},
 {id:"w2",employeeId:"CG-W-1002",name:"Prakash Kale",service:"electrician",skill:"Electrician",exp:7,rating:4.7,jobs:611,area:"Baner",eta:"15–20 min",coop:"Pune Electrical Workers Cooperative",avatar:"PK",online:true,serviceCoverageKm:20,reviews:[["Asha M.","Good troubleshooting and clean work.","Work quality"],["Vivek R.","Very professional.","Professionalism"]]},
 {id:"w3",employeeId:"CG-W-1003",name:"Neha Deshmukh",service:"electrician",skill:"Electrician",exp:4,rating:4.9,jobs:352,area:"Aundh",eta:"20–30 min",coop:"Pune Electrical Workers Cooperative",avatar:"ND",online:false,serviceCoverageKm:20,reviews:[["Kiran S.","Excellent and punctual.","Punctuality"],["Pooja T.","Very neat work.","Work quality"]]},
 {id:"w4",employeeId:"CG-W-1004",name:"Rahul Jadhav",service:"plumber",skill:"Plumber",exp:4,rating:4.7,jobs:390,area:"Shivajinagar",eta:"10–15 min",coop:"Pune Community Service Cooperative",avatar:"RJ",online:true,serviceCoverageKm:20,reviews:[["Anil P.","Quickly resolved the leak.","Work quality"],["Nitin V.","Good communication.","Professionalism"]]},
 {id:"w5",employeeId:"CG-W-1005",name:"Suresh More",service:"plumber",skill:"Plumber",exp:6,rating:4.6,jobs:514,area:"Viman Nagar",eta:"15–20 min",coop:"Pune Community Service Cooperative",avatar:"SM",online:true,serviceCoverageKm:20,reviews:[["Ravi K.","Reliable service.","Professionalism"]]},
 {id:"w6",employeeId:"CG-W-1006",name:"Sneha More",service:"cleaner",skill:"Cleaner",exp:3,rating:4.9,jobs:286,area:"Kalyani Nagar",eta:"10–15 min",coop:"Pune Home Services Cooperative",avatar:"SN",online:true,serviceCoverageKm:20,reviews:[["Isha D.","Very thorough cleaning.","Work quality"],["Rhea P.","Polite and punctual.","Behaviour"]]},
 {id:"w7",employeeId:"CG-W-1007",name:"Vijay Shinde",service:"carpenter",skill:"Carpenter",exp:6,rating:4.8,jobs:477,area:"Hadapsar",eta:"20–30 min",coop:"Pune Skilled Workers Cooperative",avatar:"VS",online:true,serviceCoverageKm:20,reviews:[["Amit G.","Furniture repair was excellent.","Work quality"]]},
 {id:"w8",employeeId:"CG-W-1008",name:"Rohan Pawar",service:"painter",skill:"Painter",exp:5,rating:4.7,jobs:331,area:"Wakad",eta:"20–30 min",coop:"Pune Skilled Workers Cooperative",avatar:"RP",online:true,serviceCoverageKm:20,reviews:[["Maya N.","Clean finish.","Work quality"]]},
 {id:"w9",employeeId:"CG-W-1009",name:"Madhuri Joshi",service:"gardener",skill:"Gardener",exp:4,rating:4.8,jobs:245,area:"Kharadi",eta:"15–20 min",coop:"Pune Green Workers Cooperative",avatar:"MJ",online:true,serviceCoverageKm:20,reviews:[["Dev P.","Great plant knowledge.","Professionalism"]]},
 {id:"w10",employeeId:"CG-W-1010",name:"Sameer Khan",service:"driver",skill:"Driver",exp:8,rating:4.7,jobs:705,area:"Camp",eta:"10–15 min",coop:"Pune Mobility Cooperative",avatar:"SK",online:true,serviceCoverageKm:20,reviews:[["Aarti J.","Safe and punctual.","Punctuality"]]},
 {id:"w11",employeeId:"CG-W-1011",name:"Anjali Kulkarni",service:"caregiver",skill:"Caregiver",exp:6,rating:4.9,jobs:312,area:"Deccan",eta:"15–20 min",coop:"Pune Care Workers Cooperative",avatar:"AK",online:true,serviceCoverageKm:20,reviews:[["Ritu M.","Kind and professional.","Behaviour"]]},
 {id:"w12",employeeId:"CG-W-1012",name:"Nikhil Bhosale",service:"technician",skill:"Technician",exp:5,rating:4.8,jobs:451,area:"Pimple Saudagar",eta:"20–30 min",coop:"Pune Technical Workers Cooperative",avatar:"NB",online:true,serviceCoverageKm:20,reviews:[["Omkar V.","Solved the appliance issue.","Work quality"]]},
 {id:"w13",employeeId:"CG-W-1013",name:"Kavita Pawar",service:"helper",skill:"Domestic Helper",exp:4,rating:4.8,jobs:279,area:"Wadgaon Sheri",eta:"15–20 min",coop:"Pune Home Services Cooperative",avatar:"KP",online:true,serviceCoverageKm:20,reviews:[["Sanjay B.","Reliable and respectful.","Behaviour"]]},
 {id:"w14",employeeId:"CG-W-1014",name:"Deepak Shinde",service:"electrician",skill:"Electrician",exp:6,rating:4.6,jobs:388,area:"Kothrud",eta:"15–20 min",coop:"Pune Community Service Cooperative",avatar:"DS",online:true,serviceCoverageKm:20,reviews:[["Ravi S.","Good electrical troubleshooting.","Work quality"]]},
 {id:"w15",employeeId:"CG-W-1015",name:"Snehal Joshi",service:"electrician",skill:"Electrician",exp:8,rating:4.7,jobs:540,area:"Wakad",eta:"20–30 min",coop:"Pune Skilled Workers Cooperative",avatar:"SJ",online:true,serviceCoverageKm:20,reviews:[["Nikhil K.","Professional and careful.","Professionalism"]]}
];
const ROLES = [
 {id:"customer",title:"Customer",icon:"🏠",desc:"Book and manage household services"},
 {id:"worker",title:"Worker",icon:"👷",desc:"Manage jobs, availability and earnings"},
 {id:"federationAdmin",title:"Cooperative Federation Administration",icon:"🏢",desc:"Manage federation-wide cooperative operations"},
 {id:"admin",title:"Platform Admin",icon:"🛡",desc:"Manage the digital platform"}
];
const translations = {
 en: {nav:{home:"Home",services:"Services",how:"How It Works",workers:"For Workers",cooperative:"About Cooperative",login:"Login",book:"Book a Service"},hero:{eyebrow:"Verified cooperative workforce",title:"Reliable Local Services. Powered by Cooperatives.",text:"Book trusted local workers for household and community services while supporting cooperative employment.",cta:"Book a Service",explore:"Explore Services",trust:"Fictional demo data — frontend prototype"},stats:{services:"demo services completed",workers:"verified demo workers",coops:"participating cooperatives",rating:"average demo rating"},services:{title:"Everyday help, from people in your community.",view:"Book from all services →"},how:{title:"Simple for customers. Fairer for workers.",s1:"Tell us what you need",p1:"Choose a service, describe the work and select a convenient location.",s2:"Choose a verified worker",p2:"Compare skills, experience, ratings, reviews and approximate ETA.",s3:"Inspection & estimate",p3:"The worker inspects the requirement and submits a transparent estimate.",s4:"Complete & review",p4:"Continue with the service, complete payment and leave a review."},workers:{title:"A digital front door for cooperative talent.",text:"Workers can manage requests, availability, service status, earnings, reviews and customer conversations in one place."},coop:{title:"More than a marketplace.",text:"Co-opGig is designed around verified cooperative workers, local employment, transparent allocation and role-based coordination."},cta:{title:"Ready to experience the complete service journey?",text:"Try the customer flow or open any role dashboard using the demo login.",button:"Start Booking →"}},
 mr: {nav:{home:"मुख्यपृष्ठ",services:"सेवा",how:"हे कसे काम करते",workers:"कामगारांसाठी",cooperative:"सहकारी संस्थेबद्दल",login:"लॉगिन",book:"सेवा बुक करा"},hero:{eyebrow:"सत्यापित सहकारी कामगार",title:"विश्वसनीय स्थानिक सेवा. सहकारी संस्थांच्या माध्यमातून.",text:"सहकारी रोजगाराला समर्थन देत घरगुती आणि सामुदायिक सेवांसाठी विश्वासार्ह स्थानिक कामगार बुक करा.",cta:"सेवा बुक करा",explore:"सेवा पहा",trust:"काल्पनिक डेमो डेटा — फ्रंटएंड प्रोटोटाइप"},stats:{services:"डेमो सेवा पूर्ण",workers:"सत्यापित डेमो कामगार",coops:"सहकारी संस्था",rating:"सरासरी डेमो रेटिंग"},services:{title:"तुमच्या समुदायातील लोकांकडून दैनंदिन मदत.",view:"सर्व सेवा बुक करा →"},how:{title:"ग्राहकांसाठी सोपे. कामगारांसाठी अधिक न्याय्य.",s1:"तुमची गरज सांगा",p1:"सेवा निवडा, कामाचे वर्णन करा आणि सोयीचे ठिकाण निवडा.",s2:"सत्यापित कामगार निवडा",p2:"कौशल्य, अनुभव, रेटिंग, समीक्षा आणि अंदाजे ETA यांची तुलना करा.",s3:"तपासणी आणि अंदाज",p3:"कामगार तपासणी करून पारदर्शक अंदाज सादर करतो.",s4:"सेवा पूर्ण करा आणि समीक्षा द्या",p4:"सेवा सुरू ठेवा, पेमेंट पूर्ण करा आणि समीक्षा द्या."},workers:{title:"सहकारी कौशल्यांसाठी डिजिटल व्यासपीठ.",text:"कामगार विनंत्या, उपलब्धता, सेवा स्थिती, कमाई, समीक्षा आणि ग्राहक संभाषणे व्यवस्थापित करू शकतात."},coop:{title:"फक्त मार्केटप्लेसपेक्षा अधिक.",text:"Co-opGig सत्यापित सहकारी कामगार, स्थानिक रोजगार, पारदर्शक वाटप आणि भूमिकेनुसार समन्वय यावर आधारित आहे."},cta:{title:"संपूर्ण सेवा प्रवास अनुभवण्यासाठी तयार आहात?",text:"ग्राहक प्रवाह वापरा किंवा डेमो लॉगिनद्वारे कोणतेही डॅशबोर्ड उघडा.",button:"बुकिंग सुरू करा →"}},
 hi: {nav:{home:"होम",services:"सेवाएँ",how:"यह कैसे काम करता है",workers:"कामगारों के लिए",cooperative:"सहकारी संस्था के बारे में",login:"लॉगिन",book:"सेवा बुक करें"},hero:{eyebrow:"सत्यापित सहकारी कार्यबल",title:"विश्वसनीय स्थानीय सेवाएँ। सहकारी संस्थाओं द्वारा.",text:"सहकारी रोजगार का समर्थन करते हुए घरेलू और सामुदायिक सेवाओं के लिए भरोसेमंद स्थानीय कामगार बुक करें.",cta:"सेवा बुक करें",explore:"सेवाएँ देखें",trust:"काल्पनिक डेमो डेटा — फ्रंटएंड प्रोटोटाइप"},stats:{services:"डेमो सेवाएँ पूरी",workers:"सत्यापित डेमो कामगार",coops:"सहकारी संस्थाएँ",rating:"औसत डेमो रेटिंग"},services:{title:"आपके समुदाय के लोगों से रोज़मर्रा की मदद.",view:"सभी सेवाएँ बुक करें →"},how:{title:"ग्राहकों के लिए आसान। कामगारों के लिए अधिक न्यायपूर्ण.",s1:"अपनी ज़रूरत बताएँ",p1:"सेवा चुनें, काम का विवरण दें और सुविधाजनक स्थान चुनें.",s2:"सत्यापित कामगार चुनें",p2:"कौशल, अनुभव, रेटिंग, समीक्षा और अनुमानित ETA की तुलना करें.",s3:"निरीक्षण और अनुमान",p3:"कामगार निरीक्षण करके पारदर्शी अनुमान देता है.",s4:"सेवा पूरी करें और समीक्षा दें",p4:"सेवा जारी रखें, भुगतान पूरा करें और समीक्षा दें."},workers:{title:"सहकारी प्रतिभा के लिए डिजिटल मंच.",text:"कामगार अनुरोध, उपलब्धता, सेवा स्थिति, कमाई, समीक्षा और ग्राहक बातचीत एक जगह प्रबंधित कर सकते हैं."},coop:{title:"सिर्फ एक मार्केटप्लेस से अधिक.",text:"Co-opGig सत्यापित सहकारी कामगारों, स्थानीय रोजगार, पारदर्शी आवंटन और भूमिका-आधारित समन्वय पर आधारित है."},cta:{title:"पूरी सेवा यात्रा अनुभव करने के लिए तैयार?",text:"ग्राहक प्रवाह आज़माएँ या डेमो लॉगिन से कोई भी डैशबोर्ड खोलें.",button:"बुकिंग शुरू करें →"}}
};
const COOPERATIVES = [
 {id:"coop1",name:"Pune Electrical Workers Cooperative",federationId:"fed1",area:"Pune",active:true},
 {id:"coop2",name:"Pune Community Service Cooperative",federationId:"fed1",area:"Pune",active:true},
 {id:"coop3",name:"Pune Home Services Cooperative",federationId:"fed1",area:"Pune",active:true},
 {id:"coop4",name:"Pune Skilled Workers Cooperative",federationId:"fed1",area:"Pune",active:true},
 {id:"coop5",name:"Pune Green Workers Cooperative",federationId:"fed1",area:"Pune",active:true},
 {id:"coop6",name:"Pune Mobility Cooperative",federationId:"fed1",area:"Pune",active:true},
 {id:"coop7",name:"Pune Care Workers Cooperative",federationId:"fed1",area:"Pune",active:true},
 {id:"coop8",name:"Pune Technical Workers Cooperative",federationId:"fed1",area:"Pune",active:true}
];
const FEDERATIONS = [
 {id:"fed1",name:"Pune Cooperative Services Federation",area:"Pune",active:true}
];
const CUSTOMERS = [
 {id:"c1",userId:"u-customer",name:"Omkar Malve",initials:"OM",phone:"",email:"",area:"Pune",active:true}
];
const DEMO_USERS = {
 customer:{id:"u-customer",userId:"u-customer",name:"Omkar Malve",initials:"OM",role:"Customer",roleId:"customer",entityId:"c1",customerId:"c1"},
 worker:{id:"u-worker",userId:"u-worker",name:"Amit Patil",initials:"AP",role:"Worker",roleId:"worker",entityId:"w1",workerId:"w1"},
 federationAdmin:{id:"u-federation-admin",userId:"u-federation-admin",name:"Federation Operations Desk",initials:"FD",role:"Cooperative Federation Administration",roleId:"federationAdmin",entityId:"fed1",federationId:"fed1"},
 admin:{id:"u-admin",userId:"u-admin",name:"Platform Admin",initials:"PA",role:"Platform Admin",roleId:"admin",entityId:"admin1",adminId:"admin1"}
};
const USERS = Object.values(DEMO_USERS).map(u=>({...u}));
const ADMINS = [
 {id:"admin1",userId:"u-admin",name:"Platform Admin",active:true}
];

const VERIFICATION_STATUSES = ["PENDING","TEST_SCHEDULED","TEST_ATTENDED","VERIFIED","FAILED","SUSPENDED"];
const DEFAULT_WORKER_VERIFICATION = Object.fromEntries(WORKERS.map(w=>[w.id,{
 id:`ver-${w.id}`,workerId:w.id,status:"VERIFIED",verificationDetails:{verifiedAt:"2026-08-15",method:"Demo cooperative verification"}
}]));
const DEFAULT_AVAILABILITY = Object.fromEntries(WORKERS.map(w=>[w.id,{workerId:w.id,date:null,available:!!w.online,workingDays:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],timeSlots:["09:00–10:00","10:00–11:00","11:00–12:00","12:00–13:00","13:00–14:00","14:00–15:00","15:00–16:00","16:00–17:00","17:00–18:00","18:00–19:00"]}]));

const DEFAULT_REVIEWS = WORKERS.flatMap(w=>(w.reviews||[]).map((r,i)=>({
 id:`review-${w.id}-${i+1}`,bookingId:null,customerId:null,workerId:w.id,rating:w.rating,comment:r[1],category:r[2],createdAt:"2026-08-20",status:"published"
})));
const DEFAULT_MESSAGES = [
 {id:"msg-CG-24081-1",bookingId:"CG-24081",senderId:"w1",senderRole:"worker",receiverId:"c1",message:"Hello! I’ll be ready for the appointment.",timestamp:"2026-09-05T10:02:00.000Z",read:false},
 {id:"msg-CG-24081-2",bookingId:"CG-24081",senderId:"c1",senderRole:"customer",receiverId:"w1",message:"Thank you. I have shared the requirement.",timestamp:"2026-09-05T10:04:00.000Z",read:false}
];
const DEFAULT_NOTIFICATIONS = [];
const DEFAULT_ASSIGNMENTS = [{
 id:"assign-CG-24081-w1",bookingId:"CG-24081",workerId:"w1",assignedBy:"u-federation-admin",cooperativeId:"coop1",status:"ACCEPTED",assignedAt:"2026-09-04T09:30:00.000Z",acceptedAt:"2026-09-04T09:35:00.000Z",completedAt:null
}];
const DEFAULT_ESTIMATES = [];
const DEFAULT_INVOICES = [];
const BOOKING_STATUSES={REQUESTED:"REQUESTED",ASSIGNMENT_PENDING:"ASSIGNMENT_PENDING",ASSIGNED:"ASSIGNED",ACCEPTED:"ACCEPTED",ON_THE_WAY:"ON_THE_WAY",ARRIVED:"ARRIVED",INSPECTION:"INSPECTION",ESTIMATE_PENDING:"ESTIMATE_PENDING",CUSTOMER_DECISION:"CUSTOMER_DECISION",SERVICE_IN_PROGRESS:"SERVICE_IN_PROGRESS",COMPLETED:"COMPLETED",CANCELLED:"CANCELLED"};
const BOOKING_STATUS_LABELS={REQUESTED:"Requested",ASSIGNMENT_PENDING:"Assignment pending",ASSIGNED:"Assigned",ACCEPTED:"Accepted",ON_THE_WAY:"On the way",ARRIVED:"Arrived",INSPECTION:"Inspection in progress",ESTIMATE_PENDING:"Estimate pending",CUSTOMER_DECISION:"Customer decision",SERVICE_IN_PROGRESS:"Service in progress",COMPLETED:"Completed",CANCELLED:"Cancelled"};
const ASSIGNMENT_STATUSES={PENDING:"PENDING",ASSIGNED:"ASSIGNED",ACCEPTED:"ACCEPTED",REJECTED:"REJECTED",COMPLETED:"COMPLETED",CANCELLED:"CANCELLED"};
const PAYMENT_STATUSES={PENDING:"PENDING",PAID:"PAID",FAILED:"FAILED"};
function bookingStatusLabel(status){return BOOKING_STATUS_LABELS[status]||status||"—";}
function normalizeBookingStatus(status){
 const map={"New Request":"REQUESTED","Assigned":"ASSIGNED","Accepted":"ACCEPTED","On the Way":"ON_THE_WAY","On the way":"ON_THE_WAY","Arrived":"ARRIVED","Inspection in Progress":"INSPECTION","Final Estimate Submitted":"ESTIMATE_PENDING","Customer Decision":"CUSTOMER_DECISION","Service In Progress":"SERVICE_IN_PROGRESS","Service Completed":"COMPLETED","Cancelled":"CANCELLED"};
 return BOOKING_STATUSES[status]?status:(map[status]||"REQUESTED");
}

const DEFAULT_PAYMENTS = [{id:"payment-CG-24081",bookingId:"CG-24081",amount:100,type:"inspection",status:"PAID",createdAt:"2026-09-04T09:31:00.000Z"}];
const DEFAULT_COMPLAINTS = [];
const DEFAULT_INSURANCE = Object.fromEntries(WORKERS.map(w=>[w.id,{workerId:w.id,insuranceStatus:"not_provided",provider:"",policyReference:"",coverageType:"",coverageAmount:0,startDate:null,expiryDate:null,claims:[]}]));
const DEFAULT_WELFARE = Object.fromEntries(WORKERS.map(w=>[w.id,{workerId:w.id,welfareBenefits:[],membershipStatus:"active",trainingStatus:"demo"}]))
const DEFAULT_BOOKINGS = [{
 id:"CG-24081",customerId:"c1",service:"electrician",requirement:"Electrical repair inspection",urgency:"Normal",location:"Kothrud, Pune",address:"Kothrud, Pune",coordinates:null,date:"2026-09-05",time:"10:00–11:00",status:"Accepted",selectedWorkerIds:["w1"],primaryWorkerId:"w1",cooperativeId:"coop1",federationId:"fed1",inspectionCharge:100,paymentStatus:"paid",payment:"Paid",estimate:null,invoice:null,reviewId:null,messages:["msg-CG-24081-1","msg-CG-24081-2"],createdAt:"2026-09-04T09:30:00.000Z",updatedAt:"2026-09-04T09:35:00.000Z",customer:"Omkar Malve",eta:"10–15 min"
}];

function deepClone(value){return value===undefined?undefined:JSON.parse(JSON.stringify(value));}
function seedStateV2Base(){
 const workerEntities=WORKERS.map(w=>{const copy={...w};delete copy.reviews;return {...copy,employeeId:copy.employeeId||null,userId:w.id==="w1"?"u-worker":`u-${w.id}`,photo:null,phone:"",email:"",skills:[w.skill],experience:w.exp,serviceAreas:[w.area],cooperativeId:WORKERS.find(x=>x.id===w.id)?.coop?COOPERATIVES.find(c=>c.name===w.coop)?.id:null,availability:DEFAULT_AVAILABILITY[w.id],verificationStatus:"VERIFIED",verificationDetails:DEFAULT_WORKER_VERIFICATION[w.id].verificationDetails,insuranceStatus:"not_provided",insuranceDetails:DEFAULT_INSURANCE[w.id],welfareDetails:DEFAULT_WELFARE[w.id],active:true,suspended:false};});
 const state={
  schemaVersion:2,currentUser:null,currentRole:null,language:"en",
  users:USERS,customers:CUSTOMERS,workers:workerEntities,cooperatives:COOPERATIVES,federations:FEDERATIONS,admins:ADMINS,
  bookings:deepClone(DEFAULT_BOOKINGS),assignments:deepClone(DEFAULT_ASSIGNMENTS),availability:deepClone(DEFAULT_AVAILABILITY),verification:deepClone(DEFAULT_WORKER_VERIFICATION),verificationAppointments:{},
  reviews:deepClone(DEFAULT_REVIEWS),messages:deepClone(DEFAULT_MESSAGES),notifications:deepClone(DEFAULT_NOTIFICATIONS),estimates:deepClone(DEFAULT_ESTIMATES),invoices:deepClone(DEFAULT_INVOICES),payments:deepClone(DEFAULT_PAYMENTS),complaints:deepClone(DEFAULT_COMPLAINTS),insurance:deepClone(DEFAULT_INSURANCE),welfare:deepClone(DEFAULT_WELFARE),activeBookingId:null
 };
 return state;
}
function normalizeBooking(b){
 const selectedWorkerIds=Array.isArray(b.selectedWorkerIds)?b.selectedWorkerIds.filter(Boolean):Array.isArray(b.workerIds)?b.workerIds.filter(Boolean):b.workerId?[b.workerId]:[];
 const primaryWorkerId=b.primaryWorkerId||selectedWorkerIds[0]||null;
 const customerId=b.customerId||((b.customer||"").toLowerCase()==="omkar malve"?"c1":null);
 const worker=WORKERS.find(w=>w.id===primaryWorkerId);
 const cooperativeId=b.cooperativeId||COOPERATIVES.find(c=>c.name===worker?.coop)?.id||null;
 const federationId=b.federationId||COOPERATIVES.find(c=>c.id===cooperativeId)?.federationId||null;
 const now=new Date().toISOString();
 const normalized={...b,selectedWorkerIds,primaryWorkerId,customerId,cooperativeId,federationId,status:normalizeBookingStatus(b.status),paymentStatus:(b.paymentStatus||((b.payment||"").toLowerCase()==="paid"?"PAID":"PENDING")).toUpperCase(),messages:Array.isArray(b.messages)?b.messages:[],coordinates:b.coordinates||null,createdAt:b.createdAt||now,updatedAt:b.updatedAt||b.createdAt||now};
 delete normalized.workerId;
 delete normalized.workerIds;
 return normalized;
}
function saveState(patch){
 const current=getState();
 const next={...current,...patch};
 if(Object.prototype.hasOwnProperty.call(patch,"userRole"))next.currentRole=patch.userRole;
 if(Object.prototype.hasOwnProperty.call(patch,"currentRole"))next.userRole=patch.currentRole;
 next.bookings=(next.bookings||[]).map(normalizeBooking);
 try{localStorage.setItem("coopgig_state",JSON.stringify(next));}catch(e){console.error("Co-opGig state save failed",e)}
 return next;
}
function updateState(updater){
 const current=getState();
 const next=typeof updater==="function"?updater(deepClone(current)):{...current,...updater};
 return saveState(next);
}
function resetDemoState(){
 const state=seedState();
 try{localStorage.setItem("coopgig_state",JSON.stringify(state));}catch(e){console.error("Co-opGig demo reset failed",e)}
 return state;
}
function getBookings(){return getState().bookings.map(normalizeBooking);}
function saveBookings(bookings){return saveState({bookings:bookings.map(normalizeBooking)});}
function currentUser(){
 const s=getState();
 const u=s.currentUser;
 if(!u)return null;
 const role=s.currentRole||s.userRole||u.roleId||null;
 const roleKey=ROLES.some(r=>r.id===role)?role:null;
 if(roleKey && (!u.roleId||!u.entityId)){
  const demo=DEMO_USERS[roleKey]||DEMO_USERS.federationAdmin;
  if(demo && demo.id===u.id)return {...demo,...u,roleId:roleKey,entityId:u.entityId||demo.entityId};
 }
 return u;
}
function currentRole(){const s=getState(),valid=ROLES.map(r=>r.id);const role=s.currentRole||s.userRole;return s.currentUser&&valid.includes(role)?role:null;}
function getUserById(id){return getState().users.find(u=>u.id===id||u.userId===id)||null;}
function currentEntityId(roleId=currentRole()){
 const u=currentUser();
 if(!u)return null;
 const map={customer:"customerId",worker:"workerId",federationAdmin:"federationId",admin:"adminId"};
 return u[map[roleId]]||u.entityId||null;
}
function currentWorker(){const id=currentEntityId("worker");if(!id)return null;return getState().workers.find(w=>w.id===id)||null;}
function currentCustomer(){const id=currentEntityId("customer");if(!id)return null;return getState().customers.find(c=>c.id===id)||null;}
function currentFederation(){const id=currentEntityId("federationAdmin");if(!id)return null;return getState().federations.find(f=>f.id===id)||null;}
function currentFederationAdmin(){const u=currentUser(),id=currentEntityId("federationAdmin");if(!u||currentRole()!=="federationAdmin"||!id)return null;return {id:u.id,userId:u.userId,name:u.name,initials:u.initials,federationId:id,roleId:"federationAdmin"};}
function currentAdmin(){const id=currentEntityId("admin");if(!id)return null;return getState().admins.find(a=>a.id===id)||null;}
function getWorkerById(id){return getState().workers.find(w=>w.id===id)||null;}
function getCooperativeById(id){return getState().cooperatives.find(c=>c.id===id)||null;}
function getFederationById(id){return getState().federations.find(f=>f.id===id)||null;}
function getReviewsForWorker(workerId){return getState().reviews.filter(r=>r.workerId===workerId&&r.status!=="hidden");}
function getMessagesForBooking(bookingId){return getState().messages.filter(m=>m.bookingId===bookingId);}
function getAssignmentsForBooking(bookingId){return getState().assignments.filter(a=>a.bookingId===bookingId);}
function getBookingsForWorker(workerId){return getBookings().filter(b=>getAssignmentsForBooking(b.id).some(a=>a.workerId===workerId&&![ASSIGNMENT_STATUSES.REJECTED,ASSIGNMENT_STATUSES.CANCELLED].includes(a.status)));}
function getBookingsForCustomer(customerId){return getBookings().filter(b=>b.customerId===customerId);}
function getBookingsForCooperative(cooperativeId){return getBookings().filter(b=>b.cooperativeId===cooperativeId);}
function getBookingsForFederation(federationId){return getBookings().filter(b=>b.federationId===federationId);}
function logout(){saveState({currentUser:null,currentRole:null,userRole:null,activeBookingId:null});location.href="index.html";}


/* ================= PHASE 4: WORKER REGISTRATION + OFFLINE VERIFICATION ================= */
const VERIFICATION_CENTERS = [
 {id:"vc-pune-central",name:"Pune Central Skill Verification Centre",address:"Shivajinagar, Pune",supportedSkills:SERVICES.map(s=>s.id)},
 {id:"vc-pune-coop",name:"Pune Cooperative Training Centre",address:"Kothrud, Pune",supportedSkills:["electrician","plumber","carpenter","painter","cleaner","helper","technician"]},
 {id:"vc-pc-skill",name:"Pimpri-Chinchwad Skill Centre",address:"Pimpri, Pune",supportedSkills:["electrician","plumber","carpenter","painter","technician","driver"]},
 {id:"vc-hadapsar",name:"Hadapsar Cooperative Verification Centre",address:"Hadapsar, Pune",supportedSkills:["cleaner","gardener","driver","caregiver","helper","technician"]}
];
const VERIFICATION_TIME_SLOTS=["09:00 AM – 10:00 AM","10:30 AM – 11:30 AM","12:00 PM – 01:00 PM","02:00 PM – 03:00 PM","03:30 PM – 04:30 PM"];
function verificationFutureDates(days=10){
 const out=[]; const base=new Date(); base.setHours(12,0,0,0);
 for(let i=1;i<=days*2 && out.length<days;i++){const d=new Date(base);d.setDate(base.getDate()+i);if(d.getDay()===0)continue;out.push(d.toISOString().slice(0,10));}
 return out;
}
const VERIFICATION_DATES=verificationFutureDates(8);
function verificationAppointmentList(state){
 const v=state?.verificationAppointments;
 return Array.isArray(v)?v:Object.values(v||{});
}
function normalizeVerificationState(state){
 state.verificationAppointments=Array.isArray(state.verificationAppointments)?Object.fromEntries(state.verificationAppointments.map(a=>[a.id,a])):(state.verificationAppointments||{});
 state.verification=state.verification&&typeof state.verification==="object"&&!Array.isArray(state.verification)?state.verification:{};
 state.workers=(state.workers||[]).map(w=>{
  const copy={...w};
  copy.verificationStatus=VERIFICATION_STATUSES.includes(copy.verificationStatus)?copy.verificationStatus:"VERIFIED";
  copy.verificationDetails=copy.verificationDetails||{};
  return copy;
 });
 for(const w of state.workers){
  if(!state.verification[w.id])state.verification[w.id]={id:`ver-${w.id}`,workerId:w.id,status:w.verificationStatus,verificationDetails:deepClone(w.verificationDetails||{})};
  else {state.verification[w.id].status=w.verificationStatus;state.verification[w.id].verificationDetails=deepClone(w.verificationDetails||{});}
 }
 return state;
}
function seedPhase4State(state){
 state.schemaVersion=3;
 state.verificationAppointments={};
 state.verificationCenters=deepClone(VERIFICATION_CENTERS);
 state.verificationTimeSlots=[...VERIFICATION_TIME_SLOTS];
 state.verificationDates=[...VERIFICATION_DATES];
 return normalizeVerificationState(state);
}
function migrateStateV3(existing){
 const base=seedPhase4State(seedStateV2Base());
 const incoming=existing&&typeof existing==="object"?existing:{};
 const merged={...base,...incoming,schemaVersion:3};
 merged.currentRole=incoming.currentRole||incoming.userRole||incoming.currentUser?.roleId||null;
 if(!ROLES.some(r=>r.id===merged.currentRole))merged.currentRole="federationAdmin";
 merged.userRole=merged.currentRole;
 const incomingUser=incoming.currentUser||null;
 const demoUser=merged.currentRole&&DEMO_USERS[merged.currentRole]?DEMO_USERS[merged.currentRole]:null;
 merged.currentUser=incomingUser?(demoUser?{...demoUser,...incomingUser,roleId:merged.currentRole,entityId:incomingUser.entityId||demoUser.entityId}:incomingUser):null;
 merged.bookings=(Array.isArray(incoming.bookings)?incoming.bookings:base.bookings).map(normalizeBooking);
 merged.users=Array.isArray(incoming.users)&&incoming.users.length?incoming.users:base.users;
 merged.customers=Array.isArray(incoming.customers)&&incoming.customers.length?incoming.customers:base.customers;
 merged.workers=(Array.isArray(incoming.workers)&&incoming.workers.length?incoming.workers:base.workers).map(w=>{const copy={...w};if(!copy.userId)copy.userId=copy.id==="w1"?"u-worker":`u-${copy.id}`;if(!copy.skills)copy.skills=copy.skill?[copy.skill]:[];if(!copy.experience)copy.experience=copy.exp||0;if(!copy.serviceAreas)copy.serviceAreas=copy.area?[copy.area]:[];if(!copy.cooperativeId)copy.cooperativeId=COOPERATIVES.find(c=>c.name===copy.coop)?.id||null;if(!copy.verificationStatus)copy.verificationStatus="VERIFIED";if(!copy.employeeId&&copy.verificationStatus==="VERIFIED"){const n=Number(String(copy.id||"").replace(/\D/g,"")||0);copy.employeeId=`CG-W-${1000+(Number.isFinite(n)&&n?n:1)}`;}copy.verificationDetails=copy.verificationDetails||{};return copy;});
 merged.cooperatives=Array.isArray(incoming.cooperatives)&&incoming.cooperatives.length?incoming.cooperatives:base.cooperatives;
 merged.federations=Array.isArray(incoming.federations)&&incoming.federations.length?incoming.federations:base.federations;
 merged.admins=Array.isArray(incoming.admins)&&incoming.admins.length?incoming.admins:base.admins;
 for(const key of ["assignments","reviews","messages","notifications","estimates","invoices","payments","complaints"]){if(!Array.isArray(merged[key]))merged[key]=deepClone(base[key]);}
 if(!merged.availability||typeof merged.availability!=="object"||Array.isArray(merged.availability))merged.availability=deepClone(base.availability);
 if(!merged.insurance||typeof merged.insurance!=="object"||Array.isArray(merged.insurance))merged.insurance=deepClone(base.insurance);
 if(!merged.welfare||typeof merged.welfare!=="object"||Array.isArray(merged.welfare))merged.welfare=deepClone(base.welfare);
 merged.verificationCenters=Array.isArray(incoming.verificationCenters)&&incoming.verificationCenters.length?incoming.verificationCenters:deepClone(VERIFICATION_CENTERS);
 merged.verificationTimeSlots=Array.isArray(incoming.verificationTimeSlots)&&incoming.verificationTimeSlots.length?incoming.verificationTimeSlots:[...VERIFICATION_TIME_SLOTS];
 merged.verificationDates=Array.isArray(incoming.verificationDates)&&incoming.verificationDates.length?incoming.verificationDates:[...VERIFICATION_DATES];
 merged.verificationAppointments=incoming.verificationAppointments&&typeof incoming.verificationAppointments==="object"&&!Array.isArray(incoming.verificationAppointments)?incoming.verificationAppointments:{};
 merged.verification=incoming.verification&&typeof incoming.verification==="object"&&!Array.isArray(incoming.verification)?incoming.verification:{};
 if(incoming.bookingDraft&&typeof incoming.bookingDraft==="object")merged.bookingDraft=incoming.bookingDraft;
 merged.activeBookingId=incoming.activeBookingId||null;
 return normalizeVerificationState(merged);
}
/* Preserve the earlier phase seed implementation under a private base name. */
function seedState(){return seedPhase4State(seedStateV2Base());}
function migrateState(existing){return migrateStateV3(existing);}
function getState(){
 try{
  const raw=localStorage.getItem("coopgig_state");
  const parsed=raw?JSON.parse(raw):null;
  const state=migrateState(parsed);
  if(!raw || parsed?.schemaVersion!==7 || !Array.isArray(parsed?.users) || !Array.isArray(parsed?.bookings) || !Array.isArray(parsed?.workers) || !parsed?.insurance || !parsed?.welfare || !Array.isArray(parsed?.claims) || !Array.isArray(parsed?.assistanceRequests) || !Array.isArray(parsed?.auditLog))localStorage.setItem("coopgig_state",JSON.stringify(state));
  return state;
 }catch(e){const state=seedState();try{localStorage.setItem("coopgig_state",JSON.stringify(state));}catch(_){ }return state;}
}
function workerVerification(workerId){const state=getState(),w=state.workers.find(x=>x.id===workerId);return w?{status:w.verificationStatus,details:deepClone(w.verificationDetails||{}),appointment:verificationAppointmentList(state).find(a=>a.workerId===workerId&&a.status!=="CANCELLED")||null}:null;}
function isVerifiedWorker(workerId){const w=getWorkerById(workerId);return !!w&&w.verificationStatus==="VERIFIED"&&!w.suspended&&w.active!==false;}
function verificationEligibilityReason(workerId){const w=getWorkerById(workerId);if(!w)return "Worker not found.";if(w.verificationStatus==="PENDING")return "Not eligible — skill verification pending.";if(["TEST_SCHEDULED","TEST_ATTENDED","FAILED"].includes(w.verificationStatus))return "Not eligible — offline skill verification not passed.";if(w.verificationStatus==="SUSPENDED")return "Not eligible — worker is suspended.";return "Eligible for verified-worker matching.";}
function getAvailableVerificationSlots(centerId,date,workerId=null){const state=getState(),center=state.verificationCenters.find(c=>c.id===centerId);if(!center||!date)return [];const skill=getWorkerById(workerId)?.service; if(skill&&!center.supportedSkills.includes(skill))return [];const taken=verificationAppointmentList(state).filter(a=>a.centerId===centerId&&a.date===date&&a.status==="SCHEDULED"&&a.workerId!==workerId).map(a=>a.timeSlot);return (state.verificationTimeSlots||VERIFICATION_TIME_SLOTS).filter(slot=>!taken.includes(slot));}
function registerWorker(data){
 const state=getState();
 const id=`w-${Date.now()}-${state.workers.length+1}`,userId=`u-${id}`;
 const service=SERVICES.find(s=>s.id===data.primaryService);
 const coop=state.cooperatives.find(c=>c.id===data.cooperativeId);
 if(!service||!coop)throw new Error("Select a valid service and cooperative.");
 const now=new Date().toISOString();
 const worker={id,userId,employeeId:null,name:data.fullName,avatar:(data.fullName||"W").split(/\s+/).map(x=>x[0]).join("").slice(0,2).toUpperCase(),photo:data.photo||null,phone:data.phone,email:data.email,address:data.address,service:data.primaryService,skill:service.name,skills:[service.name,...(data.additionalSkills||[])],exp:Number(data.yearsExperience||0),experience:Number(data.yearsExperience||0),previousExperience:data.previousExperience,serviceAreas:data.serviceAreas,preferredWorkingAreas:data.preferredWorkingAreas,cooperativeId:coop.id,coop:coop.name,cooperativeMembershipStatus:data.membershipStatus,availability:{workingDays:data.workingDays,preferredHours:data.preferredHours,online:false},rating:0,jobs:0,area:data.serviceAreas[0]||coop.area||"Pune",eta:"Demo",online:false,verificationStatus:"PENDING",verificationDetails:{},insuranceStatus:"not_provided",insuranceDetails:{},welfareDetails:{},active:true,suspended:false,createdAt:now,updatedAt:now};
 state.workers.push(worker);
 state.users.push({id:userId,userId,name:worker.name,initials:worker.avatar,role:"Worker",roleId:"worker",entityId:id,workerId:id});
 state.availability[id]={workerId:id,workingDays:data.workingDays,preferredHours:data.preferredHours,available:false,updatedAt:now};
 state.verification[id]={id:`ver-${id}`,workerId:id,status:"PENDING",verificationDetails:{}};
 state.notifications.push({id:`notif-${Date.now()}`,userId,type:"registration",message:"Worker registration completed. Your skill verification status is Pending.",createdAt:now,read:false});
 saveState(state);return worker;
}
function updateWorkerVerification(workerId,status,details={}){
 const state=getState(),w=state.workers.find(x=>x.id===workerId);if(!w||!VERIFICATION_STATUSES.includes(status))return null;const now=new Date().toISOString();if(status==="VERIFIED"&&!w.employeeId){const nums=state.workers.map(x=>Number(String(x.employeeId||"").replace(/\D/g,"")||0)).filter(Number.isFinite);w.employeeId=`CG-W-${Math.max(1000,...nums)+1}`;}w.verificationStatus=status;w.verificationDetails={...(w.verificationDetails||{}),...details};w.updatedAt=now;state.verification[workerId]={id:state.verification[workerId]?.id||`ver-${workerId}`,workerId,status,verificationDetails:deepClone(w.verificationDetails)};saveState(state);return w;
}



/* ================= PHASE 6: EXPLAINABLE RULE-BASED WORKER MATCHING ================= */
const MATCH_WEIGHTS={skill:0.30,verification:0.20,availability:0.15,eta:0.15,rating:0.08,experience:0.05,workload:0.05,capacity:0.02};
const SERVICE_AREA_COORDS={
 Kothrud:[18.5074,73.8077],Baner:[18.559,73.7868],Aundh:[18.5679,73.9143],Shivajinagar:[18.5308,73.8475],
 VimanNagar:[18.5679,73.9143],KalyaniNagar:[18.548,73.902],Hadapsar:[18.4966,73.9419],Wakad:[18.5975,73.7898],
 Kharadi:[18.5511,73.9348],Camp:[18.5204,73.8567],Deccan:[18.5167,73.8419],PimpleSaudagar:[18.5987,73.7975],WadgaonSheri:[18.5517,73.9131],Pune:[18.5204,73.8567]
};
const MATCH_STATUS_BLOCKED=new Set(["PENDING","TEST_SCHEDULED","TEST_ATTENDED","FAILED","SUSPENDED"]);
function normalizeAreaName(value){return String(value||"").toLowerCase().replace(/[^a-z0-9]/g,"");}
function areaCoordinates(area){const key=Object.keys(SERVICE_AREA_COORDS).find(k=>normalizeAreaName(k)===normalizeAreaName(area));return key?SERVICE_AREA_COORDS[key]:null;}
function haversineDistanceKm(a,b){if(!a||!b)return null;const R=6371,rad=Math.PI/180,dLat=(b.lat-a.lat)*rad,dLon=(b.lng-a.lng)*rad,lat1=a.lat*rad,lat2=b.lat*rad;const x=Math.sin(dLat/2)**2+Math.cos(lat1)*Math.cos(lat2)*Math.sin(dLon/2)**2;return R*2*Math.atan2(Math.sqrt(x),Math.sqrt(1-x));}
function bookingCoordinates(booking){if(booking?.coordinates&&Number.isFinite(Number(booking.coordinates.lat))&&Number.isFinite(Number(booking.coordinates.lng)))return {lat:Number(booking.coordinates.lat),lng:Number(booking.coordinates.lng)};const text=String(booking?.location||booking?.address||"");const key=Object.keys(SERVICE_AREA_COORDS).find(k=>text.toLowerCase().includes(k.toLowerCase()));const c=key?SERVICE_AREA_COORDS[key]:SERVICE_AREA_COORDS.Pune;return {lat:c[0],lng:c[1]};}
function nearestServiceArea(coords){let best={area:"Pune",distanceKm:Infinity};for(const [area,c] of Object.entries(SERVICE_AREA_COORDS)){const d=haversineDistanceKm(coords,{lat:c[0],lng:c[1]});if(d<best.distanceKm)best={area,distanceKm:d};}return best;}
function demoEta(distanceKm){if(distanceKm===null)return {minutes:30,label:"30–40 min"};if(distanceKm<=2)return {minutes:12,label:"10–15 min"};if(distanceKm<=5)return {minutes:20,label:"15–25 min"};if(distanceKm<=10)return {minutes:32,label:"25–40 min"};return {minutes:48,label:"40+ min"};}
function workerAreaNames(worker){return [...new Set([...(worker?.serviceAreas||[]),worker?.area].filter(Boolean))];}
function workerServesBookingArea(worker,booking){const coords=bookingCoordinates(booking),nearest=nearestServiceArea(coords),areas=workerAreaNames(worker);if(!areas.length)return {eligible:false,matchedArea:null,distanceToAreaKm:null,nearestArea:nearest.area};const exact=areas.find(a=>normalizeAreaName(a)===normalizeAreaName(nearest.area));if(exact)return {eligible:true,matchedArea:exact,distanceToAreaKm:nearest.distanceKm,nearestArea:nearest.area};let best=Infinity,matched=null;for(const area of areas){const c=areaCoordinates(area);if(!c)continue;const d=haversineDistanceKm(coords,{lat:c[0],lng:c[1]});if(d<best){best=d;matched=area;}}const coverageKm=Number(worker?.serviceCoverageKm??8);return {eligible:best<=coverageKm,matchedArea:best<=coverageKm?matched:null,distanceToAreaKm:Number.isFinite(best)?best:null,nearestArea:nearest.area,coverageKm};}
function workerAvailabilityForBooking(worker,booking,state=getState()){
 const a=state.availability?.[worker.id]||worker.availability||{};
 if(a.date&&booking.date&&a.date===booking.date){if(a.available===false)return {available:false,reason:"Unavailable on requested date."};if(Array.isArray(a.timeSlots)&&booking.time&&!a.timeSlots.includes(booking.time))return {available:false,reason:"Not available at requested time."};}
 else if(a.workingDays&&booking.date){const day=new Date(`${booking.date}T12:00:00`).toLocaleDateString("en-US",{weekday:"short"});if(Array.isArray(a.workingDays)&&a.workingDays.length&&!a.workingDays.some(d=>String(d).toLowerCase().startsWith(day.toLowerCase())))return {available:false,reason:"Not scheduled to work on requested day."};}
 else if(a.available===false)return {available:false,reason:"Currently unavailable."};
 const activeStatuses=new Set([BOOKING_STATUSES.ASSIGNED,BOOKING_STATUSES.ACCEPTED,BOOKING_STATUSES.ON_THE_WAY,BOOKING_STATUSES.ARRIVED,BOOKING_STATUSES.INSPECTION,BOOKING_STATUSES.ESTIMATE_PENDING,BOOKING_STATUSES.CUSTOMER_DECISION,BOOKING_STATUSES.SERVICE_IN_PROGRESS]);
 const workload=(state.assignments||[]).filter(x=>x.workerId===worker.id&&!['REJECTED','CANCELLED','COMPLETED'].includes(x.status)&&state.bookings.some(b=>b.id===x.bookingId&&activeStatuses.has(b.status)&&b.date===booking.date&&b.time===booking.time)).length;
 if(workload>0)return {available:false,reason:"Already assigned to another job at this time.",conflictingJobs:workload};
 return {available:true,reason:"Available at requested time.",conflictingJobs:0};
}
function workerWorkload(workerId,state=getState()){const activeStatuses=new Set([BOOKING_STATUSES.ASSIGNED,BOOKING_STATUSES.ACCEPTED,BOOKING_STATUSES.ON_THE_WAY,BOOKING_STATUSES.ARRIVED,BOOKING_STATUSES.INSPECTION,BOOKING_STATUSES.ESTIMATE_PENDING,BOOKING_STATUSES.CUSTOMER_DECISION,BOOKING_STATUSES.SERVICE_IN_PROGRESS]);return (state.assignments||[]).filter(a=>a.workerId===workerId&&!['REJECTED','CANCELLED','COMPLETED'].includes(a.status)&&state.bookings.some(b=>b.id===a.bookingId&&activeStatuses.has(b.status))).length;}
function cooperativeCapacity(cooperativeId,state=getState()){
 const workers=(state.workers||[]).filter(w=>w.cooperativeId===cooperativeId),totalWorkers=workers.length,availableWorkers=workers.filter(w=>w.active!==false&&!w.suspended&&w.verificationStatus==='VERIFIED'&&w.online!==false).length,activeJobs=(state.assignments||[]).filter(a=>a.cooperativeId===cooperativeId&&!['REJECTED','CANCELLED','COMPLETED'].includes(a.status)).length;const ratio=totalWorkers?Math.max(0,(availableWorkers-activeJobs)/totalWorkers):0;return {totalWorkers,availableWorkers,activeJobs,capacityStatus:ratio>=0.5?'AVAILABLE':ratio>0?'LIMITED':'FULL',score:Math.max(0,Math.min(1,ratio*2))};}
function workerVerifiedSkillMatch(worker,booking){const required=normalizeAreaName(SERVICES.find(s=>s.id===booking.service)?.name||booking.service);const verified=[...(worker.verificationDetails?.verifiedSkills||[])].map(normalizeAreaName);const skills=[...(worker.skills||[]),worker.skill].filter(Boolean).map(normalizeAreaName);const exact=skills.some(s=>s===required)||normalizeAreaName(worker.service)===normalizeAreaName(booking.service);return {matched:exact&&(!verified.length||verified.some(s=>s===required)||normalizeAreaName(worker.service)===normalizeAreaName(booking.service)),requiredSkill:SERVICES.find(s=>s.id===booking.service)?.name||booking.service};}
function calculateMatchScore(worker,booking,state=getState()){
 const verification=worker.verificationStatus==='VERIFIED'&&!worker.suspended&&worker.active!==false;
 const skill=workerVerifiedSkillMatch(worker,booking),area=workerServesBookingArea(worker,booking),availability=workerAvailabilityForBooking(worker,booking,state),coords=bookingCoordinates(booking),workerCoord=areaCoordinates(worker.area||worker.serviceAreas?.[0]||'Pune')||SERVICE_AREA_COORDS.Pune,distanceKm=haversineDistanceKm(coords,{lat:workerCoord[0],lng:workerCoord[1]}),eta=demoEta(distanceKm),rating=Math.max(0,Math.min(1,Number(worker.rating||0)/5)),experience=Math.max(0,Math.min(1,Number(worker.experience??worker.exp??0)/10)),workload=workerWorkload(worker.id,state),workloadScore=workload===0?1:workload===1?.75:workload===2?.5:0,capacity=cooperativeCapacity(worker.cooperativeId,state),etaScore=distanceKm===null?.5:Math.max(0,Math.min(1,1-distanceKm/15));
 const eligible=skill.matched&&verification&&availability.available&&area.eligible;
 const score=eligible?100*(skill.matched?MATCH_WEIGHTS.skill:0+MATCH_WEIGHTS.verification)+(verification?100*MATCH_WEIGHTS.verification:0)+(availability.available?100*MATCH_WEIGHTS.availability:0)+(area.eligible?100*MATCH_WEIGHTS.eta*etaScore:0)+(100*MATCH_WEIGHTS.rating*rating)+(100*MATCH_WEIGHTS.experience*experience)+(100*MATCH_WEIGHTS.workload*workloadScore)+(100*MATCH_WEIGHTS.capacity*capacity.score):0;
 const explanation=[skill.matched?`Required skill verified`:`Skill mismatch — requires ${skill.requiredSkill}`,verification?`Verification passed`:`${verificationEligibilityReason(worker.id)}`,availability.available?`Available at requested time`:`${availability.reason}`,area.eligible?`Serves ${area.matchedArea||area.nearestArea}`:`Outside configured service area`,`Estimated ETA: ${eta.label}`,`Rating: ${Number(worker.rating||0).toFixed(1)}/5`,`${Number(worker.experience??worker.exp??0)} years experience`,workload===0?'Low current workload':`${workload} active job${workload>1?'s':''}`,`Cooperative capacity: ${capacity.capacityStatus.toLowerCase()}`];
 return {workerId:worker.id,eligible,score:Number(score.toFixed(1)),distanceKm:distanceKm===null?null:Number(distanceKm.toFixed(2)),eta,skillScore:skill.matched?1:0,verificationScore:verification?1:0,availabilityScore:availability.available?1:0,areaScore:area.eligible?1:0,ratingScore:rating,experienceScore:experience,workloadScore,capacityScore:capacity.score,workload,capacity,area,availability,explanation};
}
function findEligibleWorkers(booking){const state=getState();return state.workers.map(w=>calculateMatchScore(w,booking,state)).filter(r=>r.eligible).sort((a,b)=>b.score-a.score).map(r=>({...r,worker:getWorkerById(r.workerId)}));}
function getWorkerMatchResult(workerId,booking){const state=getState(),w=state.workers.find(x=>x.id===workerId);return w?calculateMatchScore(w,booking,state):null;}
function rankWorkers(workers){return [...workers].sort((a,b)=>(b.score||0)-(a.score||0));}
function getMatchExplanation(worker,booking){return calculateMatchScore(worker,booking).explanation;}
function getWorkerEligibilityResult(worker,booking){return calculateMatchScore(worker,booking);}

/* ================= PHASE 5: WORKER INSURANCE & WELFARE ================= */
const INSURANCE_STATUSES=["ACTIVE","PENDING","EXPIRED","NOT_ENROLLED"];
const CLAIM_STATUSES=["SUBMITTED","UNDER_REVIEW","APPROVED","REJECTED","SETTLED"];
const DEMO_INSURANCE_PROFILES={
 w1:{insuranceStatus:"ACTIVE",provider:"Cooperative Worker Welfare Insurance",policyReference:"CG-INS-••••4821",coverageType:"Accident + Work-related Injury",coverageAmount:500000,startDate:"2026-04-01",expiryDate:"2027-03-31",renewalStatus:"Renewal due before expiry",lastUpdated:"2026-09-01",coverage:{accident:true,workAccident:true,hospitalization:true,temporaryDisability:true,permanentDisability:true,other:true}},
 w2:{insuranceStatus:"PENDING",provider:"Cooperative Worker Welfare Insurance",policyReference:"CG-INS-••••1934",coverageType:"Accident + Work-related Injury",coverageAmount:500000,startDate:"2026-08-15",expiryDate:"2027-08-14",renewalStatus:"Processing",lastUpdated:"2026-09-03",coverage:{accident:true,workAccident:true,hospitalization:false,temporaryDisability:false,permanentDisability:false,other:true}},
 w3:{insuranceStatus:"NOT_ENROLLED",provider:"",policyReference:"",coverageType:"",coverageAmount:0,startDate:null,expiryDate:null,renewalStatus:"Enrollment information available",lastUpdated:"2026-09-01",coverage:{accident:false,workAccident:false,hospitalization:false,temporaryDisability:false,permanentDisability:false,other:false}},
 w4:{insuranceStatus:"EXPIRED",provider:"Cooperative Worker Welfare Insurance",policyReference:"CG-INS-••••7742",coverageType:"Accident + Work-related Injury",coverageAmount:300000,startDate:"2025-04-01",expiryDate:"2026-03-31",renewalStatus:"Demo renewal information only",lastUpdated:"2026-04-01",coverage:{accident:true,workAccident:true,hospitalization:true,temporaryDisability:false,permanentDisability:false,other:false}}
};
const DEMO_CLAIMS={
 w1:[{id:"CG-CLM-1001",workerId:"w1",claimType:"Work-related accident",incidentDate:"2026-08-12",description:"Demo claim for a minor work-related injury.",amount:18000,status:"UNDER_REVIEW",createdAt:"2026-08-13T10:30:00.000Z",updatedAt:"2026-08-20T09:00:00.000Z"}],
 w2:[{id:"CG-CLM-1002",workerId:"w2",claimType:"Accidental injury",incidentDate:"2026-08-28",description:"Demo claim awaiting initial review.",amount:7500,status:"SUBMITTED",createdAt:"2026-08-29T11:00:00.000Z",updatedAt:"2026-08-29T11:00:00.000Z"}]
};
const DEMO_WELFARE_PROFILES={
 w1:{membershipStatus:"ACTIVE",membershipId:"CW-••••271",joiningDate:"2024-06-15",benefits:[{id:"wb1",name:"Cooperative membership benefits",status:"ENROLLED"},{id:"wb2",name:"Safety training",status:"COMPLETED"},{id:"wb3",name:"Skill development programs",status:"AVAILABLE"},{id:"wb4",name:"Emergency assistance",status:"ELIGIBLE"}],training:{completed:["Workplace safety orientation"],available:["Advanced electrical safety"],upcoming:["Electrical fault diagnostics"]}},
 w2:{membershipStatus:"ACTIVE",membershipId:"CW-••••514",joiningDate:"2023-09-10",benefits:[{id:"wb1",name:"Cooperative membership benefits",status:"ENROLLED"},{id:"wb2",name:"Safety training",status:"COMPLETED"},{id:"wb3",name:"Skill development programs",status:"AVAILABLE"},{id:"wb4",name:"Emergency assistance",status:"ELIGIBLE"}],training:{completed:["Basic workplace safety"],available:["Customer communication"],upcoming:["Electrical inspection practice"]}},
 w3:{membershipStatus:"ACTIVE",membershipId:"CW-••••806",joiningDate:"2025-01-20",benefits:[{id:"wb1",name:"Cooperative membership benefits",status:"ENROLLED"},{id:"wb2",name:"Safety training",status:"AVAILABLE"},{id:"wb3",name:"Skill development programs",status:"AVAILABLE"}],training:{completed:[],available:["Safety orientation"],upcoming:[]}},
 w4:{membershipStatus:"ACTIVE",membershipId:"CW-••••921",joiningDate:"2022-03-12",benefits:[{id:"wb1",name:"Cooperative membership benefits",status:"ENROLLED"},{id:"wb2",name:"Safety training",status:"COMPLETED"},{id:"wb3",name:"Skill development programs",status:"COMPLETED"},{id:"wb4",name:"Emergency assistance",status:"ELIGIBLE"}],training:{completed:["Workplace safety orientation","Plumbing safety"],available:["Advanced pipe maintenance"],upcoming:["Community emergency response"]}}
};
function phase5InsuranceFor(workerId){return deepClone(DEMO_INSURANCE_PROFILES[workerId]||{insuranceStatus:"NOT_ENROLLED",provider:"",policyReference:"",coverageType:"",coverageAmount:0,startDate:null,expiryDate:null,renewalStatus:"Enrollment information available",lastUpdated:new Date().toISOString().slice(0,10),coverage:{accident:false,workAccident:false,hospitalization:false,temporaryDisability:false,permanentDisability:false,other:false}});}
function phase5WelfareFor(workerId){return deepClone(DEMO_WELFARE_PROFILES[workerId]||{membershipStatus:"ACTIVE",membershipId:"CW-••••000",joiningDate:null,benefits:[],training:{completed:[],available:["Safety orientation"],upcoming:[]}});}
function normalizePhase5State(state){
 state.insurance=state.insurance&&typeof state.insurance==='object'&&!Array.isArray(state.insurance)?state.insurance:{};
 state.welfare=state.welfare&&typeof state.welfare==='object'&&!Array.isArray(state.welfare)?state.welfare:{};
 state.claims=Array.isArray(state.claims)?state.claims:[];
 state.workers=(state.workers||[]).map(w=>{const copy={...w}; let profile=state.insurance[copy.id]||copy.insuranceDetails||phase5InsuranceFor(copy.id); if(!profile.insuranceStatus||String(profile.insuranceStatus).toLowerCase()==='not_provided'){profile=phase5InsuranceFor(copy.id);} const welfare=state.welfare[copy.id]||copy.welfareDetails||phase5WelfareFor(copy.id); const claims=Array.isArray(profile.claims)?profile.claims:DEMO_CLAIMS[copy.id]||[]; const normalized={...profile,workerId:copy.id,insuranceStatus:INSURANCE_STATUSES.includes(profile.insuranceStatus)?profile.insuranceStatus:'NOT_ENROLLED',claims:deepClone(claims)}; state.insurance[copy.id]=normalized; state.welfare[copy.id]={...welfare,workerId:copy.id}; copy.insuranceStatus=normalized.insuranceStatus; copy.insuranceDetails=normalized; copy.welfareDetails=state.welfare[copy.id]; return copy;});
 if(!state.claims.length){for(const list of Object.values(state.insurance))for(const c of (list.claims||[]))state.claims.push(deepClone(c));}
 return state;
}
function seedPhase5State(state){state.schemaVersion=4; return normalizePhase5State(state);}
function migrateStateV4(existing){const state=normalizePhase5State(migrateStateV3(existing));state.schemaVersion=4;return state;}
function syncWorkerInsurance(workerId,patch){const state=getState(),w=state.workers.find(x=>x.id===workerId);if(!w)return null;const current=state.insurance[workerId]||phase5InsuranceFor(workerId);const next={...current,...patch,workerId};state.insurance[workerId]=next;w.insuranceStatus=next.insuranceStatus;w.insuranceDetails=deepClone(next);saveState(state);return next;}
function getWorkerInsurance(workerId){const state=getState(),w=state.workers.find(x=>x.id===workerId);return w?deepClone(state.insurance[workerId]||w.insuranceDetails||phase5InsuranceFor(workerId)):null;}
function getWorkerWelfare(workerId){const state=getState(),w=state.workers.find(x=>x.id===workerId);return w?deepClone(state.welfare[workerId]||w.welfareDetails||phase5WelfareFor(workerId)):null;}
function getWorkerClaims(workerId){const insurance=getWorkerInsurance(workerId);return insurance?.claims||getState().claims.filter(c=>c.workerId===workerId);}
function submitDemoInsuranceClaim(workerId,data){const state=getState(),w=state.workers.find(x=>x.id===workerId);if(!w)throw new Error('Worker not found.');const now=new Date().toISOString(),id=`CG-CLM-${String(Date.now()).slice(-6)}`,claim={id,workerId,claimType:data.claimType,incidentDate:data.incidentDate,description:data.description,amount:Number(data.amount||0),status:'SUBMITTED',createdAt:now,updatedAt:now};state.claims.push(claim);const insurance=state.insurance[workerId]||phase5InsuranceFor(workerId);insurance.claims=[...(insurance.claims||[]),claim];state.insurance[workerId]=insurance;w.insuranceDetails=deepClone(insurance);state.notifications.push({id:`notif-${Date.now()}`,userId:w.userId||w.id,type:'insurance_claim',message:`Insurance Claim Submitted — ${id} has been submitted for demo processing.`,createdAt:now,read:false});saveState(state);return claim;}
function insuranceStatusClass(status){return status==='ACTIVE'?'green':status==='PENDING'?'amber':status==='EXPIRED'?'red':'blue';}
function insuranceStatusLabel(status){return ({ACTIVE:'Active',PENDING:'Pending',EXPIRED:'Expired',NOT_ENROLLED:'Not Enrolled'})[status]||status||'—';}
function welfareStatusClass(status){return ({AVAILABLE:'blue',ELIGIBLE:'amber',ENROLLED:'green',COMPLETED:'green'})[status]||'blue';}
/* Phase 5 becomes the public state seed/migration layer while preserving Phases 1–4. */
const _seedStatePhase4=seedState; const _migrateStatePhase4=migrateState;
seedState=function(){return seedPhase5State(_seedStatePhase4());};
migrateState=function(existing){return migrateStateV4(existing);};


/* Phase 6 state migration marker. Matching remains derived from live shared state. */
const _seedStatePhase5=seedState; const _migrateStatePhase5=migrateState;
seedState=function(){const state=_seedStatePhase5();state.schemaVersion=5;return state;};
migrateState=function(existing){const state=_migrateStatePhase5(existing);state.schemaVersion=5;return state;};

/* ================= PHASE 7: FEDERATION ADMINISTRATION ================= */
const PHASE7_COMPLAINTS=[
 {id:"CMP-1001",bookingId:"CG-24081",customerId:"c1",workerId:"w1",category:"Service quality",description:"Demo complaint about follow-up communication.",status:"UNDER_REVIEW",createdAt:"2026-09-03T10:00:00.000Z",priority:"MEDIUM",updatedAt:"2026-09-04T09:00:00.000Z",adminRemarks:"Demo case under federation review."},
 {id:"CMP-1002",bookingId:"CG-24081",customerId:"c1",workerId:"w1",category:"Billing query",description:"Demo query regarding the service estimate.",status:"OPEN",createdAt:"2026-09-04T12:00:00.000Z",priority:"LOW",updatedAt:"2026-09-04T12:00:00.000Z",adminRemarks:"Awaiting operational review."}
];
const COMPLAINT_STATUSES=["OPEN","UNDER_REVIEW","RESOLVED","ESCALATED","CLOSED"];
function normalizePhase7State(state){
 state.complaints=Array.isArray(state.complaints)?state.complaints:deepClone(PHASE7_COMPLAINTS);
 if(!state.complaints.length)state.complaints=deepClone(PHASE7_COMPLAINTS);
 state.complaints=state.complaints.map(c=>({...c,status:COMPLAINT_STATUSES.includes(c.status)?c.status:"OPEN",priority:c.priority||"MEDIUM",updatedAt:c.updatedAt||c.createdAt||new Date().toISOString()}));
 state.escalations=Array.isArray(state.escalations)?state.escalations:[];
 return state;
}
function seedPhase7State(state){const s=_seedStatePhase6();s.schemaVersion=6;return normalizePhase7State(s);}
function migrateStateV6(existing){const s=_migrateStatePhase6(existing);s.schemaVersion=6;return normalizePhase7State(s);}
const _seedStatePhase6=seedState; const _migrateStatePhase6=migrateState;
seedState=function(){return seedPhase7State(_seedStatePhase6());};
migrateState=function(existing){return migrateStateV6(existing);};
function getFederationScope(){return currentFederation()?.id||currentEntityId("federationAdmin")||"fed1";}
function getWorkersForFederation(federationId=getFederationScope()){const state=getState();const coopIds=new Set(state.cooperatives.filter(c=>c.federationId===federationId).map(c=>c.id));return state.workers.filter(w=>coopIds.has(w.cooperativeId));}
function getBookingsForFederationScoped(federationId=getFederationScope()){return getState().bookings.filter(b=>b.federationId===federationId);}
function getCooperativesForFederation(federationId=getFederationScope()){return getState().cooperatives.filter(c=>c.federationId===federationId);}
function federationComplaintUpdate(id,status,remarks,actorId){const state=getState(),c=state.complaints.find(x=>x.id===id);if(!c||!COMPLAINT_STATUSES.includes(status))return null;const now=new Date().toISOString();c.status=status;c.adminRemarks=remarks||c.adminRemarks||"";c.updatedAt=now;c.updatedBy=actorId||currentUser()?.id||null;state.auditLog=Array.isArray(state.auditLog)?state.auditLog:[];state.auditLog.push({id:`audit-${Date.now()}`,action:"COMPLAINT_RESOLUTION",actor:c.updatedBy,target:id,timestamp:now,description:`Complaint ${id} updated to ${status}.`});saveState(state);return c;}
function escalateComplaint(id,reason,actorId){const state=getState(),c=state.complaints.find(x=>x.id===id);if(!c)return null;const now=new Date().toISOString(),esc={id:`ESC-${Date.now()}`,complaintId:id,reason:reason||"Requires platform-level review.",escalatedBy:actorId||currentUser()?.id||null,timestamp:now,status:"OPEN"};state.escalations.push(esc);c.status="ESCALATED";c.updatedAt=now;c.updatedBy=esc.escalatedBy;state.auditLog=Array.isArray(state.auditLog)?state.auditLog:[];state.auditLog.push({id:`audit-${Date.now()}`,action:"COMPLAINT_ESCALATION",actor:esc.escalatedBy,target:id,timestamp:now,description:`Complaint ${id} escalated to Platform Admin.`});state.notifications.push({id:`notif-${Date.now()}`,userId:"u-admin",type:"complaint_escalation",message:`Complaint ${id} escalated to Platform Admin.`,createdAt:now,read:false});saveState(state);return esc;}
function federationOperationalMetrics(federationId=getFederationScope()){
 const state=getState(),workers=getWorkersForFederation(federationId),bookings=getBookingsForFederationScoped(federationId),coops=getCooperativesForFederation(federationId),complaints=state.complaints.filter(c=>bookings.some(b=>b.id===c.bookingId));
 const activeBookings=bookings.filter(isFederationActiveBooking),completed=bookings.filter(b=>b.status===BOOKING_STATUSES.COMPLETED),cancelled=bookings.filter(b=>b.status===BOOKING_STATUSES.CANCELLED),available=workers.filter(w=>w.active!==false&&!w.suspended&&w.verificationStatus==="VERIFIED"&&w.online!==false),verified=workers.filter(w=>w.verificationStatus==="VERIFIED"),pendingVerification=workers.filter(w=>w.verificationStatus!=="VERIFIED");
 const ratings=workers.filter(w=>Number.isFinite(Number(w.rating))&&Number(w.rating)>0).map(w=>Number(w.rating));
 return {workers,bookings,coops,complaints,activeBookings,completed,cancelled,available,verified,pendingVerification,openComplaints:complaints.filter(c=>["OPEN","UNDER_REVIEW","ESCALATED"].includes(c.status)),avgRating:ratings.length?ratings.reduce((a,b)=>a+b,0)/ratings.length:0,completionRate:bookings.length?completed.length/bookings.length*100:0,cancellationRate:bookings.length?cancelled.length/bookings.length*100:0};
}
function isFederationActiveBooking(b){return ![BOOKING_STATUSES.COMPLETED,BOOKING_STATUSES.CANCELLED].includes(b.status);}
function federationDemandAnalytics(federationId=getFederationScope()){
 const {bookings,workers}=federationOperationalMetrics(federationId),byService={},byArea={};bookings.forEach(b=>{byService[b.service]=(byService[b.service]||0)+1;const area=String(b.location||"Pune").split(",")[0].trim();byArea[area]=(byArea[area]||0)+1;});
 const serviceRows=SERVICES.map(s=>{const demand=byService[s.id]||0,available=workers.filter(w=>w.service===s.id&&w.verificationStatus==="VERIFIED"&&w.active!==false&&!w.suspended&&w.online!==false).length,gap=Math.max(0,demand-available);return {service:s.name,serviceId:s.id,demand,available,gap,level:demand===0?"LOW":gap>=2?"HIGH":demand>available?"MEDIUM":"BALANCED"};}).filter(r=>r.demand||r.available).sort((a,b)=>b.demand-a.demand);
 const areaRows=Object.entries(byArea).map(([area,demand])=>({area,demand})).sort((a,b)=>b.demand-a.demand);return {serviceRows,areaRows,peakPeriod:bookings.length?"Demo current period":"No booking data",supplyDemandGap:serviceRows.reduce((n,r)=>n+r.gap,0)};
}


/* ================= PHASE 8: FEDERATION MANAGEMENT & CROSS-COOPERATIVE COORDINATION ================= */
const ASSISTANCE_STATUSES=["REQUESTED","UNDER_REVIEW","CANDIDATES_FOUND","WORKER_SELECTED","ACCEPTED","COMPLETED","CANCELLED"];
const CAPACITY_STATUSES=["ADEQUATE","LIMITED","HIGH_DEMAND","OVERLOADED"];
const AUDIT_ACTIONS=["ASSIGN_WORKER","REASSIGN_WORKER","VERIFICATION_RESULT","COMPLAINT_RESOLUTION","COMPLAINT_ESCALATION","CROSS_COOPERATIVE_ASSISTANCE","WORKER_STATUS_CHANGE"];
const PHASE8_DEMO_ASSISTANCE=[];
const PHASE8_DEMO_AUDIT=[];
function normalizePhase8State(state){
 state.assistanceRequests=Array.isArray(state.assistanceRequests)?state.assistanceRequests:deepClone(PHASE8_DEMO_ASSISTANCE);
 state.auditLog=Array.isArray(state.auditLog)?state.auditLog:deepClone(PHASE8_DEMO_AUDIT);
 state.assistanceRequests=state.assistanceRequests.map(r=>({...r,status:ASSISTANCE_STATUSES.includes(r.status)?r.status:"REQUESTED",candidateCooperatives:Array.isArray(r.candidateCooperatives)?r.candidateCooperatives:[]}));
 state.auditLog=state.auditLog.map(a=>({...a,timestamp:a.timestamp||a.createdAt||new Date().toISOString()}));
 state.cooperatives=(state.cooperatives||[]).map(c=>({...c}));
 return state;
}
function seedPhase8State(state){const s=normalizePhase8State(state);s.schemaVersion=7;return s;}
function migrateStateV7(existing){const s=normalizePhase8State(migrateStateV6(existing));s.schemaVersion=7;return s;}
const _seedStatePhase7=seedState; const _migrateStatePhase7=migrateState;
seedState=function(){return seedPhase8State(_seedStatePhase7());};
migrateState=function(existing){return migrateStateV7(existing);};
function federationWorkersFor(federationId=getFederationScope()){
 const state=getState(),coopIds=new Set(state.cooperatives.filter(c=>c.federationId===federationId).map(c=>c.id));
 return state.workers.filter(w=>coopIds.has(w.cooperativeId));
}
function cooperativeCapacityDetailed(cooperativeId,federationId=getFederationScope()){
 const state=getState(),c=getCooperativeById(cooperativeId),workers=federationWorkersFor(federationId).filter(w=>w.cooperativeId===cooperativeId);
 const bookings=state.bookings.filter(b=>b.cooperativeId===cooperativeId),active=bookings.filter(isPhase8ActiveBooking),verified=workers.filter(w=>w.verificationStatus==='VERIFIED'&&w.active!==false&&!w.suspended),busy=new Set(state.assignments.filter(a=>!['REJECTED','CANCELLED','COMPLETED'].includes(a.status)).map(a=>a.workerId));
 const available=verified.filter(w=>!busy.has(w.id)&&w.online!==false),serviceDemand={};
 bookings.filter(b=>b.status!==BOOKING_STATUSES.COMPLETED&&b.status!==BOOKING_STATUSES.CANCELLED).forEach(b=>serviceDemand[b.service]=(serviceDemand[b.service]||0)+1);
 const bySkill={};for(const w of workers){const key=w.service||w.skill;if(key)bySkill[key]=(bySkill[key]||0)+1;}
 const demand=Object.values(serviceDemand).reduce((a,b)=>a+b,0),supply=available.length,ratio=workers.length?supply/workers.length:0;
 let capacityStatus=ratio>=.5?'ADEQUATE':ratio>0?'LIMITED':'OVERLOADED';if(demand>supply&&demand>=2)capacityStatus=supply===0?'OVERLOADED':'HIGH_DEMAND';
 return {cooperativeId,totalWorkers:workers.length,verifiedWorkers:verified.length,availableWorkers:available.length,busyWorkers:Math.max(0,verified.length-available.length),unavailableWorkers:workers.length-verified.length,activeJobs:active.length,demand,serviceDemand,serviceCategories:Object.keys(bySkill),capacityStatus:CAPACITY_STATUSES.includes(capacityStatus)?capacityStatus:'LIMITED'};
}
function cooperativeCapacityMatrix(federationId=getFederationScope()){
 return getCooperativesForFederation(federationId).map(c=>{const cap=cooperativeCapacityDetailed(c.id,federationId);return {...cap,name:c.name,area:c.area||'Pune'};});
}
function getCrossCooperativeCandidates(booking,excludeCooperativeId=booking?.cooperativeId){
 const federationId=booking?.federationId||getFederationScope(),state=getState();
 return federationWorkersFor(federationId).filter(w=>w.cooperativeId!==excludeCooperativeId).map(w=>calculateMatchScore(w,booking,state)).filter(r=>r.eligible).sort((a,b)=>b.score-a.score).map(r=>({...r,worker:getWorkerById(r.workerId)}));
}
function determineAssistanceReason(booking){
 if(!booking)return 'No booking provided.';
 const localCooperativeId=booking.originCooperativeId||booking.cooperativeId;const local=federationWorkersFor(booking.federationId||getFederationScope()).filter(w=>w.cooperativeId===localCooperativeId);
 const localResults=local.map(w=>calculateMatchScore(w,booking,getState()));
 if(!localResults.some(r=>r.eligible)){
  if(!local.length)return 'No workers are associated with the primary cooperative for this service.';
  if(local.every(r=>!r.verificationScore))return 'No verified workers are available in the primary cooperative.';
  if(local.every(r=>!r.availabilityScore))return 'All local eligible workers are unavailable at the requested time.';
  if(local.every(r=>!r.skillScore))return 'No local worker matches the required skill.';
  return 'Local cooperative capacity is insufficient for this request.';
 }
 return 'Additional federation support is not currently required.';
}
function createAssistanceRequest(bookingId,reason){
 const state=getState(),b=state.bookings.find(x=>x.id===bookingId);if(!b)return null;
 const existing=state.assistanceRequests.find(r=>r.bookingId===bookingId&&!["COMPLETED","CANCELLED"].includes(r.status));if(existing)return existing;
 const federationId=b.federationId||getFederationScope(),now=new Date().toISOString(),candidateCooperatives=cooperativeCapacityMatrix(federationId).filter(c=>c.cooperativeId!==b.cooperativeId).map(c=>c.cooperativeId);
 const r={id:`assist-${bookingId}-${Date.now()}`,assistanceRequestId:`assist-${bookingId}-${Date.now()}`,bookingId,requestingCooperativeId:b.originCooperativeId||b.cooperativeId||null,serviceCategory:b.service,area:String(b.location||b.address||'Pune').split(',')[0].trim(),reason:reason||determineAssistanceReason(b),requestedAt:now,status:'REQUESTED',candidateCooperatives,selectedCooperativeId:null,selectedWorkerId:null};
 state.assistanceRequests.push(r);state.notifications.push({id:`notif-${Date.now()}`,userId:DEMO_USERS.federationAdmin.id,type:'cross_cooperative_assistance',bookingId,message:`Federation assistance requested for ${bookingId}: ${r.reason}`,createdAt:now,read:false});
 state.auditLog.push({id:`audit-${Date.now()}`,action:'CROSS_COOPERATIVE_ASSISTANCE',actor:DEMO_USERS.federationAdmin.id,target:bookingId,timestamp:now,description:`Assistance requested because ${r.reason}`});saveState(state);return r;
}
function getAssistanceForBooking(bookingId){return getState().assistanceRequests.find(r=>r.bookingId===bookingId&&r.status!=='CANCELLED')||null;}
function getAssistanceCandidates(requestId){const state=getState(),r=state.assistanceRequests.find(x=>x.id===requestId);if(!r)return [];const b=state.bookings.find(x=>x.id===r.bookingId);return b?getCrossCooperativeCandidates(b,r.requestingCooperativeId):[];}
function selectCrossCooperativeWorker(requestId,workerId){
 const state=getState(),r=state.assistanceRequests.find(x=>x.id===requestId),b=r&&state.bookings.find(x=>x.id===r.bookingId),w=workerId&&state.workers.find(x=>x.id===workerId);if(!r||!b||!w)return null;
 const match=calculateMatchScore(w,b,state);if(!match.eligible||w.cooperativeId===r.requestingCooperativeId)return null;
 const now=new Date().toISOString();r.status='WORKER_SELECTED';r.selectedCooperativeId=w.cooperativeId;r.selectedWorkerId=w.id;
 b.originCooperativeId=b.originCooperativeId||r.requestingCooperativeId||b.cooperativeId;
 b.primaryWorkerId=w.id;b.selectedWorkerIds=[...new Set([w.id,...(b.selectedWorkerIds||[])])];b.cooperativeId=w.cooperativeId;b.federationId=getCooperativeById(w.cooperativeId)?.federationId||b.federationId;b.status=BOOKING_STATUSES.ASSIGNED;b.assignmentSource='CROSS_COOPERATIVE';b.matchScore=match.score;b.matchExplanation=match.explanation;b.updatedAt=now;
 state.assignments.push({id:`assign-${b.id}-${w.id}-${Date.now()}`,bookingId:b.id,workerId:w.id,assignedBy:currentUser()?.id||DEMO_USERS.federationAdmin.id,cooperativeId:w.cooperativeId,status:ASSIGNMENT_STATUSES.ASSIGNED,assignedAt:now,acceptedAt:null,completedAt:null,assignmentSource:'CROSS_COOPERATIVE'});
 state.notifications.push({id:`notif-${Date.now()}`,userId:w.userId||w.id,type:'cross_cooperative_assignment',bookingId:b.id,message:`Cross-cooperative assignment ${b.id} is waiting for your response.`,createdAt:now,read:false});
 state.auditLog.push({id:`audit-${Date.now()}`,action:'CROSS_COOPERATIVE_ASSISTANCE',actor:currentUser()?.id||DEMO_USERS.federationAdmin.id,target:b.id,timestamp:now,description:`Cross-cooperative worker ${w.id} assigned from ${getCooperativeById(w.cooperativeId)?.name||w.cooperativeId}.`});saveState(state);return {booking:b,assignment:state.assignments.at(-1),request:r};
}
function updateAssistanceStatus(requestId,status){const state=getState(),r=state.assistanceRequests.find(x=>x.id===requestId);if(!r||!ASSISTANCE_STATUSES.includes(status))return null;r.status=status;r.updatedAt=new Date().toISOString();saveState(state);return r;}
function isPhase8ActiveBooking(b){return b&&!['COMPLETED','CANCELLED'].includes(b.status);}
function isWorkerAssignedToBooking(workerId,bookingId){return getState().assignments.some(a=>a.workerId===workerId&&a.bookingId===bookingId&&!['REJECTED','CANCELLED','COMPLETED'].includes(a.status));}
function auditFederationAction(action,target,description,actorId){if(!AUDIT_ACTIONS.includes(action))return null;const state=getState(),now=new Date().toISOString(),entry={id:`audit-${Date.now()}`,action,actor:actorId||currentUser()?.id||DEMO_USERS.federationAdmin.id,target,timestamp:now,description};state.auditLog.push(entry);saveState(state);return entry;}
function federationOperationalAlerts(federationId=getFederationScope()){
 const state=getState(),workers=federationWorkersFor(federationId),bookings=getBookingsForFederationScoped(federationId),alerts=[];
 const demand=federationDemandAnalytics(federationId);demand.serviceRows.filter(r=>r.gap>0).forEach(r=>alerts.push({type:'shortage',severity:r.gap>=2?'HIGH':'MEDIUM',title:`${r.service} capacity gap`,message:`Demand ${r.demand} vs ${r.available} available verified worker(s).`}));
 bookings.filter(b=>b.status===BOOKING_STATUSES.ASSIGNMENT_PENDING).forEach(b=>alerts.push({type:'assignment',severity:'HIGH',title:`Reassignment required`,message:`${b.id} is awaiting an eligible worker.`}));
 workers.filter(w=>w.verificationStatus!=='VERIFIED').slice(0,5).forEach(w=>alerts.push({type:'verification',severity:'LOW',title:'Verification pending',message:`${w.name} is ${w.verificationStatus}.`}));
 workers.filter(w=>getWorkerInsurance(w.id)?.insuranceStatus==='EXPIRED').forEach(w=>alerts.push({type:'welfare',severity:'MEDIUM',title:'Expired insurance',message:`${w.name} has expired demo coverage.`}));
 return alerts.slice(0,12);
}
function federationCapacityGaps(federationId=getFederationScope()){
 const state=getState(),coops=cooperativeCapacityMatrix(federationId),bookings=getBookingsForFederationScoped(federationId);return SERVICES.map(s=>{const demand=bookings.filter(b=>b.service===s.id&&isPhase8ActiveBooking(b)).length,available=federationWorkersFor(federationId).filter(w=>w.service===s.id&&w.verificationStatus==='VERIFIED'&&w.active!==false&&!w.suspended&&w.online!==false&&!isWorkerAssignedToBooking(w.id,bookings.find(b=>b.service===s.id)?.id)).length;return {service:s.name,serviceId:s.id,demand,available,gap:Math.max(0,demand-available)};}).filter(x=>x.demand||x.available);
}

/* ================= PHASE 9: REVIEWS, MESSAGING, CALLING & NOTIFICATIONS ================= */
const REVIEW_STATUSES={VISIBLE:"VISIBLE",FLAGGED:"FLAGGED",HIDDEN:"HIDDEN"};
const MESSAGE_STATUSES={READ:"READ",UNREAD:"UNREAD"};
const NOTIFICATION_TYPES={BOOKING:"booking",ASSIGNMENT:"assignment",ACCEPTED:"accepted",ON_THE_WAY:"on_the_way",ARRIVED:"arrived",ESTIMATE:"estimate",SERVICE_IN_PROGRESS:"service_in_progress",COMPLETED:"completed",REVIEW_REQUEST:"review_request",REVIEW:"review",MESSAGE:"message",CANCELLATION:"cancellation",VERIFICATION:"verification",INSURANCE:"insurance",WELFARE:"welfare",COMPLAINT:"complaint",ESCALATION:"escalation",CAPACITY:"capacity",SYSTEM:"system"};
const PHASE9_DEMO_COMPLETED_BOOKING={id:"CG-24080",customerId:"c1",service:"electrician",requirement:"Completed demo electrical repair",urgency:"Normal",location:"Kothrud, Pune",address:"Kothrud, Pune",coordinates:null,date:"2026-09-03",time:"09:00–10:00",status:"COMPLETED",selectedWorkerIds:["w1"],primaryWorkerId:"w1",cooperativeId:"coop1",federationId:"fed1",inspectionCharge:100,paymentStatus:"PAID",payment:"Paid",estimate:{id:"estimate-CG-24080",bookingId:"CG-24080",material:700,labour:900,total:1600,notes:"Demo completed repair.",createdAt:"2026-09-03T09:20:00.000Z",submittedBy:"w1"},invoice:null,reviewId:null,messages:[],createdAt:"2026-09-03T08:30:00.000Z",updatedAt:"2026-09-03T10:15:00.000Z",completedAt:"2026-09-03T10:15:00.000Z",customer:"Omkar Malve",eta:"10–15 min"};
const PHASE9_DEMO_COMPLETED_ASSIGNMENT={id:"assign-CG-24080-w1",bookingId:"CG-24080",workerId:"w1",assignedBy:"u-federation-admin",cooperativeId:"coop1",status:"COMPLETED",assignedAt:"2026-09-03T08:40:00.000Z",acceptedAt:"2026-09-03T08:45:00.000Z",completedAt:"2026-09-03T10:15:00.000Z",assignmentSource:"LOCAL_COOPERATIVE"};
function phase9CustomerUserId(customerId){const c=getState().customers.find(x=>x.id===customerId);return c?.userId||((customerId==="c1")?"u-customer":customerId)||null;}
function phase9WorkerUserId(workerId){const w=getState().workers.find(x=>x.id===workerId);return w?.userId||workerId||null;}
function phase9VisibleReviews(workerId){return (getState().reviews||[]).filter(r=>r.workerId===workerId&&!(["HIDDEN","hidden"].includes(r.status))&&Number.isInteger(Number(r.rating))&&Number(r.rating)>=1&&Number(r.rating)<=5);}
function calculateWorkerRating(workerId){const reviews=phase9VisibleReviews(workerId),sum=reviews.reduce((n,r)=>n+Number(r.rating),0);return {rating:reviews.length?sum/reviews.length:0,reviewCount:reviews.length};}
function syncAllWorkerRatings(state){state.workers.forEach(w=>{const reviews=(state.reviews||[]).filter(r=>r.workerId===w.id&&!(["HIDDEN","hidden"].includes(r.status))&&Number.isInteger(Number(r.rating))&&Number(r.rating)>=1&&Number(r.rating)<=5);w.rating=reviews.length?Number((reviews.reduce((n,r)=>n+Number(r.rating),0)/reviews.length).toFixed(1)):0;w.reviewCount=reviews.length;});}
function phase9NotificationKey(n){return n?.eventKey||`${n?.relatedEntityId||n?.bookingId||""}:${n?.type||""}:${n?.recipientId||n?.userId||""}`;}
function createNotification({recipientId,type,title,message,relatedEntityId=null,bookingId=null,eventKey=null,force=false}={}){
 const state=getState();if(!recipientId||!message)return null;state.notifications=Array.isArray(state.notifications)?state.notifications:[];
 const key=eventKey||`${relatedEntityId||bookingId||""}:${type||""}:${recipientId}`;
 if(!force&&state.notifications.some(n=>phase9NotificationKey(n)===key))return state.notifications.find(n=>phase9NotificationKey(n)===key)||null;
 const n={id:`notif-${Date.now()}-${state.notifications.length+1}`,recipientId,userId:recipientId,type:type||NOTIFICATION_TYPES.SYSTEM,title:title||"Notification",message,relatedEntityId,bookingId,eventKey:key,createdAt:new Date().toISOString(),read:false};state.notifications.push(n);saveState(state);return n;
}
function getUserNotifications(userId=currentUser()?.id){if(!userId)return [];return getState().notifications.filter(n=>(n.recipientId||n.userId)===userId).sort((a,b)=>String(b.createdAt).localeCompare(String(a.createdAt)));}
function getUnreadNotificationCount(userId=currentUser()?.id){return getUserNotifications(userId).filter(n=>!n.read).length;}
function markNotificationRead(id){const state=getState(),userId=currentUser()?.id,n=state.notifications.find(x=>x.id===id&&(x.recipientId||x.userId)===userId);if(!n)return null;n.read=true;saveState(state);return n;}
function markAllNotificationsRead(userId=currentUser()?.id){if(!userId)return 0;const state=getState();let count=0;state.notifications.forEach(n=>{if((n.recipientId||n.userId)===userId&&!n.read){n.read=true;count++;}});saveState(state);return count;}
function phase9ConversationForBooking(bookingId){const b=getState().bookings.find(x=>x.id===bookingId);if(!b)return null;const workerId=b.primaryWorkerId||b.selectedWorkerIds?.[0];if(!workerId||!b.customerId)return null;return {conversationId:`conv-${bookingId}-${b.customerId}-${workerId}`,bookingId,customerId:b.customerId,workerId};}
function getConversationMessages(bookingId){const c=phase9ConversationForBooking(bookingId);if(!c)return [];return getState().messages.filter(m=>m.bookingId===bookingId&&((m.senderId===c.customerId||m.senderId===c.workerId||m.senderId===phase9CustomerUserId(c.customerId)||m.senderId===phase9WorkerUserId(c.workerId))));}
function phase9CanAccessConversation(bookingId,userId=currentUser()?.id){const c=phase9ConversationForBooking(bookingId);if(!c||!userId)return false;return [c.customerId,phase9CustomerUserId(c.customerId),c.workerId,phase9WorkerUserId(c.workerId)].includes(userId);}
function sendMessageForBooking(bookingId,messageText){const state=getState(),b=state.bookings.find(x=>x.id===bookingId),sender=currentUser();if(!b||!sender||!String(messageText||"").trim())return {error:"Enter a message before sending."};if(!phase9CanAccessConversation(bookingId,sender.id))return {error:"You are not authorized to access this conversation."};const c=phase9ConversationForBooking(bookingId);if(!c)return {error:"No assigned worker conversation is available for this booking."};const senderIsCustomer=[c.customerId,phase9CustomerUserId(c.customerId)].includes(sender.id);const senderIsWorker=[c.workerId,phase9WorkerUserId(c.workerId)].includes(sender.id);if(!senderIsCustomer&&!senderIsWorker)return {error:"You are not a participant in this conversation."};const receiverId=senderIsCustomer?phase9WorkerUserId(c.workerId):phase9CustomerUserId(c.customerId);const now=new Date().toISOString(),msg={id:`msg-${Date.now()}-${state.messages.length+1}`,conversationId:c.conversationId,bookingId,senderId:sender.id,senderRole:senderIsCustomer?"customer":"worker",receiverId,message:String(messageText).trim(),timestamp:now,createdAt:now,read:false};state.messages.push(msg);b.messages=[...(b.messages||[]).filter(x=>typeof x==="string"),msg.id];b.updatedAt=now;saveState(state);createNotification({recipientId:receiverId,type:NOTIFICATION_TYPES.MESSAGE,title:"New Message",message:`${sender.name||"Your service contact"} sent you a message.`,relatedEntityId:c.conversationId,bookingId,eventKey:`message-${msg.id}`});return {message:msg};}
function canReviewBooking(bookingId,customerId=currentCustomer()?.id){const b=getState().bookings.find(x=>x.id===bookingId);const workerId=b?.primaryWorkerId||b?.selectedWorkerIds?.[0];if(!b||b.status!==BOOKING_STATUSES.COMPLETED||b.customerId!==customerId||!workerId)return {eligible:false,reason:"A review is available only after your booking is completed."};if(!getWorkerById(workerId))return {eligible:false,reason:"The assigned worker is unavailable."};const existing=getState().reviews.find(r=>r.bookingId===bookingId&&r.customerId===customerId);if(existing)return {eligible:false,reason:"Review already submitted",existing};return {eligible:true,workerId};}
function submitCentralReview(bookingId,rating,comment=""){const customer=currentCustomer(),check=canReviewBooking(bookingId,customer?.id),state=getState();if(!check.eligible)return {error:check.reason,existing:check.existing||null};const numeric=Number(rating);if(!Number.isInteger(numeric)||numeric<1||numeric>5)return {error:"Please select a valid whole-star rating from 1 to 5."};const b=state.bookings.find(x=>x.id===bookingId),w=state.workers.find(x=>x.id===check.workerId);const now=new Date().toISOString(),review={id:`review-${bookingId}-${customer.id}`,reviewId:`review-${bookingId}-${customer.id}`,bookingId,customerId:customer.id,workerId:w.id,rating:numeric,comment:String(comment||"").trim(),createdAt:now,status:REVIEW_STATUSES.VISIBLE};state.reviews.push(review);b.reviewId=review.id;b.updatedAt=now;syncAllWorkerRatings(state);saveState(state);createNotification({recipientId:phase9WorkerUserId(w.id),type:NOTIFICATION_TYPES.REVIEW,title:"New Customer Review",message:`You received a ${numeric}-star review from a customer.`,relatedEntityId:review.id,bookingId,eventKey:`review-${review.id}`});return {review,worker:w};}
function phase9SeedAndNormalize(state){
 state.reviews=Array.isArray(state.reviews)?state.reviews:[];
 state.reviews=state.reviews.map((r,i)=>{let rating=Number(r.rating);if(!Number.isInteger(rating)&&r.bookingId===null&&Number.isFinite(rating))rating=Math.max(1,Math.min(5,Math.floor(rating)));return {...r,id:r.id||`review-${r.workerId||"w"}-${i+1}`,reviewId:r.reviewId||r.id||`review-${i+1}`,status:(String(r.status||"VISIBLE").toUpperCase()==="HIDDEN"?REVIEW_STATUSES.HIDDEN:String(r.status||"VISIBLE").toUpperCase()==="FLAGGED"?REVIEW_STATUSES.FLAGGED:REVIEW_STATUSES.VISIBLE),rating,comment:String(r.comment||""),createdAt:r.createdAt||new Date().toISOString()};});
 if(!state.reviews.length)state.reviews=deepClone(DEFAULT_REVIEWS).map(r=>({...r,status:REVIEW_STATUSES.VISIBLE,rating:Math.max(1,Math.min(5,Math.round(Number(r.rating)||0)))}));
 state.messages=Array.isArray(state.messages)?state.messages:[];state.messages=state.messages.map(m=>{const c=state.bookings.find(b=>b.id===m.bookingId);const workerId=c?.primaryWorkerId||c?.selectedWorkerIds?.[0];let receiverId=m.receiverId;if(c&&receiverId===workerId)receiverId=state.workers.find(w=>w.id===workerId)?.userId||workerId;if(c&&receiverId===c.customerId)receiverId=c.userId||((c.id==="c1")?"u-customer":c.customerId||c.id);return {...m,conversationId:m.conversationId||`conv-${m.bookingId}-${c?.customerId||""}-${workerId||""}`,receiverId,read:Boolean(m.read)};});
 state.notifications=Array.isArray(state.notifications)?state.notifications:[];state.notifications=state.notifications.map(n=>({...n,recipientId:n.recipientId||n.userId,read:Boolean(n.read),createdAt:n.createdAt||new Date().toISOString()}));
 state.bookings=(state.bookings||[]).map(normalizeBooking);
 if(!state.bookings.some(b=>b.id===PHASE9_DEMO_COMPLETED_BOOKING.id))state.bookings.push(deepClone(PHASE9_DEMO_COMPLETED_BOOKING));
 if(!state.assignments.some(a=>a.id===PHASE9_DEMO_COMPLETED_ASSIGNMENT.id))state.assignments.push(deepClone(PHASE9_DEMO_COMPLETED_ASSIGNMENT));
 const cb=state.bookings.find(b=>b.id===PHASE9_DEMO_COMPLETED_BOOKING.id);if(cb&&!cb.reviewId)cb.reviewId=null;
 syncAllWorkerRatings(state);
 return state;
}
const _seedStatePhase8=seedState; const _migrateStatePhase8=migrateState;
function seedPhase9State(state){const s=phase9SeedAndNormalize(state);s.schemaVersion=9;return s;}
function migrateStateV8(existing){const s=phase9SeedAndNormalize(_migrateStatePhase8(existing));s.schemaVersion=9;return s;}
seedState=function(){return seedPhase9State(_seedStatePhase8());};
migrateState=function(existing){return migrateStateV8(existing);};
getState=function(){try{const raw=localStorage.getItem("coopgig_state"),parsed=raw?JSON.parse(raw):null,state=migrateState(parsed);if(!PHASE10_LANGUAGES[state.language])state.language="en";if(!raw||parsed?.schemaVersion!==9||!Array.isArray(parsed?.reviews)||!Array.isArray(parsed?.messages)||!Array.isArray(parsed?.notifications))localStorage.setItem("coopgig_state",JSON.stringify(state));return state;}catch(e){const state=seedState();try{localStorage.setItem("coopgig_state",JSON.stringify(state));}catch(_){}return state;}};

function reviewStars(rating){const n=Math.max(0,Math.min(5,Math.round(Number(rating)||0)));return "★".repeat(n)+"☆".repeat(5-n);}
function getWorkerReviewSummary(workerId){const reviews=phase9VisibleReviews(workerId).sort((a,b)=>String(b.createdAt).localeCompare(String(a.createdAt))),calc=calculateWorkerRating(workerId);return {...calc,reviews};}

function markConversationRead(bookingId){const state=getState(),u=currentUser(),userId=u?.id;if(!phase9CanAccessConversation(bookingId,userId))return 0;const c=phase9ConversationForBooking(bookingId),entityId=currentRole()==="worker"?c?.workerId:c?.customerId,validReceiverIds=new Set([userId,entityId]);let count=0;state.messages.forEach(m=>{if(m.bookingId===bookingId&&validReceiverIds.has(m.receiverId)&&!m.read){m.read=true;count++;}});if(count)saveState(state);return count;}


/* ================= PHASE 10 — FIVE-LANGUAGE LOCALIZATION ================= */
const PHASE10_LANGUAGES={en:"English",hi:"हिन्दी",mr:"मराठी",ta:"தமிழ்",te:"తెలుగు"};
translations.ta={
 nav:{home:"முகப்பு",services:"சேவைகள்",how:"எப்படி செயல்படுகிறது",workers:"தொழிலாளர்களுக்காக",cooperative:"கூட்டுறவு பற்றி",login:"உள்நுழைவு",book:"சேவையை முன்பதிவு செய்"},
 hero:{eyebrow:"சரிபார்க்கப்பட்ட கூட்டுறவு பணியாளர் குழு",title:"நம்பகமான உள்ளூர் சேவைகள். கூட்டுறவுகளால் இயக்கப்படுகிறது.",text:"கூட்டுறவு வேலைவாய்ப்பை ஆதரிக்கும்போது வீட்டு மற்றும் சமூக சேவைகளுக்காக நம்பகமான உள்ளூர் தொழிலாளர்களை முன்பதிவு செய்யுங்கள்.",cta:"சேவையை முன்பதிவு செய்",explore:"சேவைகளைப் பார்க்கவும்",trust:"கற்பனை டெமோ தரவு — முன்புற முன்மாதிரி"},
 stats:{services:"டெமோ சேவைகள் நிறைவு",workers:"சரிபார்க்கப்பட்ட டெமோ தொழிலாளர்கள்",coops:"பங்கேற்கும் கூட்டுறவுகள்",rating:"சராசரி டெமோ மதிப்பீடு"},
 services:{title:"உங்கள் சமூகத்திலிருந்து தினசரி உதவி.",view:"அனைத்து சேவைகளையும் முன்பதிவு செய் →"},
 how:{title:"வாடிக்கையாளர்களுக்கு எளிது. தொழிலாளர்களுக்கு நியாயமானது.",s1:"உங்களுக்கு என்ன தேவை என்று சொல்லுங்கள்",p1:"சேவையைத் தேர்ந்தெடுத்து, பணியை விவரித்து, வசதியான இடத்தைத் தேர்ந்தெடுக்கவும்.",s2:"சரிபார்க்கப்பட்ட தொழிலாளரைத் தேர்ந்தெடுக்கவும்",p2:"திறன், அனுபவம், மதிப்பீடுகள், விமர்சனங்கள் மற்றும் மதிப்பிடப்பட்ட ETA-ஐ ஒப்பிடுங்கள்.",s3:"ஆய்வு மற்றும் மதிப்பீடு",p3:"தொழிலாளர் தேவையை ஆய்வு செய்து வெளிப்படையான மதிப்பீட்டை வழங்குகிறார்.",s4:"சேவையை முடித்து மதிப்பாய்வு செய்யுங்கள்",p4:"சேவையைத் தொடருங்கள், கட்டணத்தை முடித்து மதிப்பாய்வு வழங்குங்கள்."},
 workers:{title:"கூட்டுறவு திறமைகளுக்கான டிஜிட்டல் தளம்.",text:"தொழிலாளர்கள் கோரிக்கைகள், கிடைக்கும் நிலை, சேவை நிலை, வருமானம், விமர்சனங்கள் மற்றும் வாடிக்கையாளர் உரையாடல்களை ஒரே இடத்தில் நிர்வகிக்கலாம்."},
 coop:{title:"ஒரு சந்தையை விட அதிகம்.",text:"Co-opGig சரிபார்க்கப்பட்ட கூட்டுறவு தொழிலாளர்கள், உள்ளூர் வேலைவாய்ப்பு, வெளிப்படையான ஒதுக்கீடு மற்றும் பங்கு அடிப்படையிலான ஒருங்கிணைப்பை மையமாகக் கொண்டது."},
 cta:{title:"முழுமையான சேவை பயணத்தை அனுபவிக்க தயாரா?",text:"வாடிக்கையாளர் பயணத்தை முயற்சிக்கவும் அல்லது டெமோ உள்நுழைவின் மூலம் எந்தப் பங்கு டாஷ்போர்டையும் திறக்கவும்.",button:"முன்பதிவைத் தொடங்கு →"}
};
translations.te={
 nav:{home:"హోమ్",services:"సేవలు",how:"ఇది ఎలా పనిచేస్తుంది",workers:"కార్మికుల కోసం",cooperative:"సహకారం గురించి",login:"లాగిన్",book:"సేవను బుక్ చేయండి"},
 hero:{eyebrow:"ధృవీకరించిన సహకార కార్మిక బృందం",title:"నమ్మకమైన స్థానిక సేవలు. సహకార సంస్థల ద్వారా.",text:"సహకార ఉపాధికి మద్దతు ఇస్తూ గృహ మరియు కమ్యూనిటీ సేవల కోసం నమ్మకమైన స్థానిక కార్మికులను బుక్ చేయండి.",cta:"సేవను బుక్ చేయండి",explore:"సేవలను చూడండి",trust:"కల్పిత డెమో డేటా — ఫ్రంట్‌ఎండ్ ప్రోటోటైప్"},
 stats:{services:"డెమో సేవలు పూర్తయ్యాయి",workers:"ధృవీకరించిన డెమో కార్మికులు",coops:"పాల్గొనే సహకార సంస్థలు",rating:"సగటు డెమో రేటింగ్"},
 services:{title:"మీ కమ్యూనిటీ నుండి రోజువారీ సహాయం.",view:"అన్ని సేవలను బుక్ చేయండి →"},
 how:{title:"కస్టమర్లకు సులభం. కార్మికులకు మరింత న్యాయం.",s1:"మీకు ఏమి కావాలో చెప్పండి",p1:"సేవను ఎంచుకుని, పనిని వివరించి, అనుకూలమైన ప్రదేశాన్ని ఎంచుకోండి.",s2:"ధృవీకరించిన కార్మికుడిని ఎంచుకోండి",p2:"నైపుణ్యం, అనుభవం, రేటింగ్‌లు, సమీక్షలు మరియు అంచనా ETAని పోల్చండి.",s3:"పరిశీలన & అంచనా",p3:"కార్మికుడు అవసరాన్ని పరిశీలించి పారదర్శక అంచనాను అందిస్తాడు.",s4:"సేవను పూర్తి చేసి సమీక్ష ఇవ్వండి",p4:"సేవను కొనసాగించి, చెల్లింపును పూర్తి చేసి సమీక్ష ఇవ్వండి."},
 workers:{title:"సహకార ప్రతిభకు డిజిటల్ వేదిక.",text:"కార్మికులు అభ్యర్థనలు, అందుబాటు, సేవ స్థితి, ఆదాయాలు, సమీక్షలు మరియు కస్టమర్ సంభాషణలను ఒకే చోట నిర్వహించగలరు."},
 coop:{title:"కేవలం మార్కెట్‌ప్లేస్ కంటే ఎక్కువ.",text:"Co-opGig ధృవీకరించిన సహకార కార్మికులు, స్థానిక ఉపాధి, పారదర్శక కేటాయింపు మరియు పాత్ర ఆధారిత సమన్వయంపై ఆధారపడింది."},
 cta:{title:"పూర్తి సేవా ప్రయాణాన్ని అనుభవించడానికి సిద్ధంగా ఉన్నారా?",text:"కస్టమర్ ఫ్లోను ప్రయత్నించండి లేదా డెమో లాగిన్ ద్వారా ఏదైనా పాత్ర డాష్‌బోర్డ్‌ను తెరవండి.",button:"బుకింగ్ ప్రారంభించండి →"}
};
const PHASE10_UI={
 "Home":["मुखपृष्ठ","मुख्यपृष्ठ","முகப்பு","హోమ్"],"Services":["सेवाएँ","सेवा","சேவைகள்","సేవలు"],"How It Works":["यह कैसे काम करता है","हे कसे काम करते","எப்படி செயல்படுகிறது","ఇది ఎలా పనిచేస్తుంది"],"For Workers":["कामगारों के लिए","कामगारांसाठी","தொழிலாளர்களுக்காக","కార్మికుల కోసం"],"About Cooperative":["सहकारी संस्था के बारे में","सहकारी संस्थेबद्दल","கூட்டுறவு பற்றி","సహకారం గురించి"],"Login":["लॉगिन","लॉगिन","உள்நுழைவு","లాగిన్"],"Book a Service":["सेवा बुक करें","सेवा बुक करा","சேவையை முன்பதிவு செய்","సేవను బుక్ చేయండి"],
 "Dashboard":["डैशबोर्ड","डॅशबोर्ड","டாஷ்போர்டு","డాష్‌బోర్డ్"],"Overview":["अवलोकन","आढावा","கண்ணோட்டம்","అవలోకనం"],"Cooperatives":["सहकारी संस्थाएँ","सहकारी संस्था","கூட்டுறவுகள்","సహకార సంస్థలు"],"Workers":["कामगार","कामगार","தொழிலாளர்கள்","కార్మికులు"],"Service Requests":["सेवा अनुरोध","सेवा विनंत्या","சேவை கோரிக்கைகள்","సేవా అభ్యర్థనలు"],"Assignments":["असाइनमेंट","वाटप","ஒதுக்கீடுகள்","కేటాయింపులు"],"Cross-Cooperative Requests":["अंतर-सहकारी अनुरोध","आंतर-सहकारी विनंत्या","கூட்டுறவு இடையிலான கோரிக்கைகள்","అంతర్-సహకార అభ్యర్థనలు"],"Availability":["उपलब्धता","उपलब्धता","கிடைக்கும் நிலை","అందుబాటు"],"Operations Map":["ऑपरेशंस मानचित्र","ऑपरेशन्स नकाशा","செயல்பாட்டு வரைபடம்","ఆపరేషన్స్ మ్యాప్"],"Verification":["सत्यापन","सत्यापन","சரிபார்ப்பு","ధృవీకరణ"],"Ongoing Services":["चल रही सेवाएँ","सुरू सेवा","நடப்பு சேவைகள்","కొనసాగుతున్న సేవలు"],"Complaints / Escalations":["शिकायतें / एस्केलेशन","तक्रारी / एस्कलेशन","புகார்கள் / உயர்வு","ఫిర్యాదులు / ఎస్కలేషన్లు"],"Worker Welfare":["कामगार कल्याण","कामगार कल्याण","தொழிலாளர் நலன்","కార్మిక సంక్షేమం"],"Performance":["प्रदर्शन","कामगिरी","செயல்திறன்","పనితీరు"],"Demand & Workforce":["मांग और कार्यबल","मागणी व कार्यबल","தேவை மற்றும் பணியாளர் குழு","డిమాండ్ & వర్క్‌ఫోర్స్"],"Audit Activity":["ऑडिट गतिविधि","ऑडिट क्रियाकलाप","தணிக்கை செயல்பாடு","ఆడిట్ కార్యకలాపం"],"Notifications":["सूचनाएँ","सूचना","அறிவிப்புகள்","నోటిఫికేషన్‌లు"],"Messages":["संदेश","संदेश","செய்திகள்","సందేశాలు"],"Reviews":["समीक्षाएँ","समीक्षा","விமர்சனங்கள்","సమీక్షలు"],"Profile":["प्रोफ़ाइल","प्रोफाइल","சுயவிவரம்","ప్రొఫైల్"],"Settings":["सेटिंग्स","सेटिंग्ज","அமைப்புகள்","సెట్టింగ్‌లు"],"Logout":["लॉगआउट","लॉगआउट","வெளியேறு","లాగ్ అవుట్"],"Help":["मदद","मदत","உதவி","సహాయం"],"Language":["भाषा","भाषा","மொழி","భాష"],
 "Select Service":["सेवा चुनें","सेवा निवडा","சேவையைத் தேர்ந்தெடுக்கவும்","సేవను ఎంచుకోండి"],"Service Category":["सेवा श्रेणी","सेवा श्रेणी","சேவை வகை","సేవా వర్గం"],"Requirements":["आवश्यकताएँ","आवश्यकता","தேவைகள்","అవసరాలు"],"Location":["स्थान","ठिकाण","இடம்","స్థానం"],"Select Location":["स्थान चुनें","ठिकाण निवडा","இடத்தைத் தேர்ந்தெடுக்கவும்","స్థానాన్ని ఎంచుకోండి"],"Date":["तारीख","तारीख","தேதி","తేదీ"],"Time":["समय","वेळ","நேரம்","సమయం"],"Continue":["जारी रखें","पुढे चला","தொடரவும்","కొనసాగించండి"],"Back":["वापस","मागे","பின்செல்","వెనుకకు"],"Find Workers":["कामगार खोजें","कामगार शोधा","தொழிலாளர்களைக் கண்டறியவும்","కార్మికులను కనుగొనండి"],"Matching Workers":["मिलान किए गए कामगार","जुळलेले कामगार","பொருந்தும் தொழிலாளர்கள்","సరిపోలిన కార్మికులు"],"Best Match":["सर्वश्रेष्ठ मिलान","सर्वोत्तम जुळणी","சிறந்த பொருத்தம்","ఉత్తమ సరిపోలిక"],"Alternatives":["विकल्प","पर्याय","மாற்றுகள்","ప్రత్యామ్నాయాలు"],"Select Worker":["कामगार चुनें","कामगार निवडा","தொழிலாளரைத் தேர்ந்தெடுக்கவும்","కార్మికుడిని ఎంచుకోండి"],"Confirm Booking":["बुकिंग की पुष्टि करें","बुकिंगची पुष्टी करा","முன்பதிவை உறுதிப்படுத்தவும்","బుకింగ్‌ను నిర్ధారించండి"],"Booking Confirmed":["बुकिंग की पुष्टि हुई","बुकिंगची पुष्टी झाली","முன்பதிவு உறுதி செய்யப்பட்டது","బుకింగ్ నిర్ధారించబడింది"],"Booking Status":["बुकिंग स्थिति","बुकिंग स्थिती","முன்பதிவு நிலை","బుకింగ్ స్థితి"],"Cancel Booking":["बुकिंग रद्द करें","बुकिंग रद्द करा","முன்பதிவை ரத்து செய்","బుకింగ్‌ను రద్దు చేయండి"],
 "View Profile & Reviews":["प्रोफ़ाइल और समीक्षाएँ देखें","प्रोफाइल आणि समीक्षा पहा","சுயவிவரம் மற்றும் விமர்சனங்களைப் பார்க்கவும்","ప్రొఫైల్ & సమీక్షలను చూడండి"],"View Profile":["प्रोफ़ाइल देखें","प्रोफाइल पहा","சுயவிவரத்தைப் பார்க்கவும்","ప్రొఫైల్ చూడండి"],"View Reviews":["समीक्षाएँ देखें","समीक्षा पहा","விமர்சனங்களைப் பார்க்கவும்","సమీక్షలు చూడండి"],"Verified Worker":["सत्यापित कामगार","सत्यापित कामगार","சரிபார்க்கப்பட்ட தொழிலாளர்","ధృవీకరించిన కార్మికుడు"],"Available":["उपलब्ध","उपलब्ध","கிடைக்கும்","అందుబాటులో ఉంది"],"Busy":["व्यस्त","व्यस्त","பிஸி","బిజీ"],"Offline":["ऑफ़लाइन","ऑफलाइन","ஆஃப்லைன்","ఆఫ్‌లైన్"],"ETA":["अनुमानित आगमन","अंदाजे आगमन","வருகை நேரம்","అంచనా రాక సమయం"],"Rating":["रेटिंग","रेटिंग","மதிப்பீடு","రేటింగ్"],"Experience":["अनुभव","अनुभव","அனுபவம்","అనుభవం"],"Workload":["कार्यभार","कामाचा भार","பணிச்சுமை","పని భారం"],"Cooperative":["सहकारी संस्था","सहकारी संस्था","கூட்டுறவு","సహకార సంస్థ"],"Match Score":["मिलान स्कोर","जुळणी गुण","பொருத்த மதிப்பெண்","సరిపోలిక స్కోర్"],"Skill Match":["कौशल मिलान","कौशल्य जुळणी","திறன் பொருத்தம்","నైపుణ్య సరిపోలిక"],
 "Rate Worker":["कामगार को रेट करें","कामगाराला रेट करा","தொழிலாளரை மதிப்பிடுங்கள்","కార్మికుడిని రేట్ చేయండి"],"Your Rating":["आपकी रेटिंग","तुमचे रेटिंग","உங்கள் மதிப்பீடு","మీ రేటింగ్"],"Write a Review":["समीक्षा लिखें","समीक्षा लिहा","விமர்சனம் எழுதுங்கள்","సమీక్ష రాయండి"],"Submit Review":["समीक्षा सबमिट करें","समीक्षा सबमिट करा","விமர்சனத்தை சமர்ப்பிக்கவும்","సమీక్షను సమర్పించండి"],"Review Submitted":["समीक्षा सबमिट हो गई","समीक्षा सबमिट झाली","விமர்சனம் சமர்ப்பிக்கப்பட்டது","సమీక్ష సమర్పించబడింది"],"Review Already Submitted":["समीक्षा पहले ही सबमिट की जा चुकी है","समीक्षा आधीच सबमिट केली आहे","விமர்சனம் ஏற்கனவே சமர்ப்பிக்கப்பட்டது","సమీక్ష ఇప్పటికే సమర్పించబడింది"],"Recent Reviews":["हाल की समीक्षाएँ","अलीकडील समीक्षा","சமீபத்திய விமர்சனங்கள்","ఇటీవలి సమీక్షలు"],"No Reviews Yet":["अभी कोई समीक्षा नहीं","अद्याप समीक्षा नाही","இன்னும் விமர்சனங்கள் இல்லை","ఇంకా సమీక్షలు లేవు"],
 "Messages":["संदेश","संदेश","செய்திகள்","సందేశాలు"],"Message Worker":["कामगार को संदेश भेजें","कामगाराला संदेश पाठवा","தொழிலாளருக்கு செய்தி அனுப்பவும்","కార్మికుడికి సందేశం పంపండి"],"Send":["भेजें","पाठवा","அனுப்பவும்","పంపండి"],"Type a message…":["संदेश लिखें…","संदेश टाइप करा…","செய்தியை உள்ளிடவும்…","సందేశాన్ని టైప్ చేయండి…"],"Conversation":["बातचीत","संभाषण","உரையாடல்","సంభాషణ"],"No Messages Yet":["अभी कोई संदेश नहीं","अद्याप संदेश नाहीत","இன்னும் செய்திகள் இல்லை","ఇంకా సందేశాలు లేవు"],"Read":["पढ़ा गया","वाचले","படித்தது","చదివారు"],"Unread":["अपठित","न वाचलेले","படிக்காதது","చదవనిది"],"Call Worker":["कामगार को कॉल करें","कामगाराला कॉल करा","தொழிலாளரை அழைக்கவும்","కార్మికుడికి కాల్ చేయండి"],"Demo Call":["डेमो कॉल","डेमो कॉल","டெமோ அழைப்பு","డెమో కాల్"],"Start Conversation":["बातचीत शुरू करें","संभाषण सुरू करा","உரையாடலைத் தொடங்குங்கள்","సంభాషణ ప్రారంభించండి"],
 "Notifications":["सूचनाएँ","सूचना","அறிவிப்புகள்","నోటిఫికేషన్‌లు"],"All":["सभी","सर्व","அனைத்தும்","అన్నీ"],"Mark as Read":["पढ़ा हुआ करें","वाचले म्हणून चिन्हांकित करा","படித்ததாகக் குறிக்கவும்","చదివినట్లు గుర్తించండి"],"Mark All as Read":["सभी को पढ़ा हुआ करें","सर्व वाचले म्हणून चिन्हांकित करा","அனைத்தையும் படித்ததாகக் குறிக்கவும்","అన్నింటినీ చదివినట్లు గుర్తించండి"],"You're All Caught Up":["आप पूरी तरह अपडेट हैं","तुम्ही अद्ययावत आहात","நீங்கள் அனைத்தையும் பார்த்துவிட்டீர்கள்","మీరు పూర్తిగా అప్‌డేట్ అయ్యారు"],"No Notifications":["कोई सूचनाएँ नहीं","कोणत्याही सूचना नाहीत","அறிவிப்புகள் இல்லை","నోటిఫికేషన్‌లు లేవు"],
 "Requested":["अनुरोधित","विनंती केलेले","கோரப்பட்டது","అభ్యర్థించబడింది"],"Assigned":["असाइन किया गया","वाटप झाले","ஒதுக்கப்பட்டது","కేటాయించబడింది"],"Accepted":["स्वीकार किया गया","स्वीकारले","ஏற்கப்பட்டது","ఆమోదించబడింది"],"On the way":["रास्ते में","मार्गावर","வழியில்","దారిలో ఉంది"],"Arrived":["पहुंच गया","पोहोचले","வந்துவிட்டார்","చేరుకున్నారు"],"Inspection in progress":["निरीक्षण जारी है","तपासणी सुरू आहे","ஆய்வு நடைபெறுகிறது","పరిశీలన జరుగుతోంది"],"Estimate pending":["अनुमान लंबित","अंदाज प्रलंबित","மதிப்பீடு நிலுவையில் உள்ளது","అంచనా పెండింగ్‌లో ఉంది"],"Customer decision":["ग्राहक का निर्णय","ग्राहकाचा निर्णय","வாடிக்கையாளர் முடிவு","కస్టమర్ నిర్ణయం"],"Service in progress":["सेवा जारी है","सेवा सुरू आहे","சேவை நடைபெறுகிறது","సేవ కొనసాగుతోంది"],"Completed":["पूरा हुआ","पूर्ण","முடிந்தது","పూర్తయింది"],"Cancelled":["रद्द","रद्द","ரத்து","రద్దు"],
 "Pending":["लंबित","प्रलंबित","நிலுவையில்","పెండింగ్"],"Test Scheduled":["परीक्षण निर्धारित","चाचणी नियोजित","சோதனை திட்டமிடப்பட்டது","పరీక్ష షెడ్యూల్ చేయబడింది"],"Test Attended":["परीक्षण में उपस्थित","चाचणीला उपस्थित","சோதனையில் கலந்து கொண்டார்","పరీక్షకు హాజరయ్యారు"],"Verified":["सत्यापित","सत्यापित","சரிபார்க்கப்பட்டது","ధృవీకరించబడింది"],"Failed":["असफल","अयशस्वी","தோல்வி","విఫలమైంది"],"Suspended":["निलंबित","निलंबित","இடைநிறுத்தப்பட்டது","సస్పెండ్ చేయబడింది"],
 "Insurance":["बीमा","विमा","காப்பீடு","భీమా"],"Policy Status":["पॉलिसी स्थिति","पॉलिसी स्थिती","காப்பீட்டு நிலை","పాలసీ స్థితి"],"Coverage":["कवरेज","कव्हरेज","காப்பீட்டு பாதுகாப்பு","కవరేజ్"],"Provider":["प्रदाता","प्रदाता","வழங்குநர்","ప్రదాత"],"Policy Reference":["पॉलिसी संदर्भ","पॉलिसी संदर्भ","காப்பீட்டு குறிப்பு","పాలసీ సూచన"],"Start Date":["आरंभ तिथि","सुरुवातीची तारीख","தொடக்க தேதி","ప్రారంభ తేదీ"],"Expiry Date":["समाप्ति तिथि","कालबाह्य तारीख","காலாவதி தேதி","గడువు తేదీ"],"Claims":["दावे","दावे","கோரிக்கைகள்","క్లెయిమ్‌లు"],"Submit Claim":["दावा सबमिट करें","दावा सबमिट करा","கோரிக்கையை சமர்ப்பிக்கவும்","క్లెయిమ్ సమర్పించండి"],"Welfare Benefits":["कल्याण लाभ","कल्याण लाभ","நலத்திட்ட பயன்கள்","సంక్షేమ ప్రయోజనాలు"],"Training":["प्रशिक्षण","प्रशिक्षण","பயிற்சி","శిక్షణ"],"Safety":["सुरक्षा","सुरक्षा","பாதுகாப்பு","భద్రత"],"Cooperative Membership":["सहकारी सदस्यता","सहकारी सदस्यत्व","கூட்டுறவு உறுப்பினர்","సహకార సభ్యత్వం"],
 "Complaints":["शिकायतें","तक्रारी","புகார்கள்","ఫిర్యాదులు"],"Complaint ID":["शिकायत आईडी","तक्रार आयडी","புகார் ஐடி","ఫిర్యాదు ID"],"Booking ID":["बुकिंग आईडी","बुकिंग आयडी","முன்பதிவு ஐடி","బుకింగ్ ID"],"Category":["श्रेणी","श्रेणी","வகை","వర్గం"],"Description":["विवरण","वर्णन","விளக்கம்","వివరణ"],"Priority":["प्राथमिकता","प्राधान्य","முன்னுரிமை","ప్రాధాన్యత"],"Status":["स्थिति","स्थिती","நிலை","స్థితి"],"Open":["खुला","उघडे","திறந்தது","తెరవబడింది"],"Under Review":["समीक्षा में","पुनरावलोकनात","மதிப்பாய்வில்","సమీక్షలో ఉంది"],"Resolved":["समाधान किया गया","निराकरण झाले","தீர்க்கப்பட்டது","పరిష్కరించబడింది"],"Escalated":["एस्केलेट किया गया","एस्केलेट केले","உயர்த்தப்பட்டது","ఎస్కలేట్ చేయబడింది"],"Closed":["बंद","बंद","மூடப்பட்டது","మూసివేయబడింది"],"Resolve":["समाधान करें","निराकरण करा","தீர்க்கவும்","పరిష్కరించండి"],"Escalate":["एस्केलेट करें","एस्केलेट करा","உயர்த்தவும்","ఎస్కలేట్ చేయండి"],"Remarks":["टिप्पणियाँ","शेरा","குறிப்புகள்","వ్యాఖ్యలు"],
 "Demand":["मांग","मागणी","தேவை","డిమాండ్"],"Workforce":["कार्यबल","कार्यबल","பணியாளர் குழு","వర్క్‌ఫోర్స్"],"Capacity":["क्षमता","क्षमता","திறன்","సామర్థ్యం"],"Available Workers":["उपलब्ध कामगार","उपलब्ध कामगार","கிடைக்கும் தொழிலாளர்கள்","అందుబాటులో ఉన్న కార్మికులు"],"Busy Workers":["व्यस्त कामगार","व्यस्त कामगार","பிஸியான தொழிலாளர்கள்","బిజీ కార్మికులు"],"Capacity Gap":["क्षमता अंतर","क्षमता तफावत","திறன் இடைவெளி","సామర్థ్య లోటు"],"High Demand":["उच्च मांग","जास्त मागणी","அதிக தேவை","అధిక డిమాండ్"],"Limited Capacity":["सीमित क्षमता","मर्यादित क्षमता","வரையறுக்கப்பட்ட திறன்","పరిమిత సామర్థ్యం"],"Overloaded":["अधिक भार","अतिभारित","அதிக சுமை","అధిక భారం"],"Adequate":["पर्याप्त","पुरेशी","போதுமானது","తగినంత"],"Service Category":["सेवा श्रेणी","सेवा श्रेणी","சேவை வகை","సేవా వర్గం"],"Area":["क्षेत्र","क्षेत्र","பகுதி","ప్రాంతం"],"Forecast":["पूर्वानुमान","अंदाज","முன்னறிவிப்பு","అంచనా"],"Rule-Based Forecast":["नियम-आधारित पूर्वानुमान","नियम-आधारित अंदाज","விதி அடிப்படையிலான முன்னறிவிப்பு","నియమ ఆధారిత అంచనా"],"Demo Analytics":["डेमो विश्लेषण","डेमो विश्लेषण","டெமோ பகுப்பாய்வு","డెమో విశ్లేషణ"],
 "Save":["सहेजें","जतन करा","சேமிக்கவும்","సేవ్ చేయండి"],"Close":["बंद करें","बंद करा","மூடவும்","మూసివేయండి"],"Delete":["हटाएँ","हटवा","நீக்கவும்","తొలగించండి"],"Submit":["सबमिट करें","सबमिट करा","சமர்ப்பிக்கவும்","సమర్పించండి"],"Yes":["हाँ","होय","ஆம்","అవును"],"No":["नहीं","नाही","இல்லை","కాదు"],"Confirm":["पुष्टि करें","पुष्टी करा","உறுதிப்படுத்தவும்","నిర్ధారించండి"],"Cancel":["रद्द करें","रद्द करा","ரத்து செய்","రద్దు చేయండి"],"Search worker…":["कामगार खोजें…","कामगार शोधा…","தொழிலாளரைத் தேடுங்கள்…","కార్మికుడిని వెతకండి…"],
 "No bookings found.":["कोई बुकिंग नहीं मिली।","कोणतीही बुकिंग सापडली नाही.","முன்பதிவுகள் எதுவும் இல்லை.","బుకింగ్‌లు ఏవీ కనుగొనబడలేదు."],"No workers available.":["कोई कामगार उपलब्ध नहीं है।","कोणतेही कामगार उपलब्ध नाहीत.","தொழிலாளர்கள் கிடைக்கவில்லை.","కార్మికులు అందుబాటులో లేరు."],"No complaints.":["कोई शिकायत नहीं।","तक्रारी नाहीत.","புகார்கள் இல்லை.","ఫిర్యాదులు లేవు."],"No cross-cooperative requests.":["कोई अंतर-सहकारी अनुरोध नहीं।","आंतर-सहकारी विनंत्या नाहीत.","கூட்டுறவு இடையிலான கோரிக்கைகள் இல்லை.","అంతర్-సహకార అభ్యర్థనలు లేవు."],
 "Something went wrong.":["कुछ गलत हो गया।","काहीतरी चूक झाली.","ஏதோ தவறு ஏற்பட்டது.","ఏదో తప్పు జరిగింది."],"Please try again.":["कृपया फिर से प्रयास करें।","कृपया पुन्हा प्रयत्न करा.","மீண்டும் முயற்சிக்கவும்.","దయచేసి మళ్లీ ప్రయత్నించండి."],"Booking not found.":["बुकिंग नहीं मिली।","बुकिंग सापडली नाही.","முன்பதிவு கிடைக்கவில்லை.","బుకింగ్ కనుగొనబడలేదు."],"Worker not found.":["कामगार नहीं मिला।","कामगार सापडला नाही.","தொழிலாளர் கிடைக்கவில்லை.","కార్మికుడు కనుగొనబడలేదు."],"Please enter a message.":["कृपया संदेश लिखें।","कृपया संदेश लिहा.","ஒரு செய்தியை உள்ளிடவும்.","దయచేసి సందేశాన్ని నమోదు చేయండి."],"Please enter a valid rating.":["कृपया मान्य रेटिंग दें।","कृपया वैध रेटिंग द्या.","சரியான மதிப்பீட்டை உள்ளிடவும்.","దయచేసి చెల్లుబాటు అయ్యే రేటింగ్ నమోదు చేయండి."]
};

Object.assign(PHASE10_UI,{
 "Electrician":["इलेक्ट्रीशियन","इलेक्ट्रीशियन","எலக்ட்ரீஷியன்","ఎలక్ట్రీషియన్"],"Plumber":["प्लंबर","प्लंबर","குழாய் பணியாளர்","ప్లంబర్"],"Carpenter":["बढ़ई","सुतार","தச்சர்","వడ్రంగి"],"Painter":["पेंटर","पेंटर","வண்ணப்பூச்சாளர்","పెయింటర్"],"Cleaner":["सफाईकर्मी","स्वच्छता कामगार","துப்புரவு பணியாளர்","క్లీనర్"],"Gardener":["माली","माळी","தோட்டக்காரர்","తోటమాలి"],"Driver":["ड्राइवर","ड्रायव्हर","ஓட்டுநர்","డ్రైవర్"],"Caregiver":["देखभालकर्ता","केअरगिव्हर","பராமரிப்பாளர்","సంరక్షణ కార్మికుడు"],"Technician":["तकनीशियन","तंत्रज्ञ","தொழில்நுட்ப நிபுணர்","టెక్నీషియన్"],"Domestic Helper":["घरेलू सहायक","घरगुती मदतनीस","வீட்டு உதவியாளர்","గృహ సహాయకుడు"],
 "Select service":["सेवा चुनें","सेवा निवडा","சேவையைத் தேர்ந்தெடுக்கவும்","సేవను ఎంచుకోండి"],"No demand data.":["मांग का डेटा नहीं है।","मागणीचा डेटा नाही.","தேவை தரவு இல்லை.","డిమాండ్ డేటా లేదు."],"No area data.":["क्षेत्र का डेटा नहीं है।","क्षेत्राचा डेटा नाही.","பகுதி தரவு இல்லை.","ప్రాంత డేటా లేదు."],"No audit events recorded yet.":["अभी कोई ऑडिट घटना दर्ज नहीं हुई है।","अद्याप कोणतीही ऑडिट नोंद नाही.","தணிக்கை நிகழ்வுகள் இன்னும் பதிவு செய்யப்படவில்லை.","ఇంకా ఆడిట్ ఈవెంట్‌లు నమోదు కాలేదు."],"No ongoing services":["कोई चल रही सेवा नहीं","सध्या कोणतीही सेवा नाही","நடப்பு சேவைகள் இல்லை","కొనసాగుతున్న సేవలు లేవు"],"No assignments":["कोई असाइनमेंट नहीं","कोणतेही वाटप नाही","ஒதுக்கீடுகள் இல்லை","కేటాయింపులు లేవు"],"No service requests":["कोई सेवा अनुरोध नहीं","कोणत्याही सेवा विनंत्या नाहीत","சேவை கோரிக்கைகள் இல்லை","సేవా అభ్యర్థనలు లేవు"],"No workers match the selected filters.":["चुने गए फ़िल्टर से कोई कामगार नहीं मिला।","निवडलेल्या फिल्टरशी कोणताही कामगार जुळला नाही.","தேர்ந்தெடுத்த வடிகட்டிகளுக்கு தொழிலாளர்கள் இல்லை.","ఎంచుకున్న ఫిల్టర్‌లకు కార్మికులు సరిపోలలేదు."],"All statuses":["सभी स्थितियाँ","सर्व स्थिती","அனைத்து நிலைகள்","అన్ని స్థితులు"],"All services":["सभी सेवाएँ","सर्व सेवा","அனைத்து சேவைகள்","అన్ని సేవలు"],"All verification":["सभी सत्यापन","सर्व सत्यापन","அனைத்து சரிபார்ப்புகள்","అన్ని ధృవీకరణలు"],"All availability":["सभी उपलब्धता","सर्व उपलब्धता","அனைத்து கிடைக்கும் நிலைகள்","అన్ని అందుబాటు స్థితులు"],"Rule-based recommendations":["नियम-आधारित सुझाव","नियम-आधारित शिफारसी","விதி அடிப்படையிலான பரிந்துரைகள்","నియమ ఆధారిత సిఫార్సులు"],"Shared booking state":["साझा बुकिंग स्थिति","सामायिक बुकिंग स्थिती","பகிரப்பட்ட முன்பதிவு நிலை","భాగస్వామ్య బుకింగ్ స్థితి"],"Shared federation state":["साझा महासंघ स्थिति","सामायिक महासंघ स्थिती","பகிரப்பட்ட கூட்டமைப்பு நிலை","భాగస్వామ్య సమాఖ్య స్థితి"],"Offline process":["ऑफ़लाइन प्रक्रिया","ऑफलाइन प्रक्रिया","ஆஃப்லைன் செயல்முறை","ఆఫ్‌లైన్ ప్రక్రియ"],"Leaflet + OpenStreetMap":["Leaflet + OpenStreetMap","Leaflet + OpenStreetMap","Leaflet + OpenStreetMap","Leaflet + OpenStreetMap"],"Demo audit trail for important federation operational actions. This is not production security logging.":["महत्वपूर्ण महासंघ कार्रवाइयों का डेमो ऑडिट ट्रेल। यह प्रोडक्शन सुरक्षा लॉगिंग नहीं है।","महत्त्वाच्या महासंघ कृतींचा डेमो ऑडिट ट्रेल. हे उत्पादन सुरक्षा लॉगिंग नाही.","முக்கிய கூட்டமைப்பு செயல்களுக்கான டெமோ தணிக்கை பதிவு. இது உற்பத்தி பாதுகாப்பு பதிவு அல்ல.","ముఖ్యమైన సమాఖ్య కార్యకలాపాల డెమో ఆడిట్ ట్రైల్. ఇది ప్రొడక్షన్ సెక్యూరిటీ లాగింగ్ కాదు."],
 "Professional information":["पेशेवर जानकारी","व्यावसायिक माहिती","தொழில்முறை தகவல்","వృత్తిపరమైన సమాచారం"],"Skills:":["कौशल:","कौशल्य:","திறன்கள்:","నైపుణ్యాలు:"],"Service areas:":["सेवा क्षेत्र:","सेवा क्षेत्रे:","சேவை பகுதிகள்:","సేవా ప్రాంతాలు:"],"Phone:":["फ़ोन:","फोन:","தொலைபேசி:","ఫోన్:"],"Email:":["ईमेल:","ईमेल:","மின்னஞ்சல்:","ఇమెయిల్:"],"Account information":["खाता जानकारी","खाते माहिती","கணக்கு தகவல்","ఖాతా సమాచారం"],"Privacy:":["गोपनीयता:","गोपनीयता:","தனியுரிமை:","గోప్యత:"],"Verification":["सत्यापन","सत्यापन","சரிபார்ப்பு","ధృవీకరణ"],"Status:":["स्थिति:","स्थिती:","நிலை:","స్థితి:"],"Test date:":["परीक्षण तिथि:","चाचणी तारीख:","சோதனை தேதி:","పరీక్ష తేదీ:"],
 "Worker:":["कामगार:","कामगार:","தொழிலாளர்:","కార్మికుడు:"],"Customer:":["ग्राहक:","ग्राहक:","வாடிக்கையாளர்:","కస్టమర్:"],"Created:":["बनाया गया:","तयार केले:","உருவாக்கப்பட்டது:","సృష్టించబడింది:"],"Description:":["विवरण:","वर्णन:","விளக்கம்:","వివరణ:"],"Administrative remarks:":["प्रशासनिक टिप्पणियाँ:","प्रशासकीय शेरा:","நிர்வாக குறிப்புகள்:","నిర్వాహక వ్యాఖ్యలు:"],"Update":["अपडेट करें","अद्यतन करा","புதுப்பிக்கவும்","అప్‌డేట్ చేయండి"],"Insured":["बीमित","विमा असलेले","காப்பீடு பெற்றவர்கள்","భీమా ఉన్నవారు"],"Pending Insurance":["बीमा लंबित","विमा प्रलंबित","காப்பீடு நிலுவையில்","భీమా పెండింగ్"],"Expired":["समाप्त","कालबाह्य","காலாவதியானது","గడువు ముగిసింది"],"No Coverage":["कोई कवरेज नहीं","कव्हरेज नाही","காப்பீடு இல்லை","కవరేజ్ లేదు"],"Training Records":["प्रशिक्षण रिकॉर्ड","प्रशिक्षण नोंदी","பயிற்சி பதிவுகள்","శిక్షణ రికార్డులు"],
 "Customer Dashboard":["ग्राहक डैशबोर्ड","ग्राहक डॅशबोर्ड","வாடிக்கையாளர் டாஷ்போர்டு","కస్టమర్ డాష్‌బోర్డ్"],"Worker Dashboard":["कामगार डैशबोर्ड","कामगार डॅशबोर्ड","தொழிலாளர் டாஷ்போர்டு","కార్మికుడి డాష్‌బోర్డ్"],"Platform Admin":["प्लेटफ़ॉर्म एडमिन","प्लॅटफॉर्म प्रशासन","தள நிர்வாகி","ప్లాట్‌ఫారమ్ అడ్మిన్"],"Security & Privacy":["सुरक्षा और गोपनीयता","सुरक्षा आणि गोपनीयता","பாதுகாப்பு மற்றும் தனியுரிமை","భద్రత & గోప్యత"],"No real payments":["कोई वास्तविक भुगतान नहीं","वास्तविक पेमेंट नाही","உண்மையான கட்டணங்கள் இல்லை","నిజమైన చెల్లింపులు లేవు"],"Frontend-only demo":["केवल फ्रंटएंड डेमो","फक्त फ्रंटएंड डेमो","முன்புற டெமோ மட்டும்","ఫ్రంట్‌ఎండ్ మాత్రమే డెమో"],
 "Notifications ³":["सूचनाएँ ³","सूचना ³","அறிவிப்புகள் ³","నోటిఫికేషన్‌లు ³"],"New Assignment":["नया असाइनमेंट","नवीन वाटप","புதிய ஒதுக்கீடு","కొత్త కేటాయింపు"],"New Review":["नई समीक्षा","नवीन समीक्षा","புதிய விமர்சனம்","కొత్త సమీక్ష"],"New Complaint":["नई शिकायत","नवीन तक्रार","புதிய புகார்","కొత్త ఫిర్యాదు"],"Booking Request Submitted":["बुकिंग अनुरोध भेजा गया","बुकिंग विनंती पाठवली","முன்பதிவு கோரிக்கை சமர்ப்பிக்கப்பட்டது","బుకింగ్ అభ్యర్థన సమర్పించబడింది"],"New Message":["नया संदेश","नवीन संदेश","புதிய செய்தி","కొత్త సందేశం"],"Estimate Ready":["अनुमान तैयार है","अंदाज तयार आहे","மதிப்பீடு தயாராக உள்ளது","అంచనా సిద్ధంగా ఉంది"],"Service Approved":["सेवा स्वीकृत","सेवा मंजूर","சேவை அங்கீகரிக்கப்பட்டது","సేవ ఆమోదించబడింది"],"Service completed. Please rate your experience.":["सेवा पूरी हुई। कृपया अपना अनुभव रेट करें।","सेवा पूर्ण झाली. कृपया तुमचा अनुभव रेट करा.","சேவை முடிந்தது. உங்கள் அனுபவத்தை மதிப்பிடவும்.","సేవ పూర్తయింది. దయచేసి మీ అనుభవాన్ని రేట్ చేయండి."],"Thank you for reviewing the worker.":["कामगार की समीक्षा करने के लिए धन्यवाद।","कामगाराची समीक्षा केल्याबद्दल धन्यवाद.","தொழிலாளரை மதிப்பாய்வு செய்ததற்கு நன்றி.","కార్మికుడిని సమీక్షించినందుకు ధన్యవాదాలు."]
});

Object.assign(PHASE10_UI,{"New Customer Review":["नई ग्राहक समीक्षा","नवीन ग्राहक समीक्षा","புதிய வாடிக்கையாளர் விமர்சனம்","కొత్త కస్టమర్ సమీక్ష"],"New Service Request":["नया सेवा अनुरोध","नवीन सेवा विनंती","புதிய சேவை கோரிக்கை","కొత్త సేవా అభ్యర్థన"],"Federation Assistance Requested":["महासंघ सहायता का अनुरोध","महासंघ सहाय्याची विनंती","கூட்டமைப்பு உதவி கோரப்பட்டது","సమాఖ్య సహాయం అభ్యర్థించబడింది"]});
for(const lang of Object.keys(PHASE10_LANGUAGES)){
  translations[lang]=translations[lang]||{};
  translations[lang].ui={};
  Object.entries(PHASE10_UI).forEach(([en,vals])=>translations[lang].ui[en]=lang==='en'?en:vals[['hi','mr','ta','te'].indexOf(lang)]||en);
}
function phase10TranslationKeyPath(lang,key){return String(key||"").split(".").reduce((o,k)=>o?.[k],translations[lang]||translations.en);}
function phase10TranslatePhrase(text,lang=getState().language||"en"){
  const raw=String(text??""), trimmed=raw.trim();
  if(!trimmed)return raw;
  if(lang==='en')return raw;
  const v=translations[lang]?.ui?.[trimmed];
  if(v)return raw===trimmed?v:raw.replace(trimmed,v);
  const statusMap={REQUESTED:"Requested",ASSIGNMENT_PENDING:"Assignment pending",ASSIGNED:"Assigned",ACCEPTED:"Accepted",ON_THE_WAY:"On the way",ARRIVED:"Arrived",INSPECTION:"Inspection in progress",ESTIMATE_PENDING:"Estimate pending",CUSTOMER_DECISION:"Customer decision",SERVICE_IN_PROGRESS:"Service in progress",COMPLETED:"Completed",CANCELLED:"Cancelled",PENDING:"Pending",TEST_SCHEDULED:"Test Scheduled",TEST_ATTENDED:"Test Attended",VERIFIED:"Verified",FAILED:"Failed",SUSPENDED:"Suspended",OPEN:"Open",UNDER_REVIEW:"Under Review",RESOLVED:"Resolved",ESCALATED:"Escalated",CLOSED:"Closed"};
  if(statusMap[trimmed])return translations[lang]?.ui?.[statusMap[trimmed]]||trimmed;
  const dynamic=[
   [/^Your service request (.+) has been submitted\.$/, {en:"Your service request $1 has been submitted.",hi:"आपका सेवा अनुरोध $1 भेज दिया गया है।",mr:"तुमची सेवा विनंती $1 पाठवली आहे.",ta:"உங்கள் சேவை கோரிக்கை $1 சமர்ப்பிக்கப்பட்டது.",te:"మీ సేవా అభ్యర్థన $1 సమర్పించబడింది."}],
   [/^New service request (.+) is available for Federation Administration review\.$/, {en:"New service request $1 is available for Federation Administration review.",hi:"नया सेवा अनुरोध $1 महासंघ प्रशासन की समीक्षा के लिए उपलब्ध है।",mr:"नवीन सेवा विनंती $1 महासंघ प्रशासनाच्या पुनरावलोकनासाठी उपलब्ध आहे.",ta:"புதிய சேவை கோரிக்கை $1 கூட்டமைப்பு நிர்வாக மதிப்பாய்வுக்கு கிடைக்கிறது.",te:"కొత్త సేవా అభ్యర్థన $1 సమాఖ్య పరిపాలన సమీక్షకు అందుబాటులో ఉంది."}],
   [/^You received a (\d+)-star review from a customer\.$/, {en:"You received a $1-star review from a customer.",hi:"आपको ग्राहक से $1-स्टार समीक्षा मिली है।",mr:"तुम्हाला ग्राहकाकडून $1-स्टार समीक्षा मिळाली आहे.",ta:"வாடிக்கையாளரிடமிருந்து $1 நட்சத்திர மதிப்பாய்வு கிடைத்துள்ளது.",te:"మీకు కస్టమర్ నుండి $1-స్టార్ సమీక్ష వచ్చింది."}],
   [/^(.+) sent you a message\.$/, {en:"$1 sent you a message.",hi:"$1 ने आपको एक संदेश भेजा है।",mr:"$1 यांनी तुम्हाला संदेश पाठवला आहे.",ta:"$1 உங்களுக்கு ஒரு செய்தி அனுப்பியுள்ளார்.",te:"$1 మీకు ఒక సందేశం పంపారు."}],
   [/^Estimate of ₹([0-9,]+) is ready for your decision\.$/, {en:"Estimate of ₹$1 is ready for your decision.",hi:"₹$1 का अनुमान आपके निर्णय के लिए तैयार है।",mr:"₹$1 चा अंदाज तुमच्या निर्णयासाठी तयार आहे.",ta:"₹$1 மதிப்பீடு உங்கள் முடிவுக்காக தயாராக உள்ளது.",te:"₹$1 అంచనా మీ నిర్ణయం కోసం సిద్ధంగా ఉంది."}]
  ];
  for(const [re,vals] of dynamic){const m=trimmed.match(re);if(m){const template=vals[lang]||vals.en;return template.replace(/\$(\d+)/g,(_,i)=>m[Number(i)]||"");}}
  return raw;
}
function validateTranslations(){const langs=['en','hi','mr','ta','te'],base=new Set(Object.keys(translations.en?.ui||{})),missing={};for(const lang of langs.slice(1))missing[lang]=[...base].filter(k=>!translations[lang]?.ui?.[k]);return missing;}
