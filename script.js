// const canvas = document.querySelector("#canvas");

// const ctx = canvas.getContext("2d");

// // Define init values
// const centerOfCircle = { x: 100, y: 100 };
// const radius = 50;
// let time = 0;
// const interval = 5;
// const angularVelocity = 30; // 1 deg/s

// let t = 0;

// const intervalId = setInterval(() => {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   ctx.beginPath();

//   t += interval;
//   ctx.moveTo(centerOfCircle.x, centerOfCircle.y);
//   const x = centerOfCircle.x + radius * Math.sin((angularVelocity * t) / 1000);
//   const y = centerOfCircle.y - radius * Math.cos((angularVelocity * t) / 1000);
//   ctx.lineTo(x, y);
//   ctx.stroke();
// }, interval);

(function () {
  var annulus = function (
    centerX,
    centerY,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    anticlockwise
  ) {
    var th1 = (startAngle * Math.PI) / 180;
    var th2 = (endAngle * Math.PI) / 180;
    var startOfOuterArcX = outerRadius * Math.cos(th2) + centerX;
    var startOfOuterArcY = outerRadius * Math.sin(th2) + centerY;

    this.beginPath();
    this.arc(centerX, centerY, innerRadius, th1, th2, anticlockwise);
    this.lineTo(startOfOuterArcX, startOfOuterArcY);
    this.arc(centerX, centerY, outerRadius, th2, th1, !anticlockwise);
    this.closePath();
  };
  CanvasRenderingContext2D.prototype.annulus = annulus;
})();

const circleCanvas = document.querySelector("#circle");

const circleCtx = circleCanvas.getContext("2d");

circleCtx.beginPath();
circleCtx.annulus(100, 100, 45, 50, 0, 360);
circleCtx.fill();
