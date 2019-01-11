const chai = require('chai');
chai.should();
const { assert } = chai;

const Vector2d = require('../index');

describe('#constructor', function() {
  const params = [
    {x:0,    y:0},
    {x:1,    y:1},
    {x:200,  y:0},
    {x:0,    y:200},
    {x:200,  y:200},
    {x:-1,   y:0},
    {x:0,    y:-1},
    {x:-234, y:-324}
  ];
  const init = function(operatorNew, param){
    let vector2d;
    if (param != null) {
      vector2d = new Vector2d(param.x, param.y);
    } else {
      param = {x:0, y:0};
      vector2d = new Vector2d;
    }
    it(`Иницилизация вектора с параметрами ${param.x} и ${param.y}`, () => assert.instanceOf(vector2d, Vector2d, 'Не является экземпляром класса Vector2d'));
    it('Имеет свойства X и Y', function() {
      assert.property(vector2d, 'x', 'Нет свойства X');
      return assert.property(vector2d, 'y', 'Нет свойства Y');
    });
    return it(`Свойсвта X и Y равны ${param.x} и ${param.y}`, function() {
      assert.propertyVal(vector2d, 'x', param.x, `Свойство X не равно ${param.x}`);
      return assert.propertyVal(vector2d, 'y', param.y, `Свойство Y не равно ${param.y}`);
    });
  };

  describe('Иницилизация без параметров', () => init(true));

  describe('Иницилизация с параметрами', () =>
    (() => {
      const result = [];
      for (let ind in params) {
        const param = params[ind];
        result.push(init(true, param));
      }
      return result;
    })()
  );
});
