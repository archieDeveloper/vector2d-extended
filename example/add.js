var love, add, scale, project, examples, mouse, car;

mouse = Mouse.getInstance();
keyboard = Keyboard.getInstance();

// love = function() {
//   var vec1, vec2, vec3, vec4, vec5, vec6, vec7, vecResult, len;
//   len = 2;
//   vec1 = Vector2d(3,  -3).multiply(len);
//   vec2 = Vector2d(0,  -2).multiply(len);
//   vec3 = Vector2d(-2, -1).multiply(len);
//   vec4 = Vector2d(-1,  1).multiply(len);
//   vec5 = Vector2d(-1, -1).multiply(len);
//   vec6 = Vector2d(-2,  1).multiply(len);
//   vec7 = Vector2d(0,   2).multiply(len);
//   drawVector2d(color.white, 'a', vec1);
//   vecResult = vec1.clone();
//   drawVector2d(color.pink, 'b',  vec2, vecResult);
//   vecResult.add(vec2);
//   drawVector2d(color.green, 'c', vec3, vecResult);
//   vecResult.add(vec3);
//   drawVector2d(color.yellow, 'd', vec4, vecResult);
//   vecResult.add(vec4);
//   drawVector2d(color.orange, 'e', vec5, vecResult);
//   vecResult.add(vec5);
//   drawVector2d(color.blue,  'f', vec6, vecResult);
//   vecResult.add(vec6);
//   drawVector2d(color.yellow, 'g', vec7, vecResult);
//   vecResult.add(vec7);
//   drawVector2d(color.green, 'a+b+c+d+e+f+g', vecResult);
// };

// add = function() {
//   var vec1, vec2;
//   vec1 = Vector2d(mouse.position.x/sizeGrid-canvas.width/2/sizeGrid, mouse.position.y/sizeGrid-canvas.height/2/sizeGrid);
//   vec2 = Vector2d(2, -5);
//   vec3 = vec1.clone().add(vec2);
//   drawVector2d(color.yellow, 'a', vec1);
//   drawVector2d(color.orange, 'b', vec2, vec1);
//   drawVector2d(color.green, 'c = a + b', vec3);
// };

// project = function() {
//   var vec1, vec2, vec3;
//   vec1 = Vector2d(mouse.position.x/sizeGrid-canvas.width/2/sizeGrid, mouse.position.y/sizeGrid-canvas.height/2/sizeGrid);
//   vec2 = Vector2d(2, -5);
//   vec3 = vec1.clone().project(vec2);
//   drawVector2d(color.orange, 'b', vec2);
//   if (vec2.isEqualRotate(vec3) && vec3.length <= vec2.length) {
//     drawVector2d(color.green, 'c', vec3);
//   }
// };

// lerp = function() {
//   var vec1, vec2, vec3;
//   vec1 = Vector2d(mouse.position.x/sizeGrid-canvas.width/2/sizeGrid, mouse.position.y/sizeGrid-canvas.height/2/sizeGrid);
//   vec2 = Vector2d(2, -5);
//   vec3 = vec1.clone().lerp(vec2, 0.5);
//   drawVector2d(color.orange, 'a', vec1);
//   drawVector2d(color.green, 'b', vec2);
//   drawVector2d(color.blue, 'c', vec3);
// };


car = (function() {
  var car, vFtraction, vU, Engineforce, vFdrag, vFrr, vFlong, vA, vV, vP, Crr, Cdrag, M;

  vU = Vector2d.UP;
  Engineforce = 0;
  vV = Vector2d.ZERO;
  Cdrag = 0.4257;
  Crr = Cdrag * 30;
  M = 1500;
  dt = 0.3;

  vV = Vector2d.ZERO;
  vP = Vector2d.ZERO;
  vFtraction = Vector2d.ZERO;
  vFdrag = Vector2d.ZERO
  vFrr = Vector2d.ZERO
  vFlong = Vector2d.ZERO
  vA = Vector2d.ZERO
  vADT = Vector2d.ZERO
  vVDT = Vector2d.ZERO

  var a = Vector2d(5, 0);
  var b = Vector2d(0, 5);
  console.log(Vector2d.add(a, b));

  var posWheel1 = Vector2d.ZERO;
  var rotateWheel = Vector2d.RIGHT;
  var rW = Vector2d.ZERO;
  var rectCar = Vector2d(2, 1);

  var L = 0.6128355544951826*2;
  var R = 0;
  var vW = Vector2d.ONE;

  var ll = Vector2d(0.6128355544951826, -0.5142300877492314);

  var vWW = Vector2d.ZERO;
  car = function() {
    w();
    phisics();
    gas();
    rule();
    drawRect(vP, vU, rectCar.x, rectCar.y);
    drawWheel(-40, rW, true);
    drawWheel(40, rW, true);
    drawWheel(-40, vU, false);
    drawWheel(40, vU, false);
  };

  var phisics = function() {
    vFtraction.equate(vU).multiply(Engineforce);
    vFdrag.equate(vV).multiply(-Cdrag).multiply(vV.length);
    vFrr.equate(vV).multiply(-Crr);
    vFlong.equate(vFtraction).add(vFdrag, vFrr);
    vA.equate(vFlong).divide(M);
    vADT.equate(vA).multiply(dt);
    vV.add(vADT);
    R = L/Math.cos(Math.PI/180*(90 - rotateWheel.rotate));
    vW.length = R;
    vW.rotate = rotateWheel.rotate - 90;
    vWW.equate(vV).divide(R);
    vWW.rotate += 90;
    vU.add(vWW).normalize();
    vVDT.equate(vV).multiply(dt);
    vP.add(vVDT);
  };

  var drawWheel = function(a, b, t) {
    ll.rotate = vU.rotate + a;
    if (t) {
      posWheel1.equate(vP).add(ll);
    } else {
      posWheel1.equate(vP).subtract(ll);
    }
    rW.equate(vU).rotate += rotateWheel.rotate;
    drawRect(posWheel1, b, 0.2, 0.1);
  };

  var rule = function() {
    rotateWheel.rotate *= 0.9;
    if (keyboard.isPressed('D'.charCodeAt(0))) rotateWheel.rotate += 2.5;
    if (keyboard.isPressed('A'.charCodeAt(0))) rotateWheel.rotate -= 2.5;
    if (rotateWheel.rotate < -45) rotateWheel.rotate = -45;
    if (rotateWheel.rotate > 45) rotateWheel.rotate = 45;
  };

  var gas = function() {
    if (keyboard.isPressed('W'.charCodeAt(0))) {
      Engineforce = 50;
    } else if (keyboard.isPressed('S'.charCodeAt(0))) {
      Engineforce = -50;
    } else {
      Engineforce = 0;
    }
  };

  var w = function() {
    if (vP.x < -25) vP.x = 25
    if (vP.x > 25) vP.x = -25
    if (vP.y < -15) vP.y = 15
    if (vP.y > 15) vP.y = -15
    if (keyboard.isDown('R'.charCodeAt(0))) window.location.href = window.location.href;
  };

  return car;

})();

examples = [
  car
];