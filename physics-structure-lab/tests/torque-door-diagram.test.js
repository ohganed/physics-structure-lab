import test from 'node:test';
import assert from 'node:assert/strict';
import {doorTorque,torqueDoorHtml} from '../torque-door-diagram.js';
const near=(a,b)=>assert.ok(Math.abs(a-b)<1e-10);
test('perpendicular push gives maximum torque',()=>near(doorTorque({radius:0.8,force:20,angle:90}).torque,16));
test('radial push produces no torque at both ends',()=>{near(doorTorque({radius:0.8,force:20,angle:0}).torque,0);near(doorTorque({radius:0.8,force:20,angle:180}).torque,0);});
test('torque doubles with lever arm or force',()=>{const a=doorTorque({radius:0.4,force:10,angle:30}).torque;near(doorTorque({radius:0.8,force:10,angle:30}).torque,2*a);near(doorTorque({radius:0.4,force:20,angle:30}).torque,2*a);});
test('reject invalid model inputs',()=>{for(const opts of [{angle:181},{force:-1},{radius:1.5},{angle:NaN}])assert.throws(()=>doorTorque(opts),RangeError);});
test('bilingual SVG with three accessible controls',()=>{for(const lang of ['ja','en']){const html=torqueDoorHtml(lang);assert.match(html,/viewBox="0 0 620 350"/);assert.match(html,/role="img"/);assert.match(html,/id="door-radius"/);assert.match(html,/id="door-angle"/);assert.match(html,/id="door-force"/);}});
