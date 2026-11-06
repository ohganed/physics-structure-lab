/* Phenomenon-to-equation paths, chapters 1–4. */
export const mechanicsOriginsPart1={
  "force": {
    "title": [
      "力とは何を説明するために必要なのか",
      "What does force help us explain?"
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
      "滑らない箱は、摩擦について何を教えてくれるか",
      "What does a resting block reveal about friction?"
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
      "なぜ速度の二乗と、力が働いた距離を結び付けるのか",
      "Why do squared speed and force through distance belong together?"
    ],
    "observation": [
      "同じ力で物体を押す場合でも、短い距離と長い距離では最終速度が異なる。今度は「何秒押したか」でなく「何m進む間に押したか」に注目する。",
      "Pushing with the same force over short and long distances can yield different final speeds. Focus on distance during the push, rather than duration."
    ],
    "representation": [
      "横軸に位置x、縦軸に進行方向の合力を取る。面積FΔxは、力が移動に沿って行った仕事という新しい見方を与える。",
      "Plot net force along the path against position x. Signed area FΔx motivates the physical quantity work."
    ],
    "prior": [
      "一定の力、質量一定、一次元の等加速度運動から始める。速度v=v₀+at、変位Δx=(v+v₀)Δt/2という既知の関係だけでも導出できる。",
      "Start with constant force and mass in one-dimensional motion. Familiar relations v=v₀+at and Δx=(v+v₀)Δt/2 suffice without calculus."
    ],
    "steps": [
      {
        "question": [
          "同じ時間を2つの運動学の式から消す",
          "Eliminate time from two kinematics relations"
        ],
        "tex": "v^2-v_0^2=2a\\Delta x",
        "why": [
          "v−v₀=aΔtとΔx=(v+v₀)Δt/2を掛け合わせると時間が消える。",
          "Combine v−v₀=aΔt and Δx=(v+v₀)Δt/2 to eliminate elapsed time."
        ]
      },
      {
        "question": [
          "力が働いた距離を掛けてみる",
          "Multiply net force by the displacement"
        ],
        "tex": "F_{\\rm net}\\Delta x=ma\\Delta x=\\frac12m(v^2-v_0^2)",
        "why": [
          "運動方程式F=maを代入すると、力×距離が速度の二乗を含む差に変わる。",
          "Using F=ma, force through displacement becomes a difference involving squared velocities."
        ]
      },
      {
        "question": [
          "同じ形の量が2回登場したことを読む",
          "Recognize the recurring state combination"
        ],
        "tex": "F_{\\rm net}\\Delta x=\\frac12mv^2-\\frac12mv_0^2",
        "why": [
          "初めと最後の状態にそれぞれmv²/2という同じ形が現れた。",
          "The combination mv²/2 appears for both initial and final states."
        ]
      },
      {
        "question": [
          "便利な組み合わせに名前を付ける",
          "Give the recurring combination a name"
        ],
        "tex": "K=\\frac12mv^2,\\qquad W_{\\rm net}=\\Delta K",
        "why": [
          "Kを運動エネルギーと呼べば、仕事がその変化に等しいと簡潔に書ける。",
          "Define kinetic energy K so net work is simply the change in K."
        ]
      },
      {
        "question": [
          "重力の仕事と高さを結び付ける",
          "Represent gravity’s work through height"
        ],
        "tex": "W_g=mg(y_0-y)=-\\Delta U,\\qquad U=mgy",
        "why": [
          "一様重力の仕事が初めと終わりの高さの差だけで決まるので、位置エネルギーUを導入すると便利になる。",
          "Gravity’s work depends on endpoint height difference, motivating gravitational potential energy U."
        ]
      }
    ],
    "meaning": [
      "力積では力×時間からmvが現れた。ここでは力×距離からmv²/2が現れる。違いは公式を暗記する前に物理量の由来を考える鍵になる。",
      "Force through time motivated mv; force through displacement motivates mv²/2. These quantities emerge from different ways of representing a physical interaction."
    ],
    "bounds": [
      "初めの代数は一定加速度運動。力が位置で変化すれば経路に沿った積分が必要。摩擦などの仕事があればK+Uは一般に保存しない。",
      "The algebra first assumes constant acceleration. Variable force requires path integration. Dissipative work can change K+U."
    ],
    "connection": [
      "衝突では運動量が保存しても運動エネルギーが保存しないことがある。別の量だからこそ違いが生じる。",
      "In collisions, momentum can be conserved while kinetic energy decreases; they are different quantities."
    ]
  },
  "circular": {
    "title": [
      "速さが一定なのに加速度が生じる式を図形からつくる",
      "Derive acceleration from geometry despite constant speed"
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
