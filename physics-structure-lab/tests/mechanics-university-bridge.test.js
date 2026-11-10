import test from 'node:test';
import assert from 'node:assert/strict';
import {universityBridgeLessons} from '../mechanics-university-bridge-data.js';
import {universityBridgeFigure,universityBridgeKinds,mechanicsUniversityBridgeHtml} from '../mechanics-university-bridge.js';

test('both university transitions contain a visible motivation and 17 distinct concept diagrams',()=>{
 assert.equal(universityBridgeLessons.lagrange.stages.length,14);
 assert.equal(universityBridgeLessons.hamilton.stages.length,5);
 assert.equal(universityBridgeKinds.length,19);
 for(const [key,lesson] of Object.entries(universityBridgeLessons)){
  assert.ok(lesson.lead[0].length>50&&lesson.lead[1].length>50);
  for(const stage of lesson.stages){
   assert.ok(universityBridgeKinds.includes(stage.kind));
   assert.ok(stage.prose.every(t=>t.length>70),stage.kind);
   assert.ok(stage.formula.length>0);
   for(const lang of ['ja','en']){
    const html=universityBridgeFigure(stage.kind,stage.title[lang==='en'?1:0],lang);
    assert.match(html,new RegExp('data-bridge-figure="'+stage.kind+'"'));
    assert.match(html,/role="img"/);
    assert.match(html,/<figcaption>/);
    assert.doesNotMatch(html,/NaN|undefined|Infinity/);
   }
  }
 }
});

test('every new definition has a diagram before its first formula in each language',()=>{
 for(const key of ['lagrange','hamilton']){
  for(const lang of ['ja','en']){
   const html=mechanicsUniversityBridgeHtml(key,lang);
   const stages=universityBridgeLessons[key].stages;
   assert.equal((html.match(/class="mechanics-university-figure"/g)||[]).length,stages.length);
   assert.equal((html.match(/data-mech-bridge-back=/g)||[]).length,2);
   assert.equal((html.match(/class="formula tex-display"/g)||[]).length,stages.reduce((n,s)=>n+s.formula.length,0));
   for(const stage of stages){
    const p=html.indexOf('data-bridge-step="'+stage.kind+'"');
    const end=html.indexOf('</section>',p),block=html.slice(p,end);
    const figure=block.indexOf('data-bridge-figure="'+stage.kind+'"');
    const formula=block.indexOf('class="formula tex-display"');
    assert.ok(p>=0&&figure>=0&&formula>figure,stage.kind+' '+lang);
    assert.ok(block.indexOf('class="mechanics-university-stage-note"')>formula);
   }
  }
 }
});

