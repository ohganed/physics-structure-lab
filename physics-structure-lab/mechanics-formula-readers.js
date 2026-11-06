/* A bilingual term-by-term formula reader, model assumptions, units and limiting cases. */
export const formulaReaders = {
  "force": {
    "expression": "\\sum F_x=ma_x",
    "meaning": [
      "力が速度を直接決めるのではなく、合力が速度の変化率を決める。",
      "Net force determines the rate of change of velocity, not velocity itself."
    ],
    "symbols": [
      [
        "F_x",
        "水平方向の合力",
        "Net force along x",
        "N"
      ],
      [
        "m",
        "物体の質量",
        "Mass of the body",
        "kg"
      ],
      [
        "a_x",
        "水平方向の加速度",
        "Acceleration along x",
        "m/s²"
      ]
    ],
    "unit": [
      "1 N=1 kg·m/s²。式の左右が同じ単位になる。",
      "1 N equals 1 kg·m/s²; both sides have force units."
    ],
    "limit": [
      "合力を0にすると加速度は0。しかし速度が0とは限らない。",
      "Setting net force to zero yields zero acceleration, not necessarily zero velocity."
    ],
    "scope": [
      "質量一定の物体を慣性系から見る場合。速度の向きと力の向きを混同しない。",
      "Constant-mass body in an inertial frame. Do not confuse force direction with velocity direction."
    ]
  },
  "friction": {
    "expression": "|f_s|\\leq\\mu_sN",
    "meaning": [
      "静止摩擦には必要に応じた大きさがあり、その最大値に限界がある。",
      "Static friction adjusts to demand but cannot exceed its modeled maximum."
    ],
    "symbols": [
      [
        "f_s",
        "静止摩擦力",
        "Static friction force",
        "N"
      ],
      [
        "\\mu_s",
        "静止摩擦係数",
        "Coefficient of static friction",
        "無次元 / dimensionless"
      ],
      [
        "N",
        "垂直抗力",
        "Normal force",
        "N"
      ]
    ],
    "unit": [
      "摩擦係数は無次元。μsNは力の単位Nになる。",
      "Friction coefficient is dimensionless; μsN has units of force."
    ],
    "limit": [
      "斜面が水平で他に水平力がなければ、必要な静止摩擦は0。μsNを常に代入しない。",
      "On a level surface with no horizontal force, needed static friction is zero. It is not always equal to μsN."
    ],
    "scope": [
      "接触を維持し、単純なクーロン摩擦モデルが使える範囲。",
      "Contact is maintained and a simple Coulomb-friction approximation applies."
    ]
  },
  "energy": {
    "expression": "\\Delta(K+U)=W_{\\mathrm{nc}}",
    "meaning": [
      "保存力による仕事を位置エネルギーの変化として扱い、それ以外の力がどれだけ力学的エネルギーを変えたか表す。",
      "Conservative forces are represented via potential energy, while work of non-conservative forces changes the mechanical-energy sum."
    ],
    "symbols": [
      [
        "K",
        "運動エネルギー",
        "Kinetic energy",
        "J"
      ],
      [
        "U",
        "位置エネルギー",
        "Potential energy",
        "J"
      ],
      [
        "W_{\\mathrm{nc}}",
        "非保存力の仕事",
        "Work done by non-conservative forces",
        "J"
      ]
    ],
    "unit": [
      "K、U、仕事はすべてジュール。1 J=1 N·m。",
      "K, U and work are all joules; 1 J=1 N·m."
    ],
    "limit": [
      "非保存力の仕事が0ならK+Uは一定。摩擦が仕事をするとK+Uは変わることがある。",
      "If non-conservative work is zero, K+U is constant; frictional work can change that sum."
    ],
    "scope": [
      "物体系の選び方、外力の仕事、時間変化する拘束などに注意。",
      "Pay attention to system boundaries, external work, and moving constraints."
    ]
  },
  "momentum": {
    "expression": "F\\Delta t=mv-mv_0=\\Delta p",
    "meaning": [
      "一定の合力の時間的な積み重ね（グラフの符号付き面積）を考えると、それは最初と最後のmvの差になる。そこでmvを運動量pと名付ける。",
      "Accumulating constant net force over time (the signed graph area) yields the difference between final and initial mv. That motivates naming mv as momentum p."
    ],
    "symbols": [
      [
        "F",
        "一つの物体に作用する、選んだ軸方向の合力",
        "Net force on the chosen body along the selected axis",
        "N"
      ],
      [
        "\\Delta t",
        "合力が作用する時間の長さ",
        "Duration of the net force",
        "s"
      ],
      [
        "m",
        "物体の質量（一定）",
        "Constant mass of the body",
        "kg"
      ],
      [
        "v_0",
        "最初の速度（符号付き）",
        "Initial signed velocity",
        "m/s"
      ],
      [
        "v",
        "最後の速度（符号付き）",
        "Final signed velocity",
        "m/s"
      ],
      [
        "\\Delta p",
        "運動量p=mvの終値と初値の差",
        "Final minus initial momentum p=mv",
        "kg·m/s"
      ]
    ],
    "unit": [
      "力積FΔtの単位はN·sで、kg·m/sと等しい。右辺mv−mv₀と単位が一致する。",
      "Impulse FΔt has units N·s, equal to kg·m/s, matching mv−mv₀."
    ],
    "limit": [
      "作用時間が0に近ければ、有限の力で生じる力積も0に近づく。力の向きを逆にすれば力積も逆符号になり、運動量の変化の向きが反転する。",
      "With finite force, an interval shrinking to zero gives vanishing impulse. Reversing force reverses the signed area and the change in momentum."
    ],
    "scope": [
      "この長方形の式は質量・合力が一定の一次元運動。変化する力なら符号付き面積を積分する。二物体の総運動量保存は外力積が無視できる場合に限る。",
      "The rectangle formula assumes one-dimensional motion with constant mass and net force. A changing force requires signed integration; total momentum is conserved only if external impulse is negligible."
    ]
  },
  "circular": {
    "expression": "a_c=\\frac{v^2}{r}",
    "meaning": [
      "速度の大きさが変わらなくても、円周上で向きが変わることによる加速度。",
      "Even at constant speed, the changing direction of the velocity vector creates inward acceleration."
    ],
    "symbols": [
      [
        "a_c",
        "中心向き加速度の大きさ",
        "Magnitude of inward acceleration",
        "m/s²"
      ],
      [
        "v",
        "円周上の速さ",
        "Speed along the circle",
        "m/s"
      ],
      [
        "r",
        "円の半径",
        "Radius of the circle",
        "m"
      ]
    ],
    "unit": [
      "(m/s)²÷m=m/s²。加速度の単位になる。",
      "(m/s)² divided by m gives m/s²."
    ],
    "limit": [
      "速さを2倍にすればaは4倍。半径を2倍にすればaは半分。",
      "Doubling speed quadruples acceleration; doubling radius halves it."
    ],
    "scope": [
      "半径と速さが一定の円運動。向心力は別の新しい力の名前ではない。",
      "Uniform circular motion. Centripetal force is not an additional fundamental force."
    ]
  },
  "oscillation": {
    "expression": "T=2\\pi\\sqrt{\\frac{m}{k}}",
    "meaning": [
      "質量とばねの強さによって、往復運動が一巡する時間が決まる。",
      "Mass and spring stiffness determine the time for one complete ideal oscillation."
    ],
    "symbols": [
      [
        "T",
        "振動周期",
        "Oscillation period",
        "s"
      ],
      [
        "m",
        "質点の質量",
        "Oscillating mass",
        "kg"
      ],
      [
        "k",
        "ばね定数",
        "Spring stiffness",
        "N/m"
      ]
    ],
    "unit": [
      "質量の単位kgをばね定数の単位N/mで割るとs²になり、平方根を取ると周期の単位s（秒）が得られる。",
      "m/k has units s², so its square root has units of seconds."
    ],
    "limit": [
      "質量4倍で周期2倍。振幅を変えても理想ばねの周期は同じ。",
      "Four times the mass doubles the period; amplitude does not change the ideal period."
    ],
    "scope": [
      "線形ばね・減衰なし・定数mとk。実際の大振幅運動ではずれる場合がある。",
      "Linear spring, no damping, constant m and k; real large-amplitude behavior may differ."
    ]
  },
  "gravitation": {
    "expression": "v=\\sqrt{\\frac{GM}{r}}",
    "meaning": [
      "地球などの中心天体の重力が、円軌道の向心加速度を与えるときの速さ。",
      "Circular orbital speed when the central body's gravity provides the needed inward acceleration."
    ],
    "symbols": [
      [
        "v",
        "円軌道の速さ",
        "Circular orbital speed",
        "m/s"
      ],
      [
        "GM",
        "中心天体の重力パラメータ",
        "Central gravitational parameter",
        "m³/s²"
      ],
      [
        "r",
        "中心天体の中心からの距離",
        "Distance from the central body's center",
        "m"
      ]
    ],
    "unit": [
      "GM/rの単位はm²/s²、その平方根がm/s。",
      "GM/r has units m²/s² and its square root has speed units."
    ],
    "limit": [
      "同じ中心天体では、円軌道の半径が4倍なら必要な速さは半分。",
      "Around the same central body, quadrupling circular orbital radius halves required speed."
    ],
    "scope": [
      "中心天体の外の球対称重力場・円軌道。rは地表からの高度ではない。",
      "Spherically symmetric central field, circular orbit. r is not altitude above the surface."
    ]
  },
  "rotation": {
    "expression": "\\tau=rF\\sin\\varphi",
    "meaning": [
      "力の大きさだけでなく、作用点の位置と押す向きが回転の効果を決める。",
      "Rotational effectiveness depends on force, point of application, and angle."
    ],
    "symbols": [
      [
        "\\tau",
        "位置ベクトルと力の外積の大きさ",
        "Magnitude of the force–lever-arm cross product",
        "N·m"
      ],
      [
        "r",
        "軸から作用点への腕の長さ",
        "Lever-arm distance",
        "m"
      ],
      [
        "\\varphi",
        "腕と力の間の角度",
        "Angle between lever arm and force",
        "rad or degrees"
      ]
    ],
    "unit": [
      "N·mはトルクの単位。ジュールと同じ基本次元だが異なる物理量。",
      "N·m is used for torque; sharing base dimensions with joules does not make torque energy."
    ],
    "limit": [
      "腕に平行に押せばsin0=0でトルクは0。直角に押せば最大。",
      "A force parallel to the lever arm gives zero torque; a perpendicular push maximizes magnitude."
    ],
    "scope": [
      "式は外積によるトルクの大きさ。特定の軸まわりのトルクは、さらにその軸方向の成分を取る。",
      "This gives cross-product magnitude. Torque about a chosen axis is the component along that axis."
    ]
  },
  "noninertial": {
    "expression": "\\boldsymbol F_{\\mathrm{app}}=-m\\boldsymbol A",
    "meaning": [
      "加速する座標系から見た式に現れる補正項。別の物体が押した力ではない。",
      "A correction in the accelerating observer's equations, not an interaction exerted by another body."
    ],
    "symbols": [
      [
        "\\boldsymbol F_{\\mathrm{app}}",
        "並進加速に由来する見かけの力",
        "Translational apparent force",
        "N"
      ],
      [
        "m",
        "観察対象の質量",
        "Mass of the observed body",
        "kg"
      ],
      [
        "\\boldsymbol A",
        "観測者の座標系の加速度",
        "Acceleration of the observer's frame",
        "m/s²"
      ]
    ],
    "unit": [
      "kg·m/s²=N。実在する力の項と同じ単位だから式に足せる。",
      "kg·m/s² equals N, allowing it to appear in a force balance."
    ],
    "limit": [
      "座標系が加速しなければこの補正項は0。回転座標系ではさらに別の項が必要。",
      "For a non-accelerating frame the translational term vanishes; rotating frames add other terms."
    ],
    "scope": [
      "回転しない並進加速座標系。遠心力・コリオリ力まではこの式に含めていない。",
      "Applies to a non-rotating translating frame, not a complete rotating-frame treatment."
    ]
  },
  "lagrange": {
    "expression": "\\frac{d}{dt}\\frac{\\partial L}{\\partial\\dot q}-\\frac{\\partial L}{\\partial q}=0",
    "meaning": [
      "エネルギーから作った関数の座標と速度への依存から、運動方程式を得る。",
      "Construct the equation of motion from how the Lagrangian depends on coordinate and velocity."
    ],
    "symbols": [
      [
        "L",
        "ラグランジアン（例：K−U）",
        "Lagrangian (e.g. K−U)",
        "J"
      ],
      [
        "q",
        "一般化座標（この例では位置）",
        "Generalized coordinate (here, position)",
        "m (example)"
      ],
      [
        "\\dot q",
        "qの時間変化率",
        "Time derivative of q",
        "m/s (example)"
      ]
    ],
    "unit": [
      "ばねの例では両項とも力の単位N。一般化座標の種類が違えば単位も変わる。",
      "For a spring coordinate q in meters both terms have force units; other coordinates can change those units."
    ],
    "limit": [
      "同じばねならニュートンの式 m q̈+kq=0へ戻る。式の形だけでなく仮定を比較する。",
      "For the spring, it reduces to m q̈+kq=0. Compare assumptions as well as the final result."
    ],
    "scope": [
      "通常のホロノミック拘束・適切な作用原理の下。一般の散逸系には追加の扱いが必要。",
      "Under suitable holonomic constraints and an action principle; generic dissipative systems need extra treatment."
    ]
  },
  "hamilton": {
    "expression": "\\dot q=\\frac{\\partial H}{\\partial p},\\qquad\\dot p=-\\frac{\\partial H}{\\partial q}",
    "meaning": [
      "位置と正準運動量をひと組の状態として、それぞれの時間変化を一階微分で表す。",
      "Treat position and canonical momentum as a state; first-order equations describe how each evolves."
    ],
    "symbols": [
      [
        "q",
        "一般化座標（この例では位置）",
        "Generalized coordinate (position in this example)",
        "m (example)"
      ],
      [
        "p",
        "正準運動量",
        "Canonical momentum",
        "kg·m/s (example)"
      ],
      [
        "H",
        "ハミルトニアン",
        "Hamiltonian",
        "J (example)"
      ]
    ],
    "unit": [
      "∂H/∂pは速度m/s、∂H/∂qは力Nの次元になる（ばねの場合）。",
      "For a spring, ∂H/∂p has velocity units and ∂H/∂q has force units."
    ],
    "limit": [
      "ばねのH=p²/(2m)+kq²/2から、もとのm q̈+kq=0を再構成できる。",
      "For spring H=p²/(2m)+kq²/2, combine the equations to recover m q̈+kq=0."
    ],
    "scope": [
      "適切な正準座標と正則なルジャンドル変換を仮定。pが常にmvとは限らない。",
      "Requires canonical variables and a regular Legendre transform; p need not always be mv."
    ]
  },
  "coupled": {
    "expression": "\\omega_{\\mathrm{in}}^2=\\frac{k}{m},\\quad\\omega_{\\mathrm{out}}^2=\\frac{k+2k_c}{m}",
    "meaning": [
      "二つの同質量ばね系で、同じ方向に振れるモードと逆方向に振れるモードの振動数を比較する。",
      "Compare in-phase and out-of-phase normal modes of two identical spring–mass oscillators."
    ],
    "symbols": [
      [
        "\\omega",
        "モードごとの角振動数",
        "Angular frequency for each mode",
        "rad/s"
      ],
      [
        "k",
        "各物体の外側のばね定数",
        "Stiffness of each outer spring",
        "N/m"
      ],
      [
        "k_c",
        "二つの物体を結ぶばね定数",
        "Coupling spring stiffness",
        "N/m"
      ]
    ],
    "unit": [
      "k/mとkc/mはs⁻²。平方根を取るとrad/s。",
      "k/m and kc/m have units s⁻²; square roots give angular frequency."
    ],
    "limit": [
      "結合ばねを外しkc=0とすると二つの振動数は同じ。結合が強いほど逆位相モードは速くなる。",
      "Setting coupling kc=0 makes the frequencies equal; stronger coupling raises the out-of-phase frequency."
    ],
    "scope": [
      "同じ質量・同じ外側のばね・小さな変位・線形連成という特別な例。非線形運動の一般解ではない。",
      "A special symmetric, small-amplitude, linear-coupling model; not a general solution of nonlinear dynamics."
    ]
  }
};
