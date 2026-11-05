import test from 'node:test';
import assert from 'node:assert/strict';
import { motionAt, twoStageTrain, approximatelyEqual } from '../physics.js';

test('constant acceleration motion', () => {
  assert.deepEqual(motionAt({ x0: 1, v0: 3, a: 2 }, 4), { x: 29, v: 11, a: 2 });
  assert.deepEqual(motionAt({ x0: 0, v0: -2, a: 0 }, 2), { x: -4, v: -2, a: 0 });
});
test('invalid times rejected', () => assert.throws(() => motionAt({ v0: 1 }, -1)));
test('train example has stage boundary and correct totals', () => {
  const r = twoStageTrain({ a1: 2, t1: 4, a2: -1 });
  assert.equal(r.v1, 8);
  assert.equal(r.x1, 16);
  assert.equal(r.t2, 8);
  assert.equal(r.x2, 32);
  assert.equal(r.totalTime, 12);
  assert.equal(r.totalDistance, 48);
});
test('invalid train stages rejected', () => assert.throws(() => twoStageTrain({ a1: 2, t1: 4, a2: 1 })));
test('answers allow reasonable decimal precision', () => {
  assert.ok(approximatelyEqual(47.999, 48));
  assert.ok(!approximatelyEqual(46, 48));
});
