import test from 'node:test';
import assert from 'node:assert/strict';
import {mechanicsChapters} from '../mechanics-data.js';
import {connectionNodes,connectionEdges,connectionTypes,nodeById,relatedEdges,chapterConnectionNodes} from '../knowledge-connections-data.js';
import {getConnectionsForChapter,chapterConnectionsHtml,setConnectionFocus} from '../knowledge-connections.js';
import {navigationLabels} from '../language.js';

test('the bilingual knowledge graph has valid distinct concepts and informative links',()=>{
 assert.ok(connectionNodes.length>=15);
 assert.ok(connectionEdges.length>=25);
 const ids=new Set(connectionNodes.map(n=>n.id));
 assert.equal(ids.size,connectionNodes.length);
 const chapters=new Set(mechanicsChapters.map(c=>c.key));
 for(const n of connectionNodes){
   assert.ok(chapters.has(n.chapter),n.id+' invalid chapter');
   for(const field of ['ja','en','jaQuestion','enQuestion'])assert.ok(n[field]?.trim().length>=(field==='ja'?2:5),n.id+' missing '+field);
   assert.ok(relatedEdges(n.id).length>0,n.id+' unconnected');
   assert.equal(nodeById(n.id).id,n.id);
 }
 assert.equal(nodeById('not-a-concept'),null);
 for(const e of connectionEdges){
   assert.ok(ids.has(e.from)&&ids.has(e.to),e.from+' to '+e.to+' missing');
   assert.notEqual(e.from,e.to);
   assert.ok(connectionTypes[e.type],e.type+' unknown relation type');
   for(const field of ['ja','en','limitJa','limitEn'])assert.ok(e[field]?.length>15,e.from+' → '+e.to+' missing '+field);
 }
});
test('chapters offer contextual links, without requiring a completed quiz or progress',()=>{
 for(const c of mechanicsChapters){
  const chapterNodes=chapterConnectionNodes(c.key);
  assert.ok(chapterNodes.length>=1,c.key+' has no concept');
  const links=getConnectionsForChapter(c.key);
  assert.ok(links.length>=1,c.key+' has no links');
  const markup=chapterConnectionsHtml(c.key);
  assert.ok(markup.includes('data-open-connection'),c.key+' cannot open the knowledge graph');
  assert.ok(!markup.includes('required'),c.key+' should not gate exploration');
 }
 assert.doesNotThrow(()=>setConnectionFocus('velocity'));
 assert.doesNotThrow(()=>setConnectionFocus('unknown'));
});
test('main navigation includes the connection explorer in both languages',()=>{
 assert.equal(navigationLabels.connections.length,2);
 assert.ok(navigationLabels.connections[0].includes('知識'));
 assert.equal(navigationLabels.connections[1],'Knowledge Connections');
});
