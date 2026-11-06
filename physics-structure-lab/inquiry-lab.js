import {inquiryScenarios,scenarioById,evaluateInquiry,compareInquiryTrials,validInvestigation} from './inquiry-core.js';
import {getLanguage} from './language.js';

const DRAFT_KEY='physics-structure-lab-inquiry-draft-v1';
const WORKSPACES_KEY='physics-structure-lab-inquiry-workspaces-v1';
const RECORD_KEY='physics-structure-lab-inquiry-records-v1';
const lng=()=>getLanguage()==='en'?1:0;
const tr=(ja,en)=>lng()?en:ja;
const local=a=>a[lng()];
const esc=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const dateText=d=>new Date(d).toLocaleString(lng()?'en-US':'ja-JP',{dateStyle:'medium',timeStyle:'short'});
const number=n=>Number.isFinite(n)?(Math.abs(n)<.0001&&n!==0?n.toExponential(3):Number(n.toPrecision(5)).toString()):'—';
const initialInputs=c=>Object.fromEntries(c.inputs.map(i=>[i.key,i.initial]));
let scratch=null;

function initialDraft(){
 return {scenario:'cart',mode:'guided',values:initialInputs(inquiryScenarios[0]),trials:[],question:'',hypothesis:'',interpretation:'',nextQuestion:''};
}
function readJSON(key,fallback){
 try{const obj=JSON.parse(localStorage.getItem(key)||'null');return obj??fallback;}catch{return fallback;}
}
function normalizeDraft(raw){
 if(!raw||typeof raw!=='object'||!scenarioById(raw.scenario))return initialDraft();
 const c=scenarioById(raw.scenario);
 const values={...initialInputs(c),...(raw.values&&typeof raw.values==='object'?raw.values:{})};
 try{evaluateInquiry(c.id,values);}catch{return initialDraft();}
 return {
  scenario:c.id,mode:['guided','light','open'].includes(raw.mode)?raw.mode:'guided',values,
  trials:Array.isArray(raw.trials)?raw.trials.filter(t=>{
   try{if(t.scenario!==c.id)return false;const expected=evaluateInquiry(c.id,t.inputs);return Math.abs(t.primary-expected.primary)<1e-7&&Math.abs(t.secondary-expected.secondary)<1e-7;}catch{return false;}
  }).slice(0,40):[],
  ...Object.fromEntries(['question','hypothesis','interpretation','nextQuestion'].map(key=>[key,typeof raw[key]==='string'?raw[key].slice(0,2000):'']))
 };
}
function readDraft(){return normalizeDraft(readJSON(DRAFT_KEY,null));}
function saveDraft(draft){try{localStorage.setItem(DRAFT_KEY,JSON.stringify(draft));return true;}catch{return false;}}
function readWorkspaces(){
 const source=readJSON(WORKSPACES_KEY,{}),result={};
 if(source&&typeof source==='object'&&!Array.isArray(source)){
  for(const c of inquiryScenarios){
   if(source[c.id]?.scenario===c.id)result[c.id]=normalizeDraft(source[c.id]);
  }
 }
 return result;
}
function saveWorkspaces(spaces){try{localStorage.setItem(WORKSPACES_KEY,JSON.stringify(spaces));return true;}catch{return false;}}
function readRecords(){
 const rows=readJSON(RECORD_KEY,[]);
 return Array.isArray(rows)?rows.filter(validInvestigation).slice(0,500):[];
}
function writeRecords(rows){try{localStorage.setItem(RECORD_KEY,JSON.stringify(rows));return true;}catch{return false;}}
function recordId(){return 'inq-'+(typeof crypto!=='undefined'&&crypto.randomUUID?crypto.randomUUID():Date.now().toString(36)+'-'+Math.random().toString(36).slice(2));}
const paramControls=c=>c.inputs.map(x=>
  '<label class="inquiry-input-label">'+esc(local(x.label))+' <output id="inquiry-output-'+x.key+'">'+x.initial+'</output>'
  +'<input type="range" data-inquiry-input="'+x.key+'" min="'+x.min+'" max="'+x.max+'" step="'+x.step+'" value="'+x.initial+'"></label>').join('');
