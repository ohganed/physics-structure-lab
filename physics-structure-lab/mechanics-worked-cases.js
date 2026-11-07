/* Full worked-application extensions for the 11 non-friction mechanics chapters. */
export const mechanicsWorkedCases={
  "force": {
    "title": [
      "エレベーターと床から受ける力",
      "The force of an elevator floor"
    ],
    "story": [
      "エレベーターの中で体重計に乗っている人を考えます。上向きに加速し始めると、床に強く押されるように感じます。体重計の値が増えたとしても、人の質量が増えたわけではありません。床が人を押す力が変わったのです。",
      "Consider a person standing on a scale in an elevator. When it accelerates upward, the floor seems to press harder. A larger scale reading does not mean the person gained mass; the supporting force has changed."
    ],
    "conditions": [
      "質量60 kgの人、g=9.8 m/s²、エレベーターの加速度が上向き2 m/s²。人は床に接したままで、他の鉛直力はありません。",
      "Mass 60 kg, g=9.8 m/s², elevator acceleration upward 2 m/s². The person remains in contact with the floor; other vertical forces are negligible."
    ],
    "steps": [
      {
        "math": "N-mg=ma",
        "why": [
          "人が受ける上向きの力Nと、下向きの重力mgを区別します。上向きを正に取れば、その差が加速度を生みます。",
          "Separate upward floor reaction N from downward weight mg. Their signed difference produces the upward acceleration."
        ]
      },
      {
        "math": "N=m(g+a)",
        "why": [
          "式をNについて解きます。加速していないときはN=mgに戻ります。",
          "Rearrange for N. When acceleration vanishes, the result reduces to N=mg."
        ]
      },
      {
        "math": "N=60(9.8+2)=708\\,\\mathrm N",
        "why": [
          "体重計の力の読みは708 Nです。静止している場合の588 Nとは異なります。",
          "The scale reads a supporting force of 708 N rather than the 588 N at rest."
        ]
      },
      {
        "math": "a=-2\\,\\mathrm{m/s^2}\\Rightarrow N=60(9.8-2)=468\\,\\mathrm N",
        "why": [
          "逆に下向きへ加速すると、床が人を押す力は小さくなります。",
          "If the elevator accelerates downward instead, the supporting force decreases."
        ]
      }
    ],
    "interpretation": [
      "体重計は質量そのものを直接測っているのではなく、支持力を測ります。地上での換算表示は重力加速度を仮定しています。",
      "A scale responds to supporting force, not mass directly; its kilogram display is calibrated assuming local gravity."
    ],
    "limits": [
      "人が床から離れてしまう場合や、エレベーターが回転する場合は別の扱いが必要です。",
      "Losing contact with the floor or rotating the frame changes the analysis."
    ]
  },
  "energy": {
    "title": [
      "車が止まるまでの距離",
      "The distance needed to stop a car"
    ],
    "story": [
      "車が同じ強さでブレーキをかけるとして、走り始めの速さが2倍なら止まるまでの距離はどう変わるでしょう。速度が2倍だから距離も2倍、と決めることはできません。力と変位の関係から調べます。",
      "Suppose a car brakes with the same constant opposing force. If initial speed doubles, how does stopping distance change? It is not automatically doubled: investigate the force through displacement."
    ],
    "conditions": [
      "質量1000 kg、初速20 m/s、一定の制動力4000 N、水平直線路、反応時間を含めない。",
      "Mass 1000 kg, initial speed 20 m/s, constant braking force 4000 N, level straight road, excluding reaction distance."
    ],
    "steps": [
      {
        "math": "K_0=\\frac12mv_0^2=\\frac12(1000)(20)^2=200000\\,\\mathrm J",
        "why": [
          "初めの運動エネルギーを計算します。停止時には速度0なので、最後の運動エネルギーは0です。",
          "Calculate initial kinetic energy. At rest the final kinetic energy is zero."
        ]
      },
      {
        "math": "W=-Fd=K_f-K_0=-200000\\,\\mathrm J",
        "why": [
          "進行方向と逆の制動力は負の仕事をします。道路上の停止距離をdとします。",
          "The braking force opposes motion and does negative work. Let d be the stopping distance."
        ]
      },
      {
        "math": "d=200000/4000=50\\,\\mathrm m",
        "why": [
          "制動力が一定なら、止まるまでの距離は50 mです。",
          "With a constant braking force, stopping distance is 50 m."
        ]
      },
      {
        "math": "d\\propto v_0^2\\quad(F,m\\ \\mathrm{constant})",
        "why": [
          "速度が40 m/sに倍増すると、最初の運動エネルギーが4倍になり、停止距離も200 mになります。",
          "At 40 m/s, four times as much kinetic energy must be removed, so stopping distance becomes 200 m."
        ]
      }
    ],
    "interpretation": [
      "同じ制動力なら、停止距離が速度の二乗に比例する理由が見えてきます。距離と時間を区別して考えることが大切です。",
      "Under constant braking force, distance scales with the square of initial speed. Stopping distance and stopping time are different quantities."
    ],
    "limits": [
      "実際には摩擦係数、タイヤ、路面、ブレーキの変化、空気抵抗、運転者の反応距離が関係します。",
      "Real stopping involves tires, road conditions, variable forces, air drag and the driver’s reaction distance."
    ]
  },
  "momentum": {
    "title": [
      "二つの台車がくっつく衝突",
      "Two carts that stick together"
    ],
    "story": [
      "右向きに進む台車が、静止している台車に衝突してくっつく場合を考えます。衝突中の力は大きくても、二台をひとつの系として考えると、互いに及ぼす力積は打ち消し合います。",
      "A moving cart collides with a stationary cart and they stick together. Contact forces during impact can be large, but as a combined system their equal-and-opposite impulses cancel."
    ],
    "conditions": [
      "2 kgの台車が右向き3 m/s、静止する台車が1 kg。衝突中の外力積は無視できる一次元の完全非弾性衝突。",
      "A 2 kg cart moves at 3 m/s right; a 1 kg cart is initially stationary. One-dimensional perfectly inelastic collision, negligible external impulse."
    ],
    "steps": [
      {
        "math": "P_i=(2)(3)+(1)(0)=6\\,\\mathrm{kg\\,m/s}",
        "why": [
          "最初の運動量を二台の分だけ足します。右向きを正にします。",
          "Sum initial momenta for both carts, taking right as positive."
        ]
      },
      {
        "math": "P_f=(2+1)v=3v",
        "why": [
          "くっついた後は二台の速度が同じvになるので、合計質量にvを掛けます。",
          "After sticking, both carts share velocity v, so total final momentum is combined mass times v."
        ]
      },
      {
        "math": "6=3v\\quad\\Rightarrow\\quad v=2\\,\\mathrm{m/s}",
        "why": [
          "合計の運動量が変わらない条件から、衝突後は右向き2 m/sになります。",
          "Conservation of total momentum gives a final velocity of 2 m/s to the right."
        ]
      },
      {
        "math": "K_i=9\\,\\mathrm J,\\quad K_f=6\\,\\mathrm J",
        "why": [
          "運動エネルギーは3 J減っています。くっつく衝突では、変形や内部エネルギーなどへ移るためです。",
          "Kinetic energy decreases by 3 J; sticking collisions convert some kinetic energy into deformation and internal energy."
        ]
      }
    ],
    "interpretation": [
      "この例で保存するのは二台を合わせた系の運動量です。個々の台車の運動量や、二台の運動エネルギーがそれぞれ保存するわけではありません。",
      "The conserved quantity is total momentum of both carts. Individual cart momenta and total kinetic energy do not remain separately constant."
    ],
    "limits": [
      "外部から強い力積を受ける場合には、系全体の運動量も変化します。",
      "A substantial external impulse changes the combined system’s momentum."
    ]
  },
  "circular": {
    "title": [
      "傾いたカーブを走るときの角度",
      "The angle of a banked curve"
    ],
    "story": [
      "道路がカーブの内側に傾いていると、タイヤと路面の摩擦に頼らなくても、路面の垂直抗力の一部が車を円の中心方向へ押すことがあります。傾きと速度の関係を調べます。",
      "On a banked road, the normal reaction from the road has an inward component. At one particular speed, circular motion can be supported without tire friction."
    ],
    "conditions": [
      "半径80 m、速さ20 m/sの等速円運動。車と路面の摩擦を無視し、鉛直方向には加速しない。",
      "Uniform circular motion at radius 80 m and speed 20 m/s; ignore tire friction and assume zero vertical acceleration."
    ],
    "steps": [
      {
        "math": "N\\cos\\theta=mg",
        "why": [
          "路面からの垂直抗力Nを鉛直方向に分解すると、重力とつり合います。",
          "The vertical component of normal force balances gravity."
        ]
      },
      {
        "math": "N\\sin\\theta=m\\frac{v^2}{r}",
        "why": [
          "内側方向の成分が、円運動に必要な中心向きの合力になります。",
          "The inward component supplies the net centripetal force."
        ]
      },
      {
        "math": "\\tan\\theta=\\frac{N\\sin\\theta}{N\\cos\\theta}=\\frac{v^2}{rg}",
        "why": [
          "二つの式を割ると、垂直抗力と車の質量が消えます。",
          "Divide the two equations; both normal force and vehicle mass cancel."
        ]
      },
      {
        "math": "\\theta=\\arctan\\!\\left(\\frac{20^2}{80\\times9.8}\\right)\\approx27.0^\\circ",
        "why": [
          "この速さに対応する摩擦なしの傾斜角は約27°です。",
          "The frictionless bank angle for this speed is about 27 degrees."
        ]
      }
    ],
    "interpretation": [
      "「向心力」という新しい力が追加されたのではありません。実際の垂直抗力の向きが傾いているため、中心向きの合力が生まれます。",
      "No new centripetal interaction was added. The actual normal force points partly inward because of the road’s bank angle."
    ],
    "limits": [
      "摩擦、速度変化、道路の曲率変化、車体の傾きなどを無視した単純なモデルです。",
      "This idealizes away friction, changing speed, varying curvature and vehicle dynamics."
    ]
  },
  "oscillation": {
    "title": [
      "振り子の周期と振れ幅",
      "Pendulum period and amplitude"
    ],
    "story": [
      "短い振り子と長い振り子では、ゆっくり往復する速さが違います。糸が長いと周期はどう変わるのかを調べます。振れ幅が大きい場合も同じ式でよいでしょうか。",
      "A short pendulum oscillates more quickly than a long one. How does length affect its period? Will the same equation hold at very large amplitudes?"
    ],
    "conditions": [
      "長さ1.0 m、支点固定、糸の質量と空気抵抗を無視、初めは角度が小さい。",
      "Length 1.0 m, fixed pivot, negligible string mass and air drag, starting with small amplitude."
    ],
    "steps": [
      {
        "math": "m\\ell\\ddot\\theta=-mg\\sin\\theta",
        "why": [
          "振り子の接線方向に働く重力の成分を、角加速度と結び付けます。",
          "Relate the tangential component of gravity to angular acceleration."
        ]
      },
      {
        "math": "\\sin\\theta\\approx\\theta\\quad(\\theta\\ \\mathrm{in\\ radians})",
        "why": [
          "角度が小さいとき、sinθはθに近づきます。角度をラジアンで扱う必要があります。",
          "For small angles sinθ approaches θ when angle is in radians."
        ]
      },
      {
        "math": "\\ddot\\theta+\\frac g\\ell\\theta\\approx0",
        "why": [
          "この近似を入れると、ばね振動と同じ形の微分方程式になります。",
          "The approximation yields the same mathematical form as a simple linear spring oscillator."
        ]
      },
      {
        "math": "T\\approx2\\pi\\sqrt{\\frac\\ell g}=2\\pi\\sqrt{1/9.8}\\approx2.01\\,\\mathrm s",
        "why": [
          "小振幅なら周期は約2.01秒です。質量mは式から消えます。",
          "At small amplitude the period is about 2.01 s; mass cancels from the equation."
        ]
      },
      {
        "math": "\\frac{\\sin60^\\circ}{60^\\circ\\,(\\pi/180^\\circ)}\\approx0.827",
        "why": [
          "振れ幅が60°ではsinθとθの差が大きく、小角近似はよくありません。",
          "At 60 degrees the ratio sinθ/θ differs notably from 1, so the small-angle approximation is no longer accurate."
        ]
      }
    ],
    "interpretation": [
      "周期の式に振幅が登場しないのは「振幅に関係しない」という無条件の法則だからではありません。小角近似を使った結果です。",
      "Amplitude independence is a consequence of the small-angle approximation, not an unconditional property of all pendulum motion."
    ],
    "limits": [
      "大振幅では周期が振れ幅に依存します。支点の摩擦や空気抵抗でも振動が変わります。",
      "At larger amplitudes the period depends on amplitude; damping and pivot friction also matter."
    ]
  },
  "gravitation": {
    "title": [
      "円軌道の速さと脱出速度",
      "Circular orbit speed and escape speed"
    ],
    "story": [
      "衛星が地球を一周する運動と、地球の重力から離れて遠方へ向かう運動を比べます。同じ地心距離でも、どの程度の速さが必要なのでしょうか。",
      "Compare moving around Earth in a circular orbit with escaping far away from Earth’s gravitational attraction. What speeds correspond to these different motions at the same radius?"
    ],
    "conditions": [
      "地心距離r=7.00×10⁶ m、GM=3.986×10¹⁴ m³/s²、中心重力、抵抗や他天体の影響なし。",
      "Geocentric radius 7.00×10⁶ m, GM=3.986×10¹⁴ m³/s², central gravity with no drag or other bodies."
    ],
    "steps": [
      {
        "math": "\\frac{GM}{r^2}=\\frac{v_c^2}{r}\\quad\\Rightarrow\\quad v_c=\\sqrt{\\frac{GM}{r}}",
        "why": [
          "円軌道では、重力加速度が円運動の中心向き加速度を与えます。",
          "For a circular orbit, gravity supplies the inward circular acceleration."
        ]
      },
      {
        "math": "U(r)=-\\frac{GMm}{r}",
        "why": [
          "無限遠で位置エネルギーを0とする重力の位置エネルギーです。",
          "Choose zero potential energy at infinity; the gravitational potential energy is negative at finite r."
        ]
      },
      {
        "math": "E=\\frac12mv^2-\\frac{GMm}{r}",
        "why": [
          "速度による運動エネルギーと位置による位置エネルギーを足します。",
          "Total mechanical energy is kinetic plus gravitational potential energy."
        ]
      },
      {
        "math": "E=0\\Rightarrow v_{\\rm esc}=\\sqrt{\\frac{2GM}{r}}=\\sqrt2\\,v_c",
        "why": [
          "無限遠で速さが0になる境界ではE=0です。同じ半径の円軌道速度の√2倍になります。",
          "The limiting trajectory reaches infinity with zero speed, so E=0. Escape speed is √2 times circular speed at the same radius."
        ]
      },
      {
        "math": "v_c\\approx7.55\\,\\mathrm{km/s},\\qquad v_{\\rm esc}\\approx10.67\\,\\mathrm{km/s}",
        "why": [
          "この距離での二つの速さを比較できます。",
          "At this radius we can compare the two characteristic speeds."
        ]
      }
    ],
    "interpretation": [
      "人工衛星に重力がないわけではありません。円運動をする場合と脱出する場合は、同じ力でも初めの速度とエネルギーが違います。",
      "Orbiting does not mean gravity is absent. Circular and escape trajectories have different initial energies under the same gravitational interaction."
    ],
    "limits": [
      "大気抵抗や地球の自転、噴射中の推力、地球以外の重力は考えていません。",
      "Ignores air drag, Earth’s rotation, powered thrust and other gravitational bodies."
    ]
  },
  "rotation": {
    "title": [
      "同じ坂を転がる円盤と輪",
      "A disk and a hoop rolling downhill"
    ],
    "story": [
      "同じ質量・同じ半径の円盤と輪を斜面の同じ高さから放します。どちらが速くなるのでしょう。物体の質量が同じでも、回転しやすさは質量がどこに分布するかで変わります。",
      "Release a disk and a hoop with equal mass and radius from the same height on an incline. Which reaches the bottom faster? Rotational inertia depends on where mass is located, even when total mass is equal."
    ],
    "conditions": [
      "高さh=1.5 m、滑らずに転がる剛体、静止状態から出発、空気抵抗なし、床は静止。",
      "Height h=1.5 m, rigid bodies rolling without slipping from rest, negligible drag, stationary surface."
    ],
    "steps": [
      {
        "math": "mgh=\\frac12mv^2+\\frac12I\\omega^2",
        "why": [
          "高さが下がることで失った位置エネルギーが、並進と回転の運動エネルギーになります。",
          "Lost gravitational potential energy becomes translational and rotational kinetic energy."
        ]
      },
      {
        "math": "\\omega=\\frac vR",
        "why": [
          "滑らずに転がるため、中心の速さと角速度が半径を通じて結び付きます。",
          "For rolling without slipping, center speed and angular velocity are related by the radius."
        ]
      },
      {
        "math": "I_{\\rm disk}=\\frac12mR^2\\Rightarrow v_{\\rm disk}=\\sqrt{\\frac{4gh}{3}}",
        "why": [
          "一様な円盤の慣性モーメントを使うと、速さの式が得られます。",
          "Using the moment of inertia of a uniform disk yields this speed."
        ]
      },
      {
        "math": "I_{\\rm hoop}=mR^2\\Rightarrow v_{\\rm hoop}=\\sqrt{gh}",
        "why": [
          "薄い輪は質量が外側に多く、同じ速さになるまでに多くの回転エネルギーが必要です。",
          "For a thin hoop, more mass lies far from the axis, so more energy is rotational at the same speed."
        ]
      },
      {
        "math": "v_{\\rm disk}=\\sqrt{19.6}\\approx4.43\\,\\mathrm{m/s},\\quad v_{\\rm hoop}=\\sqrt{14.7}\\approx3.83\\,\\mathrm{m/s}",
        "why": [
          "円盤の方が速くなります。",
          "The disk reaches the bottom faster."
        ]
      }
    ],
    "interpretation": [
      "円盤と輪の違いは「どちらが重いか」ではなく、回転にどの程度エネルギーを分ける必要があるかにあります。",
      "The distinction is not total weight but how much of the energy is distributed into rotational motion."
    ],
    "limits": [
      "滑らずに転がることと、変形による損失がないことが条件です。純粋な転がりでは静止摩擦がトルクを与えますが、固定された面に対する接触点の瞬間速度は0です。",
      "Requires no slipping and no deformation losses. Static friction provides torque, but the instantaneous contact point is at rest on the fixed surface."
    ]
  },
  "noninertial": {
    "title": [
      "加速する電車の中の振り子",
      "A hanging mass in an accelerating train"
    ],
    "story": [
      "一定の加速度で発進する電車の天井から糸で小球を吊すと、糸は後方に傾きます。地面から見た説明と、電車内から見た説明を比べてみます。",
      "Hang a small mass from a train ceiling while the train accelerates forward. The string tilts backward. Compare the ground observer’s explanation with the passenger’s."
    ],
    "conditions": [
      "電車は水平方向に一定加速度A=2 m/s²で動き、振り子は電車に対して静止。g=9.8 m/s²、糸は質量なし。",
      "Train accelerates horizontally at constant A=2 m/s²; the hanging bob is at rest relative to the train, g=9.8 m/s², massless string."
    ],
    "steps": [
      {
        "math": "F_{\\rm app}=-mA",
        "why": [
          "車内の座標系では進行方向と逆向きの見かけの力を加えると、静止状態を記述できます。",
          "In the accelerating train frame, an apparent force opposite the acceleration allows a static force balance."
        ]
      },
      {
        "math": "T\\sin\\theta=mA",
        "why": [
          "糸の張力の水平方向成分が、見かけの力とつり合います。",
          "The horizontal component of string tension balances the apparent force."
        ]
      },
      {
        "math": "T\\cos\\theta=mg",
        "why": [
          "張力の鉛直方向成分は重力とつり合います。",
          "The vertical component of tension balances gravity."
        ]
      },
      {
        "math": "\\tan\\theta=\\frac A g",
        "why": [
          "二つの式を割ると張力Tと質量mが消え、傾きが加速度で決まることがわかります。",
          "Dividing cancels tension and mass, leaving an angle determined by acceleration and gravity."
        ]
      },
      {
        "math": "\\theta=\\arctan(2/9.8)\\approx11.5^\\circ",
        "why": [
          "小球は鉛直から後ろ向きに約11.5°傾きます。",
          "The bob tilts approximately 11.5 degrees backward from vertical."
        ]
      }
    ],
    "interpretation": [
      "地上から見れば、糸の水平成分が小球を電車と同じ方向へ加速しています。車内では−mAを加えることで同じ傾きを説明できます。",
      "From the ground, horizontal tension accelerates the bob. In the train frame, adding −mA accounts for the same tilt."
    ],
    "limits": [
      "発進直後に振れ続ける過渡運動ではなく、電車に対して静止する状態を考えます。",
      "This describes a steady tilt relative to the train, not the transient swinging immediately after acceleration begins."
    ]
  },
  "lagrange": {
    "title": [
      "滑車でつながれた二つの物体",
      "Two bodies connected by a pulley"
    ],
    "story": [
      "二つの物体が軽い糸でつながれていると、片方だけ自由に動くことはできません。重い方が下がれば、軽い方は同じ長さだけ上がります。この拘束に合う変数を選ぶと、張力を途中で求めなくても運動を表せます。",
      "Two masses connected by a light string cannot move independently. When the heavier mass moves down, the lighter moves up by the same distance. A coordinate respecting that constraint can describe both without solving for tension first."
    ],
    "conditions": [
      "質量m₁=3 kg、m₂=2 kg、糸と滑車は軽く摩擦なし、糸は伸びない、g=9.8 m/s²。",
      "Masses m1=3 kg and m2=2 kg; light inextensible string, ideal massless frictionless pulley, g=9.8 m/s²."
    ],
    "steps": [
      {
        "math": "q=\\text{3 kg側の下向き変位}",
        "why": [
          "重い物体の下向き変位qを選びます。軽い物体の上向き変位もqです。",
          "Choose downslope displacement q of the heavier mass. The lighter mass rises by the same q."
        ]
      },
      {
        "math": "K=\\frac12(m_1+m_2)\\dot q^2",
        "why": [
          "二物体とも速さの大きさはq̇なので、運動エネルギーを合計できます。",
          "Both masses have speed magnitude q̇, so their kinetic energies add."
        ]
      },
      {
        "math": "U=-(m_1-m_2)gq+\\mathrm{constant}",
        "why": [
          "重い方は下がり、軽い方は上がります。高さの変化を符号付きで足すと、この形になります。",
          "The heavy mass loses height while the lighter gains height. The signed potential-energy changes combine into this expression."
        ]
      },
      {
        "math": "L=K-U=\\frac12(m_1+m_2)\\dot q^2+(m_1-m_2)gq",
        "why": [
          "運動エネルギーと位置エネルギーの差をラグランジアンとします。",
          "Construct the Lagrangian as kinetic minus potential energy."
        ]
      },
      {
        "math": "\\frac{d}{dt}\\frac{\\partial L}{\\partial\\dot q}-\\frac{\\partial L}{\\partial q}=0",
        "why": [
          "一つの自由度qについてオイラー＝ラグランジュ方程式を適用します。",
          "Apply Euler–Lagrange to the single independent coordinate q."
        ]
      },
      {
        "math": "(m_1+m_2)\\ddot q=(m_1-m_2)g\\Rightarrow\\ddot q=1.96\\,\\mathrm{m/s^2}",
        "why": [
          "m₁=3、m₂=2を代入すると、重い側の下向き加速度が得られます。",
          "Substituting the masses yields 1.96 m/s² downward for the heavier mass."
        ]
      }
    ],
    "interpretation": [
      "糸の張力が存在しないのではありません。拘束を満たす座標を選んだので、二物体系の運動を張力を明示せず記述できたのです。",
      "Tension still exists. Choosing a coordinate that already respects the constraint allows us to describe system motion without explicitly solving for it."
    ],
    "limits": [
      "糸が伸びたり滑車に慣性モーメントや摩擦があったりすれば、その分をモデルへ含める必要があります。",
      "A stretching string or pulley with inertia and friction requires a richer model."
    ]
  },
  "hamilton": {
    "title": [
      "ばねの状態を位置と運動量で表す",
      "A spring state in position and momentum"
    ],
    "story": [
      "ばねの物体が平衡位置にいる瞬間でも、右へ動いている場合と左へ動いている場合があります。同じ位置だけでは、次にどこへ進むかは決まりません。位置qと運動量pを合わせてみます。",
      "At equilibrium, a spring mass may be moving either right or left. Position alone does not determine its immediate future. Consider the pair of position q and momentum p."
    ],
    "conditions": [
      "質量m=2 kg、ばね定数k=50 N/m、理想的な減衰のない線形ばね、全エネルギーE=4 J。",
      "Ideal undamped linear spring with m=2 kg, k=50 N/m and constant energy E=4 J."
    ],
    "steps": [
      {
        "math": "H(q,p)=\\frac{p^2}{2m}+\\frac12kq^2",
        "why": [
          "この単純な系では、ハミルトニアンが運動エネルギーと位置エネルギーの和になります。",
          "For this simple system, the Hamiltonian equals kinetic plus potential energy."
        ]
      },
      {
        "math": "4=\\frac{p^2}{4}+25q^2",
        "why": [
          "mとkとEの値を入れると、同じエネルギーの状態を結ぶ式になります。",
          "Substitute m, k and E to describe states with the same energy."
        ]
      },
      {
        "math": "p=0\\Rightarrow q=\\pm\\sqrt{\\frac8{50}}=\\pm0.4\\,\\mathrm m",
        "why": [
          "運動量0の折り返し点で、変位の大きさが最大になります。",
          "At turning points momentum vanishes and displacement has maximum magnitude."
        ]
      },
      {
        "math": "q=0\\Rightarrow p=\\pm\\sqrt{2mE}=\\pm4\\,\\mathrm{kg\\,m/s}",
        "why": [
          "平衡位置では運動量の大きさが最大で、正負の両方の状態があり得ます。",
          "At equilibrium momentum magnitude is largest and may have either sign."
        ]
      },
      {
        "math": "\\frac{q^2}{0.4^2}+\\frac{p^2}{4^2}=1",
        "why": [
          "位置と運動量の平面に描くと、一定エネルギーの軌道が楕円になります。",
          "In phase space of q versus p, the fixed-energy trajectory is an ellipse."
        ]
      }
    ],
    "interpretation": [
      "同じ位置で運動量が正か負かによって次の動きが異なります。位相空間の一点が運動状態を表す、という考え方が具体的に見えてきます。",
      "At a given position, the sign of momentum distinguishes future motion. One phase-space point represents the dynamical state."
    ],
    "limits": [
      "この形は単純なばねの例です。一般には正準運動量とmvが一致するとは限らず、ハミルトニアンが単純に総力学エネルギーになるとも限りません。",
      "This ellipse is for an ideal spring. Canonical momentum is not universally mv, and Hamiltonian is not always a simple mechanical-energy sum."
    ]
  },
  "coupled": {
    "title": [
      "二つのばねに現れるうなり",
      "Beating between two coupled oscillators"
    ],
    "story": [
      "二つの物体を中央のばねでつなぎ、一方だけ引いて離すと、動きがもう一方へ移ったり戻ったりするように見えます。二つの固有振動の角振動数が少しだけ違うと、このゆっくりした変化を計算できます。",
      "Displace one of two coupled masses and release it. Motion appears to pass to the other mass and return. Slightly different normal-mode frequencies produce this slow envelope."
    ],
    "conditions": [
      "各質量m=2 kg、外側のばね定数k=8 N/m、結合ばね定数kc=1 N/m、線形・小振幅。",
      "Equal masses m=2 kg, outer spring stiffness k=8 N/m, coupling stiffness kc=1 N/m; linear small-amplitude motion."
    ],
    "steps": [
      {
        "math": "\\omega_+=\\sqrt{\\frac{k}{m}}=2\\,\\mathrm{rad/s}",
        "why": [
          "二つが同じ向きに動くモードでは中央ばねは伸びません。",
          "The in-phase mode does not stretch the central spring."
        ]
      },
      {
        "math": "\\omega_-=\\sqrt{\\frac{k+2k_c}{m}}=\\sqrt5\\approx2.236\\,\\mathrm{rad/s}",
        "why": [
          "反対向きのモードでは中央ばねも働き、角振動数が少し大きくなります。",
          "The opposite-phase mode stretches the coupling spring and has a slightly higher frequency."
        ]
      },
      {
        "math": "x_1(t)=\\frac A2(\\cos\\omega_+t+\\cos\\omega_-t)",
        "why": [
          "片方だけ動かして離す初期状態は、二つのモードを同じ振幅で重ねた状態として表せます。",
          "Starting with only one mass displaced is a superposition of the two normal modes with equal amplitudes."
        ]
      },
      {
        "math": "x_1(t)=A\\cos\\!\\left(\\frac{\\omega_++\\omega_-}{2}t\\right)\\cos\\!\\left(\\frac{\\omega_--\\omega_+}{2}t\\right)",
        "why": [
          "三角関数の和積公式で、速い振動とゆっくり変わる振幅に分かれます。",
          "A trigonometric product identity separates fast oscillation from a slowly changing amplitude envelope."
        ]
      },
      {
        "math": "T_{\\rm beat}=\\frac{2\\pi}{|\\omega_--\\omega_+|}\\approx26.6\\,\\mathrm s",
        "why": [
          "ゆっくりした変化が繰り返される時間が、二つの角振動数の差で決まります。",
          "The envelope recurrence timescale is set by the frequency difference."
        ]
      }
    ],
    "interpretation": [
      "連成振動を二つの物体ごとに追いかける代わりに、同位相・逆位相のモードに分けると、エネルギーが行き来するように見える理由を説明できます。",
      "Normal-mode coordinates explain the apparent exchange of motion more simply than tracking each mass independently."
    ],
    "limits": [
      "線形・無減衰の理想モデルです。抵抗や非線形性があると振幅の変化や周期は異なります。",
      "The model is linear and undamped. Dissipation or nonlinearity changes the envelope and period."
    ]
  }
};
