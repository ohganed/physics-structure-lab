import test from 'node:test';
import assert from 'node:assert/strict';
import {mechanicsSituationFigure} from '../mechanics-situation-figures.js';

test('Hamiltonian oscillator ellipse and (q,p) axes share the same origin',()=>{
 for(const lang of ['ja','en']){
  const html=mechanicsSituationFigure('hamilton','origin',lang);
  assert.match(html,/<ellipse cx="280" cy="146" rx="148" ry="91"/);
  assert.match(html,/x1="74" y1="146" x2="490" y2="146"/);
  assert.match(html,/x1="280" y1="261" x2="280" y2="25"/);
  assert.match(html,/x1="466" y1="146" x2="491" y2="146"/);
  assert.match(html,/x1="280" y1="48" x2="280" y2="24"/);
 });
});
test('upper right phase-plane time tangent points toward growing q and falling p',()=>{
 const html=mechanicsSituationFigure('hamilton','origin','ja');
 const match=html.match(/<line x1="([0-9.]+)" y1="([0-9.]+)" x2="([0-9.]+)" y2="([0-9.]+)" stroke="#bf774b"/);
 assert.ok(match,'phase evolution arrow should have an explicit tangent line');
 const [x1,y1,x2,y2]=match.slice(1).map(Number);
 assert.ok(x2>x1,'for p>0, q must increase');
 assert.ok(y2>y1,'for q>0, p must decrease (downward on the screen)');
});
