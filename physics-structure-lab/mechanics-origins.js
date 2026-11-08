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

export function mechanicsOriginHtml(key,language='ja',illustration=''){
 const c=originLessonByKey(key);if(!c)return '';
 return '<section class="mechanics-origin-path" id="mechanics-origin-path" aria-label="'+txt(language,'各章の解説','Chapter explanation')+'">'
 +'<h3>'+escapeHTML(l(c.title,language))+'</h3>'
 +'<div class="mechanics-origin-premise"><p>'+escapeHTML(l(c.observation,language))+'</p></div>'
 +'<div class="mechanics-origin-premise"><p>'+escapeHTML(l(c.representation,language))+'</p></div>'
 +'<div class="mechanics-origin-premise"><p>'+escapeHTML(l(c.prior,language))+'</p></div>'
 +illustration
 +'<details class="mechanics-origin-derivation" open><summary>'+txt(language,'式の計算','Working through the equations')+'</summary>'
 +'<ol class="mechanics-origin-steps">'+c.steps.map(s=>'<li><h4>'+escapeHTML(l(s.question,language))+'</h4>'+math(s.tex)+'<p>'+escapeHTML(l(s.why,language))+'</p></li>').join('')+'</ol></details>'
 +'<div class="mechanics-origin-result"><h4>'+txt(language,'式が表していること','What the relation tells us')+'</h4><p>'+escapeHTML(l(c.meaning,language))+'</p></div>'
 +'<div class="mechanics-origin-boundary"><h4>'+txt(language,'成り立つ条件','Conditions')+'</h4><p>'+escapeHTML(l(c.bounds,language))+'</p></div>'
 +'<div class="mechanics-origin-transfer"><h4>'+txt(language,'別の単元との関係','Connections to other topics')+'</h4><p>'+escapeHTML(l(c.connection,language))+'</p></div>'
 +'</section>';
}
