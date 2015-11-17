chai = require 'chai'
do chai.should
assert = chai.assert

Vector2d = require '../source/index'

describe '#constructor', ->

  params = [
    {x:0,    y:0}
    {x:1,    y:1}
    {x:200,  y:0}
    {x:0,    y:200}
    {x:200,  y:200}
    {x:-1,   y:0}
    {x:0,    y:-1}
    {x:-234, y:-324}
  ]
  init = (operatorNew, param)->
    if param?
      if operatorNew is true
        vector2d = new Vector2d param.x, param.y
      else
        vector2d = Vector2d param.x, param.y
    else
      param = {x:0, y:0}
      if operatorNew is true
        vector2d = new Vector2d
      else
        vector2d = Vector2d()
    it 'Иницилизация вектора с параметрами '+param.x+' и '+param.y, ->
      assert.instanceOf vector2d, Vector2d, 'Не является экземпляром класса Vector2d'
    it 'Имеет свойства X и Y', ->
      assert.property vector2d, 'x', 'Нет свойства X'
      assert.property vector2d, 'y', 'Нет свойства Y'
    it 'Свойсвта X и Y равны '+param.x+' и '+param.y, ->
      assert.propertyVal vector2d, 'x', param.x, 'Свойство X не равно '+param.x
      assert.propertyVal vector2d, 'y', param.y, 'Свойство Y не равно '+param.y

  describe 'Иницилизация без параметров', ->
    init true

  describe 'Иницилизация без \'new\' и без параметров', ->
    init false

  describe 'Иницилизация с параметрами', ->
    for ind, param of params
      init true, param

  describe 'Иницилизация без \'new\' и с параметрами', ->
    for ind, param of params
      init false, param
