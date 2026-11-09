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
 case 'momentum':return ln(65,205,480,205,'#78958d',3)+cart(133,192)+cart(357,192)+ar(194,138,293,138)+txt(226,121,'v₁')+ar(360,138,315,138,'#356fa2')+txt(330,121,'v₂','#356fa2')+txt(205,265,L('衝突前','Before collision',lang));
 case 'circular':return circ(262,147,108,'none')+ln(262,147,370,147,'#9db6ae',1.5,'5 5')+circ(370,147,7)+ar(370,147,370,51,'#af573f')+txt(382,70,'v')+ar(370,147,302,147,'#356fa2')+txt(316,131,'a','#356fa2')+txt(265,139,'O')+txt(309,166,'r');
 case 'oscillation':return ln(70,81,70,230,'#7d9890',5)+ln(70,202,485,202,'#8da9a0',2)+spring(74,327,174)+rect(327,146,80,56)+ar(365,130,296,130,'#af573f')+txt(294,111,'F=−kx')+ln(270,95,270,236,'#8da9a0',1.5,'4 5')+txt(239,256,'x=0');
 case 'gravitation':return circ(230,140,73,'#d0e5e1')+circ(230,140,6,'#356d66')+path('M230 21 A119 119 0 1 1 229.9 21','#9ab3ae',2)+circ(343,100,10)+ar(343,100,285,120)+txt(313,85,'Fg')+ar(343,100,320,35,'#356fa2')+txt(335,43,'v','#356fa2')+txt(192,144,L('地球','Earth',lang));
 case 'rotation':return ln(110,188,110,72,'#567f73',6)+rect(113,109,327,32)+circ(113,125,9)+circ(412,125,6,'#b46a4a')+ar(412,125,412,35)+txt(423,52,'F')+txt(251,160,'r')+txt(73,211,L('蝶番','Hinge',lang));
 case 'noninertial':return ln(65,207,484,207,'#7c9990',2)+rect(112,111,310,91,'#e0eae6')+rect(267,156,58,51)+ar(447,169,501,169)+txt(455,153,'a')+ar(295,181,246,181,'#8052a6')+txt(190,136,L('見かけの力','inertial force',lang),'#8052a6');
 case 'lagrange':{const p=pendulum(270,46,34,151);return p.art+txt(280,73,'θ')+txt(345,188,'m')+path('M270 197 Q315 211 357 184','#6e8a80',1.5)+txt(174,254,L('糸の長さ ℓ が一定','Fixed length ℓ',lang));}
 case 'hamilton':{
  // For H=p²/(2m)+kq²/2=constant, the phase ellipse MUST be centered on (q,p)=(0,0).
  // On the upper-right quadrant, q increases and p decreases: tangent points right/down.
  const cx=280,cy=146,rx=148,ry=91;
  const theta=Math.PI/4,px=cx+rx*Math.cos(theta),py=cy-ry*Math.sin(theta);
  return ln(74,cy,490,cy,'#7d9890',2)+ln(cx,261,cx,25,'#7d9890',2)
   +ar(466,cy,491,cy,'#7d9890')+ar(cx,48,cx,24,'#7d9890')
   +'<ellipse cx="'+cx+'" cy="'+cy+'" rx="'+rx+'" ry="'+ry+'" fill="none" stroke="#377f89" stroke-width="3"/>'
   +circ(px,py,5,'#bf774b')
   +ar(px,py,px+27,py+16,'#bf774b')
   +txt(498,cy+6,'q')+txt(cx+10,19,'p')
   +txt(cx-12,cy+19,'0')
   +txt(116,38,L('同じ H の状態','States at constant H',lang))
   +txt(405,72,L('運動の向き','Time evolution',lang),'#bf774b',13);
 }
 case 'coupled':return ln(55,196,515,196,'#78958d',2)+ln(62,123,62,201,'#78958d',5)+ln(492,123,492,201,'#78958d',5)+spring(67,177,169)+rect(177,141,63,55)+spring(240,327,169)+rect(327,141,63,55)+spring(390,490,169)+ar(206,119,237,119,'#af573f')+ar(358,119,389,119,'#356fa2')+txt(196,109,'x₁')+txt(354,109,'x₂');
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
 case 'rotation':{const ramp=path('M95 239 L471 96 L471 239 Z','#728d81',2,'#eff5f2');return ramp+circ(233,155.5,29,'#d4e7df')+circ(326,119.8,29,'#e7e1c9')+circ(326,119.8,19,'#eff5f2')+circ(233,155.5,4)+circ(326,119.8,4)+txt(174,140,L('円盤','disk',lang))+txt(353,115,L('輪','hoop',lang));}
 case 'noninertial':{const p=pendulum(253,52,-27,131);return rect(95,24,357,212,'#eef3f0')+p.art+ar(470,149,522,149,'#356fa2')+txt(478,136,'a','#356fa2')+ar(p.bx,p.by,p.bx-51,p.by,'#8052a6')+txt(112,167,L('慣性力','fictitious force',lang),'#8052a6');}
 case 'lagrange':return circ(270,81,33,'#fff')+ln(270,48,270,30,'#62897b',3)+ln(237,81,237,178,'#547e75',3)+ln(303,81,303,209,'#547e75',3)+rect(212,178,49,40)+rect(278,209,49,39)+ar(238,174,238,251)+ar(303,206,303,266)+txt(175,200,'m₁')+txt(331,229,'m₂')+txt(352,133,L('滑車','pulley',lang));
 case 'hamilton':return ln(75,209,492,209,'#779389',3)+spring(77,269,180)+rect(269,151,88,58)+ar(313,180,404,180,'#356fa2')+txt(380,163,'p','#356fa2')+ln(228,148,228,251,'#a4b9b0',1,'5 5')+ar(228,244,313,244,'#8a59a3')+txt(265,266,'q','#8a59a3')+txt(196,148,'q=0')+txt(122,53,L('位置と運動量','Position & momentum',lang));
 case 'coupled':return ln(58,194,507,194,'#7b998f',2)+ln(62,128,62,199,'#7b998f',5)+ln(494,128,494,199,'#7b998f',5)+spring(65,183,169)+rect(183,144,61,50)+spring(244,329,169)+rect(329,144,61,50)+spring(390,491,169)+ar(215,117,251,117,'#af573f')+ar(360,117,322,117,'#356fa2')+txt(170,99,L('逆位相の例','Opposite-phase example',lang));
 }
 return '';
}
function deep(key,lang){
 switch(key){
 case 'energy':return ln(70,233,483,233,'#78958d',3)+circ(260,59,17)+ln(260,78,260,200,'#8baca2',1.5,'5 5')+ar(260,59,260,128)+txt(277,116,'mg')+ar(315,75,315,203,'#356fa2')+txt(326,161,'h = 5 m','#356fa2')+txt(202,260,L('地面','Ground',lang));
 case 'noninertial':return ln(55,235,502,235,'#739186',3)+rect(128,101,280,115,'#e3eeeb')+rect(234,166,70,69)+ar(439,155,495,155,'#356fa2')+txt(446,137,'a')+ar(269,173,207,173,'#8052a6')+txt(160,153,L('見かけの力','Inertial force',lang),'#8052a6')+txt(150,262,L('右向きに加速するバス','Bus accelerating right',lang));
 case 'lagrange':return ln(64,204,485,204,'#739186',3)+ln(70,116,70,206,'#739186',5)+spring(74,258,175)+rect(258,145,88,59)+ar(306,117,362,117,'#356fa2')+txt(315,101,'x')+ar(290,133,241,133,'#af573f')+txt(213,112,'−kx');
 default:return worked(key,lang)||origin(key,lang);
 }
}
/* The energy and collision textbooks each introduce eight distinct physical relations. */
const sectionTitles={
 'energy-0':['力と変位の向き','Force and displacement'],
 'energy-1':['仕事による速さの変化','Speed change under work'],
 'energy-2':['保存力と二つの経路','Two paths under a conservative force'],
 'energy-3':['重力とばねの位置エネルギー','Gravitational and spring potential'],
 'energy-4':['斜面を下る物体のエネルギー','Energy of an object descending an incline'],
 'energy-5':['ポテンシャル曲線と全エネルギー','Potential curve and total energy'],
 'energy-6':['安定平衡と不安定平衡','Stable and unstable equilibrium'],
 'energy-7':['相互作用によるポテンシャル','An interaction potential'],
 'collision-0':['衝突する二台車を囲む系','System boundary around colliding carts'],
 'collision-1':['衝突前後の速度','Velocities before and after collision'],
 'collision-2':['弾性衝突と完全非弾性衝突','Elastic and perfectly inelastic collisions'],
 'collision-3':['実験室系と重心系','Laboratory and center-of-mass frames'],
 'collision-4':['運動エネルギーと内部エネルギー','Kinetic and internal energy'],
 'collision-5':['同じ力積を与える二つの力','Equal impulse, different contact times'],
 'collision-6':['二次元衝突と運動量成分','Two-dimensional momentum components'],
 'collision-7':['反発係数で変わる衝突結果','Collision outcomes with different restitution']};
