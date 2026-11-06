/* Authored bilingual conceptual explanations. Equations and models are authoritative elsewhere. */
const B=(ja,en)=>({ja,en});
export const deepMechanicsLessons={
 force:{
  intuition:[
   B('台車が右へ動いているとき、「右向きに力が加わっている」とは限りません。水平で摩擦のない床なら、押すのをやめてもそのまま右へ進みます。ここで区別したいのは、すでに起こっている運動と、その運動が変化する原因です。',
     'A cart moving right does not necessarily experience a rightward net force. On a horizontal frictionless surface it keeps moving after the push ends. We must distinguish motion itself from the cause of a change in motion.'),
   B('床がざらざらなら、手を離した台車は減速します。これは「動く物には進む力が必要」という証拠ではなく、逆向きの摩擦が速度を変えた結果です。まず何を物体として取り出し、何がその物体に力を及ぼすかを考えましょう。',
     'On a rough floor the cart slows down when released. This is not evidence that motion needs a forward force; friction changes its velocity. Start by identifying the object under study and the interactions acting on it.')
  ],
  vocabulary:[
   [B('系・対象物体','System / object of study'),B('どの物体の運動を説明するか、先に決める。その物体に作用する外力だけを運動方程式に入れる。','Select the body whose motion is to be explained. Include forces acting on that body, not forces it exerts on other bodies.')],
   [B('合力','Net force'),B('一つの物体に作用する力のベクトル和。右を正にすれば、右6 Nと左2 Nの合力は右4 N。','The vector sum of forces on one body. If right is positive, +6 N and −2 N combine to +4 N.')],
   [B('加速度','Acceleration'),B('速度ベクトルが単位時間あたりにどのように変わるか。速さを増やす場合も、減らす場合も、向きを変える場合もある。','The rate of change of the velocity vector. Speeding up, slowing down, and turning can all involve acceleration.')],
   [B('慣性系','Inertial reference frame'),B('物体に合力がなければ等速直線運動するように記述できる基準系。','A frame in which a body with no net external force moves at constant velocity.')]
  ],
  logic:[
   B('まず台車だけを取り出します。手の押す力、床の摩擦、重力、床の垂直抗力を区別します。台車が床を押す力は、別の物体に作用するため台車の図には描きません。','Isolate the cart. Distinguish the hand’s push, floor friction, gravity, and normal force. The force the cart exerts on the floor acts on another object, so it is not a force in the cart’s equation.'),
   B('床に沿って右向きを正に取ります。正方向と逆向きの力はマイナスにします。上下に加速しないなら、上下の力は打ち消し合いますが、水平方向の合力は残ることがあります。','Choose right as positive along the floor. Forces opposing the chosen axis receive a negative sign. Vertical forces may balance while horizontal forces still produce acceleration.'),
   B('質量が一定の物体について、運動の第二法則は「合力＝質量×加速度」です。これは加速度の定義だけから証明される式ではなく、物理的な運動法則です。','For a constant-mass body, Newton’s second law relates net force to mass times acceleration. It is a physical law, not a result obtained merely by defining acceleration.'),
   B('右向きの加速度があっても、物体が左向きに動いている瞬間はあります。その場合は左向きの速度が小さくなります。加速度の向きは速度そのものの向きではありません。','An object may move left while accelerating right. Its leftward velocity then becomes less negative. Acceleration direction is not the same thing as instantaneous velocity direction.')
  ],
  example:{problem:B('2 kgの台車を右に6 Nで押し、摩擦が左に2 N働く。加速度は？','A 2 kg cart is pushed with 6 N right while friction is 2 N left. Find acceleration.'),
   steps:[
    ['F_{\\mathrm{net}}=+6-2=+4\\ \\mathrm{N}',B('右を正と決めると、向きの違いが符号に現れる。','With right positive, the two force directions appear as opposite signs.')],
    ['a=\\frac{F_{\\mathrm{net}}}{m}=\\frac{4}{2}=2\\ \\mathrm{m/s^2}',B('合力を質量で割る。同じ力でも質量が大きければ加速度は小さい。','Divide net force by mass. With equal net force, a larger mass gives less acceleration.')],
    ['[F/m]=\\mathrm{N/kg}=\\mathrm{m/s^2}',B('単位も加速度になっているか確かめる。','Check that the units reduce to acceleration.')]],
   conclusion:B('答えは右向き2 m/s²。「右へ2 m/sで動く」という意味ではなく、速度が毎秒右向きに2 m/sずつ変わることを意味します。','The answer is 2 m/s² to the right: velocity changes by +2 m/s every second, not that its speed equals 2 m/s.')},
  misconception:B('「動いている＝合力がある」は誤り。静止か運動かでなく、速度が変化しているかを問う。','“Moving means a net force acts” is false. Ask whether velocity is changing, not merely whether the body is moving.'),
  revisit:B('円運動で速さ一定でも加速度があることを学ぶと、「合力が速度ベクトルを変える」という意味がいっそう明確になります。','Circular motion later deepens this idea: a net force can change the direction of velocity even when speed stays constant.')
 },
 friction:{
  intuition:[
   B('斜面の上の箱が止まっているとき、力がないのではありません。重力は斜面に沿って滑らせようとし、静止摩擦がそれを打ち消しています。力が存在することと、加速度が存在することを分けて考えます。','A box resting on a slope is not force-free. Gravity has a component tending to pull it downhill, while static friction can oppose that tendency. Nonzero forces do not necessarily mean nonzero acceleration.'),
   B('斜面を少しずつ急にすると、静止を保つのに必要な摩擦が増えます。しかし摩擦が発揮できる大きさには上限があります。その境界を数式で調べます。','As the slope steepens, the required static friction increases, but its maximum is limited. We can find the threshold by comparing the required force with that upper bound.')
  ],
  vocabulary:[
   [B('垂直抗力','Normal force'),B('接触面が物体を押す、面に垂直な力。いつでもmgと同じではない。','A force exerted by a surface, perpendicular to that surface; it need not equal mg.')],
   [B('静止摩擦','Static friction'),B('接触面間の相対的な滑りが起きない間、その滑りを防ぐように働く摩擦。最大値まで調節される。','Friction preventing relative sliding between contacting surfaces; its magnitude adjusts up to a limit.')],
   [B('摩擦係数 μs','Coefficient of static friction'),B('この近似モデルでの最大静止摩擦を垂直抗力で割った無次元量。','Dimensionless ratio relating maximum static friction to normal force in the Coulomb model.')]
  ],
  logic:[
   B('座標軸を水平・鉛直ではなく、斜面に平行・垂直に取ります。こうすると接触力の一つである垂直抗力は、垂直方向の式にしか現れず扱いやすくなります。','Choose axes parallel and perpendicular to the slope. The normal force then lies entirely along one axis, simplifying the equations.'),
   B('重力mgは鉛直下向きのままですが、その成分は斜面方向mg sinθ、垂直方向mg cosθです。重力を二つに分けて描いても、実際の重力が二つに増えたわけではありません。','Gravity remains one downward force. Its parallel and perpendicular components are mg sinθ and mg cosθ; resolving a vector does not create two separate forces.'),
   B('箱が静止するには、斜面方向で必要な摩擦力mg sinθが、静止摩擦の最大値μsN以下である必要があります。等号は滑り出す直前の境界です。','Rest requires the needed static friction mg sinθ not to exceed its maximum μsN. Equality describes the limiting condition just before sliding.'),
   B('両辺にmgが共通しているため、この単純な摩擦モデルでは滑り出す角度が質量に依存しません。現実には接触面の状態や変形の影響を受けることがあります。','The factor mg cancels, so the limiting angle is mass-independent in this ideal friction model. Real contacts may behave differently because of deformation and surface conditions.')
  ],
  example:{problem:B('静止摩擦係数0.5の斜面で、箱が静止できる最大角度は？','A block rests on a slope with coefficient of static friction 0.5. Find the largest angle allowing rest.'),
   steps:[
    ['N=mg\\cos\\theta',B('面に垂直な方向は加速しないと仮定する。','Assume zero acceleration perpendicular to the plane.')],
    ['mg\\sin\\theta\\leq\\mu_s N',B('必要な摩擦と出せる最大摩擦を比較する。','Compare required friction with available maximum static friction.')],
    ['\\tan\\theta\\leq\\mu_s=0.5',B('共通のmgを消去して境界を表す。','Cancel the common factor mg and obtain the limiting condition.')],
    ['\\theta_{\\max}=\\arctan(0.5)\\simeq26.6^\\circ',B('角度は質量に依存しない。','The resulting angle is independent of mass in the model.')]],
   conclusion:B('約26.6°。「静止しているから摩擦力は0」という思い込みを避けることが大切です。','About 26.6°. Remember that a stationary body can have nonzero friction.')},
  misconception:B('静止摩擦力はいつでもμsNではありません。通常は「必要な分」だけ働き、μsNは上限です。','Static friction is not always μsN. It generally takes the magnitude required for rest, up to that maximum.'),
  revisit:B('仕事・エネルギーの章に進むと、動摩擦は運動エネルギーの変化にも関係することがわかります。','In the energy chapter, kinetic friction appears again through its effect on mechanical energy.')
 },
 energy:{
  intuition:[
   B('物体を落とすとき、重力による加速を毎瞬間追わなくても、落下前後の高さと速さから答えを出せることがあります。そのために便利なのが、仕事とエネルギーを使った見方です。','When an object falls, sometimes we can connect its initial and final states without solving acceleration at every instant. Work and energy provide that alternative viewpoint.'),
   B('ただし、何でも「エネルギー保存」と書いてよいわけではありません。抵抗によって周囲が温かくなるなら、力学的エネルギーは減っても、もっと広い系のエネルギーまで消えたわけではありません。','But “energy is conserved” is not a universal shortcut for mechanical energy. If resistance heats the surroundings, mechanical energy may decrease without total energy disappearing.')
  ],
  vocabulary:[
   [B('仕事','Work'),B('力が変位に沿ってどれだけエネルギーを移すかを表す量。力と変位が直交すればその力の仕事は0。','Energy transfer by force acting through displacement. A force perpendicular to displacement does zero work.')],
   [B('運動エネルギー','Kinetic energy'),B('質量m、速さvの粒子では K=mv²/2。速度の向きでなく大きさに依存する。','For a constant-mass particle, K=mv²/2, depending on speed, not velocity direction.')],
   [B('保存力','Conservative force'),B('仕事が位置エネルギーの差で表せる力。重力や理想ばねの力が代表例。','A force whose work can be represented through a change in potential energy, such as ideal gravity or spring force.')]
  ],
  logic:[
   B('力が速度方向へ働けば、物体の速さが変わり、運動エネルギーも変化します。力を移動距離に沿って積分した量が仕事です。これは「力がある時間」ではなく「力が作用する間の変位」と結び付く量です。','A force with a component along motion changes speed and kinetic energy. Work integrates force along displacement, not simply over how long the force acts.'),
   B('運動方程式に速度を内積し、時間について積分すると、合力の仕事が運動エネルギーの変化に等しいことが得られます。ここで質量一定という条件を使っています。','Dot Newton’s law with velocity and integrate over time. This yields the work–kinetic-energy theorem for constant mass.'),
   B('重力のような保存力の仕事は位置エネルギーの減少と対応します。重力だけが仕事をする場合、位置エネルギーの減少分が運動エネルギーの増加分になります。','The work of a conservative force equals minus the change in potential energy. With gravity alone, lost potential energy becomes increased kinetic energy.'),
   B('摩擦や外からの押す力が加わる場合は、その仕事を別に入れます。式を使う前に、どの物体を系に含め、どのエネルギーを追跡するか選びましょう。','If friction or an external push does work, include those contributions separately. First decide what constitutes the system and which energy forms you are tracking.')
  ],
  example:{problem:B('空気抵抗を無視して、物体を静止状態から5 m落下させる。着地直前の速さは？','A body falls 5 m from rest with negligible air drag. Find its speed before impact.'),
   steps:[
    ['mg h=\\frac12 mv^2',B('失った重力位置エネルギー＝増加した運動エネルギー。','Lost gravitational potential energy equals gained kinetic energy.')],
    ['gh=\\frac12 v^2',B('質量mが両辺にあるため消去できる。','Cancel mass on both sides; the ideal result is independent of mass.')],
    ['v=\\sqrt{2gh}=\\sqrt{2\\times9.8\\times5}',B('求めるのは正の速さなので平方根の正の値を取る。','Take the positive root because we seek the nonnegative speed.')],
    ['v\\simeq9.90\\ \\mathrm{m/s}',B('位置エネルギーと運動エネルギーの単位は、ともにジュール。','Both potential and kinetic energy are measured in joules.')]],
   conclusion:B('約9.90 m/s。物体の質量を変えても、このモデルでは速さは同じです。','Approximately 9.90 m/s. The result does not depend on mass under these assumptions.')},
  misconception:B('「摩擦があるからエネルギーが失われる」ではなく、力学的エネルギーが熱などの内部エネルギーへ移ることを区別する。','Do not say energy disappears because of friction; distinguish mechanical energy transfer into internal energy and other forms.'),
  revisit:B('衝突の章で、運動量は保存する一方、運動エネルギーは保存しない例を扱うと、保存則の条件がさらに明確になります。','Collisions offer a useful contrast: momentum can be conserved while kinetic energy is not.')
 },
 momentum:{
  intuition:[
   B('衝突する瞬間には大きな力が働きますが、その力が何秒間どのように変わったかを細かく測るのは難しいことがあります。それでも、衝突前と後の速度を比較すれば重要なことがわかります。','During a collision, large forces may change rapidly, making the force–time history hard to measure. Yet the velocities before and after impact still reveal essential information.'),
   B('二つの物体を合わせた系では、互いに押し合う力は内部の相互作用です。外部からの力積が十分小さければ、系全体の運動量は保存します。個々の物体の運動量が保存するのではありません。','For the combined two-body system, contact forces are internal. If net external impulse is negligible, total momentum is conserved; each object’s momentum need not be.')
  ],
  vocabulary:[
   [B('運動量','Momentum'),B('質量と速度の積 p=mv。向きのあるベクトル量。','The vector quantity p=mv, whose direction follows velocity.')],
   [B('力積','Impulse'),B('力を作用時間について積分した量。運動量の変化に等しい。','The time integral of force, equal to the momentum change.')],
   [B('完全非弾性衝突','Perfectly inelastic collision'),B('衝突後に物体がくっついて同じ速度で動くモデル。運動エネルギーは通常保存しない。','An idealized collision where bodies stick together and share a final velocity; kinetic energy is generally not conserved.')]
  ],
  logic:[
   B('まず系を衝突する二つの物体の全体に取ります。物体同士の力は作用反作用の組で、系の総運動量を変える外力ではありません。','Define the system to include both colliding bodies. Their mutual forces are action–reaction pairs and do not change the total momentum of the combined system.'),
   B('外力の力積を無視できるなら、衝突前の各運動量を符号付きで足した値が、衝突後の総運動量と一致します。速度の向きによって正負を付けることが重要です。','When external impulse is negligible, the signed sum of momenta before collision equals the total after collision. Sign conventions matter.'),
   B('くっつく場合は、衝突後の速度が一つに決まるという条件を加えます。この条件がない場合、運動量保存だけで二つの衝突後速度を決められるとは限りません。','For sticking bodies, the common final velocity provides an additional condition. Without it, momentum conservation alone may not determine both final velocities.'),
   B('運動量と運動エネルギーは別の量です。くっつく衝突では変形や熱などにエネルギーが移るため、通常、衝突後の運動エネルギーは小さくなります。','Momentum and kinetic energy are different. A sticking collision usually converts some kinetic energy into deformation, heat, or other internal forms.')
  ],
  example:{problem:B('2 kgの物体が右に3 m/sで進み、静止している1 kgの物体と衝突して合体する。合体後の速さは？','A 2 kg body moving right at 3 m/s sticks to a stationary 1 kg body. Find the final speed.'),
   steps:[
    ['P_i=2\\times3+1\\times0=6\\ \\mathrm{kg\\,m/s}',B('系全体の衝突前の運動量を足す。','Add the initial momenta of both bodies.')],
    ['P_f=(2+1)v_f',B('合体した後は両者の速度が同じ。','After sticking, both bodies have the same velocity.')],
    ['6=3v_f\\quad\\Rightarrow\\quad v_f=2\\ \\mathrm{m/s}',B('運動量保存から共通速度を求める。','Solve for the common final velocity using momentum conservation.')],
    ['K_i=9\\ \\mathrm{J},\\quad K_f=6\\ \\mathrm{J}',B('運動エネルギーは3 J減った。総エネルギーが消えたわけではない。','Kinetic energy decreases by 3 J; total energy is not destroyed.')]],
   conclusion:B('右向き2 m/s。合力の力積が無視できれば運動量保存、運動エネルギーは非保存となります。','The bodies move right at 2 m/s. Momentum is conserved under negligible external impulse, while kinetic energy is not.')},
  misconception:B('内力が大きいことと、系全体の運動量が変わることは同じではない。系の境界を先に決める。','Large internal forces do not necessarily change total system momentum. Choose the system boundary first.'),
  revisit:B('ラグランジュ力学で空間の並進対称性を学ぶと、運動量保存がより一般的な原理とも結び付きます。','Spatial translation symmetry in Lagrangian mechanics later offers a deeper perspective on momentum conservation.')
 },
 circular:{
  intuition:[
   B('同じ速さで円を回る物体は、速さが一定なのに加速度を持ちます。一見矛盾して見えますが、速度とは「速さ」だけでなく「向き」も持つ量だからです。','A particle moving at constant speed around a circle still accelerates. There is no contradiction: velocity has direction as well as magnitude.'),
   B('円の右端では速度は上向き、上端では左向き、左端では下向きです。向きが変化し続けるので、その変化率である加速度が必要になります。','At different points on the circle, the tangent direction changes continuously. Acceleration describes this rate of change of the velocity vector.')
  ],
  vocabulary:[
   [B('角速度','Angular speed'),B('単位時間あたりの角度の変化。ラジアン毎秒で表す。','Rate of change of angular position, measured in radians per second.')],
   [B('向心加速度','Centripetal acceleration'),B('円の中心向きの加速度。等速円運動では大きさがv²/r。','Inward acceleration; for uniform circular motion its magnitude is v²/r.')],
   [B('接線方向','Tangential direction'),B('その瞬間に進もうとする速度ベクトルが向く方向。半径方向と直交する。','The instantaneous direction of velocity, perpendicular to the radius in circular motion.')]
  ],
  logic:[
   B('円周上の位置を半径rと角度θで表します。角度が一定の速さで増えるなら θ=ωt と置けます。x=r cosωt、y=r sinωt として位置を二成分に分けます。','Describe the position on a circle by radius and angle. For constant angular speed, θ=ωt and x=r cosωt, y=r sinωt.'),
   B('位置を時間で微分すると速度が得られます。cosの微分にはマイナスのsinが現れるため、速度ベクトルは半径に直交する向きになります。','Differentiate position in time to obtain velocity. The derivative of cosine produces negative sine, making velocity perpendicular to the radial direction.'),
   B('さらに微分すると、加速度は位置ベクトルの逆向きに比例します。したがって加速度は常に中心向きです。','Differentiate again. Acceleration becomes proportional to the negative position vector, so it always points toward the center.'),
   B('ニュートンの第二法則では、実際に働く力の中心向き成分の合計がmaです。「向心力」という名前の独立した新しい相互作用を追加するのではありません。','In Newton’s law, the inward components of real forces sum to ma. Centripetal force is a role played by the net inward force, not an extra interaction.')
  ],
  example:{problem:B('速さ6 m/s、半径3 mの等速円運動。加速度の大きさは？','A particle moves in a circle of radius 3 m at 6 m/s. Find acceleration magnitude.'),
   steps:[
    ['a=\\frac{v^2}{r}',B('等速円運動で、向心加速度の大きさを表す。','Use the magnitude of centripetal acceleration for uniform circular motion.')],
    ['a=\\frac{6^2}{3}=12\\ \\mathrm{m/s^2}',B('速さは二乗するので、2倍なら加速度は4倍になる。','Speed is squared; doubling speed makes the acceleration four times as large.')],
    ['\\boldsymbol a\\ \\text{points inward}',B('大きさ12 m/s²だけでは完了しない。方向は中心向き。','The magnitude alone is incomplete; the acceleration points toward the center.')]],
   conclusion:B('中心向き12 m/s²。速さが一定でも速度ベクトルは一定ではありません。','12 m/s² inward. Constant speed does not imply constant velocity.')},
  misconception:B('「円運動には遠心力と向心力が釣り合う」という説明は、慣性系での運動方程式としては不適切。非慣性系では見かけの力を別に扱う。','Do not balance a centrifugal apparent force against the inward force when writing Newton’s law in an inertial frame. Apparent forces arise only in appropriate non-inertial descriptions.'),
  revisit:B('衛星の運動で、地球の重力が中心向きの合力を与えると考えると、この加速度の意味を再発見できます。','In satellite motion, gravity supplies the inward acceleration, giving the same concept a new context.')
 },
 oscillation:{
  intuition:[
   B('ばねを右に引いて手を離すと、ばねは物体を左へ引き戻します。平衡位置を通り過ぎると、今度は反対向きへ引き戻されます。この「元に戻ろうとする力」が繰り返しの運動を生みます。','Pull a spring mass to the right and release it. The spring pulls it back. After crossing equilibrium the restoring force reverses direction, allowing repeated motion.'),
   B('物体が最も右へ来た瞬間、速度は0ですが、ばねの復元力は最も大きく、加速度も大きくなります。速度と加速度の役割を分けることが、振動の理解の鍵です。','At the rightmost turning point velocity is zero, but the restoring force—and acceleration magnitude—is greatest. Distinguishing velocity from acceleration is central to understanding oscillation.')
  ],
  vocabulary:[
   [B('平衡位置','Equilibrium position'),B('合力が0になる基準の位置。変位xをそこから測ると式が単純になる。','Position where net force vanishes. Measuring displacement from it simplifies the equation.')],
   [B('復元力','Restoring force'),B('変位と逆向きに働いて平衡位置へ戻そうとする力。','A force directed toward equilibrium, opposite to displacement.')],
   [B('角振動数','Angular frequency'),B('位相が1秒間に何ラジアン進むかを表す量。周期Tとω=2π/Tの関係がある。','Rate at which the oscillation phase advances in radians per second, with ω=2π/T.')]
  ],
  logic:[
   B('平衡位置からの変位をxとすると、理想ばねでは復元力がF=−kxとなります。マイナスは力が変位と反対向きという意味で、力の大きさが負だという意味ではありません。','Measure displacement x from equilibrium. For an ideal spring, F=−kx. The minus sign indicates direction opposite to displacement, not negative force magnitude.'),
   B('運動方程式m d²x/dt²=−kxから、加速度が常に変位と反対向きで、その大きさが変位に比例すると分かります。これは単振動の数学的な特徴です。','Newton’s law gives m d²x/dt²=−kx. Acceleration opposes displacement and grows linearly with its magnitude—defining the ideal harmonic form.'),
   B('角振動数ω=√(k/m)を用いると、位置はcosやsinの形で変化します。一定時間後に同じ状態へ戻るため、周期T=2π/ωになります。','The angular frequency ω=√(k/m) leads to sinusoidal solutions. Returning to the same phase requires 2π radians, giving T=2π/ω.'),
   B('理想線形ばねでは周期に振幅Aが含まれません。しかしエネルギーは振幅の二乗に比例します。「周期が変わらない」と「運動が全く同じ」は別です。','Amplitude A does not appear in the period of an ideal linear spring, but the total energy scales with A². Unchanged period does not mean an identical motion.')
  ],
  example:{problem:B('質量2 kg、ばね定数50 N/mの理想ばね。周期を求める。','An ideal spring has mass 2 kg and stiffness 50 N/m. Find the period.'),
   steps:[
    ['\\omega_0=\\sqrt{\\frac{k}{m}}=\\sqrt{25}=5\\ \\mathrm{rad/s}',B('まず角振動数を求める。','First obtain angular frequency.')],
    ['T=\\frac{2\\pi}{\\omega_0}=\\frac{2\\pi}{5}',B('一周期は位相2πラジアンに対応する。','One cycle corresponds to a phase change of 2π radians.')],
    ['T\\simeq1.26\\ \\mathrm{s}',B('質量を4倍にすると周期は2倍になる。','Multiplying mass by four would double the period.')]],
   conclusion:B('周期は約1.26秒。ただし減衰や非線形の効果を無視したモデルです。','The period is about 1.26 s, assuming negligible damping and linear spring behavior.')},
  misconception:B('折り返し点では速度が0でも、加速度は通常0ではありません。位置・速度・加速度の時間変化を区別しましょう。','Velocity is zero at turning points, but acceleration generally is not. Distinguish position, velocity, and acceleration.'),
  revisit:B('電気回路のLC振動を学ぶと、電荷の振動にも同じ形の微分方程式が現れます。ただし変位と電荷は異なる物理量です。','An LC circuit later displays the same mathematical differential-equation structure, though displacement and charge remain physically different quantities.')
 }
};
