import test from 'node:test';
import assert from 'node:assert/strict';
import { stackedBlocks, stackedState } from '../force-model.js';
const near=(x,y)=>assert.ok(Math.abs(x-y)<1e-10,`expected ${y}, got ${x}`);

test('upper block pushed: static friction pulls lower block forward',()=>{
 const s=stackedBlocks({mA:2,mB:3,F:10,muS:.4,muK:.3});
 assert.equal(s.regime,'static');
 near(s.aA,2);near(s.aB,2);near(s.fOnA,-6);near(s.fOnB,6);
 near(s.contactNormal,19.6);near(s.supportNormal,49);
});
test('pushing the lower block reverses friction directions',()=>{
 const s=stackedBlocks({mA:2,mB:3,F:10,muS:.4,muK:.3,appliedTo:'lower'});
 assert.equal(s.sticks,true);near(s.fOnA,4);near(s.fOnB,-4);
 near(s.aA,2);near(s.aB,2);
});
test('applied upper force above static threshold produces slip with kinetic friction',()=>{
 const s=stackedBlocks({mA:2,mB:3,F:30,muS:.4,muK:.3});
 assert.equal(s.regime,'sliding');
 near(s.threshold,.4*2*9.8*5/3);
 near(s.fOnA,-5.88);near(s.aA,(30-5.88)/2);near(s.aB,5.88/3);
 assert.ok(stackedState(s,2).relativeDisplacement>0);
});
test('lower-pushed sliding model transmits kinetic friction to upper',()=>{
 const s=stackedBlocks({mA:2,mB:3,F:30,muS:.4,muK:.3,appliedTo:'lower'});
 assert.equal(s.sticks,false);
 near(s.fOnA,5.88);near(s.aA,2.94);near(s.aB,(30-5.88)/3);
 assert.ok(stackedState(s,2).relativeDisplacement<0);
});
test('threshold equality remains static, zero force remains at rest',()=>{
 const p={mA:2,mB:3,muS:.4,muK:.3};
 const s=stackedBlocks({...p,F:.4*2*9.8*5/3});
 assert.equal(s.sticks,true);
 const z=stackedBlocks({...p,F:0});
 near(z.aA,0);near(z.fOnB,0);
});
test('invalid friction model is rejected',()=>{
 assert.throws(()=>stackedBlocks({mA:0}));
 assert.throws(()=>stackedBlocks({muS:.2,muK:.3}));
 assert.throws(()=>stackedBlocks({F:-1}));
 assert.throws(()=>stackedState(stackedBlocks(),-1));
});
