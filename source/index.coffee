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

  # Укорачивает вектор до максимальной длинны
  #
  # @param [Vector2d] a Вектор который нужно укоротить
  # @param [Number] maxLength Максимальная длинна вектора
  #
  # @return [Vector2d] A new vector
  #
  @clampMagnitude: (a, maxLength)->
    b = a.clone()
    if b.magnitudeSquared > maxLength * maxLength
      b.normalize().multiply(maxLength)
    b

  # 
  #
  # @param [Vector2d] a Первый вектор
  # @param [Vector2d] b Второй вектор
  # @param [Number] l Коофицент (0 соответсвует вектору a, 1 - вектору b, 0.5 среднее между a и b)
  #
  # @return [Vector2d] A new vector
  #
  @lerp: (a, b, l)->
    if l < 0 then l = 0
    if l > 1 then l = 1
    new Vector2d(a.x+(b.x-a.x)*l, a.y+(b.y-a.y)*l)
  
  # Покомпонентное умножение векторов
  #
  # @param [Vector2d] a Первый вектор
  # @param [Vector2d] b Второй вектор
  #
  # @return [Vector2d] A new vector
  #
  @scale: (a, b)->
    new Vector2d a.x*b.x, a.y*b.y

  # Сложение векторов
  #
  # @param [Vector2d] a Первый вектор
  # @param [Vector2d] b Второй вектор
  #
  # @return [Vector2d] A new vector
  #
  @add: (a, b)->
    new Vector2d a.x+b.x, a.y+b.y

  # Вычитание векторов
  #
  # @param [Vector2d] a Первый вектор
  # @param [Vector2d] b Второй вектор
  #
  # @return [Vector2d] A new vector
  #
  @subtract: (a, b)->
    new Vector2d a.x-b.x, a.y-b.y

  # умножение вектора на скаляр
  #
  # @param [Vector2d] a Первый вектор
  # @param [Vector2d] b Второй вектор
  #
  # @return [Vector2d] A new vector
  #
  @multiply: (a, scalar)->
    new Vector2d a.x*scalar, a.y*scalar

  # Деление вектора на скаляр
  #
  # @param [Vector2d] a Первый вектор
  # @param [Vector2d] b Второй вектор
  #
  # @return [Vector2d] A new vector
  #
  @divide: (a, scalar)->
    new Vector2d a.x/scalar, a.y/scalar

  # Нормализация вектора
  #
  # @param [Vector2d] a Вектор
  #
  # @return [Vector2d] A new vector
  #
  @normalize: (a)->
    magnitude = a.magnitude
    new Vector2d a.x/magnitude, a.y/magnitude

  # Проекция вектора a на вектор b
  #
  # @param [Vector2d] a Первый вектор
  # @param [Vector2d] b Второй вектор
  #
  # @return [Vector2d] A new vector
  #
  @project: (a, b)->
    c = ((a.x * b.x)+(a.y * b.y)) / ((b.x*b.x)+(b.y*b.y))
    new Vector2d b.x*c, b.y*c

  # Округление компонент вектора
  #
  # @param [Vector2d] a Вектор
  #
  # @return [Vector2d] A new vector
  #
  @round: (a)->
    new Vector2d Math.round(a.x), Math.round(a.y)

  # Инвертирование вектора
  #
  # @param [Vector2d] a Вектор
  #
  # @return [Vector2d] A new vector
  #
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
    @length = 1
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
  # @return [Vector2d] this
  #
  round: ->
    @x = Math.round(@x)
    @y = Math.round(@y)
    @

  # Устанавливает текущий вектор в 0
  #
  # @return [Vector2d] this
  #
  zero: ->
    @x = @y = 0
    @

  # Клонирует текущий вектор
  #
  # @return [Vector2d] A new vector
  #
  clone: ->
    new Vector2d @x, @y

  # Меняет направление вектора на противоположное
  #
  # @return [Vector2d] this
  #
  invert: ->
    @x = -@x
    @y = -@y
    @

  # 
  #
  # @param [Vector2d] b Второй вектор
  # @param [Number] l Коофицент
  #
  # @return [Vector2d] this
  #
  lerp: (b, l)->
    if l < 0 then l = 0
    if l > 1 then l = 1
    @x = @x+(b.x-@x)*l
    @y = @y+(b.y-@y)*l
    @
  
  # Умножение векторов по компонентно
  #
  # @param [Vector2d] b Второй вектор
  #
  # @return [Vector2d] this
  #
  scale: (b)->
    @x *= b.x
    @y *= b.y
    @
  
  # Обрезать вектор по максимальной длине
  #
  # @param [Number] maxLength Максимальная длинна вектора
  #
  # @return [Vector2d] this
  #
  clampMagnitude: (maxLength)->
    if @magnitudeSquared > maxLength * maxLength
      @normalize().multiply(maxLength)
    @

  # Returns number

  # Длинна вектора
  #
  # @return [Number]
  #
  Object.defineProperty Vector2d::, 'magnitude', {
    get: ->
      Math.sqrt @magnitudeSquared
    set: (value)->
      magnitude = @magnitude
      @x = (@x / magnitude) * value
      @y = (@y / magnitude) * value
      value
  }

  # Длинна ветора в квадрате
  #
  # @return [Number]
  #
  Object.defineProperty Vector2d::, 'magnitudeSquared', {
    get: ->
      @x*@x+@y*@y
    set: (value)->
      @length = Math.sqrt value
      value
  }

  # Длинна вектора
  #
  # @return [Number]
  #
  Object.defineProperty Vector2d::, 'length', {
    get: ->
      @magnitude
    set: (value)->
      @magnitude = value
  }

  # Длинна ветора в квадрате
  #
  # @return [Number]
  #
  Object.defineProperty Vector2d::, 'lengthSquared', {
    get: ->
      @magnitudeSquared
    set: (value)->
      @magnitudeSquared = value
  }

  # Поворот вектора в градусах
  #
  # @return [Number]
  #
  Object.defineProperty Vector2d::, 'rotate', {
    get: ->
      Math.atan2(@y, @x) * 180 / Math.PI
    set: (dir)->
      len = @magnitude
      @x = Math.cos(dir*Math.PI/180)*len
      @y = Math.sin(dir*Math.PI/180)*len
      dir
  }

  # Dot product
  #
  # @return [Number]
  #
  dot: (b)->
    @x * b.x + @y * b.y

  # Cross product
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

  # Угол между векторами
  #
  # @param [Vector2d] b Второй вектор
  #
  # @return [Number]
  #
  angle: (b)->
    aMagnitude = @magnitude
    bMagnitude = b.magnitude
    dot = (@x/aMagnitude) * (b.x/bMagnitude) + (@y/aMagnitude) * (b.y/bMagnitude)
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

  # Является ли вектор числом
  #
  # @return [Boolean]
  #
  isFinite: ->
    isFinite @.x or isFinite @.y


if module? and module.exports?
  module.exports = Vector2d
else
  window.Vector2d = Vector2d