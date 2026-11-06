import {impulsePrediction} from './momentum-origin-model.js';
const lang=(l,ja,en)=>l==='en'?en:ja;
const esc=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const formula=s=>'<div class="formula tex-display" data-tex="'+esc(s)+'">'+esc(s)+'</div>';
const lessons=[
 {title:['① 同じ強さで長く押したら？','① What if the same push lasts longer?'],
  prose:['同じ台車を、同じ力で短く押す場合と長く押す場合を想像してください。速度の変化は同じでしょうか。力だけでなく「何秒間働いたか」も表したくなります。ここでは、まだ運動量という用語は必要ありません。','Imagine pushing the same cart with the same force, briefly or for longer. Will its velocity change by the same amount? We need to represent how long the force acts, without using the term momentum yet.']},
 {title:['② 力と時間をグラフにして面積を見る','② Graph force against time and inspect the area'],
  prose:['横軸に時間、縦軸に物体へ作用する合力を取ります。力が一定なら長方形になります。縦の高さがF、横の幅がΔtなので、面積はFΔtです。この符号付き面積を「力積」と呼びます。力が左向きなら、右向きを正としたグラフでは負の面積です。','Put time on the horizontal axis and net force acting on the body on the vertical axis. Constant force produces a rectangle of height F and width Δt. The signed area FΔt is impulse. If right is positive, leftward force contributes negative area.'],
  equation:'J=F\\Delta t\\quad(\\text{constant net force})'},
 {title:['③ 面積と速度の変化は、どう結び付く？','③ How does the area connect to changing velocity?'],
  prose:['ここで、すでに学んだニュートンの第二法則を使います。質量も合力も一定なら加速度は「最後の速度−最初の速度」を作用時間で割ったものです。','Now reuse Newton’s second law. With constant mass and constant net force, acceleration is final velocity minus initial velocity, divided by elapsed time.'],
  equation:'F=ma,\\quad a=\\frac{v-v_0}{\\Delta t}',
  after:['加速度の式をF=maに代入し、両辺にΔtを掛けます。新しい法則はまだ登場していません。現象に合った形に式を書き換えているのです。','Substitute the acceleration formula into F=ma and multiply both sides by Δt. No new law is introduced; we are rearranging a known relationship to match the phenomenon.'],
  next:'F=m\\frac{v-v_0}{\\Delta t}',last:'F\\Delta t=mv-mv_0'},
 {title:['④ 同じ mv が2回現れる。名前を付けよう','④ The combination mv appears twice: give it a name'],
  prose:['左辺は「力が時間にわたって働いた効果」なのに、右辺は最初と最後の状態の差だけで決まっています。しかも、同じmvという組み合わせが2回現れます。それならmvを一つの量として扱うと便利ではないでしょうか。そこでp=mvを運動量と定義します。','The left side accumulates a force acting through time. But the right side depends only on a difference between initial and final states. The same combination mv appears twice. Treating mv as one quantity is useful: define momentum p=mv.'],
  equation:'p=mv,\\qquad J=p-p_0=\\Delta p',
  after:['これは定義を暗記してから問題を解く順序ではありません。現象を数式で表そうとして、便利な量が浮かび上がったのです。pは速さではなく向きのある速度を使い、負になることもあります。','This is not memorizing a definition before solving a problem. A useful quantity emerges while mathematizing the phenomenon. Momentum uses directional velocity and may have a negative sign.']},
 {title:['⑤ 力が時間とともに変わったら？','⑤ What if force varies with time?'],
  prose:['グラフを短い時間区間に区切り、それぞれの小さな長方形の面積を足します。これを限りなく細かく考えると積分になります。上のグラフを三角形に変えると、同じ最大の力・同じ時間でも、面積は長方形の半分になることがわかります。','Divide the graph into short intervals and add their little areas. Taking finer intervals leads to integration. Switch the interactive model to a triangle: with the same peak force and duration, its area is half that of the rectangle.'],
  equation:'J=\\int_{t_0}^{t_1}F_{\\mathrm{net}}(t)\\,dt=\\Delta p'},
 {title:['⑥ 二つの物体を合わせると、何が保存する？','⑥ What stays unchanged when two bodies interact?'],
  prose:['衝突するAとBを一つの系として扱います。AがBから右向きに力を受ければ、BはAから等しい左向きの力を受けます。互いに及ぼす力を同じ時間にわたって積み重ねた力積は正負が反対です。','Choose colliding bodies A and B as one system. If B pushes A right, A pushes B left with equal magnitude. These equal-and-opposite contact forces act simultaneously, so their impulses cancel.'],
  equation:'J_A=-J_B,\\qquad\\Delta p_A+\\Delta p_B=0',
  after:['外部からの合力の力積が無視できれば、系全体の運動量の合計は変わりません。ここまで考えて初めて、運動量保存という式が自然につながります。','If net external impulse on the combined system is negligible, its total momentum does not change. Momentum conservation now follows naturally.'],
  last:'p_{A,i}+p_{B,i}=p_{A,f}+p_{B,f}'}
];
export function momentumOriginHtml(language='ja'){
 const t=(ja,en)=>lang(language,ja,en),choose=pair=>pair[language==='en'?1:0];
 return '<section class="momentum-origin" id="momentum-origin">'
 +'<p class="momentum-origin-purpose">'+t('この章では、公式を先に覚えず、自然現象をどう数式化するかを考えます。','Here, explore how a phenomenon can be described mathematically before memorizing formulas.')+'</p>'
 +lessons.map((step,i)=>'<section class="momentum-origin-step"><h3>'+esc(choose(step.title))+'</h3><p>'+esc(choose(step.prose))+'</p>'
   +(step.equation?formula(step.equation):'')
   +(i===1?experimentHtml(language):'')
   +(step.after?'<p>'+esc(choose(step.after))+'</p>':'')
   +(step.next?formula(step.next):'')+(step.last?formula(step.last):'')
   +'</section>').join('')
 +'<p class="muted">'+t('これは現象の数式化を理解するための学習経路であり、物理学史の発見順序を主張するものではありません。','This is a path for learning mathematical representation of phenomena, not a claim about historical discovery order.')+'</p>'
 +'</section>';
}
function experimentHtml(language){
 const t=(ja,en)=>lang(language,ja,en);
 return '<div class="momentum-origin-experiment"><h4>'+t('実験：グラフの面積を変える','Experiment: change the area under the graph')+'</h4>'
 +'<p class="muted">'+t('一定質量・一次元・慣性系の理想計算モデルであり、測定結果ではありません。','An ideal constant-mass, one-dimensional model in an inertial frame; not measured evidence.')+'</p>'
 +'<div class="momentum-origin-controls">'
 +[['force','合力 F（N）・左は負','Net force F (N), left is negative',-12,12,1,4],
   ['duration','作用時間 Δt（s）','Duration Δt (s)',.5,5,.5,2],
   ['mass','質量 m（kg）','Mass m (kg)',.5,10,.5,2],
   ['velocity','最初の速度 v₀（m/s）','Initial velocity v₀ (m/s)',-5,5,.5,1]]
   .map(([id,ja,en,min,max,step,value])=>'<label>'+t(ja,en)+'<input id="mo-'+id+'" type="range" min="'+min+'" max="'+max+'" step="'+step+'" value="'+value+'"><output id="mo-'+id+'-value"></output></label>').join('')
 +'<fieldset><legend>'+t('力の時間変化','Force profile')+'</legend>'
 +'<label><input name="mo-profile" type="radio" value="constant" checked> '+t('一定：長方形','Constant: rectangle')+'</label>'
 +'<label><input name="mo-profile" type="radio" value="ramp"> '+t('徐々に増加：三角形','Linear increase: triangle')+'</label></fieldset></div>'
 +'<svg id="mo-chart" viewBox="0 0 600 270" role="img" aria-label="'+t('力と時間の符号付き面積','Signed force-time area')+'"></svg>'
 +'<div class="momentum-origin-observations" aria-live="polite"><p id="mo-impulse"></p><p id="mo-velocity-change"></p><p id="mo-momentum-difference"></p></div>'
 +'<p>'+t('時間を2倍にしたら？ 力の向きを反転したら？ 質量だけ変えたら、面積と速度変化はどう違う？','Try doubling time, reversing force, and changing only mass. What happens to area versus velocity change?')+'</p></div>';
}
const n=x=>Number(x.toFixed(5)).toLocaleString(undefined,{maximumFractionDigits:5});
export function installMomentumOrigin(container,language='ja'){
 const $=id=>container.querySelector('#'+id);
 if(!$('mo-chart'))return;
 const t=(ja,en)=>lang(language,ja,en);
 const draw=()=>{
  const force=Number($('mo-force').value),duration=Number($('mo-duration').value);
  const mass=Number($('mo-mass').value),initialVelocity=Number($('mo-velocity').value);
  const profile=container.querySelector('[name="mo-profile"]:checked')?.value||'constant';
  const result=impulsePrediction({mass,initialVelocity,force,duration,profile});
  for(const [id,value,unit] of [['force',force,'N'],['duration',duration,'s'],['mass',mass,'kg'],['velocity',initialVelocity,'m/s']])
   $('mo-'+id+'-value').textContent=n(value)+' '+unit;
  const left=70,zero=135,x=left+duration/5*460,y=zero-force*7.5;
  const shape=profile==='ramp'?'M70 135 L'+x+' '+y+' V135 Z':'M70 135 V'+y+' H'+x+' V135 Z';
  const color=force>=0?'#23846a':'#b85e56';
  $('mo-chart').innerHTML='<rect width="600" height="270" rx="12" fill="#f7faf7"/>'
    +'<path d="M70 18 V249 M70 135 H570" fill="none" stroke="#507367" stroke-width="1.8"/>'
    +'<path d="'+shape+'" fill="'+color+'" fill-opacity=".25" stroke="'+color+'" stroke-width="2.6"/>'
    +'<g fill="#365f4c" font-size="14"><text x="15" y="25">F (N)</text><text x="550" y="260">t (s)</text>'
    +'<text x="48" y="140">0</text><text x="'+x+'" y="157" text-anchor="middle">'+n(duration)+' s</text>'
    +'<text x="'+(x+6)+'" y="'+(y+(force>=0?-7:18))+'">'+n(force)+' N</text></g>';
  $('mo-impulse').textContent=t('グラフの符号付き面積（力積）：','Signed area (impulse): ')+(profile==='ramp'?'½ × ':'')+'('+n(force)+' N) × ('+n(duration)+' s) = '+n(result.impulse)+' N·s';
  $('mo-velocity-change').textContent=t('速度の変化：','Velocity change: ')+'Δv = J/m = '+n(result.velocityChange)+' m/s; '+t('最終速度：','final velocity: ')+n(result.finalVelocity)+' m/s';
  $('mo-momentum-difference').textContent='mv₀ = '+n(result.initialMomentum)+' kg·m/s; mv = '+n(result.finalMomentum)+' kg·m/s; mv − mv₀ = '+n(result.momentumChange)+' N·s';
 };
 for(const id of ['force','duration','mass','velocity'])$('mo-'+id).addEventListener('input',draw);
 container.querySelectorAll('[name="mo-profile"]').forEach(el=>el.addEventListener('change',draw));
 draw();
}
