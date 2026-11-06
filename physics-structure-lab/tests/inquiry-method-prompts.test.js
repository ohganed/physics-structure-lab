import test from 'node:test';
import assert from 'node:assert/strict';
import {inquiryScenarios} from '../inquiry-core.js';
import {inquiryMethodPrompts,promptsFor} from '../inquiry-method-prompts.js';

test('each inquiry has authored Japanese and English optional scientific reasoning prompts',()=>{
 const keys=['system','measure','isolate','challenge'];
 for(const scenario of inquiryScenarios){
  const prompt=promptsFor(scenario.id);
  assert.ok(prompt,scenario.id+' has no scaffold');
  for(const key of keys){
   assert.equal(prompt[key].length,2,scenario.id+':'+key);
   assert.ok(prompt[key][0].length>12);
   assert.ok(prompt[key][1].length>25);
  }
 }
});
test('prompts do not create new compulsory progression keys or unknown lesson states',()=>{
 assert.equal(promptsFor('unknown'),null);
 assert.deepEqual(Object.keys(inquiryMethodPrompts).sort(),inquiryScenarios.map(x=>x.id).sort());
});
