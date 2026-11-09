/* Motivation-first bridge: geometric constraints, action, step-by-step variation, sign checks. */
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
        "kind": "variation-setup",
        "title": [
          "変分とは、経路の『少し違う形』を比べる操作",
          "A variation compares slightly different paths"
        ],
        "prose": [
          "まず正しい運動がまだわからないとして、一つの候補経路θ(t)を考えます。途中の時刻だけ角度を少し変える関数η(t)を用意し、その大きさをεで調節します。こうしてθ_ε(t)=θ(t)+εη(t)という候補を作ります。出発点と到着点は変えないため、η(t₀)=η(t₁)=0とします。ここでεは時間ではなく、候補経路をどれほど変えるかを表す数です。",
          "Begin with a trial path θ(t), without yet knowing the physical one. Choose a smooth shape η(t) describing a small change along the path, and use a parameter ε to adjust its size. This produces θ_ε(t)=θ(t)+εη(t). The starting and ending angles are fixed, so η(t₀)=η(t₁)=0. The parameter ε is not time: it measures the size of a path change."
        ],
        "formula": [
          "\\theta_\\varepsilon(t)=\\theta(t)+\\varepsilon\\eta(t)",
          "\\eta(t_0)=\\eta(t_1)=0",
          "\\dot\\theta_\\varepsilon(t)=\\dot\\theta(t)+\\varepsilon\\dot\\eta(t)"
        ],
        "lineNotes": [
          [
            "元の経路に小さな形の違いεηを重ねます。ηは時刻ごとに変わる関数です。",
            "Add the small change εη to the original path. η varies with time."
          ],
          [
            "図で二つの線が両端で交わるのは、ここを固定するという条件を表しています。",
            "The two paths meet at their endpoints because those points are held fixed."
          ],
          [
            "εを一定として時間で微分します。経路の角度が変われば、角速度も変わります。",
            "Differentiate with respect to time while holding ε constant; changing a path also changes its angular velocity."
          ]
        ],
        "note": [
          "『変分』は微小な時間が経つことではなく、同じ時刻で比べる別の運動経路への変更です。まず二本の経路の図でこの違いを確かめます。",
          "A variation is not waiting a short time; it changes the proposed trajectory at the same times. Compare the two curves in the figure."
        ]
      },
      {
        "kind": "variation-chain",
        "title": [
          "作用をεで微分する――二変数の微分を使う",
          "Differentiate the action using the multivariable chain rule"
        ],
        "prose": [
          "作用は経路全体に対応する数です。そこで候補経路θ_εを代入した作用S(ε)を考え、ε=0の近くでの増減を調べます。Lは角度θと角速度θ̇の両方に依存するため、εで微分すると二つの寄与が生じます。ここで使うのは高校で学ぶ合成関数の微分の多変数版です。",
          "The action assigns a number to each full path. Substitute θ_ε into S and ask how S changes as ε varies near zero. Because L depends on both θ and θ̇, the chain rule gives two contributions. This is the multivariable extension of the derivative of a composite function."
        ],
        "formula": [
          "S(\\varepsilon)=\\int_{t_0}^{t_1}L(\\theta_\\varepsilon,\\dot\\theta_\\varepsilon,t)\\,dt",
          "\\left.\\frac{dS}{d\\varepsilon}\\right|_{\\varepsilon=0}=\\int_{t_0}^{t_1}\\left(\\frac{\\partial L}{\\partial\\theta}\\eta+\\frac{\\partial L}{\\partial\\dot\\theta}\\dot\\eta\\right)\\,dt",
          "\\delta S:=\\left.\\frac{dS}{d\\varepsilon}\\right|_{\\varepsilon=0},\\qquad\\delta S=0"
        ],
        "lineNotes": [
          [
            "候補経路が違えば、一般に積分の値も違います。積分区間の両端の時刻は固定です。",
            "Different trial paths generally give different integral values. The time endpoints remain fixed."
          ],
          [
            "角度側ではdθ_ε/dε=η、角速度側ではdθ̇_ε/dε=η̇を使い、それぞれに偏微分を掛けます。偏微分は残りの変数を固定して変化を測る操作です。",
            "The chain rule uses dθ_ε/dε=η and dθ̇_ε/dε=η̇, multiplying each by the corresponding partial derivative of L."
          ],
          [
            "ε=0での作用の一次変化をδSと書きます。停留原理は、この値が許されるどのηについても0であることを求めます。",
            "Write the first-order change at ε=0 as δS. Stationarity requires it to vanish for every admissible η."
          ]
        ],
        "note": [
          "角度と角速度は経路の上で結び付いていますが、Lを関数として偏微分するときは一方を固定して他方を変えます。",
          "Although θ and θ̇ are linked along a path, their partial derivatives in L treat one variable as fixed while differentiating the other."
        ]
      },
      {
        "kind": "variation-parts",
        "title": [
          "なぜ部分積分するのか――η̇をηにそろえる",
          "Why integration by parts transfers the derivative"
        ],
        "prose": [
          "いまの積分にはηとη̇が混在しています。ηを自由に選ぶ条件から式を判断するには、両方をηだけにそろえたいのです。そこでA(t)=∂L/∂θ̇とおいて積の微分d(Aη)/dt=Ȧη+Aη̇を使います。これを積分したものが部分積分です。端点に生じる[Aη]は、η(t₀)=η(t₁)=0なので消えます。",
          "The integral contains both η and its derivative η̇. To use the arbitrariness of η, rewrite everything as a coefficient multiplying η alone. Let A(t)=∂L/∂θ̇ and use the product rule d(Aη)/dt=Ȧη+Aη̇. Its integrated form is integration by parts. The boundary contribution [Aη] vanishes because η is zero at both endpoints."
        ],
        "formula": [
          "A(t):=\\frac{\\partial L}{\\partial\\dot\\theta},\\qquad \\frac{d}{dt}(A\\eta)=\\dot A\\eta+A\\dot\\eta",
          "\\int_{t_0}^{t_1}A\\dot\\eta\\,dt=\\left[A\\eta\\right]_{t_0}^{t_1}-\\int_{t_0}^{t_1}\\dot A\\eta\\,dt",
          "\\left[A\\eta\\right]_{t_0}^{t_1}=A(t_1)\\eta(t_1)-A(t_0)\\eta(t_0)=0",
          "\\delta S=\\int_{t_0}^{t_1}\\left(\\frac{\\partial L}{\\partial\\theta}-\\frac{d}{dt}\\frac{\\partial L}{\\partial\\dot\\theta}\\right)\\eta\\,dt"
        ],
        "lineNotes": [
          [
            "一度Aという短い記号に置き換えると、普通の積の微分と同じ操作であることが見えます。",
            "The temporary symbol A makes the ordinary product rule visible."
          ],
          [
            "η̇に付いていた時間微分をA側へ移し替えた代わりに、積分の両端で評価する項が現れます。",
            "The derivative moves from η onto A, at the cost of a boundary term."
          ],
          [
            "図の端点ではη=0です。Aが有限なら両端の積は0になります。この条件を省略してはいけません。",
            "At the endpoints η=0. Provided A is finite there, both products vanish. This condition matters."
          ],
          [
            "これで、どの時刻でもηに掛かる部分が一つの括弧にまとまりました。",
            "Everything multiplying η is now collected into a single coefficient."
          ]
        ],
        "note": [
          "部分積分は式を難しくするためではなく、任意に選べるηに掛かる量を一つにまとめるために行います。",
          "Integration by parts is used to collect the coefficient of the arbitrary function η, not simply to manipulate symbols."
        ]
      },
      {
        "kind": "variation-local",
        "title": [
          "最後の一歩――なぜ括弧の中が0とわかるのか",
          "The final step: why must the coefficient itself vanish?"
        ],
        "prose": [
          "G(t)=∂L/∂θ−d/dt(∂L/∂θ̇)と書くと、停留条件は∫G(t)η(t)dt=0です。ある一つのηに対して積分が0でも、G=0とは限りません。正負が打ち消し合う可能性があるからです。しかし、停留原理は端点で0になる滑らかなηを『どれでも』選べると要求します。もしGがある短い区間で正なら、その区間だけが正になる山型のηを選べば積分は正になってしまいます。負の場合も同様です。Gが連続で、すべてのそのようなηに対して積分が0であるなら、各時刻でG=0です。これが変分法の基本補題による結論です。",
          "Let G(t)=∂L/∂θ−d/dt(∂L/∂θ̇). Stationarity means ∫Gη dt=0. A zero integral for one η does not imply G=0: positive and negative contributions could cancel. But the condition applies to every smooth η vanishing at the endpoints. If continuous G were positive over some short interval, we could choose a positive bump η only there, making the integral positive. The same argument works if G is negative. Hence G must vanish at every interior time. This is the fundamental lemma of the calculus of variations."
        ],
        "formula": [
          "G(t):=\\frac{\\partial L}{\\partial\\theta}-\\frac{d}{dt}\\frac{\\partial L}{\\partial\\dot\\theta}",
          "\\int_{t_0}^{t_1}G(t)\\eta(t)\\,dt=0\\qquad\\text{（すべての許される }\\eta\\text{ について）}",
          "G(t)=0\\quad\\Longrightarrow\\quad\\boxed{\\frac{d}{dt}\\frac{\\partial L}{\\partial\\dot\\theta}-\\frac{\\partial L}{\\partial\\theta}=0}"
        ],
        "lineNotes": [
          [
            "先ほどの括弧の中身をGと呼び、積分が0という条件を読みやすくします。",
            "Name the coefficient G to make the remaining integral condition easier to examine."
          ],
          [
            "ここで重要なのは『すべての許されるηについて』という条件です。一つの経路の変化だけでは結論を出せません。",
            "The phrase 'for every admissible η' is essential. One particular variation is not enough."
          ],
          [
            "Gがどこかで0以外なら、その場所だけを調べるηを作れて積分条件に矛盾します。したがってG=0、すなわちオイラー・ラグランジュ方程式です。",
            "A local nonzero G permits a localized η contradicting the integral condition, so G=0: the Euler–Lagrange equation."
          ]
        ],
        "note": [
          "ここでは十分滑らかな経路と関数Lを仮定しています。端点以外の時刻で式が成立するという結論で、作用が最小になるとまでは主張していません。",
          "This argument assumes sufficient smoothness. It establishes the equation on interior times; it does not claim the action is necessarily minimal."
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
