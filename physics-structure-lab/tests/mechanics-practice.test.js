import test from 'node:test';
import assert from 'node:assert/strict';
import {mechanicsChapters} from '../mechanics-data.js';
import {mechanicsProblems,practiceSectionIds,problemsForChapter,getPracticeProblem,validatePracticeDataset,compareNumericAnswer,validatePracticeNote,makePracticeArchive,normalizePracticeArchive,mergePracticeNotes} from '../mechanics-practice-core.js';
test('the mechanics practice pathway has two questions per chapter and eight cross-chapter synthesis questions',()=>{
 assert.equal(mechanicsChapters.length,12);
 assert.equal(mechanicsProblems.length,32);
 assert.equal(practiceSectionIds.length,13);
 assert.equal(problemsForChapter('synthesis').length,8);
 for(const c of mechanicsChapters){
  const p=problemsForChapter(c.key);
  assert.equal(p.length,2,c.key);
  assert.ok(p.some(x=>x.type==='numeric'),c.key+' missing applied calculation');
  assert.ok(p.some(x=>x.type==='reasoning'),c.key+' missing explanation and interpretation');
 }
 assert.equal(validatePracticeDataset(),true);
});
test('each problem teaches conditions, multiple hints and step-by-step reasoning in both languages',()=>{
 for(const p of mechanicsProblems){
  assert.equal(p.links.every(x=>practiceSectionIds.includes(x)),true,p.id);
  assert.ok(p.steps.length>=2,p.id);
  assert.equal(p.hints.length>=2,true);
  for(const key of ['title','situation','question','assumptions','principle','interpretation','trap']){
   assert.equal(p[key].length,2,p.id+':'+key);
   assert.ok(p[key].every(s=>s.length>=8),p.id+':'+key);
  }
  for(const s of p.steps){
   assert.ok(s.tex.length>8,p.id+' formula');
   assert.ok(s.why[0].length>=8&&s.why[1].length>=8,p.id+' equation explanation');
  }
 }
});
test('calculations match independent physical reference values including negative acceleration',()=>{
 const answers={
  'force-net':2,'friction-angle':180*Math.atan(.5)/Math.PI,
  'energy-drop':Math.sqrt(98),'momentum-stick':2,'circular-acceleration':12,
  'spring-period':2*Math.PI/5,
  'gravity-orbit':Math.sqrt(3.986e14/7e6)/1000,'rotation-torque':5,
  'noninertial-bus':-4,'lagrange-frequency':5,'hamilton-energy':6.25,
  'coupled-mode':Math.sqrt(7),
  'synth-atwood':1.96,'synth-projectile':100/9.8,
  'synth-collision-energy':3,'synth-orbit-period':2*Math.PI*Math.sqrt(7e6**3/3.986e14)/60,
  'synth-pendulum':2*Math.PI*Math.sqrt(1/9.8)
 };
 for(const [id,expected] of Object.entries(answers)){
  const p=getPracticeProblem(id);
  assert.ok(p?.answer,id+' missing');
  assert.ok(Math.abs(p.answer.value-expected)<1e-8,id+' physically incorrect');
  assert.equal(compareNumericAnswer(id,String(expected)).kind,'close',id);
  assert.equal(compareNumericAnswer(id,String(expected+Math.max(.5,Math.abs(expected)*.2))).kind,'different',id);
 }
 assert.equal(mechanicsProblems.filter(p=>p.type==='numeric').length,Object.keys(answers).length);
});
test('optional numeric comparison never treats empty, invalid or conceptual writing as a score',()=>{
 assert.equal(compareNumericAnswer('force-net','').kind,'empty');
 assert.equal(compareNumericAnswer('force-net','invalid').kind,'invalid');
 assert.equal(compareNumericAnswer('force-inertia','3').kind,'not-numeric');
 assert.equal(compareNumericAnswer('unknown','3').kind,'not-numeric');
 assert.equal(compareNumericAnswer('noninertial-bus','-4').kind,'close');
 assert.equal(compareNumericAnswer('noninertial-bus','4').kind,'different');
});
const note={id:'mp-test-review-1234',problemId:'force-net',date:'2026-11-06T04:00:00Z',
 response:'I used the net force, not the applied force alone.',reflection:'Now I recognize the role of friction.',answerInput:'2'};
test('dated reflections round-trip and old notes are not silently overwritten',()=>{
 assert.equal(validatePracticeNote(note),true);
 const archive=makePracticeArchive([note]);
 assert.deepEqual(normalizePracticeArchive(JSON.parse(JSON.stringify(archive))),[note]);
 const duplicate=mergePracticeNotes([note],[note]);
 assert.equal(duplicate.notes.length,1);
 assert.equal(duplicate.skipped,1);
 const conflict=mergePracticeNotes([note],[{...note,reflection:'Different later thought'}]);
 assert.equal(conflict.notes.length,1);
 assert.equal(conflict.conflicts,1);
 assert.equal(conflict.notes[0].reflection,note.reflection);
});
test('invalid, oversized and tampered practice records are rejected',()=>{
 assert.equal(validatePracticeNote({...note,problemId:'fictional'}),false);
 assert.equal(validatePracticeNote({...note,reflection:'r'.repeat(4001)}),false);
 assert.throws(()=>normalizePracticeArchive({...makePracticeArchive([note]),version:2}));
 assert.throws(()=>normalizePracticeArchive({...makePracticeArchive([note]),notes:[note,note]}),/Duplicate/);
 assert.throws(()=>makePracticeArchive([{...note,id:'<script>'}]));
});
