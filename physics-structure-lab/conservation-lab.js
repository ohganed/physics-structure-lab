import {fallingEnergy,collisionEnergy} from './conservation-model.js';
const fmt=n=>(Math.abs(n)<1e-9?0:n).toFixed(2);
export function conservationLabPage(){
 return '<div class="page conservation-page">'
  +'<div class="eyebrow">MECHANICS / CONSERVATION PRINCIPLES</div><h1>保存されるもの、されないもの</h1>'
  +'<p class="lead">エネルギー保存と運動量保存を同じ公式として扱わない。<strong>系・外部からの影響・エネルギーの形</strong>を区別し、条件を変えて予測します。</p>'
  +'<div class="select-tabs" role="group"><button class="active" data-cons-mode="fall">落下とエネルギー</button><button data-cons-mode="collision">衝突と運動量</button></div>'
  +'<section class="card"><div id="cons-fall">'
  +'<h2>① 落下と力学的エネルギー</h2><p>高さ h の物体が静止状態から落下。基準面の位置エネルギーは0。失われる力学的エネルギーの割合を設定し、運動エネルギーに変わらない分を可視化します。</p>'
  +'<div class="cons-controls"><label>質量 m（kg） <output id="cons-m-out">2</output><input id="cons-m" type="range" min=".5" max="10" value="2" step=".5"></label>'
  +'<label>落下高さ h（m） <output id="cons-h-out">5</output><input id="cons-h" type="range" min="0" max="20" value="5" step="1"></label>'
  +'<label>力学的エネルギーの損失率 <output id="cons-loss-out">0%</output><input id="cons-loss" type="range" min="0" max="1" value="0" step=".05"></label></div>'
  +'<div class="formula tex-display" data-tex="K_f=mgh-W_{\\rm loss}">Kf=mgh−Wloss</div>'
  +'<div class="cons-bars"><div>最初の位置エネルギー<div class="cons-bar-track"><span id="cons-in-bar"></span></div><strong id="cons-in-value"></strong></div><div>落下後の運動エネルギー<div class="cons-bar-track"><span id="cons-kin-bar"></span></div><strong id="cons-kin-value"></strong></div><div>散逸した力学的エネルギー<div class="cons-bar-track"><span id="cons-diss-bar"></span></div><strong id="cons-diss-value"></strong></div></div>'
  +'<p id="cons-fall-result" class="callout"></p><p class="muted">注意：損失率は学習用の総括パラメータです。一般の抵抗力が位置・速度にどう依存するかは扱っていません。</p></div>'
  +'<div id="cons-collision" class="hide">'
  +'<h2>② 衝突と運動量</h2><p>左から速さ u で物体1を物体2（初め静止）に衝突させます。反発係数 e=0 は完全非弾性、e=1 は弾性衝突に対応します。外力の力積が無視できる系を想定します。</p>'
  +'<div class="cons-controls"><label>物体1の質量 m₁（kg） <output id="cons-m1-out">2</output><input id="cons-m1" type="range" min=".5" max="8" value="2" step=".5"></label>'
  +'<label>物体2の質量 m₂（kg） <output id="cons-m2-out">1</output><input id="cons-m2" type="range" min=".5" max="8" value="1" step=".5"></label>'
  +'<label>物体1の衝突前速度 u（m/s） <output id="cons-u-out">3</output><input id="cons-u" type="range" min="0" max="8" value="3" step=".5"></label>'
  +'<label>反発係数 e <output id="cons-e-out">1.00</output><input id="cons-e" type="range" min="0" max="1" value="1" step=".05"></label></div>'
  +'<div class="formula tex-display" data-tex="m_1u=m_1v_1+m_2v_2">m1u=m1v1+m2v2</div>'
  +'<div class="cons-bars"><div>全運動量（衝突前）<div class="cons-bar-track"><span id="cons-pi-bar"></span></div><strong id="cons-pi"></strong></div><div>全運動量（衝突後）<div class="cons-bar-track"><span id="cons-pf-bar"></span></div><strong id="cons-pf"></strong></div><div>運動エネルギーの残存率<div class="cons-bar-track"><span id="cons-e-bar"></span></div><strong id="cons-remaining"></strong></div></div>'
  +'<div id="cons-collision-result" class="callout"></div><p class="muted">衝突前後のみを比べるモデルです。衝突中の力の時間変化や変形過程は再現しません。</p></div></section>'
  +'<section class="card"><h2>なぜ、その保存則を選んだのか</h2><div class="force-thinking"><div><h3>出題者</h3><p>摩擦・外力・反発係数の条件を変えれば、どの保存則を選べるかを見分けられます。</p></div><div><h3>解答者</h3><p>系を決める→外力の仕事または力積を評価→保存する量を選ぶ→計算→検証する。</p></div><div><h3>メタ認知</h3><p>運動量が保存するなら、運動エネルギーも当然保存すると決めつけていなかったか。</p></div></div>'
  +'<div class="callout warm"><strong>大学物理への接続</strong><p>エネルギーは仕事―エネルギー定理から、運動量は合外力の力積から導かれます。閉じた系の全エネルギー保存と、力学的エネルギー保存を区別します。さらに対称性とネーターの定理へつながります。</p></div>'
  +'<button class="primary-btn" id="cons-complete">保存則研究室を学習済みにする</button><p id="cons-feedback" class="muted"></p></section></div>';
}
export function installConservationLab(){
 const $=id=>document.getElementById(id);if(!$('cons-m'))return()=>{};
 const ids=['m','h','loss','m1','m2','u','e'];
 const inputs=Object.fromEntries(ids.map(k=>[k,$('cons-'+k)]));
 const values=()=>Object.fromEntries(ids.map(k=>[k,Number(inputs[k].value)]));
 const bar=(id,fraction)=>{$(id).style.width=(Math.max(0,Math.min(1,fraction))*100)+'%';};
 function update(){
  const v=values(),a=fallingEnergy(v),b=collisionEnergy({m1:v.m1,m2:v.m2,u1:v.u,e:v.e});
  ids.forEach(k=>{$('cons-'+k+'-out').textContent=(k==='loss'?Math.round(v.loss*100)+'%':k==='e'?v.e.toFixed(2):String(v[k]));});
  bar('cons-in-bar',1);bar('cons-kin-bar',a.initialPotential? a.finalKinetic/a.initialPotential:0);bar('cons-diss-bar',a.initialPotential?a.dissipated/a.initialPotential:0);
  $('cons-in-value').textContent=fmt(a.initialPotential)+' J';$('cons-kin-value').textContent=fmt(a.finalKinetic)+' J';$('cons-diss-value').textContent=fmt(a.dissipated)+' J';
  $('cons-fall-result').textContent='落下後の速さ '+fmt(a.v)+' m/s。質量を変えても速さが変わらない理由を、両辺に質量が現れる式から考えましょう。';
  bar('cons-pi-bar',1);bar('cons-pf-bar',1);bar('cons-e-bar',b.ki?b.kf/b.ki:1);
  $('cons-pi').textContent=fmt(b.pi)+' kg·m/s';$('cons-pf').textContent=fmt(b.pf)+' kg·m/s';
  $('cons-remaining').textContent=(b.ki?100*b.kf/b.ki:100).toFixed(1)+'%';
  $('cons-collision-result').textContent='衝突後：物体1は '+fmt(b.v1)+' m/s、物体2は '+fmt(b.v2)+' m/s。運動量差は '+fmt(b.pf-b.pi)+' kg·m/s、失われた運動エネルギーは '+fmt(b.loss)+' J。';
 }
 document.querySelectorAll('[data-cons-mode]').forEach(button=>button.addEventListener('click',()=>{
  const isFall=button.dataset.consMode==='fall';
  $('cons-fall').classList.toggle('hide',!isFall);$('cons-collision').classList.toggle('hide',isFall);
  document.querySelectorAll('[data-cons-mode]').forEach(b=>b.classList.toggle('active',b===button));
 }));
 Object.values(inputs).forEach(el=>el.addEventListener('input',update));
 $('cons-complete').addEventListener('click',()=>{
  try{localStorage.setItem('physics-conservation-completed',new Date().toISOString());$('cons-feedback').textContent='この端末に保存しました。';}
  catch{$('cons-feedback').textContent='この環境では保存できませんでした。';}
 });
 update();return()=>{};
}