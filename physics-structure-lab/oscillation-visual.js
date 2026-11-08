/* Chapter 06: phase-linked spring diagram and x/v/a time curves. No animation or external dependencies. */
export function oscillatorState({amplitude=1,mass=2,stiffness=8,phaseDeg=0}={}){
 if(![amplitude,mass,stiffness,phaseDeg].every(Number.isFinite)||amplitude<=0||mass<=0||stiffness<=0||phaseDeg<0||phaseDeg>360)throw new RangeError('Invalid oscillator parameters');
 const omega=Math.sqrt(stiffness/mass),phase=phaseDeg*Math.PI/180;
 const position=amplitude*Math.cos(phase),velocity=-amplitude*omega*Math.sin(phase);
 const acceleration=-omega*omega*position,force=-stiffness*position;
 const kinetic=0.5*mass*velocity*velocity,potential=0.5*stiffness*position*position,total=0.5*stiffness*amplitude*amplitude;
 return {amplitude,mass,stiffness,phaseDeg,phase,omega,period:2*Math.PI/omega,time:phase/omega,position,velocity,acceleration,force,kinetic,potential,total};
}
const h=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
export function oscillationVisualHtml(lang='ja'){
 const en=lang==='en';
 return '<section class="mechanics-worked-article oscillation-visual" id="oscillation-visual">'
 +'<h3>'+(en?'How position, velocity and acceleration change together':'ばねの位置・速度・加速度を同時に見る')+'</h3>'
 +'<p>'+(en?'The two diagrams describe the same instant. Move the phase slider: the mass moves, the velocity and restoring-force arrows change, and the markers on the three curves move together.':'左のばねの図と右の3つのグラフは、同じ瞬間の運動を表しています。位相を動かすと、物体の位置・速度と復元力の矢印・グラフ上の点が同時に変化します。')+'</p>'
 +'<div class="oscillation-visual-grid">'
 +'<div class="oscillation-panel"><svg id="oscillation-spring-svg" viewBox="0 0 360 286" role="img" aria-label="'+(en?'Spring, mass and arrows for displacement, velocity and restoring force':'ばねと物体、変位・速度・復元力の向きを示す図')+'"></svg><p class="muted">'+(en?'The wall stays fixed. The dashed line marks the equilibrium position x=0. Orange: velocity. Blue: force.':'壁は固定されています。破線は平衡位置 x=0。橙色は速度、青色は復元力です。')+'</p></div>'
 +'<div class="oscillation-panel"><svg id="oscillation-curves-svg" viewBox="0 0 360 342" role="img" aria-label="'+(en?'Three synchronized graphs of normalized displacement, velocity and acceleration':'位置・速度・加速度の3本の時間変化グラフ')+'"></svg><p class="muted">'+(en?'The curves are independently normalized by their maximum magnitude, not plotted in common physical units. The vertical marker is the current instant.':'3つの縦軸は、それぞれの最大絶対値で割った無次元量です。縦線が現在の瞬間を示します。')+'</p></div></div>'
 +'<div class="mechanics-parameter-grid"><label for="oscillation-phase" id="oscillation-phase-label">'+(en?'Phase φ = ωt (degrees)':'位相 φ=ωt（度）')+'</label><input id="oscillation-phase" type="range" min="0" max="360" step="5" value="0">'
 +'<label for="oscillation-amplitude" id="oscillation-amplitude-label">'+(en?'Amplitude A (m)':'振幅 A（m）')+'</label><input id="oscillation-amplitude" type="range" min="0.25" max="1.5" step="0.05" value="1">'
 +'<label for="oscillation-mass" id="oscillation-mass-label">'+(en?'Mass m (kg)':'質量 m（kg）')+'</label><input id="oscillation-mass" type="range" min="0.5" max="5" step="0.5" value="2">'
 +'<label for="oscillation-stiffness" id="oscillation-stiffness-label">'+(en?'Spring constant k (N/m)':'ばね定数 k（N/m）')+'</label><input id="oscillation-stiffness" type="range" min="2" max="24" step="2" value="8"></div>'
 +'<p id="oscillation-readout" aria-live="polite"></p>'
 +'<p>'+(en?'At the ends x=±A, speed is zero but restoring acceleration has maximum magnitude. At equilibrium x=0, acceleration is zero while speed is largest. These are not the same physical quantity.':'左右の折り返し点 x=±A では速さが0ですが、加速度の大きさは最大です。平衡位置 x=0 では加速度が0で、速さは最大です。速度と加速度は別の量です。')+'</p>'
 +'<p class="muted">'+(en?'Model: a mass on a frictionless horizontal surface attached to an ideal massless linear spring, no damping, x=A cos(ωt), released from x=A at t=0. Manual time scrubbing only; there is no autoplay.':'条件：水平な摩擦のない面上の物体、質量を無視した線形ばね、減衰なし。t=0 に x=A から静かに離し、x=A cos(ωt) とします。時間は手動で動かす方式で、自動再生はありません。')+'</p></section>';
}
export function installOscillationVisual(root,lang='ja'){
 const host=root.querySelector('#oscillation-visual');if(!host)return;
 const en=lang==='en',spring=host.querySelector('#oscillation-spring-svg'),curves=host.querySelector('#oscillation-curves-svg'),readout=host.querySelector('#oscillation-readout');
 const inputs=['phase','amplitude','mass','stiffness'].map(id=>host.querySelector('#oscillation-'+id));
 const ns='http://www.w3.org/2000/svg';
 const make=(svg,tag,attrs={},value)=>{const el=document.createElementNS(ns,tag);for(const [key,val] of Object.entries(attrs))el.setAttribute(key,String(val));if(value!==undefined)el.textContent=value;svg.append(el);return el;};
 const stroke=(svg,x1,y1,x2,y2,color,width=2,dash)=>make(svg,'line',{x1,y1,x2,y2,stroke:color,'stroke-width':width,'stroke-linecap':'round',...(dash?{'stroke-dasharray':dash}:{})});
 const arrow=(svg,x1,y1,x2,y2,color)=>{const dx=x2-x1,dy=y2-y1,length=Math.hypot(dx,dy);if(length<2)return;stroke(svg,x1,y1,x2,y2,color,3);const ux=dx/length,uy=dy/length;make(svg,'polygon',{fill:color,points:[[x2,y2],[x2-ux*11-uy*5.5,y2-uy*11+ux*5.5],[x2-ux*11+uy*5.5,y2-uy*11-ux*5.5]].map(p=>p.join(',')).join(' ')})};
 const text=(svg,x,y,value,color='currentColor',size=15)=>make(svg,'text',{x,y,fill:color,'font-size':size},value);
 function springPath(x0,x1,y){const n=12,step=(x1-x0)/(n*2+2),points=[[x0,y],[x0+step,y]];for(let i=0;i<n*2;i++)points.push([x0+step*(i+2),y+(i%2===0?-10:10)]);points.push([x1,y]);return points.map((p,i)=>(i?'L':'M')+p[0].toFixed(1)+' '+p[1].toFixed(1)).join(' ');}
 function drawSpring(s){
  spring.replaceChildren();
  const center=196,blockCenter=center+75*s.position/s.amplitude,by=151;
  make(spring,'rect',{x:12,y:110,width:22,height:103,fill:'#a6b7b3'});
  for(let y=112;y<211;y+=16)stroke(spring,12,y,30,y-10,'#637b76',1);
  stroke(spring,35,199,340,199,'#8ba6a0',2);
  stroke(spring,center,75,center,226,'#9db6b0',2,'5 5');
  text(spring,center-18,245,'x=0','#456b64',13);
  make(spring,'path',{d:springPath(34,blockCenter-25,by),fill:'none',stroke:'#598b83','stroke-width':3,'stroke-linecap':'round','stroke-linejoin':'round'});
  make(spring,'rect',{x:blockCenter-24,y:130,width:48,height:43,rx:5,fill:'#d7e9e3',stroke:'#296c64','stroke-width':2});
  make(spring,'circle',{cx:blockCenter,cy:151,r:4,fill:'#296c64'});
  if(Math.abs(s.position)>1e-8)arrow(spring,center,218,blockCenter,218,'#775c9f');
  const vScaled=s.velocity/(s.amplitude*s.omega),fScaled=s.force/(s.stiffness*s.amplitude);
  if(Math.abs(vScaled)>0.015)arrow(spring,blockCenter,88,blockCenter+51*vScaled,88,'#c46f37');
  if(Math.abs(fScaled)>0.015)arrow(spring,blockCenter,116,blockCenter+51*fScaled,116,'#2d74a7');
  text(spring,14,21,en?'Object on a spring':'ばねにつながれた物体',undefined,16);
  text(spring,13,49,'v','#c46f37',15);text(spring,52,49,en?'velocity':'速度','#c46f37',13);
  text(spring,148,49,'F','#2d74a7',15);text(spring,167,49,en?'spring force':'復元力','#2d74a7',13);
  text(spring,22,276,'x = '+s.position.toFixed(2)+' m','#775c9f',15);
 }
 function drawCurves(s){
  curves.replaceChildren();
  const xLeft=66,xRight=345,width=xRight-xLeft,row=[64,165,266],scale=31;
  text(curves,12,21,en?'One period: t / T':'1周期：t / T',undefined,15);
  const colors=['#775c9f','#c46f37','#2d74a7'],labels=['x/A','v/(Aω)','a/(Aω²)'],fns=[x=>Math.cos(x),x=>-Math.sin(x),x=>-Math.cos(x)];
  for(let i=0;i<3;i++){
   const y=row[i];
   stroke(curves,xLeft,y,xRight,y,'#819f98',1);
   stroke(curves,xLeft,y-scale-3,xLeft,y+scale+3,'#819f98',1);
   text(curves,4,y-13,labels[i],colors[i],14);
   text(curves,43,y-scale+5,'+1','#778a84',11);
   text(curves,43,y+scale+4,'−1','#778a84',11);
   let path='';for(let j=0;j<=120;j++){const phase=2*Math.PI*j/120;const px=xLeft+width*j/120,py=y-scale*fns[i](phase);path+=(j===0?'M':'L')+px.toFixed(2)+' '+py.toFixed(2)+' ';}
   make(curves,'path',{d:path,stroke:colors[i],fill:'none','stroke-width':2.5});
   const markerX=xLeft+width*s.phaseDeg/360,markerY=y-scale*fns[i](s.phase);
   make(curves,'circle',{cx:markerX,cy:markerY,r:5,fill:colors[i],stroke:'#fff','stroke-width':1.5});
  }
  const markerX=xLeft+width*s.phaseDeg/360;
  stroke(curves,markerX,26,markerX,305,'#667f78',1,'4 5');
  text(curves,xLeft,329,'0',undefined,12);
  text(curves,xLeft+width/2-8,329,'T/2',undefined,12);
  text(curves,xRight-6,329,'T',undefined,12);
 }
 function update(){
  const [phaseDeg,amplitude,mass,stiffness]=inputs.map(el=>Number(el.value)),s=oscillatorState({phaseDeg,amplitude,mass,stiffness});
  drawSpring(s);drawCurves(s);
  readout.textContent='φ = '+phaseDeg+'°; A = '+amplitude.toFixed(2)+' m; m = '+mass.toFixed(1)+' kg; k = '+stiffness.toFixed(0)+' N/m; '
   +'T = '+s.period.toFixed(3)+' s; t = '+s.time.toFixed(3)+' s. '
   +'x = '+s.position.toFixed(3)+' m; v = '+s.velocity.toFixed(3)+' m/s; '
   +'a = '+s.acceleration.toFixed(3)+' m/s²; F = '+s.force.toFixed(3)+' N; '
   +'K = '+s.kinetic.toFixed(3)+' J; U = '+s.potential.toFixed(3)+' J; E = '+s.total.toFixed(3)+' J.';
 }
 inputs.forEach(el=>el.addEventListener('input',update));update();
}
