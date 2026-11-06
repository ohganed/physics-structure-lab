/* Definition Lab: compare distance, displacement and different meanings of velocity.
   Pure deterministic kinematics; no server, login or AI required. */
export function trajectory({turn=12,end=0,t1=4,t2=4},time) {
  const values=[turn,end,t1,t2,time];
  if(!values.every(Number.isFinite)||t1<=0||t2<=0||time<0) throw new RangeError('Invalid trajectory parameters');
  const duration=t1+t2, t=Math.min(time,duration);
  const first=t<=t1;
  const x=first?turn*t/t1:turn+(end-turn)*(t-t1)/t2;
  const v=first?turn/t1:(end-turn)/t2;
  return {x,v,t,duration};
}
export function trajectorySummary({turn=12,end=0,t1=4,t2=4}) {
  if(![turn,end,t1,t2].every(Number.isFinite)||t1<=0||t2<=0) throw new RangeError('Invalid trajectory parameters');
  const distance=Math.abs(turn)+Math.abs(end-turn);
  const displacement=end;
  const duration=t1+t2;
  return {distance,displacement,duration,averageSpeed:distance/duration,averageVelocity:displacement/duration};
}
const fmt=n=>(Math.abs(n)<0.00001?0:n).toFixed(2);
const promptText=[
  ['道のりと変位', '出発点に戻る運動では、道のりは増えても変位は0になります。二つは測っているものが違います。'],
  ['速さと速度', '速さは経路の長さの変化率、1次元の速度は符号を持つ位置の変化率です。折り返し後は速度が負になる場合があります。'],
  ['定義を考える', '「どこに着いたか」を知りたいなら変位、「どれほど移動したか」を知りたいなら道のりを選びます。目的から物理量を選択します。']
];
export function definitionLabHtml() {
 return `
 <section class="card definition-lab" aria-labelledby="definition-lab-title">
  <div class="eyebrow">INTERACTIVE DEFINITION LAB · 01</div>
  <h2 id="definition-lab-title">同じ運動を、異なる物理量で測る</h2>
  <p>出発点を <strong>0 m</strong> に固定します。折り返す地点と最後に止まる地点、各区間の時間を変えてください。モデルは1次元で、各区間の速度が一定の運動です。折り返しの瞬間の加速度はこの理想化モデルでは扱いません。</p>
  <div class="definition-controls">
   <label>折り返し地点 <output id="def-turn-out">12 m</output><input id="def-turn" type="range" min="-10" max="20" step="1" value="12"></label>
   <label>終了地点 <output id="def-end-out">0 m</output><input id="def-end" type="range" min="-10" max="20" step="1" value="0"></label>
   <label>前半の時間 <output id="def-t1-out">4 s</output><input id="def-t1" type="range" min="1" max="15" step="1" value="4"></label>
   <label>後半の時間 <output id="def-t2-out">4 s</output><input id="def-t2" type="range" min="1" max="15" step="1" value="4"></label>
  </div>
  <div class="definition-track-frame">
   <svg id="def-track" viewBox="0 0 680 155" role="img" aria-label="位置の変化と出発点、折り返し地点、終了地点を示す動く図">
    <line x1="40" y1="111" x2="640" y2="111" stroke="#9dbbb0" stroke-width="2"/>
    <g stroke="#a6bbb2" fill="#526a60" font-size="12" text-anchor="middle">
      <line x1="222" y1="105" x2="222" y2="121" stroke-width="2"/>
      <text x="222" y="138">0 m</text>
    </g>
    <line id="def-outward" x1="222" y1="49" x2="440" y2="49" stroke="#2b76b8" stroke-width="6" stroke-linecap="round"/>
    <line id="def-return" x1="440" y1="72" x2="222" y2="72" stroke="#c48646" stroke-width="6" stroke-linecap="round"/>
    <g font-size="12" font-weight="700" fill="#244a44">
      <text x="20" y="17">青：前半　橙：後半</text>
      <text id="def-turn-label" x="440" y="35" text-anchor="middle">折返 12 m</text>
      <text id="def-end-label" x="222" y="92" text-anchor="middle">終了 0 m</text>
      <circle id="def-marker" cx="222" cy="111" r="11" fill="#194d4b" stroke="white" stroke-width="3"/>
    </g>
   </svg>
   <div class="definition-player">
    <button id="def-play" class="secondary-btn" type="button">▶ 再生</button>
    <button id="def-reset" class="secondary-btn" type="button">↺ 戻す</button>
    <label for="def-time">時刻 <output id="def-time-out">0.0 s</output></label>
    <input id="def-time" type="range" min="0" max="8" step="0.05" value="0" aria-label="観測時刻">
   </div>
  </div>
  <div class="definition-stats" aria-live="polite">
   <div><small>道のり（経路の長さ）</small><strong id="def-distance"></strong></div>
   <div><small>変位（位置の差）</small><strong id="def-displacement"></strong></div>
   <div><small>平均の速さ</small><strong id="def-speed"></strong></div>
   <div><small>平均速度（東向き正）</small><strong id="def-velocity"></strong></div>
  </div>
  <div class="definition-math-area">
   <div><span class="eyebrow">DEFINITION A</span><div class="formula tex-display" data-tex="\\text{平均の速さ}=\\frac{\\text{道のり}}{\\text{経過時間}}">平均の速さ = 道のり / 経過時間</div></div>
   <div><span class="eyebrow">DEFINITION B</span><div class="formula tex-display" data-tex="\\bar v=\\frac{\\Delta x}{\\Delta t}">平均速度 = 変位 / 経過時間</div></div>
  </div>
  <div class="callout"><strong>予測 → 実験 → 振り返り</strong><p id="def-insight">まず、終了地点を出発点と同じ0 mにすると、平均速度がどうなるか予測してみましょう。</p></div>
  <div class="button-row" role="group" aria-label="学びを深める問い">
   <button class="secondary-btn" type="button" data-def-question="0">道のりと変位</button>
   <button class="secondary-btn" type="button" data-def-question="1">速さと速度</button>
   <button class="secondary-btn" type="button" data-def-question="2">なぜ定義が必要？</button>
  </div>
  <p class="muted" id="def-question-response" aria-live="polite">問いを選ぶと、物理量の使い分けを考えられます。</p>
 </section>`;
}
export function installDefinitionLab() {
  const $=id=>document.getElementById(id);
  const els=['turn','end','t1','t2'].reduce((a,k)=>(a[k]=$('def-'+k),a),{});
  if (!els.turn) return ()=>{};
  const timeSlider=$('def-time'), play=$('def-play');
  let t=0, running=false, frame=0, last=null,disposed=false;
  const state=()=>Object.fromEntries(Object.entries(els).map(([k,el])=>[k,Number(el.value)]));
  const mapX=x=>40+(x+10)/30*600;
  const setLine=(id,a,b,y)=>{const el=$(id); el.setAttribute('x1',mapX(a));el.setAttribute('x2',mapX(b));el.setAttribute('y1',y);el.setAttribute('y2',y);};
  function render() {
    const s=state(), sum=trajectorySummary(s), at=trajectory(s,t);
    for(const [k,el] of Object.entries(els)) $('def-'+k+'-out').textContent=el.value+(k==='t1'||k==='t2'?' s':' m');
    setLine('def-outward',0,s.turn,49);
    setLine('def-return',s.turn,s.end,72);
    $('def-turn-label').setAttribute('x',mapX(s.turn));$('def-turn-label').textContent='折返 '+s.turn+' m';
    $('def-end-label').setAttribute('x',mapX(s.end));$('def-end-label').textContent='終了 '+s.end+' m';
    $('def-marker').setAttribute('cx',mapX(at.x));
    $('def-distance').textContent=fmt(sum.distance)+' m';
    $('def-displacement').textContent=fmt(sum.displacement)+' m';
    $('def-speed').textContent=fmt(sum.averageSpeed)+' m/s';
    $('def-velocity').textContent=fmt(sum.averageVelocity)+' m/s';
    $('def-time-out').textContent=fmt(at.t)+' s';timeSlider.max=sum.duration;timeSlider.value=t;
    $('def-insight').textContent=Math.abs(sum.displacement)<1e-10 && sum.distance>0
      ? '出発点に戻りました。道のりは '+fmt(sum.distance)+' m ですが、変位は0 m。平均速度は0でも移動しなかったわけではありません。'
      : '同じ物理的な移動でも、道のり '+fmt(sum.distance)+' m と変位 '+fmt(sum.displacement)+' m は異なります。求める目的から量を選びましょう。';
  }
  function pause(){running=false;play.textContent='▶ 再生';cancelAnimationFrame(frame);last=null;}
  function animate(now){
    if(!running||disposed)return;
    if(last!=null)t=Math.min(trajectorySummary(state()).duration,t+(now-last)/1000);
    last=now;render();
    if(t>=trajectorySummary(state()).duration)pause();
    else frame=requestAnimationFrame(animate);
  }
  Object.values(els).forEach(el=>el.addEventListener('input',()=>{
    pause();t=Math.min(t,trajectorySummary(state()).duration);render();
  }));
  timeSlider.addEventListener('input',()=>{pause();t=Number(timeSlider.value);render();});
  play.addEventListener('click',()=>{
    if(running){pause();return;}
    if(t>=trajectorySummary(state()).duration)t=0;
    running=true;last=null;play.textContent='Ⅱ 一時停止';frame=requestAnimationFrame(animate);
  });
  $('def-reset').addEventListener('click',()=>{pause();t=0;render();});
  document.querySelectorAll('[data-def-question]').forEach(button=>button.addEventListener('click',()=>{
    const q=promptText[Number(button.dataset.defQuestion)];
    $('def-question-response').textContent=q[0]+'：'+q[1];
  }));
  render();
  return ()=>{disposed=true;pause();};
}
