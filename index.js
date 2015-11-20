(function() {
  'use strict';
  var Vector2d;

  Vector2d = (function() {
    var checkType, mathComponent, mathFunctions, mathVector, staticMathComponent, staticMathVector;

    mathFunctions = {
      add: function(a, b) {
        return a + b;
      },
      subtract: function(a, b) {
        return a - b;
      },
      multiply: function(a, b) {
        return a * b;
      },
      divide: function(a, b) {
        return a / b;
      },
      self: function(a) {
        return a;
      }
    };

    staticMathVector = function(args, types, x, y) {
      var vx, vy;
      if (x != null) {
        vx = staticMathComponent('x', 2, args, types, x);
      } else {
        vx = 0;
      }
      if (y != null) {
        vy = staticMathComponent('y', 2, args, types, y);
      } else {
        vy = 0;
      }
      return new Vector2d(vx, vy);
    };

    staticMathComponent = function(property, countArguments, args, argumentTypes, callback) {
      var a, argumentsLength, b, i, j, ref;
      argumentsLength = args.length;
      if (argumentsLength < countArguments) {
        throw new Error;
      }
      a = checkType(args[0], argumentTypes[0], property);
      for (i = j = 1, ref = argumentsLength; 1 <= ref ? j < ref : j > ref; i = 1 <= ref ? ++j : --j) {
        b = checkType(args[i], argumentTypes[countArguments - 1], property);
        a = callback(a, b);
      }
      return a;
    };

    mathVector = function(args, argsCount, types, x, y) {
      if (x != null) {
        this.x = mathComponent.apply(this, ['x', argsCount, args, types, x]);
      }
      if (y != null) {
        this.y = mathComponent.apply(this, ['y', argsCount, args, types, y]);
      }
      return this;
    };

    mathComponent = function(property, countArguments, args, argumentTypes, callback) {
      var a, argumentsLength, b, i, j, ref;
      argumentsLength = args.length;
      if (argumentsLength < countArguments) {
        throw new Error;
      }
      a = this[property];
      for (i = j = 0, ref = argumentsLength; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
        b = checkType(args[i], argumentTypes[countArguments - 1], property);
        a = callback(a, b);
      }
      return a;
    };

    checkType = function(argument, type, property) {
      var value;
      if (typeof type === 'string') {
        if (typeof argument !== type) {
          throw new TypeError;
        }
        value = argument;
      } else {
        if (!(argument instanceof type)) {
          throw new TypeError;
        }
        value = argument[property];
      }
      return value;
    };

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
      return staticMathVector(arguments, [Vector2d, Vector2d], mathFunctions.multiply, mathFunctions.multiply);
    };

    Vector2d.scaleX = function() {
      return staticMathVector(arguments, [Vector2d, Vector2d], mathFunctions.multiply);
    };

    Vector2d.scaleY = function() {
      return staticMathVector(arguments, [Vector2d, Vector2d], null, mathFunctions.multiply);
    };

    Vector2d.add = function() {
      return staticMathVector(arguments, [Vector2d, Vector2d], mathFunctions.add, mathFunctions.add);
    };

    Vector2d.addX = function() {
      return staticMathVector(arguments, [Vector2d, Vector2d], mathFunctions.add);
    };

    Vector2d.addY = function() {
      return staticMathVector(arguments, [Vector2d, Vector2d], null, mathFunctions.add);
    };

    Vector2d.subtract = function() {
      return staticMathVector(arguments, [Vector2d, Vector2d], mathFunctions.subtract, mathFunctions.subtract);
    };

    Vector2d.subtractX = function() {
      return staticMathVector(arguments, [Vector2d, Vector2d], mathFunctions.subtract);
    };

    Vector2d.subtractY = function() {
      return staticMathVector(arguments, [Vector2d, Vector2d], null, mathFunctions.subtract);
    };

    Vector2d.multiply = function() {
      return staticMathVector(arguments, [Vector2d, 'number'], mathFunctions.multiply, mathFunctions.multiply);
    };

    Vector2d.multiplyX = function() {
      return staticMathVector(arguments, [Vector2d, 'number'], mathFunctions.multiply, mathFunctions.self);
    };

    Vector2d.multiplyY = function() {
      return staticMathVector(arguments, [Vector2d, 'number'], mathFunctions.self, mathFunctions.multiply);
    };

    Vector2d.divide = function() {
      return staticMathVector(arguments, [Vector2d, 'number'], mathFunctions.divide, mathFunctions.divide);
    };

    Vector2d.divideX = function() {
      return staticMathVector(arguments, [Vector2d, 'number'], mathFunctions.divide, mathFunctions.self);
    };

    Vector2d.divideY = function() {
      return staticMathVector(arguments, [Vector2d, 'number'], mathFunctions.self, mathFunctions.divide);
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
      this.addX.apply(this, arguments);
      this.addY.apply(this, arguments);
      return this;
    };

    Vector2d.prototype.addX = function() {
      return mathVector.apply(this, [arguments, 1, [Vector2d], mathFunctions.add, null]);
    };

    Vector2d.prototype.addY = function() {
      return mathVector.apply(this, [arguments, 1, [Vector2d], null, mathFunctions.add]);
    };

    Vector2d.prototype.subtract = function() {
      this.subtractX.apply(this, arguments);
      this.subtractY.apply(this, arguments);
      return this;
    };

    Vector2d.prototype.subtractX = function() {
      return mathVector.apply(this, [arguments, 1, [Vector2d], mathFunctions.subtract, null]);
    };

    Vector2d.prototype.subtractY = function() {
      return mathVector.apply(this, [arguments, 1, [Vector2d], null, mathFunctions.subtract]);
    };

    Vector2d.prototype.multiply = function() {
      this.multiplyX.apply(this, arguments);
      this.multiplyY.apply(this, arguments);
      return this;
    };

    Vector2d.prototype.multiplyX = function() {
      return mathVector.apply(this, [arguments, 1, ['number'], mathFunctions.multiply, null]);
    };

    Vector2d.prototype.multiplyY = function() {
      return mathVector.apply(this, [arguments, 1, ['number'], null, mathFunctions.multiply]);
    };

    Vector2d.prototype.divide = function() {
      this.divideX.apply(this, arguments);
      this.divideY.apply(this, arguments);
      return this;
    };

    Vector2d.prototype.divideX = function(scalar) {
      return mathVector.apply(this, [arguments, 1, ['number'], mathFunctions.divide, null]);
    };

    Vector2d.prototype.divideY = function(scalar) {
      return mathVector.apply(this, [arguments, 1, ['number'], null, mathFunctions.divide]);
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

    Vector2d.prototype.scale = function() {
      this.scaleX.apply(this, arguments);
      this.scaleY.apply(this, arguments);
      return this;
    };

    Vector2d.prototype.scaleX = function() {
      return mathVector.apply(this, [arguments, 1, [Vector2d], mathFunctions.multiply, null]);
    };

    Vector2d.prototype.scaleY = function() {
      return mathVector.apply(this, [arguments, 1, [Vector2d], null, mathFunctions.multiply]);
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
