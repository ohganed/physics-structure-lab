import test from 'node:test';
import assert from 'node:assert/strict';
import { mechanicsEnglish } from '../mechanics-en.js';
import { mechanicsChapters } from '../mechanics-data.js';
import { navigationLabels } from '../language.js';
test('all twelve mechanics chapters have authored English content',()=>{
 assert.equal(mechanicsEnglish.length,12);
 mechanicsEnglish.forEach((en,i)=>{
  const ja=mechanicsChapters[i];
  assert.equal(en.key,ja.key);
  assert.equal(en.model,ja.model);
  assert.equal(en.steps.length,ja.steps.length);
  for(const key of ['name','level','phenomenon','definition','why','law','conditions','setter','solver','self','university','problem','answer']){
   assert.ok(typeof en[key]==='string'&&en[key].trim().length>=(key==='answer'?4:7),en.key+' missing '+key);
  }
  assert.ok(!/[\u3040-\u30ff\u4e00-\u9fff]/.test(en.definition),en.key+' definition not English');
  en.steps.forEach((step,j)=>{
   assert.equal(step.length,3);
   assert.equal(step[1],ja.steps[j][1],'Same equation in both language editions');
   assert.ok(step[0]&&step[2]);
  });
 });
});
test('navigation entries contain both Japanese and English labels',()=>{
 for(const [page,labels] of Object.entries(navigationLabels)){
  assert.equal(labels.length,2);
  assert.ok(labels[0]&&labels[1],page);
 }
});
