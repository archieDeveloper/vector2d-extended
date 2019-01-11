const chai = require('chai');
chai.should();
const { assert } = chai;

const Vector2d = require('../index');

describe('#static', function() {

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

  const checkMethod = function(methodName, args){
    let a, aClone, b, v1, v2;
    if (args.length === 2) {
      v1 = Vector2d[methodName]();
      v2 = new Vector2d(args[0], args[1]);
      return create(v1, v2);
    } else if (args.length === 4) {
      a = new Vector2d(args[0], args[1]);
      aClone = a.clone();
      v1 = Vector2d[methodName](a);
      v2 = new Vector2d(args[2], args[3]);
      create(v1, v2);
      return notChange(a, aClone);
    } else if (args.length === 5) {
      a = new Vector2d(args[0], args[1]);
      b = args[2];
      aClone = a.clone();
      v1 = Vector2d[methodName](a, b);
      v2 = new Vector2d(args[3], args[4]);
      create(v1, v2);
      return notChange(a, aClone);
    } else if (args.length === 6) {
      a = new Vector2d(args[0], args[1]);
      b = new Vector2d(args[2], args[3]);
      aClone = a.clone();
      const bClone = b.clone();
      v1 = Vector2d[methodName](a, b);
      v2 = new Vector2d(args[4], args[5]);
      create(v1, v2);
      notChange(a, aClone);
      return notChange(b, bClone);
    }
  };

  describe('#clampMagnitude', function() {
    let args = [
      100, 101,
      10,
      7.035801295960805, 7.106159308920414
    ];
    checkMethod('clampMagnitude', args);
    args = [
      1, 1,
      10,
      1, 1
    ];
    return checkMethod('clampMagnitude', args);
  });

  describe('#lerp', function() {
    const params = [
      [0, 1],
      [1, 2],
      [0.5, 1.5],
      [-1, 1],
      [2, 2]
    ];
    const itLerp = function(param){
      const a = new Vector2d(1, 1);
      const b = new Vector2d(2, 2);
      const aClone = a.clone();
      const bClone = b.clone();
      const v1 = Vector2d.lerp(a, b, param[0]);
      const v2 = new Vector2d(param[1], param[1]);
      create(v1, v2);
      notChange(a, aClone);
      return notChange(b, bClone);
    };
    return (() => {
      const result = [];
      for (let ind in params) {
        const param = params[ind];
        result.push(itLerp(param));
      }
      return result;
    })();
  });

  describe('#scale', function() {
    const args = [
      6,7,
      4,3,
      6*4, 7*3
    ];
    return checkMethod('scale', args);
  });

  describe('#scaleX', function() {
    const args = [
      6,7,
      4,3,
      6*4, 0
    ];
    return checkMethod('scaleX', args);
  });

  describe('#scaleY', function() {
    const args = [
      6,7,
      4,3,
      0, 7*3
    ];
    return checkMethod('scaleY', args);
  });

  describe('#add', function() {
    const args = [
      6,7,
      4,3,
      10, 10
    ];
    return checkMethod('add', args);
  });

  describe('#addX', function() {
    const args = [
      6,7,
      4,3,
      10, 0
    ];
    return checkMethod('addX', args);
  });

  describe('#addY', function() {
    const args = [
      6,7,
      4,3,
      0, 10
    ];
    return checkMethod('addY', args);
  });

  describe('#subtract', function() {
    const args = [
      6,7,
      4,3,
      2, 4
    ];
    return checkMethod('subtract', args);
  });

  describe('#subtractX', function() {
    const args = [
      6,7,
      4,3,
      2, 0
    ];
    return checkMethod('subtractX', args);
  });

  describe('#subtractY', function() {
    const args = [
      6,7,
      4,3,
      0, 4
    ];
    return checkMethod('subtractY', args);
  });

  describe('#multiply', function() {
    const args = [
      6, 7,
      5,
      6*5, 7*5
    ];
    return checkMethod('multiply', args);
  });

  describe('#multiplyX', function() {
    const args = [
      6, 7,
      5,
      6*5, 7
    ];
    return checkMethod('multiplyX', args);
  });

  describe('#multiplyY', function() {
    const args = [
      6, 7,
      5,
      6, 7*5
    ];
    return checkMethod('multiplyY', args);
  });

  describe('#divide', function() {
    const args = [
      6, 7,
      5,
      6/5, 7/5
    ];
    return checkMethod('divide', args);
  });

  describe('#divideX', function() {
    const args = [
      6, 7,
      5,
      6/5, 7
    ];
    return checkMethod('divideX', args);
  });

  describe('#divideY', function() {
    const args = [
      6, 7,
      5,
      6, 7/5
    ];
    return checkMethod('divideY', args);
  });

  describe('#normalize', function() {
    const args = [
      11, 46,
      0.23257321322170788, 0.9725788916544148
    ];
    return checkMethod('normalize', args);
  });

  describe('#project', function() {
    const args = [
      11,46,
      32,34,
      28.124770642201835, 29.88256880733945
    ];
    return checkMethod('project', args);
  });

  describe('#round', function() {
    const args = [
      1.234, 1.234,
      1, 1
    ];
    return checkMethod('round', args);
  });

  return describe('#invert', function() {
    const args = [
      1, 1,
      -1, -1
    ];
    return checkMethod('invert', args);
  });
});