export function inquiryPage(){
 return '<div class="page inquiry-page"><div class="eyebrow">SCIENTIFIC INQUIRY · EVIDENCE AND REASONING</div>'
  +'<h1>'+tr('科学的な問いを、自分で育てる','Develop your own scientific questions')+'</h1>'
  +'<p class="lead">'+tr('理解度テストではありません。現象を観察して問いを作り、条件を変え、結果を比較し、説明を組み直す場所です。今は分からないこともそのまま残せます。','This is not a mastery test. Observe a phenomenon, pose a question, compare conditions, inspect model predictions, and revise your explanation. Uncertainty is welcome.')+'</p>'
  +'<div class="inquiry-toolbar"><label>'+tr('支援の量は自分で選ぶ','Choose your level of guidance')
  +'<select id="inquiry-mode"><option value="guided">'+tr('観察の問いかけあり','Guided prompts')+'</option>'
  +'<option value="light">'+tr('手掛かりは少なめ','Light prompts')+'</option><option value="open">'+tr('自由研究','Open investigation')+'</option></select></label></div>'
  +'<div class="inquiry-layout"><nav class="inquiry-case-list" aria-label="'+tr('研究テーマ一覧','Investigations')+'">'
  +inquiryScenarios.map(c=>'<button class="inquiry-case-button" type="button" data-inquiry-case="'+c.id+'">'+esc(local(c.title))+'</button>').join('')+'</nav>'
  +'<div id="inquiry-content"></div></div></div>';
}
function contentFor(c,mode){
 const guided=mode==='guided',open=mode==='open';
 return '<section class="card inquiry-study">'
  +'<div class="eyebrow">INVESTIGATION · '+esc(c.id.toUpperCase())+'</div><h2>'+esc(local(c.title))+'</h2>'
  +'<h3>'+tr('① 現象を考える','① Observe the phenomenon')+'</h3><p>'+esc(local(c.phenomenon))+'</p>'
  +(guided?'<div class="callout"><strong>'+tr('考えるための問い','A question to begin with')+'</strong><p>'+esc(local(c.prompt))+'</p></div>':'')
  +'<label class="inquiry-writing">'+tr('自分が調べたい問い（空欄でも進めます）','Your question (optional)')
  +'<textarea id="inquiry-question" rows="2" maxlength="2000" placeholder="'+tr('何を変えると何が変わる？','What changes when I vary…?')+'"></textarea></label>'
  +(!open?'<p class="inquiry-hint">'+tr('最初は正しい予想でなくても構いません。','Your initial idea does not have to be correct.')+'</p>':'')
  +'<label class="inquiry-writing">'+tr('予想・仮説（任意）','Prediction / hypothesis (optional)')
  +'<textarea id="inquiry-hypothesis" rows="2" maxlength="2000"></textarea></label>'
  +'<h3>'+tr('② 条件を選び、モデルの予測を見る','② Choose variables and inspect model predictions')+'</h3>'
  +'<div class="callout warm"><strong>'+tr('ここで得られるのは実測値ではなく、モデルの予測です','These are model predictions, not measurements')+'</strong>'
  +'<p>'+esc(local(c.assumptions))+'</p></div>'
  +'<div class="inquiry-controls">'+paramControls(c)+'</div>'
  +'<div class="inquiry-prediction"><div id="inquiry-result" aria-live="polite"></div>'
  +'<button class="primary-btn" id="inquiry-capture" type="button">'+tr('この条件を試行として記録','Capture this trial')+'</button></div>'
  +'<p class="muted">'+tr('比較するときは、できれば変数を一つだけ変えてみましょう。複数を同時に変えても試行は記録できます。','For a controlled comparison, try varying just one parameter. You may still capture trials with several parameters changed.')+'</p>'
  +'<h3>'+tr('③ 試行を比較する','③ Compare trials')+'</h3>'
  +'<div id="inquiry-trial-list"></div><div class="inquiry-comparison" id="inquiry-comparison"></div>'
  +'<details class="inquiry-interpretation"><summary>'+tr('モデルの式と、考えを広げるためのヒントを見る（任意）','Show equations and reasoning prompts (optional)')+'</summary>'
  +'<div class="formula tex-display" data-tex="'+esc(c.law)+'">'+esc(c.law)+'</div>'
  +'<p>'+esc(local(c.explanation))+'</p><p><strong>'+tr('成り立たない条件・注意','Limits of the model')+':</strong> '+esc(local(c.caution))+'</p></details>'
  +'<h3>'+tr('④ 考えを更新する','④ Reconsider your explanation')+'</h3>'
  +'<label class="inquiry-writing">'+tr('結果を見て気づいたこと・別の説明の可能性（任意）','What did you notice? Other possible explanations (optional)')
  +'<textarea id="inquiry-interpretation" rows="3" maxlength="2000"></textarea></label>'
  +'<label class="inquiry-writing">'+tr('次に調べてみたい問い（任意）','A new question for later (optional)')
  +'<textarea id="inquiry-nextQuestion" rows="2" maxlength="2000"></textarea></label>'
  +'<div class="button-row"><button class="primary-btn" type="button" id="inquiry-save">'+tr('現在の研究を記録','Save a snapshot of this investigation')+'</button>'
  +'<button class="secondary-btn" type="button" id="inquiry-clear-trials">'+tr('試行だけを新しく始める','Start a fresh set of trials')+'</button></div>'
  +'<p id="inquiry-status" role="status"></p>'
  +'<h3>'+tr('以前の研究を読み返す','Revisit earlier investigations')+'</h3><div id="inquiry-history"></div>'
  +'<div class="button-row"><button type="button" class="secondary-btn" data-open-connection="'+esc(c.concept)+'">'+tr('この概念のつながりを見る','Explore concept connections')+'</button>'
  +'<button type="button" class="secondary-btn" data-start-journey="'+esc(c.concept)+'">'+tr('別分野へつなげる','Develop a new connection')+'</button></div>'
  +'</section>';
}
export function installInquiry(renderMath){
 const host=document.getElementById('inquiry-content');if(!host)return()=>{};
 let draft=normalizeDraft(scratch&&scenarioById(scratch.scenario)?scratch:readDraft());
 let spaces=readWorkspaces();
 spaces[draft.scenario]=draft;
 let records=readRecords();
 const $=id=>document.getElementById(id);
 const mode=$('inquiry-mode');mode.value=draft.mode;
 function remember(){scratch={...draft};spaces[draft.scenario]=draft;saveWorkspaces(spaces);saveDraft(draft);}
 function attach(){
  const c=scenarioById(draft.scenario);host.innerHTML=contentFor(c,draft.mode);
  document.querySelectorAll('[data-inquiry-case]').forEach(b=>{
   b.classList.toggle('active',b.dataset.inquiryCase===c.id);
   b.setAttribute('aria-pressed',String(b.dataset.inquiryCase===c.id));
  });
  const controls=[...host.querySelectorAll('[data-inquiry-input]')];
  for(const el of controls)el.value=draft.values[el.dataset.inquiryInput];
  for(const key of ['question','hypothesis','interpretation','nextQuestion']){
   const field=$('inquiry-'+key);field.value=draft[key];field.addEventListener('input',()=>{
    draft[key]=field.value;remember();
   });
  }
  function current(){
   const values=Object.fromEntries(controls.map(el=>[el.dataset.inquiryInput,Number(el.value)]));
   return evaluateInquiry(c.id,values);
  }
  function paint(){
   const v=current();draft.values=v.inputs;
   for(const el of controls){$('inquiry-output-'+el.dataset.inquiryInput).textContent=el.value;}
   const out=$('inquiry-result');out.replaceChildren();
   for(const [label,unit,value] of [[v.primaryLabel,v.primaryUnit,v.primary],[v.secondaryLabel,v.secondaryUnit,v.secondary]]){
    const d=document.createElement('div');d.className='inquiry-result-value';
    const title=document.createElement('small');title.textContent=local(label);
    const num=document.createElement('strong');num.textContent=number(value)+' '+unit;
    d.append(title,num);out.append(d);
   }
   if(v.conserved){
    const note=document.createElement('p');note.className='inquiry-conservation';
    note.textContent=tr('総運動量：衝突前 ','Total momentum: before ')+number(v.conserved.initialMomentum)
      +tr('／衝突後 ',' / after ')+number(v.conserved.finalMomentum)+' kg·m/s; '
      +tr('運動エネルギー：衝突前 ','kinetic energy: before ')+number(v.conserved.energyBefore)
      +tr('／衝突後 ',' / after ')+number(v.conserved.energyAfter)+' J';
    out.append(note);
   }
   remember();
   return v;
  }
  controls.forEach(el=>el.addEventListener('input',paint));
  $('inquiry-capture').addEventListener('click',()=>{
   if(draft.trials.length>=40){$('inquiry-status').textContent=tr('試行の上限です。記録を保存して新しい比較を始めてください。','Trial limit reached. Save a snapshot and start a new set.');return;}
   draft.trials.push(current());remember();drawTrials();
   $('inquiry-status').textContent=tr('モデルの予測を記録しました。','Model prediction captured.');
  });
  $('inquiry-clear-trials').addEventListener('click',()=>{
   // Preserve original observations and interpretation; only clear the temporary trial comparison.
   draft.trials=[];remember();drawTrials();
   $('inquiry-status').textContent=tr('今回の試行を新しくしました。問い・仮説・以前の記録は残っています。','Trial set cleared. Questions, hypotheses, and saved investigations are preserved.');
  });
  $('inquiry-save').addEventListener('click',()=>{
   if(records.length>=500){$('inquiry-status').textContent=tr('保存上限に達しました。','Saved investigation limit reached.');return;}
   const record={id:recordId(),date:new Date().toISOString(),scenario:draft.scenario,
    trials:draft.trials.map(t=>({...t,inputs:{...t.inputs}})),
    ...Object.fromEntries(['question','hypothesis','interpretation','nextQuestion'].map(k=>[k,draft[k]]))};
   if(!validInvestigation(record)){ $('inquiry-status').textContent=tr('保存内容を確認できませんでした。','Record validation failed.');return; }
   const next=[...records,record];if(!writeRecords(next)){$('inquiry-status').textContent=tr('この端末に保存できませんでした。','Could not save on this device.');return;}
   records=next;drawHistory();$('inquiry-status').textContent=tr('日付付きの研究記録を保存しました。以前の記録は上書きしていません。','Saved a dated snapshot without overwriting older investigations.');
  });
  function drawTrials(){
   const list=$('inquiry-trial-list');list.replaceChildren();
   if(!draft.trials.length){const p=document.createElement('p');p.className='muted';p.textContent=tr('試行はまだありません。まず条件を選び、記録してみましょう。','No trials yet. Choose parameters and capture a model prediction.');list.append(p);}
   draft.trials.forEach((trial,index)=>{
    const card=document.createElement('div');card.className='inquiry-trial';
    const label=document.createElement('strong');label.textContent=tr('試行 ','Trial ')+(index+1);
    const vals=document.createElement('span');vals.textContent=c.inputs.map(x=>local(x.label)+': '+number(trial.inputs[x.key])).join(' / ')+' → '+local(evaluateInquiry(c.id,trial.inputs).primaryLabel)+': '+number(trial.primary)+' '+trial.primaryUnit;
    card.append(label,vals);list.append(card);
   });
   const panel=$('inquiry-comparison');panel.replaceChildren();
   if(draft.trials.length>=2){
    const a=draft.trials[draft.trials.length-2],b=draft.trials.at(-1),cmp=compareInquiryTrials(a,b);
    const heading=document.createElement('strong');
    const summary=cmp.kind==='controlled'
       ?tr('1つの変数だけを変えた比較','Controlled comparison: one variable changed')
       :cmp.kind==='replicate'
       ?tr('同じ条件でのモデル計算','Same model conditions')
       :tr('複数の変数が変わっています','Several variables changed simultaneously');
    heading.textContent=summary;panel.append(heading);
    const note=document.createElement('p');
    note.textContent=cmp.kind==='confounded'
     ?tr('どの変数が結果を変えたか、この2回の比較だけでは切り分けられません。','This pair alone cannot isolate which variable caused the difference.')
     :cmp.kind==='replicate'
     ?tr('決定論的なモデルなので同条件では同じ結果です。実測では測定誤差も考えます。','The deterministic model repeats exactly. Real measurements would also involve uncertainty.')
     :tr('変えた変数：','Changed variable: ')+local(c.inputs.find(i=>i.key===cmp.changed[0]).label)+' / '+tr('予測値の差：','Predicted difference: ')+number(cmp.change)+' '+b.primaryUnit;
    panel.append(note);
   }
  }
  function drawHistory(){
   const list=$('inquiry-history');list.replaceChildren();
   const matching=records.filter(row=>row.scenario===draft.scenario).slice(-8).reverse();
   if(!matching.length){const p=document.createElement('p');p.className='muted';p.textContent=tr('このテーマの記録はまだありません。','No saved investigations for this topic yet.');list.append(p);}
   for(const row of matching){
    const entry=document.createElement('article');entry.className='inquiry-history-entry';
    const title=document.createElement('strong');title.textContent=dateText(row.date)+' · '+row.trials.length+tr('試行',' trials');
    const desc=document.createElement('p');desc.textContent=row.question||row.hypothesis||tr('自由研究の記録','Open investigation');
    entry.append(title,desc);
    if(row.interpretation){
     const note=document.createElement('p');note.className='inquiry-old-observation';note.textContent=tr('当時の気づき：','Earlier observation: ')+row.interpretation;entry.append(note);
    }
    const reopen=document.createElement('button');reopen.type='button';reopen.className='secondary-btn';
    reopen.textContent=tr('この時の考えを読み返す','Revisit this earlier state');
    reopen.addEventListener('click',()=>{
     draft={scenario:row.scenario,mode:draft.mode,values:row.trials.at(-1)?.inputs||initialInputs(c),
      trials:row.trials.map(t=>({...t,inputs:{...t.inputs}})),
      ...Object.fromEntries(['question','hypothesis','interpretation','nextQuestion'].map(k=>[k,row[k]]))};
     remember();attach();host.scrollIntoView({block:'start'});
    });
    entry.append(reopen);list.append(entry);
   }
  }
  if(typeof renderMath==='function')renderMath(host);
  paint();drawTrials();drawHistory();
 }
 mode.addEventListener('change',()=>{draft.mode=mode.value;remember();attach();});
 document.querySelectorAll('[data-inquiry-case]').forEach(b=>b.addEventListener('click',()=>{
  const id=b.dataset.inquiryCase;if(id===draft.scenario)return;
  const m=draft.mode;draft=spaces[id]?normalizeDraft(spaces[id]):{...initialDraft(),scenario:id,mode:m,values:initialInputs(scenarioById(id))};
  draft.mode=m;
  remember();attach();
 }));
 attach();return()=>{scratch={...draft};};
}