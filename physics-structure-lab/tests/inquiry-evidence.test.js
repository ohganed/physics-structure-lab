import test from 'node:test';
import assert from 'node:assert/strict';
import {evaluateInquiry,validInvestigation} from '../inquiry-core.js';
import {validateObservation,compareObservation,appendObservation} from '../inquiry-evidence.js';
import {createUnifiedArchive,normalizeNotebook} from '../knowledge-journeys-core.js';

const trial=evaluateInquiry('fall',{mass:2,height:10});
const observed={id:'obs-reported-1234',trialIndex:0,measured:1.56,
 uncertainty:.1,method:'Hand-timed on a phone. Reaction time may matter.',
 date:'2026-11-06T03:00:00Z',source:'learner-reported'};
const record={id:'inq-observation-1234',scenario:'fall',date:'2026-11-06T03:01:00Z',
 question:'How long does a 10 m fall take?',hypothesis:'Maybe two seconds.',
 interpretation:'The measurement differs; investigate timing uncertainty.',nextQuestion:'What if the sensor is used?',
 trials:[trial],observations:[observed]};

test('reported observations have a distinct source and reference existing model trials',()=>{
 assert.equal(validateObservation(observed,[trial]),true);
 const wrongs=[
  {...observed,source:'model'},
  {...observed,trialIndex:2},
  {...observed,measured:Infinity},
  {...observed,uncertainty:-.1},
  {...observed,method:'x'.repeat(501)},
  {...observed,id:'unsafe id'},
  {...observed,date:'not a date'}
 ];
 for(const entry of wrongs)assert.equal(validateObservation(entry,[trial]),false);
});
test('comparison reports differences but never declares the observed model correct or incorrect',()=>{
 const cmp=compareObservation(observed,trial);
 assert.equal(cmp.unit,'s');
 assert.equal(cmp.modelValue,trial.primary);
 assert.ok(Math.abs(cmp.discrepancy-(1.56-trial.primary))<1e-10);
 assert.equal(cmp.uncertainty,.1);
 const unknown=compareObservation({...observed,uncertainty:null},trial);
 assert.equal(unknown.uncertainty,null);
});
test('measured observations remain unmodified and reject duplicate IDs',()=>{
 const arr=appendObservation([],observed,[trial]);
 assert.equal(arr.length,1);
 assert.deepEqual(arr[0],observed);
 assert.throws(()=>appendObservation(arr,observed,[trial]),/Duplicate/);
 assert.throws(()=>appendObservation([], {...observed,trialIndex:3},[trial]));
});
test('investigation schema preserves legacy records and validates optional evidence',()=>{
 assert.equal(validInvestigation(record),true);
 assert.equal(validInvestigation({...record,observations:undefined}),true);
 assert.equal(validInvestigation({...record,observations:[{...observed,measured:NaN}]}),false);
 assert.equal(validInvestigation({...record,observations:[observed,observed]}),false);
});
test('v2 JSON archive round-trips learner observations without interpreting them as verified physics',()=>{
 const backup=createUnifiedArchive([],[],[],[record]);
 const imported=normalizeNotebook(JSON.parse(JSON.stringify(backup)));
 assert.deepEqual(imported.investigations[0].observations,[observed]);
});
