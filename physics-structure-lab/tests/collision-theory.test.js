import test from 'node:test';
import assert from 'node:assert/strict';
import {collisionPrediction,contactImpulse} from '../collision-theory-model.js';
import {collisionTextbookHtml} from '../collision-textbook.js';
const near=(a,b)=>assert.ok(Math.abs(a-b)<1e-10,`Expected ${a} ≈ ${b}`);
test('isolated collision conserves total momentum and cancels internal impulses',()=>{
 for(const m1 of [0.5,1,2,6])for(const m2 of [0.5,1,3,6])for(const e of [0,0.25,0.5,1]){
 const r=contactImpulse({m1,m2,u1:3,u2:-1,e});
 near(r.pBefore,r.pAfter);
 near(r.impulse1+r.impulse2,0);
 near(r.kBefore-r.kAfter,r.kineticLoss);
 assert.ok(r.kineticLoss>=-1e-10);
 }
});
test('worked collision matches all restitution cases',()=>{
 const base={m1:2,m2:1,u1:3,u2:0};
 const zero=collisionPrediction({...base,e:0});
 near(zero.v1,2);near(zero.v2,2);near(zero.kAfter,6);
 const half=collisionPrediction({...base,e:0.5});
 near(half.v1,1.5);near(half.v2,3);near(half.kAfter,6.75);
 const elastic=collisionPrediction({...base,e:1});
 near(elastic.v1,1);near(elastic.v2,4);near(elastic.kAfter,9);
});
test('center of mass velocity and relative separation obey restitution',()=>{
 for(const e of [0,0.2,0.5,1]){
 const r=collisionPrediction({m1:2,m2:3,u1:4,u2:1,e});
 near(r.centerSpeed,(2*4+3*1)/5);
 near(r.v2-r.v1,e*(4-1));
 }
});
test('Galilean boost preserves collision energy loss and restitution',()=>{
 const a=collisionPrediction({m1:2,m2:3,u1:4,u2:1,e:0.3});
 const b=collisionPrediction({m1:2,m2:3,u1:11,u2:8,e:0.3});
 near(a.kineticLoss,b.kineticLoss);
 near(b.v1-a.v1,7);near(b.v2-a.v2,7);
});
test('physical input validation',()=>{
 for(const p of [{m1:0,m2:1,u1:1,u2:0,e:0.5},{m1:1,m2:1,u1:1,u2:0,e:1.1},{m1:1,m2:1,u1:1,u2:2,e:0.5},{m1:1,m2:1,u1:NaN,u2:0,e:0.5}])assert.throws(()=>collisionPrediction(p),RangeError);
});
test('chapter 04 has eight bilingual sections plus a non-gating lab',()=>{
 for(const lang of ['ja','en']){const html=collisionTextbookHtml(lang);
 assert.equal((html.match(/<section class="mechanics-worked-article">/g)||[]).length,8);
 assert.match(html,/id="collision-restitution-lab"/);
 assert.match(html,/id="collision-e"/);
 assert.doesNotMatch(html,/type="submit"/);
 }
});