/* Mathematically contextual derivation notes: one pair per displayed equation. */
export const electricityDerivationNotes={
  "charged-bodies": [
    [
      "電荷が出入りしない系を設定する。二物体を合わせれば移動前後の正味電荷が同じである。",
      "Choose an isolated system encompassing both bodies. Its total net charge does not change."
    ],
    [
      "正と負の素電荷の個数差を数える。電子だけが移動する場合には、移動した電子数にeを掛けた大きさの電荷が二物体間で反対符号に現れる。",
      "Count excess positive and negative elementary charges. Electron transfer produces opposite net charges on the two bodies."
    ]
  ],
  "coulomb": [
    [
      "電荷の大きさだけを使うと力の大きさが決まる。距離の2乗が分母にあるため、距離を2倍にすれば大きさは4分の1になる。",
      "Use the absolute charges to obtain magnitude. Doubling r divides force by four."
    ],
    [
      "1から2へ向く単位ベクトルを設定する。q₁q₂が正なら反発、負なら引力になり、作用点は電荷2の位置である。",
      "Define the unit vector from charge 1 to charge 2. The signed charge product selects repulsion or attraction at charge 2."
    ]
  ],
  "superposition": [
    [
      "各電荷との二体間の力を別々に描いてから、試験電荷に作用する力としてまとめる。",
      "Determine each source's separate force before adding vectors at the test charge."
    ],
    [
      "固定したx・y軸に分解する。左右対称で水平成分が逆符号なら打ち消し、鉛直成分が同符号なら加算する。",
      "Resolve along fixed axes. Symmetric horizontal components cancel and vertical components reinforce."
    ]
  ],
  "field-definition": [
    [
      "小さい正試験電荷qで生じた力をqで割る。試験電荷を小さくする極限によって電荷配置への影響を除く。",
      "Divide probe force by a small positive q, approaching the undisturbed source-field limit."
    ],
    [
      "任意の電荷に働く力は電荷の符号を保った積qEとなる。正電荷はE方向へ、負電荷は逆へ力を受ける。",
      "Multiply the field by signed q: positive charges are pushed along E, negative charges opposite."
    ]
  ],
  "field-lines": [
    [
      "点電荷Qが別の電荷qに及ぼすクーロン力をqで割ることで得られる。r方向の単位ベクトルとQの符号が電場の向きを決める。",
      "Divide Coulomb force by probe charge to derive E. Source charge sign determines the radial direction."
    ],
    [
      "各電場を同じ空間位置で足し合わせる。電気力線の形を直接足すのではなく、ベクトルを足してから新しい力線を描く。",
      "Add vectors at the same position first, then trace the resulting field lines."
    ]
  ],
  "gauss": [
    [
      "各微小面の外向き法線とEの角度を内積で扱う。面に平行な電場の寄与はゼロになる。",
      "Use the outward normal on each surface element. Tangential E contributes no flux."
    ],
    [
      "球対称の点電荷ならEの大きさは球面上で一定、法線と平行なのでE·4πr²に簡約できる。ガウスの法則からクーロンの逆二乗型と整合する。",
      "Spherical symmetry makes E constant and normal to the sphere, reducing flux to E·4πr²."
    ]
  ],
  "potential-work": [
    [
      "位置エネルギーを電荷で割った量を電位とする。qが負の場合も同じ式だが、電位の上下と位置エネルギーの上下は逆転し得る。",
      "Potential is U/q, including for negative q; lower potential need not mean lower potential energy for an electron."
    ],
    [
      "電場が正の仕事をすれば位置エネルギーが減るので、W=−ΔUを使う。電場のする仕事と外力のする仕事を混同しない。",
      "Field work equals −ΔU. Distinguish work by the electric field from work by an external agent."
    ]
  ],
  "uniform-field": [
    [
      "板の中央でE一定と近似し、電場方向の距離dを移動する正電荷の仕事をqEdとする。",
      "With uniform E, work over distance d along the field is qEd."
    ],
    [
      "qを消去して電位差の大きさをdで割る。電場ベクトルは高電位から低電位へ向くため符号は座標方向に依存する。",
      "Cancel q to obtain the magnitude E=ΔV/d. The signed component depends on axis direction."
    ]
  ],
  "potential-gradient": [
    [
      "短い区間での電位差dV=−E·drを、AからBまで積分する。静電場なら積分値は経路によらない。",
      "Integrate dV=−E·dr. Electrostatic potential difference is path independent."
    ],
    [
      "勾配∇Vは電位が最も増える方向を指す。電場はその逆であり、等電位面に直交する。",
      "The gradient points up the steepest increase of V, while E points the opposite way."
    ]
  ],
  "capacitance": [
    [
      "一方の極板が持つ電荷の大きさQを、板間の電位差で割る。両板の正味電荷の和0を分子に入れない。",
      "Use charge magnitude on one plate; do not use net charge of both plates."
    ],
    [
      "平行板の表面電荷密度σ=Q/AからE≈σ/ε₀を得る。ΔV≈Edを代入すると面積に比例し、間隔に反比例する。",
      "From σ=Q/A and E≈σ/ε₀, use ΔV≈Ed; capacitance scales with A/d."
    ]
  ],
  "capacitor-energy": [
    [
      "微小電荷dqを追加するときの電圧はその時点のq/Cであり、最終電圧Q/Cではない。",
      "For an added dq, use the instantaneous voltage q/C, not the final value Q/C."
    ],
    [
      "0からQまで積分する。qの積分はQ²/2となるので、1/2が自然に現れる。",
      "Integrate q from zero to Q; the factor 1/2 comes from the integral."
    ]
  ],
  "dielectric": [
    [
      "線形誘電体ではε=εrε₀。分極によって同じ自由電荷での電場が小さくなり、容量が増える。",
      "For a linear dielectric ε=εrε₀. Polarization reduces field at fixed free charge, increasing C."
    ],
    [
      "電池を外せばQ固定、つないだままならV固定。右辺を比較すると二つの実験の結果が違う理由がわかる。",
      "Disconnected means fixed Q; connected to an ideal battery means fixed V."
    ]
  ],
  "current-definition": [
    [
      "断面を通った電荷量を時間で微分する。電流の向きは正の電荷が移動する向きを採用する。",
      "Differentiate charge crossing a surface with respect to time. Conventional current follows positive charge."
    ],
    [
      "時間dtに断面を通過する担体は密度n×体積Avd dt個。各担体の電荷の大きさを掛け、dtで割る。",
      "In dt, n A vd dt carriers cross the area. Multiply by the carrier charge magnitude and divide by dt."
    ]
  ],
  "ohm": [
    [
      "一定温度のオーム性抵抗ではVとIが比例する。Rはその比例係数だが、非線形素子では一定でない。",
      "For ohmic material at fixed temperature, V∝I. R need not be constant in nonlinear devices."
    ],
    [
      "長い導線ほど抵抗が大きく、太い導線ほど小さい。ρは材料固有の抵抗率で、温度に依存する。",
      "A longer conductor has higher R and a larger cross-sectional area has lower R; ρ is material resistivity."
    ]
  ],
  "joule": [
    [
      "電位差Vを通る電荷dQが受けるエネルギーはVdQ。単位時間当たりに割るとdQ/dt=IなのでP=VI。",
      "Charge dQ crossing voltage V transfers energy VdQ. Differentiate with dQ/dt=I."
    ],
    [
      "オーム性抵抗のV=IRをP=VIへ代入し、電流表示I²Rと電圧表示V²/Rを得る。",
      "Substitute V=IR into P=VI to obtain I²R and V²/R."
    ]
  ],
  "series-parallel": [
    [
      "直列回路では電流が共通、電圧降下が足される。V=I(R₁+R₂)から合成抵抗が得られる。",
      "Series elements have common current and additive voltage drops, giving R₁+R₂."
    ],
    [
      "並列では電圧Vが共通で電流が加算される。I=V/R₁+V/R₂=V(1/R₁+1/R₂)。",
      "Parallel branches share V and currents add, giving reciprocal resistances."
    ]
  ],
  "kirchhoff": [
    [
      "節点に電荷が蓄積しない定常条件で、流入と流出の電荷移動率を等しくする。",
      "In steady state, no accumulating junction charge means incoming and outgoing current rates match."
    ],
    [
      "回路に沿った電位上昇と電位降下を符号付きで加算する。電池の化学的な起電力は電位降下と区別する。",
      "Sum signed rises and drops around the loop, distinguishing source emf from resistive drops."
    ]
  ],
  "battery": [
    [
      "内部抵抗rでもIrだけ電圧が下がる。端子電圧を開放起電力ℰと同じとみなすと負荷時にずれる。",
      "Internal resistance creates drop Ir, so loaded terminal voltage is below open-circuit emf."
    ],
    [
      "外部抵抗Rと内部抵抗rを直列に見て、総降下I(R+r)と起電力ℰを等置する。",
      "Treat R and r in series: I(R+r)=ℰ."
    ]
  ],
  "charging": [
    [
      "回路の電池による上昇ℰは、抵抗RIとコンデンサーQ/Cの電圧の和になる。I=dQ/dtを用いる。",
      "Source emf balances the resistor drop RI and capacitor voltage Q/C; use I=dQ/dt."
    ],
    [
      "Qを増やす速さは最終電荷Cℰからの不足分に比例する一次方程式となる。",
      "The charge-growth rate is proportional to the remaining deficit from Cℰ."
    ],
    [
      "初期条件Q(0)=0を入れて微分方程式を解くと指数関数。t=RCではQ/(Cℰ)=1−e⁻¹。",
      "Solve with Q(0)=0. At t=RC the fraction charged is 1−e⁻¹."
    ]
  ],
  "discharging": [
    [
      "電池を外した放電回路ではコンデンサー電圧が抵抗にかかり、電荷減少率と電荷量の間に一次方程式ができる。",
      "With source removed, capacitor voltage drives resistor current, giving a first-order decay equation."
    ],
    [
      "Q(0)=Q₀で解けばQは指数的に減少。Iの符号は充電を正とした向きに対して負になる。",
      "Initial charge Q₀ yields exponential decay; current is negative relative to charging direction."
    ]
  ],
  "rc-energy": [
    [
      "電池の一定電圧ℰと、最終的に移動する電荷Cℰの積から供給エネルギーを得る。",
      "Constant source voltage ℰ times total transferred charge Cℰ gives source work."
    ],
    [
      "コンデンサーの積分エネルギーはその半分。差を抵抗での散逸として確かめる。",
      "The capacitor stores half; the difference appears as resistive dissipation."
    ]
  ],
  "magnetic-force": [
    [
      "磁場Bと速度vの外積を取る。右ねじの規則で正電荷の力を決め、負電荷なら反転する。",
      "Use the cross product v×B with charge sign to obtain the force direction."
    ],
    [
      "vとBのなす角がθのとき、外積の大きさはvBsinθ。θ=0では磁気力は0。",
      "Cross-product magnitude is vBsinθ; parallel motion has zero magnetic force."
    ]
  ],
  "circular-magnetic": [
    [
      "v⊥Bならローレンツ力は常に速度に垂直で、円運動の中心向き合力になる。",
      "For v perpendicular to B, magnetic force supplies inward acceleration without changing speed."
    ],
    [
      "mとqを整理して半径と周期を得る。周期の式から速さが消え、非相対論的モデルでは同じm/qなら同じ周期となる。",
      "Rearrange for radius and period; speed cancels from the period in this ideal nonrelativistic case."
    ]
  ],
  "wire-magnetic": [
    [
      "無限に長い直線導線を中心とする同心円上では磁場の大きさが一定という対称性がある。",
      "A long straight current has circular symmetry, making B constant along concentric loops."
    ],
    [
      "閉路の接線方向にBを積分するとB·2πrとなる。囲む定常電流Iを代入する。",
      "Integrate B along a circular Amperian path: B·2πr=μ₀I."
    ]
  ],
  "faraday": [
    [
      "コイル面を通るBの法線成分を面積全体で足したものが磁束。面が動く場合も向きを一貫して定義する。",
      "Flux integrates the normal component of B through the chosen coil surface."
    ],
    [
      "磁束が時間とともに変わると誘導起電力が生じる。N巻きなら鎖交磁束の変化がN倍になる。",
      "A changing flux induces emf; equal flux linkage through N turns multiplies the effect."
    ]
  ],
  "lenz": [
    [
      "磁束の増減に対して逆向きの誘導効果が現れるよう、磁束と回路向きの符号規約を定める。",
      "Choose loop and normal orientations; the induced emf opposes the change in flux."
    ],
    [
      "外力が磁石を動かす仕事と、抵抗損失・磁場エネルギーの変化がつり合う。",
      "Mechanical input work balances electrical dissipation and changes in stored field energy."
    ]
  ],
  "inductor": [
    [
      "自己誘導起電力はコイルの電流変化率に比例し、その変化を妨げる向きになる。",
      "Self-induced emf is proportional to the current's rate of change and opposes it."
    ],
    [
      "線形コイルでは瞬時の蓄積エネルギー増加率はLI dI/dt。0からIまで積分して½LI²を得る。",
      "For a linear inductor, dU=L I dI. Integration gives ½LI²."
    ]
  ],
  "ac-wave": [
    [
      "電圧と電流が同位相ならP(t)=V₀I₀sin²ωt。実効値は発熱を同じにする直流値として定まる。",
      "In a resistor, p=V₀I₀sin²ωt. RMS is defined by equal average heating."
    ],
    [
      "一周期のsin²平均は1/2なので、二乗平均平方根がピーク値/√2となる。",
      "Average sin² over a period equals 1/2, producing peak/√2."
    ]
  ],
  "reactance": [
    [
      "コイルの端子電圧は電流の微分、コンデンサーの電流は電圧の微分に比例する。",
      "Inductor voltage follows di/dt and capacitor current follows dv/dt."
    ],
    [
      "正弦波を微分するとωが現れる。振幅比からリアクタンスωL、1/(ωC)を得る。",
      "Differentiating sinusoids brings a factor ω; amplitude ratios yield reactances."
    ]
  ],
  "resonance": [
    [
      "Rによる実数成分とL・Cによる虚数的なリアクタンスの差が直列インピーダンスを決める。",
      "Series impedance combines resistive and net reactive contributions."
    ],
    [
      "ωL=1/(ωC)となる条件でリアクタンスが打ち消し合い、Z=Rとなって同じ電圧で電流が最大になる。",
      "At ωL=1/(ωC), net reactance vanishes, Z=R, and current is maximized for fixed source voltage."
    ]
  ],
  "ampere-maxwell": [
    [
      "磁場の循環は導電電流だけでは説明できない。充電中の極板間の電束変化を加えると面の選び方に依存しなくなる。",
      "Magnetic circulation includes changing electric flux so the result is independent of spanning-surface choice."
    ],
    [
      "局所形は閉路積分形に対応する。Jは導電電流密度、∂E/∂tは真空での変位電流への寄与。",
      "Differential form corresponds to the integral law: J is conduction current and ∂E/∂t provides displacement contribution."
    ]
  ],
  "wave": [
    [
      "ファラデーの法則とアンペール–マクスウェルの法則の回転を取り、電荷と電流のない真空で波動方程式を得る。",
      "Combine curls of Faraday and Ampère–Maxwell equations in source-free vacuum to obtain the wave equation."
    ],
    [
      "通常の波動方程式と係数を比較すると伝播速度c=1/√(μ₀ε₀)。平面波ではB₀=E₀/c。",
      "Comparison with the standard wave equation gives c=1/√(μ₀ε₀); plane-wave amplitudes satisfy B₀=E₀/c."
    ]
  ],
  "energy-flux": [
    [
      "電場と磁場のエネルギー密度を足す。電磁波では両者が時間的に同位相で変化し、平均すると一定のエネルギー流を運ぶ。",
      "Add electric and magnetic energy densities. In plane waves they oscillate in phase and carry average energy flux."
    ],
    [
      "E×Bの向きは波の伝播方向で、大きさは1/μ₀を掛けるとW/m²になる。",
      "E×B points along energy transport; dividing by μ₀ gives power per area."
    ]
  ]
};
