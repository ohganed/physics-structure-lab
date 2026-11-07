/* Deterministic, one-dimensional two-block contact model.
   Positive x is to the right; A is left of B. No friction, horizontal surface. */
export function solveTwoBlock({massA,massB,force,push='A'}){
 if (![massA,massB,force].every(Number.isFinite) || massA<=0 || massB<=0 || force<0 || !['A','B'].includes(push)) {
  throw new RangeError('Positive finite masses, nonnegative finite force and push A/B are required');
 }
 const totalMass=massA+massB;
 const acceleration=(push==='A'?1:-1)*force/totalMass;
 const contact=force*(push==='A'?massB:massA)/totalMass;
 const contactOnA=-contact;
 const contactOnB=contact;
 const externalOnA=push==='A'?force:0;
 const externalOnB=push==='B'?-force:0;
 return {
  massA,massB,force,push,totalMass,acceleration,contact,
  contactOnA,contactOnB,externalOnA,externalOnB,
  netOnA:externalOnA+contactOnA,
  netOnB:externalOnB+contactOnB,
  combinedNetForce:externalOnA+externalOnB
 };
}
