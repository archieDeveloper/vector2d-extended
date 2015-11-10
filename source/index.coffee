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
  @angle: (vec1, vec2)->
    1

  #
  @clampMagnitude: (vec1, maxLength)->
    new Vector2d

  #
  @distance: (vec1, vec2)->
    1
  
  #
  @dot: (vec1, vec2)->
    1

  # l = 1 = vec1, l = 0 = vec2, l = 0.5 = middle point of vec1 and vec2
  @lerp: (vec1, vec2, l)->
    new Vector2d
  
  #
  @scale: (vec1, vec2)->
    new Vector2d

  @add: (vec1, vec2)->
    vx = vec1.x + vec2.x
    vy = vec1.y + vec2.y
    new Vector2d vx, vy

  @subtract: (vec1, vec2)->
    vx = vec1.x - vec2.x
    vy = vec1.y - vec2.y
    new Vector2d vx, vy

  @multiply: (vec1, scalar)->
    vx = vec1.x * scalar
    vy = vec1.y * scalar
    new Vector2d vx, vy

  @divide: (vec1, scalar)->
    vx = vec1.x / scalar
    vy = vec1.y / scalar
    new Vector2d vx, vy

  @normalize: (vec1)->
    magnitude = do vec1.magnitude
    vx = vec1.x / magnitude
    vy = vec1.y / magnitude
    new Vector2d vx, vy

  @project: (vec1, vec2)->
    c = ((vec1.x * vec2.x)+(vec1.y * vec2.y)) / ((vec2.x*vec2.x)+(vec2.y*vec2.y))
    vx = vec2.x * c
    vy = vec2.y * c
    new Vector2d vx, vy

  @round: (vec1)->
    vx = Math.round(vec1.x)
    vy = Math.round(vec1.y)
    new Vector2d vx, vy

  @invert: (vec1)->
    vx = -vec1.x
    vy = -vec1.y
    new Vector2d vx, vy

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
  lerp: (vec2, l)->
    @
  
  #
  scale: (vec2)->
    @

    #
  clampMagnitude: (maxLength)->
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
  angle: (vec2)->
    1

  #
  distance: (vec2)->
    1
  
  #
  dot: (vec2)->
    1

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
