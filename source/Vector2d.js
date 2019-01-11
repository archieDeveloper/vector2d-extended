import math from './mathVector2d';

class Vector2d {
	constructor (x, y) {
		if (!(this instanceof Vector2d)) {
			return new Vector2d(x, y);
		}
		this.x = x || 0;
		this.y = y || 0;
	}

	static constructor (x, y) {
		console.log('lol', x, y);
	}

	static get ZERO () {
		return new Vector2d();
	}
	static get ONE () {
		return new Vector2d(1, 1);
	}
	static get UP () {
		return new Vector2d(0, -1);
	}
	static get DOWN () {
		return new Vector2d(0, 1);
	}
	static get RIGHT () {
		return new Vector2d(1, 0);
	}
	static get LEFT () {
		return new Vector2d(-1, 0);
	}

	static clampMagnitude (a, maxLength) {
		math.checkTypes([a, maxLength], [Vector2d, 'number']);
		return a.clone().clampMagnitude(maxLength);
	}

	static clampLength () {
		return Vector2d.clampMagnitude.apply(this, arguments);
	}

	static lerp (a, b, l) {
		math.checkTypes([a, b, l], [Vector2d, Vector2d, 'number']);
		const c = a.clone();
		return c.lerp(b, l);
	}

	static scale () {
		return math.staticVector(
			arguments,
			[Vector2d],
			math.functions.multiply,
			math.functions.multiply
		);
	}

	static scaleX () {
		return math.staticVector(
			arguments,
			[Vector2d],
			math.functions.multiply
		);
	}

	static scaleY () {
		return math.staticVector(
			arguments,
			[Vector2d],
			null,
			math.functions.multiply
		);
	}

	static add () {
		return math.staticVector(
			arguments,
			[Vector2d],
			math.functions.add,
			math.functions.add
		);
	}

	static addX () {
		return math.staticVector(
			arguments,
			[Vector2d],
			math.functions.add
		);
	}

	static addY () {
		return math.staticVector(
			arguments,
			[Vector2d],
			null,
			math.functions.add
		);
	}

	static subtract () {
		return math.staticVector(
			arguments,
			[Vector2d],
			math.functions.subtract,
			math.functions.subtract
		);
	}

	static subtractX () {
		return math.staticVector(
			arguments,
			[Vector2d],
			math.functions.subtract
		);
	}

	static subtractY () {
		return math.staticVector(
			arguments,
			[Vector2d],
			null,
			math.functions.subtract
		);
	}

	static multiply () {
		return math.staticVector(
			arguments,
			['number'],
			math.functions.multiply,
			math.functions.multiply
		);
	}

	static multiplyX () {
		return math.staticVector(
			arguments,
			['number'],
			math.functions.multiply,
			math.functions.self
		);
	}

	static multiplyY () {
		return math.staticVector(
			arguments,
			['number'],
			math.functions.self,
			math.functions.multiply
		);
	}

	static divide () {
		return math.staticVector(
			arguments,
			['number'],
			math.functions.divide,
			math.functions.divide
		);
	}

	static divideX () {
		return math.staticVector(
			arguments,
			['number'],
			math.functions.divide,
			math.functions.self
		);
	}

	static divideY () {
		return math.staticVector(
			arguments,
			['number'],
			math.functions.self,
			math.functions.divide
		);
	}

	static normalize (a) {
		math.checkTypes([a], [Vector2d]);
		const b = a.clone();
		return b.normalize();
	}

	static project (a, b) {
		math.checkTypes([a, b], [Vector2d, Vector2d]);
		const c = a.clone();
		return c.project(b);
	}

	static round (a) {
		math.checkTypes([a], [Vector2d]);
		const b = a.clone();
		return b.round();
	}

	static roundX (a) {
		math.checkTypes([a], [Vector2d]);
		const b = a.clone();
		return b.roundX();
	}

	static roundY (a) {
		math.checkTypes([a], [Vector2d]);
		const b = a.clone();
		return b.roundY();
	}

	static invert (a) {
		math.checkTypes([a], [Vector2d]);
		const b = a.clone();
		return b.invert();
	}

