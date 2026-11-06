import test from 'node:test';
import assert from 'node:assert/strict';
import {shortestConceptPath,validateLearnerLink,validateRevisit,validateLegacyNote,createNotebookExport,normalizeNotebook,mergeNotebooks,connectedConceptIds} from '../knowledge-journeys-core.js';

const learner={id:'link-1',from:'velocity',to:'symmetry',type:'reframes',reason:'We can compare what changes with what stays invariant.',boundary:'This is a learner conjecture, not a derivation of Noether’s theorem.',date:'2026-11-06T02:00:00.000Z'};
const revisit={id:'revisit-1',concept:'velocity',before:'I assumed speed and velocity meant the same thing.',now:'I recognize that velocity is a vector, so direction matters.',date:'2026-11-06T02:02:00.000Z'};
const note={concept:'velocity',related:'circular',note:'Circular motion made me reconsider the meaning of velocity.',date:'2026-11-06T02:01:00.000Z'};

test('curated conceptual shortest paths are connected and the endpoints are preserved',()=>{
 for(const [a,b] of [['position','symmetry'],['velocity','circular'],['force','hamilton'],['friction','gravity']]){
  const p=shortestConceptPath(a,b);
  assert.ok(p,a+' to '+b);
  assert.equal(p.nodes[0],a);assert.equal(p.nodes.at(-1),b);
  assert.equal(p.edges.length,p.nodes.length-1);
  assert.equal(p.usedLearnerHypothesis,false);
  for(const e of p.edges)assert.equal(e.source,'curated');
 }
});
test('a same-concept route needs no intermediary or mastery gate',()=>{
 assert.deepEqual(shortestConceptPath('force','force'),{nodes:['force'],edges:[],usedLearnerHypothesis:false});
 assert.equal(shortestConceptPath('not-a-node','force'),null);
});
test('unverified learner hypotheses require deliberate opt-in to affect routes',()=>{
 assert.equal(validateLearnerLink(learner),true);
 const baseline=shortestConceptPath('velocity','symmetry',[learner],false);
 const proposed=shortestConceptPath('velocity','symmetry',[learner],true);
 assert.ok(baseline.edges.length>1);
 assert.equal(proposed.edges.length,1);
 assert.equal(proposed.usedLearnerHypothesis,true);
 assert.equal(proposed.edges[0].source,'learner');
});
test('invalid learner relations are rejected',()=>{
 for(const change of [{from:'ghost'},{to:'velocity'},{reason:''},{boundary:''},{type:'fiction'},{date:'bad-date'},{id:'bad id'}]){
  assert.equal(validateLearnerLink({...learner,...change}),false);
 }
 assert.equal(validateLearnerLink({}),false);
});
test('a dated change in understanding and a legacy observation are valid',()=>{
 assert.equal(validateRevisit(revisit),true);
 assert.equal(validateLegacyNote(note),true);
 assert.equal(validateRevisit({...revisit,concept:'unknown'}),false);
 assert.equal(validateLegacyNote({...note,related:'unknown'}),false);
});
test('JSON round-trip uses explicit version and preserves ungraded learning records',()=>{
 const backup=createNotebookExport([note],[learner],[revisit],'2026-11-06T02:05:00.000Z');
 const json=JSON.stringify(backup);
 assert.deepEqual(normalizeNotebook(JSON.parse(json)),{notes:[note],links:[learner],revisits:[revisit]});
 assert.throws(()=>normalizeNotebook({...backup,version:2}),/Unsupported notebook/);
 assert.throws(()=>normalizeNotebook({...backup,links:[{...learner,reason:' '}]}),/Invalid learner/);
 assert.throws(()=>normalizeNotebook({...backup,notes:undefined}),/Invalid notebook/);
});
test('import merge preserves originals, removes exact duplicates and reports conflicting IDs',()=>{
 const current={notes:[note],links:[learner],revisits:[revisit]};
 const same=normalizeNotebook(createNotebookExport([note],[learner],[revisit]));
 const m=mergeNotebooks(current,same);
 assert.equal(m.notes.length,1);assert.equal(m.links.length,1);assert.equal(m.revisits.length,1);
 assert.equal(m.linksSkipped,1);
 const distinct={...learner,boundary:'A different claim attached to the same identifier.'};
 const incoming={notes:[],links:[distinct],revisits:[]};
 const merged=mergeNotebooks(current,incoming);
 assert.equal(merged.links.length,1);
 assert.equal(merged.links[0].boundary,learner.boundary);
 assert.equal(merged.linksConflicts,1);
});
test('connected concepts are enumerated without duplicates',()=>{
 const result=connectedConceptIds('velocity');
 assert.equal(result.length,new Set(result).size);
 assert.ok(result.includes('circular'));
 assert.deepEqual(connectedConceptIds('missing'),[]);
});
