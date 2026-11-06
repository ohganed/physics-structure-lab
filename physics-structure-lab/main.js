import { motionAt, twoStageTrain, approximatelyEqual } from './physics.js';
import { definitionLabHtml, installDefinitionLab } from './definition-lab.js';
import { accelerationLabHtml, installAccelerationLab } from './acceleration-lab.js';
import { mechanicsPage, installMechanics, focusMechanicsChapter } from './mechanics-lab.js';
import { connectionsPage, installConnections, setConnectionFocus } from './knowledge-connections.js';
import { journeysPage, installJourneys, setJourneyStart } from './knowledge-journeys.js';
import { transferPage, installTransferLab, setTransferCase } from './transfer-lab.js';
import { inquiryPage, installInquiry } from './inquiry-lab.js';
import { forceLabPage, installForceLab } from './force-lab.js';
import { conservationLabPage, installConservationLab } from './conservation-lab.js';
import { advancedMechanicsPage, installAdvancedMechanics } from './advanced-mechanics-lab.js';
import { analyticalLabPage, installAnalyticalLab } from './analytical-lab.js';
import { kinematicsLabPage, installKinematicsLab } from './kinematics-lab.js';
import { getLanguage, setLanguage, translateNavigation } from './language.js';
import { englishOverview, englishPhenomenon } from './english-pages.js';

const content = document.querySelector('#app-content');
const nav = document.querySelector('#nav');
const side = document.querySelector('.sidebar');
const menuToggle = document.querySelector('#menu-toggle');
const storageKey = 'physics-structure-lab-v0.1';
let stopAnimation = () => {};


const inlineMathTokens = new Map([
 ['v₀', 'v_0'], ['x₀', 'x_0'], ['Δx', '\\Delta x'],
 ['Δt', '\\Delta t'], ['Δv', '\\Delta v'],
 ['m/s²', '\\mathrm{m/s^2}'], ['½at²', '\\frac{1}{2}at^2'],
 ['v–t', 'v\\text{–}t']
]);
function renderPhysicsMath(root = content) {
  if (!window.katex || !root) return;
  const opts = { throwOnError: false, output: 'htmlAndMathml' };
  root.querySelectorAll('.tex-display[data-tex], .tex-inline[data-tex]').forEach(el => {
    window.katex.render(el.dataset.tex, el, {...opts, displayMode: el.classList.contains('tex-display')});
  });
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT), nodes = [];
  while (walker.nextNode()) {
    const el = walker.currentNode.parentElement;
    if (!el || el.closest('script,style,textarea,pre,code,.katex,.tex-display,.tex-inline,canvas,button,input,output')) continue;
    if ([...inlineMathTokens.keys()].some(k => walker.currentNode.textContent.includes(k))) nodes.push(walker.currentNode);
  }
  const pattern = /v₀|x₀|Δx|Δt|Δv|m\/s²|½at²|v–t/g;
  for (const node of nodes) {
    const frag = document.createDocumentFragment();
    let pos=0;
    for (const match of node.textContent.matchAll(pattern)) {
      if (match.index > pos) frag.append(document.createTextNode(node.textContent.slice(pos,match.index)));
      const span=document.createElement('span');
      span.className='tex-inline'; span.dataset.tex=inlineMathTokens.get(match[0]); span.textContent=match[0];
      window.katex.render(span.dataset.tex,span,opts); frag.append(span);
      pos=match.index+match[0].length;
    }
    frag.append(document.createTextNode(node.textContent.slice(pos)));
    node.replaceWith(frag);
  }
}

function readStore() {
  try {
    const data = JSON.parse(localStorage.getItem(storageKey) || '{}');
    return { completed: Array.isArray(data.completed) ? data.completed : [], notes: Array.isArray(data.notes) ? data.notes : [], attempts: Number(data.attempts) || 0 };
  } catch { return { completed: [], notes: [], attempts: 0 }; }
}
let store = readStore();
function saveStore() { try { localStorage.setItem(storageKey, JSON.stringify(store)); } catch { /* storage unavailable */ } }
function mark(id) { if (!store.completed.includes(id)) { store.completed.push(id); saveStore(); } }
const button = (page, text, className = 'primary-btn') => `<button class="${className}" data-goto="${page}">${text}</button>`;
const pageHeader = (kicker, title, lead, tag = '') => `<div class="page-header"><div><div class="eyebrow">${kicker}</div><h1>${title}</h1><p class="lead">${lead}</p></div>${tag ? `<span class="tag">${tag}</span>` : ''}</div>`;

