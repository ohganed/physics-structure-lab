/* Physically grounded, definition-level university transition figures. */
import {universityBridgeLessons} from './mechanics-university-bridge-data.js';
const h=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const ln=(x,y,X,Y,c='#79958c',w=2,d='')=>'<line x1="'+x+'" y1="'+y+'" x2="'+X+'" y2="'+Y+'" stroke="'+c+'" stroke-width="'+w+'"'+(d?' stroke-dasharray="'+d+'"':'')+'/>';
const t=(x,y,s,c='#31584c',size=16)=>'<text x="'+x+'" y="'+y+'" font-size="'+size+'" fill="'+c+'">'+h(s)+'</text>';
const circ=(x,y,r,c='#ddeee6')=>'<circle cx="'+x+'" cy="'+y+'" r="'+r+'" stroke="#477a6e" stroke-width="2" fill="'+c+'"/>';
const box=(x,y,w,ht,c='#e2eee8')=>'<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+ht+'" rx="4" stroke="#477a6e" stroke-width="2" fill="'+c+'"/>';
const curve=(d,c='#397e98',w=2,fill='none')=>'<path d="'+d+'" stroke="'+c+'" stroke-width="'+w+'" fill="'+fill+'" stroke-linecap="round"/>';
function arrow(x,y,X,Y,c='#af5e48'){
 const dx=X-x,dy=Y-y,n=Math.hypot(dx,dy),a=dx/n,b=dy/n;
 return ln(x,y,X,Y,c,2.6)+'<polygon fill="'+c+'" points="'+[[X,Y],[X-10*a-5*b,Y-10*b+5*a],[X-10*a+5*b,Y-10*b-5*a]].map(v=>v.join(',')).join(' ')+'"/>';
}
const spring=(x,y,X)=>{let d='M'+x+' '+y+' l12 0',step=(X-x-24)/16;for(let i=0;i<16;i++)d+=' l'+step.toFixed(2)+' '+(i%2?-11:11);return curve(d+' l12 0','#538074',2.5);};
function pendulum(kind,en){
 const ox=250,oy=43,L=170,theta=.6,bx=ox+L*Math.sin(theta),by=oy+L*Math.cos(theta),floor=oy+L;
 let s=circ(ox,oy,5,'#477a6e')+ln(ox,oy,ox,floor+20,'#a5bdb3',1,'5 5')+ln(ox,oy,bx,by,'#577f74',3)+circ(bx,by,15)+curve('M250 94 A51 51 0 0 0 278 85','#b65f48')+t(269,108,'θ','#b65f48')+t(273,117,'ℓ');
 if(kind==='constraint'){
  s+=arrow(ox,oy,ox+118,oy,'#397d9d')+arrow(ox,oy,ox,15,'#397d9d')+t(375,49,'x','#397d9d')+t(259,18,'y','#397d9d')
    +ln(ox,by,bx,by,'#a9bdb3',1,'4 4')+t(170,263,'q = θ');
 }else if(kind==='energy'){
  s+=circ(ox,floor,8,'none')+ln(bx+47,by,bx+47,floor,'#8ca69c',2)
   +arrow(bx+48,by,bx+48,floor,'#b65f48')+t(bx+60,(by+floor)/2,'h','#b65f48')
   +arrow(bx,by,bx+57,by-42,'#397d9d')+t(bx+61,by-48,'v','#397d9d')
   +t(92,268,'K = ½mv²')+t(310,268,'U = mgh');
 }else{
  s+=arrow(bx,by,bx,by+65,'#b65f48')+t(bx+12,by+65,'mg','#b65f48')
    +arrow(bx,by,bx-57,by+39,'#397d9d')+t(bx-147,by+52,'−mg sinθ','#397d9d')
    +arrow(bx,by,bx-39,by-51,'#8559a9')+t(bx-19,by-55,'T','#8559a9');
 }
 return s;
}
function springCart(y,vSign,en){
 let s=box(51,y-37,13,72,'#8eab9f')+ln(65,y+29,500,y+29,'#91aca1',2)
  +spring(66,y,230)+box(230,y-29,82,58)+ln(214,y-49,214,y+42,'#b4c8be',1,'5 5')
  +arrow(272,y,272+75*vSign,y,'#367c9e')
  +arrow(272,y,188,y,'#b35f48')
  +t(367,y-33,vSign>0?'v > 0':'v < 0','#367c9e')+t(140,y+52,en?'same q':'同じ位置 q');
 return s;
}
function graphSlope(en){
 let s=ln(89,240,491,240)+ln(280,243,280,30)+t(498,255,'q̇')+t(290,28,'L'),d='';
 for(let i=0;i<=120;i++){const x=104+i*3.0,y=207-.0043*(x-280)*(x-280);d+=(i?'L':'M')+x.toFixed(1)+' '+y.toFixed(1)+' ';}
 s+=curve(d,'#357f9c',3);
 const x=365,y=207-.0043*85*85,slope=-.0086*85;
 s+=ln(310,y+slope*(310-x),425,y+slope*(425-x),'#bb664c',2.5)
  +circ(x,y,5,'#bb664c')+t(365,102,en?'slope = p':'傾き = p','#bb664c')
  +t(99,268,en?'hold q fixed':'位置 q は固定');
 return s;
}
function actionPaths(en){
 return ln(70,233,498,233)+ln(70,233,70,28)+t(503,250,'t')+t(38,35,'q')
  +curve('M89 175 C170 83 290 90 461 147','#367f99',3)
  +curve('M89 175 C180 112 315 135 461 147','#b2674c',2)
  +curve('M89 175 C170 46 324 61 461 147','#855fa6',2)
  +circ(89,175,5,'#396e65')+circ(461,147,5,'#396e65')
  +t(78,251,'t₀')+t(449,251,'t₁')
  +t(170,52,en?'nearby paths':'近くの経路')+t(225,268,en?'fixed endpoints':'端点は固定');
}
function variationScene(en){
 // Two nearby trial paths with the same fixed endpoints; eta=0 at endpoints.
 return ln(70,233,498,233)+ln(70,233,70,28)+t(502,252,'t')+t(40,34,'θ')
  +curve('M94 180 C165 119 311 123 457 166','#367f99',3)
  +curve('M94 180 C165 73 311 81 457 166','#b1674a',2)
  +circ(94,180,5,'#477a6e')+circ(457,166,5,'#477a6e')
  +ln(262,108,262,99,'#8c64a8',2,'4 4')
  +arrow(262,127,262,101,'#8c64a8')
  +t(275,113,'εη(t)','#8c64a8')
  +t(86,251,'t₀')+t(444,251,'t₁')
  +t(119,37,en?'fixed endpoint values':'両端は同じ位置')
  +t(297,267,'η(t₀) = η(t₁) = 0');
}
function signCompare(en){
 // Positive theta at right of vertical. Restoring angular acceleration reduces theta,
 // while L=K+U would produce the incorrect opposite acceleration.
 let s='';
 for(const [index,cx] of [140,394].entries()){
  const cy=55,r=117,theta=.53,bx=cx+r*Math.sin(theta),by=cy+r*Math.cos(theta);
  s+=circ(cx,cy,5,'#477a6e')+ln(cx,cy,cx,cy+r+11,'#a6bcb2',1,'4 5')
    +ln(cx,cy,bx,by,'#547a70',3)+circ(bx,by,13)
    +curve('M'+cx+' '+(cy+40)+' Q'+(cx+10)+' '+(cy+44)+' '+(cx+21)+' '+(cy+35),'#986145',2)
    +t(cx+26,cy+58,'θ');
  if(index===0){
   s+=arrow(bx,by,bx-45,by+27,'#247d62')+t(bx-88,by+40,'aₜ','#247d62')
     +t(cx-70,31,en?'L = K − U ✓':'L = K − U ✓','#247d62')
     +t(cx-82,251,en?'restoring direction':'実際の復元方向','#247d62');
  }else{
   s+=arrow(bx,by,bx+38,by-24,'#b45d47')+t(bx+22,by-32,'aₜ','#b45d47')
     +t(cx-55,31,en?'L = K + U ×':'L = K + U ×','#b45d47')
     +t(cx-61,251,en?'wrong direction':'現象と逆向き','#b45d47');
  }
 }
 s+=ln(273,28,273,267,'#bccbc3',1,'4 5');
 return s;
}
function stateSpring(en){
 return box(47,107,15,67,'#8eab9f')+ln(62,174,501,174,'#95aba3',2)
  +spring(64,141,254)+box(254,110,81,64)
  +ln(231,87,231,192,'#adc2b9',1,'4 5')
  +arrow(288,142,214,142,'#b35e48')+t(126,116,'F = −kq','#b35e48')
  +arrow(231,209,297,209,'#387e9f')+t(258,239,'q','#387e9f')
  +t(372,119,'m')+t(321,265,en?'state (q, P)':'状態 (q, P)');
}
function phase(en){
 const cx=276,cy=144,rx=143,ry=94,x=355,yy=ry*Math.sqrt(1-((x-cx)/rx)**2),up=cy-yy,down=cy+yy;
 return ln(52,144,505,144)+ln(cx,267,cx,28)+t(506,152,'q')+t(cx+11,28,'p')
  +'<ellipse cx="'+cx+'" cy="'+cy+'" rx="'+rx+'" ry="'+ry+'" stroke="#397c99" stroke-width="3" fill="none"/>'
  +ln(x,up,x,down,'#a2b6ac',1,'5 5')
  +circ(x,up,6,'#b5674b')+circ(x,down,6,'#875bab')
  +arrow(x+4,up+2,x+30,up+24,'#b5674b')
  +arrow(x-3,down+2,x-31,down+19,'#875bab')
  +t(x+35,up-4,'p > 0','#b5674b')
  +t(x-103,down+35,'p < 0','#875bab')
  +t(106,268,en?'same position, opposite motion':'同じ位置でも運動は逆向き');
}
function energy(en){
 return stateSpring(en)+box(92,28,87,31,'#d5eadf')+box(185,28,85,31,'#f3e3d1')
  +t(124,49,'K','#35765e')+t(216,49,'U','#ae6547')
  +arrow(278,43,338,43,'#825da2')+t(350,49,'H = K + U','#825da2');
}
export const universityBridgeKinds=Object.freeze(['constraint','energy','paths','variation','sign-compare','result','same-position','newton-state','conjugate','hamilton-energy','phase']);
export function universityBridgeFigure(kind,title,lang='ja'){
 const en=lang==='en';let drawing='';
 if(['constraint','energy','result'].includes(kind))drawing=pendulum(kind,en);
 else if(kind==='paths')drawing=actionPaths(en);
 else if(kind==='variation')drawing=variationScene(en);
 else if(kind==='sign-compare')drawing=signCompare(en);
 else if(kind==='same-position')drawing=springCart(83,1,en)+springCart(207,-1,en);
 else if(kind==='newton-state')drawing=stateSpring(en);
 else if(kind==='conjugate')drawing=graphSlope(en);
 else if(kind==='hamilton-energy')drawing=energy(en);
 else if(kind==='phase')drawing=phase(en);
 if(!drawing)return '';
 return '<figure class="mechanics-university-figure" data-bridge-figure="'+h(kind)+'">'
  +'<svg role="img" viewBox="0 0 560 290" xmlns="http://www.w3.org/2000/svg" aria-label="'+h(title)+'"><title>'+h(title)+'</title>'+drawing+'</svg>'
  +'<figcaption>'+(en?'A physical and geometrical sketch for this specific concept; arrows and lengths are not to scale.':'この概念で定義する量・位置・方向を示す模式図です。力や距離の大きさは比例尺度ではありません。')+'</figcaption></figure>';
}
export function mechanicsUniversityBridgeHtml(key,language='ja'){
 const lesson=universityBridgeLessons[key];if(!lesson)return '';
 const en=language==='en',v=x=>x[en?1:0];
 const math=eq=>'<div class="formula tex-display" data-tex="'+h(eq)+'">'+h(eq)+'</div>';
 const prior=key==='lagrange'?[[5,['06 単振動・共振','06 Oscillations']],[2,['03 仕事・エネルギー','03 Energy']]]:[[5,['06 単振動・共振','06 Oscillations']],[9,['10 ラグランジュ力学','10 Lagrangian mechanics']]];
 return '<section class="mechanics-university-bridge" data-university-bridge="'+h(key)+'">'
  +'<div class="eyebrow">'+(en?'FROM SCHOOL PHYSICS TO UNIVERSITY PHYSICS':'高校物理から大学物理へ')+'</div>'
  +'<h3>'+h(v(lesson.title))+'</h3><p class="mechanics-university-lead">'+h(v(lesson.lead))+'</p>'
  +'<nav class="mechanics-university-prior" aria-label="'+(en?'Revisit prerequisites':'必要なときに戻れる既習内容')+'"><span>'+(en?'Revisit earlier chapters: ':'前に学んだ内容へ戻る：')+'</span>'
  +prior.map(([index,label])=>'<button type="button" data-mech-bridge-back="'+index+'">'+h(v(label))+'</button>').join('')+'</nav>'
  +lesson.stages.map((stage,i)=>'<section class="mechanics-university-stage" data-bridge-step="'+h(stage.kind)+'">'
   +'<h4>'+(i+1)+'. '+h(v(stage.title))+'</h4>'
   +'<p>'+h(v(stage.prose))+'</p>'
   +universityBridgeFigure(stage.kind,v(stage.title),language)
   +stage.formula.map(math).join('')
   +'<p class="mechanics-university-stage-note">'+h(v(stage.note))+'</p>'
   +'</section>').join('')
  +'<p class="mechanics-university-end">'+(en?'The full derivation and worked examples follow.':'以下では同じ現象について、厳密な導出と例題を詳しく学びます。')+'</p></section>';
}
