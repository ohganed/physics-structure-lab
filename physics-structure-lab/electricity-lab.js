import {electricityLessons1} from './electricity-textbook-part1.js';
import {electricityLessons2} from './electricity-textbook-part2.js';
import {electricityLessons3} from './electricity-textbook-part3.js';
import {electricityFigure} from './electricity-situation-diagrams.js';
import {electricityDerivationNotes} from './electricity-derivation-notes.js';
import {electricityReasoningPart1} from './electricity-reasoning-part1.js';
import {electricityReasoningPart2} from './electricity-reasoning-part2.js';
import {electricityReasoningPart3} from './electricity-reasoning-part3.js';
import {electricityAlgebraBridges} from './electricity-algebra-bridges.js';
import {electricFieldExplorerHtml,installElectricFieldExplorer} from './electric-field-explorer.js';
import {electricityDefinitionFigure} from './electricity-definition-diagrams.js';
import {electricityWorkedExamples} from './electricity-worked-examples.js';
import {electricityExampleFigure} from './electricity-example-figures.js';
import {coulombForce,resistorNetwork,rcResponse,chargedParticleB} from './electricity-models.js';
import {getLanguage} from './language.js';
export const electricityChapters=[...electricityLessons1,...electricityLessons2,...electricityLessons3];
export const electricityReasoning={...electricityReasoningPart1,...electricityReasoningPart2,...electricityReasoningPart3};
const escapeHTML=x=>String(x).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const pair=(v,en)=>v[en?1:0];
const math=eq=>'<div class="formula tex-display" data-tex="'+escapeHTML(eq)+'">'+escapeHTML(eq)+'</div>';
const slider=(name,label,min,max,step,value)=>'<label for="electric-'+name+'">'+label+'</label><input id="electric-'+name+'" type="range" min="'+min+'" max="'+max+'" step="'+step+'" value="'+value+'">';
function chapterMarkup(chapter,index,en){
 const lang=en?'en':'ja';
 return '<article class="card electricity-chapter" id="electricity-chapter"><div class="eyebrow">'+(en?'ELECTRICITY & MAGNETISM':'電気・電磁気')+' / '+String(index+1).padStart(2,'0')+' / '+electricityChapters.length+'</div><h2>'+escapeHTML(pair(chapter.title,en))+'</h2>'
 +'<p>'+(en?'A complete sequence of phenomena, diagrams, mathematical derivations, physical interpretation and validity conditions. The diagrams belong to the situation explained here.':'現象の説明、状況に対応した図、式の導出、物理的意味、成立条件を順番に示します。新しい現象にはそれぞれの図を置きます。')+'</p>'
 +chapter.sections.map((section,n)=>'<section class="electricity-reading-section" id="electricity-'+section.id+'"><h3>'+(n+1)+'. '+escapeHTML(pair(section.title,en))+'</h3>'
  +'<p class="electricity-scene">'+escapeHTML(pair(section.scene,en))+'</p>'
  +electricityFigure(section.id,pair(section.title,en),lang)
  +'<div class="electricity-derivation"><h4>'+(en?'Equations and their derivation':'関係式と導出')+'</h4>'
  +section.derivation.map((eq,j)=>{
    const deep=electricityReasoning[section.id]?.[j];
    const kinds={
     law:['基本法則','Fundamental law'],counting:['電荷の数え方','Counting charge'],
     empirical:['実験法則','Empirical law'],vector:['向きを含めた表現','Vector expression'],
     principle:['重ね合わせの原理','Superposition principle'],decomposition:['成分分解','Component resolution'],
     definition:['定義','Definition'],consequence:['定義からの帰結','Consequence of a definition'],
     derivation:['導出結果','Derived relation'],integral:['積分表示','Integral form'],
     work:['仕事の関係','Work relation'],material:['媒質のモデル','Material model'],
     constraint:['実験条件の違い','Experimental constraints'],increment:['微小変化を考える','Incremental argument'],geometry:['形状と物性の関係','Geometry and material property'],conservation:['保存則からの帰結','Conservation-law consequence'],terminal:['電源の内部モデル','Source and terminal model'],balance:['回路の電圧収支','Circuit voltage balance'],differential:['時間変化の方程式','Time-evolution equation'],solution:['微分方程式の解','Differential-equation solution'], 'force-balance':['力の釣合い・向心力','Force and centripetal relation'],direction:['向きと符号の規則','Direction and sign convention'],laws:['素子の基本関係','Constitutive element relations']
    };
    return electricityDefinitionFigure(section.id,j,lang)
     +(deep?'<p class="electricity-formula-type"><strong>'+(en?'Type of relation: ':'この式の位置づけ：')+'</strong>'+escapeHTML(pair(kinds[deep.kind]||['物理的関係','Physical relation'],en))+'</p>':'')
     +math(eq)+'<p class="electricity-equation-explanation">'+escapeHTML(electricityDerivationNotes[section.id]?.[j]?.[en?1:0]||'')+'</p>'
     +(deep?'<div class="electricity-reasoning-expansion"><h5>'+(en?'Why this relation follows':'この関係を理解するまでの過程')+'</h5><ol>'+deep.steps.map(step=>'<li>'+escapeHTML(pair(step,en))+'</li>').join('')+'</ol>'+(electricityAlgebraBridges[section.id]?.[j]?.length?'<div class="electricity-algebra-bridges"><h6>'+(en?'Intermediate equations':'途中の式変形')+'</h6>'+electricityAlgebraBridges[section.id][j].map(item=>math(item.tex)+'<p>'+escapeHTML(pair(item.explanation,en))+'</p>').join('')+'</div>':'')+'</div>':'');
   }).join('')+'</div>'
  +'<p><strong>'+(en?'Physical meaning: ':'物理的意味：')+'</strong>'+escapeHTML(pair(section.meaning,en))+'</p>'
  +'<p class="muted"><strong>'+(en?'Validity and limits: ':'成立条件と限界：')+'</strong>'+escapeHTML(pair(section.limits,en))+'</p>'
  +(section.id==='field-lines'?electricFieldExplorerHtml(lang):'')+'</section>').join('')
 +(electricityWorkedExamples[chapter.key]?(()=>{
  const example=electricityWorkedExamples[chapter.key];
  return '<section class="electricity-worked-example"><h3>'+(en?'Worked example with all intermediate steps':'例題：途中式と判断を確かめる')+'</h3><h4>'+escapeHTML(pair(example.title,en))+'</h4><p>'+escapeHTML(pair(example.problem,en))+'</p>'
   +electricityExampleFigure(chapter.key,lang)
   +'<ol class="electricity-example-steps">'+example.steps.map(step=>'<li>'+math(step.formula)+'<p>'+escapeHTML(pair(step.explanation,en))+'</p></li>').join('')+'</ol></section>';
 })():'')
 +'<section class="electricity-chapter-connection"><h3>'+(en?'From here to the next model':'次の物理現象へ')+'</h3><p>'+(en?'The same conservation laws and field definitions continue to apply, but each new setup has its own geometry, boundaries, force directions and physical assumptions.':'すでに得た保存則や場の定義を利用しても、次の状況では物体や導体の配置、境界、力の方向、成立条件をあらためて確認します。')+'</p></section></article>';
}
function interactiveMarkup(en){
 return '<section class="card electricity-experiments" id="electricity-experiments"><h2>'+(en?'Change the parameters':'条件を変えて計算する')+'</h2><p>'+(en?'These calculations show ideal predictions, not measured results.':'いずれも理想モデルからの予測値で、測定値ではありません。')+'</p>'
 +'<div class="electricity-calculators">'
 +'<section><h3>'+(en?'Coulomb force':'点電荷間の力')+'</h3>'+slider('q1',en?'q₁ (μC)':'電荷 q₁（μC）',-5,5,.5,2)+slider('q2',en?'q₂ (μC)':'電荷 q₂（μC）',-5,5,.5,-1)+slider('distance',en?'Distance r (m)':'距離 r（m）',.1,1,.05,.3)+'<p id="electric-coulomb-out" aria-live="polite"></p></section>'
 +'<section><h3>'+(en?'Two resistors':'2つの抵抗')+'</h3><label for="electric-mode">'+(en?'Connection':'接続方法')+'</label><select id="electric-mode"><option value="series">'+(en?'Series':'直列')+'</option><option value="parallel">'+(en?'Parallel':'並列')+'</option></select>'+slider('source',en?'Source voltage (V)':'電源電圧（V）',1,24,1,9)+slider('r1',en?'R₁ (Ω)':'抵抗 R₁（Ω）',1,20,1,6)+slider('r2',en?'R₂ (Ω)':'抵抗 R₂（Ω）',1,20,1,3)+'<p id="electric-circuit-out" aria-live="polite"></p></section>'
 +'<section><h3>'+(en?'RC transient':'RC回路の過渡現象')+'</h3><label for="electric-rc-mode">'+(en?'Process':'現象')+'</label><select id="electric-rc-mode"><option value="charge">'+(en?'Charging':'充電')+'</option><option value="discharge">'+(en?'Discharging':'放電')+'</option></select>'+slider('rc-time',en?'Elapsed time (ms)':'経過時間（ms）',0,1000,10,100)+slider('rc-R',en?'R (Ω)':'抵抗 R（Ω）',100,5000,100,1000)+slider('rc-C',en?'C (μF)':'容量 C（μF）',10,500,10,100)+'<p id="electric-rc-out" aria-live="polite"></p></section>'
 +'<section><h3>'+(en?'Magnetic circular motion':'磁場中の円運動')+'</h3>'+slider('mag-v',en?'Speed (m/s)':'速さ（m/s）',10,500,10,100)+slider('mag-B',en?'Magnetic field (T)':'磁束密度（T）',.05,.5,.05,.1)+slider('mag-m',en?'Mass (mg)':'質量（mg）',.5,5,.5,1)+'<p id="electric-mag-out" aria-live="polite"></p></section>'
 +'</div></section>';
}
export function electricityChapterHtml(index,language='ja'){
 const chapter=electricityChapters[index];
 return chapter?chapterMarkup(chapter,index,language==='en'):'';
}
let selected=0;
export function electricityPage(){
 const en=getLanguage()==='en';
 return '<div class="electricity-course"><div class="eyebrow">PHYSICS STRUCTURE LAB / '+(en?'ELECTRICITY':'電気・電磁気')+'</div><h1>'+(en?'Electricity and Electromagnetism':'電気・電磁気を現象から理解する')+'</h1>'
 +'<p>'+(en?'High-school to first-year university treatment. Every new phenomenon starts with its own diagram, not merely a list of formulas.':'高校から大学初年級へ。現象を理解するための状況図を各節に置き、途中式を省略せずに電気と磁気の関係を読み解きます。')+'</p>'
 +'<div class="electricity-chapter-layout"><nav class="electricity-chapter-nav" aria-label="'+(en?'Electricity chapters':'電気分野の章一覧')+'">'
 +electricityChapters.map((c,i)=>'<button type="button" class="electricity-chapter-button'+(i===selected?' active':'')+'" data-electric-chapter="'+i+'">'+String(i+1).padStart(2,'0')+' '+escapeHTML(pair(c.title,en))+'</button>').join('')
 +'</nav><div class="electricity-chapter-detail" id="electricity-detail">'+chapterMarkup(electricityChapters[selected],selected,en)+'</div></div>'
 +interactiveMarkup(en)+'</div>';
}
export function installElectricity(renderMath){
 const box=document.querySelector('#electricity-detail');if(!box)return ()=>{};
 const en=getLanguage()==='en';
 const buttons=[...document.querySelectorAll('[data-electric-chapter]')];
 let disposeField=installElectricFieldExplorer(document,en?'en':'ja');
 buttons.forEach(btn=>btn.addEventListener('click',()=>{
  const index=Number(btn.dataset.electricChapter);if(!Number.isInteger(index)||!electricityChapters[index])return;
  disposeField();
  selected=index;box.innerHTML=chapterMarkup(electricityChapters[index],index,en);
  buttons.forEach(b=>b.classList.toggle('active',Number(b.dataset.electricChapter)===index));
  if(typeof renderMath==='function')renderMath(box);
  disposeField=installElectricFieldExplorer(document,en?'en':'ja');
  if(window.matchMedia?.('(max-width: 800px)').matches)box.scrollIntoView({block:'start',behavior:'auto'});
 }));
 const $=name=>document.querySelector('#electric-'+name);
 const show=(id,value)=>{const node=$(''+id+'-out');if(node)node.textContent=value};
 const fmt=(x)=>Math.abs(x)<.0005?'0':Number(x).toPrecision(4);
 const tasks=[
 {inputs:['q1','q2','distance'],update:()=>{const p=coulombForce(Number($('q1').value),Number($('q2').value),Number($('distance').value));
  show('coulomb',(en?'Magnitude':'力の大きさ')+' = '+fmt(p.magnitude)+' N; '+(p.type==='repulsive'?(en?'repulsive':'反発'):p.type==='attractive'?(en?'attractive':'引力'):(en?'no force':'力0'))+'.');}},
 {inputs:['mode','source','r1','r2'],update:()=>{const p=resistorNetwork({sourceVoltage:Number($('source').value),r1:Number($('r1').value),r2:Number($('r2').value),mode:$('mode').value});
  show('circuit','Req = '+fmt(p.resistance)+' Ω; I = '+fmt(p.totalCurrent)+' A; I₁ = '+fmt(p.branchCurrents[0])+' A; I₂ = '+fmt(p.branchCurrents[1])+' A; P = '+fmt(p.totalPower)+' W.');}},
 {inputs:['rc-mode','rc-time','rc-R','rc-C'],update:()=>{const p=rcResponse({mode:$('rc-mode').value,timeMs:Number($('rc-time').value),resistance:Number($('rc-R').value),capacitanceMicroF:Number($('rc-C').value)});
  show('rc','τ = '+fmt(p.tau)+' s; VC = '+fmt(p.capacitorVoltage)+' V; I = '+fmt(p.current*1000)+' mA; U = '+fmt(p.storedEnergy)+' J.');}},
 {inputs:['mag-v','mag-B','mag-m'],update:()=>{const p=chargedParticleB({speed:Number($('mag-v').value),fieldTesla:Number($('mag-B').value),massMilliGram:Number($('mag-m').value)});
  show('mag','r = '+fmt(p.radius)+' m; T = '+fmt(p.period)+' s; |F| = '+fmt(p.forceMagnitude)+' N.');}}
 ];
 tasks.forEach(t=>{for(const key of t.inputs){const control=$(key);if(control)control.addEventListener(key.endsWith('mode')?'change':'input',t.update);}t.update();});
 return ()=>{disposeField();};
}
