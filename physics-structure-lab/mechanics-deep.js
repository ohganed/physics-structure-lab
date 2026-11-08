/* Visible, optional, and non-gating detailed physics explanations for all twelve mechanics chapters. */
import {deepMechanicsLessons} from './mechanics-deep-part1.js';
import {advancedDeepMechanicsLessons} from './mechanics-deep-part2.js';
import {formulaReaders} from './mechanics-formula-readers.js';
import {mechanicsSituationFigure} from './mechanics-situation-figures.js';
export const deepLessons=Object.freeze({...deepMechanicsLessons,...advancedDeepMechanicsLessons});
const escapeHTML=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'","&#39;");
const t=(pair,language='ja')=>pair?.[language==='en'?'en':'ja']||'';
const label=(language,ja,en)=>language==='en'?en:ja;
const math=expr=>'<div class="formula tex-display" data-tex="'+escapeHTML(expr)+'">'+escapeHTML(expr)+'</div>';

export function deepIntroHtml(key,language='ja'){
 const lesson=deepLessons[key];if(!lesson)return '';
 return '<section class="mechanics-deep-intro" aria-label="'+label(language,'現象を理解する','Understanding the phenomenon')+'">'
  +'<details class="mechanics-explain-details" open><summary>'+label(language,'初めて学ぶ人へ：現象から考える','Start here: understand the physical situation')+'</summary>'
  +'<div class="mechanics-reading-prose">'+lesson.intuition.map(p=>'<p>'+escapeHTML(t(p,language))+'</p>').join('')+'</div></details>'
  +'<details class="mechanics-explain-details"><summary>'+label(language,'用語を一つずつ確認する','Unpack the terminology, one term at a time')+'</summary>'
  +'<dl class="mechanics-vocab">'+lesson.vocabulary.map(([term,meaning])=>'<div><dt>'+escapeHTML(t(term,language))+'</dt><dd>'+escapeHTML(t(meaning,language))+'</dd></div>').join('')+'</dl></details>'
  +'</section>';
}
export function deepReasoningHtml(key,language='ja'){
 const lesson=deepLessons[key];if(!lesson)return '';
 return '<section class="mechanics-deep-reasoning">'
  +'<details class="mechanics-explain-details" open><summary>'+label(language,'式にする前の考え方を、順番に追う','Follow the reasoning before using equations')+'</summary>'
  +'<ol class="mechanics-reasoning-sequence">'+lesson.logic.map(x=>'<li>'+escapeHTML(t(x,language))+'</li>').join('')+'</ol></details>'
  +'</section>';
}
export function deepWorkedExampleHtml(key,language='ja'){
 const lesson=deepLessons[key];if(!lesson)return '';
 const example=lesson.example;
 return '<section class="mechanics-deep-example">'
  +'<details class="mechanics-explain-details"><summary>'+label(language,'例題を最初から解く：途中式と判断の理由','Worked example: every step and why it matters')+'</summary>'
  +'<p class="mechanics-example-prompt">'+escapeHTML(t(example.problem,language))+'</p>'
  +mechanicsSituationFigure(key,'deep',language)
  +'<ol class="mechanics-worked-steps">'+example.steps.map(([formula,explanation])=>'<li>'+math(formula)+'<p>'+escapeHTML(t(explanation,language))+'</p></li>').join('')+'</ol>'
  +'<p class="mechanics-example-conclusion"><strong>'+label(language,'結果を物理的に読む：','Interpret the result:')+'</strong> '+escapeHTML(t(example.conclusion,language))+'</p></details>'
  +'<div class="mechanics-common-error"><strong>'+label(language,'つまずきやすい点','A common misconception')+'</strong><p>'+escapeHTML(t(lesson.misconception,language))+'</p></div>'
  +'</section>';
}
export function deepRevisitHtml(key,language='ja'){
 const lesson=deepLessons[key];if(!lesson)return '';
 return '<section class="mechanics-revisit"><div class="eyebrow">KNOWLEDGE GROWS THROUGH CONNECTIONS</div>'
  +'<h3>'+label(language,'後で戻ってくると、もっと深まる','What may become clearer when you return later')+'</h3>'
  +'<p>'+escapeHTML(t(lesson.revisit,language))+'</p>'
  +'<p class="muted">'+label(language,'この時点で完全に理解する必要はありません。ほかの分野を学んだ後、もう一度読んでみてください。','You do not have to master this idea at the first encounter. Return after learning something else.')+'</p>'
  +'</section>';
}


export function formulaReaderHtml(key,language='ja'){
 const reader=formulaReaders[key];
 if(!reader)return '';
 const bilingual=(pair)=>pair?.[language==='en'?1:0]||'';
 return '<section class="mechanics-formula-reader" aria-label="'+label(language,'数式の読み解き','Reading an equation')+'">'
 +'<details class="mechanics-explain-details"><summary>'+label(language,'公式の記号を一つずつ読み、単位・限界を確かめる','Read each symbol, check units and test limiting cases')+'</summary>'
 +'<div class="mechanics-formula-content"><p class="mechanics-formula-lead">'+escapeHTML(bilingual(reader.meaning))+'</p>'
 +math(reader.expression)
 +'<h4>'+label(language,'それぞれの記号が表すもの','What each symbol represents')+'</h4>'
 +'<dl class="mechanics-formula-symbols">'+reader.symbols.map(([symbol,ja,en,unit])=>
    '<div><dt>'+math(symbol)+'</dt><dd><strong>'+escapeHTML(language==='en'?en:ja)+'</strong><span>'+escapeHTML(unit)+'</span></dd></div>').join('')+'</dl>'
 +'<h4>'+label(language,'単位は合っているか？','Do the units agree?')+'</h4><p>'+escapeHTML(bilingual(reader.unit))+'</p>'
 +'<h4>'+label(language,'極端な条件でどうなる？','What happens in a limiting case?')+'</h4><p>'+escapeHTML(bilingual(reader.limit))+'</p>'
 +'<h4>'+label(language,'どこまで使ってよい？','Where does this formula apply?')+'</h4><p>'+escapeHTML(bilingual(reader.scope))+'</p>'
 +'<p class="muted">'+label(language,'この解説を理解しきることは、次の章に進む条件ではありません。','You are welcome to continue before fully understanding this explanation.')+'</p>'
 +'</div></details></section>';
}
