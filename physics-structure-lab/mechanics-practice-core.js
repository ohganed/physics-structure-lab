import {practiceProblemsPart1} from './mechanics-practice-part1.js';
import {practiceProblemsPart2} from './mechanics-practice-part2.js';
import {synthesisProblems} from './mechanics-synthesis.js';
import {mechanicsChapters} from './mechanics-data.js';

export const mechanicsProblems=Object.freeze([...practiceProblemsPart1,...practiceProblemsPart2,...synthesisProblems]);
const byId=new Map(mechanicsProblems.map(p=>[p.id,p]));
const chapters=new Set(mechanicsChapters.map(c=>c.key));
export const practiceSectionIds=[...mechanicsChapters.map(c=>c.key),'synthesis'];
export function getPracticeProblem(id){return byId.get(id)||null;}
export function problemsForChapter(chapter){return mechanicsProblems.filter(p=>p.chapter===chapter);}
export function validatePracticeDataset(problems=mechanicsProblems){
 const used=new Set();
 for(const p of problems){
  if(!p.id||used.has(p.id)||(!chapters.has(p.chapter)&&p.chapter!=='synthesis'))return false;
  used.add(p.id);
  if(!['numeric','reasoning'].includes(p.type))return false;
  for(const k of ['title','situation','question','assumptions','principle','interpretation','trap']){
   if(!Array.isArray(p[k])||p[k].length!==2||p[k].some(s=>typeof s!=='string'||s.length<8))return false;
  }
  if(!Array.isArray(p.hints)||p.hints.length<2||p.hints.some(h=>h.length!==2||h.some(s=>!s)))return false;
  if(!Array.isArray(p.steps)||p.steps.length<2||p.steps.some(s=>typeof s.tex!=='string'||!s.tex||s.why?.length!==2||s.why.some(w=>!w)))return false;
  if(!Array.isArray(p.links)||p.links.length<2||p.links.some(l=>!chapters.has(l)))return false;
  if(p.type==='numeric'){
   if(!p.answer||!Number.isFinite(p.answer.value)||typeof p.answer.unit!=='string'||!p.answer.unit)return false;
  }else if(p.answer!==null)return false;
 }
 return true;
}
/**
 * Optional comparison with an authored model value. This is *not* evidence of
 * understanding or an eligibility gate. The same approximate convention applies
 * to positive, negative and zero reference values.
 */
export function compareNumericAnswer(problemId,input){
 const p=getPracticeProblem(problemId);
 if(!p||p.type!=='numeric')return {kind:'not-numeric'};
 const text=String(input??'').trim();
 if(!text)return {kind:'empty',reference:p.answer.value,unit:p.answer.unit};
 const n=Number(text);
 if(!Number.isFinite(n))return {kind:'invalid',reference:p.answer.value,unit:p.answer.unit};
 const error=Math.abs(n-p.answer.value);
 const threshold=Math.max(0.02,Math.abs(p.answer.value)*0.015);
 return {kind:error<=threshold?'close':'different',input:n,reference:p.answer.value,error,threshold,unit:p.answer.unit};
}
const validId=s=>typeof s==='string'&&/^mp-[a-zA-Z0-9-]{6,96}$/.test(s);
export function validatePracticeNote(note){
 return Boolean(note&&typeof note==='object'&&!Array.isArray(note)&&
  validId(note.id)&&byId.has(note.problemId)&&typeof note.date==='string'&&
  note.date.length<=40&&Number.isFinite(Date.parse(note.date))&&
  typeof note.response==='string'&&note.response.length<=4000&&
  typeof note.reflection==='string'&&note.reflection.length<=4000&&
  (note.answerInput===null||(typeof note.answerInput==='string'&&note.answerInput.length<=60)));
}
export function normalizePracticeArchive(payload){
 if(!payload||payload.kind!=='physics-mechanics-practice'||payload.version!==1||
  !Array.isArray(payload.notes)||payload.notes.length>2000||
  !payload.notes.every(validatePracticeNote))throw new RangeError('Invalid mechanics practice archive');
 if(new Set(payload.notes.map(n=>n.id)).size!==payload.notes.length)throw new RangeError('Duplicate practice-note IDs');
 return payload.notes.map(n=>({...n}));
}
export function makePracticeArchive(notes,date=new Date().toISOString()){
 const archive={kind:'physics-mechanics-practice',version:1,createdAt:date,notes};
 normalizePracticeArchive(archive);
 return archive;
}
export function mergePracticeNotes(current,incoming){
 const output=current.map(n=>({...n})),ids=new Set(current.map(n=>n.id));
 let skipped=0,conflicts=0;
 for(const n of incoming){
  const existing=output.find(x=>x.id===n.id);
  if(existing){
   if(JSON.stringify(existing)===JSON.stringify(n))skipped++;else conflicts++;
   continue;
  }
  output.push({...n});ids.add(n.id);
 }
 if(output.length>2000)throw new RangeError('Practice archive limit');
 return {notes:output,skipped,conflicts};
}
