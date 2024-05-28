---
title: 和訳
description: Effective GoのThe init functionの翻訳
# image: img/thambnails/go/hierarchy-config.png
keywords: [Go, init, effective go]
tags:
  - effective go
  - init
  - 和訳
---

# The init function

最後に、各ソースファイルは、必要な状態を設定するために、独自の引数を持たないinit関数を定義することができます（実際には、各ファイルは複数のinit関数を持つことができます）。「最後に」と言ったのは、文字通りinitが呼び出されるのは、パッケージ内の全ての変数宣言がイニシャライザーに評価された後であり、さらにそれらはインポートされたパッケージが全て初期化されたあとに評価されるためです。  

宣言として表現できない初期化以外にも、init関数の一般的な使用法は、実際に実行される前にプログラム状態の正しさを検証したり、修正したりすることです。

```go
func init() {
    if user == "" {
        log.Fatal("$USER not set")
    }
    if home == "" {
        home = "/home/" + user
    }
    if gopath == "" {
        gopath = home + "/go"
    }
    // gopath may be overridden by --gopath flag on command line.
    flag.StringVar(&gopath, "gopath", gopath, "override default GOPATH")
}
```

#### 原文

[The init function](https://golang.org/doc/effective_go#init)
