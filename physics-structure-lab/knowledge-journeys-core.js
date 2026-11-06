/**
 * Offline knowledge-workshop engine.
 * Links are conceptual prompts, never logical proofs or automatic evidence of mastery.
 * Nothing here makes network requests.
 */
import {connectionNodes,connectionEdges,connectionTypes,nodeById} from './knowledge-connections-data.js';

const ids=new Set(connectionNodes.map(n=>n.id));
const types=new Set(Object.keys(connectionTypes));
const validText=(s,limit=2500)=>typeof s==='string'&&s.trim().length>0&&s.trim().length<=limit;
const isDate=s=>typeof s==='string'&&s.length<=36&&!Number.isNaN(Date.parse(s));
const validId=s=>typeof s==='string'&&s.length>0&&s.length<=110&&/^[a-zA-Z0-9:._-]+$/.test(s);
const hasOwn=(o,k)=>Object.prototype.hasOwnProperty.call(o,k);

export function validateLearnerLink(link){
 return Boolean(link&&typeof link==='object'&&!Array.isArray(link)&&
 validId(link.id)&&ids.has(link.from)&&ids.has(link.to)&&link.from!==link.to&&
 types.has(link.type)&&validText(link.reason,1200)&&validText(link.boundary,1200)&&
 isDate(link.date));
}
export function validateRevisit(revisit){
 return Boolean(revisit&&typeof revisit==='object'&&!Array.isArray(revisit)&&
 validId(revisit.id)&&ids.has(revisit.concept)&&
 validText(revisit.before,1800)&&validText(revisit.now,1800)&&
 isDate(revisit.date));
}
export function validateLegacyNote(note){
 return Boolean(note&&typeof note==='object'&&!Array.isArray(note)&&
 ids.has(note.concept)&&
 (note.related==null||ids.has(note.related))&&validText(note.note,2500)&&
 (!note.date||isDate(note.date)));
}
export function normalizeNotebook(payload){
 if(!payload||typeof payload!=='object'||Array.isArray(payload)||
  payload.kind!=='physics-structure-lab-knowledge-journal'||payload.version!==1)throw new RangeError('Unsupported notebook format');
 const keys=['notes','links','revisits'];
 for(const k of keys){
  if(!Array.isArray(payload[k])||payload[k].length>500)throw new RangeError('Invalid notebook entries: '+k);
 }
 if(!payload.notes.every(validateLegacyNote))throw new RangeError('Invalid observation in notebook');
 if(!payload.links.every(validateLearnerLink))throw new RangeError('Invalid learner-created relation');
 if(!payload.revisits.every(validateRevisit))throw new RangeError('Invalid reflection revision');
 return {notes:payload.notes.map(x=>({...x})),links:payload.links.map(x=>({...x})),revisits:payload.revisits.map(x=>({...x}))};
}
export function createNotebookExport(notes,links,revisits,date=new Date().toISOString()){
 const object={kind:'physics-structure-lab-knowledge-journal',version:1,exportedAt:date,notes,links,revisits};
 // Validate before exporting to avoid silently distributing damaged data.
 normalizeNotebook(object);
 return object;
}
export function mergeNotebooks(existing,incoming){
 const merged={};
 for(const key of ['notes','links','revisits']){
  const initial=existing[key]||[],next=incoming[key]||[];
  const signature=item=>key==='notes'
    ? [item.concept,item.related||'',item.date||'',item.note].join('\u001f')
    : [item.id,item.date, key==='links'?item.reason:item.now].join('\u001f');
  const seen=new Set(initial.map(signature));
  // A colliding ID with different content is not overwritten. It is reported.
  const collisions=new Map(initial.filter(x=>x.id).map(x=>[x.id,JSON.stringify(x)]));
  const value=initial.map(x=>({...x}));
  let skipped=0,conflicts=0;
  for(const item of next){
   const signatureValue=signature(item);
   if(seen.has(signatureValue)){skipped++;continue;}
   if(item.id&&collisions.has(item.id)&&collisions.get(item.id)!==JSON.stringify(item)){conflicts++;continue;}
   value.push({...item});seen.add(signatureValue);
   if(item.id)collisions.set(item.id,JSON.stringify(item));
  }
  if(value.length>500)throw new RangeError('Notebook storage limit exceeded');
  merged[key]=value;
  merged[key+'Skipped']=skipped;
  merged[key+'Conflicts']=conflicts;
 }
 return merged;
}
export function shortestConceptPath(from,to,personalLinks=[],includeHypotheses=false){
 if(!ids.has(from)||!ids.has(to))return null;
 if(from===to)return {nodes:[from],edges:[],usedLearnerHypothesis:false};
 const links=connectionEdges.map(e=>({...e,source:'curated'}));
 if(includeHypotheses){
  for(const link of personalLinks)if(validateLearnerLink(link)){
    links.push({...link,source:'learner'});
  }
 }
 const queue=[from],parents=new Map([[from,null]]);
 for(let cursor=0;cursor<queue.length;cursor++){
  const current=queue[cursor];
  for(const edge of links){
   if(edge.from!==current&&edge.to!==current)continue;
   const other=edge.from===current?edge.to:edge.from;
   if(parents.has(other))continue;
   parents.set(other,{parent:current,edge});
   if(other===to){
    const nodes=[to],edges=[];
    let node=to;
    while(node!==from){
     const p=parents.get(node);edges.unshift(p.edge);nodes.unshift(p.parent);node=p.parent;
    }
    return {nodes,edges,usedLearnerHypothesis:edges.some(e=>e.source==='learner')};
   }
   queue.push(other);
  }
 }
 return null;
}
export function relationOnPath(edge,first,second){
 if(edge.source==='learner')return {reason:edge.reason,boundary:edge.boundary,source:'learner'};
 if(!edge||!((edge.from===first&&edge.to===second)||(edge.to===first&&edge.from===second)))return null;
 return {reason:edge.ja,boundary:edge.limitJa,source:'curated'};
}
export function connectedConceptIds(id){
 if(!nodeById(id))return [];
 return [...new Set(connectionEdges.filter(e=>e.from===id||e.to===id).map(e=>e.from===id?e.to:e.from))];
}