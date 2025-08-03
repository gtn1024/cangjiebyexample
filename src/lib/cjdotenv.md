---
title: 使用 CjDotEnv 加载环境变量
---

[CjDotEnv](https://github.com/gtn1024/cjdotenv) 是一个用来从 `.env` 文件中加载环境变量的仓颉库。

## 安装

```toml
# 将其放在 `cjpm.toml` 的 `dependencies` 部分
cjdotenv = { git = "https://github.com/gtn1024/cjdotenv.git", tag = "0.1.0" }
```

## 使用

在项目的根目录下创建一个 `.env` 文件，然后在文件中添加环境变量，例如：

```shell
# .env

DB_HOST=localhost
DB_USER=postgres
DB_PASS=123456
DB_DATABASE=postgres

DB_STR="postgres://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_DATABASE}"
```

```cj
import cjdotenv.load
import std.os.getEnv

main() {
    load()

    println(getEnv("DB_HOST") ?? "") // localhost
    println(getEnv("DB_USER") ?? "") // postgres
    println(getEnv("DB_PASS") ?? "") // 123456
    println(getEnv("DB_DATABASE") ?? "") // postgres
    println(getEnv("DB_STR") ?? "") // postgres://postgres:123456@localhost/postgres
}
```
