/* Two-panel diagram: tangent velocities on a circle and their vector difference. */
export function circularVelocityGeometry({radius=2,speed=4,angle=30}={}){
 if (![radius,speed,angle].every(Number.isFinite)||radius<=0||speed<=0||angle<=0||angle>120)throw new RangeError('Invalid circular-motion parameters');
 const theta=angle*Math.PI/180;
 const arc=radius*theta;
 const duration=arc/speed;
 const deltaV=2*speed*Math.sin(theta/2);
 const averageAcceleration=deltaV/duration;
 return {theta,arc,duration,deltaV,averageAcceleration,limitAcceleration:speed*speed/radius,ratio:averageAcceleration/(speed*speed/radius),
   v0:{x:0,y:speed},v1:{x:-speed*Math.sin(theta),y:speed*Math.cos(theta)}};
}
const e=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
export function circularVelocityHtml(lang='ja'){
 const en=lang==='en';
 return '<section class="mechanics-worked-article" id="circular-velocity-lab"><h3>'+(en?'Why acceleration points toward the center':'速度の向きが変わると、なぜ中心向きの加速度が生じるのか')+'</h3>'
 +'<p>'+(en?'Left: the velocity at each point is tangent to the path. Right: the same two arrows are moved to a common tail without rotating them. The arrow between their tips is the velocity change.':'左は円周上の2地点における接線方向の速度です。右では2本の速度の矢印を、向きを変えずに同じ始点へ移しています。矢印の先端を結ぶ線が速度の変化 Δv です。')+'</p>'
 +'<svg id="circular-velocity-svg" viewBox="0 0 760 350" role="img" aria-label="'+(en?'Two-part diagram of tangent velocities and their difference':'円上の接線速度と、同じ始点に置いた2つの速度ベクトルの差')+'" style="width:100%;height:auto"><title>'+(en?'Velocity changes during uniform circular motion':'等速円運動の速度ベクトルの変化')+'</title></svg>'
 +'<div class="mechanics-parameter-grid">'
 +'<label for="circular-angle" id="circular-angle-label">'+(en?'Angular displacement Δθ (degrees)':'回転角 Δθ（度）')+'</label><input id="circular-angle" type="range" min="5" max="90" step="5" value="30">'
 +'<label for="circular-speed" id="circular-speed-label">'+(en?'Speed v (m/s)':'速さ v（m/s）')+'</label><input id="circular-speed" type="range" min="1" max="10" step="0.5" value="4">'
 +'<label for="circular-radius" id="circular-radius-label">'+(en?'Radius r (m)':'半径 r（m）')+'</label><input id="circular-radius" type="range" min="0.5" max="5" step="0.5" value="2"></div>'
 +'<p id="circular-velocity-readout" aria-live="polite"></p>'
 +'<div class="callout"><p>'+(en?'For a circular arc, Δs = rΔθ exactly when Δθ is in radians. Since the speed is constant, Δt = rΔθ/v. The chord in the right-hand diagram has length 2v sin(Δθ/2). The acceleration magnitude over this interval approaches v²/r as Δθ approaches zero.':'円弧の長さは、角度をラジアンで測れば Δs=rΔθ と正確に表せます。速さが一定なので Δt=rΔθ/v。右図の弦の長さは 2v sin(Δθ/2) です。時間間隔を短くすると平均加速度の大きさが v²/r に近づきます。')+'</p></div>'
 +'<p class="muted">'+(en?'Model: uniform circular motion in a plane, constant positive speed and radius. The vector geometry is drawn to scale within each panel; the radius and the velocity arrows use different display scales, so their pixel lengths must not be compared.':'条件：平面内の等速円運動。速さと半径は一定です。各図の速度ベクトル同士は同じ縮尺で描いていますが、円の半径と速度の矢印では表示の尺度が異なるため、画面上の長さを直接比較することはできません。')+'</p></section>';
}
export function installCircularVelocity(root,lang='ja'){
 const host=root.querySelector('#circular-velocity-lab');if(!host)return;
 const en=lang==='en',svg=host.querySelector('#circular-velocity-svg'),ns='http://www.w3.org/2000/svg';
 const angle=host.querySelector('#circular-angle'),speed=host.querySelector('#circular-speed'),radius=host.querySelector('#circular-radius');
 const readout=host.querySelector('#circular-velocity-readout');
 function node(tag,attributes={},content){const n=document.createElementNS(ns,tag);for(const [key,value] of Object.entries(attributes))n.setAttribute(key,String(value));if(content!==undefined)n.textContent=content;svg.append(n);return n;}
 function line(x1,y1,x2,y2,color='#437b78',dashed=false,width=2){return node('line',{x1,y1,x2,y2,stroke:color,'stroke-width':width,'stroke-linecap':'round',...(dashed?{'stroke-dasharray':'6 5'}:{})});}
 function arrow(x1,y1,x2,y2,color,width=3){
  line(x1,y1,x2,y2,color,false,width);
  const dx=x2-x1,dy=y2-y1,length=Math.hypot(dx,dy);
  if(length<3)return;
  const ux=dx/length,uy=dy/length,h=11,w=5.5;
  node('polygon',{points:[[x2,y2],[x2-ux*h-uy*w,y2-uy*h+ux*w],[x2-ux*h+uy*w,y2-uy*h-ux*w]].map(p=>p.join(',')).join(' '),fill:color});
 }
 const label=(x,y,t,color='currentColor',size=15)=>node('text',{x,y,fill:color,'font-size':size},t);
 function draw(){
  const deg=Number(angle.value),v=Number(speed.value),r=Number(radius.value);
  const g=circularVelocityGeometry({radius:r,speed:v,angle:deg}),t=g.theta;
  const centerX=168,centerY=177,R=103,scale=9.2;
  svg.replaceChildren();
  label(18,25,en?'1. Velocity on the circle':'1. 円周上の速度');
  label(396,25,en?'2. Difference of velocity vectors':'2. 速度ベクトルの差');
  line(380,35,380,326,'#b6cbc5');
  node('circle',{cx:centerX,cy:centerY,r:R,fill:'none',stroke:'#9dbcb4','stroke-width':2});
  const x0=centerX+R,y0=centerY,x1=centerX+R*Math.cos(t),y1=centerY-R*Math.sin(t);
  line(centerX,centerY,x0,y0,'#9dbcb4',true);
  line(centerX,centerY,x1,y1,'#9dbcb4',true);
  node('circle',{cx:centerX,cy:centerY,r:4,fill:'#597a75'});
  node('circle',{cx:x0,cy:y0,r:5,fill:'#2b78a6'});
  node('circle',{cx:x1,cy:y1,r:5,fill:'#b45e40'});
  // On-circle vectors and common-tail vectors represent exactly the same velocity directions.
  arrow(x0,y0,x0,y0-scale*v,'#2b78a6');
  arrow(x1,y1,x1-scale*v*Math.sin(t),y1-scale*v*Math.cos(t),'#b45e40');
  label(Math.min(327,x0+8),y0+19,'A','#2b78a6');
  label(Math.max(60,x1-13),Math.max(44,y1-12),'B','#b45e40');
  label(138,191,'O');
  label(244,197,'r');
  label(215,170,'Δθ');
  const ox=535,oy=238;
  const a={x:ox,y:oy-scale*v},b={x:ox-scale*v*Math.sin(t),y:oy-scale*v*Math.cos(t)};
  node('circle',{cx:ox,cy:oy,r:4,fill:'#597a75'});
  arrow(ox,oy,a.x,a.y,'#2b78a6');
  arrow(ox,oy,b.x,b.y,'#b45e40');
  arrow(a.x,a.y,b.x,b.y,'#7b5ba4',3.3);
  label(ox+11,oy-scale*v*0.6,'v₀','#2b78a6');
  label(Math.max(395,b.x-34),Math.max(48,b.y+22),'v₁','#b45e40');
  label(Math.max(395,(a.x+b.x)/2-44),Math.max(43,(a.y+b.y)/2-10),'Δv','#7b5ba4');
  label(ox+10,oy+21,en?'common tail':'共通の始点',undefined,13);
  label(16,332,en?'Blue: first velocity / Orange: later velocity':'青：初めの速度　橙：後の速度',undefined,12);
  label(402,332,en?'Purple: Δv = v₁ − v₀':'紫：Δv = v₁ − v₀',undefined,12);
  readout.textContent='Δθ = '+deg+'° = '+g.theta.toFixed(3)+' rad; r = '+r.toFixed(1)+' m; v = '+v.toFixed(1)+' m/s; '
   +'|Δv| = '+g.deltaV.toFixed(3)+' m/s; Δt = '+g.duration.toFixed(3)+' s; '
   +(en?'Mean |Δv|/Δt':'平均加速度の大きさ |Δv|/Δt')+' = '+g.averageAcceleration.toFixed(3)+' m/s²; '
   +(en?'Instantaneous v²/r':'瞬間の加速度 v²/r')+' = '+g.limitAcceleration.toFixed(3)+' m/s².';
 }
 for(const el of [angle,speed,radius])el.addEventListener('input',draw);
 draw();
}
