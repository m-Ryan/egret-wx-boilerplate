// B(t) = P0 * (1-t)^3 + 3 * P1 * t * (1-t)^2 + 3 * P2 * t^2 * (1-t) + P3 * t^3, t ∈ [0,1]
type BezierPoint = {
    x: number;
    y: number;
}

function CubicBezier(p0: BezierPoint, p1: BezierPoint, p2: BezierPoint, p3: BezierPoint, t: number) {
    let temp = 1 - t;
    const x = p0.x * temp * temp * temp + 3 * p1.x * t * temp * temp + 3 * p2.x * t * t * temp + p3.x * t * t * t;
    const y = p0.y * temp * temp * temp + 3 * p1.y * t * temp * temp + 3 * p2.y * t * t * temp + p3.y * t * t * t;
    return {
        x,
        y
    };
}

function QuadraticBezier(p0: BezierPoint, p1: BezierPoint, p2: BezierPoint, t: number) {
    const x =  2 * (1-t) * (p1.x-p0.x)+t * (p2.x-p1.x);
    const y =  2 * (1-t) * (p1.y-p0.y)+t * (p2.y-p1.y);
    return {
        x,
        y
    };
}