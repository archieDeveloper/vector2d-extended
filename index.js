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
      if (!(a instanceof Vector2d) || typeof maxLength !== 'number') {
        throw new TypeError;
      }
      b = a.clone();
      if (b.magnitudeSquared > maxLength * maxLength) {
        b.magnitude = maxLength;
      }
      return b;
    };

    Vector2d.lerp = function(a, b, l) {
      if (!(a instanceof Vector2d) || !(b instanceof Vector2d) || typeof l !== 'number') {
        throw new TypeError;
      }
      if (l < 0) {
        l = 0;
      }
      if (l > 1) {
        l = 1;
      }
      return new Vector2d(a.x + (b.x - a.x) * l, a.y + (b.y - a.y) * l);
    };

    Vector2d.scale = function() {
      var argumentsLength, i, j, ref, vx, vy;
      argumentsLength = arguments.length;
      if (argumentsLength < 2) {
        throw new Error;
      }
      if (!(arguments[0] instanceof Vector2d)) {
        throw new TypeError;
      }
      vx = arguments[0].x;
      vy = arguments[0].y;
      for (i = j = 1, ref = argumentsLength; 1 <= ref ? j < ref : j > ref; i = 1 <= ref ? ++j : --j) {
        if (!(arguments[i] instanceof Vector2d)) {
          throw new TypeError;
        }
        vx *= arguments[i].x;
        vy *= arguments[i].y;
      }
      return new Vector2d(vx, vy);
    };

    Vector2d.scaleX = function() {
      var argumentsLength, i, j, ref, vx;
      argumentsLength = arguments.length;
      if (argumentsLength < 2) {
        throw new Error;
      }
      if (!(arguments[0] instanceof Vector2d)) {
        throw new TypeError;
      }
      vx = arguments[0].x;
      for (i = j = 1, ref = argumentsLength; 1 <= ref ? j < ref : j > ref; i = 1 <= ref ? ++j : --j) {
        if (!(arguments[i] instanceof Vector2d)) {
          throw new TypeError;
        }
        vx *= arguments[i].x;
      }
      return new Vector2d(vx, 0);
    };

    Vector2d.scaleY = function() {
      var argumentsLength, i, j, ref, vy;
      argumentsLength = arguments.length;
      if (argumentsLength < 2) {
        throw new Error;
      }
      if (!(arguments[0] instanceof Vector2d)) {
        throw new TypeError;
      }
      vy = arguments[0].y;
      for (i = j = 1, ref = argumentsLength; 1 <= ref ? j < ref : j > ref; i = 1 <= ref ? ++j : --j) {
        if (!(arguments[i] instanceof Vector2d)) {
          throw new TypeError;
        }
        vy *= arguments[i].y;
      }
      return new Vector2d(0, vy);
    };

    Vector2d.add = function() {
      var argumentsLength, i, j, ref, vx, vy;
      argumentsLength = arguments.length;
      if (argumentsLength < 2) {
        throw new Error;
      }
      if (!(arguments[0] instanceof Vector2d)) {
        throw new TypeError;
      }
      vx = arguments[0].x;
      vy = arguments[0].y;
      for (i = j = 1, ref = argumentsLength; 1 <= ref ? j < ref : j > ref; i = 1 <= ref ? ++j : --j) {
        if (!(arguments[i] instanceof Vector2d)) {
          throw new TypeError;
        }
        vx += arguments[i].x;
        vy += arguments[i].y;
      }
      return new Vector2d(vx, vy);
    };

    Vector2d.addX = function() {
      var argumentsLength, i, j, ref, vx;
      argumentsLength = arguments.length;
      if (argumentsLength < 2) {
        throw new Error;
      }
      if (!(arguments[0] instanceof Vector2d)) {
        throw new TypeError;
      }
      vx = arguments[0].x;
      for (i = j = 1, ref = argumentsLength; 1 <= ref ? j < ref : j > ref; i = 1 <= ref ? ++j : --j) {
        if (!(arguments[i] instanceof Vector2d)) {
          throw new TypeError;
        }
        vx += arguments[i].x;
      }
      return new Vector2d(vx, 0);
    };

    Vector2d.addY = function() {
      var argumentsLength, i, j, ref, vy;
      argumentsLength = arguments.length;
      if (argumentsLength < 2) {
        throw new Error;
      }
      if (!(arguments[0] instanceof Vector2d)) {
        throw new TypeError;
      }
      vy = arguments[0].y;
      for (i = j = 1, ref = argumentsLength; 1 <= ref ? j < ref : j > ref; i = 1 <= ref ? ++j : --j) {
        if (!(arguments[i] instanceof Vector2d)) {
          throw new TypeError;
        }
        vy += arguments[i].y;
      }
      return new Vector2d(0, vy);
    };

    Vector2d.subtract = function() {
      var argumentsLength, i, j, ref, vx, vy;
      argumentsLength = arguments.length;
      if (argumentsLength < 2) {
        throw new Error;
      }
      if (!(arguments[0] instanceof Vector2d)) {
        throw new TypeError;
      }
      vx = arguments[0].x;
      vy = arguments[0].y;
      for (i = j = 1, ref = argumentsLength; 1 <= ref ? j < ref : j > ref; i = 1 <= ref ? ++j : --j) {
        if (!(arguments[i] instanceof Vector2d)) {
          throw new TypeError;
        }
        vx -= arguments[i].x;
        vy -= arguments[i].y;
      }
      return new Vector2d(vx, vy);
    };

    Vector2d.subtractX = function() {
      var argumentsLength, i, j, ref, vx;
      argumentsLength = arguments.length;
      if (argumentsLength < 2) {
        throw new Error;
      }
      if (!(arguments[0] instanceof Vector2d)) {
        throw new TypeError;
      }
      vx = arguments[0].x;
      for (i = j = 1, ref = argumentsLength; 1 <= ref ? j < ref : j > ref; i = 1 <= ref ? ++j : --j) {
        if (!(arguments[i] instanceof Vector2d)) {
          throw new TypeError;
        }
        vx -= arguments[i].x;
      }
      return new Vector2d(vx, 0);
    };

    Vector2d.subtractY = function() {
      var argumentsLength, i, j, ref, vy;
      argumentsLength = arguments.length;
      if (argumentsLength < 2) {
        throw new Error;
      }
      if (!(arguments[0] instanceof Vector2d)) {
        throw new TypeError;
      }
      vy = arguments[0].x;
      for (i = j = 1, ref = argumentsLength; 1 <= ref ? j < ref : j > ref; i = 1 <= ref ? ++j : --j) {
        if (!(arguments[i] instanceof Vector2d)) {
          throw new TypeError;
        }
        vy -= arguments[i].y;
      }
      return new Vector2d(0, vy);
    };

    Vector2d.multiply = function() {
      var argumentsLength, i, j, ref, vx, vy;
      argumentsLength = arguments.length;
      if (argumentsLength < 2) {
        throw new Error;
      }
      if (!(arguments[0] instanceof Vector2d)) {
        throw new TypeError;
      }
      vx = arguments[0].x;
      vy = arguments[0].y;
      for (i = j = 1, ref = argumentsLength; 1 <= ref ? j < ref : j > ref; i = 1 <= ref ? ++j : --j) {
        if (typeof arguments[i] !== "number") {
          throw new TypeError;
        }
        vx *= arguments[i];
        vy *= arguments[i];
      }
      return new Vector2d(vx, vy);
    };

    Vector2d.multiplyX = function() {
      var argumentsLength, i, j, ref, vx, vy;
      argumentsLength = arguments.length;
      if (argumentsLength < 2) {
        throw new Error;
      }
      if (!(arguments[0] instanceof Vector2d)) {
        throw new TypeError;
      }
      vx = arguments[0].x;
      vy = arguments[0].y;
      for (i = j = 1, ref = argumentsLength; 1 <= ref ? j < ref : j > ref; i = 1 <= ref ? ++j : --j) {
        if (typeof arguments[i] !== "number") {
          throw new TypeError;
        }
        vx *= arguments[i];
      }
      return new Vector2d(vx, vy);
    };

    Vector2d.multiplyY = function() {
      var argumentsLength, i, j, ref, vx, vy;
      argumentsLength = arguments.length;
      if (argumentsLength < 2) {
        throw new Error;
      }
      if (!(arguments[0] instanceof Vector2d)) {
        throw new TypeError;
      }
      vx = arguments[0].x;
      vy = arguments[0].y;
      for (i = j = 1, ref = argumentsLength; 1 <= ref ? j < ref : j > ref; i = 1 <= ref ? ++j : --j) {
        if (typeof arguments[i] !== "number") {
          throw new TypeError;
        }
        vx *= arguments[i];
      }
      return new Vector2d(vx, vy);
    };

    Vector2d.divide = function() {
      var argumentsLength, i, j, ref, vx, vy;
      argumentsLength = arguments.length;
      if (argumentsLength < 2) {
        throw new Error;
      }
      if (!(arguments[0] instanceof Vector2d)) {
        throw new TypeError;
      }
      vx = arguments[0].x;
      vy = arguments[0].y;
      for (i = j = 1, ref = argumentsLength; 1 <= ref ? j < ref : j > ref; i = 1 <= ref ? ++j : --j) {
        if (typeof arguments[i] !== "number") {
          throw new TypeError;
        }
        vx /= arguments[i];
        vy /= arguments[i];
      }
      return new Vector2d(vx, vy);
    };

    Vector2d.divideX = function() {
      var argumentsLength, i, j, ref, vx, vy;
      argumentsLength = arguments.length;
      if (argumentsLength < 2) {
        throw new Error;
      }
      if (!(arguments[0] instanceof Vector2d)) {
        throw new TypeError;
      }
      vx = arguments[0].x;
      vy = arguments[0].y;
      for (i = j = 1, ref = argumentsLength; 1 <= ref ? j < ref : j > ref; i = 1 <= ref ? ++j : --j) {
        if (typeof arguments[i] !== "number") {
          throw new TypeError;
        }
        vx /= arguments[i];
      }
      return new Vector2d(vx, vy);
    };

    Vector2d.divideY = function() {
      var argumentsLength, i, j, ref, vx, vy;
      argumentsLength = arguments.length;
      if (argumentsLength < 2) {
        throw new Error;
      }
      if (!(arguments[0] instanceof Vector2d)) {
        throw new TypeError;
      }
      vx = arguments[0].x;
      vy = arguments[0].y;
      for (i = j = 1, ref = argumentsLength; 1 <= ref ? j < ref : j > ref; i = 1 <= ref ? ++j : --j) {
        if (typeof arguments[i] !== "number") {
          throw new TypeError;
        }
        vy /= arguments[i];
      }
      return new Vector2d(vx, vy);
    };

    Vector2d.normalize = function(a) {
      var magnitude;
      if (!(a instanceof Vector2d)) {
        throw new TypeError;
      }
      magnitude = a.magnitude;
      return new Vector2d(a.x / magnitude, a.y / magnitude);
    };

    Vector2d.project = function(a, b) {
      var c;
      if (!(a instanceof Vector2d) || !(b instanceof Vector2d)) {
        throw new TypeError;
      }
      c = ((a.x * b.x) + (a.y * b.y)) / ((b.x * b.x) + (b.y * b.y));
      return new Vector2d(b.x * c, b.y * c);
    };

    Vector2d.round = function(a) {
      if (!(a instanceof Vector2d)) {
        throw new TypeError;
      }
      return new Vector2d(Math.round(a.x), Math.round(a.y));
    };

    Vector2d.roundX = function(a) {
      if (!(a instanceof Vector2d)) {
        throw new TypeError;
      }
      return new Vector2d(Math.round(a.x), a.y);
    };

    Vector2d.roundY = function(a) {
      if (!(a instanceof Vector2d)) {
        throw new TypeError;
      }
      return new Vector2d(a.x, Math.round(a.y));
    };

    Vector2d.invert = function(a) {
      if (!(a instanceof Vector2d)) {
        throw new TypeError;
      }
      return new Vector2d(-a.x, -a.y);
    };

    Vector2d.invertX = function(a) {
      if (!(a instanceof Vector2d)) {
        throw new TypeError;
      }
      return new Vector2d(-a.x, a.y);
    };

    Vector2d.invertY = function(a) {
      if (!(a instanceof Vector2d)) {
        throw new TypeError;
      }
      return new Vector2d(a.x, -a.y);
    };

    Vector2d.prototype.add = function() {
      var argumentsLength, i, j, ref;
      argumentsLength = arguments.length;
      if (argumentsLength < 1) {
        throw new Error;
      }
      for (i = j = 0, ref = argumentsLength; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
        if (!(arguments[i] instanceof Vector2d)) {
          throw new TypeError;
        }
        this.x += arguments[i].x;
        this.y += arguments[i].y;
      }
      return this;
    };

    Vector2d.prototype.addX = function() {
      var argumentsLength, i, j, ref;
      argumentsLength = arguments.length;
      if (argumentsLength < 1) {
        throw new Error;
      }
      for (i = j = 0, ref = argumentsLength; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
        if (!(arguments[i] instanceof Vector2d)) {
          throw new TypeError;
        }
        this.x += arguments[i].x;
      }
      return this;
    };

    Vector2d.prototype.addY = function() {
      var argumentsLength, i, j, ref;
      argumentsLength = arguments.length;
      if (argumentsLength < 1) {
        throw new Error;
      }
      for (i = j = 0, ref = argumentsLength; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
        if (!(arguments[i] instanceof Vector2d)) {
          throw new TypeError;
        }
        this.y += arguments[i].y;
      }
      return this;
    };

    Vector2d.prototype.subtract = function(b) {
      var argumentsLength, i, j, ref;
      argumentsLength = arguments.length;
      if (argumentsLength < 1) {
        throw new Error;
      }
      for (i = j = 0, ref = argumentsLength; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
        if (!(arguments[i] instanceof Vector2d)) {
          throw new TypeError;
        }
        this.x -= arguments[i].x;
        this.y -= arguments[i].y;
      }
      return this;
    };

    Vector2d.prototype.subtractX = function(b) {
      var argumentsLength, i, j, ref;
      argumentsLength = arguments.length;
      if (argumentsLength < 1) {
        throw new Error;
      }
      for (i = j = 0, ref = argumentsLength; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
        if (!(arguments[i] instanceof Vector2d)) {
          throw new TypeError;
        }
        this.x += arguments[i].x;
      }
      return this;
    };

    Vector2d.prototype.subtractY = function(b) {
      var argumentsLength, i, j, ref;
      argumentsLength = arguments.length;
      if (argumentsLength < 1) {
        throw new Error;
      }
      for (i = j = 0, ref = argumentsLength; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
        if (!(arguments[i] instanceof Vector2d)) {
          throw new TypeError;
        }
        this.y += arguments[i].y;
      }
      return this;
    };

    Vector2d.prototype.multiply = function(scalar) {
      var argumentsLength, i, j, ref;
      argumentsLength = arguments.length;
      if (argumentsLength < 1) {
        throw new Error;
      }
      for (i = j = 0, ref = argumentsLength; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
        if (typeof arguments[i] !== 'number') {
          throw new TypeError;
        }
        this.x *= arguments[i];
        this.y *= arguments[i];
      }
      return this;
    };

    Vector2d.prototype.multiplyX = function(scalar) {
      var argumentsLength, i, j, ref;
      argumentsLength = arguments.length;
      if (argumentsLength < 1) {
        throw new Error;
      }
      for (i = j = 0, ref = argumentsLength; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
        if (typeof arguments[i] !== 'number') {
          throw new TypeError;
        }
        this.x *= arguments[i];
      }
      return this;
    };

    Vector2d.prototype.multiplyY = function(scalar) {
      var argumentsLength, i, j, ref;
      argumentsLength = arguments.length;
      if (argumentsLength < 1) {
        throw new Error;
      }
      for (i = j = 0, ref = argumentsLength; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
        if (typeof arguments[i] !== 'number') {
          throw new TypeError;
        }
        this.y *= arguments[i];
      }
      return this;
    };

    Vector2d.prototype.divide = function(scalar) {
      var argumentsLength, i, j, ref;
      argumentsLength = arguments.length;
      if (argumentsLength < 1) {
        throw new Error;
      }
      for (i = j = 0, ref = argumentsLength; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
        if (typeof arguments[i] !== 'number') {
          throw new TypeError;
        }
        this.x /= arguments[i];
        this.y /= arguments[i];
      }
      return this;
    };

    Vector2d.prototype.divideX = function(scalar) {
      var argumentsLength, i, j, ref;
      argumentsLength = arguments.length;
      if (argumentsLength < 1) {
        throw new Error;
      }
      for (i = j = 0, ref = argumentsLength; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
        if (typeof arguments[i] !== 'number') {
          throw new TypeError;
        }
        this.x /= arguments[i];
      }
      return this;
    };

    Vector2d.prototype.divideY = function(scalar) {
      var argumentsLength, i, j, ref;
      argumentsLength = arguments.length;
      if (argumentsLength < 1) {
        throw new Error;
      }
      for (i = j = 0, ref = argumentsLength; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
        if (typeof arguments[i] !== 'number') {
          throw new TypeError;
        }
        this.y /= arguments[i];
      }
      return this;
    };

    Vector2d.prototype.normalize = function() {
      this.length = 1;
      return this;
    };

    Vector2d.prototype.project = function(b) {
      var c;
      if (!(b instanceof Vector2d)) {
        throw new TypeError;
      }
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
      if (!(b instanceof Vector2d)) {
        throw new TypeError;
      }
      this.equateX(b);
      this.equateY(b);
      return this;
    };

    Vector2d.prototype.equateX = function(b) {
      if (!(b instanceof Vector2d)) {
        throw new TypeError;
      }
      this.x = b.x;
      return this;
    };

    Vector2d.prototype.equateY = function(b) {
      if (!(b instanceof Vector2d)) {
        throw new TypeError;
      }
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
      if (!(b instanceof Vector2d) || typeof b !== 'number') {
        throw new TypeError;
      }
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
      if (!(b instanceof Vector2d)) {
        throw new TypeError;
      }
      this.scaleX(b);
      this.scaleY(b);
      return this;
    };

    Vector2d.prototype.scaleX = function(b) {
      if (!(b instanceof Vector2d)) {
        throw new TypeError;
      }
      this.x *= b.x;
      return this;
    };

    Vector2d.prototype.scaleY = function(b) {
      if (!(b instanceof Vector2d)) {
        throw new TypeError;
      }
      this.y *= b.y;
      return this;
    };

    Vector2d.prototype.clampMagnitude = function(maxLength) {
      if (typeof maxLength !== 'number') {
        throw new TypeError;
      }
      if (this.magnitudeSquared > maxLength * maxLength) {
        this.magnitude = maxLength;
      }
      return this;
    };

    Object.defineProperty(Vector2d.prototype, 'magnitude', {
      get: function() {
        return Math.sqrt(this.magnitudeSquared);
      },
      set: function(value) {
        var magnitude;
        if (typeof value !== 'number') {
          throw new TypeError;
        }
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
        if (typeof value !== 'number') {
          throw new TypeError;
        }
        this.length = Math.sqrt(value);
        return value;
      }
    });

    Object.defineProperty(Vector2d.prototype, 'length', {
      get: function() {
        return this.magnitude;
      },
      set: function(value) {
        if (typeof value !== 'number') {
          throw new TypeError;
        }
        return this.magnitude = value;
      }
    });

    Object.defineProperty(Vector2d.prototype, 'lengthSquared', {
      get: function() {
        return this.magnitudeSquared;
      },
      set: function(value) {
        if (typeof value !== 'number') {
          throw new TypeError;
        }
        return this.magnitudeSquared = value;
      }
    });

    Object.defineProperty(Vector2d.prototype, 'rotate', {
      get: function() {
        return Math.atan2(this.y, this.x) * 180 / Math.PI;
      },
      set: function(dir) {
        var len;
        if (typeof dir !== 'number') {
          throw new TypeError;
        }
        len = this.magnitude;
        this.x = Math.cos(dir * Math.PI / 180) * len;
        this.y = Math.sin(dir * Math.PI / 180) * len;
        return dir;
      }
    });

    Vector2d.prototype.dot = function(b) {
      if (!(b instanceof Vector2d)) {
        throw new TypeError;
      }
      return this.x * b.x + this.y * b.y;
    };

    Vector2d.prototype.cross = function(b) {
      if (!(b instanceof Vector2d)) {
        throw new TypeError;
      }
      return this.x * b.y - this.y * b.x;
    };

    Vector2d.prototype.distance = function(b) {
      if (!(b instanceof Vector2d)) {
        throw new TypeError;
      }
      return Math.sqrt(distanceSquared(b));
    };

    Vector2d.prototype.distanceSquared = function(b) {
      var dx, dy;
      if (!(b instanceof Vector2d)) {
        throw new TypeError;
      }
      dx = this.x - b.x;
      dy = this.y - b.y;
      return dx * dx + dy * dy;
    };

    Vector2d.prototype.angle = function(b) {
      var aMagnitude, bMagnitude, dot;
      if (!(b instanceof Vector2d)) {
        throw new TypeError;
      }
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
      if (!(b instanceof Vector2d)) {
        throw new TypeError;
      }
      return this.isEqualX(b) && this.isEqualY(b);
    };

    Vector2d.prototype.isEqualX = function(b) {
      if (!(b instanceof Vector2d)) {
        throw new TypeError;
      }
      return this.x === b.x;
    };

    Vector2d.prototype.isEqualY = function(b) {
      if (!(b instanceof Vector2d)) {
        throw new TypeError;
      }
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
      if (!(b instanceof Vector2d)) {
        throw new TypeError;
      }
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
