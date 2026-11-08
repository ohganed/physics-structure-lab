import test from 'node:test';
import assert from 'node:assert/strict';
import {oscillatorState,oscillationVisualHtml} from '../oscillation-visual.js';

const near=(actual,expected,tol=1e-10)=>assert.ok(Math.abs(actual-expected)<=tol,
 `Expected ${actual} ≈ ${expected}`);

test('at the positive turning point speed is zero and force points left',()=>{
 const s=oscillatorState({amplitude:1,mass:2,stiffness:8,phaseDeg:0});
 near(s.position,1);near(s.velocity,0);near(s.acceleration,-4);near(s.force,-8);
});
test('at equilibrium speed is greatest and restoring force vanishes',()=>{
 const s=oscillatorState({amplitude:1,mass:2,stiffness:8,phaseDeg:90});
 near(s.position,0);near(s.velocity,-2);near(s.acceleration,0);near(s.force,0);
});
test('at negative turning point acceleration points right',()=>{
 const s=oscillatorState({amplitude:1,mass:2,stiffness:8,phaseDeg:180});
 near(s.position,-1);near(s.velocity,0);near(s.acceleration,4);near(s.force,8);
});
test('kinetic plus potential energy is independent of phase',()=>{
 for(const phaseDeg of [0,45,90,135,180,240,360]){
 const s=oscillatorState({amplitude:1.2,mass:3,stiffness:10,phaseDeg});
 near(s.kinetic+s.potential,s.total,1e-9);
 near(s.force,s.mass*s.acceleration,1e-9);
 }
});
test('period depends on mass and stiffness but not amplitude',()=>{
 const small=oscillatorState({amplitude:0.3,mass:2,stiffness:8});
 const large=oscillatorState({amplitude:1.5,mass:2,stiffness:8});
 const heavy=oscillatorState({amplitude:0.3,mass:8,stiffness:8});
 near(small.period,large.period);
 near(heavy.period,2*small.period);
});
test('reject invalid oscillator parameters',()=>{
 for(const opts of [{amplitude:0},{mass:0},{stiffness:-1},{phaseDeg:-1},{phaseDeg:361},{mass:Infinity},{amplitude:NaN}])
 assert.throws(()=>oscillatorState(opts),RangeError);
});
test('Japanese and English diagrams have two accessible SVGs and four controls',()=>{
 for(const lang of ['ja','en']){
 const html=oscillationVisualHtml(lang);
 assert.equal((html.match(/role="img"/g)||[]).length,2);
 for(const id of ['spring-svg','curves-svg','readout'])assert.match(html,new RegExp('id="oscillation-'+id+'"'));
 for(const id of ['phase','amplitude','mass','stiffness'])assert.match(html,new RegExp('id="oscillation-'+id+'"'));
 assert.doesNotMatch(html,/autoplay|required|type="submit"/);
 }
});