function overview() {
  const done = store.completed.length;
  return `<div class="page">
    <section class="hero"><div><div class="eyebrow">LEARN TO THINK LIKE A PHYSICIST</div><h1>現象から、物理を考える。</h1><p>定義はなぜ必要なのか。法則をどう選ぶのか。複雑な問題の背後にある思考まで、ひとつながりに学ぶ。</p>${button('phenomenon','第1章を始める →')}</div>
    <div class="hero-art" aria-hidden="true"><svg viewBox="0 0 340 235" fill="none"><circle cx="179" cy="120" r="79" stroke="#6ba898" stroke-dasharray="6 7" opacity=".75"/><circle cx="179" cy="120" r="42" stroke="#80b6a8" opacity=".8"/><path d="M40 180 Q110 -15 310 62" stroke="#c4e3d8" stroke-width="2.5"/><path d="M45 205 Q149 48 320 113" stroke="#8cc7b4" stroke-width="2"/><circle cx="175" cy="83" r="13" fill="#dbb17e"/><path d="M175 83L245 128" stroke="#c9e2d6" stroke-width="2"/><path d="M245 128L234 115M245 128L230 126" stroke="#c9e2d6" stroke-width="2"/><circle cx="179" cy="120" r="4" fill="white"/><path d="M30 217H325M30 217V12" stroke="#75aa9c" stroke-width="1" opacity=".65"/><path d="M45 217Q100 213 145 188T245 69T320 20" stroke="#e1bd8e" stroke-width="2" opacity=".8"/></svg></div></section>
    <section class="knowledge-home-entry card"><div class="eyebrow">KNOWLEDGE CONNECTIONS</div><h2>理解は、別の分野で深まる。</h2><p>新しい知識との出会いで、以前学んだ概念が違って見えてくる。知識のつながりを自由に探し、後から気づいたことを残せます。</p>${button('connections','知識のつながりを探索する →','secondary-btn')} ${button('transfer','別の分野へ広げる →','secondary-btn')}</section>
    <div class="section-head"><h2>学びの入り口</h2><p>まずは「力学・運動の記述」から</p></div>
    <div class="grid">
      <article class="card"><div class="feature-icon">◉</div><span class="tag">01 / CONCEPT</span><h3>現象と定義</h3><p>位置や速度は、なぜ必要なのか。式の手前にある観察と判断から始める。</p>${button('phenomenon','定義を考える →','card-action')}</article>
      <article class="card"><div class="feature-icon">∑</div><span class="tag">02 / REASON</span><h3>公式の導出</h3><p>定義・経験法則・仮定を区別しながら、式が成り立つ理由をたどる。</p>${button('derivation','導出をたどる →','card-action')}</article>
      <article class="card"><div class="feature-icon">◎</div><span class="tag">03 / EXPERIMENT</span><h3>動的実験</h3><p>初速度と加速度を変え、運動・ベクトル・グラフを同時に観察する。</p>${button('lab','実験する →','card-action')}</article>
      <article class="card"><div class="feature-icon">◇</div><span class="tag amber">04 / EXAM DESIGN</span><h3>出題構造を解剖</h3><p>出題者は何を問いたいのか。解答者は何を見抜くべきか。同じ画面で比較。</p>${button('exam','問題を分析する →','card-action')}</article>
      <article class="card"><div class="feature-icon">✎</div><span class="tag">05 / META COGNITION</span><h3>思考ノート</h3><p>何に気づき、どこで迷い、なぜその方法を選んだかを記録する。</p>${button('reflection','自分の思考を記録 →','card-action')}</article>
      <article class="card"><div class="feature-icon">◷</div><span class="tag gray">OPTIONAL</span><h3>科学史・概念形成</h3><p>考え方の生まれた歴史を知る。学習の必須条件にはしません。</p>${button('history','歴史をひらく →','card-action')}</article>
    </div>
    <div class="section-head"><h2>学習マップ</h2><p>大学物理まで、つながる教科書</p></div>
    <div class="grid two"><div class="card"><h3>第1章：運動を記述する <span class="tag">学習可能</span></h3>
      <div class="module-item"><span class="module-number">1</span><div class="module-copy"><strong>位置・変位・座標</strong><small>現象・定義・モデル</small></div><span class="tag ${store.completed.includes('phenomenon') ? '' : 'gray'}">${store.completed.includes('phenomenon') ? '既読' : '未学習'}</span></div>
      <div class="module-item"><span class="module-number">2</span><div class="module-copy"><strong>速度・加速度</strong><small>法則と公式の導出</small></div><span class="tag ${store.completed.includes('derivation') ? '' : 'gray'}">${store.completed.includes('derivation') ? '既読' : '未学習'}</span></div>
      <div class="module-item"><span class="module-number">3</span><div class="module-copy"><strong>等加速度運動の実験</strong><small>パラメータとグラフ</small></div><span class="tag ${store.completed.includes('lab') ? '' : 'gray'}">${store.completed.includes('lab') ? '実施済' : '未実施'}</span></div>
      <div class="mini-progress"><span style="width:${Math.min(100,done/4*100)}%"></span></div><small class="muted">基本活動 ${Math.min(done,4)} / 4 達成（記録は端末内）</small></div>
      <div class="card"><h3>今後の教科書構成</h3><div class="module-item"><span class="module-number">2</span><div class="module-copy"><strong>力と運動方程式</strong><small>法則の意味と適用範囲</small></div><span class="tag gray">準備中</span></div><div class="module-item"><span class="module-number">3</span><div class="module-copy"><strong>仕事・エネルギー・保存則</strong><small>多体系へ</small></div><span class="tag gray">準備中</span></div><div class="module-item"><span class="module-number">4</span><div class="module-copy"><strong>振動・回転・解析力学</strong><small>大学物理へ接続</small></div><span class="tag gray">準備中</span></div><p>力学から始め、電磁気・熱統計・波動・量子・相対論へ拡張します。未収録の教材は明示します。</p></div></div>
  </div>`;
}

