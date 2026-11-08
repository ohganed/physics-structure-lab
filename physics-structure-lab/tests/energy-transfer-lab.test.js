import test from 'node:test';
import assert from 'node:assert/strict';
import {calculateEnergyCase, energyTransferHtml} from '../energy-transfer-lab.js';
const close=(a,b)=>assert.ok(Math.abs(a-b)<1e-10, `Expected ${a} ≈ ${b}`);
test('incline final speed depends on height, not mass or angle in the frictionless model',()=>{
 close(calculateEnergyCase('slope',5).result,Math.sqrt(98));
 close(calculateEnergyCase('slope',0).result,0);
});
test('spring speed follows compression, stiffness and mass',()=>{
 close(calculateEnergyCase('spring',0.8).result,0.8*Math.sqrt(40));
 close(calculateEnergyCase('spring',1.6).result,2*calculateEnergyCase('spring',0.8).result);
});
test('pendulum energy uses angle in radians and height difference',()=>{
 close(calculateEnergyCase('pendulum',90).result,Math.sqrt(2*9.8*1.5));
 close(calculateEnergyCase('pendulum',0).result,0);
});
test('sliding friction stopping distance scales with the square of speed',()=>{
 close(calculateEnergyCase('friction',8).result,64/(2*0.4*9.8));
 close(calculateEnergyCase('friction',16).result,4*calculateEnergyCase('friction',8).result);
});
test('reject invalid physical inputs',()=>{
 for(const value of [-1,NaN,Infinity])assert.throws(()=>calculateEnergyCase('slope',value),RangeError);
 assert.throws(()=>calculateEnergyCase('pendulum',181),RangeError);
 assert.throws(()=>calculateEnergyCase('unknown',3),RangeError);
});
test('exercise selection, reveal and text are bilingual',()=>{
 for(const lang of ['ja','en']){
 const html=energyTransferHtml(lang);
 assert.match(html,/id="energy-case-select"/);
 assert.match(html,/id="energy-case-reveal"/);
 assert.match(html,/id="energy-case-answer" hidden/);
 assert.equal((html.match(/<option /g)||[]).length,4);
 }
});
