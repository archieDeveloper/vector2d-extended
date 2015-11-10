'use strict'

class Vector2d

  # Конструктор
  #
  # @param [Number] x Компонент вектора X
  # @param [Number] y Компонент вектора Y
  #
  constructor: (x, y) ->
    if !(@ instanceof Vector2d)
      return new Vector2d x, y
    @x = x || 0
    @y = y || 0

  # Static Methods

  # Нулевой вектор
  #
  # @return [Vector2d]
  #
  @zero: ->
    new Vector2d

  # Орт
  #
  # @return [Vector2d]
  #
  @one: ->
    new Vector2d 1, 1

  # Единичный вектор направленный вверх
  #
  # @return [Vector2d]
  #
  @up: ->
    new Vector2d 0, -1

  # Единичный вектор направленный вниз
  #
  # @return [Vector2d]
  #
  @down: ->
    new Vector2d 0, 1

  # Единичный вектор направленный вправо
  #
  # @return [Vector2d]
  #
  @right: ->
    new Vector2d 1, 0

  # Единичный вектор направленный влево
  #
  # @return [Vector2d]
  #
  @left: ->
    new Vector2d -1, 0

  #
  @angle: (a, b)->
    dot = Vector2d::dot Vector2d::normalize(a), Vector2d::normalize(b)
    if dot < -1 then dot = -1
    if dot > 1 then dot = 1
    Math.acos(dot) * 57.29578

  #
  @clampMagnitude: (a, maxLength)->
    b = a.clone()
    if b.magnitudeSquared() > maxLength * maxLength
      b.normalize().multiply(maxLength)
    b

  #
  @distance: (a, b)->
    Vector2d::subtract(a, b).magnitude()

  #
  @dot: (a, b)->
    a.x * b.x + a.y * b.y

  # l = 1 = vec1, l = 0 = vec2, l = 0.5 = middle point of vec1 and vec2
  @lerp: (a, b, l)->
    if l < 0 then l = 0
    if l > 1 then l = 1
    new Vector2d(a.x+(b.x-a.x)*l, a.y+(b.y-a.y)*l)
  
  #
  @scale: (a, b)->
    new Vector2d a.x*b.x, a.y*b.y

  @add: (a, b)->
    new Vector2d a.x+b.x, a.y+b.y

  @subtract: (a, b)->
    new Vector2d a.x-b.x, a.y-b.y

  @multiply: (a, scalar)->
    new Vector2d a.x*scalar, a.y*scalar

  @divide: (a, scalar)->
    new Vector2d a.x/scalar, a.y/scalar

  @normalize: (a)->
    magnitude = do a.magnitude
    new Vector2d a.x/magnitude, a.y/magnitude

  @project: (a, b)->
    c = ((a.x * b.x)+(a.y * b.y)) / ((b.x*b.x)+(b.y*b.y))
    new Vector2d b.x*c, b.y*c

  @round: (a)->
    new Vector2d Math.round(a.x), Math.round(a.y)

  @invert: (a)->
    new Vector2d -a.x, -a.y

  # Methods

  # Returns Vector2d

  # Прибавить к текущему вектору вектор b
  #
  # @param [Vector2d] b 
  #
  # @return [Vector2d] this
  #
  add: (b)->
    @x += b.x
    @y += b.y
    @

  # Вычесть из текущего вектора вектор b
  #
  # @param [Vector2d] b 
  #
  # @return [Vector2d] this
  #
  subtract: (b)->
    @x -= b.x
    @y -= b.y
    @

  # Умножить вектор на скаляр
  #
  # @param [Number] scalar 
  #
  # @return [Vector2d] this
  #
  multiply: (scalar)->
    @x *= scalar
    @y *= scalar
    @

  # Разделить вектор на скаляр
  #
  # @param [Number] scalar 
  #
  # @return [Vector2d] this
  #
  divide: (scalar)->
    @x /= scalar
    @y /= scalar
    @

  # Нормализация вектора
  #
  # @return [Vector2d] this
  #
  normalize: ->
    magnitude = do @magnitude
    @x /= magnitude
    @y /= magnitude
    @

  # Проекция вектора b на текущий вектор
  #
  # @param [Vector2d] b
  #
  # @return [Vector2d] this
  #
  project: (b)->
    c = ((@x * b.x)+(@y * b.y)) / ((b.x*b.x)+(b.y*b.y))
    @x = b.x * c
    @y = b.y * c
    @

  # Округление вектора до целочисленного
  #
  # @return [Vector2d]
  #
  round: ->
    @x = Math.round(@x)
    @y = Math.round(@y)
    @

  # Устанавливает текущий вектор в 0
  #
  # @return [Vector2d]
  #
  zero: ->
    @x = @y = 0
    @

  # Клонирует текущий вектор
  #
  # @return [Vector2d]
  #
  clone: ->
    new Vector2d @x, @y

  # Меняет направление вектора на противоположное
  #
  # @return [Vector2d]
  #
  invert: ->
    @x = -@x
    @y = -@y
    @

  # l = 1 = vec1, l = 0 = vec2, l = 0.5 = middle point of vec1 and vec2
  lerp: (b, l)->
    if l < 0 then l = 0
    if l > 1 then l = 1
    @x = @x+(b.x-@x)*l
    @y = @y+(b.y-@y)*l
    @
  
  #
  scale: (b)->
    @x *= b.x
    @y *= b.y
    @

  clampMagnitude: (maxLength)->
    if @magnitudeSquared() > maxLength * maxLength
      @normalize().multiply(maxLength)
    @

  # Returns number

  # Длинна вектора
  #
  # @return [Number]
  #
  magnitude: ->
    Math.sqrt @lengthSquared()

  # Длинна ветора в квадрате
  #
  # @return [Number]
  #
  magnitudeSquared: ()->
    @x * @x + @y * @y
  
  # Длинна вектора
  #
  # @return [Number]
  #
  length: @magnitude

  # Длинна ветора в квадрате
  #
  # @return [Number]
  #
  lengthSquared: @magnitudeSquared

  # Поворот вектора в градусах
  #
  # @return [Number]
  #
  rotate: ->
    Math.atan2(@y, @x) * 180 / Math.PI

  # 
  #
  # @return [Number]
  #
  dot: (b)->
    @x * b.x + @y * b.y

  # 
  #
  # @return [Number]
  #
  cross: (b)->
    @x * b.y - @y * b.x

  # Дистанция между текущим вектором и вектором b
  #
  # @return [Number]
  #
  distance: (b)->
    Math.sqrt distanceSquared b

  # Дистанция между текущим вектором и вектором b в квадрате
  #
  # @return [Number]
  #
  distanceSquared: (b)->
    dx = @x - b.x
    dy = @y - b.y
    dx * dx + dy * dy

  # возвращает угол между векторами
  angle: (b)->
    dot = Vector2d::dot Vector2d::normalize(a), Vector2d::normalize(b)
    if dot < -1 then dot = -1
    if dot > 1 then dot = 1
    Math.acos(dot) * 57.29578

  # Returns boolean

  # Является ли вектор нулевым?
  #
  # @return [Boolean]
  #
  isZero: ->
    @x is 0 and @y is 0

  # Равен ли текущий вектор, вектору b?
  #
  # @param [Vector2d] b
  #
  # @return [Boolean]
  #
  isEqual: (b)->
    @x is b.x and @y is b.y

  # Является ли вектор NaN
  #
  # @return [Boolean]
  #
  isNaN: ->
    isNaN @.x or isNaN @.y


module.exports = Vector2d