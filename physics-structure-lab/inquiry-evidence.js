/* Learner-reported measurements remain distinct from deterministic model outputs. */
const finite=n=>typeof n==='number'&&Number.isFinite(n);
const validDate=s=>typeof s==='string'&&s.length<=40&&!Number.isNaN(Date.parse(s));
export function validateObservation(obs,trials){
 if(!obs||typeof obs!=='object'||Array.isArray(obs)||!Array.isArray(trials))return false;
 if(typeof obs.id!=='string'||!/^obs-[a-zA-Z0-9-]{5,100}$/.test(obs.id))return false;
 if(!Number.isInteger(obs.trialIndex)||obs.trialIndex<0||obs.trialIndex>=trials.length)return false;
 if(!finite(obs.measured))return false;
 if(obs.uncertainty!==null&&!(finite(obs.uncertainty)&&obs.uncertainty>=0))return false;
 if(typeof obs.method!=='string'||obs.method.length>500)return false;
 if(!validDate(obs.date))return false;
 if(obs.source!=='learner-reported')return false;
 return finite(trials[obs.trialIndex]?.primary);
}
export function compareObservation(obs,trial){
 if(!trial||!obs||!validateObservation({...obs,trialIndex:0},[trial]))throw new RangeError('Invalid learner observation or trial');
 const discrepancy=obs.measured-trial.primary;
 return {
  modelValue:trial.primary,observedValue:obs.measured,discrepancy,
  absoluteDifference:Math.abs(discrepancy),
  relativePercent:trial.primary===0?null:100*discrepancy/Math.abs(trial.primary),
  uncertainty:obs.uncertainty,
  unit:trial.primaryUnit
 };
}
export function appendObservation(observations,entry,trials){
 if(!Array.isArray(observations)||observations.length>=60||!validateObservation(entry,trials))throw new RangeError('Invalid observation');
 if(observations.some(o=>o.id===entry.id))throw new RangeError('Duplicate observation ID');
 return [...observations,{...entry}];
}
