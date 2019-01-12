const chai = require('chai');
chai.should();
const { assert } = chai;

const Vector2d = require('../index');

describe('#instance', function() {

  const create = function(v1, v2){
    it('Создание вектора', () => assert.instanceOf(v1, Vector2d, 'Не является экземпляром класса Vector2d'));
    it('Имеет свойства X и Y', function() {
      assert.property(v1, 'x', 'Нет свойства X');
      return assert.property(v1, 'y', 'Нет свойства Y');
    });
    return it(`Свойсвта X и Y равны ${v2.x} и ${v2.y}`, function() {
      assert.propertyVal(v1, 'x', v2.x, `Свойство X не равно ${v2.x}`);
      return assert.propertyVal(v1, 'y', v2.y, `Свойство Y не равно ${v2.y}`);
    });
  };

  const notChange = (o1, o2)=>
    it('Объекты не изменяются', () => assert.deepEqual(o1, o2))
  ;

  const returnMyself = (v1, v2) =>
    it('Возвращает сам себя', () => assert.strictEqual(v1, v2, 'Не является тем же самым объектом'))
  ;

  const checkMethod = function(methodName, args){
    let a, b, v1, v2;
    if (args.length === 4) {
      a = new Vector2d(args[0], args[1]);
      v1 = a[methodName]();
      v2 = new Vector2d(args[2], args[3]);
      create(v1, v2);
      return returnMyself(a, v1);
    } else if (args.length === 5) {
      a = new Vector2d(args[0], args[1]);
      b = args[2];
      v1 = a[methodName](b);
      v2 = new Vector2d(args[3], args[4]);
      create(v1, v2);
      return returnMyself(a, v1);
    } else if (args.length === 6) {
      a = new Vector2d(args[0], args[1]);
      b = new Vector2d(args[2], args[3]);
      const bClone = b.clone();
      v1 = a[methodName](b);
      v2 = new Vector2d(args[4], args[5]);
      create(v1, v2);
      notChange(b, bClone);
      return returnMyself(a, v1);
    }
  };

  describe('#add', function() {
    const args = [
      1, 1,
      2, 2,
      3, 3
    ];
    return checkMethod('add', args);
  });

  describe('#addX', function() {
    const args = [
      1, 1,
      2, 2,
      3, 1
    ];
    return checkMethod('addX', args);
  });

  describe('#addY', function() {
    const args = [
      1, 1,
      2, 2,
      1, 3
    ];
    return checkMethod('addY', args);
  });

  describe('#subtract', function() {
    const args = [
      6, 7,
      4, 3,
      2, 4
    ];
    return checkMethod('subtract', args);
  });

  describe('#scale', function() {
    const args = [
      6, 7,
      4, 3,
      6*4, 7*3
    ];
    return checkMethod('scale', args);
  });

  describe('#multiply', function() {
    const args = [
      6, 7,
      5,
      6*5, 7*5
    ];
    return checkMethod('multiply', args);
  });

  describe('#divide', function() {
    const args = [
      6, 7,
      5,
      6/5, 7/5
    ];
    return checkMethod('divide', args);
  });

  describe('#normalize', function() {
    const args = [
      6, 7,
      0.6507913734559685, 0.7592566023652966
    ];
    return checkMethod('normalize', args);
  });

  describe('#project', function() {
    const args = [
      6, 7,
      4, 3,
      7.2, 5.4
    ];
    return checkMethod('project', args);
  });

  describe('#round', function() {
    const args = [
      1.231, 1.236,
      1, 1
    ];
    return checkMethod('round', args);
  });

  describe('#zero', function() {
    const args = [
      45, -456,
      0, 0
    ];
    return checkMethod('zero', args);
  });

  describe('#equate', function() {
    const args = [
      6, 7,
      4, 3,
      4, 3
    ];
    return checkMethod('equate', args);
  });

  return describe('#invert', function() {
    const args = [
      6, 7,
      -6, -7
    ];
    return checkMethod('invert', args);
  });
});