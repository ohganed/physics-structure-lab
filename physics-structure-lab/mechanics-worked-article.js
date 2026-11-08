import {pendulumForcesHtml} from './pendulum-force-diagram.js';
/* Real worked mechanics material integrated below each chapter's physical explanation. */
import {mechanicsWorkedCases} from './mechanics-worked-cases.js';
const E=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const formula=s=>'<div class="formula tex-display" data-tex="'+E(s)+'">'+E(s)+'</div>';
const L=(pair,en)=>pair[en?1:0];
export function mechanicsWorkedCaseHtml(key,language='ja'){
 const c=mechanicsWorkedCases[key];
 if(!c)return '';
 const en=language==='en';
 return '<article class="mechanics-worked-article" id="mechanics-worked-article">'
 +'<h3>'+E(L(c.title,en))+'</h3>'
 +'<p>'+E(L(c.story,en))+'</p>'
 +'<p class="mechanics-worked-conditions"><strong>'+(en?'Assumptions: ':'条件：')+'</strong>'+E(L(c.conditions,en))+'</p>'
 +(key==='oscillation'?pendulumForcesHtml(language):'')
 +'<div class="mechanics-worked-solution"><h4>'+(en?'Calculations':'計算')+'</h4>'
 +'<ol class="mechanics-worked-list">'+c.steps.map(step=>'<li>'+formula(step.math)+'<p>'+E(L(step.why,en))+'</p></li>').join('')+'</ol></div>'
 +'<p class="mechanics-worked-reading"><strong>'+(en?'Reading the result: ':'計算結果について：')+'</strong>'+E(L(c.interpretation,en))+'</p>'
 +'<p class="mechanics-worked-limits"><strong>'+(en?'Model limits: ':'モデルの条件：')+'</strong>'+E(L(c.limits,en))+'</p></article>';
}
