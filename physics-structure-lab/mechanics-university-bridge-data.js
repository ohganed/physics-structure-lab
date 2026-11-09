/* Motivation-first bridge: coordinate choice, energy, action, variation, sign test and Newtonian check. */
export const universityBridgeLessons={
  "lagrange": {
    "title": [
      "高校の振り子からラグランジュ力学へ",
      "From the school pendulum to Lagrangian mechanics"
    ],
    "lead": [
      "高校物理では、振り子に働く重力を接線方向へ分解して運動方程式を求めました。大学では、糸の張力を毎回計算しなくても運動を扱える方法を考えます。ただし、新しい式を突然導入するのではなく、すでに知っている振り子の運動から、その方法の意味を確かめていきます。",
      "In school mechanics, we resolved gravity along the pendulum tangent to derive its equation of motion. We now explore a method that handles the constraint without explicitly solving for string tension. Rather than introducing a mysterious new formula, we test the new formulation against the pendulum motion we already know."
    ],
    "stages": [
      {
        "kind": "constraint",
        "title": [
          "振り子の位置は角度ひとつで指定できる",
          "One angle is enough to specify the pendulum position"
        ],
        "prose": [
          "支点を原点にとり、水平x・鉛直yで球の位置を表します。ところが糸の長さℓは一定なので、xとyは独立には動けません。角度θだけを指定すれば球の位置は決まります。このように運動の自由さに合わせて選ぶ座標を一般化座標qといいます。",
          "Measure x and y from the pivot. Since the string length ℓ is fixed, x and y cannot vary independently. One angle θ determines the bob position. A coordinate chosen to describe this independent freedom is a generalized coordinate q."
        ],
        "formula": [
          "q=\\theta,\\qquad x=\\ell\\sin\\theta,\\qquad y=-\\ell\\cos\\theta"
        ],
        "note": [
          "θは鉛直下向きから、yは鉛直上向きを正として測ります。座標を減らしたことだけでは、新しい運動法則はまだ得られません。",
          "θ is measured from downward vertical, with upward-positive y. Reducing the coordinate count does not itself produce a new law of motion."
        ]
      },
      {
        "kind": "energy",
        "title": [
          "高校で学んだエネルギーを、角度で表す",
          "Express familiar mechanical energy using the angle"
        ],
        "prose": [
          "最下点を位置エネルギー0とすると、高さはℓ(1−cosθ)、速さはℓ|θ̇|です。したがってKとUを角度で表せます。高校物理で使った保存量はK+Uです。ただ、これだけを見ても『どの量を時間積分すれば運動経路を選べるのか』はわかりません。ここでK−Uと決めつけず、次にその新しい考え方を確認します。",
          "Taking potential energy as zero at the lowest point gives height ℓ(1−cosθ) and speed ℓ|θ̇|. Thus both K and U can be written in terms of θ. The familiar conserved mechanical energy is K+U. But this does not by itself tell us which quantity, when integrated over time, can characterize the motion path. We therefore do not simply announce K−U here."
        ],
        "formula": [
          "K=\\frac12m\\ell^2\\dot\\theta^2,\\qquad U=mg\\ell(1-\\cos\\theta)",
          "E_{\\mathrm{mech}}=K+U"
        ],
        "note": [
          "エネルギー保存と、運動経路を求める原理は区別して考えます。",
          "Keep energy conservation distinct from a principle used to determine motion paths."
        ]
      },
      {
        "kind": "paths",
        "title": [
          "瞬間ごとの力から、運動経路全体を見る考えへ",
          "From forces at each instant to an entire candidate path"
        ],
        "prose": [
          "出発と到着の時刻・位置を同じにして、その間の角度θ(t)が少しだけ異なる経路をいくつも考えます。各経路に数値を対応させるため、位置と速度などから作る関数Lを時間積分し、作用Sを定義します。実際の運動を表す経路では、近くの経路へわずかに変更しても、作用の一次の変化が0になるとするのが『作用の停留原理』です。では肝心のLには何を選ぶべきでしょうか。",
          "Consider many slightly different paths θ(t) with the same initial and final positions and times. To assign a value to a whole path, integrate a function L of position, velocity and possibly time: this defines the action S. The stationary-action principle states that the actual path has zero first-order change in S under small endpoint-fixed variations. But what function L should we choose?"
        ],
        "formula": [
          "S[\\theta]=\\int_{t_0}^{t_1}L(\\theta,\\dot\\theta,t)\\,dt",
          "\\delta S=0"
        ],
        "note": [
          "この段階でLの具体的な形はまだ決めていません。作用の停留は新しい定式化の原理であり、エネルギー保存から直ちに導かれるものではありません。停留は必ずしも最小を意味しません。",
          "The precise form of L is not yet selected. Stationary action is a formulation principle, not a direct deduction from energy conservation; stationary need not mean minimal."
        ]
      },
      {
        "kind": "variation",
        "title": [
          "作用の停留から、運動を決める式の形を得る",
          "How stationary action produces an equation of motion"
        ],
        "prose": [
          "経路をθ(t)+εη(t)へ少しだけ変えます。ηは出発点と到着点で0です。作用Sをεで微分し、速度に関係する項を部分積分します。端点の項はη=0で消えるため、どんな小さなηについても一次変化が0なら、オイラー・ラグランジュ方程式が成立します。ここまでで得られたのは『Lが決まれば運動を求める方法』です。",
          "Perturb a path to θ(t)+εη(t), where η vanishes at both endpoints. Differentiate the action with respect to ε and integrate the velocity-dependent term by parts. The endpoint term vanishes, so stationarity for every small η gives the Euler–Lagrange equation. We now have a rule that determines the motion once L is chosen."
        ],
        "formula": [
          "\\delta S=\\int_{t_0}^{t_1}\\left(\\frac{\\partial L}{\\partial\\theta}\\eta+\\frac{\\partial L}{\\partial\\dot\\theta}\\dot\\eta\\right)\\,dt",
          "\\delta S=\\int_{t_0}^{t_1}\\left(\\frac{\\partial L}{\\partial\\theta}-\\frac{d}{dt}\\frac{\\partial L}{\\partial\\dot\\theta}\\right)\\eta\\,dt",
          "\\frac{d}{dt}\\frac{\\partial L}{\\partial\\dot\\theta}-\\frac{\\partial L}{\\partial\\theta}=0"
        ],
        "note": [
          "『経路を少し変える』という操作を変分と呼びます。通常の時間微分と変分は異なります。",
          "A small change of the entire trial path is called a variation, distinct from an ordinary time derivative."
        ]
      },
      {
        "kind": "sign-compare",
        "title": [
          "なぜ K＋U ではなく K−U なのだろう",
          "Why does K−U work, rather than K+U?"
        ],
        "prose": [
          "ここで高校物理に戻ります。θが正（球が右側）なら、重力の接線成分はθを小さくする向きです。もしL=K+Uを停留原理に入れると、重力による角加速度の符号が逆になり、振り子が平衡位置から遠ざかる式になります。一方、L=K−Uなら既知の復元力と同じ向きになります。この比較を通して、標準的な保存力系のラグランジアンとしてL=K−Uを採用する理由が見えます。",
          "Return to the familiar pendulum: when θ is positive, gravity's tangential component reduces θ. Inserting L=K+U into the stationary-action equation yields the opposite acceleration sign—motion away from equilibrium. Inserting L=K−U yields the known restoring direction. This comparison motivates the conventional L=K−U choice for this standard conservative mechanical system."
        ],
        "formula": [
          "L_-=K-U\\quad\\Longrightarrow\\quad m\\ell^2\\ddot\\theta+mg\\ell\\sin\\theta=0",
          "L_+=K+U\\quad\\Longrightarrow\\quad m\\ell^2\\ddot\\theta-mg\\ell\\sin\\theta=0",
          "\\boxed{L=K-U\\quad\\text{（この保存力系での標準形）}}"
        ],
        "note": [
          "L=K−Uは座標変換から自動的に出てきた式ではありません。また、同じ運動を与えるLは全時間微分の追加などで異なる形にもできます。ここでは最も扱いやすい標準形を使います。",
          "L=K−U did not follow automatically from changing coordinates. Lagrangians are also not unique: adding a total time derivative leaves the equations of motion unchanged. We use the standard convenient form here."
        ]
      },
      {
        "kind": "result",
        "title": [
          "振り子の運動方程式が再び現れる",
          "Recover the original pendulum equation"
        ],
        "prose": [
          "採用したLの速度微分と角度微分を別々に計算します。速度微分を時間で微分すると慣性の項になり、角度微分には重力の復元作用が現れます。オイラー・ラグランジュ方程式へ入れると、高校で重力を接線方向に分解して得た式に一致します。張力を個別に求めなくても、同じ物理現象を記述できました。",
          "Differentiate the chosen L with respect to angular velocity and angle separately. The time derivative of the first gives the inertial term; the second contains gravitational restoring action. Substitution into Euler–Lagrange reproduces the tangential Newtonian equation without separately solving the string tension."
        ],
        "formula": [
          "\\frac{\\partial L}{\\partial\\dot\\theta}=m\\ell^2\\dot\\theta,\\qquad\\frac{\\partial L}{\\partial\\theta}=-mg\\ell\\sin\\theta",
          "m\\ell^2\\ddot\\theta+mg\\ell\\sin\\theta=0",
          "\\ddot\\theta+\\frac g\\ell\\sin\\theta=0"
        ],
        "note": [
          "これは小角近似を使わない振り子の式です。近似sinθ≈θは周期を求める段階で別途導入します。",
          "This pendulum equation does not yet use the small-angle approximation; sinθ≈θ enters later when approximating the period."
        ]
      }
    ]
  },
  "hamilton": {
    "title": [
      "高校のばねの運動からハミルトン力学へ",
      "From the school spring oscillator to Hamiltonian mechanics"
    ],
    "lead": [
      "新しい力を探すのではなく、既知のばねの運動について、どの量を与えれば次の状態を予測できるかを考えます。位置と運動量の組にたどり着く過程を、以前の運動方程式からたどります。",
      "Rather than looking for a new force, ask what information specifies the state of the familiar spring oscillator well enough to predict its future."
    ],
    "stages": [
      {
        "kind": "same-position",
        "title": [
          "位置が同じでも次の動きが違う",
          "Same position, different motion"
        ],
        "prose": [
          "ばねの物体が同じ位置qを通過していても、右向きに進む場合と左向きに戻る場合があります。その瞬間のばねの力F=−kqは同じです。それでも次の位置は異なります。位置だけでなく速度の情報が必要です。",
          "At the same displacement q, a spring mass may travel right or left. The restoring force F=−kq is identical at that instant, but the future motion differs. We also need its velocity."
        ],
        "formula": [
          "F=-kq,\\qquad m\\ddot q=-kq"
        ],
        "note": [
          "qは平衡位置からの符号付き変位です。二つの図は物体の位置を同じに描き、速度の向きだけを変えます。",
          "q is signed displacement from equilibrium. The diagrams keep position fixed and reverse velocity."
        ]
      },
      {
        "kind": "newton-state",
        "title": [
          "二階方程式を二つの一階方程式で考える",
          "Two first-order relations describe the same motion"
        ],
        "prose": [
          "高校の運動量P=mq̇を使うと、位置の変化はq̇=P/m、運動量の変化はṖ=−kqです。二つの量を組にすると、運動がどのように進むかを逐次記述できます。",
          "With familiar mechanical momentum P=m q-dot, the position changes as q-dot=P/m and momentum changes as P-dot=−kq. The pair describes how the state evolves."
        ],
        "formula": [
          "P=m\\dot q,\\qquad \\dot q=\\frac{P}{m}",
          "\\dot P=-kq"
        ],
        "note": [
          "ここではまず高校で学ぶ機械的運動量Pを使います。後から正準運動量pを定義し、ばねでは両者が一致することを確かめます。",
          "P here is ordinary mechanical momentum. Later, canonical p is defined and shown to coincide with P for this spring."
        ]
      },
      {
        "kind": "conjugate",
        "title": [
          "正準運動量という新しい定義は何を表すか",
          "What is the canonical momentum definition measuring?"
        ],
        "prose": [
          "前章のLを位置qを一定にしたまま速度q̇の関数として見ると、そのグラフの接線の傾きが定まります。この傾きを正準運動量pと定義します。普通のばねでは傾きがmq̇になり、高校の運動量と一致します。",
          "View the Lagrangian at fixed position q as a function of velocity q-dot. Define canonical momentum p to be its tangent slope. For this spring the slope is m q-dot, the familiar mechanical momentum."
        ],
        "formula": [
          "L(q,\\dot q)=\\frac12m\\dot q^2-\\frac12kq^2",
          "p=\\frac{\\partial L}{\\partial\\dot q}=m\\dot q"
        ],
        "note": [
          "偏微分はqを固定しq̇だけを変化させる操作です。一般には正準運動量がmvと一致するとは限りません。",
          "The partial derivative varies velocity while holding position fixed. Canonical momentum need not always equal mv."
        ]
      },
      {
        "kind": "hamilton-energy",
        "title": [
          "速度ではなく運動量で表す新しい関数を作る",
          "Make a function of momentum instead of velocity"
        ],
        "prose": [
          "Lの速度q̇を、pを使う表現へ切り替えるためH=pq̇−Lを考えます。ばねではp=mq̇なので速度をp/mへ置き換えられ、Hは運動エネルギーと位置エネルギーの和になります。これがルジャンドル変換の具体例です。",
          "To express the dynamics using momentum instead of velocity, form H=p q-dot−L. For the spring, q-dot=p/m, and H becomes kinetic plus potential energy. This illustrates a Legendre transformation."
        ],
        "formula": [
          "H=p\\dot q-L",
          "H(q,p)=\\frac{p^2}{2m}+\\frac12kq^2"
        ],
        "note": [
          "このばねではH=K+Uですが、全てのハミルトニアンが単純に力学的全エネルギーと等しいわけではありません。",
          "For this spring H=K+U, but the Hamiltonian is not always identical to simple mechanical energy."
        ]
      },
      {
        "kind": "phase",
        "title": [
          "位置と運動量を座標にして運動を追う",
          "Follow motion in a position–momentum plane"
        ],
        "prose": [
          "横軸q・縦軸pの平面では一瞬の状態が一点になります。理想的なばねの軌道は一定エネルギーの楕円を描き、pが正の側ではqが増え、負の側ではqが減ります。ハミルトンの正準方程式はこの状態の変化を表す二本の式です。",
          "In the q–p plane a state is one point. The ideal oscillator traces an ellipse of constant energy: q increases where p is positive and decreases where p is negative. Hamilton’s equations give the two rates of change."
        ],
        "formula": [
          "\\dot q=\\frac{\\partial H}{\\partial p}=\\frac pm",
          "\\dot p=-\\frac{\\partial H}{\\partial q}=-kq",
          "m\\ddot q+kq=0"
        ],
        "note": [
          "最後の式は高校のばねの運動方程式に戻っています。表現が違っても予測する運動は同じです。",
          "The final equation is the familiar spring equation. The representation changes, not the physical predictions."
        ]
      }
    ]
  }
};
