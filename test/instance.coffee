chai = require 'chai'
do chai.should
assert = chai.assert

Vector2d = require '../source/index'

describe '#instance', ->

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

  returnMyself = (v1, v2) ->
    it 'Возвращает сам себя', ->
      assert.strictEqual v1, v2, 'Не является тем же самым объектом'

  checkMethod = (methodName, args)->
    if args.length == 4
      a = Vector2d args[0], args[1]
      v1 = a[methodName]()
      v2 = Vector2d args[2], args[3]
      create v1, v2
      returnMyself a, v1
    else if args.length == 5
      a = Vector2d args[0], args[1]
      b = args[2]
      v1 = a[methodName] b
      v2 = Vector2d args[3], args[4]
      create v1, v2
      returnMyself a, v1
    else if args.length == 6
      a = Vector2d args[0], args[1]
      b = Vector2d args[2], args[3]
      bClone = b.clone()
      v1 = a[methodName] b
      v2 = Vector2d args[4], args[5]
      create v1, v2
      notChange b, bClone
      returnMyself a, v1

  describe '#add', ->
    args = [
      1, 1
      2, 2
      3, 3
    ]
    checkMethod 'add', args

  describe '#addX', ->
    args = [
      1, 1
      2, 2
      3, 1
    ]
    checkMethod 'addX', args

  describe '#addY', ->
    args = [
      1, 1
      2, 2
      1, 3
    ]
    checkMethod 'addY', args

  describe '#subtract', ->
    args = [
      6, 7
      4, 3
      2, 4
    ]
    checkMethod 'subtract', args

  describe '#scale', ->
    args = [
      6, 7
      4, 3
      6*4, 7*3
    ]
    checkMethod 'scale', args

  describe '#multiply', ->
    args = [
      6, 7
      5
      6*5, 7*5
    ]
    checkMethod 'multiply', args

  describe '#divide', ->
    args = [
      6, 7
      5
      6/5, 7/5
    ]
    checkMethod 'divide', args

  describe '#normalize', ->
    args = [
      6, 7
      0.6507913734559685, 0.7592566023652966
    ]
    checkMethod 'normalize', args

  describe '#project', ->
    args = [
      6, 7
      4, 3
      7.2, 5.4
    ]
    checkMethod 'project', args

  describe '#round', ->
    args = [
      1.231, 1.236
      1, 1
    ]
    checkMethod 'round', args

  describe '#zero', ->
    args = [
      45, -456
      0, 0
    ]
    checkMethod 'zero', args

  describe '#equate', ->
    args = [
      6, 7
      4, 3
      4, 3
    ]
    checkMethod 'equate', args

  describe '#invert', ->
    args = [
      6, 7
      -6, -7
    ]
    checkMethod 'invert', args