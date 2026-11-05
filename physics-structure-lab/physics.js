/** Constant-acceleration, one-dimensional motion (SI units). */
export function motionAt({ x0 = 0, v0 = 0, a = 0 }, time) {
  if (![x0, v0, a, time].every(Number.isFinite) || time < 0) throw new RangeError('Invalid motion input');
  return { x: x0 + v0 * time + a * time * time / 2, v: v0 + a * time, a };
}

/** Consecutive stages, starting from rest. First stage a1 for t1; then a2 until stopping. */
export function twoStageTrain({ a1, t1, a2 }) {
  if (![a1, t1, a2].every(Number.isFinite) || a1 <= 0 || t1 <= 0 || a2 >= 0) {
    throw new RangeError('Need positive a1 and t1, negative a2');
  }
  const v1 = a1 * t1;
  const x1 = a1 * t1 * t1 / 2;
  const t2 = -v1 / a2;
  const x2 = v1 * t2 + a2 * t2 * t2 / 2;
  return { v1, x1, t2, x2, totalTime: t1 + t2, totalDistance: x1 + x2 };
}

export function approximatelyEqual(value, expected, tolerance = 0.01) {
  return Number.isFinite(value) && Math.abs(value - expected) <= tolerance;
}
