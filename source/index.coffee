'use strict'

class Vector2d

  mathFunctions = 
    add: (a, b)->
      a + b
    subtract: (a, b)->
      a - b
    multiply: (a, b)->
      a * b
    divide: (a, b)->
      a / b
    self: (a)->
      a

  staticMathVector = (args, types, x, y)->
    if x? then vx = staticMathComponent 'x', 2, args, types, x else vx = 0
    if y? then vy = staticMathComponent 'y', 2, args, types, y else vy = 0
    new Vector2d vx, vy

  staticMathComponent = (property, countArguments, args, argumentTypes, callback)->
    argumentsLength = args.length
    throw new Error if argumentsLength < countArguments
    a = checkType args[0], argumentTypes[0], property
    for i in [1...argumentsLength]
      b = checkType args[i], argumentTypes[countArguments-1], property
      a = callback(a, b)
    a

  mathVector = (args, argsCount, types, x, y)->
    @x = mathComponent.apply @, ['x', argsCount, args, types, x] if x?
    @y = mathComponent.apply @, ['y', argsCount, args, types, y] if y?
    @

  mathComponent = (property, countArguments, args, argumentTypes, callback)->
    argumentsLength = args.length
    throw new Error if argumentsLength < countArguments
    a = @[property]
    for i in [0...argumentsLength]
      b = checkType args[i], argumentTypes[countArguments-1], property
      a = callback(a, b)
    a

  checkType = (argument, type, property)->
    if typeof type is 'string'
      throw new TypeError if typeof argument isnt type
      value = argument
    else
      throw new TypeError if not (argument instanceof type)
      value = argument[property]
    value

  constructor: (x, y) ->
    if !(@ instanceof Vector2d)
      return new Vector2d x, y
    @x = x || 0
    @y = y || 0

  Object.defineProperty @, 'ZERO',
    get: ->
      new Vector2d
    set: ()->
      throw new Error

  Object.defineProperty @, 'ONE',
    get: ->
      new Vector2d 1, 1
    set: ()->
      throw new Error

  Object.defineProperty @, 'UP',
    get: ->
      new Vector2d 0, -1
    set: ()->
      throw new Error

  Object.defineProperty @, 'DOWN',
    get: ->
      new Vector2d 0, 1
    set: ()->
      throw new Error

  Object.defineProperty @, 'RIGHT',
    get: ->
      new Vector2d 1, 0
    set: ()->
      throw new Error

  Object.defineProperty @, 'LEFT',
    get: ->
      new Vector2d -1, 0
    set: ()->
      throw new Error

  @clampMagnitude: (a, maxLength)->
    throw new TypeError if not (a instanceof Vector2d) or typeof maxLength isnt 'number'
    b = do a.clone
    b.magnitude = maxLength if b.magnitudeSquared > maxLength * maxLength
    b

  @lerp: (a, b, l)->
    throw new TypeError if not (a instanceof Vector2d) or not (b instanceof Vector2d) or typeof l isnt 'number'
    l = 0 if l < 0
    l = 1 if l > 1
    new Vector2d a.x+(b.x-a.x)*l, a.y+(b.y-a.y)*l

  @scale: ()->
    staticMathVector arguments, [Vector2d, Vector2d], mathFunctions.multiply, mathFunctions.multiply

  @scaleX: ()->
    staticMathVector arguments, [Vector2d, Vector2d], mathFunctions.multiply

  @scaleY: ()->
    staticMathVector arguments, [Vector2d, Vector2d], null, mathFunctions.multiply

  @add: ()->
    staticMathVector arguments, [Vector2d, Vector2d], mathFunctions.add, mathFunctions.add

  @addX: ()->
    staticMathVector arguments, [Vector2d, Vector2d], mathFunctions.add

  @addY: ()->
    staticMathVector arguments, [Vector2d, Vector2d], null, mathFunctions.add

  @subtract: ()->
    staticMathVector arguments, [Vector2d, Vector2d], mathFunctions.subtract, mathFunctions.subtract

  @subtractX: ()->
    staticMathVector arguments, [Vector2d, Vector2d], mathFunctions.subtract

  @subtractY: ()->
    staticMathVector arguments, [Vector2d, Vector2d], null, mathFunctions.subtract

  @multiply: ()->
    staticMathVector arguments, [Vector2d, 'number'], mathFunctions.multiply, mathFunctions.multiply

  @multiplyX: ()->
    staticMathVector arguments, [Vector2d, 'number'], mathFunctions.multiply, mathFunctions.self

  @multiplyY: ()->
    staticMathVector arguments, [Vector2d, 'number'], mathFunctions.self, mathFunctions.multiply

  @divide: ()->
    staticMathVector arguments, [Vector2d, 'number'], mathFunctions.divide, mathFunctions.divide

  @divideX: ()->
    staticMathVector arguments, [Vector2d, 'number'], mathFunctions.divide, mathFunctions.self

  @divideY: ()->
    staticMathVector arguments, [Vector2d, 'number'], mathFunctions.self, mathFunctions.divide

  @normalize: (a)->
    throw new TypeError if not (a instanceof Vector2d)
    magnitude = a.magnitude
    new Vector2d a.x/magnitude, a.y/magnitude

  @project: (a, b)->
    throw new TypeError if not (a instanceof Vector2d) or not (b instanceof Vector2d)
    c = ((a.x * b.x)+(a.y * b.y)) / ((b.x*b.x)+(b.y*b.y))
    new Vector2d b.x*c, b.y*c
                                                                                
  @round: (a)->
    throw new TypeError if not (a instanceof Vector2d)
    new Vector2d Math.round(a.x), Math.round(a.y)

  @roundX: (a)->
    throw new TypeError if not (a instanceof Vector2d)
    new Vector2d Math.round(a.x), a.y

  @roundY: (a)->
    throw new TypeError if not (a instanceof Vector2d)
    new Vector2d a.x, Math.round(a.y)

  @invert: (a)->
    throw new TypeError if not (a instanceof Vector2d)
    new Vector2d -a.x, -a.y

  @invertX: (a)->
    throw new TypeError if not (a instanceof Vector2d)
    new Vector2d -a.x, a.y

  @invertY: (a)->
    throw new TypeError if not (a instanceof Vector2d)
    new Vector2d a.x, -a.y

  # Methods

  # Returns Vector2d

  add: ()->
    @addX.apply @, arguments
    @addY.apply @, arguments
    @

  addX: ()->
    mathVector.apply @, [arguments, 1, [Vector2d], mathFunctions.add, null]

  addY: ()->
    mathVector.apply @, [arguments, 1, [Vector2d], null, mathFunctions.add]

  subtract: ()->
    @subtractX.apply @, arguments
    @subtractY.apply @, arguments
    @

  subtractX: ()->
    mathVector.apply @, [arguments, 1, [Vector2d], mathFunctions.subtract, null]

  subtractY: ()->
    mathVector.apply @, [arguments, 1, [Vector2d], null, mathFunctions.subtract]

  multiply: ()->
    @multiplyX.apply @, arguments
    @multiplyY.apply @, arguments
    @

  multiplyX: ()->
    mathVector.apply @, [arguments, 1, ['number'], mathFunctions.multiply, null]

  multiplyY: ()->
    mathVector.apply @, [arguments, 1, ['number'], null, mathFunctions.multiply]

  divide: ()->
    @divideX.apply @, arguments
    @divideY.apply @, arguments
    @

  divideX: (scalar)->
    mathVector.apply @, [arguments, 1, ['number'], mathFunctions.divide, null]

  divideY: (scalar)->
    mathVector.apply @, [arguments, 1, ['number'], null, mathFunctions.divide]

  normalize: ->
    @length = 1
    @

  project: (b)->
    throw new TypeError if not (b instanceof Vector2d)
    c = ((@x * b.x)+(@y * b.y)) / ((b.x*b.x)+(b.y*b.y))
    @x = b.x * c
    @y = b.y * c
    @

  round: ->
    @roundX()
    @roundY()
    @

  roundX: ->
    @x = Math.round(@x)
    @

  roundY: ->
    @y = Math.round(@y)
    @

  zero: ->
    @zeroX()
    @zeroY()
    @

  zeroX: ->
    @x = 0
    @

  zeroY: ->
    @y = 0
    @

  clone: ->
    new Vector2d @x, @y

  equate: (b)->
    throw new TypeError if not (b instanceof Vector2d)
    @equateX b
    @equateY b
    @

  equateX: (b)->
    throw new TypeError if not (b instanceof Vector2d)
    @x = b.x
    @

  equateY: (b)->
    throw new TypeError if not (b instanceof Vector2d)
    @y = b.y
    @

  invert: ->
    @invertX()
    @invertY()
    @

  invertX: ->
    @x = -@x
    @

  invertY: ->
    @y = -@y
    @

  lerp: (b, l)->
    throw new TypeError if not (b instanceof Vector2d) or typeof b isnt 'number'
    l = 0 if l < 0
    l = 1 if l > 1
    @x = @x+(b.x-@x)*l
    @y = @y+(b.y-@y)*l
    @

  scale: ()->
    @scaleX.apply @, arguments
    @scaleY.apply @, arguments
    @

  scaleX: ()->
    mathVector.apply @, [arguments, 1, [Vector2d], mathFunctions.multiply, null]

  scaleY: ()->
    mathVector.apply @, [arguments, 1, [Vector2d], null, mathFunctions.multiply]

  clampMagnitude: (maxLength)->
    throw new TypeError if typeof maxLength isnt 'number'
    @magnitude = maxLength if @magnitudeSquared > maxLength * maxLength
    @

  # Returns number

  Object.defineProperty Vector2d::, 'magnitude', {
    get: ->
      Math.sqrt @magnitudeSquared
    set: (value)->
      throw new TypeError if typeof value isnt 'number'
      magnitude = @magnitude
      @x = (@x / magnitude) * value
      @y = (@y / magnitude) * value
      value
  }

  Object.defineProperty Vector2d::, 'magnitudeSquared', {
    get: ->
      @x*@x+@y*@y
    set: (value)->
      throw new TypeError if typeof value isnt 'number'
      @length = Math.sqrt value
      value
  }

  Object.defineProperty Vector2d::, 'length', {
    get: ->
      @magnitude
    set: (value)->
      throw new TypeError if typeof value isnt 'number'
      @magnitude = value
  }

  Object.defineProperty Vector2d::, 'lengthSquared', {
    get: ->
      @magnitudeSquared
    set: (value)->
      throw new TypeError if typeof value isnt 'number'
      @magnitudeSquared = value
  }

  Object.defineProperty Vector2d::, 'rotate', {
    get: ->
      Math.atan2(@y, @x) * 180 / Math.PI
    set: (dir)->
      throw new TypeError if typeof dir isnt 'number'
      len = @magnitude
      @x = Math.cos(dir*Math.PI/180)*len
      @y = Math.sin(dir*Math.PI/180)*len
      dir
  }

  dot: (b)->
    throw new TypeError if not (b instanceof Vector2d)
    @x * b.x + @y * b.y

  cross: (b)->
    throw new TypeError if not (b instanceof Vector2d)
    @x * b.y - @y * b.x

  distance: (b)->
    throw new TypeError if not (b instanceof Vector2d)
    Math.sqrt distanceSquared b

  distanceSquared: (b)->
    throw new TypeError if not (b instanceof Vector2d)
    dx = @x - b.x
    dy = @y - b.y
    dx * dx + dy * dy

  angle: (b)->
    throw new TypeError if not (b instanceof Vector2d)
    aMagnitude = @magnitude
    bMagnitude = b.magnitude
    dot = (@x/aMagnitude) * (b.x/bMagnitude) + (@y/aMagnitude) * (b.y/bMagnitude)
    dot = -1 if dot < -1
    dot = 1 if dot > 1
    Math.acos(dot) * 57.29578

  # Returns boolean

  isZero: ->
    @isZeroX() and @isZeroY()

  isZeroX: ->
    @x is 0

  isZeroY: ->
    @y is 0

  isEqual: (b)->
    throw new TypeError if not (b instanceof Vector2d)
    @isEqualX(b) and @isEqualY(b)

  isEqualX: (b)->
    throw new TypeError if not (b instanceof Vector2d)
    @x is b.x

  isEqualY: (b)->
    throw new TypeError if not (b instanceof Vector2d)
    @y is b.y

  isNaN: ->
    @isNaNX() or @isNaNY

  isNaNX: ->
    isNaN @.x

  isNaNY: ->
    isNaN @.y

  isFinite: ->
    @isFiniteX() or @isFiniteY()

  isFiniteX: ->
    isFinite @.x

  isFiniteY: ->
    isFinite @.y

  isEqualRotate: (b)->
    throw new TypeError if not (b instanceof Vector2d)
    @rotate.toFixed(2) is b.rotate.toFixed(2)

if module? and module.exports?
  module.exports = Vector2d
else
  window.Vector2d = Vector2d