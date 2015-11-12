'use strict';

var requestAnimationFrame, gameLoop, canvas, context, init, drawVector2d, color, drawGrid, lengthdirX, lengthdirY, Mouse;

var sizeGrid = 20;
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

lengthdirX = function(len, dir){
  return Math.cos(dir*Math.PI/180)*len;
}

lengthdirY = function(len, dir){
  return Math.sin(dir*Math.PI/180)*len;
}

drawVector2d = function(color, name, vector, vec2, arrow) {
  if (arrow == null) {
    arrow = true;
  }
  var cx, cy, vx, vy;
  cx = canvas.width/2;
  cy = canvas.height/2;
  if (vec2 != null) {
    cx += vec2.x*sizeGrid;
    cy += vec2.y*sizeGrid;
  }
  vx = cx + vector.x*sizeGrid;
  vy = cy + vector.y*sizeGrid;
  context.beginPath();
  if (!vector.isZero()) {
    var vecRotate, ax, bx, ay, by, vecLength, textW;
    vecRotate = vector.rotate;
    vecLength = vector.magnitude*sizeGrid;
    textW = name.length*9+sizeGrid;

    var f = 0;

    if (vecRotate < -90 || vecRotate >= 90) {
      f = 1;
    }

    ax = lengthdirX(vecLength/2-(textW/2)*(-1+f+f), (vecRotate));
    bx = lengthdirX(25*(-1+f+f), (vecRotate)+90);
    ay = lengthdirY(vecLength/2-(textW/2)*(-1+f+f), (vecRotate));
    by = lengthdirY(25*(-1+f+f), (vecRotate)+90);

    context.save();
    context.fillStyle = "rgba(0,0,0,0.5)";

    context.translate(vx-ax+bx, vy-ay+by);
    context.rotate((vecRotate+180*f) * Math.PI / 180);

    context.fillStyle = color;
    context.font = "bold 12pt Arial";
    context.fillText(name, 10, 14);
    context.restore();
    context.closePath();
    context.beginPath();
  }

  if (arrow) {
    context.arc(cx, cy, 1, 0, 2 * Math.PI, false);
    context.fillStyle = color;
    context.fill();
  }
  context.strokeStyle = color;
  context.moveTo(cx, cy);
  context.lineTo(vx, vy);
  context.lineWidth = 2;
  if (arrow && !vector.isZero()) {
    vecRotate = vector.rotate;
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
  for(var i = 0; i <= canvas.width/sizeGrid; i++) {
    context.moveTo(i*sizeGrid, 0);
    context.lineTo(i*sizeGrid, canvas.height);
  }
  for(i = 0; i <= canvas.height/sizeGrid; i++) {
    context.moveTo(0, i*sizeGrid);
    context.lineTo(canvas.width, i*sizeGrid);
  }
  context.stroke();
  context.closePath();
}

gameLoop = function loop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  canvas.width = 50*sizeGrid;
  canvas.height = 30*sizeGrid;
  drawGrid();

  var vx1 = Vector2d(-canvas.width/2/sizeGrid+1, 0);
  var vx2 = Vector2d(canvas.width/sizeGrid-2, 0);

  var vy1 = Vector2d(0, -canvas.height/2/sizeGrid+1);
  var vy2 = Vector2d(0, canvas.height/sizeGrid-2);
  drawVector2d(color.white, '', vx2, vx1);
  drawVector2d(color.white, '', vy2, vy1);
  render();
}

init = function() {
  canvas.style.border = '2px solid ' + color.black;
  canvas.style.margin = '50px auto';
  canvas.style.display = 'block';
  canvas.style.backgroundColor = '#2B303B';
  document.body.appendChild(canvas);
  gameLoop();
}

var selectExample = 0;

var nextExample = function() {
  selectExample += 1;
  if (selectExample >= examples.length) {
    selectExample = 0;
  }
  gameLoop();
}

var prevExample = function() {
  selectExample -= 1;
  if (selectExample <= -1) {
    selectExample = examples.length;
  }
  gameLoop();
}

var render = function() {
  examples[selectExample]();
}

Mouse = (function() {
  var instance, mouseDown, mousePress, mouseUp;

  mousePress = {};

  mouseDown = {};

  mouseUp = {};

  instance = null;

  Mouse.prototype.position = new Vector2d(0, 0);

  function Mouse() {
    canvas.addEventListener('mousemove', (function(_this) {
      return function(e) {
        gameLoop();
        _this.position.x = e.offsetX == null ? e.layerX : e.offsetX;
        return _this.position.y = e.offsetY == null ? e.layerY : e.offsetY;
      };
    })(this));
    canvas.addEventListener('mouseDown', function(e) {
      mousePress[e.which] = true;
      return mouseDown[e.which] = true;
    });
    canvas.addEventListener('mouseUp', function(e) {
      delete mousePress[e.which];
      return mouseUp[e.which] = true;
    });
    canvas.oncontextmenu = function() {
      return false;
    };
  }

  Mouse.getInstance = function() {
    if (instance == null) {
      instance = new Mouse;
    }
    return instance;
  };
  Mouse.prototype.isPressed = function(code) {
    return mousePress[code] != null;
  };

  Mouse.prototype.isDown = function(code) {
    return mouseDown[code] != null;
  };

  Mouse.prototype.isUp = function(code) {
    return mouseUp[code] != null;
  };

  return Mouse;

})();

window.onload = init