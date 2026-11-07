/* The full body of chapter 02: original, bilingual, step-by-step exposition. */
const L=(ja,en)=>[ja,en];
const E=(ja,en,formula)=>({ja,en,formula});
export const inclineTextSections=[
 {title:L('接触力について','Contact forces'),parts:[
  L('机の上に箱を置いても、箱は机を通り抜けません。箱には重力が鉛直下向きに働いています。それでも静止しているのは、机も箱を上向きに押しているからです。この接触力の、面に垂直な成分を垂直抗力と呼びます。','Place a box on a desk. Gravity pulls it downward, yet the box does not pass through the desk. The desk pushes upward through contact. The component of that contact force perpendicular to the surface is the normal reaction.'),
  L('最初に箱だけを取り出して考えます。地球が箱を引く重力と、机が箱を押す垂直抗力は、どちらも箱に働く力です。作用反作用の組は別の二物体にそれぞれ働きますから、この二つを作用反作用の組と呼んではいけません。','Isolate the box first. Gravity from Earth and the upward force from the desk both act on the box. Newton’s action–reaction partners act on different bodies, so gravity and the normal reaction are not a third-law pair.'),
  L('水平な机の上で上下方向の加速度が0なら、上向きの力と下向きの力はつり合います。','With no vertical acceleration on a horizontal desk, the upward and downward forces balance.')],
  equations:[E('箱の上下方向のつり合い','Vertical balance for the box','N-mg=0\\quad\\Rightarrow\\quad N=mg')],
  after:L('ただしN=mgという式を、どんな接触でも成り立つ公式だと思わないでください。机を傾けたときや、上から手で押しつけたときには変わります。','This equality is not universal. Tilting the table or pressing down from above changes the normal force.')},
 {title:L('斜面ではどの向きの力を考えるか','Choosing axes on an incline'),parts:[
  L('板を少し傾けて、その上に箱を置きます。重力は相変わらず鉛直下向きですが、箱が板から受ける垂直抗力は斜面に垂直です。水平・鉛直より、斜面に沿う方向とそれに垂直な方向の方が計算に適しています。','Tilt the board. Gravity still points straight down, but the board’s normal reaction is perpendicular to the inclined surface. Axes along and perpendicular to the incline simplify the force balance.'),
  L('斜面の角度をθとします。重力mgの矢印を直角三角形の斜辺として、斜面に沿う部分と垂直な部分を求めます。三角比を使うと、斜面下向きの成分はmg sinθ、板を押す方向の成分はmg cosθです。重力が二つに増えたのではなく、一つの力の見方を変えたのです。','Let the slope angle be θ. Resolve the single weight vector mg along two perpendicular axes. Trigonometry gives mg sinθ downslope and mg cosθ into the surface. These are components of one force, not two additional forces.')],
  equations:[E('重力の二方向の成分','Two components of gravity','W_{\\parallel}=mg\\sin\\theta,\\qquad W_{\\perp}=mg\\cos\\theta'),
             E('面に垂直な加速度が0のとき','No acceleration perpendicular to the surface','N-mg\\cos\\theta=0\\quad\\Rightarrow\\quad N=mg\\cos\\theta')],
  after:L('θ=0°ではcosθ=1となって水平な机のN=mgに戻ります。角度が大きくなるとcosθは小さくなり、垂直抗力も小さくなります。','At θ=0°, cosθ=1 and N=mg. As the board becomes steeper, the normal reaction decreases.')},
 {title:L('滑りそうなのに静止する箱','A block that stays at rest'),parts:[
  L('小さく傾いた板では、箱が滑らず止まっていることがあります。しかしmg sinθという斜面下向きの力は存在します。もしこれ以外に斜面方向の力がなければ、箱は加速してしまいます。','On a gentle slope, the block may remain still despite the downslope component mg sinθ. If no other parallel force acted, the block would accelerate.'),
  L('静止している事実から、板が箱を斜面上向きにも押していると考えられます。これが静止摩擦力です。斜面下向きを正にして合力を計算すると、必要な静止摩擦はmg sinθになります。','Its observed rest tells us that the board supplies another parallel contact force: static friction, acting upslope. With downslope positive, force balance determines the required static friction.')],
  equations:[E('斜面方向のつり合い','Force balance along the slope','mg\\sin\\theta-f_s=0\\quad\\Rightarrow\\quad f_s=mg\\sin\\theta')],
  after:L('平らな机ならθ=0°で、この状況では摩擦力は0です。少し傾けると摩擦が必要になります。まだ摩擦係数は使っていません。静止という観察と力のつり合いだけで求めた値です。','At θ=0°, no friction is needed in this situation. Tilting the board requires friction. We have not used any friction coefficient: the required force follows from rest and force balance.')},
 {title:L('静止摩擦の限界について','The limit of static friction'),parts:[
  L('板をさらに傾けると、箱はある角度で滑り始めます。静止摩擦がいくらでも大きくなれるわけではないためです。基本的な接触の近似モデルでは、最大静止摩擦の大きさをμₛNと表します。μₛは接触面によって異なり、実験から確かめる量です。','Increase the angle and eventually the block slips. Static friction cannot grow without bound. A common empirical contact model approximates the maximum magnitude as μsN, where μs depends on the contacting surfaces.'),
  L('箱が静止するために必要な摩擦mg sinθと、出せる摩擦の最大値μₛmg cosθは別の量です。必要な摩擦が上限を超えない間は静止できます。滑り出す直前に両者が等しくなります。','The friction needed for rest, mg sinθ, and the greatest available static friction, μs mg cosθ, are different. Rest is possible while the required force stays within the limit; they become equal at the onset of sliding.')],
  equations:[E('実際の静止摩擦には上限がある','Static friction is bounded','0\\le f_s\\le\\mu_sN'),
             E('滑り出す直前の条件','Condition at the threshold','mg\\sin\\theta_c=\\mu_smg\\cos\\theta_c'),
             E('限界角度を表す','The limiting angle','\\tan\\theta_c=\\mu_s')],
  after:L('質量mと重力加速度gが約分でき、限界角はμₛだけで決まることになります。これは、この単純な摩擦モデルから出る予測です。実際の表面の状態や材料によって違いが生じることはあります。','The factors m and g cancel, predicting a limiting angle determined by μs alone. This is a prediction of the simple model, not a guarantee for every real surface.')},
 {title:L('滑り始めた後の運動','Motion after sliding begins'),parts:[
  L('いったん箱が斜面を下向きに滑り始めると、基本的な教科書モデルでは摩擦を動摩擦係数μₖで表します。摩擦の方向は滑っている向きと逆です。下向きを正とするなら、摩擦は負の力になります。','Once the block slides downslope, a basic textbook model uses a kinetic friction coefficient μk. Friction opposes relative sliding, so it points upslope and has a negative sign in the downhill coordinate.'),
  L('ここでも箱だけを対象とし、斜面下向きの重力成分から動摩擦力を引いて合力を求めます。力学の第二法則を用いると、加速度が計算できます。','Isolate the block again. Subtract kinetic friction from downslope gravity and apply Newton’s second law.')],
  equations:[E('動摩擦力の大きさ','Magnitude of kinetic friction','f_k=\\mu_kN=\\mu_kmg\\cos\\theta'),
             E('斜面方向の運動方程式','Equation of motion along the incline','ma=mg\\sin\\theta-\\mu_kmg\\cos\\theta'),
             E('斜面下向きの加速度','Downslope acceleration','a=g(\\sin\\theta-\\mu_k\\cos\\theta)')],
  after:L('質量mが消えるのは、重力と摩擦の両方がmに比例するからです。μₖ=0なら摩擦なしのa=g sinθになります。すでに上向きに滑っている物体では摩擦の向きが逆なので、上の下向き滑走用の式をそのまま使わないでください。','Mass cancels because both gravitational and kinetic friction terms scale with m. At μk=0, a=g sinθ. An object sliding uphill experiences downhill friction and needs a different signed equation.')},
 {title:L('具体的な数値で考える','A numerical example'),parts:[
  L('質量2.0 kg、g=9.8 m/s²、静止摩擦係数μₛ=0.40、動摩擦係数μₖ=0.30とします。斜面の角度が20°のとき、重力の斜面方向成分は約6.70 N、垂直抗力は約18.42 N、最大静止摩擦は約7.37 Nです。必要な6.70 Nより最大値が大きいので、箱は静止できます。','Take m=2.0 kg, g=9.8 m/s², μs=0.40 and μk=0.30. At θ=20°, the downslope force is about 6.70 N, the normal reaction 18.42 N and maximum static friction 7.37 N. Static friction can supply the needed 6.70 N, so rest is possible.'),
  L('板を30°に傾けると、重力の斜面方向成分は9.80 N、最大静止摩擦は約6.79 Nになります。もう静止できません。滑走中は動摩擦を使い、下向きの加速度を求めます。','At θ=30°, downslope gravity becomes 9.80 N while maximum static friction is only about 6.79 N. The block cannot stay at rest. Use kinetic friction to find its downhill acceleration.')],
  equations:[E('20°の比較','At 20 degrees','mg\\sin20^\\circ\\approx6.70\\,\\mathrm N < \\mu_smg\\cos20^\\circ\\approx7.37\\,\\mathrm N'),
             E('30°の滑走加速度','At 30 degrees','a=9.8(\\sin30^\\circ-0.30\\cos30^\\circ)\\approx2.35\\,\\mathrm{m/s^2}')],
  after:L('角度を変えるだけでも静止と滑走が切り替わることがわかります。式は同じ「摩擦」でも、静止している場合のつり合いと滑っている場合の運動方程式を区別して使います。','Changing only the angle can switch the block from rest to sliding. The calculation must distinguish the static equilibrium condition from the kinetic force equation.')},
 {title:L('摩擦の仕事と熱','Friction, work and heating'),parts:[
  L('箱が下向きに距離sだけ滑る間、摩擦は反対向きに働くので、摩擦が箱にする仕事は負です。力学的なエネルギーの減少は、箱と板などを含む広い系では内部エネルギーの増加やほかの形のエネルギーへの移行と関係します。','While the block slides downslope through distance s, friction opposes its displacement and does negative work. The decrease in mechanical energy is related to increases in internal energy and other forms within a wider system including the block and board.')],
  equations:[E('滑りに対して摩擦がする仕事','Work done by friction during sliding','W_{\\rm friction}=-f_ks=-\\mu_kNs')],
  after:L('この場合、力学的エネルギーK+Uは一般に一定ではありません。一方、十分広い閉じた系でのエネルギー保存が破れたわけではありません。','In this situation K+U is not generally constant. That does not violate total-energy conservation for a suitably closed system.')},
 {title:L('自分で調べるとき','Investigating real surfaces'),parts:[
  L('板をゆっくり傾け、箱が動き始める角度を何度か測ると、μₛ≈tanθcから静止摩擦係数を推定できます。角度の読み取り方、板を傾ける速さ、表面の状態、箱の向きなどをそろえて比較します。','Tilt a board gradually and repeat measurements of the angle where sliding begins. Estimate μs≈tanθc under the simple model. Keep angle reading, tilt speed, surface condition and block orientation as consistent as possible.'),
  L('実測値にはばらつきがあります。そのばらつきも、なぜモデルと結果が違うのかを考える材料です。画面の計算結果はモデルの予測であり、測定した値ではありません。','Measurements vary. That variation helps test the limits of the model. The on-screen calculations are predictions of an idealized model, not measurements.')],
  equations:[],after:L('静止摩擦と動摩擦を同じ係数として扱わず、静止できる条件と滑っているときの運動方程式を分けて記録してみましょう。','Keep static friction distinct from kinetic friction and distinguish rest conditions from equations for sliding.')}
];