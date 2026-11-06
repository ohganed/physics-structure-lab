import test from 'node:test';
import assert from 'node:assert/strict';
import {mechanicsChapters} from '../mechanics-data.js';
import {mechanicsEnglish} from '../mechanics-en.js';
import {deepLessons,deepIntroHtml,deepReasoningHtml,deepWorkedExampleHtml,deepRevisitHtml} from '../mechanics-deep.js';

test('every mechanics chapter has substantial, genuinely bilingual self-study explanations',()=>{
 assert.equal(Object.keys(deepLessons).length,12);
 for(const c of mechanicsChapters){
  const v=deepLessons[c.key];
  assert.ok(v,'Missing deep explanation for '+c.key);
  assert.ok(v.intuition.length>=2,c.key+' needs an intuitive entry');
  assert.ok(v.vocabulary.length>=3,c.key+' needs defined terms');
  assert.ok(v.logic.length>=4,c.key+' needs a transparent reasoning sequence');
  assert.ok(v.example?.steps.length>=3,c.key+' needs intermediate calculation steps');
  for(const field of ['misconception','revisit'])assert.ok(v[field],c.key+' needs '+field);
  for(const item of [...v.intuition,...v.logic,v.misconception,v.revisit,v.example.problem,v.example.conclusion]){
   assert.ok(item?.ja?.length>18,c.key+' Japanese explanation missing');
   assert.ok(item?.en?.length>25,c.key+' English explanation missing');
  }
  v.vocabulary.forEach(([term,meaning])=>{
   for(const language of ['ja','en']){
    assert.ok(term[language]?.length>1);
    assert.ok(meaning[language]?.length>22);
   }
  });
  v.example.steps.forEach(([latex,reason])=>{
   assert.ok(latex.length>=8);
   assert.ok(reason.ja.length>12 && reason.en.length>12);
  });
 }
});
test('deep explanations are matched by stable chapter keys in the English and Japanese editions',()=>{
 assert.deepEqual(mechanicsChapters.map(x=>x.key),mechanicsEnglish.map(x=>x.key));
 const sourceKeys=new Set(mechanicsChapters.map(c=>c.key));
 assert.deepEqual(Object.keys(deepLessons).sort(),[...sourceKeys].sort());
});
test('all chapters can be read in Japanese and English without gating',()=>{
 for(const c of mechanicsChapters){
  for(const language of ['ja','en']){
   const intro=deepIntroHtml(c.key,language);
   const reasoning=deepReasoningHtml(c.key,language);
   const example=deepWorkedExampleHtml(c.key,language);
   const revisit=deepRevisitHtml(c.key,language);
   assert.match(intro,/details/);
   assert.match(reasoning,/details/);
   assert.match(example,/tex-display/);
   assert.match(example,/data-tex=/);
   assert.match(revisit,/KNOWLEDGE GROWS THROUGH CONNECTIONS/);
   assert.ok(![intro,reasoning,example,revisit].some(h=>/disabled|required=|data-complete=/.test(h)));
   if(language==='ja')assert.match(intro,/初めて学ぶ人へ/);
   else assert.match(intro,/Start here/);
  }
 }
 assert.equal(deepIntroHtml('not-a-chapter'), '');
});
test('worked-example mathematics and bilingual labels render without accidentally injecting raw HTML',()=>{
 const html=deepWorkedExampleHtml('force','en');
 assert.match(html,/F_\{/);
 assert.match(html,/right/);
 assert.ok(html.includes('data-tex="'));
 const japanese=deepWorkedExampleHtml('friction','ja');
 assert.ok(japanese.includes('26.6'));
});
