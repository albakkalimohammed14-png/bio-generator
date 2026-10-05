const ADS={top:``,bottom:``}; // ألصق أكواد Adsterra بين علامتي ` `
const $=s=>document.querySelector(s);
const h=(t,p,...k)=>{const e=Object.assign(document.createElement(t),p||{});k.flat().forEach(x=>e.append(x));return e};
const num=s=>parseFloat(String(s).replace(/[٠-٩]/g,d=>d.charCodeAt(0)-1632).replace(/[۰-۹]/g,d=>d.charCodeAt(0)-1776).replace(/[٫,]/g,"."));
const r2=n=>Math.round(n*100)/100;
const rnd=n=>crypto.getRandomValues(new Uint32Array(1))[0]%n;
const NOW=()=>new Date();

// --- زخرفة ---
const ST=[[0x1D400,0x1D41A],[0x1D468,0x1D482],[0x1D5A0,0x1D5BA],[0x1D5D4,0x1D5EE],[0x1D608,0x1D622],[0x1D670,0x1D68A],[0x1D4D0,0x1D4EA],[0x1D56C,0x1D586],[0x24B6,0x24D0],[0xFF21,0xFF41]];
const sty=(t,[U,L])=>[...t].map(c=>/[A-Z]/.test(c)?String.fromCodePoint(U+c.charCodeAt(0)-65):/[a-z]/.test(c)?String.fromCodePoint(L+c.charCodeAt(0)-97):c).join("");
const WR=["꧁$꧂","♛ $ ♛","✦ $ ✦","『$』","★彡 $ 彡★","༺$༻","⚡ $ ⚡","☆ $ ☆","❖ $ ❖","≛ $ ≛"];
// --- مبلغ بالحروف ---
const O=["","واحد","اثنان","ثلاثة","أربعة","خمسة","ستة","سبعة","ثمانية","تسعة","عشرة","أحد عشر","اثنا عشر","ثلاثة عشر","أربعة عشر","خمسة عشر","ستة عشر","سبعة عشر","ثمانية عشر","تسعة عشر"],TN=["","","عشرون","ثلاثون","أربعون","خمسون","ستون","سبعون","ثمانون","تسعون"],HU=["","مائة","مائتان","ثلاثمائة","أربعمائة","خمسمائة","ستمائة","سبعمائة","ثمانمائة","تسعمائة"];
const w3=n=>{const p=[],r=n%100;if(n>=100)p.push(HU[Math.floor(n/100)]);if(r)p.push(r<20?O[r]:(r%10?O[r%10]+" و":"")+TN[Math.floor(r/10)]);return p.join(" و")};
const SC=[0,["ألف","ألفان","آلاف"],["مليون","مليونان","ملايين"],["مليار","ملياران","مليارات"]];
const wd=n=>{if(!n)return"صفر";const p=[];for(let i=3;i>=0;i--){const g=Math.floor(n/10**(3*i))%1000;if(!g)continue;if(!i){p.push(w3(g));continue}const s=SC[i],m=g%100;p.push(g<3?s[g-1]:m==1||m==2?w3(g-m)+" و"+s[m-1]:m>=3&&m<=10?w3(g)+" "+s[2]:w3(g)+" "+s[0])}return p.join(" و")};
const CU=[["درهم مغربي","درهم","درهمان","دراهم","سنتيم","سنتيمان","سنتيمات"],["ريال سعودي","ريال","ريالان","ريالات","هللة","هللتان","هللات"],["درهم إماراتي","درهم","درهمان","دراهم","فلس","فلسان","فلوس"],["جنيه مصري","جنيه","جنيهان","جنيهات","قرش","قرشان","قروش"],["دولار أمريكي","دولار","دولاران","دولارات","سنت","سنتان","سنتات"]];
const cw=(n,a,b,c)=>{const m=n%100;return n==1?a:n==2?b:m>=3&&m<=10?wd(n)+" "+c:wd(n)+" "+a};
// --- هجري ---
const hp=d=>Object.fromEntries(new Intl.DateTimeFormat("en-u-ca-islamic-umalqura",{year:"numeric",month:"numeric",day:"numeric",timeZone:"UTC"}).formatToParts(d).map(p=>[p.type,parseInt(p.value)]));
// --- وحدات ---
const UN=[["طول",[["متر",1],["كيلومتر",1e3],["سنتيمتر",.01],["ملمتر",.001],["ميل",1609.344],["قدم",.3048],["بوصة",.0254]]],["وزن",[["كيلوغرام",1],["غرام",.001],["طن",1e3],["رطل",.45359237],["أونصة",.028349523]]],["مساحة",[["متر مربع",1],["هكتار",1e4],["كيلومتر مربع",1e6],["قدم مربع",.09290304]]],["حجم",[["لتر",1],["مليلتر",.001],["غالون أمريكي",3.785411784],["متر مكعب",1e3]]],["حرارة",[["مئوية"],["فهرنهايت"],["كلفن"]]]];
const UF=UN.flatMap(([c,l],i)=>l.map(([n],j)=>[i,j,c+": "+n]));
const SY=["꧁༺ ༻꧂","♛ ♕ ♚","★ ☆ ✦ ✧ ✪","♥ ♡ ❤ ❥","☪ ☽ ☾ ✮","✿ ❀ ❁ ❃","➤ ➔ ➜ ➺","✔ ✘ ✓ ✗","⚡ ☀ ☁ ☂","♪ ♫ ♬ ♩","❝ ❞ « »","⌘ ❖ ✺ ✹","▰▰▰▱▱","══════════","╰┈➤","⊹ ࣪ ˖ ✧˚","𓆩♡𓆪","ᯓ★ ᯓ✈︎","✨ 🔥 💫 🌟 💎","🇲🇦 🇸🇦 🇦🇪 🇪🇬 🇩🇿 🇹🇳"];
const dt=(a,b)=>Math.abs(new Date(b)-new Date(a))/864e5;

