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

  describe '#zero', ->
    v1 = Vector2d.zero()
    v2 = Vector2d 0, 0
    create v1, v2

  describe '#one', ->
    v1 = Vector2d.one()
    v2 = Vector2d 1, 1
    create v1, v2

  describe '#up', ->
    v1 = Vector2d.up()
    v2 = Vector2d 0, -1
    create v1, v2

  describe '#down', ->
    v1 = Vector2d.down()
    v2 = Vector2d 0, 1
    create v1, v2

  describe '#right', ->
    v1 = Vector2d.right()
    v2 = Vector2d 1, 0
    create v1, v2

  describe '#left', ->
    v1 = Vector2d.left()
    v2 = Vector2d -1, 0
    create v1, v2

  describe '#scale', ->
    a = Vector2d 6, 7
    b = Vector2d 4, 3
    v1 = Vector2d.scale a, b
    v2 = Vector2d 6*4, 7*3
    create v1, v2

  describe '#add', ->
    a = Vector2d 6, 7
    b = Vector2d 4, 3
    v1 = Vector2d.add a, b
    v2 = Vector2d 10, 10
    create v1, v2

  describe '#subtract', ->
    a = Vector2d 6, 7
    b = Vector2d 4, 3
    v1 = Vector2d.subtract a, b
    v2 = Vector2d 2, 4
    create v1, v2

  describe '#multiply', ->
    a = Vector2d 6, 7
    b = 5
    v1 = Vector2d.multiply a, b
    v2 = Vector2d 6*5, 7*5
    create v1, v2

  describe '#divide', ->
    a = Vector2d 6, 7
    b = 5
    v1 = Vector2d.divide a, b
    v2 = Vector2d 6/5, 7/5
    create v1, v2

  describe '#normalize', ->
    a = Vector2d 11, 46
    v1 = Vector2d.normalize a
    v2 = Vector2d a.x/a.magnitude, a.y/a.magnitude
    create v1, v2
    it "Длина вектора равна единице", ->
      assert.propertyVal v1, 'length', 1, 'Длинна вектора не равна единице'
      assert.propertyVal v1, 'magnitude', 1, 'Длинна вектора не равна единице'

  describe '#round', ->
    a = Vector2d 1.234, 1.234
    v1 = Vector2d 1, 1
    v2 = Vector2d.round a
    create v1, v2

  describe '#invert', ->
    a = Vector2d 1, 1
    v1 = Vector2d -1, -1
    v2 = Vector2d.invert a
    create v1, v2