/* One-dimensional isolated two-body collision: SI units. */
export function collisionPrediction({m1,m2,u1,u2,e}) {
  if (![m1,m2,u1,u2,e].every(Number.isFinite) || m1<=0 || m2<=0 || e<0 || e>1) throw new RangeError('Invalid collision parameters');
  // Relative separation speed equals e times relative approach speed.
  const approach=u1-u2;
  if (approach<0) throw new RangeError('Bodies must initially approach in the chosen ordering');
  const pBefore=m1*u1+m2*u2;
  const centerSpeed=pBefore/(m1+m2);
  const v1=centerSpeed-(m2/(m1+m2))*e*approach;
  const v2=centerSpeed+(m1/(m1+m2))*e*approach;
  const pAfter=m1*v1+m2*v2;
  const kBefore=0.5*m1*u1*u1+0.5*m2*u2*u2;
  const kAfter=0.5*m1*v1*v1+0.5*m2*v2*v2;
  const reducedMass=m1*m2/(m1+m2);
  const kineticLoss=0.5*reducedMass*(1-e*e)*approach*approach;
  return {v1,v2,centerSpeed,pBefore,pAfter,kBefore,kAfter,kineticLoss,reducedMass,approach,
    momentumError:pAfter-pBefore, energyLossError:(kBefore-kAfter)-kineticLoss};
}
export function contactImpulse({m1,m2,u1,u2,e}) {
 const result=collisionPrediction({m1,m2,u1,u2,e});
 return {...result, impulse1:m1*(result.v1-u1),impulse2:m2*(result.v2-u2)};
}
