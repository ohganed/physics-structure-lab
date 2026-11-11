// Meaning alignment lab: compare mental models without treating agreement as proof.
const CASES = [
  {
    id:'force', title:'力：動いている物体には進行方向の力が必要？', term:'力',
    prior:['速度と力の違い','物体に働く力を矢印で示す','摩擦を無視する意味'],
    prompt:'摩擦のない水平面で、右向きに一定の速さで滑る箱。手はすでに離れています。水平方向に働く力は？',
    options:['右向きに力が働く','水平方向には力が働かない','左向きに力が働く'],
    correct:1,
    reasons:['「動いている」ことから「動かす力」を連想している可能性があります。速さと力は別の量です。','速度があっても加速度はゼロ。合力はゼロです。','摩擦がない設定なので左向きの抵抗もありません。'],
    transfer:'右向きに速さを増しているなら、合力はどうなる？',
    transferOptions:['右向き','ゼロ','左向き'], transferCorrect:0,
    transferReason:'速度が右向きで大きくなっているので、加速度も合力も右向き。速度の向きだけでは力は決まりません。',
    svg:`<svg viewBox="0 0 440 190" role="img" aria-label="摩擦のない床の上を右へ等速で移動する箱。右向きの速度矢印。水平方向の力はなし"><defs><marker id="mf-arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0L6 3L0 6" fill="none" stroke="#24756d" stroke-width="1.5"/></marker></defs><path d="M20 136H420" stroke="#71869a" stroke-width="3"/><rect x="172" y="79" width="89" height="56" rx="6" fill="#d4e5f7" stroke="#4b7399" stroke-width="2"/><text x="217" y="111" text-anchor="middle" fill="#203432" font-size="15">箱</text><path d="M220 65H358" stroke="#24756d" stroke-width="3" marker-end="url(#mf-arr)"/><text x="290" y="52" fill="#24756d" text-anchor="middle">速度 v（右向き）</text><text x="218" y="167" text-anchor="middle" fill="#526b66" font-size="13">摩擦なし・等速直線運動</text></svg>`
  },
  {
    id:'acceleration', title:'加速度：速さが変わらなければ加速度はゼロ？', term:'加速度',
    prior:['速度には大きさと向きがある','速度の変化を考える','円運動で向きが変わる'],
    prompt:'一定の速さで円周上を動く小球。加速度はあるでしょうか？',
    options:['速さが一定なのでない','進行方向にある','進行方向と直角で円の中心へ向く'],
    correct:2,
    reasons:['速さが同じでも速度の「向き」が変わっています。','進行方向の加速度があると速さが変わるので、等速円運動の条件と違います。','速度ベクトルの向きが変わり、加速度は中心向きです。'],
    transfer:'円運動の速さを2倍、半径を同じにすると加速度の大きさは？',
    transferOptions:['2倍','4倍','変わらない'], transferCorrect:1,
    transferReason:'向心加速度の大きさは v²/r。速度ベクトルが曲がる割合を式にしたものです。',
    svg:`<svg viewBox="0 0 440 190" role="img" aria-label="円の右端の小球。接線上向きの速度矢印と中心左向きの加速度矢印"><defs><marker id="ma-arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0L6 3L0 6" fill="none" stroke="currentColor" stroke-width="1.5"/></marker></defs><circle cx="198" cy="105" r="67" stroke="#71869a" stroke-width="2" fill="none"/><circle cx="198" cy="105" r="3" fill="#71869a"/><circle cx="265" cy="105" r="8" fill="#2a7970"/><path d="M265 97V23" stroke="#20776f" stroke-width="3" marker-end="url(#ma-arr)"/><text x="286" y="36" font-size="13" fill="#20776f">速度 v</text><path d="M255 105H205" stroke="#ad6839" stroke-width="3"/><path d="M213 100L205 105L213 110" stroke="#ad6839" stroke-width="2" fill="none"/><text x="206" y="130" fill="#ad6839" font-size="13">加速度 a</text><text x="198" y="184" text-anchor="middle" font-size="12" fill="#526b66">速さ一定でも速度の向きは変わる</text></svg>`
  },
  {
    id:'work', title:'仕事：力をかけたら必ず仕事をする？', term:'仕事',
    prior:['力の向き','力を受ける物体の変位','内積と向きの関係（発展）'],
    prompt:'水平な床を歩く人が、重い荷物を一定の高さに支えています。荷物に加える上向きの力がする仕事は？',
    options:['力があるので正の仕事','水平移動の間はゼロ','負の仕事'],
    correct:1,
    reasons:['「疲れる」ことと、ここで考える「荷物に加えた上向きの力の仕事」を分けましょう。','荷物の変位は水平で、支える力は鉛直。力と変位が直角なので仕事はゼロです。','力が移動方向と逆向きではありません。'],
    transfer:'同じ荷物を鉛直上向きに持ち上げると、手が荷物にする仕事は？',
    transferOptions:['正','ゼロ','負'], transferCorrect:0,
    transferReason:'力と変位が同じ向きなので W=Fs cos0°=Fs>0（一定の上向きの力の場合）。',
    svg:`<svg viewBox="0 0 440 190" role="img" aria-label="水平に動く荷物。上向きの支持力と右向きの変位が直角"><defs><marker id="mw-arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0L6 3L0 6" fill="none" stroke="#26746f" stroke-width="1.5"/></marker></defs><rect x="122" y="81" width="94" height="61" rx="5" fill="#e0eaf5" stroke="#53789d" stroke-width="2"/><text x="169" y="114" text-anchor="middle" fill="#203432">荷物</text><path d="M169 81V22" stroke="#ad6839" stroke-width="3"/><path d="M164 31L169 22L174 31" fill="none" stroke="#ad6839" stroke-width="2"/><text x="183" y="29" fill="#ad6839" font-size="13">支える力 F</text><path d="M217 111H363" stroke="#26746f" stroke-width="3" marker-end="url(#mw-arr)"/><text x="283" y="95" fill="#26746f" font-size="13">変位 s</text><text x="220" y="176" text-anchor="middle" fill="#526b66" font-size="13">F と s は直角 → W=Fs cos90°=0</text></svg>`
  },
  {
    id:'charge', title:'電荷保存：「前＝後」はどこでも成り立つ？', term:'電荷保存',
    prior:['正・負の電荷','系の内側と外側','電荷の移動と総量の区別'],
    prompt:'二つの帯電体を含む「閉じた系」を考えます。内部で電子が一方から他方へ移動したとき、系全体の電荷の総和は？',
    options:['電子を受け取った物体の分だけ増える','系全体では変わらない','移動した電子の分だけ減る'],
    correct:1,
    reasons:['片方だけの電荷と、二つを合わせた系全体の総電荷を区別しましょう。','内部移動は配分を変えるだけ。系を出入りする電荷がなければ総和は一定です。','電子が系の外に出たとは書かれていません。'],
    transfer:'外部から電子が系に流入すると、元の二物体の電荷の総和は？',
    transferOptions:['必ず一定','負方向に変化する','正方向に変化する'], transferCorrect:1,
    transferReason:'外から負電荷が入るので、対象の二物体だけの総和は負方向に変化します。外部を含む大きな系で保存を考えます。',
    svg:`<svg viewBox="0 0 440 190" role="img" aria-label="破線で囲んだ閉じた系の中で二つの物体の間を電子が移動。電荷の合計は保存される"><rect x="35" y="25" width="367" height="125" rx="12" fill="none" stroke="#6b9290" stroke-dasharray="6 5" stroke-width="2"/><text x="53" y="44" fill="#486a66" font-size="13">閉じた系</text><rect x="80" y="65" width="93" height="60" rx="9" fill="#d9ebf9" stroke="#557eab"/><rect x="267" y="65" width="93" height="60" rx="9" fill="#f8e5db" stroke="#ac7757"/><text x="126" y="100" text-anchor="middle" fill="#274d76">物体 A</text><text x="313" y="100" text-anchor="middle" fill="#855234">物体 B</text><path d="M183 95H254" stroke="#20776f" stroke-width="2.5"/><path d="M245 90L254 95L245 100" stroke="#20776f" stroke-width="2" fill="none"/><text x="218" y="80" text-anchor="middle" fill="#20776f" font-size="12">電子の移動</text><text x="218" y="177" text-anchor="middle" fill="#526b66" font-size="13">AとBの電荷は変わるが、A+Bは一定</text></svg>`
  }
];

