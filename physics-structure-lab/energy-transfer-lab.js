import {mechanicsSituationFigure} from './mechanics-situation-figures.js';
/* Energy transfer activities: deterministic model predictions, not measurements. */
const g=9.8;
const cases=[["slope",["摩擦のない斜面","Frictionless incline"],["角度が異なる斜面でも、落下高さが同じなら終点の速さは等しい。滑る時間は一般に異なる。","For an equal height loss, different frictionless inclines give the same final speed, though travel times differ."],["高さ h (m)","Height h (m)"],[0.5,10,0.5,4],"mgh=\\frac12 mv^2,\\quad v=\\sqrt{2gh}",["位置エネルギーの減少 mgh は運動エネルギーの増加となる。斜面角を含まず質量も消える。","Gravitational potential loss becomes kinetic energy, independent of slope angle and mass."],["初速0、摩擦・回転・空気抵抗なし、重力一定。","Released from rest, no friction, rotation or air resistance, constant g."],["斜面角度と高さの違いを考えさせる。","Distinguish slope angle from height loss."],["物体と地球の系を選び、高さの差で比較する。","Choose the object–Earth system and compare height differences."]],["spring",["ばねの解放","Spring release"],["圧縮したばねに蓄えたエネルギーが物体の運動に変わる。","Energy stored in a compressed spring becomes kinetic energy."],["初期圧縮 x (m)","Initial compression x (m)"],[0.1,2,0.1,0.8],"\\frac12kx^2=\\frac12mv^2,\\quad v=x\\sqrt{k/m}",["ばね定数 k=80 N/m、質量 m=2 kg。圧縮量を2倍にすると速さは2倍、蓄えたエネルギーは4倍。","For k=80 N/m and m=2 kg, doubling compression doubles speed and quadruples stored energy."],["線形・質量なしのばね、摩擦なし、自然長で離脱。","Massless linear spring, no friction, release at natural length."],["速さの一次比例とエネルギーの二乗比例を区別させる。","Distinguish linear speed scaling from quadratic energy scaling."],["初期ばねエネルギーと離脱時の運動エネルギーを比べる。","Compare initial spring energy and final kinetic energy."]],["pendulum",["振り子の最下点","Pendulum at the bottom"],["小球を角度 θ から静かに離す。最下点までの高さの差から速さを求める。","Release a pendulum from angle θ. Its drop in height determines its speed at the bottom."],["初期角度 θ (°)","Initial angle θ (°)"],[5,175,5,60],"h=\\ell(1-\\cos\\theta),\\quad v=\\sqrt{2g\\ell(1-\\cos\\theta)}",["糸の張力は変位に直交して仕事をしない。長さ ℓ=1.5 m。角度の計算では度をラジアンへ変換する。","Tension does no work. Length ℓ=1.5 m. Degrees are converted to radians for computation."],["固定支点、質量なしの伸びない糸、空気抵抗と摩擦なし、初速0。","Fixed pivot, inextensible massless string, no drag or friction, initially at rest."],["張力が仕事をせず、大角度でも高さの幾何が使えることを問う。","Test zero work by tension and exact height at large angles."],["最下点を基準に高さの差を求める。","Use the bottom as a reference to compute height loss."]],["friction",["摩擦による停止","Stopping under friction"],["滑走中の摩擦が負の仕事をする。初速を2倍にすると停止距離は4倍。","Sliding friction does negative work. Doubling initial speed quadruples stopping distance."],["初速 v (m/s)","Initial speed v (m/s)"],[1,20,0.5,8],"-\\mu_kmgd=-\\frac12mv_0^2,\\quad d=\\frac{v_0^2}{2\\mu_kg}",["動摩擦係数 μ=0.4。摩擦の仕事が初期運動エネルギーをちょうど打ち消すまで進む。","With kinetic friction μ=0.4, the negative frictional work cancels initial kinetic energy."],["水平面、一定の動摩擦係数、空気抵抗なし、滑り摩擦が停止まで作用。","Horizontal plane, constant kinetic friction, no drag, sliding to rest."],["保存則でなく仕事―運動エネルギー定理を使えるか問う。","Test the work–energy theorem rather than mechanical-energy conservation."],["摩擦の負の仕事と停止時の運動エネルギー0を結びつける。","Relate negative friction work to zero final kinetic energy."]]];
const esc=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const eq=s=>'<div class="formula tex-display" data-tex="'+esc(s)+'">'+esc(s)+'</div>';
export function calculateEnergyCase(key,value){
 if(!Number.isFinite(value)||value<0)throw new RangeError('Invalid physical parameter');
 if(key==='slope')return {quantity:'speed',result:Math.sqrt(2*g*value),unit:'m/s'};
 if(key==='spring')return {quantity:'speed',result:value*Math.sqrt(80/2),unit:'m/s'};
 if(key==='pendulum'){if(value>180)throw new RangeError('Angle must be at most 180 degrees');return {quantity:'speed',result:Math.sqrt(2*g*1.5*(1-Math.cos(value*Math.PI/180))),unit:'m/s'};}
 if(key==='friction')return {quantity:'stopping distance',result:value*value/(2*0.4*g),unit:'m'};
 throw new RangeError('Unknown model');
}
export function energyTransferHtml(lang='ja'){
 const en=lang==='en',i=en?1:0;
 return '<section class="mechanics-worked-article" id="energy-transfer-lab"><h3>'+(en?'Cross-system energy examples':'横断例題：エネルギーで4つの現象を比較')+'</h3><p>'+(en?'Choose a model and change its input before revealing the calculated answer and reasoning.':'現象を選び、条件を変えて予測してから計算結果と理由を確認します。')+'</p>'
 +'<label for="energy-case-select">'+(en?'Example':'例題')+'</label><select id="energy-case-select">'+cases.map(c=>'<option value="'+c[0]+'">'+esc(c[1][i])+'</option>').join('')+'</select>'
 +'<p id="energy-case-scene"></p><div id="energy-case-figure"></div><label for="energy-case-value" id="energy-case-label"></label><input id="energy-case-value" type="range"><p id="energy-case-current" aria-live="polite"></p>'
 +'<button type="button" class="secondary-btn" id="energy-case-reveal">'+(en?'Show calculation and assumptions':'計算と成立条件を表示')+'</button><div id="energy-case-answer" hidden></div>'
 +'<p class="muted">'+(en?'All values are idealized model predictions, not experimental measurements. No mandatory quiz.':'数値は理想化されたモデルの予測値であり、測定値ではありません。必須テストはありません。')+'</p></section>';
}
export function installEnergyTransfer(root,lang='ja',renderMath=()=>{}){
 const host=root.querySelector('#energy-transfer-lab');if(!host)return;
 const i=lang==='en'?1:0;
 const figure=host.querySelector('#energy-case-figure');
 const select=host.querySelector('#energy-case-select'),slider=host.querySelector('#energy-case-value'),scene=host.querySelector('#energy-case-scene'),label=host.querySelector('#energy-case-label'),current=host.querySelector('#energy-case-current'),answer=host.querySelector('#energy-case-answer');
 const chosen=()=>cases.find(c=>c[0]===select.value);
 function update(){const c=chosen();scene.textContent=c[2][i];figure.innerHTML=mechanicsSituationFigure('transfer-'+c[0],'supplement',lang);label.textContent=c[3][i];current.textContent=c[3][i]+': '+slider.value;answer.hidden=true;answer.replaceChildren();}
 function setup(){const c=chosen(),r=c[4];slider.min=r[0];slider.max=r[1];slider.step=r[2];slider.value=r[3];update();}
 select.addEventListener('change',setup);slider.addEventListener('input',update);
 host.querySelector('#energy-case-reveal').addEventListener('click',()=>{const c=chosen(),v=calculateEnergyCase(c[0],Number(slider.value));answer.hidden=false;answer.innerHTML=eq(c[5])+'<p>'+esc(c[6][i])+'</p><p><strong>'+(i?'Model result: ':'モデル計算：')+v.quantity+' = '+v.result.toFixed(3)+' '+v.unit+'</strong></p><p>'+(i?'Assumptions: ':'成立条件：')+esc(c[7][i])+'</p><h4>'+(i?'Problem designer':'出題者の思考')+'</h4><p>'+esc(c[8][i])+'</p><h4>'+(i?'Problem solver':'解答者の思考')+'</h4><p>'+esc(c[9][i])+'</p>';renderMath(answer);});
 setup();
}
