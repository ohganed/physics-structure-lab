/* Parallel-field discovery cases: similarities AND physical limits. */
export const transferCases = [
  {
    "id": "spring-lc",
    "concept": "oscillation",
    "title": [
      "ばね振動とLC回路",
      "A spring oscillator and an LC circuit"
    ],
    "kind": "oscillators",
    "phenomenon": [
      "ばねの質点が動き、LC回路では電流と電荷が変化する。見た目は異なるが、両者ともエネルギーが2つの形の間を往復する。",
      "A mass oscillates on a spring; charge and current oscillate in an LC circuit. Both exchange energy between two forms."
    ],
    "question": [
      "どの物理量が役割を対応させると、同じ形の微分方程式が現れる？",
      "Which quantities correspond so the two models have the same mathematical structure?"
    ],
    "equations": [
      "m\\ddot x+kx=0",
      "L\\ddot q+\\frac{1}{C}q=0",
      "\\omega_m=\\sqrt{\\frac{k}{m}},\\quad\\omega_e=\\frac{1}{\\sqrt{LC}}"
    ],
    "common": [
      "変位 x と電荷 q はともに変化する状態量。質量 m とインダクタンス L が時間変化への応答に、ばね定数 k と 1/C が復元項に対応する。",
      "Displacement x and charge q are state variables; mass m and inductance L multiply the second derivative, while k and 1/C supply restoring terms."
    ],
    "difference": [
      "物体の変位と電荷は同じ量ではなく、次元も測定方法も違う。抵抗・摩擦や非線形性があれば単純な等価性は失われる。",
      "Displacement and electric charge have different dimensions and measurements. Resistance, friction, or nonlinearity alter the ideal correspondence."
    ],
    "transfer": [
      "公式を暗記する代わりに、両者の運動方程式を並べて係数の役割を考える。",
      "Instead of memorizing two formulas, compare the coefficients of their differential equations."
    ]
  },
  {
    "id": "gravity-electric",
    "concept": "gravity",
    "title": [
      "万有引力と静電気力",
      "Gravity and electrostatic force"
    ],
    "kind": "fields",
    "phenomenon": [
      "質量も電荷も、離れた位置の物体に作用する場をつくる。点源の単純なモデルでは距離の二乗に反比例する。",
      "Mass and electric charge both generate fields. For point sources, force magnitude follows an inverse-square distance dependence."
    ],
    "question": [
      "距離依存が同じなら、力の向きも同じだろうか？",
      "If distance dependence is the same, must the force directions also be the same?"
    ],
    "equations": [
      "F_g=G\\frac{m_1m_2}{r^2}",
      "\\boldsymbol F_e=k_e\\frac{q_1q_2}{r^2}\\hat{\\boldsymbol r}",
      "U_g=-G\\frac{m_1m_2}{r},\\quad U_e=k_e\\frac{q_1q_2}{r}"
    ],
    "common": [
      "点源の逆二乗則、中心力、ポテンシャルを使った記述という数学的な構造が共通する。",
      "Both are central-force, inverse-square models with associated potentials."
    ],
    "difference": [
      "質量同士のニュートン重力は引力だが、電荷間の静電気力は電荷の符号によって引力にも斥力にもなる。媒質や遮蔽条件も異なる。",
      "Newtonian gravity between positive masses is attractive; electrostatic force can attract or repel depending on charge signs. Media and screening matter differently."
    ],
    "transfer": [
      "重力の円軌道で学んだ『力を場として扱う』考えを電場へ移す。ただし電荷の符号を必ず確認する。",
      "Transfer the field and potential viewpoint from gravity to electrostatics, checking charge signs."
    ]
  },
  {
    "id": "diffusion-heat",
    "concept": "energy",
    "title": [
      "物質拡散と熱伝導",
      "Diffusion and heat conduction"
    ],
    "kind": "transport",
    "phenomenon": [
      "濃度差によって物質が拡散し、温度差によって熱が移動する。どちらも空間的な勾配と輸送の関係を考える。",
      "Matter diffuses in a concentration gradient, while heat flows along a temperature gradient."
    ],
    "question": [
      "どちらも高い側から低い側へ流れる単純モデルだが、何を保存する式と組み合わせる？",
      "Both have gradient-driven fluxes. What conservation balance must accompany each model?"
    ],
    "equations": [
      "J_x=-D\\frac{\\partial c}{\\partial x}",
      "q_x=-\\kappa\\frac{\\partial T}{\\partial x}",
      "\\frac{\\partial c}{\\partial t}=-\\frac{\\partial J_x}{\\partial x}\\quad(\\text{no reaction})"
    ],
    "common": [
      "フラックス＝係数×勾配の負値という構成則の形が似ている。局所的な保存・収支の式と結び付けて変化を予測する。",
      "Both have constitutive laws relating flux to negative spatial gradient; conservation balances then predict time evolution."
    ],
    "difference": [
      "モル流束と熱流束では単位も輸送されるものも異なる。反応・移流・温度依存性などがあると式は拡張が必要。",
      "Molar flux and heat flux have different units and physical meanings. Reactions, advection, and variable coefficients require extra terms."
    ],
    "transfer": [
      "位置と速度の変化率から学んだ『何の変化を何で割るか』を、濃度場・温度場に広げる。",
      "Extend the habit of identifying what changes and with respect to what, from mechanics to spatial fields."
    ]
  },
  {
    "id": "shm-wave",
    "concept": "oscillation",
    "title": [
      "単振動と進行波",
      "Simple harmonic motion and traveling waves"
    ],
    "kind": "conceptual",
    "phenomenon": [
      "弦の一点だけを追えば振動しているが、弦全体を見れば波形が進んでいく。",
      "A fixed point on a string oscillates, while the wave pattern travels through space."
    ],
    "question": [
      "波の伝播速度と弦の一点の振動速度は同じなのか？",
      "Is the wave propagation speed the same as the oscillating speed of one point on the string?"
    ],
    "equations": [
      "y(x,t)=A\\cos(kx-\\omega t)",
      "v_{\\mathrm{phase}}=\\frac{\\omega}{k}",
      "T=\\frac{2\\pi}{\\omega},\\quad\\lambda=\\frac{2\\pi}{k}"
    ],
    "common": [
      "一地点で時刻に注目すると正弦振動が見える。周期と角振動数の関係を単振動から持ち込める。",
      "At a fixed position the time dependence is sinusoidal; period and angular frequency retain their meanings."
    ],
    "difference": [
      "媒質中の粒子は波の進む速度で空間移動するとは限らない。波の位相速度と粒子速度を分ける必要がある。",
      "Medium particles generally do not travel at the wave's phase velocity. Particle velocity and phase velocity are different quantities."
    ],
    "transfer": [
      "『同じ数式に見える』ことを出発点に、固定する変数が時刻か位置かを問い直す。",
      "Use the similar equations to ask which variable—position or time—is held fixed."
    ]
  },
  {
    "id": "momentum-symmetry",
    "concept": "momentum",
    "title": [
      "運動量保存と対称性",
      "Momentum conservation and spatial symmetry"
    ],
    "kind": "conceptual",
    "phenomenon": [
      "衝突する物体の運動量が保存する現象を、より一般的な対称性から捉え直す。",
      "Reinterpret momentum conservation in collisions through a broader principle of symmetry."
    ],
    "question": [
      "運動量保存は単に『衝突の公式』なのか、それとももっと深い構造があるのか？",
      "Is momentum conservation just a collision formula, or part of a deeper structure?"
    ],
    "equations": [
      "\\frac{d\\boldsymbol P}{dt}=\\boldsymbol F_{\\mathrm{ext}}",
      "\\text{spatial translation symmetry}\\Rightarrow\\text{momentum conservation}"
    ],
    "common": [
      "ニュートンの運動量収支とネーターの定理は、適切な条件で同じ保存を異なる視点から説明する。",
      "Newtonian momentum balance and Noether's theorem explain compatible conservation results from different viewpoints."
    ],
    "difference": [
      "対称性からの結論には作用の連続対称性や系の条件が必要。外力の力積がある系では単純な運動量保存は適用できない。",
      "Noether's theorem requires action symmetry; an external impulse generally changes the system momentum."
    ],
    "transfer": [
      "運動量の単元へ戻り、『保存する理由』を新しい観点から問い直す。",
      "Return to the momentum lesson and re-examine why a conserved quantity exists."
    ]
  },
  {
    "id": "rate-chemistry",
    "concept": "calculus",
    "title": [
      "加速度と化学反応速度",
      "Acceleration and chemical reaction rates"
    ],
    "kind": "conceptual",
    "phenomenon": [
      "速度の時間変化と化学物質の濃度変化は別の現象だが、どちらも変化率を定義する必要がある。",
      "Changes in velocity and changes in chemical concentration are different phenomena but both call for defined rates."
    ],
    "question": [
      "濃度が減っているとき、反応速度を正で表すにはどう定義すればよいか？",
      "How can reaction rate be defined as positive while a reactant concentration decreases?"
    ],
    "equations": [
      "\\boldsymbol a=\\frac{d\\boldsymbol v}{dt}",
      "r=-\\frac{1}{\\nu_A}\\frac{dc_A}{dt}\\quad(\\text{reactant }A)"
    ],
    "common": [
      "変化率は、対象の量・基準となる独立変数・符号・単位を決めて初めて意味を持つ。",
      "A rate needs a specified changing quantity, independent variable, sign convention, and units."
    ],
    "difference": [
      "加速度と反応速度は違う物理量。反応速度式では、一定体積の均一系などの仮定と反応の化学量論係数を明確にする。",
      "Acceleration and reaction rate have different units and meanings. The displayed chemical rate assumes a suitable homogeneous constant-volume system and stoichiometry."
    ],
    "transfer": [
      "時間微分の構造を知っていると、初めて扱う現象の変化率を自分で定義する足場になる。",
      "The mathematical idea of a time derivative helps you formulate rates in unfamiliar phenomena."
    ]
  }
];
