/* Frictionless projectile and ideal Atwood machine, deterministic SI units. */
export function projectile({speed=12,angleDeg=40,g=9.8,height=0,time=0}={}){
 if(![speed,angleDeg,g,height,time].every(Number.isFinite)||speed<0||g<=0||height<0||time<0||angleDeg<0||angleDeg>90)throw new RangeError('Invalid projectile');
 const theta=angleDeg*Math.PI/180,vx=speed*Math.cos(theta),vy0=speed*Math.sin(theta);
 const flight=(vy0+Math.sqrt(vy0*vy0+2*g*height))/g;
 const t=Math.min(time,flight);
 return {x:vx*t,y:Math.max(0,height+vy0*t-.5*g*t*t),vx,vy:vy0-g*t,flight,range:vx*flight,maximumHeight:height+vy0*vy0/(2*g)};
}
export function atwood({m1=2,m2=3,g=9.8,time=0}={}){
 if(![m1,m2,g,time].every(Number.isFinite)||m1<=0||m2<=0||g<=0||time<0)throw new RangeError('Invalid Atwood machine');
 // Positive motion: m2 down, m1 up.
 const a=(m2-m1)*g/(m1+m2);
 const tension=2*m1*m2*g/(m1+m2);
 return {a,tension,displacement:.5*a*time*time,velocity:a*time};
}
