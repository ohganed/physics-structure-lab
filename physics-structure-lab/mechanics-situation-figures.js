/* Situation-first static illustrations for mechanics text. Distinct geometry for each new scenario.
   SVG is generated from controlled keys; physics vectors use the indicated reference frame.
   All positions are in a 560x280 diagram canvas. No external media/assets. */
const esc=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'","&#39;");
const L=(ja,en,lang)=>lang==='en'?en:ja;
const ln=(x1,y1,x2,y2,color='#567b74',w=2,dash='')=>'<line x1="'+x1+'" y1="'+y1+'" x2="'+x2+'" y2="'+y2+'" stroke="'+color+'" stroke-width="'+w+'" stroke-linecap="round"'+(dash?' stroke-dasharray="'+dash+'"':'')+'/>';
const rect=(x,y,w,h,fill='#d7e9e2')=>'<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" rx="3" fill="'+fill+'" stroke="#356d66" stroke-width="2"/>';
const circ=(x,y,r,fill='#d7e9e2')=>'<circle cx="'+x+'" cy="'+y+'" r="'+r+'" fill="'+fill+'" stroke="#356d66" stroke-width="2"/>';
const path=(d,color='#547f79',w=2,fill='none')=>'<path d="'+d+'" stroke="'+color+'" stroke-width="'+w+'" fill="'+fill+'" stroke-linejoin="round"/>';
const txt=(x,y,t,color='#33514c',size=16)=>'<text x="'+x+'" y="'+y+'" font-size="'+size+'" fill="'+color+'">'+esc(t)+'</text>';
const ar=(x1,y1,x2,y2,color='#af573f')=>{
 const dx=x2-x1,dy=y2-y1,l=Math.hypot(dx,dy);if(l<2)return '';
 const ux=dx/l,uy=dy/l;return ln(x1,y1,x2,y2,color,3)+
  '<polygon points="'+[[x2,y2],[x2-ux*12-uy*6,y2-uy*12+ux*6],[x2-ux*12+uy*6,y2-uy*12-ux*6]].map(p=>p.join(',')).join(' ')+'" fill="'+color+'"/>';
};
const slope=(originX,originY,cos,sin,along,normal)=>({x:originX+along*cos-normal*sin,y:originY-along*sin-normal*cos});
// Rectangular rigid body: bottom midpoint is ON the incline; center is offset upward by half its height.
// Slope rise to the right, screen y downward. Along=(cos,-sin), outward normal=(-sin,-cos).
function inclineBox(contactX=290,contactY=241-(290-95)*184/360,w=65,h=43){
 const a=Math.atan2(115,225),c=Math.cos(a),s=Math.sin(a);
 const p=[slope(contactX,contactY,c,s,-w/2,0),slope(contactX,contactY,c,s,w/2,0),
          slope(contactX,contactY,c,s,w/2,h),slope(contactX,contactY,c,s,-w/2,h)];
 const d='M'+p.map(x=>x.x.toFixed(2)+' '+x.y.toFixed(2)).join(' L')+' Z';
 return {shape:path(d,'#356d66',2,'#d7e9e2'),center:slope(contactX,contactY,c,s,0,h/2),contact:{x:contactX,y:contactY},normal:{x:-s,y:-c},along:{x:c,y:-s}};
}
function contactAlignedBox(x,y,w,h,rise,run){
 const a=Math.atan2(rise,run),c=Math.cos(a),sn=Math.sin(a);
 const pts=[slope(x,y,c,sn,-w/2,0),slope(x,y,c,sn,w/2,0),slope(x,y,c,sn,w/2,h),slope(x,y,c,sn,-w/2,h)];
 return path('M'+pts.map(p=>p.x.toFixed(2)+' '+p.y.toFixed(2)).join(' L')+' Z','#356d66',2,'#d7e9e2');
}
function inclineBase(){
 return path('M95 241 L455 57 L455 241 Z','#728d81',2,'#f0f6f2')+txt(430,260,'θ');
}
function spring(x0,x1,y){
 const n=10,step=(x1-x0)/(n*2+2);let d='M'+x0+' '+y+' L'+(x0+step)+' '+y;
 for(let i=0;i<2*n;i++)d+=' L'+(x0+step*(i+2)).toFixed(1)+' '+(y+(i%2===0?-13:13));
 return path(d+' L'+x1+' '+y,'#477f75',2.7);
}
function cart(x,y){return rect(x,y-38,68,38)+circ(x+14,y+6,8,'#fafafa')+circ(x+54,y+6,8,'#fafafa');}
function pendulum(cx=270,cy=44,deg=30,len=150){
 const t=deg*Math.PI/180,bx=cx+len*Math.sin(t),by=cy+len*Math.cos(t);
 return {art:ln(cx,cy,cx,cy+185,'#a1bab1',1.5,'5 5')+ln(cx,cy,bx,by,'#41675e',3)+circ(cx,cy,6,'#406f65')+circ(bx,by,12),bx,by,cx,cy};
}
function fieldAxes(){return ln(115,214,462,214,'#7d9890',2)+ln(115,214,115,55,'#7d9890',2);}
function origin(key,lang){
 switch(key){
 case 'force':return ln(65,207,480,207,'#78958d',3)+cart(175,193)+ar(245,167,367,167)+txt(273,152,'F')+ar(210,148,151,148,'#356fa2')+txt(160,133,L('抵抗','resistance',lang),'#356fa2')+ar(207,171,207,245,'#af573f')+txt(218,257,'mg')+ar(207,207,207,112,'#356fa2')+txt(217,106,'N');
 case 'friction':{const b=inclineBox();return inclineBase()+b.shape+circ(b.center.x,b.center.y,4,'#356d66')+ar(b.center.x,b.center.y,b.center.x,b.center.y+74)+txt(b.center.x+10,b.center.y+75,'mg')+ar(b.contact.x,b.contact.y,b.contact.x+b.normal.x*79,b.contact.y+b.normal.y*79,'#356fa2')+txt(193,81,'N','#356fa2')+ar(b.contact.x,b.contact.y,b.contact.x+b.along.x*61,b.contact.y+b.along.y*61,'#8052a6')+txt(335,143,'f','#8052a6');}
 case 'energy':return ln(65,205,480,205,'#78958d',3)+cart(162,191)+ar(225,153,390,153)+txt(300,136,'F')+ln(215,232,392,232,'#6c8d85',2)+txt(263,254,'Δx')+txt(142,100,L('移動方向 →','Displacement →',lang));
 case 'momentum':return ln(65,205,480,205,'#78958d',3)+cart(133,190)+cart(357,190)+ar(194,138,293,138)+txt(226,121,'v₁')+ar(360,138,315,138,'#356fa2')+txt(330,121,'v₂','#356fa2')+txt(205,265,L('衝突前','Before collision',lang));
 case 'circular':return circ(262,147,108,'none')+ln(262,147,370,147,'#9db6ae',1.5,'5 5')+circ(370,147,7)+ar(370,147,370,51,'#af573f')+txt(382,70,'v')+ar(370,147,302,147,'#356fa2')+txt(316,131,'a','#356fa2')+txt(265,139,'O')+txt(309,166,'r');
 case 'oscillation':return ln(70,81,70,230,'#7d9890',5)+ln(70,222,485,222,'#8da9a0',2)+spring(74,327,174)+rect(327,146,80,56)+ar(365,130,296,130,'#af573f')+txt(294,111,'F=−kx')+ln(270,95,270,236,'#8da9a0',1.5,'4 5')+txt(239,256,'x=0');
 case 'gravitation':return circ(230,140,73,'#d0e5e1')+circ(230,140,6,'#356d66')+path('M230 21 A119 119 0 1 1 229.9 21','#9ab3ae',2)+circ(343,100,10)+ar(343,100,285,120)+txt(313,85,'Fg')+ar(343,100,320,35,'#356fa2')+txt(335,43,'v','#356fa2')+txt(192,144,L('地球','Earth',lang));
 case 'rotation':return ln(110,188,110,72,'#567f73',6)+rect(113,109,327,32)+circ(113,125,9)+circ(412,125,6,'#b46a4a')+ar(412,125,412,35)+txt(423,52,'F')+txt(251,160,'r')+txt(73,211,L('蝶番','Hinge',lang));
 case 'noninertial':return ln(65,207,484,207,'#7c9990',2)+rect(112,111,310,91,'#e0eae6')+rect(267,156,58,51)+ar(447,169,501,169)+txt(455,153,'a')+ar(295,181,246,181,'#8052a6')+txt(190,136,L('見かけの力','inertial force',lang),'#8052a6');
 case 'lagrange':{const p=pendulum(270,46,34,151);return p.art+txt(280,73,'θ')+txt(345,188,'m')+path('M270 197 Q315 211 357 184','#6e8a80',1.5)+txt(174,254,L('糸の長さ ℓ が一定','Fixed length ℓ',lang));}
 case 'hamilton':return fieldAxes()+path('M125 139 C139 45 419 45 432 139 C447 235 142 263 125 139','#377f89',3)+circ(432,139,5,'#bf774b')+txt(461,226,'q')+txt(92,61,'p')+txt(225,54,L('一定の H','constant H',lang));
 case 'coupled':return ln(55,228,515,228,'#78958d',2)+ln(62,123,62,201,'#78958d',5)+ln(492,123,492,201,'#78958d',5)+spring(67,177,169)+rect(177,141,63,55)+spring(240,327,169)+rect(327,141,63,55)+spring(390,490,169)+ar(206,119,237,119,'#af573f')+ar(358,119,389,119,'#356fa2')+txt(196,109,'x₁')+txt(354,109,'x₂');
 }
 return '';
}
function worked(key,lang){
 switch(key){
 case 'force':return rect(156,43,237,187,'#e5eeea')+rect(230,175,84,47)+ln(158,222,390,222,'#688a7f',4)+ar(272,222,272,103,'#356fa2')+txt(284,107,'N','#356fa2')+ar(272,199,272,258)+txt(284,247,'mg')+ar(425,165,425,99,'#8052a6')+txt(439,129,'a','#8052a6')+txt(174,268,L('エレベーター内','Inside lift',lang));
 case 'energy':return ln(65,218,500,218,'#78958d',3)+rect(110,158,103,48,'#d6e8e3')+circ(131,215,12,'#fff')+circ(193,215,12,'#fff')+ar(218,158,339,158,'#356fa2')+txt(262,142,'v₀','#356fa2')+ar(153,141,96,141,'#af573f')+txt(87,123,'f')+ln(214,242,460,242,'#769288',2)+txt(300,262,L('停止距離 d','stopping distance d',lang));
 case 'momentum':return ln(48,206,501,206,'#78958d',2)+cart(78,190)+cart(217,190)+ar(147,119,202,119)+txt(158,105,'v₁')+txt(286,149,'→')+rect(372,153,116,42)+circ(400,198,8,'#fff')+circ(460,198,8,'#fff')+ar(409,119,480,119,'#356fa2')+txt(429,104,'v');
 case 'circular':{const road=path('M125 209 L404 85 L451 192 L172 268 Z','#7f9a92',2,'#e3eee9');return road+contactAlignedBox(270,209-(270-125)*124/279,54,35,124,279)+ar(263,128,232,60,'#356fa2')+txt(208,52,'N')+ar(263,128,263,214)+txt(283,221,'mg')+txt(115,249,L('傾いた路面','Banked road',lang));}
 case 'oscillation':{const p=pendulum(270,42,42,151);return p.art+ar(p.bx,p.by,p.bx,p.by+75)+txt(p.bx+8,p.by+76,'mg')+ar(p.bx,p.by,p.bx-46,p.by+46,'#8052a6')+txt(p.bx-87,p.by+59,'−mg sinθ','#8052a6')+txt(283,75,'θ');}
 case 'gravitation':return circ(244,143,65,'#d9e9e4')+path('M244 21 A122 122 0 1 1 243 21','#8baea5',2)+circ(359,106,9)+ar(359,106,317,126)+txt(331,93,'Fg')+ar(359,106,370,50,'#356fa2')+txt(380,58,'vc')+ar(370,44,465,28,'#8052a6')+txt(409,19,'vesc','#8052a6')+txt(210,147,L('地球','Earth',lang));
 case 'rotation':{const ramp=path('M95 239 L471 96 L471 239 Z','#728d81',2,'#eff5f2');return ramp+circ(233,155.5,29,'#d4e7df')+circ(326,119.8,29,'#e7e1c9')+circ(233,155.5,4)+circ(326,119.8,4)+txt(174,140,L('円盤','disk',lang))+txt(353,115,L('輪','hoop',lang));}
 case 'noninertial':{const p=pendulum(253,52,-27,131);return rect(95,24,357,212,'#eef3f0')+p.art+ar(470,149,522,149,'#356fa2')+txt(478,136,'a','#356fa2')+ar(p.bx,p.by,p.bx-51,p.by,'#8052a6')+txt(112,167,L('慣性力','fictitious force',lang),'#8052a6');}
 case 'lagrange':return circ(270,81,33,'#fff')+ln(270,48,270,30,'#62897b',3)+ln(237,81,237,178,'#547e75',3)+ln(303,81,303,209,'#547e75',3)+rect(212,178,49,40)+rect(278,209,49,39)+ar(238,174,238,251)+ar(303,206,303,266)+txt(175,200,'m₁')+txt(331,229,'m₂')+txt(352,133,L('滑車','pulley',lang));
 case 'hamilton':return ln(75,209,492,209,'#779389',3)+spring(77,269,168)+rect(269,151,88,58)+ar(315,115,393,115,'#356fa2')+txt(335,98,'p')+txt(274,246,'q')+txt(122,53,L('位置と運動量','Position & momentum',lang));
 case 'coupled':return ln(58,227,507,227,'#7b998f',2)+ln(62,128,62,199,'#7b998f',5)+ln(494,128,494,199,'#7b998f',5)+spring(65,183,169)+rect(183,144,61,50)+spring(244,329,169)+rect(329,144,61,50)+spring(390,491,169)+ar(215,117,251,117,'#af573f')+ar(360,117,322,117,'#356fa2')+txt(170,99,L('逆位相の例','Opposite-phase example',lang));
 }
 return '';
}
function deep(key,lang){
 switch(key){
 case 'energy':return ln(70,233,483,233,'#78958d',3)+circ(260,59,17)+ln(260,78,260,200,'#8baca2',1.5,'5 5')+ar(260,59,260,128)+txt(277,116,'mg')+ar(315,75,315,203,'#356fa2')+txt(326,161,'h = 5 m','#356fa2')+txt(202,260,L('地面','Ground',lang));
 case 'noninertial':return ln(55,235,502,235,'#739186',3)+rect(128,101,280,115,'#e3eeeb')+rect(234,166,70,69)+ar(439,155,495,155,'#356fa2')+txt(446,137,'a')+ar(269,173,207,173,'#8052a6')+txt(160,153,L('見かけの力','Inertial force',lang),'#8052a6')+txt(150,262,L('右向きに加速するバス','Bus accelerating right',lang));
 case 'lagrange':return ln(64,204,485,204,'#739186',3)+ln(70,116,70,206,'#739186',5)+spring(74,258,164)+rect(258,145,88,59)+ar(306,117,362,117,'#356fa2')+txt(315,101,'x')+ar(290,133,241,133,'#af573f')+txt(213,112,'−kx');
 default:return worked(key,lang)||origin(key,lang);
 }
}
const originTitles={
force:['台車に作用する力','Forces on a cart'],friction:['斜面上の物体と接触力','Box in contact with an incline'],energy:['台車への仕事','Work on a moving cart'],
momentum:['衝突前の二台車','Two carts before collision'],circular:['円軌道上の速度と加速度','Velocity and acceleration on a circle'],
oscillation:['水平ばねと復元力','Horizontal spring and restoring force'],gravitation:['重力と衛星の円軌道','Gravity and a satellite orbit'],
rotation:['ドアの回転軸と作用点','Hinge and applied force'],noninertial:['加速する車内の座標系','Accelerating reference frame'],
lagrange:['拘束された振り子の角度','The constrained pendulum'],hamilton:['ばね振動の位相空間','Oscillator phase space'],
coupled:['ばねで結合した二つの物体','Two spring-coupled masses']};
const deepTitles={
 force:['台車に働く力の例題','Worked cart forces'],friction:['静止摩擦が働く斜面','Static friction on an incline'],
 energy:['自由落下する物体','Object in free fall'],momentum:['合体する二物体','Inelastic collision'],
 circular:['円周上の速度と加速度','Circular motion velocity and acceleration'],
 oscillation:['周期を計算するばね','Spring used to calculate a period'],gravitation:['円軌道を動く衛星','Satellite in circular orbit'],
 rotation:['回転軸を押す力','Force applied about an axis'],
 noninertial:['加速するバス内の物体','Object inside accelerating bus'],
 lagrange:['ラグランジアンで扱う水平ばね','Horizontal spring in a Lagrangian'],
 hamilton:['位置と運動量で表すばね','Spring in position-momentum coordinates'],
 coupled:['結合ばねと二つの物体','Coupled masses and springs']};
