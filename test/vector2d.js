 // const chai = require('chai');
 // chai.should();
 // const { assert } = chai;
 // const Vector2d = require('../index');

 // describe('#Vector2d', function() {

 //   describe('#constructor', function() {
 //     const params = [
 //       {x:0,    y:0},
 //       {x:1,    y:1},
 //       {x:200,  y:0},
 //       {x:0,    y:200},
 //       {x:200,  y:200},
 //       {x:-1,   y:0},
 //       {x:0,    y:-1},
 //       {x:-234, y:-324}
 //     ];
 //     const init = function(param){
 //       const vector2d = new Vector2d(param.x, param.y);
 //       it(`Иницилизация вектора с параметрами ${param.x} и ${param.y}`, () => assert.instanceOf(vector2d, Vector2d, 'Не является экземпляром класса Vector2d'));
 //       it('Имеет свойства X и Y', function() {
 //         assert.property(vector2d, 'x', 'Нет свойства X');
 //         return assert.property(vector2d, 'y', 'Нет свойства Y');
 //       });
 //       return it(`Свойсвта X и Y равны ${param.x} и ${param.y}`, function() {
 //         assert.propertyVal(vector2d, 'x', param.x, `Свойство X не равно ${param.x}`);
 //         return assert.propertyVal(vector2d, 'y', param.y, `Свойство Y не равно ${param.y}`);
 //       });
 //     };
 //     return (() => {
 //       const result = [];
 //       for (let ind in params) {
 //         const param = params[ind];
 //         result.push(init(param));
 //       }
 //       return result;
 //     })();
 //   });

 //   describe('Существование методов', function() {
 //     const methods = [
 //       'clone',
 //       'add', 'addX', 'addY',
 //       'subtract', 'subtractX', 'subtractY',
 //       'multiply', 'multiplyX', 'multiplyY',
 //       'multiplyScalar', 'multiplyScalarX', 'multiplyScalarY',
 //       'invert', 'invertX', 'invertY',
 //       'length', 'lengthSquared', 'normalize', 'round',
 //       'isZero', 'project'
 //     ];
 //     const isset = function(method){
 //       const vector2d = new Vector2d;
 //       return it(`Существует метод ${method}`, () => assert.typeOf(vector2d[method], 'function', `Нет метода ${method}`));
 //     };
 //     return (() => {
 //       const result = [];
 //       for (let ind in methods) {
 //         const method = methods[ind];
 //         result.push(isset(method));
 //       }
 //       return result;
 //     })();
 //   });

 //   describe('#clone', function() {
 //     let vector2d = undefined;
 //     beforeEach(() => vector2d = new Vector2d(2, 8));
 //     it('Возвращается копия объекта, который вызывал метод clone', function() {
 //       const newVector2d = (vector2d.clone)();
 //       assert.instanceOf(newVector2d, Vector2d, 'Не является экземпляром класса Vector2d');
 //       return assert.notStrictEqual(newVector2d, vector2d, 'Является тем же самым объектом');
 //     });
 //     return it('Клонирование вектора', function() {
 //       const newVector2d = (vector2d.clone)();
 //       assert.strictEqual(newVector2d.x, vector2d.x, 'Не правильный результат клонирования в свойстве X');
 //       assert.strictEqual(newVector2d.y, vector2d.y, 'Не правильный результат клонирования в свойстве Y');
 //       assert.strictEqual(vector2d.x, 2, 'Клонирование не должно изменять у оригинального объекта свойство X');
 //       return assert.strictEqual(vector2d.y, 8, 'Клонирование не должно изменять у оригинального объекта свойство Y');
 //     });
 //   });

 //   describe('Сложение', function() {
 //     describe('#add', function() {
 //       let firstVector2d = new Vector2d;
 //       let secondVector2d = new Vector2d;
 //       beforeEach(function() {
 //         firstVector2d = new Vector2d(2, 8);
 //         return secondVector2d = new Vector2d(5, 6);
 //       });
 //       it('Возвращается объект который вызывал метод add', function() {
 //         const newVector2d = firstVector2d.add(secondVector2d);
 //         assert.instanceOf(newVector2d, Vector2d, 'Не является экземпляром класса Vector2d');
 //         return assert.strictEqual(newVector2d, firstVector2d, 'Не является тем же самым объектом');
 //       });
 //       return it('Сложение векторов', function() {
 //         const cloneSecondVector2d = (secondVector2d.clone)();
 //         firstVector2d.add(secondVector2d);
 //         assert.strictEqual(firstVector2d.x, 2+5, 'Не правильный результат сложения в свойстве X');
 //         assert.strictEqual(firstVector2d.y, 8+6, 'Не правильный результат сложения в свойстве Y');
 //         assert.strictEqual(cloneSecondVector2d.x, secondVector2d.x, 'Сложение не должно изменять свойство X у входящего вектора');
 //         return assert.strictEqual(cloneSecondVector2d.y, secondVector2d.y, 'Сложение не должно изменять свойство Y у входящего вектора');
 //       });
 //     });
 //     describe('#addX', function() {
 //       let firstVector2d = new Vector2d;
 //       let secondVector2d = new Vector2d;
 //       beforeEach(function() {
 //         firstVector2d = new Vector2d(2, 8);
 //         return secondVector2d = new Vector2d(5, 6);
 //       });
 //       it('Возвращается объект который вызывал метод addX', function() {
 //         const newVector2d = firstVector2d.addX(secondVector2d);
 //         assert.instanceOf(newVector2d, Vector2d, 'Не является экземпляром класса Vector2d');
 //         return assert.strictEqual(newVector2d, firstVector2d, 'Не является тем же самым объектом');
 //       });
 //       return it('Сложение векторов', function() {
 //         const cloneSecondVector2d = (secondVector2d.clone)();
 //         firstVector2d.addX(secondVector2d);
 //         assert.strictEqual(firstVector2d.x, 2+5, 'Не правильный результат сложения в свойстве X');
 //         assert.strictEqual(firstVector2d.y, 8, 'Не правильный результат сложения в свойстве Y');
 //         assert.strictEqual(cloneSecondVector2d.x, secondVector2d.x, 'Сложение не должно изменять свойство X у входящего вектора');
 //         return assert.strictEqual(cloneSecondVector2d.y, secondVector2d.y, 'Сложение не должно изменять свойство Y у входящего вектора');
 //       });
 //     });
 //     return describe('#addY', function() {
 //       let firstVector2d = new Vector2d;
 //       let secondVector2d = new Vector2d;
 //       beforeEach(function() {
 //         firstVector2d = new Vector2d(2, 8);
 //         return secondVector2d = new Vector2d(5, 6);
 //       });
 //       it('Возвращается объект который вызывал метод addY', function() {
 //         const newVector2d = firstVector2d.addY(secondVector2d);
 //         assert.instanceOf(newVector2d, Vector2d, 'Не является экземпляром класса Vector2d');
 //         return assert.strictEqual(newVector2d, firstVector2d, 'Не является тем же самым объектом');
 //       });
 //       return it('Сложение векторов', function() {
 //         const cloneSecondVector2d = (secondVector2d.clone)();
 //         firstVector2d.addY(secondVector2d);
 //         assert.strictEqual(firstVector2d.x, 2, 'Не правильный результат сложения в свойстве X');
 //         assert.strictEqual(firstVector2d.y, 8+6, 'Не правильный результат сложения в свойстве Y');
 //         assert.strictEqual(cloneSecondVector2d.x, secondVector2d.x, 'Сложение не должно изменять свойство X у входящего вектора');
 //         return assert.strictEqual(cloneSecondVector2d.y, secondVector2d.y, 'Сложение не должно изменять свойство Y у входящего вектора');
 //       });
 //     });
 //   });

 //   describe('Вычитание', function() {
 //     describe('#subtract', function() {
 //       let firstVector2d = new Vector2d;
 //       let secondVector2d = new Vector2d;
 //       beforeEach(function() {
 //         firstVector2d = new Vector2d(2, 8);
 //         return secondVector2d = new Vector2d(5, 6);
 //       });
 //       it('Возвращается объект который вызывал метод subtract', function() {
 //         const newVector2d = firstVector2d.subtract(secondVector2d);
 //         assert.instanceOf(newVector2d, Vector2d, 'Не является экземпляром класса Vector2d');
 //         return assert.strictEqual(newVector2d, firstVector2d, 'Не является тем же самым объектом');
 //       });
 //       return it('Вычитание векторов', function() {
 //         const cloneSecondVector2d = (secondVector2d.clone)();
 //         firstVector2d.subtract(secondVector2d);
 //         assert.strictEqual(firstVector2d.x, 2-5, 'Не правильный результат вычитание в свойстве X');
 //         assert.strictEqual(firstVector2d.y, 8-6, 'Не правильный результат вычитания в свойстве Y');
 //         assert.strictEqual(cloneSecondVector2d.x, secondVector2d.x, 'Вычитание не должно изменять свойство X у входящего вектора');
 //         return assert.strictEqual(cloneSecondVector2d.y, secondVector2d.y, 'Вычитание не должно изменять свойство Y у входящего вектора');
 //       });
 //     });
 //     describe('#subtractX', function() {
 //       let vec1 = new Vector2d;
 //       let vec2 = new Vector2d;
 //       beforeEach(function() {
 //         vec1 = new Vector2d(2, 8);
 //         return vec2 = new Vector2d(5, 6);
 //       });
 //       it('Возвращается объект который вызывал метод subtractX', function() {
 //         const vec1New = vec1.subtractX(vec2);
 //         assert.instanceOf(vec1New, Vector2d, 'Не является экземпляром класса Vector2d');
 //         return assert.strictEqual(vec1New, vec1, 'Не является тем же самым объектом');
 //       });
 //       return it('Вычитание векторов', function() {
 //         const vec2Clone = (vec2.clone)();
 //         vec1.subtractX(vec2);
 //         assert.strictEqual(vec1.x, 2-5, 'Не правильный результат вычитание в свойстве X');
 //         assert.strictEqual(vec1.y, 8, 'Не правильный результат вычитания в свойстве Y');
 //         assert.strictEqual(vec2Clone.x, vec2.x, 'Вычитание не должно изменять свойство X у входящего вектора');
 //         return assert.strictEqual(vec2Clone.y, vec2.y, 'Вычитание не должно изменять свойство Y у входящего вектора');
 //       });
 //     });
 //     return describe('#subtractY', function() {
 //       let vec1 = new Vector2d;
 //       let vec2 = new Vector2d;
 //       beforeEach(function() {
 //         vec1 = new Vector2d(2, 8);
 //         return vec2 = new Vector2d(5, 6);
 //       });
 //       it('Возвращается объект который вызывал метод subtractY', function() {
 //         const vec1New = vec1.subtractY(vec2);
 //         assert.instanceOf(vec1New, Vector2d, 'Не является экземпляром класса Vector2d');
 //         return assert.strictEqual(vec1New, vec1, 'Не является тем же самым объектом');
 //       });
 //       return it('Вычитание векторов', function() {
 //         const vec2Clone = (vec2.clone)();
 //         vec1.subtractY(vec2);
 //         assert.strictEqual(vec1.x, 2, 'Не правильный результат вычитание в свойстве X');
 //         assert.strictEqual(vec1.y, 8-6, 'Не правильный результат вычитания в свойстве Y');
 //         assert.strictEqual(vec2Clone.x, vec2.x, 'Вычитание не должно изменять свойство X у входящего вектора');
 //         return assert.strictEqual(vec2Clone.y, vec2.y, 'Вычитание не должно изменять свойство Y у входящего вектора');
 //       });
 //     });
 //   });

 //   describe('Умножение', function() {
 //     describe('#multiply', function() {
 //       let vec1 = new Vector2d(2, 8);
 //       let vec2 = new Vector2d(5, 6);
 //       beforeEach(function() {
 //         vec1 = new Vector2d(2, 8);
 //         return vec2 = new Vector2d(5, 6);
 //       });
 //       it('Возвращается объект который вызывал метод multiply', function() {
 //         const vec1New = vec1.multiply(vec2);
 //         assert.instanceOf(vec1New, Vector2d, 'Не является экземпляром класса Vector2d');
 //         return assert.strictEqual(vec1New, vec1, 'Не является тем же самым объектом');
 //       });
 //       return it('Скалярное умножение векторов', function() {
 //         const vec2Clone = (vec2.clone)();
 //         vec1.multiply(vec2);
 //         assert.strictEqual(vec1.x, 2*5, 'Не правильный результат умножения в свойстве X');
 //         assert.strictEqual(vec1.y, 8*6, 'Не правильный результат умножения в свойстве Y');
 //         assert.strictEqual(vec2Clone.x, vec2.x, 'Умножение векторов не должно изменять свойство X у входящего вектора');
 //         return assert.strictEqual(vec2Clone.y, vec2.y, 'Умножение векторов не должно изменять свойство Y у входящего вектора');
 //       });
 //     });
 //     describe('#multiplyX', function() {
 //       let vec1 = new Vector2d(2, 8);
 //       let vec2 = new Vector2d(5, 6);
 //       beforeEach(function() {
 //         vec1 = new Vector2d(2, 8);
 //         return vec2 = new Vector2d(5, 6);
 //       });
 //       it('Возвращается объект который вызывал метод multiplyX', function() {
 //         const vec1New = vec1.multiplyX(vec2);
 //         assert.instanceOf(vec1New, Vector2d, 'Не является экземпляром класса Vector2d');
 //         return assert.strictEqual(vec1New, vec1, 'Не является тем же самым объектом');
 //       });
 //       return it('Скалярное умножение векторов', function() {
 //         const vec2Clone = (vec2.clone)();
 //         vec1.multiplyX(vec2);
 //         assert.strictEqual(vec1.x, 2*5, 'Не правильный результат умножения в свойстве X');
 //         assert.strictEqual(vec1.y, 8, 'Не правильный результат умножения в свойстве Y');
 //         assert.strictEqual(vec2Clone.x, vec2.x, 'Умножение векторов не должно изменять свойство X у входящего вектора');
 //         return assert.strictEqual(vec2Clone.y, vec2.y, 'Умножение векторов не должно изменять свойство Y у входящего вектора');
 //       });
 //     });
 //     describe('#multiplyY', function() {
 //       let vec1 = new Vector2d(2, 8);
 //       let vec2 = new Vector2d(5, 6);
 //       beforeEach(function() {
 //         vec1 = new Vector2d(2, 8);
 //         return vec2 = new Vector2d(5, 6);
 //       });
 //       it('Возвращается объект который вызывал метод multiplyY', function() {
 //         const vec1New = vec1.multiplyY(vec2);
 //         assert.instanceOf(vec1New, Vector2d, 'Не является экземпляром класса Vector2d');
 //         return assert.strictEqual(vec1New, vec1, 'Не является тем же самым объектом');
 //       });
 //       return it('Скалярное умножение векторов', function() {
 //         const vec2Clone = (vec2.clone)();
 //         vec1.multiplyY(vec2);
 //         assert.strictEqual(vec1.x, 2, 'Не правильный результат умножения в свойстве X');
 //         assert.strictEqual(vec1.y, 8*6, 'Не правильный результат умножения в свойстве Y');
 //         assert.strictEqual(vec2Clone.x, vec2.x, 'Умножение векторов не должно изменять свойство X у входящего вектора');
 //         return assert.strictEqual(vec2Clone.y, vec2.y, 'Умножение векторов не должно изменять свойство Y у входящего вектора');
 //       });
 //     });
 //     describe('#multiplyScalar', function() {
 //       let vector2d = new Vector2d(2, 8);
 //       let scalar = 3;
 //       beforeEach(function() {
 //         vector2d = new Vector2d(2, 8);
 //         return scalar = 3;
 //       });
 //       it('Возвращается объект который вызывал метод multiplyScalar', function() {
 //         const newVector2d = vector2d.multiplyScalar(scalar);
 //         assert.instanceOf(newVector2d, Vector2d, 'Не является экземпляром класса Vector2d');
 //         return assert.strictEqual(newVector2d, vector2d, 'Не является тем же самым объектом');
 //       });
 //       return it('Умножение на скаляр', function() {
 //         vector2d.multiplyScalar(scalar);
 //         assert.strictEqual(vector2d.x, 2*3, 'Не правильный результат умножения в свойстве X');
 //         return assert.strictEqual(vector2d.y, 8*3, 'Не правильный результат умножения в свойстве Y');
 //       });
 //     });
 //     describe('#multiplyScalarX', function() {
 //       let vec1 = new Vector2d(2, 8);
 //       let scalar = 3;
 //       beforeEach(function() {
 //         vec1 = new Vector2d(2, 8);
 //         return scalar = 3;
 //       });
 //       it('Возвращается объект который вызывал метод multiplyScalarX', function() {
 //         const vec1New = vec1.multiplyScalarX(scalar);
 //         assert.instanceOf(vec1New, Vector2d, 'Не является экземпляром класса Vector2d');
 //         return assert.strictEqual(vec1New, vec1, 'Не является тем же самым объектом');
 //       });
 //       return it('Умножение на скаляр', function() {
 //         vec1.multiplyScalarX(scalar);
 //         assert.strictEqual(vec1.x, 2*3, 'Не правильный результат умножения в свойстве X');
 //         return assert.strictEqual(vec1.y, 8, 'Не правильный результат умножения в свойстве Y');
 //       });
 //     });
 //     return describe('#multiplyScalarY', function() {
 //       let vec1 = new Vector2d(2, 8);
 //       let scalar = 3;
 //       beforeEach(function() {
 //         vec1 = new Vector2d(2, 8);
 //         return scalar = 3;
 //       });
 //       it('Возвращается объект который вызывал метод multiplyScalarY', function() {
 //         const vec1New = vec1.multiplyScalarY(scalar);
 //         assert.instanceOf(vec1New, Vector2d, 'Не является экземпляром класса Vector2d');
 //         return assert.strictEqual(vec1New, vec1, 'Не является тем же самым объектом');
 //       });
 //       return it('Умножение на скаляр', function() {
 //         vec1.multiplyScalarY(scalar);
 //         assert.strictEqual(vec1.x, 2, 'Не правильный результат умножения в свойстве X');
 //         return assert.strictEqual(vec1.y, 8*3, 'Не правильный результат умножения в свойстве Y');
 //       });
 //     });
 //   });

 //   describe('Деление', function() {
 //     describe('#divideScalar', function() {
 //       let vector2d = new Vector2d(2, 8);
 //       let scalar = 3;
 //       beforeEach(function() {
 //         vector2d = new Vector2d(2, 8);
 //         return scalar = 3;
 //       });
 //       it('Возвращается объект который вызывал метод divideScalar', function() {
 //         const newVector2d = vector2d.divideScalar(scalar);
 //         assert.instanceOf(newVector2d, Vector2d, 'Не является экземпляром класса Vector2d');
 //         return assert.strictEqual(newVector2d, vector2d, 'Не является тем же самым объектом');
 //       });
 //       return it('Деление на скаляр', function() {
 //         vector2d.divideScalar(scalar);
 //         assert.strictEqual(vector2d.x, 2/3, 'Не правильный результат деления в свойстве X');
 //         return assert.strictEqual(vector2d.y, 8/3, 'Не правильный результат деления в свойстве Y');
 //       });
 //     });
 //     describe('#divideScalarX', function() {
 //       let vec1 = new Vector2d(2, 8);
 //       let scalar = 3;
 //       beforeEach(function() {
 //         vec1 = new Vector2d(2, 8);
 //         return scalar = 3;
 //       });
 //       it('Возвращается объект который вызывал метод divideScalarX', function() {
 //         const vec1New = vec1.divideScalarX(scalar);
 //         assert.instanceOf(vec1New, Vector2d, 'Не является экземпляром класса Vector2d');
 //         return assert.strictEqual(vec1New, vec1, 'Не является тем же самым объектом');
 //       });
 //       return it('Деление на скаляр', function() {
 //         vec1.divideScalarX(scalar);
 //         assert.strictEqual(vec1.x, 2/3, 'Не правильный результат деления в свойстве X');
 //         return assert.strictEqual(vec1.y, 8, 'Не правильный результат деления в свойстве Y');
 //       });
 //     });
 //     return describe('#divideScalarY', function() {
 //       let vec1 = new Vector2d(2, 8);
 //       let scalar = 3;
 //       beforeEach(function() {
 //         vec1 = new Vector2d(2, 8);
 //         return scalar = 3;
 //       });
 //       it('Возвращается объект который вызывал метод divideScalarY', function() {
 //         const vec1New = vec1.divideScalarY(scalar);
 //         assert.instanceOf(vec1New, Vector2d, 'Не является экземпляром класса Vector2d');
 //         return assert.strictEqual(vec1New, vec1, 'Не является тем же самым объектом');
 //       });
 //       return it('Деление на скаляр', function() {
 //         vec1.divideScalarY(scalar);
 //         assert.strictEqual(vec1.x, 2, 'Не правильный результат деления в свойстве X');
 //         return assert.strictEqual(vec1.y, 8/3, 'Не правильный результат деления в свойстве Y');
 //       });
 //     });
 //   });

 //   describe('#length', function() {
 //     const vector2d = new Vector2d(2, 8);
 //     return it('Вычисление длинны вектора', function() {
 //       const cloneVector2d = (vector2d.clone)();
 //       const vector2dLength = (vector2d.length)();
 //       assert.isNumber(vector2dLength, 'Не является числом');
 //       assert.strictEqual(vector2dLength, Math.sqrt((2 * 2) + (8 * 8)), 'Не правильный результат вычисления длинны');
 //       assert.strictEqual(cloneVector2d.x, vector2d.x, 'Вычисление длинны не должно изменять свойство X у вектора');
 //       return assert.strictEqual(cloneVector2d.y, vector2d.y, 'Вычисление длинны не должно изменять свойство Y у вектора');
 //     });
 //   });

 //   describe('#lengthSquared', function() {
 //     const vector2d = new Vector2d(2, 8);
 //     return it('Вычисление длинны вектора', function() {
 //       const cloneVector2d = (vector2d.clone)();
 //       const vector2dLength = (vector2d.lengthSquared)();
 //       assert.isNumber(vector2dLength, 'Не является числом');
 //       assert.strictEqual(vector2dLength, (2 * 2) + (8 * 8), 'Не правильный результат вычисления длинны');
 //       assert.strictEqual(cloneVector2d.x, vector2d.x, 'Вычисление длинны не должно изменять свойство X у вектора');
 //       return assert.strictEqual(cloneVector2d.y, vector2d.y, 'Вычисление длинны не должно изменять свойство Y у вектора');
 //     });
 //   });

 //   describe('#normalize', function() {
 //     let x = undefined;
 //     let y = undefined;
 //     let vector2d = undefined;
 //     beforeEach(function() {
 //       x = 0;
 //       y = 234;
 //       return vector2d = new Vector2d(x, y);
 //     });
 //     it('Возвращается объект который вызывал метод normalize', function() {
 //       const newVector2d = (vector2d.normalize)();
 //       assert.instanceOf(newVector2d, Vector2d, 'Не является экземпляром класса Vector2d');
 //       return assert.strictEqual(newVector2d, vector2d, 'Не является тем же самым объектом');
 //     });
 //     it('Нормализация вектора', function() {
 //       (vector2d.normalize)();
 //       const vector2dLenght = Math.sqrt((x * x) + (y * y));
 //       assert.strictEqual(vector2d.x, x/vector2dLenght, 'Не правильный результат нормализации в свойстве X');
 //       assert.strictEqual(vector2d.y, y/vector2dLenght, 'Не правильный результат нормализации в свойстве Y');
 //       assert.operator(vector2d.x, '<=', 1, 'Вектор после нормализации не может быть больше 1 - свойство X');
 //       assert.operator(vector2d.y, '<=', 1, 'Вектор после нормализации не может быть больше 1 - свойство Y');
 //       assert.operator(vector2d.x, '>=', -1, 'Вектор после нормализации не может быть меньше -1 - свойство X');
 //       return assert.operator(vector2d.y, '>=', -1, 'Вектор после нормализации не может быть больше -1 - свойство Y');
 //     });
 //     return it('Нормализация нулевого вектора', function() {
 //       vector2d = new Vector2d;
 //       (vector2d.normalize)();
 //       assert(isNaN(vector2d.x), 'Не правильный результат нормализации в свойстве X');
 //       return assert(isNaN(vector2d.y), 'Не правильный результат нормализации в свойстве Y');
 //     });
 //   });

 //   describe('#project', function() {
 //     let firstVector2d = undefined;
 //     let secondVector2d = undefined;
 //     beforeEach(function() {
 //       firstVector2d = new Vector2d(2, 4);
 //       return secondVector2d = new Vector2d(5, 8);
 //     });
 //     it('Возвращается объект который вызывал метод project', function() {
 //       const newVector2d = firstVector2d.project(secondVector2d);
 //       assert.instanceOf(newVector2d, Vector2d, 'Не является экземпляром класса Vector2d');
 //       return assert.strictEqual(newVector2d, firstVector2d, 'Не является тем же самым объектом');
 //     });
 //     return it('Проецирует вектор', function() {
 //       const cloneSecondVector2d = (secondVector2d.clone)();
 //       firstVector2d.project(secondVector2d);
 //       const a = (2 * 5)+(4 * 8);
 //       const b = (5*5)+(8*8);
 //       const c = a / b;
 //       assert.strictEqual(firstVector2d.x, c * secondVector2d.x, 'Не правильный результат проекции в свойстве X');
 //       assert.strictEqual(firstVector2d.y, c * secondVector2d.y, 'Не правильный результат проекции в свойстве Y');
 //       assert.strictEqual(cloneSecondVector2d.x, secondVector2d.x, 'Вычисление проекции не должно изменять свойство X у входящего вектора');
 //       return assert.strictEqual(cloneSecondVector2d.y, secondVector2d.y, 'Вычисление проекции не должно изменять свойство Y у входящего вектора');
 //     });
 //   });

 //   describe('#round', function() {
 //     let vec1 = undefined;
 //     beforeEach(() => vec1 = new Vector2d(2.234, 4.45));
 //     it('Возвращается объект который вызывал метод round', function() {
 //       const vec1New = (vec1.round)();
 //       assert.instanceOf(vec1New, Vector2d, 'Не является экземпляром класса Vector2d');
 //       return assert.strictEqual(vec1New, vec1, 'Не является тем же самым объектом');
 //     });
 //     return it('Округляет вектор', function() {
 //       (vec1.round)();
 //       assert.strictEqual(vec1.x, Math.round(vec1.x), 'Не правильный результат округления в свойстве X');
 //       return assert.strictEqual(vec1.y, Math.round(vec1.y), 'Не правильный результат округления в свойстве Y');
 //     });
 //   });

 //   return describe('#isZero', function() {
 //     let vec1 = undefined;
 //     let vec2 = undefined;
 //     beforeEach(function() {
 //       vec1 = new Vector2d(2, 4);
 //       return vec2 = new Vector2d;
 //     });
 //     it('Возвращается булев тип который вызывал метод isZero', function() {
 //       const res = (vec1.isZero)();
 //       return assert.typeOf(res, 'boolean', 'Не является boolean');
 //     });
 //     return it('Проверка на нулевой вектор', function() {
 //       const res1 = (vec1.isZero)();
 //       const res2 = (vec2.isZero)();
 //       assert.strictEqual(res1, false, 'Этот вектор не нулейвой');
 //       return assert.strictEqual(res2, true, 'Этот вектор нулевой');
 //     });
 //   });
 // });