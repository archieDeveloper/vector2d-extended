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