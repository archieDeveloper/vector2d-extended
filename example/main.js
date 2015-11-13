'use strict';

var requestAnimationFrame, gameLoop, canvas, context, init, drawVector2d, color, drawGrid, lengthdirX, lengthdirY, Mouse;

requestAnimationFrame = window.requestAnimationFrame
    || window.webkitRequestAnimationFrame 
    || window.mozRequestAnimationFrame
    || window.oRequestAnimationFrame
    || window.msRequestAnimationFrame
    || function(callback) {
        window.setTimeout(callback, 1000/60)
    };

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

var div = document.createElement('div');
canvas = document.createElement('canvas');
var backgroundCanvas = document.createElement('canvas');
var backgroundContext = backgroundCanvas.getContext('2d');
context = canvas.getContext('2d');

lengthdirX = function(len, dir){
  return Math.cos(dir*Math.PI/180)*len;
}

lengthdirY = function(len, dir){
  return Math.sin(dir*Math.PI/180)*len;
}

drawVector2d = function(color, name, vector, vec2, arrow, contextC) {
  if (arrow == null) {
    arrow = true;
  }
  if (contextC == null) {
    contextC = context;
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
  contextC.beginPath();
  contextC.fillStyle = color;
  contextC.strokeStyle = color;
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

    contextC.save();
    contextC.translate(vx-ax+bx, vy-ay+by);
    contextC.rotate((vecRotate+180*f) * Math.PI / 180);
    contextC.font = "bold 12pt Arial";
    contextC.fillText(name, 10, 14);
    contextC.restore();
    contextC.closePath();
    contextC.beginPath();
  }

  if (arrow) {
    contextC.arc(cx, cy, 1, 0, 2 * Math.PI, false);
    contextC.fill();
  }
  contextC.moveTo(cx, cy);
  contextC.lineTo(vx, vy);
  contextC.lineWidth = 2;
  if (arrow && !vector.isZero()) {
    vecRotate = vector.rotate;
    ax = lengthdirX(5, vecRotate);
    bx = lengthdirX(5, vecRotate+90);
    ay = lengthdirY(5, vecRotate);
    by = lengthdirY(5, vecRotate+90);
    contextC.lineTo(vx-ax-bx, vy-ay-by);
    contextC.moveTo(vx, vy);
    contextC.lineTo(vx-ax+bx, vy-ay+by);
  }
  contextC.stroke();
  contextC.closePath();
}
drawGrid = function() {
  backgroundContext.beginPath();
  backgroundContext.strokeStyle = '#474D5A';
  backgroundContext.lineWidth = 1;
  for(var i = 0; i <= canvas.width/sizeGrid; i++) {
    backgroundContext.moveTo(i*sizeGrid, 0);
    backgroundContext.lineTo(i*sizeGrid, canvas.height);
  }
  for(i = 0; i <= canvas.height/sizeGrid; i++) {
    backgroundContext.moveTo(0, i*sizeGrid);
    backgroundContext.lineTo(canvas.width, i*sizeGrid);
  }
  backgroundContext.stroke();
  backgroundContext.closePath();
}

gameLoop = function loop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  render();
  requestAnimationFrame(gameLoop);
}

init = function() {
  canvas.width = 50*sizeGrid;
  canvas.height = 30*sizeGrid;
  canvas.style.display = 'block';
  canvas.style.position = 'absolute';
  canvas.style.left = 0;
  canvas.style.top = 0;

  backgroundCanvas.width = 50*sizeGrid;
  backgroundCanvas.height = 30*sizeGrid;
  backgroundCanvas.style.display = 'block';
  backgroundCanvas.style.position = 'absolute';
  backgroundCanvas.style.left = 0;
  backgroundCanvas.style.top = 0;
  
  backgroundCanvas.style.backgroundColor = '#2B303B';

  div.style.position = 'relative';
  div.style.width = 50*sizeGrid+'px';
  div.style.height = 30*sizeGrid+'px';
  div.style.margin = '50px auto';
  div.style.border = '2px solid ' + color.black;
  document.body.appendChild(div);
  div.appendChild(backgroundCanvas);
  div.appendChild(canvas);

  drawGrid();
  var vx1 = Vector2d(-canvas.width/2/sizeGrid+1, 0);
  var vx2 = Vector2d(canvas.width/sizeGrid-2, 0);

  var vy1 = Vector2d(0, -canvas.height/2/sizeGrid+1);
  var vy2 = Vector2d(0, canvas.height/sizeGrid-2);
  drawVector2d(color.white, '', vx2, vx1, true, backgroundContext);
  drawVector2d(color.white, '', vy2, vy1, true, backgroundContext);

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
        _this.position.x = e.offsetX == null ? e.layerX : e.offsetX;
        return _this.position.y = e.offsetY == null ? e.layerY : e.offsetY;
      };
    })(this));
    canvas.addEventListener('mousedown', function(e) {
      mousePress[e.which] = true;
      return mouseDown[e.which] = true;
    });
    canvas.addEventListener('mouseup', function(e) {
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

var Keyboard;

Keyboard = (function() {
  var downKeys, instance, onDown, onPress, onUp, pressKeys, resetAll, resetDown, resetPress, resetUp, upKeys;

  pressKeys = {};

  downKeys = {};

  upKeys = {};

  instance = null;

  function Keyboard() {
    window.document.addEventListener('keydown', function(e) {
      e.preventDefault();
      resetUp(e.keyCode);
      onPress(e.keyCode);
      return onDown(e.keyCode);
    });
    window.document.addEventListener('keyup', function(e) {
      resetPress(e.keyCode);
      resetDown(e.keyCode);
      return onUp(e.keyCode);
    });
    window.addEventListener('blur', function() {
      return resetAll();
    });
  }

  Keyboard.getInstance = function() {
    if (instance == null) {
      instance = new Keyboard;
    }
    return instance;
  };

  Keyboard.prototype.isPressed = function(code) {
    return pressKeys[code] != null;
  };

  Keyboard.prototype.isDown = function(code) {
    if ((downKeys[code] != null) && downKeys[code] === true) {
      downKeys[code] = 2;
      return true;
    } else {
      return false;
    }
  };

  Keyboard.prototype.isUp = function(code) {
    if ((upKeys[code] != null) && upKeys[code] === true) {
      upKeys[code] = 2;
      return true;
    } else {
      return false;
    }
  };

  resetAll = function() {
    pressKeys = {};
    downKeys = {};
    return upKeys = {};
  };

  resetUp = function(keyCode) {
    return delete upKeys[keyCode];
  };

  resetDown = function(keyCode) {
    return delete downKeys[keyCode];
  };

  resetPress = function(keyCode) {
    return delete pressKeys[keyCode];
  };

  onDown = function(keyCode) {
    if (downKeys[keyCode] == null) {
      return downKeys[keyCode] = true;
    }
  };

  onUp = function(keyCode) {
    if (upKeys[keyCode] == null) {
      return upKeys[keyCode] = true;
    }
  };

  onPress = function(keyCode) {
    return pressKeys[keyCode] = true;
  };

  return Keyboard;

})();

window.onload = init