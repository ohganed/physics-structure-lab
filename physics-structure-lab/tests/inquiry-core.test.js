import test from 'node:test';
import assert from 'node:assert/strict';
import {inquiryScenarios,scenarioById,evaluateInquiry,compareInquiryTrials,validInvestigation,inquiryCurve} from '../inquiry-core.js';
const near=(actual,expected,tol=1e-9)=>assert.ok(Math.abs(actual-expected)<tol,'Expected '+expected+', got '+actual);
const params=id=>Object.fromEntries(scenarioById(id).inputs.map(i=>[i.key,i.initial]));
const record={id:'inq-correct-scientific-record',scenario:'fall',date:'2026-11-06T03:00:00.000Z',
  question:'Does mass affect the fall time?',hypothesis:'Possibly, but only the model can decide.',
  interpretation:'Compare mass while holding height fixed.',nextQuestion:'What happens if drag is included?',trials:[evaluateInquiry('fall',params('fall'))]};
test('five bilingual scientific inquiry scenarios with valid models and stated assumptions',()=>{
 assert.equal(inquiryScenarios.length,5);
 for(const c of inquiryScenarios){
  for(const field of ['title','phenomenon','prompt','assumptions','explanation','caution']){
   assert.equal(c[field].length,2,c.id+' missing '+field);
   assert.ok(c[field][0]?.length>=8);
   assert.ok(c[field][1]?.length>=8);
  }
  assert.ok(c.inputs.length>=2,c.id);
  const values=params(c.id);
  const out=evaluateInquiry(c.id,values);
  assert.ok(Number.isFinite(out.primary)&&Number.isFinite(out.secondary),c.id);
  assert.equal(out.scenario,c.id);
  assert.ok(out.primaryUnit&&out.secondaryUnit);
 }
});
test('zero net force does not erase the cart initial velocity',()=>{
 const out=evaluateInquiry('cart',{force:0,mass:2});
 near(out.primary,0);
 near(out.secondary,3);
 const left=evaluateInquiry('cart',{force:-4,mass:2});
 near(left.primary,-2);near(left.secondary,-1);
});
test('ideal free fall depends on height but not mass',()=>{
 const a=evaluateInquiry('fall',{mass:1,height:10}),b=evaluateInquiry('fall',{mass:10,height:10});
 near(a.primary,b.primary);near(a.secondary,b.secondary);
 const four=evaluateInquiry('fall',{mass:1,height:40});
 near(four.primary/a.primary,2);
});
test('circular acceleration scales as speed squared and inversely as radius',()=>{
 const a=evaluateInquiry('circular',{speed:4,radius:2});
 const twice=evaluateInquiry('circular',{speed:8,radius:2});
 const doubleRadius=evaluateInquiry('circular',{speed:4,radius:4});
 near(twice.primary/a.primary,4);near(doubleRadius.primary/a.primary,.5);
});
test('linear spring period ignores amplitude but spring energy does not',()=>{
 const a=evaluateInquiry('spring',{mass:2,amplitude:.2});
 const b=evaluateInquiry('spring',{mass:2,amplitude:.8});
 near(a.primary,b.primary);near(b.secondary/a.secondary,16);
 const mass4=evaluateInquiry('spring',{mass:8,amplitude:.2});
 near(mass4.primary/a.primary,2);
});
test('collision always conserves model momentum; kinetic energy depends on restitution',()=>{
 const elastic=evaluateInquiry('collision',{m2:1,restitution:1});
 const stick=evaluateInquiry('collision',{m2:1,restitution:0});
 near(elastic.conserved.initialMomentum,elastic.conserved.finalMomentum);
 near(stick.conserved.initialMomentum,stick.conserved.finalMomentum);
 near(elastic.conserved.energyBefore,elastic.conserved.energyAfter);
 assert.ok(stick.conserved.energyAfter<stick.conserved.energyBefore);
 near(stick.primary,stick.secondary);
});
test('one controlled variable is identified separately from confounded comparisons',()=>{
 const a=evaluateInquiry('cart',{force:6,mass:2});
 const b=evaluateInquiry('cart',{force:12,mass:2});
 const c=evaluateInquiry('cart',{force:12,mass:4});
 const isolated=compareInquiryTrials(a,b);
 assert.equal(isolated.kind,'controlled');assert.deepEqual(isolated.changed,['force']);near(isolated.change,3);
 assert.equal(compareInquiryTrials(a,c).kind,'confounded');
 assert.equal(compareInquiryTrials(a,a).kind,'replicate');
 assert.throws(()=>compareInquiryTrials(a,evaluateInquiry('fall',params('fall'))));
});
test('invalid model input cannot be stored as evidence',()=>{
 assert.throws(()=>evaluateInquiry('fall',{mass:0,height:10}));
 assert.throws(()=>evaluateInquiry('cart',{force:12,mass:0}));
 assert.throws(()=>evaluateInquiry('circular',{speed:1,radius:0}));
 assert.throws(()=>evaluateInquiry('unknown',{}));
 assert.equal(validInvestigation(record),true);
 assert.equal(validInvestigation({...record,scenario:'other'}),false);
 assert.equal(validInvestigation({...record,id:'evil id'}),false);
 const manipulated=JSON.parse(JSON.stringify(record));
 manipulated.trials[0].primary+=1;
 assert.equal(validInvestigation(manipulated),false,'Tampered result must not become model evidence');
 assert.equal(validInvestigation({...record,hypothesis:'',trials:[]}),true,'Hypotheses and trial history may be incomplete');
});

test('one-variable curves reveal invariances and nonlinear scaling',()=>{
 const fall=inquiryCurve('fall',{mass:2,height:10},'mass');
 assert.equal(fall.flat,true);
 const spring=inquiryCurve('spring',{mass:2,amplitude:.5},'amplitude');
 assert.equal(spring.flat,true);
 const circular=inquiryCurve('circular',{speed:6,radius:3},'speed');
 assert.equal(circular.flat,false);
 near(circular.points.at(-1).y/circular.points[0].y,(15/1)**2);
 const cart=inquiryCurve('cart',{force:6,mass:2},'force');
 near(cart.points[0].y,-12/2);
 near(cart.points.at(-1).y,12/2);
 assert.throws(()=>inquiryCurve('cart',{force:6,mass:2},'unknown'));
 assert.throws(()=>inquiryCurve('fall',{mass:2,height:10},'mass',1));
});
