/* Advanced mechanics models (SI units). All models are analytic and deterministic. */
const finite = (...values) => values.every(Number.isFinite);
export function rotor({mass=2,radius=1,force=4,angleDeg=90,time=0}={}) {
 if(!finite(mass,radius,force,angleDeg,time)||mass<=0||radius<=0||force<0||time<0)throw new RangeError('Invalid rotor');
 // Uniform solid disk, fixed central axis, zero initial angular velocity.
 const inertia=mass*radius*radius/2;
 const torque=radius*force*Math.sin(angleDeg*Math.PI/180);
 const alpha=torque/inertia;
 return {inertia,torque,alpha,omega:alpha*time,theta:alpha*time*time/2,energy:inertia*(alpha*time)**2/2,angularMomentum:inertia*alpha*time};
}
export function oscillator({mass=2,k=50,amplitude=.3,damping=0,time=0}={}) {
 if(!finite(mass,k,amplitude,damping,time)||mass<=0||k<=0||amplitude<0||damping<0||time<0)throw new RangeError('Invalid oscillator');
 // m x'' + b x' + k x = 0, underdamped only; x(0)=A, v(0)=0.
 const gamma=damping/(2*mass),natural=Math.sqrt(k/mass);
 if(gamma>=natural)throw new RangeError('Only underdamped case');
 const wd=Math.sqrt(natural*natural-gamma*gamma);
 const e=Math.exp(-gamma*time);
 const x=amplitude*e*(Math.cos(wd*time)+(gamma/wd)*Math.sin(wd*time));
 const v=-amplitude*e*natural*natural*Math.sin(wd*time)/wd;
 return {x,v,omega0:natural,omegaD:wd,period:2*Math.PI/wd,
   kinetic:.5*mass*v*v,potential:.5*k*x*x,envelope:amplitude*e};
}
export function orbit({mu=3.986004418e14,radius=7e6,time=0}={}) {
 if(!finite(mu,radius,time)||mu<=0||radius<=0||time<0)throw new RangeError('Invalid orbit');
 // Test mass in a circular Newtonian orbit around fixed point mass.
 const omega=Math.sqrt(mu/(radius**3));
 const speed=Math.sqrt(mu/radius), theta=omega*time;
 return {omega,speed,period:2*Math.PI/omega,acceleration:mu/(radius**2),
   x:radius*Math.cos(theta),y:radius*Math.sin(theta),
   vx:-speed*Math.sin(theta),vy:speed*Math.cos(theta),
   specificEnergy:-mu/(2*radius)};
}
export function coupledModes({mass=1,outerK=12,couplingK=3}={}) {
 if(!finite(mass,outerK,couplingK)||mass<=0||outerK<=0||couplingK<0)throw new RangeError('Invalid coupling');
 return {omegaTogether:Math.sqrt(outerK/mass),
  omegaOpposite:Math.sqrt((outerK+2*couplingK)/mass)};
}
