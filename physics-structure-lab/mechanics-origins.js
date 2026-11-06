/* Phenomenon-first mechanics: show the need for a mathematical description before formal definitions.
   This is a pedagogical pathway, not a claim about the history of discovery. */
import {mechanicsOriginsPart1} from './mechanics-origins-part1.js';
import {mechanicsOriginsPart2} from './mechanics-origins-part2.js';
import {mechanicsOriginsPart3} from './mechanics-origins-part3.js';
export const mechanicsOrigins=Object.freeze({...mechanicsOriginsPart1,...mechanicsOriginsPart2,...mechanicsOriginsPart3});
export const originLessonByKey=key=>mechanicsOrigins[key]||null;
const escapeHTML=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&#39;');
const l=(pair,language)=>pair?.[language==='en'?1:0]||'';
const txt=(language,ja,en)=>language==='en'?en:ja;
const math=s=>'<div class="formula tex-display" data-tex="'+escapeHTML(s)+'">'+escapeHTML(s)+'</div>';

export function mechanicsOriginHtml(key,language='ja'){
 const c=originLessonByKey(key);if(!c)return '';
 return '<section class="mechanics-origin-path" id="mechanics-origin-path" aria-label="'+txt(language,'現象から数式を構成する','Building equations from phenomena')+'">'
 +'<div class="eyebrow">'+txt(language,'現象から数学的な表現へ','FROM PHENOMENON TO MATHEMATICAL FORM')+'</div>'
 +'<h3>'+escapeHTML(l(c.title,language))+'</h3>'
 +'<div class="mechanics-origin-premise"><h4>'+txt(language,'① 現象のどこが不思議か','① What calls for explanation?')+'</h4><p>'+escapeHTML(l(c.observation,language))+'</p></div>'
 +'<div class="mechanics-origin-premise"><h4>'+txt(language,'② 何を測り、どう表現するか','② Which quantities and representation help?')+'</h4><p>'+escapeHTML(l(c.representation,language))+'</p></div>'
 +'<div class="mechanics-origin-premise"><h4>'+txt(language,'③ 既知の法則・新しく必要な法則','③ Known principles and new assumptions')+'</h4><p>'+escapeHTML(l(c.prior,language))+'</p></div>'
 +'<details class="mechanics-origin-derivation" open><summary>'+txt(language,'④ 式が現れるまで：一行ずつ理由を追う','④ Follow how the equation emerges, step by step')+'</summary>'
 +'<ol class="mechanics-origin-steps">'+c.steps.map((s,i)=>'<li><h4>'+escapeHTML(l(s.question,language))+'</h4>'+math(s.tex)+'<p>'+escapeHTML(l(s.why,language))+'</p></li>').join('')+'</ol></details>'
 +'<div class="mechanics-origin-result"><h4>'+txt(language,'⑤ 何を理解・予測できるようになったか','⑤ What does this representation now explain?')+'</h4><p>'+escapeHTML(l(c.meaning,language))+'</p></div>'
 +'<div class="mechanics-origin-boundary"><h4>'+txt(language,'⑥ 成り立つ範囲と、成り立たなくなる場合','⑥ Assumptions and limitations')+'</h4><p>'+escapeHTML(l(c.bounds,language))+'</p></div>'
 +'<div class="mechanics-origin-transfer"><h4>'+txt(language,'⑦ 別の知識で意味が深まる','⑦ Reconnect this idea elsewhere')+'</h4><p>'+escapeHTML(l(c.connection,language))+'</p></div>'
 +'<p class="muted">'+txt(language,
  'この説明は現象を数式で考えるための学習順序であり、物理学史における発見順序の主張ではありません。答えを書かなくても次へ進めます。',
  'This is a learning path for mathematical representation, not a claim about historical discovery. No written answer is required to proceed.')+'</p></section>';
}
