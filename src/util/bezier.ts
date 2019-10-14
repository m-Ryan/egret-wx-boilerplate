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

function parseSvgPath(d: string) {
  let paths = d.split(' ');
  let pattern = 'MLCQAZ';

  const parseData = [];
  while (paths.length > 0) {
      const current = paths.splice(0, 1)[0];
      const char = current.charAt(0).toUpperCase();
      if (char === 'Z') {
        parseData.push({
          type: 'Z',
          values: []
        });
        break;
      }
      if (pattern.indexOf(char) !== -1) {
        const data = {
          type: char,
          values: [checkValidPoint(current.substring(1))]
        };

        while(paths.length > 0 && (pattern.indexOf(paths[0].charAt(0).toUpperCase()) === -1)) {
          data.values.push(checkValidPoint(paths.splice(0, 1)[0]));
        }
        parseData.push(data);
      }

  }
  return parseData;
  
};

function checkValidPoint(point: string) {
  if (point === ''|| typeof Number(point) !== 'number') {
    throw new Error('svg path 错误');
  }
  return point;
}

console.log(parseSvgPath("M150 0 L75 200 L225 20 q150 -300 300 0 a75 75 0 1 0 150 0 L225 200 Z"))
