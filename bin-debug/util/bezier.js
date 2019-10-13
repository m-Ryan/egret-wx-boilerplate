"use strict";
function CubicBezier(p0, p1, p2, p3, t) {
    var temp = 1 - t;
    var x = p0.x * temp * temp * temp + 3 * p1.x * t * temp * temp + 3 * p2.x * t * t * temp + p3.x * t * t * t;
    var y = p0.y * temp * temp * temp + 3 * p1.y * t * temp * temp + 3 * p2.y * t * t * temp + p3.y * t * t * t;
    return {
        x: x,
        y: y
    };
}
function QuadraticBezier(p0, p1, p2, t) {
    var x = 2 * (1 - t) * (p1.x - p0.x) + t * (p2.x - p1.x);
    var y = 2 * (1 - t) * (p1.y - p0.y) + t * (p2.y - p1.y);
    return {
        x: x,
        y: y
    };
}
