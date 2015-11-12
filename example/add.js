var love, add, scale, project, examples;

mouse = Mouse.getInstance();

love = function() {
  var vec1, vec2, vec3, vec4, vec5, vec6, vec7, vecResult, len;
  len = 2;
  vec1 = Vector2d(3,  -3).multiply(len);
  vec2 = Vector2d(0,  -2).multiply(len);
  vec3 = Vector2d(-2, -1).multiply(len);
  vec4 = Vector2d(-1,  1).multiply(len);
  vec5 = Vector2d(-1, -1).multiply(len);
  vec6 = Vector2d(-2,  1).multiply(len);
  vec7 = Vector2d(0,   2).multiply(len);
  drawVector2d(color.white, 'a', vec1);
  vecResult = vec1.clone();
  drawVector2d(color.pink, 'b',  vec2, vecResult);
  vecResult.add(vec2);
  drawVector2d(color.green, 'c', vec3, vecResult);
  vecResult.add(vec3);
  drawVector2d(color.yellow, 'd', vec4, vecResult);
  vecResult.add(vec4);
  drawVector2d(color.orange, 'e', vec5, vecResult);
  vecResult.add(vec5);
  drawVector2d(color.blue,  'f', vec6, vecResult);
  vecResult.add(vec6);
  drawVector2d(color.yellow, 'g', vec7, vecResult);
  vecResult.add(vec7);
  drawVector2d(color.green, 'a+b+c+d+e+f+g', vecResult);
}

add = function() {
  var vec1, vec2;
  vec1 = Vector2d(mouse.position.x/sizeGrid-canvas.width/2/sizeGrid, mouse.position.y/sizeGrid-canvas.height/2/sizeGrid);
  vec2 = Vector2d(2, -5);
  vec3 = vec1.clone().add(vec2);
  drawVector2d(color.yellow, 'a', vec1);
  drawVector2d(color.orange, 'b', vec2, vec1);
  drawVector2d(color.green, 'c = a + b', vec3);
}

project = function() {
  var vec1, vec2, vec3;
  vec1 = Vector2d(mouse.position.x/sizeGrid-canvas.width/2/sizeGrid, mouse.position.y/sizeGrid-canvas.height/2/sizeGrid);
  vec2 = Vector2d(2, -5);
  vec3 = vec1.clone().project(vec2);
  drawVector2d(color.orange, 'b', vec2);
  if (vec2.isEqualRotate(vec3) && vec3.length <= vec2.length) {
    drawVector2d(color.green, 'c', vec3);
  }
}

examples = [
  love,
  add,
  project
];