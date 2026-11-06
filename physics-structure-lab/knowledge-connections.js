import {connectionNodes,connectionEdges,connectionTypes,nodeById,relatedEdges} from './knowledge-connections-data.js';
import {getLanguage} from './language.js';

const NOTE_KEY='physics-structure-lab-connection-notes-v1';
const FOCUS_KEY='physics-structure-lab-connection-focus-v1';
const say=(ja,en)=>getLanguage()==='en'?en:ja;
const text=(entry,ja='ja',en='en')=>entry[getLanguage()==='en'?en:ja];
const escapeHTML=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&#39;');
let pendingFocus=null;
let lastFocus='velocity';

export function setConnectionFocus(id){if(nodeById(id))pendingFocus=id;}
export function getConnectionsForChapter(chapter){
  const ids=new Set(connectionNodes.filter(n=>n.chapter===chapter).map(n=>n.id));
  const edges=connectionEdges.filter(e=>ids.has(e.from)||ids.has(e.to));
  return edges.slice().sort((a,b)=>['reframes','deepens','contrasts','analogizes','applies','builds','requires'].indexOf(a.type)-['reframes','deepens','contrasts','analogizes','applies','builds','requires'].indexOf(b.type));
}
export function chapterConnectionsHtml(chapter){
 const nodes=connectionNodes.filter(n=>n.chapter===chapter);
 const ids=new Set(nodes.map(n=>n.id));
 const edges=getConnectionsForChapter(chapter);
 if(!edges.length)return '';
 const picks=edges.filter(e=>ids.has(e.from)).slice(0,3);
 const effective=picks.length?picks:edges.slice(0,3);
 return '<section class="knowledge-chapter-bridge"><div class="eyebrow">'+say('CONNECTIONS · 知識の熟成','CONNECTIONS · REVISIT AND REFRAME')+'</div><h3>'+say('以前の知識が、ここで新しく見える','Revisit an old idea in a new setting')+'</h3><p>'+say('理解度の判定ではありません。関連する考え方に自由に移動できます。','No mastery gate. Follow related concepts in any order.')+'</p><div class="knowledge-bridge-list">'+effective.map(e=>{
   const other=nodeById(ids.has(e.from)?e.to:e.from);
   const focusId=ids.has(e.from)?e.from:e.to;
   return '<button type="button" class="knowledge-bridge-button" data-open-connection="'+escapeHTML(focusId)+'"><strong>'+escapeHTML(text(other))+'</strong><span>'+escapeHTML(text(e))+'</span></button>';
 }).join('')+'</div><button type="button" class="secondary-btn" data-goto="connections">'+say('知識のつながりを全体で探索 →','Explore the full network →')+'</button></section>';
}
export function connectionsPage(){
 return '<div class="page knowledge-page"><div class="eyebrow">KNOWLEDGE CONNECTIONS · PHYSICS STRUCTURE LAB</div><h1>'+say('知識がつながり、理解が深まる','Knowledge grows through connections')+'</h1>'
 +'<p class="lead">'+say('ひとつの単元で理解を完結させなくても大丈夫。別の概念を学んだとき、以前の知識に新しい意味が生まれます。つながる理由と、混同してはいけない違いを探究しましょう。','Understanding can develop after the first encounter. Discover how an old concept becomes meaningful in a new context—and where analogies break down.')+'</p>'
 +'<div class="knowledge-layout"><section class="card knowledge-picker"><h2>'+say('概念を選ぶ','Choose a concept')+'</h2>'
 +'<label for="knowledge-search">'+say('概念を検索','Search concepts')+'</label><input id="knowledge-search" type="search" placeholder="'+say('速度・円運動・運動量…','Velocity, symmetry, momentum…')+'" autocomplete="off">'
 +'<div class="knowledge-concept-list" id="knowledge-concepts" role="group" aria-label="'+say('概念一覧','Concept list')+'"></div>'
 +'</section><section class="card knowledge-explorer"><div id="knowledge-main"></div></section></div></div>';
}
function readNotes(){try{const v=JSON.parse(localStorage.getItem(NOTE_KEY)||'[]');return Array.isArray(v)?v.filter(n=>n&&typeof n.note==='string'&&nodeById(n.concept)):[];}catch{return [];}}
function writeNotes(notes){try{localStorage.setItem(NOTE_KEY,JSON.stringify(notes));return true;}catch{return false;}}
function graphSVG(id,edges){
 const neighbors=[...new Set(edges.map(e=>e.from===id?e.to:e.from))].slice(0,6);
 const cx=340,cy=127,rx=248,ry=91;
 const nodes=neighbors.map((other,i)=>{
   const angle=-Math.PI/2+(2*Math.PI*i/Math.max(neighbors.length,1));
   const x=cx+rx*Math.cos(angle),y=cy+ry*Math.sin(angle);
   const label=text(nodeById(other));
   return {id:other,x,y,label:label.length>16?label.slice(0,15)+'…':label};
 });
 const paths=nodes.map(n=>'<line x1="'+cx+'" y1="'+cy+'" x2="'+n.x.toFixed(2)+'" y2="'+n.y.toFixed(2)+'" stroke="#94b5a4" stroke-width="2" stroke-dasharray="4 4"/>').join('');
 const labels=nodes.map(n=>'<g><rect x="'+(n.x-72).toFixed(2)+'" y="'+(n.y-19).toFixed(2)+'" width="144" height="38" rx="11" fill="#edf4ef" stroke="#9ebfb0"/><text x="'+n.x.toFixed(2)+'" y="'+(n.y+4).toFixed(2)+'" text-anchor="middle" font-size="11.5" fill="#27564a">'+escapeHTML(n.label)+'</text></g>').join('');
 const center=text(nodeById(id));return '<svg class="knowledge-map" viewBox="0 0 680 270" role="img" aria-label="'+escapeHTML(say('中央の概念と周辺の関連概念を示す図。操作は図の下のボタンから行えます。','A map of the selected concept and linked concepts. Use the buttons below to navigate.'))+'">'
 +paths+'<rect x="254" y="104" width="172" height="46" rx="13" fill="#236a57"/><text x="340" y="131" text-anchor="middle" font-size="13" fill="white">'+escapeHTML(center.length>19?center.slice(0,18)+'…':center)+'</text>'+labels+'</svg>';
}
function relativeEdgeHtml(e,id){
 const other=nodeById(e.from===id?e.to:e.from);
 const type=connectionTypes[e.type];
 const reverse=e.to===id;
 return '<article class="knowledge-relation"><div class="knowledge-relation-top"><span class="knowledge-relation-type">'+escapeHTML(type[getLanguage()==='en'?1:0])+'</span><button type="button" class="knowledge-relation-target" data-knowledge-id="'+escapeHTML(other.id)+'">'+escapeHTML(text(other))+' →</button></div>'
 +'<p><strong>'+say('どうつながる？','How are they connected?')+'</strong> '+escapeHTML(text(e))+'</p>'
 +'<p class="knowledge-boundary"><strong>'+say('ただし','But do not confuse them')+'</strong> '+escapeHTML(text(e,'limitJa','limitEn'))+'</p>'
 +(reverse?'<small>'+say('この概念へつながる知識として表示','Shown as a connection leading to this concept')+'</small>':'')+'</article>';
}
export function installConnections(renderMath){
 const host=document.getElementById('knowledge-main');
 if(!host)return()=>{};
 let focus=nodeById(pendingFocus)?.id||lastFocus,search='',filter='all';
 pendingFocus=null;
 const conceptList=document.getElementById('knowledge-concepts');
 const searchBox=document.getElementById('knowledge-search');
 const notes=readNotes();
 let active=true;
 function choose(id){
  if(!nodeById(id))return;
  focus=id;lastFocus=id;renderConceptList();render();
 }
 function renderConceptList(){
  conceptList.replaceChildren();
  const matching=connectionNodes.filter(n=>(n.ja+' '+n.en).toLocaleLowerCase().includes(search.toLocaleLowerCase()));
  if(!matching.length){conceptList.textContent=say('一致する概念はありません','No matching concepts');return;}
  for(const n of matching){
   const b=document.createElement('button');b.type='button';b.className='knowledge-concept'+(n.id===focus?' selected':'');
   b.textContent=text(n);b.setAttribute('aria-pressed',String(n.id===focus));
   b.addEventListener('click',()=>choose(n.id));conceptList.append(b);
  }
 }
 function showOldNotes(){
  const list=host.querySelector('#knowledge-note-list');
  if(!list)return;
  list.replaceChildren();
  const relevant=notes.filter(n=>n.concept===focus).slice().reverse();
  if(!relevant.length){const p=document.createElement('p');p.textContent=say('まだ記録はありません。記録せずに進んでもかまいません。','No notes yet. You can always continue without writing anything.');list.append(p);return;}
  for(const n of relevant){
   const a=document.createElement('article');a.className='knowledge-note';
   const title=document.createElement('small');
   title.textContent=(n.date?new Date(n.date).toLocaleDateString(getLanguage()==='en'?'en-US':'ja-JP'):'')+(n.related?' · '+text(nodeById(n.related)):'');
   const p=document.createElement('p');p.textContent=n.note;
   a.append(title,p);list.append(a);
  }
 }
 function render(){
  if(!active)return;
  const n=nodeById(focus),all=relatedEdges(focus),shown=filter==='all'?all:all.filter(e=>e.type===filter);
  host.innerHTML='<div class="eyebrow">'+say('現在の概念','SELECTED CONCEPT')+'</div><h2>'+escapeHTML(text(n))+'</h2>'
  +'<p class="knowledge-question">'+escapeHTML(text(n,'jaQuestion','enQuestion'))+'</p>'
  +graphSVG(focus,shown)
  +'<div class="knowledge-filter-row"><label for="knowledge-filter">'+say('関係の種類','Relation type')+'</label><select id="knowledge-filter"><option value="all">'+say('すべてを見る','Show all')+'</option>'+Object.entries(connectionTypes).map(([key,val])=>'<option value="'+key+'" '+(key===filter?'selected':'')+'>'+escapeHTML(val[getLanguage()==='en'?1:0])+'</option>').join('')+'</select></div>'
  +'<div class="knowledge-relations">'+(shown.length?shown.map(e=>relativeEdgeHtml(e,focus)).join(''):'<p>'+say('この種類のつながりはありません。','No relationships in this category.')+'</p>')+'</div>'
  +'<section class="knowledge-revisit"><h3>'+say('他の概念で残した気づきを思い出す','Revisit insights from related concepts')+'</h3><div id="knowledge-related-notes"></div></section>'
  +'<div class="knowledge-jump"><button type="button" class="primary-btn" data-start-journey="'+escapeHTML(focus)+'">'+say('この概念から、自分のつながりを発見 →','Explore your own links from this concept →')+'</button> <button type="button" class="secondary-btn" data-open-chapter="'+escapeHTML(n.chapter)+'">'+say('関連する力学の章を読む →','Read the connected mechanics chapter →')+'</button></div>'
  +'<section class="knowledge-journal"><h3>'+say('後から気づいたことを残す（任意）','Record a connection you noticed (optional)')+'</h3>'
  +'<p>'+say('以前の考えを消す必要はありません。時間がたってから読み返し、考え方の変化を見つけられます。採点も進行制限もありません。','Keep old thoughts instead of overwriting them. Revisit them later to notice how your understanding changes. There is no score or gate.')+'</p>'
  +'<form id="knowledge-note-form"><label for="knowledge-note-text">'+say('自由記述','Your observation')+'</label><textarea id="knowledge-note-text" rows="3" maxlength="2500" placeholder="'+say('例：円運動を学んだら、速度の「向き」が前より重要に思えた。','Example: After circular motion, the direction of velocity matters more to me.')+'"></textarea>'
  +'<label for="knowledge-note-related">'+say('つなげたい概念（任意）','Another concept (optional)')+'</label><select id="knowledge-note-related"><option value="">'+say('選ばない','None')+'</option>'+connectionNodes.filter(o=>o.id!==focus).map(o=>'<option value="'+escapeHTML(o.id)+'">'+escapeHTML(text(o))+'</option>').join('')+'</select>'
  +'<button type="submit" class="primary-btn">'+say('気づきを保存','Save this thought')+'</button><p id="knowledge-note-status" role="status"></p></form><h3>'+say('以前の気づき','Earlier observations')+'</h3><div id="knowledge-note-list"></div></section>';
  host.querySelector('#knowledge-filter').value=filter;
  host.querySelector('#knowledge-filter').addEventListener('change',event=>{filter=event.target.value;render();});
  host.querySelectorAll('[data-knowledge-id]').forEach(btn=>btn.addEventListener('click',()=>{choose(btn.dataset.knowledgeId);host.scrollIntoView({behavior:'smooth',block:'start'});}));
  host.querySelector('#knowledge-note-form').addEventListener('submit',event=>{
   event.preventDefault();const field=host.querySelector('#knowledge-note-text'),value=field.value.trim();
   if(!value){host.querySelector('#knowledge-note-status').textContent=say('文章を入力するか、そのまま探索を続けてください。','Write a thought or continue exploring.');return;}
   if(notes.length>=300){host.querySelector('#knowledge-note-status').textContent=say('記録が300件あります。既存の記録は保持しています。','300 notes reached. Existing notes were preserved.');return;}
   const next={concept:focus,related:host.querySelector('#knowledge-note-related').value||null,note:value,date:new Date().toISOString()};
   if(writeNotes([...notes,next])){notes.push(next);field.value='';host.querySelector('#knowledge-note-status').textContent=say('この端末に保存しました。','Saved on this device.');showOldNotes();}
   else host.querySelector('#knowledge-note-status').textContent=say('端末に保存できませんでした。','Could not save on this device.');
  });
  const relatedNotes=host.querySelector('#knowledge-related-notes');
  const neighborIds=new Set(all.map(e=>e.from===focus?e.to:e.from));
  const previous=notes.filter(entry=>neighborIds.has(entry.concept)).slice(-4).reverse();
  relatedNotes.replaceChildren();
  if(!previous.length){
    const tip=document.createElement('p');
    tip.textContent=say('他の概念で気づきを残すと、ここを学ぶときに再び出会えます。記録は任意です。','Notes you left on connected concepts will appear here when you return. Writing is optional.');
    relatedNotes.append(tip);
  }else{
    for(const earlier of previous){
      const card=document.createElement('article');card.className='knowledge-note';
      const open=document.createElement('button');open.type='button';open.className='knowledge-relation-target';
      open.textContent=text(nodeById(earlier.concept))+' →';
      open.addEventListener('click',()=>choose(earlier.concept));
      const paragraph=document.createElement('p');paragraph.textContent=earlier.note;
      card.append(open,paragraph);relatedNotes.append(card);
    }
  }
  showOldNotes();
 }
 searchBox.addEventListener('input',e=>{search=e.target.value;renderConceptList();});
 renderConceptList();render();
 return()=>{active=false;};
}