function phenomenon() {
  return `<div class="page">${pageHeader('CHAPTER 01 · DEFINITION LAB','「動いている」を物理にする','見たことをそのまま式にすることはできません。まず何が変わっているのか、何を測ればよいのかを問い直します。','現象 → 定義')}
    <div class="concept-flow"><span class="flow-step">観察する</span><span class="flow-arrow">→</span><span class="flow-step">対象を決める</span><span class="flow-arrow">→</span><span class="flow-step">測る量を選ぶ</span><span class="flow-arrow">→</span><span class="flow-step">定義する</span><span class="flow-arrow">→</span><span class="flow-step">法則を探す</span></div>
    <div class="grid two"><section class="card"><div class="eyebrow">OBSERVE</div><h2>車が右へ進んでいる</h2><p>何をもって「動いている」と言えるのでしょうか？ 道路上の目印に対する車の<strong>位置</strong>が、時間とともに変化しています。</p><div class="callout"><strong>観察からの問い</strong><p>位置を測るには基準点と正方向が必要です。進む距離だけでなく「どちらへ」を表すには、符号や方向が必要になります。</p></div><p>「車が速く進む」とは何が大きいことなのでしょう。5 m進むのに1秒かかった場合と10秒かかった場合を比較しましょう。</p></section>
    <section class="card"><div class="eyebrow">WHY THIS DEFINITION?</div><h2>平均速度を定義する</h2><span class="formula tex-display" data-tex="\\bar{v}=\\dfrac{\\Delta x}{\\Delta t}">v̄ = Δx / Δt</span><p>変位 Δx を、経過時間 Δt で割ります。時間の長さが違う観察を、単位時間あたりの変化として比較できるからです。</p><div class="callout warm"><strong>定義と法則を区別する</strong><p>「平均速度＝変位÷時間」は定義です。「加速度が一定なら速度が時間に比例して変化する」は、定義と<strong>等加速度という仮定</strong>から導く関係です。</p></div></section></div>
    ${definitionLabHtml()}
    <div class="button-row">${button('acceleration','次へ：加速度の意味を探究 →','secondary-btn')}</div>
    <div class="section-head"><h2>似ている概念を区別する</h2></div>
    <div class="definition-list"><div class="definition"><strong>道のり（distance）と変位（displacement）</strong><p>道のりは進んだ経路の長さです。変位は出発点と到着点の位置の差です。出発点へ戻ると、道のりは正でも変位は0になります。</p></div>
    <div class="definition"><strong>速さ（speed）と速度（velocity）</strong><p>速さは向きを持たない量で、平均の速さは道のり÷時間です。1次元の速度は向きを正負で表し、平均速度は変位÷時間です。</p></div>
    <div class="definition"><strong>平均速度と瞬間速度</strong><p>平均速度だけでは、途中で速くなったか遅くなったかを示せません。観測時間を小さくしていった極限が瞬間速度です。微分を用いれば <span class="tex-inline" data-tex="v=\\frac{\\mathrm{d}x}{\\mathrm{d}t}">v = dx/dt</span> です。</p></div>
    <div class="definition"><strong>加速度（acceleration）</strong><p>速度の時間あたりの変化です。1次元の平均加速度は <span class="tex-inline" data-tex="\\frac{\\Delta v}{\\Delta t}">Δv/Δt</span>。速さが一定でも向きが変われば加速度が生じるため、大学ではベクトルとして扱います。</p></div></div>
    <div class="section-head"><h2>定義を自分で吟味する</h2></div>
    <section class="card"><h3>出発点から東へ10 m進み、同じ道を10 m戻った。所要時間は20秒。</h3><p>このとき、平均の速さと平均速度（東向きを正）は一致するでしょうか？</p><div class="button-row"><button class="secondary-btn" data-reveal="def-answer">考え方を表示</button>${button('derivation','次へ：数式を組み立てる →')}</div><div id="def-answer" class="callout hide"><strong>平均の速さ = 20 m ÷ 20 s = 1 m/s</strong><p>変位は0 mなので、平均速度は0 m/sです。「何を測りたいか」に応じて量の定義が異なります。</p></div></section>
    <div class="callout"><strong>思考のモニター</strong><p>今、あなたは何を測るべきか選びましたか？ その物理量で説明できないことは何ですか？</p></div>
    <div class="button-row"><button class="primary-btn" data-complete="phenomenon">この単元を既読にする ✓</button>${button('reflection','思考を記録する','secondary-btn')}</div>
  </div>`;
}

// Reviewed, authored derivations: no generative AI is required at study time.
const derivationStages = [{"title":"1. 加速度の定義から速度を導く","intro":"時間の経過とともに速度が変化する程度を、単位時間あたりの速度変化として定義します。加速度が一定で、初期時刻を0とします。","rows":[["定義：平均加速度","\\bar a=\\dfrac{\\Delta v}{\\Delta t}","速度の変化を、それに要した時間で割ります。これは物理量の定義です。"],["仮定：加速度が一定","a=\\dfrac{v-v_0}{t}\\quad(t>0)","区間内で加速度が一定なら、平均加速度も同じ値になります。"],["両辺に時間を掛ける","at=v-v_0","分母の時間を消し、速度の変化量を取り出します。"],["初速度を移項する","v=v_0+at","現在の速度は「初速度＋その後の速度変化」です。"]]},{"title":"2. 速度から変位を導く","intro":"加速度が一定なら、速度―時間グラフは直線です。変位は、そのグラフと時間軸で囲まれる符号付き面積に等しくなります。","rows":[["変位は速度を時間で積み重ねた量","x-x_0=\\int_0^t v(\\tau)\\,\\mathrm{d}\\tau","積分を知らない場合は、時間を細かく分けた小さな「速度×時間」の和だと考えてください。"],["等加速度運動では台形の面積","x-x_0=\\dfrac{v_0+v}{2}\\,t","速度が直線的に変化するときだけ、始めと終わりの速度の平均を使えます。"],["第1式を代入する","x-x_0=\\dfrac{v_0+(v_0+at)}{2}\\,t","前の段階で得た v=v₀+at を使います。"],["整理する","x-x_0=v_0t+\\dfrac12 at^2","第1項は初速度による変位、第2項は加速度による追加分です。"]]},{"title":"3. 時間を消去し、速度と変位だけで表す","intro":"ある地点での速度を求めたいが、経過時間が与えられていない。そんな場合に使える式を導きます。","rows":[["速度の式を変形する","v-v_0=at","まず時間を含んだ形のまま整理します。"],["変位の台形式を2倍する","2(x-x_0)=(v_0+v)t","この段階では加速度が0でも成立します。"],["両辺に加速度を掛ける","2a(x-x_0)=(v_0+v)at","右辺の at を、先ほどの v−v₀ に置き換えるためです。ここで a で割らない点が重要です。"],["速度の関係式を代入","2a(x-x_0)=(v_0+v)(v-v_0)","右辺は和と差の積になります。"],["平方差の公式で整理","\\boxed{v^2-v_0^2=2a(x-x_0)}","経過時間を含まない式になりました。a=0の場合も導出の変形は成立します。"]]}];
function derivationEquation(tex) {
  return '<div class="formula tex-display derivation-math" data-tex="' + tex.replaceAll('"','&quot;') + '">' + tex + '</div>';
}
function derivation() {
  const stages = derivationStages.map((stage, index) => {
    const steps = stage.rows.map(([heading, tex, explanation], i) =>
      '<div class="derivation-line"><div class="derivation-line-head"><span class="derivation-line-number">'+(i+1)+'</span><strong>'+heading+'</strong></div>' +
      derivationEquation(tex) + '<p class="derivation-reason">'+explanation+'</p></div>'
    ).join('');
    return '<section class="card derivation-stage"><div class="eyebrow">DERIVATION '+(index+1)+'/3</div><h2>'+stage.title+'</h2><p>'+stage.intro+'</p>'+steps+'</section>';
  }).join('');
  return '<div class="page">'+pageHeader('CHAPTER 01 · DERIVATION','公式はどこから生まれるのか','定義・仮定・数学的変形を分け、一行ずつ理由を確認します。式の省略をせず、高校物理から大学数学につなぎます。','各段階の理由を解説')+
    '<div class="select-tabs" role="tablist" aria-label="数式の説明レベル"><button data-depth="intuition">直感と図</button><button data-depth="algebra" class="active">高校数学</button><button data-depth="calculus">大学数学への接続</button></div><div id="math-depth"></div>'+
    '<div class="callout"><strong>最初に決めるモデル</strong><p>慣性座標系・1次元・初期時刻 t=0 で位置 x₀、速度 v₀、観測区間で加速度 a が一定。これらの前提を変えると、使える式も変わります。</p></div>'+stages+
    '<div class="callout warm"><strong>成立条件・例外</strong><p>3公式は区間全体で加速度が一定のときに使えます。加速度が変化する場合は時間を区切るか、加速度を時間の関数として積分します。これらは自然法則そのものではなく、加速度の定義と等加速度の仮定から導く関係式です。</p></div>'+
    '<div class="button-row"><button class="primary-btn" data-complete="derivation">導出を確認した ✓</button>'+button('lab','実験で確かめる →','secondary-btn')+'</div></div>';
}

