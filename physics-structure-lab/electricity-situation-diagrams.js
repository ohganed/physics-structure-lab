/* Physics-specific responsive SVG situations: one independent diagram for every new section. */
const esc=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const line=(x,y,X,Y,color='#46746b',w=2,dashed=false)=>'<line x1="'+x+'" y1="'+y+'" x2="'+X+'" y2="'+Y+'" stroke="'+color+'" stroke-width="'+w+'"'+(dashed?' stroke-dasharray="6 5"':'')+'/>';
const rect=(x,y,w,h,fill='#d8eae4')=>'<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" rx="4" stroke="#426d65" stroke-width="2" fill="'+fill+'"/>';
const circle=(x,y,r,fill='#d8eae4')=>'<circle cx="'+x+'" cy="'+y+'" r="'+r+'" stroke="#426d65" stroke-width="2" fill="'+fill+'"/>';
const text=(x,y,t,col='#35574e')=>'<text x="'+x+'" y="'+y+'" font-size="16" fill="'+col+'">'+esc(t)+'</text>';
const path=(d,color='#477f77',w=2)=>'<path d="'+d+'" fill="none" stroke="'+color+'" stroke-width="'+w+'" stroke-linecap="round"/>';
const arrow=(x,y,X,Y,color='#ae553e')=>{const dx=X-x,dy=Y-y,L=Math.hypot(dx,dy);if(L<1)return '';const a=dx/L,b=dy/L;return line(x,y,X,Y,color,3)+'<polygon points="'+[[X,Y],[X-11*a-5*b,Y-11*b+5*a],[X-11*a+5*b,Y-11*b-5*a]].map(v=>v.join(',')).join(' ')+'" fill="'+color+'"/>';};
const electrode=(x,y,label,color)=>rect(x,y,16,160,color)+text(x-7,y-12,label,color==='#eed9cf'?'#a54c3b':'#357b99');
const resistor=(x,y,w=100)=>path('M'+x+' '+y+' h15 l10 -15 l14 30 l14 -30 l14 30 l14 -30 l10 15 h10','#bb7546',3);
const spring=(x,y,X)=>{let d='M'+x+' '+y+' l12 0';const step=(X-x-24)/16;for(let i=0;i<16;i++)d+=' l'+step.toFixed(2)+' '+(i%2?-13:13);return path(d+' l12 0','#597b72',3)};
const wire=(points)=>path('M'+points.map(p=>p.join(' ')).join(' L'),'#57796f',3);
function circleField(cx,cy,positive=true){
 let s=circle(cx,cy,17,positive?'#f4dfd5':'#dae9f2')+text(cx-6,cy+5,positive?'+':'−');
 for(let j=0;j<8;j++){const t=j*Math.PI/4,dx=Math.cos(t),dy=Math.sin(t);s+=positive?arrow(cx+dx*28,cy+dy*28,cx+dx*91,cy+dy*91,'#b85f43'):arrow(cx+dx*91,cy+dy*91,cx+dx*28,cy+dy*28,'#2c83a7')}
 return s;
}
const charges=(pair=false)=>circle(180,148,23,'#f4dfd5')+text(174,154,'+')+circle(364,148,23,pair?'#dae9f2':'#f4dfd5')+text(358,154,pair?'−':'+');
const plateScene=()=>electrode(142,52,'+','#eed9cf')+electrode(381,52,'−','#d6e8f3')+arrow(173,100,364,100)+arrow(173,150,364,150)+arrow(173,201,364,201)+text(258,81,'E')+text(245,247,'d');
const circuit=(mode='r')=>{
 let s=wire([[110,85],[200,85]])+wire([[300,85],[439,85],[439,225],[110,225],[110,85]]);
 s+=line(96,157,124,157,'#4c8277',3)+line(100,146,120,146,'#4c8277',5)+text(70,144,'ℰ');
 if(mode==='r')s+=resistor(193,85);
 if(mode==='series')s+=resistor(170,85,90)+resistor(311,85,90);
 if(mode==='parallel')s+=resistor(181,85)+wire([[158,85],[158,152],[405,152],[405,85]])+resistor(275,152);
 if(mode==='rc')s+=resistor(190,85)+line(421,133,421,170,'#ae553e',4)+line(404,133,404,170,'#ae553e',4)+text(445,163,'C');
 if(mode==='rlc')s+=resistor(185,85)+spring(322,85,403)+line(419,140,419,179,'#ae553e',4)+line(406,140,406,179,'#ae553e',4);
 return s;
};
function linesPlot(label='V',functionKind='linear'){
 let s=line(105,232,466,232)+line(105,232,105,42)+text(76,49,label)+text(470,252,'t');
 if(functionKind==='linear')s+=path('M105 216 L457 65','#297d99',3);
 if(functionKind==='charging')s+=path('M105 232 C145 80 242 62 456 62','#297d99',3);
 if(functionKind==='decay')s+=path('M105 61 C162 196 265 226 456 228','#297d99',3);
 if(functionKind==='sine'){let d='';for(let i=0;i<=100;i++){let x=105+351*i/100,y=141-75*Math.sin(i/100*4*Math.PI);d+=(i?'L':'M')+x.toFixed(1)+' '+y.toFixed(1)+' ';}s+=path(d,'#297d99',3);}
 if(functionKind==='lag'){let d='';for(let i=0;i<=100;i++){let x=105+351*i/100,y=141-75*Math.cos(i/100*4*Math.PI);d+=(i?'L':'M')+x.toFixed(1)+' '+y.toFixed(1)+' ';}s+=path(d,'#b65c42',3);}
 return s;
}
function graphMagnetic(variant){let s='';
 if(variant==='wire') {
  s=circle(275,137,14,'#f3ded4')+text(270,143,'⊙');
  for(const r of [48,79,111])s+=circle(275,137,r,'none');
  s+=arrow(275+79,137,349,109,'#b65c42')+text(284,33,'B');
 } else {
  s=rect(93,58,350,157,'#f3f7f5');
  for(let x=128;x<420;x+=65)for(let y=82;y<207;y+=60)s+=text(x,y,'×','#427d98');
  s+=arrow(157,138,253,138,'#ae553e')+arrow(253,138,253,68,'#387eaa')+circle(253,138,10,'#e7dac6')+text(264,126,'q');
 }
 return s;
}
function coil(x=260,y=149){let s='';for(let j=0;j<5;j++)s+=circle(x-72+j*36,y,25,'none');return s;}
function scene(id,lang){
 const en=lang==='en',t=(ja,enText)=>en?enText:ja;
 switch(id){
 case 'charged-bodies':return charges(true)+arrow(242,132,295,132,'#387eaa')+text(220,107,'e−','#387eaa')+text(112,208,t('電子の移動','Electron transfer'));
 case 'coulomb':return charges(true)+arrow(147,148,76,148)+arrow(398,148,465,148,'#387eaa')+text(267,183,'r');
 case 'superposition':return circle(173,208,20,'#f4dfd5')+circle(366,208,20,'#f4dfd5')+circle(270,73,17,'#f4dfd5')+text(265,78,'+')+arrow(270,73,320,11)+arrow(270,73,220,11)+text(160,247,'+')+text(354,247,'+');
 case 'field-definition':return circleField(270,146,true)+circle(416,146,14,'#dae9f2')+text(412,152,'+')+arrow(436,146,479,146,'#b45d40');
 case 'field-lines':return circleField(187,145,true)+circleField(386,145,false);
 case 'gauss':return circleField(275,149,true)+circle(275,149,119,'none')+text(376,56,'S')+text(386,201,'E');
 case 'potential-work':return plateScene()+circle(254,150,11)+text(250,156,'+');
 case 'uniform-field':return plateScene()+text(214,271,'E = ΔV / d');
 case 'potential-gradient':return linesPlot('V','decay')+arrow(311,107,389,107)+text(334,90,'E');
 case 'capacitance':return plateScene()+text(189,271,'Q = CΔV');
 case 'capacitor-energy':return linesPlot('V(Q)','linear')+text(249,169,'U = area');
 case 'dielectric':return plateScene()+rect(245,69,42,146,'#e5e4b9')+text(232,264,'εᵣ');
 case 'current-definition':return rect(84,126,374,57,'#dce8e3')+arrow(125,154,421,154,'#b45c43')+text(222,109,'I')+text(180,213,t('断面積 A','Cross-section A'));
 case 'ohm':return circuit('r')+text(226,48,'R')+arrow(330,112,377,112,'#297e9d')+text(329,135,'I');
 case 'joule':return circuit('r')+text(205,50,'P = VI')+text(208,261,t('熱へ変換','To thermal energy'));
 case 'series-parallel':return circuit('parallel')+text(213,52,'R₁')+text(301,138,'R₂');
 case 'kirchhoff':return wire([[107,146],[270,146],[438,91]])+wire([[270,146],[438,210]])+arrow(154,146,221,146)+arrow(310,134,378,111,'#387eaa')+arrow(306,160,378,197,'#b35d40')+circle(270,146,6)+text(240,270,'I = I₁ + I₂');
 case 'battery':return circuit('r')+text(110,58,'ℰ')+text(225,57,'R + r');
 case 'charging':return circuit('rc')+text(200,48,'I(t)')+text(330,261,'τ = RC');
 case 'discharging':return circuit('rc')+text(327,270,'Q(t) ↓');
 case 'rc-energy':return linesPlot('Q(t)','charging')+text(249,188,'½ Cℰ²');
 case 'magnetic-force':return graphMagnetic('particle')+text(300,111,'F')+text(187,172,'v');
 case 'circular-magnetic':return graphMagnetic('particle')+circle(285,138,69,'none')+text(340,237,'r = mv / |q|B');
 case 'wire-magnetic':return graphMagnetic('wire')+text(261,263,'I ⊙');
 case 'faraday':return coil()+arrow(75,149,155,149)+rect(49,117,36,66,'#f2ddd3')+text(60,153,'N')+text(338,263,'dΦ/dt');
 case 'lenz':return coil()+arrow(83,146,166,146)+rect(50,116,35,68,'#f3dfd4')+text(57,156,'N')+arrow(372,148,428,148,'#387eaa')+text(333,95,'B');
 case 'inductor':return circuit('rlc')+text(347,51,'L')+text(340,273,'U = ½LI²');
 case 'ac-wave':return linesPlot('v(t)','sine')+text(289,59,'ωt');
 case 'reactance':return linesPlot('i(t)','lag')+text(269,70,t('位相差 90°','Phase shift 90°'));
 case 'resonance':return circuit('rlc')+text(216,267,'ω₀ = 1/√LC');
 case 'ampere-maxwell':return circuit('rc')+arrow(362,146,393,146,'#b45d40')+text(280,270,'∂ΦE/∂t');
 case 'wave':{let s=line(81,223,485,223);let e='',b='';for(let i=0;i<=120;i++){let x=85+i*3.3;e+=(i?'L':'M')+x.toFixed(2)+' '+(121-66*Math.sin(i/120*4*Math.PI)).toFixed(2)+' ';b+=(i?'L':'M')+x.toFixed(2)+' '+(121-40*Math.cos(i/120*4*Math.PI)).toFixed(2)+' ';}return s+path(e,'#b45b42',3)+path(b,'#397f9f',3)+text(450,243,'x')+text(90,49,'E / B');}
 case 'energy-flux':return arrow(150,209,150,73,'#b45c43')+arrow(150,209,319,209,'#397c9f')+arrow(150,209,409,65,'#8054a1')+text(130,64,'E')+text(321,228,'B')+text(414,59,'S')+text(215,269,'S ∝ E × B');
 default:return '';
 }
}
export const electricityDiagramKeys=['charged-bodies','coulomb','superposition','field-definition','field-lines','gauss','potential-work','uniform-field','potential-gradient','capacitance','capacitor-energy','dielectric','current-definition','ohm','joule','series-parallel','kirchhoff','battery','charging','discharging','rc-energy','magnetic-force','circular-magnetic','wire-magnetic','faraday','lenz','inductor','ac-wave','reactance','resonance','ampere-maxwell','wave','energy-flux'];
export function electricityFigure(id,title,lang='ja'){
 const art=scene(id,lang);if(!art)return '';
 return '<figure class="electricity-situation"><svg role="img" viewBox="0 0 560 285" aria-label="'+esc(title)+'" xmlns="http://www.w3.org/2000/svg"><title>'+esc(title)+'</title>'+art+'</svg><figcaption>'
 +(lang==='en'?'Schematic: charge signs, connections, field directions and physical context. Not to scale.':'模式図：電荷の符号、回路の接続、場の方向と物理的な状況を示します。長さやベクトルの大きさは原則として比例尺度ではありません。')
 +'</figcaption></figure>';
}
