---
title: 実装
description: このページでは、Go言語で階層化したconfigの実装方法を紹介します。goのプロジェクト内で、環境変数を`.env`から読み取り、任意のgoファイルからアクセスできるようにすることができるようになります。
image: img/thambnails/go/hierarchy-config.png
keywords: [Go, 階層, config, godotenv, init]
tags:
  - godotenv
  - init
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 階層 config　実装

このページでは、Go 言語で**階層化した config を使う方法**を紹介します。

### できるようになること

go のプロジェクト内で、環境変数を`.env`から読み取り、任意の go ファイルからアクセスできるようにすることができるようになります。

### 最終的なファイル構成

```bash
<project>
├── .env
├── any
│   └── any.go
├── config
│   └── config.go
└── main.go
```

<Tabs>

<TabItem value="env" label=".env">

```
APP_URL=https://example.com
...
DB_USER=user
DB_PASS=password
```

</TabItem>

<TabItem value="config" label="config.go">

```go
package config

import (
    "log"
    "os"

    "github.com/joho/godotenv"
)

// Public variables
// Defined only by the func init
var (
    App *appConfig
    Db  *dbConfig
    // ...
)

type appConfig struct {
    Url string
    // ...
}

type dbConfig struct {
    User     string
    Password string
    // ...
}

// init is called automatically when the package is imported
func init() {
    err := godotenv.Load()
    if err != nil {
        log.Fatal(".envの読み取りに失敗しました。")
    }

    App = &appConfig{
        Url: os.Getenv("APP_URL"),
        // ...
    }
    Db = &dbConfig{
        User:     os.Getenv("DB_USER"),
        Password: os.Getenv("DB_PASS"),
        // ...
    }
}

```

</TabItem>

<TabItem value="main" label="main.go">

```go
package main

import (
    "fmt"
    "<project>/config"
)

func main() {
    fmt.Println(config.App.Url)     // https://example.com
    // ...
    fmt.Println(config.Db.User)     // user
    fmt.Println(config.Db.Password) // password
}
```

</TabItem>

<TabItem value="any" label="any.go">

```go
package any

import (
    "fmt"
    "<project>/config"
)

func DoSomething() {
    fmt.Println(config.App.Url)     // https://example.com
    // ...
    fmt.Println(config.Db.User)     // user
    fmt.Println(config.Db.Password) // password

    // do something...
}
```

</TabItem>

</Tabs>

---
## 解説
### 1. 環境変数を読み込む

`.env`ファイルを用意します。

```markup title=".env"
APP_URL=https://example.com
...
DB_USER=user
DB_PASS=password
```

[godotenv](https://github.com/joho/godotenv) をプロジェクトにインストールします。

```bash
go get github.com/joho/godotenv
```

:::info[`godotenv`の使用法]

```go title="main.go"
package main

import (
    "log"
    "os"

    "github.com/joho/godotenv"
)

func main() {
  err := godotenv.Load()
  if err != nil {
    log.Fatal(".envの読み取りに失敗しました。")
  }

  appUrl := os.Getenv("APP_URL")
  dbUser := os.Getenv("DB_USER")
  dbPass := os.Getenv("DB_PASS")

  // do something...
}
```

:::

これで、`.env`の値を取得することができるようになりました。

### 2. config パッケージを作成する

#### ファイル構成

```bash
<project>
├── .env
# highlight-start
├── config
│   └── config.go
# highlight-end
└── main.go
```

#### config.go

`config/config.go`を作成し、公開する変数を定義し、これらの値を設定する関数`init()`を定義します。  
なお、`init()`はパッケージがインポートされた時に自動的に実行されます。

```go title="<project>/config/config.go"
package config

import (
    "log"
    "os"

    "github.com/joho/godotenv"
)

// Public variables
// Defined only by the func init
var (
    App *appConfig
    Db  *dbConfig
    // ...
)

type appConfig struct {
    Url string
    // ...
}

type dbConfig struct {
    User     string
    Password string
    // ...
}

// init is called automatically when the package is imported
func init() {
    err := godotenv.Load()
    if err != nil {
        log.Fatal(".envの読み取りに失敗しました。")
    }

    App = &appConfig{
        Url: os.Getenv("APP_URL"),
        // ...
    }
    Db = &dbConfig{
        User:     os.Getenv("DB_USER"),
        Password: os.Getenv("DB_PASS"),
        // ...
    }
}

```

### 3. go ファイルから config へアクセス

`"<project>/config"`をインポートすると、`config.init()`が実行され、パッケージ変数が初期化されます。

```go title="<project>/main.go"
package main

import (
    "fmt"
    "<project>/config"
)

func main() {
    fmt.Println(config.App.Url)     // https://example.com
    fmt.Println(config.Db.User)     // user
    fmt.Println(config.Db.Password) // password
}
```

これは、`main.go`に限らず、他のファイルからも同様にアクセス可能です。

```go title="<project>/any/any.go"
package any

import (
    "fmt"
    "<project>/config"
)

func DoSomething() {
    fmt.Println(config.App.Url)     // https://example.com
    fmt.Println(config.Db.User)     // user
    fmt.Println(config.Db.Password) // password

    // do something...
}
```

---

## 参考

- [godotenv](https://github.com/joho/godotenv)
