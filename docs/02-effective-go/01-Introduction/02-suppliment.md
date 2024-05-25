---
title: 補足
description: リード文を読み解くための補足を紹介しています。
# image: img/thambnails/go/hierarchy-config.png
keywords: [Go, effective go, Introduction]
tags:
  - effective go
  - Introduction
  - 補足
---

# 補足

## [公式文書群](https://go.dev/doc/)

### [language specification](https://go.dev/ref/spec)

Go の言語仕様書。  
基礎の基礎と言えそうな文書となっている。根気は必要となるが、一度は読まれたい。

### [A Tour of Go](https://go.dev/tour/welcome/1)

Go の対話的なチュートリアル。  
4 つのセクションに分かれており、それぞれ

1. 基本的な構文とデータ構造
2. メソッドとインターフェイス
3. ジェネリクス
4. 並行処理の原則

を説明している。

### [How to Write Go Code](https://go.dev/doc/code)

Go のモジュール内で簡単なパッケージ群を開発する方法を説明し、パッケージをビルドしてテストするための go コマンドを紹介した文書。

## [issue 28782](https://github.com/golang/go/issues/28782)

Go の共同作者の一人 Rob Pike 氏による Github issue。以下に、内容を翻訳して示します。

---

最近、Effective Go 内部のコードを変更しようという提案がたくさんある。例えば、[#28773](https://github.com/golang/go/issues/28773)のコメントでは、strings.Builder を使う例を追加することが提案されています。しかし実際には、このドキュメントにはライブラリ関数に関する記述がほとんどないので、strings.Builder から始めるのはあまり意味がありません。

私一人かもしれませんが、現在の『Effective Go』（EG）と呼ばれる文書は、ちょっとしたタイムカプセル、いわば出版された本のようなものだと思ってます。

私は、それは放っておくべきだと思います。アドバイスや推奨、それらの選別の継続的な乱立は、ここで展開されるべきではありません。この文書は古臭いですが、効果的な Go のコードを書くにはどうしたら良いかということについて、よく書かれていると思います。モダンでトレンディでスタイリスティックで、ライブラリを意識したコードをどう書くかは別の問題です。

私は、ライブラリ（EG にはほとんどない）、スタイル（ほぼ同じ）、インターフェイスではなく具象型を返すというような「ベストプラクティス」（なぜそれがルールなのか理解できないほど多くの注意事項が必要）などについて語る新しい文書が必要だと思います。それを EG に取り込もうとすると、いくつかのことが起こるのではないかと危惧しています。: EG はもっと長くなり、常に変化し続け、多くの人が手を加え、EG が持っている文体を失ってしまうでしょう。

ここは一つ、EG は凍結して、もっとダイナミックで現在に目を向けた新しいことを始めましょう。

---