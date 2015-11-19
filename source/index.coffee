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
    if not (a instanceof Vector2d) or typeof maxLength isnt 'number' then throw new TypeError
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
    if not (a instanceof Vector2d) or not (b instanceof Vector2d) or typeof l isnt 'number' then throw new TypeError
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
  @scale: ()->
    argumentsLength = arguments.length
    if argumentsLength < 2 then throw new Error
    if not (arguments[0] instanceof Vector2d) then throw new TypeError
    vx = arguments[0].x
    vy = arguments[0].y
    for i in [1...argumentsLength]
      if not (arguments[i] instanceof Vector2d) then throw new TypeError
      vx *= arguments[i].x
      vy *= arguments[i].y
    new Vector2d vx, vy
  
  # Покомпонентное умножение векторов
  #
  # @param [Vector2d] a Первый вектор
  # @param [Vector2d] b Второй вектор
  #
  # @return [Vector2d] A new vector
  #
  @scaleX: ()->
    argumentsLength = arguments.length
    if argumentsLength < 2 then throw new Error
    if not (arguments[0] instanceof Vector2d) then throw new TypeError
    vx = arguments[0].x
    for i in [1...argumentsLength]
      if not (arguments[i] instanceof Vector2d) then throw new TypeError
      vx *= arguments[i].x
    new Vector2d vx, 0
  
  # Покомпонентное умножение векторов
  #
  # @param [Vector2d] a Первый вектор
  # @param [Vector2d] b Второй вектор
  #
  # @return [Vector2d] A new vector
  #
  @scaleY: ()->
    argumentsLength = arguments.length
    if argumentsLength < 2 then throw new Error
    if not (arguments[0] instanceof Vector2d) then throw new TypeError
    vy = arguments[0].y
    for i in [1...argumentsLength]
      if not (arguments[i] instanceof Vector2d) then throw new TypeError
      vy *= arguments[i].y
    new Vector2d 0, vy

  # Сложение векторов
  #
  # @param [Vector2d] a Первый вектор
  # @param [Vector2d] b Второй вектор
  #
  # @return [Vector2d] A new vector
  #
  @add: ()->
    argumentsLength = arguments.length
    if argumentsLength < 2 then throw new Error
    if not (arguments[0] instanceof Vector2d) then throw new TypeError
    vx = arguments[0].x
    vy = arguments[0].y
    for i in [1...argumentsLength]
      if not (arguments[i] instanceof Vector2d) then throw new TypeError
      vx += arguments[i].x
      vy += arguments[i].y
    new Vector2d vx, vy

  # Сложение векторов
  #
  # @param [Vector2d] a Первый вектор
  # @param [Vector2d] b Второй вектор
  #
  # @return [Vector2d] A new vector
  #
  @addX: ()->
    argumentsLength = arguments.length
    if argumentsLength < 2 then throw new Error
    if not (arguments[0] instanceof Vector2d) then throw new TypeError
    vx = arguments[0].x
    for i in [1...argumentsLength]
      if not (arguments[i] instanceof Vector2d) then throw new TypeError
      vx += arguments[i].x
    new Vector2d vx, 0

  # Сложение векторов
  #
  # @param [Vector2d] a Первый вектор
  # @param [Vector2d] b Второй вектор
  #
  # @return [Vector2d] A new vector
  #
  @addY: ()->
    argumentsLength = arguments.length
    if argumentsLength < 2 then throw new Error
    if not (arguments[0] instanceof Vector2d) then throw new TypeError
    vy = arguments[0].y
    for i in [1...argumentsLength]
      if not (arguments[i] instanceof Vector2d) then throw new TypeError
      vy += arguments[i].y
    new Vector2d 0, vy

  # Вычитание векторов
  #
  # @param [Vector2d] a Первый вектор
  # @param [Vector2d] b Второй вектор
  #
  # @return [Vector2d] A new vector
  #
  @subtract: ()->
    argumentsLength = arguments.length
    if argumentsLength < 2 then throw new Error
    if not (arguments[0] instanceof Vector2d) then throw new TypeError
    vx = arguments[0].x
    vy = arguments[0].y
    for i in [1...argumentsLength]
      if not (arguments[i] instanceof Vector2d) then throw new TypeError
      vx -= arguments[i].x
      vy -= arguments[i].y
    new Vector2d vx, vy

  # Вычитание векторов
  #
  # @param [Vector2d] a Первый вектор
  # @param [Vector2d] b Второй вектор
  #
  # @return [Vector2d] A new vector
  #
  @subtractX: ()->
    argumentsLength = arguments.length
    if argumentsLength < 2 then throw new Error
    if not (arguments[0] instanceof Vector2d) then throw new TypeError
    vx = arguments[0].x
    for i in [1...argumentsLength]
      if not (arguments[i] instanceof Vector2d) then throw new TypeError
      vx -= arguments[i].x
    new Vector2d vx, 0

  # Вычитание векторов
  #
  # @param [Vector2d] a Первый вектор
  # @param [Vector2d] b Второй вектор
  #
  # @return [Vector2d] A new vector
  #
  @subtractY: ()->
    argumentsLength = arguments.length
    if argumentsLength < 2 then throw new Error
    if not (arguments[0] instanceof Vector2d) then throw new TypeError
    vy = arguments[0].x
    for i in [1...argumentsLength]
      if not (arguments[i] instanceof Vector2d) then throw new TypeError
      vy -= arguments[i].y
    new Vector2d 0, vy

  # умножение вектора на скаляр
  #
  # @param [Vector2d] a Первый вектор
  # @param [Number] b Скаляр
  #
  # @return [Vector2d] A new vector
  #
  @multiply: ()->
    argumentsLength = arguments.length
    if argumentsLength < 2 then throw new Error
    if not (arguments[0] instanceof Vector2d) then throw new TypeError
    vx = arguments[0].x
    vy = arguments[0].y
    for i in [1...argumentsLength]
      if typeof arguments[i] isnt "number" then throw new TypeError
      vx *= arguments[i]
      vy *= arguments[i]
    new Vector2d vx, vy

  # умножение вектора на скаляр
  #
  # @param [Vector2d] a Первый вектор
  # @param [Vector2d] b Второй вектор
  #
  # @return [Vector2d] A new vector
  #
  @multiplyX: ()->
    argumentsLength = arguments.length
    if argumentsLength < 2 then throw new Error
    if not (arguments[0] instanceof Vector2d) then throw new TypeError
    vx = arguments[0].x
    vy = arguments[0].y
    for i in [1...argumentsLength]
      if typeof arguments[i] isnt "number" then throw new TypeError
      vx *= arguments[i]
    new Vector2d vx, vy

  # умножение вектора на скаляр
  #
  # @param [Vector2d] a Первый вектор
  # @param [Vector2d] b Второй вектор
  #
  # @return [Vector2d] A new vector
  #
  @multiplyY: ()->
    argumentsLength = arguments.length
    if argumentsLength < 2 then throw new Error
    if not (arguments[0] instanceof Vector2d) then throw new TypeError
    vx = arguments[0].x
    vy = arguments[0].y
    for i in [1...argumentsLength]
      if typeof arguments[i] isnt "number" then throw new TypeError
      vx *= arguments[i]
    new Vector2d vx, vy

  # Деление вектора на скаляр
  #
  # @param [Vector2d] a Первый вектор
  # @param [Vector2d] b Второй вектор
  #
  # @return [Vector2d] A new vector
  #
  @divide: ()->
    argumentsLength = arguments.length
    if argumentsLength < 2 then throw new Error
    if not (arguments[0] instanceof Vector2d) then throw new TypeError
    vx = arguments[0].x
    vy = arguments[0].y
    for i in [1...argumentsLength]
      if typeof arguments[i] isnt "number" then throw new TypeError
      vx /= arguments[i]
      vy /= arguments[i]
    new Vector2d vx, vy

  # Деление вектора на скаляр
  #
  # @param [Vector2d] a Первый вектор
  # @param [Vector2d] b Второй вектор
  #
  # @return [Vector2d] A new vector
  #
  @divideX: ()->
    argumentsLength = arguments.length
    if argumentsLength < 2 then throw new Error
    if not (arguments[0] instanceof Vector2d) then throw new TypeError
    vx = arguments[0].x
    vy = arguments[0].y
    for i in [1...argumentsLength]
      if typeof arguments[i] isnt "number" then throw new TypeError
      vx /= arguments[i]
    new Vector2d vx, vy

  # Деление вектора на скаляр
  #
  # @param [Vector2d] a Первый вектор
  # @param [Vector2d] b Второй вектор
  #
  # @return [Vector2d] A new vector
  #
  @divideY: ()->
    argumentsLength = arguments.length
    if argumentsLength < 2 then throw new Error
    if not (arguments[0] instanceof Vector2d) then throw new TypeError
    vx = arguments[0].x
    vy = arguments[0].y
    for i in [1...argumentsLength]
      if typeof arguments[i] isnt "number" then throw new TypeError
      vy /= arguments[i]
    new Vector2d vx, vy

  # Нормализация вектора
  #
  # @param [Vector2d] a Вектор
  #
  # @return [Vector2d] A new vector
  #
  @normalize: (a)->
    if not (a instanceof Vector2d) then throw new TypeError
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
    if not (a instanceof Vector2d) or not (b instanceof Vector2d) then throw new TypeError
    c = ((a.x * b.x)+(a.y * b.y)) / ((b.x*b.x)+(b.y*b.y))
    new Vector2d b.x*c, b.y*c
                                                                                
  # Округление компонент вектора
  #
  # @param [Vector2d] a Вектор
  #
  # @return [Vector2d] A new vector
  #
  @round: (a)->
    if not (a instanceof Vector2d) then throw new TypeError
    new Vector2d Math.round(a.x), Math.round(a.y)

  # Округление компонент вектора
  #
  # @param [Vector2d] a Вектор
  #
  # @return [Vector2d] A new vector
  #
  @roundX: (a)->
    if not (a instanceof Vector2d) then throw new TypeError
    new Vector2d Math.round(a.x), a.y

  # Округление компонент вектора
  #
  # @param [Vector2d] a Вектор
  #
  # @return [Vector2d] A new vector
  #
  @roundY: (a)->
    if not (a instanceof Vector2d) then throw new TypeError
    new Vector2d a.x, Math.round(a.y)

  # Инвертирование вектора
  #
  # @param [Vector2d] a Вектор
  #
  # @return [Vector2d] A new vector
  #
  @invert: (a)->
    if not (a instanceof Vector2d) then throw new TypeError
    new Vector2d -a.x, -a.y

  # Инвертирование вектора
  #
  # @param [Vector2d] a Вектор
  #
  # @return [Vector2d] A new vector
  #
  @invertX: (a)->
    if not (a instanceof Vector2d) then throw new TypeError
    new Vector2d -a.x, a.y

  # Инвертирование вектора
  #
  # @param [Vector2d] a Вектор
  #
  # @return [Vector2d] A new vector
  #
  @invertY: (a)->
    if not (a instanceof Vector2d) then throw new TypeError
    new Vector2d a.x, -a.y

  # Methods

  # Returns Vector2d

  # Прибавить к текущему вектору вектор b
  #
  # @param [Vector2d] b 
  #
  # @return [Vector2d] this
  #
  add: ()->
    argumentsLength = arguments.length
    if argumentsLength < 1 then throw new Error
    for i in [0...argumentsLength]
      if not (arguments[i] instanceof Vector2d) then throw new TypeError
      @x += arguments[i].x
      @y += arguments[i].y
    @

  # Прибавить к текущему вектору вектор b
  #
  # @param [Vector2d] b 
  #
  # @return [Vector2d] this
  #
  addX: ()->
    argumentsLength = arguments.length
    if argumentsLength < 1 then throw new Error
    for i in [0...argumentsLength]
      if not (arguments[i] instanceof Vector2d) then throw new TypeError
      @x += arguments[i].x
    @

  # Прибавить к текущему вектору вектор b
  #
  # @param [Vector2d] b 
  #
  # @return [Vector2d] this
  #
  addY: ()->
    argumentsLength = arguments.length
    if argumentsLength < 1 then throw new Error
    for i in [0...argumentsLength]
      if not (arguments[i] instanceof Vector2d) then throw new TypeError
      @y += arguments[i].y
    @

  # Вычесть из текущего вектора вектор b
  #
  # @param [Vector2d] b 
  #
  # @return [Vector2d] this
  #
  subtract: (b)->
    argumentsLength = arguments.length
    if argumentsLength < 1 then throw new Error
    for i in [0...argumentsLength]
      if not (arguments[i] instanceof Vector2d) then throw new TypeError
      @x -= arguments[i].x
      @y -= arguments[i].y
    @

  # Вычесть из текущего вектора вектор b
  #
  # @param [Vector2d] b 
  #
  # @return [Vector2d] this
  #
  subtractX: (b)->
    argumentsLength = arguments.length
    if argumentsLength < 1 then throw new Error
    for i in [0...argumentsLength]
      if not (arguments[i] instanceof Vector2d) then throw new TypeError
      @x += arguments[i].x
    @

  # Вычесть из текущего вектора вектор b
  #
  # @param [Vector2d] b 
  #
  # @return [Vector2d] this
  #
  subtractY: (b)->
    argumentsLength = arguments.length
    if argumentsLength < 1 then throw new Error
    for i in [0...argumentsLength]
      if not (arguments[i] instanceof Vector2d) then throw new TypeError
      @y += arguments[i].y
    @

  # Умножить вектор на скаляр
  #
  # @param [Number] scalar 
  #
  # @return [Vector2d] this
  #
  multiply: (scalar)->
    @multiplyX scalar
    @multiplyY scalar
    @

  # Умножить вектор на скаляр
  #
  # @param [Number] scalar 
  #
  # @return [Vector2d] this
  #
  multiplyX: (scalar)->
    @x *= scalar
    @

  # Умножить вектор на скаляр
  #
  # @param [Number] scalar 
  #
  # @return [Vector2d] this
  #
  multiplyY: (scalar)->
    @y *= scalar
    @

  # Разделить вектор на скаляр
  #
  # @param [Number] scalar 
  #
  # @return [Vector2d] this
  #
  divide: (scalar)->
    @divideX scalar
    @divideY scalar
    @

  # Разделить вектор на скаляр
  #
  # @param [Number] scalar 
  #
  # @return [Vector2d] this
  #
  divideX: (scalar)->
    @x /= scalar
    @

  # Разделить вектор на скаляр
  #
  # @param [Number] scalar 
  #
  # @return [Vector2d] this
  #
  divideY: (scalar)->
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
    @roundX()
    @roundY()
    @

  # Округление вектора до целочисленного
  #
  # @return [Vector2d] this
  #
  roundX: ->
    @x = Math.round(@x)
    @

  # Округление вектора до целочисленного
  #
  # @return [Vector2d] this
  #
  roundY: ->
    @y = Math.round(@y)
    @

  # Устанавливает текущий вектор в 0
  #
  # @return [Vector2d] this
  #
  zero: ->
    @zeroX()
    @zeroY()
    @

  # Устанавливает текущий вектор в 0
  #
  # @return [Vector2d] this
  #
  zeroX: ->
    @x = 0
    @

  # Устанавливает текущий вектор в 0
  #
  # @return [Vector2d] this
  #
  zeroY: ->
    @y = 0
    @

  # Клонирует текущий вектор
  #
  # @return [Vector2d] A new vector
  #
  clone: ->
    new Vector2d @x, @y

  # Копирует компоненты вектора b
  #
  # @return [Vector2d] this
  #
  equate: (b)->
    @equateX b
    @equateY b
    @

  # Копирует компоненты вектора b
  #
  # @return [Vector2d] this
  #
  equateX: (b)->
    @x = b.x
    @

  # Копирует компоненты вектора b
  #
  # @return [Vector2d] this
  #
  equateY: (b)->
    @y = b.y
    @

  # Меняет направление вектора на противоположное
  #
  # @return [Vector2d] this
  #
  invert: ->
    @invertX()
    @invertY()
    @

  # Меняет направление вектора на противоположное
  #
  # @return [Vector2d] this
  #
  invertX: ->
    @x = -@x
    @

  # Меняет направление вектора на противоположное
  #
  # @return [Vector2d] this
  #
  invertY: ->
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
    @scaleX b
    @scaleY b
    @
  
  # Умножение векторов по компонентно
  #
  # @param [Vector2d] b Второй вектор
  #
  # @return [Vector2d] this
  #
  scaleX: (b)->
    @x *= b.x
    @
  
  # Умножение векторов по компонентно
  #
  # @param [Vector2d] b Второй вектор
  #
  # @return [Vector2d] this
  #
  scaleY: (b)->
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
    @isZeroX() and @isZeroY()

  # Является ли вектор нулевым?
  #
  # @return [Boolean]
  #
  isZeroX: ->
    @x is 0

  # Является ли вектор нулевым?
  #
  # @return [Boolean]
  #
  isZeroY: ->
    @y is 0

  # Равен ли текущий вектор, вектору b?
  #
  # @param [Vector2d] b
  #
  # @return [Boolean]
  #
  isEqual: (b)->
    @isEqualX(b) and @isEqualY(b)

  # Равен ли текущий вектор, вектору b?
  #
  # @param [Vector2d] b
  #
  # @return [Boolean]
  #
  isEqualX: (b)->
    @x is b.x

  # Равен ли текущий вектор, вектору b?
  #
  # @param [Vector2d] b
  #
  # @return [Boolean]
  #
  isEqualY: (b)->
    @y is b.y

  # Является ли вектор NaN
  #
  # @return [Boolean]
  #
  isNaN: ->
    @isNaNX() or @isNaNY

  # Является ли вектор NaN
  #
  # @return [Boolean]
  #
  isNaNX: ->
    isNaN @.x

  # Является ли вектор NaN
  #
  # @return [Boolean]
  #
  isNaNY: ->
    isNaN @.y

  # Является ли вектор числом
  #
  # @return [Boolean]
  #
  isFinite: ->
    @isFiniteX() or @isFiniteY()

  # Является ли вектор числом
  #
  # @return [Boolean]
  #
  isFiniteX: ->
    isFinite @.x

  # Является ли вектор числом
  #
  # @return [Boolean]
  #
  isFiniteY: ->
    isFinite @.y

  # Повернуты ли векторы в одну сторону?
  #
  # @return [Boolean]
  #
  isEqualRotate: (b)->
    @rotate.toFixed(2) is b.rotate.toFixed(2)


if module? and module.exports?
  module.exports = Vector2d
else
  window.Vector2d = Vector2d