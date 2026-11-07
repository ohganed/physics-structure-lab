/**
 * A block on a rough incline: ideal Coulomb static/kinetic friction.
 * One-dimensional along the plane; no external pull; mass is constant.
 * Returns a model prediction, not a measured friction coefficient.
 */
export function analyzeIncline({mass=2,thetaDegrees=20,muStatic=0.4,muKinetic=0.3,g=9.8}={}){
 for(const [key,value] of Object.entries({mass,thetaDegrees,muStatic,muKinetic,g})){
  if(typeof value!=='number'||!Number.isFinite(value))throw new RangeError(key+' must be finite');
 }
 if(mass<=0||g<=0||thetaDegrees<0||thetaDegrees>85||muStatic<0||muKinetic<0||muKinetic>muStatic)
  throw new RangeError('Invalid rough incline parameters');
 const theta=thetaDegrees*Math.PI/180;
 const weight=mass*g;
 const downslope=weight*Math.sin(theta);
 const normal=weight*Math.cos(theta);
 const staticMax=muStatic*normal;
 const canRemainAtRest=downslope<=staticMax+1e-10;
 const friction=canRemainAtRest?downslope:muKinetic*normal;
 const acceleration=canRemainAtRest?0:(downslope-friction)/mass;
 const thresholdDegrees=Math.atan(muStatic)*180/Math.PI;
 const netDownslope=downslope-friction;
 return {mass,g,thetaDegrees,muStatic,muKinetic,weight,downslope,normal,staticMax,
  canRemainAtRest,friction,acceleration,thresholdDegrees,
  netDownslope:canRemainAtRest?0:netDownslope,
  regime:canRemainAtRest?'rest':'sliding'};
}
