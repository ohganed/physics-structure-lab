import { mechanicsChapters } from './mechanics-data.js';
import { mechanicsEnglish } from './mechanics-en.js';
import { getLanguage } from './language.js';

export function mechanicsEvaluate(model, x, y) {
 if(![x,y].every(Number.isFinite)||x<=0||y<=0)throw new RangeError('Parameters must be positive');
 const g=9.8;
 switch(model) {
 case 'force': return {title:'ニュートンの第二法則',formula:'a=F/m',result:x/y,unit:'m/s²',labels:['力 F（N）','質量 m（kg）'],explanation:'質量が一定なら、同じ質量への合力が2倍で加速度も2倍になる。'};
 case 'incline': return {title:'摩擦なし斜面の加速度',formula:'a=g\\sin\\theta',result:g*Math.sin(x*Math.PI/180),unit:'m/s²',labels:['角度 θ（°）','質量 m（kg）'],explanation:'摩擦を無視すれば質量が変わっても加速度は変わらない。第2パラメータは比較用の質量。'};
 case 'energy': return {title:'高さから落下後の速さ',formula:'v=\\sqrt{2gh}',result:Math.sqrt(2*g*x),unit:'m/s',labels:['落下高さ h（m）','質量 m（kg）'],explanation:'空気抵抗がなければ落下後の速さは質量によらない。'};
 case 'collision': return {title:'静止物体への完全非弾性衝突',formula:'v_f=\\frac{m_1v_1}{m_1+m_2}',result:3*x/(x+y),unit:'m/s',labels:['移動体 m₁（kg）','静止体 m₂（kg）'],explanation:'初速度3 m/sの物体が静止物体と合体する。運動量保存を使い、運動エネルギーは保存しない。'};
 case 'circular': return {title:'等速円運動の加速度',formula:'a=\\frac{v^2}{r}',result:x*x/y,unit:'m/s²',labels:['速さ v（m/s）','半径 r（m）'],explanation:'速さ2倍なら加速度4倍。向きは常に中心方向。'};
 case 'spring': return {title:'ばね振動の周期',formula:'T=2\\pi\\sqrt{\\frac{m}{k}}',result:2*Math.PI*Math.sqrt(x/y),unit:'s',labels:['質量 m（kg）','ばね定数 k（N/m）'],explanation:'小振幅・線形ばね・減衰なし。質量が4倍なら周期は2倍。'};
 case 'gravity': return {title:'円軌道の速さ（地球）',formula:'v=\\sqrt{\\frac{GM}{r}}',result:Math.sqrt(3.986004418e14/(x*1000))/1000,unit:'km/s',labels:['地心距離 r（km）','衛星質量 m（kg）'],explanation:'G Mは地球の標準重力パラメータ、円軌道・地球中心からの距離を使用。衛星質量によらない。'};
 case 'torque': return {title:'垂直に押すときのトルク',formula:'\\tau=rF',result:x*y,unit:'N·m',labels:['腕の長さ r（m）','力 F（N）'],explanation:'固定軸、力が腕に垂直な場合。一般には外積の大きさ rFsinθ。'};
 default: return {title:'ばね振動を例に考える',formula:'\\omega=\\sqrt{\\frac{k}{m}}',result:Math.sqrt(y/x),unit:'rad/s',labels:['質量 m（kg）','ばね定数 k（N/m）'],explanation:'解析力学・非線形の各章は、基礎に戻って線形振動を比較する。大学の一般の場合の数値解は未実装。'};
 }
}
const presets={
 force:[6,2,1,20,.5,10],incline:[25,2,1,75,.5,10],energy:[5,2,.5,50,.5,10],
 collision:[2,1,.5,10,.5,10],circular:[6,3,.5,12,.5,12],spring:[2,50,.5,10,5,150],
 gravity:[7000,1,6500,30000,.5,100],torque:[.5,10,.1,3,1,30]
};
const f=n=>Math.abs(n)<0.00001?'0':n.toFixed(n>=100?1:3);
const esc=s=>String(s).replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;').replaceAll('>','&gt;');
const tex=expression=>'<div class="formula tex-display" data-tex="'+esc(expression)+'">'+esc(expression)+'</div>';