function sectionScene(key,lang){
 switch(key){
 case 'energy-0':return ln(65,225,496,225,'#7a998f',2)+cart(153,211)
  +ar(215,165,367,165,'#8054a0')+txt(277,151,'Δr','#8054a0')
  +ar(213,164,338,100,'#b45e44')+txt(303,88,'F','#b45e44')
  +path('M245 164 A32 32 0 0 0 242 148','#678479',2)+txt(254,145,'θ');
 case 'energy-1':return ln(60,218,499,218,'#7a998f',2)+cart(103,204)+cart(372,204)
  +ar(168,153,237,153,'#356fa2')+txt(175,136,'v₀')
  +ar(436,153,525,153,'#356fa2')+txt(461,135,'v')
  +ar(214,190,339,190,'#b45e44')+txt(272,176,'F')
  +txt(215,260,'Δx');
 case 'energy-2':return circ(137,211,8,'#ad603e')+circ(444,63,8,'#356fa2')
  +ln(137,211,444,63,'#537e75',3)
  +path('M137 211 Q132 57 269 67 T444 63','#8054a0',3)
  +txt(95,242,'A')+txt(450,52,'B')
  +ar(399,89,399,159,'#b45e44')+txt(410,142,'mg')
  +txt(256,252,L('経路は違っても高さ差は同じ','Same height difference',lang));
 case 'energy-3':return ln(70,225,500,225,'#79978e',2)+rect(146,56,44,44)+ar(168,101,168,166)+txt(180,150,'mg')+ln(212,101,212,225,'#7d9990',1,'5 5')+txt(218,157,'h')
  +ln(320,107,320,222,'#79978e',5)+spring(325,435,174)+rect(435,147,45,54)+ar(457,124,389,124,'#8054a0')+txt(367,106,'−kx','#8054a0');
 case 'energy-4':{const base=inclineBase(),box=inclineBox(296,241-(296-95)*184/360,56,38);return base+box.shape
  +ar(box.center.x,box.center.y,box.center.x,box.center.y+59)+txt(box.center.x+7,box.center.y+70,'mg')
  +ar(box.contact.x,box.contact.y,box.contact.x-64,box.contact.y+33,'#356fa2')+txt(193,188,'v','#356fa2')
  +txt(141,254,L('高さが減る','Height decreases',lang));}
 case 'energy-5':return fieldAxes()+path('M132 63 Q278 295 430 63','#297e89',3)+ln(129,135,449,135,'#b45e44',2,'5 5')
  +circ(190,135,6,'#b45e44')+circ(372,135,6,'#b45e44')
  +txt(147,92,'U(x)','#297e89')+txt(445,131,'E','#b45e44')+txt(467,223,'x');
 case 'energy-6':return ln(54,226,506,226,'#79978e',1)+path('M69 66 Q175 293 273 66','#297e89',3)
  +path('M312 206 Q399 21 493 206','#b45e44',3)
  +circ(175,177,8,'#caa15a')+circ(402,113,8,'#caa15a')
  +txt(103,263,L('安定','Stable',lang),'#297e89')+txt(364,263,L('不安定','Unstable',lang),'#b45e44');
 case 'energy-7':return fieldAxes()+path('M150 53 C178 53 189 229 250 220 C317 211 345 137 453 109','#297e89',3)
  +ln(149,130,453,130,'#c07b44',1,'5 5')
  +txt(156,46,L('近距離で強い反発','Short-range repulsion',lang),'#297e89',14)
  +txt(365,103,L('遠距離','Large r',lang),'#297e89',14)+txt(469,223,'r');
 case 'collision-0':return ln(66,214,501,214,'#7e998e',2)+cart(154,197)+cart(335,197)
  +'<rect x="126" y="92" width="321" height="142" rx="13" stroke="#8054a0" stroke-width="2.5" stroke-dasharray="7 6" fill="none"/>'
  +ar(218,160,273,160,'#b45e44')+ar(339,160,284,160,'#356fa2')+txt(165,72,L('二台車を含む系','Two-cart system',lang),'#8054a0');
 case 'collision-1':return ln(56,151,507,151,'#7d998f',2)+cart(88,137)+cart(274,137)+ar(154,79,234,79,'#356fa2')+txt(179,65,'u₁')
  +ln(56,256,507,256,'#7d998f',2)+cart(142,242)+cart(370,242)+ar(209,190,278,190,'#b45e44')+ar(436,190,488,190,'#b45e44')
  +txt(14,130,L('前','Before',lang))+txt(14,244,L('後','After',lang));
 case 'collision-2':return ln(55,120,510,120,'#7d998f',2)+cart(145,103)+cart(341,103)+ar(208,45,270,45)+ar(341,45,282,45,'#356fa2')
  +ln(55,250,510,250,'#7d998f',2)+rect(250,189,132,45)+circ(275,242,7,'#fff')+circ(350,242,7,'#fff')+ar(382,208,451,208,'#8054a0')
  +txt(18,68,'e = 1')+txt(18,202,'e = 0');
 case 'collision-3':return ln(70,117,500,117,'#849f96',1)+circ(172,92,11)+circ(365,92,11)+ar(172,56,257,56)+ar(365,56,404,56,'#356fa2')
  +ln(70,232,500,232,'#849f96',1)+circ(172,206,11)+circ(365,206,11)
  +ar(172,168,220,168,'#8054a0')+ar(365,168,317,168,'#8054a0')
  +txt(20,99,L('実験室系','Lab frame',lang))+txt(20,214,L('重心系','CM frame',lang))+txt(470,162,'V');
 case 'collision-4':return rect(94,86,135,63,'#d4e8e2')+ar(235,117,327,117,'#8054a0')
  +rect(330,63,139,100,'#e9dfd0')
  +txt(112,107,'K before','#356fa2')+txt(343,94,'K after')+txt(339,140,'E internal')
  +txt(148,215,L('運動量保存とエネルギー変換は別','Momentum conservation ≠ K conservation',lang),undefined,14);
 case 'collision-5':return fieldAxes()+path('M140 213 L140 93 L200 93 L200 213','#b45e44',3,'none')
  +path('M270 213 L270 153 L390 153 L390 213','#356fa2',3,'none')
  +txt(142,48,L('短時間・大きな力','Short, large force',lang),'#b45e44',13)
  +txt(295,121,L('長時間・小さな力','Long, smaller force',lang),'#356fa2',13)
  +txt(464,231,'t')+txt(91,51,'F');
 case 'collision-6':return circ(223,143,19)+circ(326,103,19)+ar(223,143,324,143,'#8054a0')
  +ar(223,143,280,91,'#b45e44')+ar(326,103,385,66,'#356fa2')
  +ln(182,183,405,183,'#93a9a2',1,'5 5')
  +txt(327,147,'x')+txt(281,86,'y')
  +txt(138,257,L('x・y 成分を別々に保存','Conserve x and y components',lang));
 case 'collision-7':return ln(55,222,510,222,'#7e998e',2)+cart(102,204)+cart(269,204)+ar(167,138,238,138,'#356fa2')
  +rect(383,147,81,58,'#d4e8e2')+ar(427,119,488,119,'#b45e44')+txt(406,104,'e')
  +txt(149,260,L('反発係数で終速度が変わる','Restitution changes final velocities',lang),undefined,14);
 }
 return '';
}
const supplementTitles={
 'incline-0':['机上の箱と垂直抗力','Box on a horizontal table'],
 'incline-1':['斜面に沿う軸と法線方向','Tangential and normal axes on an incline'],
 'incline-2':['静止する箱と静止摩擦','Static friction holding a box'],
 'incline-3':['最大静止摩擦と滑り出し','Threshold of static friction'],
 'incline-4':['滑走中の箱と動摩擦','Sliding box and kinetic friction'],
 'incline-5':['斜面の力の成分と数値','Force components on a slope'],
 'incline-6':['摩擦による仕事','Work done by friction'],
 'incline-7':['滑り出す角度の測定','Measuring critical inclination'],
 'two-block-0':['台車AとBを囲む系','System boundary of carts A and B'],
 'two-block-1':['合力がないときの速度','Velocity without net force'],
 'two-block-2':['合力と質量と加速度','Force, mass and acceleration'],
 'two-block-3':['接触する二台車の作用・反作用','Action and reaction between carts'],
 'two-block-4':['Aを押すときの二台車','Pushing cart A'],
 'two-block-5':['Bが受ける接触力','Contact force acting on B'],
 'two-block-6':['Bを左へ押す場合','Pushing B toward the left'],
 'two-block-7':['等加速度運動の時間変化','Motion with constant acceleration'],
 'two-block-8':['抵抗のある現実の台車','Real carts with rolling resistance'],
 'transfer-slope':['同じ高さ差の異なる斜面','Different slopes with equal height loss'],
 'transfer-spring':['圧縮したばねの解放','Release from a compressed spring'],
 'transfer-pendulum':['振り子が最下点へ動く','Pendulum descending to its lowest point'],
 'transfer-friction':['摩擦で止まる物体','Object stopping under friction'],
 'inquiry-0':['衝突と外力積','Collision and external impulse'],
 'inquiry-1':['静止物体への衝突','Collision with initially stationary cart'],
 'inquiry-2':['重心系での衝突','Collision in center-of-mass frame'],
 'inquiry-3':['接触時間による平均力の違い','Average force and contact time']};
