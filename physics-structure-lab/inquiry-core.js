/* Scientific Inquiry Lab — idealized numerical predictions, not measurements. */
export const inquiryScenarios = [
 {id:'cart',concept:'force',title:['力と速度：押さないと止まる？','Force and motion: must an object be pushed to keep moving?'],
  phenomenon:['初速3 m/sの台車に一定の水平合力を2秒間作用させる。','A cart begins at 3 m/s. A constant net horizontal force acts for two seconds.'],
  prompt:['力が0でも台車は動き続けるだろうか？質量を変えると何が違う？','Will the cart keep moving with zero net force? What changes if its mass changes?'],
  assumptions:['摩擦や抵抗なし・一定の合力・質量一定・慣性系。','No friction or air resistance; constant net force and mass in an inertial frame.'],
  inputs:[{key:'force',label:['合力 F (N)','Net force F (N)'],min:-12,max:12,step:1,initial:6},
          {key:'mass',label:['質量 m (kg)','Mass m (kg)'],min:1,max:10,step:.5,initial:2}],
  law:'a=\\frac{F}{m},\\quad v(t)=v_0+at',
  explanation:['力が0なら加速度は0だが、速度が0とは限らない。質量が一定のとき合力が加速度を決める。','Zero net force means zero acceleration, not necessarily zero velocity. With constant mass, net force determines acceleration.'],
  caution:['滑り摩擦・空気抵抗・質量変化を含まない。','Friction, air resistance, and changing mass are omitted.']},
 {id:'fall',concept:'acceleration',title:['落下：重いものほど速く落ちる？','Free fall: do heavier objects fall faster?'],
  phenomenon:['静止した物体を一定の高さから落とす。地表付近の重力加速度を仮定。','Release an object from rest at a height, assuming uniform near-Earth gravity.'],
  prompt:['質量と高さを別々に変えたら、地面に着くまでの時間はどうなる？','If you change mass and height separately, what happens to the falling time?'],
  assumptions:['空気抵抗なし・高さに依存しない g=9.8 m/s²・初速0。','No air drag; uniform g=9.8 m/s²; zero initial speed.'],
  inputs:[{key:'mass',label:['質量 m (kg)','Mass m (kg)'],min:.5,max:10,step:.5,initial:2},
          {key:'height',label:['落下高さ h (m)','Drop height h (m)'],min:1,max:50,step:1,initial:10}],
  law:'t=\\sqrt{\\frac{2h}{g}},\\quad v=\\sqrt{2gh}',
  explanation:['このモデルでは質量は落下時間に影響しない。高さを4倍にすると落下時間は2倍。','In this ideal model mass does not affect falling time. Quadrupling height doubles falling time.'],
  caution:['空気抵抗のある羽と球などには一般化できない。','This cannot be generalized to drag-dominated falling objects such as feathers.']},
 {id:'fall-drag',concept:'acceleration',title:['落下のモデルを見直す：空気抵抗を入れたら？','Revisit free fall: what changes when air drag matters?'],
  phenomenon:['同じ高さ20 mから落ちる物体を考える。空気抵抗がある場合、重さの違いが結果に現れるかを調べる。','Release bodies from 20 m and compare an ideal vacuum model with a linear-resistance model.'],
  prompt:['抵抗を無視した場合と、抵抗を含む場合で、質量の影響はどう違うだろう？','How does the role of mass change when drag is no longer negligible?'],
  assumptions:['高さ20 m、初速0、重力 g=9.8 m/s²。抵抗力は速さに比例し進行方向と逆向き：F_d=−bv。bは質量によらず独立に設定できる理想化パラメータ。','Fixed height 20 m; zero initial speed; g=9.8 m/s². Air resistance is proportional to velocity and opposes the motion: F_d=−bv. The drag parameter b is treated independently of mass.'],
  inputs:[{key:'mass',label:['質量 m (kg)','Mass m (kg)'],min:.5,max:10,step:.5,initial:2},
          {key:'drag',label:['線形抵抗係数 b (kg/s)','Linear drag b (kg/s)'],min:0,max:6,step:.25,initial:1}],
  law:'m\dot v=mg-bv\quad(\text{downward positive})',
  explanation:['抵抗が0なら質量によらない自由落下。抵抗があると、同じ b でも質量によって減速度への寄与 b v/m が変わる。','With b=0, the ideal falling time is independent of mass. With b>0 and fixed b, the term bv/m introduces mass dependence.'],
  caution:['実際の空気抵抗は速度の二乗に近い場合もある。物体の形状・密度・媒質によって係数が異なる。これは線形抵抗の比較モデル。','Real drag may be approximately quadratic and depends on shape, fluid and flow regime. This is an idealized linear-drag model.']},
 {id:'circular',concept:'circular',title:['円運動：速さ一定なら加速度も0？','Circular motion: is acceleration zero at constant speed?'],
  phenomenon:['半径一定の円を一定の速さで回る点を考える。','Consider a particle moving at constant speed on a circular path.'],
  prompt:['速さを2倍にする場合と半径を2倍にする場合で、加速度はどう変わる？','Compare doubling speed with doubling radius. What happens to acceleration?'],
  assumptions:['等速円運動、半径一定、平面運動。加速度は中心向き。','Uniform circular motion, constant radius and planar motion; acceleration points inward.'],
  inputs:[{key:'speed',label:['速さ v (m/s)','Speed v (m/s)'],min:1,max:15,step:.5,initial:6},
          {key:'radius',label:['半径 r (m)','Radius r (m)'],min:1,max:12,step:.5,initial:3}],
  law:'a_{\\mathrm c}=\\frac{v^2}{r}',
  explanation:['速さは一定でも速度ベクトルの向きが変わるため加速度がある。','Acceleration exists at constant speed because the velocity vector changes direction.'],
  caution:['速さ自体が変わる運動では接線方向加速度も必要。','Changing speed introduces tangential acceleration as well.']},
 {id:'spring',concept:'oscillation',title:['ばね：振幅が大きいほど周期も長い？','Spring oscillation: does a larger amplitude mean a longer period?'],
  phenomenon:['線形ばねに付けた物体を引いて放す。','Displace and release a mass attached to an ideal linear spring.'],
  prompt:['質量と振幅をそれぞれ変えたとき、周期はどう変化する？','How do mass and amplitude separately affect the period?'],
  assumptions:['ばね定数 k=50 N/m、減衰なし・線形ばね。','Spring constant k=50 N/m, no damping, linear spring response.'],
  inputs:[{key:'mass',label:['質量 m (kg)','Mass m (kg)'],min:.5,max:8,step:.5,initial:2},
          {key:'amplitude',label:['振幅 A (m)','Amplitude A (m)'],min:.1,max:1,step:.05,initial:.3}],
  law:'T=2\\pi\\sqrt{\\frac{m}{k}}',
  explanation:['理想的な線形ばねでは周期は振幅に依存しない。一方、振幅を変えると全エネルギーは変わる。','For an ideal linear spring, period is amplitude-independent, while total energy depends on amplitude.'],
  caution:['大振幅でばねの線形性が破れたり抵抗が作用すると結論は変わり得る。','Nonlinear spring response and damping can invalidate this ideal result.']},
 {id:'collision',concept:'momentum',title:['衝突：運動量と運動エネルギーは同時に保存する？','Collisions: are both momentum and kinetic energy conserved?'],
  phenomenon:['2 kgの物体が3 m/sで進み、静止している別の物体に1次元衝突する。','A 2 kg object moving at 3 m/s collides with a stationary second object.'],
  prompt:['反発係数を変えると、何が必ず保たれ、何が変わる？','If restitution changes, what stays invariant and what does not?'],
  assumptions:['衝突中の外力の力積が無視できる。反発係数は0〜1、1次元。','Negligible net external impulse during a one-dimensional collision, restitution 0–1.'],
  inputs:[{key:'m2',label:['静止物体の質量 m₂ (kg)','Stationary mass m₂ (kg)'],min:.5,max:8,step:.5,initial:1},
          {key:'restitution',label:['反発係数 e','Restitution e'],min:0,max:1,step:.05,initial:.5}],
  law:'m_1u_1=m_1v_1+m_2v_2',
  explanation:['この閉じた系の総運動量は保存するが、非弾性衝突では運動エネルギーの一部が内部エネルギーなどに変わる。','Total momentum is conserved in the isolated system, but inelastic impacts convert some kinetic energy into other forms.'],
  caution:['接触力の時間変化や変形過程、外力の力積を無視したモデル。','Contact-force histories, deformation, and external impulse are not resolved.']}
];

