/* Optional prompts for independent scientific reasoning; never a progress gate. */
export const inquiryMethodPrompts={
 cart:{
  system:['どの物体を運動の対象として選び、どこを基準に速度を測る？','Which object is the system, and relative to what frame will velocity be measured?'],
  measure:['加速度を調べるには、どの時刻の速度が必要だろう？','Which velocities and times would be needed to estimate acceleration?'],
  isolate:['合力だけを変えるなら、質量と初速度をどう扱う？','If net force is varied, what should happen to mass and initial velocity?'],
  challenge:['摩擦を加えると、あなたの予測はどこから変わりそう？','How might friction change your prediction?']
 },
 fall:{
  system:['落下時間の始点と終点を、どのように決める？','How would you define the beginning and end of the falling time?'],
  measure:['時間の測定方法によって、どのような誤差がありそう？','What timing uncertainties might your measurement method introduce?'],
  isolate:['質量だけの影響を調べたいとき、何を一定にする？','To isolate mass, what would you hold constant?'],
  challenge:['羽と小球の実験では、どの仮定が重要になる？','Which assumption matters when comparing a feather with a dense ball?']
 },
 'fall-drag':{
  system:['空気抵抗を受ける物体と、抵抗を受けない理想化した物体を比べるには？','How might you compare an ideal falling body with one experiencing drag?'],
  measure:['落下時間・到達速度のどちらを測れば、モデルの違いに気付きやすい？','Would fall time or impact speed reveal the model difference more clearly?'],
  isolate:['質量だけを変えるなら、抵抗係数をどう扱う？','When varying only mass, what should happen to the drag coefficient?'],
  challenge:['実際の物体では、質量と形状を独立に変えられるだろうか？','Can mass and shape always be varied independently for a real object?']
 },
 circular:{
  system:['物体の位置を表すために、どんな座標・方向が役立つ？','What coordinate system and directions are useful for describing the motion?'],
  measure:['速さが一定でも、速度ベクトルの何を比較する？','Even with constant speed, which aspect of velocity changes?'],
  isolate:['速さの影響だけを調べるなら、半径をどうする？','When testing speed alone, how should the radius be handled?'],
  challenge:['速さが増減する運動には、もう一つどんな加速度が必要？','What other component of acceleration is needed when speed changes?']
 },
 spring:{
  system:['振り子ではなく、ばねに付いた物体について何を座標にする？','For the spring-mass system, what displacement coordinate is appropriate?'],
  measure:['周期を測るには、どんな時点同士を比較するとよい？','Which recurring events could define a measurement of the period?'],
  isolate:['振幅の影響を調べるなら、ばね定数と質量はどうする？','What should be held constant when amplitude is varied?'],
  challenge:['大振幅で単純なばねの式が合わなくなったら何を疑う？','What assumption would you question if large-amplitude motion differs?']
 },
 collision:{
  system:['衝突前後の運動量を考えるとき、物体を1個と2個のどちらで扱う？','Should the momentum system contain one body or both colliding bodies?'],
  measure:['衝突前後のどの速度を測る必要がある？','Which velocities would you measure immediately before and after impact?'],
  isolate:['反発係数だけを調べるなら、物体の質量はどうする？','If restitution changes, what should happen to the two masses?'],
  challenge:['衝突中に外力が大きければ、総運動量保存をどう考える？','What happens to the momentum balance if external impulse is substantial?']
 }
};
export function promptsFor(id){return inquiryMethodPrompts[id]||null;}
