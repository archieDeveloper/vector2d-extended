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

  vVisual = Vector2d.right();

  vU = Vector2d.up();
  Engineforce = 0;
  vV = Vector2d.zero();
  Cdrag = 0.4257;
  Crr = Cdrag * 30;
  M = 1500;
  dt = 0.3;

  vV = Vector2d();
  vP = Vector2d();

  vFtraction = vU.clone().multiply(Engineforce);
  vFdrag = vV.clone().multiply(-Cdrag).multiply(vV.length)
  vFrr = vV.clone().multiply(-Crr)
  vFlong = vFtraction.clone().add(vFdrag).add(vFrr)
  vA = vFlong.clone().divide(M)
  vV = vA.clone().multiply(dt).add(vV)
  vP = vV.clone().multiply(dt).add(vP)

  var posWheel1 = Vector2d();
  var rotateWheel = Vector2d.right();
  var rW = Vector2d();
  var rectCar = Vector2d(2, 1);

  var L = 0.6128355544951826*2;
  var R = 0;
  var vW = Vector2d.one();

  var ll = Vector2d(0.6128355544951826, -0.5142300877492314);

  var vWW = Vector2d();
  car = function() {
    if (vP.x < -25) {
      vP.x = 25
    }
    if (vP.x > 25) {
      vP.x = -25
    }

    if (vP.y < -15) {
      vP.y = 15
    }
    if (vP.y > 15) {
      vP.y = -15
    }
    if (keyboard.isDown('R'.charCodeAt(0))) {
      window.location.href = window.location.href;
    }
    rotateWheel.rotate *= 0.9;

    vVisual.rotate = vU.rotate;
    vFtraction.equate(vU).multiply(Engineforce);
    vFdrag.equate(vV).multiply(-Cdrag).multiply(vV.length)
    vFrr.equate(vV).multiply(-Crr)
    vFlong.equate(vFtraction).add(vFdrag).add(vFrr)
    vA.equate(vFlong).divide(M)
    vV.add(vA.clone().multiply(dt));
    

    R = L/Math.cos(Math.PI/180*(90 - rotateWheel.rotate));
    vW.length = R;
    vW.rotate = rotateWheel.rotate - 90;

    vWW.equate(vV).divide(R);
    vWW.rotate += 90;

    vU.add(vWW).normalize();
    // vU.rotate += 1;

    vP.add(vV.clone().multiply(dt))
    if (keyboard.isPressed('W'.charCodeAt(0))) {
      Engineforce = 50;
    } else if (keyboard.isPressed('S'.charCodeAt(0))) {
      Engineforce = -50;
    } else {
      Engineforce = 0;
    }
    if (keyboard.isPressed('D'.charCodeAt(0))) {
      rotateWheel.rotate += 2.5;
    }
    if (keyboard.isPressed('A'.charCodeAt(0))) {
      rotateWheel.rotate -= 2.5;
    }
    if (rotateWheel.rotate < -45) {
      rotateWheel.rotate = -45;
    }
    if (rotateWheel.rotate > 45) {
      rotateWheel.rotate = 45;
    }


    drawRect(vP, vU, rectCar.x, rectCar.y);
    
    ll.rotate = vU.rotate - 40;
    posWheel1.equate(vP).add(ll);
    rW.equate(vU).rotate += rotateWheel.rotate;
    drawRect(posWheel1, rW, 0.2, 0.1);

    ll.rotate = vU.rotate + 40;
    posWheel1.equate(vP).add(ll);
    rW.equate(vU).rotate += rotateWheel.rotate;
    drawRect(posWheel1, rW, 0.2, 0.1);

    ll.rotate = vU.rotate - 40;
    posWheel1.equate(vP).subtract(ll);
    rW.equate(vU).rotate += rotateWheel.rotate;
    drawRect(posWheel1, vU, 0.2, 0.1);

    ll.rotate = vU.rotate + 40;
    posWheel1.equate(vP).subtract(ll);
    rW.equate(vU).rotate += rotateWheel.rotate;
    drawRect(posWheel1, vU, 0.2, 0.1);

    // drawVector2d(color.pink, '', ll);
  };

  return car;

})();

examples = [
  car
];