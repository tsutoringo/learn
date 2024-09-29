---
marp: true
_class: lead
theme: gaia
paginate: true
backgroundColor: #fff
backgroundImage: url('https://marp.app/assets/hero-background.svg')
style: |
  :root {
    font-size: 2.4em;
  }
---

# TypeScriptを勉強しよう

---

# 前提知識
- JavaScript を使ったプログラミング経験
- あれば良い
  - 型についての知識・オブジェクト指向

---

# はじめに
このスライドはまず型についての簡単な知識と、
なぜJavaScriptを使わずにTypeScriptを使うのか学びます。

## このスライドを読んでいくうえで、大事な心持ち。
- 型を意識しよう
- エラーと友達になろう
- 人間のチェックは信じられない！

---
<!-- _class: lead -->

みんな嫌いな
# 座学

---

<!-- _class: lead -->
## What difference between JS and TS
JavaScriptとTypeScriptにはどのような違いがあるか。

---

<!-- _class: lead -->
JavaScriptは動的型付け言語
TypeScriptは静的型付け言語

---

<!-- _class: lead -->
![bg left:40%](image-1.png)
# ?

---

動的型付け言語である、JavaScriptやPythonはあまり「**型**」を明示的に書かずコードを書くことができます。
逆に静的型付け言語のTypeScriptやJavaは型を**意識**し、**明示的**に書く必要性があります。

具体にそれがどういうことなのかという話の前に、まず「**型**」が何なのかを勉強していきましょう。

---

<!-- _class: lead -->
## 1. What's Type
型って何

---

1. What's Type では型がなにか と、型を意識する重要性について考えます。

型はJavaScriptにかかわらず大抵の言語でも必要となる考え方になります。

型は、変数(定数、引数など含む)に適用できるものであり、
型を意識するには抽象的に考えるのが大事です。

型には多くの種類がありますが、
手始めに、`string`型と`number`型を例に進めていきましょう。

---

例えばこのコード

```JavaScript
const firstName = "Sora";
const lastName  = "Hattori";

const language  = "JavaScript";
```
例えばこのJavaScriptのコードでは  
`"Sora"`や`"Hattori"`, `"JavaScript"`など、  
**具体的**に何が入ってると考えるより  
どの変数も、`string`型が入ってると**抽象的**に考えます。  

---

`number`型の場合も見ていきましょう。

```JavaScript
const age    = 19;
const year   = 2024;
const height = 185.3;
```
この場合も同じです。
`19`や`2024`, `185.3`が入ってると考えるより、`number`型が入ってると考えます。

---

<!-- _class: lead -->
## And...?
それで...?

---

**型を意識する必要**がある理由の一つがわかる例があります。
それは数値同士の計算です。
```JavaScript
// 三角形の面積を求める
function triangle(bottom, height) {
  return bottom * height / 2;
}

const area = triangle(21, 5);
```
この`triangle`関数の引数`bottom`と`height`が求める型は、どちらも`number`型になります。

---


