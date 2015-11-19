chai = require 'chai'
do chai.should
assert = chai.assert

Vector2d = require '../source/index'

describe '#static', ->

  create = (v1, v2)->
    it 'Создание вектора', ->
      assert.instanceOf v1, Vector2d, 'Не является экземпляром класса Vector2d'
    it 'Имеет свойства X и Y', ->
      assert.property v1, 'x', 'Нет свойства X'
      assert.property v1, 'y', 'Нет свойства Y'
    it "Свойсвта X и Y равны #{v2.x} и #{v2.y}", ->
      assert.propertyVal v1, 'x', v2.x, 'Свойство X не равно '+v2.x
      assert.propertyVal v1, 'y', v2.y, 'Свойство Y не равно '+v2.y

  notChange = (o1, o2)->
    it 'Объекты не изменяются', ->
      assert.deepEqual o1, o2

  checkMethod = (methodName, args)->
    if args.length == 2
      v1 = Vector2d[methodName]()
      v2 = Vector2d args[0], args[1]
      create v1, v2
    else if args.length == 4
      a = Vector2d args[0], args[1]
      aClone = a.clone()
      v1 = Vector2d[methodName] a
      v2 = Vector2d args[2], args[3]
      create v1, v2
      notChange a, aClone
    else if args.length == 5
      a = Vector2d args[0], args[1]
      b = args[2]
      aClone = a.clone()
      v1 = Vector2d[methodName] a, b
      v2 = Vector2d args[3], args[4]
      create v1, v2
      notChange a, aClone
    else if args.length == 6
      a = Vector2d args[0], args[1]
      b = Vector2d args[2], args[3]
      aClone = a.clone()
      bClone = b.clone()
      v1 = Vector2d[methodName] a, b
      v2 = Vector2d args[4], args[5]
      create v1, v2
      notChange a, aClone
      notChange b, bClone

  describe '#zero', ->
    args = [0, 0]
    checkMethod 'zero', args

  describe '#one', ->
    args = [1, 1]
    checkMethod 'one', args

  describe '#up', ->
    args = [0, -1]
    checkMethod 'up', args

  describe '#down', ->
    args = [0, 1]
    checkMethod 'down', args

  describe '#right', ->
    args = [1, 0]
    checkMethod 'right', args

  describe '#left', ->
    args = [-1, 0]
    checkMethod 'left', args

  describe '#clampMagnitude', ->
    args = [
      100, 101
      10
      7.035801295960805, 7.106159308920414
    ]
    checkMethod 'clampMagnitude', args
    args = [
      1, 1
      10
      1, 1
    ]
    checkMethod 'clampMagnitude', args

  describe '#lerp', ->
    params = [
      [0, 1]
      [1, 2]
      [0.5, 1.5]
      [-1, 1]
      [2, 2]
    ]
    itLerp = (param)->
      a = Vector2d 1, 1
      b = Vector2d 2, 2
      aClone = a.clone()
      bClone = b.clone()
      v1 = Vector2d.lerp a, b, param[0]
      v2 = Vector2d param[1], param[1]
      create v1, v2
      notChange a, aClone
      notChange b, bClone
    for ind, param of params
      itLerp param

  describe '#scale', ->
    args = [
      6,7
      4,3
      6*4, 7*3
    ]
    checkMethod 'scale', args

  describe '#scaleX', ->
    args = [
      6,7
      4,3
      6*4, 0
    ]
    checkMethod 'scaleX', args

  describe '#scaleY', ->
    args = [
      6,7
      4,3
      0, 7*3
    ]
    checkMethod 'scaleY', args

  describe '#add', ->
    args = [
      6,7
      4,3
      10, 10
    ]
    checkMethod 'add', args

  describe '#addX', ->
    args = [
      6,7
      4,3
      10, 0
    ]
    checkMethod 'addX', args

  describe '#addY', ->
    args = [
      6,7
      4,3
      0, 10
    ]
    checkMethod 'addY', args

  describe '#subtract', ->
    args = [
      6,7
      4,3
      2, 4
    ]
    checkMethod 'subtract', args

  describe '#subtractX', ->
    args = [
      6,7
      4,3
      2, 0
    ]
    checkMethod 'subtractX', args

  describe '#subtractY', ->
    args = [
      6,7
      4,3
      0, 4
    ]
    checkMethod 'subtractY', args

  describe '#multiply', ->
    args = [
      6, 7
      5
      6*5, 7*5
    ]
    checkMethod 'multiply', args

  describe '#multiplyX', ->
    args = [
      6, 7
      5
      6*5, 7
    ]
    checkMethod 'multiplyX', args

  describe '#multiplyY', ->
    args = [
      6, 7
      5
      6, 7*5
    ]
    checkMethod 'multiplyY', args

  describe '#divide', ->
    args = [
      6, 7
      5
      6/5, 7/5
    ]
    checkMethod 'divide', args

  describe '#divideX', ->
    args = [
      6, 7
      5
      6/5, 7
    ]
    checkMethod 'divideX', args

  describe '#divideY', ->
    args = [
      6, 7
      5
      6, 7/5
    ]
    checkMethod 'divideY', args

  describe '#normalize', ->
    args = [
      11, 46
      0.23257321322170788, 0.9725788916544148
    ]
    checkMethod 'normalize', args

  describe '#project', ->
    args = [
      11,46
      32,34
      28.124770642201835, 29.88256880733945
    ]
    checkMethod 'project', args

  describe '#round', ->
    args = [
      1.234, 1.234
      1, 1
    ]
    checkMethod 'round', args

  describe '#invert', ->
    args = [
      1, 1
      -1, -1
    ]
    checkMethod 'invert', args