import test from 'node:test';
import assert from 'node:assert/strict';
import {analyzeIncline} from '../incline-explanation-model.js';
import {inclineTextSections} from '../incline-textbook-data.js';
import {inclineTextbookHtml} from '../incline-textbook.js';
const near=(x,y)=>assert.ok(Math.abs(x-y)<1e-6,x+' != '+y);
test('horizontal contact makes normal equal weight; static friction is not automatically maximum',()=>{
 const a=analyzeIncline({mass:2,thetaDegrees:0,muStatic:.4,muKinetic:.3});
 near(a.normal,19.6);near(a.downslope,0);near(a.friction,0);
 near(a.staticMax,7.84);near(a.acceleration,0);
 assert.equal(a.canRemainAtRest,true);
});
test('a 2kg block remains at rest on 20 degree slope under static Coulomb friction',()=>{
 const a=analyzeIncline({mass:2,thetaDegrees:20,muStatic:.4,muKinetic:.3});
 near(a.downslope,19.6*Math.sin(20*Math.PI/180));
 near(a.normal,19.6*Math.cos(20*Math.PI/180));
 near(a.friction,a.downslope);
 assert.ok(a.friction<a.staticMax);
 assert.equal(a.regime,'rest');
});
test('sliding block accelerates at 30 degrees with kinetic friction rather than maximum static friction',()=>{
 const a=analyzeIncline({mass:2,thetaDegrees:30,muStatic:.4,muKinetic:.3});
 assert.equal(a.regime,'sliding');
 near(a.friction,.3*19.6*Math.cos(Math.PI/6));
 near(a.acceleration,9.8*(.5-.3*Math.cos(Math.PI/6)));
 assert.ok(a.acceleration>2.35&&a.acceleration<2.36);
});
test('limit tan(theta)=muStatic and mass cancels from the angle and acceleration',()=>{
 const a=analyzeIncline({mass:1,thetaDegrees:35,muStatic:.4,muKinetic:.3});
 const b=analyzeIncline({mass:10,thetaDegrees:35,muStatic:.4,muKinetic:.3});
 near(a.acceleration,b.acceleration);
 near(a.thresholdDegrees,Math.atan(.4)*180/Math.PI);
 near(a.downslope*10,b.downslope);
});
test('a friction-free slope has acceleration g sin theta and a zero-slope at rest',()=>{
 const a=analyzeIncline({mass:4,thetaDegrees:20,muStatic:0,muKinetic:0});
 near(a.acceleration,9.8*Math.sin(Math.PI/9));
 const zero=analyzeIncline({mass:4,thetaDegrees:0,muStatic:0,muKinetic:0});
 assert.equal(zero.canRemainAtRest,true);
});
test('reject physically incoherent parameters without silently inventing observations',()=>{
 for(const opts of [{mass:0},{mass:-1},{thetaDegrees:-1},{thetaDegrees:95},{muKinetic:.8,muStatic:.4},{g:0},{mass:NaN}]){
  assert.throws(()=>analyzeIncline(opts),RangeError);
 }
});
test('friction textbook covers eight full explanations in Japanese and English',()=>{
 assert.equal(inclineTextSections.length,8);
 for(const [i,s] of inclineTextSections.entries()){
  assert.equal(s.title.length,2);
  assert.ok(s.parts.length>=1,i+' lacks text');
  assert.ok(s.parts.every(p=>p[0].length>=30&&p[1].length>=30),i+' explanation too short');
  assert.ok(s.equations.every(e=>e.formula.length>12),i+' formula');
 }
 for(const lang of ['ja','en']){
  const html=inclineTextbookHtml(lang);
  assert.equal((html.match(/class="incline-reading-section"/g)||[]).length,8);
  assert.ok(html.includes('id="incline-diagram"'));
  assert.ok(html.includes('id="incline-results"'));
  assert.ok(html.includes('incline-kinetic'));
  assert.ok(html.includes('incline-static'));
  assert.ok(html.includes('data-tex'));
 }
});
