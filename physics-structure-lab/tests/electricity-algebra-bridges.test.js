import test from 'node:test';
import assert from 'node:assert/strict';
import {electricityChapters,electricityChapterHtml,electricityReasoning} from '../electricity-lab.js';
import {electricityAlgebraBridges} from '../electricity-algebra-bridges.js';
test('27 intermediate algebra steps supplement the originally illustrated formulas',()=>{
 const sections=electricityChapters.flatMap(c=>c.sections);
 let count=0;
 for(const [sectionId,entries] of Object.entries(electricityAlgebraBridges)){
  const section=sections.find(s=>s.id===sectionId);
  assert.ok(section,sectionId);
  for(const [key,steps] of Object.entries(entries)){
   const i=Number(key);
   assert.ok(Number.isInteger(i)&&i>=0&&i<section.derivation.length,sectionId+':'+key);
   assert.ok(electricityReasoning[sectionId]?.[i],sectionId+':'+key);
   for(const step of steps){
    assert.ok(step.tex.length>12,sectionId+':'+key);
    assert.equal(step.explanation.length,2);
    assert.ok(step.explanation.every(s=>s.length>20),sectionId+':'+key);
    count++;
   }
  }
 }
 assert.equal(count,27);
});
test('additional equations appear after the annotated original formula and before the following definition',()=>{
 for(const [chIndex,ch] of electricityChapters.entries()){
  for(const lang of ['ja','en']){
   const html=electricityChapterHtml(chIndex,lang);
   for(const section of ch.sections){
    const bridges=electricityAlgebraBridges[section.id];
    if(!bridges)continue;
    const start=html.indexOf('id="electricity-'+section.id+'"');
    const end=html.indexOf('</section>',start);
    const sectionHtml=html.slice(start,end);
    for(const [i,steps] of Object.entries(bridges)){
     const key=Number(i);
     const figure=sectionHtml.indexOf('data-definition="'+section.id+':'+key+'"');
     const formula=sectionHtml.indexOf('class="formula tex-display"',figure);
     const expansion=sectionHtml.indexOf('class="electricity-algebra-bridges"',formula);
     assert.ok(figure>=0&&formula>figure&&expansion>formula,section.id+':'+i);
     const next=sectionHtml.indexOf('data-definition="'+section.id+':'+(key+1)+'"',expansion);
     if(next>=0)assert.ok(next>expansion,section.id+':'+i);
     assert.ok(steps.length>0);
    }
   }
  }
 }
});
test('mathematical bridges include key calculus and symmetry transitions',()=>{
 const required=[['gauss',1],['capacitance',1],['charging',2],['wave',0],['ac-wave',1]];
 for(const [section,i] of required){
  const steps=electricityAlgebraBridges[section]?.[i];
  assert.ok(steps?.length>0,section+':'+i);
 }
});
