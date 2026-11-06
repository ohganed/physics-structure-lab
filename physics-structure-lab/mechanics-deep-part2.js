/* University connections and second-half mechanics detailed bilingual self-study lessons. */
const B=(ja,en)=>({ja,en});
export const advancedDeepMechanicsLessons={
 gravitation:{
  intuition:[
   B('手から離した物体は地面へ落ちます。一方、人工衛星は地球の周囲を回り続けます。衛星には重力が働いていないのでしょうか。実際には、重力が速度の向きを変え続けるため、軌道に沿って自由落下していると理解できます。','A dropped object falls toward Earth while a satellite keeps orbiting it. Does a satellite escape gravity? No: gravity continually changes the direction of its velocity, producing an ongoing free-fall trajectory.'),
   B('地球から遠ざかるほど重力は弱くなりますが、「高度が2倍だから重力は4分の1」とは限りません。逆二乗則で使う距離は地球の表面からの高さではなく、地球中心からの距離です。','Gravity weakens with distance, but doubling altitude does not simply quarter the force. The inverse-square distance is measured from Earth’s center, not from its surface.')
  ],
  vocabulary:[
   [B('万有引力','Universal gravitation'),B('質量を持つ二物体間の引力。球対称な物体の外では中心からの距離で逆二乗則を使える。','Attraction between masses. Outside spherically symmetric bodies, Newton’s inverse-square relation uses center-to-center distance.')],
   [B('重力場','Gravitational field'),B('その位置に置いた単位質量あたりに働く重力。力を受ける物体の質量と区別できる。','Gravitational force per unit test mass at a point, independent of the test mass in the ideal model.')],
   [B('円軌道','Circular orbit'),B('中心向きの重力が円運動に必要な加速度をちょうど与える運動。速度の大きさには条件がある。','Motion where inward gravity provides exactly the centripetal acceleration required for a circle.')]
  ],
  logic:[
   B('地球のような球対称な天体の外では、重力の大きさをGMm/r²と書けます。rは天体中心と衛星の間の距離で、Gは万有引力定数です。','Outside a spherical central body, gravity has magnitude GMm/r², where r is center-to-center distance and G is the gravitational constant.'),
   B('円軌道なら必要な中心向き加速度はv²/rです。重力と向心力を別々の力として足すのではなく、重力がその中心向きの合力を担うと考えます。','A circular path requires inward acceleration v²/r. Gravity is the force providing it; “centripetal force” is not added as a second force.'),
   B('GMm/r²=mv²/rから、衛星の質量mが消え、v=√(GM/r)が得られます。同じ半径の円軌道なら衛星質量によらず同じ速さになります。','Equating GMm/r² to mv²/r cancels satellite mass and yields v=√(GM/r). Circular orbital speed is independent of satellite mass at fixed radius.'),
   B('円軌道は特別な場合です。速度が違えば楕円や脱出軌道などになります。実際の低軌道では大気抵抗や天体の非球対称性も考慮する必要があります。','A circle is a special case. Different initial velocities allow ellipses and other trajectories. Real orbits may be affected by drag and non-spherical gravitational fields.')
  ],
  example:{problem:B('地球中心から7000 kmの円軌道にある衛星の速さは？ GM=3.986×10¹⁴ m³/s²。','Find circular orbital speed at radius 7000 km from Earth’s center, using GM=3.986×10¹⁴ m³/s².'),
   steps:[
    ['r=7000\\ \\mathrm{km}=7.00\\times10^6\\ \\mathrm{m}',B('距離をmに直す。7000 kmは地表からの高さではない。','Convert to meters; this is geocentric radius, not altitude.')],
    ['v=\\sqrt{\\frac{GM}{r}}',B('重力加速度と向心加速度を等置した結果。','This follows by equating gravitational and centripetal acceleration.')],
    ['v\\simeq7.55\\times10^3\\ \\mathrm{m/s}',B('約7.55 km/s。単位が速度になっていることを確認する。','About 7.55 km/s; verify the units are those of speed.')]],
   conclusion:B('約7.55 km/s。衛星が「重力から逃れている」わけではありません。','Approximately 7.55 km/s. The satellite has not escaped gravity.')},
  misconception:B('高度と地心距離を混同しないこと。「無重力」は重力が0という意味とは限らず、自由落下中に支持力を感じない状態を指す場合が多い。','Do not confuse altitude with geocentric distance. Weightlessness commonly means the absence of a supporting contact force during free fall, not zero gravity.'),
  revisit:B('力学的エネルギーと角運動量を使えば、円軌道以外の軌道も分析できます。','Energy and angular momentum allow the same problem to be extended beyond circular orbits.')
 },
 rotation:{
  intuition:[
   B('ドアを開けるとき、蝶番の近くよりも取っ手側を押す方が楽です。同じ力でも「どこを」「どの向きへ」押すかで、回転への効果が違うからです。','A door is easier to open by pushing near the handle than near the hinge. The rotational effect of a force depends on its location and direction.'),
   B('また、同じ質量でも、中心に質量が集まった物体と外周に集まった物体では回りやすさが違います。この違いを数量化するために慣性モーメントを定義します。','Even at equal total mass, a body with mass concentrated near the center rotates differently from one with mass at the rim. Moment of inertia quantifies this distribution effect.')
  ],
  vocabulary:[
   [B('トルク','Torque'),B('回転軸に対する力の回転効果。軸から作用点までの腕と力の外積に関係する。','Rotational effect of a force about an axis, described by a cross product of lever arm and force.')],
   [B('慣性モーメント','Moment of inertia'),B('質量を回転軸からの距離の二乗で重み付けした量。回転軸によって値が変わる。','Mass distribution weighted by the square of distance from a chosen rotation axis.')],
   [B('角加速度','Angular acceleration'),B('角速度が単位時間あたりに変化する割合。','Rate at which angular velocity changes.')],
   [B('角運動量','Angular momentum'),B('回転の運動状態を表す量。固定軸・一定のIではL=Iωと表せる。','A measure of rotational motion; for suitable fixed-axis motion L=Iω.')]
  ],
  logic:[
   B('力を回転軸に向けて押すと、軸周りの回転効果は小さくなります。垂直に押す成分だけが有効で、トルクの大きさはτ=rF sinφです。','A force directed toward the axis has no torque about that axis. The perpendicular component contributes, giving magnitude τ=rF sinφ.'),
   B('質点を回す難しさはmr²で決まり、分布した剛体では各質点分を足してI=∫r²dmとします。rはその質量要素から回転軸までの垂直距離です。','For a point mass, rotational inertia about an axis is mr². For a distributed rigid body, add contributions using I=∫r²dm, with r measured perpendicular to the axis.'),
   B('固定軸まわりにIが一定なら、合トルク＝I×角加速度となります。直線運動のF=maに似ていますが、軸の選択や質量分布という新しい条件が必要です。','For rotation about a fixed axis with constant I, net torque equals I times angular acceleration. This resembles F=ma, but depends on axis choice and mass distribution.'),
   B('力が回転軸上に作用すると腕が0です。また、同じ力でも軸に平行な力では軸まわりのトルクが0になることがあります。向きと位置を図で確認します。','Force applied on the axis has zero lever arm. The component along the chosen axis of torque must be considered; always examine position and force direction geometrically.')
  ],
  example:{problem:B('回転軸から0.50 mの位置を10 Nで垂直に押す。軸まわりのトルクは？','A 10 N force acts perpendicular to a lever arm 0.50 m from the hinge. Find torque magnitude.'),
   steps:[
    ['\\tau=rF\\sin\\varphi',B('一般的なトルクの大きさの式から出発する。','Start with the general torque magnitude.')],
    ['\\varphi=90^\\circ\\quad\\Rightarrow\\quad\\sin\\varphi=1',B('腕と力が垂直なため最大の回転効果になる。','The perpendicular force maximizes the torque for this force and lever arm.')],
    ['\\tau=0.50\\times10=5.0\\ \\mathrm{N\\,m}',B('軸まわりの向きは時計回りか反時計回りか別に指定する。','The clockwise or counterclockwise sense should also be specified.')]],
   conclusion:B('トルクの大きさは5.0 N·m。エネルギーのJと単位表記が似ていても、物理量の意味は異なります。','Torque magnitude is 5.0 N·m. This is not interchangeable with energy, even though 1 J has the same base-unit dimensions.')},
  misconception:B('質量だけで回りやすさは決まらず、回転軸の位置も必要。トルクを「力が大きいほど大きい」とだけ理解しない。','Total mass alone does not determine rotational inertia; the axis matters. Torque is not set by force magnitude alone.'),
  revisit:B('ニュートンの運動方程式と運動量の考えを、回転に拡張したものとして見直せます。','Reinterpret Newtonian force and momentum ideas in rotational form.')
 },
 noninertial:{
  intuition:[
   B('バスが急に前へ発進したとき、乗客は後ろへ押されたように感じます。しかし乗客には、誰かが後ろ向きに押す新しい相互作用が発生したわけではありません。','When a bus accelerates forward, a passenger seems to be pushed backward. No mysterious new rearward physical interaction has appeared.'),
   B('地面に固定した観測者と、加速するバスの中の観測者では、同じ物体の加速度の表し方が違います。その違いを数式に含めるために、見かけの力を導入します。','A ground-fixed observer and an observer accelerating with the bus assign different accelerations to the same body. Apparent forces account for this change of reference frame.')
  ],
  vocabulary:[
   [B('慣性系','Inertial frame'),B('物体が合力0なら等速直線運動をする基準系。地面も厳密には完全な慣性系ではない。','A reference frame where force-free bodies move at constant velocity; Earth-fixed frames are only approximately inertial.')],
   [B('非慣性系','Non-inertial frame'),B('慣性系に対して加速・回転する観測者の座標系。','A frame accelerating or rotating relative to an inertial frame.')],
   [B('見かけの力','Fictitious / inertial force'),B('加速する座標系でも運動方程式を同じ形で書くために入れる補正項。物体間の新しい相互作用ではない。','A correction term used in an accelerating frame to retain a Newton-like form; it is not a new interaction.')]
  ],
  logic:[
   B('地面を基準にした位置をx、バスの位置をX、バスから見た位置をx′=x−Xとします。これが「基準を変える」操作です。','Let ground-frame position be x, bus position X and passenger position relative to the bus be x′=x−X. This is a change of coordinates.'),
   B('時間で2回微分するとa′=a−Aです。Aはバスの加速度です。バスが右へ加速すれば、地面に対して静止に近い物体はバス内では左へ動くように見えます。','Differentiating twice gives a′=a−A, where A is bus acceleration. If the bus accelerates right, a body nearly stationary in the ground frame accelerates left relative to the bus.'),
   B('慣性系でFreal=maを使い、a=a′+Aを代入するとma′=Freal−mA。バス内の観測者は−mAを見かけの力として式に含めます。','Start with Freal=ma in the inertial frame and substitute a=a′+A, yielding ma′=Freal−mA. The bus observer treats −mA as an apparent force.'),
   B('回転している座標系では、遠心力やコリオリ力などが現れますが、並進加速だけのバスとは補正項が異なります。','Rotating frames introduce additional terms such as centrifugal and Coriolis forces, beyond the simple translational bus model.')
  ],
  example:{problem:B('右へ2 m/s²で加速するバスの中で、2 kgの物体に働く並進に由来する見かけの力は？','A bus accelerates right at 2 m/s². Find the translational apparent force on a 2 kg object in the bus frame.'),
   steps:[
    ['\\boldsymbol F_{\\mathrm{app}}=-m\\boldsymbol A',B('見かけの力は座標系の加速度と反対向き。','The apparent force points opposite to frame acceleration.')],
    ['F_{\\mathrm{app},x}=-2\\times2=-4\\ \\mathrm{N}',B('右を正に取るとマイナスになる。','With right chosen as positive, the sign is negative.')],
    ['|F_{\\mathrm{app}}|=4\\ \\mathrm{N}',B('大きさ4 N、向きは左。','Magnitude 4 N, directed left.')]],
   conclusion:B('左向き4 Nの見かけの力。これは別の物体が押した力ではありません。','A 4 N apparent force to the left; no other object exerts this force.')},
  misconception:B('見かけの力と作用反作用の力を混同しない。どの座標系で式を書いているかを明確にする。','Do not confuse apparent forces with Newton’s third-law pairs. Always state the reference frame.'),
  revisit:B('円運動で慣性系の向心加速度を学んだ後、回転座標系から見直すと遠心力の意味が明確になります。','Revisit uniform circular motion from a rotating frame to understand when and why a centrifugal apparent force appears.')
 },
 lagrange:{
  intuition:[
   B('振り子の位置を水平xと鉛直yで表すと2つの座標が必要に見えます。しかし糸の長さが一定なら、xとyは独立ではありません。角度θの一つだけで場所が決まります。','A pendulum seems to require x and y coordinates, but a fixed string length constrains them. One independent angle θ describes its position.'),
   B('ラグランジュ力学は、物体に働く力を矢印で一本ずつ追う方法とは違い、独立な座標とエネルギーから運動方程式を組み立てます。ニュートン力学を否定する新しい法則ではありません。','Lagrangian mechanics uses independent coordinates and energies to construct equations rather than listing each force component. It is an equivalent formulation of dynamics, not a rejection of Newtonian mechanics.')
  ],
  vocabulary:[
   [B('一般化座標','Generalized coordinate'),B('拘束条件を満たす運動を独立に表すための変数。必ずしも長さや空間座標とは限らない。','An independent variable describing an allowed configuration; it need not be a Cartesian distance.')],
   [B('ラグランジアン','Lagrangian'),B('典型的な保存力系でL=K−Uと置く関数。Kは運動エネルギー、Uは位置エネルギー。','A function L=K−U for standard conservative mechanical systems.')],
   [B('作用','Action'),B('ある時間区間の軌道に対して、Lを時間積分して得る量。','The time integral of the Lagrangian along a candidate trajectory.')],
   [B('オイラー＝ラグランジュ方程式','Euler–Lagrange equation'),B('作用が停留する条件を数式で表した運動方程式。','Equation arising from stationarity of the action under appropriate variations.')]
  ],
  logic:[
   B('まず自由度を数えます。糸の長さが一定の理想振り子なら角度θが一つの自由度です。座標xとyを独立に扱う必要がなくなります。','Count degrees of freedom. An ideal fixed-length pendulum has a single angle θ as its independent coordinate.'),
   B('速度や位置をθとその時間微分で表し、運動エネルギーKと位置エネルギーUを作ります。L=K−Uにすることで、系の運動が一つの関数へまとまります。','Express position and speed through θ and its derivative, compute kinetic and potential energies, and form L=K−U.'),
   B('「少し違う運動経路を選んだら作用がどう変わるか」を考えます。実際の経路では、適切な境界条件のもとで作用の一次変化が0になる、という原理を使います。','Consider how the action changes under nearby trial paths. For the actual path, its first variation vanishes under suitable boundary conditions.'),
   B('ここからオイラー＝ラグランジュ方程式が得られます。通常の運動方程式と同じ予測に戻れることを確かめると、二つの記述がつながります。','The Euler–Lagrange equation follows and reproduces the familiar equation of motion. Deriving the same prediction is a useful check of the two formulations.')
  ],
  example:{problem:B('摩擦のない1次元ばねをL=(m/2)ẋ²−(k/2)x²で表す。運動方程式を求める。','For a frictionless spring with L=(m/2)ẋ²−(k/2)x², derive the equation of motion.'),
   steps:[
    ['L=\\frac12 m\\dot x^2-\\frac12 kx^2',B('一般化座標をxに取る。','Choose x as the generalized coordinate.')],
    ['\\frac{\\partial L}{\\partial\\dot x}=m\\dot x',B('xを固定し、速度で偏微分する。','Differentiate with respect to velocity while holding position fixed.')],
    ['\\frac{\\partial L}{\\partial x}=-kx',B('速度を固定し、位置で偏微分する。','Differentiate with respect to position while holding velocity fixed.')],
    ['\\frac{d}{dt}(m\\dot x)-(-kx)=0\\ \\Rightarrow\\ m\\ddot x+kx=0',B('元のニュートンのばね方程式に戻った。','This reproduces the Newtonian spring equation.')]],
   conclusion:B('mẍ+kx=0。定義・エネルギー・変分を用いて、力から立てた式と同じ運動を表せました。','The result is mẍ+kx=0, equivalent to the Newtonian equation under the stated assumptions.')},
  misconception:B('L=K−Uがあらゆる物理系でそのまま成立するとは限らない。拘束、散逸、電磁場などでは形式を拡張する。','L=K−U is not the literal universal form for every physical system. Constraints, dissipation, and field interactions can require additional structure.'),
  revisit:B('単振動で学んだF=−kxを、エネルギーという異なる出発点から再発見できます。','The familiar spring equation is rediscovered from energy and variational reasoning rather than a force diagram.')
 },
 hamilton:{
  intuition:[
   B('物体の運動を予測するには、ある時刻の位置だけでなく、どちらへどの程度動いているかも必要です。ハミルトン力学は、位置qと正準運動量pを組にした「状態」から時間変化を追います。','To predict motion, knowing position alone is insufficient; we also need information about motion. Hamiltonian mechanics uses position q and canonical momentum p as a state in phase space.'),
   B('ばね振動を位置と速度で描く代わりに、横軸を位置q、縦軸を運動量pとした図で考えると、状態が閉じた曲線をめぐる様子が見えます。同じ振動を別の表現で眺められます。','For an ideal oscillator, the pair (q,p) traces a closed curve in phase space. This is another view of the same motion, not a different physical oscillator.')
  ],
  vocabulary:[
   [B('位相空間','Phase space'),B('系の独立な座標と正準運動量を軸にした状態空間。','A space whose coordinates comprise generalized positions and canonical momenta.')],
   [B('正準運動量','Canonical momentum'),B('ラグランジアンを一般化速度で偏微分した量。機械的運動量mvと常に同じとは限らない。','The derivative ∂L/∂q̇; it need not always equal mechanical momentum mv.')],
   [B('ハミルトニアン','Hamiltonian'),B('速度を運動量へ置き換えるルジャンドル変換から得られる関数。','A function obtained through a Legendre transform from the Lagrangian.')],
   [B('正準方程式','Hamilton’s equations'),B('位置と正準運動量の変化を記述する一階の連立方程式。','Coupled first-order evolution equations for canonical position and momentum.')]
  ],
  logic:[
   B('ラグランジアンL(q,q̇)から、正準運動量p=∂L/∂q̇を定義します。単純なばねではp=mq̇ですが、この等式をすべての系で当然とみなしてはいけません。','Define canonical momentum p=∂L/∂q̇. For the simple spring p=mq̇, but that identity is not universal.'),
   B('H=pq̇−Lという形で、速度q̇をpの式に置き換えます。この変換が一意にできることが必要です。ばねの場合はH=p²/(2m)+kq²/2です。','Form H=pq̇−L and eliminate q̇ in favor of p. The transformation must be regular. For the spring this gives H=p²/(2m)+kq²/2.'),
   B('偏微分してq̇=∂H/∂p、ṗ=−∂H/∂qを得ます。二階微分方程式だった運動が、状態を更新する一階の二つの式になります。','Hamilton’s equations q̇=∂H/∂p and ṗ=−∂H/∂q replace a second-order equation with two coupled first-order equations.'),
   B('このばねのHは力学的エネルギーと一致し、時間が経っても一定です。ただし一般のハミルトニアンが必ず単純な力学的エネルギーであるとは限りません。','For this spring H equals the mechanical energy and remains constant. In a more general system, a Hamiltonian is not necessarily identical to the naive mechanical-energy expression.')
  ],
  example:{problem:B('H=p²/(2m)+kq²/2 から、ばねの運動方程式を求める。','Derive the spring equation from H=p²/(2m)+kq²/2.'),
   steps:[
    ['\\dot q=\\frac{\\partial H}{\\partial p}=\\frac{p}{m}',B('位置の変化は運動量で決まる。','Position evolves according to canonical momentum.')],
    ['\\dot p=-\\frac{\\partial H}{\\partial q}=-kq',B('運動量の変化は復元力に対応する。','Momentum change corresponds to the restoring force.')],
    ['\\ddot q=\\frac{\\dot p}{m}=-\\frac{k}{m}q',B('一階の連立方程式をまとめ直す。','Combine the first-order equations.')],
    ['m\\ddot q+kq=0',B('ニュートン・ラグランジュの記述と同じ式に戻る。','Recover the Newtonian and Lagrangian spring equation.')]],
   conclusion:B('表現が変わっても、同じ運動の予測が得られます。ここが重要な接続です。','The formulation changes, but the predicted physical motion is the same.')},
  misconception:B('ハミルトニアンを単なる「エネルギー公式」として暗記せず、どの変数で状態を表し、どの変換を行ったかを追う。','Do not memorize Hamiltonian as just an energy formula. Track the variables and the transformation defining it.'),
  revisit:B('最初に学んだ単振動が、力・エネルギー・作用・位相空間という複数の見方で同じ現象を示す典型例になります。','The original spring lesson now connects Newtonian forces, energies, action, and phase-space evolution as descriptions of the same motion.')
 },
 coupled:{
  intuition:[
   B('二つの振り子やばねの物体をつなぐと、片方を動かすだけでももう片方が動き始めます。しかし二つが同じ方向へ動く場合と、互いに反対向きへ動く場合を考えると、運動がずっと整理しやすくなります。','Two connected oscillators influence one another. Yet their motion becomes simpler when we examine coordinated patterns: moving together or moving in opposite directions.'),
   B('複雑な運動を単純な振動の重ね合わせとして見ることができます。この考えは、音の振動、結晶の振動、量子力学の状態の分解などにもつながります。ただし非線形系では単純な重ね合わせは一般に成り立ちません。','Complicated linear motion can be decomposed into simpler collective oscillations. This viewpoint extends to acoustics and material vibrations, but superposition is generally not exact in nonlinear systems.')
  ],
  vocabulary:[
   [B('自由度','Degree of freedom'),B('系の状態を決めるために必要な独立変数の数。二つの質点なら、この例では二つの変位が自由度になる。','Number of independent coordinates needed to describe the configuration; here the two displacements are independent.')],
   [B('連成','Coupling'),B('一つの物体の変位が、もう一つの物体の力や運動に影響すること。','An interaction making the motion of one oscillator depend on the other.')],
   [B('固有モード','Normal mode'),B('各物体が一定の振幅比と共通の振動数で動く、独立な振動パターン。','A collective pattern with fixed amplitude ratios and a shared oscillation frequency.')],
   [B('固有振動数','Natural / eigenfrequency'),B('系の質量と結合の強さなどで決まる、各固有モードの振動数。','Oscillation frequency associated with each normal mode, determined by masses and couplings.')]
  ],
  logic:[
   B('同じ質量mの2物体が、両端の壁とばね定数kのばねでつながれ、物体同士もばね定数kcで結ばれているとします。右向きを正にして、それぞれの変位x₁、x₂を定義します。','Take two equal masses m, attached to outer springs k and a central coupling spring kc. Define rightward displacements x₁ and x₂.'),
   B('中央のばねの伸びはx₂−x₁に比例するため、各物体の力は互いの変位に依存します。連立方程式をそのまま解くこともできますが、対称性に注目すると簡単になります。','The extension of the middle spring depends on x₂−x₁, so the equations are coupled. Rather than directly solving them, exploit the symmetry.'),
   B('x₁=x₂なら中央ばねは伸びず、二つは単独のばねのようにω²=k/mで振動します。一方、x₁=−x₂なら中央ばねが強く伸縮し、ω²=(k+2kc)/mになります。','If x₁=x₂, the middle spring is unstretched and ω²=k/m. If x₁=−x₂, the coupling spring contributes strongly and ω²=(k+2kc)/m.'),
   B('線形系では一般の運動をこれらの固有モードの重ね合わせで表せます。「二つの質点がそれぞれ勝手に振動する」のではなく、系全体の協調した動きとして理解します。','For a linear system, arbitrary motion is a superposition of normal modes. They describe collective patterns of the complete system rather than independent behavior of each object.')
  ],
  example:{problem:B('m=2 kg、外側のばねk=8 N/m、中央のばねkc=3 N/m。二つの固有角振動数は？','For m=2 kg, outer spring k=8 N/m and coupling spring kc=3 N/m, find both normal-mode angular frequencies.'),
   steps:[
    ['\\omega_{+}=\\sqrt{\\frac{k}{m}}=\\sqrt{\\frac{8}{2}}=2\\ \\mathrm{rad/s}',B('同位相では中央ばねが伸縮しない。','For in-phase motion the coupling spring is unstretched.')],
    ['\\omega_{-}=\\sqrt{\\frac{k+2k_c}{m}}',B('逆位相では中央ばねが2つの質点の相対変位に応答する。','In the opposite-phase mode the coupling spring responds to the relative displacement.')],
    ['\\omega_{-}=\\sqrt{\\frac{8+6}{2}}=\\sqrt7\\simeq2.65\\ \\mathrm{rad/s}',B('中央ばねの影響で逆位相の方が振動が速い。','The coupling raises the opposite-phase frequency.')]],
   conclusion:B('同位相2 rad/s、逆位相約2.65 rad/s。単なる数値より、中央ばねが伸びるかどうかが重要です。','The two values are 2 rad/s and about 2.65 rad/s. The important insight is whether the coupling spring stretches.')},
  misconception:B('複雑な運動を固有モードで分解できるのは線形系での重要な性質。非線形やカオスの運動まで同じ単純な重ね合わせで説明できるとは限らない。','Superposition of independent normal modes depends on linearity. It cannot be naively extended to nonlinear or chaotic dynamics.'),
  revisit:B('一つのばねで学んだ角振動数を、系全体の対称性と相互作用の観点から捉え直せます。','The original spring frequency gains new meaning as a property of collective modes and symmetry in a coupled system.')
 }
};
