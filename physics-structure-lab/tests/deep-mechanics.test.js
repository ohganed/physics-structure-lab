import test from 'node:test';
import assert from 'node:assert/strict';
import {mechanicsChapters} from '../mechanics-data.js';
import {mechanicsEnglish} from '../mechanics-en.js';
import {deepLessons,deepIntroHtml,deepReasoningHtml,deepWorkedExampleHtml,deepRevisitHtml,formulaReaderHtml} from '../mechanics-deep.js';
import {formulaReaders} from '../mechanics-formula-readers.js';

test('all mechanics chapters have a self-study narrative in both languages',()=>{
 const ids=mechanicsChapters.map(c=>c.key);
 assert.equal(ids.length,12);
 assert.deepEqual(Object.keys(deepLessons).sort(),ids.slice().sort());
 assert.deepEqual(Object.keys(formulaReaders).sort(),ids.slice().sort());
 assert.equal(mechanicsEnglish.length,ids.length);
 for(const [index,c] of mechanicsChapters.entries()){
  const x=deepLessons[c.key];
  assert.equal(mechanicsEnglish[index].key,c.key);
  assert.ok(x.intuition.length>=2,c.key+' needs physical intuition');
  assert.ok(x.vocabulary.length>=3,c.key+' needs terms');
  assert.ok(x.logic.length>=4,c.key+' needs reasoning steps');
  assert.ok(x.example.steps.length>=3,c.key+' needs a worked example');
  for(const pair of [...x.intuition,...x.logic,x.example.problem,x.example.conclusion,x.misconception,x.revisit]){
   assert.ok(pair.ja?.length>=15,c.key+' missing explanatory Japanese');
   assert.ok(pair.en?.length>=15,c.key+' missing explanatory English');
  }
  for(const [term,definition] of x.vocabulary){
   assert.ok(term.ja&&term.en&&definition.ja&&definition.en,c.key+' term not bilingual');
  }
  for(const [latex,explanation] of x.example.steps){
   assert.ok(latex?.length>=5,c.key+' missing worked equation');
   assert.ok(explanation.ja?.length>=10&&explanation.en?.length>=10,c.key+' missing why');
  }
 }
});
test('every formula reader explains symbols, units, validity and a limiting case',()=>{
 for(const c of mechanicsChapters){
  const item=formulaReaders[c.key];
  assert.ok(item.expression?.length>5,c.key);
  assert.ok(item.symbols?.length>=3,c.key);
  for(const field of ['meaning','unit','limit','scope']){
   assert.equal(item[field].length,2,c.key+' missing '+field);
   assert.ok(item[field][0].length>=20&&item[field][1].length>=20,c.key+' too brief '+field);
  }
  for(const entry of item.symbols){
   assert.equal(entry.length,4,c.key+' invalid symbol');
   assert.ok(entry.every(s=>typeof s==='string'&&s.length>0),c.key+' incomplete symbol');
  }
 }
});
test('self-study prose and fully worked mathematics render as optional readable sections',()=>{
 for(const c of mechanicsChapters){
  const a=deepIntroHtml(c.key);
  assert.match(a,/<details/);
  assert.match(a,/用語を一つずつ確認する/);
  const reasoning=deepReasoningHtml(c.key);
  assert.match(reasoning,/<ol class="mechanics-reasoning-sequence">/);
  const worked=deepWorkedExampleHtml(c.key);
  assert.match(worked,/data-tex=/);
  assert.match(worked,/理由/);
  const formula=formulaReaderHtml(c.key);
  assert.match(formula,/<dl class="mechanics-formula-symbols">/);
  assert.match(formula,/単位は合っているか/);
  assert.match(formula,/極端な条件でどうなる/);
  assert.match(formula,/どこまで使ってよい/);
  assert.match(deepRevisitHtml(c.key),/後で戻ってくると/);
  assert.match(formulaReaderHtml(c.key,'en'),/What happens in a limiting case/);
  assert.match(deepIntroHtml(c.key,'en'),/Start here/);
  assert.match(deepWorkedExampleHtml(c.key,'en'),/Interpret the result/);
  assert.match(deepRevisitHtml(c.key,'en'),/Return after learning/);
 }
});
test('unknown concept keys do not fabricate text, and math markup is safe',()=>{
 for(const fun of [deepIntroHtml,deepReasoningHtml,deepWorkedExampleHtml,deepRevisitHtml,formulaReaderHtml]){
  assert.equal(fun('non-existent-lesson'),'',fun.name);
 }
 const eq=formulaReaderHtml('friction');
 assert.ok(!eq.includes('<script>'));
 assert.ok(eq.includes('data-tex="'));
});
