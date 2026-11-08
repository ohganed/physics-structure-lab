import {mechanicsSituationFigure} from './mechanics-situation-figures.js';
/* Original bilingual companion readings for mechanics chapters 03–12. */
const readings = {
  "energy": {
    "ja": [
      "仕事と運動エネルギー",
      "一定の合力 F で台車が距離 Δx だけ進む場面を考える。加速度 a が一定なら v²−v₀²=2aΔx である。両辺に m/2 を掛け、F=ma を使うと FΔx=(mv²−mv₀²)/2 となる。左辺は、力の向きに進んだ距離を掛けた量である。ここで K=mv²/2 を運動エネルギーと呼ぶと、仕事は K の変化に等しい。",
      "力の向きと移動方向が角度 θ をなす場合は、移動方向の力成分 F cosθ だけが仕事をする。曲がった軌道、変化する力では W=∫F·dr と表す。接触面の摩擦は一般に負の仕事をし、台車と床の内部エネルギーに移る。力学的エネルギーが減っても、総エネルギーが消えたわけではない。"
    ],
    "en": [
      "Work and kinetic energy",
      "For a cart under a constant net force, constant acceleration gives v²−v₀²=2aΔx. Multiply by m/2 and use F=ma to obtain FΔx=(mv²−mv₀²)/2. The left-hand side accumulates force along displacement. Calling K=mv²/2 kinetic energy turns the result into the work–kinetic-energy theorem.",
      "If force and displacement differ in direction, only F cosθ contributes. Along a curved path with varying force, W=∫F·dr. Friction often performs negative mechanical work while energy is transferred to internal degrees of freedom: reduced mechanical energy does not mean total energy disappears."
    ]
  },
  "momentum": {
    "ja": [
      "衝突中に何が保存されるか",
      "二台車の接触力を F_AB と F_BA とすると、作用反作用により F_AB=−F_BA である。接触時間が共通なので二つの力積を足すと相殺される。外力積が無視できるとき、Δp_A+Δp_B=0。衝突前後で個々の運動量は変わってよいが、二台車を一つの系として見た総運動量は変わらない。",
      "合体する衝突では力学的エネルギーの一部が変形や熱に移る。例として 2 kg の台車が 3 m/s、1 kg の台車が静止して合体すると、6=(2+1)v より v=2 m/s。衝突前の運動エネルギーは 9 J、後は 6 J である。運動量保存だけからエネルギー保存を結論できない。"
    ],
    "en": [
      "What survives a collision?",
      "During contact, forces between two carts obey F_AB=−F_BA. Their impulses cancel over the same interval. If external impulse is negligible, Δp_A+Δp_B=0. Each cart can change momentum even though the momentum of the combined system stays fixed.",
      "For a perfectly inelastic collision, a 2 kg cart at 3 m/s joining a stationary 1 kg cart gives 6=(2+1)v, or v=2 m/s. Kinetic energy changes from 9 J to 6 J; the difference goes into deformation, heat and other internal processes. Momentum conservation does not imply kinetic-energy conservation."
    ]
  },
  "circular": {
    "ja": [
      "速度ベクトルの向きから加速度へ",
      "等速円運動では、隣り合う二つの速度ベクトルの大きさは v で等しく、向きだけ Δθ 変わる。小さな角度では速度の差の大きさは |Δv|≈vΔθ。円弧長は Δs=rΔθ であり、Δs/Δt≈v なので Δθ/Δt≈v/r。したがって |Δv|/Δt≈v²/r となる。Δt→0 で加速度は円の中心に向く。",
      "速さ一定でも加速度はゼロではない。合力は m v²/r の中心向き成分を持たねばならないが、『向心力』は独立した新種の力ではない。糸の張力、摩擦、重力など実際の相互作用がその役割を担う。円運動を保つだけの合力が足りなければ円軌道を外れる。"
    ],
    "en": [
      "From turning velocity to centripetal acceleration",
      "For uniform circular motion, neighboring velocity vectors have the same magnitude v but directions separated by Δθ. For small angles |Δv|≈vΔθ, while Δs=rΔθ and Δs/Δt≈v. Thus Δθ/Δt≈v/r, so acceleration magnitude approaches v²/r as Δt→0, directed toward the center.",
      "Constant speed does not mean zero acceleration. The net inward force must be mv²/r; 'centripetal force' is not a separate interaction. Tension, friction or gravitation can supply it. If the available inward force is insufficient, circular motion cannot continue."
    ]
  },
  "oscillation": {
    "ja": [
      "ばねから振動の周期まで",
      "ばねに取り付けた物体を平衡位置から x だけずらすと、線形ばねの復元力は F=−kx である。運動方程式 m d²x/dt²=−kx を満たす運動を探す。x=A cos(ωt+φ) を二回微分すると d²x/dt²=−ω²x。代入して mω²=k、したがって ω=√(k/m)、周期 T=2π√(m/k) となる。",
      "この周期が振幅に依存しないのは線形ばね・減衰なしという理想化の結果である。振り子では sinθ≈θ と近似したときに同様の式が得られるが、大きな振れでは周期が変化する。周期が違い始める条件を調べることがモデルの理解につながる。"
    ],
    "en": [
      "From a spring to a period",
      "A linear restoring force is F=−kx. Newton's law gives m d²x/dt²=−kx. Try x=A cos(ωt+φ); differentiating twice gives d²x/dt²=−ω²x. Substitution yields mω²=k, hence ω=√(k/m) and T=2π√(m/k).",
      "The amplitude-independent period is a feature of the ideal linear undamped model. A pendulum has the analogous formula only when sinθ≈θ; at larger angles the period changes. Finding where a model loses accuracy is part of understanding it."
    ]
  },
  "gravitation": {
    "ja": [
      "人工衛星の速さを求める",
      "質量 M の天体から中心間距離 r にある衛星質量 m は、万有引力 GMm/r² を受ける。円軌道ならこの力が向心加速度 mv²/r を与えるので、GMm/r²=mv²/r。m と r を整理すると v=√(GM/r) となる。ここで r は地表からの高さではなく天体の中心から測った距離である。",
      "同じ距離の円軌道で衛星の速さが質量 m に依存しないのは両辺に m が現れて消えるためである。円軌道速度と脱出速度は別の問いであり、後者は全エネルギーが遠方でゼロとなる境界条件から √(2GM/r) を得る。空気抵抗や多天体の影響はここでは無視している。"
    ],
    "en": [
      "Finding an orbital speed",
      "For a satellite of mass m at center-to-center distance r from mass M, gravity is GMm/r². In a circular orbit it supplies mv²/r, so GMm/r²=mv²/r and v=√(GM/r). The distance r is measured from the center, not from the surface.",
      "Satellite mass cancels for this two-body approximation. Circular speed and escape speed answer different questions; the latter uses the energy boundary at infinity to give √(2GM/r). Atmospheric drag and perturbations by other bodies are omitted here."
    ]
  },
  "rotation": {
    "ja": [
      "並進運動から回転運動へ",
      "剛体上の微小質量 dm が軸から距離 r にあると、回転角速度 ω による速さは v=rω。運動エネルギーの寄与 dK=(1/2)dm(rω)² を全体で足すと K=(1/2)(∫r²dm)ω²。そこで I=∫r²dm を慣性モーメントと呼ぶ。単なる総質量ではなく、質量が軸からどれほど離れているかが回しにくさに関わる。",
      "固定軸まわりの力学では τ=Iα が成り立つが、I が時間とともに変わる場合や一般の三次元回転には注意が必要である。同じ M と R でも薄い輪なら I=MR²、均一な円板なら I=MR²/2。斜面を転がる際の加速度の差に現れる。"
    ],
    "en": [
      "From translation to rotation",
      "A mass element dm at distance r from a fixed axis moves at v=rω. Its kinetic-energy contribution is dK=(1/2)dm(rω)². Adding all elements gives K=(1/2)(∫r²dm)ω². The moment of inertia I=∫r²dm records how mass is distributed around the axis.",
      "For a fixed axis and constant I, τ=Iα. A thin hoop has I=MR² while a uniform disk has I=MR²/2. Their different rotational inertia changes how they roll down an incline. More general three-dimensional rotation requires additional care."
    ]
  },
  "noninertial": {
    "ja": [
      "加速する車内の座標系",
      "地面での位置 x と加速する車両原点 X(t) から見た位置 x′=x−X(t) を区別する。二回微分すると a′=a−A である。慣性系で ma=F が成り立つため、車内では ma′=F−mA と書ける。右向き加速度 A の車内で左向きの『見かけの力』−mA が現れる理由である。",
      "これは車内の壁が新たに左向きの接触力を加えたという意味ではない。座標変換に伴って運動方程式に追加された項である。車内が回転している場合には遠心力やコリオリの項も加わるため、この並進モデルをそのまま使えない。"
    ],
    "en": [
      "Coordinates inside an accelerating vehicle",
      "Let x denote position on the ground and X(t) the vehicle origin. The onboard coordinate is x′=x−X(t), so a′=a−A. Newton's equation ma=F in the inertial frame becomes ma′=F−mA onboard. Thus an apparent force −mA enters when the vehicle accelerates to the right.",
      "The extra term is caused by the coordinate description, not a new physical contact exerted by the vehicle wall. Rotating frames require additional centrifugal and Coriolis terms, beyond this translating-frame model."
    ]
  },
  "lagrange": {
    "ja": [
      "運動の表し方を変える",
      "質量 m の物体がばね定数 k のばねにつながる系では、運動エネルギー K=(1/2)mẋ²、位置エネルギー U=(1/2)kx²。差 L=K−U を作り、作用 S=∫Ldt を考える。端点を固定した微小な経路変化について S が停留する条件を計算すると d/dt(∂L/∂ẋ)−∂L/∂x=0 が得られる。ここで ∂L/∂ẋ=mẋ、∂L/∂x=−kx なので mẍ+kx=0。",
      "単に L=K−U と書いただけでは運動方程式にならない。『停留作用』という原理と、部分積分を含む変分計算が必要である。拘束のある系では座標数を減らして運動を記述しやすい。ただし散逸や時間依存拘束の扱いは別途検討する。"
    ],
    "en": [
      "Changing the description of motion",
      "For a mass–spring system K=(1/2)mẋ² and U=(1/2)kx². Form L=K−U and the action S=∫Ldt. Requiring S to be stationary under small path variations with fixed endpoints yields d/dt(∂L/∂ẋ)−∂L/∂x=0. Since ∂L/∂ẋ=mẋ and ∂L/∂x=−kx, the equation is mẍ+kx=0.",
      "Writing L=K−U alone does not derive the motion: the stationary-action principle and a variation using integration by parts are essential. Generalized coordinates can simplify constrained systems; dissipation and time-dependent constraints need further treatment."
    ]
  },
  "hamilton": {
    "ja": [
      "位置と運動量を対にする",
      "ばね振動子の L=(1/2)mẋ²−(1/2)kq² に対して正準運動量 p=∂L/∂q̇=mq̇ を導入する。H=pq̇−L と定義し、q̇=p/m を代入すると H=p²/(2m)+kq²/2。ハミルトン方程式 q̇=∂H/∂p=p/m、ṗ=−∂H/∂q=−kq から元の運動が復元される。",
      "位相空間では状態を (q,p) の一点で表す。エネルギー一定の軌道は楕円を描く。ただし正準運動量が常に m×速度となるとは限らない。電磁場内の荷電粒子などでは、運動量の定義と運動学的運動量との差が重要になる。"
    ],
    "en": [
      "Position and canonical momentum as a pair",
      "For L=(1/2)m q̇²−(1/2)kq², define p=∂L/∂q̇=mq̇. The Legendre transform H=pq̇−L with q̇=p/m gives H=p²/(2m)+kq²/2. Hamilton's equations q̇=∂H/∂p=p/m and ṗ=−∂H/∂q=−kq recover the oscillator equation.",
      "A state is a point (q,p) in phase space; constant-energy curves are ellipses. Canonical momentum need not equal mass times velocity in every physical system, particularly in electromagnetic settings."
    ]
  },
  "coupled": {
    "ja": [
      "二つの振動が組み合わさる",
      "質量 m の物体二つをそれぞればね定数 k のばねで支え、中央を結合ばね k_c でつなぐ。平衡からの変位を x₁、x₂ とすると mẍ₁=−kx₁−k_c(x₁−x₂)、mẍ₂=−kx₂−k_c(x₂−x₁)。和 u=x₁+x₂ と差 w=x₁−x₂ を作れば m ü=−ku、m ẅ=−(k+2k_c)w。",
      "同位相では結合ばねが伸縮しないため ω₊=√(k/m)。逆位相では結合ばねの寄与が増え、ω₋=√((k+2k_c)/m)。任意の小さな運動は二つの固有振動の重ね合わせで表され、周波数が近いと振幅が周期的に移り変わる『うなり』が現れる。線形・同質量・小振幅のモデルである。"
    ],
    "en": [
      "Two oscillators and normal coordinates",
      "For two equal masses m with outer stiffness k and coupling k_c, m ẍ₁=−kx₁−k_c(x₁−x₂) and m ẍ₂=−kx₂−k_c(x₂−x₁). Defining sum u=x₁+x₂ and difference w=x₁−x₂ gives m ü=−ku and m ẅ=−(k+2k_c)w.",
      "In-phase motion leaves the coupling spring unchanged, giving ω₊=√(k/m). Opposite-phase motion gives ω₋=√((k+2k_c)/m). Superposed modes can produce beating when their frequencies are close. These results assume a linear, equal-mass, small-amplitude model."
    ]
  }
};
export function chapterCompanionHtml(key, lang='ja') {
 const v=readings[key]?.[lang==='en'?'en':'ja'];
 if(!v)return '';
 const [title,first,second]=v;
 return '<section class="mechanics-companion"><h3>'+title+'</h3>'+mechanicsSituationFigure(key,'origin',lang)+'<p>'+first+'</p><p>'+second+'</p></section>';
}
