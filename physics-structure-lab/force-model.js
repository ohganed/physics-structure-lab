/**
 * Two blocks on a frictionless horizontal floor. A is on B.
 * External horizontal F >= 0 acts either on upper A or lower B.
 * The interface friction is Coulomb: |f_s| <= mu_s mA g,
 * sliding magnitude f_k = mu_k mA g.
 * All returned forces are horizontal, positive right.
 */
export function stackedBlocks({
  mA=2,mB=3,F=10,muS=.4,muK=.3,g=9.8,appliedTo='upper'
}={}) {
  if (![mA,mB,F,muS,muK,g].every(Number.isFinite) ||
      mA<=0 || mB<=0 || F<0 || g<=0 || muS<0 || muK<0 ||
      muK>muS || !['upper','lower'].includes(appliedTo)) {
    throw new RangeError('Invalid stacked-block model');
  }
  const total=mA+mB;
  const aCommon=F/total;
  const requiredFriction=(appliedTo==='upper'?mB:mA)*aCommon;
  const maxStatic=muS*mA*g;
  const threshold=appliedTo==='upper'
    ? (mB===0?Infinity:maxStatic*total/mB)
    : maxStatic*total/mA;
  const sticks=requiredFriction<=maxStatic+1e-10;
  let fOnA, aA, aB, regime;
  if(sticks) {
    fOnA=appliedTo==='upper'?-requiredFriction:requiredFriction;
    aA=aCommon; aB=aCommon;
    regime='static';
  } else {
    fOnA=appliedTo==='upper'?-muK*mA*g:muK*mA*g;
    aA=((appliedTo==='upper'?F:0)+fOnA)/mA;
    aB=((appliedTo==='lower'?F:0)-fOnA)/mB;
    regime='sliding';
  }
  return {
    regime, sticks, aA, aB, aCommon, requiredFriction,
    maxStatic,threshold, fOnA, fOnB:-fOnA,
    contactNormal:mA*g, supportNormal:total*g,
    appliedA:appliedTo==='upper'?F:0,
    appliedB:appliedTo==='lower'?F:0,
    weightA:mA*g, weightB:mB*g,
    g,mA,mB,F,muS,muK,appliedTo
  };
}
export function stackedState(model,t){
  if(!Number.isFinite(t)||t<0)throw new RangeError('Invalid time');
  return {xA:.5*model.aA*t*t,xB:.5*model.aB*t*t,vA:model.aA*t,vB:model.aB*t,relativeDisplacement:.5*(model.aA-model.aB)*t*t};
}