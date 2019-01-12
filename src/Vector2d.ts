import math from './mathVector2d';

class Vector2d {
	constructor (public x: number = 0, public y: number = 0) {
		math.checkTypes([x, y], ['number', 'number']);
	}

	static get ZERO (): Vector2d {
		return new Vector2d();
	}
	static get ONE (): Vector2d {
		return new Vector2d(1, 1);
	}
	static get UP (): Vector2d {
		return new Vector2d(0, -1);
	}
	static get DOWN (): Vector2d {
		return new Vector2d(0, 1);
	}
	static get RIGHT (): Vector2d {
		return new Vector2d(1, 0);
	}
	static get LEFT (): Vector2d {
		return new Vector2d(-1, 0);
	}

	static clampMagnitude (a: Vector2d, maxLength: number) {
		math.checkTypes([a, maxLength], [Vector2d, 'number']);
		return a.clone().clampMagnitude(maxLength);
	}

	static clampLength () {
		return Vector2d.clampMagnitude.apply(this, arguments);
	}

	static lerp (a: Vector2d, b: Vector2d, l: number) {
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

	static normalize (a: Vector2d) {
		math.checkTypes([a], [Vector2d]);
		const b = a.clone();
		return b.normalize();
	}

	static project (a: Vector2d, b: Vector2d) {
		math.checkTypes([a, b], [Vector2d, Vector2d]);
		const c = a.clone();
		return c.project(b);
	}

	static round (a: Vector2d) {
		math.checkTypes([a], [Vector2d]);
		const b = a.clone();
		return b.round();
	}

	static roundX (a: Vector2d) {
		math.checkTypes([a], [Vector2d]);
		const b = a.clone();
		return b.roundX();
	}

	static roundY (a: Vector2d) {
		math.checkTypes([a], [Vector2d]);
		const b = a.clone();
		return b.roundY();
	}

	static invert (a: Vector2d) {
		math.checkTypes([a], [Vector2d]);
		const b = a.clone();
		return b.invert();
	}

	static invertX (a: Vector2d) {
		math.checkTypes([a], [Vector2d]);
		const b = a.clone();
		return b.invertX();
	}

	static invertY (a: Vector2d) {
		math.checkTypes([a], [Vector2d]);
		const b = a.clone();
		return b.invertY();
	}

	// Methods

	// Returns Vector2d

	set (x: number, y: number): Vector2d {
		math.checkTypes([x, y], ['number', 'number']);
		this.x = x;
		this.y = y;
		return this;
	}

	add (): Vector2d {
		this.addX.apply(this, arguments);
		this.addY.apply(this, arguments);
		return this;
	}


	addX (): Vector2d {
		return math.vector({
			v: this,
			args: arguments,
			x: math.functions.add
		});
	}

	addY (): Vector2d {
		return math.vector({
			v: this,
			args: arguments,
			y: math.functions.add
		});
	}

	subtract (): Vector2d {
		this.subtractX.apply(this, arguments);
		this.subtractY.apply(this, arguments);
		return this;
	}

	subtractX (): Vector2d {
		return math.vector({
			v: this,
			args: arguments,
			x: math.functions.subtract
		});
	}

	subtractY (): Vector2d {
		return math.vector({
			v: this,
			args: arguments,
			y: math.functions.subtract
		});
	}

	multiply (): Vector2d {
		this.multiplyX.apply(this, arguments);
		this.multiplyY.apply(this, arguments);
		return this;
	}

	multiplyX (): Vector2d {
		return math.vector({
			v: this,
			args: arguments,
			types: ['number'],
			x: math.functions.multiply
		});
	}

	multiplyY (): Vector2d {
		return math.vector({
			v: this,
			args: arguments,
			types: ['number'],
			y: math.functions.multiply
		});
	}

	divide (): Vector2d {
		this.divideX.apply(this, arguments);
		this.divideY.apply(this, arguments);
		return this;
	}

	divideX (): Vector2d {
		return math.vector({
			v: this,
			args: arguments,
			types: ['number'],
			x: math.functions.divide
		});
	}

	divideY (): Vector2d {
		return math.vector({
			v: this,
			args: arguments,
			types: ['number'],
			y: math.functions.divide
		});
	}

	normalize (): Vector2d {
		this.length = 1;
		return this;
	}

	project (b: Vector2d): Vector2d {
		math.checkTypes([b], [Vector2d]);
		const c = ((this.x * b.x) + (this.y * b.y)) / ((b.x * b.x) + (b.y * b.y));
		this.x = b.x * c;
		this.y = b.y * c;
		return this;
	}

	round (): Vector2d {
		this.roundX();
		this.roundY();
		return this;
	}

	roundX (): Vector2d {
		this.x = Math.round(this.x);
		return this;
	}

	roundY (): Vector2d {
		this.y = Math.round(this.y);
		return this;
	}

	zero (): Vector2d {
		this.zeroX();
		this.zeroY();
		return this;
	}

	zeroX (): Vector2d {
		this.x = 0;
		return this;
	}

	zeroY (): Vector2d {
		this.y = 0;
		return this;
	}

	clone (): Vector2d {
		return new Vector2d(this.x, this.y);
	}

	equate (b: Vector2d): Vector2d {
		math.checkTypes([b], [Vector2d]);
		this.equateX(b);
		this.equateY(b);
		return this;
	}

	equateX (b: Vector2d): Vector2d {
		math.checkTypes([b], [Vector2d]);
		this.x = b.x
		return this;
	}

	equateY (b: Vector2d): Vector2d {
		math.checkTypes([b], [Vector2d]);
		this.y = b.y
		return this;
	}

	invert (): Vector2d {
		this.invertX();
		this.invertY();
		return this;
	}
		

	invertX (): Vector2d {
		this.x = -this.x;
		return this;
	}

	invertY (): Vector2d {
		this.y = -this.y;
		return this;
	}

	lerp (b: Vector2d, l: number): Vector2d {
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

	scale (): Vector2d {
		this.scaleX.apply(this, arguments);
		this.scaleY.apply(this, arguments);
		return this;
	}

	scaleX (): Vector2d {
		return math.vector({
			v: this,
			args: arguments,
			x: math.functions.multiply
		});
	}

	scaleY (): Vector2d {
		return math.vector({
			v: this,
			args: arguments,
			y: math.functions.multiply
		});
	}

	clampMagnitude (maxLength: number): Vector2d {
		math.checkTypes([maxLength], ['number']);
		if (this.magnitudeSquared > maxLength * maxLength) {
			this.magnitude = maxLength;
		}
		return this;
	}

	clampLength (): Vector2d {
		return this.clampMagnitude.apply(this, arguments);
	}

	// Returns number

	get lengthSquared (): number {
		return this.magnitudeSquared;
	}
	set lengthSquared (value: number) {
		math.checkTypes([value], ['number']);
		this.magnitudeSquared = value;
	}

	get rotate (): number {
		return Math.atan2(this.y, this.x) * 180 / Math.PI;
	}
	set rotate (dir: number) {
		math.checkTypes([dir], ['number'])
		const len = this.magnitude;
		this.x = Math.cos(dir * Math.PI / 180) * len
		this.y = Math.sin(dir * Math.PI / 180) * len
	}

	get magnitudeSquared (): number {
		return this.x * this.x + this.y * this.y;
	}
	set magnitudeSquared (value: number) {
		math.checkTypes([value], ['number']);
		this.length = Math.sqrt(value);
	}

	get magnitude (): number {
		return Math.sqrt(this.magnitudeSquared);
	}
	set magnitude (value: number) {
		math.checkTypes([value], ['number']);
		const magnitude = this.magnitude;
		this.x = (this.x / magnitude) * value;
		this.y = (this.y / magnitude) * value;
	}

	get length (): number {
		return this.magnitude;
	}
	set length (value: number) {
		math.checkTypes([value], ['number']);
		this.magnitude = value;
	}

	dot (b: Vector2d): number {
		math.checkTypes([b], [Vector2d]);
		return this.x * b.x + this.y * b.y;
	}

	cross (b: Vector2d): number {
		math.checkTypes([b], [Vector2d]);
		return this.x * b.y - this.y * b.x;
	}

	distance (b: Vector2d): number {
		math.checkTypes([b], [Vector2d]);
		return Math.sqrt(this.distanceSquared(b));
	}

	distanceSquared (b: Vector2d): number {
		math.checkTypes([b], [Vector2d])
		const dx = this.x - b.x;
		const dy = this.y - b.y;
		return dx * dx + dy * dy;
	}

	angle (b: Vector2d): number {
		math.checkTypes([b], [Vector2d]);
		const aMagnitude = this.magnitude;
		const bMagnitude = b.magnitude;
		let dot = (this.x/aMagnitude) * (b.x/bMagnitude) + (this.y/aMagnitude) * (b.y/bMagnitude);
		if (dot < -1) {
			dot = -1;
		} else if (dot > 1) {
			dot = 1;
		}
		return Math.acos(dot) * 57.29578;
	}

	areaTriangle (b: Vector2d): number {
		math.checkTypes([b], [Vector2d]);
		return this.areaParallelogram(b) / 2;
	}

	areaParallelogram (b: Vector2d): number {
		math.checkTypes([b], [Vector2d]);
		return Math.abs(this.cross(b))
	}

	// Returns boolean

	isZero (): boolean {
		return this.isZeroX() && this.isZeroY();
	}

	isZeroX (): boolean {
		return this.x === 0;
	}

	isZeroY (): boolean {
		return this.y === 0;
	}

	isEqual (b: Vector2d): boolean {
		math.checkTypes([b], [Vector2d]);
		return this.isEqualX(b) && this.isEqualY(b);
	}

	isEqualX (b: Vector2d): boolean {
		math.checkTypes([b], [Vector2d]);
		return this.x === b.x;
	}

	isEqualY (b: Vector2d): boolean {
		math.checkTypes([b], [Vector2d]);
		return this.y === b.y;
	}

	isNaN (): boolean {
		return this.isNaNX() || this.isNaNY();
	}

	isNaNX (): boolean {
		return isNaN(this.x);
	}

	isNaNY (): boolean {
		return isNaN(this.y);
	}

	isFinite (): boolean {
		return this.isFiniteX() || this.isFiniteY();
	}

	isFiniteX (): boolean {
		return isFinite(this.x);
	}

	isFiniteY (): boolean {
		return isFinite(this.y);
	}

	isEqualRotate (b: Vector2d): boolean {
		math.checkTypes([b], [Vector2d]);
		return this.rotate.toFixed(2) === b.rotate.toFixed(2);
	}

	isEqualInvertRotate (b: Vector2d): boolean {
		math.checkTypes([b], [Vector2d]);
		const ref: number = Math.abs(this.rotate.toFixed(2) - b.rotate.toFixed(2));
		return (179.9 < ref && ref < 180.1);
	}

	isCollinear (b: Vector2d): boolean {
		math.checkTypes([b], [Vector2d]);
		if (this.isZeroX() || this.isZeroY() || b.isZeroX() || b.isZeroY()) {
			const an: number = this.isZeroX() && !this.isZeroY() ? this.y : this.x;
			const bn: number = b.isZeroX() && !b.isZeroY() ? b.y : b.x;
			const n: number = bn / an;
			const nax: number = this.x * n;
			const nay: number = this.y * n;
			return b.x === nax && b.y === nay;
		} else {
			return this.x / b.x === this.y / b.y;
		}
	}

	isOrthogonal (b: Vector2d): boolean {
		math.checkTypes([b], [Vector2d]);
		return this.dot(b) === 0;
	}

};

export default Vector2d;