const mathDepth = {
  intuition: `<section class="card"><h3>式の前に、形をイメージする</h3><p>同じ時間で速度が同じだけ増えるなら、v–t グラフは直線です。面積（時間×平均速度）を読むと、変位が時間の2乗に関係することが見えてきます。</p><p class="muted">「時間が2倍なら変位も2倍」とは限りません。初速度0・一定加速度なら変位は4倍になります。</p></section>`,
  algebra: `<section class="card"><h3>仮定 → 関係式 → 代入</h3><p>加速度が一定、という仮定を最初に置きます。まず加速度の定義から速度を求め、次に v–t の台形の面積で変位を求めます。</p><p>公式は「覚える順序」より「導いた依存関係」で整理します。</p></section>`,
  calculus: `<section class="card"><h3>微分・積分では一つの構造になる</h3><span class="formula tex-display" data-tex="a=\\frac{\\mathrm{d}v}{\\mathrm{d}t},\\qquad v=\\frac{\\mathrm{d}x}{\\mathrm{d}t}">a = dv/dt,　<span class="tex-inline" data-tex="v=\\frac{\\mathrm{d}x}{\\mathrm{d}t}">v = dx/dt</span></span><p>a が一定なら dv/dt = a を積分して v(t) = v₀ + at。さらに dx/dt = v(t) を積分して x(t) = x₀ + v₀t + ½at² を得ます。</p><p>加速度が時間に依存するときは、a(t) を積分することで同じ考え方を拡張できます。</p></section>`
};

function lab() {
  return `<div class="page">${pageHeader('CHAPTER 01 · INTERACTIVE LAB','運動を実験してみる','初速度と加速度を変えて、物体の位置・速度・グラフがどう変わるか予測しましょう。表示する運動は1次元の等加速度モデルです。','JavaScriptで計算')}
    <div class="lab-frame"><div class="lab-preview"><canvas id="motion-canvas" role="img" aria-label="時間とともに動く物体と座標軸"></canvas></div><div class="card" style="border:0;box-shadow:none"><div class="button-row"><button class="primary-btn" id="play-pause">▶ 再生</button><button class="secondary-btn" id="reset-time">↺ 最初に戻す</button><span class="tag" id="clock-label">t = 0.0 s</span></div>
    <div style="margin:20px 0 15px"><input id="time-slider" type="range" aria-label="時刻" min="0" max="10" step="0.05" value="0" /></div>
    <div class="control-grid"><div class="control-field"><label for="v0-slider">初速度 v₀ <output id="v0-value">3.0 m/s</output></label><input id="v0-slider" type="range" min="-8" max="8" step="0.5" value="3" /></div><div class="control-field"><label for="a-slider">加速度 a <output id="a-value">−0.5 m/s²</output></label><input id="a-slider" type="range" min="-4" max="4" step="0.25" value="-0.5" /></div><div class="control-field"><label for="duration-slider">観察時間 <output id="duration-value">10 s</output></label><input id="duration-slider" type="range" min="2" max="16" step="1" value="10" /></div></div>
    <div class="stats"><div class="stat"><small>位置 x</small><strong id="stat-x">0.00 m</strong></div><div class="stat"><small>速度 v</small><strong id="stat-v">3.00 m/s</strong></div><div class="stat"><small>加速度 a</small><strong id="stat-a">−0.50 m/s²</strong></div></div><small class="muted">矢印：青は速度、橙は加速度。矢印の長さは表示用に調整してあります。位置は符号付きです。</small></div></div>
    <div class="section-head"><h2>グラフで確かめる</h2><p>緑：位置 x(t) ／ 青：速度 v(t)</p></div>
    <div class="card chart-frame"><canvas id="chart-canvas" role="img" aria-label="位置と速度の時間グラフ"></canvas></div>
    <div class="callout"><strong>実験前に予測してみよう</strong><p>初速度が正でも加速度が負なら、ある時刻から物体は反対向きに動き始めます。速度が0になる瞬間、位置はどうなっているでしょうか？</p></div><div class="button-row"><button class="primary-btn" data-complete="lab">実験したことを記録 ✓</button>${button('exam','出題者の視点へ →','secondary-btn')}</div>
  </div>`;
}

