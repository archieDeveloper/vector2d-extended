
class MathVector2d

  constructor: () ->
        # ...
  functions: 
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

  staticVector: (args, types, x, y)->
    if x? then vx = @staticComponent 'x', 2, args, types, x else vx = 0
    if y? then vy = @staticComponent 'y', 2, args, types, y else vy = 0
    new Vector2d vx, vy
                                                                                
  staticComponent: (property, countArguments, args, argumentTypes, callback)->
    argumentsLength = args.length
    throw new Error if argumentsLength < countArguments
    a = @checkType args[0], argumentTypes[0], property
    for i in [1...argumentsLength]
      b = @checkType args[i], argumentTypes[countArguments-1], property
      a = callback(a, b)
    a

  vector: (args, argsCount, types, x, y)->
    @x = @component.apply @, ['x', argsCount, args, types, x] if x?
    @y = @component.apply @, ['y', argsCount, args, types, y] if y?
    @

  component: (property, countArguments, args, argumentTypes, callback)->
    argumentsLength = args.length
    throw new Error if argumentsLength < countArguments
    a = @[property]
    for i in [0...argumentsLength]
      b = @checkType args[i], argumentTypes[countArguments-1], property
      a = callback(a, b)
    a

  checkType: (argument, type, property)->
    if typeof type is 'string'
      throw new TypeError if typeof argument isnt type
      value = argument
    else
      throw new TypeError if not (argument instanceof type)
      value = argument[property]
    value

  checkTypes: (args, types)->
    argsLength = args.length
    for i in [0...argsLength]
      if typeof types[i] is 'string'
        throw new TypeError if typeof args[i] isnt types[i]
      else
        throw new TypeError if not (args[i] instanceof types[i])


window.math = MathVector2d