	static invertX (a) {
		math.checkTypes([a], [Vector2d]);
		const b = a.clone();
		return b.invertX();
	}

	static invertY (a) {
		math.checkTypes([a], [Vector2d]);
		const b = a.clone();
		return b.invertY();
	}

	// Methods

	// Returns Vector2d

	add () {
		this.addX.apply(this, arguments);
		this.addY.apply(this, arguments);
		return this;
	}


	addX () {
		return math.vector({
			v: this,
			args: arguments,
			x: math.functions.add
		});
	}

	addY () {
		return math.vector({
			v: this,
			args: arguments,
			y: math.functions.add
		});
	}

	subtract () {
		this.subtractX.apply(this, arguments);
		this.subtractY.apply(this, arguments);
		return this;
	}

	subtractX () {
		return math.vector({
			v: this,
			args: arguments,
			x: math.functions.subtract
		});
	}

	subtractY () {
		return math.vector({
			v: this,
			args: arguments,
			y: math.functions.subtract
		});
	}

	multiply () {
		this.multiplyX.apply(this, arguments);
		this.multiplyY.apply(this, arguments);
		return this;
	}

	multiplyX () {
		return math.vector({
			v: this,
			args: arguments,
			types: ['number'],
			x: math.functions.multiply
		});
	}

	multiplyY () {
		return math.vector({
			v: this,
			args: arguments,
			types: ['number'],
			y: math.functions.multiply
		});
	}

	divide () {
		this.divideX.apply(this, arguments);
		this.divideY.apply(this, arguments);
		return this;
	}

	divideX () {
		return math.vector({
			v: this,
			args: arguments,
			types: ['number'],
			x: math.functions.divide
		});
	}

	divideY () {
		return math.vector({
			v: this,
			args: arguments,
			types: ['number'],
			y: math.functions.divide
		});
	}

	normalize () {
		this.length = 1;
		return this;
	}

	project (b) {
		math.checkTypes([b], [Vector2d]);
		const c = ((this.x * b.x) + (this.y * b.y)) / ((b.x * b.x) + (b.y * b.y));
		this.x = b.x * c;
		this.y = b.y * c;
		return this;
	}

	round () {
		this.roundX();
		this.roundY();
		return this;
	}

	roundX () {
		this.x = Math.round(this.x);
		return this;
	}

	roundY () {
		this.y = Math.round(this.y);
		return this;
	}

	zero () {
		this.zeroX();
		this.zeroY();
		return this;
	}

	zeroX () {
		this.x = 0;
		return this;
	}

	zeroY () {
		this.y = 0;
		return this;
	}

	clone () {
		return new Vector2d(this.x, this.y);
	}

	equate (b) {
		math.checkTypes([b], [Vector2d]);
		this.equateX(b);
		this.equateY(b);
		return this;
	}

	equateX (b) {
		math.checkTypes([b], [Vector2d]);
		this.x = b.x
		return this;
	}

	equateY (b) {
		math.checkTypes([b], [Vector2d]);
		this.y = b.y
		return this;
	}

	invert () {
		this.invertX();
		this.invertY();
		return this;
	}
		

	invertX () {
		this.x = -this.x;
		return this;
	}

	invertY () {
		this.y = -this.y;
		return this;
	}

	lerp (b, l) {
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
	}

	scale () {
		this.scaleX.apply(this, arguments);
		this.scaleY.apply(this, arguments);
		return this;
	}

	scaleX () {
		return math.vector({
			v: this,
			args: arguments,
			x: math.functions.multiply
		});
	}

	scaleY () {
		return math.vector({
			v: this,
			args: arguments,
			y: math.functions.multiply
		});
	}

	clampMagnitude (maxLength) {
		math.checkTypes([maxLength], ['number']);
		if (this.magnitudeSquared > maxLength * maxLength) {
			this.magnitude = maxLength;
		}
		return this;
	}

	clampLength () {
		return this.clampMagnitude.apply(this, arguments);
	}

	// Returns number

