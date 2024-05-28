---
title: 和訳
description: Effective GoのVariablesの翻訳
# image: img/thambnails/go/hierarchy-config.png
keywords: [Go, variables, 変数, effective go]
tags:
  - effective go
  - variables
  - 和訳
---

# 変数

変数は定数と同じように初期化することができますが、初期化子は実行時に計算される一般的な式にすることができます。

```go
var (
    home   = os.Getenv("HOME")
    user   = os.Getenv("USER")
    gopath = os.Getenv("GOPATH")
)
```

#### 原文

[Variables](https://golang.org/doc/effective_go#variables)
