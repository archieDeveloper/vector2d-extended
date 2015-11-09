'use strict'

class Vector2d
  constructor: (x, y) ->
    if !(@ instanceof Vector2d)
      return new Vector2d x, y
    @x = x || 0
    @y = y || 0

  # Static Methods

  @zero: ->
    new Vector2d

  @one: ->
    new Vector2d 1, 1

  @up: ->
    new Vector2d 0, 1

  @down: ->
    new Vector2d 0, -1

  @right: ->
    new Vector2d 1, 0

  @left: ->
    new Vector2d -1, 0

  # Methods

  # Returns Vector2d

  add: (b)->
    @x += b.x
    @y += b.y
    @

  subtract: (b)->
    @x -= b.x
    @y -= b.y
    @

  multiply: (scalar)->
    @x *= scalar
    @y *= scalar
    @

  divide: (scalar)->
    @x /= scalar
    @y /= scalar
    @

  normalize: ->
    magnitude = do @magnitude
    @x /= magnitude
    @y /= magnitude
    @

  project: (b)->
    c = ((@x * b.x)+(@y * b.y)) / ((b.x*b.x)+(b.y*b.y))
    @x = b.x * c
    @y = b.y * c
    @

  round: ->
    @x = Math.round(@x)
    @y = Math.round(@y)
    @

  zero: ->
    @x = @y = 0
    @

  clone: ->
    new Vector2d @x, @y

  invert: ->
    @x = -@x
    @y = -@y
    @

  # Returns number

  magnitude: ()->
    Math.sqrt @lengthSquared()

  magnitudeSquared: ()->
    @x * @x + @y * @y

  length: @magnitude

  lengthSquared: @magnitudeSquared

  rotate: ->
    Math.atan2(@y, @x) * 180 / Math.PI

  dot: (b)->
    @x * b.x + @y * b.y

  cross: (b)->
    @x * b.y - @y * b.x

  distance: (b)->
    Math.sqrt distanceSquared b

  distanceSquared: (b)->
    dx = @x - b.x
    dy = @y - b.y
    dx * dx + dy * dy

  # Returns boolean

  isZero: ->
    @x is 0 and @y is 0

  isEqual: (b)->
    @x is b.x and @y is b.y

  isNaN: ->
    isNaN @.x or isNaN @.y


module.exports = Vector2d
