(function() {
  'use strict';
  var Vector2d;

  Vector2d = (function() {
    function Vector2d(x, y) {
      if (!(this instanceof Vector2d)) {
        return new Vector2d(x, y);
      }
      this.x = x || 0;
      this.y = y || 0;
    }

    Vector2d.zero = function() {
      return new Vector2d;
    };

    Vector2d.one = function() {
      return new Vector2d(1, 1);
    };

    Vector2d.up = function() {
      return new Vector2d(0, -1);
    };

    Vector2d.down = function() {
      return new Vector2d(0, 1);
    };

    Vector2d.right = function() {
      return new Vector2d(1, 0);
    };

    Vector2d.left = function() {
      return new Vector2d(-1, 0);
    };

    Vector2d.clampMagnitude = function(a, maxLength) {
      var b;
      b = a.clone();
      if (b.magnitudeSquared > maxLength * maxLength) {
        b.normalize().multiply(maxLength);
      }
      return b;
    };

    Vector2d.lerp = function(a, b, l) {
      if (l < 0) {
        l = 0;
      }
      if (l > 1) {
        l = 1;
      }
      return new Vector2d(a.x + (b.x - a.x) * l, a.y + (b.y - a.y) * l);
    };

    Vector2d.scale = function(a, b) {
      return new Vector2d(a.x * b.x, a.y * b.y);
    };

    Vector2d.scaleX = function(a, b) {
      return new Vector2d(a.x * b.x, 0);
    };

    Vector2d.scaleY = function(a, b) {
      return new Vector2d(0, a.y * b.y);
    };

    Vector2d.add = function(a, b) {
      return new Vector2d(a.x + b.x, a.y + b.y);
    };

    Vector2d.addX = function(a, b) {
      return new Vector2d(a.x + b.x, 0);
    };

    Vector2d.addY = function(a, b) {
      return new Vector2d(0, a.y + b.y);
    };

    Vector2d.subtract = function(a, b) {
      return new Vector2d(a.x - b.x, a.y - b.y);
    };

    Vector2d.subtractX = function(a, b) {
      return new Vector2d(a.x - b.x, 0);
    };

    Vector2d.subtractY = function(a, b) {
      return new Vector2d(0, a.y - b.y);
    };

    Vector2d.multiply = function(a, scalar) {
      return new Vector2d(a.x * scalar, a.y * scalar);
    };

    Vector2d.multiplyX = function(a, scalar) {
      return new Vector2d(a.x * scalar, a.y);
    };

    Vector2d.multiplyY = function(a, scalar) {
      return new Vector2d(a.x, a.y * scalar);
    };

    Vector2d.divide = function(a, scalar) {
      return new Vector2d(a.x / scalar, a.y / scalar);
    };

    Vector2d.divideX = function(a, scalar) {
      return new Vector2d(a.x / scalar, a.y);
    };

    Vector2d.divideY = function(a, scalar) {
      return new Vector2d(a.x, a.y / scalar);
    };

    Vector2d.normalize = function(a) {
      var magnitude;
      magnitude = a.magnitude;
      return new Vector2d(a.x / magnitude, a.y / magnitude);
    };

    Vector2d.project = function(a, b) {
      var c;
      c = ((a.x * b.x) + (a.y * b.y)) / ((b.x * b.x) + (b.y * b.y));
      return new Vector2d(b.x * c, b.y * c);
    };

    Vector2d.round = function(a) {
      return new Vector2d(Math.round(a.x), Math.round(a.y));
    };

    Vector2d.roundX = function(a) {
      return new Vector2d(Math.round(a.x), a.y);
    };

    Vector2d.roundY = function(a) {
      return new Vector2d(a.x, Math.round(a.y));
    };

    Vector2d.invert = function(a) {
      return new Vector2d(-a.x, -a.y);
    };

    Vector2d.invertX = function(a) {
      return new Vector2d(-a.x, a.y);
    };

    Vector2d.invertY = function(a) {
      return new Vector2d(a.x, -a.y);
    };

    Vector2d.prototype.add = function(b) {
      this.addX(b);
      this.addY(b);
      return this;
    };

    Vector2d.prototype.addX = function(b) {
      this.x += b.x;
      return this;
    };

    Vector2d.prototype.addY = function(b) {
      this.y += b.y;
      return this;
    };

    Vector2d.prototype.subtract = function(b) {
      this.subtractX(b);
      this.subtractY(b);
      return this;
    };

    Vector2d.prototype.subtractX = function(b) {
      this.x -= b.x;
      return this;
    };

    Vector2d.prototype.subtractY = function(b) {
      this.y -= b.y;
      return this;
    };

    Vector2d.prototype.multiply = function(scalar) {
      this.multiplyX(scalar);
      this.multiplyY(scalar);
      return this;
    };

    Vector2d.prototype.multiplyX = function(scalar) {
      this.x *= scalar;
      return this;
    };

    Vector2d.prototype.multiplyY = function(scalar) {
      this.y *= scalar;
      return this;
    };

    Vector2d.prototype.divide = function(scalar) {
      this.divideX(scalar);
      this.divideY(scalar);
      return this;
    };

    Vector2d.prototype.divideX = function(scalar) {
      this.x /= scalar;
      return this;
    };

    Vector2d.prototype.divideY = function(scalar) {
      this.y /= scalar;
      return this;
    };

    Vector2d.prototype.normalize = function() {
      this.length = 1;
      return this;
    };

    Vector2d.prototype.project = function(b) {
      var c;
      c = ((this.x * b.x) + (this.y * b.y)) / ((b.x * b.x) + (b.y * b.y));
      this.x = b.x * c;
      this.y = b.y * c;
      return this;
    };

    Vector2d.prototype.round = function() {
      this.roundX();
      this.roundY();
      return this;
    };

    Vector2d.prototype.roundX = function() {
      this.x = Math.round(this.x);
      return this;
    };

    Vector2d.prototype.roundY = function() {
      this.y = Math.round(this.y);
      return this;
    };

    Vector2d.prototype.zero = function() {
      this.zeroX();
      this.zeroY();
      return this;
    };

    Vector2d.prototype.zeroX = function() {
      this.x = 0;
      return this;
    };

    Vector2d.prototype.zeroY = function() {
      this.y = 0;
      return this;
    };

    Vector2d.prototype.clone = function() {
      return new Vector2d(this.x, this.y);
    };

    Vector2d.prototype.equate = function(b) {
      this.equateX(b);
      this.equateY(b);
      return this;
    };

    Vector2d.prototype.equateX = function(b) {
      this.x = b.x;
      return this;
    };

    Vector2d.prototype.equateY = function(b) {
      this.y = b.y;
      return this;
    };

    Vector2d.prototype.invert = function() {
      this.invertX();
      this.invertY();
      return this;
    };

    Vector2d.prototype.invertX = function() {
      this.x = -this.x;
      return this;
    };

    Vector2d.prototype.invertY = function() {
      this.y = -this.y;
      return this;
    };

    Vector2d.prototype.lerp = function(b, l) {
      if (l < 0) {
        l = 0;
      }
      if (l > 1) {
        l = 1;
      }
      this.x = this.x + (b.x - this.x) * l;
      this.y = this.y + (b.y - this.y) * l;
      return this;
    };

    Vector2d.prototype.scale = function(b) {
      this.scaleX(b);
      this.scaleY(b);
      return this;
    };

    Vector2d.prototype.scaleX = function(b) {
      this.x *= b.x;
      return this;
    };

    Vector2d.prototype.scaleY = function(b) {
      this.y *= b.y;
      return this;
    };

    Vector2d.prototype.clampMagnitude = function(maxLength) {
      if (this.magnitudeSquared > maxLength * maxLength) {
        this.normalize().multiply(maxLength);
      }
      return this;
    };

    Object.defineProperty(Vector2d.prototype, 'magnitude', {
      get: function() {
        return Math.sqrt(this.magnitudeSquared);
      },
      set: function(value) {
        var magnitude;
        magnitude = this.magnitude;
        this.x = (this.x / magnitude) * value;
        this.y = (this.y / magnitude) * value;
        return value;
      }
    });

    Object.defineProperty(Vector2d.prototype, 'magnitudeSquared', {
      get: function() {
        return this.x * this.x + this.y * this.y;
      },
      set: function(value) {
        this.length = Math.sqrt(value);
        return value;
      }
    });

    Object.defineProperty(Vector2d.prototype, 'length', {
      get: function() {
        return this.magnitude;
      },
      set: function(value) {
        return this.magnitude = value;
      }
    });

    Object.defineProperty(Vector2d.prototype, 'lengthSquared', {
      get: function() {
        return this.magnitudeSquared;
      },
      set: function(value) {
        return this.magnitudeSquared = value;
      }
    });

    Object.defineProperty(Vector2d.prototype, 'rotate', {
      get: function() {
        return Math.atan2(this.y, this.x) * 180 / Math.PI;
      },
      set: function(dir) {
        var len;
        len = this.magnitude;
        this.x = Math.cos(dir * Math.PI / 180) * len;
        this.y = Math.sin(dir * Math.PI / 180) * len;
        return dir;
      }
    });

    Vector2d.prototype.dot = function(b) {
      return this.x * b.x + this.y * b.y;
    };

    Vector2d.prototype.cross = function(b) {
      return this.x * b.y - this.y * b.x;
    };

    Vector2d.prototype.distance = function(b) {
      return Math.sqrt(distanceSquared(b));
    };

    Vector2d.prototype.distanceSquared = function(b) {
      var dx, dy;
      dx = this.x - b.x;
      dy = this.y - b.y;
      return dx * dx + dy * dy;
    };

    Vector2d.prototype.angle = function(b) {
      var aMagnitude, bMagnitude, dot;
      aMagnitude = this.magnitude;
      bMagnitude = b.magnitude;
      dot = (this.x / aMagnitude) * (b.x / bMagnitude) + (this.y / aMagnitude) * (b.y / bMagnitude);
      if (dot < -1) {
        dot = -1;
      }
      if (dot > 1) {
        dot = 1;
      }
      return Math.acos(dot) * 57.29578;
    };

    Vector2d.prototype.isZero = function() {
      return this.isZeroX() && this.isZeroY();
    };

    Vector2d.prototype.isZeroX = function() {
      return this.x === 0;
    };

    Vector2d.prototype.isZeroY = function() {
      return this.y === 0;
    };

    Vector2d.prototype.isEqual = function(b) {
      return this.isEqualX(b) && this.isEqualY(b);
    };

    Vector2d.prototype.isEqualX = function(b) {
      return this.x === b.x;
    };

    Vector2d.prototype.isEqualY = function(b) {
      return this.y === b.y;
    };

    Vector2d.prototype.isNaN = function() {
      return this.isNaNX() || this.isNaNY;
    };

    Vector2d.prototype.isNaNX = function() {
      return isNaN(this.x);
    };

    Vector2d.prototype.isNaNY = function() {
      return isNaN(this.y);
    };

    Vector2d.prototype.isFinite = function() {
      return this.isFiniteX() || this.isFiniteY();
    };

    Vector2d.prototype.isFiniteX = function() {
      return isFinite(this.x);
    };

    Vector2d.prototype.isFiniteY = function() {
      return isFinite(this.y);
    };

    Vector2d.prototype.isEqualRotate = function(b) {
      return this.rotate.toFixed(2) === b.rotate.toFixed(2);
    };

    return Vector2d;

  })();

  if ((typeof module !== "undefined" && module !== null) && (module.exports != null)) {
    module.exports = Vector2d;
  } else {
    window.Vector2d = Vector2d;
  }

}).call(this);
