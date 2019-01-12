(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Vector2d"] = factory();
	else
		root["Vector2d"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Vector2d.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Vector2d.ts":
/*!*************************!*\
  !*** ./src/Vector2d.ts ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mathVector2d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mathVector2d */ \"./src/mathVector2d.ts\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Vector2d =\n/*#__PURE__*/\nfunction () {\n  function Vector2d() {\n    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;\n    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n\n    _classCallCheck(this, Vector2d);\n\n    this.x = x;\n    this.y = y;\n    _mathVector2d__WEBPACK_IMPORTED_MODULE_0__[\"default\"].checkTypes([x, y], ['number', 'number']);\n  }\n\n  _createClass(Vector2d, [{\n    key: \"set\",\n    // Methods\n    // Returns Vector2d\n    value: function set(x, y) {\n      _mathVector2d__WEBPACK_IMPORTED_MODULE_0__[\"default\"].checkTypes([x, y], ['number', 'number']);\n      this.x = x;\n      this.y = y;\n      return this;\n    }\n  }, {\n    key: \"add\",\n    value: function add() {\n      this.addX.apply(this, arguments);\n      this.addY.apply(this, arguments);\n      return this;\n    }\n  }, {\n    key: \"addX\",\n    value: function addX() {\n      return _mathVector2d__WEBPACK_IMPORTED_MODULE_0__[\"default\"].vector({\n        v: this,\n        args: arguments,\n        x: _mathVector2d__WEBPACK_IMPORTED_MODULE_0__[\"default\"].functions.add\n      });\n    }\n  }, {\n    key: \"addY\",\n    value: function addY() {\n      return _mathVector2d__WEBPACK_IMPORTED_MODULE_0__[\"default\"].vector({\n        v: this,\n        args: arguments,\n        y: _mathVector2d__WEBPACK_IMPORTED_MODULE_0__[\"default\"].functions.add\n      });\n    }\n  }, {\n    key: \"subtract\",\n    value: function subtract() {\n      this.subtractX.apply(this, arguments);\n      this.subtractY.apply(this, arguments);\n      return this;\n    }\n  }, {\n    key: \"subtractX\",\n    value: function subtractX() {\n      return _mathVector2d__WEBPACK_IMPORTED_MODULE_0__[\"default\"].vector({\n        v: this,\n        args: arguments,\n        x: _mathVector2d__WEBPACK_IMPORTED_MODULE_0__[\"default\"].functions.subtract\n      });\n    }\n  }, {\n    key: \"subtractY\",\n    value: function subtractY() {\n      return _mathVector2d__WEBPACK_IMPORTED_MODULE_0__[\"default\"].vector({\n        v: this,\n        args: arguments,\n        y: _mathVector2d__WEBPACK_IMPORTED_MODULE_0__[\"default\"].functions.subtract\n      });\n    }\n  }, {\n    key: \"multiply\",\n    value: function multiply() {\n      this.multiplyX.apply(this, arguments);\n      this.multiplyY.apply(this, arguments);\n      return this;\n    }\n  }, {\n    key: \"multiplyX\",\n    value: function multiplyX() {\n      return _mathVector2d__WEBPACK_IMPORTED_MODULE_0__[\"default\"].vector({\n        v: this,\n        args: arguments,\n        types: ['number'],\n        x: _mathVector2d__WEBPACK_IMPORTED_MODULE_0__[\"default\"].functions.multiply\n      });\n    }\n  }, {\n    key: \"multiplyY\",\n    value: function multiplyY() {\n      return _mathVector2d__WEBPACK_IMPORTED_MODULE_0__[\"default\"].vector({\n        v: this,\n        args: arguments,\n        types: ['number'],\n        y: _mathVector2d__WEBPACK_IMPORTED_MODULE_0__[\"default\"].functions.multiply\n      });\n    }\n  }, {\n    key: \"divide\",\n    value: function divide() {\n      this.divideX.apply(this, arguments);\n      this.divideY.apply(this, arguments);\n      return this;\n    }\n  }, {\n    key: \"divideX\",\n    value: function divideX() {\n      return _mathVector2d__WEBPACK_IMPORTED_MODULE_0__[\"default\"].vector({\n        v: this,\n        args: arguments,\n        types: ['number'],\n        x: _mathVector2d__WEBPACK_IMPORTED_MODULE_0__[\"default\"].functions.divide\n      });\n    }\n  }, {\n    key: \"divideY\",\n    value: function divideY() {\n      return _mathVector2d__WEBPACK_IMPORTED_MODULE_0__[\"default\"].vector({\n        v: this,\n        args: arguments,\n        types: ['number'],\n        y: _mathVector2d__WEBPACK_IMPORTED_MODULE_0__[\"default\"].functions.divide\n      });\n    }\n  }, {\n    key: \"normalize\",\n    value: function normalize() {\n      this.length = 1;\n      return this;\n    }\n  }, {\n    key: \"project\",\n    value: function project(b) {\n      _mathVector2d__WEBPACK_IMPORTED_MODULE_0__[\"default\"].checkTypes([b], [Vector2d]);\n      var c = (this.x * b.x + this.y * b.y) / (b.x * b.x + b.y * b.y);\n      this.x = b.x * c;\n      this.y = b.y * c;\n      return this;\n    }\n  }, {\n    key: \"round\",\n    value: function round() {\n      this.roundX();\n      this.roundY();\n      return this;\n    }\n  }, {\n    key: \"roundX\",\n    value: function roundX() {\n      this.x = Math.round(this.x);\n      return this;\n    }\n  }, {\n    key: \"roundY\",\n    value: function roundY() {\n      this.y = Math.round(this.y);\n      return this;\n    }\n  }, {\n    key: \"zero\",\n    value: function zero() {\n      this.zeroX();\n      this.zeroY();\n      return this;\n    }\n  }, {\n    key: \"zeroX\",\n    value: function zeroX() {\n      this.x = 0;\n      return this;\n    }\n  }, {\n    key: \"zeroY\",\n    value: function zeroY() {\n      this.y = 0;\n      return this;\n    }\n  }, {\n    key: \"clone\",\n    value: function clone() {\n      return new Vector2d(this.x, this.y);\n    }\n  }, {\n    key: \"equate\",\n    value: function equate(b) {\n      _mathVector2d__WEBPACK_IMPORTED_MODULE_0__[\"default\"].checkTypes([b], [Vector2d]);\n      this.equateX(b);\n      this.equateY(b);\n      return this;\n    }\n  }, {\n    key: \"equateX\",\n    value: function equateX(b) {\n      _mathVector2d__WEBPACK_IMPORTED_MODULE_0__[\"default\"].checkTypes([b], [Vector2d]);\n      this.x = b.x;\n      return this;\n    }\n  }, {\n    key: \"equateY\",\n    value: function equateY(b) {\n      _mathVector2d__WEBPACK_IMPORTED_MODULE_0__[\"default\"].checkTypes([b], [Vector2d]);\n      this.y = b.y;\n      return this;\n    }\n  }, {\n    key: \"invert\",\n    value: function invert() {\n      this.invertX();\n      this.invertY();\n      return this;\n    }\n  }, {\n    key: \"invertX\",\n    value: function invertX() {\n      this.x = -this.x;\n      return this;\n    }\n  }, {\n    key: \"invertY\",\n    value: function invertY() {\n      this.y = -this.y;\n      return this;\n    }\n  }, {\n    key: \"lerp\",\n    value: function lerp(b, l) {\n      _mathVector2d__WEBPACK_IMPORTED_MODULE_0__[\"default\"].checkTypes([b, l], [Vector2d, 'number']);\n\n      if (l < 0) {\n        l = 0;\n      }\n\n      if (l > 1) {\n        l = 1;\n      }\n\n      this.x = this.x + (b.x - this.x) * l;\n      this.y = this.y + (b.y - this.y) * l;\n      return this;\n    }\n  }, {\n    key: \"scale\",\n    value: function scale() {\n      this.scaleX.apply(this, arguments);\n      this.scaleY.apply(this, arguments);\n      return this;\n    }\n  }, {\n    key: \"scaleX\",\n    value: function scaleX() {\n      return _mathVector2d__WEBPACK_IMPORTED_MODULE_0__[\"default\"].vector({\n        v: this,\n        args: arguments,\n        x: _mathVector2d__WEBPACK_IMPORTED_MODULE_0__[\"default\"].functions.multiply\n      });\n    }\n  }, {\n    key: \"scaleY\",\n    value: function scaleY() {\n      return _mathVector2d__WEBPACK_IMPORTED_MODULE_0__[\"default\"].vector({\n        v: this,\n        args: arguments,\n        y: _mathVector2d__WEBPACK_IMPORTED_MODULE_0__[\"default\"].functions.multiply\n      });\n    }\n  }, {\n    key: \"clampMagnitude\",\n    value: function clampMagnitude(maxLength) {\n      _mathVector2d__WEBPACK_IMPORTED_MODULE_0__[\"default\"].checkTypes([maxLength], ['number']);\n\n      if (this.magnitudeSquared > maxLength * maxLength) {\n        this.magnitude = maxLength;\n      }\n\n      return this;\n    }\n  }, {\n    key: \"clampLength\",\n    value: function clampLength() {\n      return this.clampMagnitude.apply(this, arguments);\n    } // Returns number\n\n  }, {\n    key: \"dot\",\n    value: function dot(b) {\n      _mathVector2d__WEBPACK_IMPORTED_MODULE_0__[\"default\"].checkTypes([b], [Vector2d]);\n      return this.x * b.x + this.y * b.y;\n    }\n  }, {\n    key: \"cross\",\n    value: function cross(b) {\n      _mathVector2d__WEBPACK_IMPORTED_MODULE_0__[\"default\"].checkTypes([b], [Vector2d]);\n      return this.x * b.y - this.y * b.x;\n    }\n  }, {\n    key: \"distance\",\n    value: function distance(b) {\n      _mathVector2d__WEBPACK_IMPORTED_MODULE_0__[\"default\"].checkTypes([b], [Vector2d]);\n      return Math.sqrt(this.distanceSquared(b));\n    }\n  }, {\n    key: \"distanceSquared\",\n    value: function distanceSquared(b) {\n      _mathVector2d__WEBPACK_IMPORTED_MODULE_0__[\"default\"].checkTypes([b], [Vector2d]);\n      var dx = this.x - b.x;\n      var dy = this.y - b.y;\n      return dx * dx + dy * dy;\n    }\n  }, {\n    key: \"angle\",\n    value: function angle(b) {\n      _mathVector2d__WEBPACK_IMPORTED_MODULE_0__[\"default\"].checkTypes([b], [Vector2d]);\n      var aMagnitude = this.magnitude;\n      var bMagnitude = b.magnitude;\n      var dot = this.x / aMagnitude * (b.x / bMagnitude) + this.y / aMagnitude * (b.y / bMagnitude);\n\n      if (dot < -1) {\n        dot = -1;\n      } else if (dot > 1) {\n        dot = 1;\n      }\n\n      return Math.acos(dot) * 57.29578;\n    }\n  }, {\n    key: \"areaTriangle\",\n    value: function areaTriangle(b) {\n      _mathVector2d__WEBPACK_IMPORTED_MODULE_0__[\"default\"].checkTypes([b], [Vector2d]);\n      return this.areaParallelogram(b) / 2;\n    }\n  }, {\n    key: \"areaParallelogram\",\n    value: function areaParallelogram(b) {\n      _mathVector2d__WEBPACK_IMPORTED_MODULE_0__[\"default\"].checkTypes([b], [Vector2d]);\n      return Math.abs(this.cross(b));\n    } // Returns boolean\n\n  }, {\n    key: \"isZero\",\n    value: function isZero() {\n      return this.isZeroX() && this.isZeroY();\n    }\n  }, {\n    key: \"isZeroX\",\n    value: function isZeroX() {\n      return this.x === 0;\n    }\n  }, {\n    key: \"isZeroY\",\n    value: function isZeroY() {\n      return this.y === 0;\n    }\n  }, {\n    key: \"isEqual\",\n    value: function isEqual(b) {\n      _mathVector2d__WEBPACK_IMPORTED_MODULE_0__[\"default\"].checkTypes([b], [Vector2d]);\n      return this.isEqualX(b) && this.isEqualY(b);\n    }\n  }, {\n    key: \"isEqualX\",\n    value: function isEqualX(b) {\n      _mathVector2d__WEBPACK_IMPORTED_MODULE_0__[\"default\"].checkTypes([b], [Vector2d]);\n      return this.x === b.x;\n    }\n  }, {\n    key: \"isEqualY\",\n    value: function isEqualY(b) {\n      _mathVector2d__WEBPACK_IMPORTED_MODULE_0__[\"default\"].checkTypes([b], [Vector2d]);\n      return this.y === b.y;\n    }\n  }, {\n    key: \"isNaN\",\n    value: function isNaN() {\n      return this.isNaNX() || this.isNaNY();\n    }\n  }, {\n    key: \"isNaNX\",\n    value: function isNaNX() {\n      return isNaN(this.x);\n    }\n  }, {\n    key: \"isNaNY\",\n    value: function isNaNY() {\n      return isNaN(this.y);\n    }\n  }, {\n    key: \"isFinite\",\n    value: function isFinite() {\n      return this.isFiniteX() || this.isFiniteY();\n    }\n  }, {\n    key: \"isFiniteX\",\n    value: function isFiniteX() {\n      return isFinite(this.x);\n    }\n  }, {\n    key: \"isFiniteY\",\n    value: function isFiniteY() {\n      return isFinite(this.y);\n    }\n  }, {\n    key: \"isEqualRotate\",\n    value: function isEqualRotate(b) {\n      _mathVector2d__WEBPACK_IMPORTED_MODULE_0__[\"default\"].checkTypes([b], [Vector2d]);\n      return this.rotate.toFixed(2) === b.rotate.toFixed(2);\n    }\n  }, {\n    key: \"isEqualInvertRotate\",\n    value: function isEqualInvertRotate(b) {\n      _mathVector2d__WEBPACK_IMPORTED_MODULE_0__[\"default\"].checkTypes([b], [Vector2d]);\n      var ref = Math.abs(this.rotate.toFixed(2) - b.rotate.toFixed(2));\n      return 179.9 < ref && ref < 180.1;\n    }\n  }, {\n    key: \"isCollinear\",\n    value: function isCollinear(b) {\n      _mathVector2d__WEBPACK_IMPORTED_MODULE_0__[\"default\"].checkTypes([b], [Vector2d]);\n\n      if (this.isZeroX() || this.isZeroY() || b.isZeroX() || b.isZeroY()) {\n        var an = this.isZeroX() && !this.isZeroY() ? this.y : this.x;\n        var bn = b.isZeroX() && !b.isZeroY() ? b.y : b.x;\n        var n = bn / an;\n        var nax = this.x * n;\n        var nay = this.y * n;\n        return b.x === nax && b.y === nay;\n      } else {\n        return this.x / b.x === this.y / b.y;\n      }\n    }\n  }, {\n    key: \"isOrthogonal\",\n    value: function isOrthogonal(b) {\n      _mathVector2d__WEBPACK_IMPORTED_MODULE_0__[\"default\"].checkTypes([b], [Vector2d]);\n      return this.dot(b) === 0;\n    }\n  }, {\n    key: \"lengthSquared\",\n    get: function get() {\n      return this.magnitudeSquared;\n    },\n    set: function set(value) {\n      _mathVector2d__WEBPACK_IMPORTED_MODULE_0__[\"default\"].checkTypes([value], ['number']);\n      this.magnitudeSquared = value;\n    }\n  }, {\n    key: \"rotate\",\n    get: function get() {\n      return Math.atan2(this.y, this.x) * 180 / Math.PI;\n    },\n    set: function set(dir) {\n      _mathVector2d__WEBPACK_IMPORTED_MODULE_0__[\"default\"].checkTypes([dir], ['number']);\n      var len = this.magnitude;\n      this.x = Math.cos(dir * Math.PI / 180) * len;\n      this.y = Math.sin(dir * Math.PI / 180) * len;\n    }\n  }, {\n    key: \"magnitudeSquared\",\n    get: function get() {\n      return this.x * this.x + this.y * this.y;\n    },\n    set: function set(value) {\n      _mathVector2d__WEBPACK_IMPORTED_MODULE_0__[\"default\"].checkTypes([value], ['number']);\n      this.length = Math.sqrt(value);\n    }\n  }, {\n    key: \"magnitude\",\n    get: function get() {\n      return Math.sqrt(this.magnitudeSquared);\n    },\n    set: function set(value) {\n      _mathVector2d__WEBPACK_IMPORTED_MODULE_0__[\"default\"].checkTypes([value], ['number']);\n      var magnitude = this.magnitude;\n      this.x = this.x / magnitude * value;\n      this.y = this.y / magnitude * value;\n    }\n  }, {\n    key: \"length\",\n    get: function get() {\n      return this.magnitude;\n    },\n    set: function set(value) {\n      _mathVector2d__WEBPACK_IMPORTED_MODULE_0__[\"default\"].checkTypes([value], ['number']);\n      this.magnitude = value;\n    }\n  }], [{\n    key: \"clampMagnitude\",\n    value: function clampMagnitude(a, maxLength) {\n      _mathVector2d__WEBPACK_IMPORTED_MODULE_0__[\"default\"].checkTypes([a, maxLength], [Vector2d, 'number']);\n      return a.clone().clampMagnitude(maxLength);\n    }\n  }, {\n    key: \"clampLength\",\n    value: function clampLength() {\n      return Vector2d.clampMagnitude.apply(this, arguments);\n    }\n  }, {\n    key: \"lerp\",\n    value: function lerp(a, b, l) {\n      _mathVector2d__WEBPACK_IMPORTED_MODULE_0__[\"default\"].checkTypes([a, b, l], [Vector2d, Vector2d, 'number']);\n      var c = a.clone();\n      return c.lerp(b, l);\n    }\n  }, {\n    key: \"scale\",\n    value: function scale() {\n      return _mathVector2d__WEBPACK_IMPORTED_MODULE_0__[\"default\"].staticVector(arguments, [Vector2d], _mathVector2d__WEBPACK_IMPORTED_MODULE_0__[\"default\"].functions.multiply, _mathVector2d__WEBPACK_IMPORTED_MODULE_0__[\"default\"].functions.multiply);\n    }\n  }, {\n    key: \"scaleX\",\n    value: function scaleX() {\n      return _mathVector2d__WEBPACK_IMPORTED_MODULE_0__[\"default\"].staticVector(arguments, [Vector2d], _mathVector2d__WEBPACK_IMPORTED_MODULE_0__[\"default\"].functions.multiply);\n    }\n  }, {\n    key: \"scaleY\",\n    value: function scaleY() {\n      return _mathVector2d__WEBPACK_IMPORTED_MODULE_0__[\"default\"].staticVector(arguments, [Vector2d], null, _mathVector2d__WEBPACK_IMPORTED_MODULE_0__[\"default\"].functions.multiply);\n    }\n  }, {\n    key: \"add\",\n    value: function add() {\n      return _mathVector2d__WEBPACK_IMPORTED_MODULE_0__[\"default\"].staticVector(arguments, [Vector2d], _mathVector2d__WEBPACK_IMPORTED_MODULE_0__[\"default\"].functions.add, _mathVector2d__WEBPACK_IMPORTED_MODULE_0__[\"default\"].functions.add);\n    }\n  }, {\n    key: \"addX\",\n    value: function addX() {\n      return _mathVector2d__WEBPACK_IMPORTED_MODULE_0__[\"default\"].staticVector(arguments, [Vector2d], _mathVector2d__WEBPACK_IMPORTED_MODULE_0__[\"default\"].functions.add);\n    }\n  }, {\n    key: \"addY\",\n    value: function addY() {\n      return _mathVector2d__WEBPACK_IMPORTED_MODULE_0__[\"default\"].staticVector(arguments, [Vector2d], null, _mathVector2d__WEBPACK_IMPORTED_MODULE_0__[\"default\"].functions.add);\n    }\n  }, {\n    key: \"subtract\",\n    value: function subtract() {\n      return _mathVector2d__WEBPACK_IMPORTED_MODULE_0__[\"default\"].staticVector(arguments, [Vector2d], _mathVector2d__WEBPACK_IMPORTED_MODULE_0__[\"default\"].functions.subtract, _mathVector2d__WEBPACK_IMPORTED_MODULE_0__[\"default\"].functions.subtract);\n    }\n  }, {\n    key: \"subtractX\",\n    value: function subtractX() {\n      return _mathVector2d__WEBPACK_IMPORTED_MODULE_0__[\"default\"].staticVector(arguments, [Vector2d], _mathVector2d__WEBPACK_IMPORTED_MODULE_0__[\"default\"].functions.subtract);\n    }\n  }, {\n    key: \"subtractY\",\n    value: function subtractY() {\n      return _mathVector2d__WEBPACK_IMPORTED_MODULE_0__[\"default\"].staticVector(arguments, [Vector2d], null, _mathVector2d__WEBPACK_IMPORTED_MODULE_0__[\"default\"].functions.subtract);\n    }\n  }, {\n    key: \"multiply\",\n    value: function multiply() {\n      return _mathVector2d__WEBPACK_IMPORTED_MODULE_0__[\"default\"].staticVector(arguments, ['number'], _mathVector2d__WEBPACK_IMPORTED_MODULE_0__[\"default\"].functions.multiply, _mathVector2d__WEBPACK_IMPORTED_MODULE_0__[\"default\"].functions.multiply);\n    }\n  }, {\n    key: \"multiplyX\",\n    value: function multiplyX() {\n      return _mathVector2d__WEBPACK_IMPORTED_MODULE_0__[\"default\"].staticVector(arguments, ['number'], _mathVector2d__WEBPACK_IMPORTED_MODULE_0__[\"default\"].functions.multiply, _mathVector2d__WEBPACK_IMPORTED_MODULE_0__[\"default\"].functions.self);\n    }\n  }, {\n    key: \"multiplyY\",\n    value: function multiplyY() {\n      return _mathVector2d__WEBPACK_IMPORTED_MODULE_0__[\"default\"].staticVector(arguments, ['number'], _mathVector2d__WEBPACK_IMPORTED_MODULE_0__[\"default\"].functions.self, _mathVector2d__WEBPACK_IMPORTED_MODULE_0__[\"default\"].functions.multiply);\n    }\n  }, {\n    key: \"divide\",\n    value: function divide() {\n      return _mathVector2d__WEBPACK_IMPORTED_MODULE_0__[\"default\"].staticVector(arguments, ['number'], _mathVector2d__WEBPACK_IMPORTED_MODULE_0__[\"default\"].functions.divide, _mathVector2d__WEBPACK_IMPORTED_MODULE_0__[\"default\"].functions.divide);\n    }\n  }, {\n    key: \"divideX\",\n    value: function divideX() {\n      return _mathVector2d__WEBPACK_IMPORTED_MODULE_0__[\"default\"].staticVector(arguments, ['number'], _mathVector2d__WEBPACK_IMPORTED_MODULE_0__[\"default\"].functions.divide, _mathVector2d__WEBPACK_IMPORTED_MODULE_0__[\"default\"].functions.self);\n    }\n  }, {\n    key: \"divideY\",\n    value: function divideY() {\n      return _mathVector2d__WEBPACK_IMPORTED_MODULE_0__[\"default\"].staticVector(arguments, ['number'], _mathVector2d__WEBPACK_IMPORTED_MODULE_0__[\"default\"].functions.self, _mathVector2d__WEBPACK_IMPORTED_MODULE_0__[\"default\"].functions.divide);\n    }\n  }, {\n    key: \"normalize\",\n    value: function normalize(a) {\n      _mathVector2d__WEBPACK_IMPORTED_MODULE_0__[\"default\"].checkTypes([a], [Vector2d]);\n      var b = a.clone();\n      return b.normalize();\n    }\n  }, {\n    key: \"project\",\n    value: function project(a, b) {\n      _mathVector2d__WEBPACK_IMPORTED_MODULE_0__[\"default\"].checkTypes([a, b], [Vector2d, Vector2d]);\n      var c = a.clone();\n      return c.project(b);\n    }\n  }, {\n    key: \"round\",\n    value: function round(a) {\n      _mathVector2d__WEBPACK_IMPORTED_MODULE_0__[\"default\"].checkTypes([a], [Vector2d]);\n      var b = a.clone();\n      return b.round();\n    }\n  }, {\n    key: \"roundX\",\n    value: function roundX(a) {\n      _mathVector2d__WEBPACK_IMPORTED_MODULE_0__[\"default\"].checkTypes([a], [Vector2d]);\n      var b = a.clone();\n      return b.roundX();\n    }\n  }, {\n    key: \"roundY\",\n    value: function roundY(a) {\n      _mathVector2d__WEBPACK_IMPORTED_MODULE_0__[\"default\"].checkTypes([a], [Vector2d]);\n      var b = a.clone();\n      return b.roundY();\n    }\n  }, {\n    key: \"invert\",\n    value: function invert(a) {\n      _mathVector2d__WEBPACK_IMPORTED_MODULE_0__[\"default\"].checkTypes([a], [Vector2d]);\n      var b = a.clone();\n      return b.invert();\n    }\n  }, {\n    key: \"invertX\",\n    value: function invertX(a) {\n      _mathVector2d__WEBPACK_IMPORTED_MODULE_0__[\"default\"].checkTypes([a], [Vector2d]);\n      var b = a.clone();\n      return b.invertX();\n    }\n  }, {\n    key: \"invertY\",\n    value: function invertY(a) {\n      _mathVector2d__WEBPACK_IMPORTED_MODULE_0__[\"default\"].checkTypes([a], [Vector2d]);\n      var b = a.clone();\n      return b.invertY();\n    }\n  }, {\n    key: \"ZERO\",\n    get: function get() {\n      return new Vector2d();\n    }\n  }, {\n    key: \"ONE\",\n    get: function get() {\n      return new Vector2d(1, 1);\n    }\n  }, {\n    key: \"UP\",\n    get: function get() {\n      return new Vector2d(0, -1);\n    }\n  }, {\n    key: \"DOWN\",\n    get: function get() {\n      return new Vector2d(0, 1);\n    }\n  }, {\n    key: \"RIGHT\",\n    get: function get() {\n      return new Vector2d(1, 0);\n    }\n  }, {\n    key: \"LEFT\",\n    get: function get() {\n      return new Vector2d(-1, 0);\n    }\n  }]);\n\n  return Vector2d;\n}();\n\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Vector2d);\n\n//# sourceURL=webpack://Vector2d/./src/Vector2d.ts?");

/***/ }),

