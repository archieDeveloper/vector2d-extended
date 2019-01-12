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
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Vector2d =\n/*#__PURE__*/\nfunction () {\n  function Vector2d() {\n    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;\n    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n\n    _classCallCheck(this, Vector2d);\n\n    this.x = x;\n    this.y = y;\n  }\n\n  _createClass(Vector2d, [{\n    key: \"set\",\n    // Methods\n    // Returns Vector2d\n    value: function set(x, y) {\n      this.x = x;\n      this.y = y;\n      return this;\n    }\n  }, {\n    key: \"add\",\n    value: function add(a) {\n      return this.addX(a).addY(a);\n    }\n  }, {\n    key: \"addX\",\n    value: function addX(a) {\n      this.x += a.x;\n      return this;\n    }\n  }, {\n    key: \"addY\",\n    value: function addY(a) {\n      this.y += a.y;\n      return this;\n    }\n  }, {\n    key: \"subtract\",\n    value: function subtract(a) {\n      return this.subtractX(a).subtractY(a);\n    }\n  }, {\n    key: \"subtractX\",\n    value: function subtractX(a) {\n      this.x -= a.x;\n      return this;\n    }\n  }, {\n    key: \"subtractY\",\n    value: function subtractY(a) {\n      this.y -= a.y;\n      return this;\n    }\n  }, {\n    key: \"multiply\",\n    value: function multiply(a) {\n      return this.multiplyX(a).multiplyY(a);\n    }\n  }, {\n    key: \"multiplyX\",\n    value: function multiplyX(a) {\n      this.x *= a;\n      return this;\n    }\n  }, {\n    key: \"multiplyY\",\n    value: function multiplyY(a) {\n      this.y *= a;\n      return this;\n    }\n  }, {\n    key: \"divide\",\n    value: function divide(a) {\n      return this.divideX(a).divideY(a);\n    }\n  }, {\n    key: \"divideX\",\n    value: function divideX(a) {\n      this.x /= a;\n      return this;\n    }\n  }, {\n    key: \"divideY\",\n    value: function divideY(a) {\n      this.y /= a;\n      return this;\n    }\n  }, {\n    key: \"normalize\",\n    value: function normalize() {\n      this.magnitude = 1;\n      return this;\n    }\n  }, {\n    key: \"project\",\n    value: function project(b) {\n      var c = (this.x * b.x + this.y * b.y) / (b.x * b.x + b.y * b.y);\n      return this.set(b.x * c, b.y * c);\n    }\n  }, {\n    key: \"round\",\n    value: function round() {\n      return this.roundX().roundY();\n    }\n  }, {\n    key: \"roundX\",\n    value: function roundX() {\n      this.x = Math.round(this.x);\n      return this;\n    }\n  }, {\n    key: \"roundY\",\n    value: function roundY() {\n      this.y = Math.round(this.y);\n      return this;\n    }\n  }, {\n    key: \"zero\",\n    value: function zero() {\n      return this.zeroX().zeroY();\n    }\n  }, {\n    key: \"zeroX\",\n    value: function zeroX() {\n      this.x = 0;\n      return this;\n    }\n  }, {\n    key: \"zeroY\",\n    value: function zeroY() {\n      this.y = 0;\n      return this;\n    }\n  }, {\n    key: \"clone\",\n    value: function clone() {\n      return new Vector2d(this.x, this.y);\n    }\n  }, {\n    key: \"equate\",\n    value: function equate(b) {\n      return this.equateX(b).equateY(b);\n    }\n  }, {\n    key: \"equateX\",\n    value: function equateX(b) {\n      this.x = b.x;\n      return this;\n    }\n  }, {\n    key: \"equateY\",\n    value: function equateY(b) {\n      this.y = b.y;\n      return this;\n    }\n  }, {\n    key: \"invert\",\n    value: function invert() {\n      return this.invertX().invertY();\n    }\n  }, {\n    key: \"invertX\",\n    value: function invertX() {\n      this.x = -this.x;\n      return this;\n    }\n  }, {\n    key: \"invertY\",\n    value: function invertY() {\n      this.y = -this.y;\n      return this;\n    }\n  }, {\n    key: \"lerp\",\n    value: function lerp(b, l) {\n      if (l < 0) {\n        l = 0;\n      } else if (l > 1) {\n        l = 1;\n      }\n\n      return this.set(this.x + (b.x - this.x) * l, this.y + (b.y - this.y) * l);\n    }\n  }, {\n    key: \"scale\",\n    value: function scale(a) {\n      return this.scaleX(a).scaleY(a);\n    }\n  }, {\n    key: \"scaleX\",\n    value: function scaleX(a) {\n      this.x *= a.x;\n      return this;\n    }\n  }, {\n    key: \"scaleY\",\n    value: function scaleY(a) {\n      this.y *= a.y;\n      return this;\n    }\n  }, {\n    key: \"clampMagnitude\",\n    value: function clampMagnitude(maxLength) {\n      if (this.magnitudeSquared > maxLength * maxLength) {\n        this.magnitude = maxLength;\n      }\n\n      return this;\n    } // Returns number\n\n  }, {\n    key: \"dot\",\n    value: function dot(b) {\n      return this.x * b.x + this.y * b.y;\n    }\n  }, {\n    key: \"cross\",\n    value: function cross(b) {\n      return this.x * b.y - this.y * b.x;\n    }\n  }, {\n    key: \"distance\",\n    value: function distance(b) {\n      return Math.sqrt(this.distanceSquared(b));\n    }\n  }, {\n    key: \"distanceSquared\",\n    value: function distanceSquared(b) {\n      var dx = this.x - b.x;\n      var dy = this.y - b.y;\n      return dx * dx + dy * dy;\n    }\n  }, {\n    key: \"angle\",\n    value: function angle(b) {\n      var aMagnitude = this.magnitude;\n      var bMagnitude = b.magnitude;\n      var dot = this.x / aMagnitude * (b.x / bMagnitude) + this.y / aMagnitude * (b.y / bMagnitude);\n\n      if (dot < -1) {\n        dot = -1;\n      } else if (dot > 1) {\n        dot = 1;\n      }\n\n      return Math.acos(dot) * 57.29578;\n    }\n  }, {\n    key: \"areaTriangle\",\n    value: function areaTriangle(b) {\n      return this.areaParallelogram(b) / 2;\n    }\n  }, {\n    key: \"areaParallelogram\",\n    value: function areaParallelogram(b) {\n      return Math.abs(this.cross(b));\n    } // Returns boolean\n\n  }, {\n    key: \"isZero\",\n    value: function isZero() {\n      return this.isZeroX() && this.isZeroY();\n    }\n  }, {\n    key: \"isZeroX\",\n    value: function isZeroX() {\n      return this.x === 0;\n    }\n  }, {\n    key: \"isZeroY\",\n    value: function isZeroY() {\n      return this.y === 0;\n    }\n  }, {\n    key: \"isEqual\",\n    value: function isEqual(b) {\n      return this.isEqualX(b) && this.isEqualY(b);\n    }\n  }, {\n    key: \"isEqualX\",\n    value: function isEqualX(b) {\n      return this.x === b.x;\n    }\n  }, {\n    key: \"isEqualY\",\n    value: function isEqualY(b) {\n      return this.y === b.y;\n    }\n  }, {\n    key: \"isNaN\",\n    value: function isNaN() {\n      return this.isNaNX() || this.isNaNY();\n    }\n  }, {\n    key: \"isNaNX\",\n    value: function isNaNX() {\n      return isNaN(this.x);\n    }\n  }, {\n    key: \"isNaNY\",\n    value: function isNaNY() {\n      return isNaN(this.y);\n    }\n  }, {\n    key: \"isFinite\",\n    value: function isFinite() {\n      return this.isFiniteX() || this.isFiniteY();\n    }\n  }, {\n    key: \"isFiniteX\",\n    value: function isFiniteX() {\n      return isFinite(this.x);\n    }\n  }, {\n    key: \"isFiniteY\",\n    value: function isFiniteY() {\n      return isFinite(this.y);\n    }\n  }, {\n    key: \"isEqualRotate\",\n    value: function isEqualRotate(b) {\n      return this.rotate.toFixed(2) === b.rotate.toFixed(2);\n    }\n  }, {\n    key: \"isEqualInvertRotate\",\n    value: function isEqualInvertRotate(b) {\n      var ref = Math.abs(parseFloat(this.rotate.toFixed(2)) - parseFloat(b.rotate.toFixed(2)));\n      return 179.9 < ref && ref < 180.1;\n    }\n  }, {\n    key: \"isCollinear\",\n    value: function isCollinear(b) {\n      if (this.isZeroX() || this.isZeroY() || b.isZeroX() || b.isZeroY()) {\n        var an = this.isZeroX() && !this.isZeroY() ? this.y : this.x;\n        var bn = b.isZeroX() && !b.isZeroY() ? b.y : b.x;\n        var n = bn / an;\n        var nax = this.x * n;\n        var nay = this.y * n;\n        return b.x === nax && b.y === nay;\n      }\n\n      return this.x / b.x === this.y / b.y;\n    }\n  }, {\n    key: \"isOrthogonal\",\n    value: function isOrthogonal(b) {\n      return this.dot(b) === 0;\n    }\n  }, {\n    key: \"rotate\",\n    get: function get() {\n      return Math.atan2(this.y, this.x) * 180 / Math.PI;\n    },\n    set: function set(dir) {\n      var len = this.magnitude;\n      this.set(Math.cos(dir * Math.PI / 180) * len, Math.sin(dir * Math.PI / 180) * len);\n    }\n  }, {\n    key: \"magnitudeSquared\",\n    get: function get() {\n      return this.x * this.x + this.y * this.y;\n    },\n    set: function set(value) {\n      this.magnitude = Math.sqrt(value);\n    }\n  }, {\n    key: \"magnitude\",\n    get: function get() {\n      return Math.sqrt(this.magnitudeSquared);\n    },\n    set: function set(value) {\n      var magnitude = this.magnitude;\n      this.set(this.x / magnitude * value, this.y / magnitude * value);\n    }\n  }], [{\n    key: \"clampMagnitude\",\n    value: function clampMagnitude(a, maxLength) {\n      return a.clone().clampMagnitude(maxLength);\n    }\n  }, {\n    key: \"lerp\",\n    value: function lerp(a, b, l) {\n      return a.clone().lerp(b, l);\n    }\n  }, {\n    key: \"scale\",\n    value: function scale(a, b) {\n      return a.clone().scaleX(b).scaleY(b);\n    }\n  }, {\n    key: \"scaleX\",\n    value: function scaleX(a, b) {\n      return new Vector2d(a.x, 0).scaleX(b);\n    }\n  }, {\n    key: \"scaleY\",\n    value: function scaleY(a, b) {\n      return new Vector2d(0, a.y).scaleY(b);\n    }\n  }, {\n    key: \"add\",\n    value: function add(a, b) {\n      return a.clone().addX(b).addY(b);\n    }\n  }, {\n    key: \"addX\",\n    value: function addX(a, b) {\n      return new Vector2d(a.x, 0).addX(b);\n    }\n  }, {\n    key: \"addY\",\n    value: function addY(a, b) {\n      return new Vector2d(0, a.y).addY(b);\n    }\n  }, {\n    key: \"subtract\",\n    value: function subtract(a, b) {\n      return a.clone().subtractX(b).subtractY(b);\n    }\n  }, {\n    key: \"subtractX\",\n    value: function subtractX(a, b) {\n      return new Vector2d(a.x, 0).subtractX(b);\n    }\n  }, {\n    key: \"subtractY\",\n    value: function subtractY(a, b) {\n      return new Vector2d(0, a.y).subtractY(b);\n    }\n  }, {\n    key: \"multiply\",\n    value: function multiply(a, b) {\n      return a.clone().multiplyX(b).multiplyY(b);\n    }\n  }, {\n    key: \"multiplyX\",\n    value: function multiplyX(a, b) {\n      return a.clone().multiplyX(b);\n    }\n  }, {\n    key: \"multiplyY\",\n    value: function multiplyY(a, b) {\n      return a.clone().multiplyY(b);\n    }\n  }, {\n    key: \"divide\",\n    value: function divide(a, b) {\n      return a.clone().divideX(b).divideY(b);\n    }\n  }, {\n    key: \"divideX\",\n    value: function divideX(a, b) {\n      return a.clone().divideX(b);\n    }\n  }, {\n    key: \"divideY\",\n    value: function divideY(a, b) {\n      return a.clone().divideY(b);\n    }\n  }, {\n    key: \"normalize\",\n    value: function normalize(a) {\n      return a.clone().normalize();\n    }\n  }, {\n    key: \"project\",\n    value: function project(a, b) {\n      return a.clone().project(b);\n    }\n  }, {\n    key: \"round\",\n    value: function round(a) {\n      return a.clone().round();\n    }\n  }, {\n    key: \"roundX\",\n    value: function roundX(a) {\n      return a.clone().roundX();\n    }\n  }, {\n    key: \"roundY\",\n    value: function roundY(a) {\n      return a.clone().roundY();\n    }\n  }, {\n    key: \"invert\",\n    value: function invert(a) {\n      return a.clone().invert();\n    }\n  }, {\n    key: \"invertX\",\n    value: function invertX(a) {\n      return a.clone().invertX();\n    }\n  }, {\n    key: \"invertY\",\n    value: function invertY(a) {\n      return a.clone().invertY();\n    }\n  }, {\n    key: \"ZERO\",\n    get: function get() {\n      return new Vector2d();\n    }\n  }, {\n    key: \"ONE\",\n    get: function get() {\n      return new Vector2d(1, 1);\n    }\n  }, {\n    key: \"UP\",\n    get: function get() {\n      return new Vector2d(0, -1);\n    }\n  }, {\n    key: \"DOWN\",\n    get: function get() {\n      return new Vector2d(0, 1);\n    }\n  }, {\n    key: \"RIGHT\",\n    get: function get() {\n      return new Vector2d(1, 0);\n    }\n  }, {\n    key: \"LEFT\",\n    get: function get() {\n      return new Vector2d(-1, 0);\n    }\n  }]);\n\n  return Vector2d;\n}();\n\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Vector2d);\n\n//# sourceURL=webpack://Vector2d/./src/Vector2d.ts?");

/***/ })

/******/ })["default"];
});