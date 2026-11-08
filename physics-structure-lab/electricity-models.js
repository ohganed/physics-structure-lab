/* Deterministic calculation helpers used by electricity interactive examples. */
export const vacuumPermittivity=8.8541878128e-12;
export const elementaryCharge=1.602176634e-19;
const finite=(...values)=>values.every(Number.isFinite);
export function coulombForce(q1MicroC=1,q2MicroC=1,distanceM=0.2){
 if(!finite(q1MicroC,q2MicroC,distanceM)||distanceM<=0)throw new RangeError('Invalid charges or separation');
 const q1=q1MicroC*1e-6,q2=q2MicroC*1e-6;
 const signed=(q1*q2)/(4*Math.PI*vacuumPermittivity*distanceM**2);
 return {signed,magnitude:Math.abs(signed),type:signed>0?'repulsive':signed<0?'attractive':'none'};
}
export function resistorNetwork({sourceVoltage=9,r1=6,r2=3,mode='series'}={}){
 if(!finite(sourceVoltage,r1,r2)||r1<=0||r2<=0||!['series','parallel'].includes(mode))throw new RangeError('Invalid network');
 const resistance=mode==='series'?r1+r2:r1*r2/(r1+r2);
 const totalCurrent=sourceVoltage/resistance;
 const branchCurrents=mode==='series'?[totalCurrent,totalCurrent]:[sourceVoltage/r1,sourceVoltage/r2];
 const drops=mode==='series'?branchCurrents.map((I,i)=>I*[r1,r2][i]):[sourceVoltage,sourceVoltage];
 return {resistance,totalCurrent,branchCurrents,drops,totalPower:sourceVoltage*totalCurrent};
}
export function rcResponse({voltage=9,resistance=1000,capacitanceMicroF=100,timeMs=100,mode='charge'}={}){
 if(!finite(voltage,resistance,capacitanceMicroF,timeMs)||resistance<=0||capacitanceMicroF<=0||timeMs<0||!['charge','discharge'].includes(mode))throw new RangeError('Invalid RC input');
 const C=capacitanceMicroF*1e-6,t=timeMs/1000,tau=resistance*C,e=Math.exp(-t/tau);
 const capacitorVoltage=mode==='charge'?voltage*(1-e):voltage*e;
 const current=mode==='charge'?voltage/resistance*e:-voltage/resistance*e;
 return {tau,capacitorVoltage,current,storedEnergy:0.5*C*capacitorVoltage**2,referenceEnergy:0.5*C*voltage**2};
}
export function chargedParticleB({chargeMicroC=1,massMilliGram=1,speed=100,fieldTesla=.1}={}){
 if(!finite(chargeMicroC,massMilliGram,speed,fieldTesla)||chargeMicroC===0||massMilliGram<=0||speed<0||fieldTesla<=0)throw new RangeError('Invalid magnetic orbit input');
 const q=chargeMicroC*1e-6,m=massMilliGram*1e-6;
 return {radius:m*speed/(Math.abs(q)*fieldTesla),period:2*Math.PI*m/(Math.abs(q)*fieldTesla),forceMagnitude:Math.abs(q)*speed*fieldTesla};
}