function supplementScene(key,lang){
 if(key.startsWith('incline-')){
  const i=Number(key.split('-')[1]);
  if(i===0)return ln(80,222,486,222,'#7b978d',4)+rect(220,154,109,68)+ar(275,222,275,103,'#356fa2')+ar(275,187,275,267,'#b45e44')+txt(288,112,'N','#356fa2')+txt(288,260,'mg','#b45e44');
  const b=inclineBox(),base=inclineBase(),c=b.center;
  let img=base+b.shape+ar(c.x,c.y,c.x,c.y+67)+txt(c.x+8,c.y+69,'mg');
  if(i===1)return img+ar(b.contact.x,b.contact.y,b.contact.x+b.normal.x*75,b.contact.y+b.normal.y*75,'#356fa2')
   +ar(b.contact.x,b.contact.y,b.contact.x-b.along.x*75,b.contact.y-b.along.y*75,'#8054a0')+txt(164,92,L('法線','normal',lang),'#356fa2');
  if(i===2||i===3||i===5||i===7)img+=ar(b.contact.x,b.contact.y,b.contact.x+b.along.x*65,b.contact.y+b.along.y*65,'#8054a0')+txt(337,120,i===3?'fₛ,max':i===7?'θc':'fₛ','#8054a0');
  if(i===4||i===6)img+=ar(b.contact.x,b.contact.y,b.contact.x+b.along.x*65,b.contact.y+b.along.y*65,'#8054a0')+ar(c.x,c.y,c.x-b.along.x*75,c.y-b.along.y*75,'#356fa2')+txt(140,205,i===6?'Wf < 0':'v','#356fa2');
  if(i===3||i===7)img+=txt(77,268,i===3?'fₛ ≤ μₛN':'μₛ ≈ tan θc','#8054a0');
  if(i===5)img+=txt(79,265,'mg sinθ / mg cosθ',undefined,16);
  return img;
 }
 if(key.startsWith('two-block-')){
  const i=Number(key.split('-')[2]),road=ln(55,216,500,216,'#7e9a8f',3);
  let base=road+rect(177,165,86,51)+rect(263,165,96,51)+txt(205,197,'A')+txt(299,197,'B');
  if(i===0)return base+'<rect x="153" y="130" width="237" height="110" rx="12" stroke="#8054a0" stroke-width="2" stroke-dasharray="7 5" fill="none"/>'+txt(169,114,L('AとBの系','System A+B',lang),'#8054a0');
  if(i===1)return base+ar(238,124,331,124,'#356fa2')+txt(254,106,'v=const');
  if(i===2)return base+ar(358,148,438,148,'#b45e44')+txt(381,131,'F')+txt(176,267,'a=F/(mA+mB)');
  if(i===3)return base+ar(263,184,211,184,'#b45e44')+ar(263,207,315,207,'#356fa2')+txt(165,142,'FAB')+txt(309,194,'FBA');
  if(i===4)return base+ar(105,177,176,177,'#b45e44')+txt(108,158,'F')+ar(349,124,424,124,'#356fa2')+txt(362,104,'a');
  if(i===5)return base+ar(265,145,333,145,'#356fa2')+txt(275,128,'N=mBa');
  if(i===6)return base+ar(434,185,360,185,'#b45e44')+txt(398,166,'F')+ar(182,129,123,129,'#356fa2')+txt(132,112,'a');
  if(i===7)return base+ar(300,125,388,125,'#356fa2')+txt(306,105,'v(t)')+txt(187,258,'x(t) = ½at²');
  if(i===8)return base+ar(219,145,177,145,'#8054a0')+ar(299,145,257,145,'#8054a0')+txt(128,111,L('車輪の抵抗','Rolling resistance',lang),'#8054a0');
 }
 if(key.startsWith('transfer-')){
  const k=key.slice(9);
  if(k==='slope')return path('M80 226 L209 117 L209 226 Z','#7b998f',2,'#eff6f2')+path('M298 226 L470 117 L470 226 Z','#7b998f',2,'#eff6f2')+txt(148,88,'h₁')+txt(463,142,'h₂')+circ(141,159,9)+circ(374,195,9)+txt(165,265,L('同じ高さ差を比較','Compare equal height loss',lang));
  if(k==='spring')return ln(65,220,496,220,'#7b998f',2)+ln(81,100,81,220,'#7b998f',5)+spring(85,289,193)+rect(289,166,75,54)+ar(364,175,441,175,'#356fa2')+txt(403,157,'v')+txt(190,263,L('圧縮 x','compression x',lang));
  if(k==='pendulum'){const p=pendulum(240,48,42,145);return p.art+circ(240,193,12,'none')+ln(p.bx,p.by,240,193,'#8ca9a0',1.5,'5 5')+ar(p.bx,p.by,p.bx,p.by+66)+txt(p.bx+9,p.by+59,'mg')+txt(150,254,L('高さ差 h','height drop h',lang));}
  if(k==='friction')return ln(60,212,506,212,'#7b998f',3)+cart(116,195)+ar(183,151,266,151,'#356fa2')+ar(174,170,101,170,'#b45e44')+txt(209,135,'v₀')+txt(98,156,'f')+txt(289,246,L('停止距離 d','stopping distance d',lang));
 }
 if(key.startsWith('inquiry-')){
  const i=Number(key.split('-')[1]);
  if(i===0)return supplementScene('collision-0',lang)||sectionScene('collision-0',lang);
  if(i===1)return sectionScene('collision-7',lang);
  if(i===2)return sectionScene('collision-3',lang);
  if(i===3)return sectionScene('collision-5',lang);
 }
 return '';
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
export const situationKeys=Object.freeze({origin:Object.keys(originTitles),worked:Object.keys(workedTitles),deep:Object.keys(deepTitles),section:Object.keys(sectionTitles),supplement:Object.keys(supplementTitles)});
export function mechanicsSituationFigure(key,section='origin',language='ja'){
 const titles=section==='worked'?workedTitles:section==='deep'?deepTitles:section==='section'?sectionTitles:section==='supplement'?supplementTitles:originTitles;
 if(!Object.prototype.hasOwnProperty.call(titles,key))return '';
 const en=language==='en',art=section==='worked'?worked(key,language):section==='deep'?deep(key,language):section==='section'?sectionScene(key,language):section==='supplement'?supplementScene(key,language):origin(key,language);
 if(!art)return '';
 const name=titles[key][en?1:0];
 return '<figure class="mechanics-situation-figure" data-situation="'+esc(section+':'+key)+'">'
  +'<svg viewBox="0 0 560 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="'+esc(name)+'">'
  +'<title>'+esc(name)+'</title>'+art+'</svg>'
  +'<figcaption>'+esc(name)+' — '+L('図は位置・向き・作用点の関係を示す模式図です。特記しない限り寸法や力の長さは比例表示ではありません。',
    'Schematic of positions, directions, and force application points. Unless noted, geometric lengths and force-arrow lengths are not to scale.',language)+'</figcaption>'
  +'</figure>';
}
