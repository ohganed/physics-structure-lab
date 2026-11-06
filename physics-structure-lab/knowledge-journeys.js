import {connectionNodes,connectionTypes,nodeById} from './knowledge-connections-data.js';
import {getLanguage} from './language.js';
import {shortestConceptPath,validateLearnerLink,validateRevisit,validateLegacyNote,createNotebookExport,normalizeNotebook,mergeNotebooks} from './knowledge-journeys-core.js';

const STORE='physics-structure-lab-journeys-v1';
const LEGACY='physics-structure-lab-connection-notes-v1';
const en=()=>getLanguage()==='en';
const t=(ja,eng)=>en()?eng:ja;
const name=id=>{const n=nodeById(id);return n?(en()?n.en:n.ja):id;};
const escape=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const opts=()=>connectionNodes.map(n=>'<option value="'+n.id+'">'+escape(name(n.id))+'</option>').join('');
let pendingStart=null;
export function setJourneyStart(id){if(nodeById(id))pendingStart=id;}
function safeParse(key,fallback){try{const parsed=JSON.parse(localStorage.getItem(key)||'null');return parsed??fallback;}catch{return fallback;}}
function readData(){
 const obj=safeParse(STORE,{});
 const notes=safeParse(LEGACY,[]);
 return {
  notes:Array.isArray(notes)?notes.filter(validateLegacyNote).slice(0,500):[],
  links:Array.isArray(obj.links)?obj.links.filter(validateLearnerLink).slice(0,500):[],
  revisits:Array.isArray(obj.revisits)?obj.revisits.filter(validateRevisit).slice(0,500):[]
 };
}
function saveData(data,saveLegacy=false){
 const safe=createNotebookExport(data.notes,data.links,data.revisits);
 const oldCore=localStorage.getItem(STORE),oldNotes=localStorage.getItem(LEGACY);
 try{
  localStorage.setItem(STORE,JSON.stringify({version:1,links:safe.links,revisits:safe.revisits}));
  if(saveLegacy)localStorage.setItem(LEGACY,JSON.stringify(safe.notes));
 }catch(error){
  try{
   if(oldCore===null)localStorage.removeItem(STORE);else localStorage.setItem(STORE,oldCore);
   if(saveLegacy){if(oldNotes===null)localStorage.removeItem(LEGACY);else localStorage.setItem(LEGACY,oldNotes);}
  }catch{}
  throw error;
 }
}
function formatDate(value){
 try{return new Date(value).toLocaleString(en()?'en-US':'ja-JP',{dateStyle:'medium',timeStyle:'short'});}catch{return '';}
}
export function journeysPage(){
 const options=opts(),types=Object.entries(connectionTypes).map(([k,v])=>'<option value="'+k+'">'+escape(v[en()?1:0])+'</option>').join('');
 return '<div class="page journeys-page"><div class="eyebrow">KNOWLEDGE CONNECTIONS · DISCOVERY WORKSHOP</div>'
  +'<h1>'+t('自分で、知識のつながりを発見する','Discover your own knowledge connections')+'</h1>'
  +'<p class="lead">'+t('教科書の順番や一度の理解に縛られず、知っている概念と新しく学んだ概念を結んでみましょう。見つけた関係は仮説として保存できます。あとから書き換えるのではなく、考えが変化してきた道筋を残します。','Explore how ideas connect across lessons. You can propose your own links as hypotheses and keep a dated history of how your thinking changes. There are no required answers or mastery gates.')+'</p>'
  +'<section class="card"><h2>'+t('① 2つの概念の間を探索する','① Find a conceptual route')+'</h2>'
  +'<p>'+t('これは概念間の最短経路を表示する機能で、論理的な証明ではありません。つながりの説明と限界も読みましょう。','This finds a short route through the concept network, not a logical proof. Examine each connection and its limitations.')+'</p>'
  +'<div class="journey-controls"><label>'+t('出発概念','Starting concept')+'<select id="journey-start">'+options+'</select></label>'
  +'<label>'+t('行き先の概念','Destination concept')+'<select id="journey-end">'+options+'</select></label></div>'
  +'<label class="journey-checkbox"><input id="journey-include" type="checkbox"> '+t('自分で作った仮説のつながりも経路に含める','Include my proposed links (unverified hypotheses)')+'</label>'
  +'<div id="journey-path" class="journey-path" aria-live="polite"></div></section>'
  +'<section class="card"><h2>'+t('② 自分だけの概念のつながりを記録する','② Propose your own conceptual link')+'</h2>'
  +'<p>'+t('既知の概念から新しい発見をしたとき、なぜ似ているのか、どこが違うのかを書けます。書いた内容は教科書の検証済み説明とは区別して表示します。','Record why two ideas seem related, and where the comparison breaks down. Your link is marked as a learner hypothesis, not an established textbook fact.')+'</p>'
  +'<form id="journey-link-form"><div class="journey-controls"><label>'+t('概念A','Concept A')+'<select id="journey-from" required>'+options+'</select></label><label>'+t('概念B','Concept B')+'<select id="journey-to" required>'+options+'</select></label></div>'
  +'<label>'+t('どのような関係だと思う？','What kind of relation?')+'<select id="journey-type">'+types+'</select></label>'
  +'<label>'+t('つながると思った理由','Why do you think they connect?')+'<textarea id="journey-reason" rows="3" maxlength="1200" required></textarea></label>'
  +'<label>'+t('同一視できない点・成立条件','Where does the analogy fail? / Assumptions')+'<textarea id="journey-boundary" rows="3" maxlength="1200" required></textarea></label>'
  +'<button class="primary-btn" type="submit">'+t('仮説として保存','Save as a hypothesis')+'</button><p id="journey-link-status" role="status"></p></form>'
  +'<h3>'+t('自分が提案したつながり','My proposed connections')+'</h3><div id="journey-links"></div></section>'
  +'<section class="card"><h2>'+t('③ 時間を経て理解が変わったことを残す','③ Notice how your understanding evolves')+'</h2>'
  +'<p>'+t('以前の考えを間違いとして消さず、当時はどう見えていたか、今はどう考えるかを並べて残します。記録は任意です。','Keep your earlier interpretation rather than erasing it. Compare how the same concept looked before and how you see it now.')+'</p>'
  +'<form id="journey-revisit-form"><label>'+t('振り返る概念','Concept to revisit')+'<select id="journey-concept">'+options+'</select></label>'
  +'<label>'+t('過去の気づきから引用（任意）','Use a previous observation (optional)')+'<select id="journey-legacy"><option value="">'+t('引用しない','None')+'</option></select></label>'
  +'<label>'+t('以前はこう考えていた','What I thought before')+'<textarea id="journey-before" maxlength="1800" rows="3" required></textarea></label>'
  +'<label>'+t('今はこう考えている','What I think now')+'<textarea id="journey-now" maxlength="1800" rows="3" required></textarea></label>'
  +'<button type="submit" class="primary-btn">'+t('理解の変化を記録する','Record this change in understanding')+'</button><p id="journey-revisit-status" role="status"></p></form>'
  +'<h3>'+t('理解の熟成の記録','A timeline of changing ideas')+'</h3><div id="journey-timeline"></div></section>'
  +'<section class="card"><h2>'+t('④ 記録を持ち出す・戻す','④ Export or import your learning journal')+'</h2><p>'+t('この記録はこの端末内に保存されます。別の端末へはJSONファイルで移動できます。インポートは既存の記録を上書きせず、重複を除いて追加します。衝突した記録は保護のためスキップします。','Records are kept on this device. Export JSON to move them between devices. Import adds non-conflicting entries without silently overwriting older ones.')+'</p>'
  +'<div class="button-row"><button id="journey-export" type="button" class="secondary-btn">'+t('JSONとして書き出す','Export JSON')+'</button><label class="journey-file-label">'+t('JSONを読み込む','Import JSON')+'<input type="file" id="journey-import" accept=".json,application/json"></label></div>'
  +'<p id="journey-transfer-status" role="status"></p><p class="muted">'+t('アプリから外部サーバーへ記録を送信しません。保存したJSONには自分で書いた文章が含まれます。共有時には内容に注意してください。','The app does not send your notes to a server. Exported JSON contains your own writing; check its contents before sharing it.')+'</p></section></div>';
}
export function installJourneys(){
 const $=id=>document.getElementById(id);
 if(!$('journey-start'))return()=>{};
 let data=readData(),focus=nodeById(pendingStart)?.id||'velocity';
 pendingStart=null;
 const first=focus;$('journey-start').value=first;$('journey-end').value=first==='circular'?'velocity':'circular';$('journey-from').value=first;$('journey-to').value=first==='circular'?'velocity':'circular';$('journey-concept').value=first;
 const status=(id,message)=>{$(id).textContent=message;};
 const id=()=>typeof crypto!=='undefined'&&crypto.randomUUID?crypto.randomUUID():('psl-'+Date.now().toString(36)+'-'+Math.random().toString(36).slice(2));
 const addItem=(parent,tag,className,content)=>{
  const el=document.createElement(tag);if(className)el.className=className;el.textContent=content;parent.append(el);return el;
 };
 function showPath(){
  const from=$('journey-start').value,to=$('journey-end').value,include=$('journey-include').checked;
  const path=shortestConceptPath(from,to,data.links,include),container=$('journey-path');container.replaceChildren();
  if(!path){addItem(container,'p','',t('登録されたつながりだけでは経路を見つけられませんでした。関連がないという証明ではありません。','No route exists in this curated graph. This does not establish that the concepts are unrelated.'));return;}
  if(path.edges.length===0){addItem(container,'p','',t('同じ概念が選択されています。別の概念を選ぶと経路を比較できます。','You selected the same concept twice. Choose another to compare.'));return;}
  addItem(container,'p','journey-path-caption',t('関係をたどる順序（証明や必須学習順ではありません）','A possible route (not a proof or compulsory sequence)')+' · '+path.edges.length+' '+t('つのつながり','links'));
  const ol=document.createElement('ol');ol.className='journey-path-steps';container.append(ol);
  path.edges.forEach((edge,i)=>{
   const li=document.createElement('li');li.className='journey-path-item';ol.append(li);
   addItem(li,'strong','',name(path.nodes[i])+' → '+name(path.nodes[i+1]));
   const hypoth=edge.source==='learner';addItem(li,'small','journey-source',hypoth?t('学習者の仮説（未検証）','Learner hypothesis (unverified)'):t('教材で用意したつながり','Curated textbook link'));
   addItem(li,'p','',hypoth?edge.reason:(en()?edge.en:edge.ja));
   addItem(li,'p','journey-boundary',t('注意：','Limitation: ')+(hypoth?edge.boundary:(en()?edge.limitEn:edge.limitJa)));
  });
 }
 function showLinks(){
  const host=$('journey-links');host.replaceChildren();
  if(!data.links.length){addItem(host,'p','muted',t('まだありません。発見したときにだけ書けば大丈夫です。','No links yet. Only write when you discover a relationship.'));return;}
  for(const link of data.links.slice().reverse()){
   const card=document.createElement('article');card.className='journey-entry';host.append(card);
   addItem(card,'strong','',name(link.from)+' ↔ '+name(link.to));
   addItem(card,'small','journey-source',t('学習者の仮説（未検証）','Learner hypothesis (unverified)')+' · '+formatDate(link.date));
   addItem(card,'p','',link.reason);
   addItem(card,'p','journey-boundary',t('条件・違い：','Boundary: ')+link.boundary);
   const button=addItem(card,'button','secondary-btn',t('この関係を経路で調べる','Explore this connection'));
   button.type='button';button.addEventListener('click',()=>{
    $('journey-start').value=link.from;$('journey-end').value=link.to;$('journey-include').checked=true;showPath();$('journey-path').scrollIntoView({block:'start',behavior:'smooth'});
   });
  }
 }
 function showTimeline(){
  const host=$('journey-timeline');host.replaceChildren();
  if(!data.revisits.length){addItem(host,'p','muted',t('記録が増えるにつれて、考えの変化を読み返せます。','As observations accumulate, your changes in understanding become visible.'));return;}
  for(const revisit of data.revisits.slice().reverse()){
   const article=document.createElement('article');article.className='journey-entry';host.append(article);
   addItem(article,'strong','',name(revisit.concept));
   addItem(article,'small','',formatDate(revisit.date));
   addItem(article,'p','',t('以前：','Before: ')+revisit.before);
   addItem(article,'p','journey-now',t('今：','Now: ')+revisit.now);
  }
 }
 function showLegacy(){
  const select=$('journey-legacy'),concept=$('journey-concept').value;select.replaceChildren();
  const empty=document.createElement('option');empty.value='';empty.textContent=t('引用しない','None');select.append(empty);
  for(const [index,note] of data.notes.entries())if(note.concept===concept){
   const opt=document.createElement('option');opt.value=String(index);opt.textContent=(note.date?formatDate(note.date)+' · ':'')+note.note.slice(0,65);
   select.append(opt);
  }
 }
 function saveOwn(){
  try{saveData(data);return true;}catch{return false;}
 }
 ['journey-start','journey-end','journey-include'].forEach(k=>$(k).addEventListener('change',showPath));
 $('journey-concept').addEventListener('change',()=>{showLegacy();$('journey-legacy').value='';});
 $('journey-legacy').addEventListener('change',()=>{
  const selected=$('journey-legacy').value;
  if(selected!==''){
   const note=data.notes[Number(selected)];
   if(note&&note.concept===$('journey-concept').value)$('journey-before').value=note.note;
  }
 });
 $('journey-link-form').addEventListener('submit',event=>{
  event.preventDefault();
  const link={id:id(),from:$('journey-from').value,to:$('journey-to').value,type:$('journey-type').value,
   reason:$('journey-reason').value.trim(),boundary:$('journey-boundary').value.trim(),date:new Date().toISOString()};
  if(!validateLearnerLink(link)){status('journey-link-status',t('異なる概念を選び、理由と条件の両方を入力してください。','Choose distinct concepts and provide both reasoning and limitations.'));return;}
  if(data.links.length>=500){status('journey-link-status',t('保存上限です。JSONを書き出して保管してください。','Storage limit reached. Export your journal.'));return;}
  data.links.push(link);
  if(!saveOwn()){data.links.pop();status('journey-link-status',t('保存できませんでした。','Could not save.'));return;}
  $('journey-reason').value='';$('journey-boundary').value='';
  status('journey-link-status',t('仮説として保存しました。いつでも見直せます。','Saved as a hypothesis, not a verified law.'));
  showLinks();showPath();
 });
 $('journey-revisit-form').addEventListener('submit',event=>{
  event.preventDefault();
  const revisit={id:id(),concept:$('journey-concept').value,before:$('journey-before').value.trim(),now:$('journey-now').value.trim(),date:new Date().toISOString()};
  if(!validateRevisit(revisit)){status('journey-revisit-status',t('以前と今の考えを両方書いてください。','Write both your earlier and current interpretation.'));return;}
  if(data.revisits.length>=500){status('journey-revisit-status',t('保存上限です。先にJSONを書き出してください。','Storage limit reached. Export your journal.'));return;}
  data.revisits.push(revisit);
  if(!saveOwn()){data.revisits.pop();status('journey-revisit-status',t('保存できませんでした。','Could not save.'));return;}
  $('journey-before').value='';$('journey-now').value='';
  status('journey-revisit-status',t('以前の考えを残したまま保存しました。','Saved without overwriting earlier thoughts.'));showTimeline();
 });
 $('journey-export').addEventListener('click',()=>{
  try{
   const json=JSON.stringify(createNotebookExport(data.notes,data.links,data.revisits),null,2);
   const blob=new Blob([json],{type:'application/json;charset=utf-8'});
   const url=URL.createObjectURL(blob),a=document.createElement('a');
   a.href=url;a.download='physics-knowledge-journal-'+new Date().toISOString().slice(0,10)+'.json';
   document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);
   status('journey-transfer-status',t('JSONを書き出しました。個人的な文章が含まれるため共有時はご注意ください。','JSON exported. This contains personal writing; review before sharing.'));
  }catch{status('journey-transfer-status',t('エクスポートできませんでした。','Export failed.'));}
 });
 $('journey-import').addEventListener('change',async event=>{
  const file=event.target.files?.[0];if(!file)return;
  try{
   if(file.size>1024*1024)throw new RangeError('File too large');
   const incoming=normalizeNotebook(JSON.parse(await file.text()));
   const merged=mergeNotebooks(data,incoming);
   const mergedData={notes:merged.notes,links:merged.links,revisits:merged.revisits};
   saveData(mergedData,true);data=mergedData;
   showLinks();showTimeline();showLegacy();showPath();
   const added=Object.keys(mergedData).reduce((sum,key)=>sum+mergedData[key].length-data[key].length,0);
   const conflicts=merged.linksConflicts+merged.revisitsConflicts;
   status('journey-transfer-status',t('読み込みました。既存の記録は保持しています。','Imported without overwriting existing entries.')+' '+(conflicts?t('IDの衝突が '+conflicts+' 件あり、保護のためスキップしました。',conflicts+' conflicting ID(s) skipped for safety.'):''));
  }catch(error){
   status('journey-transfer-status',t('ファイルを読み込めませんでした。対応するJSON形式・サイズ・内容を確認してください。','Import failed. Check the file format, size, and journal data.'));
  }finally{event.target.value='';}
 });
 showPath();showLinks();showLegacy();showTimeline();
 return()=>{};
}