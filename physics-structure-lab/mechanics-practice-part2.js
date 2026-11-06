/* Original bilingual self-study problems for advanced mechanics chapters 7–12. */
export const practiceProblemsPart2 = [
  {
    "id": "gravity-orbit",
    "chapter": "gravitation",
    "type": "numeric",
    "title": [
      "人工衛星の円軌道速度",
      "Circular orbital speed"
    ],
    "situation": [
      "地球中心から7.00×10⁶ mの円軌道。地球のGM=3.986×10¹⁴ m³/s²。",
      "A circular orbit has geocentric radius 7.00×10⁶ m; Earth’s GM=3.986×10¹⁴ m³/s²."
    ],
    "question": [
      "軌道の速さ（km/s）は？",
      "Find orbital speed (km/s)."
    ],
    "assumptions": [
      "球対称の中心重力・円軌道・抵抗なし。",
      "Central spherical gravity, circular path, negligible drag."
    ],
    "principle": [
      "重力が中心向きの加速度を生む。",
      "Gravity supplies centripetal acceleration."
    ],
    "hints": [
      [
        "rは地表からの高度ではない。",
        "r is geocentric distance, not altitude."
      ],
      [
        "GM/r²=v²/rを整理。",
        "Equate gravity and centripetal acceleration."
      ]
    ],
    "steps": [
      {
        "tex": "GMm/r^2=mv^2/r",
        "why": [
          "重力を「向心力」に加算しない。",
          "Gravity itself supplies inward force."
        ]
      },
      {
        "tex": "v=\\sqrt{GM/r}=\\sqrt{3.986\\times10^{14}/(7.00\\times10^6)}",
        "why": [
          "衛星質量mが消える。",
          "Satellite mass cancels."
        ]
      },
      {
        "tex": "v\\approx7546\\ \\rm m/s=7.546\\ km/s",
        "why": [
          "最後にkm/sに直す。",
          "Convert meters per second to kilometers per second."
        ]
      }
    ],
    "answer": {
      "value": 7.546049108166282,
      "unit": "km/s"
    },
    "interpretation": [
      "約7.55 km/s。重力が働き続けるため軌道を描く。",
      "About 7.55 km/s; gravity remains active throughout the orbit."
    ],
    "trap": [
      "距離の逆二乗則は中心間距離で使う。",
      "Use center-to-center distance in the inverse-square relation."
    ],
    "links": [
      "circular",
      "energy"
    ]
  },
  {
    "id": "gravity-weightless",
    "chapter": "gravitation",
    "type": "reasoning",
    "title": [
      "衛星は重力がないから無重量？",
      "Is an orbiting astronaut beyond gravity?"
    ],
    "situation": [
      "宇宙ステーション内の宇宙飛行士が浮いている。",
      "An astronaut floats inside an orbiting space station."
    ],
    "question": [
      "重力がほとんど0だから浮いているのか？",
      "Does floating mean gravity is nearly zero?"
    ],
    "assumptions": [
      "ステーションと飛行士がほぼ同じ重力加速度で自由落下。",
      "Station and astronaut share near-equal gravitational free fall."
    ],
    "principle": [
      "見かけの重さと重力を分ける。",
      "Distinguish apparent weight from gravitational force."
    ],
    "hints": [
      [
        "船と人は同時に地球へ落ちている。",
        "Station and person are both falling around Earth."
      ],
      [
        "床からの支持力を考える。",
        "Consider contact support force from the floor."
      ]
    ],
    "steps": [
      {
        "tex": "a_r=GM/r^2",
        "why": [
          "重力による中心向き加速度はある。",
          "Gravitational acceleration remains."
        ]
      },
      {
        "tex": "N\\approx0",
        "why": [
          "床に押し付けられる支持力が小さい。",
          "Normal contact force becomes small."
        ]
      }
    ],
    "answer": null,
    "interpretation": [
      "浮くのは重力が消えたためではなく、周囲と一緒に自由落下しているから。",
      "Floating results from shared free fall, not absence of gravity."
    ],
    "trap": [
      "「無重量」を重力0と同一視しない。",
      "Weightlessness is not identical to zero gravity."
    ],
    "links": [
      "noninertial",
      "circular"
    ]
  },
  {
    "id": "rotation-torque",
    "chapter": "rotation",
    "type": "numeric",
    "title": [
      "ドアを押すトルク",
      "Torque applied to a door"
    ],
    "situation": [
      "蝶番から0.50 mのところを扉と直角に10 Nで押す。",
      "Push perpendicularly on a door at a lever arm of 0.50 m with a 10 N force."
    ],
    "question": [
      "トルクの大きさ（N·m）は？",
      "Find torque magnitude (N·m)."
    ],
    "assumptions": [
      "力が腕に垂直で、蝶番を軸とする。",
      "Force perpendicular to hinge lever arm."
    ],
    "principle": [
      "力の効果には作用点の位置が重要。",
      "Rotational force effectiveness depends on where force acts."
    ],
    "hints": [
      [
        "τ=rFsinφ。",
        "Start from τ=rF sinφ."
      ],
      [
        "垂直ならsin90°=1。",
        "For perpendicular direction, sin90°=1."
      ]
    ],
    "steps": [
      {
        "tex": "\\tau=rF\\sin90^\\circ",
        "why": [
          "回転軸に対する腕を使う。",
          "Use the correct lever arm."
        ]
      },
      {
        "tex": "\\tau=0.50(10)=5.0\\ \\rm N\\,m",
        "why": [
          "トルクの大きさは5 N·m。",
          "Torque magnitude is 5 N·m."
        ]
      }
    ],
    "answer": {
      "value": 5,
      "unit": "N·m"
    },
    "interpretation": [
      "力が同じでも作用点が軸から遠いほど効果が大きい。",
      "For equal force, a longer perpendicular lever arm gives more torque."
    ],
    "trap": [
      "N·mはJと基本次元が同じでも、トルクはエネルギーではない。",
      "Torque and energy share dimensions but differ physically."
    ],
    "links": [
      "force",
      "lagrange"
    ]
  },
  {
    "id": "rotation-axis",
    "chapter": "rotation",
    "type": "reasoning",
    "title": [
      "回転軸に向けて押すと？",
      "Pushing toward the rotation axis"
    ],
    "situation": [
      "ドアの取っ手を蝶番の方向へ強く押す。",
      "Push a door handle directly toward the hinge."
    ],
    "question": [
      "強く押せば扉は回る？",
      "Will a strong push rotate the door about its hinge?"
    ],
    "assumptions": [
      "理想的な固定軸、力の作用線が軸を通る。",
      "Ideal fixed hinge; line of action passes through the axis."
    ],
    "principle": [
      "トルクの軸方向成分を調べる。",
      "Examine torque about the axis."
    ],
    "hints": [
      [
        "力が大きくても腕が0に相当する場合がある。",
        "A large force may have zero rotational lever arm."
      ],
      [
        "rとFのなす角は？",
        "What is the angle between lever arm and force?"
      ]
    ],
    "steps": [
      {
        "tex": "\\tau=rF\\sin\\varphi",
        "why": [
          "外積の大きさ。",
          "Magnitude of the cross product."
        ]
      },
      {
        "tex": "\\varphi=0^\\circ\\ {\\rm or}\\ 180^\\circ\\Rightarrow\\tau=0",
        "why": [
          "平行・反平行なら回転効果0。",
          "Parallel or antiparallel forces give zero torque."
        ]
      }
    ],
    "answer": null,
    "interpretation": [
      "この押し方では回転軸まわりのトルクは0。",
      "The push produces no torque about the hinge."
    ],
    "trap": [
      "力の大きさだけで回転が決まると考えない。",
      "Force magnitude alone does not determine rotation."
    ],
    "links": [
      "force",
      "hamilton"
    ]
  },
  {
    "id": "noninertial-bus",
    "chapter": "noninertial",
    "type": "numeric",
    "title": [
      "発進するバス内の見かけの力",
      "Apparent force in an accelerating bus"
    ],
    "situation": [
      "右へ2 m/s²で加速するバス内に2 kgの荷物。",
      "A bus accelerates right at 2 m/s² with a 2 kg object inside."
    ],
    "question": [
      "バス内の並進に由来する見かけの力のx成分（N）は？右正。",
      "Find the x-component (N) of the translational apparent force, right positive."
    ],
    "assumptions": [
      "バスは回転せず並進加速する。",
      "Frame translates with no rotation."
    ],
    "principle": [
      "非慣性系の加速度補正項−mAを使う。",
      "Use the non-inertial correction −mA."
    ],
    "hints": [
      [
        "右加速する座標系では見かけの力は反対向き。",
        "Apparent force opposes frame acceleration."
      ],
      [
        "符号も含めて答える。",
        "Include the sign."
      ]
    ],
    "steps": [
      {
        "tex": "F_{\\mathrm{app},x}=-mA",
        "why": [
          "座標系の加速度と反対。",
          "Opposite to frame acceleration."
        ]
      },
      {
        "tex": "F_{\\mathrm{app},x}=-2(2)=-4\\ \\rm N",
        "why": [
          "左向き4 N。",
          "4 N to the left."
        ]
      }
    ],
    "answer": {
      "value": -4,
      "unit": "N"
    },
    "interpretation": [
      "観測者の座標変換による補正で、新しい相互作用ではない。",
      "The term arises from coordinate choice, not a new interaction."
    ],
    "trap": [
      "見かけの力と物体からの実在する接触力を混同しない。",
      "Do not confuse inertial forces with contact forces."
    ],
    "links": [
      "force",
      "rotation"
    ]
  },
  {
    "id": "noninertial-perspective",
    "chapter": "noninertial",
    "type": "reasoning",
    "title": [
      "乗客は何に押された？",
      "Who pushed the passenger backward?"
    ],
    "situation": [
      "バスの発進時、乗客は後方へ倒れるように感じる。",
      "A passenger feels thrown backward when a bus pulls away."
    ],
    "question": [
      "地上観測者とバス内観測者の説明は同じ？",
      "How do ground and bus observers explain it?"
    ],
    "assumptions": [
      "地上を近似的な慣性系、バスを並進加速系とする。",
      "Approximate the ground as inertial and bus as accelerating."
    ],
    "principle": [
      "運動は座標系に依存して記述される。",
      "Motion descriptions depend on the reference frame."
    ],
    "hints": [
      [
        "地上系から見ると乗客は慣性で速度維持を試みる。",
        "In the ground frame, the passenger tends to keep velocity."
      ],
      [
        "バス系でa′=a−Aと変換。",
        "Use a′=a−A in the bus frame."
      ]
    ],
    "steps": [
      {
        "tex": "a'_x=a_x-A",
        "why": [
          "座標系の加速を引く。",
          "Subtract frame acceleration."
        ]
      },
      {
        "tex": "ma'_x=F_{\\rm real,x}-mA",
        "why": [
          "バス内では補正が必要。",
          "Add a correction in the bus frame."
        ]
      }
    ],
    "answer": null,
    "interpretation": [
      "二つの記述は矛盾せず、基準系の選択が違うだけ。",
      "Both descriptions agree physically and differ only by reference frame."
    ],
    "trap": [
      "慣性系の運動方程式へ見かけの力を無条件に足さない。",
      "Do not add apparent forces in an inertial frame."
    ],
    "links": [
      "force",
      "circular"
    ]
  },
  {
    "id": "lagrange-frequency",
    "chapter": "lagrange",
    "type": "numeric",
    "title": [
      "作用の方法でばねの振動数",
      "Derive spring frequency from a Lagrangian"
    ],
    "situation": [
      "L=(m/2)ẋ²−(k/2)x² のばねで、m=2 kg、k=50 N/m。",
      "A spring with L=(m/2)ẋ²−(k/2)x² has m=2 kg and k=50 N/m."
    ],
    "question": [
      "角振動数（rad/s）は？",
      "Find angular frequency (rad/s)."
    ],
    "assumptions": [
      "質量一定・線形ばね・減衰なし。",
      "Constant mass, ideal linear undamped spring."
    ],
    "principle": [
      "Lからオイラー＝ラグランジュ方程式を作る。",
      "Derive the equation via Euler–Lagrange."
    ],
    "hints": [
      [
        "q=xとして偏微分する。",
        "Use q=x as generalized coordinate."
      ],
      [
        "mẍ+kx=0を得たらω²=k/m。",
        "Identify ω²=k/m after deriving the ODE."
      ]
    ],
    "steps": [
      {
        "tex": "\\frac{d}{dt}\\frac{\\partial L}{\\partial\\dot x}-\\frac{\\partial L}{\\partial x}=0",
        "why": [
          "作用の停留から出る方程式。",
          "Euler–Lagrange equation."
        ]
      },
      {
        "tex": "m\\ddot x+kx=0",
        "why": [
          "運動方程式を導く。",
          "Derive the equation of motion."
        ]
      },
      {
        "tex": "\\omega=\\sqrt{k/m}=\\sqrt{50/2}=5\\ \\rm rad/s",
        "why": [
          "質量とばね定数から角振動数。",
          "Frequency from mass and stiffness."
        ]
      }
    ],
    "answer": {
      "value": 5,
      "unit": "rad/s"
    },
    "interpretation": [
      "ニュートン力学からの計算と同じ予測。",
      "This agrees with Newtonian spring mechanics."
    ],
    "trap": [
      "Lをエネルギーと同一視しない。L=K−UであってK+Uではない。",
      "L is K−U here, not total mechanical energy K+U."
    ],
    "links": [
      "oscillation",
      "hamilton"
    ]
  },
  {
    "id": "lagrange-coordinate",
    "chapter": "lagrange",
    "type": "reasoning",
    "title": [
      "振り子の独立な座標はいくつ？",
      "How many independent coordinates for a pendulum?"
    ],
    "situation": [
      "長さ一定の糸につながれた質点は平面内を動く。",
      "A pendulum bob moves in a plane on a fixed-length string."
    ],
    "question": [
      "xとyの両方を独立に指定する必要は？",
      "Must x and y both be independent coordinates?"
    ],
    "assumptions": [
      "糸は伸びず、支持点は固定。",
      "The massless string is inextensible; pivot fixed."
    ],
    "principle": [
      "拘束条件により自由度が減る。",
      "Constraints reduce degrees of freedom."
    ],
    "hints": [
      [
        "x²+y²=ℓ²の拘束を確認。",
        "Use the constraint x²+y²=ℓ²."
      ],
      [
        "角度θだけで位置が決まる。",
        "One angle θ determines position."
      ]
    ],
    "steps": [
      {
        "tex": "x=\\ell\\sin\\theta,\\quad y=-\\ell\\cos\\theta",
        "why": [
          "位置を一つの角度で表せる。",
          "A single angle parametrizes the position."
        ]
      },
      {
        "tex": "x^2+y^2=\\ell^2",
        "why": [
          "座標二つには拘束がある。",
          "Two Cartesian coordinates are constrained."
        ]
      }
    ],
    "answer": null,
    "interpretation": [
      "自由度は1。一般化座標θを選ぶと拘束が自然に満たされる。",
      "One degree of freedom; θ automatically satisfies the constraint."
    ],
    "trap": [
      "拘束がある2座標を、制約なしの独立変数とみなさない。",
      "Do not treat constrained Cartesian variables as independent."
    ],
    "links": [
      "rotation",
      "oscillation"
    ]
  },
  {
    "id": "hamilton-energy",
    "chapter": "hamilton",
    "type": "numeric",
    "title": [
      "位相空間の状態のエネルギー",
      "Energy of a phase-space state"
    ],
    "situation": [
      "質量2 kg、ばね定数50 N/m。位置q=0.40 m、正準運動量p=3 kg·m/s。",
      "A spring with m=2 kg, k=50 N/m has q=0.40 m and p=3 kg·m/s."
    ],
    "question": [
      "ハミルトニアンH（J）は？",
      "Find the Hamiltonian H (J)."
    ],
    "assumptions": [
      "線形ばね、正準運動量p=mq̇となる場合。",
      "Ideal spring where canonical momentum p=m q̇."
    ],
    "principle": [
      "運動量と位置の双方を使うエネルギー関数を作る。",
      "Compute H from both momentum and position."
    ],
    "hints": [
      [
        "H=p²/(2m)+kq²/2。",
        "Write the spring Hamiltonian."
      ],
      [
        "二つの項を別々に計算。",
        "Evaluate each term separately."
      ]
    ],
    "steps": [
      {
        "tex": "H=p^2/(2m)+kq^2/2",
        "why": [
          "この例では全力学的エネルギー。",
          "Here H equals mechanical energy."
        ]
      },
      {
        "tex": "H=9/4+50(0.4)^2/2=2.25+4.00",
        "why": [
          "運動エネルギー項と位置エネルギー項。",
          "Momentum and position terms."
        ]
      },
      {
        "tex": "H=6.25\\ \\rm J",
        "why": [
          "二つのエネルギーを合計。",
          "Add the energy terms."
        ]
      }
    ],
    "answer": {
      "value": 6.25,
      "unit": "J"
    },
    "interpretation": [
      "同じエネルギーを位置qと運動量pの組から求められる。",
      "State energy is determined by the pair q and p."
    ],
    "trap": [
      "一般の正準運動量pが常にmvとは限らない。",
      "Canonical momentum is not universally equal to mv."
    ],
    "links": [
      "energy",
      "lagrange"
    ]
  },
  {
    "id": "hamilton-state",
    "chapter": "hamilton",
    "type": "reasoning",
    "title": [
      "位置だけで運動は決まる？",
      "Can position alone determine motion?"
    ],
    "situation": [
      "同じ位置にいるばねの物体が、右向きにも左向きにも動き得る。",
      "A spring mass at the same position could be moving right or left."
    ],
    "question": [
      "未来の位置を予測するには何が必要？",
      "What else is needed to predict its future motion?"
    ],
    "assumptions": [
      "同じ質量とばね定数、理想的な自由振動。",
      "Same mass and stiffness, ideal oscillation."
    ],
    "principle": [
      "運動の状態は位置と運動量の組で表す。",
      "A state needs both position and momentum."
    ],
    "hints": [
      [
        "同じqでもpの符号が違うことがある。",
        "At the same q, p can have opposite signs."
      ],
      [
        "ハミルトンの一階方程式を読む。",
        "Read Hamilton’s first-order equations."
      ]
    ],
    "steps": [
      {
        "tex": "\\dot q=\\partial H/\\partial p=p/m",
        "why": [
          "位置の変化率はpで決まる。",
          "Momentum determines position rate."
        ]
      },
      {
        "tex": "\\dot p=-\\partial H/\\partial q=-kq",
        "why": [
          "運動量の変化率はqで決まる。",
          "Position controls momentum rate."
        ]
      }
    ],
    "answer": null,
    "interpretation": [
      "同じ位置でもpが違えば次に進む方向が異なる。",
      "Different p at the same q leads to different future motion."
    ],
    "trap": [
      "位置だけを記録して完全な運動状態が分かったと思わない。",
      "Position alone is not a complete dynamical state."
    ],
    "links": [
      "oscillation",
      "lagrange"
    ]
  },
  {
    "id": "coupled-mode",
    "chapter": "coupled",
    "type": "numeric",
    "title": [
      "二つのばねの逆位相モード",
      "Opposite-phase frequency of coupled springs"
    ],
    "situation": [
      "2つの質量m=2 kg、外側のばね定数k=8 N/m、中央結合kc=3 N/m。",
      "Two masses m=2 kg, outer springs k=8 N/m, coupling spring kc=3 N/m."
    ],
    "question": [
      "逆位相モードの角振動数（rad/s）は？",
      "Find the out-of-phase angular frequency (rad/s)."
    ],
    "assumptions": [
      "2つの質量は等しく、線形ばね・小振幅運動。",
      "Equal masses, linear springs, small displacements."
    ],
    "principle": [
      "反対向きに動くと中央のばねも伸縮する。",
      "Opposite motion stretches the coupling spring."
    ],
    "hints": [
      [
        "逆位相ならx₁=−x₂。",
        "For opposite phase, x₁=−x₂."
      ],
      [
        "有効復元係数k+2kc。",
        "Effective stiffness is k+2kc."
      ]
    ],
    "steps": [
      {
        "tex": "\\omega_-=\\sqrt{(k+2k_c)/m}",
        "why": [
          "連成の影響を含める。",
          "Include the coupling contribution."
        ]
      },
      {
        "tex": "\\omega_-=\\sqrt{(8+6)/2}=\\sqrt7\\approx2.646\\ \\rm rad/s",
        "why": [
          "数値を代入。",
          "Substitute the values."
        ]
      }
    ],
    "answer": {
      "value": 2.6457513110645907,
      "unit": "rad/s"
    },
    "interpretation": [
      "結合が強いほど逆位相モードの振動数は高い。",
      "Stronger coupling raises the out-of-phase frequency."
    ],
    "trap": [
      "中央ばねが伸びない同位相モードと同一視しない。",
      "Do not confuse this with the in-phase mode, where the coupling spring is unstretched."
    ],
    "links": [
      "oscillation",
      "hamilton"
    ]
  },
  {
    "id": "coupled-superposition",
    "chapter": "coupled",
    "type": "reasoning",
    "title": [
      "二つの物体の振動をどう分解する？",
      "How to decompose coupled motion"
    ],
    "situation": [
      "2個の質点をばねでつないだ線形系。",
      "Two masses are connected by springs in a linear system."
    ],
    "question": [
      "運動が複雑なとき、どんな単純なパターンに分けられる？",
      "What simpler patterns can describe complicated motion?"
    ],
    "assumptions": [
      "線形・小振幅で等質量と対称なばね配置。",
      "Linear small-amplitude dynamics with symmetric springs and masses."
    ],
    "principle": [
      "固有モードの線形結合として表す。",
      "Use superposition of normal modes."
    ],
    "hints": [
      [
        "一緒に同じ向きに動く場合を考える。",
        "Try in-phase motion."
      ],
      [
        "反対向きに動く場合と比較する。",
        "Compare out-of-phase motion."
      ]
    ],
    "steps": [
      {
        "tex": "q_+=x_1+x_2,\\quad q_-=x_1-x_2",
        "why": [
          "協調した変数に取り直す。",
          "Introduce collective coordinates."
        ]
      },
      {
        "tex": "\\omega_+^2=k/m,\\quad\\omega_-^2=(k+2k_c)/m",
        "why": [
          "モードの振動数は違う。",
          "The two modes have different frequencies."
        ]
      }
    ],
    "answer": null,
    "interpretation": [
      "任意の線形小振幅運動を2つの独立モードの重ね合わせで理解できる。",
      "General small-amplitude linear motion can be decomposed into two normal modes."
    ],
    "trap": [
      "非線形やカオスまで単純な重ね合わせを当然に使わない。",
      "Normal-mode superposition does not generally extend to nonlinear chaotic motion."
    ],
    "links": [
      "oscillation",
      "hamilton"
    ]
  }
];
