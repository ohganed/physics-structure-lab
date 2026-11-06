/* Original bilingual problems for the six core mechanics chapters. */
export const practiceProblemsPart1 = [
  {
    "id": "force-net",
    "chapter": "force",
    "type": "numeric",
    "title": [
      "台車に働く力を数える",
      "Find a cart’s acceleration"
    ],
    "situation": [
      "質量2 kgの台車を右へ6 Nで押し、摩擦は左へ2 N。",
      "A 2 kg cart is pushed with 6 N right and friction acts with 2 N left."
    ],
    "question": [
      "右を正に、加速度（m/s²）を求めよう。",
      "With right positive, find signed acceleration (m/s²)."
    ],
    "assumptions": [
      "水平方向にはこの2力のみ。質量一定・慣性系。",
      "Only these horizontal forces act; constant mass and an inertial frame."
    ],
    "principle": [
      "合力は同じ物体に働く力のベクトル和。",
      "The net force is the vector sum of forces on the same body."
    ],
    "hints": [
      [
        "力の向きを符号で示す。",
        "Assign opposite signs to opposite directions."
      ],
      [
        "合力を質量で割る。",
        "Divide the net force by mass."
      ]
    ],
    "steps": [
      {
        "tex": "F_{\\rm net}=+6-2=4\\ \\mathrm{N}",
        "why": [
          "右の力が正、左の摩擦が負。",
          "Rightward force positive, friction negative."
        ]
      },
      {
        "tex": "a=F_{\\rm net}/m=4/2=2\\ \\mathrm{m/s^2}",
        "why": [
          "合力から加速度を計算。",
          "Net force determines acceleration."
        ]
      }
    ],
    "answer": {
      "value": 2,
      "unit": "m/s²"
    },
    "interpretation": [
      "速度が毎秒右向きに2 m/sずつ変化する。",
      "Velocity changes by +2 m/s each second."
    ],
    "trap": [
      "台車が床を押す力は、台車に作用する力ではない。",
      "The force the cart exerts on the floor does not act on the cart."
    ],
    "links": [
      "friction",
      "circular"
    ]
  },
  {
    "id": "force-inertia",
    "chapter": "force",
    "type": "reasoning",
    "title": [
      "押さない台車が進む理由",
      "Why an unpushed cart keeps moving"
    ],
    "situation": [
      "摩擦のない水平面で台車が右へ3 m/sで進み、手を離す。",
      "On a frictionless horizontal surface, a cart moves right at 3 m/s and is released."
    ],
    "question": [
      "その後の速度と加速度は？",
      "What are its subsequent velocity and acceleration?"
    ],
    "assumptions": [
      "水平合力0、慣性系。",
      "Zero net horizontal force in an inertial frame."
    ],
    "principle": [
      "合力は速度そのものではなく、その変化率を決める。",
      "Net force determines change in velocity, not velocity itself."
    ],
    "hints": [
      [
        "F=0を運動方程式へ。",
        "Set F=0 in Newton’s law."
      ],
      [
        "速度が0と加速度が0を区別。",
        "Distinguish zero velocity from zero acceleration."
      ]
    ],
    "steps": [
      {
        "tex": "\\sum F_x=ma_x=0",
        "why": [
          "合力が0なので加速度は0になる。",
          "Acceleration is zero."
        ]
      },
      {
        "tex": "v_x(t)=3\\ \\mathrm{m/s}",
        "why": [
          "初速が保たれる。",
          "The initial velocity persists."
        ]
      }
    ],
    "answer": null,
    "interpretation": [
      "右へ3 m/sで等速運動する。",
      "It continues uniformly right at 3 m/s."
    ],
    "trap": [
      "実際の床で止まるのは主に摩擦があるから。",
      "On a real floor, friction causes slowing."
    ],
    "links": [
      "friction",
      "circular"
    ]
  },
  {
    "id": "friction-angle",
    "chapter": "friction",
    "type": "numeric",
    "title": [
      "滑り出す斜面の角度",
      "The limiting slope angle"
    ],
    "situation": [
      "粗い斜面の静止摩擦係数μs=0.50。",
      "A slope has a static friction coefficient μs=0.50."
    ],
    "question": [
      "滑り始める限界角度（°）は？",
      "What is the limiting angle (degrees)?"
    ],
    "assumptions": [
      "箱は接触を保ち、クーロン摩擦モデルが成り立つ。",
      "Contact is maintained; the Coulomb model applies."
    ],
    "principle": [
      "必要な摩擦と上限を比較する。",
      "Compare required static friction against its maximum."
    ],
    "hints": [
      [
        "面に垂直方向の力の釣り合い。",
        "Balance forces perpendicular to the plane."
      ],
      [
        "限界では等号を使う。",
        "Use equality at the threshold."
      ]
    ],
    "steps": [
      {
        "tex": "N=mg\\cos\\theta",
        "why": [
          "斜面の垂直抗力。",
          "Normal force on the slope."
        ]
      },
      {
        "tex": "mg\\sin\\theta=\\mu_sN",
        "why": [
          "静止摩擦の限界。",
          "Maximum static friction balances downslope gravity."
        ]
      },
      {
        "tex": "\\theta=\\arctan(0.50)\\approx26.565^\\circ",
        "why": [
          "両辺のmgは消える。",
          "Mass cancels from the threshold relation."
        ]
      }
    ],
    "answer": {
      "value": 26.565051177,
      "unit": "°"
    },
    "interpretation": [
      "理想モデルでは質量に依存しない。",
      "Mass does not affect the ideal limiting angle."
    ],
    "trap": [
      "静止摩擦は常にμsNではない。",
      "Static friction is not always equal to μsN."
    ],
    "links": [
      "force",
      "energy"
    ]
  },
  {
    "id": "friction-rest",
    "chapter": "friction",
    "type": "reasoning",
    "title": [
      "止まった箱にも摩擦？",
      "Can friction act on a resting box?"
    ],
    "situation": [
      "斜面に置いた箱は滑っていない。",
      "A block rests without sliding on an incline."
    ],
    "question": [
      "静止摩擦は0なのか？",
      "Must static friction be zero?"
    ],
    "assumptions": [
      "他の斜面方向外力はない。",
      "No other parallel force acts."
    ],
    "principle": [
      "静止は合力0を意味し、個々の力0を意味しない。",
      "Rest means zero net force, not zero individual force."
    ],
    "hints": [
      [
        "重力を斜面方向に分解。",
        "Resolve gravity along the slope."
      ],
      [
        "つり合う力を探す。",
        "Find the balancing force."
      ]
    ],
    "steps": [
      {
        "tex": "F_{\\parallel}=mg\\sin\\theta",
        "why": [
          "重力の下向き成分。",
          "Downslope gravity component."
        ]
      },
      {
        "tex": "f_s=mg\\sin\\theta\\leq\\mu_sN",
        "why": [
          "静止摩擦が上向きにつり合う。",
          "Static friction balances it upslope."
        ]
      }
    ],
    "answer": null,
    "interpretation": [
      "傾斜がある静止物体には、一般に摩擦が働く。",
      "A stationary body on an incline generally experiences static friction."
    ],
    "trap": [
      "摩擦を常に最大値に固定しない。",
      "Do not always set friction to its maximum."
    ],
    "links": [
      "force",
      "rotation"
    ]
  },
  {
    "id": "energy-drop",
    "chapter": "energy",
    "type": "numeric",
    "title": [
      "落下速度をエネルギーで求める",
      "Speed predicted from energy"
    ],
    "situation": [
      "物体を地上5.0 mから静かに放す。",
      "Release a body from rest 5.0 m above the ground."
    ],
    "question": [
      "衝突直前の速さ（m/s）は？",
      "Find its speed before impact (m/s)."
    ],
    "assumptions": [
      "空気抵抗なし、g=9.8 m/s²。",
      "No air drag; g=9.8 m/s²."
    ],
    "principle": [
      "始点と終点のエネルギーを比べる。",
      "Compare initial and final energies."
    ],
    "hints": [
      [
        "初速0なら初期運動エネルギー0。",
        "Initially the kinetic energy is zero."
      ],
      [
        "失った位置エネルギーに注目。",
        "Track lost gravitational potential energy."
      ]
    ],
    "steps": [
      {
        "tex": "mgh=\\frac12mv^2",
        "why": [
          "高さの減少が運動エネルギーへ。",
          "Lost potential energy becomes kinetic energy."
        ]
      },
      {
        "tex": "v=\\sqrt{2gh}=\\sqrt{98}\\approx9.899\\ \\mathrm{m/s}",
        "why": [
          "mが消えるので質量は結果に現れない。",
          "Mass cancels in the ideal result."
        ]
      }
    ],
    "answer": {
      "value": 9.899494936611665,
      "unit": "m/s"
    },
    "interpretation": [
      "速さ約9.90 m/s。",
      "Speed is about 9.90 m/s."
    ],
    "trap": [
      "抵抗がある場合に無条件で機械的エネルギー保存を使わない。",
      "Do not assume mechanical energy is conserved with drag."
    ],
    "links": [
      "friction",
      "gravitation"
    ]
  },
  {
    "id": "energy-loss",
    "chapter": "energy",
    "type": "reasoning",
    "title": [
      "摩擦でエネルギーが消える？",
      "Does friction destroy energy?"
    ],
    "situation": [
      "摩擦で滑る箱が減速する。",
      "A box slows while sliding with friction."
    ],
    "question": [
      "エネルギー保存が破れたのか？",
      "Is energy conservation violated?"
    ],
    "assumptions": [
      "箱と床は発熱する。",
      "The box and floor can heat up."
    ],
    "principle": [
      "力学的エネルギーと総エネルギーを区別する。",
      "Distinguish mechanical energy from total energy."
    ],
    "hints": [
      [
        "何を系に含める？",
        "What belongs to the system?"
      ],
      [
        "内部エネルギーを考える。",
        "Consider internal energy."
      ]
    ],
    "steps": [
      {
        "tex": "\\Delta K=W_{\\rm friction}<0",
        "why": [
          "箱の運動エネルギーは減る。",
          "The box loses kinetic energy."
        ]
      },
      {
        "tex": "\\Delta E_{\\rm total}=0",
        "why": [
          "適切な閉じた系で総エネルギーは保存する。",
          "Total energy is conserved for an appropriately closed system."
        ]
      }
    ],
    "answer": null,
    "interpretation": [
      "運動エネルギーは熱などへ移る。",
      "Kinetic energy transfers into heat and other forms."
    ],
    "trap": [
      "力学的エネルギー保存と総エネルギー保存を混同しない。",
      "Do not conflate mechanical-energy with total-energy conservation."
    ],
    "links": [
      "momentum",
      "friction"
    ]
  },
  {
    "id": "momentum-stick",
    "chapter": "momentum",
    "type": "numeric",
    "title": [
      "くっつく衝突の速度",
      "Speed after a sticking collision"
    ],
    "situation": [
      "2 kgの物体が右へ3 m/sで進み、静止する1 kgの物体と合体する。",
      "A 2 kg body moving right at 3 m/s sticks to a stationary 1 kg body."
    ],
    "question": [
      "共通速度（m/s）は？",
      "What is their shared final velocity (m/s)?"
    ],
    "assumptions": [
      "1次元、外部力積を無視できる。",
      "One-dimensional collision with negligible external impulse."
    ],
    "principle": [
      "系全体の運動量を保存。",
      "Conserve momentum of the combined system."
    ],
    "hints": [
      [
        "合体後は速度が共通。",
        "After sticking, both velocities are equal."
      ],
      [
        "衝突前の運動量を合計。",
        "Sum the initial momenta."
      ]
    ],
    "steps": [
      {
        "tex": "P_i=2(3)+1(0)=6\\ \\mathrm{kg\\,m/s}",
        "why": [
          "初期運動量は6。",
          "Initial momentum is 6."
        ]
      },
      {
        "tex": "P_f=(2+1)v=3v",
        "why": [
          "合体した質量に共通速度を掛ける。",
          "Use combined mass and shared speed."
        ]
      },
      {
        "tex": "v=6/3=2\\ \\mathrm{m/s}",
        "why": [
          "総運動量保存から解く。",
          "Solve from momentum conservation."
        ]
      }
    ],
    "answer": {
      "value": 2,
      "unit": "m/s"
    },
    "interpretation": [
      "右向き2 m/s。運動エネルギーは一般に減少。",
      "Rightward 2 m/s. Kinetic energy generally decreases."
    ],
    "trap": [
      "合体する衝突に運動エネルギー保存を適用しない。",
      "Do not impose kinetic-energy conservation for sticking bodies."
    ],
    "links": [
      "energy",
      "coupled"
    ]
  },
  {
    "id": "momentum-system",
    "chapter": "momentum",
    "type": "reasoning",
    "title": [
      "衝突力が大きいのに総運動量保存？",
      "Can momentum be conserved under large collision forces?"
    ],
    "situation": [
      "二つの物体が激しくぶつかる。",
      "Two bodies collide strongly."
    ],
    "question": [
      "それぞれと合計の運動量はどう変わる？",
      "How do individual and combined momenta change?"
    ],
    "assumptions": [
      "外力の力積を無視できる。",
      "External impulse is negligible."
    ],
    "principle": [
      "系の内部力と外部力を区別。",
      "Distinguish internal from external forces."
    ],
    "hints": [
      [
        "両者の接触力は作用反作用。",
        "Contact forces form a third-law pair."
      ],
      [
        "二つの力積の和は？",
        "Add their impulses."
      ]
    ],
    "steps": [
      {
        "tex": "\\Delta p_1=J_{21}",
        "why": [
          "物体1の運動量は変わる。",
          "Body 1 changes momentum."
        ]
      },
      {
        "tex": "\\Delta p_2=-J_{21}",
        "why": [
          "物体2の変化は反対。",
          "Body 2 changes oppositely."
        ]
      },
      {
        "tex": "\\Delta(p_1+p_2)=0",
        "why": [
          "系全体では相殺。",
          "The changes cancel in the combined system."
        ]
      }
    ],
    "answer": null,
    "interpretation": [
      "各物体の運動量は変化し、総運動量だけが保存する。",
      "Each momentum changes; the total remains constant."
    ],
    "trap": [
      "内部力が0ではない。外部力積が小さいことが重要。",
      "Internal forces are not zero; external impulse is what matters."
    ],
    "links": [
      "force",
      "lagrange"
    ]
  },
  {
    "id": "circular-acceleration",
    "chapter": "circular",
    "type": "numeric",
    "title": [
      "円運動の中心向き加速度",
      "Centripetal acceleration"
    ],
    "situation": [
      "半径3 mの円周を速さ6 m/sで等速に回る。",
      "Move at constant 6 m/s around a circle of radius 3 m."
    ],
    "question": [
      "加速度の大きさ（m/s²）は？",
      "Find acceleration magnitude (m/s²)."
    ],
    "assumptions": [
      "等速円運動・慣性系。",
      "Uniform circular motion in an inertial frame."
    ],
    "principle": [
      "速度の向きが変わるため中心向き加速度が生じる。",
      "Changing velocity direction creates inward acceleration."
    ],
    "hints": [
      [
        "速度は円の接線方向。",
        "Velocity is tangent to the circle."
      ],
      [
        "a=v²/rを使う。",
        "Use a=v²/r."
      ]
    ],
    "steps": [
      {
        "tex": "a_c=v^2/r=6^2/3",
        "why": [
          "速さを二乗して半径で割る。",
          "Square speed, divide by radius."
        ]
      },
      {
        "tex": "a_c=12\\ \\mathrm{m/s^2}",
        "why": [
          "大きさと方向を区別。",
          "Distinguish magnitude and direction."
        ]
      }
    ],
    "answer": {
      "value": 12,
      "unit": "m/s²"
    },
    "interpretation": [
      "中心向き12 m/s²。速さ一定でも加速度は0ではない。",
      "12 m/s² inward. Constant speed does not imply zero acceleration."
    ],
    "trap": [
      "向心力は独立の新しい力ではなく、実在する力の中心向き合力。",
      "Centripetal force refers to net inward force, not an extra interaction."
    ],
    "links": [
      "force",
      "gravitation"
    ]
  },
  {
    "id": "circular-vector",
    "chapter": "circular",
    "type": "reasoning",
    "title": [
      "速さ一定なのに加速度がある？",
      "Acceleration at constant speed?"
    ],
    "situation": [
      "物体が一定の速さで円運動する。",
      "A particle moves around a circle at constant speed."
    ],
    "question": [
      "「加速度は0」のどこが間違い？",
      "Why is the claim “acceleration is zero” incorrect?"
    ],
    "assumptions": [
      "速度は向きを持つベクトル量。",
      "Velocity is a vector with direction."
    ],
    "principle": [
      "速さと速度の違いを考える。",
      "Distinguish speed from velocity."
    ],
    "hints": [
      [
        "接線の向きは場所で変化。",
        "Tangent direction changes with position."
      ],
      [
        "速度ベクトルの変化を考える。",
        "Consider the vector difference of velocities."
      ]
    ],
    "steps": [
      {
        "tex": "|\\boldsymbol v|=\\mathrm{const}",
        "why": [
          "大きさだけ一定。",
          "Only speed magnitude is constant."
        ]
      },
      {
        "tex": "d\\boldsymbol v/dt\\ne0",
        "why": [
          "ベクトルの向きが変わる。",
          "Vector direction changes with time."
        ]
      }
    ],
    "answer": null,
    "interpretation": [
      "加速度は速度の時間変化率。中心向きに加速する。",
      "Acceleration is the derivative of vector velocity and points inward."
    ],
    "trap": [
      "速度一定と速さ一定を同じと言わない。",
      "Do not call velocity constant when only speed is constant."
    ],
    "links": [
      "force",
      "gravitation"
    ]
  },
  {
    "id": "spring-period",
    "chapter": "oscillation",
    "type": "numeric",
    "title": [
      "理想ばねの振動周期",
      "Ideal spring period"
    ],
    "situation": [
      "質量2 kg、ばね定数50 N/mの振動子。",
      "A 2 kg mass on a spring of stiffness 50 N/m."
    ],
    "question": [
      "周期（s）を求めよう。",
      "Find the oscillation period (s)."
    ],
    "assumptions": [
      "線形ばね・減衰なし。",
      "Linear undamped spring."
    ],
    "principle": [
      "復元力の式からω²=k/m。",
      "Restoring force gives ω²=k/m."
    ],
    "hints": [
      [
        "角振動数を先に求める。",
        "Calculate angular frequency first."
      ],
      [
        "1周期は位相2π。",
        "One period is a 2π phase change."
      ]
    ],
    "steps": [
      {
        "tex": "m\\ddot x=-kx",
        "why": [
          "ニュートンの法則。",
          "Newton’s law."
        ]
      },
      {
        "tex": "\\omega_0=\\sqrt{k/m}=\\sqrt{50/2}=5\\ \\mathrm{rad/s}",
        "why": [
          "質量とばね定数から角振動数を求める。",
          "Angular frequency."
        ]
      },
      {
        "tex": "T=2\\pi/\\omega_0=2\\pi/5\\approx1.257\\ \\mathrm{s}",
        "why": [
          "角振動数から周期へ。",
          "Convert frequency to period."
        ]
      }
    ],
    "answer": {
      "value": 1.2566370614359172,
      "unit": "s"
    },
    "interpretation": [
      "約1.26秒で一往復。",
      "One cycle takes about 1.26 seconds."
    ],
    "trap": [
      "振幅が変わっても周期は同じだが、運動エネルギーは変わる。",
      "Amplitude-independent period does not imply unchanged energy."
    ],
    "links": [
      "energy",
      "coupled"
    ]
  },
  {
    "id": "spring-turning",
    "chapter": "oscillation",
    "type": "reasoning",
    "title": [
      "折り返し点で加速度は？",
      "Acceleration at the turning point"
    ],
    "situation": [
      "ばね振動の物体が最も右に来た。",
      "A spring mass reaches its rightmost point."
    ],
    "question": [
      "速度と加速度の向きは？",
      "What are velocity and acceleration then?"
    ],
    "assumptions": [
      "平衡位置x=0、右向き正、理想ばね。",
      "Equilibrium x=0, right positive, ideal spring."
    ],
    "principle": [
      "位置・速度・加速度は別の量。",
      "Position, velocity and acceleration are distinct."
    ],
    "hints": [
      [
        "一瞬止まるが、復元力は？",
        "It pauses, but what about restoring force?"
      ],
      [
        "F=−kxの符号に注目。",
        "Examine the sign in F=−kx."
      ]
    ],
    "steps": [
      {
        "tex": "x=+A,\\quad v=0",
        "why": [
          "右端で折り返す。",
          "It turns at positive amplitude."
        ]
      },
      {
        "tex": "a=-kA/m",
        "why": [
          "加速度は左向きで最大の大きさ。",
          "Acceleration points left with maximum magnitude."
        ]
      }
    ],
    "answer": null,
    "interpretation": [
      "速度0、加速度は左向きで0ではない。",
      "Velocity vanishes while acceleration remains nonzero and leftward."
    ],
    "trap": [
      "速度が0だから加速度も0とは限らない。",
      "Zero velocity does not mean zero acceleration."
    ],
    "links": [
      "hamilton",
      "circular"
    ]
  }
];
