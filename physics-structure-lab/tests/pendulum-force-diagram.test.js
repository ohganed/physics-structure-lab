import test from 'node:test';
import assert from 'node:assert/strict';
import {pendulumDiagramModel,pendulumForcesHtml} from '../pendulum-force-diagram.js';
import {mechanicsWorkedCaseHtml} from '../mechanics-worked-article.js';
const near=(a,b,tolerance=1e-10)=>assert.ok(Math.abs(a-b)<tolerance, `Expected ${a} ≈ ${b}`);
test('gravity tangent component restores pendulum toward equilibrium',()=>{
 const model=pendulumDiagramModel({length:1,mass:2,angleDeg:30});
 near(model.weight,19.6);
 near(model.tangentSigned,-9.8);
 near(model.radialOutward,19.6*Math.cos(Math.PI/6));
});
test('small-angle period is the limit of the ideal pendulum period',()=>{
 const a=pendulumDiagramModel({length:1,mass:1,angleDeg:0});
 near(a.tSmall,2*Math.PI*Math.sqrt(1/9.8));
 near(a.tExact,a.tSmall);
 const small=pendulumDiagramModel({length:1,mass:1,angleDeg:5});
 assert.ok(small.ratio>1 && small.ratio<1.001);
});
test('a 60 degree release has a longer period than small-angle prediction',()=>{
 const r=pendulumDiagramModel({length:1,mass:1,angleDeg:60});
 assert.ok(r.ratio>1.07 && r.ratio<1.075);
 near(r.approximateRatio,Math.sin(Math.PI/3)/(Math.PI/3));
});
test('period depends on length but not mass, while force scales with mass',()=>{
 const a=pendulumDiagramModel({length:1,mass:1,angleDeg:40});
 const b=pendulumDiagramModel({length:2,mass:3,angleDeg:40});
 near(b.tSmall/a.tSmall,Math.sqrt(2));
 near(b.tExact/a.tExact,Math.sqrt(2));
 near(a.ratio,b.ratio);
 near(b.weight/a.weight,3);
});
test('reject nonphysical inputs and prevent singular amplitude 180 degrees',()=>{
 for(const opts of [{length:0},{mass:0},{angleDeg:-1},{angleDeg:180},{length:NaN},{mass:Infinity}])
 assert.throws(()=>pendulumDiagramModel(opts),RangeError);
});
test('bilingual pendulum force figure has accessible vector and period graphs',()=>{
 for(const language of ['ja','en']){
 const html=pendulumForcesHtml(language);
 assert.match(html,/id="pendulum-force-svg"/);
 assert.match(html,/id="pendulum-period-svg"/);
 assert.equal((html.match(/role="img"/g)||[]).length,2);
 for(const id of ['angle','length','mass'])assert.match(html,new RegExp('id="pendulum-'+id+'"'));
 }
});
test('illustration sits before worked equations, and other chapters are unchanged',()=>{
 const pendulum=mechanicsWorkedCaseHtml('oscillation','ja');
 assert.ok(pendulum.indexOf('id="pendulum-force-figure"')<pendulum.indexOf('class="mechanics-worked-solution"'));
 assert.doesNotMatch(mechanicsWorkedCaseHtml('circular','ja'),/pendulum-force-figure/);
});
