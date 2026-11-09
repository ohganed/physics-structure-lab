import test from 'node:test';
import assert from 'node:assert/strict';
import {electricityChapters,electricityChapterHtml,electricityReasoning} from '../electricity-lab.js';
import {twoSourceElectricField,electricFieldExplorerHtml,installElectricFieldExplorer} from '../electric-field-explorer.js';

test('all 33 electricity sections have reasoning, bilingual explanations and their 67 definition diagrams',()=>{
 const sections=electricityChapters.flatMap(ch=>ch.sections);
 assert.equal(sections.length,33);
 assert.equal(Object.keys(electricityReasoning).length,33);
 let equations=0,steps=0;
 for(const [index,ch] of electricityChapters.entries()){
  const ja=electricityChapterHtml(index,'ja'),en=electricityChapterHtml(index,'en');
  const count=ch.sections.reduce((n,sec)=>n+sec.derivation.length,0);
  equations+=count;
  assert.equal((ja.match(/class="electricity-reasoning-expansion"/g)||[]).length,count);
  assert.equal((en.match(/class="electricity-reasoning-expansion"/g)||[]).length,count);
  assert.equal((ja.match(/class="electricity-definition-figure"/g)||[]).length,count);
  assert.equal((en.match(/class="electricity-definition-figure"/g)||[]).length,count);
  for(const sec of ch.sections){
   const explanations=electricityReasoning[sec.id];
   assert.equal(explanations.length,sec.derivation.length,sec.id);
   for(const item of explanations){
    assert.ok(item.kind,sec.id);
    assert.ok(item.steps.length>=3,sec.id);
    steps+=item.steps.length;
    for(const pair of item.steps){
     assert.ok(pair[0].length>25,'Japanese text '+sec.id);
     assert.ok(pair[1].length>25,'English text '+sec.id);
    }
   }
  }
 }
 assert.equal(equations,67);
 assert.equal(steps,212);
});
test('physical definitions, measured laws and derived equations are not conflated',()=>{
 assert.equal(electricityReasoning.coulomb[0].kind,'empirical');
 assert.equal(electricityReasoning['field-definition'][0].kind,'definition');
 assert.equal(electricityReasoning.gauss[1].kind,'law');
 assert.equal(electricityReasoning['current-definition'][0].kind,'definition');
 assert.equal(electricityReasoning['magnetic-force'][0].kind,'law');
 assert.equal(electricityReasoning['energy-flux'][1].kind,'definition');
});
test('field explorer preserves vector direction and supports zero source charge',()=>{
 const m=twoSourceElectricField({q1MicroC:2,q2MicroC:-2,probeX:0,probeY:.3});
 assert.ok(m.total.x>0);
 assert.ok(Math.abs(m.total.y)<1e-8);
 const z=twoSourceElectricField({q1MicroC:0,q2MicroC:0,probeX:0,probeY:.3});
 assert.equal(z.total.magnitude,0);
 for(const lang of ['ja','en'])assert.equal((electricFieldExplorerHtml(lang).match(/role="img"/g)||[]).length,2);
});
test('interactive field explorer redraws both diagrams and cleans up listeners',()=>{
 const controls={};
 for(const k of ['q1','q2','x','y']){
  controls['#electricity-field-'+k]={value:({q1:'2',q2:'-2',x:'0',y:'.3'})[k],handler:null,
   addEventListener(_,f){this.handler=f;},removeEventListener(_,f){if(this.handler===f)this.handler=null;}};
 }
 const geometry={innerHTML:''},vectors={innerHTML:''},result={textContent:''};
 controls['#electricity-field-geometry']=geometry;
 controls['#electricity-field-vectors']=vectors;
 controls['#electricity-field-values']=result;
 const host={querySelector:key=>controls[key]};
 const root={querySelector:key=>key==='#electricity-field-explorer'?host:null};
 const dispose=installElectricFieldExplorer(root,'ja');
 assert.match(geometry.innerHTML,/q₁/);
 assert.match(vectors.innerHTML,/E₁/);
 assert.match(result.textContent,/N\/C/);
 const prev=geometry.innerHTML;
 controls['#electricity-field-x'].value='.2';controls['#electricity-field-x'].handler();
 assert.notEqual(geometry.innerHTML,prev);
 dispose();
 assert.equal(controls['#electricity-field-x'].handler,null);
});
