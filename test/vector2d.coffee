chai = require 'chai'
do chai.should
assert = chai.assert

Vector2d = require '../source/index'

describe '#Vector2d', ->

  describe '#constructor', ->
    params = [
      {x:0,    y:0}
      {x:1,    y:1}
      {x:200,  y:0}
      {x:0,    y:200}
      {x:200,  y:200}
      {x:-1,   y:0}
      {x:0,    y:-1}
      {x:-234, y:-324}
    ]
    init = (param)->
      vector2d = new Vector2d param.x, param.y
      it 'Иницилизация вектора с параметрами '+param.x+' и '+param.y, ->
        assert.instanceOf vector2d, Vector2d, 'Не является экземпляром класса Vector2d'
      it 'Имеет свойства X и Y', ->
        assert.property vector2d, 'x', 'Нет свойства X'
        assert.property vector2d, 'y', 'Нет свойства Y'
      it 'Свойсвта X и Y равны '+param.x+' и '+param.y, ->
        assert.propertyVal vector2d, 'x', param.x, 'Свойство X не равно '+param.x
        assert.propertyVal vector2d, 'y', param.y, 'Свойство Y не равно '+param.y
    for ind, param of params
      init param

  describe 'Существование методов', ->
    methods = [
      'clone'
      'add', 'addX', 'addY'
      'subtract', 'subtractX', 'subtractY'
      'multiply', 'multiplyX', 'multiplyY'
      'multiplyScalar', 'multiplyScalarX', 'multiplyScalarY'
      'invert', 'invertX', 'invertY'
      'length', 'lengthSquared', 'normalize', 'round'
      'isZero', 'project'
    ]
    isset = (method)->
      vector2d = new Vector2d
      it 'Существует метод '+method, ->
        assert.typeOf vector2d[method], 'function', 'Нет метода '+method
    for ind, method of methods
      isset method

  describe '#clone', ->
    vector2d = undefined
    beforeEach ->
      vector2d = new Vector2d 2, 8
    it 'Возвращается копия объекта, который вызывал метод clone', ->
      newVector2d = do vector2d.clone
      assert.instanceOf newVector2d, Vector2d, 'Не является экземпляром класса Vector2d'
      assert.notStrictEqual newVector2d, vector2d, 'Является тем же самым объектом'
    it 'Клонирование вектора', ->
      newVector2d = do vector2d.clone
      assert.strictEqual newVector2d.x, vector2d.x, 'Не правильный результат клонирования в свойстве X'
      assert.strictEqual newVector2d.y, vector2d.y, 'Не правильный результат клонирования в свойстве Y'
      assert.strictEqual vector2d.x, 2, 'Клонирование не должно изменять у оригинального объекта свойство X'
      assert.strictEqual vector2d.y, 8, 'Клонирование не должно изменять у оригинального объекта свойство Y'

  describe 'Сложение', ->
    describe '#add', ->
      firstVector2d = new Vector2d
      secondVector2d = new Vector2d
      beforeEach ->
        firstVector2d = new Vector2d 2, 8
        secondVector2d = new Vector2d 5, 6
      it 'Возвращается объект который вызывал метод add', ->
        newVector2d = firstVector2d.add secondVector2d
        assert.instanceOf newVector2d, Vector2d, 'Не является экземпляром класса Vector2d'
        assert.strictEqual newVector2d, firstVector2d, 'Не является тем же самым объектом'
      it 'Сложение векторов', ->
        cloneSecondVector2d = do secondVector2d.clone
        firstVector2d.add secondVector2d
        assert.strictEqual firstVector2d.x, 2+5, 'Не правильный результат сложения в свойстве X'
        assert.strictEqual firstVector2d.y, 8+6, 'Не правильный результат сложения в свойстве Y'
        assert.strictEqual cloneSecondVector2d.x, secondVector2d.x, 'Сложение не должно изменять свойство X у входящего вектора'
        assert.strictEqual cloneSecondVector2d.y, secondVector2d.y, 'Сложение не должно изменять свойство Y у входящего вектора'
    describe '#addX', ->
      firstVector2d = new Vector2d
      secondVector2d = new Vector2d
      beforeEach ->
        firstVector2d = new Vector2d 2, 8
        secondVector2d = new Vector2d 5, 6
      it 'Возвращается объект который вызывал метод addX', ->
        newVector2d = firstVector2d.addX secondVector2d
        assert.instanceOf newVector2d, Vector2d, 'Не является экземпляром класса Vector2d'
        assert.strictEqual newVector2d, firstVector2d, 'Не является тем же самым объектом'
      it 'Сложение векторов', ->
        cloneSecondVector2d = do secondVector2d.clone
        firstVector2d.addX secondVector2d
        assert.strictEqual firstVector2d.x, 2+5, 'Не правильный результат сложения в свойстве X'
        assert.strictEqual firstVector2d.y, 8, 'Не правильный результат сложения в свойстве Y'
        assert.strictEqual cloneSecondVector2d.x, secondVector2d.x, 'Сложение не должно изменять свойство X у входящего вектора'
        assert.strictEqual cloneSecondVector2d.y, secondVector2d.y, 'Сложение не должно изменять свойство Y у входящего вектора'
    describe '#addY', ->
      firstVector2d = new Vector2d
      secondVector2d = new Vector2d
      beforeEach ->
        firstVector2d = new Vector2d 2, 8
        secondVector2d = new Vector2d 5, 6
      it 'Возвращается объект который вызывал метод addY', ->
        newVector2d = firstVector2d.addY secondVector2d
        assert.instanceOf newVector2d, Vector2d, 'Не является экземпляром класса Vector2d'
        assert.strictEqual newVector2d, firstVector2d, 'Не является тем же самым объектом'
      it 'Сложение векторов', ->
        cloneSecondVector2d = do secondVector2d.clone
        firstVector2d.addY secondVector2d
        assert.strictEqual firstVector2d.x, 2, 'Не правильный результат сложения в свойстве X'
        assert.strictEqual firstVector2d.y, 8+6, 'Не правильный результат сложения в свойстве Y'
        assert.strictEqual cloneSecondVector2d.x, secondVector2d.x, 'Сложение не должно изменять свойство X у входящего вектора'
        assert.strictEqual cloneSecondVector2d.y, secondVector2d.y, 'Сложение не должно изменять свойство Y у входящего вектора'

  describe 'Вычитание', ->
    describe '#subtract', ->
      firstVector2d = new Vector2d
      secondVector2d = new Vector2d
      beforeEach ->
        firstVector2d = new Vector2d 2, 8
        secondVector2d = new Vector2d 5, 6
      it 'Возвращается объект который вызывал метод subtract', ->
        newVector2d = firstVector2d.subtract secondVector2d
        assert.instanceOf newVector2d, Vector2d, 'Не является экземпляром класса Vector2d'
        assert.strictEqual newVector2d, firstVector2d, 'Не является тем же самым объектом'
      it 'Вычитание векторов', ->
        cloneSecondVector2d = do secondVector2d.clone
        firstVector2d.subtract secondVector2d
        assert.strictEqual firstVector2d.x, 2-5, 'Не правильный результат вычитание в свойстве X'
        assert.strictEqual firstVector2d.y, 8-6, 'Не правильный результат вычитания в свойстве Y'
        assert.strictEqual cloneSecondVector2d.x, secondVector2d.x, 'Вычитание не должно изменять свойство X у входящего вектора'
        assert.strictEqual cloneSecondVector2d.y, secondVector2d.y, 'Вычитание не должно изменять свойство Y у входящего вектора'
    describe '#subtractX', ->
      vec1 = new Vector2d
      vec2 = new Vector2d
      beforeEach ->
        vec1 = new Vector2d 2, 8
        vec2 = new Vector2d 5, 6
      it 'Возвращается объект который вызывал метод subtractX', ->
        vec1New = vec1.subtractX vec2
        assert.instanceOf vec1New, Vector2d, 'Не является экземпляром класса Vector2d'
        assert.strictEqual vec1New, vec1, 'Не является тем же самым объектом'
      it 'Вычитание векторов', ->
        vec2Clone = do vec2.clone
        vec1.subtractX vec2
        assert.strictEqual vec1.x, 2-5, 'Не правильный результат вычитание в свойстве X'
        assert.strictEqual vec1.y, 8, 'Не правильный результат вычитания в свойстве Y'
        assert.strictEqual vec2Clone.x, vec2.x, 'Вычитание не должно изменять свойство X у входящего вектора'
        assert.strictEqual vec2Clone.y, vec2.y, 'Вычитание не должно изменять свойство Y у входящего вектора'
    describe '#subtractY', ->
      vec1 = new Vector2d
      vec2 = new Vector2d
      beforeEach ->
        vec1 = new Vector2d 2, 8
        vec2 = new Vector2d 5, 6
      it 'Возвращается объект который вызывал метод subtractY', ->
        vec1New = vec1.subtractY vec2
        assert.instanceOf vec1New, Vector2d, 'Не является экземпляром класса Vector2d'
        assert.strictEqual vec1New, vec1, 'Не является тем же самым объектом'
      it 'Вычитание векторов', ->
        vec2Clone = do vec2.clone
        vec1.subtractY vec2
        assert.strictEqual vec1.x, 2, 'Не правильный результат вычитание в свойстве X'
        assert.strictEqual vec1.y, 8-6, 'Не правильный результат вычитания в свойстве Y'
        assert.strictEqual vec2Clone.x, vec2.x, 'Вычитание не должно изменять свойство X у входящего вектора'
        assert.strictEqual vec2Clone.y, vec2.y, 'Вычитание не должно изменять свойство Y у входящего вектора'

  describe 'Умножение', ->
    describe '#multiply', ->
      vec1 = new Vector2d 2, 8
      vec2 = new Vector2d 5, 6
      beforeEach ->
        vec1 = new Vector2d 2, 8
        vec2 = new Vector2d 5, 6
      it 'Возвращается объект который вызывал метод multiply', ->
        vec1New = vec1.multiply vec2
        assert.instanceOf vec1New, Vector2d, 'Не является экземпляром класса Vector2d'
        assert.strictEqual vec1New, vec1, 'Не является тем же самым объектом'
      it 'Скалярное умножение векторов', ->
        vec2Clone = do vec2.clone
        vec1.multiply vec2
        assert.strictEqual vec1.x, 2*5, 'Не правильный результат умножения в свойстве X'
        assert.strictEqual vec1.y, 8*6, 'Не правильный результат умножения в свойстве Y'
        assert.strictEqual vec2Clone.x, vec2.x, 'Умножение векторов не должно изменять свойство X у входящего вектора'
        assert.strictEqual vec2Clone.y, vec2.y, 'Умножение векторов не должно изменять свойство Y у входящего вектора'
    describe '#multiplyX', ->
      vec1 = new Vector2d 2, 8
      vec2 = new Vector2d 5, 6
      beforeEach ->
        vec1 = new Vector2d 2, 8
        vec2 = new Vector2d 5, 6
      it 'Возвращается объект который вызывал метод multiplyX', ->
        vec1New = vec1.multiplyX vec2
        assert.instanceOf vec1New, Vector2d, 'Не является экземпляром класса Vector2d'
        assert.strictEqual vec1New, vec1, 'Не является тем же самым объектом'
      it 'Скалярное умножение векторов', ->
        vec2Clone = do vec2.clone
        vec1.multiplyX vec2
        assert.strictEqual vec1.x, 2*5, 'Не правильный результат умножения в свойстве X'
        assert.strictEqual vec1.y, 8, 'Не правильный результат умножения в свойстве Y'
        assert.strictEqual vec2Clone.x, vec2.x, 'Умножение векторов не должно изменять свойство X у входящего вектора'
        assert.strictEqual vec2Clone.y, vec2.y, 'Умножение векторов не должно изменять свойство Y у входящего вектора'
    describe '#multiplyY', ->
      vec1 = new Vector2d 2, 8
      vec2 = new Vector2d 5, 6
      beforeEach ->
        vec1 = new Vector2d 2, 8
        vec2 = new Vector2d 5, 6
      it 'Возвращается объект который вызывал метод multiplyY', ->
        vec1New = vec1.multiplyY vec2
        assert.instanceOf vec1New, Vector2d, 'Не является экземпляром класса Vector2d'
        assert.strictEqual vec1New, vec1, 'Не является тем же самым объектом'
      it 'Скалярное умножение векторов', ->
        vec2Clone = do vec2.clone
        vec1.multiplyY vec2
        assert.strictEqual vec1.x, 2, 'Не правильный результат умножения в свойстве X'
        assert.strictEqual vec1.y, 8*6, 'Не правильный результат умножения в свойстве Y'
        assert.strictEqual vec2Clone.x, vec2.x, 'Умножение векторов не должно изменять свойство X у входящего вектора'
        assert.strictEqual vec2Clone.y, vec2.y, 'Умножение векторов не должно изменять свойство Y у входящего вектора'
    describe '#multiplyScalar', ->
      vector2d = new Vector2d 2, 8
      scalar = 3
      beforeEach ->
        vector2d = new Vector2d 2, 8
        scalar = 3
      it 'Возвращается объект который вызывал метод multiplyScalar', ->
        newVector2d = vector2d.multiplyScalar scalar
        assert.instanceOf newVector2d, Vector2d, 'Не является экземпляром класса Vector2d'
        assert.strictEqual newVector2d, vector2d, 'Не является тем же самым объектом'
      it 'Умножение на скаляр', ->
        vector2d.multiplyScalar scalar
        assert.strictEqual vector2d.x, 2*3, 'Не правильный результат умножения в свойстве X'
        assert.strictEqual vector2d.y, 8*3, 'Не правильный результат умножения в свойстве Y'
    describe '#multiplyScalarX', ->
      vec1 = new Vector2d 2, 8
      scalar = 3
      beforeEach ->
        vec1 = new Vector2d 2, 8
        scalar = 3
      it 'Возвращается объект который вызывал метод multiplyScalarX', ->
        vec1New = vec1.multiplyScalarX scalar
        assert.instanceOf vec1New, Vector2d, 'Не является экземпляром класса Vector2d'
        assert.strictEqual vec1New, vec1, 'Не является тем же самым объектом'
      it 'Умножение на скаляр', ->
        vec1.multiplyScalarX scalar
        assert.strictEqual vec1.x, 2*3, 'Не правильный результат умножения в свойстве X'
        assert.strictEqual vec1.y, 8, 'Не правильный результат умножения в свойстве Y'
    describe '#multiplyScalarY', ->
      vec1 = new Vector2d 2, 8
      scalar = 3
      beforeEach ->
        vec1 = new Vector2d 2, 8
        scalar = 3
      it 'Возвращается объект который вызывал метод multiplyScalarY', ->
        vec1New = vec1.multiplyScalarY scalar
        assert.instanceOf vec1New, Vector2d, 'Не является экземпляром класса Vector2d'
        assert.strictEqual vec1New, vec1, 'Не является тем же самым объектом'
      it 'Умножение на скаляр', ->
        vec1.multiplyScalarY scalar
        assert.strictEqual vec1.x, 2, 'Не правильный результат умножения в свойстве X'
        assert.strictEqual vec1.y, 8*3, 'Не правильный результат умножения в свойстве Y'

  describe 'Деление', ->
    describe '#divideScalar', ->
      vector2d = new Vector2d 2, 8
      scalar = 3
      beforeEach ->
        vector2d = new Vector2d 2, 8
        scalar = 3
      it 'Возвращается объект который вызывал метод divideScalar', ->
        newVector2d = vector2d.divideScalar scalar
        assert.instanceOf newVector2d, Vector2d, 'Не является экземпляром класса Vector2d'
        assert.strictEqual newVector2d, vector2d, 'Не является тем же самым объектом'
      it 'Деление на скаляр', ->
        vector2d.divideScalar scalar
        assert.strictEqual vector2d.x, 2/3, 'Не правильный результат деления в свойстве X'
        assert.strictEqual vector2d.y, 8/3, 'Не правильный результат деления в свойстве Y'
    describe '#divideScalarX', ->
      vec1 = new Vector2d 2, 8
      scalar = 3
      beforeEach ->
        vec1 = new Vector2d 2, 8
        scalar = 3
      it 'Возвращается объект который вызывал метод divideScalarX', ->
        vec1New = vec1.divideScalarX scalar
        assert.instanceOf vec1New, Vector2d, 'Не является экземпляром класса Vector2d'
        assert.strictEqual vec1New, vec1, 'Не является тем же самым объектом'
      it 'Деление на скаляр', ->
        vec1.divideScalarX scalar
        assert.strictEqual vec1.x, 2/3, 'Не правильный результат деления в свойстве X'
        assert.strictEqual vec1.y, 8, 'Не правильный результат деления в свойстве Y'
    describe '#divideScalarY', ->
      vec1 = new Vector2d 2, 8
      scalar = 3
      beforeEach ->
        vec1 = new Vector2d 2, 8
        scalar = 3
      it 'Возвращается объект который вызывал метод divideScalarY', ->
        vec1New = vec1.divideScalarY scalar
        assert.instanceOf vec1New, Vector2d, 'Не является экземпляром класса Vector2d'
        assert.strictEqual vec1New, vec1, 'Не является тем же самым объектом'
      it 'Деление на скаляр', ->
        vec1.divideScalarY scalar
        assert.strictEqual vec1.x, 2, 'Не правильный результат деления в свойстве X'
        assert.strictEqual vec1.y, 8/3, 'Не правильный результат деления в свойстве Y'

  describe '#length', ->
    vector2d = new Vector2d 2, 8
    it 'Вычисление длинны вектора', ->
      cloneVector2d = do vector2d.clone
      vector2dLength = do vector2d.length
      assert.isNumber vector2dLength, 'Не является числом'
      assert.strictEqual vector2dLength, Math.sqrt(2 * 2 + 8 * 8), 'Не правильный результат вычисления длинны'
      assert.strictEqual cloneVector2d.x, vector2d.x, 'Вычисление длинны не должно изменять свойство X у вектора'
      assert.strictEqual cloneVector2d.y, vector2d.y, 'Вычисление длинны не должно изменять свойство Y у вектора'

  describe '#lengthSquared', ->
    vector2d = new Vector2d 2, 8
    it 'Вычисление длинны вектора', ->
      cloneVector2d = do vector2d.clone
      vector2dLength = do vector2d.lengthSquared
      assert.isNumber vector2dLength, 'Не является числом'
      assert.strictEqual vector2dLength, 2 * 2 + 8 * 8, 'Не правильный результат вычисления длинны'
      assert.strictEqual cloneVector2d.x, vector2d.x, 'Вычисление длинны не должно изменять свойство X у вектора'
      assert.strictEqual cloneVector2d.y, vector2d.y, 'Вычисление длинны не должно изменять свойство Y у вектора'

  describe '#normalize', ->
    x = undefined
    y = undefined
    vector2d = undefined
    beforeEach ->
      x = 0
      y = 234
      vector2d = new Vector2d x, y
    it 'Возвращается объект который вызывал метод normalize', ->
      newVector2d = do vector2d.normalize
      assert.instanceOf newVector2d, Vector2d, 'Не является экземпляром класса Vector2d'
      assert.strictEqual newVector2d, vector2d, 'Не является тем же самым объектом'
    it 'Нормализация вектора', ->
      do vector2d.normalize
      vector2dLenght = Math.sqrt(x * x + y * y)
      assert.strictEqual vector2d.x, x/vector2dLenght, 'Не правильный результат нормализации в свойстве X'
      assert.strictEqual vector2d.y, y/vector2dLenght, 'Не правильный результат нормализации в свойстве Y'
      assert.operator vector2d.x, '<=', 1, 'Вектор после нормализации не может быть больше 1 - свойство X'
      assert.operator vector2d.y, '<=', 1, 'Вектор после нормализации не может быть больше 1 - свойство Y'
      assert.operator vector2d.x, '>=', -1, 'Вектор после нормализации не может быть меньше -1 - свойство X'
      assert.operator vector2d.y, '>=', -1, 'Вектор после нормализации не может быть больше -1 - свойство Y'
    it 'Нормализация нулевого вектора', ->
      vector2d = new Vector2d
      do vector2d.normalize
      assert isNaN(vector2d.x), 'Не правильный результат нормализации в свойстве X'
      assert isNaN(vector2d.y), 'Не правильный результат нормализации в свойстве Y'

  describe '#project', ->
    firstVector2d = undefined
    secondVector2d = undefined
    beforeEach ->
      firstVector2d = new Vector2d 2, 4
      secondVector2d = new Vector2d 5, 8
    it 'Возвращается объект который вызывал метод project', ->
      newVector2d = firstVector2d.project secondVector2d
      assert.instanceOf newVector2d, Vector2d, 'Не является экземпляром класса Vector2d'
      assert.strictEqual newVector2d, firstVector2d, 'Не является тем же самым объектом'
    it 'Проецирует вектор', ->
      cloneSecondVector2d = do secondVector2d.clone
      firstVector2d.project secondVector2d
      a = (2 * 5)+(4 * 8)
      b = (5*5)+(8*8)
      c = a / b
      assert.strictEqual firstVector2d.x, c * secondVector2d.x, 'Не правильный результат проекции в свойстве X'
      assert.strictEqual firstVector2d.y, c * secondVector2d.y, 'Не правильный результат проекции в свойстве Y'
      assert.strictEqual cloneSecondVector2d.x, secondVector2d.x, 'Вычисление проекции не должно изменять свойство X у входящего вектора'
      assert.strictEqual cloneSecondVector2d.y, secondVector2d.y, 'Вычисление проекции не должно изменять свойство Y у входящего вектора'

  describe '#round', ->
    vec1 = undefined
    beforeEach ->
      vec1 = new Vector2d 2.234, 4.45
    it 'Возвращается объект который вызывал метод round', ->
      vec1New = do vec1.round
      assert.instanceOf vec1New, Vector2d, 'Не является экземпляром класса Vector2d'
      assert.strictEqual vec1New, vec1, 'Не является тем же самым объектом'
    it 'Округляет вектор', ->
      do vec1.round
      assert.strictEqual vec1.x, Math.round(vec1.x), 'Не правильный результат округления в свойстве X'
      assert.strictEqual vec1.y, Math.round(vec1.y), 'Не правильный результат округления в свойстве Y'

  describe '#isZero', ->
    vec1 = undefined
    vec2 = undefined
    beforeEach ->
      vec1 = new Vector2d 2, 4
      vec2 = new Vector2d
    it 'Возвращается булев тип который вызывал метод isZero', ->
      res = do vec1.isZero
      assert.typeOf res, 'boolean', 'Не является boolean'
    it 'Проверка на нулевой вектор', ->
      res1 = do vec1.isZero
      res2 = do vec2.isZero
      assert.strictEqual res1, false, 'Этот вектор не нулейвой'
      assert.strictEqual res2, true, 'Этот вектор нулевой'