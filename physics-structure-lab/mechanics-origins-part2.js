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
      "ドアを押す位置と、回転の起こり方",
      "Where you push a door and how it turns"
    ],
    "observation": [
      "ドアを開けるとき、蝶番のすぐ近くを押してもなかなか動かないのに、取っ手の近くなら軽い力でも動く。また、取っ手を蝶番の方向へ押してもドアは回りにくい。押す力が同じでも、押す場所と方向によって回転の起こり方が変わる。",
      "When opening a door, a push near the hinge scarcely turns it, while a similar push near the handle turns it readily. Even at the handle, pushing toward the hinge is ineffective. The position and direction of an applied force matter as well as its magnitude."
    ],
    "representation": [
      "蝶番を通る軸から押す位置までの距離を r、押す力の大きさを F とする。押す方向がドアの幅に沿っている場合、力はほとんど回転を起こさない。ドアの幅と直角に押せば、同じ力をより有効に使える。幅の方向と力の間の角度を φ とすると、回転に関係する接線方向の力は Fsinφ である。",
      "Let r be the distance from the hinge axis to the point of contact and F the applied force. A force directed along the door toward the hinge produces no turning about that axis. A perpendicular push is more effective. If φ is the angle between the radius to the contact point and the force, its tangential component is F sinφ."
    ],
    "prior": [
      "ドアがほんの少し回転して角度が Δθ だけ変わると、蝶番から距離 r にある点は円弧に沿って約 rΔθ だけ移動する。この短い移動に対して、接線方向の力 Fsinφ がする仕事は、約 (Fsinφ)rΔθ となる。したがって、同じ角度だけ回す場合の仕事は、力の大きさだけでなく r と φ によっても変わる。",
      "When the door turns through a small angle Δθ, a point at distance r from the hinge travels approximately rΔθ along an arc. The work done over that short displacement by the tangential force F sinφ is therefore approximately (F sinφ)rΔθ. Thus the work done for the same angular displacement depends on where and how the force is applied."
    ],
    "steps": [
      {
        "question": [
          "押す力の接線方向の成分",
          "The tangential part of the push"
        ],
        "tex": "F_t=F\\sin\\phi",
        "why": [
          "ドアの幅に沿う成分は、蝶番を軸とする微小な回転では移動方向と直角なので仕事をしない。",
          "The radial component is perpendicular to the small displacement about the hinge and does no work."
        ]
      },
      {
        "question": [
          "角度が変わったときの移動距離",
          "Displacement during a small rotation"
        ],
        "tex": "\\Delta s\\approx r\\Delta\\theta",
        "why": [
          "同じ角度だけ回るとき、蝶番から離れた点ほど長い円弧を描く。角度はラジアンで測る。",
          "For the same angular change, a point farther from the hinge travels farther. Angle is measured in radians."
        ]
      },
      {
        "question": [
          "回転するときの仕事",
          "Work during rotation"
        ],
        "tex": "\\Delta W\\approx F_t\\Delta s=(rF\\sin\\phi)\\Delta\\theta",
        "why": [
          "接線方向の力に円弧の移動距離を掛けると、rFsinφ と回転角 Δθ の積になる。",
          "Multiplying tangential force by arc displacement gives the product of rF sinφ and angular change Δθ."
        ]
      },
      {
        "question": [
          "力のモーメント（トルク）",
          "Torque about the hinge axis"
        ],
        "tex": "\\tau=rF\\sin\\phi,\\qquad\\Delta W\\approx\\tau\\Delta\\theta",
        "why": [
          "rFsinφ は回転軸からの距離と力の方向を同時に含んでいる。固定軸まわりのトルクの大きさを表す。回す向きには符号が必要である。",
          "rF sinφ incorporates both lever arm and direction. It is the magnitude of torque about the fixed axis; the sense of rotation requires a sign."
        ]
      },
      {
        "question": [
          "回転角速度が変わるとき",
          "When angular velocity changes"
        ],
        "tex": "a_t=r\\alpha,\\qquad\\alpha=\\frac{d\\omega}{dt}",
        "why": [
          "弧の移動距離s=rθを時間で二回微分する。半径が大きいほど同じ角加速度でも接線加速度が大きい。",
          "Differentiate the arc-distance relation s=rθ twice. At greater radius, the same angular acceleration produces more tangential acceleration."
        ]
      },
      {
        "question": [
          "一つの質点に作用するトルク",
          "Torque acting on one mass element"
        ],
        "tex": "\\tau_i=r_iF_{t,i}=r_i(m_i r_i\\alpha)=m_i r_i^2\\alpha",
        "why": [
          "ニュートンの第二法則Ft,i=mi at,iを、先ほどのトルクτi=ri Ft,iへ代入します。ri×riとなるので距離の二乗が現れます。",
          "Substitute Newton's tangential force relation Fti=mi ati into τi=ri Fti. Multiplying ri by itself produces the square of distance."
        ]
      },
      {
        "question": [
          "剛体全体の慣性モーメント",
          "Moment of inertia of the whole body"
        ],
        "tex": "I=\\sum_i m_i r_i^2,\\qquad\\sum\\tau_z=I\\alpha",
        "why": [
          "固定軸に対して各質点の距離の二乗を重み付けして足すと、回転しにくさを表す量Iが現れる。I一定の剛体回転で使う。",
          "Weight masses by squared distance from the fixed axis. For rigid rotation with constant I, net axial torque produces angular acceleration Iα."
        ]
      }
    ],
    "meaning": [
      "取っ手の位置でドアを押す方が回しやすいのは、蝶番からの距離が大きいためである。反対に、蝶番に向けて押すと Fsinφ が0になり、蝶番まわりのトルクは0になる。力の大きさ、作用位置、方向という三つの条件が、式の中で一緒に表される。",
      "Pushing at the handle is effective because the distance to the hinge is large. Pushing directly toward the hinge makes F sinφ vanish, so the torque about the hinge is zero. The expression brings force magnitude, application point, and direction together."
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
