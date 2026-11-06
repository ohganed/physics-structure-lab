import {projectile,atwood} from './kinematics-extensions.js';
const texts={
 projectile:{
 title:'斜方投射：なぜ運動を二方向に分けるのか',
 intro:'投げ上げられた物体は水平方向に進みながら、鉛直方向には重力で加速します。二つの方向を分ければ、同じ時間を共有する独立な運動方程式になります。',
 condition:'空気抵抗なし、地表近くの一様重力、初期高さ0、地面に到達するまで。角度は水平から上向き。',
 steps:[['力と加速度','a_x=0,\\qquad a_y=-g'],['初速度を成分に分ける','v_{0x}=v_0\\cos\\theta,\\qquad v_{0y}=v_0\\sin\\theta'],['位置を積分','x(t)=v_0\\cos\\theta\\ t'],['鉛直方向を積分','y(t)=v_0\\sin\\theta\\ t-\\frac12gt^2'],['初期高さ0の飛行時間','T=\\frac{2v_0\\sin\\theta}{g}'],['水平到達距離','R=\\frac{v_0^2\\sin(2\\theta)}{g}']],
 designer:'初速度の分解と時間の共有を理解できているか、発射角や初期高さを変えて確かめる。',
 solver:'座標系→速度の分解→各方向の式→同じ時刻で連立→条件の検証。',
 self:'水平と鉛直を別々の時間で計算していないか。'
 },
 pulley:{
 title:'滑車と二物体：なぜ拘束条件が必要か',
 intro:'伸びない糸でつないだ二つの物体は、重さが違っても独立に動けません。糸の長さが一定という条件が運動を結びます。',
 condition:'質量が無視できる伸びない糸、摩擦なし・質量なしの滑車、鉛直2物体、糸の張力が等しく、初期速度0。',
 steps:[['運動方向をそろえる','a_1=a_2=a'],['物体1の運動方程式','T-m_1g=m_1a'],['物体2の運動方程式','m_2g-T=m_2a'],['張力を消去','(m_2-m_1)g=(m_1+m_2)a'],['加速度を求める','a=\\frac{m_2-m_1}{m_1+m_2}g'],['張力を求める','T=\\frac{2m_1m_2}{m_1+m_2}g']],
 designer:'「張力が重力に等しい」と決めつけないか。糸の拘束と力の相互作用を区別できるか。',
 solver:'各物体を分けて図示→正方向→拘束→運動方程式→消去。',
 self:'加速している物体についても力のつり合いを使っていないか。'
 }
};
const esc=s=>String(s).replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;');
export function kinematicsLabPage(){
 return '<div class="page"><div class="eyebrow">MECHANICS / MODEL BUILDING</div><h1>斜方投射と滑車：式を組み立てる</h1><p class="lead">力の方向と運動の拘束を先に考え、公式を覚える前に自分で方程式を作ります。</p><div class="select-tabs"><button class="active" data-kin="projectile">斜方投射</button><button data-kin="pulley">滑車の2物体</button></div><div id="kin-topic"></div></div>';
}
function panel(mode){
 const d=texts[mode],steps=d.steps.map(([name,latex],i)=>'<div class="advanced-step"><strong>'+(i+1)+'. '+name+'</strong><div class="formula tex-display" data-tex="'+esc(latex)+'">'+esc(latex)+'</div></div>').join('');
 const controls=mode==='projectile'
 ?[['speed','初速度 (m/s)',12,0,30,.5],['angleDeg','角度 (°)',40,0,90,1]]
 :[['m1','質量 m₁ (kg)',2,.5,10,.5],['m2','質量 m₂ (kg)',3,.5,10,.5]];
 return '<section class="card"><h2>'+d.title+'</h2><h3>現象と定義</h3><p>'+d.intro+'</p><div class="callout warm"><strong>モデルの条件</strong><p>'+d.condition+'</p></div><h3>どう式を作るか</h3>'+steps+
 '<h3>条件を変えて予測・検証</h3><div class="advanced-controls">'+controls.map(([id,label,value,min,max,step])=>'<label>'+label+' <output id="kin-'+id+'-out">'+value+'</output><input data-kin-param="'+id+'" type="range" min="'+min+'" max="'+max+'" value="'+value+'" step="'+step+'"></label>').join('')+'</div>'+
 '<canvas id="kin-canvas" width="680" height="260" style="width:100%;height:auto;border:1px solid #dce7df;border-radius:12px" role="img" aria-label="物体の位置と運動の動的な図"></canvas>'+
 '<div class="button-row"><button id="kin-play" class="secondary-btn">▶ 再生</button><button id="kin-reset" class="secondary-btn">↺ 最初から</button><label>時刻 <output id="kin-time-out">0.00 s</output></label></div><input id="kin-time" type="range" min="0" max="6" step=".02" value="0" style="width:100%"><div class="callout" id="kin-result"></div>'+
 '<div class="force-thinking"><div><h3>出題者の思考</h3><p>'+d.designer+'</p></div><div><h3>解答者の思考</h3><p>'+d.solver+'</p></div><div><h3>メタ認知</h3><p>'+d.self+'</p></div></div></section>';
}
export function installKinematicsLab(renderMath){
 const root=document.getElementById('kin-topic');if(!root)return()=>{};
 let mode='projectile',t=0,run=false,frame=0,last=null,closed=false;
 const $=id=>document.getElementById(id);
 function stop(){run=false;cancelAnimationFrame(frame);last=null;if($('kin-play'))$('kin-play').textContent='▶ 再生';}
 function render(){
  const p=Object.fromEntries([...root.querySelectorAll('[data-kin-param]')].map(el=>[el.dataset.kinParam,Number(el.value)]));
  for(const [key,value] of Object.entries(p))$('kin-'+key+'-out').textContent=String(value);
  const cv=$('kin-canvas'),ctx=cv.getContext('2d');ctx.clearRect(0,0,680,260);ctx.fillStyle='#f3f9f5';ctx.fillRect(0,0,680,260);ctx.strokeStyle='#a6bfb4';ctx.beginPath();ctx.moveTo(30,230);ctx.lineTo(650,230);ctx.stroke();
  let result;
  if(mode==='projectile'){
   const s=projectile({...p,time:t});const sx=30+Math.min(600,s.x*9),sy=230-s.y*9;
   ctx.fillStyle='#db9d63';ctx.beginPath();ctx.arc(sx,sy,11,0,2*Math.PI);ctx.fill();
   ctx.strokeStyle='#378775';ctx.beginPath();
   for(let i=0;i<=80;i++){const q=projectile({...p,time:s.flight*i/80});if(i===0)ctx.moveTo(30+Math.min(600,q.x*9),230-q.y*9);else ctx.lineTo(30+Math.min(600,q.x*9),230-q.y*9);}ctx.stroke();
   result='到達距離 '+s.range.toFixed(2)+' m／飛行時間 '+s.flight.toFixed(2)+' s／現在の高さ '+s.y.toFixed(2)+' m';
  }else{
   const s=atwood({...p,time:t});ctx.strokeStyle='#647e72';ctx.lineWidth=3;ctx.beginPath();ctx.arc(340,45,24,Math.PI,2*Math.PI);ctx.stroke();
   const displacement=Math.max(-90,Math.min(90,s.displacement*6));
   for(const [x,y,label] of [[250,85-displacement,'1'],[430,85+displacement,'2']]){ctx.strokeStyle='#667e73';ctx.beginPath();ctx.moveTo(x,45);ctx.lineTo(x,y);ctx.stroke();ctx.fillStyle='#d3a76f';ctx.fillRect(x-24,y,48,50);ctx.fillStyle='#254339';ctx.fillText(label,x-4,y+26);}
   result='加速度（m₂下向き正） '+s.a.toFixed(2)+' m/s²／張力 '+s.tension.toFixed(2)+' N';
  }
  $('kin-result').textContent=result;$('kin-time').value=t;$('kin-time-out').textContent=t.toFixed(2)+' s';
 }
 function tick(now){if(!run||closed)return;if(last!==null)t=Math.min(6,t+(now-last)/1000);last=now;render();if(t>=6)stop();else frame=requestAnimationFrame(tick);}
 function show(next){stop();t=0;mode=next;root.innerHTML=panel(mode);document.querySelectorAll('[data-kin]').forEach(b=>b.classList.toggle('active',b.dataset.kin===mode));renderMath?.(root);
  root.querySelectorAll('[data-kin-param]').forEach(el=>el.addEventListener('input',render));
  $('kin-time').addEventListener('input',()=>{stop();t=Number($('kin-time').value);render();});
  $('kin-play').addEventListener('click',()=>{if(run){stop();return;}if(t>=6)t=0;run=true;last=null;$('kin-play').textContent='Ⅱ 一時停止';frame=requestAnimationFrame(tick);});
  $('kin-reset').addEventListener('click',()=>{stop();t=0;render();});render();
 }
 document.querySelectorAll('[data-kin]').forEach(b=>b.addEventListener('click',()=>show(b.dataset.kin)));show(mode);return()=>{closed=true;stop();};
}