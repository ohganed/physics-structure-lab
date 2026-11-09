/* Faraday induction, sinusoidal steady state, and Maxwell wave reasoning. */
export const electricityReasoningPart3={
  "faraday": [
    {
      "kind": "definition",
      "steps": [
        [
          "コイルを貫く磁束を決めるため、コイルが囲む面を選ぶ。面に対する法線方向を定めると、磁場の法線成分だけが磁束に寄与する。",
          "Choose the surface bounded by the loop and an oriented surface normal. Only B normal to the surface contributes to magnetic flux."
        ],
        [
          "面が一様磁場と垂直なら磁束の大きさは磁場の強さと面積の積。傾いていれば法線方向への射影が必要になる。",
          "For uniform B normal to the surface, flux magnitude is BA. Inclined surfaces require projection."
        ],
        [
          "磁束は磁場そのものではなく、選んだ面を通過する磁場の量で、単位はウェーバWbである。",
          "Flux is not identical to B: it measures field crossing a specified area and has units of webers."
        ]
      ]
    },
    {
      "kind": "law",
      "steps": [
        [
          "コイルの位置、磁場、面積を時間的に変えたときに生じる誘導起電力を測る。磁場が存在するだけでは起電力が生まれるわけではない。",
          "Measure emf when loop geometry or linked flux changes. A nonzero static field alone does not guarantee induction."
        ],
        [
          "一回巻きのループで磁束が増減すると、その時間変化率に対応した誘導起電力が現れる。等しい磁束を受けるN回巻きなら効果がN倍になる。",
          "For one turn, emf tracks rate of flux change; identical linked flux across N turns multiplies the emf."
        ],
        [
          "負号はコイルの正方向と面の法線を一貫して定めたときのレンツの法則を表す。巻き数を掛ける場合は各巻きに同じ磁束が通る近似を明示する。",
          "The minus sign follows consistent loop and normal orientation in Lenz's law. The N factor assumes equal flux linkage per turn."
        ]
      ]
    }
  ],
  "lenz": [
    {
      "kind": "direction",
      "steps": [
        [
          "面の法線を一つ選び、その法線に沿う磁束を正と決める。磁束が増えているか減っているかをまず判定する。",
          "Choose an oriented loop normal and determine whether signed flux increases or decreases."
        ],
        [
          "誘導起電力は磁束の変化を打ち消す向きに生じる。ただし誘導電流が生じるのは、導電経路が閉じているなどの条件が満たされる場合である。",
          "Induced emf opposes the flux change. A sustained current requires a conductive closed path."
        ],
        [
          "「磁場そのものを必ず打ち消す」と覚えると、磁石を遠ざける場合に誤る。打ち消すのは磁束の変化である。",
          "It opposes the change, not necessarily the existing field; moving the magnet away reverses the needed response."
        ]
      ]
    },
    {
      "kind": "conservation",
      "steps": [
        [
          "磁石をコイルへ近づけると、誘導電流による力が磁石の運動を妨げることがある。外部から磁石を動かすには仕事が必要となる。",
          "An approaching magnet can experience opposing force from induced current, so an external agent must do work."
        ],
        [
          "与えた機械的仕事は抵抗の発熱、磁場に蓄えられたエネルギー、その他の損失へ移る。理想的な損失なしモデルと現実の損失を区別する。",
          "Mechanical work goes into resistive heating, stored magnetic energy or other losses. Distinguish ideal and real systems."
        ],
        [
          "電磁誘導は無からエネルギーを生むのではなく、仕事や場のエネルギーを別の形で受け渡す現象である。",
          "Induction converts energy; it does not create energy from nothing."
        ]
      ]
    }
  ],
  "inductor": [
    {
      "kind": "definition",
      "steps": [
        [
          "コイルの電流が変わるとコイル自身が作る磁束も変化する。変化する磁束は、その電流変化を妨げる向きの誘導起電力を作る。",
          "A changing coil current changes its own linked flux and induces emf opposing the current change."
        ],
        [
          "線形コイルでは電流と磁束鎖交数が比例する。比例係数Lを自己インダクタンスとして定義する。",
          "For a linear coil, flux linkage is proportional to current; the proportionality constant L is inductance."
        ],
        [
          "したがって誘導起電力は電流の時間変化率に比例する。Lの単位はヘンリーHである。",
          "Thus induced emf is proportional to dI/dt; L has units of henries."
        ]
      ]
    },
    {
      "kind": "derivation",
      "steps": [
        [
          "コイルへ電流を少しずつ増やすと、その瞬間の電流に応じて磁場のエネルギーが増える。瞬間の追加仕事は電流の増分に比例する。",
          "Increasing inductor current incrementally increases magnetic-field energy; the work per increment depends on current."
        ],
        [
          "一定のLなら微小仕事を電流0からIまで積分する。積分の中身がIに比例するため二乗となり、係数1/2が現れる。",
          "For constant L, integrate incremental work from zero current to I; the linear integrand yields the factor 1/2."
        ],
        [
          "コイルの抵抗損失がある場合は蓄積エネルギーと熱損失を別に扱う。",
          "Real coils may dissipate energy in winding resistance; distinguish stored energy from heat."
        ]
      ]
    }
  ],
  "ac-wave": [
    {
      "kind": "definition",
      "steps": [
        [
          "交流電源の電圧を時間軸に沿って測り、正負に周期的に変化する波形を描く。最大値と一周期の時間を定める。",
          "Measure AC voltage over time and mark positive and negative swings, peak magnitude and period."
        ],
        [
          "純抵抗ならオームの法則により電流も同じ位相の正弦波になる。電流の向きは半周期ごとに反転する。",
          "For a pure resistor, current follows an in-phase sinusoid and reverses direction each half-cycle."
        ],
        [
          "波形の瞬時平均が0でも抵抗の発熱は0ではない。電力は電圧と電流の積で評価する。",
          "Zero average signed voltage does not imply zero heating; power is the product of voltage and current."
        ]
      ]
    },
    {
      "kind": "derivation",
      "steps": [
        [
          "正弦波を同じ抵抗へ加えると、発熱を決める電力は電圧の二乗に比例する。したがって電圧そのものの時間平均ではなく、二乗平均を取る。",
          "Resistive heating follows voltage squared, so use the mean square, not the signed time average."
        ],
        [
          "正弦の二乗の一周期平均が1/2なので、ピーク値の二乗の半分が平均電圧二乗となる。",
          "The average of sin² over a cycle is one half, so mean squared voltage is half peak squared voltage."
        ],
        [
          "同じ平均発熱を起こす直流電圧を実効値と呼ぶ。純抵抗では電圧電流が同位相のため平均電力は実効値の積となる。",
          "RMS is the DC-equivalent heating voltage. In a pure resistor, average power equals the product of voltage and current RMS."
        ],
        [
          "コイルやコンデンサーを含む交流では位相差が生じるので、一般には力率も含めて平均有効電力を求める。",
          "Reactive loads introduce phase differences, so general average active power includes a power factor."
        ]
      ]
    }
  ],
  "reactance": [
    {
      "kind": "laws",
      "steps": [
        [
          "理想コイルでは電流を変化させるために電圧が必要であり、端子電圧は電流の時間変化率に比例する。",
          "An ideal inductor requires voltage to change current; terminal voltage tracks current rate of change."
        ],
        [
          "理想コンデンサーでは蓄積電荷と電圧が比例するので、電荷の時間変化率である電流は電圧の時間変化率に比例する。",
          "For a capacitor, Q=CV and I=dQ/dt yield current proportional to the derivative of voltage."
        ],
        [
          "正弦波を微分すると位相が90°ずれる。Lでは電圧が電流より進み、Cでは電流が電圧より進む。",
          "Differentiation shifts a sine by 90°. Voltage leads current for L, while current leads voltage for C."
        ]
      ]
    },
    {
      "kind": "derivation",
      "steps": [
        [
          "正弦電流の時間微分には角振動数ωが掛かるため、コイルの電圧振幅と電流振幅の比がωLとなる。",
          "Differentiating sinusoidal current multiplies amplitude by ω, yielding inductive reactance ωL."
        ],
        [
          "コンデンサーでは電流の振幅がωCと電圧振幅の積になる。したがって電圧振幅を電流振幅で割ると1/(ωC)。",
          "Capacitor current amplitude equals ωC times voltage amplitude, so its reactance is 1/(ωC)."
        ],
        [
          "リアクタンスは直流抵抗のような発熱損失をそのまま表すものではなく、理想素子のエネルギーの往復を示す。",
          "Reactance characterizes reversible energy exchange in ideal elements, not direct resistive heating."
        ]
      ]
    }
  ],
  "resonance": [
    {
      "kind": "derivation",
      "steps": [
        [
          "直列RLC回路では電流がすべての素子に共通となる。ただし抵抗、コイル、コンデンサーの電圧は同位相ではない。",
          "Series RLC elements share current but their voltage phasors are not all in phase."
        ],
        [
          "抵抗の電圧は電流と同相で、コイルとコンデンサーの電圧は互いに逆向きの90°ずれとなる。ベクトル和の直角三角形で大きさを求める。",
          "Resistor voltage is in phase with current, while L and C voltages have opposite quadrature components; combine by phasor geometry."
        ],
        [
          "インピーダンスの大きさは抵抗の寄与と正味リアクタンスの寄与の二乗和の平方根となる。",
          "Impedance magnitude follows the Pythagorean sum of resistive and net reactive components."
        ]
      ]
    },
    {
      "kind": "derivation",
      "steps": [
        [
          "コイルのリアクタンスは周波数に比例して増加し、コンデンサーのリアクタンスは周波数に反比例して減少する。",
          "Inductive reactance increases with frequency, capacitive reactance decreases."
        ],
        [
          "二つが等しい周波数で正味のリアクタンスが0となり、直列インピーダンスが抵抗Rだけになる。",
          "At their equality, net reactance vanishes and series impedance is R."
        ],
        [
          "一定の電圧振幅を与えた正弦波定常状態では電流振幅が最大となる。共振の周波数条件は理想的なLとCだけで決まる。",
          "For fixed sinusoidal drive amplitude in steady state, current amplitude peaks at this condition."
        ],
        [
          "ただし電圧振幅やエネルギーが最大になる条件は、減衰のある別の測定量ではわずかに異なる場合がある。",
          "Other response measures can peak at slightly different frequencies when damping matters."
        ]
      ]
    }
  ],
  "ampere-maxwell": [
    {
      "kind": "law",
      "steps": [
        [
          "充電中のコンデンサーでは導線に電流が流れるが、理想的な真空極板間には電子が連続して流れる導電経路はない。",
          "During capacitor charging, conduction current flows in the wire but not through the vacuum gap."
        ],
        [
          "同じ磁場の周回積分を考えても、張る面を導線側と極板間側で変えると、導電電流だけでは矛盾が生まれる。",
          "The same magnetic circulation would depend on the chosen spanning surface if only conduction current were counted."
        ],
        [
          "変化する電束の時間変化率に比例する項を加えると、どの面でも同じ関係となる。これが変位電流の寄与である。",
          "Including changing electric flux restores consistency between spanning surfaces: the displacement-current term."
        ],
        [
          "変位電流という名前でも、極板間の真空を電子が実際に横切っているという意味ではない。",
          "Displacement current does not imply electrons crossing the vacuum between plates."
        ]
      ]
    },
    {
      "kind": "derivation",
      "steps": [
        [
          "周回積分で磁場の接線成分を調べる関係を、空間の各点での磁場の回転を表す微分形に書き換える。",
          "Convert circulation over a closed loop into the local curl relation for B."
        ],
        [
          "導電電流は電流密度J、電束の時間変化は電場の時間微分として現れる。両方が磁場の回転の源となる。",
          "Conduction enters as current density J and changing flux as time-varying E, both contributing to curl B."
        ],
        [
          "この局所形は真空中のSI単位で表したもので、物質中のマクロなDとHの扱いは別途学ぶ。",
          "This form uses vacuum SI fields; macroscopic material equations often use D and H."
        ]
      ]
    }
  ],
  "wave": [
    {
      "kind": "derivation",
      "steps": [
        [
          "真空で電荷と電流のない領域を取り、ファラデーの法則とアンペール–マクスウェルの法則を組み合わせる。",
          "Take a source-free vacuum region and combine Faraday's and Ampère–Maxwell's equations."
        ],
        [
          "電場の回転のさらに回転を計算し、ベクトル解析の恒等式を用いる。電荷のない真空では電場の発散が0なので空間二階微分の項が残る。",
          "Take the curl of the curl of E and use the vector identity; div E vanishes in charge-free vacuum."
        ],
        [
          "磁場の時間変化を別の方程式で置き換え、時間二階微分と空間二階微分を結び付ける波動方程式を得る。",
          "Substitute the time-varying B relation to obtain a wave equation connecting second spatial and temporal derivatives."
        ]
      ]
    },
    {
      "kind": "derivation",
      "steps": [
        [
          "通常の波動方程式と係数を比較し、真空の透磁率と誘電率から伝播速度を得る。",
          "Compare with the standard wave equation to identify propagation speed from permeability and permittivity."
        ],
        [
          "平面電磁波ではEとBは同位相、互いに直交し、ともに伝播方向に直角となる。",
          "For a plane vacuum wave, E and B are in phase, mutually perpendicular, and both transverse to propagation."
        ],
        [
          "同じ波を記述するファラデーの法則から二つの場の振幅比が決まる。電磁波は物質の粒子の振動ではなく場の変化が伝わる現象。",
          "Faraday's law fixes their amplitude ratio. Electromagnetic waves propagate field variations, not oscillation of a material medium."
        ]
      ]
    }
  ],
  "energy-flux": [
    {
      "kind": "definition",
      "steps": [
        [
          "電場と磁場が存在する空間には、それぞれの場に対応するエネルギー密度を考えることができる。単位体積あたりの量なので単位はJ/m³。",
          "Electric and magnetic fields store energy per unit volume, measured in J/m³."
        ],
        [
          "真空では電場と磁場の蓄積エネルギー密度を足したものが全電磁場のエネルギー密度。",
          "In vacuum, total electromagnetic energy density is the sum of electric and magnetic contributions."
        ],
        [
          "真空の平面進行波ではEとBの振幅が結び付いているため、両者のエネルギー密度は各時刻に等しい。",
          "For a vacuum plane wave, the linked E and B amplitudes give equal electric and magnetic energy density instantaneously."
        ]
      ]
    },
    {
      "kind": "definition",
      "steps": [
        [
          "場に蓄えたエネルギーが空間をどの方向へ流れるかを記述するため、エネルギー流束密度ベクトルを定める。",
          "Define an energy-flux-density vector to specify how field energy travels through space."
        ],
        [
          "EとBの外積は両者に垂直で、平面進行波では波の進む方向を向く。外積を真空透磁率で割ったものがポインティングベクトル。",
          "E×B is perpendicular to both fields and points along propagation; dividing by vacuum permeability gives the Poynting vector."
        ],
        [
          "単位はW/m²で、単位面積あたりの電磁エネルギー輸送率を示す。実際の受光・アンテナでの電力とも結び付く。",
          "Its units W/m² describe transmitted electromagnetic power per area, relevant to illumination and antennas."
        ],
        [
          "単純な平面波以外ではEとBが互いに直角でない場合や、近接場でエネルギーが往復する状況もある。",
          "Outside simple plane waves, fields need not be mutually orthogonal, and near fields can exchange reactive energy."
        ]
      ]
    }
  ]
};
