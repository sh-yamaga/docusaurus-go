---
title: 階層config
tags:
  - Go
  - Tips
  - 階層
  - config
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 階層config

こんにちは、めんだこです。  
このページでは、Go言語で**階層化したconfigを使う方法**を紹介します。

## できるようになること
goのプロジェクト内で、環境変数を`.env`から読み取り、任意のgoファイルからアクセスできるようにすることができるようになります。

## 最終的なファイル構成

```bash
<project>
├── .env
├── config
│   └── config.go
└── main.go
```

<Tabs>
<TabItem value="" label=".env">

```
APP_URL=https://example.com
...
DB_USER=user
DB_PASS=password
```

</TabItem>
<TabItem value="go" label="any.go">

```go
package any

import (
    "fmt"
    "<project>/config"
)

func main() {
    cfg := config.New()

    fmt.Println(cfg.App.Url) // https://example.com
    // ...
    fmt.Println(cfg.Db.User) // user
    fmt.Println(cfg.Db.Password) // password
}
```

</TabItem>
</Tabs>

---

## 1. 環境変数を読み込む
`.env`ファイルを用意します。

```markup title=".env"
APP_URL=https://example.com
...
DB_USER=user
DB_PASS=password
```

`godotenv`をプロジェクトにインストールします。

- [godotenv](https://github.com/joho/godotenv)

```bash
go get github.com/joho/godotenv
```

:::info[`godotenv`の使用例]

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

## 2. configパッケージを作成する

### ファイル構成
```bash
<project>
├── .env
# highlight-start
├── config
│   └── config.go
# highlight-end
└── main.go
```

### config.go
`config/config.go`を作成し、構造体`Config`を定義し、初期化のための関数`New()`を定義します。

```go title="<project>/config/config.go"
package config

import (
    "log"
    "os"

    "github.com/joho/godotenv"
)

type Config struct {
    App *appConfig
    Db *dbConfig
    // ...
}

type appConfig struct {
    Url string
    // ...
}

type dbConfig struct {
    User string
    Password string
    // ...
}

func New() *Config {
    err := godotenv.Load()
    if err != nil {
        log.Fatal(".envの読み取りに失敗しました。")
    }

    return &Config{
        App: &appConfig{
            Url: os.Getenv("APP_URL"),
            // ...
        },
        Db: &dbConfig{
            User: os.Getenv("DB_USER"),
            Password: os.Getenv("DB_PASS"),
            // ...
        },
        // ...
    }
}
```

## 3. goファイルからconfigへアクセス
`main.go`からアクセスする例を示します。

```go title="main.go"
package main

import (
    "fmt"
    "<project>/config"
)

func main() {
    cfg := config.New()

    fmt.Println(cfg.App.Url) // https://example.com
    // ...
    fmt.Println(cfg.Db.User) // user
    fmt.Println(cfg.Db.Password) // password
}
```

---

## まとめ

今回は、goのプロジェクトにおいて、環境変数を読み取る方法と、任意のgoファイルからconfigへアクセスする方法を紹介しました。さらに`Config`構造体の形を自由に組み替えることで、より柔軟なconfigを実現できます。  
ご覧いただきありがとうございました。では！
