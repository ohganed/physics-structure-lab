/**
 * Explore why impulse is an area under force versus time and why the
 * combination mv is useful. Finite constant mass in an inertial frame.
 * A ramp is a linear change from zero to signed final force.
 * Both profiles are idealized model predictions, not observations.
 */
export function impulsePrediction({mass,initialVelocity,force,duration,profile='constant'}){
 for(const [name,n] of Object.entries({mass,initialVelocity,force,duration})){
  if(typeof n!=='number'||!Number.isFinite(n))throw new RangeError(name+' must be finite');
 }
 if(!(mass>0&&duration>0))throw new RangeError('Mass and duration must be positive');
 if(!['constant','ramp'].includes(profile))throw new RangeError('Unsupported force profile');
 const shape=profile==='ramp'?0.5:1;
 const impulse=force*duration*shape;
 const initialMomentum=mass*initialVelocity;
 const velocityChange=impulse/mass;
 const finalVelocity=initialVelocity+velocityChange;
 const finalMomentum=mass*finalVelocity;
 return {mass,force,duration,profile,impulse,velocityChange,initialVelocity,finalVelocity,
  initialMomentum,finalMomentum,momentumChange:finalMomentum-initialMomentum,
  areaFactor:shape};
}
export function forceAt(profile,force,duration,time){
 if(!['constant','ramp'].includes(profile)||!Number.isFinite(force)||!Number.isFinite(duration)||!(duration>0)||!Number.isFinite(time))throw new RangeError('Invalid force-time model');
 if(time<0||time>duration)return 0;
 return profile==='constant'?force:force*time/duration;
}
/**
 * Isolated two-body collision impulse, J delivered to A. B receives -J.
 * No claim of which J a specific contact law would produce.
 */
export function twoBodyImpulse({massA,massB,velocityA,velocityB,impulseToA}){
 const ns=[massA,massB,velocityA,velocityB,impulseToA];
 if(ns.some(n=>typeof n!=='number'||!Number.isFinite(n))||massA<=0||massB<=0)throw new RangeError('Invalid masses or velocities');
 const before=massA*velocityA+massB*velocityB;
 const afterA=velocityA+impulseToA/massA;
 const afterB=velocityB-impulseToA/massB;
 const after=massA*afterA+massB*afterB;
 return {before,after,afterA,afterB,impulseA:impulseToA,impulseB:-impulseToA,changeA:impulseToA,changeB:-impulseToA};
}
