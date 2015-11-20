'use strict'

class Vector2d

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
    math.math.checkTypes [a, maxLength], [Vector2d, 'number']
    b = do a.clone
    b.magnitude = maxLength if b.magnitudeSquared > maxLength * maxLength
    b

  @lerp: (a, b, l)->
    math.math.checkTypes [a, b, l], [Vector2d, Vector2d, 'number']
    l = 0 if l < 0
    l = 1 if l > 1
    new Vector2d a.x+(b.x-a.x)*l, a.y+(b.y-a.y)*l

  @scale: ()->
    math.staticVector(
      arguments,
      [Vector2d, Vector2d],
      math.functions.multiply,
      math.functions.multiply
    )

  @scaleX: ()->
    math.staticVector(
      arguments,
      [Vector2d, Vector2d],
      math.functions.multiply
    )

  @scaleY: ()->
    math.staticVector(
      arguments,
      [Vector2d, Vector2d], 
      null, 
      math.functions.multiply
    )

  @add: ()->
    math.staticVector(
      arguments,
      [Vector2d, Vector2d],
      math.functions.add,
      math.functions.add
    )

  @addX: ()->
    math.staticVector(
      arguments,
      [Vector2d, Vector2d],
      math.functions.add
    )

  @addY: ()->
    math.staticVector(
      arguments,
      [Vector2d, Vector2d],
      null,
      math.functions.add
    )

  @subtract: ()->
    math.staticVector(
      arguments,
      [Vector2d, Vector2d],
      math.functions.subtract,
      math.functions.subtract
    )

  @subtractX: ()->
    math.staticVector(
      arguments,
      [Vector2d, Vector2d],
      math.functions.subtract
    )

  @subtractY: ()->
    math.staticVector(
      arguments,
      [Vector2d, Vector2d],
      null,
      math.functions.subtract
    )

  @multiply: ()->
    math.staticVector(
      arguments,
      [Vector2d, 'number'],
      math.functions.multiply,
      math.functions.multiply
    )

  @multiplyX: ()->
    math.staticVector(
      arguments,
      [Vector2d, 'number'],
      math.functions.multiply,
      math.functions.self
    )

  @multiplyY: ()->
    math.staticVector(
      arguments,
      [Vector2d, 'number'],
      math.functions.self,
      math.functions.multiply
    )

  @divide: ()->
    math.staticVector(
      arguments,
      [Vector2d, 'number'],
      math.functions.divide,
      math.functions.divide
    )

  @divideX: ()->
    math.staticVector(
      arguments,
      [Vector2d, 'number'],
      math.functions.divide,
      math.functions.self
    )

  @divideY: ()->
    math.staticVector(
      arguments,
      [Vector2d, 'number'],
      math.functions.self,
      math.functions.divide
    )

  @normalize: (a)->
    math.checkTypes [a], [Vector2d]
    magnitude = a.magnitude
    new Vector2d a.x/magnitude, a.y/magnitude

  @project: (a, b)->
    math.checkTypes [a, b], [Vector2d, Vector2d]
    c = ((a.x * b.x)+(a.y * b.y)) / ((b.x*b.x)+(b.y*b.y))
    new Vector2d b.x*c, b.y*c
                                                                                
  @round: (a)->
    math.checkTypes [a], [Vector2d]
    new Vector2d Math.round(a.x), Math.round(a.y)

  @roundX: (a)->
    math.checkTypes [a], [Vector2d]
    new Vector2d Math.round(a.x), a.y

  @roundY: (a)->
    math.checkTypes [a], [Vector2d]
    new Vector2d a.x, Math.round(a.y)

  @invert: (a)->
    math.checkTypes [a], [Vector2d]
    new Vector2d -a.x, -a.y

  @invertX: (a)->
    math.checkTypes [a], [Vector2d]
    new Vector2d -a.x, a.y

  @invertY: (a)->
    math.checkTypes [a], [Vector2d]
    new Vector2d a.x, -a.y

  # Methods

  # Returns Vector2d

  add: ()->
    @addX.apply @, arguments
    @addY.apply @, arguments
    @

  addX: ()->
    math.vector.apply @, [arguments, 1, [Vector2d], math.functions.add, null]

  addY: ()->
    math.vector.apply @, [arguments, 1, [Vector2d], null, math.functions.add]

  subtract: ()->
    @subtractX.apply @, arguments
    @subtractY.apply @, arguments
    @

  subtractX: ()->
    math.vector.apply @, [arguments, 1, [Vector2d], math.functions.subtract, null]

  subtractY: ()->
    math.vector.apply @, [arguments, 1, [Vector2d], null, math.functions.subtract]

  multiply: ()->
    @multiplyX.apply @, arguments
    @multiplyY.apply @, arguments
    @

  multiplyX: ()->
    math.vector.apply @, [arguments, 1, ['number'], math.functions.multiply, null]

  multiplyY: ()->
    math.vector.apply @, [arguments, 1, ['number'], null, math.functions.multiply]

  divide: ()->
    @divideX.apply @, arguments
    @divideY.apply @, arguments
    @

  divideX: (scalar)->
    math.vector.apply @, [arguments, 1, ['number'], math.functions.divide, null]

  divideY: (scalar)->
    math.vector.apply @, [arguments, 1, ['number'], null, math.functions.divide]

  normalize: ->
    @length = 1
    @

  project: (b)->
    math.checkTypes [b], [Vector2d]
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
    math.checkTypes [b], [Vector2d]
    @equateX b
    @equateY b
    @

  equateX: (b)->
    math.checkTypes [b], [Vector2d]
    @x = b.x
    @

  equateY: (b)->
    math.checkTypes [b], [Vector2d]
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
    math.checkTypes [b, l], [Vector2d, 'number']
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
    math.vector.apply @, [arguments, 1, [Vector2d], math.functions.multiply, null]

  scaleY: ()->
    math.vector.apply @, [arguments, 1, [Vector2d], null, math.functions.multiply]

  clampMagnitude: (maxLength)->
    math.checkTypes [maxLength], ['number']
    @magnitude = maxLength if @magnitudeSquared > maxLength * maxLength
    @

  # Returns number

  Object.defineProperty Vector2d::, 'magnitude', {
    get: ->
      Math.sqrt @magnitudeSquared
    set: (value)->
      math.checkTypes [value], ['number']
      magnitude = @magnitude
      @x = (@x / magnitude) * value
      @y = (@y / magnitude) * value
      value
  }

  Object.defineProperty Vector2d::, 'magnitudeSquared', {
    get: ->
      @x*@x+@y*@y
    set: (value)->
      math.checkTypes [value], ['number']
      @length = Math.sqrt value
      value
  }

  Object.defineProperty Vector2d::, 'length', {
    get: ->
      @magnitude
    set: (value)->
      math.checkTypes [value], ['number']
      @magnitude = value
  }

  Object.defineProperty Vector2d::, 'lengthSquared', {
    get: ->
      @magnitudeSquared
    set: (value)->
      math.checkTypes [value], ['number']
      @magnitudeSquared = value
  }

  Object.defineProperty Vector2d::, 'rotate', {
    get: ->
      Math.atan2(@y, @x) * 180 / Math.PI
    set: (dir)->
      math.checkTypes [value], ['number']
      len = @magnitude
      @x = Math.cos(dir*Math.PI/180)*len
      @y = Math.sin(dir*Math.PI/180)*len
      dir
  }

  dot: (b)->
    math.checkTypes [b], [Vector2d]
    @x * b.x + @y * b.y

  cross: (b)->
    math.checkTypes [b], [Vector2d]
    @x * b.y - @y * b.x

  distance: (b)->
    math.checkTypes [b], [Vector2d]
    Math.sqrt distanceSquared b

  distanceSquared: (b)->
    math.checkTypes [b], [Vector2d]
    dx = @x - b.x
    dy = @y - b.y
    dx * dx + dy * dy

  angle: (b)->
    math.checkTypes [b], [Vector2d]
    aMagnitude = @magnitude
    bMagnitude = b.magnitude
    dot = (@x/aMagnitude) * (b.x/bMagnitude) + (@y/aMagnitude) * (b.y/bMagnitude)
    dot = -1 if dot < -1
    dot = 1 if dot > 1
    Math.acos(dot) * 57.29578

  areaTriangle: (b)->
    math.checkTypes [b], [Vector2d]
    @areaParallelogram(b)/2

  areaParallelogram: (b)->
    math.checkTypes [b], [Vector2d]
    Math.abs @cross(b)

  # Returns boolean

  isZero: ->
    @isZeroX() and @isZeroY()

  isZeroX: ->
    @x is 0

  isZeroY: ->
    @y is 0

  isEqual: (b)->
    math.checkTypes [b], [Vector2d]
    @isEqualX(b) and @isEqualY(b)

  isEqualX: (b)->
    math.checkTypes [b], [Vector2d]
    @x is b.x

  isEqualY: (b)->
    math.checkTypes [b], [Vector2d]
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
    math.checkTypes [b], [Vector2d]
    @rotate.toFixed(2) is b.rotate.toFixed(2)

  isEqualInvertRotate: (b)->
    math.checkTypes [b], [Vector2d]
    179.9 < Math.abs(@rotate.toFixed(2) - b.rotate.toFixed()) < 180.1

  isCollinear: (b)->
    math.checkTypes [b], [Vector2d]
    if @isZeroX() or @isZeroY() or b.isZeroX() or b.isZeroY()
      if @isZeroX() and not @isZeroY() then an = @y else an = @x
      if b.isZeroX() and not b.isZeroY() then bn = b.y else bn = b.x
      n = bn/an
      nax = @x * n
      nay = @y * n
      b.x is nax and b.y is nay
    else
      @x/b.x is @y/b.y

  isOrthogonal: (b)->
    math.checkTypes [b], [Vector2d]
    @dot b is 0

if module? and module.exports?
  module.exports = Vector2d
else
  window.Vector2d = Vector2d