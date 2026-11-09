/* Deeper physical and mathematical reasoning, distinguishing definitions, empirical laws, and deductions. */
export const electricityReasoningPart1={
  "charged-bodies": [
    {
      "kind": "law",
      "steps": [
        [
          "まず二つの物体を、外から電子が出入りしない一つの系として囲む。系を設定しないまま各物体の電荷だけを見ると、電荷が新しく生まれたように見えてしまう。",
          "Enclose both objects as an electrically isolated system. Looking at only one body could make charge appear to be created."
        ],
        [
          "電子が物体AからBへ移ればAは正に、Bは負に帯電する。Aが失った負電荷とBが得た負電荷は大きさが等しいので、全電荷の和は変化しない。",
          "An electron transfer from A to B makes A positive and B negative. The changes in charge are opposite and equal."
        ],
        [
          "電荷保存は力の式から導かれる結果ではなく、実験事実に裏付けられた基礎的な保存則である。",
          "Charge conservation is a fundamental empirical law, not a deduction from Coulomb's force law."
        ]
      ]
    },
    {
      "kind": "counting",
      "steps": [
        [
          "正電荷と負電荷の量を、それぞれ素電荷eの個数として数える。同じ個数なら相殺し、差だけが正味の電荷となる。",
          "Count positive and negative elementary charges. Equal counts cancel; the imbalance is net charge."
        ],
        [
          "電子を一個失うことは電荷が+e増えることを意味する。電子を一個受け取れば電荷は−eだけ変化する。",
          "Losing an electron increases charge by +e; gaining one decreases it by e."
        ],
        [
          "巨視的な帯電体では個数が非常に多いため、電荷密度を連続量で表してもよい。ただし素粒子単位での電荷の離散性は残る。",
          "Macroscopic charge distributions can be approximated as continuous, although elementary charge remains discrete."
        ]
      ]
    }
  ],
  "coulomb": [
    {
      "kind": "empirical",
      "steps": [
        [
          "電荷を帯びた二つの小球に働く力を、電荷量と中心間距離を変えながら調べる。距離だけを2倍にすると力が1/4になるという逆二乗関係は観測から確立された。",
          "Compare forces while varying charge and separation. The inverse-square dependence is established experimentally."
        ],
        [
          "電荷量の大きさの積と距離の二乗を使うのは、正負の符号が力の大きさと向きで別々の役割を持つため。",
          "Use charge magnitudes for force size; their signs determine direction separately."
        ],
        [
          "比例係数には真空の誘電率が含まれる。誘電率は単位の取り方にも関係しており、図の距離をメートル、電荷をクーロンで扱う。",
          "The proportionality constant uses vacuum permittivity; use SI units consistently."
        ],
        [
          "大きさだけの式から、どちらの物体のどの位置に力が作用するかは決まらない。次のベクトル表示が必要となる。",
          "The magnitude equation alone does not specify which body receives the force or its direction."
        ]
      ]
    },
    {
      "kind": "vector",
      "steps": [
        [
          "位置ベクトルを電荷1から電荷2へ向けて定め、同じ向きの単位ベクトルを作る。この向きは符号を計算する前に決めておく。",
          "Define the displacement and unit vector from charge 1 to charge 2 before using the signs."
        ],
        [
          "二つの電荷が同符号なら積が正なので、電荷2に働く力は電荷1から離れる向きになる。異符号なら積が負なので電荷1へ向かう。",
          "A positive product yields repulsion of charge 2 away from charge 1; a negative product yields attraction."
        ],
        [
          "同じ相互作用で電荷1に働く力は、電荷2に働く力と大きさが等しく向きが反対。これは作用反作用の法則と一致する。",
          "The force on charge 1 is equal and opposite, consistent with Newton's third law."
        ]
      ]
    }
  ],
  "superposition": [
    {
      "kind": "principle",
      "steps": [
        [
          "試験電荷を一つ置き、ほかの電荷を一個ずつ残したときに受ける力を個別に考える。各力の始点は同じ試験電荷である。",
          "For each source, compute the separate force at the same test-charge position."
        ],
        [
          "力が逆方向なら打ち消し、角度があれば斜めの合力となる。大きさだけを足す方法では一般に正しい合力が出ない。",
          "Opposite forces can cancel, and angled ones combine diagonally. Scalar sums are generally wrong."
        ],
        [
          "重ね合わせは静電気の線形性を表す基本的な原理であり、計算の便法だけではない。",
          "Superposition expresses linearity of electrostatics, not merely a calculation shortcut."
        ]
      ]
    },
    {
      "kind": "decomposition",
      "steps": [
        [
          "図の水平方向をx、鉛直方向をyとする。各力の角度を同じ座標系で測る。",
          "Choose fixed x and y directions; measure all component angles in the same frame."
        ],
        [
          "各力を水平成分・鉛直成分へ分け、同じ方向の成分同士を符号付きで加える。",
          "Resolve every force into components, then sum signed components axis by axis."
        ],
        [
          "左右対称な配置では水平成分が0でも、鉛直成分は残ることがある。図により対称性を最初に予測すると計算結果を検査できる。",
          "Symmetry can cancel horizontal components but leave vertical force. Predict that before calculating."
        ]
      ]
    }
  ],
  "field-definition": [
    {
      "kind": "definition",
      "steps": [
        [
          "電荷を置く前にも、電荷を生む物体の配置によって空間の各点で電気的な作用が決まると考える。",
          "The configuration of source charges determines electrical influence at every location, even without a probe."
        ],
        [
          "同じ位置の正の試験電荷を小さく変化させると、受ける力はその電荷量に比例する。力を試験電荷で割った量が電場である。",
          "At a fixed position force is proportional to a sufficiently small probe charge; dividing by that charge defines E."
        ],
        [
          "試験電荷が大きすぎると源電荷の分布を動かしてしまうため、源を乱さない極限を定義に含める。",
          "A large probe can change the source distribution, so take the undisturbed-probe limit."
        ],
        [
          "電場の向きは正の試験電荷が受ける力の向きと約束する。負の電荷が受ける力の向きとは異なる。",
          "Field direction is the force direction on a positive probe, not necessarily on a negative charge."
        ]
      ]
    },
    {
      "kind": "consequence",
      "steps": [
        [
          "ある位置で電場が定まったら、そこへ置いた電荷の量と符号によって力が決まる。",
          "Once E is known at a location, force depends on the sign and amount of charge placed there."
        ],
        [
          "正電荷なら電場と同じ方向、負電荷なら電場と反対方向。電場を描き直す必要はなく、力の向きだけが変わる。",
          "For positive q, force follows E; for negative q, force opposes E. The externally specified field does not reverse."
        ],
        [
          "図ではEの矢印とFの矢印を別々に描き、それらを同じものとして扱わない。単位もEはN/C、FはNで異なる。",
          "E and F are different quantities with different units (N/C and N), so use distinct arrows."
        ]
      ]
    }
  ],
  "field-lines": [
    {
      "kind": "derivation",
      "steps": [
        [
          "静止する点電荷Qから距離rの場所に正の試験電荷を置く。クーロン力を試験電荷で割る。",
          "Place a positive probe at distance r from stationary source Q and divide Coulomb force by probe charge."
        ],
        [
          "試験電荷の量が消え、源電荷Qと位置rだけの関数になる。これが源電荷の電場である。",
          "The probe charge cancels, leaving a field determined by Q and position r."
        ],
        [
          "Qが正なら外向き、負なら内向き。電気力線はこの方向場の接線を描いたもので、粒子の運動軌道ではない。",
          "Positive Q gives outward E and negative Q inward E. Field lines are tangents to E, not trajectories."
        ]
      ]
    },
    {
      "kind": "principle",
      "steps": [
        [
          "一つの位置で各点電荷の電場を別々に求め、ベクトルの向きを固定して足す。",
          "Evaluate every source's field at one common location and add signed vectors."
        ],
        [
          "異なる場所での値を足したり、電気力線の本数を直接加える操作ではない。",
          "Never add values at different positions or simply count drawn field lines."
        ],
        [
          "この電場の重ね合わせは、各力を同じ試験電荷で割るという電場の定義と、クーロン力のベクトル和から導かれる。",
          "Field superposition follows from the field definition and Coulomb-force superposition."
        ]
      ]
    }
  ],
  "gauss": [
    {
      "kind": "definition",
      "steps": [
        [
          "面を貫く電場の度合いを定量化するには、面の向きを決める必要がある。小さい面に垂直な向きを面積ベクトルとして選ぶ。",
          "Quantifying a field crossing a surface requires a specified normal direction for each surface element."
        ],
        [
          "面に垂直な電場はその部分の流束に寄与し、面に沿う電場は寄与しない。したがって内積を用いる。",
          "The normal component contributes to flux; the tangential component contributes zero, hence the dot product."
        ],
        [
          "閉じた面の場合は外向き法線を正とし、全表面の微小流束を積分する。流束の単位はN·m²/C。",
          "For a closed surface choose outward normals and integrate all contributions; flux units are N·m²/C."
        ]
      ]
    },
    {
      "kind": "law",
      "steps": [
        [
          "ガウスの法則は、閉曲面から出る電束がその曲面内の全電荷だけで決まるという電磁気の基本法則である。",
          "Gauss's law is a fundamental field law connecting net outward electric flux to enclosed charge."
        ],
        [
          "曲面の外側の電荷は曲面上の局所電場に寄与するが、閉曲面を通る正味の流束への寄与は0となる。",
          "Exterior charges influence local E but contribute zero net flux through a closed surface."
        ],
        [
          "球対称の点電荷なら、電場は球面上で同じ大きさかつ法線方向。したがって積分を球面積との積に簡約できる。",
          "For a spherically symmetric point charge, E is constant and radial on a centered sphere, simplifying the integral."
        ],
        [
          "これにより点電荷の逆二乗電場が得られるが、球対称でない電荷配置で同様に電場を積分の外へ出してよいわけではない。",
          "This yields inverse-square E under spherical symmetry, but does not permit pulling E outside arbitrary flux integrals."
        ]
      ]
    }
  ],
  "potential-work": [
    {
      "kind": "definition",
      "steps": [
        [
          "電荷をAからBへ移すときの位置エネルギーの変化を考える。電荷が異なれば位置エネルギーの変化も電荷量に比例する。",
          "Consider the change of potential energy between A and B. It scales with probe charge in an unaltered electrostatic field."
        ],
        [
          "位置エネルギー変化をその電荷量で割り、試験電荷によらない二地点間の量として電位差を定義する。",
          "Define voltage difference as potential-energy difference per charge."
        ],
        [
          "電位の0は任意だが、二点間の差は基準を変えても同じ。正負の電荷で位置エネルギー変化の符号は異なる。",
          "The zero of potential is arbitrary, but differences are invariant. Potential energy change reverses with charge sign."
        ]
      ]
    },
    {
      "kind": "derivation",
      "steps": [
        [
          "静電場が電荷へする仕事は、位置エネルギーの減少と等しい。これはエネルギー保存を表す。",
          "Electrostatic field work equals the decrease in potential energy by conservation."
        ],
        [
          "AからBへの変化はBの位置エネルギーからAの位置エネルギーを引くので、電場の仕事にはマイナスが付く。",
          "The energy change is U(B)−U(A); field work is its negative."
        ],
        [
          "外力がゆっくり電荷を動かす場合の外力の仕事とは符号が反対になり得る。",
          "An external agent moving the charge slowly can do work of the opposite sign."
        ]
      ]
    }
  ],
  "uniform-field": [
    {
      "kind": "work",
      "steps": [
        [
          "一様電場に沿って正電荷qを距離d移動させる。電場の力の大きさはqEで、力と移動は平行。",
          "Move positive q a distance d along uniform E. Force magnitude is qE, parallel to displacement."
        ],
        [
          "一定の力が移動方向にする仕事は力と距離の積なのでqEdとなる。電位差から求めた仕事と同じ物理量である。",
          "Constant force doing work along its direction gives qEd, identical to the voltage-based work."
        ],
        [
          "試験電荷qを約分して得られる関係は、電荷の大きさに依存せず、極板間の距離と電位差だけで決まる一様電場の性質を表す。",
          "Canceling q identifies a property of the field geometry rather than the probe."
        ]
      ]
    },
    {
      "kind": "derivation",
      "steps": [
        [
          "板の中央付近で電場がほぼ一様、移動距離は板面に垂直な間隔dとする。",
          "Assume approximately uniform field in the central gap and displacement d normal to the plates."
        ],
        [
          "電位差の大きさを電場と距離の積にする。板の端では電場が曲がり、この単純な比例式を使えない。",
          "Voltage magnitude equals Ed under this condition; fringing near edges invalidates simple uniformity."
        ],
        [
          "符号付きの一次元成分は、電位の増加方向と逆になるためマイナスが付く。",
          "For signed components, E points opposite to the increase of potential."
        ]
      ]
    }
  ],
  "potential-gradient": [
    {
      "kind": "integral",
      "steps": [
        [
          "曲がった経路を小さな変位ベクトルへ分割し、各区間で電場の仕事を内積で求める。",
          "Break a path into small displacement vectors and compute the field's work along each using dot products."
        ],
        [
          "区間を無限に細かくして合計すると線積分になる。静電場では始点と終点だけで結果が決まり、経路には依存しない。",
          "In the limit this becomes a line integral. Electrostatic potential difference depends on endpoints only."
        ],
        [
          "場と移動が垂直な微小区間の寄与は0となり、等電位線に沿う移動が電位差を生まない理由もわかる。",
          "Perpendicular displacements contribute zero, explaining equipotential motion."
        ]
      ]
    },
    {
      "kind": "derivation",
      "steps": [
        [
          "非常に短い移動では電位変化を位置ごとの微分で表す。x方向への移動だけなら電場のx成分は電位のx微分の負号付きとなる。",
          "For infinitesimal moves, spatial derivatives describe dV. Along x, the x component of E is minus the x derivative."
        ],
        [
          "x・y・zの三方向を合わせたものが勾配ベクトルで、等電位面に垂直となる。",
          "Combining derivatives in x, y and z gives the gradient, normal to equipotential surfaces."
        ],
        [
          "電位が数値0となる点にも電場が存在し得る。電場は絶対値でなく変化の傾きから決まる。",
          "E depends on variation, so the potential can be zero at a point where E is nonzero."
        ]
      ]
    }
  ],
  "capacitance": [
    {
      "kind": "definition",
      "steps": [
        [
          "二枚の導体の一方に+Q、他方に−Qを蓄え、二枚の間の電位差の大きさを測る。",
          "Store +Q and −Q on opposite plates, then measure the voltage magnitude between them."
        ],
        [
          "電気容量は一方の極板の電荷の大きさを電位差の大きさで割った量として定義する。両板の正味電荷0を分子に使わない。",
          "Capacitance is charge magnitude on one plate divided by voltage magnitude—not net charge of both plates."
        ],
        [
          "線形コンデンサーではQと電圧が比例し、その比は電極の形状・間隔・媒質によって決まる。",
          "For a linear capacitor Q scales with V, and their ratio depends on geometry and dielectric."
        ]
      ]
    },
    {
      "kind": "derivation",
      "steps": [
        [
          "十分広く離間の小さい二枚の平行板を考える。それぞれの板の面電荷密度の大きさはQ/Aである。",
          "Take two large plates with small separation. Each has surface charge magnitude density Q/A."
        ],
        [
          "単一の無限平面電荷がつくる電場は片側で面密度の1/(2ε₀)倍。正負二枚の間では電場が同方向に重なるので、合計は面密度の1/ε₀倍になる。",
          "Each infinite charged sheet produces E=σ/(2ε₀) per side. Opposite sheets produce fields that add inside, yielding σ/ε₀."
        ],
        [
          "板間電位差の大きさはEと間隔dの積。容量Q/ΔVへ代入すると電荷Qが約分され、幾何と誘電率の式となる。",
          "Voltage is Ed. Substituting into C=Q/ΔV cancels Q and gives the geometric relation."
        ],
        [
          "端での電場の広がりを無視するので、板の面積が間隔に比べ十分大きい状況でよく成り立つ。",
          "Fringing is neglected, so plate size should be large compared with the gap."
        ]
      ]
    }
  ],
  "capacitor-energy": [
    {
      "kind": "increment",
      "steps": [
        [
          "充電が途中まで進み、片側の板にすでに電荷qが蓄えられている時点を考える。その瞬間の電位差はq/Cである。",
          "At an intermediate charging state, the plate holds charge q and instantaneous voltage is q/C."
        ],
        [
          "さらに微小電荷dqを高電位の側へ運ぶために必要な仕事は、その瞬間の電位差とdqの積となる。",
          "Moving another infinitesimal dq against the potential difference requires voltage times dq."
        ],
        [
          "最終電圧Q/Cを充電の最初から使うと仕事を過大評価する。これが積分を使う理由となる。",
          "Using the final voltage throughout would overestimate work, motivating integration."
        ]
      ]
    },
    {
      "kind": "derivation",
      "steps": [
        [
          "横軸を電荷q、縦軸を電圧q/Cとする。蓄えられるエネルギーはグラフの線の下の面積に等しい。",
          "Plot charge q horizontally and voltage q/C vertically. Stored energy is area beneath the curve."
        ],
        [
          "線形容量ならグラフは原点から右上がりの直線になるため、0からQの領域は底辺Q・高さQ/Cの三角形。",
          "For constant C, the graph is a straight line through the origin, making a triangle of base Q and height Q/C."
        ],
        [
          "三角形面積の1/2がエネルギー式の係数であり、微積分の結果と一致する。",
          "The triangular area yields the factor 1/2, matching the integral."
        ],
        [
          "コンデンサーの電場の蓄積エネルギーと電池の供給仕事を混同しない。抵抗がある充電回路では一部は熱になる。",
          "Do not confuse capacitor-stored energy with total work supplied by a source; some can dissipate as heat."
        ]
      ]
    }
  ],
  "dielectric": [
    {
      "kind": "material",
      "steps": [
        [
          "導体板の間に誘電体を置くと、物質内部の正負の束縛電荷が少し相対移動し、分極が生じる。",
          "Inserting a dielectric allows small relative shifts of bound charges, creating polarization."
        ],
        [
          "同じ自由電荷を保つ場合、誘電体の分極電場は元の電場を部分的に打ち消す。結果として電位差が小さくなり容量が増える。",
          "At fixed free charge, polarization partially opposes the field; voltage decreases and capacitance rises."
        ],
        [
          "線形・等方・均質な媒質で相対誘電率が一定なら、真空の誘電率にその係数を掛けた式で表せる。",
          "For a linear homogeneous isotropic dielectric, multiply vacuum permittivity by relative permittivity."
        ],
        [
          "高分子・強誘電体などの非線形応答や周波数依存性がある場合は一定の係数として扱えない。",
          "Nonlinear or frequency-dependent dielectrics may not be described by one constant factor."
        ]
      ]
    },
    {
      "kind": "constraint",
      "steps": [
        [
          "コンデンサーを充電して電池から外すと、自由電荷が出入りする経路がないのでQをほぼ一定とみなす。",
          "If the charged capacitor is disconnected, free charge has no conduction path and stays approximately constant."
        ],
        [
          "理想電池へつないだままなら端子間電位差が一定に保たれる。容量が増えた分だけ電池から自由電荷が移動する。",
          "If connected to an ideal battery, voltage stays fixed and additional free charge flows as capacitance rises."
        ],
        [
          "実験条件が違うと電場・電位差・蓄積エネルギーの変化が異なる。どの量を一定にするかを必ず明示する。",
          "The field, voltage and stored-energy changes depend on what is held constant; state the constraint first."
        ]
      ]
    }
  ]
};
