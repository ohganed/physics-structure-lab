import {mechanicsChapters} from './mechanics-data.js';
import {getLanguage} from './language.js';
import {practiceSectionIds,problemsForChapter,getPracticeProblem,compareNumericAnswer,validatePracticeNote,normalizePracticeArchive,makePracticeArchive,mergePracticeNotes} from './mechanics-practice-core.js';

const SAVE_KEY='physics-mechanics-practice-v1';
const DRAFT_KEY='physics-mechanics-practice-drafts-v1';
const language=()=>getLanguage()==='en'?'en':'ja';
const t=(ja,en)=>language()==='en'?en:ja;
const b=pair=>pair?.[language()==='en'?1:0]||'';
const esc=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&#39;');
const tex=s=>'<div class="formula tex-display" data-tex="'+esc(s)+'">'+esc(s)+'</div>';
const label=id=>id==='synthesis'?t('総合・分野横断','Cross-chapter synthesis'):(mechanicsChapters.find(c=>c.key===id)?.name||id);
const pageDate=date=>new Date(date).toLocaleString(language()==='en'?'en-US':'ja-JP',{dateStyle:'medium',timeStyle:'short'});
let section='force',problemId='force-net';
export function focusPracticeChapter(id){if(practiceSectionIds.includes(id)){section=id;problemId=problemsForChapter(id)[0]?.id||problemId;}}
function safelyRead(key,fallback){
 try{const v=JSON.parse(localStorage.getItem(key)||'null');return v??fallback;}catch{return fallback;}
}
function readNotes(){
 const rows=safelyRead(SAVE_KEY,[]);
 return Array.isArray(rows)?rows.filter(validatePracticeNote).slice(0,2000):[];
}
function readDrafts(){
 const stored=safelyRead(DRAFT_KEY,{});
 if(!stored||typeof stored!=='object'||Array.isArray(stored))return {};
 return Object.fromEntries(Object.entries(stored).filter(([id,v])=>getPracticeProblem(id)&&v&&typeof v==='object').map(([id,v])=>[id,{
  response:typeof v.response==='string'?v.response.slice(0,4000):'',
  reflection:typeof v.reflection==='string'?v.reflection.slice(0,4000):'',
  answerInput:typeof v.answerInput==='string'?v.answerInput.slice(0,60):''
 }]));
}
function createId(){return 'mp-'+(typeof crypto!=='undefined'&&crypto.randomUUID?crypto.randomUUID():Date.now().toString(36)+'-'+Math.random().toString(36).slice(2));}
function formatNumber(n){return Number(n.toPrecision(5)).toLocaleString(language()==='en'?'en-US':'ja-JP',{maximumFractionDigits:5});}
export function mechanicsPracticePage(){
 return '<div class="page practice-page"><div class="eyebrow">MECHANICS · REASONING AND SYNTHESIS</div>'
  +'<h1>'+t('力学を、自分で考えて使いこなす','Practice independent mechanics reasoning')+'</h1>'
  +'<p class="lead">'+t('力学12章の演習と、章を越えて考える総合問題。問い・条件・法則の意味から考えられます。誤答しても先へ進めますし、答案を書く前に解説を開いてもかまいません。','Problems across twelve mechanics chapters and integrated synthesis. Begin with the phenomenon, assumptions, and models. You may move on, reveal hints, or read the solution without passing a test.')+'</p>'
  +'<div class="practice-note-intro"><strong>'+t('解けた数より、考えがどう変わったか','How your explanation changes matters more than a score')+'</strong><p>'
  +t('試行錯誤や途中の予想を、日付付きで残せます。計算結果の照合は任意です。','Keep dated snapshots of unfinished ideas and revisions. Numeric comparison is optional.')+'</p></div>'
  +'<div class="practice-layout"><nav class="practice-chapters" id="practice-chapters" aria-label="'+t('演習の章一覧','Practice chapter menu')+'">'
  +practiceSectionIds.map((id,i)=>'<button type="button" data-practice-section="'+esc(id)+'" class="practice-chapter-button"><span>'+String(i+1).padStart(2,'0')+'</span> '+esc(label(id))+'</button>').join('')
  +'</nav><main class="practice-main" id="practice-main"><div id="practice-problem"></div></main></div>'
  +'<section class="card practice-transfer"><h2>'+t('学習記録を持ち出す','Take your learning notes with you')+'</h2>'
  +'<p>'+t('演習の記録は端末内に保存します。この演習専用のJSONで書き出したり、別端末から読み込んだりできます。既存の記録は上書きしません。','Practice notes are stored on this device. Export a practice JSON file and import it elsewhere without overwriting existing records.')+'</p>'
  +'<div class="button-row"><button class="secondary-btn" id="practice-export" type="button">'+t('演習記録をJSONに書き出す','Export practice JSON')+'</button>'
  +'<label class="practice-file-label">'+t('JSONを読み込む','Import JSON')+'<input id="practice-import" type="file" accept=".json,application/json"></label></div>'
  +'<p id="practice-transfer-status" role="status"></p></section></div>';
}
function renderProblem(p){
 const numeric=p.type==='numeric';
 return '<article class="card practice-problem-card">'
  +'<div class="eyebrow">'+esc(label(p.chapter))+' · '+esc(p.id)+'</div>'
  +'<h2>'+esc(b(p.title))+'</h2>'
  +'<h3>'+t('① まず現象を言葉で捉える','① Understand the physical situation')+'</h3><p>'+esc(b(p.situation))+'</p>'
  +'<p class="practice-question"><strong>'+t('問い','Question')+'</strong> '+esc(b(p.question))+'</p>'
  +'<h3>'+t('② 何を仮定したモデルか','② Define your modeling assumptions')+'</h3><p>'+esc(b(p.assumptions))+'</p>'
  +'<p class="practice-principle">'+t('考え方の出発点：','Starting principle: ')+esc(b(p.principle))+'</p>'
  +'<div class="practice-hints"><h3>'+t('③ 考えるためのヒント（任意）','③ Optional thinking hints')+'</h3>'
  +p.hints.map((h,i)=>'<details class="practice-hint"><summary>'+t('ヒント','Hint')+' '+(i+1)+'</summary><p>'+esc(b(h))+'</p></details>').join('')+'</div>'
  +'<div class="practice-response"><h3>'+t('④ 自分の考えを残す（任意）','④ Record your reasoning (optional)')+'</h3>'
  +'<label>'+t('どう考えたか・どこで迷ったか','Your reasoning and uncertainties')
  +'<textarea id="practice-response" maxlength="4000" rows="4"></textarea></label>'
  +(numeric?'<label>'+t('数値の答え（単位は横に表示）','Your numerical answer')+'<div class="practice-answer-row"><input id="practice-numeric" inputmode="decimal" type="number" step="any" aria-describedby="practice-unit"><span id="practice-unit">'+esc(p.answer.unit)+'</span><button type="button" class="secondary-btn" id="practice-check">'+t('参考値と照らす','Compare with model value')+'</button></div></label><p class="muted">'+t('この照合は計算値の近さだけを示します。理解力の採点ではありません。','This only checks numerical closeness, not scientific understanding.')+'</p><p role="status" id="practice-check-status"></p>':'')
  +'<details class="practice-solution"><summary>'+t('途中式と考え方を、順番に見る','Reveal the full reasoning, one step at a time')+'</summary>'
  +'<ol class="practice-solution-steps">'+p.steps.map(step=>'<li>'+tex(step.tex)+'<p>'+esc(b(step.why))+'</p></li>').join('')+'</ol>'
  +(numeric?'<p class="practice-reference-answer">'+t('モデルの参考値：','Model reference value: ')+formatNumber(p.answer.value)+' '+esc(p.answer.unit)+'</p>':'')
  +'<p><strong>'+t('物理的な解釈：','Interpretation: ')+'</strong>'+esc(b(p.interpretation))+'</p>'
  +'<p class="practice-trap"><strong>'+t('間違えやすいところ：','Common pitfall: ')+'</strong>'+esc(b(p.trap))+'</p></details>'
  +'<h3>'+t('⑤ 別の知識と結び付ける','⑤ Connect this to another idea')+'</h3>'
  +'<div class="practice-links">'+p.links.map(id=>'<button type="button" class="secondary-btn" data-practice-jump="'+esc(id)+'">'+esc(label(id))+' →</button>').join('')+'</div>'
  +'<label class="practice-reflection-label">'+t('解説を読んだ後、今はどう考えるか（任意）','How do you see this differently now? (optional)')
  +'<textarea id="practice-reflection" rows="3" maxlength="4000"></textarea></label>'
  +'<button class="primary-btn" type="button" id="practice-save">'+t('この時点の考えを日付付きで残す','Save a dated snapshot of my thinking')+'</button>'
  +'<p id="practice-save-status" role="status"></p>'
  +'<h3>'+t('以前の考えを読み返す','Revisit earlier explanations')+'</h3><div id="practice-history"></div></div></article>';
}
export function installMechanicsPractice(renderMath){
 const main=document.getElementById('practice-main');if(!main)return()=>{};
 const $=id=>document.getElementById(id);
 let notes=readNotes(),drafts=readDrafts();
 const safeStore=(key,value)=>{try{localStorage.setItem(key,JSON.stringify(value));return true;}catch{return false;}};
 const setStatus=(id,text)=>{$(id).textContent=text;};
 function saveDraft(){
  if(!problemId)return;
  drafts[problemId]={
   response:$('practice-response')?.value||'',
   reflection:$('practice-reflection')?.value||'',
   answerInput:$('practice-numeric')?.value||''
  };
  safeStore(DRAFT_KEY,drafts);
 }
 function currentRecord(){
  saveDraft();
  const d=drafts[problemId]||{};
  return {id:createId(),problemId,date:new Date().toISOString(),
   response:d.response||'',reflection:d.reflection||'',answerInput:d.answerInput??null};
 }
 function showHistory(id){
  const host=$('practice-history');host.replaceChildren();
  const relevant=notes.filter(n=>n.problemId===id).slice(-20).reverse();
  if(!relevant.length){
   const line=document.createElement('p');line.className='muted';line.textContent=t('まだ記録がありません。気づいたときだけ書けば大丈夫です。','No snapshots yet. Record something only when it is useful.');host.append(line);return;
  }
  const draft=drafts[id]||{};
  for(const n of relevant){
   const entry=document.createElement('details');entry.className='practice-history-entry';
   const summary=document.createElement('summary');summary.textContent=pageDate(n.date);
   entry.append(summary);
   const rows=[[t('当時の考え','Earlier reasoning'),n.response],[t('当時の数値','Earlier numerical entry'),n.answerInput],[t('当時の気づき','Earlier reflection'),n.reflection]];
   for(const [heading,value] of rows){
    const line=document.createElement('p'),strong=document.createElement('strong');
    strong.textContent=heading+': ';line.append(strong,document.createTextNode(value||t('記録なし','Not recorded')));entry.append(line);
   }
   const curr=document.createElement('p');curr.className='practice-history-current';
   curr.textContent=t('現在の考え：','Current draft: ')+(draft.response||t('未記入','Not entered'));
   curr.dataset.practiceCurrent='1';entry.append(curr);
   host.append(entry);
  }
 }
 function showProblem(id){
  const p=getPracticeProblem(id);if(!p)return;
  problemId=id;main.innerHTML='<div class="practice-problem-switch" id="practice-problem-switch">'+
    problemsForChapter(section).map(x=>'<button type="button" class="practice-problem-button '+(x.id===id?'active':'')+'" data-practice-problem="'+esc(x.id)+'">'+esc(b(x.title))+'</button>').join('')+
    '</div>'+renderProblem(p);
  const d=drafts[id]||{};
  $('practice-response').value=d.response||'';$('practice-reflection').value=d.reflection||'';
  if(p.type==='numeric')$('practice-numeric').value=d.answerInput||'';
  ['practice-response','practice-reflection','practice-numeric'].forEach(name=>{
   const el=$(name);if(el)el.addEventListener('input',()=>{
    saveDraft();
    main.querySelectorAll('[data-practice-current]').forEach(node=>{
     node.textContent=t('現在の考え：','Current draft: ')+($('practice-response').value||t('未記入','Not entered'));
    });
   });
  });
  $('practice-save').addEventListener('click',()=>{
   if(notes.length>=2000){setStatus('practice-save-status',t('保存上限です。JSONを書き出して保管してください。','Storage limit reached. Export your journal.'));return;}
   const record=currentRecord();
   if(!validatePracticeNote(record)){setStatus('practice-save-status',t('記録を確認できませんでした。','Could not validate the note.'));return;}
   if(!safeStore(SAVE_KEY,[...notes,record])){setStatus('practice-save-status',t('この端末に保存できませんでした。','Could not save on this device.'));return;}
   notes.push(record);setStatus('practice-save-status',t('以前の記録を消さずに保存しました。','Saved without replacing earlier notes.'));showHistory(id);
  });
  if(p.type==='numeric')$('practice-check').addEventListener('click',()=>{
   const result=compareNumericAnswer(id,$('practice-numeric').value);
   const target=result.kind==='close'
      ?t('参考値に近いです。ただし、途中の理由と仮定も確認してみましょう。','Close to the reference. Also examine your steps and assumptions.')
      :result.kind==='different'
      ?t('参考値とは違います。単位・符号・前提条件・式の立て方から見直せます。','Different from the reference. Revisit units, signs, assumptions, and the model.')
      :t('数値を入力すると参考値と比較できます。','Enter a number to compare with the model.');
   setStatus('practice-check-status',target);
  });
  main.querySelectorAll('[data-practice-problem]').forEach(el=>el.addEventListener('click',()=>showProblem(el.dataset.practiceProblem)));
  main.querySelectorAll('[data-practice-jump]').forEach(el=>el.addEventListener('click',()=>showSection(el.dataset.practiceJump)));
  if(typeof renderMath==='function')renderMath(main);
  showHistory(id);
 }
 function showSection(id){
  if(!practiceSectionIds.includes(id))return;
  saveDraft();
  section=id;
  const list=problemsForChapter(id);
  if(!list.some(p=>p.id===problemId))problemId=list[0]?.id;
  document.querySelectorAll('[data-practice-section]').forEach(el=>{
   const active=el.dataset.practiceSection===id;el.classList.toggle('active',active);el.setAttribute('aria-current',active?'true':'false');
  });
  showProblem(problemId);
 }
 document.querySelectorAll('[data-practice-section]').forEach(el=>el.addEventListener('click',()=>showSection(el.dataset.practiceSection)));
 $('practice-export').addEventListener('click',()=>{
  try{
   const json=JSON.stringify(makePracticeArchive(notes),null,2);
   const url=URL.createObjectURL(new Blob([json],{type:'application/json;charset=utf-8'}));
   const link=document.createElement('a');link.href=url;link.download='physics-mechanics-practice-'+new Date().toISOString().slice(0,10)+'.json';
   document.body.append(link);link.click();link.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);
   setStatus('practice-transfer-status',t('JSONを書き出しました。自分の書いた文章が含まれます。','JSON exported. It contains your own writing.'));
  }catch{setStatus('practice-transfer-status',t('書き出しに失敗しました。','Export failed.'));}
 });
 $('practice-import').addEventListener('change',async event=>{
  const file=event.target.files?.[0];if(!file)return;
  try{
   if(file.size>2*1024*1024)throw new RangeError('File too large');
   const incoming=normalizePracticeArchive(JSON.parse(await file.text()));
   const merged=mergePracticeNotes(notes,incoming);
   if(!safeStore(SAVE_KEY,merged.notes))throw new RangeError('Storage full');
   notes=merged.notes;showHistory(problemId);
   setStatus('practice-transfer-status',t('記録を読み込みました。','Practice notes imported.')+' '+t('重複・衝突を保護：','Duplicates/conflicts: ')+(merged.skipped+merged.conflicts));
  }catch{
   setStatus('practice-transfer-status',t('読み込みに失敗しました。ファイル形式や容量を確認してください。','Import failed. Check file format and size.'));
  }finally{event.target.value='';}
 });
 if(!practiceSectionIds.includes(section))section='force';
 if(!problemsForChapter(section).some(x=>x.id===problemId))problemId=problemsForChapter(section)[0]?.id;
 showSection(section);
 return()=>{};
}
