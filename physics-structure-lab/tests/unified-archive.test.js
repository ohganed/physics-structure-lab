import test from 'node:test';
import assert from 'node:assert/strict';
import {createNotebookExport,createUnifiedArchive,createComprehensiveArchive,normalizeNotebook,mergeNotebooks} from '../knowledge-journeys-core.js';
import {evaluateInquiry} from '../inquiry-core.js';
const observation={concept:'velocity',related:'circular',note:'Direction matters even if speed is constant.',date:'2026-11-06T00:00:00Z'};
const investigation={
 id:'inq-abc1234567',scenario:'fall',date:'2026-11-06T00:00:00Z',
 question:'Does mass change the predicted falling time?',hypothesis:'Maybe.',
 interpretation:'It does not in this ideal model.',nextQuestion:'What about air resistance?',
 trials:[evaluateInquiry('fall',{mass:2,height:10})]
};
test('unified v2 archive round-trips inquiry evidence and older notes',()=>{
 const obj=createUnifiedArchive([observation],[],[],[investigation],'2026-11-06T01:00:00Z');
 assert.equal(obj.version,2);
 assert.equal(obj.investigations.length,1);
 assert.deepEqual(normalizeNotebook(JSON.parse(JSON.stringify(obj))).investigations,[investigation]);
});
test('older v1 archives remain valid and merge without removing new evidence',()=>{
 const v1=createNotebookExport([observation],[],[]);
 assert.equal(v1.version,1);
 const imported=normalizeNotebook(JSON.parse(JSON.stringify(v1)));
 assert.deepEqual(Object.keys(imported).sort(),['links','notes','revisits']);
 const current={notes:[],links:[],revisits:[],investigations:[investigation]};
 const combined=mergeNotebooks(current,imported);
 assert.equal(combined.investigations.length,1);
 assert.equal(combined.notes.length,1);
});
test('repeated archive import cannot double count an investigation',()=>{
 const archive=createUnifiedArchive([],[],[],[investigation]);
 const existing={notes:[],links:[],revisits:[],investigations:[investigation]};
 const combined=mergeNotebooks(existing,normalizeNotebook(archive));
 assert.equal(combined.investigations.length,1);assert.equal(combined.investigationsSkipped,1);
});
test('conflicting inquiry identifiers do not silently overwrite earlier experiment records',()=>{
 const changed={...investigation,interpretation:'Completely different conclusion'};
 const existing={notes:[],links:[],revisits:[],investigations:[investigation]};
 const merged=mergeNotebooks(existing,{notes:[],links:[],revisits:[],investigations:[changed]});
 assert.equal(merged.investigations.length,1);
 assert.equal(merged.investigationsConflicts,1);
 assert.equal(merged.investigations[0].interpretation,investigation.interpretation);
});
test('tampered records and missing investigation array are rejected in v2',()=>{
 const changed={...investigation,trials:[{...investigation.trials[0],primary:9999}]};
 assert.throws(()=>normalizeNotebook(createShape([changed])),/Invalid investigation/);
 assert.throws(()=>normalizeNotebook({...createShape([investigation]),investigations:undefined}),/Invalid notebook/);
});
function createShape(entries){return {kind:'physics-structure-lab-knowledge-journal',version:2,notes:[],links:[],revisits:[],investigations:entries};}

const mechanicsNote={id:'mp-integration-1234',problemId:'force-net',date:'2026-11-06T02:30:00Z',
 response:'I add the force vectors before dividing by mass.',
 reflection:'Now I recognize the force the cart exerts on the floor is not in the cart equation.',
 answerInput:'2'};
test('version 3 archive contains earlier inquiry notes and mechanics practice',()=>{
 const archive=createComprehensiveArchive([observation],[],[],[investigation],[mechanicsNote]);
 assert.equal(archive.version,3);
 const copy=normalizeNotebook(JSON.parse(JSON.stringify(archive)));
 assert.deepEqual(copy.practice,[mechanicsNote]);
 assert.deepEqual(copy.investigations,[investigation]);
});
test('version 1 and 2 imports preserve existing version 3 mechanics practice',()=>{
 const current={notes:[],links:[],revisits:[],investigations:[investigation],practice:[mechanicsNote]};
 for(const older of [createNotebookExport([observation],[],[]),createUnifiedArchive([observation],[],[],[investigation])]){
  const merged=mergeNotebooks(current,normalizeNotebook(older));
  assert.equal(merged.practice.length,1);
  assert.equal(merged.practice[0].reflection,mechanicsNote.reflection);
 }
});
test('duplicate and conflicting mechanics reasoning records are not silently overwritten',()=>{
 const data={notes:[],links:[],revisits:[],investigations:[],practice:[mechanicsNote]};
 const duplicate=mergeNotebooks(data,{notes:[],links:[],revisits:[],investigations:[],practice:[mechanicsNote]});
 assert.equal(duplicate.practiceSkipped,1);
 const changed=mergeNotebooks(data,{notes:[],links:[],revisits:[],investigations:[],practice:[{...mechanicsNote,reflection:'A new interpretation'}]});
 assert.equal(changed.practiceConflicts,1);
 assert.equal(changed.practice[0].reflection,mechanicsNote.reflection);
});
test('invalid or absent practice entries invalidate a version 3 archive',()=>{
 const archive=createComprehensiveArchive([],[],[],[],[mechanicsNote]);
 assert.throws(()=>normalizeNotebook({...archive,practice:undefined}),/Invalid notebook entries/);
 assert.throws(()=>normalizeNotebook({...archive,practice:[{...mechanicsNote,problemId:'invalid'}]}),/Invalid mechanics practice/);
});
