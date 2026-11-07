/* Constant-force stopping model: an ideal Newtonian prediction, not measured road data. */
export function brakingModel({mass,initialSpeed,brakingForce}) {
  if (![mass,initialSpeed,brakingForce].every(Number.isFinite)) {
    throw new RangeError('All parameters must be finite numbers');
  }
  if (mass<=0 || initialSpeed<0 || brakingForce<=0) {
    throw new RangeError('Mass and braking force must be positive; speed cannot be negative');
  }
  const initialEnergy=mass*initialSpeed*initialSpeed/2;
  const distance=initialEnergy/brakingForce;
  const acceleration=-brakingForce/mass;
  const time=mass*initialSpeed/brakingForce;
  const work=-brakingForce*distance;
  const impulse=-brakingForce*time;
  return {initialEnergy,distance,acceleration,time,work,impulse,finalEnergy:initialEnergy+work};
}
