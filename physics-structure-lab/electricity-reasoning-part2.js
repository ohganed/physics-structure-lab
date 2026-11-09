/* Deep reasoning on conduction, circuit laws, RC dynamics and Lorentz forces. */
export const electricityReasoningPart2={
  "current-definition": [
    {
      "kind": "definition",
      "steps": [
        [
          "導線に固定した断面を一つ定める。その断面をある時間に通過した正味の電荷の増加量を観測する。",
          "Fix a cross-section of wire and measure net charge crossing it over time."
        ],
        [
          "時間を短くして単位時間あたりの電荷通過率を定義したものが電流。単位はクーロン毎秒で、1 A = 1 C/s。",
          "The instantaneous charge-crossing rate defines current, with 1 A = 1 C/s."
        ],
        [
          "金属中の電子は負電荷なので電子の平均ドリフト向きと電流の正方向は逆。正の電荷が進む方向を電流の向きと約束する。",
          "Electrons drift opposite to conventional current, whose positive direction is that of positive charge."
        ]
      ]
    },
    {
      "kind": "derivation",
      "steps": [
        [
          "断面積Aを通る担体が一様な平均速さで移動すると、時間dtで進む距離はドリフト速さとdtの積となる。",
          "For uniform drift, carriers travel a drift-distance equal to speed times dt."
        ],
        [
          "断面を通る円柱状の体積はAとその距離の積。これに単位体積あたりの担体数nを掛けると、通過した担体数がわかる。",
          "The cylinder of crossing material has volume A times drift distance; multiply by carrier density n to count carriers."
        ],
        [
          "担体一個の電荷の大きさを掛け、時間dtで割ると電流の大きさになる。担体の種類が複数なら寄与を符号付きで合成する。",
          "Multiply by charge magnitude per carrier and divide by dt. Multiple species require signed current contributions."
        ],
        [
          "この式から得られるのは担体の平均ドリフト速度であって、電気信号の伝播速度ではない。",
          "This gives average carrier drift speed, not the propagation speed of an electrical signal."
        ]
      ]
    }
  ],
  "ohm": [
    {
      "kind": "empirical",
      "steps": [
        [
          "抵抗素子の両端で電位差を測り、電流を測る。電圧を2倍にしたとき電流もほぼ2倍となる温度範囲・材料では比例関係が成り立つ。",
          "Measure voltage across and current through the same element. Proportionality is observed in ohmic materials under suitable conditions."
        ],
        [
          "抵抗Rはこの比例係数として電圧を電流で割って表せるが、電流と電圧が常に比例するという主張は全素子に当てはまらない。",
          "Resistance can be expressed as the ratio V/I, but constant proportionality is not universal for every element."
        ],
        [
          "たとえば白熱電球では温度上昇で抵抗が変わり、ダイオードでは電圧と電流の関係が非線形になる。",
          "Heating filaments and semiconducting diodes can show nonlinear current–voltage relations."
        ]
      ]
    },
    {
      "kind": "geometry",
      "steps": [
        [
          "材料が一様で断面積が一定の導線を想定する。長い導線ほど担体が物質内を移動する経路が長く、抵抗が大きい。",
          "Consider uniform material and cross-section. Longer wires have greater resistance."
        ],
        [
          "同じ長さなら太い導線ほど電流が流れる断面が大きく、抵抗は小さい。長さに比例し面積に反比例する係数を抵抗率ρと呼ぶ。",
          "At fixed length, larger conducting cross-section lowers resistance; resistivity ρ connects geometry to R."
        ],
        [
          "ρの単位はΩ·m。材料特性は温度などによって変わるため、形状だけからあらゆる導線の抵抗を決定できない。",
          "Resistivity has units Ω·m and depends on material and temperature, not geometry alone."
        ]
      ]
    }
  ],
  "joule": [
    {
      "kind": "definition",
      "steps": [
        [
          "二端子間の電位差の大きさVを通って、ある時間に電荷dQが移動する。その間に移動する電気エネルギーを考える。",
          "Consider charge dQ crossing a potential difference V and the electrical energy it transfers."
        ],
        [
          "電気的な仕事は電荷と電位差の積なので、単位時間あたりの仕事はVとdQ/dtの積。dQ/dtを電流Iと呼んだ定義に戻す。",
          "Electrical work is voltage times charge; divide by dt and use current as dQ/dt."
        ],
        [
          "得られたP=VIは二端子の電力で、抵抗が熱を発生する場合も電源が外へ電力を渡す場合も符号の取り方を決めて使う。",
          "P=VI is two-terminal power; use a consistent sign convention for loads and sources."
        ]
      ]
    },
    {
      "kind": "derivation",
      "steps": [
        [
          "材料がオーム性で、瞬間の電圧と電流がV=IRで結ばれる状況に限って代入する。",
          "Substitute Ohm's relation only for an ohmic resistor."
        ],
        [
          "電圧を電流と抵抗へ置き換えると電流の二乗に比例する表示が得られる。反対に電流を電圧と抵抗へ置き換えると電圧の二乗に比例する表示となる。",
          "Substituting V=IR gives an expression proportional to current squared; substituting I=V/R gives the voltage-squared form."
        ],
        [
          "二乗の表現は抵抗の発熱量を計算しやすくするが、あらゆる負荷でI²Rの形を使ってよいわけではない。",
          "The squared forms are useful for ohmic heating but do not apply blindly to arbitrary loads."
        ]
      ]
    }
  ],
  "series-parallel": [
    {
      "kind": "derivation",
      "steps": [
        [
          "二つの抵抗を分岐のない一本の経路に接続する。途中で電荷が増減しない定常状態なら両抵抗の電流は同じ。",
          "Two resistors in one unbranched path carry the same steady current."
        ],
        [
          "各抵抗の電圧降下を個別に考える。電源からの電圧は各降下の和となる。",
          "The source voltage is the sum of the separate resistive drops."
        ],
        [
          "共通電流をくくり出すと二つの抵抗値の和が現れ、それを一つの合成抵抗として表せる。",
          "Factoring out common current yields the sum of resistances."
        ]
      ]
    },
    {
      "kind": "derivation",
      "steps": [
        [
          "並列回路では各抵抗の両端が同じ二つの節点に結ばれる。そのため枝ごとの電位差は等しい。",
          "Each parallel branch connects the same two nodes and has the same voltage."
        ],
        [
          "オーム性抵抗の各枝電流は、その共通電位差をそれぞれの抵抗値で割ったもの。節点へ流れ込む総電流は枝電流の和となる。",
          "Each ohmic branch current is common voltage divided by its resistance; total current is their sum."
        ],
        [
          "共通の電圧をくくり出して合成抵抗との比を比較すると、抵抗の逆数を加える式が得られる。",
          "Factor out voltage and compare with total current to obtain reciprocal-resistance addition."
        ]
      ]
    }
  ],
  "kirchhoff": [
    {
      "kind": "conservation",
      "steps": [
        [
          "節点に入る電流と出る電流を定める。電流は電荷の時間あたりの移動量なので、差は節点に蓄えられる電荷の時間変化に等しい。",
          "Choose incoming and outgoing currents. Their difference equals the rate of junction charge accumulation."
        ],
        [
          "定常状態では節点の正味電荷が増え続けないため、流入電流の和と流出電流の和が一致する。",
          "In steady state, no continuing charge buildup means incoming and outgoing currents balance."
        ],
        [
          "短時間の過渡現象で節点や配線の容量が効く場合は、電荷の蓄積もモデルに含めなければならない。",
          "During transients with appreciable junction capacitance, include local charge accumulation."
        ]
      ]
    },
    {
      "kind": "conservation",
      "steps": [
        [
          "回路を一周して元の空間位置へ戻る。静電的な電位は一つの位置に対して一つの値なので、差を一周分足すと0になる。",
          "Traverse a closed loop. Under electrostatic conditions, scalar potential returns to its original value."
        ],
        [
          "電池内部は化学的な作用により電荷へエネルギーを与え、抵抗は電流による電圧降下を生じる。上昇と降下を符号付きで記録する。",
          "A battery's non-electrostatic work raises charge energy; resistors cause voltage drops. Record signed rises and drops."
        ],
        [
          "時間変化する磁束が回路を貫く場合は単純な静電場の一周則では不十分となり、誘導起電力を含めた関係へ拡張する。",
          "If the linked magnetic flux changes, include induced emf rather than applying simple electrostatic KVL without qualification."
        ]
      ]
    }
  ],
  "battery": [
    {
      "kind": "terminal",
      "steps": [
        [
          "理想起電力を持つ電池と直列に内部抵抗が入っているモデルを考える。電池の内部で化学的エネルギーが単位電荷に与えられる。",
          "Model a battery as ideal emf in series with internal resistance; chemistry supplies energy per charge."
        ],
        [
          "外部へ電流を供給すると内部抵抗にも電流が流れ、その部分に電位差Irがかかる。端子間で外部に使える電位差は起電力より小さくなる。",
          "Delivering current also produces a drop Ir inside the source, reducing the loaded terminal voltage."
        ],
        [
          "端子を開放して電流が0なら内部の抵抗降下も0になる。充電時には電流方向が逆になり端子電圧の符号関係も変わる。",
          "At open circuit I=0, so the internal drop vanishes. Charging reverses current and associated sign conventions."
        ]
      ]
    },
    {
      "kind": "derivation",
      "steps": [
        [
          "外部抵抗Rと内部抵抗rに同じ電流が流れるので、二つの電圧降下を足す。",
          "The same current passes through external R and internal r, so add their drops."
        ],
        [
          "電池が一周の間に単位電荷へ与える起電力は、内部と外部の抵抗で生じる合計の電圧降下に等しい。したがって総抵抗で割ると電流が求まる。",
          "Set emf equal to total voltage drops, then divide by total resistance."
        ],
        [
          "実際の電池は単純な一定の起電力・内部抵抗モデルを逸脱することがあるため、温度や充電状態に注意する。",
          "Real battery emf and resistance can depend on temperature and state of charge."
        ]
      ]
    }
  ],
  "charging": [
    {
      "kind": "balance",
      "steps": [
        [
          "初めに電荷が0のコンデンサー、抵抗、電池を直列につなぐ。スイッチを閉じると電池の起電力が抵抗とコンデンサーに分配される。",
          "Start with an uncharged capacitor in series with R and an emf source. Closing the switch divides emf between the resistor and capacitor."
        ],
        [
          "抵抗の電圧はRI、コンデンサーの電圧はQ/C。同じ回路の電流Iはコンデンサーへ蓄積される電荷の時間変化率。",
          "The resistor drop is RI and the capacitor voltage is Q/C; current is the capacitor's charging rate."
        ],
        [
          "時間が経つとQ/Cが増えるため、抵抗へかかる残りの電圧と電流は小さくなる。",
          "As Q/C grows, less voltage remains across R and current falls."
        ]
      ]
    },
    {
      "kind": "differential",
      "steps": [
        [
          "起電力の電圧収支へI=dQ/dtを代入し、Qの時間変化を左辺に置く。",
          "Substitute I=dQ/dt into the circuit voltage balance and isolate the charging rate."
        ],
        [
          "Qが最終値Cℰに近づくほど右辺の値が0へ近づく。充電速度は残りの不足電荷に比例する。",
          "As Q approaches Cℰ, the right-hand rate approaches zero. Charging rate tracks remaining charge deficit."
        ],
        [
          "この形の微分方程式には、指数関数の微分が自分自身に比例する性質が適合する。",
          "An exponential function fits because its derivative is proportional to itself."
        ]
      ]
    },
    {
      "kind": "solution",
      "steps": [
        [
          "最終電荷と現在電荷の差を新しい変数として考えると、その差が時間とともに指数関数的に減少する。",
          "Treat the deficit from final charge as a variable that decays exponentially."
        ],
        [
          "初期条件Q=0から指数関数の係数が決まる。時定数はRCで、抵抗または容量が大きいほどゆっくり変化する。",
          "Use Q(0)=0 to determine the coefficient. The time constant RC grows with either R or C."
        ],
        [
          "時間RCでは最終電荷の約63.2%に到達するが、数学的に完全な最終値へ有限時刻で到達するわけではない。",
          "After one RC time constant, charge reaches about 63.2% of the final value; the ideal exponential never reaches its limit at finite time."
        ]
      ]
    }
  ],
  "discharging": [
    {
      "kind": "differential",
      "steps": [
        [
          "電源を切り離し、電荷を蓄えたコンデンサーだけを抵抗に接続する。コンデンサーの電圧が放電電流を生じさせる。",
          "Disconnect the source and connect the initially charged capacitor across the resistor. Stored voltage drives discharge current."
        ],
        [
          "コンデンサーに蓄えた電荷Qは減少する。充電方向を正に選べば電流の符号が負となる。",
          "The stored charge Q decreases, so current is negative relative to the positive charging convention."
        ],
        [
          "その時点のQが大きいほど電圧も放電電流も大きいため、Qの減少率はQに比例する。",
          "Larger Q gives a larger capacitor voltage and faster decay, making the rate proportional to Q."
        ]
      ]
    },
    {
      "kind": "solution",
      "steps": [
        [
          "電荷の変化率が電荷量に比例する方程式を初期値Q0で解くと指数関数となる。",
          "Solving the proportional-decay equation with initial charge Q0 gives an exponential."
        ],
        [
          "Qを微分すると電流の大きさも指数的に減少する。電荷の指数と電流の指数には同じ時間定数RCが現れる。",
          "Differentiating Q gives a current magnitude with the same exponential time constant."
        ],
        [
          "時間RCでは電荷は初期の約36.8%に減る。電荷の絶対値と電流の符号を区別する。",
          "After one RC time constant, about 36.8% remains. Distinguish charge magnitude from signed current."
        ]
      ]
    }
  ],
  "rc-energy": [
    {
      "kind": "integral",
      "steps": [
        [
          "理想電池の電位差が一定なら、電池が微小電荷を運ぶごとに同じ単位電荷あたりの仕事を与える。",
          "An ideal fixed-voltage source supplies the same energy per unit charge transferred."
        ],
        [
          "最終的にコンデンサーに蓄えられる電荷はCℰ。供給した総仕事は電圧を0からCℰまでの電荷増分で積分して得る。",
          "The final capacitor charge is Cℰ. Integrate source voltage over the entire transferred charge."
        ],
        [
          "これはコンデンサーに蓄積したエネルギーと同じものとは限らない。",
          "Source-delivered work is not necessarily all stored in the capacitor."
        ]
      ]
    },
    {
      "kind": "balance",
      "steps": [
        [
          "線形コンデンサーの蓄積エネルギーは電圧が上がる過程を積分した結果、最終電圧と最終電荷の積の半分になる。",
          "A linearly charged capacitor stores half the product of final voltage and charge."
        ],
        [
          "残りの半分は電流が抵抗を流れた際のジュール熱となる。十分長い時間が経過した最終状態で比較する。",
          "The other half dissipates as resistive heat during the transient, assuming charging reaches steady state."
        ],
        [
          "理想モデルでRを小さくしても、有限Rならこの分配自体は変わらず、変化時間が短くなる。R=0の極限では配線の自己インダクタンスなどが無視できなくなる。",
          "For finite R, changing R changes the timescale but not the half-energy split. At R=0 omitted inductance becomes important."
        ]
      ]
    }
  ],
  "magnetic-force": [
    {
      "kind": "law",
      "steps": [
        [
          "磁場に入る荷電粒子の速度vと磁束密度Bを同じ空間点で考える。磁気力は両者の外積に電荷の符号を含めて掛けたもの。",
          "Evaluate velocity and magnetic field at the particle's position. Magnetic force uses their cross product and signed charge."
        ],
        [
          "正電荷の力の向きは右ねじの規則に従い、負電荷なら反対になる。磁気力は速度にも磁場にも垂直なので、この力単独では速さを変えない。",
          "Use the right-hand rule for positive q and reverse for negative q. Magnetic force is perpendicular to velocity and cannot by itself change speed."
        ],
        [
          "磁場は静止電荷には磁気力を及ぼさない。電場による力とは区別しておく。",
          "A stationary charge experiences no magnetic part of the Lorentz force; electric force is distinct."
        ]
      ]
    },
    {
      "kind": "derivation",
      "steps": [
        [
          "外積の大きさは二つのベクトルの大きさの積と、そのなす角θの正弦との積。これに電荷の絶対値を掛ける。",
          "The magnitude of a cross product is the product of vector magnitudes and sin of their angle; multiply by |q|."
        ],
        [
          "vとBが平行ならθ=0で磁気力は0、垂直ならθ=90°で最大になる。",
          "Parallel v and B give zero magnetic force; perpendicular vectors give maximum magnitude."
        ],
        [
          "力が速度と垂直であるため、瞬間的な仕事率は力と速度の内積で0になる。",
          "Because the force is orthogonal to velocity, its instantaneous power is zero."
        ]
      ]
    }
  ],
  "circular-magnetic": [
    {
      "kind": "force-balance",
      "steps": [
        [
          "粒子が一定磁場に直角方向へ移動すると、磁気力の向きは常に速度から90°ずれ、速度の向きだけが変わる。",
          "For v perpendicular to uniform B, force stays 90° from velocity and redirects its motion."
        ],
        [
          "円軌道が成立する場合、粒子の質量と速さで決まる必要向心力と磁気力を等しく置く。",
          "For circular motion, set the required centripetal force equal to magnetic force."
        ],
        [
          "図では速度は円への接線、力は中心向きであり、矢印をどちらも同じ方向に描いてはいけない。",
          "Draw velocity tangent to the orbit and force inward; they must not be parallel."
        ]
      ]
    },
    {
      "kind": "derivation",
      "steps": [
        [
          "力の等式の両辺から速度を一つ約し、軌道半径を求める。質量・速さが大きいほど半径が大きい。",
          "Cancel one factor of speed and solve for radius; more mass or speed increases radius."
        ],
        [
          "一周の距離を速さで割って周期を求め、先ほどの半径の式を代入する。",
          "Obtain period as circumference divided by speed, then substitute radius."
        ],
        [
          "周期の式から速さが消えるのは、一定磁場中の非相対論的な円運動の特性。非常に高速では相対論的質量・運動量の扱いが必要。",
          "Speed cancels in the nonrelativistic ideal orbit; relativistic motion requires a different momentum model."
        ]
      ]
    }
  ],
  "wire-magnetic": [
    {
      "kind": "derivation",
      "steps": [
        [
          "長い直線導線の周囲で磁場が同心円状になるという対称性を考える。導線から同じ距離なら磁場の大きさが等しい。",
          "Use cylindrical symmetry around a long straight current: B has equal magnitude at equal radius."
        ],
        [
          "導線を中心に半径rの円形閉路をとり、その円周に沿う磁場の接線成分を積分する。",
          "Choose a circular Amperian loop of radius r and integrate tangent B."
        ],
        [
          "円周上でB一定なので積分はBと円周の長さの積になる。アンペールの法則から逆距離の磁場が求められる。",
          "Because B is constant and tangent to the loop, the integral is B times circumference, giving a 1/r law."
        ]
      ]
    },
    {
      "kind": "law",
      "steps": [
        [
          "磁場の周回積分は選んだ閉路が囲む電流に結び付く。電流の符号と周回方向は右ねじの関係で一緒に定める。",
          "Magnetic circulation relates to current enclosed by an oriented loop; current sign follows the right-hand convention."
        ],
        [
          "積分経路は実際に導線が存在する場所ではなく、磁場を調べるための任意の閉曲線である。",
          "The integration path is an imagined closed curve for evaluating fields, not a physical wire."
        ],
        [
          "磁場が時間変化する一般状況では、導電電流だけでなく変位電流の項が加わる。",
          "For changing fields, the full Ampère–Maxwell law also includes displacement current."
        ]
      ]
    }
  ]
};
