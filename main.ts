// 三角形の面積を求める
function triangle(bottom: number, height: number) {
//                      ^^^^^^^^        ^^^^^^^^
//                      └───────────────┤
//                                      引数の後ろに`:`と`型`を書き、`bottom`と`height`が`number`型ということを明示する。
    return bottom * height / 2;
}

const bottom = prompt("底辺を入力してください。");
const area = triangle(bottom, 5);
//                    ^^^^^^
//                    │
//                    `bottom`は`string`型で、`triangle`関数の１つ目の引数が`number`型が指定されているため、エラーが発生する。
  