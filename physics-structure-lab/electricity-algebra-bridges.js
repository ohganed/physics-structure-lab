/* Algebraic intermediate steps with their physical premises; these add no unillustrated definitions. */
export const electricityAlgebraBridges={
  "field-lines": {
    "0": [
      {
        "tex": "\\frac{\\boldsymbol F}{q}=\\frac{Q}{4\\pi\\varepsilon_0r^2}\\hat{\\boldsymbol r}",
        "explanation": [
          "クーロン力を正の試験電荷qで割ると、源電荷Qによる電場が得られる。",
          "Divide Coulomb force by positive probe charge q to obtain the source field."
        ]
      }
    ]
  },
  "gauss": {
    "1": [
      {
        "tex": "E(4\\pi r^2)=\\frac{Q}{\\varepsilon_0}",
        "explanation": [
          "点電荷を中心とする球面では、電場は法線方向で一定である。",
          "On a centered Gaussian sphere, E is radial and has constant magnitude."
        ]
      },
      {
        "tex": "E=\\frac{Q}{4\\pi\\varepsilon_0r^2}",
        "explanation": [
          "球面積で割ると逆二乗関係が得られる。球対称が前提である。",
          "Divide by sphere area, using spherical symmetry, to obtain inverse-square E."
        ]
      }
    ]
  },
  "capacitance": {
    "1": [
      {
        "tex": "E_{\\rm gap}\\simeq\\frac{Q}{\\varepsilon_0A}",
        "explanation": [
          "十分に広い二枚の板の間では、各板による電場の寄与が加わる。",
          "Fields from the two large oppositely charged sheets add in the gap."
        ]
      },
      {
        "tex": "\\Delta V\\simeq E_{\\rm gap}d=\\frac{Qd}{\\varepsilon_0A}",
        "explanation": [
          "極板の中央付近で一様な電場として扱い、板間隔dを掛ける。",
          "Assume a uniform gap field and multiply by plate separation."
        ]
      },
      {
        "tex": "C=\\frac{Q}{\\Delta V}\\simeq\\frac{\\varepsilon_0A}{d}",
        "explanation": [
          "容量の定義に代入すると電荷Qが約分され、形状と誘電率で決まる。",
          "Substitute the voltage into the capacitance definition; Q cancels."
        ]
      }
    ]
  },
  "capacitor-energy": {
    "1": [
      {
        "tex": "U=\\frac1C\\int_0^Q q\\,dq=\\frac1C\\left[\\frac{q^2}{2}\\right]_{0}^{Q}",
        "explanation": [
          "途中の電荷qに応じた電圧を積分するため係数1/2が現れる。",
          "Integrating the instantaneous voltage over charging produces the factor one half."
        ]
      }
    ]
  },
  "current-definition": {
    "1": [
      {
        "tex": "\\Delta N=nAv_d\\Delta t",
        "explanation": [
          "時間Δtに導線の断面を通過する担体の個数を数える。",
          "Count carriers crossing the wire section in time Δt."
        ]
      },
      {
        "tex": "I=\\frac{|q|\\Delta N}{\\Delta t}=n|q|Av_d",
        "explanation": [
          "通過した電荷量を時間で割る。ここでは電流の大きさを扱う。",
          "Divide transported charge magnitude by time to obtain current magnitude."
        ]
      }
    ]
  },
  "series-parallel": {
    "0": [
      {
        "tex": "V=IR_1+IR_2=I(R_1+R_2)",
        "explanation": [
          "直列なので同じ電流Iを通し、電圧降下を足す。",
          "The same current flows in series and the voltage drops add."
        ]
      }
    ],
    "1": [
      {
        "tex": "I=\\frac{V}{R_1}+\\frac{V}{R_2}=V\\left(\\frac1{R_1}+\\frac1{R_2}\\right)",
        "explanation": [
          "並列なので同じ電圧Vがかかり、枝電流を足す。",
          "Branches share voltage, while their currents add at junctions."
        ]
      }
    ]
  },
  "charging": {
    "1": [
      {
        "tex": "\\frac{dQ}{dt}=\\frac{C\\mathcal E-Q}{RC}",
        "explanation": [
          "充電速度は最終電荷Cℰからの不足分に比例する。",
          "Charging rate is proportional to the deficit from final charge."
        ]
      }
    ],
    "2": [
      {
        "tex": "\\frac{dQ}{C\\mathcal E-Q}=\\frac{dt}{RC}",
        "explanation": [
          "電荷Qに依存する項と時間tに依存する項を分離する。",
          "Separate the charge and time variables."
        ]
      },
      {
        "tex": "\\ln\\frac{C\\mathcal E-Q}{C\\mathcal E}=-\\frac{t}{RC}",
        "explanation": [
          "初期条件Q(0)=0を使って積分定数を決める。",
          "Integrate and apply Q(0)=0 to determine the constant."
        ]
      },
      {
        "tex": "C\\mathcal E-Q=C\\mathcal E\\,e^{-t/(RC)}",
        "explanation": [
          "対数を指数へ戻してQについて整理すると充電解が得られる。",
          "Exponentiate to recover the charging solution."
        ]
      }
    ]
  },
  "discharging": {
    "1": [
      {
        "tex": "\\frac{dQ}{Q}=-\\frac{dt}{RC}",
        "explanation": [
          "放電する電荷量の減少率は、残った電荷量に比例する。",
          "The discharge rate is negative and proportional to remaining charge."
        ]
      },
      {
        "tex": "\\ln\\frac{Q}{Q_0}=-\\frac{t}{RC}",
        "explanation": [
          "初期電荷Q0で積分定数を定める。",
          "Use initial charge Q0 to fix the integration constant."
        ]
      }
    ]
  },
  "circular-magnetic": {
    "1": [
      {
        "tex": "T=\\frac{2\\pi r}{v}=\\frac{2\\pi}{v}\\frac{mv}{|q|B}",
        "explanation": [
          "円周の長さを速さで割り、導出した半径を代入する。",
          "Divide circumference by speed and substitute the orbital radius."
        ]
      }
    ]
  },
  "wire-magnetic": {
    "1": [
      {
        "tex": "\\oint\\boldsymbol B\\cdot d\\boldsymbol\\ell=B(2\\pi r)",
        "explanation": [
          "長い直線電流の対称性で、円形閉路上の磁場が一定となる。",
          "Cylindrical symmetry makes B constant and tangent along a circular loop."
        ]
      }
    ]
  },
  "ac-wave": {
    "1": [
      {
        "tex": "\\langle P\\rangle=\\frac{V_0^2}{R}\\langle\\sin^2\\omega t\\rangle=\\frac{V_0^2}{2R}",
        "explanation": [
          "純抵抗では正弦波の二乗の平均が1/2になる。",
          "For a pure resistor, the average of sin squared is one half."
        ]
      },
      {
        "tex": "\\frac{V_{\\rm rms}^2}{R}=\\langle P\\rangle\\;\\Longrightarrow\\;V_{\\rm rms}=\\frac{V_0}{\\sqrt2}",
        "explanation": [
          "同じ平均発熱を与える直流の値と比較する。",
          "Compare with DC voltage producing the same mean heating."
        ]
      }
    ]
  },
  "reactance": {
    "1": [
      {
        "tex": "i(t)=I_0\\sin\\omega t\\;\\Longrightarrow\\;v_L(t)=\\omega LI_0\\cos\\omega t",
        "explanation": [
          "微分によってωが掛かり、電圧と電流の位相が90°ずれる。",
          "Differentiation introduces ω and a quarter-cycle phase shift."
        ]
      }
    ]
  },
  "resonance": {
    "1": [
      {
        "tex": "\\omega_0L=\\frac1{\\omega_0C}\\;\\Longrightarrow\\;\\omega_0^2=\\frac1{LC}",
        "explanation": [
          "コイルとコンデンサーのリアクタンスの大きさが等しい条件を解く。",
          "Solve the condition that inductive and capacitive reactances have equal magnitude."
        ]
      }
    ]
  },
  "wave": {
    "0": [
      {
        "tex": "\\boldsymbol\\nabla\\times\\boldsymbol E=-\\frac{\\partial\\boldsymbol B}{\\partial t}",
        "explanation": [
          "ファラデーの法則の局所形を出発点とする。",
          "Start with the local form of Faraday’s law."
        ]
      },
      {
        "tex": "\\boldsymbol\\nabla\\times(\\boldsymbol\\nabla\\times\\boldsymbol E)=-\\mu_0\\varepsilon_0\\frac{\\partial^2\\boldsymbol E}{\\partial t^2}",
        "explanation": [
          "回転をもう一度取り、電荷・電流のない真空にアンペール–マクスウェルの法則を使う。",
          "Take another curl and apply Ampère–Maxwell in source-free vacuum."
        ]
      },
      {
        "tex": "\\boldsymbol\\nabla\\times(\\boldsymbol\\nabla\\times\\boldsymbol E)=\\boldsymbol\\nabla(\\boldsymbol\\nabla\\cdot\\boldsymbol E)-\\nabla^2\\boldsymbol E=-\\nabla^2\\boldsymbol E",
        "explanation": [
          "真空で電荷がない場合の電場の発散0とベクトル恒等式を使う。",
          "Use div E=0 and the curl-of-curl identity in source-free vacuum."
        ]
      }
    ]
  },
  "energy-flux": {
    "0": [
      {
        "tex": "\\frac{B^2}{2\\mu_0}=\\frac{E^2}{2\\mu_0c^2}=\\frac12\\varepsilon_0E^2",
        "explanation": [
          "真空平面波でB=E/cを使うと電場と磁場のエネルギー密度は等しい。",
          "With B=E/c, the two field energy densities in a vacuum plane wave are equal."
        ]
      }
    ]
  }
};
