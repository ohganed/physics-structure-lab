import test from 'node:test';
import assert from 'node:assert/strict';
import {circularVelocityGeometry,circularVelocityHtml} from '../circular-velocity-diagram.js';
const near=(a,b,epsilon=1e-10)=>assert.ok(Math.abs(a-b)<epsilon,`Expected ${a} close to ${b}`);
test('arc distance and time are exact in radians for uniform circular motion',()=>{
 const r=circularVelocityGeometry({radius:2,speed:4,angle:30});
 near(r.arc,2*Math.PI/6);
 near(r.duration,(2*Math.PI/6)/4);
});
test('velocity vector tips determine exact chord length',()=>{
 for(const angle of [5,30,60,90]){
 const r=circularVelocityGeometry({radius:3,speed:7,angle});
 near(Math.hypot(r.v1.x-r.v0.x,r.v1.y-r.v0.y),r.deltaV);
 near(r.deltaV,14*Math.sin(angle*Math.PI/360));
 }
});
test('average acceleration approaches inward instantaneous v²/r for small angles',()=>{
 const a=circularVelocityGeometry({radius:2,speed:4,angle:30});
 const b=circularVelocityGeometry({radius:2,speed:4,angle:0.01});
 assert.ok(a.averageAcceleration<a.limitAcceleration);
 assert.ok(Math.abs(b.averageAcceleration-b.limitAcceleration)<2e-8);
});
test('velocity rotation does not change speed',()=>{
 const r=circularVelocityGeometry({radius:2,speed:4,angle:90});
 near(Math.hypot(r.v0.x,r.v0.y),4);near(Math.hypot(r.v1.x,r.v1.y),4);
});
test('model rejects invalid inputs',()=>{
 for(const options of [{radius:0},{speed:0},{angle:0},{angle:121},{radius:NaN}])
 assert.throws(()=>circularVelocityGeometry(options),RangeError);
});
test('diagram contains bilingual accessible SVG and three controls',()=>{
 for(const lang of ['ja','en']){const h=circularVelocityHtml(lang);
 assert.match(h,/role="img"/);assert.match(h,/id="circular-angle"/);
 assert.match(h,/id="circular-speed"/);assert.match(h,/id="circular-radius"/);
 assert.match(h,/id="circular-velocity-readout"/);
 }
});