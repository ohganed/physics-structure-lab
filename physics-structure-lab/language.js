/* Shared language preference; all language variants use the same learning record IDs. */
const KEY='physics-structure-lab-language-v1';
export function getLanguage(){
 try{return localStorage.getItem(KEY)==='en'?'en':'ja';}catch{return 'ja';}
}
export function setLanguage(language){
 const value=language==='en'?'en':'ja';
 try{localStorage.setItem(KEY,value);}catch{}
 document.documentElement.lang=value;
 return value;
}
export const navigationLabels={
 overview:['ホーム','Home'],
 phenomenon:['現象と定義','Phenomena & Definitions'],
 acceleration:['加速度の概念','Acceleration Concepts'],
 mechanics:['力学12章','12 Mechanics Chapters'],
 connections:['知識のつながり','Knowledge Connections'],
 journeys:['つながり発見ラボ','Discovery Workshop'],
 transfer:['分野横断ラボ','Transfer Lab'],
 inquiry:['科学的探究ラボ','Scientific Inquiry Lab'],
 forcelab:['力と作用図','Forces & Free-Body Diagrams'],
 conservation:['保存則研究室','Conservation Lab'],
 advanced:['回転・振動・軌道','Rotation, Oscillation & Orbits'],
 analytical:['解析力学','Analytical Mechanics'],
 kinematics:['投射・滑車','Projectiles & Pulleys'],
 derivation:['公式の導出','Derivations'],
 lab:['動的実験','Interactive Experiment'],
 exam:['出題構造研究','Problem Design'],
 reflection:['思考ノート','Thinking Journal'],
 history:['科学史（任意）','History (Optional)']
};
export function translateNavigation(root=document){
 const en=getLanguage()==='en';document.documentElement.lang=en?'en':'ja';
 root.querySelectorAll('[data-page]').forEach(node=>{
  const names=navigationLabels[node.dataset.page];if(!names)return;
  const icon=node.querySelector('span');
  if(icon){node.replaceChildren(icon,document.createTextNode(' '+names[en?1:0]));}
  else node.textContent=names[en?1:0];
 });
 const edition=document.querySelector('.edition');if(edition)edition.textContent=en?'Digital Physics Textbook β':'デジタル教科書 β';
 const subtitle=document.querySelector('.brand small');if(subtitle)subtitle.textContent=en?'A laboratory for physical reasoning':'物理を考える研究室';
 const breadcrumb=document.querySelector('.breadcrumb');if(breadcrumb)breadcrumb.textContent=en?'PHYSICS / MECHANICS / CONCEPTS':'PHYSICS / 力学 / 運動の記述';
 const offline=document.getElementById('offline-status');
 // Offline status messages are owned by service-worker registration, not translated here.
 const foot=document.querySelector('.sidebar-foot');
 if(foot){
  const ownText=[...foot.childNodes].find(n=>n.nodeType===Node.TEXT_NODE&&n.textContent.includes('AIを使わず学べます'));
  if(ownText)ownText.textContent=en?' Study without AI':' AIを使わず学べます';
 }
}
