/* Numeric, stepwise bilingual examples for each electricity chapter. */
export const electricityWorkedExamples={
  "charge": {
    "title": [
      "二つの点電荷の引力",
      "Attraction between two charges"
    ],
    "problem": [
      "+2.0 μCと−3.0 μCの点電荷を真空中で0.30 m離して固定する。電荷2が受ける力の大きさと向きを求める。",
      "A +2.0 μC charge and a −3.0 μC charge are 0.30 m apart in vacuum. Find the magnitude and direction of the force on charge 2."
    ],
    "steps": [
      {
        "formula": "q_1=2.0\\times10^{-6}\\,\\mathrm C,\\quad q_2=-3.0\\times10^{-6}\\,\\mathrm C",
        "explanation": [
          "μCをCへ変換する。積の符号が負なので引力になる。",
          "Convert microcoulombs to coulombs; the negative product signals attraction."
        ]
      },
      {
        "formula": "F=k_e\\frac{|q_1q_2|}{r^2}",
        "explanation": [
          "力の大きさには電荷の絶対値を使う。",
          "Use magnitudes to compute the force magnitude."
        ]
      },
      {
        "formula": "F=8.99\\times10^9\\frac{6.0\\times10^{-12}}{0.30^2}\\approx0.599\\,\\mathrm N",
        "explanation": [
          "電荷2は電荷1の方向へ約0.60 Nの力を受ける。距離を2倍にすれば力は1/4になる。",
          "Charge 2 is attracted toward charge 1 with about 0.60 N; doubling the distance quarters it."
        ]
      }
    ]
  },
  "field": {
    "title": [
      "球対称な電場を求める",
      "Finding a spherically symmetric field"
    ],
    "problem": [
      "真空中の中心に+1.0 nCの点電荷を置き、半径0.20 mの球面上の電場を求める。",
      "A +1.0 nC charge is at the center of a sphere of radius 0.20 m in vacuum. Find E on the sphere."
    ],
    "steps": [
      {
        "formula": "\\oint_S\\boldsymbol E\\cdot d\\boldsymbol A=E(4\\pi r^2)",
        "explanation": [
          "球対称なので場は球面の法線方向で大きさが一定。",
          "By spherical symmetry, E is radial and constant over the sphere."
        ]
      },
      {
        "formula": "E(4\\pi r^2)=\\frac{Q}{\\varepsilon_0}\\Rightarrow E=\\frac{Q}{4\\pi\\varepsilon_0r^2}",
        "explanation": [
          "ガウスの法則を適用する。ガウス面の選び方が対称性に合っていることが重要。",
          "Apply Gauss's law using a symmetry-matched surface."
        ]
      },
      {
        "formula": "E=8.99\\times10^9\\frac{1.0\\times10^{-9}}{(0.20)^2}\\approx225\\,\\mathrm{N/C}",
        "explanation": [
          "正電荷なので向きは球面の外向き。",
          "The positive source gives an outward field of about 225 N/C."
        ]
      }
    ]
  },
  "potential": {
    "title": [
      "一様電場で電位差を計算する",
      "Voltage between parallel plates"
    ],
    "problem": [
      "平行板の中央で電場が300 N/C、板間隔0.040 mとする。電位差の大きさと、+2.0 μCが高電位側から低電位側へ移るときの電場の仕事を求める。",
      "A uniform field between plates is 300 N/C across 0.040 m. Find voltage magnitude and field work on +2.0 μC moving along E."
    ],
    "steps": [
      {
        "formula": "\\Delta V=Ed=300\\times0.040=12.0\\,\\mathrm V",
        "explanation": [
          "電場の向きに電位は下がる。ここでは電位差の大きさを求めている。",
          "Potential drops along E; this is the magnitude of the difference."
        ]
      },
      {
        "formula": "W=q\\Delta V=(2.0\\times10^{-6})(12.0)=2.4\\times10^{-5}\\,\\mathrm J",
        "explanation": [
          "正電荷が電場方向に進むので電場の仕事は正。",
          "Field work is positive for positive charge moving along E."
        ]
      },
      {
        "formula": "\\Delta U=-W=-2.4\\times10^{-5}\\,\\mathrm J",
        "explanation": [
          "仕事と位置エネルギー変化は逆符号になる。",
          "The electric potential energy change is minus field work."
        ]
      }
    ]
  },
  "capacitor": {
    "title": [
      "極板の間隔と蓄積エネルギー",
      "Capacitance and stored energy"
    ],
    "problem": [
      "面積0.020 m²、極板間隔1.0 mmの真空平行板コンデンサーに100 Vを加える。容量と蓄積エネルギーを求める。",
      "For vacuum plates of area 0.020 m² separated by 1.0 mm at 100 V, find capacitance and stored energy."
    ],
    "steps": [
      {
        "formula": "C=\\frac{\\varepsilon_0A}{d}=\\frac{8.85\\times10^{-12}\\times0.020}{1.0\\times10^{-3}}\\approx1.77\\times10^{-10}\\,\\mathrm F",
        "explanation": [
          "面積と間隔をSI単位へそろえる。端効果を無視する。",
          "Use SI units and the negligible-fringing approximation."
        ]
      },
      {
        "formula": "Q=CV\\approx1.77\\times10^{-8}\\,\\mathrm C",
        "explanation": [
          "Qは片側極板の電荷の大きさ。",
          "Q is charge magnitude on one plate."
        ]
      },
      {
        "formula": "U=\\frac12CV^2\\approx8.85\\times10^{-7}\\,\\mathrm J",
        "explanation": [
          "電荷を0から最終値まで運ぶ仕事の積分から得られる。",
          "Use the energy derived by integrating charging work."
        ]
      }
    ]
  },
  "current": {
    "title": [
      "金属導線のドリフト速度",
      "Electron drift speed in copper"
    ],
    "problem": [
      "断面積1.0 mm²の導線に2.0 Aが流れる。担体密度を8.5×10²⁸ m⁻³、担体電荷の大きさをeとしてドリフト速さを求める。",
      "A 1.0 mm² conductor carries 2.0 A. With carrier density 8.5×10²⁸ m⁻³ and charge magnitude e, find drift speed."
    ],
    "steps": [
      {
        "formula": "I=neAv_d\\Rightarrow v_d=\\frac{I}{neA}",
        "explanation": [
          "電荷を運ぶ担体の通過個数から電流を表す。",
          "Express current as the number of charge carriers crossing per second."
        ]
      },
      {
        "formula": "v_d=\\frac{2.0}{(8.5\\times10^{28})(1.602\\times10^{-19})(1.0\\times10^{-6})}",
        "explanation": [
          "面積を1.0×10⁻⁶ m²に変換する。",
          "Convert mm² to m²."
        ]
      },
      {
        "formula": "v_d\\approx1.47\\times10^{-4}\\,\\mathrm{m/s}",
        "explanation": [
          "電子の平均移動は遅くても、電気的な作用は回路全体へ伝播する。",
          "Electron drift is slow even though electrical changes propagate rapidly."
        ]
      }
    ]
  },
  "circuits": {
    "title": [
      "並列抵抗と電流の分岐",
      "Current splitting in parallel"
    ],
    "problem": [
      "9.0 Vの理想電源に6.0 Ωと3.0 Ωの抵抗を並列接続する。枝電流と合成抵抗を求める。",
      "Connect 6.0 Ω and 3.0 Ω in parallel across an ideal 9.0 V source. Find branch currents and equivalent resistance."
    ],
    "steps": [
      {
        "formula": "I_1=\\frac{9.0}{6.0}=1.5\\,\\mathrm A,\\quad I_2=\\frac{9.0}{3.0}=3.0\\,\\mathrm A",
        "explanation": [
          "並列なので両枝に9.0 Vがかかる。",
          "Both parallel branches have 9.0 V across them."
        ]
      },
      {
        "formula": "I=I_1+I_2=4.5\\,\\mathrm A",
        "explanation": [
          "分岐点で電荷が蓄積しないので電流を足す。",
          "Add currents by conservation of charge at the junction."
        ]
      },
      {
        "formula": "R_{\\rm eq}=\\frac{9.0}{4.5}=2.0\\,\\Omega",
        "explanation": [
          "並列合成抵抗は小さい方の抵抗よりも小さい。",
          "Parallel equivalent resistance is less than either branch resistance."
        ]
      }
    ]
  },
  "rc": {
    "title": [
      "RC回路の時間定数",
      "RC charging after one time constant"
    ],
    "problem": [
      "1000 Ωの抵抗と100 μFのコンデンサーを9.0 Vの理想電池で充電する。t=RCでのコンデンサー電圧と電流を求める。",
      "Charge 100 μF through 1000 Ω from an ideal 9 V battery. Find capacitor voltage and current at t=RC."
    ],
    "steps": [
      {
        "formula": "\\tau=RC=(1000)(100\\times10^{-6})=0.100\\,\\mathrm s",
        "explanation": [
          "時間定数は抵抗と容量の積。",
          "Time constant is product of R and C."
        ]
      },
      {
        "formula": "V_C(\\tau)=9.0(1-e^{-1})\\approx5.69\\,\\mathrm V",
        "explanation": [
          "コンデンサーは最終電圧の約63.2%まで充電される。",
          "Capacitor voltage reaches about 63.2% of its final value."
        ]
      },
      {
        "formula": "I(\\tau)=\\frac{9.0}{1000}e^{-1}\\approx3.31\\,\\mathrm{mA}",
        "explanation": [
          "初期電流9.0 mAの約36.8%に減る。",
          "Current falls to about 36.8% of its initial 9.0 mA."
        ]
      }
    ]
  },
  "magnetism": {
    "title": [
      "磁場中の荷電粒子の軌道",
      "Charge orbit radius in a magnetic field"
    ],
    "problem": [
      "正電荷+1.0 μC、質量1.0 mgの粒子が速さ100 m/sで0.10 Tの一様磁場に垂直に入る。軌道半径を求める。",
      "A +1.0 μC, 1.0 mg particle enters a 0.10 T field perpendicularly at 100 m/s. Find orbit radius."
    ],
    "steps": [
      {
        "formula": "|q|vB=\\frac{mv^2}{r}",
        "explanation": [
          "磁気力は速度と直交し、向心力となる。",
          "Magnetic force is perpendicular to velocity and supplies centripetal force."
        ]
      },
      {
        "formula": "r=\\frac{mv}{|q|B}",
        "explanation": [
          "両辺から一つのvを約し、rについて解く。",
          "Cancel one factor of speed and solve for r."
        ]
      },
      {
        "formula": "r=\\frac{(1.0\\times10^{-6})(100)}{(1.0\\times10^{-6})(0.10)}=1000\\,\\mathrm m",
        "explanation": [
          "mgの質量単位変換に注意。ここでの条件は幾何を例示するための値で、装置の実寸とは異なる。",
          "Convert mg to kg. This numeric model illustrates scaling, not a typical apparatus size."
        ]
      }
    ]
  },
  "induction": {
    "title": [
      "磁束の時間変化と起電力",
      "Induced emf from changing flux"
    ],
    "problem": [
      "200回巻きのコイルを貫く1回あたりの磁束が0.020 Wbから0.005 Wbに0.10秒で減少する。平均の誘導起電力の大きさを求める。",
      "Flux per turn drops from 0.020 Wb to 0.005 Wb in 0.10 s through a 200-turn coil. Find average emf magnitude."
    ],
    "steps": [
      {
        "formula": "\\Delta\\Phi_B=0.005-0.020=-0.015\\,\\mathrm{Wb}",
        "explanation": [
          "まず磁束の変化量に符号をつける。",
          "Compute signed flux change first."
        ]
      },
      {
        "formula": "\\mathcal E_{\\rm avg}=-N\\frac{\\Delta\\Phi_B}{\\Delta t}",
        "explanation": [
          "向きは選んだ法線方向と回路の正方向によって定まる。",
          "Direction depends on the chosen normal and loop orientation."
        ]
      },
      {
        "formula": "|\\mathcal E|=200\\frac{0.015}{0.10}=30\\,\\mathrm V",
        "explanation": [
          "誘導起電力の大きさは30 V。",
          "The magnitude of induced emf is 30 V."
        ]
      }
    ]
  },
  "ac": {
    "title": [
      "交流電圧の実効値",
      "RMS voltage of a sinusoidal source"
    ],
    "problem": [
      "最大電圧が100 Vの正弦波を理想抵抗につなぐ。同じ平均発熱を与える直流電圧の値を求める。",
      "A sinusoidal source with 100 V peak drives a resistor. Find the DC-equivalent heating voltage."
    ],
    "steps": [
      {
        "formula": "P(t)=\\frac{V_0^2}{R}\\sin^2\\omega t",
        "explanation": [
          "抵抗での瞬時電力は常に0以上。",
          "Resistive instantaneous power is nonnegative."
        ]
      },
      {
        "formula": "\\langle\\sin^2\\omega t\\rangle=\\frac12",
        "explanation": [
          "一周期の二乗平均を取る。",
          "Average the squared sinusoid over one full cycle."
        ]
      },
      {
        "formula": "V_{\\rm rms}=\\frac{100}{\\sqrt2}\\approx70.7\\,\\mathrm V",
        "explanation": [
          "瞬時電圧の単純平均0 Vと実効値を混同しない。",
          "Do not confuse the zero signed mean voltage with nonzero RMS."
        ]
      }
    ]
  },
  "maxwell": {
    "title": [
      "真空の電磁波の速さ",
      "Speed of electromagnetic waves in vacuum"
    ],
    "problem": [
      "真空の誘電率と透磁率を用い、マクスウェルの波動方程式から電磁波の伝播速度を求める。",
      "Use vacuum permittivity and permeability to find wave propagation speed from Maxwell's wave equation."
    ],
    "steps": [
      {
        "formula": "\\nabla^2\\boldsymbol E=\\mu_0\\varepsilon_0\\frac{\\partial^2\\boldsymbol E}{\\partial t^2}",
        "explanation": [
          "真空で電荷と電流がない領域における式。",
          "Equation in a vacuum region with no charge or current."
        ]
      },
      {
        "formula": "\\nabla^2\\boldsymbol E=\\frac1{c^2}\\frac{\\partial^2\\boldsymbol E}{\\partial t^2}",
        "explanation": [
          "通常の波動方程式の係数と比較する。",
          "Compare its coefficient with the standard wave equation."
        ]
      },
      {
        "formula": "c=\\frac1{\\sqrt{\\mu_0\\varepsilon_0}}\\approx3.00\\times10^8\\,\\mathrm{m/s}",
        "explanation": [
          "電磁波の速さが光速と一致することが、光の電磁波としての理解につながる。",
          "This matches light speed and connects optics to electromagnetic field theory."
        ]
      }
    ]
  }
};
