import test from 'node:test';
import assert from 'node:assert/strict';
import {impulsePrediction,forceAt,twoBodyImpulse} from '../momentum-origin-model.js';
import {momentumOriginHtml} from '../momentum-origin-lab.js';
import {mechanicsChapters} from '../mechanics-data.js';
import {mechanicsEnglish} from '../mechanics-en.js';
const near=(a,b)=>assert.ok(Math.abs(a-b)<=Math.max(1,Math.abs(b))*1e-10,String(a)+' vs '+String(b));
test('constant force: rectangle area is a difference between initial and final mv',()=>{
 const p=impulsePrediction({mass:2,force:4,duration:2,initialVelocity:1});
 near(p.impulse,8);near(p.velocityChange,4);near(p.finalVelocity,5);
 near(p.initialMomentum,2);near(p.finalMomentum,10);near(p.momentumChange,8);
});
test('linearly changing force: triangular signed area is half the rectangle',()=>{
 const p=impulsePrediction({mass:2,force:4,duration:2,initialVelocity:1,profile:'ramp'});
 near(p.impulse,4);near(p.finalVelocity,3);near(p.momentumChange,4);
 near(forceAt('ramp',4,2,0),0);near(forceAt('ramp',4,2,1),2);near(forceAt('ramp',4,2,2),4);
});
test('signed impulse accounts for slowing and reversing force direction',()=>{
 const p=impulsePrediction({mass:4,force:-3,duration:2,initialVelocity:2});
 near(p.impulse,-6);near(p.velocityChange,-1.5);near(p.finalVelocity,.5);
 near(p.initialMomentum,8);near(p.finalMomentum,2);
 const z=impulsePrediction({mass:5,force:0,duration:2,initialVelocity:-2});
 near(z.finalVelocity,-2);near(z.momentumChange,0);
});
test('equal areas but different masses give different velocity changes',()=>{
 const a=impulsePrediction({mass:1,force:6,duration:3,initialVelocity:0});
 const b=impulsePrediction({mass:3,force:6,duration:3,initialVelocity:0});
 near(a.impulse,b.impulse);near(a.velocityChange,3*b.velocityChange);
});
test('opposite contact impulses cancel for the combined two-body system',()=>{
 const a=twoBodyImpulse({massA:2,massB:3,velocityA:2,velocityB:-1,impulseToA:-4});
 near(a.impulseA,-a.impulseB);near(a.before,a.after);near(a.afterA,0);near(a.afterB,1/3);
});
test('bad model parameters are rejected',()=>{
 assert.throws(()=>impulsePrediction({mass:0,force:4,duration:2,initialVelocity:0}));
 assert.throws(()=>impulsePrediction({mass:2,force:4,duration:0,initialVelocity:0}));
 assert.throws(()=>impulsePrediction({mass:2,force:4,duration:2,initialVelocity:0,profile:'sin'}));
 assert.throws(()=>forceAt('ramp',1,0,.1));
 assert.throws(()=>twoBodyImpulse({massA:2,massB:-1,velocityA:1,velocityB:0,impulseToA:1}));
});
test('curriculum motivates momentum through area and state differences',()=>{
 const jp=mechanicsChapters.find(x=>x.key==='momentum');
 const en=mechanicsEnglish.find(x=>x.key==='momentum');
 assert.equal(jp.steps.length,6);assert.equal(en.steps.length,6);
 assert.match(jp.steps[0][0],/面積/);
 assert.match(jp.steps[3][0],/名前/);
 assert.match(jp.steps[4][0],/二物体/);
 assert.match(en.steps[0][0],/area/);
 assert.match(jp.definition,/FΔt/);
});
test('bilingual lesson starts with phenomenon, not an unexplained definition',()=>{
 const ja=momentumOriginHtml('ja'),en=momentumOriginHtml('en');
 for(const html of [ja,en]){
  assert.match(html,/id="mo-chart"/);assert.match(html,/id="mo-duration"/);
  assert.match(html,/id="mo-force"/);assert.match(html,/value="ramp"/);
  assert.match(html,/data-tex="F=ma/);assert.match(html,/data-tex="p=mv/);
 }
 assert.ok(ja.indexOf('台車を押す時間')<ja.indexOf('運動量 p=mv について'));
 assert.ok(en.indexOf('Duration of a push')<en.indexOf('About momentum p=mv'));
});

test('the momentum narrative uses no congratulatory announcements or historical fiction',()=>{
 const ja=momentumOriginHtml('ja'),en=momentumOriginHtml('en');
 assert.ok(!ja.includes('ここで初めて'));
 assert.ok(!ja.includes('公式を先に覚えず'));
 assert.ok(!ja.includes('暗記してから'));
 assert.ok(!ja.includes('発見順序'));
 assert.ok(!en.includes('memorizing a definition'));
});