/***/ "./src/mathVector2d.ts":
/*!*****************************!*\
  !*** ./src/mathVector2d.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Vector2d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vector2d */ \"./src/Vector2d.ts\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar MathVector2d =\n/*#__PURE__*/\nfunction () {\n  function MathVector2d() {\n    _classCallCheck(this, MathVector2d);\n\n    this.functions = {\n      add: function add(a, b) {\n        return a + b;\n      },\n      subtract: function subtract(a, b) {\n        return a - b;\n      },\n      multiply: function multiply(a, b) {\n        return a * b;\n      },\n      divide: function divide(a, b) {\n        return a / b;\n      },\n      self: function self(a) {\n        return a;\n      }\n    };\n  }\n\n  _createClass(MathVector2d, [{\n    key: \"staticVector\",\n    value: function staticVector(args, types, x, y) {\n      var vx = x != null ? this.staticComponent('x', 2, args, types, x) : 0;\n      var vy = y != null ? this.staticComponent('y', 2, args, types, y) : 0;\n      return new _Vector2d__WEBPACK_IMPORTED_MODULE_0__[\"default\"](vx, vy);\n    }\n  }, {\n    key: \"staticComponent\",\n    value: function staticComponent(property, countArguments, args, argumentTypes, callback) {\n      var argumentsLength = args.length;\n\n      if (argumentsLength < countArguments) {\n        throw new Error('Минимальное количество аргументов: ' + countArguments);\n      }\n\n      var a = this.checkType(args[0], _Vector2d__WEBPACK_IMPORTED_MODULE_0__[\"default\"], property);\n\n      for (var i = 1; i < argumentsLength; i++) {\n        var b = this.checkType(args[i], argumentTypes[countArguments - 2], property);\n        a = callback(a, b);\n      }\n\n      return a;\n    }\n  }, {\n    key: \"vector\",\n    value: function vector(_ref) {\n      var v = _ref.v,\n          args = _ref.args,\n          _ref$argsCount = _ref.argsCount,\n          argsCount = _ref$argsCount === void 0 ? 1 : _ref$argsCount,\n          _ref$types = _ref.types,\n          types = _ref$types === void 0 ? [_Vector2d__WEBPACK_IMPORTED_MODULE_0__[\"default\"]] : _ref$types,\n          _ref$x = _ref.x,\n          x = _ref$x === void 0 ? null : _ref$x,\n          _ref$y = _ref.y,\n          y = _ref$y === void 0 ? null : _ref$y;\n\n      if (x != null) {\n        v.x = this.component(v, 'x', argsCount, args, types, x);\n      }\n\n      if (y != null) {\n        v.y = this.component(v, 'y', argsCount, args, types, y);\n      }\n\n      return v;\n    }\n  }, {\n    key: \"component\",\n    value: function component(v, property, countArguments, args, argumentTypes, callback) {\n      var argumentsLength = args.length;\n\n      if (argumentsLength < countArguments) {\n        throw new Error('Минимальное количество аргументов: ' + countArguments);\n      }\n\n      var a = v[property];\n\n      for (var i = 0; i < argumentsLength; i++) {\n        var b = this.checkType(args[i], argumentTypes[countArguments - 1], property);\n        a = callback(a, b);\n      }\n\n      return a;\n    }\n  }, {\n    key: \"checkType\",\n    value: function checkType(argument, type, property) {\n      var value;\n\n      if (typeof type === 'string') {\n        if (_typeof(argument) !== type) {\n          throw new TypeError('1');\n        }\n\n        value = argument;\n      } else {\n        if (!(argument instanceof type)) {\n          throw new TypeError('2');\n        }\n\n        value = argument[property];\n      }\n\n      return value;\n    }\n  }, {\n    key: \"checkTypes\",\n    value: function checkTypes(args, types) {\n      var argsLength = args.length;\n\n      for (var i = 0; i < argsLength; i++) {\n        if (typeof types[i] === 'string') {\n          if (_typeof(args[i]) !== types[i]) {\n            throw new TypeError('3');\n          }\n        } else {\n          if (!(args[i] instanceof types[i])) {\n            throw new TypeError('4');\n          }\n        }\n      }\n    }\n  }]);\n\n  return MathVector2d;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (new MathVector2d());\n\n//# sourceURL=webpack://Vector2d/./src/mathVector2d.ts?");

/***/ })

/******/ })["default"];
});