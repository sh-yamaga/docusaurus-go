---
title: 和訳
description: Introduction リード文の翻訳
keywords: [Go, effective go, Introduction]
tags:
  - effective go
  - Introduction
  - 和訳
---

# Introduction

Go は若い言語です。既存の言語からいくつかのアイデアを拝借していますが、それらの言語とは違う、効果的に Go のプログラムを書くための特徴を持っています。C++ や Java のプログラムをそのまま Go に翻訳しても、満足のいく結果は得られないでしょう（Java のプログラムは Go ではなく Java で書かれていますからね）。一方で、まったく異なるプログラムができあがるかもしれませんが、Go の視点から問題を考えると実り多い結果を得ることができるでしょう。言い換えれば、Go をうまく書くためには、その特性と文法を理解することが重要です。また、あなたが書いたプログラムを他の Go プログラマーが理解しやすいように、命名やフォーマット、プログラム構成などの Go でプログラミングをするために確立された慣習を知っておくことも重要です。

この文書では、明瞭で慣用的な Go コードを書くためのヒントを示します。まず読むべき

- [language specification](https://go.dev/ref/spec)
- [A Tour of Go](https://go.dev/tour/welcome/1)
- [How to Write Go Code](https://go.dev/doc/code)

を補強するものです。

2022 年 1 月 追記: この文書は 2009 年の Go のリリースのために書かれたのもで、それ以来大幅な更新は行われていません。言語が安定しているおかげで、言語そのものの使い方を理解するには良いガイドとなっていますが、ライブラリについてはほとんど書かれておらず、build システムやテスト、モジュール、ポリモーフィズムなどの、この文書が書かれた後の Go のエコシステムの大きな変化については何も書かれていません。いろいろなことが起こり、モダンな Go の使い方を説明する文書やブログ、書籍が大量に増え続けているため、更新する予定はありません。Effecitve Go は引き続き役に立ちますが、完全なガイドとは全く言えないということを理解してください。詳しくは [issue 28782](https://github.com/golang/go/issues/28782)を参照してください。

#### 原文

[Effective Go#Introduction](https://go.dev/doc/effective_go#introduction)
