import test from 'node:test';
import assert from 'node:assert/strict';
import {electricityChapters,electricityPage} from '../electricity-lab.js';
import {electricityDerivationNotes} from '../electricity-derivation-notes.js';
import {electricityWorkedExamples} from '../electricity-worked-examples.js';
import {electricityExampleFigure} from '../electricity-example-figures.js';
test('every electricity section has substantive bilingual reasoning for each formula',()=>{
 for(const chapter of electricityChapters){
  for(const section of chapter.sections){
   const notes=electricityDerivationNotes[section.id];
   assert.equal(notes.length,section.derivation.length,section.id);
   assert.ok(notes.every(pair=>pair[0].length>20&&pair[1].length>20),section.id);
  }
 }
});
test('each chapter has a new numerical setup and 3 justified calculation steps',()=>{
 for(const ch of electricityChapters){
  const ex=electricityWorkedExamples[ch.key];
  assert.ok(ex,ch.key);
  assert.ok(ex.problem[0].length>30&&ex.problem[1].length>30);
  assert.equal(ex.steps.length,3,ch.key);
  for(const s of ex.steps){
   assert.ok(s.formula.length>8);
   assert.ok(s.explanation[0].length>15&&s.explanation[1].length>15);
  }
  for(const lang of ['ja','en']){
   const fig=electricityExampleFigure(ch.key,lang);
   assert.match(fig,/viewBox="0 0 560 332"/);
   assert.match(fig,/role="img"/);
   assert.match(fig,/<figcaption>/);
  }
 }
});
test('numeric worked-example solutions agree with known reference results',()=>{
 const eq=(a,b,tol)=>assert.ok(Math.abs(a-b)<=tol);
 eq(8.99e9*6e-12/.09,.5993333333,.001);
 eq(8.99e9*1e-9/(.2**2),224.75,.01);
 eq(300*.04,12,1e-12);
 eq(.5*(8.85e-12*.02/.001)*100**2,8.85e-7,1e-10);
 eq(2/(8.5e28*1.602e-19*1e-6),1.46875e-4,1e-7);
 eq(9/6+9/3,4.5,1e-12);
 eq(9*(1-Math.exp(-1)),5.689085,.001);
 eq((1e-6*100)/(1e-6*.1),1000,1e-8);
 eq(200*(.02-.005)/.1,30,1e-8);
 eq(100/Math.sqrt(2),70.710678,.01);
});
