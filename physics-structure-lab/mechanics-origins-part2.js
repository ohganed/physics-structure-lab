/* Phenomenon-to-equation paths: oscillations, gravitation, rotation, accelerating frames. */
export const mechanicsOriginsPart2={
  "oscillation": {
    "title": [
      "ばねの振動について",
      "Spring oscillations"
    ],
    "observation": [
      "ばねの物体を右へ引いて離すと、平衡位置を通り過ぎ、左端で向きを変える。最も右にある瞬間は速度が0なのに、なぜ左へ動き始めるのだろう。",
      "Pull a spring mass to the right and release it. It passes equilibrium, turns at the left, and returns. At its rightmost point velocity is zero, yet it starts moving left: why?"
    ],
    "representation": [
      "位置は平衡位置からの符号付き変位xとして表す。右への変位に対して左向きの力が働くなら、変位と力の比例関係をグラフで調べられる。",
      "Represent position by signed displacement x from equilibrium. If the spring pulls opposite to the displacement, plot spring force against x and test for a proportional relationship."
    ],
    "prior": [
      "理想的な線形ばねではF=−kxと近似できる。比例係数kはばねの実際の性質から測る定数で、運動方程式そのものから導くわけではない。",
      "An ideal linear spring follows the approximate empirical relation F=−kx. Stiffness k characterizes the spring and is not derived from Newton’s law."
    ],
    "steps": [
      {
        "question": [
          "変位と復元力を結び付ける",
          "Relate displacement to restoring force"
        ],
        "tex": "F_x=-kx",
        "why": [
          "マイナスは、正の変位に対して負の向きの力が働くことを示す。平衡位置x=0では復元力も0になる。",
          "The minus sign expresses opposition to displacement. At equilibrium x=0, the restoring spring force vanishes."
        ]
      },
      {
        "question": [
          "運動方程式へ入れる",
          "Insert the spring relation into the equation of motion"
        ],
        "tex": "m\\ddot x=-kx\\quad\\Rightarrow\\quad\\ddot x=-\\frac{k}{m}x",
        "why": [
          "物体が右にあれば左に加速する。速度が0の折り返し点でも加速度が残る理由がわかる。",
          "A rightward displacement gives leftward acceleration, including at a turning point where instantaneous velocity is zero."
        ]
      },
      {
        "question": [
          "繰り返す形の解を試す",
          "Try a motion that repeats"
        ],
        "tex": "x=A\\cos(\\omega t+\\phi)",
        "why": [
          "三角関数のcosを2回微分すると、元のcosにマイナスが付きます。この性質は、加速度が変位のマイナス倍になるばねの運動方程式とよく合います。",
          "Differentiating cosine twice yields minus the original cosine multiplied by the angular frequency squared. That is the form the spring equation requires."
        ]
      },
      {
        "question": [
          "まず位置を微分して速度を出す",
          "Differentiate position once to obtain velocity"
        ],
        "tex": "v=\\dot x=-A\\omega\\sin(\\omega t+\\phi)",
        "why": [
          "cosの微分は−sinで、括弧の中のωtを微分するとωが掛かる。位置と速度の変化を、途中を飛ばさず確認する。",
          "Differentiate cosine to negative sine, and multiply by ω using the chain rule. This shows the intermediate velocity before finding acceleration."
        ]
      },
      {
        "question": [
          "試した関数を2回微分する",
          "Differentiate the candidate position twice"
        ],
        "tex": "\\ddot x=-\\omega^2A\\cos(\\omega t+\\phi)=-\\omega^2x",
        "why": [
          "角振動数ωが何でなければならないかを、運動方程式との比較で確かめられる。",
          "Compare this acceleration with the equation of motion to determine the angular frequency."
        ]
      },
      {
        "question": [
          "係数を比較して周期へ進む",
          "Match coefficients and obtain the period"
        ],
        "tex": "\\omega^2=\\frac{k}{m},\\qquad T=\\frac{2\\pi}{\\omega}=2\\pi\\sqrt{\\frac{m}{k}}",
        "why": [
          "cosの位相が2π進む時間をTと呼ぶ。振幅Aが消えているので、理想線形ばねでは周期に振幅が現れない。",
          "One cycle means a 2π change in cosine phase. Amplitude A cancels, so the ideal linear-spring period is amplitude-independent."
        ]
      }
    ],
    "meaning": [
      "ばねが引く力は、平衡位置からの変位に比例して反対向きに働きます。この関係を運動方程式に入れると、三角関数で表される往復運動が得られます。そこから周期と質量・ばね定数の関係も計算できます。",
      "A spring's restoring force opposes displacement and grows proportionally with it. Substitution into Newton's law gives sinusoidal motion and the period as a function of mass and stiffness."
    ],
    "bounds": [
      "線形ばね・質量一定・減衰なし・ばね自体の質量無視。非線形ばねや抵抗があれば同じ周期式を当然には使えない。",
      "Assumes a massless linear spring, constant attached mass, and no damping. Nonlinearity or dissipation can invalidate the simple period."
    ],
    "connection": [
      "同じ微分方程式は振り子の小振幅近似や電気回路の振動にも現れる。現象が違っても数式の構造が共通になる。",
      "The same equation appears for small-angle pendulums and ideal electrical oscillators: different phenomena can share a mathematical structure."
    ]
  },
  "gravitation": {
    "title": [
      "万有引力と円軌道について",
      "Gravity and circular orbits"
    ],
    "observation": [
      "落とした石は地上へ落ちる。一方、人工衛星は地球の近くを回り続ける。衛星に重力が働いていないと考えるより、重力によって進行方向を曲げられ続けていると考えたらどうだろう。",
      "A stone falls toward Earth; a satellite keeps orbiting. Instead of assuming the satellite is beyond gravity, consider that gravity continually bends its trajectory."
    ],
    "representation": [
      "天体の中心から物体までの距離r、天体の質量M、物体の質量mを区別する。落下では加速度、円軌道では速度方向の変化に注目する。",
      "Distinguish central-body mass M, orbiting-body mass m and center-to-center distance r. Connect gravitational acceleration near Earth to inward acceleration on a circular path."
    ],
    "prior": [
      "重力が距離の逆二乗に従うというニュートンの万有引力の関係は、観測と照合される物理法則であって、円運動の幾何学から証明できるものではない。",
      "The inverse-square gravitational relation is a physical law supported by observation. It does not follow from the geometry of circular motion alone."
    ],
    "steps": [
      {
        "question": [
          "中心からの距離に注目する",
          "Use center-to-center distance"
        ],
        "tex": "F_g=\\frac{GMm}{r^2}",
        "why": [
          "rは地表からの高度ではなく中心間距離。Gの値は実験によって決まり、勝手な比例定数ではない。",
          "Here r is geocentric distance, not altitude. G is an experimentally determined constant."
        ]
      },
      {
        "question": [
          "質量を割って加速度にする",
          "Convert gravitational force into acceleration"
        ],
        "tex": "a_g=\\frac{F_g}{m}=\\frac{GM}{r^2}",
        "why": [
          "小さい物体側の質量mが消える。空気抵抗を無視できれば同じ位置の重力加速度は質量によらない。",
          "The test mass m cancels. In this model, gravitational acceleration at fixed r does not depend on the falling body’s mass."
        ]
      },
      {
        "question": [
          "円軌道が要求する加速度を思い出す",
          "Recall acceleration required by a circular orbit"
        ],
        "tex": "a_c=\\frac{v^2}{r}",
        "why": [
          "これは運動の幾何学から導いた関係。重力の法則とは別に、まず円軌道の条件として必要。",
          "This relation came from circular-path geometry and is a separate ingredient from gravity’s force law."
        ]
      },
      {
        "question": [
          "中心向きの重力と円運動を結び付ける",
          "Match gravitational acceleration to circular acceleration"
        ],
        "tex": "\\frac{GM}{r^2}=\\frac{v^2}{r}",
        "why": [
          "同じ中心向き加速度を二つの見方で表している。衛星に『重力と向心力』という二つの別の力があるのではない。",
          "Two descriptions of the same inward acceleration are matched. Gravity supplies centripetal force, rather than acting in addition to it."
        ]
      },
      {
        "question": [
          "速度と周期の予測を得る",
          "Predict speed and orbital period"
        ],
        "tex": "v=\\sqrt{\\frac{GM}{r}},\\qquad T=\\frac{2\\pi r}{v}=2\\pi\\sqrt{\\frac{r^3}{GM}}",
        "why": [
          "中心天体と軌道半径が決まれば速さと周期を予測できる。同じrなら衛星自身の質量に依存しない。",
          "Central mass and orbit radius predict speed and period; the satellite’s own mass cancels for this model."
        ]
      }
    ],
    "meaning": [
      "地面へ落ちる石も円軌道を動く衛星も、同じ万有引力を受けています。最初の速度や進む方向が異なると、運動の様子が大きく変わります。",
      "A falling stone and a circular satellite orbit are subject to the same gravitational interaction. Different initial velocities lead to strikingly different paths."
    ],
    "bounds": [
      "球対称中心天体の外側で、他の天体の影響や抵抗が無視できる円軌道の近似。楕円軌道にはそのままの速度式を使えない。",
      "The simple speed formula requires an approximately spherical central body, negligible disturbances and drag, and a circular orbit. Elliptical paths require different relations."
    ],
    "connection": [
      "円運動で求めた加速度と、質量と距離に依存する重力法則が、ここで一つの予測に結び付く。",
      "The geometric result for circular acceleration joins with the empirical inverse-square force law."
    ]
  },
  "rotation": {
    "title": [
      "力の回転への働きについて",
      "Forces and rotation"
    ],
    "observation": [
      "ドアは蝶番の近くより取っ手付近を押した方が開きやすい。同じ場所でも蝶番へ向かって押すと回らない。力の大きさ以外に、作用位置と向きを表す必要がある。",
      "A door opens more easily when pushed far from the hinge. Pushing toward the hinge barely turns it even with the same force. Location and direction matter."
    ],
    "representation": [
      "回転軸から作用点までの距離r、力Fとそのなす角φを描き、回転に役立つ力の成分Fsinφを取り出す。",
      "Draw the distance r from the axis to the force application point and angle φ between the lever arm and force. Only the perpendicular component Fsinφ contributes to turning about this axis."
    ],
    "prior": [
      "すでに知っている仕事「力×変位」と、円周上の移動距離Δs≈rΔθを結び付ける。これで角度変化あたりの力の作用を考えられる。",
      "Combine work as force through displacement with arc length Δs≈rΔθ. This suggests a useful quantity per angular displacement."
    ],
    "steps": [
      {
        "question": [
          "回転に沿った力だけを取り出す",
          "Resolve the force into the tangential component"
        ],
        "tex": "F_t=F\\sin\\phi",
        "why": [
          "半径に沿って押す成分はこの軸のまわりの回転に寄与しない。",
          "A component directed along the radius does not turn the object about that axis."
        ]
      },
      {
        "question": [
          "小さな回転角と移動距離を結び付ける",
          "Relate small angular motion to distance"
        ],
        "tex": "\\Delta s\\approx r\\Delta\\theta",
        "why": [
          "中心から遠い同じ角度の移動ほど、作用点の進む距離は長い。",
          "At greater radius, a given angular change moves the application point through a longer distance."
        ]
      },
      {
        "question": [
          "仕事を角度変化で表す",
          "Express work using angular displacement"
        ],
        "tex": "\\Delta W\\approx F_t\\Delta s=(rF\\sin\\phi)\\Delta\\theta",
        "why": [
          "力×距離が、回転角×ある組み合わせに分かれる。この係数が回転の効果を表す候補になる。",
          "Work separates into angular displacement multiplied by a recurring quantity describing rotational effectiveness."
        ]
      },
      {
        "question": [
          "トルクについて",
          "About torque"
        ],
        "tex": "\\tau=rF\\sin\\phi,\\qquad\\Delta W\\approx\\tau\\Delta\\theta",
        "why": [
          "トルクの大きさは作用点・方向・力の大きさから決まり、同じ力でも作用点を変える理由を説明する。",
          "Torque magnitude depends on force direction and lever arm, explaining why equal pushes can have different turning effects."
        ]
      },
      {
        "question": [
          "円周上の質点の接線加速度は？",
          "What tangential acceleration does an angular acceleration cause?"
        ],
        "tex": "a_t=r\\alpha,\\qquad\\alpha=\\frac{d\\omega}{dt}",
        "why": [
          "弧の移動距離s=rθを時間で二回微分する。半径が大きいほど同じ角加速度でも接線加速度が大きい。",
          "Differentiate the arc-distance relation s=rθ twice. At greater radius, the same angular acceleration produces more tangential acceleration."
        ]
      },
      {
        "question": [
          "一つの質点に必要なトルクを計算する",
          "Compute torque for a single rotating mass"
        ],
        "tex": "\\tau_i=r_iF_{t,i}=r_i(m_i r_i\\alpha)=m_i r_i^2\\alpha",
        "why": [
          "ニュートンの第二法則Ft,i=mi at,iを、先ほどのトルクτi=ri Ft,iへ代入します。ri×riとなるので距離の二乗が現れます。",
          "Substitute Newton's tangential force relation Fti=mi ati into τi=ri Fti. Multiplying ri by itself produces the square of distance."
        ]
      },
      {
        "question": [
          "回転しにくさも、質量の分布から表す",
          "Represent rotational inertia from mass distribution"
        ],
        "tex": "I=\\sum_i m_i r_i^2,\\qquad\\sum\\tau_z=I\\alpha",
        "why": [
          "固定軸に対して各質点の距離の二乗を重み付けして足すと、回転しにくさを表す量Iが現れる。I一定の剛体回転で使う。",
          "Weight masses by squared distance from the fixed axis. For rigid rotation with constant I, net axial torque produces angular acceleration Iα."
        ]
      }
    ],
    "meaning": [
      "同じ大きさの力でも、作用点が回転軸から遠いほど、また力が半径と直角に近いほど、回転に大きく働きます。この違いをrFsinφで表します。",
      "For equal forces, a larger lever arm and a more perpendicular push produce greater rotational effect. The expression rFsinφ captures this difference."
    ],
    "bounds": [
      "ここでは固定軸に対する回転を扱う。トルクの向きは本来ベクトル積で表す。Iαは固定軸でI一定の場合の簡単な形。",
      "This treats rotation about a fixed axis. Torque is generally a vector cross product, and the simple Iα form requires suitable fixed-axis conditions."
    ],
    "connection": [
      "直線運動の力・質量・加速度が、回転ではトルク・慣性モーメント・角加速度に対応する。ただし記号を置き換えればすべて解けるわけではない。",
      "Force, mass and linear acceleration relate to torque, moment of inertia and angular acceleration in suitable rotations, but the analogy has limitations."
    ]
  },
  "noninertial": {
    "title": [
      "加速する座標系について",
      "Accelerating reference frames"
    ],
    "observation": [
      "発進するバスに乗ると体が後ろへ引かれたように感じる。しかし地面にいる人から見れば、乗客はもとの速度を保とうとしている。二人の説明は矛盾するだろうか。",
      "In an accelerating bus, a passenger seems to be pulled backward. A ground observer instead sees the passenger tending to preserve the original velocity. Can both descriptions agree?"
    ],
    "representation": [
      "地面から見た位置xと、動くバスの位置Xを区別し、車内での位置をx′=x−Xと定義する。位置の差は基準の選び方によって変わる。",
      "Distinguish the ground-frame position x from bus position X. Define the position seen from the bus as x′=x−X."
    ],
    "prior": [
      "地上の近似的な慣性系ではニュートンの第二法則を使う。座標変換によって加速度の式がどう変わるかは、時間変化率を2回考えればわかる。",
      "Use Newton’s law in the approximately inertial ground frame. Find how acceleration changes by differentiating the relative position twice."
    ],
    "steps": [
      {
        "question": [
          "バスから見た位置をつくる",
          "Define position relative to the bus"
        ],
        "tex": "x'(t)=x(t)-X(t)",
        "why": [
          "二つの位置の差を取るだけで、車内の座標が表せる。これは物理的な力を追加する操作ではない。",
          "The relative coordinate is a subtraction of positions, not the introduction of another interaction."
        ]
      },
      {
        "question": [
          "速度を比較する",
          "Compare relative velocities"
        ],
        "tex": "v'=v-V",
        "why": [
          "両辺を時間で微分すると、車内の速度は地上の速度からバスの速度を引いたものになる。",
          "Differentiating once shows the relative velocity is ground velocity minus bus velocity."
        ]
      },
      {
        "question": [
          "さらに加速度を比較する",
          "Compare accelerations"
        ],
        "tex": "a'=a-A",
        "why": [
          "バスが右に加速するなら、地面に対しほぼ動かない物体はバス内で左に加速して見える。",
          "If the bus accelerates right, a nearly ground-stationary body accelerates left in bus coordinates."
        ]
      },
      {
        "question": [
          "地上系の運動方程式に代入する",
          "Rewrite Newton’s law in the bus frame"
        ],
        "tex": "\\sum F_{\\rm real}=ma=m(a'+A)",
        "why": [
          "現実の相互作用は変えていない。加速度の表示方法だけを変えている。",
          "No real interaction has changed; only the acceleration’s coordinate description has."
        ]
      },
      {
        "question": [
          "補正項の意味を読み取る",
          "Identify the correction term"
        ],
        "tex": "ma'=\\sum F_{\\rm real}-mA,\\quad F_{\\rm app}=-mA",
        "why": [
          "バス内で同じ形の式を書きたいときに現れる−mAを見かけの力と呼ぶ。別の物体が新しく押しているわけではない。",
          "The term −mA appears if we want a Newton-like equation in the bus frame. It is called apparent force but is not a new physical push."
        ]
      }
    ],
    "meaning": [
      "見かけの力は突然教えられる不可思議な力ではない。位置の引き算から始めた座標変換の計算によって必要になる補正項である。",
      "Apparent force is not a mysterious added interaction; it is the correction required by a mathematically explicit change to an accelerating frame."
    ],
    "bounds": [
      "回転を伴わない並進加速度の座標系を扱う。回転系ではコリオリ力や遠心力など別の項が加わる。地球固定系も厳密には慣性系ではない。",
      "This is a non-rotating translating frame. Rotating frames require additional terms such as centrifugal and Coriolis forces; Earth-fixed coordinates are only approximately inertial."
    ],
    "connection": [
      "円運動を回転座標系で見直すと遠心力の意味が明らかになる。どの座標系で書いた式なのかを常に示す。",
      "Revisiting circular motion from a rotating frame clarifies centrifugal force. Always identify the reference frame."
    ]
  }
};
