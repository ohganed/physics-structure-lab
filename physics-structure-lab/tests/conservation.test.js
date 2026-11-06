import test from 'node:test';
import assert from 'node:assert/strict';
import {fallingEnergy,collisionEnergy} from '../conservation-model.js';
const near=(a,b)=>assert.ok(Math.abs(a-b)<1e-9,`expected ${b}, got ${a}`);
test('frictionless fall converts initial gravitational energy into kinetic energy',()=>{
 const s=fallingEnergy({m:2,h:5,loss:0});
 near(s.initialPotential,98);near(s.finalKinetic,98);near(s.dissipated,0);near(s.v,Math.sqrt(98));
});
test('falling body with dissipated mechanical energy obeys total budget',()=>{
 const s=fallingEnergy({m:2,h:10,loss:.25});
 near(s.finalKinetic+s.dissipated,s.initialPotential);
 near(s.v,Math.sqrt(2*9.8*10*.75));
});
test('elastic collision conserves total momentum and kinetic energy',()=>{
 const s=collisionEnergy({m1:2,m2:1,u1:3,e:1});
 near(s.pi,s.pf);near(s.ki,s.kf);near(s.v1,1);near(s.v2,4);
});
test('perfectly inelastic collision has common final velocity',()=>{
 const s=collisionEnergy({m1:2,m2:1,u1:3,e:0});
 near(s.v1,2);near(s.v2,2);near(s.pi,s.pf);
 assert.ok(s.loss>0);
});
test('no initial motion preserves zero energy and momentum',()=>{
 const s=collisionEnergy({m1:1,m2:1,u1:0,e:.5});
 near(s.pi,0);near(s.kf,0);near(s.loss,0);
});
test('invalid inputs rejected',()=>{
 assert.throws(()=>fallingEnergy({loss:1.1}));
 assert.throws(()=>fallingEnergy({m:0}));
 assert.throws(()=>collisionEnergy({e:-1}));
 assert.throws(()=>collisionEnergy({m2:0}));
});
