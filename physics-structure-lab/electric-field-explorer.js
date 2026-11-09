/* Interactive two-charge electric field explorer: physical geometry and vector addition,
   with a single common force-vector scale. A non-perturbing positive test charge is implied. */
export const COULOMB_K = 8.9875517923e9;
export function twoSourceElectricField({q1MicroC=1,q2MicroC=1,probeX=0,probeY=.3}={}){
 const values=[q1MicroC,q2MicroC,probeX,probeY];
 if(!values.every(Number.isFinite)||Math.abs(q1MicroC)>10||Math.abs(q2MicroC)>10||Math.abs(probeX)>.7||probeY<.05||probeY>.85)
  throw new RangeError('Unsupported source or probe configuration');
 function from(q,x0){
  const dx=probeX-x0,dy=probeY;
  const r2=dx*dx+dy*dy,r=Math.sqrt(r2),c=COULOMB_K*q*1e-6/(r2*r);
  return {x:c*dx,y:c*dy,r,magnitude:Math.abs(COULOMB_K*q*1e-6/r2)};
 }
 const source1=from(q1MicroC,-.3),source2=from(q2MicroC,.3);
 const total={x:source1.x+source2.x,y:source1.y+source2.y};
 total.magnitude=Math.hypot(total.x,total.y);
 return {source1,source2,total,probeX,probeY,q1MicroC,q2MicroC};
}
const tx=(j,e)=>e?j[1]:j[0];
function glyphText(x,y,s,fill='#35544d',size=15){
 return '<text x="'+x+'" y="'+y+'" font-size="'+size+'" fill="'+fill+'">'+String(s)+'</text>';
}
function line(x,y,X,Y,col='#7a9990',w=2,dashed=false){
 return '<line x1="'+x+'" y1="'+y+'" x2="'+X+'" y2="'+Y+'" stroke="'+col+'" stroke-width="'+w+'" stroke-linecap="round"'+(dashed?' stroke-dasharray="5 5"':'')+'/>';
}
function arrow(x,y,X,Y,col){
 const dx=X-x,dy=Y-y,r=Math.hypot(dx,dy);if(r<5)return '';
 const ux=dx/r,uy=dy/r;
 return line(x,y,X,Y,col,2.7)+'<polygon points="'+[[X,Y],[X-10*ux-5*uy,Y-10*uy+5*ux],[X-10*ux+5*uy,Y-10*uy-5*ux]].map(p=>p.join(',')).join(' ')+'" fill="'+col+'"/>';
}
function charge(x,y,q){
 const col=q>0?'#b45d47':q<0?'#36799b':'#81978f';
 const fill=q>0?'#f7e4db':q<0?'#e1eff5':'#eaf0ed';
 return '<circle cx="'+x+'" cy="'+y+'" r="16" fill="'+fill+'" stroke="'+col+'" stroke-width="2"/>'
 +glyphText(x-9,y+5,q>0?'+':q<0?'−':'0',col,17);
}
export function electricFieldExplorerHtml(lang='ja'){
 const en=lang==='en';
 return '<section class="electricity-field-explorer" id="electricity-field-explorer">'
 +'<h4>'+(en?'Explore the vector field of two charges':'2つの電荷が作る電場を重ね合わせる')+'</h4>'
 +'<p>'+(en?'Change both source charges and the observation point. Both diagrams use the same Cartesian geometry. The vector panel uses one shared scale, so arrow lengths are proportional to field magnitude.':'二つの源電荷の符号と、電場を調べる点の位置を変えてください。左は電荷と観測点の位置関係、右は同じ観測点における電場のベクトル和です。右図の矢印の長さは共通の尺度で大きさに比例します。')+'</p>'
 +'<div class="electricity-field-explorer-grid"><div><svg role="img" id="electricity-field-geometry" viewBox="0 0 560 290" aria-label="'+(en?'Charge geometry and observation point':'源電荷と観測点の位置関係')+'"></svg></div>'
 +'<div><svg role="img" id="electricity-field-vectors" viewBox="0 0 340 290" aria-label="'+(en?'Vector sum E1 E2 and total field':'E1とE2を足した合成電場の図')+'"></svg></div></div>'
 +'<div class="electricity-field-explorer-controls">'
 +'<label for="electricity-field-q1">'+(en?'Left charge q₁ (μC)':'左の電荷 q₁（μC）')+'</label><input id="electricity-field-q1" type="range" min="-3" max="3" step=".5" value="2"/>'
 +'<label for="electricity-field-q2">'+(en?'Right charge q₂ (μC)':'右の電荷 q₂（μC）')+'</label><input id="electricity-field-q2" type="range" min="-3" max="3" step=".5" value="-2"/>'
 +'<label for="electricity-field-x">'+(en?'Observation point x (m)':'観測点 x（m）')+'</label><input id="electricity-field-x" type="range" min="-.55" max=".55" step=".05" value="0"/>'
 +'<label for="electricity-field-y">'+(en?'Observation point y (m)':'観測点 y（m）')+'</label><input id="electricity-field-y" type="range" min=".1" max=".65" step=".05" value=".3"/>'
 +'</div><p id="electricity-field-values" aria-live="polite"></p>'
 +'<p class="muted">'+(en?'A source at x=−0.30 m or +0.30 m, y=0; fields in vacuum. The observation point is not a third source charge. At zero source charge, its field vector disappears.':'源電荷の位置は（−0.30 m, 0）と（+0.30 m, 0）。真空中の点電荷モデルです。観測点には電場を変える電荷を置かず、電場だけを評価しています。電荷が0ならその電場の矢印は消えます。')+'</p></section>';
}
export function electricFieldDiagrams(state){
 const {source1,source2,total,q1MicroC,q2MicroC,probeX,probeY}=twoSourceElectricField(state);
 const xp=x=>280+x*270,yp=y=>235-y*270;
 const px=xp(probeX),py=yp(probeY);
 let geometry=line(90,235,471,235,'#b1c7bd',1)+line(280,269,280,17,'#b1c7bd',1,true);
 geometry+=glyphText(480,239,'x (m)')+glyphText(282,23,'y (m)');
 geometry+=line(xp(-.3),235,px,py,'#95a9a4',1.2,true)+line(xp(.3),235,px,py,'#95a9a4',1.2,true);
 geometry+=charge(xp(-.3),235,q1MicroC)+charge(xp(.3),235,q2MicroC);
 geometry+='<circle cx="'+px+'" cy="'+py+'" r="7" fill="#8257a3" stroke="white" stroke-width="2"/>';
 geometry+=glyphText(px+10,py-10,'P','#8257a3');
 geometry+=glyphText(xp(-.3)-23,270,'q₁')+glyphText(xp(.3)-20,270,'q₂');
 geometry+=glyphText(85,28,'P = ('+probeX.toFixed(2)+', '+probeY.toFixed(2)+') m');
 // The diagram of vector addition has a common scale, regardless of the source signs.
 const max=Math.max(source1.magnitude,source2.magnitude,total.magnitude,1e-12),scale=107/max;
 const ox=150,oy=157;
 let vectors=line(24,157,322,157,'#c8d8d1',1)+line(150,268,150,27,'#c8d8d1',1);
 const items=[{v:source1,col:'#b85e47',name:'E₁'},{v:source2,col:'#367fa1',name:'E₂'},{v:total,col:'#8257a3',name:'E'}];
 for(const it of items){
  const len=it.v.magnitude*scale;
  if(len<4)continue;
  const X=ox+it.v.x*scale,Y=oy-it.v.y*scale;
  vectors+=arrow(ox,oy,X,Y,it.col);
  const labelX=Math.max(9,Math.min(308,X+6)),labelY=Math.max(17,Math.min(273,Y-8));
  vectors+=glyphText(labelX,labelY,it.name,it.col,15);
 }
 vectors+=glyphText(18,24,'E = E₁ + E₂')+glyphText(18,281,'N/C');
 return {geometry,vectors,field:{source1,source2,total}};
}
export function installElectricFieldExplorer(root,lang='ja'){
 const host=root?.querySelector?.('#electricity-field-explorer');if(!host)return ()=>{};
 const inputs=['q1','q2','x','y'].map(k=>host.querySelector('#electricity-field-'+k));
 const geometry=host.querySelector('#electricity-field-geometry'),vectors=host.querySelector('#electricity-field-vectors');
 const output=host.querySelector('#electricity-field-values'),en=lang==='en';
 const fmt=n=>Math.abs(n)<.00001?'0':n.toPrecision(4);
 function render(){
  const state={q1MicroC:Number(inputs[0].value),q2MicroC:Number(inputs[1].value),probeX:Number(inputs[2].value),probeY:Number(inputs[3].value)};
  const figs=electricFieldDiagrams(state);geometry.innerHTML=figs.geometry;vectors.innerHTML=figs.vectors;
  const a=figs.field.source1,b=figs.field.source2,c=figs.field.total;
  output.textContent='q₁='+state.q1MicroC+' μC; q₂='+state.q2MicroC+' μC; '
   +'E₁=('+fmt(a.x)+', '+fmt(a.y)+') N/C; E₂=('+fmt(b.x)+', '+fmt(b.y)+') N/C; '
   +(en?'Resultant ':'合成電場 ')+'E=('+fmt(c.x)+', '+fmt(c.y)+') N/C; |E|='+fmt(c.magnitude)+' N/C.';
 }
 for(const input of inputs)input.addEventListener('input',render);
 render();
 return ()=>{for(const input of inputs)input.removeEventListener('input',render);};
}
