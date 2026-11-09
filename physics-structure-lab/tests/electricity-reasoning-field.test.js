import test from 'node:test';
import assert from 'node:assert/strict';
import {electricityChapters,electricityChapterHtml} from '../electricity-lab.js';
import {electricityReasoningPart1} from '../electricity-reasoning-part1.js';
import {twoSourceElectricField,electricFieldDiagrams,electricFieldExplorerHtml} from '../electric-field-explorer.js';
const almost=(a,b,tol=1e-8)=>assert.ok(Math.abs(a-b)<tol,'Expected '+a+' ≈ '+b);

test('the first four electricity chapters contain bilingual, structured reasoning for every formula',()=>{
 const chapters=electricityChapters.slice(0,4);
 assert.equal(chapters.length,4);
 assert.equal(Object.keys(electricityReasoningPart1).length,12);
 let steps=0;
 for(const ch of chapters){
  const htmlJa=electricityChapterHtml(electricityChapters.indexOf(ch),'ja');
  const htmlEn=electricityChapterHtml(electricityChapters.indexOf(ch),'en');
  for(const sec of ch.sections){
   const entries=electricityReasoningPart1[sec.id];
   assert.equal(entries.length,sec.derivation.length,sec.id);
   for(let j=0;j<entries.length;j++){
    const item=entries[j];
    assert.ok(item.kind,sec.id);
    assert.ok(item.steps.length>=3,sec.id);
    for(const pair of item.steps){
     assert.ok(pair[0].length>30,sec.id+' Japanese');
     assert.ok(pair[1].length>30,sec.id+' English');
    }
    steps+=item.steps.length;
   }
  }
  assert.equal((htmlJa.match(/class="electricity-reasoning-expansion"/g)||[]).length,
    ch.sections.reduce((n,sec)=>n+sec.derivation.length,0));
  assert.equal((htmlEn.match(/class="electricity-reasoning-expansion"/g)||[]).length,
    ch.sections.reduce((n,sec)=>n+sec.derivation.length,0));
  assert.ok(htmlJa.includes('この式の位置づけ'));
  assert.ok(htmlEn.includes('Type of relation'));
 }
 assert.equal(steps,78);
});
test('empirical Coulomb law and electric field definition are classified distinctly',()=>{
 assert.equal(electricityReasoningPart1.coulomb[0].kind,'empirical');
 assert.equal(electricityReasoningPart1['field-definition'][0].kind,'definition');
 assert.equal(electricityReasoningPart1.capacitance[0].kind,'definition');
 assert.equal(electricityReasoningPart1.gauss[1].kind,'law');
});
test('equal positive sources produce a vertically upward field on the symmetry axis',()=>{
 const m=twoSourceElectricField({q1MicroC:2,q2MicroC:2,probeX:0,probeY:.3});
 almost(m.total.x,0);
 assert.ok(m.total.y>0);
 almost(m.source1.x,-m.source2.x);
 almost(m.source1.y,m.source2.y);
});
test('equal opposite sources produce a horizontal field toward the negative source',()=>{
 const m=twoSourceElectricField({q1MicroC:2,q2MicroC:-2,probeX:0,probeY:.3});
 almost(m.total.y,0);
 assert.ok(m.total.x>0);
 almost(m.source1.x,m.source2.x);
 almost(m.source1.y,-m.source2.y);
});
test('electric field inverse square, zero charge and signed superposition',()=>{
 const a=twoSourceElectricField({q1MicroC:1,q2MicroC:0,probeX:-.3,probeY:.2});
 const b=twoSourceElectricField({q1MicroC:1,q2MicroC:0,probeX:-.3,probeY:.4});
 almost(a.source1.magnitude/b.source1.magnitude,4);
 almost(a.source2.magnitude,0);
 const c=twoSourceElectricField({q1MicroC:0,q2MicroC:0,probeX:.1,probeY:.3});
 almost(c.total.magnitude,0);
 almost(a.total.x,a.source1.x+a.source2.x);
 almost(a.total.y,a.source1.y+a.source2.y);
});
test('invalid source and probe parameters are rejected',()=>{
 for(const opts of [{probeY:0},{probeY:1},{probeX:1},{q1MicroC:Infinity},{q2MicroC:11},{probeY:NaN}]){
  assert.throws(()=>twoSourceElectricField(opts),RangeError);
 }
});
test('interactive diagram includes two distinct SVGs, four accessible sliders and clear assumptions',()=>{
 for(const lang of ['ja','en']){
  const html=electricFieldExplorerHtml(lang);
  assert.equal((html.match(/role="img"/g)||[]).length,2);
  for(const id of ['q1','q2','x','y']){
   assert.match(html,new RegExp('id="electricity-field-'+id+'"'));
   assert.match(html,new RegExp('for="electricity-field-'+id+'"'));
  }
  const fig=electricFieldDiagrams({q1MicroC:2,q2MicroC:-2,probeX:.1,probeY:.35});
  assert.match(fig.geometry,/q₁/);
  assert.match(fig.geometry,/q₂/);
  assert.match(fig.vectors,/E₁/);
  assert.match(fig.vectors,/E₂/);
  assert.match(fig.vectors,/E = E₁ \+ E₂/);
  assert.doesNotMatch(fig.geometry+fig.vectors,/NaN|Infinity/);
 }
});
test('electric-field explorer is embedded in the field-lines section of chapter 2',()=>{
 const chapter=electricityChapterHtml(1,'ja');
 const start=chapter.indexOf('id="electricity-field-lines"');
 const graph=chapter.indexOf('id="electricity-field-explorer"');
 assert.ok(start>0&&graph>start);
 assert.ok(!electricityChapterHtml(0,'ja').includes('electricity-field-explorer'));
});
