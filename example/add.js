var render, love;

love = function() {
  var vec1, vec2, vec3, vec4, vec5, vec6, vec7, vecResult, len;
  len = 1;
  vec1 = Vector2d(60,  -60).multiply(len);
  vec2 = Vector2d(0,   -40).multiply(len);
  vec3 = Vector2d(-40, -20).multiply(len);
  vec4 = Vector2d(-20,  20).multiply(len);
  vec5 = Vector2d(-20, -20).multiply(len);
  vec6 = Vector2d(-40,  20).multiply(len);
  vec7 = Vector2d(0,    40).multiply(len);
  drawVector2d(color.white,  vec1);
  vecResult = vec1.clone();
  drawVector2d(color.pink,   vec2, vecResult);
  vecResult.add(vec2);
  drawVector2d(color.green,  vec3, vecResult);
  vecResult.add(vec3);
  drawVector2d(color.yellow, vec4, vecResult);
  vecResult.add(vec4);
  drawVector2d(color.orange, vec5, vecResult);
  vecResult.add(vec5);
  drawVector2d(color.blue,   vec6, vecResult);
  vecResult.add(vec6);
  drawVector2d(color.yellow, vec7, vecResult);
  vecResult.add(vec7);
  drawVector2d(color.green, vecResult);
}

render = function() {
  love();
}