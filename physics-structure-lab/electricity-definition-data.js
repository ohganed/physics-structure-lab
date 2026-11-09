/* Definition-to-figure audit inventory: one physically grounded drawing per introduced equation. */
export const electricityDefinitionFigures={
  "charged-bodies": [
    {
      "title": [
        "全電荷の保存",
        "Total charge conservation"
      ],
      "description": [
        "点線の枠は物体AとBを合わせた系。移動前は0+0=0、電子1個の移動後は(+e)+(−e)=0。各物体の電荷は変わっても、その合計は変わらない。",
        "The dashed boundary encloses A and B. Before: 0+0=0. After one electron moves: (+e)+(−e)=0. Each body's charge changes, but their sum does not."
      ],
      "kind": "charge",
      "marks": [
        "Qbefore",
        "Qafter"
      ]
    },
    {
      "title": [
        "電荷の量子化",
        "Quantization of charge"
      ],
      "description": [
        "電子数の差が正味電荷を決めることを示す。",
        "Show how an imbalance of elementary charges determines net charge."
      ],
      "kind": "charge",
      "marks": [
        "N+",
        "N−"
      ]
    }
  ],
  "coulomb": [
    {
      "title": [
        "力の距離依存性",
        "Inverse-square electric force"
      ],
      "description": [
        "2つの電荷間距離rと、作用点での力の方向を図示する。",
        "Locate charge separation r and the direction of force at the receiving charge."
      ],
      "kind": "pair",
      "marks": [
        "q₁",
        "q₂"
      ]
    },
    {
      "title": [
        "符号付きクーロン力ベクトル",
        "Signed Coulomb-force vector"
      ],
      "description": [
        "電荷2に働く力は電荷1との直線上を向き、符号で向きが変わる。",
        "The force on charge 2 lies on the separation line; charge signs determine its sense."
      ],
      "kind": "pair",
      "marks": [
        "F₂←₁",
        "r̂₁₂"
      ]
    }
  ],
  "superposition": [
    {
      "title": [
        "力のベクトル和",
        "Vector addition of forces"
      ],
      "description": [
        "試験電荷から出る2本の力の矢印と合力を一つの図に示す。",
        "Show two source-force vectors and the resultant at the test charge."
      ],
      "kind": "vector",
      "marks": [
        "F₁",
        "F₂"
      ]
    },
    {
      "title": [
        "座標成分への分解",
        "Resolve forces into components"
      ],
      "description": [
        "合力の水平方向と鉛直方向の成分を別々に示す。",
        "Separate horizontal and vertical components of the same resultant."
      ],
      "kind": "vector",
      "marks": [
        "Fx",
        "Fy"
      ]
    }
  ],
  "field-definition": [
    {
      "title": [
        "電場の定義",
        "Definition of electric field"
      ],
      "description": [
        "正の試験電荷qに働くFを描き、その同じ場所でE=F/qを対応させる。",
        "Draw force F on a positive probe q at one position and show E=F/q there."
      ],
      "kind": "field",
      "marks": [
        "F",
        "E"
      ]
    },
    {
      "title": [
        "電荷が電場から受ける力",
        "Force on a charge in a field"
      ],
      "description": [
        "同じ電場Eでもqの符号によって力の向きが逆になる。",
        "For the same E, reversing charge sign reverses the force."
      ],
      "kind": "field",
      "marks": [
        "q",
        "F"
      ]
    }
  ],
  "field-lines": [
    {
      "title": [
        "点電荷による電場",
        "Electric field of a point charge"
      ],
      "description": [
        "中心電荷Qから距離rの場所の電場を図示する。",
        "Show E at a point distance r from source charge Q."
      ],
      "kind": "radial",
      "marks": [
        "Q",
        "E"
      ]
    },
    {
      "title": [
        "電場の重ね合わせ",
        "Superposition of electric fields"
      ],
      "description": [
        "同じ位置における2つの電場ベクトルと合成電場を描く。",
        "Show the two fields and their resultant at the same location."
      ],
      "kind": "vector",
      "marks": [
        "E₁",
        "E₂"
      ]
    }
  ],
  "gauss": [
    {
      "title": [
        "電束の定義",
        "Definition of electric flux"
      ],
      "description": [
        "面の外向き法線dAと電場Eのなす角を描く。",
        "Show field E and outward surface normal dA, including their angle."
      ],
      "kind": "flux",
      "marks": [
        "E",
        "dA"
      ]
    },
    {
      "title": [
        "ガウスの法則",
        "Gauss's law"
      ],
      "description": [
        "閉曲面内の電荷Qと、表面を外向きに貫く電場を示す。",
        "Show enclosed charge Q and electric-field vectors crossing the closed surface outward."
      ],
      "kind": "gauss",
      "marks": [
        "Qenc",
        "ΦE"
      ]
    }
  ],
  "potential-work": [
    {
      "title": [
        "電位差の定義",
        "Potential difference defined by energy"
      ],
      "description": [
        "A点とB点の電位と電荷qの位置エネルギーを対応させる。",
        "Relate positions A and B, potential difference, and electric potential energy per charge."
      ],
      "kind": "potential",
      "marks": [
        "A",
        "B"
      ]
    },
    {
      "title": [
        "電場の仕事と電位差",
        "Field work and voltage drop"
      ],
      "description": [
        "電場方向の移動A→Bに対する力と変位を同時に表示する。",
        "Show force and displacement along the field from A to B."
      ],
      "kind": "potential",
      "marks": [
        "Wfield",
        "ΔV"
      ]
    }
  ],
  "uniform-field": [
    {
      "title": [
        "一様な場での仕事",
        "Work in a uniform field"
      ],
      "description": [
        "平行板間の電場方向に正電荷が距離d進む状況を図示する。",
        "Show a positive charge moving distance d along uniform field between plates."
      ],
      "kind": "plates",
      "marks": [
        "q",
        "d"
      ]
    },
    {
      "title": [
        "一様電場と電圧",
        "Uniform field and voltage"
      ],
      "description": [
        "極板間隔d、電位差ΔV、電場Eを同じ図に表示する。",
        "Label plate separation d, voltage ΔV and field E together."
      ],
      "kind": "plates",
      "marks": [
        "ΔV",
        "E"
      ]
    }
  ],
  "potential-gradient": [
    {
      "title": [
        "電場の線積分",
        "Field line integral"
      ],
      "description": [
        "AからBへの微小変位drと電場Eの方向を示す。",
        "Show E and a differential displacement dr on a path A→B."
      ],
      "kind": "potential",
      "marks": [
        "E",
        "dr"
      ]
    },
    {
      "title": [
        "電位の勾配",
        "Gradient of potential"
      ],
      "description": [
        "等電位線に直交して電位の低い方向へ電場が向くことを示す。",
        "Show field E normal to equipotentials toward decreasing V."
      ],
      "kind": "equipotential",
      "marks": [
        "∇V",
        "−∇V"
      ]
    }
  ],
  "capacitance": [
    {
      "title": [
        "電気容量の定義",
        "Capacitance as charge per voltage"
      ],
      "description": [
        "極板上の+Qと−Q、および両端の電位差ΔVを同じ図に示す。",
        "Show plate charges +Q, −Q and voltage ΔV in the same diagram."
      ],
      "kind": "plates",
      "marks": [
        "Q",
        "ΔV"
      ]
    },
    {
      "title": [
        "平行板の電気容量",
        "Geometric parallel-plate capacitance"
      ],
      "description": [
        "極板の面積Aと距離dを区別して示す。",
        "Distinguish the plate area A from separation d."
      ],
      "kind": "plates",
      "marks": [
        "A",
        "d"
      ]
    }
  ],
  "capacitor-energy": [
    {
      "title": [
        "微小充電仕事",
        "Incremental charging work"
      ],
      "description": [
        "現在の電荷qにおける電圧V(q)と、微小な追加電荷dqを示す。",
        "Show the instant voltage V(q) and added small charge dq."
      ],
      "kind": "curve",
      "marks": [
        "q",
        "V(q)"
      ]
    },
    {
      "title": [
        "蓄積エネルギーの定義",
        "Stored energy as an integral"
      ],
      "description": [
        "電圧–電荷グラフの0からQまでの三角形面積を示す。",
        "Shade the triangle under the V-versus-q graph from 0 to Q."
      ],
      "kind": "curve",
      "marks": [
        "Q",
        "U"
      ]
    }
  ],
  "dielectric": [
    {
      "title": [
        "誘電率と分極",
        "Permittivity and polarization"
      ],
      "description": [
        "誘電体内の束縛電荷の偏りと、極板間の電場を示す。",
        "Show polarized bound charge on the dielectric and the electric field."
      ],
      "kind": "dielectric",
      "marks": [
        "εr",
        "P"
      ]
    },
    {
      "title": [
        "電荷固定と電圧固定",
        "Fixed-charge versus fixed-voltage condition"
      ],
      "description": [
        "電池から切り離す場合と接続する場合を区別する。",
        "Contrast disconnected plates with a voltage-source-connected capacitor."
      ],
      "kind": "plates",
      "marks": [
        "Q fixed",
        "V fixed"
      ]
    }
  ],
  "current-definition": [
    {
      "title": [
        "電流の定義",
        "Definition of current"
      ],
      "description": [
        "導線の断面を通る電荷ΔQと時間Δtを示す。",
        "Locate cross-section, charge ΔQ crossing it and elapsed time Δt."
      ],
      "kind": "flow",
      "marks": [
        "ΔQ",
        "Δt"
      ]
    },
    {
      "title": [
        "担体のドリフトと電流",
        "Carrier drift and current"
      ],
      "description": [
        "断面積A、担体密度n、ドリフト速度vdを一つの状況で示す。",
        "Show cross-sectional area A, carrier density n and drift speed vd."
      ],
      "kind": "flow",
      "marks": [
        "A",
        "vd"
      ]
    }
  ],
  "ohm": [
    {
      "title": [
        "オーム性抵抗の関係",
        "Voltage-current relation of a resistor"
      ],
      "description": [
        "二端子抵抗にかかる電位差と通る電流を同時に示す。",
        "Label voltage across and current through a resistor."
      ],
      "kind": "resistor",
      "marks": [
        "V",
        "I"
      ]
    },
    {
      "title": [
        "抵抗率と導線の形状",
        "Resistivity and conductor geometry"
      ],
      "description": [
        "導線の長さL、断面積Aと抵抗率ρを示す。",
        "Identify length L, cross-sectional area A and material resistivity ρ."
      ],
      "kind": "wire",
      "marks": [
        "L",
        "A"
      ]
    }
  ],
  "joule": [
    {
      "title": [
        "電力の定義",
        "Definition of electric power"
      ],
      "description": [
        "一定時間に抵抗へ入る電荷とエネルギーの移動を示す。",
        "Show charge and energy transferred into a resistor per unit time."
      ],
      "kind": "resistor",
      "marks": [
        "P",
        "V"
      ]
    },
    {
      "title": [
        "抵抗のジュール熱",
        "Joule heating in a resistor"
      ],
      "description": [
        "抵抗の両端電圧と電流から内部エネルギーへ移る電力を示す。",
        "Connect current and voltage at the resistor to thermal-energy conversion."
      ],
      "kind": "energy",
      "marks": [
        "I²R",
        "V²/R"
      ]
    }
  ],
  "series-parallel": [
    {
      "title": [
        "直列合成抵抗",
        "Series resistance"
      ],
      "description": [
        "一本の経路を同じ電流Iが順に通る二抵抗を描く。",
        "Draw two resistors along a single path sharing current I."
      ],
      "kind": "series",
      "marks": [
        "R₁",
        "R₂"
      ]
    },
    {
      "title": [
        "並列合成抵抗",
        "Parallel resistance"
      ],
      "description": [
        "同じ2節点に結ばれた二つの枝と枝電流を描く。",
        "Draw two parallel branches joining the same two nodes with branch currents."
      ],
      "kind": "parallel",
      "marks": [
        "I₁",
        "I₂"
      ]
    }
  ],
  "kirchhoff": [
    {
      "title": [
        "キルヒホッフの電流則",
        "Kirchhoff's current law"
      ],
      "description": [
        "分岐点を囲う境界で流入・流出の電流を示す。",
        "Mark incoming and outgoing currents at a junction."
      ],
      "kind": "junction",
      "marks": [
        "Iin",
        "Iout"
      ]
    },
    {
      "title": [
        "キルヒホッフの電圧則",
        "Kirchhoff's voltage law"
      ],
      "description": [
        "閉回路を一周した電位の上昇と下降を向き付きで示す。",
        "Show signed voltage rises and drops around a loop."
      ],
      "kind": "loop",
      "marks": [
        "ℰ",
        "IR"
      ]
    }
  ],
  "battery": [
    {
      "title": [
        "起電力と端子電圧",
        "Electromotive force and terminal voltage"
      ],
      "description": [
        "電池内部の起電力、内部抵抗の電圧降下、端子の電位差を示す。",
        "Identify source emf, internal resistance drop and terminal voltage."
      ],
      "kind": "loop",
      "marks": [
        "ℰ",
        "Ir"
      ]
    },
    {
      "title": [
        "負荷電流の決定",
        "Load current with internal resistance"
      ],
      "description": [
        "外部抵抗Rと内部抵抗rが同じループの電流を担う。",
        "Show external R and internal r in the same series-current loop."
      ],
      "kind": "series",
      "marks": [
        "R",
        "r"
      ]
    }
  ],
  "charging": [
    {
      "title": [
        "RC充電回路の電圧収支",
        "RC charging loop balance"
      ],
      "description": [
        "電池、抵抗、コンデンサーの位置と電圧の向きを示す。",
        "Label source, resistor and capacitor voltages around a circuit loop."
      ],
      "kind": "rc",
      "marks": [
        "ℰ",
        "VC"
      ]
    },
    {
      "title": [
        "充電の微分方程式",
        "Charging rate equation"
      ],
      "description": [
        "Qが増えるほど電流が減ることをグラフで示す。",
        "Graph decreasing current as capacitor charge rises."
      ],
      "kind": "time",
      "marks": [
        "Q(t)",
        "dQ/dt"
      ]
    },
    {
      "title": [
        "指数関数の充電解",
        "Exponential RC charging"
      ],
      "description": [
        "時間τ=RCの時点で最終電荷の約63.2%となることを図示する。",
        "Mark τ=RC and the 63.2% charge level."
      ],
      "kind": "time",
      "marks": [
        "τ",
        "63.2%"
      ]
    }
  ],
  "discharging": [
    {
      "title": [
        "RC放電の微分方程式",
        "RC discharging rate equation"
      ],
      "description": [
        "蓄えた電荷Qと放電電流がともに減少する状況を示す。",
        "Show decreasing stored Q and the discharge current direction."
      ],
      "kind": "rc",
      "marks": [
        "Q",
        "I"
      ]
    },
    {
      "title": [
        "指数関数の放電",
        "Exponential RC decay"
      ],
      "description": [
        "時間τで電荷が初期値の約36.8%になることを示す。",
        "Mark Q/Q₀≈36.8% after one τ."
      ],
      "kind": "time",
      "marks": [
        "τ",
        "36.8%"
      ]
    }
  ],
  "rc-energy": [
    {
      "title": [
        "電池から供給された仕事",
        "Work delivered by the battery"
      ],
      "description": [
        "一定電圧ℰの電池から移動する電荷の総量を示す。",
        "Show charge transferred from the source at fixed emf."
      ],
      "kind": "loop",
      "marks": [
        "ℰ",
        "Q"
      ]
    },
    {
      "title": [
        "充電エネルギーの収支",
        "Energy balance in RC charging"
      ],
      "description": [
        "電源からの仕事を、コンデンサーの蓄積と抵抗の熱に分ける。",
        "Split supplied work between stored capacitor energy and resistor heat."
      ],
      "kind": "energy",
      "marks": [
        "UC",
        "WR"
      ]
    }
  ],
  "magnetic-force": [
    {
      "title": [
        "ローレンツ力の定義",
        "Magnetic Lorentz force"
      ],
      "description": [
        "速度v、磁場B、正電荷に働く力Fの三方向を示す。",
        "Show the perpendicular directions of v, B, and force F for positive q."
      ],
      "kind": "magnetic",
      "marks": [
        "v",
        "B"
      ]
    },
    {
      "title": [
        "外積の大きさと角度",
        "Cross-product magnitude and angle"
      ],
      "description": [
        "vとBの角度θが0なら力が消え、90°で最大になる。",
        "Show relative angle θ between v and B and resulting force."
      ],
      "kind": "magnetic",
      "marks": [
        "θ",
        "F"
      ]
    }
  ],
  "circular-magnetic": [
    {
      "title": [
        "磁気力による向心力",
        "Magnetic centripetal force"
      ],
      "description": [
        "粒子の接線速度と円の中心へ向かう磁気力を同時に示す。",
        "Draw tangential velocity and inward magnetic force for a curved orbit."
      ],
      "kind": "orbit",
      "marks": [
        "v",
        "F"
      ]
    },
    {
      "title": [
        "軌道半径と周期",
        "Magnetic orbit radius and period"
      ],
      "description": [
        "半径rと一周の時間Tを粒子の円軌道に対応させる。",
        "Identify orbit radius r and one full revolution time T."
      ],
      "kind": "orbit",
      "marks": [
        "r",
        "T"
      ]
    }
  ],
  "wire-magnetic": [
    {
      "title": [
        "直線電流の磁場",
        "Magnetic field from a straight current"
      ],
      "description": [
        "導線を囲む同心円の磁場と導線からの距離rを示す。",
        "Show circular field lines centered on the wire and radial distance r."
      ],
      "kind": "wire-B",
      "marks": [
        "I",
        "r"
      ]
    },
    {
      "title": [
        "アンペールの周回積分",
        "Ampère's circulation law"
      ],
      "description": [
        "磁場の接線方向と周回する閉路の向きを示す。",
        "Show magnetic-field tangents and an oriented closed integration path."
      ],
      "kind": "wire-B",
      "marks": [
        "B",
        "dℓ"
      ]
    }
  ],
  "faraday": [
    {
      "title": [
        "磁束の定義",
        "Magnetic flux through a surface"
      ],
      "description": [
        "コイルを貫く磁束密度Bと面積の法線ベクトルを示す。",
        "Show B crossing a loop's area with surface normal dA."
      ],
      "kind": "flux",
      "marks": [
        "B",
        "dA"
      ]
    },
    {
      "title": [
        "電磁誘導の起電力",
        "Induced emf from changing flux"
      ],
      "description": [
        "磁束の増減とコイルの起電力との対応を図示する。",
        "Relate changing magnetic flux and induced emf in the loop."
      ],
      "kind": "coil",
      "marks": [
        "dΦ/dt",
        "ℰ"
      ]
    }
  ],
  "lenz": [
    {
      "title": [
        "レンツの法則の符号",
        "Sign convention for Lenz's law"
      ],
      "description": [
        "磁束の増加に対して逆向きの誘導磁場を描く。",
        "Show induced field opposing an increase in magnetic flux."
      ],
      "kind": "coil",
      "marks": [
        "ΔB",
        "Binduced"
      ]
    },
    {
      "title": [
        "電磁誘導のエネルギー収支",
        "Energy accounting in induction"
      ],
      "description": [
        "磁石を動かす外力の仕事と電気的損失の向きを示す。",
        "Relate external mechanical work to electrical losses."
      ],
      "kind": "energy",
      "marks": [
        "Pmech",
        "Pelectric"
      ]
    }
  ],
  "inductor": [
    {
      "title": [
        "自己誘導起電力",
        "Self-induced emf"
      ],
      "description": [
        "電流Iが変化するコイルに逆向きの起電力が生じることを示す。",
        "Show an inductor opposing change in its own current."
      ],
      "kind": "coil",
      "marks": [
        "dI/dt",
        "ℰL"
      ]
    },
    {
      "title": [
        "コイルに蓄える磁気エネルギー",
        "Stored magnetic energy"
      ],
      "description": [
        "電流の増加に伴う微小仕事を積算するグラフを示す。",
        "Show integrated work accumulated as current grows."
      ],
      "kind": "curve",
      "marks": [
        "I",
        "UL"
      ]
    }
  ],
  "ac-wave": [
    {
      "title": [
        "交流電圧・電流の時間変化",
        "Sinusoidal voltage and current"
      ],
      "description": [
        "正弦波の最大値V₀と1周期Tをグラフに示す。",
        "Mark peak V₀ and one period T on a sine wave."
      ],
      "kind": "sine",
      "marks": [
        "V₀",
        "T"
      ]
    },
    {
      "title": [
        "交流の実効値",
        "RMS value of AC"
      ],
      "description": [
        "二乗平均と等価な直流値を正弦波で説明する。",
        "Relate squared average to equivalent DC heating value."
      ],
      "kind": "sine",
      "marks": [
        "Vrms",
        "V₀"
      ]
    }
  ],
  "reactance": [
    {
      "title": [
        "コイルとコンデンサーの微分関係",
        "Derivative laws for L and C"
      ],
      "description": [
        "電圧と電流の90°位相差を時間軸上で表示する。",
        "Show a quarter-period phase shift between voltage and current."
      ],
      "kind": "phase",
      "marks": [
        "v",
        "i"
      ]
    },
    {
      "title": [
        "リアクタンスの定義",
        "Reactance of inductors and capacitors"
      ],
      "description": [
        "周波数とXL、XCの逆向きの変化を同じグラフに示す。",
        "Show XL rising and XC falling with frequency."
      ],
      "kind": "reactance",
      "marks": [
        "XL",
        "XC"
      ]
    }
  ],
  "resonance": [
    {
      "title": [
        "直列回路のインピーダンス",
        "Series RLC impedance"
      ],
      "description": [
        "抵抗成分Rとリアクタンス差の直角三角形を示す。",
        "Show R and net reactance as perpendicular components of impedance."
      ],
      "kind": "phasor",
      "marks": [
        "R",
        "X"
      ]
    },
    {
      "title": [
        "共振角振動数",
        "Resonance angular frequency"
      ],
      "description": [
        "XL=XCとなる交点と共振周波数ω₀を示す。",
        "Show crossover XL=XC at resonance frequency ω₀."
      ],
      "kind": "reactance",
      "marks": [
        "ω₀",
        "Z"
      ]
    }
  ],
  "ampere-maxwell": [
    {
      "title": [
        "変位電流を含む周回則",
        "Ampère–Maxwell circulation law"
      ],
      "description": [
        "充電するコンデンサーの導線電流と極板間の電束変化を対応させる。",
        "Relate conduction current in a wire to changing electric flux in the capacitor gap."
      ],
      "kind": "displacement",
      "marks": [
        "I",
        "dΦE/dt"
      ]
    },
    {
      "title": [
        "アンペール–マクスウェル方程式の局所形",
        "Local Ampère–Maxwell law"
      ],
      "description": [
        "導電電流密度Jと変化する電場が磁場の回転を生むことを示す。",
        "Show contributions from J and ∂E/∂t to curl B."
      ],
      "kind": "displacement",
      "marks": [
        "J",
        "∂E/∂t"
      ]
    }
  ],
  "wave": [
    {
      "title": [
        "電磁場の波動方程式",
        "Electromagnetic wave equation"
      ],
      "description": [
        "伝播方向に沿う電場の変化を位置と時間に対応させる。",
        "Show field variation as a function of propagation distance and time."
      ],
      "kind": "wave",
      "marks": [
        "x",
        "t"
      ]
    },
    {
      "title": [
        "光速と電場・磁場の振幅",
        "Wave speed and field amplitudes"
      ],
      "description": [
        "E、B、伝播方向の直交関係と振幅比E₀/B₀を示す。",
        "Show orthogonal E, B, propagation direction and E₀/B₀."
      ],
      "kind": "wave",
      "marks": [
        "E₀",
        "B₀"
      ]
    }
  ],
  "energy-flux": [
    {
      "title": [
        "電磁場のエネルギー密度",
        "Electromagnetic field energy density"
      ],
      "description": [
        "電場と磁場のエネルギーを空間の同じ領域に蓄えられる量として示す。",
        "Show electric and magnetic energy densities in the same region of space."
      ],
      "kind": "energy",
      "marks": [
        "uE",
        "uB"
      ]
    },
    {
      "title": [
        "ポインティングベクトルの定義",
        "Definition of the Poynting vector"
      ],
      "description": [
        "電場Eと磁場Bの外積がエネルギーの流れる向きになる。",
        "Show E, B and energy flux S as a right-handed triad."
      ],
      "kind": "wave",
      "marks": [
        "E",
        "S"
      ]
    }
  ]
};
