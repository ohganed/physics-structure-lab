import test from 'node:test';
import assert from 'node:assert/strict';
import {navigationLabels,navigationKeywords,filterNavigation} from '../language.js';
function harness(){
 const nodes=Object.keys(navigationLabels).map(page=>({dataset:{page},hidden:false}));
 const status={textContent:''};
 return {nodes,status,root:{querySelectorAll(selector){assert.equal(selector,'#nav [data-page]');return nodes;},
 querySelector(selector){return selector==='#nav-search-status'?status:null;}}};
}
test('every bilingual navigation page has keywords',()=>{
 assert.deepEqual(Object.keys(navigationLabels).sort(),Object.keys(navigationKeywords).sort());
});
test('navigation search supports Japanese/English and case-insensitive terms',()=>{
 const h=harness();
 assert.ok(filterNavigation('FREE BODY',h.root)>0);
 assert.equal(h.nodes.find(n=>n.dataset.page==='forcelab').hidden,false);
 assert.ok(h.nodes.some(n=>n.hidden));
 assert.ok(filterNavigation('運動量',h.root)>0);
 assert.equal(h.nodes.find(n=>n.dataset.page==='conservation').hidden,false);
 assert.ok(filterNavigation('物質の勾配',h.root)===0);
 assert.ok(h.nodes.every(n=>n.hidden));
 assert.equal(filterNavigation('',h.root),h.nodes.length);
 assert.ok(h.nodes.every(n=>!n.hidden));
});
test('navigation search normalizes typography and is safe for unknown input',()=>{
 const h=harness();
 assert.ok(filterNavigation('　ＥＮＥＲＧＹ　',h.root)>0);
 assert.equal(filterNavigation('no-matching-physics-subject',h.root),0);
});
