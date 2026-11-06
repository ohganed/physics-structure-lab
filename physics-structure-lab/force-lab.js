import {stackedBlocks,stackedState} from './force-model.js';
const f=n=>(Math.abs(n)<1e-8?0:n).toFixed(2);
const html=String.raw;
export function forceLabPage(){
 return '<div class="page force-lab-page">'
 +'<div class="eyebrow">NEWTON / INTERACTIONS / MODEL BUILDING</div>'
 +'<h1>力は、どの物体に作用するか</h1>'
 +'<p class="lead">「力があるから動く」ではなく、<strong>各物体の速度がどう変化するか</strong>を調べます。2物体の接触を例に、力の作用図を描き、静止摩擦の限界を判定し、運動方程式から予測します。</p>'
 +'<section class="card"><h2>① 観察する現象・系を決める</h2>'
 +'<p>摩擦のない水平面に物体Bがあり、その上に物体Aが置かれています。AとBの間には摩擦があります。右向きの外力Fを、AかBのどちらかに加えます。</p>'
 +'<div class="callout"><strong>定義の意味</strong><p>速度は位置の変化率、加速度は速度の変化率。力は物体間の相互作用を記述します。運動方程式はこの相互作用の合力と加速度を結び付ける法則です。<strong>力は速度そのものではありません。</strong></p></div>'
 +'<div class="force-control-grid">'
 +'<label>力を加える物体<select id="force-target"><option value="upper">上の物体A</option><option value="lower">下の物体B</option></select></label>'
 +'<label>外力 F <output id="force-F-o">10 N</output><input type="range" id="force-F" min="0" max="60" step="1" value="10"></label>'
 +'<label>上の質量 mA <output id="force-mA-o">2 kg</output><input type="range" id="force-mA" min=".5" max="6" step=".5" value="2"></label>'
 +'<label>下の質量 mB <output id="force-mB-o">3 kg</output><input type="range" id="force-mB" min=".5" max="6" step=".5" value="3"></label>'
 +'<label>静止摩擦係数 μs <output id="force-muS-o">0.40</output><input type="range" id="force-muS" min="0" max="1" step=".05" value=".4"></label>'
 +'<label>動摩擦係数 μk <output id="force-muK-o">0.30</output><input type="range" id="force-muK" min="0" max="1" step=".05" value=".3"></label>'
 +'</div>'
 +'<p id="force-constraint" class="muted">モデル条件：0 ≤ μk ≤ μs。床の摩擦と空気抵抗なし。外力は水平方向。</p>'
 +'<div class="force-scene"><svg id="force-scene-svg" viewBox="0 0 700 260" aria-label="二物体の運動と力の表示" role="img">'
 +'<defs><marker id="force-arrow" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0 0 L7 3.5 L0 7 Z" fill="context-stroke"/></marker></defs>'
 +'<line x1="30" y1="210" x2="670" y2="210" stroke="#8c9f96" stroke-width="4"/>'
 +'<g id="force-blocks">'
 +'<rect id="force-block-b" x="210" y="158" width="130" height="50" rx="7" fill="#87ada6" stroke="#356d66" stroke-width="2"/>'
 +'<rect id="force-block-a" x="240" y="112" width="70" height="44" rx="7" fill="#d8ad75" stroke="#956d34" stroke-width="2"/>'
 +'<text id="force-label-a" x="275" y="140" text-anchor="middle" font-size="18" font-weight="700" fill="#253c39">A</text>'
 +'<text id="force-label-b" x="275" y="188" text-anchor="middle" font-size="18" font-weight="700" fill="#253c39">B</text>'
 +'<line id="force-external" x1="305" y1="133" x2="375" y2="133" stroke="#a34436" stroke-width="4" marker-end="url(#force-arrow)"/>'
 +'</g><text id="force-motion-label" x="40" y="33" fill="#2b554e" font-size="15">AとBは静止摩擦で一緒に動く</text>'
 +'</svg></div>'
 +'<div class="force-play"><button id="force-play" class="secondary-btn">▶ 再生</button><button id="force-reset" class="secondary-btn">↺ 最初から</button><label>時間 <output id="force-t-o">0.00 s</output></label><input type="range" id="force-t" min="0" max="3" step=".02" value="0"></div>'
 +'<div class="force-metrics" aria-live="polite"><div><small>物体Aの加速度</small><strong id="force-aA"></strong></div><div><small>物体Bの加速度</small><strong id="force-aB"></strong></div><div><small>必要な静止摩擦</small><strong id="force-required"></strong></div><div><small>最大静止摩擦</small><strong id="force-maximum"></strong></div></div>'
 +'<div id="force-regime" class="callout"></div></section>'
 +'<section class="card"><h2>② 作用する力だけを描く</h2><p>下の自由物体図は、それぞれ<strong>物体そのものを起点に</strong>力の矢印を描いています。正方向は右です。力の矢印を物体の中心から描くのは、並進運動の合力を見るための図式上の約束であり、作用点が中心という意味ではありません。</p>'
 +'<div class="force-fbd-grid"><div class="force-fbd"><h3>物体Aだけを取り出す</h3><svg id="force-fbd-a" viewBox="0 0 330 230" role="img" aria-label="物体Aの自由物体図"></svg><div id="force-fbd-text-a"></div></div><div class="force-fbd"><h3>物体Bだけを取り出す</h3><svg id="force-fbd-b" viewBox="0 0 330 230" role="img" aria-label="物体Bの自由物体図"></svg><div id="force-fbd-text-b"></div></div></div>'
 +'<div class="callout warm"><strong>作用・反作用の落とし穴</strong><p>AがBから受ける摩擦力とBがAから受ける摩擦力は、大きさが等しく向きが反対です。しかし<strong>異なる物体に作用</strong>します。一つの物体の運動方程式で打ち消してはいけません。</p></div></section>'
 +'<section class="card"><h2>③ どうやって運動方程式を作るのか</h2>'
 +'<div id="force-equations"></div>'
 +'<h3>静止摩擦はいつまで働ける？</h3><div class="formula tex-display" data-tex="|f_s|\\leq\\mu_sN">|fs|≤μsN</div>'
 +'<p>静止摩擦が必要な大きさに自動的に調整されるのは、限界以下の範囲です。限界を超えたら、動摩擦係数を使って2物体を別々に計算します。</p>'
 +'<div id="force-threshold" class="callout"></div></section>'
 +'<section class="card"><h2>④ 出題者・解答者・学習者の3つの視点</h2>'
 +'<div class="force-thinking"><div><h3>出題者の設計</h3><p>「どちらの物体に外力を加えるか」を変更するだけで、摩擦力の向きと滑り出す閾値が変わります。力の作用対象を本当に理解しているか試す構造です。</p></div>'
 +'<div><h3>解答者の判断</h3><p>対象A/Bを分ける→作用する力を描く→同じ加速度と仮定→必要摩擦を求める→限界と比較→仮定が破れたら別々の加速度を計算します。</p></div>'
 +'<div><h3>自分の考えの監視</h3><p>摩擦はいつも運動方向と逆だと思っていないか。作用・反作用を同じ物体の力だと思っていないか。静止摩擦を常に最大値にしていないか。</p></div></div>'
 +'<button class="secondary-btn" id="force-question">出題者の問いと解説を表示</button><div id="force-answer" class="callout hide"><p><strong>問い：</strong>外力をAからBへ移すと、静止摩擦はなぜ逆向きになるのでしょう？</p><p>上のAを押す場合、AはBより先に進もうとするので摩擦はAに左向き、Bに右向きです。Bを押す場合、Bが先に進もうとするので摩擦はAに右向き、Bに左向きです。</p></div>'
 +'<div class="button-row"><button class="primary-btn" id="force-record">この研究室を学習済みにする</button><button class="secondary-btn" data-goto="mechanics">力学全体へ戻る</button><button class="secondary-btn" data-goto="reflection">思考ノート</button></div><p id="force-record-feedback" class="muted"></p></section>'
 +'</div>';
}
const arrow=(x1,y1,x2,y2,label,color)=>'<line x1="'+x1+'" y1="'+y1+'" x2="'+x2+'" y2="'+y2+'" stroke="'+color+'" stroke-width="3" marker-end="url(#fb-arrow)"/><text x="'+x2+'" y="'+(y2-7)+'" text-anchor="middle" font-size="12" fill="'+color+'">'+label+'</text>';
function drawFBD(svg,which,m){
 const name=which==='A'?'A':'B';const y=105;
 const defs='<defs><marker id="fb-arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0 0L6 3L0 6Z" fill="#33534f"/></marker></defs>';
 let contents=defs+'<rect x="135" y="86" width="60" height="50" rx="7" fill="'+(which==='A'?'#e5c29a':'#9ebfb8')+'" stroke="#477267" stroke-width="2"/><text x="165" y="117" text-anchor="middle" font-weight="700" fill="#24423b">'+name+'</text>';
 const add=(dx,dy,label)=>{if(Math.abs(dx)+Math.abs(dy)>0.01){contents+=arrow(165,110,165+dx,110+dy,label,'#33534f');}};
 const applied=which==='A'?m.appliedA:m.appliedB;
 if(applied>0)add(100,0,'F');
 const friction=which==='A'?m.fOnA:m.fOnB;
 if(Math.abs(friction)>1e-7)add(friction>0?65:-65,0,'f');
 if(which==='A'){add(0,-69,'N');add(0,72,'mg');}
 else{add(0,-69,'N床');contents+=arrow(156,110,156,174,'mBg','#33534f');contents+=arrow(184,110,184,183,'NA→B','#33534f');}
 svg.innerHTML=contents;
}
export function installForceLab(){
 const $=id=>document.getElementById(id);
 if(!$('force-scene-svg'))return()=>{};
 const ids=['F','mA','mB','muS','muK'];
 const inputs=Object.fromEntries(ids.map(id=>[id,$('force-'+id)]));
 const target=$('force-target'),tSlider=$('force-t'),play=$('force-play');
 let t=0,run=false,frame=0,prev=null,disposed=false;
 let model;
 const values=()=>Object.fromEntries(ids.map(id=>[id,Number(inputs[id].value)]));
 function update(){
  let p=values();if(p.muK>p.muS){p.muK=p.muS;inputs.muK.value=String(p.muS);}
  model=stackedBlocks({...p,appliedTo:target.value});
  ids.forEach(id=>{$('force-'+id+'-o').textContent=id.startsWith('mu')?Number(inputs[id].value).toFixed(2):inputs[id].value+(id==='F'?' N':' kg');});
  tSlider.value=t;$('force-t-o').textContent=f(t)+' s';
  $('force-aA').textContent=f(model.aA)+' m/s²';$('force-aB').textContent=f(model.aB)+' m/s²';
  $('force-required').textContent=f(model.requiredFriction)+' N';
  $('force-maximum').textContent=f(model.maxStatic)+' N';
  $('force-motion-label').textContent=model.sticks?'静止摩擦が十分：2物体は一緒に運動':'静止摩擦の限界超過：相対的に滑る';
  const at=stackedState(model,t);
  const max=Math.max(14,Math.abs(stackedState(model,3).xA),Math.abs(stackedState(model,3).xB));
  const scale=280/max,xa=130+at.xA*scale,xb=130+at.xB*scale;
  const bx=xb,ax=xa+30;
  $('force-block-a').setAttribute('x',ax);$('force-block-b').setAttribute('x',bx);
  $('force-label-a').setAttribute('x',ax+35);$('force-label-b').setAttribute('x',bx+65);
  $('force-external').setAttribute('x1',target.value==='upper'?ax+70:bx+130);
  $('force-external').setAttribute('x2',target.value==='upper'?ax+126:bx+186);
  $('force-external').setAttribute('y1',target.value==='upper'?132:181);
  $('force-external').setAttribute('y2',target.value==='upper'?132:181);
  const upperEquation=target.value==='upper'?'F-f=m_Aa_A':'f=m_Aa_A';
  const lowerEquation=target.value==='upper'?'f=m_Ba_B':'F-f=m_Ba_B';
  $('force-equations').innerHTML=
   '<p><strong>Aの水平方向：</strong></p><div class="formula tex-display" data-tex="'+upperEquation+'">'+upperEquation+'</div>'+
   '<p><strong>Bの水平方向：</strong></p><div class="formula tex-display" data-tex="'+lowerEquation+'">'+lowerEquation+'</div>'+
   '<p>滑らないと仮定すると2物体の加速度は等しく、全体では次の式が得られます。</p>'+
   '<div class="formula tex-display" data-tex="a=\\frac{F}{m_A+m_B}">a=F/(mA+mB)</div>'+
   '<p>ただし、この式を使い続けられるのは必要な静止摩擦が限界以下の場合だけです。</p>';
  if(window.katex)$('force-equations').querySelectorAll('[data-tex]').forEach(el=>window.katex.render(el.dataset.tex,el,{throwOnError:false,displayMode:true}));
  $('force-threshold').innerHTML='<strong>限界となる外力 '+f(model.threshold)+' N</strong><p>必要な静止摩擦：'+f(model.requiredFriction)+' N、最大静止摩擦：'+f(model.maxStatic)+' N。'+(model.sticks?'滑りません。':'限界超過のため動摩擦モデルに切り替えます。')+'</p>';
  $('force-regime').innerHTML='<strong>'+(model.sticks?'静止摩擦領域':'滑走領域')+'</strong><p>Aの変位：'+f(at.xA)+' m、Bの変位：'+f(at.xB)+' m。相対変位：'+f(at.relativeDisplacement)+' m。折り返しや左右方向の変化はこのモデルでは扱いません。</p>';
  drawFBD($('force-fbd-a'),'A',model);drawFBD($('force-fbd-b'),'B',model);
  $('force-fbd-text-a').textContent='摩擦力は '+f(model.fOnA)+' N（符号付き）、上向きN='+f(model.contactNormal)+' N、下向き重力='+f(model.weightA)+' N';
  $('force-fbd-text-b').textContent='摩擦力は '+f(model.fOnB)+' N（符号付き）、床からの支持力='+f(model.supportNormal)+' N。Aからの下向き接触力も作用。';
 }
 function pause(){run=false;play.textContent='▶ 再生';cancelAnimationFrame(frame);prev=null;}
 function tick(now){if(!run||disposed)return;if(prev!=null)t=Math.min(3,t+(now-prev)/1000);prev=now;update();if(t>=3)pause();else frame=requestAnimationFrame(tick);}
 Object.values(inputs).forEach(el=>el.addEventListener('input',()=>{pause();update();}));
 target.addEventListener('change',()=>{pause();t=0;update();});
 tSlider.addEventListener('input',()=>{pause();t=Number(tSlider.value);update();});
 play.addEventListener('click',()=>{if(run){pause();return;}if(t>=3)t=0;run=true;prev=null;play.textContent='Ⅱ 一時停止';frame=requestAnimationFrame(tick);});
 $('force-reset').addEventListener('click',()=>{pause();t=0;update();});
 $('force-question').addEventListener('click',()=>$('force-answer').classList.toggle('hide'));
 $('force-record').addEventListener('click',()=>{try{localStorage.setItem('physics-force-lab-completed',new Date().toISOString());$('force-record-feedback').textContent='この端末に学習完了を保存しました。';}catch{$('force-record-feedback').textContent='この環境では保存できませんでした。';}});
 update();return()=>{disposed=true;pause();};
}