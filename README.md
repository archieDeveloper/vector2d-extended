# vector2d-extended

## Installation

With npm do

```bash
npm install vector2d-extended
```

## Simple example

Addition of two vectors:

```javascript
var vec1, vec2, sumVec1AndVec2;

vec1 = Vector2d(10,0);
vec2 = Vector2d(25,30);
sumVec1AndVec2 = vec1
    .clone()
    .add(vec2);
```

Or set the length of the vector:

```javascript
var vec1, vec2, newLength;

newLength = 30;

vec1 = Vector2d(15, 35);
vec2 = vec1
    .clone()
    .normalize()
    .multiply(newLength);
```

## Documentation API


1. Properties

  1. x
  2. y
  3. magnitude
  4. magnitudeSquared
  5. length
  6. lengthSquared
  7. rotate

2. Static Methods

  1. zero
  2. one
  3. up
  4. down
  5. right
  6. left
  7. clampMagnitude
  8. lerp
  9. scale
  10. add
  11. subtract
  12. multiply
  13. divide
  14. normalize
  15. project
  16. round
  17. invert

3. Instance Methods

  1. Return Vector2d

    1. add
    2. subtract
    3. multiply
    4. divide
    5. normalize
    6. project
    7. round
    8. zero
    9. clone
    10. invert
    11. lerp
    12. scale
    13. clampMagnitude

  2. Return Number

    1. dot
    2. cross
    3. distance
    4. distanceSquared
    5. angle

  3. Return Boolean

    1. isZero
    2. isEqual
    3. isNaN
    4. isFinite
    5. isEqualRotate

### Propirties

#### x

Holds the value for the X component.

#### y

Holds the value for the Y component.

### Static Methods

#### zero:

Shorthand for writing Vector2d(0, 0).

@peturn Vector2d A new zero vector

#### one:

Shorthand for writing Vector2d(1, 1).

@peturn Vector2d A new unit vector

#### up:

Shorthand for writing Vector2d(0, -1).

@peturn Vector2d A new vector

#### down:

Shorthand for writing Vector2d(0, 1).

@peturn Vector2d A new vector

#### right:

Shorthand for writing Vector2d(1, 0).

@peturn Vector2d A new vector

#### left:

Shorthand for writing Vector2d(0, -1).

@peturn Vector2d A new vector

### Instance Methods


#### add: (vector)

@params Vector2d vector

@peturn Vector2d this

#### subtract: (vector)

@params Vector2d vector

@peturn Vector2d this

#### multiply: (scalar)

@params Number scalar

@peturn Vector2d this

#### divide: (scalar)

@params Number scalar

@peturn Vector2d this

#### normalize:

@peturn Vector2d this

#### project: (vector)

@params Vector2d vector

@peturn Vector2d this

#### round:

@peturn Vector2d this

#### zero

@peturn Vector2d this

#### invert

@peturn Vector2d this

#### clone

@peturn Vector2d A new vector


#### magnitude:

@peturn Number

#### magnitudeSquared:

@peturn Number

#### length:

@peturn Number

#### lengthSquared:

@peturn Number

#### rotate:

@peturn Number

#### dot: (vector)

@params Vector2d vector

@peturn Number

#### cross: (vector)

@params Vector2d vector

@peturn Number

#### distance: (vector)

@params Vector2d vector

@peturn Number

#### distanceSquared: (vector)

@params Vector2d vector

@peturn Number


#### isZero

@peturn Boolean

#### isEqual: (vector)

@params Vector2d vector

@peturn Boolean

#### isNaN

@peturn Boolean

