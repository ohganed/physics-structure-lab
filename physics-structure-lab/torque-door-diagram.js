/* An accessible, deterministic top-view door-and-torque diagram. */
export function doorTorque({radius=0.8,force=20,angle=90}={}){
 if(![radius,force,angle].every(Number.isFinite)||radius<0||radius>1||force<0||angle<0||angle>180)throw new RangeError('Invalid door parameters');
 const rad=angle*Math.PI/180;
 return {torque:radius*force*Math.sin(rad),tangential:force*Math.sin(rad),radial:force*Math.cos(rad)};
}
const escapeHTML=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
export function torqueDoorHtml(lang='ja'){
 const en=lang==='en';
 return '<section class="mechanics-worked-article" id="torque-door-lab"><h3>'+(en?'Why the point and direction of a push matter':'ドアをどこから、どの向きに押すか')+'</h3>'
 +'<p>'+(en?'This is a top view: the hinge is on the left, and the door extends to the right. The arrow begins at the chosen contact point. The dashed arrow is the tangential component, which turns the door about its hinge.':'ドアを上から見た図です。左が蝶番で、ドアは右へ伸びています。赤い矢印は作用点から描いた力、破線はドアを回す接線方向の成分です。')+'</p>'
 +'<svg id="torque-door-svg" viewBox="0 0 620 350" role="img" aria-label="'+(en?'Top-view door, hinge, applied force and its tangential component':'ドア、蝶番、作用する力、接線方向成分の上面図')+'" style="width:100%;max-width:620px;height:auto"></svg>'
 +'<div class="mechanics-parameter-grid">'
 +'<label id="door-radius-label" for="door-radius">'+(en?'Distance from hinge':'蝶番からの距離')+'</label><input id="door-radius" type="range" min="0.1" max="1" step="0.05" value="0.8">'
 +'<label id="door-angle-label" for="door-angle">'+(en?'Force angle':'力の角度')+'</label><input id="door-angle" type="range" min="0" max="180" step="5" value="90">'
 +'<label id="door-force-label" for="door-force">'+(en?'Applied force':'押す力')+'</label><input id="door-force" type="range" min="0" max="40" step="2" value="20"></div>'
 +'<p id="torque-door-output" aria-live="polite"></p>'
 +'<p class="muted">'+(en?'Ideal model: fixed vertical hinge axis, force in the horizontal plane, no hinge friction. Positive torque means counterclockwise rotation in this top view. Angle is measured from the positive radius toward the force.':'理想化したモデルです。蝶番は鉛直な固定軸で、力は水平面内に作用し、軸の摩擦を無視します。上から見て反時計回りを正とし、角度は半径方向から力の向きへ測ります。')+'</p></section>';
}
export function installTorqueDoor(root,lang='ja'){
 const host=root.querySelector('#torque-door-lab');if(!host)return;
 const en=lang==='en',svg=host.querySelector('#torque-door-svg');
 const radius=host.querySelector('#door-radius'),angle=host.querySelector('#door-angle'),force=host.querySelector('#door-force');
 const output=host.querySelector('#torque-door-output'),ns='http://www.w3.org/2000/svg';
 function add(tag,attrs={},content){const el=document.createElementNS(ns,tag);for(const [k,v] of Object.entries(attrs))el.setAttribute(k,String(v));if(content!==undefined)el.textContent=content;svg.append(el);return el;}
 function draw(){
  const r=Number(radius.value),phi=Number(angle.value),F=Number(force.value),values=doorTorque({radius:r,angle:phi,force:F});
  svg.replaceChildren();
  const hingeX=72,hingeY=175,pointX=hingeX+440*r, rad=phi*Math.PI/180;
  add('rect',{x:hingeX,y:hingeY-16,width:440,height:32,rx:5,fill:'#d8e7e1',stroke:'#376c68','stroke-width':2});
  add('line',{x1:hingeX,y1:hingeY-65,x2:hingeX,y2:hingeY+65,stroke:'#526a65','stroke-width':4});
  add('circle',{cx:hingeX,cy:hingeY,r:10,fill:'#325f5b'});
  add('text',{x:23,y:hingeY-78,'font-size':16,fill:'currentColor'},en?'Hinge':'蝶番');
  add('line',{x1:hingeX,y1:hingeY+36,x2:pointX,y2:hingeY+36,stroke:'#325f5b','stroke-width':2});
  add('text',{x:hingeX+(pointX-hingeX)/2-12,y:hingeY+58,'font-size':16,fill:'currentColor'},'r = '+r.toFixed(2)+' m');
  add('circle',{cx:pointX,cy:hingeY,r:8,fill:'#b55332'});
  const vectorScale=F*3.5,dx=vectorScale*Math.cos(rad),dy=-vectorScale*Math.sin(rad);
  // The arrow ends at the force tip, while its tail remains at the contact point.
  const arrow=(x1,y1,x2,y2,color,dash=false)=>{
   add('line',{x1,y1,x2,y2,stroke:color,'stroke-width':3,'stroke-dasharray':dash?'7 5':'none','stroke-linecap':'round'});
   const vx=x2-x1,vy=y2-y1,length=Math.hypot(vx,vy);
   if(length>8){const ux=vx/length,uy=vy/length;add('polygon',{points:[[x2,y2],[x2-ux*13-uy*6,y2-uy*13+ux*6],[x2-ux*13+uy*6,y2-uy*13-ux*6]].map(p=>p.join(',')).join(' '),fill:color});}
  };
  arrow(pointX,hingeY,pointX+dx,hingeY+dy,'#b55332');
  arrow(pointX,hingeY,pointX,hingeY-vectorScale*Math.sin(rad),'#2576a2',true);
  add('text',{x:Math.min(560,pointX+dx+8),y:Math.max(24,hingeY+dy-10),fill:'#b55332','font-size':16},'F');
  add('text',{x:pointX+10,y:Math.max(20,hingeY-vectorScale*Math.sin(rad)-20),fill:'#2576a2','font-size':15},'F sin φ');
  add('text',{x:300,y:310,fill:'currentColor','font-size':16},'φ = '+phi+'°');
  const text=(en?'r = ':'r = ')+r.toFixed(2)+' m; F = '+F.toFixed(0)+' N; φ = '+phi+'°; F sinφ = '+values.tangential.toFixed(2)+' N; τ = '+values.torque.toFixed(2)+' N·m.';
  output.textContent=text;
 }
 [radius,angle,force].forEach(input=>input.addEventListener('input',draw));draw();
}
