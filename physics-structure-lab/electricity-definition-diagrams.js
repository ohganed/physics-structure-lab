/* Definition-specific bilingual figures, placed at the exact equation that introduces the quantity.
   The large left panel preserves the physical situation; right panel visualizes the particular definition,
   its geometry/measurement and physically meaningful vectors or time variation. */
import {electricityDefinitionFigures} from './electricity-definition-data.js';
import {electricityFigure} from './electricity-situation-diagrams.js';
const e=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const C={green:'#477c70',red:'#b65e47',blue:'#367b9e',purple:'#815ba5',line:'#718b84'};
const lin=(x,y,X,Y,col=C.line,w=2,dash='')=>'<line x1="'+x+'" y1="'+y+'" x2="'+X+'" y2="'+Y+'" stroke="'+col+'" stroke-width="'+w+'" stroke-linecap="round"'+(dash?' stroke-dasharray="'+dash+'"':'')+'/>';
const text=(x,y,s,color='#35534b',size=14)=>'<text x="'+x+'" y="'+y+'" font-size="'+size+'" fill="'+color+'">'+e(s)+'</text>';
const circ=(x,y,r,fill='#e4f0eb',stroke=C.green)=>'<circle cx="'+x+'" cy="'+y+'" r="'+r+'" fill="'+fill+'" stroke="'+stroke+'" stroke-width="2"/>';
const rec=(x,y,w,h,fill='#e4f0eb',stroke=C.green)=>'<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" rx="3" fill="'+fill+'" stroke="'+stroke+'" stroke-width="2"/>';
const path=(d,col=C.green,w=2,fill='none')=>'<path d="'+d+'" stroke="'+col+'" stroke-width="'+w+'" fill="'+fill+'" stroke-linecap="round" stroke-linejoin="round"/>';
const arr=(x,y,X,Y,color=C.red)=>{
 const dx=X-x,dy=Y-y,L=Math.hypot(dx,dy);if(L<4)return '';
 const ux=dx/L,uy=dy/L;
 return lin(x,y,X,Y,color,2.8)+
 '<polygon fill="'+color+'" points="'+[[X,Y],[X-ux*10-uy*5,Y-uy*10+ux*5],[X-ux*10+uy*5,Y-uy*10-ux*5]].map(p=>p.join(',')).join(' ')+'"/>';
};
const axes=()=>lin(26,176,242,176)+lin(26,176,26,22);
const zig=(x,y)=>path('M'+x+' '+y+' h16 l8 -14 l13 28 l13 -28 l13 28 l13 -28 l8 14 h16',C.red,2.4);
const helix=(x,y)=>Array.from({length:5},(_,i)=>'<ellipse cx="'+(x+28*i)+'" cy="'+y+'" rx="15" ry="24" fill="none" stroke="'+C.green+'" stroke-width="2"/>').join('');
function mini(kind,id,index,m){
 const [a,b]=m;
 switch(kind){
 case 'charge':return circ(62,103,25,'#f7e3dc')+text(55,109,'+')+circ(201,103,25,'#dfedf6')+text(195,109,'−')+arr(88,102,170,102,C.blue)+text(109,84,'e−',C.blue)+text(57,164,a)+text(181,164,b);
 case 'pair':return circ(43,109,21,'#f7e3dc')+text(38,115,'+')+circ(219,109,21,'#dfedf6')+text(213,115,'−')+arr(219,109,142,109,C.red)+lin(43,160,219,160,C.line,1.5)+lin(43,151,43,169,C.line,1)+lin(219,151,219,169,C.line,1)+text(124,154,'r')+text(29,61,a)+text(215,61,b);
 case 'vector':return circ(47,162,4,C.green)+arr(47,162,124,92,C.red)+arr(47,162,125,162,C.blue)+arr(47,162,201,92,C.purple)+lin(124,92,201,92,C.line,1,'4 4')+lin(125,162,201,92,C.line,1,'4 4')+text(100,80,a,C.red)+text(119,189,b,C.blue)+text(205,93,'Σ',C.purple);
 case 'field':return index===0?circ(73,72,13,'#f7e3dc')+text(63,77,'+q')+circ(73,141,13,'#f7e3dc')+text(63,146,'+q')+arr(73,72,213,72,C.blue)+arr(73,141,213,141,C.red)+text(218,77,'E',C.blue)+text(218,147,'F',C.red)+text(26,195,'E = F / q',C.green):circ(61,70,13,'#f7e3dc')+text(49,75,'+q')+circ(61,150,13,'#d8e9f3')+text(50,155,'−q')+arr(86,43,226,43,C.blue)+text(216,34,'E',C.blue)+arr(85,83,212,83,C.red)+arr(211,161,88,161,C.red)+text(218,82,'F+',C.red)+text(220,165,'F−',C.red);
 case 'radial':return circ(75,109,23,'#f7e3dc')+text(67,116,'Q')+lin(100,109,184,109,C.line,1.5,'5 5')+arr(188,109,246,109,C.red)+text(141,98,'r')+text(196,95,b,C.red)+text(63,181,a);
 case 'gauss':{let g=circ(131,103,76,'none')+circ(131,103,15,'#f7e3dc')+text(123,109,'Q');for(let k=0;k<8;k++){const th=k*Math.PI/4;g+=arr(131+58*Math.cos(th),103+58*Math.sin(th),131+95*Math.cos(th),103+95*Math.sin(th),C.red);}return g+text(18,192,a)+text(199,192,b);}
 case 'flux':return path('M77 165 L167 57',C.green,4)+arr(126,110,211,179,C.blue)+arr(42,117,214,117,C.red)+text(205,106,a,C.red)+text(162,182,b,C.blue)+text(23,195,'S');
 case 'potential':return circ(63,112,9,'#f7e3dc')+circ(219,112,9,'#d8e9f3')+arr(82,111,197,111,C.red)+arr(92,144,188,144,C.blue)+text(49,96,'A')+text(214,96,'B')+text(117,97,'E')+text(51,193,a)+text(195,193,b);
 case 'equipotential':return lin(65,42,65,171,C.green,2,'5 4')+lin(123,42,123,171,C.green,2,'5 4')+lin(186,42,186,171,C.green,2,'5 4')+arr(76,102,175,102,C.red)+text(45,36,'V₁')+text(111,36,'V₂')+text(178,36,'V₃')+text(59,197,a)+text(183,197,b);
 case 'plates':return rec(45,47,15,124,'#f4ded3')+rec(210,47,15,124,'#dcebf5')+arr(76,108,192,108,C.red)+lin(61,188,209,188,C.line,1)+lin(61,181,61,194,C.line)+lin(209,181,209,194,C.line)+text(137,182,'d')+text(36,37,'+Q')+text(196,37,'−Q')+text(86,88,a,C.red)+text(171,211,b,C.blue);
 case 'dielectric':return rec(37,36,14,139,'#f4ded3')+rec(227,36,14,139,'#dcebf5')+rec(102,46,76,120,'#eeeacf')+text(94,69,'−−',C.blue)+text(177,69,'++',C.red)+arr(57,111,224,111,C.red)+text(114,208,a)+text(191,208,b);
 case 'curve':{const shade=index!==0||id==='capacitor-energy';return axes()+(shade?path('M34 171 L216 45 L216 171 Z','none',0,'#e2ebdc'):'')+path('M34 171 L216 45',C.blue,3)+lin(216,45,216,176,C.line,1,'4 4')+text(224,184,a)+text(5,34,b)+text(108,198,shade?'U = area':'V(q)');}
 case 'flow':return rec(25,65,223,101,'#e2eee9')+lin(145,59,145,171,C.blue,2.4,'5 4')+[52,103,174,216].map(x=>circ(x,115,5,'#d0e6ee')).join('')+arr(52,90,128,90,C.red)+arr(211,139,167,139,C.blue)+text(133,51,a)+text(176,194,b)+text(58,39,'I',C.red);
 case 'resistor':return lin(22,104,61,104)+zig(61,104)+lin(161,104,241,104)+arr(161,74,234,74,C.red)+text(206,64,'I')+text(50,147,a)+text(181,147,b)+text(92,183,'V',C.blue);
 case 'wire':return rec(47,79,169,63,'#e2eee9')+lin(46,167,215,167,C.line,1)+text(123,188,a)+circ(215,112,31,'none')+text(228,105,b)+arr(71,63,197,63,C.red);
 case 'energy':return rec(25,35,58,124,'#f0dbc9')+rec(111,96,58,63,'#dcece6')+rec(193,96,58,63,'#dee7f3')+arr(85,88,106,88,C.red)+arr(171,125,191,125,C.blue)+text(27,179,'W')+text(111,181,a)+text(191,181,b);
 case 'series':return lin(12,113,36,113)+zig(36,113)+lin(136,113,156,113)+zig(156,113)+arr(42,65,216,65,C.blue)+text(102,53,'I')+text(51,158,a)+text(180,158,b);
 case 'parallel':return lin(39,40,39,173)+lin(39,40,229,40)+lin(39,173,229,173)+lin(229,40,229,173)+zig(87,40)+zig(87,173)+circ(39,106,5)+circ(229,106,5)+text(100,86,a)+text(130,215,b);
 case 'junction':return arr(28,104,115,104,C.red)+circ(132,104,6)+arr(147,104,223,42,C.blue)+arr(147,104,223,164,C.purple)+text(39,82,a)+text(187,38,b)+text(190,181,'I₂');
 case 'loop':return path('M52 49 H215 V175 H52 V49',C.green,2.5)+zig(94,49)+lin(43,88,61,88,C.blue,3)+lin(46,98,58,98,C.blue,2)+arr(187,192,124,192,C.red)+text(79,42,a)+text(183,192,b);
 case 'rc':return path('M35 50 H235 V171 H35 V50',C.green,2.5)+zig(84,50)+lin(212,94,212,123,C.red,4)+lin(198,94,198,123,C.red,4)+text(153,36,'R')+text(223,111,'C')+text(44,204,a)+text(172,204,b);
 case 'time':{let d='',up=id==='charging',decay=id==='discharging';for(let i=0;i<=80;i++){const x=29+i*2.65,t=i/80*4,y=up?175-125*(1-Math.exp(-t)):decay?51+124*(1-Math.exp(-t)):175-125*(1-Math.exp(-t));d+=(i?'L':'M')+x.toFixed(1)+' '+y.toFixed(1)+' ';}const targetY=up?175-125*(1-Math.exp(-1)):decay?51+124*(1-Math.exp(-1)):175-125*(1-Math.exp(-1));return axes()+path(d,C.blue,3)+lin(82,27,82,176,C.red,1,'5 4')+lin(26,targetY,82,targetY,C.red,1,'4 4')+circ(82,targetY,4,C.red)+text(70,198,'τ')+text(108,32,a)+text(143,targetY-8,b);}
 case 'magnetic':return index===0?arr(54,129,181,129,C.red)+arr(181,129,181,39,C.blue)+[0,1,2].map((_,i)=>text(65+43*i,180,'×',C.purple)).join('')+circ(181,129,9,'#f5e3d8')+text(186,75,'F',C.blue)+text(121,113,a,C.red)+text(40,203,b,C.purple):arr(33,72,105,72,C.red)+arr(126,72,199,72,C.blue)+text(47,55,'v',C.red)+text(177,55,'B',C.blue)+text(207,75,'F=0')+arr(37,167,107,167,C.red)+text(157,167,'× ×',C.purple)+arr(121,165,121,108,C.blue)+text(130,119,'F',C.blue)+text(41,202,'θ=0 / θ=90°');
 case 'orbit':return circ(130,112,77,'none')+circ(207,112,10,'#f5e3d8')+arr(207,112,207,33,C.red)+arr(206,112,132,112,C.blue)+lin(130,112,206,112,C.line,1,'3 4')+text(144,103,'r')+text(218,72,a)+text(107,210,b);
 case 'wire-B':return circ(131,109,84,'none')+circ(131,109,53,'none')+circ(131,109,12,'#f5e3d8')+text(122,114,'⊙')+arr(215,111,211,75,C.blue)+lin(132,109,205,109,C.line,1,'4 4')+text(168,103,'r')+text(25,194,a)+text(213,195,b);
 case 'coil':return [0,1,2,3,4].map(i=>'<ellipse cx="'+(56+i*35)+'" cy="111" rx="21" ry="49" stroke="'+C.green+'" fill="none" stroke-width="2"/>').join('')+arr(45,111,235,111,C.red)+arr(235,134,45,134,C.blue)+text(90,53,a)+text(140,202,b);
 case 'sine':{let d='';for(let i=0;i<=100;i++){let x=29+i*2.1,y=103-65*Math.sin(i/100*4*Math.PI);d+=(i?'L':'M')+x.toFixed(1)+' '+y.toFixed(1)+' ';}return axes()+path(d,C.red,2.6)+lin(29,38,232,38,C.line,1,'4 5')+text(96,31,a)+text(183,194,b);}
 case 'phase':{let p='',q='';for(let i=0;i<=100;i++){let x=29+i*2.1,t=i/100*4*Math.PI;p+=(i?'L':'M')+x.toFixed(1)+' '+(103-48*Math.sin(t)).toFixed(1)+' ';q+=(i?'L':'M')+x.toFixed(1)+' '+(103-48*Math.cos(t)).toFixed(1)+' ';}return axes()+path(p,C.red,2.4)+path(q,C.blue,2.4)+text(137,40,a,C.red)+text(190,51,b,C.blue);}
 case 'reactance':{let d='';for(let i=0;i<=85;i++){const x=40+i*2.2, y=53+135/(i/14+1);d+=(i?'L':'M')+x.toFixed(1)+' '+y.toFixed(1)+' ';}return axes()+path('M40 165 L227 34',C.red,3)+path(d,C.blue,3)+text(191,48,a,C.red)+text(44,66,b,C.blue);}
 case 'phasor':return lin(39,170,206,170,C.red,3)+lin(206,170,206,53,C.blue,3)+arr(39,170,206,53,C.purple)+text(118,191,a,C.red)+text(214,116,b,C.blue)+text(94,96,'Z',C.purple);
 case 'displacement':return rec(86,43,15,119,'#f4ded3')+rec(194,43,15,119,'#dcebf5')+arr(105,101,189,101,C.red)+arr(30,61,75,61,C.blue)+text(33,44,a)+text(119,70,b)+text(83,191,'∂ΦE / ∂t');
 case 'wave':return arr(77,163,77,43,C.red)+circ(77,163,18,'none')+circ(77,163,4,C.blue)+arr(80,163,222,163,C.purple)+text(57,43,'E')+text(92,186,'B ⊙')+text(228,167,'S')+text(47,208,a)+text(183,208,b);
 default:return circ(128,101,50)+text(86,105,a)+text(116,198,b);
 }
}
export function electricityDefinitionFigure(id,index,language='ja'){
 const item=electricityDefinitionFigures[id]?.[index];if(!item)return '';
 const en=language==='en',label=item.title[en?1:0],description=item.description[en?1:0];
 const src=electricityFigure(id,label,language);
 const core=src.match(/<title>[\s\S]*?<\/title>([\s\S]*?)<\/svg>/)?.[1]||'';
 return '<figure class="electricity-definition-figure" data-definition="'+e(id+':'+index)+'">'
 +'<div class="electricity-definition-title">'+(en?'Definition diagram: ':'定義の図：')+e(label)+'</div>'
 +'<div class="electricity-definition-grid">'
 +'<div class="electricity-definition-panel"><div class="electricity-definition-panel-label">'+e(en?'Physical situation':'物理的な状況')+'</div>'
 +'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 285" role="img" aria-label="'+e(label)+'"><title>'+e(label)+'</title>'+core+'</svg></div>'
 +'<div class="electricity-definition-panel"><div class="electricity-definition-panel-label">'+e(en?'Quantity and direction':'定義する量と向き')+'</div>'
 +'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 270 225" role="img" aria-label="'+e(label+': '+description)+'"><title>'+e(label)+'</title>'+mini(item.kind,id,index,item.marks)+'</svg></div></div>'
 +'<figcaption>'+e(description)+'</figcaption></figure>';
}
