import test from 'node:test';
import assert from 'node:assert/strict';
import {projectile,atwood} from '../kinematics-extensions.js';
const close=(a,b)=>assert.ok(Math.abs(a-b)<1e-9,`expected ${b}, got ${a}`);
test('horizontal and vertical projection obey independent kinematics',()=>{
 const s=projectile({speed:10,angleDeg:30,time:1});
 close(s.x,10*Math.cos(Math.PI/6));
 close(s.y,5-4.9);close(s.vy,-4.8);
});
test('45 degree launch from zero height has expected range',()=>{
 const s=projectile({speed:10,angleDeg:45,time:0});
 close(s.range,100/9.8);close(s.flight,2*10*Math.sin(Math.PI/4)/9.8);
 close(projectile({speed:10,angleDeg:45,time:s.flight}).y,0);
});
test('vertical launch has zero horizontal range',()=>{
 const s=projectile({speed:10,angleDeg:90,time:0});
 close(s.range,0,1e-9);
});
test('Atwood acceleration and rope tension are consistent',()=>{
 const s=atwood({m1:2,m2:3,g:9.8,time:2});
 close(s.a,1.96);close(s.tension,23.52);close(s.displacement,3.92);
 close(s.tension-2*9.8,2*s.a);
 close(3*9.8-s.tension,3*s.a);
});
test('equal masses have no acceleration',()=>{
 const s=atwood({m1:2,m2:2});
 close(s.a,0);close(s.tension,19.6);
});
test('invalid physical parameters rejected',()=>{
 assert.throws(()=>projectile({g:0}));
 assert.throws(()=>projectile({angleDeg:-20}));
 assert.throws(()=>atwood({m1:-2}));
});
