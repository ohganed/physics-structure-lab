import {coupledModes} from './advanced-mechanics-model.js';
const lessons={
 lagrange:{
  title:'ラグランジュ力学：自由度から式を作る',
  idea:'単振り子をx,yの二つで追わなくても、ひもの長さが固定なら角度θだけで記述できる。拘束条件を一般化座標に吸収する。',
  formula:[
   ['位置を角度から表す','x=\\ell\\sin\\theta,\\quad y=-\\ell\\cos\\theta'],
   ['運動エネルギー','K=\\frac12 m\\ell^2\\dot\\theta^2'],
   ['位置エネルギー','U=mg\\ell(1-\\cos\\theta)'],
   ['ラグランジアンを作る','L=K-U'],
   ['オイラー＝ラグランジュ方程式','\\frac{d}{dt}\\frac{\\partial L}{\\partial\\dot\\theta}-\\frac{\\partial L}{\\partial\\theta}=0'],
   ['振り子の厳密な角度方程式','\\ddot\\theta+\\frac{g}{\\ell}\\sin\\theta=0'],
   ['小角度近似','\\sin\\theta\\simeq\\theta\\quad\\Rightarrow\\quad T\\simeq2\\pi\\sqrt{\\frac{\\ell}{g}}']
  ],
  designer:'拘束条件を座標の選択で処理できるか。小角近似の適用範囲を問う。',
  solver:'独立な座標→K,U→L→偏微分→運動方程式→近似の判断。',
  guard:'理想振り子、剛体で軽い糸、質点、固定支点。周期公式は小角近似である。'
 },
 hamilton:{
  title:'ハミルトン力学：位相空間で考える',
  idea:'運動を位置と速度の二階微分方程式でなく、位置qと正準運動量pの一階連立方程式で表す。',
  formula:[
   ['ばね系のラグランジアン','L=\\frac12 m\\dot q^2-\\frac12 kq^2'],
   ['正準運動量','p=\\frac{\\partial L}{\\partial\\dot q}=m\\dot q'],
   ['ルジャンドル変換','H=p\\dot q-L=\\frac{p^2}{2m}+\\frac12 kq^2'],
   ['正準方程式','\\dot q=\\frac{\\partial H}{\\partial p}=\\frac{p}{m}'],
   ['運動量の時間変化','\\dot p=-\\frac{\\partial H}{\\partial q}=-kq'],
   ['再びニュートン形式へ','m\\ddot q=-kq']
  ],
  designer:'正準運動量は一般にmvとは限らない。正則なルジャンドル変換という条件を理解できるか。',
  solver:'L→p→H→正準方程式→物理現象へ戻す。',
  guard:'時間に依存しない線形ばねと質量一定の質点。一般の系ではHが力学的エネルギーと一致しない場合がある。'
 },
 coupled:{
  title:'連成振動：複雑な運動を固有モードに分ける',
  idea:'両端を壁にばねでつないだ同じ2質点の間を、さらに1本のばねで結ぶ。同位相と逆位相の組み合わせが、独立した運動へ分解できる。',
  formula:[
   ['質点1の運動方程式','m\\ddot x_1=-kx_1-k_c(x_1-x_2)'],
   ['質点2の運動方程式','m\\ddot x_2=-kx_2-k_c(x_2-x_1)'],
   ['同位相モード','x_1=x_2\\quad\\Rightarrow\\quad\\omega_+=\\sqrt{\\frac{k}{m}}'],
   ['逆位相モード','x_1=-x_2\\quad\\Rightarrow\\quad\\omega_-=\\sqrt{\\frac{k+2k_c}{m}}'],
   ['一般の線形系','\\det(K-\\omega^2M)=0']
  ],
  designer:'同位相時に中央ばねが伸びないことを発見できるか。単振動を足し合わせるという発想を問う。',
  solver:'それぞれの力→連立方程式→対称性→固有振動数。',
  guard:'小振幅、線形ばね、等質量、外力・減衰なし。実際のカオスや非線形振動はこの解だけでは表せない。'
 }
};
const esc=s=>s.replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;');
export function analyticalLabPage(){
 return '<div class="page"><div class="eyebrow">UNIVERSITY MECHANICS</div><h1>解析力学と連成振動</h1><p class="lead">ニュートンの力学から、自由度・作用・正準運動量・固有モードへ。数学的構造が問題を解きやすくする理由を学びます。</p><div class="select-tabs">'+Object.keys(lessons).map((k,i)=>'<button data-ana="'+k+'" class="'+(!i?'active':'')+'">'+({lagrange:'ラグランジュ',hamilton:'ハミルトン',coupled:'連成振動'}[k])+'</button>').join('')+'</div><div id="analytical-topic"></div></div>';
}
function content(mode){
 const x=lessons[mode];
 const steps=x.formula.map(([label,expr],i)=>'<section class="advanced-step"><strong>'+(i+1)+'. '+label+'</strong><div class="formula tex-display" data-tex="'+esc(expr)+'">'+esc(expr)+'</div></section>').join('');
 const parameters=mode==='coupled'?'<div class="advanced-controls"><label>質量 m（kg）<input data-param="m" type="range" min=".5" max="5" step=".5" value="1"></label><label>外側のばね k（N/m）<input data-param="k" type="range" min="1" max="50" step="1" value="12"></label><label>結合ばね kc（N/m）<input data-param="kc" type="range" min="0" max="30" step="1" value="3"></label></div>':'';
 return '<section class="card"><h2>'+x.title+'</h2><h3>どんな現象を説明したいのか</h3><p>'+x.idea+'</p><div class="callout warm"><strong>成立条件</strong><p>'+x.guard+'</p></div><h3>定義から式へ、一段ずつ</h3>'+steps
 +'<h3>条件を操作して確かめる</h3>'+parameters
 +'<canvas id="analytical-canvas" width="680" height="260" role="img" aria-label="解析力学または連成振動の位相図・模式図" style="width:100%;height:auto;background:#f4f9f6;border-radius:14px"></canvas>'
 +'<div class="button-row"><button class="secondary-btn" id="ana-play">▶ 再生</button><button class="secondary-btn" id="ana-reset">↺ リセット</button><span id="ana-clock">t=0.00 s</span></div><div id="ana-result" class="callout"></div>'
 +'<div class="force-thinking"><div><h3>出題者の思考</h3><p>'+x.designer+'</p></div><div><h3>解答者の思考</h3><p>'+x.solver+'</p></div><div><h3>メタ認知</h3><p>その定義は何を簡単にしたか。ニュートン形式に戻すと、同じ現象を表しているか。</p></div></div>'
 +'<button class="primary-btn" id="ana-record">この単元を記録する</button><span id="ana-feedback" role="status"></span></section>';
}
export function installAnalyticalLab(renderMath){
 const root=document.getElementById('analytical-topic');if(!root)return()=>{};
 let mode='lagrange',t=0,run=false,frame=0,last=null,dead=false;
 const $=id=>document.getElementById(id);
 function stop(){run=false;cancelAnimationFrame(frame);last=null;if($('ana-play'))$('ana-play').textContent='▶ 再生';}
 function draw(){
  const cv=$('analytical-canvas'),ctx=cv.getContext('2d');ctx.clearRect(0,0,680,260);
  ctx.lineWidth=2;ctx.strokeStyle='#b4cec0';
  let msg='';
  if(mode==='coupled'){
   const params=Object.fromEntries([...root.querySelectorAll('[data-param]')].map(el=>[el.dataset.param,Number(el.value)]));
   const modes=coupledModes({mass:params.m,outerK:params.k,couplingK:params.kc});
   const x1=270+45*Math.cos(modes.omegaTogether*t)+35*Math.cos(modes.omegaOpposite*t);
   const x2=430+45*Math.cos(modes.omegaTogether*t)-35*Math.cos(modes.omegaOpposite*t);
   for(const x of [x1,x2]){ctx.fillStyle='#87b7a4';ctx.fillRect(x-22,109,44,42);}
   ctx.beginPath();ctx.moveTo(80,150);ctx.lineTo(x1-25,150);ctx.moveTo(x1+25,150);ctx.lineTo(x2-25,150);ctx.moveTo(x2+25,150);ctx.lineTo(600,150);ctx.stroke();
   msg='同位相 ω='+modes.omegaTogether.toFixed(3)+' rad/s、逆位相 ω='+modes.omegaOpposite.toFixed(3)+' rad/s';
  }else if(mode==='hamilton'){
   ctx.beginPath();for(let i=0;i<=300;i++){const a=2*Math.PI*i/300;const x=340+110*Math.cos(a),y=130+85*Math.sin(a);if(!i)ctx.moveTo(x,y);else ctx.lineTo(x,y);}ctx.stroke();
   ctx.fillStyle='#ce965c';ctx.beginPath();ctx.arc(340+110*Math.cos(t*2),130+85*Math.sin(t*2),9,0,2*Math.PI);ctx.fill();
   msg='q（横軸）と p（縦軸）の位相空間。保存エネルギーの軌道。';
  }else{
   const theta=.55*Math.cos(t*2);
   ctx.beginPath();ctx.moveTo(340,35);ctx.lineTo(340+140*Math.sin(theta),35+140*Math.cos(theta));ctx.stroke();
   ctx.fillStyle='#cd985b';ctx.beginPath();ctx.arc(340+140*Math.sin(theta),35+140*Math.cos(theta),18,0,2*Math.PI);ctx.fill();
   msg='単振り子の小角近似。長さ一定の拘束を角度 θ という1自由度で表す。';
  }
  $('ana-clock').textContent='t='+t.toFixed(2)+' s';$('ana-result').textContent=msg;
 }
 function tick(now){if(!run||dead)return;if(last!==null)t+=(now-last)/1000;last=now;draw();frame=requestAnimationFrame(tick);}
 function show(next){
  stop();t=0;mode=next;root.innerHTML=content(mode);
  document.querySelectorAll('[data-ana]').forEach(b=>b.classList.toggle('active',b.dataset.ana===mode));
  renderMath?.(root);root.querySelectorAll('[data-param]').forEach(el=>el.addEventListener('input',draw));
  $('ana-play').addEventListener('click',()=>{if(run){stop();return;}run=true;last=null;$('ana-play').textContent='Ⅱ 一時停止';frame=requestAnimationFrame(tick);});
  $('ana-reset').addEventListener('click',()=>{stop();t=0;draw();});
  $('ana-record').addEventListener('click',()=>{try{localStorage.setItem('physics-analytical-'+mode,new Date().toISOString());$('ana-feedback').textContent='保存しました';}catch{$('ana-feedback').textContent='保存できませんでした';}});
  draw();
 }
 document.querySelectorAll('[data-ana]').forEach(b=>b.addEventListener('click',()=>show(b.dataset.ana)));
 show(mode);return()=>{dead=true;stop();};
}