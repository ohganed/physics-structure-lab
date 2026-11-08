import {mechanicsSituationFigure} from './mechanics-situation-figures.js';
/* Complete chapter reading and a live friction diagram; no mastery checkpoints. */
import {inclineTextSections} from './incline-textbook-data.js';
import {analyzeIncline} from './incline-explanation-model.js';
const E=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const L=(pair,en)=>pair[en?1:0];
const math=s=>'<div class="formula tex-display" data-tex="'+E(s)+'">'+E(s)+'</div>';
const val=n=>Number(n.toFixed(3)).toLocaleString(undefined,{maximumFractionDigits:3});
export function inclineTextbookHtml(language='ja'){
 const en=language==='en';
 const chapters=inclineTextSections.map((part,i)=>'<section class="incline-reading-section">'
 +'<h4>'+L(part.title,en)+'</h4>'
 +mechanicsSituationFigure('incline-'+i,'supplement',language)
 +part.parts.map(p=>'<p>'+L(p,en)+'</p>').join('')
 +part.equations.map(p=>'<div class="incline-reading-equation"><small>'+ (en?p.en:p.ja)+'</small>'+math(p.formula)+'</div>').join('')
 +'<p>'+L(part.after,en)+'</p></section>').join('');
 return '<article class="incline-textbook" id="incline-textbook">'
 +'<h3>'+(en?'Contact, friction and inclined planes':'接触力・摩擦・斜面について')+'</h3>'
 +chapters
 +'<section class="incline-reading-section incline-interactive">'
 +'<h4>'+(en?'Changing the incline angle':'角度と摩擦係数を変える')+'</h4>'
 +'<p>'+(en?'The results below are calculated from a simplified contact model, not measured data. Change the angle and compare the friction needed for rest with the available maximum.':'次の数値は理想化した摩擦モデルの計算結果で、実測値ではありません。角度を変え、静止に必要な摩擦力と最大静止摩擦力を比較してみましょう。')+'</p>'
 +'<div class="incline-inputs">'
 +[['theta',en?'Angle θ (°)':'斜面角 θ（°）',0,50,1,20],
   ['mass',en?'Mass m (kg)':'質量 m（kg）',.5,10,.5,2],
   ['static',en?'Static coefficient μs':'静止摩擦係数 μs',0,1,.05,.4],
   ['kinetic',en?'Kinetic coefficient μk':'動摩擦係数 μk',0,.4,.05,.3]]
    .map(c=>'<label>'+c[1]+'<input id="incline-'+c[0]+'" type="range" min="'+c[2]+'" max="'+c[3]+'" step="'+c[4]+'" value="'+c[5]+'"><output id="incline-'+c[0]+'-value"></output></label>').join('')
 +'</div>'
 +'<svg id="incline-diagram" role="img" viewBox="0 0 560 310" aria-label="'+(en?'Inclined block and forces':'斜面の箱と力の方向')+'"></svg>'
 +'<div id="incline-results" class="incline-results" aria-live="polite"></div>'
 +'<p class="muted">'+(en?'Force-arrow lengths use a common scale. Weight is drawn from the block center; normal reaction and friction begin at the surface contact point.':'力の矢印の長さは共通の尺度で示します。重力は物体の中心から、垂直抗力と摩擦は斜面との接触点から描きます。')+'</p>'
 +'<p class="muted">'+(en?'The model assumes a block starting from rest, a rigid plane, and μk ≤ μs. Contact behavior can be more complicated in real experiments.':'静止から考え始める箱、変形しない板、μk ≤ μsを仮定したモデルです。実際の接触面の挙動は、さらに複雑になる場合があります。')+'</p>'
 +'</section></article>';
}
export function installInclineTextbook(root,language='ja'){
 const $=id=>root.querySelector('#incline-'+id),svg=root.querySelector('#incline-diagram');
 if(!svg)return;
 const en=language==='en';
 const output=(label,n)=>'<div><span>'+label+'</span><strong>'+val(n)+' N</strong></div>';
 function draw(){
  const thetaDegrees=Number($('theta').value),mass=Number($('mass').value),muStatic=Number($('static').value);
  $('kinetic').max=String(muStatic);
  if(Number($('kinetic').value)>muStatic)$('kinetic').value=String(muStatic);
  const muKinetic=Number($('kinetic').value);
  const v=analyzeIncline({thetaDegrees,mass,muStatic,muKinetic});
  for(const item of [['theta',thetaDegrees,'°'],['mass',mass,' kg'],['static',muStatic,''],['kinetic',muKinetic,'']]){
   $(item[0]+'-value').textContent=val(item[1])+item[2];
  }
  const rad=thetaDegrees*Math.PI/180,co=Math.cos(rad),si=Math.sin(rad);
  const tipX=80+270*co,tipY=248-270*si;
  // The rectangle is anchored at its bottom midpoint, exactly ON the incline.
  // Gravity starts at its geometric center; contact forces start at the contact point.
  const contactX=80+142*co,contactY=248-142*si;
  const massCenterX=contactX-15.5*si,massCenterY=contactY-15.5*co;
  const c=v.canRemainAtRest?'#2d7d5c':'#ad6543';
  const arrowScale=88/v.weight;
  function arrow(dx,dy,color,label,x=massCenterX,y=massCenterY){
   return '<line x1="'+x+'" y1="'+y+'" x2="'+(x+dx)+'" y2="'+(y+dy)+'" stroke="'+color+'" stroke-width="3" marker-end="url(#inclineArrow)"/>'
    +'<text x="'+(x+dx+6)+'" y="'+(y+dy-6)+'" font-size="15" fill="'+color+'">'+label+'</text>';
  }
  svg.innerHTML='<defs><marker id="inclineArrow" viewBox="0 0 10 10" markerWidth="7" markerHeight="7" refX="9" refY="5" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10" fill="#526b61"/></marker></defs>'
   +'<path d="M80 248 L'+tipX+' '+tipY+' L'+tipX+' 248 Z" fill="#ecf3ed" stroke="#a3bbad" stroke-width="2"/>'
   +'<path d="M80 248 L'+tipX+' '+tipY+'" fill="none" stroke="#477960" stroke-width="4"/>'
   +'<g transform="translate('+contactX+' '+contactY+') rotate('+(-thetaDegrees)+')"><rect x="-24" y="-31" width="48" height="31" rx="5" fill="#e6b783" stroke="#8b674d" stroke-width="2"/></g>'
   +arrow(0,v.weight*arrowScale,'#ac5e51','mg')
   +arrow(-v.normal*arrowScale*si,-v.normal*arrowScale*co,'#2b806c','N',contactX,contactY)
   +(v.friction>0.05?arrow(v.friction*arrowScale*co,-v.friction*arrowScale*si,'#426da5',en?'friction':'摩擦',contactX,contactY):'')
   +'<text x="88" y="272" font-size="15" fill="#345b49">θ='+val(thetaDegrees)+'°</text>'
   +'<text x="306" y="285" font-size="16" font-weight="700" fill="'+c+'">'+(en?(v.canRemainAtRest?'Can remain at rest':'Slides downslope'):(v.canRemainAtRest?'静止できる':'斜面下向きに滑る'))+'</text>';
  root.querySelector('#incline-results').innerHTML=
   output(en?'Downslope gravity':'重力の斜面方向成分',v.downslope)
   +output(en?'Normal reaction':'垂直抗力',v.normal)
   +output(en?'Maximum static friction':'最大静止摩擦',v.staticMax)
   +output(en?'Friction in this state':'現在の摩擦力',v.friction)
   +'<p>'+(en?'Limiting angle: ':'滑り出す限界角：')+val(v.thresholdDegrees)+'°</p>'
   +(v.canRemainAtRest?'<p>'+(en?'Required friction is within the available maximum. The model remains at rest.':'必要な摩擦力は最大値以下です。このモデルでは静止しています。')+'</p>'
     :'<p>'+(en?'Acceleration while sliding: ':'滑走時の加速度：')+val(v.acceleration)+' m/s²</p>');
 }
 for(const k of ['theta','mass','static','kinetic'])$(k).addEventListener('input',draw);
 draw();
}
