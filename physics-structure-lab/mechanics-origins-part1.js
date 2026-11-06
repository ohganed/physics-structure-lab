/* Phenomenon-to-equation paths, chapters 1–4. */
export const mechanicsOriginsPart1={
  "force": {
    "title": [
      "力と速度の変化について",
      "Forces and changes in velocity"
    ],
    "observation": [
      "押した台車は速さが変わる。しかし滑らかなレールでは、手を離しても進み続ける。「運動すること」と「運動が変わること」は、同じ現象ではない。",
      "A push changes a cart’s speed, but a cart on a smooth track continues after release. Moving and changing motion are distinct phenomena."
    ],
    "representation": [
      "まず右向きを正に取り、最初の速度v₀と後の速度vを記録する。「どのくらい変わったか」を時間の長さとともに比較したいので、加速度を定義する。",
      "Choose right as positive. Record initial and final signed velocities and compare their change with elapsed time; this motivates the definition of acceleration."
    ],
    "prior": [
      "加速度は定義できても、押す力によって加速度がどれほど生じるかは定義からは決まらない。力を変える実験と、同じ力で質量を変える実験が必要となる。",
      "Defining acceleration does not predict how much a particular push changes motion. Compare experiments varying net force and experiments varying inertial mass."
    ],
    "steps": [
      {
        "question": [
          "速度の変化を時間で表す",
          "Represent change in velocity over time"
        ],
        "tex": "\\bar a=\\frac{v-v_0}{\\Delta t}",
        "why": [
          "同じ速度変化でも時間が短いと加速度が大きい。速度の値と加速度の値を混同しない。",
          "An equal change over less time gives greater acceleration. Velocity and acceleration describe different things."
        ]
      },
      {
        "question": [
          "同じ台車で合力を変える",
          "Vary net force on the same cart"
        ],
        "tex": "a\\propto F_{\\rm net}\\quad(m\\ {\\rm fixed})",
        "why": [
          "これは力と運動の経験的な関係であり、加速度の定義だけから証明されたものではない。",
          "This proportionality reflects an empirical law of dynamics; it does not follow from the acceleration definition alone."
        ]
      },
      {
        "question": [
          "同じ合力で質量を変える",
          "Vary mass while keeping net force constant"
        ],
        "tex": "a\\propto\\frac1m\\quad(F_{\\rm net}\\ {\\rm fixed})",
        "why": [
          "質量が大きい物体は、同じ押す力では速度を変えにくい。慣性質量がその違いを数値化する。",
          "With the same net push, greater inertial mass produces less acceleration. Mass quantifies resistance to velocity change."
        ]
      },
      {
        "question": [
          "二つの関係を合わせる",
          "Combine the two proportionalities"
        ],
        "tex": "\\boldsymbol F_{\\rm net}=m\\boldsymbol a",
        "why": [
          "慣性系で質量が一定の物体について使うニュートンの第二法則。方向も含めて考える。",
          "Newton’s second law for a constant-mass body in an inertial frame. Forces and accelerations have directions."
        ]
      },
      {
        "question": [
          "合力が0の場合を点検する",
          "Test the limiting case of zero net force"
        ],
        "tex": "\\boldsymbol F_{\\rm net}=0\\Rightarrow\\boldsymbol a=0,\\qquad \\boldsymbol v={\\rm constant}",
        "why": [
          "加速度0とは、速度が変わらないこと。速度自体が0になるとは言っていない。",
          "Zero acceleration means velocity stays unchanged; it does not require the velocity itself to be zero."
        ]
      }
    ],
    "meaning": [
      "運動を維持するものとしてではなく、速度の変化を説明するために、物体間の相互作用を合力として表す。作用する物体を取り違えず自由物体図を描く理由もここにある。",
      "Force is a way to model interactions that change velocity, not a substance required to maintain motion. This is why a free-body diagram must isolate the receiving body."
    ],
    "bounds": [
      "加速度の定義とF=maという経験法則は別。ここでは質量一定・慣性系を仮定する。",
      "Distinguish the definition of acceleration from an empirical dynamical law. Here mass is constant and the frame is inertial."
    ],
    "connection": [
      "等速円運動を学ぶと、速さが変わらないのに加速度がある場合を発見できる。",
      "Circular motion later reveals acceleration without any change in speed."
    ]
  },
  "friction": {
    "title": [
      "斜面の箱と静止摩擦について",
      "A block on a slope and static friction"
    ],
    "observation": [
      "少し傾いた板の箱は静止しているが、板を急にすると滑り始める。重力が大きくなったのではない。滑ろうとする方向の成分が変わる。",
      "A block rests on a gentle incline but begins sliding on a steep one. Gravity has not grown: its component along the surface changes."
    ],
    "representation": [
      "箱だけを取り出して斜面に平行・垂直な座標を選ぶ。こうすると接触力と重力の各成分を直接比較できる。",
      "Isolate the block and choose axes parallel and perpendicular to the incline so the contact forces can be compared with gravity components."
    ],
    "prior": [
      "静止している箱の加速度は0なので、二方向で合力が0になる。一方、どの程度の静止摩擦を出せるかは接触面についての別の実験的モデルを必要とする。",
      "Since the block is stationary, net force vanishes along both axes. How much static friction the interface can supply requires a separate empirical contact model."
    ],
    "steps": [
      {
        "question": [
          "重力を選んだ軸へ分解する",
          "Resolve gravity along the chosen axes"
        ],
        "tex": "F_{\\parallel}=mg\\sin\\theta,\\quad F_{\\perp}=mg\\cos\\theta",
        "why": [
          "一つの重力ベクトルの成分を示すのであって、重力が二つに分かれたわけではない。",
          "These are components of one gravity force, not two newly created forces."
        ]
      },
      {
        "question": [
          "垂直方向のつり合いを使う",
          "Balance forces perpendicular to the slope"
        ],
        "tex": "N-mg\\cos\\theta=0\\Rightarrow N=mg\\cos\\theta",
        "why": [
          "箱が斜面から離れず垂直加速度が0なら、垂直抗力はmgと必ずしも同じではない。",
          "With no perpendicular acceleration the normal force equals mg cosθ, not generally mg."
        ]
      },
      {
        "question": [
          "静止するために必要な摩擦を考える",
          "Find the friction actually required for rest"
        ],
        "tex": "f_s-mg\\sin\\theta=0\\Rightarrow f_s=mg\\sin\\theta",
        "why": [
          "静止摩擦は必要な大きさだけ働く。この時点でf_s=μ_sNと置くのは誤り。",
          "Static friction adjusts to what balance demands; setting f_s=μ_sN at every angle is incorrect."
        ]
      },
      {
        "question": [
          "接触面には最大値があるというモデルを加える",
          "Introduce an empirical upper bound for static friction"
        ],
        "tex": "|f_s|\\leq\\mu_sN",
        "why": [
          "この上限はクーロン摩擦の近似モデル。ニュートンの第二法則だけから出た式ではない。",
          "This inequality is an approximate empirical Coulomb friction model, not a deduction from Newton’s second law alone."
        ]
      },
      {
        "question": [
          "静止できなくなる限界を求める",
          "Derive the sliding threshold"
        ],
        "tex": "mg\\sin\\theta=\\mu_smg\\cos\\theta\\Rightarrow\\tan\\theta_{\\rm max}=\\mu_s",
        "why": [
          "重さmgを消去できるので、単純なモデルでは限界角が質量に依存しないと予測する。",
          "The factor mg cancels, predicting a mass-independent limiting angle within the simple model."
        ]
      }
    ],
    "meaning": [
      "静止という現象を説明するために、必要な摩擦と最大静止摩擦という二つの量を区別できるようになる。",
      "Rest requires distinguishing friction actually needed from maximum available friction."
    ],
    "bounds": [
      "クーロン摩擦は近似。接触面の状態や変形で結果が変わる。斜面に沿う別の外力はないものとする。",
      "Coulomb friction is approximate and depends on surfaces and deformation. No additional force acts along the slope."
    ],
    "connection": [
      "仕事・エネルギーを学んだ後、滑りながら働く摩擦を別の観点から見直せる。",
      "Later, revisit sliding friction through work and energy transfer."
    ]
  },
  "energy": {
    "title": [
      "仕事と運動エネルギーについて",
      "Work and kinetic energy"
    ],
    "observation": [
      "質量が同じ台車に、進む向きへ一定の力を加える場面を考えます。1 mだけ押した場合と、5 m押した場合。押す力は同じでも、最後の速さには違いが出ます。力が作用していた距離に注目してみましょう。",
      "Imagine applying the same constant force along the motion of a cart. Compare pushing it through 1 m and 5 m. The force is identical, but its final speed differs. The distance over which the force acts seems relevant."
    ],
    "representation": [
      "横軸に台車の位置x、縦軸に進む向きの合力Fを取ると、一定の力では長方形が描けます。高さがF、横幅がΔxですから、面積はFΔx。時間についての面積FΔtとは異なり、今回は力と移動距離の組み合わせになります。",
      "Plot net force F along the displacement against position x. A constant force gives a rectangle of height F and width Δx; its signed area is FΔx. Unlike the force–time area FΔt, this combines force with displacement."
    ],
    "prior": [
      "この面積と速度の関係は、これまでに学んだF=maと等加速度運動の式を使って調べられます。質量と合力を一定とし、右向きを正にした直線運動を考えます。",
      "We can examine the relation between this area and velocity using F=ma and constant-acceleration kinematics. Assume constant mass and net force, with right positive in one-dimensional motion."
    ],
    "steps": [
      {
        "question": [
          "速度の変化と時間",
          "Velocity change and time"
        ],
        "tex": "v-v_0=a\\Delta t",
        "why": [
          "加速度aが一定のとき、速度の変化はa×経過時間です。ここでは、速度を符号付きで扱っています。",
          "For constant acceleration, velocity change equals acceleration multiplied by elapsed time. Velocities are signed."
        ]
      },
      {
        "question": [
          "台車が進んだ距離",
          "Distance travelled by the cart"
        ],
        "tex": "\\Delta x=\\frac{v_0+v}{2}\\Delta t",
        "why": [
          "等加速度運動では速度–時間グラフが直線になります。その下の台形の面積が変位で、平均速度は最初と最後の速度の平均です。",
          "For constant acceleration, velocity versus time is a straight line. The trapezoidal area gives displacement, so average velocity is the mean of the endpoint velocities."
        ]
      },
      {
        "question": [
          "時間を消してみる",
          "Eliminating the time"
        ],
        "tex": "2a\\Delta x=(v+v_0)(v-v_0)=v^2-v_0^2",
        "why": [
          "二つの式を組み合わせてΔtを消します。右辺で使ったのは、(A+B)(A−B)=A²−B²という高校数学の因数分解です。",
          "Combine the two equations to eliminate Δt. The algebra uses the difference of squares: (A+B)(A−B)=A²−B²."
        ]
      },
      {
        "question": [
          "力と変位を組み合わせる",
          "Combining force and displacement"
        ],
        "tex": "F\\Delta x=ma\\Delta x=\\frac12m(v^2-v_0^2)",
        "why": [
          "運動方程式F=maからaを力と質量で表します。左辺は、さきほどの力–位置グラフの面積FΔxです。",
          "Use Newton's law F=ma. The left side is the force–position graph area FΔx considered above."
        ]
      },
      {
        "question": [
          "最初と最後の状態を分けて書く",
          "Separating the initial and final terms"
        ],
        "tex": "F\\Delta x=\\frac12mv^2-\\frac12mv_0^2",
        "why": [
          "同じ形の½mv²が、最初と最後の速度に対応して現れました。力が作用した距離に関係する左辺が、二つの時点の量の差として書けています。",
          "The same form ½mv² appears at the initial and final states. An accumulated effect of force through displacement is expressed as the difference between two endpoint quantities."
        ]
      },
      {
        "question": [
          "K = ½mv² について",
          "About K = ½mv²"
        ],
        "tex": "K=\\frac12mv^2,\\qquad F\\Delta x=K-K_0",
        "why": [
          "½mv²を運動エネルギーKと呼びます。力がした仕事をW=FΔxと表せば、W=ΔKです。これで、押している間の細かな時間変化を求めなくても、最初と最後の速さを比較できます。",
          "Call ½mv² the kinetic energy K. Writing the work done by the force as W=FΔx gives W=ΔK. We can now compare endpoint speeds without reconstructing every instant during the push."
        ]
      },
      {
        "question": [
          "高さによる違い",
          "Height and gravitational work"
        ],
        "tex": "W_g=mg(y_0-y)=-\\Delta U,\\qquad U=mgy",
        "why": [
          "一定の重力の下では、重力がした仕事は出発点と到着点の高さで決まります。mgyを位置エネルギーUとして扱うと、位置の変化と速さの変化を一緒に整理できます。",
          "In a uniform gravitational field, work done by gravity depends on the initial and final heights. Using U=mgy organizes changes in position and speed together."
        ]
      }
    ],
    "meaning": [
      "運動量では力が働いた時間を考え、今回は力が働いた距離を考えました。同じF=maから、時間と結び付けるとmvの変化、距離と結び付けると½mv²の変化が現れます。二つの量は似た言葉で片付けられません。",
      "The force–time approach gave the change in mv. Here, force through displacement gives the change in ½mv². Both begin with F=ma, but the different quantities answer different questions."
    ],
    "bounds": [
      "この導出では、一定質量、一定合力、一次元の等加速度運動を考えています。力の向きと変位の向きが逆なら仕事は負です。力が位置とともに変化する場合はF–x図の面積を積分し、保存力以外の仕事がある場合はK+Uをそのまま保存量としません。",
      "The derivation uses a constant-mass body with constant net force in one dimension. Work is negative if force opposes displacement. A varying force requires area integration, and non-conservative work can change K+U."
    ],
    "connection": [
      "衝突では運動量が保存しても運動エネルギーが保存しないことがある。別の量だからこそ違いが生じる。",
      "In collisions, momentum can be conserved while kinetic energy decreases; they are different quantities."
    ]
  },
  "circular": {
    "title": [
      "円運動と加速度について",
      "Circular motion and acceleration"
    ],
    "observation": [
      "糸の先の物体を同じ速さで回しても、進行方向は瞬間ごとに変わる。糸が切れればその瞬間の接線方向に進む。速度という矢印の向きが変わるのに注目する。",
      "A rotating ball changes direction even with constant speed. If the string breaks it moves along the tangent. Focus on the turning velocity arrow."
    ],
    "representation": [
      "円の半径r、短い間の弧の長さΔs、回転角Δθ、始めと終わりの速度ベクトルを図示する。2つの速度ベクトルの差を求める。",
      "Draw radius r, a short arc Δs, angle Δθ, and two velocity arrows. Compare their vector difference."
    ],
    "prior": [
      "加速度は速度ベクトルの時間変化率。小さい角度ではΔs≈rΔθとなり、速度ベクトルの回る角度は半径が回る角度と等しい。",
      "Acceleration is change of vector velocity per time. For a small angle Δs≈rΔθ, and the tangent velocity turns through that same angle."
    ],
    "steps": [
      {
        "question": [
          "速度ベクトルの向きは何度変化したか",
          "How far did the velocity vector turn?"
        ],
        "tex": "\\Delta\\theta\\approx\\frac{\\Delta s}{r}",
        "why": [
          "半径と接線は直交しており、円周を進むにつれ両方とも同じ角度だけ回る。",
          "The radius and its tangent turn by the same small angle along the circle."
        ]
      },
      {
        "question": [
          "速度ベクトルの差を三角形で考える",
          "Use the triangle of velocity vectors"
        ],
        "tex": "|\\Delta\\boldsymbol v|=2v\\sin(\\Delta\\theta/2)\\approx v\\Delta\\theta",
        "why": [
          "長さvの2つの矢印の差は弦になる。角度が小さいとsin(Δθ/2)≈Δθ/2。",
          "The vector difference is a chord between two equal-length arrows; use the small-angle approximation."
        ]
      },
      {
        "question": [
          "短い時間に進む距離を表す",
          "Relate arc length to elapsed time"
        ],
        "tex": "\\Delta s\\approx v\\Delta t",
        "why": [
          "速さが一定なら、距離は速さ×時間で計算できる。",
          "At constant speed, distance travelled is speed multiplied by time."
        ]
      },
      {
        "question": [
          "差を時間で割って極限を考える",
          "Divide by time and consider a shrinking interval"
        ],
        "tex": "a=\\lim_{\\Delta t\\to0}\\frac{|\\Delta\\boldsymbol v|}{\\Delta t}=\\frac{v^2}{r}",
        "why": [
          "上の関係をつなぐとv²/rが現れる。差の向きは短い間隔で中心方向に近づく。",
          "Combining the relations yields v²/r; the vector difference approaches the inward direction in the limit."
        ]
      },
      {
        "question": [
          "どの実際の力が必要かを考える",
          "Ask which real forces can produce this acceleration"
        ],
        "tex": "\\sum F_{\\rm inward}=m\\frac{v^2}{r}",
        "why": [
          "糸の張力や重力などの中心向き合力が必要。『向心力』を別の新しい力として足さない。",
          "Tension, gravity, or other real forces must supply the inward net force; centripetal force is not an extra force to add."
        ]
      }
    ],
    "meaning": [
      "v²/rは、まず円運動という軌道の幾何学と速度の定義から生まれる。何がこの加速度を生むのかという力の問題は、その後に考える。",
      "The v²/r relation first emerges from geometry and the definition of velocity change; identifying which interaction supplies it is a separate dynamical question."
    ],
    "bounds": [
      "半径も速さも一定の円運動を扱う。速さが変化すると接線方向の加速度も存在する。",
      "This describes uniform circular motion. Changing speed introduces tangential acceleration too."
    ],
    "connection": [
      "円軌道の衛星では重力が必要な中心向き加速度を生む。幾何学と万有引力の法則が結び付く。",
      "Gravity provides the inward acceleration of a circular satellite orbit, connecting geometry and gravitation."
    ]
  }
};
