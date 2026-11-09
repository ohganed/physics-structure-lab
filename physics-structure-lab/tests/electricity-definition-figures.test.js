import test from 'node:test';
import assert from 'node:assert/strict';
import {electricityChapters,electricityChapterHtml} from '../electricity-lab.js';
import {electricityDefinitionFigures} from '../electricity-definition-data.js';
import {electricityDefinitionFigure} from '../electricity-definition-diagrams.js';
import {electricityFigure} from '../electricity-situation-diagrams.js';

test('33 sections inventory all 67 defined equations in both languages',()=>{
 const sections=electricityChapters.flatMap(c=>c.sections);
 assert.equal(electricityChapters.length,11);
 assert.equal(sections.length,33);
 assert.equal(Object.keys(electricityDefinitionFigures).length,33);
 assert.equal(sections.reduce((n,s)=>n+s.derivation.length,0),67);
 for(const section of sections){
  const figures=electricityDefinitionFigures[section.id];
  assert.ok(figures,section.id);
  assert.equal(figures.length,section.derivation.length,section.id);
  for(const fig of figures){
   for(const i of [0,1]){
    assert.ok(fig.title[i].length>4);
    assert.ok(fig.description[i].length>18);
   }
   assert.ok(fig.kind && fig.marks.length===2);
  }
 }
});
test('every definition diagram is independently illustrated and accessible on small screens',()=>{
 for(const [id,figs] of Object.entries(electricityDefinitionFigures))
  for(let j=0;j<figs.length;j++)
   for(const lang of ['ja','en']){
    const html=electricityDefinitionFigure(id,j,lang);
    assert.match(html,new RegExp('data-definition="'+id+':'+j+'"'));
    assert.match(html,/class="electricity-definition-grid"/);
    assert.match(html,/viewBox="0 0 560 285"/);
    assert.match(html,/viewBox="0 0 270 225"/);
    assert.equal((html.match(/role="img"/g)||[]).length,2);
    assert.match(html,/<figcaption>.+<\/figcaption>/);
    assert.doesNotMatch(html,/NaN|Infinity|undefined|<script/);
   }
});
test('all 67 diagrams appear immediately before their particular formula in both languages',()=>{
 for(let i=0;i<electricityChapters.length;i++){
  for(const lang of ['ja','en']){
   const chapter=electricityChapters[i],html=electricityChapterHtml(i,lang);
   const count=(html.match(/class="electricity-definition-figure"/g)||[]).length;
   assert.equal(count,chapter.sections.reduce((n,s)=>n+s.derivation.length,0),chapter.key+lang);
   for(const section of chapter.sections){
    const start=html.indexOf('id="electricity-'+section.id+'"');
    assert.ok(start>=0,section.id);
    const end=html.indexOf('</section>',start);
    const block=html.slice(start,end);
    assert.ok(block.indexOf('class="electricity-situation"')>=0,section.id);
    let prev=-1;
    for(let j=0;j<section.derivation.length;j++){
     const tag='data-definition="'+section.id+':'+j+'"';
     const fig=block.indexOf(tag);
     const formula=block.indexOf('class="formula tex-display"',fig);
     assert.ok(fig>prev && formula>fig,section.id+':'+j);
     const next=block.indexOf('data-definition="'+section.id+':'+(j+1)+'"',fig);
     if(next>=0)assert.ok(formula<next,section.id+':'+j);
     prev=formula;
    }
   }
  }
 }
});
test('definition figures distinguish field, flux, current and potential geometry',()=>{
 const ids=['field-definition','gauss','current-definition','potential-work','faraday','energy-flux'];
 for(const id of ids){
  const a=electricityDefinitionFigure(id,0,'ja');
  assert.ok(/電場|電束|電位|電流|磁束|電磁|ポインティング/.test(a));
  assert.match(a,/<svg[\s\S]*<line/);
 }
});
test('point-charge attraction arrows start at the physical charge centers',()=>{
 const html=electricityFigure('coulomb','力の図','ja');
 assert.match(html,/x1="180" y1="148"/);
 assert.match(html,/x1="364" y1="148"/);
});
test('charge conservation separates before and after and sums both bodies',()=>{
 const scene=electricityFigure('charged-bodies','電荷保存','ja');
 const definition=electricityDefinitionFigure('charged-bodies',0,'ja');
 assert.match(scene,/0 \+ 0 = 0/);
 assert.match(scene,/\(\+e\) \+ \(−e\) = 0/);
 assert.match(definition,/BEFORE/);
 assert.match(definition,/AFTER/);
 assert.doesNotMatch(definition,/Qbefore<\/text>/);
});
test('RC drawing has true capacitor break and separate plates rather than a bypass wire',()=>{
 const html=electricityFigure('charging','RC回路','ja');
 assert.match(html,/y1="140" x2="470" y2="140"/);
 assert.match(html,/y1="160" x2="470" y2="160"/);
 assert.doesNotMatch(html,/L440 85 L440 225/);
});
