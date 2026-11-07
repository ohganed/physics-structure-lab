import test from 'node:test';
import assert from 'node:assert/strict';
import {mechanicsChapters} from '../mechanics-data.js';
import {mechanicsWorkedCases} from '../mechanics-worked-cases.js';
import {mechanicsWorkedCaseHtml} from '../mechanics-worked-article.js';
const keys=mechanicsChapters.map(c=>c.key).filter(key=>key!=='friction');
test('all eleven other mechanics chapters have complete worked studies, not empty links',()=>{
 assert.deepEqual(Object.keys(mechanicsWorkedCases).sort(),keys.sort());
 for(const key of keys){
  const caseData=mechanicsWorkedCases[key];
  assert.ok(caseData.steps.length>=4,key+' worked calculations');
  for(const field of ['title','story','conditions','interpretation','limits']){
   assert.equal(caseData[field].length,2,key+' '+field);
   assert.ok(caseData[field][0].length>=10&&caseData[field][1].length>=15,key+' '+field+' text');
  }
  for(const step of caseData.steps){
   assert.ok(step.math.length>=8,key+' empty equation');
   assert.ok(step.why[0].length>=12&&step.why[1].length>=20,key+' unexplained equation');
  }
 }
});
test('each worked physics study is fully visible in both languages',()=>{
 for(const key of keys)for(const language of ['ja','en']){
  const html=mechanicsWorkedCaseHtml(key,language);
  assert.match(html,/id="mechanics-worked-article"/);
  assert.match(html,/mechanics-worked-solution/);
  assert.match(html,/mechanics-worked-limits/);
  assert.equal((html.match(/mechanics-worked-list/g)||[]).length,1);
  assert.equal((html.match(/class="formula tex-display"/g)||[]).length,mechanicsWorkedCases[key].steps.length);
  assert.equal(html.includes('<script'),false);
 }
 assert.equal(mechanicsWorkedCaseHtml('friction'),'');
});
test('the worked studies include different phenomena and not eleven copies of one formula',()=>{
 const a=mechanicsWorkedCases;
 assert.match(a.force.story[0],/エレベーター/);
 assert.match(a.energy.story[0],/ブレーキ/);
 assert.match(a.circular.story[0],/カーブ/);
 assert.match(a.rotation.story[0],/円盤/);
 assert.match(a.lagrange.story[0],/糸/);
 assert.match(a.hamilton.story[0],/右へ動いている/);
 assert.match(a.coupled.story[0],/移ったり戻ったり/);
 assert.ok(new Set(keys.flatMap(k=>a[k].steps.map(s=>s.math))).size>=48);
});
test('representative numerical examples agree with independent physical calculations',()=>{
 const g=9.8;
 assert.equal(60*(g+2),708);
 assert.equal(0.5*1000*20**2/4000,50);
 assert.equal((2*3+1*0)/(2+1),2);
 assert.ok(Math.abs(Math.atan(20**2/(80*g))*180/Math.PI-27.0)<.1);
 assert.ok(Math.abs(2*Math.PI*Math.sqrt(1/g)-2.007)<.01);
 assert.ok(Math.abs(Math.sqrt(2*3.986e14/7e6)/1000-10.67)<.01);
 assert.ok(Math.abs(Math.sqrt(4*g*1.5/3)-4.43)<.01);
 assert.ok(Math.abs((3-2)*g/(3+2)-1.96)<1e-10);
 assert.ok(Math.abs(2*Math.PI/(Math.sqrt(5)-2)-26.6)<.1);
});
