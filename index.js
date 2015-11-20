
(function() {
  var MathVector2d;

  MathVector2d = (function() {
    function MathVector2d() {}

    MathVector2d.prototype.functions = {
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

    MathVector2d.prototype.staticVector = function(args, types, x, y) {
      var vx, vy;
      if (x != null) {
        vx = this.staticComponent('x', 2, args, types, x);
      } else {
        vx = 0;
      }
      if (y != null) {
        vy = this.staticComponent('y', 2, args, types, y);
      } else {
        vy = 0;
      }
      return new Vector2d(vx, vy);
    };

    MathVector2d.prototype.staticComponent = function(property, countArguments, args, argumentTypes, callback) {
      var a, argumentsLength, b, i, j, ref;
      argumentsLength = args.length;
      if (argumentsLength < countArguments) {
        throw new Error;
      }
      a = this.checkType(args[0], argumentTypes[0], property);
      for (i = j = 1, ref = argumentsLength; 1 <= ref ? j < ref : j > ref; i = 1 <= ref ? ++j : --j) {
        b = this.checkType(args[i], argumentTypes[countArguments - 1], property);
        a = callback(a, b);
      }
      return a;
    };

    MathVector2d.prototype.vector = function(args, argsCount, types, x, y) {
      if (x != null) {
        this.x = this.component.apply(this, ['x', argsCount, args, types, x]);
      }
      if (y != null) {
        this.y = this.component.apply(this, ['y', argsCount, args, types, y]);
      }
      return this;
    };

    MathVector2d.prototype.component = function(property, countArguments, args, argumentTypes, callback) {
      var a, argumentsLength, b, i, j, ref;
      argumentsLength = args.length;
      if (argumentsLength < countArguments) {
        throw new Error;
      }
      a = this[property];
      for (i = j = 0, ref = argumentsLength; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
        b = this.checkType(args[i], argumentTypes[countArguments - 1], property);
        a = callback(a, b);
      }
      return a;
    };

    MathVector2d.prototype.checkType = function(argument, type, property) {
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

    MathVector2d.prototype.checkTypes = function(args, types) {
      var argsLength, i, j, ref, results;
      argsLength = args.length;
      results = [];
      for (i = j = 0, ref = argsLength; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
        if (typeof types[i] === 'string') {
          if (typeof args[i] !== types[i]) {
            throw new TypeError;
          } else {
            results.push(void 0);
          }
        } else {
          if (!(args[i] instanceof types[i])) {
            throw new TypeError;
          } else {
            results.push(void 0);
          }
        }
      }
      return results;
    };

    return MathVector2d;

  })();

  window.math = new MathVector2d;

}).call(this);

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

    Object.defineProperty(Vector2d, 'ZERO', {
      get: function() {
        return new Vector2d;
      },
      set: function() {
        throw new Error;
      }
    });

    Object.defineProperty(Vector2d, 'ONE', {
      get: function() {
        return new Vector2d(1, 1);
      },
      set: function() {
        throw new Error;
      }
    });

    Object.defineProperty(Vector2d, 'UP', {
      get: function() {
        return new Vector2d(0, -1);
      },
      set: function() {
        throw new Error;
      }
    });

    Object.defineProperty(Vector2d, 'DOWN', {
      get: function() {
        return new Vector2d(0, 1);
      },
      set: function() {
        throw new Error;
      }
    });

    Object.defineProperty(Vector2d, 'RIGHT', {
      get: function() {
        return new Vector2d(1, 0);
      },
      set: function() {
        throw new Error;
      }
    });

    Object.defineProperty(Vector2d, 'LEFT', {
      get: function() {
        return new Vector2d(-1, 0);
      },
      set: function() {
        throw new Error;
      }
    });

    Vector2d.clampMagnitude = function(a, maxLength) {
      var b;
      math.math.checkTypes([a, maxLength], [Vector2d, 'number']);
      b = a.clone();
      if (b.magnitudeSquared > maxLength * maxLength) {
        b.magnitude = maxLength;
      }
      return b;
    };

    Vector2d.lerp = function(a, b, l) {
      math.math.checkTypes([a, b, l], [Vector2d, Vector2d, 'number']);
      if (l < 0) {
        l = 0;
      }
      if (l > 1) {
        l = 1;
      }
      return new Vector2d(a.x + (b.x - a.x) * l, a.y + (b.y - a.y) * l);
    };

    Vector2d.scale = function() {
      return math.staticVector(arguments, [Vector2d, Vector2d], math.functions.multiply, math.functions.multiply);
    };

    Vector2d.scaleX = function() {
      return math.staticVector(arguments, [Vector2d, Vector2d], math.functions.multiply);
    };

    Vector2d.scaleY = function() {
      return math.staticVector(arguments, [Vector2d, Vector2d], null, math.functions.multiply);
    };

    Vector2d.add = function() {
      return math.staticVector(arguments, [Vector2d, Vector2d], math.functions.add, math.functions.add);
    };

    Vector2d.addX = function() {
      return math.staticVector(arguments, [Vector2d, Vector2d], math.functions.add);
    };

    Vector2d.addY = function() {
      return math.staticVector(arguments, [Vector2d, Vector2d], null, math.functions.add);
    };

    Vector2d.subtract = function() {
      return math.staticVector(arguments, [Vector2d, Vector2d], math.functions.subtract, math.functions.subtract);
    };

    Vector2d.subtractX = function() {
      return math.staticVector(arguments, [Vector2d, Vector2d], math.functions.subtract);
    };

    Vector2d.subtractY = function() {
      return math.staticVector(arguments, [Vector2d, Vector2d], null, math.functions.subtract);
    };

    Vector2d.multiply = function() {
      return math.staticVector(arguments, [Vector2d, 'number'], math.functions.multiply, math.functions.multiply);
    };

    Vector2d.multiplyX = function() {
      return math.staticVector(arguments, [Vector2d, 'number'], math.functions.multiply, math.functions.self);
    };

    Vector2d.multiplyY = function() {
      return math.staticVector(arguments, [Vector2d, 'number'], math.functions.self, math.functions.multiply);
    };

    Vector2d.divide = function() {
      return math.staticVector(arguments, [Vector2d, 'number'], math.functions.divide, math.functions.divide);
    };

    Vector2d.divideX = function() {
      return math.staticVector(arguments, [Vector2d, 'number'], math.functions.divide, math.functions.self);
    };

    Vector2d.divideY = function() {
      return math.staticVector(arguments, [Vector2d, 'number'], math.functions.self, math.functions.divide);
    };

    Vector2d.normalize = function(a) {
      var magnitude;
      math.checkTypes([a], [Vector2d]);
      magnitude = a.magnitude;
      return new Vector2d(a.x / magnitude, a.y / magnitude);
    };

    Vector2d.project = function(a, b) {
      var c;
      math.checkTypes([a, b], [Vector2d, Vector2d]);
      c = ((a.x * b.x) + (a.y * b.y)) / ((b.x * b.x) + (b.y * b.y));
      return new Vector2d(b.x * c, b.y * c);
    };

    Vector2d.round = function(a) {
      math.checkTypes([a], [Vector2d]);
      return new Vector2d(Math.round(a.x), Math.round(a.y));
    };

    Vector2d.roundX = function(a) {
      math.checkTypes([a], [Vector2d]);
      return new Vector2d(Math.round(a.x), a.y);
    };

    Vector2d.roundY = function(a) {
      math.checkTypes([a], [Vector2d]);
      return new Vector2d(a.x, Math.round(a.y));
    };

    Vector2d.invert = function(a) {
      math.checkTypes([a], [Vector2d]);
      return new Vector2d(-a.x, -a.y);
    };

    Vector2d.invertX = function(a) {
      math.checkTypes([a], [Vector2d]);
      return new Vector2d(-a.x, a.y);
    };

    Vector2d.invertY = function(a) {
      math.checkTypes([a], [Vector2d]);
      return new Vector2d(a.x, -a.y);
    };

    Vector2d.prototype.add = function() {
      this.addX.apply(this, arguments);
      this.addY.apply(this, arguments);
      return this;
    };

    Vector2d.prototype.addX = function() {
      return math.vector.apply(this, [arguments, 1, [Vector2d], math.functions.add, null]);
    };

    Vector2d.prototype.addY = function() {
      return math.vector.apply(this, [arguments, 1, [Vector2d], null, math.functions.add]);
    };

    Vector2d.prototype.subtract = function() {
      this.subtractX.apply(this, arguments);
      this.subtractY.apply(this, arguments);
      return this;
    };

    Vector2d.prototype.subtractX = function() {
      return math.vector.apply(this, [arguments, 1, [Vector2d], math.functions.subtract, null]);
    };

    Vector2d.prototype.subtractY = function() {
      return math.vector.apply(this, [arguments, 1, [Vector2d], null, math.functions.subtract]);
    };

    Vector2d.prototype.multiply = function() {
      this.multiplyX.apply(this, arguments);
      this.multiplyY.apply(this, arguments);
      return this;
    };

    Vector2d.prototype.multiplyX = function() {
      return math.vector.apply(this, [arguments, 1, ['number'], math.functions.multiply, null]);
    };

    Vector2d.prototype.multiplyY = function() {
      return math.vector.apply(this, [arguments, 1, ['number'], null, math.functions.multiply]);
    };

    Vector2d.prototype.divide = function() {
      this.divideX.apply(this, arguments);
      this.divideY.apply(this, arguments);
      return this;
    };

    Vector2d.prototype.divideX = function(scalar) {
      return math.vector.apply(this, [arguments, 1, ['number'], math.functions.divide, null]);
    };

    Vector2d.prototype.divideY = function(scalar) {
      return math.vector.apply(this, [arguments, 1, ['number'], null, math.functions.divide]);
    };

    Vector2d.prototype.normalize = function() {
      this.length = 1;
      return this;
    };

    Vector2d.prototype.project = function(b) {
      var c;
      math.checkTypes([b], [Vector2d]);
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
      math.checkTypes([b], [Vector2d]);
      this.equateX(b);
      this.equateY(b);
      return this;
    };

    Vector2d.prototype.equateX = function(b) {
      math.checkTypes([b], [Vector2d]);
      this.x = b.x;
      return this;
    };

    Vector2d.prototype.equateY = function(b) {
      math.checkTypes([b], [Vector2d]);
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
      math.checkTypes([b, l], [Vector2d, 'number']);
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
      return math.vector.apply(this, [arguments, 1, [Vector2d], math.functions.multiply, null]);
    };

    Vector2d.prototype.scaleY = function() {
      return math.vector.apply(this, [arguments, 1, [Vector2d], null, math.functions.multiply]);
    };

    Vector2d.prototype.clampMagnitude = function(maxLength) {
      math.checkTypes([maxLength], ['number']);
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
        math.checkTypes([value], ['number']);
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
        math.checkTypes([value], ['number']);
        this.length = Math.sqrt(value);
        return value;
      }
    });

    Object.defineProperty(Vector2d.prototype, 'length', {
      get: function() {
        return this.magnitude;
      },
      set: function(value) {
        math.checkTypes([value], ['number']);
        return this.magnitude = value;
      }
    });

    Object.defineProperty(Vector2d.prototype, 'lengthSquared', {
      get: function() {
        return this.magnitudeSquared;
      },
      set: function(value) {
        math.checkTypes([value], ['number']);
        return this.magnitudeSquared = value;
      }
    });

    Object.defineProperty(Vector2d.prototype, 'rotate', {
      get: function() {
        return Math.atan2(this.y, this.x) * 180 / Math.PI;
      },
      set: function(dir) {
        var len;
        math.checkTypes([value], ['number']);
        len = this.magnitude;
        this.x = Math.cos(dir * Math.PI / 180) * len;
        this.y = Math.sin(dir * Math.PI / 180) * len;
        return dir;
      }
    });

    Vector2d.prototype.dot = function(b) {
      math.checkTypes([b], [Vector2d]);
      return this.x * b.x + this.y * b.y;
    };

    Vector2d.prototype.cross = function(b) {
      math.checkTypes([b], [Vector2d]);
      return this.x * b.y - this.y * b.x;
    };

    Vector2d.prototype.distance = function(b) {
      math.checkTypes([b], [Vector2d]);
      return Math.sqrt(distanceSquared(b));
    };

    Vector2d.prototype.distanceSquared = function(b) {
      var dx, dy;
      math.checkTypes([b], [Vector2d]);
      dx = this.x - b.x;
      dy = this.y - b.y;
      return dx * dx + dy * dy;
    };

    Vector2d.prototype.angle = function(b) {
      var aMagnitude, bMagnitude, dot;
      math.checkTypes([b], [Vector2d]);
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

    Vector2d.prototype.areaTriangle = function(b) {
      math.checkTypes([b], [Vector2d]);
      return this.areaParallelogram(b) / 2;
    };

    Vector2d.prototype.areaParallelogram = function(b) {
      math.checkTypes([b], [Vector2d]);
      return Math.abs(this.cross(b));
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
      math.checkTypes([b], [Vector2d]);
      return this.isEqualX(b) && this.isEqualY(b);
    };

    Vector2d.prototype.isEqualX = function(b) {
      math.checkTypes([b], [Vector2d]);
      return this.x === b.x;
    };

    Vector2d.prototype.isEqualY = function(b) {
      math.checkTypes([b], [Vector2d]);
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
      math.checkTypes([b], [Vector2d]);
      return this.rotate.toFixed(2) === b.rotate.toFixed(2);
    };

    Vector2d.prototype.isEqualInvertRotate = function(b) {
      var ref;
      math.checkTypes([b], [Vector2d]);
      return (179.9 < (ref = Math.abs(this.rotate.toFixed(2) - b.rotate.toFixed())) && ref < 180.1);
    };

    Vector2d.prototype.isCollinear = function(b) {
      var an, bn, n, nax, nay;
      math.checkTypes([b], [Vector2d]);
      if (this.isZeroX() || this.isZeroY() || b.isZeroX() || b.isZeroY()) {
        if (this.isZeroX() && !this.isZeroY()) {
          an = this.y;
        } else {
          an = this.x;
        }
        if (b.isZeroX() && !b.isZeroY()) {
          bn = b.y;
        } else {
          bn = b.x;
        }
        n = bn / an;
        nax = this.x * n;
        nay = this.y * n;
        return b.x === nax && b.y === nay;
      } else {
        return this.x / b.x === this.y / b.y;
      }
    };

    Vector2d.prototype.isOrthogonal = function(b) {
      math.checkTypes([b], [Vector2d]);
      return this.dot(b === 0);
    };

    return Vector2d;

  })();

  if ((typeof module !== "undefined" && module !== null) && (module.exports != null)) {
    module.exports = Vector2d;
  } else {
    window.Vector2d = Vector2d;
  }

}).call(this);

