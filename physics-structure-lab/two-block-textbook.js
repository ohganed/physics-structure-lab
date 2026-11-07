/* Interactive, bilingual Newton-law chapter supplement. */
import {twoBlockReading} from './two-block-textbook-data.js';
import {solveTwoBlock} from './two-block-model.js';
const escapeHtml=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const T=(pair,en)=>pair[en?1:0];
const math=s=>'<div class="formula tex-display" data-tex="'+escapeHtml(s)+'">'+escapeHtml(s)+'</div>';
const display=n=>(Math.abs(n)<0.0005?0:n).toFixed(2);
export function twoBlockTextbookHtml(language='ja'){
 const en=language==='en';
 const sections=twoBlockReading.map(part=>'<section class="incline-reading-section">'
  +'<h4>'+escapeHtml(T(part.title,en))+'</h4>'
  +part.parts.map(p=>'<p>'+escapeHtml(T(p,en))+'</p>').join('')
  +part.equations.map(eq=>'<div class="incline-reading-equation"><small>'+escapeHtml(en?eq.en:eq.ja)+'</small>'+math(eq.formula)+'</div>').join('')
  +'<p>'+escapeHtml(T(part.after,en))+'</p></section>').join('');
 return '<article class="incline-textbook" id="two-block-textbook">'
  +'<h3>'+(en?'Forces on one body and on a system':'一つの物体と物体系の運動法則')+'</h3>'
  +sections
  +'<section class="incline-reading-section incline-interactive">'
  +'<h4>'+(en?'Two touching carts: change the system':'接触する2台の台車を調べる')+'</h4>'
  +'<p>'+(en?'This is a calculated, frictionless, horizontal two-cart model. The track does not supply a horizontal force. The applied push always compresses the two carts together.':'摩擦のない水平面を使った、理想化した計算モデルです。床から受ける水平方向の力はなく、外からの力は二台を互いに押しつける向きに加わります。')+'</p>'
  +'<div class="incline-inputs">'
  +[['mass-a',en?'Mass of left cart A (kg)':'左の台車Aの質量（kg）',1,8,.5,2],
    ['mass-b',en?'Mass of right cart B (kg)':'右の台車Bの質量（kg）',1,8,.5,3],
    ['force',en?'Applied push F (N)':'外から押す力 F（N）',0,30,1,10]]
     .map(item=>'<label for="two-block-'+item[0]+'">'+item[1]
      +'<input id="two-block-'+item[0]+'" type="range" min="'+item[2]+'" max="'+item[3]+'" step="'+item[4]+'" value="'+item[5]+'">'
      +'<output id="two-block-'+item[0]+'-value"></output></label>').join('')
  +'<label for="two-block-push">'+(en?'Which cart receives the external push?':'外力はどちらの台車に加える？')
  +'<select id="two-block-push"><option value="A">'+(en?'Push A to the right':'Aを右へ押す')+'</option><option value="B">'+(en?'Push B to the left':'Bを左へ押す')+'</option></select></label>'
  +'</div>'
  +'<svg id="two-block-diagram" role="img" viewBox="0 0 580 260" aria-label="'+(en?'Free-body forces and acceleration for two carts':'2台の台車に働く力と加速度の模式図')+'"></svg>'
  +'<div id="two-block-results" class="incline-results" aria-live="polite"></div>'
  +'<p class="muted">'+(en?'The diagram is schematic. The lengths of the force arrows are for readability, not a scale drawing. The red contact arrows act on different carts.':'図は模式図です。力の矢印の長さは比例尺度ではありません。赤い接触力の矢印は、それぞれ別の台車に働きます。')+'</p>'
  +'<p class="muted">'+(en?'To test a limiting case, set F to zero; then try increasing one mass while keeping F fixed. This model predicts acceleration and contact forces, not experimental measurements.':'力を0にした場合や、力を固定して片方の質量だけを増やした場合も調べてみましょう。表示値は予測計算であり、実験の測定値ではありません。')+'</p>'
  +'</section></article>';
}
export function installTwoBlockTextbook(root,language='ja'){
 const en=language==='en';
 const $=key=>root.querySelector('#two-block-'+key);
 const svg=$('diagram'),result=$('results');
 if(!svg||!result)return;
 const formatForce=(v,unit)=>display(v)+' '+unit;
 function render(){
  const massA=Number($('mass-a').value),massB=Number($('mass-b').value);
  const force=Number($('force').value),push=$('push').value;
  const s=solveTwoBlock({massA,massB,force,push});
  for(const [key,value,unit] of [['mass-a',massA,' kg'],['mass-b',massB,' kg'],['force',force,' N']]){
   $(key+'-value').textContent=display(value)+unit;
  }
  const arrow=(x1,y1,x2,y2,color,label,tx,ty)=>'<line x1="'+x1+'" y1="'+y1+'" x2="'+x2+'" y2="'+y2+'" stroke="'+color+'" stroke-width="3.5" marker-end="url(#two-block-arrow)"/>'
    +'<text x="'+tx+'" y="'+ty+'" fill="'+color+'" font-size="15" font-weight="700">'+label+'</text>';
  svg.innerHTML='<defs><marker id="two-block-arrow" viewBox="0 0 10 10" markerWidth="7" markerHeight="7" refX="9" refY="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10" fill="#435e55"/></marker></defs>'
   +'<rect x="175" y="104" width="90" height="64" rx="8" fill="#d4eadd" stroke="#467e68" stroke-width="2"/>'
   +'<rect x="265" y="104" width="90" height="64" rx="8" fill="#f1dfc4" stroke="#8c7551" stroke-width="2"/>'
   +'<text x="220" y="142" text-anchor="middle" fill="#2e6049" font-size="20" font-weight="700">A</text>'
   +'<text x="310" y="142" text-anchor="middle" fill="#6a5436" font-size="20" font-weight="700">B</text>'
   +'<line x1="110" y1="169" x2="460" y2="169" stroke="#7e9f92" stroke-width="3"/>'
   +'<text x="217" y="190" text-anchor="middle" fill="#4e6b5b" font-size="13">'+display(massA)+' kg</text>'
   +'<text x="312" y="190" text-anchor="middle" fill="#6d624c" font-size="13">'+display(massB)+' kg</text>'
   +(force>0?(push==='A'
     ?arrow(92,136,171,136,'#a5673a','F',100,122)
     :arrow(439,136,359,136,'#a5673a','F',420,122))
      +arrow(225,89,165,89,'#ad5454','N',173,71)
      +arrow(306,89,365,89,'#ad5454','N',345,71)
      +arrow(264,225,264+(push==='A'?70:-70),225,'#347f89',en?'a':'a',push==='A'?346:167,230)
     :'<text x="290" y="88" text-anchor="middle" fill="#536b61" font-size="15">'+(en?'No horizontal force':'水平方向の合力は0')+'</text>')
   +'<text x="470" y="178" font-size="14" fill="#536b61">+x →</text>';
  const metric=(name,value)=>'<div><span>'+name+'</span><strong>'+value+'</strong></div>';
  const aDirection=s.acceleration>0?(en?'right':'右'):s.acceleration<0?(en?'left':'左'):(en?'none':'なし');
  result.innerHTML=metric(en?'Total mass':'合計質量',formatForce(s.totalMass,'kg'))
   +metric(en?'Signed acceleration (right positive)':'符号付き加速度（右正）',formatForce(s.acceleration,'m/s²'))
   +metric(en?'Acceleration direction':'加速度の向き',aDirection)
   +metric(en?'Contact force magnitude':'接触力の大きさ N',formatForce(s.contact,'N'))
   +metric(en?'Force on A from B':'BがAを押す力（右正）',formatForce(s.contactOnA,'N'))
   +metric(en?'Force on B from A':'AがBを押す力（右正）',formatForce(s.contactOnB,'N'))
   +metric(en?'Net force on A':'Aに働く水平方向の合力',formatForce(s.netOnA,'N'))
   +metric(en?'Net force on B':'Bに働く水平方向の合力',formatForce(s.netOnB,'N'))
   +'<p>'+(push==='A'
     ?(en?'Equations: F − N = mA a and N = mB a.':'各台車の式：F − N = mA a、N = mB a。')
     :(en?'Signed equations: −N = mA a and N − F = mB a.':'右向きを正とした式：−N = mA a、N − F = mB a。'))
   +'</p><p>'+(en?'Check: the two net forces add to the applied external force; contact forces cancel in the combined system.':'確認：AとBの合力を足すと外力の合計と一致します。接触力は二台の系で相殺されます。')+'</p>';
 }
 for(const key of ['mass-a','mass-b','force'])$(key).addEventListener('input',render);
 $('push').addEventListener('change',render);
 render();
}
