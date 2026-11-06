import test from 'node:test';
import assert from 'node:assert/strict';
import {createNotebookExport,createUnifiedArchive,normalizeNotebook,mergeNotebooks} from '../knowledge-journeys-core.js';
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