function exam() {
  return `<div class="page">${pageHeader('CHAPTER 01 · EXAM DESIGN LAB','難問は、何を試しているのか','入試のためだけでなく、条件の意味を理解する研究室。出題者の狙いと解答者の判断を同じ場で比較します。','オリジナル問題')}
    <div class="question-box"><span class="eyebrow">PROBLEM 01 · 2段階の運動</span><h2>加速してから、減速して止まる列車</h2><p>列車が静止状態から一定の加速度 <strong>2 m/s²</strong> で <strong>4秒間</strong> 進む。その直後から一定の加速度 <strong>−1 m/s²</strong> で減速し、停止する。</p><p>列車が動き始めてから停止するまでの<strong>総時間</strong>と<strong>変位</strong>を求めよ。進行方向を正とする。</p><div class="input-row"><label>総時間（秒）<input class="number-input" type="number" step="any" id="answer-time" placeholder="例：12" /></label><label>変位（m）<input class="number-input" type="number" step="any" id="answer-x" placeholder="例：48" /></label><button id="check-answer" class="primary-btn">答えを確認</button></div><div id="answer-result" aria-live="polite"></div></div>
    <div class="section-head"><h2>同じ問題を、反対側から見る</h2></div>
    <div class="two-panes"><section class="thought-panel setter"><span class="eyebrow">QUESTION DESIGNER</span><h3>出題者の思考（推定）</h3><ol><li>一つの加速度で全区間を計算しないか。</li><li>前半の終速度を、後半の初速度につなげられるか。</li><li>減速の加速度を負として扱えるか。</li><li>2区間の時間と変位を正しく合計できるか。</li></ol><p class="muted" style="font-size:12px">これはオリジナル問題の設計意図です。実在大学の出題意図を表すものではありません。</p></section>
    <section class="thought-panel solver"><span class="eyebrow">PROBLEM SOLVER</span><h3>解答者の思考</h3><ol><li>求める量：全時間と全変位。</li><li>区間を「加速」「減速」に分ける。</li><li>各区間の境界で速度が連続する。</li><li>後半は v=0 を条件に停止時刻を得る。</li><li>解の単位・符号・直感との一致を点検する。</li></ol></section></div>
    <div class="section-head"><h2>出題者になって条件を変える</h2><p>モデルが自動的に再計算されます</p></div>
    <section class="card"><div class="input-row"><label>前半の加速度（m/s²）<input class="number-input" id="p-a1" type="number" value="2" min="0.1" max="12" step="0.5" /></label><label>前半の時間（s）<input class="number-input" id="p-t1" type="number" value="4" min="0.1" max="30" step="0.5" /></label><label>後半の加速度（m/s²）<input class="number-input" id="p-a2" type="number" value="-1" min="-12" max="-0.1" step="0.5" /></label></div><div id="model-result" class="callout"></div><div class="callout warm"><strong>設計の問い</strong><p>後半の減速度を弱くすると、停止までの時間と変位はどう変化するでしょう？ 計算する前に予測してください。</p></div></section>
    <div class="section-head"><h2>難しさの正体を見つける</h2></div><section class="card"><h3>問題を高度化するには？</h3><p>「区間が増える」「途中の速度が未知」「停止条件が指定される」など、条件の与え方を変えると、必要な判断が変わります。難しさを計算量だけで測らず、判断の種類として分析します。</p><div class="button-row"><button class="secondary-btn" data-reveal="hard-answer">追加条件の考察を開く</button></div><div class="callout hide" id="hard-answer"><strong>発展例：停止位置が指定されたら？</strong><p>後半の加速度が未知なら、停止時の速度0と残りの変位から加速度を逆算する必要があります。これが「未知数の置き方」の難しさです。</p></div></section>
    <div class="button-row" style="margin-top:20px">${button('reflection','自分の解法選択を記録 →')}</div>
  </div>`;
}

function reflection() {
  return `<div class="page">${pageHeader('METACOGNITION · THINKING LOG','自分の思考を見える形にする','正解したかどうかだけでなく、「何をモデル化し、どの法則を、なぜ選んだか」を言葉で残します。','この端末に保存')}
    <div class="grid two"><section class="card"><h2>思考を記録</h2><form id="note-form"><label for="note-stage" class="muted">今は、どの判断を振り返りますか？</label><br/><select id="note-stage" class="select-input" style="width:100%;margin:9px 0 14px"><option>何を問題にしたか</option><option>何を測り、何を無視したか</option><option>なぜその定義・法則を使ったか</option><option>どこで迷い、どう修正したか</option><option>結果は妥当だったか</option></select><label for="note-text" class="muted">自分の言葉で説明してください</label><textarea id="note-text" class="textarea-input" required maxlength="3000" placeholder="例：加速度が途中で変わるので、区間を分けて考える必要があると気づいた。"></textarea><div class="button-row" style="margin-top:12px"><button class="primary-btn" type="submit">記録する</button><span id="note-feedback" class="muted" aria-live="polite"></span></div></form></section>
    <section class="card"><div class="eyebrow">REFLECT</div><h2>思考を点検する4つの問い</h2><div class="definition-list"><div><strong>① 何を明らかにしたい？</strong><p>問題を自分の言葉で言い換えられるか。</p></div><div><strong>② 何を仮定した？</strong><p>モデルに含めたものと、無視したものは何か。</p></div><div><strong>③ なぜその方法？</strong><p>選んだ定義・法則の適用条件は何か。</p></div><div><strong>④ どう検証する？</strong><p>単位、極端な条件、実験結果を確かめたか。</p></div></div></section></div>
    <div class="section-head"><h2>これまでの記録</h2><p id="note-count"></p></div><section class="card" id="notes-list"></section>
  </div>`;
}