const englishModels={
 force:['Newton\'s Second Law','Net force F (N)','Mass m (kg)','With constant mass, acceleration is proportional to net force.'],
 incline:['Incline acceleration (no friction)','Slope angle θ (degrees)','Mass m (kg)','In the frictionless model, acceleration is independent of mass.'],
 energy:['Speed after a free fall','Fall height h (m)','Mass m (kg)','Without air resistance, final speed does not depend on mass.'],
 collision:['Perfectly inelastic collision','Moving mass m₁ (kg)','Stationary mass m₂ (kg)','Two bodies stick together, conserving total momentum but not kinetic energy.'],
 circular:['Centripetal acceleration','Speed v (m/s)','Radius r (m)','Doubling speed quadruples centripetal acceleration.'],
 spring:['Spring oscillation period','Mass m (kg)','Spring constant k (N/m)','The ideal undamped spring period scales with the square root of mass.'],
 gravity:['Earth circular orbital speed','Orbital radius from center (km)','Satellite mass (kg)','Circular orbit speed depends on the gravitational parameter and central distance, not satellite mass.'],
 torque:['Torque from a perpendicular force','Lever arm r (m)','Force F (N)','For a fixed perpendicular force, torque equals lever arm multiplied by force.']
};

export function mechanicsPage(){
 const en=getLanguage()==='en';
 const chapters=en?mechanicsEnglish:mechanicsChapters;
 const cards=chapters.map((c,i)=>'<button class="mechanics-chapter-button" data-mech-chapter="'+i+'"><span class="mechanics-index">'+String(i+1).padStart(2,'0')+'</span><span><strong>'+esc(c.name)+'</strong><small>'+esc(c.level)+'</small></span></button>').join('');
 return '<div class="page mechanics-page"><div class="eyebrow">PHYSICS STRUCTURE LAB · COMPLETE MECHANICS MAP</div><h1>'+(en?'Explore Mechanics: 12 Chapters':'力学の全体像を学ぶ')+'</h1><p class="lead">'+(en?'From Newtonian mechanics to Lagrangian and Hamiltonian descriptions. Explore phenomena, definitions, derivations, problem design, and metacognition. A developing textbook; not yet a complete undergraduate treatment.':'高校物理から解析力学・ハミルトン力学まで。章を選び、現象・定義・導出・問題設計・自分の判断をつなげて理解します。現段階では学習の骨格と主要な導出を整備中です。')+'</p><div class="mechanics-layout"><nav class="mechanics-chapter-list" aria-label="力学の章一覧">'+cards+'</nav><div id="mechanics-detail" class="mechanics-detail"></div></div></div>';
}
function chapterHtml(c,index){
 const en=getLanguage()==='en';
 const word=(ja,english)=>en?english:ja;
 const steps=c.steps.map(([heading,equation,meaning],i)=>'<div class="mechanics-equation-step"><strong>'+String(i+1)+'. '+esc(heading)+'</strong>'+tex(equation)+'<p>'+esc(meaning)+'</p></div>').join('');
 const p=presets[c.model]||[2,50,.5,10,5,150];
 const xLabel=c.model==='gravity'?'地心距離 r（km）':null;
 const insights='<div class="mechanics-perspectives"><section><h3>'+word("出題者の思考","Problem designer's perspective")+'</h3><p>'+esc(c.setter)+'</p></section><section><h3>'+word("解答者の思考","Problem solver's perspective")+'</h3><p>'+esc(c.solver)+'</p></section><section><h3>'+word("自分の思考を観察する","Monitor your reasoning")+'</h3><p>'+esc(c.self)+'</p></section></div>';
 return '<div class="card mechanics-topic"><div class="eyebrow">CHAPTER '+String(index+1).padStart(2,'0')+' / 12</div><h2>'+esc(c.name)+'</h2><span class="tag">'+esc(c.level)+'</span>'
  +'<h3>'+word("① どんな現象を扱うのか","① What phenomenon are we describing?")+'</h3><p>'+esc(c.phenomenon)+'</p>'
  +'<h3>'+word("② 定義と、その定義が必要な理由","② Definitions and their purpose")+'</h3><p>'+esc(c.definition)+'</p><div class="callout"><strong>'+word("なぜ定義するのか","Why define this quantity?")+'</strong><p>'+esc(c.why)+'</p></div>'
  +'<h3>'+word("③ 実験法則と数学的な導出","③ Empirical laws and derivations")+'</h3><p>'+esc(c.law)+'</p>'+steps
  +'<div class="callout warm"><strong>'+word("成立条件と注意","Assumptions and validity")+'</strong><p>'+esc(c.conditions)+'</p></div>'
  +'<h3>'+word("④ 条件を変え、予測を検証する","④ Change parameters and test predictions")+'</h3><div class="mechanics-parameter-grid"><label id="mech-label-x" for="mech-x">'+word("パラメータ1","Parameter 1")+'</label><input id="mech-x" type="range" min="'+p[2]+'" max="'+p[3]+'" step="any" value="'+p[0]+'"><label id="mech-label-y" for="mech-y">'+word("パラメータ2","Parameter 2")+'</label><input id="mech-y" type="range" min="'+p[4]+'" max="'+p[5]+'" step="any" value="'+p[1]+'"></div>'
  +'<div id="mech-output" class="mechanics-output" aria-live="polite"></div>'
  +'<h3>'+word("⑤ 同じ問題を3つの視点から見る","⑤ Compare three reasoning perspectives")+'</h3>'+insights
  +'<h3>'+word("⑥ 考えてから答えを見る","⑥ Predict before seeing the answer")+'</h3><p>'+esc(c.problem)+'</p><button class="secondary-btn" id="mech-reveal">'+word("解答・根拠を表示","Reveal answer and reasoning")+'</button><div id="mech-answer" class="callout hide"><p>'+esc(c.answer)+'</p></div>'
  +'<h3>'+word("⑦ 大学物理への接続","⑦ University physics connections")+'</h3><p>'+esc(c.university)+'</p><p class="muted">'+word("この章の演習・証明の完全網羅や専門的な数値シミュレーションは継続整備対象です。","Complete proofs, extended exercises, and specialized simulations remain in development.")+'</p>'
  +'<button class="primary-btn" id="mech-complete">'+word("この章を学習済みに記録","Mark this chapter studied")+'</button><p id="mech-feedback" class="muted" aria-live="polite"></p>'
  +'</div>';
}
export function installMechanics(remarkMath){
 const box=document.getElementById('mechanics-detail');if(!box)return()=>{};
 const key='physics-mechanics-v1-completed';
 const english=getLanguage()==='en';
 const chapters=english?mechanicsEnglish:mechanicsChapters;
 let completed=[];try{completed=JSON.parse(localStorage.getItem(key)||'[]');if(!Array.isArray(completed))completed=[];}catch{}
 function show(index){
  const c=chapters[index];box.innerHTML=chapterHtml(c,index);
  document.querySelectorAll('[data-mech-chapter]').forEach((b,i)=>{b.classList.toggle('active',i===index);b.classList.toggle('is-done',completed.includes(i));});
  if(typeof remarkMath==='function')remarkMath(box);
  const x=document.getElementById('mech-x'),y=document.getElementById('mech-y'),out=document.getElementById('mech-output');
  function update(){
   const d=mechanicsEvaluate(c.model,Number(x.value),Number(y.value));
   const translated=english?(englishModels[c.model]||['Example: spring oscillation','Mass m (kg)','Spring constant k (N/m)','An illustrative linear system; the full advanced numerical model remains in development.']):null;
   document.getElementById('mech-label-x').textContent=(translated?translated[1]:d.labels[0])+': '+x.value;
   document.getElementById('mech-label-y').textContent=(translated?translated[2]:d.labels[1])+': '+y.value;
   out.replaceChildren();
   const strong=document.createElement('strong');strong.textContent=(translated?translated[0]:d.title)+': '+f(d.result)+' '+d.unit;
   const note=document.createElement('p');note.textContent=translated?translated[3]:d.explanation;
   out.append(strong,note);
  }
  x.addEventListener('input',update);y.addEventListener('input',update);update();
  document.getElementById('mech-reveal').addEventListener('click',()=>document.getElementById('mech-answer').classList.toggle('hide'));
  document.getElementById('mech-complete').addEventListener('click',()=>{
   if(!completed.includes(index)){completed.push(index);try{localStorage.setItem(key,JSON.stringify(completed));}catch{}}
   document.getElementById('mech-feedback').textContent=english?'Progress saved on this device. Test another set of conditions to check your understanding.':'この端末に学習記録を保存しました。理解を確認するため、別の条件でも試しましょう。';
   document.querySelector('[data-mech-chapter="'+index+'"]')?.classList.add('is-done');
  });
 }
 const buttons=[...document.querySelectorAll('[data-mech-chapter]')];
 buttons.forEach(button=>button.addEventListener('click',()=>{show(Number(button.dataset.mechChapter));}));
 show(0);
 return ()=>{};
}
