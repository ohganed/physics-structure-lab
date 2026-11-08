import test from 'node:test';
import assert from 'node:assert/strict';
import {mechanicsSituationFigure,situationKeys} from '../mechanics-situation-figures.js';
import {mechanicsOriginHtml} from '../mechanics-origins.js';
import {mechanicsWorkedCaseHtml} from '../mechanics-worked-article.js';
import {deepWorkedExampleHtml} from '../mechanics-deep.js';
import {energyTextbookHtml} from '../energy-textbook.js';
import {collisionTextbookHtml} from '../collision-textbook.js';
import {inclineTextbookHtml} from '../incline-textbook.js';
import {twoBlockTextbookHtml} from '../two-block-textbook.js';
import {collisionInquiryHtml} from '../collision-inquiry.js';

const categories={origin:12,worked:11,deep:12,section:16,supplement:25};
test('every planned situation has a separate bilingual SVG description and no invalid numbers',()=>{
 for(const [type,count] of Object.entries(categories)){
  assert.equal(situationKeys[type].length,count,type);
  for(const key of situationKeys[type]){
   for(const language of ['ja','en']){
    const html=mechanicsSituationFigure(key,type,language);
    assert.match(html,/^<figure /);
    assert.match(html,/<svg viewBox="0 0 560 280"/);
    assert.match(html,/role="img"/);
    assert.match(html,/<title>[^<]+<\/title>/);
    assert.match(html,/<figcaption>.+<\/figcaption>/);
    assert.doesNotMatch(html,/NaN|Infinity|undefined|<script/i);
   }
  }
 }
});
test('chapter origin paragraphs precede relevant diagram and equation steps follow it',()=>{
 for(const key of situationKeys.origin){
  if(key==='momentum')continue; // Chapter 04 has its own separate impulse introduction.
  const html=mechanicsOriginHtml(key,'ja');
  const diagram=html.indexOf('data-situation="origin:'+key+'"');
  assert.ok(diagram>=0,key);
  assert.ok(html.indexOf('mechanics-origin-premise')<diagram,key);
  assert.ok(diagram<html.indexOf('mechanics-origin-derivation'),key);
 }
});
test('worked application and long example diagrams are placed before mathematics',()=>{
 for(const key of situationKeys.worked){
  for(const language of ['ja','en']){
   const html=mechanicsWorkedCaseHtml(key,language);
   assert.ok(html.indexOf('data-situation="worked:'+key+'"')>0);
   assert.ok(html.indexOf('data-situation="worked:'+key+'"')<html.indexOf('mechanics-worked-solution'));
  }
 }
 for(const key of situationKeys.deep){
  const html=deepWorkedExampleHtml(key,'ja');
  assert.match(html,new RegExp('data-situation="deep:'+key+'"'));
  assert.ok(html.indexOf('data-situation="deep:'+key+'"')<html.indexOf('mechanics-worked-steps'));
 }
});
test('energy and collision textbook sections each have eight inline unique illustrations',()=>{
 for(const [html,prefix] of [[energyTextbookHtml('ja'),'energy'],[collisionTextbookHtml('ja'),'collision']]){
  for(let i=0;i<8;i++)assert.match(html,new RegExp('data-situation="section:'+prefix+'-'+i+'"'));
 }
});
test('incline and two-cart supplemental readings have diagrams in each section',()=>{
 const incline=inclineTextbookHtml('ja'),blocks=twoBlockTextbookHtml('ja');
 for(let i=0;i<8;i++)assert.match(incline,new RegExp('data-situation="supplement:incline-'+i+'"'));
 for(let i=0;i<9;i++)assert.match(blocks,new RegExp('data-situation="supplement:two-block-'+i+'"'));
});
test('four collision inquiries have problem-specific pictures',()=>{
 const html=collisionInquiryHtml('ja');
 for(let i=0;i<4;i++)assert.match(html,new RegExp('data-situation="supplement:inquiry-'+i+'"'));
});
test('incline block bottom edge lies on sloping plane',()=>{
 const html=mechanicsSituationFigure('friction','origin','ja');
 const match=html.match(/<path d="M([^"]+) Z" stroke="#356d66"/);
 assert.ok(match,'block path expected');
 const coords=[...match[1].matchAll(/(-?\d+(?:\.\d+)?) (-?\d+(?:\.\d+)?)/g)].map(m=>[+m[1],+m[2]]);
 assert.ok(coords.length>=4);
 for(const [x,y] of coords.slice(0,2)){
  const expected=241-(x-95)*184/360;
  assert.ok(Math.abs(y-expected)<0.1,'block bottom is supported by plane');
 }
});
