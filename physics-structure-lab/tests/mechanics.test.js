import test from 'node:test';
import assert from 'node:assert/strict';
import { mechanicsEvaluate } from '../mechanics-lab.js';
import { mechanicsChapters } from '../mechanics-data.js';
const close=(actual,expected)=>assert.ok(Math.abs(actual-expected)<1e-7,`Expected ${expected}, got ${actual}`);

test('all mechanics chapters have core intellectual scaffolding',()=>{
 assert.equal(mechanicsChapters.length,12);
 for(const c of mechanicsChapters){
  for(const key of ['name','phenomenon','definition','why','law','conditions','setter','solver','self','university','problem','answer','model'])assert.ok(c[key],c.name+': '+key);
  assert.ok(c.steps.length>=3,c.name);
  for(const step of c.steps)assert.equal(step.length,3);
 }
});
test('force and incline compare formulas',()=>{
 close(mechanicsEvaluate('force',6,2).result,3);
 close(mechanicsEvaluate('incline',30,2).result,4.9);
});
test('energy and collision calculations',()=>{
 close(mechanicsEvaluate('energy',5,2).result,Math.sqrt(98));
 close(mechanicsEvaluate('collision',2,1).result,2);
});
test('circular acceleration and spring period',()=>{
 close(mechanicsEvaluate('circular',6,3).result,12);
 close(mechanicsEvaluate('spring',2,50).result,2*Math.PI/5);
});
test('gravity, torque, and parameter validation',()=>{
 close(mechanicsEvaluate('gravity',7000,1).result,Math.sqrt(3.986004418e14/7000000)/1000);
 close(mechanicsEvaluate('torque',.5,10).result,5);
 assert.throws(()=>mechanicsEvaluate('force',0,2));
});
