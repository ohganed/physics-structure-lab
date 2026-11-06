/* Acceleration concept: one-dimensional and uniform circular-motion models. */
export function lineState({v0=2,a=1},t){
 if(![v0,a,t].every(Number.isFinite)||t<0)throw new RangeError('Invalid time or parameters');
 return {x:v0*t+0.5*a*t*t,v:v0+a*t,a};
}
export function circleState({r=3,speed=4},t){
 if(![r,speed,t].every(Number.isFinite)||r<=0||speed<0||t<0)throw new RangeError('Invalid circular-motion parameters');
 const omega=speed/r, theta=omega*t, c=Math.cos(theta),s=Math.sin(theta);
 return {x:r*c,y:r*s,vx:-speed*s,vy:speed*c,ax:-(speed*speed/r)*c,ay:-(speed*speed/r)*s,a:speed*speed/r,omega};
}
const f=n=>(Math.abs(n)<0.000001?0:n).toFixed(2);
export function accelerationLabHtml(){
 return `
 <div class="page">
  <div class="page-header"><div><div class="eyebrow">CHAPTER 01 · ACCELERATION CONCEPT LAB</div><h1>加速度とは何が変化することか</h1><p class="lead">速さが増す・減るだけでなく、速度の向きが変わる場合も加速度があります。定義が必要になる理由を、現象と数式を往復して調べます。</p></div><span class="tag">現象→定義→予測→確認</span></div>
  <section class="card">
   <h2>そもそも、何を比べている？</h2>
   <p>同じ速度変化でも、短時間で変化する場合と長時間かけて変化する場合は区別したい。そこで「単位時間あたりの速度の変化」を平均加速度として定義します。</p>
   <div class="formula tex-display" data-tex="\\bar{\\boldsymbol a}=\\frac{\\Delta\\boldsymbol v}{\\Delta t}">平均加速度 = 速度の変化 / 時間</div>
   <p>速度は向きを持つ<strong>ベクトル</strong>です。「速さが一定だから加速度が0」とは限りません。定義と、力が加速度を決める運動法則は別のものです。</p>
  </section>
  <section class="card acceleration-lab">
   <div class="section-head"><h2>2つの現象を比べる</h2><p>モデルを切り替える</p></div>
   <div class="select-tabs" role="group" aria-label="運動の種類"><button class="active" data-acc-mode="line">一直線の運動</button><button data-acc-mode="circle">速さ一定の円運動</button></div>
   <div class="acc-controls" id="acc-line-controls">
    <label>初速度 <output id="acc-v0-out">2.0 m/s</output><input id="acc-v0" type="range" min="-6" max="6" step="0.5" value="2"></label>
    <label>加速度 <output id="acc-a-out">1.0 m/s²</output><input id="acc-a" type="range" min="-3" max="3" step="0.25" value="1"></label>
   </div>
   <div class="acc-controls hide" id="acc-circle-controls">
    <label>速さ <output id="acc-speed-out">4.0 m/s</output><input id="acc-speed" type="range" min="0" max="8" step="0.5" value="4"></label>
    <label>円の半径 <output id="acc-radius-out">3.0 m</output><input id="acc-radius" type="range" min="1" max="6" step="0.5" value="3"></label>
   </div>
   <div class="acc-figure">
    <svg id="acc-svg" viewBox="0 0 680 260" role="img" aria-label="物体の位置、速度ベクトル、加速度ベクトルを示す動的な図">
     <rect x="0" y="0" width="680" height="260" rx="15" fill="#f4f9f6"/>
     <g id="acc-line-scene"><line x1="35" y1="173" x2="645" y2="173" stroke="#9aafa6" stroke-width="3"/><line x1="340" y1="161" x2="340" y2="186" stroke="#587568" stroke-width="2"/><text x="340" y="203" font-size="12" text-anchor="middle" fill="#587568">原点</text></g>
     <g id="acc-circle-scene" class="hide"><circle cx="340" cy="129" r="94" fill="none" stroke="#9aafa6" stroke-width="2" stroke-dasharray="7 5"/><circle cx="340" cy="129" r="4" fill="#587568"/><text x="345" y="145" font-size="12" fill="#587568">中心</text></g>
     <circle id="acc-object" cx="340" cy="173" r="13" fill="#194d4b" stroke="white" stroke-width="3"/>
     <line id="acc-velocity" x1="340" y1="173" x2="340" y2="173" stroke="#2473bf" stroke-width="4" marker-end="url(#acc-blue)"/>
     <line id="acc-acceleration" x1="340" y1="173" x2="340" y2="173" stroke="#d08339" stroke-width="4" marker-end="url(#acc-orange)"/>
     <defs><marker id="acc-blue" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 Z" fill="#2473bf"/></marker><marker id="acc-orange" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 Z" fill="#d08339"/></marker></defs>
     <text x="20" y="24" fill="#47665d" font-size="14" font-weight="700">青：速度　橙：加速度</text>
    </svg>
    <div class="acc-player"><button id="acc-play" class="secondary-btn">▶ 再生</button><button id="acc-reset" class="secondary-btn">↺ 最初から</button><label for="acc-time">時刻 <output id="acc-time-out">0.00 s</output></label><input id="acc-time" type="range" min="0" max="8" step="0.05" value="0"></div>
   </div>
   <div class="acc-results" aria-live="polite">
    <div><small id="acc-label-one">現在の速度</small><strong id="acc-result-one">2.00 m/s</strong></div>
    <div><small id="acc-label-two">加速度の大きさ</small><strong id="acc-result-two">1.00 m/s²</strong></div>
    <div><small id="acc-label-three">位置</small><strong id="acc-result-three">0.00 m</strong></div>
   </div>
   <div id="acc-line-formula" class="formula tex-display" data-tex="v(t)=v_0+at">v(t)=v0+at</div>
   <div id="acc-circle-formula" class="formula tex-display hide" data-tex="|\\boldsymbol{a}|=\\frac{v^2}{r}">a=v²/r</div>
   <div class="callout warm"><strong>モデルの成立条件</strong><p id="acc-limit">直線運動・加速度一定を仮定しています。変化する加速度には同じ式をそのまま使えません。</p></div>
  </section>
  <section class="card">
   <h2>解く前に、自分の判断を点検する</h2>
   <p><strong>予測：</strong>速度と加速度の向きが逆なら、物体は必ず逆向きに進むのでしょうか？ また、円運動で速さが一定なのに加速度があるのはなぜでしょうか？</p>
   <button class="secondary-btn" id="acc-reveal">考えるための手掛かりを表示</button>
   <div class="callout hide" id="acc-explanation"><strong>自分が「速度」と「速さ」を混同していないか。</strong><p>速度と加速度の向きが逆でも、すぐ反転するとは限りません。初めは減速し、速度が0になってから向きを変えます。円運動では速度ベクトルの方向が連続的に変化するため、中心向きの加速度が必要です。円運動の式は幾何学と極限から導く結果であり、定義そのものではありません。</p></div>
   <p class="muted">メタ認知：最初の予想と結果を比べ、「何を同じ量だと思い込んだか」を言葉にしてください。</p>
   <div class="button-row"><button class="primary-btn" data-complete="acceleration">加速度の概念を確認した ✓</button><button class="secondary-btn" data-goto="derivation">式の導出へ →</button><button class="secondary-btn" data-goto="reflection">思考ノートへ →</button></div>
  </section>
 </div>`;
}
export function installAccelerationLab(){
 const $=id=>document.getElementById(id), view=$('acc-svg');
 if(!view)return ()=>{};
 const inputs={v0:$('acc-v0'),a:$('acc-a'),speed:$('acc-speed'),r:$('acc-radius')};
 const time=$('acc-time'),play=$('acc-play');let mode='line',t=0,frame=0,last=null,running=false,disposed=false;
 const num=k=>Number(inputs[k].value);
 const setArrow=(id,x,y,dx,dy)=>{const e=$(id);e.setAttribute('x1',x);e.setAttribute('y1',y);e.setAttribute('x2',x+dx);e.setAttribute('y2',y+dy);e.style.opacity=Math.hypot(dx,dy)<0.1?'0':'1';};
 function draw(){
   $('acc-v0-out').textContent=num('v0').toFixed(1)+' m/s';$('acc-a-out').textContent=num('a').toFixed(2)+' m/s²';
   $('acc-speed-out').textContent=num('speed').toFixed(1)+' m/s';$('acc-radius-out').textContent=num('r').toFixed(1)+' m';
   time.value=t;$('acc-time-out').textContent=f(t)+' s';
   let x,y,vx,vy,ax,ay;
   if(mode==='line'){
    const s=lineState({v0:num('v0'),a:num('a')},t);
    x=340+Math.max(-275,Math.min(275,s.x*8));y=173;vx=s.v*10;vy=0;ax=s.a*19;ay=0;
    $('acc-label-one').textContent='速度（符号付き）';$('acc-result-one').textContent=f(s.v)+' m/s';
    $('acc-label-two').textContent='加速度（符号付き）';$('acc-result-two').textContent=f(s.a)+' m/s²';
    $('acc-label-three').textContent='原点からの位置';$('acc-result-three').textContent=f(s.x)+' m';
    $('acc-limit').textContent='1次元、加速度が一定という仮定です。図の位置は表示範囲内に制限していますが、計算値は制限していません。';
   }else{
    const s=circleState({r:num('r'),speed:num('speed')},t);
    x=340+94*Math.cos(s.omega*t);y=129-94*Math.sin(s.omega*t);
    vx=s.vx*12;vy=-s.vy*12;ax=s.ax*15;ay=-s.ay*15;
    $('acc-label-one').textContent='速さ（一定）';$('acc-result-one').textContent=f(num('speed'))+' m/s';
    $('acc-label-two').textContent='加速度の大きさ';$('acc-result-two').textContent=f(s.a)+' m/s²';
    $('acc-label-three').textContent='角速度';$('acc-result-three').textContent=f(s.omega)+' rad/s';
    $('acc-limit').textContent='半径一定・速さ一定の円運動です。中心向きの加速度が存在します。見やすさのため円の表示半径は固定し、計算には設定した実際の半径を使っています。';
   }
   $('acc-object').setAttribute('cx',x);$('acc-object').setAttribute('cy',y);
   setArrow('acc-velocity',x,y,vx,vy);setArrow('acc-acceleration',x,y,ax,ay);
 }
 function pause(){running=false;play.textContent='▶ 再生';cancelAnimationFrame(frame);last=null;}
 function tick(now){if(!running||disposed)return;if(last!==null)t=Math.min(8,t+(now-last)/1000);last=now;draw();if(t>=8)pause();else frame=requestAnimationFrame(tick);}
 document.querySelectorAll('[data-acc-mode]').forEach(button=>button.addEventListener('click',()=>{
  pause();mode=button.dataset.accMode;t=0;document.querySelectorAll('[data-acc-mode]').forEach(b=>b.classList.toggle('active',b===button));
  $('acc-line-controls').classList.toggle('hide',mode!=='line');$('acc-circle-controls').classList.toggle('hide',mode!=='circle');
  $('acc-line-scene').classList.toggle('hide',mode!=='line');$('acc-circle-scene').classList.toggle('hide',mode!=='circle');
  $('acc-line-formula').classList.toggle('hide',mode!=='line');$('acc-circle-formula').classList.toggle('hide',mode!=='circle');draw();
 }));
 Object.values(inputs).forEach(el=>el.addEventListener('input',draw));
 time.addEventListener('input',()=>{pause();t=Number(time.value);draw();});
 play.addEventListener('click',()=>{if(running){pause();return;}if(t>=8)t=0;running=true;last=null;play.textContent='Ⅱ 一時停止';frame=requestAnimationFrame(tick);});
 $('acc-reset').addEventListener('click',()=>{pause();t=0;draw();});
 $('acc-reveal').addEventListener('click',()=>{$('acc-explanation').classList.toggle('hide');});
 draw();return()=>{disposed=true;pause();};
}
