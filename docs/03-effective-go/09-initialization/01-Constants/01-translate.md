---
title: 和訳
description: 一部、本文からの表記を変更しています。
# image: img/thambnails/go/hierarchy-config.png
keywords: [Go, constants, 定数, effective go]
tags:
  - effective go
  - constants
  - 和訳
---

# 定数

### 概要

Goの定数とは、まさに定数です。  
Goの定数は、関数内で宣言されたものでさえ

- 数値
- 文字（rune）
- 文字列
- 真偽値　　

しか指定できません。  
コンパイル時の制限により、定数を定義する式は、コンパイラが評価可能な定数式でなければなりません。  
例えば、`1<<3`は定数式ですが、`math.Sin(math.Pi/4)`は、実行時に`math.Sin`を呼び出す必要があるため、定数式ではありません。

### サンプル

Goでは、列挙型の定数は iota 列挙子を使って作成されます。  
iota は式の一部であり、式は暗黙的に繰り返すことができるので、複雑な値の集合を作るのは簡単です。

```go
type ByteSize float64

const (
    _           = iota // ignore first value by assigning to blank identifier
    KB ByteSize = 1 << (10 * iota)
    MB
    GB
    TB
    PB
    EB
    ZB
    YB
)
```

String のようなメソッドを任意のユーザー定義型にんアタッチすることで、任意の値の出力時のフォーマットを指定することができます。  
このテクニックは、構造体に適用されることが最も多いですが、ByteSize のような浮動小数点数型のようなスカラー型にも有効です。

```go
func (b ByteSize) String() string {
    switch {
    case b >= YB:
        return fmt.Sprintf("%.2fYB", b/YB)
    case b >= ZB:
        return fmt.Sprintf("%.2fZB", b/ZB)
    case b >= EB:
        return fmt.Sprintf("%.2fEB", b/EB)
    case b >= PB:
        return fmt.Sprintf("%.2fPB", b/PB)
    case b >= TB:
        return fmt.Sprintf("%.2fTB", b/TB)
    case b >= GB:
        return fmt.Sprintf("%.2fGB", b/GB)
    case b >= MB:
        return fmt.Sprintf("%.2fMB", b/MB)
    case b >= KB:
        return fmt.Sprintf("%.2fKB", b/KB)
    }
    return fmt.Sprintf("%.2fB", b)
}
```

式YBは、 1.00YB と出力され、 ByteSize(1e13) は 9.09TB と出力されます。  
  
ByteSize の String メソッドを実装するために Sprintf を使用するのは、無限の繰り返し呼び出しを避けることができるため安全です。  
これは、置換によるためではなく、 Sprintf を文字列でない %f と一緒に呼び出しているためです。  
Sprintf は文字列が必要なときだけ String メソッドを呼び、%fには浮動小数点数の値が必要です。

#### 原文

[Constants](https://golang.org/doc/effective_go#constants)
