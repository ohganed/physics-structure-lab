import test from 'node:test';
import assert from 'node:assert/strict';
import {compareOscillators,compareInverseSquare,compareGradientFlux} from '../transfer-models.js';
import {transferCases} from '../transfer-cases.js';
const close=(x,y,tolerance=1e-8)=>assert.ok(Math.abs(x-y)<tolerance,'Expected '+y+', got '+x);

test('mechanical and electrical oscillations are numerically consistent',()=>{
 const x=compareOscillators({m:2,k:50,L:2,C:.02});
 close(x.mechanicalOmega,5);close(x.electricOmega,5);
 close(x.mechanicalPeriod,2*Math.PI/5);close(x.electricPeriod,2*Math.PI/5);
});
test('oscillation periods scale with coefficients, not labels',()=>{
 const a=compareOscillators({m:2,k:50,L:2,C:.02});
 const b=compareOscillators({m:8,k:50,L:2,C:.08});
 close(b.mechanicalPeriod/a.mechanicalPeriod,2);
 close(b.electricPeriod/a.electricPeriod,2);
});
test('Newton gravity always attracts, while electrostatic interaction changes sign',()=>{
 const a=compareInverseSquare({m1:5,m2:5,q1Micro:2,q2Micro:2,r:1});
 const b=compareInverseSquare({m1:5,m2:5,q1Micro:2,q2Micro:-2,r:1});
 assert.ok(a.gravityInward>0);assert.ok(b.gravityInward>0);
 assert.ok(a.electricRepulsive);assert.ok(b.electricAttractive);
 close(a.electricRadial,-b.electricRadial,1e-12);
 const far=compareInverseSquare({m1:5,m2:5,q1Micro:2,q2Micro:2,r:2});
 close(far.gravityInward/a.gravityInward,.25);
 close(far.electricRadial/a.electricRadial,.25);
});
test('Fick and Fourier fluxes share gradient structure but have separate physical units',()=>{
 const result=compareGradientFlux({diffusivity:.001,concentrationGradient:-4,conductivity:2,temperatureGradient:5});
 close(result.molarFlux,.004);
 close(result.heatFlux,-10);
});
test('invalid physical model values are rejected',()=>{
 assert.throws(()=>compareOscillators({m:0}));
 assert.throws(()=>compareOscillators({C:-1}));
 assert.throws(()=>compareInverseSquare({r:0}));
 assert.throws(()=>compareGradientFlux({diffusivity:0}));
});
test('six bilingual transfer cases include paired equations, bridges, disanalogies, and reflection prompts',()=>{
 assert.equal(transferCases.length,6);
 const ids=new Set();
 for(const c of transferCases){
  assert.ok(c.id&&!ids.has(c.id));ids.add(c.id);
  assert.ok(c.concept);
  assert.ok(Array.isArray(c.equations)&&c.equations.length>=2);
  for(const k of ['title','phenomenon','question','common','difference','transfer']){
   assert.equal(c[k].length,2,c.id+' missing '+k);
   assert.ok(c[k][0].length>20,c.id+' Japanese too short '+k);
   assert.ok(c[k][1].length>20,c.id+' English too short '+k);
  }
 }
});