```JavaScript
// 三角形の面積を求める
function triangle(bottom, height) {
  return bottom * height / 2;
}
const input = prompt("底辺を入力してください");
const area = triangle(input, 5);
```
もし、このようなコードを書いてしまった場合。
引数`bottom`には文字列<sup>[1](#bad-type)</sup>が入ってしまい、`string` * `number`の計算を行おうとしてエラーが発生<sup>[2](#bad-error)</sup>します。
このようなエラーを防ぐには、常に型を意識をしなければなりません。
<small id="bad-type"> *1 厳密には違いますが今回は便宜上これで説明します</small>

---

<!-- _class: lead -->
## 2. In TypeScript
TypeScriptでは

---

2. In TypeScript では、JSではだめな理由とTypeScriptに書き換えたときのコードを比較していきます。

型を意識するだけでエラーを防げるなら意識すればいいじゃん。と思った方はいませんよね？

コードが1000行、ソースファイルも10個以上のような状況になったときあなたとあなたのチームメイトは、**完璧に型を意識してコードを書くこと**は出来ますでしょうか？

---
<!-- _class: lead -->
![bg left:40%](image.png)

## そう、出来ません。

---

けれどそれを実現しなければ大量のバグの元になります。

例えばボタンを押したときに先程の`triangle`関数のような呼び方を気づかず行ってしまうと、ボタンを押すまでエラーが発生しない事に加え、必ずしもそのボタンを押してデバックするとは限らないため、更に発見が遅れる可能性が高いです。

そのような事故を防ぐため、我々が型を明示的に書き実行する前にTypeScriptに型があっているか自動的に確認してもらおう！
というのがTypeScriptです。

---

<!-- _class: lead -->
![bg left:40%](image-2.png)
型と問題点がわかったところで
# 座学終わり

---

型とJSの問題点がわかったところで今までのコードをTypeScriptに書き換えていきましょう。

次のURLからTypeScriptを試せるページに飛びます。
[TypeScript Playground](https://www.typescriptlang.org/play/?#code/PTAEkg5QlyMI31DsGQjdMLJegkhkEI2hAhkNEMAoAZgVwDsBjAFwEsB7Q0UgJ3IENCBzAGwFMAKAI0tNKUAtgBpQACw7kW40gEpQAb2yhQdDqXx0afAcNAAqCVJmlQYAEwBubAF9sxagGczuwUNABeUAAc6wn1IuACJAVL1ALvjkQFNFQGylQHUGQDMGQHkGQAMGQFUGQBEGQCAGYLkbR0IXUEZ1Ri9aBmZ2bjdhMQBWPOwgA)

このTypeScriptを参考に書き換えて見てください(ﾃﾞｷﾚﾊﾞｺﾋﾟﾍﾟｼﾅｲﾃﾞｶｲﾃﾈ)
[TypeScript Playground](https://www.typescriptlang.org/play/?#code/PTAEkg5QlyMI31DsGQjdMLJegkhkEI2hAhkNEMAoAZgVwDsBjAFwEsB7Q0UgJ3IENCBzAGwFMAKAI0tNKUAtgC5QhfEJ4c6AGlAALDuRYLSYiVJkBKDZOl1QAb2yhQdDqXx0afAcNAAqRctWlQYAEwBubAF9sbGJqAGd3O0FRcX0ZUABeUAAHOmFE0i4AIkBUvUAu+ORAU0VAbKVAdQZAMwZAeQZAAwZAVQZAEQZAIAYM7V9gwjDQRgtGPS1DBPomVk5efkj5AFZm7CA)

---

## 型注釈

TypeScript特有の[型注釈](https://www.typescriptlang.org/play/?#code/PTAEkg5QlyMI31DsGQjdMLJegkhkEI2hAhkNEMAoAZgVwDsBjAFwEsB7Q0UgJ3IENCBzAGwFMAKAI0tNKUAtgC5QhfEJ4c6AGlAALDuRYLSYiVJkBKDZOl1QAb2whQ5i5avWLAPXsObdh-ecvTYJ1+uAUUkAApAGBQcGALKTBgWHhUYAIpNjmdByk+HQ0fALCoABUisqqpKBgAEwA3Gbe5RWggECk2AC+ZZWNTc0WNcTUAM75aYKi4voyoAC8oAAOdMKjpFwARICpeoBd8ciApoqA2UqA6gyAZgyA8gyABgyAqgyAIgyAQAwz2qWeNoDR6oAXNoATiR4VLq4tr941DV7+UT+-f--BQAkpNh2oQuqBGAlGHotIYRvQmKxOLx+L15ABWc6fN4fS42Z62N5Ery47zfAEUykAwAYpEA)をつけました。
そうすると`const bottom`のところにエラーが出たはずです。

これの解説は[ココ](https://www.typescriptlang.org/play/?#code/PTAEkg5QlyMI31DsGQjdMLJegkhkEI2hAhkNEMAoAZgVwDsBjAFwEsB7Q0UgJ3IENCBzAGwFMAKAI0tNKUAtgC5QhfEJ4c6AGlAALDuRYLSYiVJkBKDZOl1QAb2yhQdDqXx0afAcNAAqRctWlQYAEwBubAF9sbGJqAGd3O0FRcX0ZUABeUAAHOmFE0i4AIkBUvUAu+ORAU0VAbKVAdQZAMwZAeQZAAwZAVQZAEQZAIAYM7V8QMzMAPU6u7u62nv6BwZ7sVrbAIFI2yanJwBRSQABSZNTSWEBuI0AohkASBUB7BgADMIZWUAAfaLY2HcBo9RGwcevZuYfHp+fHysBFBkBLBkBITUAHUx2I4Q7XaaAyXWCARu9AFYMsEA5gwXWCAWDlAABygBfAmEAFQAnokOABlYgMNKAGQZABUMgEuGQA-DMhAF5ugHxXaqAbQYcMFCGFQIwLIw9FpDAl6ExWJxePxIvIAKzNbBAA)に書いてある通りです。

これの解決方法は少し踏み込んだ話をしなければならないので一旦このコードとはおさらばして、別のサンプルコードに移ります。

---

## 型推論

[次のコード](https://www.typescriptlang.org/play/?#code/PTAEgdTR1bUJIZAKlR070OoMgzBkIAMgFX0Dnm1Ar8YTQZAgBgCgAzAVwDsBjAFwEsB7C0AQwBM2AKADwBpQAngEpQAbyKhQAJwCmNMlObdQAakEBuIgF8iRKkwDONaTINkANsYC8rDpwCMAJgAM-AMzOhm9lyevQAEQeAV5EIJIRkgB6MVFhwAB0kZKAKKSAAKQZAAYUZAC2AEYyUpmA0eqA5gyA9gyAVgyAIgyAdgxlgBUMgJcMgD8MgNYMKIDeDIg1REA)に先程のコードを参考に型注釈をつけれるところ全てにつけてみてください。

[型注釈をつけたコード](https://www.typescriptlang.org/play/?#code/PTAEgdTR1bUJIZAKlR070OoMgzBkIAMgFX0Dnm1Ar8YTQZAgBgCgAzAVwDsBjAFwEsB7C0AQwBM2AKADwC5QKZALYAjAKYAnADSgAnv0GjJASgXDxE0AG8ioUBLE0yE5t1ABqOQG4iAXyJEqTAM419Y52QA2NNUs0AvKwcnACMAEwADDIAzJHKNuxcEdGgAERxaQlEIHp5egB6RQU5YPl6gCikgACkNQAGihq1gNHqgOYMgPYMgFYMgCIMgHYMLYAVDICXDIA-DIDWDCiA3gyIXURAA)がこちらになります。
これ型注釈をわざわざ明示的に書かなくても推論できるんじゃね？

はい、そうです。
[このように](https://www.typescriptlang.org/play/?#code/PTAEgdTR1bUJIZAKlR070OoMgzBkIAMgFX0Dnm1Ar8YTQZAgBgCgAzAVwDsBjAFwEsB7C0AQwBM2AKADwC5QKZALYAjAKYAnADSgAnv0GjJASlABvIqFAgtuvfoOHdAPU2gJYmmQnNuoANRyA3DqNHAQKRnXJ47+NuA0E8tby1AFFJAAFIo6JjYuOjAZQZAOwZAeH0krCSAA0VxCUzAaPVoCysbFEARBkBohiTAcwZAItTwTPY2TKTAbiNAKIZAEgUk-MB7BmzhXIKiAF8iIiomAGcaczEpsgAbWYBeVg5OAEYAJgAGGQBmXeUnIlC-Px8L69NzjzOwXUi4gB4m+rau3pzJfMArBhqgEhNBoWBbLTLfQa-QAGDIAIhkAtgxEIA)に推論できるところは自動で推論してくれます。

---

# まとめ

- JavaScriptは型を実行時に決まりので気づかない可能性がある
  - これを動的型付け言語という
- TypeScriptは人が型を明示し、明示された型を確認をTypeScriptがするためしょうもないミスが減る
  - これを静的型付け言語という
- 動的型付け言語が型を自動で決定してくれるの楽じゃん、という考えは概ね後からしんどくなる

--- 

![bg left:30%](https://media1.tenor.com/m/xuRoGCoV7hAAAAAC/genba-neko-dance.gif)

表にするとこんな感じ
|            | 型を明示しないとだめか       |
| ---------- | ---------------------------- |
| JavaScript | ◯ 実行時に自動で決定        |
| TypeScript | △ 一部手動で明示が必要      |

|            | 型チェック                   |
| ---------- | ---------------------------- |
| JavaScript | ✗ 人がやらないといけない       |
| TypeScript | ◎ 明示した型で自動でチェック   |


---

# 参考
- [サバイバルTypeScript](https://typescriptbook.jp/)
