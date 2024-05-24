---
title: 階層config
description: このページでは、Go言語で階層化したconfigを使う方法を紹介します。goのプロジェクト内で、環境変数を`.env`から読み取り、任意のgoファイルからアクセスできるようにすることができるようになります。
image: img/thambnails/go/hierarchy-config.png
keywords: [Go, 階層, config, godotenv]
tags:
  - godotenv
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 階層config

このページでは、Go言語で**階層化した config を使う方法**を紹介します。

### できるようになること

goのプロジェクト内で、環境変数を`.env`から読み取り、任意のgoファイルからアクセスできるようにすることができるようになります。

### 最終的なファイル構成

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

func any() {
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

## 2. config パッケージを作成する

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

`config/config.go`を作成し、構造体`Config`を定義し、初期化のためのメソッド`New()`を定義します。

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

func (c *Config) New() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal(".envの読み取りに失敗しました。")
	}

	c.App = &appConfig{
		Url: os.Getenv("APP_URL"),
		// ...
	}
	c.Db = &dbConfig{
		User:     os.Getenv("DB_USER"),
		Password: os.Getenv("DB_PASS"),
		// ...
	}
}
```

## 3. goファイルから config へアクセス

`main.go`からアクセスする例を示します。

```go title="main.go"
package main

import (
    "fmt"
    "<project>/config"
)

func main() {
    cfg := config.Config{}
	cfg.New()

	fmt.Println(cfg.App.Url)     // https://example.com
	fmt.Println(cfg.Db.User)     // user
	fmt.Println(cfg.Db.Password) // password
}
```

---

## まとめ

今回は、go のプロジェクトにおいて、環境変数を読み取る方法と、任意の go ファイルから config へアクセスする方法を紹介しました。さらに`Config`構造体の形を自由に組み替えることで、より柔軟な config を実現できます。

また、`Config`の値を全て環境変数から読み込んだ値に設定しましたが、それ以外の設定値も`New()`メソッド内で自由に設定できます。

## 参考

- [godotenv](https://github.com/joho/godotenv)
