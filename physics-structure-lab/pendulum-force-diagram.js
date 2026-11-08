/* Bilingual pendulum force diagram and amplitude-dependent period graph.
   The angle is the initial release amplitude, NOT a general instantaneous angle.
   Formula assumptions: point mass, massless inextensible string, fixed pivot, no drag. */
const G=9.8;
export function pendulumDiagramModel({length=1,mass=1,angleDeg=30}={}){
 if (![length,mass,angleDeg].every(Number.isFinite)||length<=0||mass<=0||angleDeg<0||angleDeg>=180)
  throw new RangeError('Invalid pendulum model parameters');
 const theta=angleDeg*Math.PI/180;
 const weight=mass*G;
 const tangentSigned=-weight*Math.sin(theta);
 const radialOutward=weight*Math.cos(theta);
 const tSmall=2*Math.PI*Math.sqrt(length/G);
 // Complete elliptic integral K(sin(theta/2)), evaluated via the arithmetic-geometric mean.
 const sn=Math.sin(theta/2);let a=1,b=Math.sqrt(1-sn*sn);
 for(let n=0;n<28&&Math.abs(a-b)>1e-14;n++){const nextA=(a+b)/2,nextB=Math.sqrt(a*b);a=nextA;b=nextB;}
 const tExact=tSmall/a;
 return {theta,weight,tangentSigned,radialOutward,tSmall,tExact,ratio:tExact/tSmall,
  approximateRatio:Math.sin(theta)/(theta||1),length,mass,angleDeg};
}
const E=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
export function pendulumForcesHtml(language='ja'){
 const en=language==='en';
 return '<section class="mechanics-worked-figure pendulum-force-figure" id="pendulum-force-figure" aria-label="'+(en?'Pendulum forces and period':'振り子の力と周期')+'">'
 +'<h4>'+(en?'The force along the pendulum arc':'振り子に働く重力を分ける')+'</h4>'
 +'<p>'+(en?'The bob is shown at the angle from which it is released. Gravity acts vertically downward; only its component tangent to the arc changes the angle.':'糸を傾けて小球を静かに離す瞬間を描きます。重力は鉛直下向きです。そのうち円弧に沿う成分が、小球を平衡位置へ戻そうとします。')+'</p>'
 +'<div class="pendulum-figure-grid">'
 +'<div><svg id="pendulum-force-svg" viewBox="0 0 420 335" role="img" aria-label="'+(en?'Pendulum with vertical gravity, tangential and radial components, string, pivot and angle':'振り子の支点、糸、角度、重力と接線・半径方向成分のベクトル図')+'"></svg>'
 +'<p class="muted">'+(en?'Red: gravity mg. Purple: tangential component. Blue: radial component. The string tension acts along the string and has no tangential component.':'赤：重力 mg。紫：接線方向の成分。青：半径方向の成分。糸の張力は糸に沿って働くため、接線方向の成分をもちません。')+'</p></div>'
 +'<div><svg id="pendulum-period-svg" viewBox="0 0 420 250" role="img" aria-label="'+(en?'Graph of pendulum period divided by small-angle period versus initial angle':'振れ角に対する周期と小角近似周期の比を示すグラフ')+'"></svg>'
 +'<p class="muted">'+(en?'The line shows exact ideal-pendulum period divided by the small-angle period; the dot marks the selected release angle. This ratio does not depend on mass or length.':'小角近似の周期に対して、理想振り子の実際の周期が何倍になるかを描きます。点は選んだ振れ角です。この比は質量や長さによって変わりません。')+'</p></div></div>'
 +'<div class="mechanics-parameter-grid">'
 +'<label for="pendulum-angle">'+(en?'Release angle θ₀':'離すときの振れ角 θ₀')+'</label><input id="pendulum-angle" type="range" min="0" max="80" step="5" value="30">'
 +'<label for="pendulum-length">'+(en?'Length ℓ (m)':'糸の長さ ℓ（m）')+'</label><input id="pendulum-length" type="range" min="0.5" max="3" step="0.1" value="1">'
 +'<label for="pendulum-mass">'+(en?'Mass m (kg)':'小球の質量 m（kg）')+'</label><input id="pendulum-mass" type="range" min="0.5" max="5" step="0.5" value="1"></div>'
 +'<p id="pendulum-force-result" aria-live="polite"></p>'
 +'<p class="muted">'+(en?'Ideal prediction with g=9.8 m/s², no drag or pivot friction. At exactly θ₀=0 there is no motion, so the period values are limits for a small nonzero amplitude. The period graph uses an elliptic integral, not the small-angle approximation.':'重力加速度9.8 m/s²、空気抵抗・支点摩擦なしの理想モデルです。θ₀=0 では運動しないため、周期は振れ幅を0に近づけた極限の値です。周期の曲線は小角近似ではなく楕円積分から計算しています。')+'</p></section>';
}
export function installPendulumForces(root,language='ja'){
 const box=root.querySelector('#pendulum-force-figure');if(!box)return;
 const en=language==='en',ns='http://www.w3.org/2000/svg';
 const figure=box.querySelector('#pendulum-force-svg'),graph=box.querySelector('#pendulum-period-svg'),out=box.querySelector('#pendulum-force-result');
 const angle=box.querySelector('#pendulum-angle'),length=box.querySelector('#pendulum-length'),mass=box.querySelector('#pendulum-mass');
 function el(svg,tag,attrs={},label){const n=document.createElementNS(ns,tag);for(const [k,v] of Object.entries(attrs))n.setAttribute(k,String(v));if(label!==undefined)n.textContent=label;svg.append(n);return n;}
 function line(svg,x1,y1,x2,y2,color,width=2,dash=''){return el(svg,'line',{x1,y1,x2,y2,stroke:color,'stroke-width':width,'stroke-linecap':'round',...(dash?{'stroke-dasharray':dash}:{})});}
 function arrow(svg,x1,y1,x2,y2,color){
  line(svg,x1,y1,x2,y2,color,3);const dx=x2-x1,dy=y2-y1,L=Math.hypot(dx,dy);
  if(L<8)return;const ux=dx/L,uy=dy/L;
  el(svg,'polygon',{fill:color,points:[[x2,y2],[x2-ux*12-uy*5,y2-uy*12+ux*5],[x2-ux*12+uy*5,y2-uy*12-ux*5]].map(p=>p.join(',')).join(' ')});
 }
 function label(svg,x,y,text,color='currentColor',size=15){el(svg,'text',{x,y,fill:color,'font-size':size},text);}
 function draw(){
  const m=pendulumDiagramModel({length:Number(length.value),mass:Number(mass.value),angleDeg:Number(angle.value)});
  const pivotX=160,pivotY=43,rod=135+21*(m.length-.5),sx=Math.sin(m.theta),cx=Math.cos(m.theta);
  const bx=pivotX+rod*sx,by=pivotY+rod*cx;
  figure.replaceChildren();
  label(figure,14,23,en?'Initial position and forces':'初期位置と力の分解',undefined,17);
  line(figure,pivotX,55,pivotX,290,'#a1b4ae',1.4,'5 5');
  line(figure,90,pivotY,231,pivotY,'#879b94',4);
  line(figure,pivotX,pivotY,bx,by,'#365d58',3.5);
  el(figure,'circle',{cx:pivotX,cy:pivotY,r:7,fill:'#365d58'});
  el(figure,'circle',{cx:bx,cy:by,r:12,fill:'#dcece6',stroke:'#365d58','stroke-width':2.5});
  label(figure,pivotX-39,pivotY-8,en?'pivot':'支点',undefined,13);
  label(figure,pivotX+8,pivotY+22,'θ₀',undefined,17);
  // Downward, tangential and outward-radial force components add vectorially to mg.
  const scale=92;
  const gravityEnd={x:bx,y:by+scale};
  const tang={x:bx-scale*sx*cx,y:by+scale*sx*sx};
  const radial={x:bx+scale*cx*sx,y:by+scale*cx*cx};
  arrow(figure,bx,by,gravityEnd.x,gravityEnd.y,'#b3513d');
  if(Math.abs(sx)>0.09)arrow(figure,bx,by,tang.x,tang.y,'#8054a0');
  if(Math.abs(cx)>0.09)arrow(figure,bx,by,radial.x,radial.y,'#2879a5');
  line(figure,tang.x,tang.y,gravityEnd.x,gravityEnd.y,'#b8a5c7',1.2,'4 4');
  line(figure,radial.x,radial.y,gravityEnd.x,gravityEnd.y,'#b8a5c7',1.2,'4 4');
  label(figure,Math.min(347,bx+15),Math.min(325,by+91),'mg','#b3513d',16);
  label(figure,18,309,'Fₜ = −mg sinθ₀','#8054a0',17);
  label(figure,18,329,en?'(positive θ to the right)':'（右への角度を正）','#526a65',13);
  // Plot T(theta0)/Tsmall = 1/AGM(1,cos(theta0/2)), with fixed axes.
  graph.replaceChildren();
  const lx=59,rx=402,top=36,bottom=203;
  const px=a=>lx+(rx-lx)*a/80;
  const py=r=>bottom-(r-1)/(1.2-1)*(bottom-top);
  line(graph,lx,top,lx,bottom,'#617b73',1.6);
  line(graph,lx,bottom,rx,bottom,'#617b73',1.6);
  label(graph,10,17,en?'T / T₀ vs angle':'振れ角と周期比',undefined,17);
  for(const value of [1,1.05,1.1,1.15,1.2]){
   const y=py(value);line(graph,lx,y,rx,y,'#cfded7',1);label(graph,6,y+4,value.toFixed(2),undefined,12);
  }
  for(const deg of [0,20,40,60,80])label(graph,px(deg)-8,226,String(deg),undefined,12);
  label(graph,287,245,en?'angle θ₀ (°)':'振れ角 θ₀（度）',undefined,13);
  let path='';for(let deg=0;deg<=80;deg++){
   const value=pendulumDiagramModel({length:1,mass:1,angleDeg:deg}).ratio;
   path+=(deg===0?'M':'L')+px(deg).toFixed(2)+' '+py(value).toFixed(2)+' ';
  }
  el(graph,'path',{d:path,fill:'none',stroke:'#267e8a','stroke-width':3});
  const dotX=px(m.angleDeg),dotY=py(m.ratio);
  line(graph,dotX,bottom,dotX,dotY,'#c07844',1.3,'4 4');
  el(graph,'circle',{cx:dotX,cy:dotY,r:6,fill:'#c07844',stroke:'#fff','stroke-width':2});
  const fmt=(v,d=3)=>(Math.abs(v)<.5*10**(-d)?0:v).toFixed(d);
  out.textContent='θ₀='+m.angleDeg+'°; ℓ='+fmt(m.length,1)+' m; m='+fmt(m.mass,1)+' kg; mg='+fmt(m.weight,2)+' N; '
   +(en?'Tangential signed force ':'接線方向の力（符号付き）')+'Fₜ='+fmt(m.tangentSigned,2)+' N; '
   +(en?'Small-angle period ':'小角近似の周期 ')+'T₀='+fmt(m.tSmall)+' s; '
   +(en?'Ideal period ':'理想振り子の周期 ')+'T='+fmt(m.tExact)+' s ('+fmt((m.ratio-1)*100,1)+'% '+(en?'longer':'長い')+').';
 }
 [angle,length,mass].forEach(input=>input.addEventListener('input',draw));draw();
}