function historyPage() {
  return `<div class="page">${pageHeader('OPTIONAL · HISTORY OF IDEAS','概念は、なぜ必要になったのか','物理学の歴史は任意の学びです。見なくても、定義・数式・問題演習を続けられます。','自由選択')}
    <section class="card"><div class="eyebrow">HISTORICAL LENS · MOTION</div><h2>「動き」を数量で表すようになるまで</h2><p>日常では、物体が「速い」「遅い」と感じられれば十分かもしれません。しかし異なる時間・距離で行われる運動を比べるには、数値で記述する必要があります。</p><p>ガリレオの落体や斜面での運動の研究は、運動を数量的に調べる物理学の歴史において重要な位置を占めます。後にニュートンの運動法則が、力と運動の体系的な説明に結び付きました。</p><div class="callout warm"><strong>歴史的事実と学習用再構成を区別</strong><p>「速度を定義する必要性を、自分で考える」という体験は現代の教材としての再構成です。歴史上の科学者の実際の思考をそのまま再現したものではありません。</p></div>${button('phenomenon','定義研究室に戻る →')}</section>
  </div>`;
}

const pages = { inquiry: inquiryPage, transfer: transferPage, journeys: journeysPage, connections: connectionsPage, overview, phenomenon, acceleration: accelerationLabHtml, mechanics: mechanicsPage, forcelab: forceLabPage, conservation: conservationLabPage, advanced: advancedMechanicsPage, analytical: analyticalLabPage, kinematics: kinematicsLabPage, derivation, lab, exam, reflection, history: historyPage };
function navigate(page, push = true) {
  if (!pages[page]) page = 'overview';
  stopAnimation(); stopAnimation = () => {};
  const english=getLanguage()==='en';
  content.innerHTML = english && page==='overview' ? englishOverview()
    : english && page==='phenomenon' ? englishPhenomenon()
    : pages[page]();
  if(english && !['overview','phenomenon','mechanics','connections','journeys','transfer','inquiry'].includes(page)) {
    content.insertAdjacentHTML('afterbegin','<div class="i18n-notice" role="status"><strong>English edition in progress.</strong> This specialized interactive lab currently contains Japanese instructional text. The English mechanics textbook is available under “12 Mechanics Chapters”. Physical calculations and your saved learning progress remain unchanged.</div>');
  }
  nav.querySelectorAll('[data-page]').forEach(el => el.classList.toggle('active', el.dataset.page === page));
  side.classList.remove('open'); menuToggle.setAttribute('aria-expanded','false');
  if (push && location.hash !== `#${page}`) history.replaceState(null, '', `#${page}`);
  window.scrollTo({ top: 0, behavior: 'instant' });
  if (page === 'phenomenon' && !english) stopAnimation = installDefinitionLab();
  if (page === 'acceleration') stopAnimation = installAccelerationLab();
  if (page === 'mechanics') stopAnimation = installMechanics(renderPhysicsMath);
  if (page === 'connections') stopAnimation = installConnections(renderPhysicsMath);
  if (page === 'journeys') stopAnimation = installJourneys();
  if (page === 'transfer') stopAnimation = installTransferLab(renderPhysicsMath);
  if (page === 'inquiry') stopAnimation = installInquiry(renderPhysicsMath);
  if (page === 'forcelab') stopAnimation = installForceLab();
  if (page === 'conservation') stopAnimation = installConservationLab();
  if (page === 'advanced') stopAnimation = installAdvancedMechanics(renderPhysicsMath);
  if (page === 'analytical') stopAnimation = installAnalyticalLab(renderPhysicsMath);
  if (page === 'kinematics') stopAnimation = installKinematicsLab(renderPhysicsMath);
  if (page === 'derivation') installDepth();
  if (page === 'lab') stopAnimation = installLab();
  if (page === 'exam') installExam();
  if (page === 'reflection') installNotes();
  renderPhysicsMath();
  translateNavigation();
}

document.querySelector('#language-select')?.addEventListener('change',event=>{
  const page=location.hash.slice(1)||'overview';
  setLanguage(event.target.value);
  navigate(page,false);
});
setLanguage(getLanguage());
document.querySelector('#language-select').value=getLanguage();

document.addEventListener('click', e => {
  const newTransfer=e.target.closest('[data-open-transfer]');
  if(newTransfer){setTransferCase(newTransfer.dataset.openTransfer);navigate('transfer');return;}
  const newJourney = e.target.closest('[data-start-journey]');
  if (newJourney) {setJourneyStart(newJourney.dataset.startJourney);navigate('journeys');return;}
  const connection = e.target.closest('[data-open-connection]');
  if (connection) { setConnectionFocus(connection.dataset.openConnection); navigate('connections'); return; }
  const chapterLink = e.target.closest('[data-open-chapter]');
  if (chapterLink) { focusMechanicsChapter(chapterLink.dataset.openChapter); navigate('mechanics'); return; }
  const target = e.target.closest('[data-page], [data-goto], [data-reveal], [data-complete]');
  if (!target) return;
  if (target.dataset.page || target.dataset.goto) { navigate(target.dataset.page || target.dataset.goto); return; }
  if (target.dataset.reveal) document.getElementById(target.dataset.reveal)?.classList.toggle('hide');
  if (target.dataset.complete) { mark(target.dataset.complete); target.textContent = '✓ 記録しました'; target.disabled = true; }
});
menuToggle.addEventListener('click', () => { const opened = side.classList.toggle('open'); menuToggle.setAttribute('aria-expanded', String(opened)); });
document.querySelector('#brand-home').addEventListener('click', e => { e.preventDefault(); navigate('overview'); });
window.addEventListener('hashchange', () => navigate(location.hash.slice(1), false));

function installDepth() {
  const section = document.getElementById('math-depth');
  section.innerHTML = mathDepth.algebra;
  renderPhysicsMath(section);
  document.querySelectorAll('[data-depth]').forEach(tab => tab.addEventListener('click', () => {
    document.querySelectorAll('[data-depth]').forEach(button => button.classList.toggle('active', button === tab));
    section.innerHTML = mathDepth[tab.dataset.depth];
    renderPhysicsMath(section);
  }));
}