const TOOLS={
zakhrafa:{live:1,f:[{k:"t",l:"اسمك أو نصك",p:"مثال: Ahmed أو أحمد",v:"Ahmed"}],run:v=>{const t=v.t.trim();if(!t)return"";let o=[];if(/[A-Za-z]/.test(t))o=ST.map(s=>sty(t,s));if(/[\u0600-\u06FF]/.test(t))o.push([...t].map((c,i,A)=>c+(/[\u0621-\u064A]/.test(c)&&!/[اأإآدذرزوؤةىء]/.test(c)&&A[i+1]&&/[\u0621-\u064A]/.test(A[i+1])?"ـ":"")).join(""));return o.concat(WR.map(w=>w.replace("$",()=>t)))}},
mablagh:{f:[{k:"a",l:"المبلغ",t:"n",v:"1250.50"},{k:"c",l:"العملة",t:"select",o:CU.map(c=>c[0])}],run:v=>{const x=v.a;if(!(x>=0)||x>=1e12)return"أدخل مبلغا صحيحا";const c=CU[v.c],T=Math.round(x*100),i=Math.floor(T/100),f=T%100;let s=i?cw(i,c[1],c[2],c[3]):"";if(f)s+=(s?" و":"")+cw(f,c[4],c[5],c[6]);return"فقط "+(s||"صفر")+" لا غير"}},
hijri:{n:"يعتمد تقويم أم القرى، وقد يختلف يوما عن التقويم المعتمد في بلدك.",f:[{k:"m",l:"نوع التحويل",t:"select",o:["ميلادي ← هجري","هجري ← ميلادي"]},{k:"g",l:"التاريخ الميلادي",t:"date"},{k:"y",l:"السنة الهجرية",t:"n",v:"1448"},{k:"o",l:"الشهر الهجري (1 - 12)",t:"n"},{k:"d",l:"اليوم الهجري",t:"n"}],run:v=>{if(v.m==0)return v.g?new Intl.DateTimeFormat("ar-u-ca-islamic-umalqura",{dateStyle:"full"}).format(new Date(v.g+"T12:00:00")):"اختر التاريخ الميلادي";const{y,o:m,d}=v;if(!(y>1300&&y<1600&&m>=1&&m<=12&&d>=1&&d<=30))return"أدخل سنة وشهرا ويوما هجريا صحيحا";const s=Date.UTC(Math.round(y*.970229+621.57)-1,0,1);for(let i=0;i<800;i++){const t=new Date(s+i*864e5+432e5),p=hp(t);if(p.year==y&&p.month==m&&p.day==d)return t.toLocaleDateString("ar",{dateStyle:"full",timeZone:"UTC"})}return"تاريخ غير موجود"}},
age:{f:[{k:"b",l:"تاريخ الميلاد",t:"date"}],run:v=>{if(!v.b)return"اختر تاريخ الميلاد";const a=new Date(v.b),n=NOW();if(a>n)return"التاريخ في المستقبل";let y=n.getFullYear()-a.getFullYear(),m=n.getMonth()-a.getMonth(),d=n.getDate()-a.getDate();if(d<0){m--;d+=new Date(n.getFullYear(),n.getMonth(),0).getDate()}if(m<0){y--;m+=12}let b=new Date(n.getFullYear(),a.getMonth(),a.getDate());if(b<=n)b.setFullYear(n.getFullYear()+1);return[`عمرك: ${y} سنة و${m} شهر و${d} يوم`,`عدد الأيام التي عشتها: ${Math.floor((n-a)/864e5)}`,`باقي على عيد ميلادك: ${Math.ceil((b-n)/864e5)} يوم`]}},
datediff:{f:[{k:"a",l:"من تاريخ",t:"date"},{k:"b",l:"إلى تاريخ",t:"date"}],run:v=>{if(!v.a||!v.b)return"اختر التاريخين";const d=Math.round(dt(v.a,v.b));return[`الفرق: ${d} يوم`,`أي ${Math.floor(d/7)} أسبوع و${d%7} يوم`]}},
words:{live:1,f:[{k:"t",l:"النص",t:"area"}],run:v=>{const t=v.t,w=(t.match(/\S+/g)||[]).length;return[`الكلمات: ${w}`,`الأحرف: ${t.length}`,`بدون مسافات: ${t.replace(/\s/g,"").length}`,`الجمل: ${(t.match(/[^.!?؟\n]+/g)||[]).filter(x=>x.trim()).length}`,`وقت القراءة: ${w?Math.max(1,Math.ceil(w/200)):0} دقيقة`]}},
percent:{f:[{k:"m",l:"نوع الحساب",t:"select",o:["كم يساوي X% من Y","كم نسبة X من Y","السعر Y بعد تخفيض X%"]},{k:"x",l:"X",t:"n"},{k:"y",l:"Y",t:"n"}],run:v=>{const{x,y,m}=v;if(isNaN(x)||isNaN(y))return"أدخل الرقمين";return m==0?`${r2(x*y/100)}`:m==1?`${r2(x/y*100)}%`:[`السعر بعد الخصم: ${r2(y*(1-x/100))}`,`قيمة الخصم: ${r2(y*x/100)}`]}},
tva:{f:[{k:"a",l:"المبلغ",t:"n"},{k:"r",l:"نسبة الضريبة %",t:"n",v:"20"},{k:"m",l:"الحالة",t:"select",o:["المبلغ بدون ضريبة (HT)","المبلغ بالضريبة (TTC)"]}],run:v=>{const{a,r,m}=v;if(isNaN(a)||isNaN(r))return"أدخل المبلغ والنسبة";const ht=m?a/(1+r/100):a,tt=m?a:a*(1+r/100);return[`بدون ضريبة (HT): ${r2(ht)}`,`الضريبة (TVA): ${r2(tt-ht)}`,`بالضريبة (TTC): ${r2(tt)}`]}},
random:{b:"اسحب",f:[{k:"l",l:"الأسماء (اسم في كل سطر)",t:"area"},{k:"c",l:"عدد الفائزين",t:"n",v:"1"}],run:v=>{const a=v.l.split("\n").map(s=>s.trim()).filter(Boolean),c=Math.max(1,Math.min(v.c||1,a.length)),o=[];if(a.length<2)return"أدخل اسمين على الأقل";while(o.length<c)o.push(a.splice(rnd(a.length),1)[0]);return o.map((x,i)=>`الفائز ${i+1}: ${x}`)}},
password:{b:"ولّد",n:"تُولَّد كلمات المرور داخل متصفحك ولا تُرسَل لأي جهة.",f:[{k:"l",l:"الطول",t:"n",v:"16"},{k:"s",l:"نوع الأحرف",t:"select",o:["أحرف وأرقام ورموز","أحرف وأرقام","أرقام فقط"]}],run:v=>{const L=Math.min(64,Math.max(4,v.l||16)),A="abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ23456789",c=[A+"!@#$%^&*-_?",A,"0123456789"][v.s];return Array.from({length:5},()=>Array.from({length:L},()=>c[rnd(c.length)]).join(""))}},
symbols:{run:()=>SY},
units:{live:1,f:[{k:"v",l:"القيمة",t:"n",v:"1"},{k:"u",l:"الوحدة",t:"select",o:UF.map(x=>x[2])}],run:v=>{const x=v.v;if(isNaN(x))return"أدخل رقما";const[i,j]=UF[v.u],l=UN[i][1];if(i==4){const C=j==0?x:j==1?(x-32)*5/9:x-273.15;return[`${r2(C)} مئوية`,`${r2(C*9/5+32)} فهرنهايت`,`${r2(C+273.15)} كلفن`]}return l.map(([n,f])=>`${+(x*l[j][1]/f).toPrecision(8)} ${n}`)}},
bmi:{n:"للاستئناس فقط، واستشر طبيبا لتقييم حالتك.",f:[{k:"k",l:"الوزن (كغ)",t:"n"},{k:"c",l:"الطول (سم)",t:"n"}],run:v=>{const m=v.c/100;if(!(v.k>0&&m>0))return"أدخل الوزن والطول";const b=v.k/m/m;return[`مؤشر كتلة الجسم: ${r2(b)}`,`التصنيف: ${b<18.5?"نقص في الوزن":b<25?"وزن طبيعي":b<30?"زيادة في الوزن":"سمنة"}`]}},
privacy:{n:"قالب عام للاستئناس وليس استشارة قانونية.",f:[{k:"n",l:"اسم الموقع",v:"اسم موقعك"},{k:"u",l:"رابط الموقع",p:"https://example.com"},{k:"e",l:"بريد التواصل",p:"name@example.com"},{k:"a",l:"الإعلانات",t:"select",o:["نعرض إعلانات","لا نعرض إعلانات"]},{k:"s",l:"التحليلات",t:"select",o:["نستخدم أدوات تحليل","لا نستخدم أدوات تحليل"]}],run:v=>`سياسة الخصوصية لـ ${v.n}\nآخر تحديث: ${NOW().toLocaleDateString("ar")}\n\nنحترم خصوصيتك. توضح هذه السياسة المعلومات التي قد نجمعها عند زيارتك ${v.u||"الموقع"}.\n\n1. المعلومات التي نجمعها: قد نجمع معلومات غير شخصية مثل نوع المتصفح والصفحات التي تزورها، ولا نجمع بياناتك الشخصية إلا إذا أرسلتها لنا بنفسك.\n2. ملفات تعريف الارتباط: نستخدمها لتحسين التجربة، ويمكنك تعطيلها من إعدادات متصفحك.\n3. الإعلانات: ${v.a==0?"نعرض إعلانات من أطراف ثالثة قد تستخدم ملفات تعريف الارتباط لعرض إعلانات تناسب اهتماماتك.":"لا نعرض إعلانات على الموقع."}\n4. التحليلات: ${v.s==0?"نستخدم أدوات تحليل لفهم كيفية استخدام الموقع.":"لا نستخدم أدوات تحليل."}\n5. مشاركة البيانات: لا نبيع بياناتك ولا نشاركها إلا عند الضرورة القانونية.\n6. التواصل: لأي استفسار راسلنا على ${v.e||"بريدنا"}.`},
cleantext:{live:1,f:[{k:"t",l:"النص",t:"area"},{k:"m",l:"العملية",t:"select",o:["إزالة التشكيل","إزالة التطويل (ـ)","إزالة المسافات الزائدة","أرقام عربية ← غربية","أرقام غربية ← عربية"]}],run:v=>{const t=v.t;return[t.replace(/[\u064B-\u065F\u0670]/g,""),t.replace(/\u0640/g,""),t.replace(/[ \t]+/g," ").replace(/\n{3,}/g,"\n\n").trim(),t.replace(/[٠-٩]/g,d=>d.charCodeAt(0)-1632),t.replace(/[0-9]/g,d=>"٠١٢٣٤٥٦٧٨٩"[d])][v.m]}}
};

