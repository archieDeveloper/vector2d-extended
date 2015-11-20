# vector2d-extended

## Installation

With npm do

```bash
npm install vector2d-extended
```

## Simple example

Addition of two vectors:

```javascript
// init application
var vec1, vec2, vec3;

vec1 = Vector2d(10,0);
vec2 = Vector2d(25,30);
vec3 = Vector2d.add(vec1, vec2);

// render loop
vec3.equate(vec1).add(vec2);

```

Or set the length of the vector:

```javascript
var vec, newLength;

newLength = 30;
vec = Vector2d(15, 35);

// The usual way
vec.normalize().multiply(newLength);

// Or the way of the gods
vec.length = newLength;
```

Help the project - test, find bugs, supplementing the documentation, create new features :)

## Documentation API


* Properties

  * .x:**Number**
  * .y:**Number**
  * .length:**Number**
  * .lengthSquared:**Number**
  * .rotate:**Number**

* Static Methods

  * .zero():**Vector2d**
  * .one():**Vector2d**
  * .up():**Vector2d**
  * .down():**Vector2d**
  * .right():**Vector2d**
  * .left():**Vector2d**
  * .clampMagnitude(vector:**Vector2d**, maxLength:**Number**):**Vector2d**
  * .lerp(vector1:**Vector2d**, vector2:**Vector2d**, l:**Number**):**Vector2d**
  * .scale(vector1:**Vector2d**, vecotr2:**Vector2d**):**Vector2d**
  * .scaleX(vector1:**Vector2d**, vecotr2:**Vector2d**):**Vector2d**
  * .scaleY(vector1:**Vector2d**, vecotr2:**Vector2d**):**Vector2d**
  * .add(vector1:**Vector2d**, vecotr2:**Vector2d**):**Vector2d**
  * .addX(vector1:**Vector2d**, vecotr2:**Vector2d**):**Vector2d**
  * .addY(vector1:**Vector2d**, vecotr2:**Vector2d**):**Vector2d**
  * .subtract(vector1:**Vector2d**, vecotr2:**Vector2d**):**Vector2d**
  * .subtractX(vector1:**Vector2d**, vecotr2:**Vector2d**):**Vector2d**
  * .subtractY(vector1:**Vector2d**, vecotr2:**Vector2d**):**Vector2d**
  * .multiply(vector:**Vector2d**, scalar:**Number**):**Vector2d**
  * .multiplyX(vector:**Vector2d**, scalar:**Number**):**Vector2d**
  * .multiplyY(vector:**Vector2d**, scalar:**Number**):**Vector2d**
  * .divide(vector:**Vector2d**, scalar:**Number**):**Vector2d**
  * .divideX(vector:**Vector2d**, scalar:**Number**):**Vector2d**
  * .divideY(vector:**Vector2d**, scalar:**Number**):**Vector2d**
  * .normalize(vector:**Vector2d**):**Vector2d**
  * .project(vector1:**Vector2d**, vector2:**Vector2d**):**Vector2d**
  * .round(vector:**Vector2d**):**Vector2d**
  * .roundX(vector:**Vector2d**):**Vector2d**
  * .roundY(vector:**Vector2d**):**Vector2d**
  * .invert(vector:**Vector2d**):**Vector2d**
  * .invertX(vector:**Vector2d**):**Vector2d**
  * .invertY(vector:**Vector2d**):**Vector2d**

* Instance Methods

  * Return Vector2d

    * .add(vector:**Vector2d**):**Vector2d**
    * .addX(vector:**Vector2d**):**Vector2d**
    * .addY(vector:**Vector2d**):**Vector2d**
    * .subtract(vector:**Vector2d**):**Vector2d**
    * .subtractX(vector:**Vector2d**):**Vector2d**
    * .subtractY(vector:**Vector2d**):**Vector2d**
    * .scale(vector:**Vector2d**):**Vector2d**
    * .scaleX(vector:**Vector2d**):**Vector2d**
    * .scaleY(vector:**Vector2d**):**Vector2d**
    * .project(vector:**Vector2d**):**Vector2d**
    * .equate(vector:**Vector2d**):**Vector2d**
    * .equateX(vector:**Vector2d**):**Vector2d**
    * .equateY(vector:**Vector2d**):**Vector2d**
    * .lerp(vector:**Vecotor2d**, l:**Number**):**Vector2d**
    * .clampMagnitude(maxLength:**Number**):**Vector2d**
    * .multiply(scalar:**Number**):**Vector2d**
    * .multiplyX(scalar:**Number**):**Vector2d**
    * .multiplyY(scalar:**Number**):**Vector2d**
    * .divide(scalar:**Number**):**Vector2d**
    * .divideX(scalar:**Number**):**Vector2d**
    * .divideY(scalar:**Number**):**Vector2d**
    * .normalize():**Vector2d**
    * .round():**Vector2d**
    * .roundX():**Vector2d**
    * .roundY():**Vector2d**
    * .zero():**Vector2d**
    * .zeroX():**Vector2d**
    * .zeroY():**Vector2d**
    * .clone():**Vector2d**
    * .invert():**Vector2d**
    * .invertX():**Vector2d**
    * .invertY():**Vector2d**

  * Return Number

    * .dot(vector:**Vector2d**):**Number**
    * .cross(vector:**Vector2d**):**Number**
    * .distance(vector:**Vector2d**):**Number**
    * .distanceSquared(vector:**Vector2d**):**Number**
    * .angle(vector:**Vector2d**):**Number**

  * Return Boolean

    * .isZero():**Boolean**
    * .isZeroX():**Boolean**
    * .isZeroY():**Boolean**
    * .isNaN():**Boolean**
    * .isNaNX():**Boolean**
    * .isNaNY():**Boolean**
    * .isFinite():**Boolean**
    * .isFiniteX():**Boolean**
    * .isFiniteY():**Boolean**
    * .isEqual(vector:**Vector2d**):**Boolean**
    * .isEqualX(vector:**Vector2d**):**Boolean**
    * .isEqualY(vector:**Vector2d**):**Boolean**
    * .isEqualRotate(vector:**Vector2d**):**Boolean**