function installExam() {
  const answerTime = document.querySelector('#answer-time');
  const answerX = document.querySelector('#answer-x');
  const result = document.querySelector('#answer-result');
  document.querySelector('#check-answer').addEventListener('click', () => {
    const expected = twoStageTrain({ a1: 2, t1: 4, a2: -1 });
    const t = answerTime.value.trim() === '' ? NaN : Number(answerTime.value);
    const x = answerX.value.trim() === '' ? NaN : Number(answerX.value);
    const okT = approximatelyEqual(t, expected.totalTime, 0.01), okX = approximatelyEqual(x, expected.totalDistance, 0.01);
    store.attempts++; saveStore();
    if (okT && okX) mark('exam');
    result.className = `result-box ${okT && okX ? '' : 'error'}`;
    result.innerHTML = `<strong>${okT && okX ? '正解です。境界の速度をつなげられました！' : '考え方をもう一度点検しましょう。'}</strong><div>前半の速度：8 m/s、変位：16 m。後半の時間：8 s、変位：32 m。<br/>合計時間 = 12 s、合計変位 = 48 m。</div>`;
  });
  const fields = ['p-a1','p-t1','p-a2'].map(id => document.getElementById(id));
  function updateModel() {
    const [a1,t1,a2] = fields.map(el => Number(el.value));
    const output = document.querySelector('#model-result');
    try {
      const r = twoStageTrain({a1,t1,a2});
      output.innerHTML = `<strong>新しい条件での予測</strong><p>前半の終速度：${r.v1.toFixed(2)} m/s ／ 後半の停止まで：${r.t2.toFixed(2)} s<br/>総時間：${r.totalTime.toFixed(2)} s ／ 総変位：${r.totalDistance.toFixed(2)} m</p>`;
    } catch { output.textContent = '前半の加速度と時間は正、後半の加速度は負にしてください。'; }
  }
  fields.forEach(el => el.addEventListener('input', updateModel));
  updateModel();
}

function installNotes() {
  function renderNotes() {
    const list = document.querySelector('#notes-list');
    list.replaceChildren();
    document.querySelector('#note-count').textContent = `${store.notes.length} 件`; 
    if (!store.notes.length) { list.textContent = 'まだ記録はありません。自分の判断を一つ書いてみましょう。'; return; }
    store.notes.slice().reverse().forEach(note => {
      const row = document.createElement('div'); row.className = 'record';
      const strong = document.createElement('strong'); strong.textContent = note.stage;
      const stamp = document.createElement('small'); stamp.textContent = `　${new Date(note.at).toLocaleString('ja-JP')}`;
      const p = document.createElement('p'); p.textContent = note.text; p.style.whiteSpace = 'pre-wrap';
      row.append(strong, stamp, p); list.append(row);
    });
  }
  document.querySelector('#note-form').addEventListener('submit', event => {
    event.preventDefault();
    const text = document.querySelector('#note-text').value.trim();
    if (!text) return;
    store.notes.push({ stage: document.querySelector('#note-stage').value, text, at: new Date().toISOString() });
    saveStore(); document.querySelector('#note-text').value = '';
    document.querySelector('#note-feedback').textContent = '端末内に保存しました';
    renderNotes();
  });
  renderNotes();
}

