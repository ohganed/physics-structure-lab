/* Electricity textbook: electrostatics and capacitors. */
export const electricityLessons1=[
  {
    "key": "charge",
    "title": [
      "電荷とクーロンの法則",
      "Charge and Coulomb's law"
    ],
    "sections": [
      {
        "id": "charged-bodies",
        "title": [
          "帯電と電荷保存",
          "Charge transfer and conservation"
        ],
        "scene": [
          "二つの物体を摩擦して帯電させると、一方が正、他方が負になる。電子が物体間を移動したのであって、正電荷と負電荷が無から作られたわけではない。",
          "Rubbing two objects can transfer electrons. One becomes positive and the other negative; net charge of the isolated pair remains conserved."
        ],
        "derivation": [
          "Q_{\\rm before}=Q_{\\rm after}",
          "Q=(N_+-N_-)e"
        ],
        "meaning": [
          "電子の電荷は−e、陽子の電荷は+e。e≈1.602×10⁻¹⁹ C。物体の電荷と二物体系の全電荷を区別する。",
          "An electron has −e and a proton +e, with e≈1.602×10⁻¹⁹ C. Distinguish each object's charge from the total."
        ],
        "limits": [
          "孤立系での電荷保存。空気や接地との電荷移動がある場合は系の境界を広げる。",
          "Total charge is conserved in an isolated system; include the environment when charge leaks."
        ]
      },
      {
        "id": "coulomb",
        "title": [
          "二つの点電荷に働く力",
          "Force between point charges"
        ],
        "scene": [
          "同符号の電荷は遠ざかり、異符号の電荷は引き合う。二つの物体が受ける力は互いに逆向きで、結ぶ直線上に作用する。距離を2倍にすると力は1/4になる。",
          "Like charges repel, unlike charges attract. The forces are equal and opposite along the separation line; doubling separation quarters their magnitude."
        ],
        "derivation": [
          "F=\\frac{1}{4\\pi\\varepsilon_0}\\frac{|q_1q_2|}{r^2}",
          "\\boldsymbol F_{2\\leftarrow1}=\\frac{q_1q_2}{4\\pi\\varepsilon_0r^2}\\hat{\\boldsymbol r}_{12}"
        ],
        "meaning": [
          "クーロンの法則は静止した点電荷の力に関する経験法則。符号と単位ベクトルから力の向きが定まる。",
          "Coulomb's law is empirical for stationary point charges; the sign and radial unit vector determine direction."
        ],
        "limits": [
          "真空・点電荷・静止状態。誘電体中や移動する電荷については扱いを拡張する。",
          "Point charges at rest in vacuum; moving charges and materials require extensions."
        ]
      },
      {
        "id": "superposition",
        "title": [
          "複数の電荷による力",
          "Vector superposition"
        ],
        "scene": [
          "左右に同じ正電荷を置き、その中間の少し上に正の試験電荷を置く。二つの斜めの力の水平成分は相殺し、上向き成分は足し合わされる。",
          "A positive test charge above two identical positive charges experiences diagonal forces. Horizontal components cancel and vertical components add."
        ],
        "derivation": [
          "\\boldsymbol F=\\sum_i\\boldsymbol F_i",
          "F_x=\\sum_iF_{ix},\\qquad F_y=\\sum_iF_{iy}"
        ],
        "meaning": [
          "力は大きさだけではなく向きを持つ。複数の電荷を扱う場合は同じ作用点からベクトルを描く。",
          "Forces are vectors: draw each at the test charge before adding components."
        ],
        "limits": [
          "静電気の線形的な重ね合わせ。媒質の非線形性を扱う場合は注意。",
          "Electrostatic superposition; nonlinear media need special treatment."
        ]
      }
    ]
  },
  {
    "key": "field",
    "title": [
      "電場とガウスの法則",
      "Electric field and Gauss's law"
    ],
    "sections": [
      {
        "id": "field-definition",
        "title": [
          "電場と試験電荷",
          "Electric field and test charge"
        ],
        "scene": [
          "正の点電荷に近づける試験電荷は外向きに押される。同じ位置で試験電荷を2倍にすると力も2倍になる。力を試験電荷で割ると、その場所に固有の電場を記述できる。",
          "A positive source repels a positive test charge. Doubling the test charge doubles force at a given location; dividing by charge defines field."
        ],
        "derivation": [
          "\\boldsymbol E=\\lim_{q\\to0^+}\\frac{\\boldsymbol F}{q}",
          "\\boldsymbol F=q\\boldsymbol E"
        ],
        "meaning": [
          "電場は単位正電荷あたりの力。負電荷には電場と逆向きの力が働く。",
          "Electric field is force per unit positive charge; negative charge feels a force opposite to E."
        ],
        "limits": [
          "試験電荷が電荷分布を変えない極限。",
          "The probe must not significantly disturb the source distribution."
        ]
      },
      {
        "id": "field-lines",
        "title": [
          "点電荷の電場と電気力線",
          "Field lines and point-charge fields"
        ],
        "scene": [
          "正電荷の電気力線は放射状に外向き、負電荷では内向き。線の接線方向が電場の向きを表すが、電気力線は実際に存在する糸や荷電粒子の軌跡ではない。",
          "Lines are radial outward for positive and inward for negative charges. Their tangents show E direction; they are not literal threads or charged-particle trajectories."
        ],
        "derivation": [
          "\\boldsymbol E(\\boldsymbol r)=\\frac{Q}{4\\pi\\varepsilon_0r^2}\\hat{\\boldsymbol r}",
          "\\boldsymbol E_{\\rm total}=\\sum_i\\boldsymbol E_i"
        ],
        "meaning": [
          "電場は空間の各点で定まるベクトル。線の本数や間隔は描画上の表現であり、直接の測定量ではない。",
          "E is a vector field; drawn line density is a visualization convention, not a calibrated measurement."
        ],
        "limits": [
          "点電荷位置で場は特異的になる。",
          "The ideal point-charge field diverges at its source."
        ]
      },
      {
        "id": "gauss",
        "title": [
          "電束とガウスの法則",
          "Electric flux and Gauss's law"
        ],
        "scene": [
          "点電荷を囲む球面を大きくすると電場の大きさは1/r²で減るが、球面積はr²で増える。両者の積は球の大きさによらない。",
          "Enlarge a sphere around a point charge. E falls as 1/r² while area grows as r², so total flux stays the same."
        ],
        "derivation": [
          "\\Phi_E=\\oint_S\\boldsymbol E\\cdot d\\boldsymbol A",
          "\\oint_S\\boldsymbol E\\cdot d\\boldsymbol A=\\frac{Q_{\\rm enclosed}}{\\varepsilon_0}"
        ],
        "meaning": [
          "閉曲面の外向き法線を正とする。球対称ならE·4πr²=Q/ε₀である。一般には電場を積分の外に出せない。",
          "Outward normal defines positive flux. Spherical symmetry permits E·4πr²=Q/ε₀; without symmetry E cannot be pulled out of the integral."
        ],
        "limits": [
          "ガウスの法則は一般的だが、対称性のない場の計算には積分が必要。",
          "Gauss's law is general, but solving nonsymmetric fields requires more work."
        ]
      }
    ]
  },
  {
    "key": "potential",
    "title": [
      "電位と電位差",
      "Electric potential and voltage"
    ],
    "sections": [
      {
        "id": "potential-work",
        "title": [
          "電位差と電場のする仕事",
          "Potential difference and electric work"
        ],
        "scene": [
          "二枚の平行電極の間で、正電荷を電場方向に移すと電場は正の仕事をする。電気的位置エネルギーが減るので、電場は高い電位から低い電位へ向く。",
          "Between parallel plates, E does positive work on a positive charge displaced along E. Its potential energy falls as it moves to lower potential."
        ],
        "derivation": [
          "V_B-V_A=\\frac{U_B-U_A}{q}",
          "W^{\\rm field}_{A\\to B}=q(V_A-V_B)"
        ],
        "meaning": [
          "電位は位置エネルギーを単位電荷で割った量。電位そのものと電位差を区別する。",
          "Potential is energy per charge; distinguish potential from potential difference."
        ],
        "limits": [
          "静電場での関係。時間変化する磁場は非保存電場を作る。",
          "Electrostatic relation; varying magnetic fields can produce nonconservative E."
        ]
      },
      {
        "id": "uniform-field",
        "title": [
          "平行板の電場と電圧",
          "Parallel-plate field and voltage"
        ],
        "scene": [
          "十分広い二枚の平行板の中央では、電場をほぼ一様と考えられる。板の間隔をd、電位差の大きさをΔVとすると電場の大きさはΔV/d。",
          "Near the middle of large parallel plates E is approximately uniform. For plate spacing d and voltage magnitude ΔV, E=ΔV/d."
        ],
        "derivation": [
          "qEd=q\\Delta V",
          "E=\\frac{\\Delta V}{d}"
        ],
        "meaning": [
          "仕事qEdと電位差による仕事qΔVは同じ仕事を表している。電場の向きは電位の下がる向き。",
          "qEd and qΔV describe the same work. E points toward decreasing potential."
        ],
        "limits": [
          "平行板の端では電場は一様ではない。",
          "Fringing near plate edges makes E nonuniform."
        ]
      },
      {
        "id": "potential-gradient",
        "title": [
          "電位の勾配と電場",
          "Electric field as potential gradient"
        ],
        "scene": [
          "位置によって電位が変わる空間では、等電位線に沿って移動しても静電場は仕事をしない。電場は等電位線に直角で、電位が最も速く下がる方向を向く。",
          "An electrostatic field does no work along an equipotential. E is perpendicular to equipotentials and points toward steepest potential decrease."
        ],
        "derivation": [
          "V(B)-V(A)=-\\int_A^B\\boldsymbol E\\cdot d\\boldsymbol r",
          "\\boldsymbol E=-\\boldsymbol\\nabla V"
        ],
        "meaning": [
          "電位はスカラー、電場はベクトル。電位が0でも電場が0とは限らない。",
          "V is scalar, E vector. V=0 does not imply E=0."
        ],
        "limits": [
          "時間変化する磁場がある場合は電位だけではEを表せない。",
          "Time-varying magnetic fields require more than scalar potential."
        ]
      }
    ]
  },
  {
    "key": "capacitor",
    "title": [
      "コンデンサーと誘電体",
      "Capacitors and dielectrics"
    ],
    "sections": [
      {
        "id": "capacitance",
        "title": [
          "平行板コンデンサーの電気容量",
          "Parallel-plate capacitance"
        ],
        "scene": [
          "二枚の導体板に等量で符号が反対の電荷が蓄えられる。板の間隔を狭く、面積を広くすると、同じ電位差でより多くの電荷を蓄えられる。",
          "Two plates store +Q and −Q. Larger area and smaller separation raise charge storage at a given voltage."
        ],
        "derivation": [
          "C=\\frac{Q}{\\Delta V}",
          "C=\\frac{\\varepsilon_0A}{d}"
        ],
        "meaning": [
          "平行板の中央付近ではE≈Q/(ε₀A)、ΔV≈EdなのでC=ε₀A/d。Qは一枚の極板の電荷の大きさ。",
          "E≈Q/(ε₀A) and ΔV≈Ed give C=ε₀A/d. Q is the magnitude of charge on one plate."
        ],
        "limits": [
          "端効果を無視した真空中の大きな平行板。",
          "Large plates in vacuum; fringing ignored."
        ]
      },
      {
        "id": "capacitor-energy",
        "title": [
          "電荷を蓄えるための仕事",
          "Energy stored in a capacitor"
        ],
        "scene": [
          "充電が進むほど電圧が上がり、次の微小電荷dqを蓄えるために必要な仕事は増える。電圧が最初から最終値だったと考えるとエネルギーを過大評価する。",
          "Voltage rises during charging. Each additional dq requires more work; treating the final voltage as constant throughout would overestimate stored energy."
        ],
        "derivation": [
          "dW=V(q)dq=\\frac qC dq",
          "U=\\int_0^Q\\frac qC dq=\\frac{Q^2}{2C}=\\frac12 CV^2"
        ],
        "meaning": [
          "係数1/2は電圧が0から最終値まで増えることを積分した結果。",
          "The factor 1/2 follows from integrating a rising voltage."
        ],
        "limits": [
          "一定の線形電気容量。非線形媒質ならV(q)を積分する。",
          "Constant linear capacitance; nonlinear media require integrating V(q)."
        ]
      },
      {
        "id": "dielectric",
        "title": [
          "誘電体の分極と境界条件",
          "Dielectric polarization and electrical constraints"
        ],
        "scene": [
          "極板間に誘電体を入れると、正負の束縛電荷が微視的にずれて分極する。電池を外した場合は自由電荷Qが一定で電圧が下がる。電池をつないだままなら電圧が一定でQが増える。",
          "An inserted dielectric polarizes. A disconnected capacitor has fixed free charge Q and lower voltage; a connected capacitor retains voltage and gains free charge."
        ],
        "derivation": [
          "C=\\varepsilon_r\\varepsilon_0\\frac Ad",
          "Q=\\mathrm{const}\\Rightarrow V=\\frac QC,\\quad V=\\mathrm{const}\\Rightarrow Q=CV"
        ],
        "meaning": [
          "誘電率の変化だけでなく、電池を接続したかどうかがエネルギーや電荷の議論に重要。",
          "Electrical constraints—fixed charge versus fixed voltage—matter alongside permittivity."
        ],
        "limits": [
          "均質・線形・等方的な誘電体が極板間を満たすモデル。",
          "Uniform, linear, isotropic dielectric filling the gap."
        ]
      }
    ]
  }
];
