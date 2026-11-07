import test from 'node:test';
import assert from 'node:assert/strict';
import {brakingModel} from '../energy-work-model.js';
import {energyTextbookHtml} from '../energy-textbook.js';
const close=(actual,expected)=>assert.ok(Math.abs(actual-expected)<1e-9,actual+' versus '+expected);
test('constant braking force: work, impulse, stopping distance and time',()=>{
 const x=brakingModel({mass:1000,initialSpeed:20,brakingForce:4000});
 close(x.initialEnergy,200000);
 close(x.distance,50);
 close(x.time,5);
 close(x.acceleration,-4);
 close(x.work,-200000);
 close(x.impulse,-20000);
 close(x.finalEnergy,0);
});
test('doubling speed quadruples braking distance and doubles braking time',()=>{
 const x=brakingModel({mass:1000,initialSpeed:20,brakingForce:4000});
 const y=brakingModel({mass:1000,initialSpeed:40,brakingForce:4000});
 close(y.distance,4*x.distance);
 close(y.time,2*x.time);
});
test('double force halves distance and time, with same initial kinetic energy',()=>{
 const x=brakingModel({mass:1000,initialSpeed:20,brakingForce:4000});
 const y=brakingModel({mass:1000,initialSpeed:20,brakingForce:8000});
 close(y.distance,x.distance/2);
 close(y.time,x.time/2);
 close(y.initialEnergy,x.initialEnergy);
});
test('zero starting speed and invalid inputs',()=>{
 const x=brakingModel({mass:1000,initialSpeed:0,brakingForce:4000});
 close(x.distance,0);close(x.time,0);close(x.work,0);
 for(const bad of [
  {mass:0,initialSpeed:20,brakingForce:4000},
  {mass:1000,initialSpeed:-1,brakingForce:4000},
  {mass:1000,initialSpeed:20,brakingForce:0},
  {mass:Infinity,initialSpeed:20,brakingForce:4000}
 ])assert.throws(()=>brakingModel(bad),RangeError);
});

test('chapter 03 has substantial authored reading in Japanese and English',()=>{
 const ja=energyTextbookHtml('ja'),en=energyTextbookHtml('en');
 for(const html of [ja,en]){
  assert.equal((html.match(/class="incline-reading-section"/g)||[]).length,9);
  assert.ok((html.match(/class="incline-reading-equation"/g)||[]).length>=20);
  assert.match(html,/id="energy-work-diagram"/);
  assert.match(html,/id="energy-work-results"/);
  assert.match(html,/id="energy-speed"/);
  assert.ok(!html.includes('<script'));
 }
 assert.match(ja,/台車を押す/);
 assert.match(ja,/力積/);
 assert.match(en,/trapezoid area/);
 assert.match(en,/Impulse has units/);
});
