/* Electricity textbook: conduction, DC circuits, transients and magnetism. */
export const electricityLessons2=[
  {
    "key": "current",
    "title": [
      "電流・抵抗・微視的な伝導",
      "Current, resistance and microscopic conduction"
    ],
    "sections": [
      {
        "id": "current-definition",
        "title": [
          "電流は電荷の移動率",
          "Current as charge flow rate"
        ],
        "scene": [
          "導線の断面を通る正味の電荷量を時間で割ったものが電流である。金属中の電子は電場と逆向きに平均的に移動するが、慣習的な電流の正方向は正電荷が進む向きとする。",
          "Current is net charge passing a cross section per time. Electrons drift opposite to E in a metal, while conventional positive current follows positive charge."
        ],
        "derivation": [
          "I=\\frac{dQ}{dt}",
          "I=n|q|Av_d"
        ],
        "meaning": [
          "担体密度n、電荷量|q|、断面積A、ドリフト速さvd。大きな電流は電子が高速で導線を走ることを必ずしも意味しない。",
          "n is carrier density, A cross-section and vd mean drift speed. Electrical signal propagation and carrier drift speed differ."
        ],
        "limits": [
          "単一種類の担体で一様な定常流という理想化。複数担体なら符号を含めて和を取る。",
          "Single carrier species and uniform steady current; sum signed contributions for multiple carriers."
        ]
      },
      {
        "id": "ohm",
        "title": [
          "電圧と電流と抵抗",
          "Voltage, current and resistance"
        ],
        "scene": [
          "金属抵抗体の両端に電位差を加えると電場が生じ、電荷が平均的に移動する。温度や物質の状態が一定なら電流と電圧が比例する場合がある。",
          "Applying voltage to a resistor establishes a field and average charge drift. Many conductors show proportional voltage and current under fixed physical conditions."
        ],
        "derivation": [
          "V=IR",
          "R=\\rho\\frac LA"
        ],
        "meaning": [
          "R=ρL/Aは一様な導線の長さLと断面積Aに対する関係。オームの法則は全ての素子で常に成り立つ定義ではない。",
          "For uniform wire R=ρL/A. Ohmic behavior is a material/model relation, not a universal law of every device."
        ],
        "limits": [
          "一定温度・オーム性材料。ダイオードや白熱電球ではI–Vは一般に非線形。",
          "Constant temperature, ohmic material; diodes and heated filaments can be nonlinear."
        ]
      },
      {
        "id": "joule",
        "title": [
          "抵抗での電気エネルギー変換",
          "Electrical work and Joule heating"
        ],
        "scene": [
          "抵抗を流れる電流は電場からエネルギーを受け取り、物質との相互作用を通じて内部エネルギーへ移す。抵抗の両端の電位差Vを電荷dqが通ると、電気的仕事はVdqである。",
          "Charge passing through a potential difference V transfers electrical energy Vdq; scattering in a resistor converts it to internal energy."
        ],
        "derivation": [
          "dW=V\\,dQ,\\quad P=\\frac{dW}{dt}=VI",
          "P=I^2R=\\frac{V^2}{R}"
        ],
        "meaning": [
          "P=VIは二端子への電力収支の基本式。I²RとV²/Rはオーム性抵抗体でV=IRを用いた表現。",
          "P=VI expresses terminal electrical power; I²R and V²/R use V=IR for an ohmic resistor."
        ],
        "limits": [
          "受動符号規約（電流が高電位端に入る）を採用。能動素子の符号は注意。",
          "Uses the passive sign convention; active sources need sign care."
        ]
      }
    ]
  },
  {
    "key": "circuits",
    "title": [
      "直流回路とキルヒホッフの法則",
      "DC circuits and Kirchhoff laws"
    ],
    "sections": [
      {
        "id": "series-parallel",
        "title": [
          "直列・並列回路の電流と電圧",
          "Series and parallel arrangements"
        ],
        "scene": [
          "抵抗を直列につなぐと途中で電流の行き先が分かれないので各抵抗を通る電流は同じ。並列では各枝の両端が同じ二つの節点につながるため、電位差が同じになる。",
          "Series elements share a current because there are no branch points. Parallel elements have the same voltage because they connect the same pair of nodes."
        ],
        "derivation": [
          "R_{\\rm series}=R_1+R_2",
          "\\frac1{R_{\\rm parallel}}=\\frac1{R_1}+\\frac1{R_2}"
        ],
        "meaning": [
          "直列では電圧を加算し、並列では枝電流を加算することで得る。素子をどこにつないだかという回路の接続関係が重要。",
          "Add voltage drops in series and branch currents in parallel. Circuit topology determines the relation."
        ],
        "limits": [
          "理想導線、抵抗性素子、定常回路。",
          "Ideal wires and resistive components in steady state."
        ]
      },
      {
        "id": "kirchhoff",
        "title": [
          "節点と閉回路での保存則",
          "Junction and loop equations"
        ],
        "scene": [
          "分岐点に電荷がたまり続けない定常回路では、流入する電流の和と流出する電流の和が等しい。電池と抵抗を一周して元の地点に戻ると、静電的な電位差の総和は0になる。",
          "At a steady-state junction, incoming and outgoing currents balance. Around a DC circuit loop, signed potential differences sum to zero."
        ],
        "derivation": [
          "\\sum I_{\\rm in}=\\sum I_{\\rm out}",
          "\\sum_{\\rm loop}\\Delta V=0"
        ],
        "meaning": [
          "節点則は電荷保存から、ループ則は静電的電位とエネルギー収支から理解できる。電池内の非静電的起電力と抵抗による降下を区別する。",
          "KCL follows charge conservation; KVL follows potential and energy accounting. Distinguish battery emf from resistor drops."
        ],
        "limits": [
          "時間変化する磁束を囲む導線ループでは単純な静電位ループ則を修正する必要がある。",
          "Time-varying magnetic flux requires a generalized loop relation."
        ]
      },
      {
        "id": "battery",
        "title": [
          "起電力と内部抵抗",
          "Electromotive force and internal resistance"
        ],
        "scene": [
          "電池の外部を流れる電流が増えると、電池内部でもエネルギーが散逸する。開放端子電圧と電流を流しているときの端子電圧は一般に等しくない。",
          "Higher load current produces energy dissipation inside a battery. The loaded terminal voltage is less than open-circuit emf in a simple model."
        ],
        "derivation": [
          "V_{\\rm terminal}=\\mathcal E-Ir",
          "I=\\frac{\\mathcal E}{R+r}"
        ],
        "meaning": [
          "起電力ℰは電池内部の非静電気的作用によって単位電荷に与えられるエネルギー。内部抵抗rは電極・電解質をまとめた単純化。",
          "Emf is non-electrostatic energy supplied per unit charge; internal resistance r is a lumped approximation."
        ],
        "limits": [
          "実際の電池は充電率、温度、電流履歴で特性が変化する。",
          "Real batteries depend on state of charge, temperature and history."
        ]
      }
    ]
  },
  {
    "key": "rc",
    "title": [
      "RC回路と時間変化",
      "RC circuits and transients"
    ],
    "sections": [
      {
        "id": "charging",
        "title": [
          "コンデンサーが充電される速さ",
          "Charging a capacitor through resistance"
        ],
        "scene": [
          "電池を抵抗とコンデンサーの直列回路につなぐと、はじめ電流が大きく、コンデンサーの電圧が上がるにつれて電流が減る。電池の電圧は抵抗での降下とコンデンサーの電圧に分かれる。",
          "When a battery charges a capacitor through a resistor, initial current is high. As the capacitor voltage increases, current decreases."
        ],
        "derivation": [
          "\\mathcal E=RI+\\frac QC,\\quad I=\\frac{dQ}{dt}",
          "\\frac{dQ}{dt}=\\frac{\\mathcal E}{R}-\\frac{Q}{RC}",
          "Q(t)=C\\mathcal E(1-e^{-t/(RC)})"
        ],
        "meaning": [
          "指数関数は微分すると自分自身に比例する性質から自然に現れる。τ=RCは充電量が最終値の約63.2%になる時間。",
          "Exponential behavior follows because the rate depends on remaining charge deficit. τ=RC is the 63.2% charging time."
        ],
        "limits": [
          "理想電池、一定RとC、初期Q=0。",
          "Ideal battery with constant R,C and initially uncharged capacitor."
        ]
      },
      {
        "id": "discharging",
        "title": [
          "コンデンサーの放電",
          "Discharging a capacitor"
        ],
        "scene": [
          "充電済みのコンデンサーを抵抗につなぐと、蓄えた電荷が減り、電流も減る。電圧の減少と電流の減少は同じ時間定数RCに従う。",
          "A charged capacitor discharges through a resistor; charge, voltage and current magnitude decay with the same time constant RC."
        ],
        "derivation": [
          "R\\frac{dQ}{dt}+\\frac QC=0",
          "Q(t)=Q_0e^{-t/(RC)},\\quad |I(t)|=\\frac{Q_0}{RC}e^{-t/(RC)}"
        ],
        "meaning": [
          "放電で失われるコンデンサーのエネルギーは、理想抵抗の内部エネルギーへ移る。電荷の符号と電流の正方向を定義して扱う。",
          "Stored electrical energy becomes heat in the resistor. Fix the positive current direction when assigning signs."
        ],
        "limits": [
          "放電中の発熱でRが変わる場合は単一指数にならない。",
          "Heating-induced changes in R break the single-exponential model."
        ]
      },
      {
        "id": "rc-energy",
        "title": [
          "RC回路のエネルギー収支",
          "Energy accounting during RC charging"
        ],
        "scene": [
          "理想電池の電圧ℰが一定の充電では、最終的に電池が供給するエネルギーはCℰ²だが、コンデンサーの蓄積はその半分だけになる。残りは抵抗で散逸する。",
          "Charging a capacitor from an ideal constant voltage source transfers Cℰ² from the source. The capacitor stores half and the resistor dissipates half."
        ],
        "derivation": [
          "W_{\\rm battery}=\\int_0^{C\\mathcal E}\\mathcal E\\,dQ=C\\mathcal E^2",
          "U_C=\\frac12C\\mathcal E^2,\\quad W_R=\\frac12C\\mathcal E^2"
        ],
        "meaning": [
          "抵抗が非常に小さくても、単純な理想RC回路を長時間かけて充電する限り、このエネルギー分配は変わらない。ただしR=0という極限は回路のインダクタンスなどを無視できなくなる。",
          "For any finite R in this ideal constant-voltage RC model the half-energy result remains; the limit R→0 needs additional circuit physics."
        ],
        "limits": [
          "一定理想電圧源・集中定数回路・有限R。",
          "Constant ideal voltage source, lumped circuit, finite R."
        ]
      }
    ]
  },
  {
    "key": "magnetism",
    "title": [
      "磁場とローレンツ力",
      "Magnetic fields and Lorentz force"
    ],
    "sections": [
      {
        "id": "magnetic-force",
        "title": [
          "動く電荷が受ける磁気力",
          "Magnetic force on moving charges"
        ],
        "scene": [
          "一様な磁場に対して斜めに飛び込んだ荷電粒子は、速度と磁場の両方に垂直な力を受ける。磁気力は速度に直交するので、磁気力だけでは速さを変えず、速度の方向だけを曲げる。",
          "A moving charge in a magnetic field experiences force perpendicular to velocity and B. Magnetic force alone changes direction, not speed."
        ],
        "derivation": [
          "\\boldsymbol F=q\\boldsymbol v\\times\\boldsymbol B",
          "|\\boldsymbol F|=|q|vB\\sin\\theta"
        ],
        "meaning": [
          "外積の向きは正電荷の右ねじの規則で定まり、負電荷では逆。力が速度と直交するためF·v=0。",
          "Cross-product direction follows the right-hand rule for positive q, reversed for negative q; F·v=0."
        ],
        "limits": [
          "磁場一定の場合の荷電粒子。電場や衝突があれば速さも変化する。",
          "Charged-particle model; electric forces and collisions can alter speed."
        ]
      },
      {
        "id": "circular-magnetic",
        "title": [
          "磁場中の円運動と質量分析",
          "Circular motion in a uniform magnetic field"
        ],
        "scene": [
          "速度が磁場と直角なら荷電粒子は円弧を描く。ローレンツ力が円運動に必要な向心力となり、速さが大きいほど半径が大きくなる。",
          "If velocity is perpendicular to a uniform B, the Lorentz force supplies inward centripetal force, making a circular orbit."
        ],
        "derivation": [
          "|q|vB=\\frac{mv^2}{r}",
          "r=\\frac{mv}{|q|B},\\quad T=\\frac{2\\pi m}{|q|B}"
        ],
        "meaning": [
          "速度が平行成分も持てば円運動と等速並進が重なり、らせんを描く。質量分析ではrとBから質量電荷比を調べられる。",
          "Parallel velocity adds uniform translation, producing a helix. Curvature yields mass-to-charge ratio."
        ],
        "limits": [
          "非相対論的な粒子、一定B、放射や衝突を無視。",
          "Nonrelativistic particles, uniform B, negligible radiation and collisions."
        ]
      },
      {
        "id": "wire-magnetic",
        "title": [
          "電流が磁場を作る",
          "Magnetic field produced by current"
        ],
        "scene": [
          "長い直線導線に電流が流れると、導線を取り囲む円形の磁場が生じる。導線から遠くなるほど磁場が弱くなる。磁場の向きは電流の方向と対応する。",
          "A current in a long straight wire produces concentric circular magnetic fields. The field weakens with distance and reverses with current direction."
        ],
        "derivation": [
          "B=\\frac{\\mu_0I}{2\\pi r}",
          "\\oint\\boldsymbol B\\cdot d\\boldsymbol\\ell=\\mu_0I_{\\rm enclosed}"
        ],
        "meaning": [
          "アンペールの法則を円形経路に適用し、対称性によってBを積分の外へ出すと導線の磁場が得られる。",
          "Using a circular Amperian loop and symmetry yields B·2πr=μ₀I."
        ],
        "limits": [
          "無限長・直線・定常電流の近似。時間変化があれば変位電流の項が必要。",
          "Long straight steady-current approximation; changing fields require displacement current."
        ]
      }
    ]
  }
];
