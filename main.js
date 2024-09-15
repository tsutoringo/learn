// 三角形の面積を求める
function triangle(bottom, height) {
    return bottom * height / 2;
}

const bottom = prompt("底辺を入力してください。");
const area = triangle(bottom, 5);
  