test('Lagrangian chapter starts with observation, assumptions, geometry, motion and forces before abstract action',()=>{
 const stages=universityBridgeLessons.lagrange.stages;
 assert.deepEqual(stages.map(s=>s.kind),[
  'model-observation','constraint','model-kinematics','model-forces','generalized-work',
  'energy','paths','variation-setup','variation-chain','variation-parts',
  'variation-local','sign-compare','equivalent-lagrangians','result'
 ]);
 const byKind=kind=>stages.find(s=>s.kind===kind);
 assert.match(byKind('model-observation').formula[1],/\\boldsymbol r/);
 assert.match(byKind('constraint').formula[0],/q=\\theta/);
 assert.match(byKind('model-kinematics').formula.at(-1),/a_\\theta/);
 assert.match(byKind('model-forces').formula.at(-1),/\\ddot\\theta/);
 assert.match(byKind('generalized-work').formula.at(-1),/Q_\\theta/);
 assert.match(byKind('energy').formula[1],/E_\{\\mathrm\{mech\}\}=K\+U/);
 assert.match(byKind('paths').formula[1],/\\delta S=0/);
 assert.match(byKind('variation-setup').formula[0],/\\theta_\\varepsilon/);
 assert.match(byKind('variation-chain').formula[1],/\\frac\{dS\}\{d\\varepsilon\}/);
 assert.match(byKind('variation-parts').formula[1],/\\int_\{t_0\}/);
 assert.match(byKind('variation-local').formula.at(-1),/\\frac\{d\}\{dt\}/);
 assert.match(byKind('sign-compare').formula[0],/L_-=K-U/);
 assert.match(byKind('sign-compare').formula[1],/L_\+=K\+U/);
 assert.match(byKind('equivalent-lagrangians').formula.at(-1),/\\delta S'/);
 assert.match(byKind('result').formula.at(-1),/\\ddot\\theta/);
 assert.match(byKind('paths').note[1],/need not mean minimal/i);
});

test('Hamiltonian introduction starts from original spring force, then state, canonical momentum and H',()=>{
 const stages=universityBridgeLessons.hamilton.stages;
 assert.deepEqual(stages.map(s=>s.kind),['same-position','newton-state','conjugate','hamilton-energy','phase']);
 assert.match(stages[0].formula[0],/F=-kq/);
 assert.match(stages[1].formula[0],/P=m\\dot q/);
 assert.match(stages[2].formula[1],/p=\\frac\{\\partial L\}/);
 assert.match(stages[3].formula[0],/H=p\\dot q-L/);
 assert.match(stages[4].formula.at(-1),/m\\ddot q\+kq=0/);
 assert.match(stages[3].note[1],/not always/i);
});

test('visual geometry respects spring support and phase-plane velocity signs',()=>{
 const scene=universityBridgeFigure('same-position','Two states','en');
 assert.match(scene,/y1="112" x2="500" y2="112"/);
 assert.match(scene,/y1="236" x2="500" y2="236"/);
 assert.match(scene,/x="230" y="54" width="82" height="58"/);
 assert.match(scene,/x="230" y="178" width="82" height="58"/);
 const phase=universityBridgeFigure('phase','Phase plane','en');
 assert.match(phase,/p &gt; 0|p > 0/);
 assert.match(phase,/p &lt; 0|p < 0/);
});

test('chapter return navigation provides real prerequisite indices',()=>{
 const a=mechanicsUniversityBridgeHtml('lagrange','ja'),b=mechanicsUniversityBridgeHtml('hamilton','ja');
 assert.match(a,/data-mech-bridge-back="5"/);
 assert.match(a,/data-mech-bridge-back="2"/);
 assert.match(b,/data-mech-bridge-back="5"/);
 assert.match(b,/data-mech-bridge-back="9"/);
 assert.equal(mechanicsUniversityBridgeHtml('force','ja'),'');
});

test('same-position spring velocities and forces stay horizontal on their physical application points',()=>{
 const html=universityBridgeFigure('same-position','Same position','ja');
 for(const y of [83,207]){
  for(const toX of [y===83?347:197,188]){
   assert.ok(html.includes('x1="272" y1="'+y+'" x2="'+toX+'" y2="'+y+'"'),
    'spring vector at y='+y+' must be horizontal and originate at the block center');
  }
 }
});

test('Lagrangian bridge does not introduce K−U before the stationary-action motivation',()=>{
 const stages=universityBridgeLessons.lagrange.stages;
 const energy=stages.find(s=>s.kind==='energy');
 assert.ok(!energy.formula.some(formula=>formula.includes('L=K-U')));
 const action=stages.find(s=>s.kind==='paths');
 assert.match(action.formula[1],/\\delta S=0/);
 const compare=stages.find(s=>s.kind==='sign-compare');
 assert.match(compare.prose[0],/重力の接線成分/);
 assert.match(compare.formula[0],/\\ddot\\theta\+mg/);
 assert.match(compare.formula[1],/\\ddot\\theta-mg/);
});
test('action variation and physically opposite trial accelerations have their own diagrams',()=>{
 for(const lang of ['ja','en']){
  const variation=universityBridgeFigure('variation-setup','Perturbed paths',lang);
  const signs=universityBridgeFigure('sign-compare','Lagrangian sign comparison',lang);
  assert.match(variation,/η\(t₀\) = η\(t₁\) = 0/);
  assert.match(signs,/L = K − U/);
  assert.match(signs,/L = K \+ U/);
  assert.match(signs,/data-bridge-figure="sign-compare"/);
 }
});


test('Euler–Lagrange bridge derives the result without skipping boundary conditions or the arbitrary-variation argument',()=>{
 const stages=universityBridgeLessons.lagrange.stages;
 const kinds=['variation-setup','variation-chain','variation-parts','variation-local'];
 const derivation=kinds.map(k=>stages.find(x=>x.kind===k));
 assert.ok(derivation.every(Boolean));
 assert.deepEqual(derivation.map(s=>s.lineNotes.length),[3,3,4,3]);
 for(const s of derivation){
  assert.equal(s.lineNotes.length,s.formula.length,s.kind);
  for(const lang of [0,1])assert.ok(s.lineNotes.every(note=>note[lang].length>25),s.kind);
 }
 assert.match(derivation[0].formula[1],/\\eta\(t_0\)=\\eta\(t_1\)=0/);
 assert.match(derivation[1].formula[1],/\\partial L/);
 assert.match(derivation[2].formula[1],/\\left\[A\\eta\\right\]/);
 assert.match(derivation[2].formula[2],/A\(t_1\)\\eta\(t_1\).*A\(t_0\)\\eta\(t_0\)=0/);
 assert.match(derivation[3].formula[1],/G\(t\)\\eta\(t\)/);
 assert.match(derivation[3].prose[0],/ある一つのη.*とは限りません/);
 assert.match(derivation[3].prose[0],/変分法の基本補題/);
});

test('each of the 31 displayed physical-model and Euler–Lagrange notes follows its own mathematical step',()=>{
 for(const lang of ['ja','en']){
  const html=mechanicsUniversityBridgeHtml('lagrange',lang);
  assert.equal((html.match(/class="mechanics-university-formula-note"/g)||[]).length,31);
  for(const kind of ['variation-setup','variation-chain','variation-parts','variation-local']){
   const stage=universityBridgeLessons.lagrange.stages.find(s=>s.kind===kind);
   const start=html.indexOf('data-bridge-step="'+kind+'"');
   const end=html.indexOf('</section>',start);
   const block=html.slice(start,end);
   assert.ok(start>=0&&block.indexOf('data-bridge-figure=')<block.indexOf('class="formula tex-display"'));
   assert.equal((block.match(/class="mechanics-university-formula-note"/g)||[]).length,stage.formula.length);
  }
 }
});

test('fundamental lemma diagram uses a local bump, while boundary-term diagram fixes its endpoints',()=>{
 for(const lang of ['ja','en']){
  const local=universityBridgeFigure('variation-local','Local bump',lang);
  const parts=universityBridgeFigure('variation-parts','Integration by parts',lang);
  const chain=universityBridgeFigure('variation-chain','The chain rule',lang);
  assert.match(local,/G\(t\) &gt; 0|G\(t\) > 0/);
  assert.match(local,/∫G\(t\)η\(t\)dt &gt; 0|∫G\(t\)η\(t\)dt > 0/);
  assert.match(parts,/η\(t₀\) = η\(t₁\) = 0/);
  assert.match(parts,/\[Aη\]/);
  assert.match(chain,/data-bridge-figure="variation-chain"/);
 }
});


test('physical modeling steps explicitly connect observations, idealizations, geometry and equations in both languages',()=>{
 const stages=universityBridgeLessons.lagrange.stages;
 const selected=['model-observation','model-kinematics','model-forces'].map(k=>stages.find(s=>s.kind===k));
 for(const stage of selected){
  assert.ok(stage);
  assert.equal(stage.mapping.length,2);
  assert.equal(stage.mapping[0].length,3);
  assert.equal(stage.mapping[1].length,3);
  assert.equal(stage.lineNotes.length,stage.formula.length);
  assert.ok(stage.lineNotes.every(pair=>pair.every(t=>t.length>30)));
 }
 for(const lang of ['ja','en']){
  const html=mechanicsUniversityBridgeHtml('lagrange',lang);
  assert.equal((html.match(/class="mechanics-model-mapping-step"/g)||[]).length,9);
  for(const stage of selected){
   const start=html.indexOf('data-bridge-step="'+stage.kind+'"');
   const end=html.indexOf('</section>',start);
   const body=html.slice(start,end);
   assert.ok(body.indexOf('class="mechanics-university-figure"')<body.indexOf('class="formula tex-display"'));
   assert.equal((body.match(/class="mechanics-model-mapping-step"/g)||[]).length,3);
   assert.equal((body.match(/class="mechanics-university-formula-note"/g)||[]).length,stage.formula.length);
  }
 }
});
test('tension, gravity and projected force arrows all originate at the bob and have correct directions',()=>{
 const html=universityBridgeFigure('model-forces','Pendulum forces','ja');
 function vector(color){
  const re=new RegExp('<line x1="([0-9.]+)" y1="([0-9.]+)" x2="([0-9.]+)" y2="([0-9.]+)" stroke="'+color+'"');
  const m=html.match(re);
  assert.ok(m,'missing vector '+color);
  return m.slice(1).map(Number);
 }
 const g=vector('#b35e45'),T=vector('#855ca6'),Ft=vector('#397e9d');
 for(const v of [T,Ft]){
  assert.ok(Math.abs(v[0]-g[0])<1e-9);
  assert.ok(Math.abs(v[1]-g[1])<1e-9);
 }
 assert.equal(g[0],g[2]);assert.ok(g[3]>g[1],'gravity points vertically down');
 assert.ok(T[2]<T[0] && T[3]<T[1],'tension points toward the pivot');
 assert.ok(Ft[2]<Ft[0] && Ft[3]>Ft[1],'for positive theta, tangential force returns to equilibrium');
});
test('pendulum vector derivatives and Newtonian projections agree numerically',()=>{
 const ell=1.35,m=0.42,g=9.81,theta=0.61,td=0.72,tdd=-g/ell*Math.sin(theta);
 const er=[Math.sin(theta),-Math.cos(theta)],et=[Math.cos(theta),Math.sin(theta)];
 const r=[ell*er[0],ell*er[1]];
 const a=[ell*tdd*et[0]-ell*td**2*er[0],ell*tdd*et[1]-ell*td**2*er[1]];
 const dot=(x,y)=>x[0]*y[0]+x[1]*y[1];
 const Fg=[0,-m*g],T=[-2*er[0],-2*er[1]];
 const near=(x,y)=>assert.ok(Math.abs(x-y)<1e-10,'value '+x+' not close to '+y);
 near(Math.hypot(...r),ell);
 near(dot(er,et),0);
 near(dot(a,et),ell*tdd);
 near(dot(a,er),-ell*td**2);
 near(dot(T,et),0);
 near(dot(Fg,et),-m*g*Math.sin(theta));
 near(m*dot(a,et),dot(Fg,et)+dot(T,et));
});
test('pendulum energy height annotation points upward from the lowest position',()=>{
 const html=universityBridgeFigure('energy','K and U','ja');
 const height=html.match(/<line x1="([0-9.]+)" y1="([0-9.]+)" x2="([0-9.]+)" y2="([0-9.]+)" stroke="#b65f48"/);
 assert.ok(height);
 const [,x1,y1,x2,y2]=height.map(Number);
 assert.equal(x1,x2);
 assert.ok(y1>y2,'height arrow should ascend from the lowest position to the bob');
});
