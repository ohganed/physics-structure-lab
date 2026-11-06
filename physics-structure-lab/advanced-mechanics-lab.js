import {rotor,oscillator,orbit} from './advanced-mechanics-model.js';
const units={
 rotation:[['mass','質量 kg',2,.5,8,.5],['radius','半径 m',1,.5,4,.25],['force','力 N',4,0,15,.5],['angleDeg','力の角度 °',90,0,180,5]],
 oscillation:[['mass','質量 kg',2,.5,8,.5],['k','ばね定数 N/m',50,5,80,5],['amplitude','初期振幅 m',.3,0,1,.05],['damping','抵抗係数 kg/s',1,0,4,.25]],
 orbit:[['radius','地心距離 km',7000,6500,20000,100]]
};
const lessons={
 rotation:['固定軸回転の定義と法則','力の効果は作用点と角度で変わる。同じ質量でも、回転軸から遠い分布ほど回しにくい。','I=\\int r_\\perp^2\\,\\mathrm{d}m','I=\\frac12 mr^2','\\tau=rF\\sin\\varphi','\\tau=I\\alpha','\\theta(t)=\\frac12\\alpha t^2','出題者：回転軸と質量分布を変えて問う。解答者：まず回転軸を選ぶ。','慣性モーメントを質量だけで決めていないか。','薄い一様円板、中心固定軸、一定の力、初期角速度0'],
 oscillation:['ばね振動と減衰','位置だけで次の状態は決まらない。速度と加速度を含む微分方程式が必要。','F=-kx-b\\dot x','m\\ddot x+b\\dot x+kx=0','\\omega_0=\\sqrt{\\frac{k}{m}}','\\gamma=\\frac{b}{2m}','\\omega_d=\\sqrt{\\omega_0^2-\\gamma^2}','出題者：初期条件を変える。解答者：力の式→方程式→初期条件。','減衰と周期変化を混同していないか。','線形ばね、速度比例抵抗、不足減衰、x(0)=A、v(0)=0'],
 orbit:['万有引力と円軌道','物体の速さが変わらなくても速度ベクトルの向きは変化する。重力が向心加速度を生む。','F=\\frac{GMm}{r^2}','a=\\frac{v^2}{r}','\\frac{GMm}{r^2}=\\frac{mv^2}{r}','v=\\sqrt{\\frac{GM}{r}}','T=2\\pi\\sqrt{\\frac{r^3}{GM}}','出題者：高度と地心距離を混同させる。解答者：中心距離を確定する。','重力があるのに落ちない、と思っていないか。','球対称の中心天体、円軌道、大気抵抗・他天体を無視']
};
const esc=s=>String(s).replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;');
export function advancedMechanicsPage(){
 return '<div class="page"><div class="eyebrow">MECHANICS · INTERACTIVE</div><h1>回転・振動・軌道の研究室</h1><p>現象→定義→法則→導出→操作→メタ認知を順に学びます。</p><div class="select-tabs">'+Object.keys(lessons).map((k,i)=>'<button data-mode="'+k+'" class="'+(!i?'active':'')+'">'+({rotation:'剛体の回転',oscillation:'減衰振動',orbit:'円軌道'}[k])+'</button>').join('')+'</div><div id="advanced-topic"></div></div>';
}
function topic(mode){
 const d=lessons[mode],controls=units[mode].map(([key,label,val,min,max,step])=>'<label>'+label+' <output id="adv-'+key+'-out">'+val+'</output><input data-adv="'+key+'" type="range" min="'+min+'" max="'+max+'" value="'+val+'" step="'+step+'"></label>').join('');
 const math=d.slice(2,7).map((s,i)=>'<div class="advanced-step"><strong>導出・定義 '+(i+1)+'</strong><div class="formula tex-display" data-tex="'+esc(s)+'">'+esc(s)+'</div></div>').join('');
 return '<section class="card"><h2>'+d[0]+'</h2><h3>観察と物理量の定義</h3><p>'+d[1]+'</p><div class="callout warm"><strong>成立条件</strong><p>'+d[9]+'</p></div><h3>法則と数式への道筋</h3>'+math+'<h3>数値実験</h3><div class="advanced-controls">'+controls+'</div><canvas id="advanced-plot" width="680" height="260" role="img" aria-label="物理モデルの動く図"></canvas><div class="button-row"><button id="adv-start" class="secondary-btn">▶ 再生</button><button id="adv-reset" class="secondary-btn">↺ リセット</button><label>t = <output id="adv-time">0.00</output> s</label></div><input id="adv-seek" type="range" min="0" max="10" step=".05" value="0" style="width:100%"><div id="adv-result" class="callout"></div><h3>思考を比較する</h3><p>'+d[7]+'</p><p><strong>自分の判断を点検：</strong>'+d[8]+'</p></section>';
}
export function installAdvancedMechanics(renderMath){
 const root=document.getElementById('advanced-topic');if(!root)return()=>{};
 let mode='rotation',t=0,run=false,frame=0,last=null,disposed=false;
 const $=id=>document.getElementById(id);
 function stop(){run=false;cancelAnimationFrame(frame);last=null;if($('adv-start'))$('adv-start').textContent='▶ 再生';}
 function paint(){
  const p=Object.fromEntries([...root.querySelectorAll('[data-adv]')].map(el=>[el.dataset.adv,Number(el.value)]));
  for(const k of Object.keys(p))$('adv-'+k+'-out').textContent=p[k];
  const canvas=$('advanced-plot'),ctx=canvas.getContext('2d');ctx.clearRect(0,0,680,260);ctx.fillStyle='#f3f8f5';ctx.fillRect(0,0,680,260);
  let output='';
  if(mode==='rotation'){
   const s=rotor({...p,time:t});ctx.save();ctx.translate(340,130);ctx.rotate(s.theta);ctx.fillStyle='#b7d9cb';ctx.beginPath();ctx.arc(0,0,80,0,Math.PI*2);ctx.fill();ctx.strokeStyle='#b97143';ctx.lineWidth=5;ctx.beginPath();ctx.moveTo(0,0);ctx.lineTo(80,0);ctx.stroke();ctx.restore();
   output='τ='+s.torque.toFixed(2)+' N·m　I='+s.inertia.toFixed(2)+' kg·m²　α='+s.alpha.toFixed(2)+' rad/s²';
  }else if(mode==='oscillation'){
   const s=oscillator({...p,time:t});const x=340+s.x*160;ctx.fillStyle='#d9b786';ctx.fillRect(x-40,100,80,60);ctx.strokeStyle='#327266';ctx.beginPath();ctx.moveTo(35,130);for(let i=1;i<=20;i++)ctx.lineTo(35+(x-75)*i/20,130+(i%2?15:-15));ctx.stroke();
   output='x='+s.x.toFixed(3)+' m　v='+s.v.toFixed(3)+' m/s　T='+s.period.toFixed(2)+' s';
  }else{
   const s=orbit({radius:p.radius*1000,time:t*600}),a=s.omega*t*600;ctx.strokeStyle='#a6c6b7';ctx.beginPath();ctx.arc(340,130,90,0,2*Math.PI);ctx.stroke();ctx.fillStyle='#437da9';ctx.beginPath();ctx.arc(340,130,30,0,2*Math.PI);ctx.fill();ctx.fillStyle='#e2b777';ctx.beginPath();ctx.arc(340+90*Math.cos(a),130-90*Math.sin(a),11,0,2*Math.PI);ctx.fill();
   output='v='+(s.speed/1000).toFixed(3)+' km/s　周期='+(s.period/60).toFixed(2)+' 分';
  }
  $('adv-result').textContent=output;$('adv-time').textContent=t.toFixed(2);$('adv-seek').value=t;
 }
 function tick(now){if(!run||disposed)return;if(last!==null)t=Math.min(10,t+(now-last)/1000);last=now;paint();if(t>=10)stop();else frame=requestAnimationFrame(tick);}
 function show(m){
  stop();mode=m;t=0;root.innerHTML=topic(m);document.querySelectorAll('[data-mode]').forEach(b=>b.classList.toggle('active',b.dataset.mode===m));
  renderMath?.(root);root.querySelectorAll('[data-adv]').forEach(el=>el.addEventListener('input',paint));
  $('adv-seek').addEventListener('input',()=>{stop();t=Number($('adv-seek').value);paint();});
  $('adv-start').addEventListener('click',()=>{if(run){stop();return;}if(t>=10)t=0;run=true;last=null;$('adv-start').textContent='Ⅱ 一時停止';frame=requestAnimationFrame(tick);});
  $('adv-reset').addEventListener('click',()=>{stop();t=0;paint();});paint();
 }
 document.querySelectorAll('[data-mode]').forEach(b=>b.addEventListener('click',()=>show(b.dataset.mode)));show(mode);
 return()=>{disposed=true;stop();};
}