const workedTitles={
force:['加速するエレベーター','Accelerating elevator'],energy:['ブレーキで停止する車','Car braking to a stop'],
momentum:['くっつく二台車','Carts sticking together'],circular:['傾斜した道路を走る車','Car on a banked curve'],
oscillation:['振り子の重力成分','Pendulum weight components'],gravitation:['円軌道と脱出速度','Orbit and escape speed'],
rotation:['坂を転がる円盤と輪','Rolling disk and hoop'],noninertial:['加速する車内の振り子','Pendulum in accelerating vehicle'],
lagrange:['滑車につながれた二つの物体','Two masses over a pulley'],hamilton:['ばねの位置と運動量','Spring position and momentum'],
coupled:['二つの固有振動','Two normal modes']};
export const situationKeys=Object.freeze({origin:Object.keys(originTitles),worked:Object.keys(workedTitles),deep:Object.keys(deepTitles)});
export function mechanicsSituationFigure(key,section='origin',language='ja'){
 const titles=section==='worked'?workedTitles:section==='deep'?deepTitles:originTitles;
 if(!Object.prototype.hasOwnProperty.call(titles,key))return '';
 const en=language==='en',art=section==='worked'?worked(key,language):section==='deep'?deep(key,language):origin(key,language);
 if(!art)return '';
 const name=titles[key][en?1:0];
 return '<figure class="mechanics-situation-figure" data-situation="'+esc(section+':'+key)+'">'
  +'<svg viewBox="0 0 560 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="'+esc(name)+'">'
  +'<title>'+esc(name)+'</title>'+art+'</svg>'
  +'<figcaption>'+esc(name)+' — '+L('図は位置・向き・作用点の関係を示す模式図です。特記しない限り寸法や力の長さは比例表示ではありません。',
    'Schematic of positions, directions, and force application points. Unless noted, geometric lengths and force-arrow lengths are not to scale.',language)+'</figcaption>'
  +'</figure>';
}
