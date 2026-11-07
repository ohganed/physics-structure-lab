import test from 'node:test';
import assert from 'node:assert/strict';
import {solveTwoBlock} from '../two-block-model.js';
import {twoBlockReading} from '../two-block-textbook-data.js';
import {twoBlockTextbookHtml} from '../two-block-textbook.js';

const near=(actual,expected)=>assert.ok(Math.abs(actual-expected)<1e-10,actual+' != '+expected);

test('push A produces the correct contact force and signed acceleration',()=>{
 const s=solveTwoBlock({massA:2,massB:3,force:10,push:'A'});
 near(s.acceleration,2);
 near(s.contact,6);
 near(s.contactOnA,-6);
 near(s.contactOnB,6);
 near(s.netOnA,4);
 near(s.netOnB,6);
 near(s.netOnA,s.massA*s.acceleration);
 near(s.netOnB,s.massB*s.acceleration);
});

test('pushing B in the opposite direction changes contact but not acceleration magnitude',()=>{
 const s=solveTwoBlock({massA:2,massB:3,force:10,push:'B'});
 near(s.acceleration,-2);
 near(s.contact,4);
 near(s.netOnA,-4);
 near(s.netOnB,-6);
 near(s.netOnA,s.massA*s.acceleration);
 near(s.netOnB,s.massB*s.acceleration);
});

test('force balance and Newton third-law hold across model parameters',()=>{
 for(const push of ['A','B'])for(const massA of [0.5,2,10])for(const massB of [1,3,20])for(const force of [0,1,15,40]){
  const s=solveTwoBlock({massA,massB,force,push});
  near(s.contactOnA+s.contactOnB,0);
  near(s.netOnA+s.netOnB,s.combinedNetForce);
  near(s.netOnA,massA*s.acceleration);
  near(s.netOnB,massB*s.acceleration);
  assert.ok(s.contact>=0);
 }
});

test('zero applied force gives zero acceleration and zero contact',()=>{
 const s=solveTwoBlock({massA:2,massB:3,force:0});
 near(s.acceleration,0);
 near(s.contact,0);
});

test('rejects invalid physics inputs',()=>{
 for(const bad of [
  {massA:0,massB:2,force:3},
  {massA:2,massB:-2,force:3},
  {massA:2,massB:3,force:-1},
  {massA:NaN,massB:3,force:1},
  {massA:2,massB:3,force:1,push:'C'}
 ])assert.throws(()=>solveTwoBlock(bad),RangeError);
});

test('new chapter reading has full Japanese and English sections with equations',()=>{
 assert.ok(twoBlockReading.length>=8);
 for(const section of twoBlockReading){
  assert.ok(section.title[0].length>4 && section.title[1].length>4);
  assert.ok(section.parts.length>=2);
  for(const p of [...section.parts,section.after])assert.ok(p[0].length>15&&p[1].length>15);
  for(const eq of section.equations)assert.ok(eq.formula&&eq.ja&&eq.en);
 }
 const ja=twoBlockTextbookHtml('ja');
 const en=twoBlockTextbookHtml('en');
 assert.ok(ja.includes('二つの台車')&&ja.includes('id="two-block-diagram"'));
 assert.ok(en.includes('The third law')&&en.includes('id="two-block-push"'));
});
