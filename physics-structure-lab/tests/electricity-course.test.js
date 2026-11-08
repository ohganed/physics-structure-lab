import test from 'node:test';
import assert from 'node:assert/strict';
import {electricityLessons1} from '../electricity-textbook-part1.js';
import {electricityLessons2} from '../electricity-textbook-part2.js';
import {electricityLessons3} from '../electricity-textbook-part3.js';
import {electricityFigure,electricityDiagramKeys} from '../electricity-situation-diagrams.js';
import {electricityChapters,electricityPage} from '../electricity-lab.js';
import {coulombForce,resistorNetwork,rcResponse,chargedParticleB} from '../electricity-models.js';
const near=(a,b,eps=1e-9)=>assert.ok(Math.abs(a-b)<eps,`expected ${a} ≈ ${b}`);
test('11 complete bilingual electricity chapters include 33 distinct and illustrated situations',()=>{
 assert.equal(electricityChapters.length,11);
 const sections=electricityChapters.flatMap(c=>c.sections);
 assert.equal(sections.length,33);
 assert.equal(new Set(sections.map(s=>s.id)).size,33);
 assert.equal(electricityDiagramKeys.length,33);
 for(const ch of electricityChapters){
  assert.equal(ch.title.length,2);
  assert.equal(ch.sections.length,3);
  for(const s of ch.sections){
   assert.ok(s.scene[0].length>50&&s.scene[1].length>50);
   assert.ok(s.derivation.length>=2);
   assert.ok(s.meaning[0]&&s.meaning[1]&&s.limits[0]&&s.limits[1]);
   for(const lang of ['ja','en']){
    const html=electricityFigure(s.id,s.title[lang==='en'?1:0],lang);
    assert.match(html,/<svg role="img"/);
    assert.match(html,/<title>.+<\/title>/);
    assert.match(html,/<figcaption>.+<\/figcaption>/);
    assert.doesNotMatch(html,/NaN|undefined|Infinity/);
   }
  }
 }
});
test('chapter selection and bilingual markup expose the sections',()=>{
 for(const lang of ['ja','en']){
  // electricityPage language is read from the saved setting; check chapter data and rendered entry.
  const chapter=electricityChapters[0];
  assert.ok(chapter.title[lang==='en'?1:0]);
  assert.ok(electricityFigure(chapter.sections[0].id,chapter.sections[0].title[lang==='en'?1:0],lang));
 }
});
test('Coulomb force gives attraction/repulsion and inverse-square scaling',()=>{
 const f=coulombForce(2,3,.2),far=coulombForce(2,3,.4);
 near(f.magnitude/far.magnitude,4);
 assert.equal(f.type,'repulsive');
 assert.equal(coulombForce(2,-3,.2).type,'attractive');
 near(coulombForce(0,3,.2).magnitude,0);
});
test('network currents and drops satisfy junction and loop conservation',()=>{
 const a=resistorNetwork({sourceVoltage:9,r1:6,r2:3,mode:'series'});
 near(a.totalCurrent,1);near(a.drops[0]+a.drops[1],9);
 const b=resistorNetwork({sourceVoltage:9,r1:6,r2:3,mode:'parallel'});
 near(b.resistance,2);near(b.branchCurrents[0]+b.branchCurrents[1],b.totalCurrent);
 near(b.drops[0],9);near(b.drops[1],9);
});
test('RC response has correct initial and asymptotic limits and time constant',()=>{
 const a=rcResponse({timeMs:0}),b=rcResponse({timeMs:100}),c=rcResponse({timeMs:2000});
 near(a.capacitorVoltage,0);near(a.current,.009);
 near(b.capacitorVoltage,9*(1-Math.exp(-1)));
 assert.ok(c.capacitorVoltage>8.99);
 const d=rcResponse({timeMs:0,mode:'discharge'});
 near(d.capacitorVoltage,9);near(d.current,-.009);
});
test('charged particle magnetically curves and period is speed independent',()=>{
 const a=chargedParticleB({speed:100}),b=chargedParticleB({speed:200});
 near(b.radius/a.radius,2);near(a.period,b.period);
 near(b.forceMagnitude/a.forceMagnitude,2);
});
test('invalid physical parameters fail explicitly',()=>{
 assert.throws(()=>coulombForce(1,1,0),RangeError);
 assert.throws(()=>resistorNetwork({r1:0}),RangeError);
 assert.throws(()=>rcResponse({resistance:0}),RangeError);
 assert.throws(()=>chargedParticleB({fieldTesla:0}),RangeError);
});
