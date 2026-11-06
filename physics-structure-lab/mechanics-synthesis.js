/* Cross-chapter synthesis inquiries: reasoning is available without progress gates. */
export const synthesisProblems = [
  {
    "id": "synth-atwood",
    "chapter": "synthesis",
    "type": "numeric",
    "title": [
      "2物体と滑車：系をどう選ぶ？",
      "Two masses and a pulley: choosing a system"
    ],
    "situation": [
      "軽い伸びない糸と摩擦のない軽い滑車で3 kgと2 kgの物体をつなぐ。3 kg側が下がる。",
      "Masses 3 kg and 2 kg hang over a massless frictionless pulley with a light inextensible string; the 3 kg side descends."
    ],
    "question": [
      "両物体の加速度の大きさ（m/s²）は？",
      "What is the magnitude of their common acceleration (m/s²)?"
    ],
    "assumptions": [
      "g=9.8 m/s²、糸は常に張り、空気抵抗なし。",
      "g=9.8 m/s²; taut massless string and no air drag."
    ],
    "principle": [
      "二物体を一つの系にすると糸の張力が内部力として消える。",
      "Treat both masses as one system so tension cancels internally."
    ],
    "hints": [
      [
        "重い方の重力はどちら向き？",
        "Identify the direction of the heavier weight."
      ],
      [
        "系の駆動力は(3−2)g、質量は3+2。",
        "Net driving force is (3−2)g with total mass 3+2."
      ]
    ],
    "steps": [
      {
        "tex": "3g-T=3a,\\qquad T-2g=2a",
        "why": [
          "各物体で正方向を運動方向へ取る。",
          "Choose positive along each body’s motion."
        ]
      },
      {
        "tex": "(3-2)g=(3+2)a",
        "why": [
          "張力を消して系全体の式へ。",
          "Add equations to cancel tension."
        ]
      },
      {
        "tex": "a=9.8/5=1.96\\ \\mathrm{m/s^2}",
        "why": [
          "全系の質量で割る。",
          "Divide by total mass."
        ]
      }
    ],
    "answer": {
      "value": 1.96,
      "unit": "m/s²"
    },
    "interpretation": [
      "3 kg側は下向き、2 kg側は上向きに1.96 m/s²。",
      "The 3 kg mass accelerates downward and the 2 kg upward at 1.96 m/s²."
    ],
    "trap": [
      "張力をそれぞれの重力と同じと決めつけない。",
      "Do not assume tension equals either weight while accelerating."
    ],
    "links": [
      "force",
      "friction"
    ]
  },
  {
    "id": "synth-projectile",
    "chapter": "synthesis",
    "type": "numeric",
    "title": [
      "投射運動は二方向の独立性から",
      "Projectile range from independent axes"
    ],
    "situation": [
      "地面から初速10 m/s、水平から45°で投げる。",
      "Launch a projectile at 10 m/s and 45° above level ground."
    ],
    "question": [
      "着地までの水平到達距離（m）は？",
      "Find horizontal range (m) on level ground."
    ],
    "assumptions": [
      "g=9.8 m/s²、空気抵抗なし、初期と着地高度が同じ。",
      "g=9.8 m/s², no drag; launch and landing at same height."
    ],
    "principle": [
      "水平方向の等速運動と鉛直方向の等加速度運動を分ける。",
      "Separate horizontal uniform motion from vertical accelerated motion."
    ],
    "hints": [
      [
        "鉛直方向に上昇して戻る時間を求める。",
        "Find time to return to the starting height."
      ],
      [
        "水平速度は一定。",
        "Horizontal velocity stays constant."
      ]
    ],
    "steps": [
      {
        "tex": "v_{x0}=v_0\\cos\\theta,\\quad v_{y0}=v_0\\sin\\theta",
        "why": [
          "速度を成分に分ける。",
          "Resolve initial velocity into components."
        ]
      },
      {
        "tex": "t=\\frac{2v_0\\sin\\theta}{g}",
        "why": [
          "鉛直変位が0になる非ゼロ時刻。",
          "Find nonzero return time from vertical displacement."
        ]
      },
      {
        "tex": "R=v_{x0}t=\\frac{v_0^2\\sin(2\\theta)}{g}",
        "why": [
          "水平移動は速度×時間。",
          "Horizontal displacement is speed times time."
        ]
      },
      {
        "tex": "R=100/9.8\\approx10.204\\ \\rm m",
        "why": [
          "45°でsin90°=1。",
          "At 45°, sin90°=1."
        ]
      }
    ],
    "answer": {
      "value": 10.204081632653061,
      "unit": "m"
    },
    "interpretation": [
      "約10.2 m。軸を分けても時間は共通。",
      "Range is about 10.2 m; the two components share the same time."
    ],
    "trap": [
      "空気抵抗や着地高さの違う問題へこの公式を無条件に適用しない。",
      "This range formula does not apply unchanged with drag or different landing height."
    ],
    "links": [
      "force",
      "energy"
    ]
  },
  {
    "id": "synth-collision-energy",
    "chapter": "synthesis",
    "type": "numeric",
    "title": [
      "運動量は保存するのに減るエネルギー",
      "Kinetic-energy loss in a sticking collision"
    ],
    "situation": [
      "2 kgの物体が3 m/sで進み、静止する1 kgの物体と合体する。",
      "A 2 kg body moving at 3 m/s sticks to a stationary 1 kg body."
    ],
    "question": [
      "衝突で減少した運動エネルギー（J）は？",
      "How much kinetic energy is lost during impact (J)?"
    ],
    "assumptions": [
      "外力の力積は無視できるが、完全非弾性衝突。",
      "Negligible external impulse; perfectly inelastic collision."
    ],
    "principle": [
      "速度は運動量保存で求め、その後の運動エネルギーを比較する。",
      "Use momentum to find final velocity; then compare kinetic energies."
    ],
    "hints": [
      [
        "合体後の速度を求めよう。",
        "Find the shared final velocity."
      ],
      [
        "K=mv²/2を両状態へ。",
        "Apply K=mv²/2 to both states."
      ]
    ],
    "steps": [
      {
        "tex": "v_f=\\frac{2(3)}{2+1}=2\\ \\rm m/s",
        "why": [
          "運動量保存を使う。",
          "Apply momentum conservation."
        ]
      },
      {
        "tex": "K_i=\\frac12(2)(3^2)=9\\ \\rm J",
        "why": [
          "衝突前の運動エネルギー。",
          "Initial kinetic energy."
        ]
      },
      {
        "tex": "K_f=\\frac12(3)(2^2)=6\\ \\rm J",
        "why": [
          "衝突後の運動エネルギー。",
          "Final kinetic energy."
        ]
      },
      {
        "tex": "K_i-K_f=3\\ \\rm J",
        "why": [
          "減少した分を求める。",
          "Compute the loss."
        ]
      }
    ],
    "answer": {
      "value": 3,
      "unit": "J"
    },
    "interpretation": [
      "運動量は系全体で保存するが、運動エネルギー3 Jは変形や熱などへ。",
      "Total momentum is conserved, while 3 J kinetic energy becomes internal energy and related forms."
    ],
    "trap": [
      "減少分を全エネルギーの消滅と混同しない。",
      "Lost kinetic energy does not mean destroyed total energy."
    ],
    "links": [
      "energy",
      "momentum"
    ]
  },
  {
    "id": "synth-orbit-period",
    "chapter": "synthesis",
    "type": "numeric",
    "title": [
      "円運動から衛星の一周時間",
      "Orbital period from circular motion"
    ],
    "situation": [
      "地球中心から7.00×10⁶ mの円軌道。GM=3.986×10¹⁴ m³/s²。",
      "Circular orbit at geocentric radius 7.00×10⁶ m; GM=3.986×10¹⁴ m³/s²."
    ],
    "question": [
      "一周する周期を分単位（min）で求める。",
      "Find the orbital period in minutes (min)."
    ],
    "assumptions": [
      "ニュートンの逆二乗重力・円軌道・抵抗なし。",
      "Newtonian inverse-square gravity, circular orbit, negligible drag."
    ],
    "principle": [
      "向心加速度から速度を求め、円周長を速さで割る。",
      "Obtain speed from centripetal balance and divide circumference by speed."
    ],
    "hints": [
      [
        "まずv=√(GM/r)。",
        "First use v=√(GM/r)."
      ],
      [
        "一周距離は2πr。",
        "Circumference is 2πr."
      ]
    ],
    "steps": [
      {
        "tex": "v=\\sqrt{GM/r}",
        "why": [
          "重力が中心向き加速度を生む。",
          "Gravity provides the inward acceleration."
        ]
      },
      {
        "tex": "T=\\frac{2\\pi r}{v}=2\\pi\\sqrt{\\frac{r^3}{GM}}",
        "why": [
          "円周長を速さで割る。",
          "Divide circumference by speed."
        ]
      },
      {
        "tex": "T=\\frac{2\\pi}{60}\\sqrt{\\frac{(7.00\\times10^6)^3}{3.986\\times10^{14}}}\\ \\rm min",
        "why": [
          "秒から分へ換算。",
          "Convert seconds to minutes."
        ]
      }
    ],
    "answer": {
      "value": 97.14199779647994,
      "unit": "min"
    },
    "interpretation": [
      "約97.1分。軌道半径が変わると周期はrの3/2乗に比例して変わる。",
      "About 97.1 min. The period scales as r^(3/2) for a fixed central mass."
    ],
    "trap": [
      "地表からの高度と地心距離を混同しない。",
      "Altitude is not geocentric radius."
    ],
    "links": [
      "circular",
      "gravitation"
    ]
  },
  {
    "id": "synth-pendulum",
    "chapter": "synthesis",
    "type": "numeric",
    "title": [
      "振り子と単振動のつながり",
      "Small-angle pendulum and harmonic motion"
    ],
    "situation": [
      "糸の長さ1.0 mの単振り子を小さく揺らす。",
      "A pendulum of length 1.0 m oscillates with small amplitude."
    ],
    "question": [
      "周期（s）を求めよう。",
      "Find the period (s)."
    ],
    "assumptions": [
      "g=9.8 m/s²、単振り子・小角近似・減衰なし。",
      "g=9.8 m/s²; small-angle undamped ideal pendulum."
    ],
    "principle": [
      "接線方向の運動方程式を小角で線形化する。",
      "Linearize the tangential equation for small angles."
    ],
    "hints": [
      [
        "重力の接線方向成分は−mg sinθ。",
        "Tangential gravity is −mg sinθ."
      ],
      [
        "角度が小さければsinθ≈θ。",
        "For small θ, sinθ≈θ (in radians)."
      ]
    ],
    "steps": [
      {
        "tex": "m\\ell\\ddot\\theta=-mg\\sin\\theta",
        "why": [
          "接線方向で運動方程式。",
          "Apply Newton’s law tangentially."
        ]
      },
      {
        "tex": "\\ddot\\theta+(g/\\ell)\\theta\\approx0",
        "why": [
          "小角近似で単振動の形に。",
          "Use small-angle approximation."
        ]
      },
      {
        "tex": "T=2\\pi\\sqrt{\\ell/g}\\approx2.007\\ \\rm s",
        "why": [
          "角振動数√(g/ℓ)から周期へ。",
          "Period follows from ω²=g/ℓ."
        ]
      }
    ],
    "answer": {
      "value": 2.007089923154493,
      "unit": "s"
    },
    "interpretation": [
      "約2.01秒。ばね振動と同じ数式構造だが、復元力の物理的起源は異なる。",
      "About 2.01 s. Same mathematical form as a spring, different restoring interaction."
    ],
    "trap": [
      "大振幅の振り子では周期が振幅に依存し得る。",
      "Large-amplitude pendulums depart from the small-angle formula."
    ],
    "links": [
      "oscillation",
      "lagrange"
    ]
  },
  {
    "id": "synth-complementarity",
    "chapter": "synthesis",
    "type": "reasoning",
    "title": [
      "一つの衝突を二つの法則で考える",
      "One collision, two conservation ideas"
    ],
    "situation": [
      "二物体が衝突する。外からの力積は小さいが、衝突後には熱や変形が生じる。",
      "Two bodies collide with negligible external impulse, but heat and deformation occur."
    ],
    "question": [
      "どの保存則を使い、何が失われないか？",
      "Which quantities are conserved, and what changes form?"
    ],
    "assumptions": [
      "二物体を合わせた系。完全非弾性でもよい。",
      "Combined two-body system; the impact may be inelastic."
    ],
    "principle": [
      "別の保存量には別の成立条件がある。",
      "Different conserved quantities have different conditions."
    ],
    "hints": [
      [
        "運動量はベクトル。",
        "Momentum is a vector."
      ],
      [
        "運動エネルギーは内部エネルギーへ変わり得る。",
        "Kinetic energy can become internal energy."
      ]
    ],
    "steps": [
      {
        "tex": "\\boldsymbol P_i=\\boldsymbol P_f",
        "why": [
          "外力積が0に近いなら総運動量保存。",
          "Total momentum conserved with negligible external impulse."
        ]
      },
      {
        "tex": "K_f<K_i\\quad\\mathrm{may\\ occur}",
        "why": [
          "非弾性なら運動エネルギーは減少。",
          "Inelastic impacts may reduce kinetic energy."
        ]
      },
      {
        "tex": "E_{\\rm total,i}=E_{\\rm total,f}",
        "why": [
          "十分広い閉じた系では全エネルギー保存。",
          "Total energy remains conserved in a closed full system."
        ]
      }
    ],
    "answer": null,
    "interpretation": [
      "運動量保存と運動エネルギー保存は異なる。何を系としたかが重要。",
      "Momentum conservation differs from kinetic-energy conservation; system boundaries matter."
    ],
    "trap": [
      "「保存」を聞いたら、どの物理量か必ず確認する。",
      "Always ask which physical quantity is conserved."
    ],
    "links": [
      "momentum",
      "energy"
    ]
  },
  {
    "id": "synth-formulations",
    "chapter": "synthesis",
    "type": "reasoning",
    "title": [
      "ニュートン・ラグランジュ・ハミルトンをつなぐ",
      "Connect Newton, Lagrange, and Hamilton"
    ],
    "situation": [
      "同じ理想ばねを3種類の記述で表す。",
      "Describe the same ideal spring using three formulations."
    ],
    "question": [
      "同じ運動の予測へつながる理由は？",
      "Why do they predict the same physical motion?"
    ],
    "assumptions": [
      "質量一定、線形ばね、拘束なし、正則なルジャンドル変換。",
      "Constant mass, linear spring, no constraints, regular Legendre transform."
    ],
    "principle": [
      "表現の変数と出発点は異なっても、一つの物理系を記述できる。",
      "Different variables and organizing principles can describe the same system."
    ],
    "hints": [
      [
        "ニュートンは力を出発点にする。",
        "Newton begins with forces."
      ],
      [
        "ラグランジュは作用、ハミルトンは位置・正準運動量。",
        "Lagrange uses action; Hamilton uses q and canonical p."
      ]
    ],
    "steps": [
      {
        "tex": "m\\ddot x=-kx",
        "why": [
          "ニュートンによる運動方程式。",
          "Newtonian equation."
        ]
      },
      {
        "tex": "L=\\frac12m\\dot x^2-\\frac12kx^2",
        "why": [
          "同じ系のラグランジアン。",
          "Lagrangian for the same system."
        ]
      },
      {
        "tex": "H=p^2/(2m)+kx^2/2,\\quad p=m\\dot x",
        "why": [
          "同じ系のハミルトニアン。",
          "Hamiltonian for the same system."
        ]
      }
    ],
    "answer": null,
    "interpretation": [
      "異なる表現でも同じ運動方程式へ戻る。これは知識を再解釈する代表例。",
      "All three return the same motion, revealing a deeper connection between approaches."
    ],
    "trap": [
      "すべての物理系でp=mvやL=K−Uが無条件に成立すると思わない。",
      "p=mv and L=K−U are not universally valid without conditions."
    ],
    "links": [
      "force",
      "lagrange",
      "hamilton"
    ]
  },
  {
    "id": "synth-modes",
    "chapter": "synthesis",
    "type": "reasoning",
    "title": [
      "線形性と、複雑な運動を分ける考え",
      "Linearity and collective motion"
    ],
    "situation": [
      "2つのばね振動子の連成運動が複雑に見える。",
      "Two coupled oscillators exhibit complicated motion."
    ],
    "question": [
      "どんな条件なら単純なモードへ分解でき、いつ失敗するか？",
      "When can we decompose the motion into normal modes, and when can that fail?"
    ],
    "assumptions": [
      "平衡点近くの小振幅線形近似。",
      "Small-amplitude linear approximation near equilibrium."
    ],
    "principle": [
      "方程式が線形なら、解の重ね合わせも解になる。",
      "Linearity permits superposition of solutions."
    ],
    "hints": [
      [
        "同位相・逆位相の動きを想像。",
        "Imagine in-phase and opposite-phase motion."
      ],
      [
        "ばねが非線形なら重ね合わせできるか？",
        "Would nonlinear springs permit the same superposition?"
      ]
    ],
    "steps": [
      {
        "tex": "M\\ddot{\\boldsymbol q}+K\\boldsymbol q=0",
        "why": [
          "線形連成系の式。",
          "Linear coupled-system equation."
        ]
      },
      {
        "tex": "\\boldsymbol q(t)=\\sum_jA_j\\boldsymbol u_j(t)",
        "why": [
          "固有モードを重ね合わせる。",
          "Superpose normal modes."
        ]
      },
      {
        "tex": "F=-kx-\\alpha x^3",
        "why": [
          "非線形な復元力では単純な独立モードの扱いが破れる場合がある。",
          "Nonlinear restoring terms can invalidate simple independent-mode superposition."
        ]
      }
    ],
    "answer": null,
    "interpretation": [
      "解析の方法は式の構造に依存する。難しい現象でも近似の意味を確認する。",
      "The mathematical structure determines which decomposition methods apply."
    ],
    "trap": [
      "似た動きだから同じ解法で解ける、と決めつけない。",
      "Similar-looking motions do not imply identical solvability."
    ],
    "links": [
      "oscillation",
      "coupled"
    ]
  }
];
