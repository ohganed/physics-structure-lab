import test from 'node:test';
import assert from 'node:assert/strict';
import {universityBridgeLessons} from '../mechanics-university-bridge-data.js';
import {universityBridgeFigure,universityBridgeKinds,mechanicsUniversityBridgeHtml} from '../mechanics-university-bridge.js';

test('both university transitions contain a visible motivation and 9 distinct concept diagrams',()=>{
 assert.equal(universityBridgeLessons.lagrange.stages.length,4);
 assert.equal(universityBridgeLessons.hamilton.stages.length,5);
 assert.equal(universityBridgeKinds.length,9);
 for(const [key,lesson] of Object.entries(universityBridgeLessons)){
  assert.ok(lesson.lead[0].length>50&&lesson.lead[1].length>50);
  for(const stage of lesson.stages){
   assert.ok(universityBridgeKinds.includes(stage.kind));
   assert.ok(stage.prose.every(t=>t.length>70),stage.kind);
   assert.ok(stage.formula.length>0);
   for(const lang of ['ja','en']){
    const html=universityBridgeFigure(stage.kind,stage.title[lang==='en'?1:0],lang);
    assert.match(html,new RegExp('data-bridge-figure="'+stage.kind+'"'));
    assert.match(html,/role="img"/);
    assert.match(html,/<figcaption>/);
    assert.doesNotMatch(html,/NaN|undefined|Infinity/);
   }
  }
 }
});

test('every new definition has a diagram before its first formula in each language',()=>{
 for(const key of ['lagrange','hamilton']){
  for(const lang of ['ja','en']){
   const html=mechanicsUniversityBridgeHtml(key,lang);
   const stages=universityBridgeLessons[key].stages;
   assert.equal((html.match(/class="mechanics-university-figure"/g)||[]).length,stages.length);
   assert.equal((html.match(/data-mech-bridge-back=/g)||[]).length,2);
   assert.equal((html.match(/class="formula tex-display"/g)||[]).length,stages.reduce((n,s)=>n+s.formula.length,0));
   for(const stage of stages){
    const p=html.indexOf('data-bridge-step="'+stage.kind+'"');
    const end=html.indexOf('</section>',p),block=html.slice(p,end);
    const figure=block.indexOf('data-bridge-figure="'+stage.kind+'"');
    const formula=block.indexOf('class="formula tex-display"');
    assert.ok(p>=0&&figure>=0&&formula>figure,stage.kind+' '+lang);
    assert.ok(block.indexOf('class="mechanics-university-stage-note"')>formula);
   }
  }
 }
});

test('Lagrangian introduction uses constrained geometry, energy, stationary action, then Newtonian agreement',()=>{
 const stages=universityBridgeLessons.lagrange.stages;
 assert.deepEqual(stages.map(s=>s.kind),['constraint','energy','paths','result']);
 assert.match(stages[0].formula[0],/q=\\theta/);
 assert.match(stages[1].formula[1],/L=K-U/);
 assert.match(stages[2].formula[1],/\\delta S=0/);
 assert.match(stages[3].formula.at(-1),/\\ddot\\theta/);
 assert.match(stages[2].note[1],/need not mean minimal/i);
});

test('Hamiltonian introduction starts from original spring force, then state, canonical momentum and H',()=>{
 const stages=universityBridgeLessons.hamilton.stages;
 assert.deepEqual(stages.map(s=>s.kind),['same-position','newton-state','conjugate','hamilton-energy','phase']);
 assert.match(stages[0].formula[0],/F=-kq/);
 assert.match(stages[1].formula[0],/P=m\\dot q/);
 assert.match(stages[2].formula[1],/p=\\frac\{\\partial L\}/);
 assert.match(stages[3].formula[0],/H=p\\dot q-L/);
 assert.match(stages[4].formula.at(-1),/m\\ddot q\+kq=0/);
 assert.match(stages[3].note[1],/not always/i);
});

test('visual geometry respects spring support and phase-plane velocity signs',()=>{
 const scene=universityBridgeFigure('same-position','Two states','en');
 assert.match(scene,/y1="112" x2="500" y2="112"/);
 assert.match(scene,/y1="236" x2="500" y2="236"/);
 assert.match(scene,/x="230" y="54" width="82" height="58"/);
 assert.match(scene,/x="230" y="178" width="82" height="58"/);
 const phase=universityBridgeFigure('phase','Phase plane','en');
 assert.match(phase,/p &gt; 0|p > 0/);
 assert.match(phase,/p &lt; 0|p < 0/);
});

test('chapter return navigation provides real prerequisite indices',()=>{
 const a=mechanicsUniversityBridgeHtml('lagrange','ja'),b=mechanicsUniversityBridgeHtml('hamilton','ja');
 assert.match(a,/data-mech-bridge-back="5"/);
 assert.match(a,/data-mech-bridge-back="2"/);
 assert.match(b,/data-mech-bridge-back="5"/);
 assert.match(b,/data-mech-bridge-back="9"/);
 assert.equal(mechanicsUniversityBridgeHtml('force','ja'),'');
});