function installLab() {
  const motionCanvas = document.querySelector('#motion-canvas'), chartCanvas = document.querySelector('#chart-canvas');
  const sliders = { time: document.querySelector('#time-slider'), v0: document.querySelector('#v0-slider'), a: document.querySelector('#a-slider'), duration: document.querySelector('#duration-slider') };
  const state = { time: 0, playing: false, v0: 3, a: -0.5, duration: 10 };
  let frame = 0, prevTime = 0, disposed = false;
  function sizeCanvas(canvas) {
    const rect = canvas.getBoundingClientRect(), ratio = Math.min(window.devicePixelRatio || 1, 2);
    const width = Math.max(320,rect.width), height = rect.height;
    canvas.width = Math.round(width*ratio); canvas.height = Math.round(height*ratio);
    const ctx = canvas.getContext('2d'); ctx.setTransform(ratio,0,0,ratio,0,0);
    return { ctx,width,height };
  }
  function drawArrow(ctx,x,y,length,color,label) {
    if (Math.abs(length) < 2) return;
    const end = x + length, sign = Math.sign(length);
    ctx.strokeStyle = color; ctx.fillStyle = color; ctx.lineWidth = 3; ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(end,y);ctx.stroke();
    ctx.beginPath();ctx.moveTo(end,y);ctx.lineTo(end-9*sign,y-5);ctx.lineTo(end-9*sign,y+5);ctx.closePath();ctx.fill();
    ctx.font = 'bold 12px sans-serif';ctx.fillText(label, end + (sign>0?4:-17), y-8);
  }
  function drawMotion() {
    const {ctx,width:w,height:h} = sizeCanvas(motionCanvas);ctx.clearRect(0,0,w,h);
    const p = {v0:state.v0,a:state.a}, xAt = t => motionAt(p,t).x;
    const candidates = [xAt(0),xAt(state.duration)]; const turning = state.a === 0 ? -1 : -state.v0/state.a;
    if(turning>0&&turning<state.duration)candidates.push(xAt(turning));
    const min = Math.min(-2,...candidates)-2, max = Math.max(2,...candidates)+2;
    const mapX=x=>34+(x-min)/(max-min)*(w-68), trackY = h*.64;
    ctx.strokeStyle='#c8d6ce';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(25,trackY);ctx.lineTo(w-25,trackY);ctx.stroke();
    ctx.font='11px sans-serif'; ctx.fillStyle='#82978b';
    let step=Math.pow(10,Math.floor(Math.log10((max-min)/8))); if((max-min)/step>14)step*=2; if((max-min)/step>14)step*=2;
    for(let x=Math.ceil(min/step)*step;x<=max;x+=step){const px=mapX(x);ctx.beginPath();ctx.moveTo(px,trackY-6);ctx.lineTo(px,trackY+6);ctx.stroke();ctx.fillText(Number(x.toFixed(1)),px-10,trackY+23);}
    const current = motionAt(p,state.time), objX=mapX(current.x);
    ctx.fillStyle='#3b8378';ctx.beginPath();ctx.roundRect(objX-17,trackY-34,34,30,7);ctx.fill();
    ctx.strokeStyle='#fff';ctx.lineWidth=2;ctx.beginPath();ctx.arc(objX-9,trackY-4,4,0,Math.PI*2);ctx.arc(objX+9,trackY-4,4,0,Math.PI*2);ctx.stroke();
    drawArrow(ctx,objX,trackY-57, Math.sign(current.v)*Math.min(90,Math.abs(current.v)*9),'#2b77b9','v');
    drawArrow(ctx,objX,trackY-85, Math.sign(state.a)*Math.min(85,Math.abs(state.a)*16),'#cf8a45','a');
    ctx.fillStyle='#64796f';ctx.font='12px sans-serif';ctx.fillText('正方向 →', 23,27);ctx.fillText(`x = ${current.x.toFixed(2)} m`,23,45);
  }
  function drawCharts() {
    const {ctx,width:w,height:h} = sizeCanvas(chartCanvas);ctx.clearRect(0,0,w,h);
    const p={v0:state.v0,a:state.a};
    const charts=[{ title:'位置 x(t) [m]',value:t=>motionAt(p,t).x,color:'#328976'}, {title:'速度 v(t) [m/s]',value:t=>motionAt(p,t).v,color:'#2e7eb7'}];
    charts.forEach((chart,index)=>{
      const left=54,right=w-18,top=17+index*(h/2),bottom=top+h/2-32;
      const values=Array.from({length:101},(_,i)=>chart.value(state.duration*i/100));
      let lo=Math.min(0,...values),hi=Math.max(0,...values);if(Math.abs(hi-lo)<.0001){lo-=1;hi+=1;}const pad=(hi-lo)*.12;lo-=pad;hi+=pad;
      const mx=t=>left+t/state.duration*(right-left),my=v=>bottom-(v-lo)/(hi-lo)*(bottom-top-24);
      ctx.fillStyle='#49645b';ctx.font='bold 12px sans-serif';ctx.fillText(chart.title,left,top+2);
      ctx.strokeStyle='#dae3dc';ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(left,top+15);ctx.lineTo(left,bottom);ctx.lineTo(right,bottom);ctx.stroke();
      if(lo<0&&hi>0){ctx.setLineDash([3,4]);ctx.beginPath();ctx.moveTo(left,my(0));ctx.lineTo(right,my(0));ctx.stroke();ctx.setLineDash([]);}
      ctx.font='10px sans-serif';ctx.fillStyle='#81958b';ctx.fillText(hi.toFixed(1),5,top+28);ctx.fillText(lo.toFixed(1),5,bottom);ctx.fillText('0',left-2,bottom+13);ctx.fillText(`${state.duration}s`,right-20,bottom+13);
      ctx.strokeStyle=chart.color;ctx.lineWidth=2.5;ctx.beginPath();values.forEach((v,i)=>{if(i===0)ctx.moveTo(mx(0),my(v));else ctx.lineTo(mx(state.duration*i/100),my(v));});ctx.stroke();
      ctx.fillStyle=chart.color;ctx.beginPath();ctx.arc(mx(state.time),my(chart.value(state.time)),4,0,Math.PI*2);ctx.fill();
      ctx.strokeStyle='#c0cfc6';ctx.setLineDash([4,5]);ctx.beginPath();ctx.moveTo(mx(state.time),top+14);ctx.lineTo(mx(state.time),bottom);ctx.stroke();ctx.setLineDash([]);
    });
  }
  function render() {
    if(disposed)return;
    sliders.time.value=String(state.time);sliders.time.max=String(state.duration);
    document.querySelector('#clock-label').textContent=`t = ${state.time.toFixed(2)} s`;
    document.querySelector('#v0-value').textContent=`${state.v0.toFixed(1)} m/s`;
    document.querySelector('#a-value').textContent=`${state.a.toFixed(2)} m/s²`;
    document.querySelector('#duration-value').textContent=`${state.duration} s`;
    const m = motionAt({v0:state.v0,a:state.a},state.time);
    document.querySelector('#stat-x').textContent=`${m.x.toFixed(2)} m`;
    document.querySelector('#stat-v').textContent=`${m.v.toFixed(2)} m/s`;
    document.querySelector('#stat-a').textContent=`${m.a.toFixed(2)} m/s²`;
    drawMotion();drawCharts();
  }
  const playButton=document.querySelector('#play-pause');
  function stopPlaying(){state.playing=false;playButton.textContent='▶ 再生';cancelAnimationFrame(frame);}
  function animate(now){if(!state.playing||disposed)return;if(prevTime){state.time=Math.min(state.duration,state.time+(now-prevTime)/1000);}prevTime=now;if(state.time>=state.duration)stopPlaying();render();if(state.playing)frame=requestAnimationFrame(animate);}
  playButton.addEventListener('click',()=>{if(state.playing){stopPlaying();return;}if(state.time>=state.duration)state.time=0;state.playing=true;playButton.textContent='Ⅱ 一時停止';prevTime=0;frame=requestAnimationFrame(animate);mark('lab');});
  document.querySelector('#reset-time').addEventListener('click',()=>{stopPlaying();state.time=0;render();});
  ['v0','a','duration','time'].forEach(name=>sliders[name].addEventListener('input',()=>{state[name]=Number(sliders[name].value);if(name==='duration')state.time=Math.min(state.time,state.duration);render();}));
  const resize=()=>{if(!disposed)render();};window.addEventListener('resize',resize);render();
  return ()=>{disposed=true;stopPlaying();window.removeEventListener('resize',resize);};
}

navigate(location.hash.slice(1) || 'overview', false);
