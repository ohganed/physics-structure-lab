import {transferCases} from './transfer-cases.js';
import {getLanguage} from './language.js';
import {compareOscillators,compareInverseSquare,compareGradientFlux} from './transfer-models.js';

const en=()=>getLanguage()==='en';
const loc=pair=>pair[en()?1:0];
const say=(ja,eng)=>en()?eng:ja;
const esc=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
let pendingTransferCase='spring-lc';
export function setTransferCase(id){if(transferCases.some(c=>c.id===id))pendingTransferCase=id;}
const parameters={
 oscillators:[
  ['m', '質量 m (kg)','Mass m (kg)',2,.5,8,.5],
  ['k','ばね定数 k (N/m)','Spring constant k (N/m)',50,10,120,5],
  ['L','インダクタンス L (H)','Inductance L (H)',2,.5,8,.5],
  ['C','静電容量 C (F)','Capacitance C (F)',.02,.005,.1,.005]
 ],
 fields:[
  ['r','中心間距離 r (m)','Source separation r (m)',1,.25,5,.25],
  ['q1Micro','電荷 q₁ (μC)','Charge q₁ (μC)',2,-4,4,1],
  ['q2Micro','電荷 q₂ (μC)','Charge q₂ (μC)',-2,-4,4,1]
 ],
 transport:[
  ['diffusivity','拡散係数 D (m²/s)','Diffusivity D (m²/s)',.001,.0001,.01,.0001],
  ['concentrationGradient','濃度勾配 (mol/m⁴)','Concentration gradient (mol/m⁴)',-4,-10,10,1],
  ['conductivity','熱伝導率 κ (W/(m K))','Thermal conductivity κ (W/(m K))',2,.5,10,.5],
  ['temperatureGradient','温度勾配 (K/m)','Temperature gradient (K/m)',5,-10,10,1]
 ]
};
const num=n=>Math.abs(n)>0&&Math.abs(n)<.001?n.toExponential(3):Number(n.toPrecision(4)).toString();
export function transferPage(){
 const buttons=transferCases.map((c,i)=>'<button type="button" class="transfer-case-button '+(i===0?'active':'')+'" data-transfer-case="'+c.id+'">'+esc(loc(c.title))+'</button>').join('');
 return '<div class="page transfer-page"><div class="eyebrow">PHYSICS STRUCTURE LAB · TRANSFER LAB</div>'
 +'<h1>'+say('分野を越えて、同じ考え方を見つける','Transfer ideas across fields')+'</h1>'
 +'<p class="lead">'+say('力学で身につけた見方を、電気回路・波動・熱伝導・化学反応へ広げます。ただし数学の形が似ていても現象そのものは同じではありません。','Extend ideas from mechanics into circuits, waves, thermal transport, and chemistry. Similar equations do not mean identical physics.')+'</p>'
 +'<div class="callout warm"><strong>'+say('学習の扱い','How to use this lab')+'</strong><p>'+say('これから学ぶ分野の「予告編」です。各分野の完全な教科書を学んだことにはなりません。答えを強制せず、予想してから説明を見られます。','These are curated bridges, not full courses in electricity, waves, or chemistry. Form a prediction before opening the explanation if you wish; nothing is graded.')+'</p></div>'
 +'<div class="transfer-layout"><nav class="transfer-case-list" aria-label="'+say('転移の教材一覧','Transfer case studies')+'">'+buttons+'</nav><section class="card" id="transfer-detail"></section></div></div>';
}
function caseContent(c){
 return '<div class="eyebrow">TRANSFER CASE · '+esc(c.id.toUpperCase())+'</div>'
  +'<h2>'+esc(loc(c.title))+'</h2><h3>'+say('現象を観察する','Observe the phenomena')+'</h3><p>'+esc(loc(c.phenomenon))+'</p>'
  +'<div class="callout"><strong>'+say('まず考えてみる（回答しなくても先へ進めます）','Try predicting (optional)')+'</strong><p>'+esc(loc(c.question))+'</p></div>'
  +'<button class="secondary-btn" type="button" id="transfer-reveal">'+say('共通点と違いを見る','Reveal similarities and differences')+'</button>'
  +'<div id="transfer-explanation" class="hide"><h3>'+say('数学的な形','Mathematical structure')+'</h3>'
  +c.equations.map(tex=>'<div class="formula tex-display" data-tex="'+esc(tex)+'">'+esc(tex)+'</div>').join('')
  +'<div class="transfer-compare"><div><h3>'+say('どこがつながる？','What transfers?')+'</h3><p>'+esc(loc(c.common))+'</p></div>'
  +'<div><h3>'+say('どこは同じではない？','What does not transfer?')+'</h3><p>'+esc(loc(c.difference))+'</p></div></div>'
  +'<h3>'+say('学習者の視点','Reasoning to carry forward')+'</h3><p>'+esc(loc(c.transfer))+'</p></div>'
  +'<div id="transfer-interactive"></div>'
  +'<div class="button-row"><button class="secondary-btn" data-open-connection="'+esc(c.concept)+'">'+say('関連する概念のネットワークへ','Explore the related knowledge network')+'</button>'
  +'<button class="primary-btn" data-start-journey="'+esc(c.concept)+'">'+say('自分でつながりを作る','Create your own connection')+'</button></div>';
}
function widgetHtml(kind){
 const values=parameters[kind];if(!values)return '';
 return '<section class="transfer-experiment"><h3>'+say('条件を変えてみる','Change the physical conditions')+'</h3>'
 +'<p>'+say('計算の前に予測してみましょう。パラメータを変更しても理解度判定はありません。','Make a prediction and vary the parameters. There are no mandatory questions or scores.')+'</p>'
 +'<div class="advanced-controls">'+values.map(([id,ja,eng,val,min,max,step])=>
   '<label>'+esc(en()?eng:ja)+' <output id="transfer-'+id+'">'+val+'</output><input type="range" data-transfer-param="'+id+'" min="'+min+'" max="'+max+'" step="'+step+'" value="'+val+'"></label>').join('')+'</div>'
 +'<div class="transfer-values" id="transfer-values" aria-live="polite"></div></section>';
}
export function installTransferLab(renderMath){
 const $=id=>document.getElementById(id),host=$('transfer-detail');if(!host)return()=>{};
 function show(c){
  pendingTransferCase=c.id;
  host.innerHTML=caseContent(c);
  document.querySelectorAll('[data-transfer-case]').forEach(button=>button.classList.toggle('active',button.dataset.transferCase===c.id));
  const button=$('transfer-reveal'),explanation=$('transfer-explanation');
  button.addEventListener('click',()=>{
   const open=explanation.classList.toggle('hide');
   button.setAttribute('aria-expanded',String(!open));
   button.textContent=open?say('共通点と違いを見る','Reveal similarities and differences'):say('説明を閉じる','Hide explanation');
  });
  button.setAttribute('aria-expanded','false');
  const place=$('transfer-interactive');place.innerHTML=widgetHtml(c.kind);
  const controls=[...place.querySelectorAll('[data-transfer-param]')];
  if(controls.length){
    function update(){
     const p=Object.fromEntries(controls.map(x=>[x.dataset.transferParam,Number(x.value)]));
     controls.forEach(el=>{$('transfer-'+el.dataset.transferParam).textContent=el.value;});
     const out=$('transfer-values');out.replaceChildren();
     function add(k,value){
       const d=document.createElement('div');d.className='transfer-value';
       const strong=document.createElement('strong');strong.textContent=k;
       const text=document.createElement('span');text.textContent=value;
       d.append(strong,text);out.append(d);
     }
     if(c.kind==='oscillators'){
       const v=compareOscillators(p);
       add(say('ばねの周期','Spring period'),num(v.mechanicalPeriod)+' s');
       add(say('LC回路の周期','LC circuit period'),num(v.electricPeriod)+' s');
     }else if(c.kind==='fields'){
       const v=compareInverseSquare(p);
       add(say('重力（常に引力）','Gravity (attractive)'),num(v.gravityInward)+' N');
       add(say('静電気力（半径外向きを正）','Electric force (outward positive)'),num(v.electricRadial)+' N');
       add(say('電気力の向き','Electric interaction'),v.electricRepulsive?say('斥力','Repulsive'):v.electricAttractive?say('引力','Attractive'):say('電気力0','Zero electric force'));
     }else if(c.kind==='transport'){
       const v=compareGradientFlux(p);
       add(say('モル流束 J','Molar flux J'),num(v.molarFlux)+' mol/(m² s)');
       add(say('熱流束 q','Heat flux q'),num(v.heatFlux)+' W/m²');
     }
    }
    controls.forEach(el=>el.addEventListener('input',update));update();
  }
  if(typeof renderMath==='function')renderMath(host);
 }
 document.querySelectorAll('[data-transfer-case]').forEach(button=>button.addEventListener('click',()=>show(transferCases.find(c=>c.id===button.dataset.transferCase))));
 show(transferCases.find(c=>c.id===pendingTransferCase)||transferCases[0]);return()=>{};
}