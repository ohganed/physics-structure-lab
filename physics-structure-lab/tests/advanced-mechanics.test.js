import test from 'node:test';
import assert from 'node:assert/strict';
import {rotor,oscillator,orbit,coupledModes} from '../advanced-mechanics-model.js';
const near=(x,y,eps=1e-8)=>assert.ok(Math.abs(x-y)<eps,`expected ${y}, got ${x}`);
test('uniform disk has correct torque, inertia, acceleration',()=>{
 const s=rotor({mass:2,radius:1,force:4,angleDeg:90,time:2});
 near(s.inertia,1);near(s.torque,4);near(s.alpha,4);near(s.omega,8);near(s.theta,8);
 near(s.energy,32);near(s.angularMomentum,8);
});
test('radial force has zero torque',()=>{
 const s=rotor({mass:2,radius:2,force:5,angleDeg:0,time:3});
 near(s.torque,0);near(s.omega,0);
});
test('undamped oscillator starts at rest and conserves mechanical energy',()=>{
 const params={mass:2,k:50,amplitude:.3,damping:0};
 const start=oscillator({...params,time:0});
 const later=oscillator({...params,time:.4});
 near(start.x,.3);near(start.v,0);
 near(start.kinetic+start.potential,later.kinetic+later.potential,1e-8);
 near(start.period,2*Math.PI/5);
});
test('damped oscillator initial velocity zero and energy decreases',()=>{
 const p={mass:2,k:50,amplitude:.3,damping:1};
 const a=oscillator({...p,time:0}),b=oscillator({...p,time:1});
 near(a.v,0);assert.ok(b.kinetic+b.potential<a.kinetic+a.potential);
});
test('circular orbit Newton gravitational acceleration and period',()=>{
 const mu=3.986004418e14,radius=7e6;
 const a=orbit({mu,radius,time:0});
 near(a.speed*a.speed/radius,a.acceleration);
 near(a.speed,Math.sqrt(mu/radius));
 const q=orbit({mu,radius,time:a.period/4});
 near(q.x,0,1e-6);near(q.y,radius,1e-6);
});
test('normal modes of equal coupled oscillators',()=>{
 const m=coupledModes({mass:2,outerK:8,couplingK:3});
 near(m.omegaTogether,2);near(m.omegaOpposite,Math.sqrt(7));
});
test('invalid and non-underdamped parameters are rejected',()=>{
 assert.throws(()=>rotor({mass:0}));
 assert.throws(()=>oscillator({mass:1,k:1,amplitude:.3,damping:2}));
 assert.throws(()=>orbit({radius:-1}));
 assert.throws(()=>coupledModes({mass:0}));
});
