import test from 'node:test';
import assert from 'node:assert/strict';
import { trajectory, trajectorySummary } from '../definition-lab.js';

test('returning to origin: distance is positive but displacement is zero', () => {
  const r = trajectorySummary({turn:12,end:0,t1:4,t2:4});
  assert.deepEqual(r,{distance:24,displacement:0,duration:8,averageSpeed:3,averageVelocity:0});
});
test('negative displacement preserves direction of mean velocity', () => {
  const r=trajectorySummary({turn:10,end:-5,t1:5,t2:5});
  assert.equal(r.distance,25);
  assert.equal(r.displacement,-5);
  assert.equal(r.averageVelocity,-0.5);
});
test('moving twice in same direction produces equal mean speed and velocity', () => {
  const r=trajectorySummary({turn:5,end:10,t1:2,t2:3});
  assert.equal(r.distance,10);
  assert.equal(r.averageSpeed,2);
  assert.equal(r.averageVelocity,2);
});
test('two segments join at the intermediate point', () => {
  assert.equal(trajectory({turn:12,end:0,t1:4,t2:4},4).x,12);
  assert.equal(trajectory({turn:12,end:0,t1:4,t2:4},8).x,0);
  assert.equal(trajectory({turn:12,end:0,t1:4,t2:4},6).v,-3);
});
test('invalid durations are rejected',()=>{
  assert.throws(()=>trajectorySummary({turn:1,end:0,t1:0,t2:3}));
  assert.throws(()=>trajectory({turn:1,end:0,t1:3,t2:1},-1));
});
