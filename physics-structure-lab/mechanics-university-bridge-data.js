/* High-school to analytical mechanics teaching bridge: phenomenon, motivation, and definitions. */
export const universityBridgeLessons={
  "lagrange": {
    "title": [
      "高校の振り子からラグランジュ力学へ",
      "From the school pendulum to Lagrangian mechanics"
    ],
    "lead": [
      "高校では振り子の重力を接線方向に分解して運動方程式を求めました。糸の長さが一定という条件を生かすと、位置を角度ひとつで表せます。この単純化から新しい考え方へ進みます。",
      "At school we resolve the weight along the pendulum's tangent. Its fixed length means that a single angle is sufficient to specify the bob's position. Start with this simplification."
    ],
    "stages": [
      {
        "kind": "constraint",
        "title": [
          "振り子の位置は角度ひとつで指定できる",
          "One angle determines the pendulum position"
        ],
        "prose": [
          "支点を原点として水平xと鉛直yを考えると、糸の長さが固定された球は円周上だけを動きます。xとyは独立ではありません。ひとつの角度θで球の位置を指定でき、これを一般化座標qと呼びます。",
          "With the pivot as the origin, the bob is restricted to a circle. Its horizontal and vertical coordinates are not independent. One angle theta identifies its position and acts as a generalized coordinate q."
        ],
        "formula": [
          "q=\\theta,\\qquad x=\\ell\\sin\\theta,\\qquad y=-\\ell\\cos\\theta"
        ],
        "note": [
          "鉛直上向きをyの正方向とし、θは鉛直下向きから測ります。図と式の座標を一致させます。",
          "Positive y points up, and theta is measured from vertically downward. The geometry and equations agree."
        ]
      },
      {
        "kind": "energy",
        "title": [
          "すでに知っている二種類のエネルギーを使う",
          "Build from two familiar kinds of energy"
        ],
        "prose": [
          "円弧に沿う速度はv=ℓθ̇です。最下点からの高さをh=ℓ(1−cosθ)とすると、運動エネルギーKと位置エネルギーUを角度で表せます。そこで標準的な保存力系に対して、差L=K−Uをラグランジアンとして使います。",
          "The tangential speed is v=l theta-dot, and the bob rises by h=l(1−cos theta). Express kinetic and potential energy using theta. For the standard conservative system, define its Lagrangian as L=K−U."
        ],
        "formula": [
          "K=\\frac12m\\ell^2\\dot\\theta^2,\\quad U=mg\\ell(1-\\cos\\theta)",
          "L=K-U"
        ],
        "note": [
          "K+Uは力学的エネルギー、L=K−Uは運動の経路を扱うための別の関数です。",
          "K+U is mechanical energy, whereas L=K−U is a different function used in the action formulation."
        ]
      },
      {
        "kind": "paths",
        "title": [
          "一瞬の値から、時間を通じた経路の比較へ",
          "From one instant to comparing entire paths"
        ],
        "prose": [
          "出発時刻と到着時刻の位置を固定し、その間の角度の変化をわずかに変えた候補を比べます。各候補についてLを時間積分した作用Sを考えます。実際の経路では、近くの経路への微小な変更によるSの一次変化が0になります。",
          "Fix the endpoints in time and position, then compare slightly different candidate paths between them. Integrating L along each path gives the action S. The actual path makes its first-order variation vanish."
        ],
        "formula": [
          "S[q]=\\int_{t_0}^{t_1}L(q,\\dot q,t)\\,dt",
          "\\delta S=0"
        ],
        "note": [
          "停留とは必ず最小になることではありません。また作用の停留は新たな基本原理であり、単なる式の置換ではありません。",
          "Stationary need not mean minimal. Stationary action is a foundational principle, not a mere change of symbols."
        ]
      },
      {
        "kind": "result",
        "title": [
          "高校で求めた振り子の式へ戻れるか",
          "Recover the familiar pendulum equation"
        ],
        "prose": [
          "経路の変化を表すδθを使って作用の変化を調べ、部分積分するとオイラー・ラグランジュ方程式が得られます。先ほどのLに代入すると、重力の接線成分からニュートンの法則で求めた式に戻ります。",
          "Vary the trajectory by delta-theta and integrate by parts to obtain the Euler–Lagrange equation. Substituting the pendulum L recovers the same equation as the tangential Newtonian force balance."
        ],
        "formula": [
          "\\frac{d}{dt}\\frac{\\partial L}{\\partial\\dot\\theta}-\\frac{\\partial L}{\\partial\\theta}=0",
          "m\\ell^2\\ddot\\theta+mg\\ell\\sin\\theta=0"
        ],
        "note": [
          "変数を適切に選び、拘束力を個別に計算せずに同じ運動を得られることが利点です。",
          "Choosing a suitable coordinate avoids explicitly solving the constraint force while recovering the same motion."
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
