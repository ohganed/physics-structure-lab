import test from 'node:test';
import assert from 'node:assert/strict';
import {mechanicsChapters} from '../mechanics-data.js';
import {mechanicsEnglish} from '../mechanics-en.js';
import {mechanicsOrigins,originLessonByKey,mechanicsOriginHtml} from '../mechanics-origins.js';

const keys=mechanicsChapters.map(c=>c.key).filter(key=>key!=='momentum');
test('all eleven non-momentum mechanics chapters include phenomenon-first derivations',()=>{
 assert.equal(keys.length,11);
 assert.deepEqual(Object.keys(mechanicsOrigins).sort(),[...keys].sort());
 assert.equal(mechanicsEnglish.length,mechanicsChapters.length);
 assert.equal(originLessonByKey('momentum'),null);
 assert.equal(originLessonByKey('unknown'),null);
});
test('each chapter starts from a physical contrast, then models and explains every algebraic step',()=>{
 for(const key of keys){
  const origin=originLessonByKey(key);
  for(const field of ['title','observation','representation','prior','meaning','bounds','connection']){
   const pair=origin[field];assert.equal(pair.length,2,key+' '+field);
   assert.ok(pair[0].length>=(field==='title'?8:25)&&pair[1].length>=(field==='title'?15:25),key+' missing explanatory bilingual '+field);
  }
  assert.ok(origin.steps.length>=5,key+' requires a complete chain of reasoning');
  for(const [i,step] of origin.steps.entries()){
   assert.ok(step.tex?.length>=5,key+' equation '+i);
   for(const field of ['question','why']){
    assert.equal(step[field].length,2,key+' step '+i+' '+field);
    assert.ok(step[field][0].length>=(field==='question'?6:13)&&step[field][1].length>=(field==='question'?12:20),key+' too abbreviated: '+field+' '+i);
   }
  }
 }
});
test('all eleven origins render bilingual, explicit model limitations and legible KaTeX hooks',()=>{
 for(const key of keys){
  for(const language of ['ja','en']){
   const html=mechanicsOriginHtml(key,language);
   assert.match(html,/mechanics-origin-path/);
   assert.match(html,/mechanics-origin-steps/);
   assert.match(html,/mechanics-origin-boundary/);
   assert.match(html,/data-tex=/);
   assert.match(html,/<details class="mechanics-origin-derivation" open>/);
   assert.ok(!html.includes('<script'),key);
   assert.ok(html.includes(language==='en'?'What the relation tells us':'式が表していること'));
  }
 }
 assert.equal(mechanicsOriginHtml('momentum'),'');
 assert.equal(mechanicsOriginHtml('nonexistent'),'');
});
test('experimental laws are distinguished from definitions and their derivation conditions',()=>{
 assert.match(mechanicsOrigins.force.prior[0],/定義からは決まらない/);
 assert.match(mechanicsOrigins.friction.steps[3].why[0],/近似/);
 assert.match(mechanicsOrigins.gravitation.prior[0],/物理法則/);
 assert.match(mechanicsOrigins.energy.steps[4].tex,/mv/);
 assert.match(mechanicsOrigins.rotation.steps[3].tex,/tau/);
 assert.match(mechanicsOrigins.noninertial.steps[4].tex,/app/);
 assert.match(mechanicsOrigins.oscillation.steps[4].tex,/omega/);
 assert.match(mechanicsOrigins.coupled.steps[4].tex,/omega/);
});
test('analytical mechanics retains intermediate variation and canonical-derivation steps',()=>{
 const lagrange=mechanicsOrigins.lagrange;
 const hamilton=mechanicsOrigins.hamilton;
 assert.ok(lagrange.steps.length>=8);
 assert.ok(lagrange.steps.some(s=>s.tex.includes('\\delta S=')));
 assert.ok(lagrange.steps.some(s=>s.tex.includes('\\partial L')));
 assert.ok(lagrange.steps.some(s=>s.why[0].includes('部分積分')));
 assert.ok(hamilton.steps.length>=8);
 assert.ok(hamilton.steps.some(s=>s.tex.includes('dH=')));
 assert.ok(hamilton.steps.some(s=>s.tex.includes('\\frac{\\partial H}')));
});

test('chapter headings are quiet topics, while mathematical reasons stay in the paragraphs',()=>{
 for(const key of keys){
  const lesson=mechanicsOrigins[key];
  assert.ok(!/[!?！？]/.test(lesson.title[0]),key+' Japanese title is too rhetorical');
  assert.ok(!/[!?！？]/.test(lesson.title[1]),key+' English title is too rhetorical');
  const html=mechanicsOriginHtml(key,'ja');
  assert.ok(!html.includes('ここで初めて'),key+' pushes a scripted discovery');
  assert.ok(!html.includes('暗記ではありません'),key+' makes an unnecessary declaration');
  assert.ok(!html.includes('物理学史における発見順序'),key+' repeats meta-instructions inside the lesson');
 }
 assert.match(mechanicsOrigins.energy.steps[5].question[0],/K = ½mv² について/);
 const sequence=mechanicsOrigins.energy.steps.map(s=>s.tex);
 assert.ok(sequence.indexOf('v-v_0=a\\Delta t')<sequence.findIndex(s=>s.includes('mv^2')));
});
