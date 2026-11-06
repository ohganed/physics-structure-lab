/* Curated bilingual conceptual graph. Each link states a useful bridge and a boundary. */
export const connectionNodes = [
  {
    "id": "position",
    "ja": "位置・変位",
    "en": "Position & displacement",
    "chapter": "force",
    "jaQuestion": "位置を決めるには何が必要？",
    "enQuestion": "What must be specified to assign a position?"
  },
  {
    "id": "reference-frame",
    "ja": "座標系・観測者",
    "en": "Reference frames",
    "chapter": "noninertial",
    "jaQuestion": "誰から見た運動なのか？",
    "enQuestion": "Whose description of the motion?"
  },
  {
    "id": "velocity",
    "ja": "速度",
    "en": "Velocity",
    "chapter": "force",
    "jaQuestion": "速さだけでなく向きが必要なのはなぜ？",
    "enQuestion": "Why do we need direction as well as speed?"
  },
  {
    "id": "acceleration",
    "ja": "加速度",
    "en": "Acceleration",
    "chapter": "force",
    "jaQuestion": "速度がどう変化するとき加速度がある？",
    "enQuestion": "What counts as a change in velocity?"
  },
  {
    "id": "vectors",
    "ja": "ベクトルと成分",
    "en": "Vectors and components",
    "chapter": "force",
    "jaQuestion": "一つの運動を独立な方向に分けられる？",
    "enQuestion": "How can one motion be resolved into components?"
  },
  {
    "id": "calculus",
    "ja": "極限・微分・積分",
    "en": "Limits, derivatives & integrals",
    "chapter": "force",
    "jaQuestion": "瞬間の変化をどう定義する？",
    "enQuestion": "How can an instantaneous rate be defined?"
  },
  {
    "id": "force",
    "ja": "力と相互作用",
    "en": "Forces and interactions",
    "chapter": "force",
    "jaQuestion": "力を受けるのはどの物体？",
    "enQuestion": "Which object experiences each force?"
  },
  {
    "id": "friction",
    "ja": "摩擦と接触",
    "en": "Friction and contact",
    "chapter": "friction",
    "jaQuestion": "動いていない物体にも摩擦がある？",
    "enQuestion": "Can friction act on a stationary object?"
  },
  {
    "id": "energy",
    "ja": "仕事・エネルギー",
    "en": "Work and energy",
    "chapter": "energy",
    "jaQuestion": "途中の運動を追わずに前後の状態を結べる？",
    "enQuestion": "Can we compare states without following every instant?"
  },
  {
    "id": "momentum",
    "ja": "運動量・力積",
    "en": "Momentum and impulse",
    "chapter": "momentum",
    "jaQuestion": "衝突で本当に保存されるのは何？",
    "enQuestion": "What is conserved during a collision?"
  },
  {
    "id": "conservation",
    "ja": "保存則と系",
    "en": "Conservation laws and systems",
    "chapter": "energy",
    "jaQuestion": "何を系に選ぶと保存が成立する？",
    "enQuestion": "Which system boundary makes a conservation law useful?"
  },
  {
    "id": "circular",
    "ja": "円運動・向心加速度",
    "en": "Circular motion & centripetal acceleration",
    "chapter": "circular",
    "jaQuestion": "速さ一定でも加速度はある？",
    "enQuestion": "Can acceleration exist at constant speed?"
  },
  {
    "id": "oscillation",
    "ja": "単振動",
    "en": "Simple harmonic motion",
    "chapter": "oscillation",
    "jaQuestion": "同じ状態に戻る運動をどう表す？",
    "enQuestion": "How can repeated motion be described?"
  },
  {
    "id": "gravity",
    "ja": "重力場と軌道",
    "en": "Gravitational fields and orbits",
    "chapter": "gravitation",
    "jaQuestion": "遠隔作用と円運動はどう結び付く？",
    "enQuestion": "How does gravity produce orbital motion?"
  },
  {
    "id": "torque",
    "ja": "トルク・角運動量",
    "en": "Torque and angular momentum",
    "chapter": "rotation",
    "jaQuestion": "力を加える位置が重要なのはなぜ？",
    "enQuestion": "Why does the point of application matter?"
  },
  {
    "id": "noninertial",
    "ja": "非慣性系と見かけの力",
    "en": "Non-inertial frames & apparent forces",
    "chapter": "noninertial",
    "jaQuestion": "観測者が加速すると何が変わる？",
    "enQuestion": "What changes in an accelerating reference frame?"
  },
  {
    "id": "lagrange",
    "ja": "一般化座標・作用",
    "en": "Generalized coordinates & action",
    "chapter": "lagrange",
    "jaQuestion": "拘束を座標の選択で扱える？",
    "enQuestion": "Can constraints be built into the coordinates?"
  },
  {
    "id": "hamilton",
    "ja": "位相空間・正準運動量",
    "en": "Phase space & canonical momentum",
    "chapter": "hamilton",
    "jaQuestion": "状態を位置と運動量の組で表すと？",
    "enQuestion": "What changes when the state uses position and momentum?"
  },
  {
    "id": "symmetry",
    "ja": "対称性と保存",
    "en": "Symmetry and conservation",
    "chapter": "lagrange",
    "jaQuestion": "何が変わらないとき保存量が生まれる？",
    "enQuestion": "How do continuous symmetries relate to conserved quantities?"
  },
  {
    "id": "coupled",
    "ja": "連成振動・固有モード",
    "en": "Coupled oscillations & normal modes",
    "chapter": "coupled",
    "jaQuestion": "複数の運動を独立な形に分けられる？",
    "enQuestion": "Can coupled motion be decomposed into modes?"
  }
];
export const connectionEdges = [
  {
    "from": "position",
    "to": "velocity",
    "type": "builds",
    "ja": "位置の差を時間と組み合わせると平均速度を定義できる。",
    "en": "A change in position divided by elapsed time defines average velocity.",
    "limitJa": "道のり÷時間は平均の速さであり、変位÷時間とは異なる。",
    "limitEn": "Path length over time is average speed, not average velocity."
  },
  {
    "from": "reference-frame",
    "to": "position",
    "type": "requires",
    "ja": "位置は基準点と座標軸を選んで初めて数値になる。",
    "en": "Position becomes a numerical quantity only after an origin and coordinate axes are selected.",
    "limitJa": "座標の値は基準の取り方で変わる。",
    "limitEn": "Coordinate values depend on the chosen origin."
  },
  {
    "from": "velocity",
    "to": "acceleration",
    "type": "builds",
    "ja": "速度ベクトルの変化を時間で比較するため加速度が定義される。",
    "en": "Acceleration compares changes in the velocity vector over time.",
    "limitJa": "速さの変化だけでなく向きの変化も数える。",
    "limitEn": "Changes in direction count even if speed is constant."
  },
  {
    "from": "vectors",
    "to": "velocity",
    "type": "requires",
    "ja": "速度は大きさと向きを持つ量として整理できる。",
    "en": "Velocity is a vector with magnitude and direction.",
    "limitJa": "1次元では符号が向きを表すが、2次元では成分が必要。",
    "limitEn": "A sign can represent direction in one dimension; higher dimensions require components."
  },
  {
    "from": "calculus",
    "to": "velocity",
    "type": "deepens",
    "ja": "時間幅を0へ近づけることで瞬間速度を定義する。",
    "en": "Taking the elapsed-time interval toward zero defines instantaneous velocity.",
    "limitJa": "平均速度と瞬間速度は同じ概念ではない。",
    "limitEn": "Average velocity over a finite interval differs from instantaneous velocity."
  },
  {
    "from": "calculus",
    "to": "acceleration",
    "type": "deepens",
    "ja": "速度の時間微分を加速度と呼び、積分で速度変化を復元する。",
    "en": "Acceleration is the time derivative of velocity; integration reconstructs its change.",
    "limitJa": "加速度が一定のときだけ v=v₀+at と簡単になる。",
    "limitEn": "The simple relation v=v₀+at requires constant acceleration."
  },
  {
    "from": "acceleration",
    "to": "force",
    "type": "reframes",
    "ja": "加速度という運動学的な量を、相互作用の合力へ結び付けるのが運動法則。",
    "en": "Newton's law relates kinematic acceleration to net interactions.",
    "limitJa": "加速度の定義だけから運動法則は導けない。",
    "limitEn": "Newton's law is not implied by the definition of acceleration."
  },
  {
    "from": "force",
    "to": "friction",
    "type": "applies",
    "ja": "摩擦は物体間の接触相互作用の一つで、どちらに作用するかを特定できる。",
    "en": "Friction is a contact interaction; the receiving object must be identified.",
    "limitJa": "静止摩擦の大きさを常に μsN とするのは誤り。",
    "limitEn": "Static friction need not equal its maximum μsN."
  },
  {
    "from": "force",
    "to": "momentum",
    "type": "deepens",
    "ja": "合力を時間で積み重ねると運動量の変化に結び付く。",
    "en": "Integrating net external force over time gives a momentum change.",
    "limitJa": "力積は力そのものではなく時間積分。",
    "limitEn": "Impulse is not a force; it is an integral of force over time."
  },
  {
    "from": "force",
    "to": "energy",
    "type": "deepens",
    "ja": "力を移動経路に沿って積み重ねると仕事になる。",
    "en": "Integrating force along displacement gives work.",
    "limitJa": "力があるだけで必ず仕事をするわけではない。",
    "limitEn": "A force need not perform work on a particular motion."
  },
  {
    "from": "energy",
    "to": "conservation",
    "type": "reframes",
    "ja": "仕事によるエネルギーの移動を追うと、保存する条件を問い直せる。",
    "en": "Tracking transfers of energy clarifies when mechanical energy is conserved.",
    "limitJa": "散逸があっても全エネルギー保存と力学的エネルギー保存は区別する。",
    "limitEn": "Total energy conservation is not the same as conservation of mechanical energy."
  },
  {
    "from": "momentum",
    "to": "conservation",
    "type": "reframes",
    "ja": "外力の力積が無視できる系では総運動量が保存する。",
    "en": "Total momentum is conserved when net external impulse vanishes.",
    "limitJa": "非弾性衝突では一般に運動エネルギーは保存しない。",
    "limitEn": "Kinetic energy need not be conserved in an inelastic collision."
  },
  {
    "from": "energy",
    "to": "momentum",
    "type": "contrasts",
    "ja": "衝突では運動量と運動エネルギーを別々の条件で評価する。",
    "en": "Collision problems separate momentum conservation from kinetic-energy conservation.",
    "limitJa": "一方が保存しても他方が保存するとは限らない。",
    "limitEn": "Conserving one does not automatically conserve the other."
  },
  {
    "from": "velocity",
    "to": "circular",
    "type": "reframes",
    "ja": "円運動では速さ一定でも速度の向きが連続的に変わる。",
    "en": "Circular motion changes velocity direction even at constant speed.",
    "limitJa": "速度ベクトルが一定という意味ではない。",
    "limitEn": "Constant speed does not mean constant velocity."
  },
  {
    "from": "acceleration",
    "to": "circular",
    "type": "applies",
    "ja": "円運動の中心向き加速度は速度の向きの変化から導かれる。",
    "en": "Centripetal acceleration follows from the changing direction of velocity.",
    "limitJa": "向心力という独立した力を追加するわけではない。",
    "limitEn": "Centripetal force is not an additional kind of interaction."
  },
  {
    "from": "vectors",
    "to": "circular",
    "type": "applies",
    "ja": "位置ベクトルを sin と cos で表すと加速度の向きを導ける。",
    "en": "Differentiating vector components of circular motion reveals inward acceleration.",
    "limitJa": "極座標では基底ベクトル自身も位置で変化する。",
    "limitEn": "In polar coordinates the basis directions also change."
  },
  {
    "from": "gravity",
    "to": "circular",
    "type": "applies",
    "ja": "重力が円軌道に必要な中心向きの合力を与える。",
    "en": "Gravity provides the inward resultant for a circular orbit.",
    "limitJa": "すべての重力運動が円軌道になるわけではない。",
    "limitEn": "Not every gravitational trajectory is circular."
  },
  {
    "from": "oscillation",
    "to": "energy",
    "type": "reframes",
    "ja": "単振動では運動エネルギーと位置エネルギーの間を行き来する。",
    "en": "An undamped harmonic oscillator exchanges kinetic and potential energy.",
    "limitJa": "抵抗があると力学的エネルギーが減る。",
    "limitEn": "Mechanical energy decreases when damping dissipates energy."
  },
  {
    "from": "oscillation",
    "to": "circular",
    "type": "analogizes",
    "ja": "単振動は等速円運動の1軸への射影として表せる。",
    "en": "Harmonic motion can be represented as a projection of uniform circular motion.",
    "limitJa": "これは数学的対応であり、ばねが実際に円運動する意味ではない。",
    "limitEn": "This is a mathematical correspondence, not an actual circular path of a spring."
  },
  {
    "from": "torque",
    "to": "force",
    "type": "analogizes",
    "ja": "トルクは力の回転への効果を扱い、質量に対応する量として慣性モーメントが現れる。",
    "en": "Torque describes rotational effects of force, with moment of inertia playing a related role to mass.",
    "limitJa": "τ=Iα は固定軸・一定Iなどの条件が必要。",
    "limitEn": "The simple τ=Iα equation needs fixed-axis and constant-I assumptions."
  },
  {
    "from": "torque",
    "to": "momentum",
    "type": "reframes",
    "ja": "位置と運動量の外積が角運動量となり、その時間変化がトルクになる。",
    "en": "Angular momentum is position crossed with momentum; its rate of change is torque.",
    "limitJa": "角運動量は基準点や軸の取り方にも依存する。",
    "limitEn": "Angular momentum depends on the reference origin or axis."
  },
  {
    "from": "reference-frame",
    "to": "noninertial",
    "type": "deepens",
    "ja": "加速する座標系では同じ運動を記述するのに見かけの力の項が必要になる。",
    "en": "In an accelerating frame, additional apparent-force terms enter the equations.",
    "limitJa": "見かけの力は新しい物体間相互作用を意味しない。",
    "limitEn": "An apparent force is not a new physical interaction."
  },
  {
    "from": "vectors",
    "to": "lagrange",
    "type": "reframes",
    "ja": "拘束のある運動では独立な一般化座標を使うと未知数を減らせる。",
    "en": "Generalized coordinates describe constrained motion with fewer independent variables.",
    "limitJa": "任意の一般化座標が空間ベクトルの成分とは限らない。",
    "limitEn": "Generalized coordinates need not be Cartesian vector components."
  },
  {
    "from": "force",
    "to": "lagrange",
    "type": "reframes",
    "ja": "同じ運動を力の成分ごとでなく、エネルギーと作用から記述できる。",
    "en": "The same dynamics may be formulated through a Lagrangian rather than individual force components.",
    "limitJa": "散逸力や非理想拘束では追加の取り扱いが必要。",
    "limitEn": "Dissipation and non-ideal constraints require additional treatment."
  },
  {
    "from": "lagrange",
    "to": "hamilton",
    "type": "builds",
    "ja": "正準運動量を導入し、速度を運動量で置き換えると位相空間の方程式を得る。",
    "en": "A Legendre transform introduces canonical momentum and a phase-space formulation.",
    "limitJa": "正則性が必要で、正準運動量は常に mv とは限らない。",
    "limitEn": "The transformation requires regularity; canonical momentum need not equal mv."
  },
  {
    "from": "momentum",
    "to": "symmetry",
    "type": "deepens",
    "ja": "連続な空間並進対称性が成り立つ系では運動量保存とつながる。",
    "en": "Continuous spatial translation symmetry is linked to conservation of momentum.",
    "limitJa": "適切な閉じた系・作用の対称性などの条件を確認する。",
    "limitEn": "Check the symmetry of the action and the system assumptions."
  },
  {
    "from": "energy",
    "to": "symmetry",
    "type": "deepens",
    "ja": "時間並進に関する対称性は保存されるエネルギー量と結び付く。",
    "en": "Time-translation symmetry is related to a conserved energy quantity.",
    "limitJa": "時間依存外力がある系などでは単純な保存則にならない。",
    "limitEn": "Time-dependent forcing can invalidate the simple conservation statement."
  },
  {
    "from": "lagrange",
    "to": "symmetry",
    "type": "deepens",
    "ja": "ラグランジアンの連続対称性から保存量を結び付けるのがネーターの定理。",
    "en": "Noether's theorem connects continuous action symmetries with conserved quantities.",
    "limitJa": "境界条件・対称変換の仮定を省略できない。",
    "limitEn": "Boundary conditions and symmetry assumptions matter."
  },
  {
    "from": "oscillation",
    "to": "coupled",
    "type": "builds",
    "ja": "二つの振動子がつながると同位相・逆位相などの独立な振動パターンが現れる。",
    "en": "Coupled oscillators exhibit normal modes such as in-phase and out-of-phase motion.",
    "limitJa": "独立した固有モードへ分解できるのは、線形化や小振幅の近似が成り立つ範囲である。",
    "limitEn": "Normal-mode decomposition assumes an appropriate linear regime."
  },
  {
    "from": "coupled",
    "to": "hamilton",
    "type": "reframes",
    "ja": "複数自由度の振動を位置と運動量の位相空間で記述できる。",
    "en": "Multidegree-of-freedom oscillations can be studied in phase space.",
    "limitJa": "線形固有モードだけでは非線形・カオスを説明できない。",
    "limitEn": "Linear normal modes alone do not explain nonlinear chaos."
  },
  {
    "from": "calculus",
    "to": "energy",
    "type": "builds",
    "ja": "経路上で力を積分する仕事と、運動エネルギーの変化が対応する。",
    "en": "A line integral of force gives work, equal to the change of kinetic energy.",
    "limitJa": "積分は経路や系の条件に依存する。",
    "limitEn": "The work integral depends on the path and system assumptions."
  },
  {
    "from": "friction",
    "to": "conservation",
    "type": "contrasts",
    "ja": "摩擦が作用すると、力学的エネルギーの変化が熱などのエネルギー移動として現れる。",
    "en": "Friction converts mechanical energy into internal energy and other forms.",
    "limitJa": "全エネルギーが消えるのではない。",
    "limitEn": "Total energy is not destroyed."
  },
  {
    "from": "reference-frame",
    "to": "velocity",
    "type": "reframes",
    "ja": "同じ運動でも観測者が異なれば測る速度が変わる。",
    "en": "Observers in different inertial frames generally measure different velocities.",
    "limitJa": "ガリレイ変換が成り立つ低速領域を想定する。",
    "limitEn": "Galilean transformations apply in the non-relativistic regime."
  },
  {
    "from": "gravity",
    "to": "energy",
    "type": "deepens",
    "ja": "重力場のポテンシャルから、位置によるエネルギー変化を考えられる。",
    "en": "Gravitational potential converts position dependence into energy changes.",
    "limitJa": "地表近くのmghは逆二乗則に基づく近似。",
    "limitEn": "The familiar mgh is an approximation near Earth's surface."
  }
];
export const connectionTypes = {
  "builds": [
    "組み立てる",
    "Builds on"
  ],
  "requires": [
    "前提となる",
    "Provides a prerequisite"
  ],
  "deepens": [
    "後から深まる",
    "Deepens later"
  ],
  "reframes": [
    "捉え直す",
    "Reframes"
  ],
  "applies": [
    "応用する",
    "Applies"
  ],
  "contrasts": [
    "違いを見抜く",
    "Contrasts"
  ],
  "analogizes": [
    "類推でつながる",
    "Connects by analogy"
  ]
};
export function nodeById(id){return connectionNodes.find(n=>n.id===id)||null;}
export function relatedEdges(id){return connectionEdges.filter(e=>e.from===id||e.to===id);}
export function chapterConnectionNodes(chapterKey){return connectionNodes.filter(n=>n.chapter===chapterKey);}
