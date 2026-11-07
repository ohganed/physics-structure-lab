/* Phenomenon-to-equation paths: variational mechanics, canonical state, normal modes. */
export const mechanicsOriginsPart3={
  "lagrange": {
    "title": [
      "振り子とラグランジアンについて",
      "The pendulum and the Lagrangian"
    ],
    "observation": [
      "振り子は平面内を動くのでxとyの二つの位置が必要に見える。しかし糸の長さが変わらなければ、位置は角度θだけで決まる。使わなくてよい座標を減らすと運動の式も簡単になるだろうか。",
      "A pendulum moves in a plane, suggesting two coordinates x and y. But a fixed string length leaves only one independent angle θ. Could choosing that natural coordinate simplify its dynamics?"
    ],
    "representation": [
      "独立な位置の指定方法を一般化座標と呼び、この振り子ではq=θとする。運動のエネルギーをθと角速度θ̇だけで表し、K−Uという関数を考える。",
      "Call an independent configuration variable a generalized coordinate; here q=θ. Express kinetic and gravitational potential energies using θ and its rate θ̇, and study their difference K−U."
    ],
    "prior": [
      "前に学んだ仕事・運動エネルギー・位置エネルギーと、数学の微分・積分を利用する。作用の停留原理はニュートンの式をただ変形しただけの定義ではなく、力学の別の基本的な定式化である。",
      "Use familiar kinetic and potential energies plus differentiation and integration. Stationary action is an organizing principle of mechanics, not merely a renamed definition of Newton’s law."
    ],
    "steps": [
      {
        "question": [
          "二つの座標に拘束条件があることを示す",
          "Use the constraint to reduce coordinates"
        ],
        "tex": "x=\\ell\\sin\\theta,\\qquad y=-\\ell\\cos\\theta",
        "why": [
          "糸の長さℓが固定されているので、xとyを独立に動かすことはできない。角度θ一つで位置が定まる。",
          "A fixed length ℓ constrains x and y; a single angle θ determines the bob’s location."
        ]
      },
      {
        "question": [
          "速度を角速度で表す",
          "Express speed using angular velocity"
        ],
        "tex": "v^2=\\dot x^2+\\dot y^2=\\ell^2\\dot\\theta^2",
        "why": [
          "xとyを時間で微分して速度成分を求め、二乗して足すとsin²θ+cos²θ=1が使える。",
          "Differentiate x and y with time, add squared components, and use sin²θ+cos²θ=1."
        ]
      },
      {
        "question": [
          "運動・位置エネルギーを一つの変数で書く",
          "Write kinetic and potential energies in one variable"
        ],
        "tex": "K=\\frac12m\\ell^2\\dot\\theta^2,\\qquad U=mg\\ell(1-\\cos\\theta)",
        "why": [
          "位置エネルギーの基準を最下点に取った。重力と糸の拘束を明示すれば、張力を直接計算せずに済む。",
          "Take zero potential energy at the lowest point. The fixed-length constraint is built in, so tension need not be solved explicitly."
        ]
      },
      {
        "question": [
          "エネルギーの差を表す関数をつくる",
          "Construct the Lagrangian function"
        ],
        "tex": "L(\\theta,\\dot\\theta)=K-U=\\frac12m\\ell^2\\dot\\theta^2-mg\\ell(1-\\cos\\theta)",
        "why": [
          "この関数をラグランジアンと呼ぶ。K+Uという総エネルギーとは異なる組み合わせである。",
          "Call this function the Lagrangian. It is K−U, not the total mechanical energy K+U."
        ]
      },
      {
        "question": [
          "なぜ偏微分と時間微分を組み合わせるのか",
          "How does varying a path produce an equation?"
        ],
        "tex": "\\delta S=\\delta\\int_{t_0}^{t_1}L\\,dt=0",
        "why": [
          "位置の経路を少し変え、両端の位置を固定して作用Sの変化を調べる。「偏微分」は他の変数を固定した変化率で、「δ」は軌道を少し変える記号。",
          "Compare nearby paths with fixed endpoints. A partial derivative changes one argument holding others fixed; δ denotes a small variation of the trajectory."
        ]
      },
      {
        "question": [
          "作用を少し変えたとき、どの項が現れるか",
          "What terms appear when a candidate path varies?"
        ],
        "tex": "\\delta S=\\int_{t_0}^{t_1}\\left(\\frac{\\partial L}{\\partial\\theta}\\delta\\theta+\\frac{\\partial L}{\\partial\\dot\\theta}\\delta\\dot\\theta\\right)\\,dt",
        "why": [
          "Lは角度θと角速度θ̇の二つの変数を持つので、それぞれに対する微小な変化を足す。δθ̇はδθを時間で微分したもの。高校数学から先に進む追加の数学なので、既知と仮定しない。",
          "Because L depends on two arguments, θ and θ̇, add the first-order contributions from both changes. Here δθ̇ is the time derivative of δθ. This variational notation requires an additional mathematical step beyond ordinary school algebra."
        ]
      },
      {
        "question": [
          "積分の部分積分から運動方程式へ",
          "Use integration by parts to obtain Euler–Lagrange"
        ],
        "tex": "\\delta S=\\int\\left(\\frac{\\partial L}{\\partial\\theta}-\\frac{d}{dt}\\frac{\\partial L}{\\partial\\dot\\theta}\\right)\\delta\\theta\\,dt=0",
        "why": [
          "速度の変化δθ̇=d(δθ)/dtを含む項を部分積分し、両端でδθ=0を使う。任意の小さなδθに対して成り立つ条件から係数が0になる。",
          "Integrate by parts the term with δθ̇=d(δθ)/dt. Boundary variations vanish, so the coefficient of an arbitrary δθ must vanish."
        ]
      },
      {
        "question": [
          "最初の振り子の式に戻れるか",
          "Recover the pendulum equation"
        ],
        "tex": "m\\ell^2\\ddot\\theta+mg\\ell\\sin\\theta=0",
        "why": [
          "∂L/∂θ=−mgℓsinθ、∂L/∂θ̇=mℓ²θ̇を代入する。力から求める接線方向の式と一致する。",
          "Substitute ∂L/∂θ=−mgℓsinθ and ∂L/∂θ̇=mℓ²θ̇. The result agrees with the tangential Newtonian equation."
        ]
      }
    ],
    "meaning": [
      "振り子の拘束に合う座標を選び、エネルギーの関数を作ると、運動を記述する別の道が開ける。式変形の途中に現れる「作用の停留」は新しい原理であり、ただの数学的なテクニックではない。",
      "Choosing a coordinate that respects the constraint and constructing an energy-based function gives another route to dynamics. Stationary action is a principle, not a mere algebraic trick."
    ],
    "bounds": [
      "摩擦のない理想振り子、固定支点、質量のない伸びない糸、適切な変分境界条件を想定。作用の変分と部分積分には、高校の式変形以上の数学的準備が必要になるため、用語と操作を省略しない。",
      "Assumes an ideal undamped pendulum with fixed pivot and inextensible massless string, plus suitable variational boundary conditions. Variations and integration by parts require mathematical scaffolding beyond ordinary algebra."
    ],
    "connection": [
      "振り子の運動は、ニュートンの力の式でも、拘束とエネルギーから構成したラグランジアンでも記述できます。ハミルトン力学では同じ運動を位置と正準運動量で表します。",
      "The pendulum can be described using Newtonian forces or a Lagrangian built from constraints and energy. Hamiltonian mechanics expresses that motion through position and canonical momentum."
    ]
  },
  "hamilton": {
    "title": [
      "ばねの状態とハミルトニアンについて",
      "A spring state and the Hamiltonian"
    ],
    "observation": [
      "同じ位置にあるばねの物体でも、右に進んでいるときと左に戻っているときがある。位置だけでは次の動きを決められない。どの二つの量を与えれば、運動を順に追えるのだろう。",
      "A spring mass can be at the same position while travelling right or left. Position alone cannot predict its immediate future. What two quantities capture its dynamical state?"
    ],
    "representation": [
      "位置qと速度q̇の代わりに、位置qと正準運動量pを独立な変数として扱う。ばねの例ではp=mq̇なので、速度の情報は失われない。",
      "Use position q and canonical momentum p as state variables instead of q and velocity q̇. For an ordinary spring, p=mq̇, so the velocity information is retained."
    ],
    "prior": [
      "ラグランジアンLと、偏微分・積の微分法則を用いる。「ハミルトニアン」は新しく見つかった不思議な力ではなく、変数の組を変えて運動を記述する関数である。",
      "Start from the Lagrangian, partial differentiation and the product rule. The Hamiltonian is a function reorganizing dynamics in new variables, not a mysterious new force."
    ],
    "steps": [
      {
        "question": [
          "ばねのラグランジアンを書く",
          "Start with the spring Lagrangian"
        ],
        "tex": "L(q,\\dot q)=\\frac12m\\dot q^2-\\frac12kq^2",
        "why": [
          "運動エネルギーKとばねの位置エネルギーUを差として表す。mとkは一定とする。",
          "Write L=K−U using constant mass m and stiffness k."
        ]
      },
      {
        "question": [
          "速度と結び付く量を定める",
          "Identify the variable conjugate to velocity"
        ],
        "tex": "p=\\frac{\\partial L}{\\partial\\dot q}=m\\dot q",
        "why": [
          "ここでは速度で偏微分するとm q̇が現れる。これを正準運動量と呼ぶが、一般にはいつでもmvとは限らない。",
          "Differentiating with respect to velocity gives p=mq̇ for this model. Canonical momentum need not equal mv in every system."
        ]
      },
      {
        "question": [
          "速度の代わりにpを使う関数をつくる",
          "Replace velocity by p in a new function"
        ],
        "tex": "H=p\\dot q-L,\\qquad \\dot q=\\frac{p}{m}",
        "why": [
          "この変数の置き換えがルジャンドル変換。ここではm>0なので速度とpを一対一に対応させられる。",
          "This reorganization is a Legendre transform. With m>0, momentum and velocity correspond one-to-one."
        ]
      },
      {
        "question": [
          "計算してエネルギーと同じ形になることを見る",
          "Calculate the Hamiltonian for a spring"
        ],
        "tex": "H(q,p)=\\frac{p^2}{2m}+\\frac12kq^2",
        "why": [
          "このばねでは運動エネルギーと位置エネルギーの和に一致する。ただしすべての系でHが単純な全エネルギーとは限らない。",
          "For this spring, H equals K+U. In more general systems it is not automatically identical to a naive total-energy expression."
        ]
      },
      {
        "question": [
          "二種類の変数を切り替えたとき、なぜ正準方程式が出るのか",
          "Why do the canonical equations follow from changing variables?"
        ],
        "tex": "dH=\\dot q\\,dp-\\frac{\\partial L}{\\partial q}\\,dq",
        "why": [
          "H=pq̇−Lを微小に変え、積の微分を使う。p=∂L/∂q̇なのでdq̇の項が打ち消し合う。これがルジャンドル変換を用いる数学的な理由の一つ。",
          "Differentiate H=pq̇−L and apply the product rule. Terms involving d q̇ cancel because p=∂L/∂q̇. This explains why the Legendre transformation is mathematically useful."
        ]
      },
      {
        "question": [
          "同じdHを位置qと運動量pの関数として読み直す",
          "Compare the differential of H as a function of q and p"
        ],
        "tex": "dH=\\frac{\\partial H}{\\partial q}\\,dq+\\frac{\\partial H}{\\partial p}\\,dp,\\quad\\dot p=\\frac{\\partial L}{\\partial q}",
        "why": [
          "同じ関数の微小変化を二通りで書く。ラグランジュ方程式からṗ=∂L/∂qとわかるため、dqとdpの係数を比較すれば正準方程式になる。",
          "Write the same differential in terms of independent coordinates q and p. Euler–Lagrange gives ṗ=∂L/∂q; comparing coefficients of dq and dp then yields Hamilton’s equations."
        ]
      },
      {
        "question": [
          "状態の変化を二本の一階方程式で書く",
          "Use two first-order evolution equations"
        ],
        "tex": "\\dot q=\\frac{\\partial H}{\\partial p}=\\frac{p}{m},\\qquad\\dot p=-\\frac{\\partial H}{\\partial q}=-kq",
        "why": [
          "位置がどう変わるかと運動量がどう変わるかを別々の式で表す。これが正準方程式。",
          "One equation evolves position and the other evolves momentum; these are Hamilton’s canonical equations."
        ]
      },
      {
        "question": [
          "ニュートンの方程式に戻れるか",
          "Reconstruct the Newtonian equation"
        ],
        "tex": "\\ddot q=\\frac{\\dot p}{m}=-\\frac{k}{m}q\\quad\\Rightarrow\\quad m\\ddot q+kq=0",
        "why": [
          "新しい表示を使っても、以前のばねの運動と同じ予測が得られると確かめる。",
          "The reorganized state equations recover the same spring motion."
        ]
      }
    ],
    "meaning": [
      "同じ位置にいても、右へ動く物体と左へ動く物体は次に異なる位置へ進みます。位置qと運動量pの組を使うと、その状態と時間変化を二本の一階方程式で表せます。",
      "Two bodies at the same position but moving in opposite directions evolve differently. Position q and canonical momentum p together provide a state governed by two first-order equations."
    ],
    "bounds": [
      "ここでは正則なルジャンドル変換が可能な線形ばねを使う。正準運動量の単位・意味は座標や相互作用によって変わり得る。正準方程式の一般的導出は変分法と数学的な正準構造に基づく。",
      "This uses a regular Legendre transform for a simple spring. Canonical momentum depends on coordinate choice and interactions. The general Hamilton equations rest on variational and canonical structure."
    ],
    "connection": [
      "一つのばねの運動が、ニュートン・ラグランジュ・ハミルトンの異なる出発点から再現される。知識の熟成に向いた典型例。",
      "The same spring motion is recovered from Newtonian, Lagrangian and Hamiltonian starting points, making a powerful example of conceptual reconnection."
    ]
  },
  "coupled": {
    "title": [
      "二つのばねの連成振動について",
      "Coupled spring oscillations"
    ],
    "observation": [
      "同じ二つの物体をばねでつなぐと、一方を動かしただけで他方も動く。ところが両方を同じ向きに動かす場合と、反対向きに動かす場合では、中央のばねの伸び方がまったく違う。",
      "Connect two equal masses with springs: moving one can affect the other. But when they move together, the coupling spring behaves differently than when they move oppositely."
    ],
    "representation": [
      "二つの変位x₁、x₂を独立に追う代わりに、和と差の座標q+=(x₁+x₂)/2、q−=(x₁−x₂)/2を作る。何が同じで何が逆なのかを表現するための変数である。",
      "Instead of following x₁ and x₂ separately, define collective coordinates q+=(x₁+x₂)/2 and q−=(x₁−x₂)/2. They measure motion together and motion in opposition."
    ],
    "prior": [
      "使うのは力が変位に比例する線形ばねの法則とニュートンの第二法則。中央ばねは二物体の相対変位x₂−x₁によって伸縮する。",
      "Start from linear spring forces and Newton’s law. The central spring stretches according to the relative displacement x₂−x₁."
    ],
    "steps": [
      {
        "question": [
          "二つの物体の力を書き分ける",
          "Write the two coupled force equations"
        ],
        "tex": "m\\ddot x_1=-kx_1+k_c(x_2-x_1)",
        "why": [
          "左の物体には外側のばね−kx₁と中央のばねkc(x₂−x₁)が働く。",
          "Body 1 receives the outer spring force −kx₁ and central coupling force kc(x₂−x₁)."
        ]
      },
      {
        "question": [
          "もう一方の物体も同様に考える",
          "Write the equal-and-opposite coupling force on body 2"
        ],
        "tex": "m\\ddot x_2=-kx_2-k_c(x_2-x_1)",
        "why": [
          "中央ばねは二物体に等しく逆向きの力を与える。どの物体の式かを混ぜない。",
          "The coupling spring acts with equal and opposite forces. Keep each body’s force equation separate."
        ]
      },
      {
        "question": [
          "和の変数を作って両式を足す",
          "Add equations using the in-phase coordinate"
        ],
        "tex": "q_+=\\frac{x_1+x_2}{2},\\qquad m\\ddot q_+=-kq_+",
        "why": [
          "中央ばねの力は和の中で相殺される。同位相で動くと中央ばねは伸びないからである。",
          "Coupling terms cancel in the sum. This matches the physical picture of an unstretched coupling spring during in-phase motion."
        ]
      },
      {
        "question": [
          "差の変数を作って両式を引く",
          "Subtract equations using the opposite-phase coordinate"
        ],
        "tex": "q_-=\\frac{x_1-x_2}{2},\\qquad m\\ddot q_-=-(k+2k_c)q_-",
        "why": [
          "反対向きの動きでは中央ばねも伸縮し、戻す力が大きくなる。",
          "Opposite-phase motion stretches the coupling spring, increasing the restoring coefficient."
        ]
      },
      {
        "question": [
          "それぞれを単振動の式として読む",
          "Identify the frequencies of the two independent modes"
        ],
        "tex": "\\omega_+^2=\\frac{k}{m},\\qquad\\omega_-^2=\\frac{k+2k_c}{m}",
        "why": [
          "複雑な連成方程式が二つの単振動になった。k_c=0なら固有振動数が一致する。",
          "The coupled equations separate into two harmonic modes. With kc=0 their frequencies coincide."
        ]
      },
      {
        "question": [
          "元の物体の動きへ戻す",
          "Reconstruct the original coordinates from the new variables"
        ],
        "tex": "x_1=q_++q_-,\\qquad x_2=q_+-q_-",
        "why": [
          "元の運動は二つのモードの組み合わせ。線形な場合に限って重ね合わせを一般の解へ拡張できる。",
          "Original motion is a superposition of these modes. General linear superposition relies on linearity."
        ]
      }
    ],
    "meaning": [
      "都合のよい変数を適当に選んだのではない。二つの物体が同じ向きに動く現象と反対向きに動く現象に注目したから、和と差の座標が必要になった。",
      "The sum-and-difference coordinates are motivated by observing the different physical behavior of together and opposite motion. The useful mathematics comes from symmetry."
    ],
    "bounds": [
      "等質量・同じ外側のばね・線形・小振幅のモデル。非線形の大きな運動にはモードの単純な重ね合わせを一般に使えない。",
      "Assumes equal masses, symmetric outer springs, linear couplings and small-amplitude motion. Nonlinear dynamics generally do not obey simple mode superposition."
    ],
    "connection": [
      "単振動で学んだ一つの周期が、系全体の対称性を表す複数の固有振動数へ広がる。",
      "A single spring frequency develops into several collective natural frequencies determined by the system’s symmetry."
    ]
  }
};
