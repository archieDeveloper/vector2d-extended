import Vector2d from './Vector2d';

class MathVector2d {
	constructor () {
		this.functions = {
			add: (a: number, b: number) => a + b,
			subtract: (a: number, b: number) => a - b,
			multiply: (a: number, b: number) => a * b,
			divide: (a: number, b: number) => a / b,
			self: (a: number) => a
		};
	}

	staticVector (args, types, x, y) {
		const vx = x != null ? this.staticComponent('x', 2, args, types,x) : 0;
		const vy = y != null ? this.staticComponent('y', 2, args, types,y) : 0;
		return new Vector2d(vx, vy);
	}

	staticComponent (property, countArguments, args, argumentTypes, callback) {
		const argumentsLength = args.length;
		if (argumentsLength < countArguments) {
			throw new Error('Минимальное количество аргументов: ' + countArguments);
		}
		let a = this.checkType(args[0], Vector2d, property);
		for (let i = 1; i < argumentsLength; i++) {
			const b = this.checkType(args[i], argumentTypes[countArguments-2], property)
			a = callback(a, b);
		}
		return a;
	}

	vector ({ v, args, argsCount = 1, types = [Vector2d], x = null, y = null }) {
		if (x != null) {
			v.x = this.component(v, 'x', argsCount, args, types, x);
		}
		if (y != null) {
			v.y = this.component(v, 'y', argsCount, args, types, y);
		}
		return v;
	}

	component (v, property, countArguments, args, argumentTypes, callback) {
		const argumentsLength = args.length;
		if (argumentsLength < countArguments) {
			throw new Error('Минимальное количество аргументов: ' + countArguments);
		}
		let a = v[property];
		for (let i = 0; i < argumentsLength; i++) {
			const b = this.checkType(args[i], argumentTypes[countArguments-1], property);
			a = callback(a, b);
		}
		return a;
	}

	checkType (argument, type, property) {
		let value;
		if (typeof type === 'string') {
			if (typeof argument !== type) {
				throw new TypeError('1');
			}
			value = argument;
		} else {
			if (!(argument instanceof type)) {
				throw new TypeError('2');
			}
			value = argument[property];
		}
		return value;
	}

	checkTypes (args, types) {
		const argsLength = args.length;
		for (let i = 0; i < argsLength; i++) {
			if (typeof types[i] === 'string') {
				if (typeof args[i] !== types[i]) {
					throw new TypeError('3');
				}
			} else {
				if (!(args[i] instanceof types[i])) {
					throw new TypeError('4');
				}
			}
		}
	}
}

export default new MathVector2d;