const escapeHTML = (s) => String(s).replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let selectedId = 'force';
export function meaningLabPage() {
  return `<div class="page meaning-lab">
    <div class="eyebrow">MEANING ALIGNMENT · 学習者の理解を確かめる</div>
    <h1>意味のすり合わせラボ</h1>
    <p>同じ「力」「仕事」という言葉を使っていても、頭の中に描いた現象は違うかもしれません。<strong>予想 → 理由 → 図との比較 → 別の条件への転用</strong>を通じて、自分の理解を更新します。正解数で学習を止めません。</p>
    <div class="ml-flow" aria-label="学習の流れ"><span>現象を見る</span><span>自分の予想</span><span>理由を言葉に</span><span>違いを確かめる</span><span>別の現象へ</span></div>
    <section class="card"><label for="ml-case"><strong>考える現象を選ぶ</strong></label><select id="ml-case" class="select-input" style="width:100%;margin-top:8px">${CASES.map(c=>`<option value="${c.id}" ${c.id===selectedId?'selected':''}>${c.title}</option>`).join('')}</select></section>
    <div id="ml-activity"></div>
    <section class="card"><h2>先生の説明と、学習者の理解は同じとは限らない</h2><p>教師の心的モデル X₁ を言葉や図 a={a₁,…,aₙ} にして伝えても、学習者は既有知識から X₂ を構成します。言葉を増やせば良いとは限りません。<strong>予想や理由を交換して、どこにずれがあるかを調べる</strong>ことが大切です。</p><p>教師と生徒が同じ誤りを共有する可能性もあります。だから、やり取りだけで終わらず、現象・測定・適用条件にも照らして検証します。</p></section>
  </div>`;
}
function renderActivity() {
  const c=CASES.find(item=>item.id===selectedId)||CASES[0], host=document.querySelector('#ml-activity');
  if(!host)return;
  host.innerHTML=`<section class="card"><h2>① まず、どんな現象を思い浮かべますか？</h2><p>${c.prompt}</p><div class="ml-choices" role="group" aria-label="最初の予想">${c.options.map((x,i)=>`<label><input type="radio" name="ml-first" value="${i}"> ${x}</label>`).join('')}</div><label for="ml-reason"><strong>そう考えた理由（自分の言葉）</strong></label><textarea id="ml-reason" class="textarea-input" rows="3" placeholder="何を手がかりに連想しましたか？　空欄でも進めます。"></textarea><p><button class="primary-btn" type="button" id="ml-compare">図と照らし合わせる</button></p><p id="ml-hint" role="status" aria-live="polite"></p></section><section class="card ml-hidden" id="ml-feedback"><h2>② 図と、自分の解釈を比較する</h2><div class="ml-figure">${c.svg}</div><div id="ml-interpretation" aria-live="polite"></div><details><summary>この概念を理解するための前提を確認</summary><ul>${c.prior.map(x=>`<li>${x}</li>`).join('')}</ul><p>知らない言葉があれば、先に図や具体的な経験に戻りましょう。すべての用語を暗記する必要はありません。</p></details><h3>③ 別の条件でも説明できますか？</h3><p>${c.transfer}</p><div class="ml-choices" role="group" aria-label="転用の予想">${c.transferOptions.map((x,i)=>`<label><input type="radio" name="ml-transfer" value="${i}"> ${x}</label>`).join('')}</div><button class="secondary-btn" type="button" id="ml-transfer-check">考えを確かめる</button><p id="ml-transfer-result" aria-live="polite"></p><h3>④ 自分の理解は変わりましたか？</h3><label for="ml-revision">変わった点・まだわからない点</label><textarea id="ml-revision" class="textarea-input" rows="3" placeholder="最初の予想と今の考えの違いを書く。"></textarea><button class="secondary-btn" type="button" id="ml-save">この端末に記録する</button><p id="ml-saved" aria-live="polite"></p></section>`;
  host.querySelector('#ml-compare').addEventListener('click',()=>{
    const checked=host.querySelector('input[name="ml-first"]:checked');
    if(!checked){host.querySelector('#ml-hint').textContent='まず一つ予想してみましょう。間違えてもかまいません。';return;}
    const n=Number(checked.value);
    host.querySelector('#ml-interpretation').innerHTML=`<p><strong>選んだ予想：</strong>${escapeHTML(c.options[n])}</p><p>${escapeHTML(c.reasons[n])}</p><p><strong>ここでの物理的な説明：</strong>${escapeHTML(c.reasons[c.correct])}</p><p class="muted">図と説明が一致しただけでは、理解が完成したとは限りません。次の条件でも考えてみます。</p>`;
    host.querySelector('#ml-feedback').classList.remove('ml-hidden');
    host.querySelector('#ml-feedback').scrollIntoView({behavior:'smooth',block:'start'});
  });
  host.querySelector('#ml-transfer-check').addEventListener('click',()=>{
    const checked=host.querySelector('input[name="ml-transfer"]:checked');
    host.querySelector('#ml-transfer-result').textContent=checked?
      `${Number(checked.value)===c.transferCorrect?'この条件では合っています。':'この条件では考え直してみましょう。'} ${c.transferReason}`:
      '転用の予想を一つ選んでください。';
  });
  host.querySelector('#ml-save').addEventListener('click',()=>{
    const revision=host.querySelector('#ml-revision').value.trim();
    if(!revision){host.querySelector('#ml-saved').textContent='変わった点や疑問を一つ書いてみましょう。';return;}
    try{
      const key='physics-meaning-reflections-v1', entries=JSON.parse(localStorage.getItem(key)||'[]');
      if(!Array.isArray(entries))throw new Error('invalid entries');
      entries.push({date:new Date().toISOString(),caseId:c.id,prediction:host.querySelector('input[name="ml-first"]:checked')?.value??null,reason:host.querySelector('#ml-reason').value.slice(0,2000),revision:revision.slice(0,2000)});
      localStorage.setItem(key,JSON.stringify(entries.slice(-100)));
      host.querySelector('#ml-saved').textContent='この端末に保存しました。考えが変わっても記録を残せます。';
    }catch{host.querySelector('#ml-saved').textContent='保存できませんでした。プライベートモードや容量をご確認ください。';}
  });
}
export function installMeaningLab() {
  const picker=document.querySelector('#ml-case');
  if(!picker)return ()=>{};
  const onChange=()=>{selectedId=picker.value;renderActivity();};
  picker.addEventListener('change',onChange);
  renderActivity();
  return ()=>picker.removeEventListener('change',onChange);
}
