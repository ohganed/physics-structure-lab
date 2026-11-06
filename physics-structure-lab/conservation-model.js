/** Conservation analysis with stated isolated-system assumptions. */
export function fallingEnergy({m=2,h=5,g=9.8,loss=0}={}) {
 if (![m,h,g,loss].every(Number.isFinite)||m<=0||h<0||g<=0||loss<0||loss>1)throw new RangeError('Invalid falling energy input');
 const initialPotential=m*g*h;
 const dissipated=initialPotential*loss;
 const finalKinetic=initialPotential-dissipated;
 return {initialPotential,dissipated,finalKinetic,v:Math.sqrt(2*finalKinetic/m),m,h,g,loss};
}
/**
 * 1-D two-body collision. In the collision interval the net external
 * impulse is negligible. Coefficient of restitution e is 0..1.
 * Target body initially at rest.
 */
export function collisionEnergy({m1=2,m2=1,u1=3,e=1}={}) {
 if (![m1,m2,u1,e].every(Number.isFinite)||m1<=0||m2<=0||u1<0||e<0||e>1)throw new RangeError('Invalid collision model');
 const v1=(m1-e*m2)*u1/(m1+m2);
 const v2=(1+e)*m1*u1/(m1+m2);
 const pi=m1*u1,pf=m1*v1+m2*v2;
 const ki=.5*m1*u1*u1,kf=.5*m1*v1*v1+.5*m2*v2*v2;
 return {m1,m2,u1,e,v1,v2,pi,pf,ki,kf,loss:ki-kf};
}