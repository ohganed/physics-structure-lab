/* Chapter 03: step-by-step work and energy explanations with an optional model diagram. */
import {brakingModel} from './energy-work-model.js';
const P=(ja,en)=>[ja,en];
const Q=(formula,ja,en)=>({formula,note:[ja,en]});
const sections=[
 {title:P('力が働く時間と、物体が動く距離','How long a force acts, and how far a body moves'),
  parts:[
   P('台車を押すとき、同じ大きさの力でも、押す時間が長ければ速度の変化は大きくなります。一方、同じ力で押しながら台車を長い距離動かすと、初めと終わりの運動状態にはどのような違いが生まれるでしょう。ここでは力と変位を結び付けて考えます。','A cart changes its velocity when you push it. A longer push at the same force can produce a larger velocity change. Now consider a different measurement: how far the cart moves while the force acts. We will relate force to displacement.'),
   P('本を手で支えて静止させる場合、手は本に上向きの力を加えていますが、本の変位は0です。本を水平に運ぶときには、支える力は上向きで変位は水平です。このどちらでも、支える力が本にする仕事は0です。力があるというだけで、力学でいう仕事が生まれるわけではありません。','Holding a book still requires an upward force but the book has no displacement. Carrying the book horizontally also requires support, but that upward force is perpendicular to the horizontal displacement. In both cases the work done on the book by this supporting force is zero.')
  ],
  equations:[Q('W=F\\Delta x','力と変位が同じ向きで、力が一定の一次元運動なら、その積を仕事と呼びます。','For a constant force parallel to displacement, their product is called work.'),
             Q('W=F\\Delta x\\cos\\theta','力が変位と角度θをなす場合は、変位方向の力の成分を使います。','For a force at angle θ to displacement, use its component along the displacement.')],
  after:P('仕事の単位はN·mで、J（ジュール）と呼びます。1 J = 1 N·mです。ここでの仕事は、日常語の「疲れた」「頑張った」とは異なる定量的な概念です。','The unit of work is N·m, named the joule (J). This is a quantitative physical quantity, not a measure of how tiring a task feels.')},
 {title:P('力と移動距離から速さの変化を求める','Deriving the relation between force, displacement and speed'),
  parts:[
   P('質量mの台車が、右向きの一定の合力Fを受けて、初速度v₀から速度vになったとします。質量一定、慣性系、一定加速度の直線運動を考え、右向きを正にします。まず運動方程式と加速度の定義を書きます。','Take a cart of constant mass m under a constant net force F to the right. Its velocity changes from v₀ to v. Work in an inertial frame with constant acceleration and take right as positive. Start from Newton’s second law and the definition of acceleration.'),
   P('等加速度運動では、速度–時間グラフは直線です。変位Δxはその符号付き面積なので、平均速度 (v+v₀)/2 に経過時間Δtを掛けます。この式に、運動方程式から得た加速度を組み合わせます。','For constant acceleration the velocity–time graph is a straight line. Signed displacement Δx equals the trapezoidal area, namely average velocity (v+v₀)/2 times elapsed time Δt. Combine this with the acceleration equation.')
  ],
  equations:[
   Q('F=ma,\\qquad a=\\frac{v-v_0}{\\Delta t}','ニュートンの第二法則と加速度の定義です。','Newton’s second law and the definition of acceleration.'),
   Q('\\Delta x=\\frac{v+v_0}{2}\\Delta t','速度–時間グラフの台形の面積を用います。','Use the trapezoid area under the velocity–time graph.'),
   Q('F\\Delta x=ma\\frac{v+v_0}{2}\\Delta t','変位の式にF=maを掛けた形を書きます。','Multiply displacement by the constant net force F=ma.'),
   Q('F\\Delta x=m\\frac{v-v_0}{\\Delta t}\\frac{v+v_0}{2}\\Delta t','a=(v−v₀)/Δtを代入します。','Substitute a=(v−v₀)/Δt.'),
   Q('F\\Delta x=\\frac12m(v-v_0)(v+v_0)=\\frac12mv^2-\\frac12mv_0^2','時間Δtが消え、(v−v₀)(v+v₀)=v²−v₀²となります。','Elapsed time cancels; use (v−v₀)(v+v₀)=v²−v₀².')
  ],
  after:P('合力を変位に沿って積み重ねた量が、初めと終わりの「½mv²」の差になりました。左辺が力の積み重ねを表すのに対し、右辺は二つの運動状態だけを使って書けます。','Accumulating net force over displacement gives the difference between the initial and final values of ½mv². The left side concerns the force along the path; the right side depends only on the two motion states.')},
 {title:P('運動エネルギーについて','Kinetic energy'),
  parts:[
   P('先ほどの計算には、同じ形の量½mv²が繰り返し現れました。この量を運動エネルギーKと呼びます。仕事と運動エネルギーの関係は、質量一定の粒子のニュートン運動から導かれるものです。','The combination ½mv² appeared for both the initial and final states. We call it the kinetic energy K. The work–kinetic-energy relation follows from Newtonian motion for a particle of constant mass.'),
   P('速度は向きを持つベクトルですが、v²は速さの二乗です。したがってKは負になりません。向きを逆にして同じ速さで動く二つの台車は、運動量の符号は異なりますが、運動エネルギーは等しくなります。','Velocity is a vector, but v² denotes the square of its magnitude. Thus K is nonnegative. Two carts with equal speeds in opposite directions have opposite signed momenta but equal kinetic energies.')
  ],
  equations:[
   Q('K=\\frac12mv^2','運動エネルギーの表式です。単位はkg·m²/s² = Jです。','Kinetic energy, with units kg·m²/s² = J.'),
   Q('W_{\\mathrm{net}}=K_f-K_i=\\Delta K','合力のした仕事は運動エネルギーの変化に等しくなります。','Net work equals the change in kinetic energy.')
  ],
  after:P('この定理は、力学的エネルギーが保存するという主張とは別です。摩擦があっても、合力の仕事と運動エネルギーの変化の関係は成り立ちます。','This theorem is not the same claim as conservation of mechanical energy. It still applies when friction does work.')},
 {title:P('力や進む向きが変化する場合','When the force or direction changes'),
  parts:[
   P('力が一定でない場合、経路を短い変位に区切ります。各区間で力とその区間の変位の内積を求めて足し合わせ、区間の幅を小さくしていくと積分になります。仕事は、時間ではなく空間的な移動に沿って積算します。','If force varies along the path, divide the displacement into small segments. Sum the dot product of force with each displacement and take the limit. This produces a path integral: work accumulates along displacement, not directly along time.'),
   P('力が進行方向と同じなら正の仕事、逆なら負の仕事をします。曲がった経路でも、位置の小さな変化ごとに力の進行方向成分を使います。','Work is positive when force acts along the displacement and negative when it opposes displacement. Along a curved path the component tangent to each small displacement contributes.')
  ],
  equations:[
   Q('W=\\int_{\\boldsymbol r_i}^{\\boldsymbol r_f}\\boldsymbol F\\cdot d\\boldsymbol r','力の経路積分です。積分する力と、対象物体・系を明確にします。','Work is the line integral of force along the actual path, with a specified system.'),
   Q('\\int\\boldsymbol F_{\\mathrm{net}}\\cdot d\\boldsymbol r=\\Delta K','一定質量の粒子なら、時間変化する力についても成り立ちます。','For a constant-mass particle, net work still equals the kinetic-energy change.')
  ],
  after:P('曲線運動でも単に「移動距離×力の大きさ」とは限りません。力と各微小変位の向きが重要です。','In curved motion, work is not generally distance traveled times the magnitude of force. Direction matters at every step.')},
 {title:P('重力と位置エネルギー','Gravity and potential energy'),
  parts:[
   P('地表付近で重力mgがほぼ一定のとき、物体が高さhᵢからh𝒇へ移動すると、重力がする仕事は高さの差だけで決まります。実際に通った経路が曲がっていても、重力の鉛直成分に沿った変位だけが仕事を決めるからです。','Near Earth’s surface with approximately constant gravity, gravitational work between heights hᵢ and h𝒇 depends only on their height difference. Even for a curved path, only the vertical displacement contributes to work by gravity.'),
   P('終点と始点の高さだけで書ける量mghを位置エネルギーUとして使うと、重力の仕事は位置エネルギーの減少として表せます。高さの基準は任意ですが、高さの差は同じです。','Define gravitational potential energy U=mgh using a chosen reference level. Then gravity’s work is minus the change in potential energy. The zero of height can be chosen freely; height differences do not change.')
  ],
  equations:[
   Q('W_g=mg(h_i-h_f)=-\\Delta U','上昇では重力の仕事が負、下降では正になります。','Gravity does negative work while rising and positive work while descending.'),
   Q('U=mgh,\\qquad \\Delta(K+U)=0','重力だけが仕事をする質点ではK+Uが一定です。','When gravity is the only force doing work, K+U remains constant.')
  ],
  after:P('保存力とは、仕事が始点と終点で定まり、経路によらない力です。重力の位置エネルギーの扱いは、この性質と結び付いています。','A conservative force has path-independent work determined by its endpoints. Potential energy is useful because gravity has this property in the assumed model.')},
 {title:P('ばねを縮めるときの仕事','Work required to compress a spring'),
  parts:[
   P('ばねの力は、フックの法則が成り立つ範囲でFₛ=−kxと表されます。ばねを自然長からゆっくり縮めるとき、外から加える力の大きさは変位xとともに大きくなります。一定の力ではないので、単に最後の力kxに距離xを掛けることはできません。','Within the linear range of Hooke’s law, spring force is Fₛ=−kx. Slowly compressing a spring from its natural length requires an applied force that grows with displacement x. Multiplying the final force kx by the full distance would overestimate the work.'),
   P('力–変位グラフでは、外から加える力は原点から直線的に増えます。原点からxまでのグラフの下の三角形の面積が、外力のした仕事になります。','On the applied-force versus displacement graph, force increases linearly from zero. The triangular area under this line is the work done by the external force in a quasistatic compression.')
  ],
  equations:[
   Q('W_{\\mathrm{ext}}=\\int_0^x kx^{\\prime}\\,dx^{\\prime}=\\frac12kx^2','ばねをゆっくり圧縮し、外力がばねの力とつり合う場合です。','For slow compression, applied force balances the spring force.'),
   Q('U_s(x)=\\frac12kx^2','自然長を基準として蓄えられる弾性位置エネルギーです。','Elastic potential energy relative to the unstretched position.')
  ],
  after:P('ばねの力が仕事をするときには符号が逆になり、Wₛ=−ΔUₛです。この式は線形ばねの近似範囲で使います。','Work done by the spring has the opposite sign: Wₛ=−ΔUₛ. This result assumes the linear-spring model.')},
 {title:P('摩擦があるときのエネルギー','Energy when friction is present'),
  parts:[
   P('床を滑る箱は摩擦によって減速します。摩擦の仕事は負で、運動エネルギーが減少します。一方、熱を含めたエネルギー全体が消えたわけではありません。接触する物体の内部エネルギーなどへ移ります。','A sliding block slows under friction. Friction does negative work and kinetic energy decreases, but total energy is not destroyed. Energy is transferred to internal energy and other forms in the contacting bodies.'),
   P('重力やばねのような保存力と、摩擦のような非保存力の仕事を区別すると、力学的エネルギーK+Uの変化を調べられます。どの物体を系に含めるかを決めないまま「エネルギーは保存する」とだけ書くと、何がどこへ移ったのか見えません。','Distinguish conservative forces such as gravity and ideal springs from nonconservative work such as friction. Specifying the system matters: merely saying that energy is conserved does not identify where kinetic energy went.')
  ],
  equations:[
   Q('\\Delta K=W_c+W_{\\mathrm{nc}}','仕事–運動エネルギー定理を二つの力の仕事に分けます。','Separate conservative and nonconservative work in the work–kinetic-energy theorem.'),
   Q('W_c=-\\Delta U','保存力の仕事を位置エネルギーの減少に書き換えます。','Write conservative work as minus the change in potential energy.'),
   Q('\\Delta(K+U)=W_{\\mathrm{nc}}','非保存力がする仕事が0なら、力学的エネルギーが一定になります。','Mechanical energy is constant when nonconservative work vanishes.')
  ],
  after:P('運動エネルギーだけの変化と、力学的エネルギーの変化と、より広い系の全エネルギー保存を区別します。','Keep separate three statements: change in kinetic energy, change in mechanical energy, and conservation of total energy for an appropriately defined system.')},
 {title:P('数値例：台車を3 m押す','Worked example: pushing a cart through 3 m'),
  parts:[
   P('質量2 kgの台車が右向き1 m/sで動いています。右向きの一定の合力6 Nを受けながら3 m進みます。摩擦などの影響は合力に含まれているとし、初めと終わりの運動エネルギーを比較します。','A 2 kg cart initially moves right at 1 m/s. It travels 3 m while subjected to a constant net force of 6 N to the right. Treat any friction as already included in the specified net force. Compare the initial and final kinetic energies.'),
   P('右向きを正に取り、仕事が正であることを確かめます。最終速度を先に求めずに、仕事と初めの運動エネルギーの和から速さを求められます。','Take right as positive. The net work is positive. We can calculate final speed from initial kinetic energy and work without first finding travel time.')
  ],
  equations:[
   Q('K_i=\\frac12(2)(1)^2=1\\,\\mathrm J','初めの運動エネルギーです。','Initial kinetic energy.'),
   Q('W_{\\mathrm{net}}=6\\times3=18\\,\\mathrm J','力と変位は同じ向きなので正の仕事です。','The force acts along displacement, giving positive work.'),
   Q('K_f=K_i+W_{\\mathrm{net}}=19\\,\\mathrm J','仕事と運動エネルギーの関係を使います。','Use the work–kinetic-energy relation.'),
   Q('\\frac12(2)v_f^2=19\\quad\\Rightarrow\\quad v_f=\\sqrt{19}\\approx4.36\\,\\mathrm{m/s}','右向きに進み続けるため正の速さを選びます。','The cart keeps moving right, so the final speed is the positive root.')
  ],
  after:P('確認としてa=F/m=3 m/s²を使えば、v²=v₀²+2aΔx=1+18=19と同じ結果になります。二つの経路で値が一致することは、理解を確かめる一つの方法です。','As a check, a=F/m=3 m/s² gives v²=v₀²+2aΔx=1+18=19. Reaching the same result through two routes is a useful consistency check.')},
 {title:P('力積との接続：時間の積分と変位の積分','Connection to impulse: integration over time and displacement'),
  parts:[
   P('力積では、力を時間に沿って足しました。運動量の変化はJ=∫Fdtです。一方、仕事では力を変位に沿って足します。運動エネルギーの変化はW=∫F·drです。同じ力を扱っても、何を横軸にして積み重ねたかが異なります。','For impulse, force is accumulated over time, giving momentum change J=∫Fdt. For work, force is accumulated along displacement, giving kinetic-energy change W=∫F·dr. The same force can be represented in two different integrals.'),
   P('力積の単位はN·sであり、仕事のN·mとは違います。衝突など短時間の相互作用を調べるときには力積が便利です。物体がどこまで進むかを調べるときには仕事が便利です。両者は競合する法則ではなく、同じ力学を別の量で表しています。','Impulse has units N·s; work has units N·m. Impulse is useful for brief collisions, while work is useful for distances traveled and energy changes. They are different views of the same dynamics, not competing laws.')
  ],
  equations:[
   Q('J=\\int F\\,dt=\\Delta p','一次元の合力の力積と運動量変化です。','Net impulse and momentum change in one dimension.'),
   Q('W=\\int F\\,dx=\\Delta K','一次元の合力の仕事と運動エネルギー変化です。','Net work and kinetic-energy change in one dimension.')
  ],
  after:P('衝突で運動量が保存されても、運動エネルギーまで保存されるとは限りません。この区別は、次の運動量・衝突の章で改めて使います。','Total momentum may be conserved in a collision even when kinetic energy is not. The next chapter on collisions will revisit this distinction.')}
];
const escapeHtml=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const L=(pair,en)=>escapeHtml(pair[en?1:0]);
const math=s=>'<div class="formula tex-display" data-tex="'+escapeHtml(s)+'">'+escapeHtml(s)+'</div>';
const format=n=>Number(n.toFixed(2)).toLocaleString(undefined,{maximumFractionDigits:2});
export function energyTextbookHtml(language='ja'){
 const en=language==='en';
 return '<article class="incline-textbook" id="energy-textbook"><h3>'+(en?'Work, energy and conservation':'仕事・エネルギー・保存則について')+'</h3>'
  +sections.map(section=>'<section class="incline-reading-section"><h4>'+L(section.title,en)+'</h4>'
   +section.parts.map(p=>'<p>'+L(p,en)+'</p>').join('')
   +section.equations.map(eq=>'<div class="incline-reading-equation"><small>'+L(eq.note,en)+'</small>'+math(eq.formula)+'</div>').join('')
   +'<p>'+L(section.after,en)+'</p></section>').join('')
  +'<section class="incline-reading-section incline-interactive"><h4>'+(en?'Changing the stopping distance':'停止距離を変える')+'</h4>'
  +'<p>'+(en?'This is a calculated model for a constant opposing force on a level road. It excludes driver reaction time, changing tire grip and air resistance; it is not a measurement or a safe-driving estimate.':'水平な路面で一定の制動力だけが働く理想モデルの計算です。運転者の反応時間、路面の変化、空気抵抗などは含みません。実測値でも、安全運転のための停止距離見積もりでもありません。')+'</p>'
  +'<div class="incline-inputs">'
  +[['mass',en?'Mass m (kg)':'質量 m（kg）',500,1500,100,1000],['speed',en?'Initial speed (m/s)':'初めの速さ（m/s）',10,30,1,20],['force',en?'Braking force magnitude (N)':'制動力の大きさ（N）',2000,8000,500,4000]].map(a=>
    '<label>'+a[1]+'<input id="energy-'+a[0]+'" type="range" min="'+a[2]+'" max="'+a[3]+'" step="'+a[4]+'" value="'+a[5]+'"><output id="energy-'+a[0]+'-value"></output></label>').join('')
  +'</div>'
  +'<svg id="energy-work-diagram" viewBox="0 0 560 275" role="img" aria-label="'+(en?'Force–displacement graph':'力と変位のグラフ')+'"></svg>'
  +'<div id="energy-work-results" class="incline-results" aria-live="polite"></div>'
  +'<p class="muted">'+(en?'The shaded signed area below the axis represents negative work by braking. The horizontal axis has a fixed 0–400 m scale; an arrow indicates a distance exceeding this range.':'横軸0〜400 mの固定目盛りで、軸の下にある面積は制動力による負の仕事を表します。400 mを超える場合は矢印で示します。')+'</p>'
  +'<p class="muted">'+(en?'Compare work FΔx with impulse FΔt. The former changes kinetic energy, the latter momentum.':'仕事 FΔx と力積 FΔt を比較しましょう。前者は運動エネルギー、後者は運動量の変化と結び付きます。')+'</p>'
  +'</section></article>';
}
export function installEnergyTextbook(root,language='ja'){
 const en=language==='en';
 const get=id=>root.querySelector('#energy-'+id);
 const chart=root.querySelector('#energy-work-diagram');
 if(!chart)return;
 function update(){
  const mass=Number(get('mass').value),initialSpeed=Number(get('speed').value),brakingForce=Number(get('force').value);
  const values=brakingModel({mass,initialSpeed,brakingForce});
  for(const [key,value,unit] of [['mass',mass,' kg'],['speed',initialSpeed,' m/s'],['force',brakingForce,' N']]){
   get(key+'-value').textContent=format(value)+unit;
  }
  const fullWidth=400,span=400;
  const barWidth=Math.min(fullWidth,fullWidth*values.distance/span);
  const barHeight=100*brakingForce/8000;
  const x0=84,y0=80;
  const number=(n)=>Number(n.toFixed(2));
  const cEnd=x0+barWidth;
  chart.innerHTML=
    '<line x1="84" y1="80" x2="512" y2="80" stroke="#436b5c" stroke-width="2"/>'
   +'<line x1="84" y1="60" x2="84" y2="221" stroke="#436b5c" stroke-width="2"/>'
   +'<rect x="84" y="80" width="'+barWidth+'" height="'+barHeight+'" fill="#e8ac94" opacity=".65"/>'
   +'<line x1="84" y1="'+(y0+barHeight)+'" x2="'+cEnd+'" y2="'+(y0+barHeight)+'" stroke="#ac5e51" stroke-width="3"/>'
   +'<text x="12" y="41" font-size="15" fill="#345b49">F (N)</text>'
   +'<text x="86" y="71" font-size="14" fill="#345b49">0</text>'
   +'<text x="468" y="66" font-size="14" fill="#345b49">400 m</text>'
   +'<text x="86" y="238" font-size="14" fill="#345b49">'+(en?'Displacement →':'変位 →')+'</text>'
   +'<text x="90" y="'+(y0+barHeight+22)+'" font-size="15" fill="#9c5043">F = −'+format(brakingForce)+' N</text>'
   +'<text x="290" y="260" font-size="15" fill="#345b49">'+(en?'Area = ':'面積 = ')+'−'+format(values.initialEnergy/1000)+' kJ</text>'
   +(values.distance>span?'<text x="475" y="100" font-size="22" fill="#ad6543">→</text>':'')
   +(values.distance<=span?'<line x1="'+cEnd+'" y1="75" x2="'+cEnd+'" y2="'+(y0+barHeight+5)+'" stroke="#ad6543" stroke-dasharray="4 4"/>':'');
  chart.setAttribute('aria-label',en
    ?'Calculated force–displacement area: force minus '+format(brakingForce)+' newtons, stopping distance '+format(values.distance)+' meters, work minus '+format(values.initialEnergy)+' joules'
    :'計算した力と変位の面積。制動力 −'+format(brakingForce)+' N、停止距離 '+format(values.distance)+' m、仕事 −'+format(values.initialEnergy)+' J');
  const line=(label,n,unit)=>'<div><span>'+label+'</span><strong>'+format(n)+' '+unit+'</strong></div>';
  root.querySelector('#energy-work-results').innerHTML=
   line(en?'Initial kinetic energy':'初めの運動エネルギー',values.initialEnergy,'J')
   +line(en?'Braking work (signed)':'制動力がする仕事（符号付き）',values.work,'J')
   +line(en?'Stopping distance':'停止距離',values.distance,'m')
   +line(en?'Stopping time':'停止までの時間',values.time,'s')
   +line(en?'Acceleration (signed)':'加速度（符号付き）',values.acceleration,'m/s²')
   +line(en?'Impulse (signed)':'力積（符号付き）',values.impulse,'N·s')
   +'<p>'+(en?'If speed doubles while mass and force stay fixed, braking distance becomes four times as large.':'質量と制動力が同じなら、速さを2倍にすると停止距離は4倍になります。')+'</p>';
 }
 for(const key of ['mass','speed','force'])get(key).addEventListener('input',update);
 update();
}
