/* Electricity textbook: induction, AC, Maxwell equations. */
export const electricityLessons3=[
  {
    "key": "induction",
    "title": [
      "電磁誘導とインダクタンス",
      "Electromagnetic induction and inductance"
    ],
    "sections": [
      {
        "id": "faraday",
        "title": [
          "磁束が変わると起電力が生じる",
          "Changing magnetic flux induces emf"
        ],
        "scene": [
          "磁石をコイルに近づけたり、コイルの面積を変えたりすると、コイルの中を貫く磁束が変わる。閉回路なら電流が流れる。磁場が存在するだけでは誘導起電力が生まれるとは限らない。",
          "Moving a magnet toward a coil or changing its area alters magnetic flux. Emf arises from flux change, not merely from the existence of magnetic field."
        ],
        "derivation": [
          "\\Phi_B=\\int_S\\boldsymbol B\\cdot d\\boldsymbol A",
          "\\mathcal E=-N\\frac{d\\Phi_B}{dt}"
        ],
        "meaning": [
          "N回巻きのコイルで各巻きが同じ磁束を受けるときのファラデーの法則。マイナスはレンツの法則に関係する。",
          "Faraday's law for N turns with equal flux; the minus sign encodes Lenz's law."
        ],
        "limits": [
          "回路が移動する場合は面積の取り方と運動起電力も考える。",
          "Moving loops require care with moving surfaces and motional emf."
        ]
      },
      {
        "id": "lenz",
        "title": [
          "レンツの法則とエネルギー保存",
          "Lenz's law and energy conservation"
        ],
        "scene": [
          "コイルに磁石のN極を近づけると、コイルを貫く磁束が増える。誘導電流が作る磁場は、その増加を妨げる方向になる。逆に磁石を遠ざけると磁束の減少を妨げる向きに変わる。",
          "Approach a coil with a north pole: increasing flux induces a current whose field opposes that increase. Moving the magnet away reverses the response."
        ],
        "derivation": [
          "\\mathcal E=-\\frac{d\\Phi_B}{dt}",
          "P_{\\rm mech}=P_{\\rm electric}+\\frac{dU}{dt}"
        ],
        "meaning": [
          "誘導電流が磁束変化を強めるなら外部から仕事を与えずにエネルギーが増えてしまう。符号は保存則と整合する。",
          "If induction amplified flux change spontaneously, it would violate energy conservation; the sign prevents that runaway."
        ],
        "limits": [
          "誘導電流の向きは回路の向きと磁束の符号を定めて判断する。",
          "Choose a loop orientation and normal consistently."
        ]
      },
      {
        "id": "inductor",
        "title": [
          "コイルと磁場に蓄えるエネルギー",
          "Self-inductance and magnetic energy"
        ],
        "scene": [
          "コイルに流れる電流を急に増やすと、コイル自身の磁束も変化し、その変化を妨げる起電力が生じる。抵抗とは異なり、理想コイルはエネルギーを磁場に蓄える。",
          "Increasing a coil current alters its own magnetic flux, inducing emf that opposes rapid current changes. An ideal inductor stores energy in a magnetic field."
        ],
        "derivation": [
          "\\mathcal E_L=-L\\frac{dI}{dt}",
          "U_L=\\int_0^I LI'\\,dI'=\\frac12 LI^2"
        ],
        "meaning": [
          "線形コイルでは磁束鎖交数が電流に比例する。充電仕事を積分すると係数1/2が現れる。",
          "For linear inductance the flux linkage is proportional to I. Integrating energy added gives ½LI²."
        ],
        "limits": [
          "鉄心の飽和や損失ではLが一定でない。",
          "Saturation and losses can make inductance nonlinear."
        ]
      }
    ]
  },
  {
    "key": "ac",
    "title": [
      "交流・RLC回路・共振",
      "Alternating current and RLC resonance"
    ],
    "sections": [
      {
        "id": "ac-wave",
        "title": [
          "交流の電圧と実効値",
          "Sinusoidal AC and RMS"
        ],
        "scene": [
          "交流電源は時間とともに正負が変わる電圧を作る。抵抗だけをつないだ場合、電圧と電流は同じ位相で変化し、電流による発熱は常に正となる。",
          "An AC source alternates sign. For a purely resistive load, current and voltage are in phase while instantaneous dissipated power stays nonnegative."
        ],
        "derivation": [
          "v(t)=V_0\\sin\\omega t,\\quad i(t)=I_0\\sin\\omega t",
          "V_{\\rm rms}=\\frac{V_0}{\\sqrt2},\\quad P_{\\rm avg}=V_{\\rm rms}I_{\\rm rms}"
        ],
        "meaning": [
          "sin²の1周期平均が1/2であることから実効値の√2が現れる。実効値は同じ抵抗で同じ平均発熱を起こす直流値。",
          "Since the period average of sin² is 1/2, RMS is peak/√2; it matches DC heating effect."
        ],
        "limits": [
          "単一周波数の正弦波と純抵抗。一般波形には時間平均の平方根定義を使う。",
          "Single-frequency sinusoid and pure resistor; other waveforms use the general RMS definition."
        ]
      },
      {
        "id": "reactance",
        "title": [
          "コイルとコンデンサーの位相",
          "Phase in ideal inductors and capacitors"
        ],
        "scene": [
          "理想コイルでは電圧が電流の時間変化に比例するため、電流の極大時には電圧が0になる。コンデンサーでは電流が電圧の時間変化に比例し、やはり位相がずれる。",
          "Inductor voltage follows the rate of change of current; capacitor current follows the rate of change of voltage. They cause a quarter-cycle phase shift in opposite senses."
        ],
        "derivation": [
          "v_L=L\\frac{di}{dt},\\quad i_C=C\\frac{dv_C}{dt}",
          "X_L=\\omega L,\\quad X_C=\\frac{1}{\\omega C}"
        ],
        "meaning": [
          "微分によりsinとcosが入れ替わるため90°の位相差が生まれる。理想素子は1周期平均でエネルギーを消費しない。",
          "The derivative of sin is cos, yielding 90° phase shift. Ideal reactive elements exchange energy rather than dissipating net energy over a period."
        ],
        "limits": [
          "抵抗・損失がない理想素子。電圧と電流の符号規約を統一する。",
          "Ideal lossless elements with consistent passive sign convention."
        ]
      },
      {
        "id": "resonance",
        "title": [
          "直列RLC回路の共振",
          "Series RLC resonance"
        ],
        "scene": [
          "抵抗、コイル、コンデンサーを直列に接続した交流回路では、周波数によりコイルとコンデンサーのリアクタンスが変わる。両者が等しい周波数で電流振幅が最大になる。",
          "In series RLC, inductive reactance rises with frequency and capacitive reactance falls. At their equality, net reactance vanishes and current amplitude peaks."
        ],
        "derivation": [
          "Z=\\sqrt{R^2+(\\omega L-1/(\\omega C))^2}",
          "\\omega_0=\\frac1{\\sqrt{LC}},\\quad I_0=\\frac{V_0}{Z}"
        ],
        "meaning": [
          "共振角振動数はLCで決まり、理想的な直列RLCの共振時のインピーダンスはR。減衰や駆動条件によるピークの定義差にも注意する。",
          "Resonance angular frequency is 1/√LC; series impedance is R there. Other resonance measures can peak at different frequencies under damping."
        ],
        "limits": [
          "正弦波定常応答と集中定数モデル。",
          "Sinusoidal steady state in the lumped-element approximation."
        ]
      }
    ]
  },
  {
    "key": "maxwell",
    "title": [
      "マクスウェル方程式と電磁波",
      "Maxwell equations and electromagnetic waves"
    ],
    "sections": [
      {
        "id": "ampere-maxwell",
        "title": [
          "変位電流と電磁場の整合",
          "Displacement current and Ampère–Maxwell law"
        ],
        "scene": [
          "コンデンサーを充電すると、導線では電流が流れるが、極板間の真空には導電電流は流れない。同じ閉路を囲む曲面の取り方によって磁場が変わってしまわないよう、変化する電場の寄与を含める必要がある。",
          "During capacitor charging there is conduction current in the wire, but none across the vacuum gap. The magnetic circulation must not depend on which spanning surface is chosen."
        ],
        "derivation": [
          "\\oint\\boldsymbol B\\cdot d\\boldsymbol\\ell=\\mu_0I_{\\rm conduction}+\\mu_0\\varepsilon_0\\frac{d\\Phi_E}{dt}",
          "\\boldsymbol\\nabla\\times\\boldsymbol B=\\mu_0\\boldsymbol J+\\mu_0\\varepsilon_0\\frac{\\partial\\boldsymbol E}{\\partial t}"
        ],
        "meaning": [
          "変位電流項は変化する電束に比例する。これは真空中を電子が極板間で移動している、という意味ではない。",
          "The displacement-current term tracks changing electric flux; it is not electron flow through the vacuum gap."
        ],
        "limits": [
          "マクスウェル方程式の真空中SI表現。媒質内ではD・Hを用いる。",
          "Vacuum SI form; material macroscopic equations use D and H."
        ]
      },
      {
        "id": "wave",
        "title": [
          "電場と磁場が伝わる波",
          "Electromagnetic waves in vacuum"
        ],
        "scene": [
          "空間で変化する磁場は渦状の電場を、変化する電場は渦状の磁場を生む。真空中ではこれらが結び付き、電磁場の変化が光速で伝わる。電場、磁場、伝播方向は互いに直交する。",
          "Changing magnetic fields curl E, and changing electric fields curl B. In vacuum these coupled changes propagate at light speed; E, B and propagation direction are mutually perpendicular for a plane wave."
        ],
        "derivation": [
          "\\nabla^2\\boldsymbol E=\\mu_0\\varepsilon_0\\frac{\\partial^2\\boldsymbol E}{\\partial t^2}",
          "c=\\frac1{\\sqrt{\\mu_0\\varepsilon_0}},\\quad B_0=\\frac{E_0}{c}"
        ],
        "meaning": [
          "電磁波は媒質の振動ではなく電磁場そのものの伝播。高校の波の式と、微分方程式を結び付けられる。",
          "An electromagnetic wave is propagation of fields, not a mechanical medium. The wave equation connects to earlier wave mechanics."
        ],
        "limits": [
          "真空中の平面波。物質中や近接場では単純な関係をそのまま使えない。",
          "Vacuum plane waves; materials and near fields require more general models."
        ]
      },
      {
        "id": "energy-flux",
        "title": [
          "電磁波のエネルギーと流れ",
          "Electromagnetic energy density and flow"
        ],
        "scene": [
          "電磁波はエネルギーを遠方へ運ぶ。電場と磁場に蓄えられたエネルギーは空間に分布し、その流れる向きは電場と磁場の外積で表される。",
          "Electromagnetic waves transport energy through space. The electric and magnetic fields carry energy density, and their cross product indicates energy flow."
        ],
        "derivation": [
          "u=\\frac12\\varepsilon_0E^2+\\frac{B^2}{2\\mu_0}",
          "\\boldsymbol S=\\frac1{\\mu_0}\\boldsymbol E\\times\\boldsymbol B"
        ],
        "meaning": [
          "ポインティングベクトルSの単位はW/m²。真空中の平面波では電場と磁場のエネルギー密度が等しい。",
          "Poynting vector S measures energy flux (W/m²); the electric and magnetic energy densities are equal for a vacuum plane wave."
        ],
        "limits": [
          "真空の古典電磁場。光子の量子描像は別の理論階層。",
          "Classical vacuum fields; photon quantization requires quantum theory."
        ]
      }
    ]
  }
];
