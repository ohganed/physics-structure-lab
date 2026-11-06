import test from 'node:test';
import assert from 'node:assert/strict';
import { lineState, circleState } from '../acceleration-lab.js';

test('straight-line motion obeys definition of constant acceleration',()=>{
  assert.deepEqual(lineState({v0:2,a:-1},3),{x:1.5,v:-1,a:-1});
});
test('constant speed circular motion has nonzero inward acceleration',()=>{
  const s=circleState({r:2,speed:6},0);
  assert.ok(Math.abs(s.vx)<1e-12);
  assert.equal(s.vy,6);
  assert.equal(s.ax,-18);
  assert.ok(Math.abs(s.ay)<1e-12);
  assert.equal(s.a,18);
  assert.equal(s.omega,3);
});
test('half orbit reverses velocity with unchanged speed',()=>{
  const t=Math.PI*2/4;
  const s=circleState({r:2,speed:4},t);
  assert.ok(Math.abs(s.vy+4)<1e-10);
  assert.ok(Math.abs(s.vx)<1e-10);
  assert.ok(Math.abs(Math.hypot(s.vx,s.vy)-4)<1e-10);
});
test('circular motion with zero speed gives zero acceleration',()=>{
 const s=circleState({r:3,speed:0},10);
 assert.equal(s.a,0);
});
test('invalid inputs rejected',()=>{
 assert.throws(()=>circleState({r:0,speed:2},0));
 assert.throws(()=>circleState({r:2,speed:-1},0));
 assert.throws(()=>lineState({v0:0,a:1},-1));
});
