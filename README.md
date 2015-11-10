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