async function copy(t,b){try{await navigator.clipboard.writeText(t)}catch(e){const a=h("textarea",{value:t});document.body.append(a);a.select();document.execCommand("copy");a.remove()}const o=b.textContent;b.textContent="تم النسخ";setTimeout(()=>b.textContent=o,1500)}
function ad(s,c){const e=$(s);if(e&&c)e.append(document.createRange().createContextualFragment(c))}
function mount(id){
 const T=TOOLS[id],E={},out=h("div",{className:"out",ariaLive:"polite"});
 const val=()=>Object.fromEntries((T.f||[]).map(f=>[f.k,f.t=="select"?+E[f.k].value:f.t=="n"?num(E[f.k].value):E[f.k].value]));
 const go=ev=>{if(ev)ev.preventDefault();out.textContent="";let r;try{r=T.run(val())}catch(e){r="تحقق من المدخلات"}[].concat(r).filter(x=>x!=null&&x!=="").forEach(t=>{const b=h("button",{type:"button",className:"cp"},"انسخ");b.onclick=()=>copy(t,b);out.append(h("div",{className:"row"},h("span",{className:"txt"},t),b))})};
 const form=h("form",{className:"tool",autocomplete:"off",onsubmit:go});
 (T.f||[]).forEach(f=>{const i=f.t=="select"?h("select",{},f.o.map((o,n)=>h("option",{value:n},o))):f.t=="area"?h("textarea",{rows:5}):h("input",{type:f.t=="date"?"date":"text",inputMode:f.t=="n"?"decimal":"text"});i.id="f"+f.k;if(f.v!=null)i.value=f.v;if(f.p)i.placeholder=f.p;if(T.live)i.oninput=go;E[f.k]=i;form.append(h("label",{htmlFor:i.id},f.l),i)});
 if(T.f)form.append(h("button",{className:"go"},T.b||"احسب"));
 if(T.n)form.append(h("p",{className:"note"},T.n));
 $("#app").append(...(T.f?[form]:[]),out);
 ad("#ad-top",ADS.top);ad("#ad-bottom",ADS.bottom);
 if(T.live||!T.f)go();
}
