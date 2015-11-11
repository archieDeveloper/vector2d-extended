var requestAnimationFrame, render, gameLoop, canvas, context, init, drawVector2d, color;

color = {
    orange: '#E6B428',
    green: 'green',
    red: 'red'
}

canvas = document.createElement('canvas');
context = canvas.getContext('2d');

requestAnimationFrame =  window.requestAnimationFrame
  || window.webkitRequestAnimationFrame
  || window.mozRequestAnimationFrame
  || window.oRequestAnimationFrame
  || window.msRequestAnimationFrame
  || function (callback) {
       window.setTimeout(callback, 1000/60)
     }


var lengthdirX = function(len, dir){
  return Math.cos(dir*Math.PI/180)*len;
}

var lengthdirY = function(len, dir){
  return Math.sin(dir*Math.PI/180)*len;
}

drawVector2d = function(vector, color) {
  cx = canvas.width/2;
  cy = canvas.height/2;
  vx = cx + vector.x;
  vy = cy + vector.y;
  context.strokeStyle = color;
  context.lineWidth = 5;
  context.moveTo(cx, cy);
  context.lineTo(vx, vy);
  context.lineWidth = 2;
  context.lineTo(vx-lengthdirX(5, vector.rotate())-lengthdirX(5, vector.rotate()+90), vy-lengthdirY(5, vector.rotate())-lengthdirY(5, vector.rotate()+90));
  context.moveTo(vx, vy);
  context.lineTo(vx-lengthdirX(5, vector.rotate())+lengthdirX(5, vector.rotate()+90), vy-lengthdirY(5, vector.rotate())+lengthdirY(5, vector.rotate()+90));
  context.stroke();
  context.beginPath();
  context.arc(cx, cy, 1, 0, 2 * Math.PI, false);
  context.fillStyle = color;
  context.fill();
}

var vec1 = Vector2d(100, 50);
var vec2 = Vector2d(58, -5);
var vec3 = vec1
  .clone()
  .add(vec2);

render = function() {
  drawVector2d(vec1, color.orange);
  drawVector2d(vec2, color.red);
  drawVector2d(vec3, color.green);
}

gameLoop = function loop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  render();
  requestAnimationFrame(loop);
}

init = function() {
  canvas.width = 800;
  canvas.height = 600;
  canvas.style.border = '2px solid #ddd';
  canvas.style.margin = '50px auto';
  canvas.style.display = 'block';
  document.body.appendChild(canvas);
  gameLoop();
}

window.onload = init