export function scenarioById(id){return inquiryScenarios.find(c=>c.id===id)||null;}
const valid=(value)=>typeof value==='number'&&Number.isFinite(value);
/**
 * Analytical linear-drag trajectory, with a bracketed monotonic root solve
 * for the impact time. Downward is positive; resistance is -b v.
 */
export function linearDragFall({mass=2,drag=1,height=20,g=9.8}={}){
 if(![mass,drag,height,g].every(Number.isFinite)||mass<=0||drag<0||height<=0||g<=0)throw new RangeError('Invalid linear-drag fall');
 const idealTime=Math.sqrt(2*height/g);
 if(drag===0)return {time:idealTime,speed:g*idealTime,terminalSpeed:Infinity,idealTime,idealSpeed:g*idealTime};
 const terminalSpeed=mass*g/drag,relaxation=mass/drag;
 const distance=t=>terminalSpeed*(t+relaxation*Math.expm1(-t/relaxation));
 let lo=0,hi=Math.max(idealTime*2,height/terminalSpeed+relaxation+1);
 while(distance(hi)<height&&hi<1e7)hi*=2;
 if(distance(hi)<height)throw new RangeError('Impact solution not bracketed');
 for(let j=0;j<72;j++){
  const mid=(lo+hi)/2;
  if(distance(mid)>=height)hi=mid;else lo=mid;
 }
 const time=(lo+hi)/2;
 const speed=-terminalSpeed*Math.expm1(-time/relaxation);
 return {time,speed,terminalSpeed,idealTime,idealSpeed:g*idealTime};
}
export function evaluateInquiry(id,values){
 const c=scenarioById(id);
 if(!c||!values||typeof values!=='object')throw new RangeError('Unknown scientific investigation');
 for(const input of c.inputs){
  const n=values[input.key];
  if(!valid(n)||n<input.min-1e-10||n>input.max+1e-10)throw new RangeError('Parameter outside model bounds: '+input.key);
 }
 let primary,secondary,conserved=null;
 if(id==='cart'){
  const a=values.force/values.mass;
  primary=a;secondary=3+2*a;
 }else if(id==='fall'){
  primary=Math.sqrt(2*values.height/9.8);secondary=Math.sqrt(2*9.8*values.height);
 }else if(id==='fall-drag'){
  const v=linearDragFall({mass:values.mass,drag:values.drag,height:20});
  primary=v.time;secondary=v.speed;
 }else if(id==='circular'){
  primary=values.speed**2/values.radius;secondary=2*Math.PI*values.radius/values.speed;
 }else if(id==='spring'){
  primary=2*Math.PI*Math.sqrt(values.mass/50);secondary=.5*50*values.amplitude**2;
 }else if(id==='collision'){
  const m1=2,m2=values.m2,u=3,e=values.restitution;
  const v1=(m1-e*m2)*u/(m1+m2),v2=(1+e)*m1*u/(m1+m2);
  primary=v1;secondary=v2;
  const pi=m1*u,pf=m1*v1+m2*v2;
  conserved={initialMomentum:pi,finalMomentum:pf,
    energyBefore:.5*m1*u*u,energyAfter:.5*m1*v1*v1+.5*m2*v2*v2};
 }
 const labels={
  cart:[['加速度 a','Acceleration a'],'m/s²',['2秒後の速度','Velocity after 2 s'],'m/s'],
  fall:[['落下時間 t','Fall time t'],'s',['着地直前の速さ','Impact speed'],'m/s'],
  'fall-drag':[['抵抗ありの落下時間','Fall time with drag'],'s',['衝突直前の速さ','Impact speed'],'m/s'],
  circular:[['向心加速度 a','Centripetal acceleration a'],'m/s²',['1周の周期','Orbital period'],'s'],
  spring:[['振動周期 T','Oscillation period T'],'s',['全力学的エネルギー','Total mechanical energy'],'J'],
  collision:[['物体1の衝突後速度','Post-impact velocity 1'],'m/s',['物体2の衝突後速度','Post-impact velocity 2'],'m/s']
 }[id];
 return {scenario:id,inputs:Object.fromEntries(c.inputs.map(v=>[v.key,values[v.key]])),
  primary,secondary,primaryLabel:labels[0],primaryUnit:labels[1],secondaryLabel:labels[2],secondaryUnit:labels[3],conserved};
}
export function compareInquiryTrials(a,b){
 if(!a||!b||a.scenario!==b.scenario||!scenarioById(a.scenario))throw new RangeError('Compare two trials of the same scenario');
 const c=scenarioById(a.scenario);
 const changed=c.inputs.filter(i=>!Object.is(a.inputs[i.key],b.inputs[i.key])).map(i=>i.key);
 return {changed,isolated:changed.length===1,
  kind:changed.length===0?'replicate':changed.length===1?'controlled':'confounded',
  change:b.primary-a.primary,
  aResult:a.primary,bResult:b.primary};
}
export function validInvestigation(record){
 if(!record||typeof record!=='object'||Array.isArray(record)||!scenarioById(record.scenario))return false;
 if(typeof record.id!=='string'||!/^inq-[a-z0-9-]{5,100}$/.test(record.id))return false;
 if(typeof record.date!=='string'||Number.isNaN(Date.parse(record.date)))return false;
 for(const key of ['question','hypothesis','interpretation','nextQuestion']){
  if(typeof record[key]!=='string'||record[key].length>2000)return false;
 }
 if(!Array.isArray(record.trials)||record.trials.length>40)return false;
 try{
  for(const t of record.trials){
   if(!t||typeof t!=='object'||t.scenario!==record.scenario)return false;
   const expected=evaluateInquiry(record.scenario,t.inputs);
   if(!valid(t.primary)||!valid(t.secondary)||Math.abs(t.primary-expected.primary)>1e-7||Math.abs(t.secondary-expected.secondary)>1e-7)return false;
  }
 }catch{return false;}
 return true;
}

/**
 * Sample a single-parameter relationship while holding all other model inputs fixed.
 * Model predictions, not observations or measured evidence. No AI or random noise.
 */
export function inquiryCurve(id,baseValues,parameter,count=41){
 const c=scenarioById(id),input=c?.inputs.find(x=>x.key===parameter);
 if(!input||!Number.isInteger(count)||count<2||count>201)throw new RangeError('Invalid curve specification');
 evaluateInquiry(id,baseValues);
 const points=[];
 for(let i=0;i<count;i++){
  const x=input.min+(input.max-input.min)*i/(count-1);
  const result=evaluateInquiry(id,{...baseValues,[parameter]:x});
  points.push({x,y:result.primary});
 }
 const ymin=Math.min(...points.map(p=>p.y)),ymax=Math.max(...points.map(p=>p.y));
 return {scenario:id,parameter,points,ymin,ymax,flat:Math.abs(ymax-ymin)<=Math.max(1,Math.abs(ymax),Math.abs(ymin))*1e-11};
}
