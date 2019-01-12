class Vector2d {
	constructor (public x: number = 0, public y: number = 0) {}

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

	static clampMagnitude (a: Vector2d, maxLength: number): Vector2d {
		return a.clone().clampMagnitude(maxLength);
	}

	static lerp (a: Vector2d, b: Vector2d, l: number): Vector2d {
		return a.clone().lerp(b, l);
	}

	static scale (a: Vector2d, b: Vector2d): Vector2d {
		return a.clone().scaleX(b).scaleY(b);
	}

	static scaleX (a: Vector2d, b: Vector2d): Vector2d {
		return new Vector2d(a.x, 0).scaleX(b);
	}

	static scaleY (a: Vector2d, b: Vector2d): Vector2d {
		return new Vector2d(0, a.y).scaleY(b);
	}

	static add (a: Vector2d, b: Vector2d): Vector2d {
		return a.clone().addX(b).addY(b);
	}

	static addX (a: Vector2d, b: Vector2d): Vector2d {
		return new Vector2d(a.x, 0).addX(b);
	}

	static addY (a: Vector2d, b: Vector2d) {
		return new Vector2d(0, a.y).addY(b);
	}

	static subtract (a: Vector2d, b: Vector2d): Vector2d {
		return a.clone().subtractX(b).subtractY(b);
	}

	static subtractX (a: Vector2d, b: Vector2d): Vector2d {
		return new Vector2d(a.x, 0).subtractX(b);
	}

	static subtractY (a: Vector2d, b: Vector2d): Vector2d {
		return new Vector2d(0, a.y).subtractY(b);
	}

	static multiply (a: Vector2d, b: number): Vector2d {
		return a.clone().multiplyX(b).multiplyY(b);
	}

	static multiplyX (a: Vector2d, b: number): Vector2d {
		return a.clone().multiplyX(b);
	}

	static multiplyY (a: Vector2d, b: number): Vector2d {
		return a.clone().multiplyY(b);
	}

	static divide (a: Vector2d, b: number): Vector2d {
		return a.clone().divideX(b).divideY(b);
	}

	static divideX (a: Vector2d, b: number): Vector2d {
		return a.clone().divideX(b);
	}

	static divideY (a: Vector2d, b: number): Vector2d {
		return a.clone().divideY(b);
	}

	static normalize (a: Vector2d): Vector2d {
		return a.clone().normalize();
	}

	static project (a: Vector2d, b: Vector2d): Vector2d {
		return a.clone().project(b);
	}

	static round (a: Vector2d): Vector2d {
		return a.clone().round();
	}

	static roundX (a: Vector2d): Vector2d {
		return a.clone().roundX();
	}

	static roundY (a: Vector2d): Vector2d {
		return a.clone().roundY();
	}

	static invert (a: Vector2d): Vector2d {
		return a.clone().invert();
	}

	static invertX (a: Vector2d): Vector2d {
		return a.clone().invertX();
	}

	static invertY (a: Vector2d): Vector2d {
		return a.clone().invertY();
	}

	// Methods

	// Returns Vector2d

	set (x: number, y: number): Vector2d {
		this.x = x;
		this.y = y;
		return this;
	}

	add (a: Vector2d): Vector2d {
		return this.addX(a).addY(a);
	}

	addX (a: Vector2d): Vector2d {
		this.x += a.x;
		return this;
	}

	addY (a: Vector2d): Vector2d {
		this.y += a.y;
		return this;
	}

	subtract (a: Vector2d): Vector2d {
		return this.subtractX(a).subtractY(a);
	}

	subtractX (a: Vector2d): Vector2d {
		this.x -= a.x;
		return this;
	}

	subtractY (a: Vector2d): Vector2d {
		this.y -= a.y;
		return this;
	}

	multiply (a: number): Vector2d {
		return this.multiplyX(a).multiplyY(a);
	}

	multiplyX (a: number): Vector2d {
		this.x *= a;
		return this;
	}

	multiplyY (a: number): Vector2d {
		this.y *= a;
		return this;
	}

	divide (a: number): Vector2d {
		return this.divideX(a).divideY(a);
	}

	divideX (a: number): Vector2d {
		this.x /= a;
		return this;
	}

	divideY (a: number): Vector2d {
		this.y /= a;
		return this;
	}

	normalize (): Vector2d {
		this.magnitude = 1;
		return this;
	}

	project (b: Vector2d): Vector2d {
		const c: number = ((this.x * b.x) + (this.y * b.y)) / ((b.x * b.x) + (b.y * b.y));
		return this.set(b.x * c, b.y * c);
	}

	round (): Vector2d {
		return this.roundX().roundY();
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
		return this.zeroX().zeroY();
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
		return this.equateX(b).equateY(b);
	}

	equateX (b: Vector2d): Vector2d {
		this.x = b.x;
		return this;
	}

	equateY (b: Vector2d): Vector2d {
		this.y = b.y;
		return this;
	}

	invert (): Vector2d {
		return this.invertX().invertY();
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
		if (l < 0) {
			l = 0;
		} else if (l > 1) {
			l = 1;
		}
		return this.set(this.x + (b.x - this.x) * l, this.y + (b.y - this.y) * l);
	}

	scale (a: Vector2d): Vector2d {
		return this.scaleX(a).scaleY(a);
	}

	scaleX (a: Vector2d): Vector2d {
		this.x *= a.x;
		return this;
	}

	scaleY (a: Vector2d): Vector2d {
		this.y *= a.y;
		return this;
	}

	clampMagnitude (maxLength: number): Vector2d {
		if (this.magnitudeSquared > maxLength * maxLength) {
			this.magnitude = maxLength;
		}
		return this;
	}

	// Returns number
	get rotate (): number {
		return Math.atan2(this.y, this.x) * 180 / Math.PI;
	}
	set rotate (dir: number) {
		const len: number = this.magnitude;
		this.set(Math.cos(dir * Math.PI / 180) * len, Math.sin(dir * Math.PI / 180) * len);
	}

	get magnitudeSquared (): number {
		return this.x * this.x + this.y * this.y;
	}
	set magnitudeSquared (value: number) {
		this.magnitude = Math.sqrt(value);
	}

	get magnitude (): number {
		return Math.sqrt(this.magnitudeSquared);
	}
	set magnitude (value: number) {
		const magnitude: number = this.magnitude;
		this.set((this.x / magnitude) * value, (this.y / magnitude) * value)
	}

	dot (b: Vector2d): number {
		return this.x * b.x + this.y * b.y;
	}

	cross (b: Vector2d): number {
		return this.x * b.y - this.y * b.x;
	}

	distance (b: Vector2d): number {
		return Math.sqrt(this.distanceSquared(b));
	}

	distanceSquared (b: Vector2d): number {
		const dx: number = this.x - b.x;
		const dy: number = this.y - b.y;
		return dx * dx + dy * dy;
	}

	angle (b: Vector2d): number {
		const aMagnitude: number = this.magnitude;
		const bMagnitude: number = b.magnitude;
		let dot = (this.x/aMagnitude) * (b.x/bMagnitude) + (this.y/aMagnitude) * (b.y/bMagnitude);
		if (dot < -1) {
			dot = -1;
		} else if (dot > 1) {
			dot = 1;
		}
		return Math.acos(dot) * 57.29578;
	}

	areaTriangle (b: Vector2d): number {
		return this.areaParallelogram(b) / 2;
	}

	areaParallelogram (b: Vector2d): number {
		return Math.abs(this.cross(b));
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
		return this.isEqualX(b) && this.isEqualY(b);
	}

	isEqualX (b: Vector2d): boolean {
		return this.x === b.x;
	}

	isEqualY (b: Vector2d): boolean {
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
		return this.rotate.toFixed(2) === b.rotate.toFixed(2);
	}

	isEqualInvertRotate (b: Vector2d): boolean {
		const ref = Math.abs(parseFloat(this.rotate.toFixed(2)) - parseFloat(b.rotate.toFixed(2)));
		return (179.9 < ref && ref < 180.1);
	}

	isCollinear (b: Vector2d): boolean {
		if (this.isZeroX() || this.isZeroY() || b.isZeroX() || b.isZeroY()) {
			const an: number = this.isZeroX() && !this.isZeroY() ? this.y : this.x;
			const bn: number = b.isZeroX() && !b.isZeroY() ? b.y : b.x;
			const n: number = bn / an;
			const nax: number = this.x * n;
			const nay: number = this.y * n;
			return b.x === nax && b.y === nay;
		}
		return this.x / b.x === this.y / b.y;
	}

	isOrthogonal (b: Vector2d): boolean {
		return this.dot(b) === 0;
	}
};

export default Vector2d;