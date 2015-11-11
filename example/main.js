'use strict';

var requestAnimationFrame, gameLoop, canvas, context, init, drawVector2d, color, drawGrid;

color = {
    orange: '#AC6F5E',
    green: '#A3BE81',
    black: '#2B303B',
    blue: '#8FA1B3',
    yellow: '#EBCB7F',
    pink: '#B48E9D',
    white: '#C0C5CE'
}

canvas = document.createElement('canvas');
context = canvas.getContext('2d');

var lengthdirX = function(len, dir){
  return Math.cos(dir*Math.PI/180)*len;
}

var lengthdirY = function(len, dir){
  return Math.sin(dir*Math.PI/180)*len;
}

drawVector2d = function(color, vector, vec2) {
  var cx, cy, vx, vy;
  cx = canvas.width/2;
  cy = canvas.height/2;
  if (vec2 != null) {
    cx += vec2.x;
    cy += vec2.y;
  }
  vx = cx + vector.x;
  vy = cy + vector.y;
  context.beginPath();
  context.arc(cx, cy, 1, 0, 2 * Math.PI, false);
  context.fillStyle = color;
  context.fill();
  context.strokeStyle = color;
  context.moveTo(cx, cy);
  context.lineTo(vx, vy);
  context.lineWidth = 2;
  if (!vector.isZero()) {
    var vecRotate, ax, bx, ay, by;
    vecRotate = vector.rotate();
    ax = lengthdirX(5, vecRotate);
    bx = lengthdirX(5, vecRotate+90);
    ay = lengthdirY(5, vecRotate);
    by = lengthdirY(5, vecRotate+90);
    context.lineTo(vx-ax-bx, vy-ay-by);
    context.moveTo(vx, vy);
    context.lineTo(vx-ax+bx, vy-ay+by);
  }
  context.stroke();
  context.closePath();
}

drawGrid = function() {
  context.beginPath();
  context.strokeStyle = '#474D5A';
  context.lineWidth = 1;
  for(var i = 0; i <= canvas.width/20; i++) {
    context.moveTo(i*20, 0);
    context.lineTo(i*20, canvas.height);
  }
  for(i = 0; i <= canvas.height/20; i++) {
    context.moveTo(0, i*20);
    context.lineTo(canvas.width, i*20);
  }
  context.stroke();
  context.closePath();
}

gameLoop = function loop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  drawGrid();
  render();
}

init = function() {
  canvas.width = 800;
  canvas.height = 600;
  canvas.style.border = '2px solid ' + color.white;
  canvas.style.margin = '50px auto';
  canvas.style.display = 'block';
  canvas.style.backgroundColor = '#2B303B';
  document.body.appendChild(canvas);
  gameLoop();
}

window.onload = init