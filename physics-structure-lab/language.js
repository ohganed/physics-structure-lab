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
 electricity:['電気・電磁気11章','11 Electricity Chapters'],
 practice:['力学演習・総合研究','Mechanics Practice & Synthesis'],
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
export const navigationKeywords={
 overview:'start welcome entrance 初め ホーム 導入 入口',
 phenomenon:'観察 定義 距離 変位 位置 speed velocity position displacement definition',
 acceleration:'加速度 円運動 方向 velocity acceleration vector',
 mechanics:'力学 law Newton mechanics chapter ハミルトン ラグランジュ',
 electricity:'電気 電磁気 electrostatics electricity voltage current magnetism circuit Maxwell induction AC',
 practice:'力学 練習 問題 総合 演習 reasoning exercises problem synthesis worked answers',
 inquiry:'問い 仮説 予測 変数 比較 科学的 探究 experiment inquiry hypothesis control variables',
 transfer:'分野横断 電気 化学 波動 伝導 類推 energy fields analogy cross-domain transfer',
 journeys:'つながり 発見 発酵 熟成 思考ノート 記録 仮説 journey discovery idea',
 connections:'知識 概念 ベクトル 対称性 構造 つながり concept knowledge graph',
 forcelab:'力 作用図 自由物体図 摩擦 ニュートン free body friction Newton force',
 conservation:'エネルギー 衝突 保存則 運動量 impulse energy momentum collision',
 advanced:'回転 振動 軌道 重力 単振動 rigid body orbit rotation oscillation',
 analytical:'解析力学 固有モード 連成 ラグランジュ ハミルトン lagrange hamilton modes',
 kinematics:'斜方投射 滑車 等加速度 投射 projectile pulley atwood',
 derivation:'途中式 公式 証明 数学 derivation equations algebra',
 lab:'動的 実験 グラフ 位置 速度 simulation graphs motion',
 exam:'出題者 問題 解答 思考 問題設計 exam problem design',
 reflection:'自分の思考 思考ノート メタ認知 reflection metacognition',
 history:'科学史 歴史 optional history science'
};
export function filterNavigation(query='',root=document){
 const needle=String(query||'').normalize('NFKC').toLocaleLowerCase().trim();
 let found=0;
 root.querySelectorAll('#nav [data-page]').forEach(node=>{
  const labels=navigationLabels[node.dataset.page]||[];
  const terms=[node.dataset.page,...labels,navigationKeywords[node.dataset.page]||''].join(' ').normalize('NFKC').toLocaleLowerCase();
  const visible=!needle||terms.includes(needle);
  node.hidden=!visible;
  if(visible)found++;
 });
 const output=root.querySelector('#nav-search-status');
 if(output)output.textContent=needle?(getLanguage()==='en'?found+' matching sections':found+' 件見つかりました'):'';
 return found;
}
export function translateNavigation(root=document){
 const en=getLanguage()==='en';document.documentElement.lang=en?'en':'ja';
 const search=root.querySelector('#nav-search');
 if(search)search.placeholder=en?'e.g. force, energy, inquiry':'例：力、衝突、実験';
 const searchLabel=root.querySelector('.nav-search label');
 if(searchLabel)searchLabel.textContent=en?'Find a lesson':'教材を探す';
 root.querySelectorAll('[data-page]').forEach(node=>{
  const names=navigationLabels[node.dataset.page];if(!names)return;
  const icon=node.querySelector('span');
  if(icon){node.replaceChildren(icon,document.createTextNode(' '+names[en?1:0]));}
  else node.textContent=names[en?1:0];
 });
 filterNavigation(search?.value||'',root);
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
