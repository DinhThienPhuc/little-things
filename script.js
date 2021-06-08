const canvas = document.querySelector("#canvas");

const ctx = canvas.getContext("2d");

// ctx.beginPath();
// ctx.moveTo(100, 100);
// ctx.lineTo(200, 100);
// ctx.stroke();

ctx.fillStyle = "green";
const size = 25;

let x = 0;
const id = setInterval(() => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillRect(x, 50, size, size);
  x += size;

  if (x >= canvas.width) {
    x = 0;
  }
}, 50);
