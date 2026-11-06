/* Transfer models: formulas across fields, with explicit physical assumptions and SI units. */
const finite=(...v)=>v.every(Number.isFinite);
export function compareOscillators({m=2,k=50,L=2,C=0.02}={}){
 if(!finite(m,k,L,C)||Math.min(m,k,L,C)<=0)throw new RangeError('All oscillator parameters must be positive');
 const wm=Math.sqrt(k/m),we=1/Math.sqrt(L*C);
 return {mechanicalOmega:wm,electricOmega:we,mechanicalPeriod:2*Math.PI/wm,electricPeriod:2*Math.PI/we};
}
export function compareInverseSquare({m1=5,m2=5,q1Micro=2,q2Micro=-2,r=1}={}){
 if(!finite(m1,m2,q1Micro,q2Micro,r)||m1<=0||m2<=0||r<=0)throw new RangeError('Invalid point-source parameters');
 const grav=6.67430e-11*m1*m2/(r*r);
 const electric=8.9875517923e9*q1Micro*1e-6*q2Micro*1e-6/(r*r);
 return {gravityInward:grav,electricRadial:electric,electricAttractive:electric<0,electricRepulsive:electric>0};
}
export function compareGradientFlux({diffusivity=0.001,concentrationGradient=-4,conductivity=2,temperatureGradient=5}={}){
 if(!finite(diffusivity,concentrationGradient,conductivity,temperatureGradient)||diffusivity<=0||conductivity<=0)throw new RangeError('Invalid transport parameters');
 // 1D Fick's first law and Fourier's law. Units are intentionally not interchangeable.
 return {molarFlux:-diffusivity*concentrationGradient,heatFlux:-conductivity*temperatureGradient};
}
