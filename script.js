const annulus = function (
  canvas2D,
  color,
  centerX,
  centerY,
  innerRadius,
  outerRadius,
  startAngle,
  endAngle,
  hoverIndex,
  anticlockwise
) {
  const th1 = (startAngle * Math.PI) / 180;
  const th2 = (endAngle * Math.PI) / 180;
  const startOfOuterArcX = outerRadius * Math.cos(th2) + centerX;
  const startOfOuterArcY = outerRadius * Math.sin(th2) + centerY;

  canvas2D.beginPath();
  canvas2D.arc(centerX, centerY, innerRadius, th1, th2, anticlockwise);
  canvas2D.lineTo(startOfOuterArcX, startOfOuterArcY);
  canvas2D.arc(centerX, centerY, outerRadius, th2, th1, !anticlockwise);
  canvas2D.closePath();
  canvas2D.fillStyle = color;
  canvas2D.fill();
};

const convertData = (data) => {
  let sum = 0;

  for (let i = 0; i < data.length; i++) {
    sum += Number(data[i]["value"]);
  }

  const temp = [];
  const chartData = [];

  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    const percent = ((element.value * 100) / sum).toFixed(2);
    const angleRange = ((element.value * 360) / sum).toFixed(2);
    temp.push({
      ...element,
      percent,
      angleRange,
    });
  }

  for (let i = 0; i < temp.length; i++) {
    const element = temp[i];

    let startAngle = 0;
    for (let j = 0; j < i; j++) {
      startAngle += Number(temp[j].angleRange);
    }

    chartData.push({
      ...element,
      startAngle,
      endAngle:
        i === temp.length - 1 ? 360 : startAngle + Number(element.angleRange),
    });
  }

  return chartData;
};

const drawChart = (circleCtx, chartData, hoverIndex) => {
  circleCtx.clearRect(0, 0, circleCanvas.width, circleCanvas.height);
  circleCtx.beginPath();
  for (let i = 0; i < chartData.length; i++) {
    const element = chartData[i];
    let hoverRadius = { ...radius };

    if (hoverIndex === i) {
      hoverRadius.inner = radius.inner - 3;
      hoverRadius.outer = radius.outer + 3;
    }

    annulus(
      circleCtx,
      element.color,
      circleCenter.x,
      circleCenter.y,
      hoverRadius.inner,
      hoverRadius.outer,
      element.startAngle,
      element.endAngle,
      hoverIndex
    );
  }
};

const circleCenter = { x: 150, y: 80 };
const radius = { inner: 60, outer: 70 };
const radiusHover = { inner: 57, outer: 73 };
const data = [
  { currency: "AAA", value: 12379, color: "#E6007A" },
  { currency: "CHI", value: 3123, color: "#2775C9" },
  { currency: "NASDAQ", value: 9172, color: "#26A17B" },
  { currency: "ASX", value: 76123, color: "#627EEA" },
  { currency: "ASDA", value: 19848, color: "#F7931A" },
];

const chartData = convertData(data);

const circleCanvas = document.querySelector("#circle");
const mouse = { x: 0, y: 0, overPath: null };
const circleCtx = circleCanvas.getContext("2d");

circleCanvas.addEventListener("mousemove", (e) => {
  const currentRadius = Math.sqrt(
    Math.pow(e.offsetX - circleCenter.x, 2),
    Math.pow(e.offsetY - circleCenter.y, 2)
  );

  const angle =
    (Math.atan((e.offsetY - circleCenter.y) / (e.offsetX - circleCenter.x)) *
      360) /
    (Math.PI * 2);

  let realAngle = 0;

  if (e.offsetX >= circleCenter.x) {
    if (e.offsetY > circleCenter.y) {
      realAngle = angle;
    } else {
      realAngle = 360 + angle;
    }
  } else {
    realAngle = 180 + angle;
  }

  if (currentRadius >= radius.inner && currentRadius <= radius.outer) {
    for (let i = 0; i < chartData.length; i++) {
      const element = chartData[i];
      if (realAngle >= element.startAngle && realAngle <= element.endAngle) {
        drawChart(circleCtx, chartData, i);
        break;
      }
    }
  } else {
    drawChart(circleCtx, chartData);
  }
  // console.log(mouse);
  // checkMouseOver(paths);
  // canvas.style.cursor = mouse.overPath ? "pointer" : "default";
});

drawChart(circleCtx, chartData);
