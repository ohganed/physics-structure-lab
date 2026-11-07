import test from 'node:test';
import assert from 'node:assert/strict';
import {brakingModel} from '../energy-work-model.js';
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