	get lengthSquared () {
		return this.magnitudeSquared;
	}
	set lengthSquared (value) {
		math.checkTypes([value], ['number']);
		this.magnitudeSquared = value;
	}

	get rotate () {
		return Math.atan2(this.y, this.x) * 180 / Math.PI;
	}
	set rotate (dir) {
		math.checkTypes([dir], ['number'])
		const len = this.magnitude;
		this.x = Math.cos(dir * Math.PI / 180) * len
		this.y = Math.sin(dir * Math.PI / 180) * len
		return dir;
	}

	get magnitudeSquared () {
		return this.x * this.x + this.y * this.y;
	}
	set magnitudeSquared (value) {
		math.checkTypes([value], ['number']);
		this.length = Math.sqrt(value);
		return value;
	}

	get magnitude () {
		return Math.sqrt(this.magnitudeSquared);
	}
	set magnitude (value) {
		math.checkTypes([value], ['number']);
		const magnitude = this.magnitude;
		this.x = (this.x / magnitude) * value;
		this.y = (this.y / magnitude) * value;
		return value;
	}


	get length () {
		return this.magnitude;
	}
	set length (value) {
		math.checkTypes([value], ['number']);
		this.magnitude = value;
	}


	dot (b) {
		math.checkTypes([b], [Vector2d]);
		return this.x * b.x + this.y * b.y;
	}

	cross (b) {
		math.checkTypes([b], [Vector2d]);
		return this.x * b.y - this.y * b.x;
	}

	distance (b) {
		math.checkTypes([b], [Vector2d]);
		return Math.sqrt(this.distanceSquared(b));
	}

	distanceSquared (b) {
		math.checkTypes([b], [Vector2d])
		const dx = this.x - b.x;
		const dy = this.y - b.y;
		return dx * dx + dy * dy;
	}

	angle (b) {
		math.checkTypes([b], [Vector2d]);
		const aMagnitude = this.magnitude;
		const bMagnitude = b.magnitude;
		let dot = (this.x/aMagnitude) * (b.x/bMagnitude) + (this.y/aMagnitude) * (b.y/bMagnitude);
		if (dot < -1) {
			dot = -1;
		}
		if (dot > 1) {
			dot = 1;
		}
		return Math.acos(dot) * 57.29578;
	}

	areaTriangle (b) {
		math.checkTypes([b], [Vector2d]);
		return this.areaParallelogram(b) / 2;
	}

	areaParallelogram (b) {
		math.checkTypes([b], [Vector2d]);
		return Math.abs(this.cross(b))
	}

	// Returns boolean

	isZero () {
		return this.isZeroX() && this.isZeroY();
	}

	isZeroX () {
		return this.x === 0;
	}

	isZeroY () {
		return this.y === 0;
	}

	isEqual (b) {
		math.checkTypes([b], [Vector2d]);
		return this.isEqualX(b) && this.isEqualY(b);
	}

	isEqualX (b) {
		math.checkTypes([b], [Vector2d]);
		return this.x === b.x;
	}

	isEqualY (b) {
		math.checkTypes([b], [Vector2d]);
		return this.y === b.y;
	}

	isNaN () {
		return this.isNaNX() || this.isNaNY();
	}

	isNaNX () {
		return isNaN(this.x);
	}

	isNaNY () {
		return isNaN(this.y);
	}

	isFinite () {
		return this.isFiniteX() || this.isFiniteY();
	}

	isFiniteX () {
		return isFinite(this.x);
	}

	isFiniteY () {
		return isFinite(this.y);
	}

	isEqualRotate (b) {
		math.checkTypes([b], [Vector2d]);
		return this.rotate.toFixed(2) === b.rotate.toFixed(2);
	}

	isEqualInvertRotate (b) {
		var ref;
		math.checkTypes([b], [Vector2d]);
		return (179.9 < (ref = Math.abs(this.rotate.toFixed(2) - b.rotate.toFixed(2))) && ref < 180.1);
	}

	isCollinear (b) {
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
	}

	isOrthogonal (b) {
		math.checkTypes([b], [Vector2d]);
		return this.dot(b === 0);
	}

};

export default Vector2d;