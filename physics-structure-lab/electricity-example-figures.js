import {electricityFigure} from './electricity-situation-diagrams.js';
const examples={
charge:['coulomb','q₁=+2.0 μC; q₂=−3.0 μC; r=0.30 m'],
field:['gauss','Q=+1.0 nC; r=0.20 m'],
potential:['uniform-field','E=300 N/C; d=0.040 m; q=+2.0 μC'],
capacitor:['capacitance','A=0.020 m²; d=1.0 mm; V=100 V'],
current:['current-definition','I=2.0 A; A=1.0 mm²; n=8.5×10²⁸ m⁻³'],
circuits:['series-parallel','V=9.0 V; R₁=6.0 Ω; R₂=3.0 Ω'],
rc:['charging','R=1000 Ω; C=100 μF; ℰ=9.0 V'],
magnetism:['circular-magnetic','q=+1.0 μC; m=1.0 mg; v=100 m/s; B=0.10 T'],
induction:['faraday','N=200; Φ: 0.020 → 0.005 Wb; Δt=0.10 s'],
ac:['ac-wave','V₀=100 V; v(t)=V₀ sinωt'],
maxwell:['wave','Vacuum: μ₀, ε₀, c=1/√(μ₀ε₀)']
};
const escape=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
export function electricityExampleFigure(key,lang='ja'){
 const item=examples[key];if(!item)return '';
 const [scene,values]=item;
 const html=electricityFigure(scene,lang==='en'?'Worked physical situation':'例題の物理的状況',lang);
 // Enlarged SVG canvas adds a separate numerical setup strip below the physical scene,
 // rather than placing numeric labels over force arrows, particles, or contact geometry.
 return html.replace('viewBox="0 0 560 285"','viewBox="0 0 560 332"')
  .replace('</svg>','<rect x="12" y="285" width="536" height="37" rx="7" fill="#eaf3f0" stroke="#d2e4de"/><text x="24" y="308" fill="#244f49" font-size="14">'+escape(values)+'</text></svg>');
}
