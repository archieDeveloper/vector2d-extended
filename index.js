"use strict";var Vector2d;Vector2d=function(){function t(n,r){return this instanceof t?(this.x=n||0,void(this.y=r||0)):new t(n,r)}return t.zero=function(){return new t},t.one=function(){return new t(1,1)},t.up=function(){return new t(0,1)},t.down=function(){return new t(0,-1)},t.right=function(){return new t(1,0)},t.left=function(){return new t(-1,0)},t.angle=function(t,n){return 1},t.clampMagnitude=function(n,r){return new t},t.distance=function(t,n){return 1},t.dot=function(t,n){return 1},t.lerp=function(n,r,i){return new t},t.scale=function(n,r){return new t},t.isEqual=function(t,n){return!0},t.prototype.add=function(t){return this.x+=t.x,this.y+=t.y,this},t.prototype.subtract=function(t){return this.x-=t.x,this.y-=t.y,this},t.prototype.multiply=function(t){return this.x*=t,this.y*=t,this},t.prototype.divide=function(t){return this.x/=t,this.y/=t,this},t.prototype.normalize=function(){var t;return t=this.magnitude(),this.x/=t,this.y/=t,this},t.prototype.project=function(t){var n;return n=(this.x*t.x+this.y*t.y)/(t.x*t.x+t.y*t.y),this.x=t.x*n,this.y=t.y*n,this},t.prototype.round=function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},t.prototype.zero=function(){return this.x=this.y=0,this},t.prototype.clone=function(){return new t(this.x,this.y)},t.prototype.invert=function(){return this.x=-this.x,this.y=-this.y,this},t.prototype.lerp=function(t,n){return this},t.prototype.scale=function(t){return this},t.prototype.clampMagnitude=function(t){return this},t.prototype.magnitude=function(){return Math.sqrt(this.lengthSquared())},t.prototype.magnitudeSquared=function(){return this.x*this.x+this.y*this.y},t.prototype.length=t.magnitude,t.prototype.lengthSquared=t.magnitudeSquared,t.prototype.rotate=function(){return 180*Math.atan2(this.y,this.x)/Math.PI},t.prototype.dot=function(t){return this.x*t.x+this.y*t.y},t.prototype.cross=function(t){return this.x*t.y-this.y*t.x},t.prototype.distance=function(t){return Math.sqrt(distanceSquared(t))},t.prototype.distanceSquared=function(t){var n,r;return n=this.x-t.x,r=this.y-t.y,n*n+r*r},t.prototype.angle=function(t){return 1},t.prototype.distance=function(t){return 1},t.prototype.dot=function(t){return 1},t.prototype.isZero=function(){return 0===this.x&&0===this.y},t.prototype.isEqual=function(t){return this.x===t.x&&this.y===t.y},t.prototype.isNaN=function(){return isNaN(this.x||isNaN(this.y))},t}(),module.exports=Vector2d;