---
title: 认识 cjpm
---

包管理工具是现代编程语言生态系统的重要组成部分。它们帮助开发者轻松地安装、更新和管理代码包及其依赖关系。对于仓颉语言，`cjpm` 是官方推出的仓颉包管理工具。

## 创建“你好，世界”项目

cjpm 需要首先创建一个目录，然后在目录中进行 `init` 操作，以便生成项目的基本结构和配置文件。

```shell
$ mkdir hello_world
$ cd hello_world
$ cjpm init --name hello_world
```

执行完 `cjpm init` 命令后，会在当前目录下创建可执行仓颉项目。目录结构如下：

```shell
$ tree
hello_world
├── cjpm.toml
└── src
    └── main.cj
```

## 运行项目

```shell
$ cjpm run
hello world

cjpm run finished
```

好了，你已经看到程序的输出：`Hello, world`。

事实上，`cjpm run` 命令进行了两步操作：

编译源代码

```shell
$ cjpm build
cjpm build success
```

运行生成的可执行文件

```shell
$ ./target/release/bin/main
hello world
```

默认而言，`cjpm build` 会生成 `release` 模式的程序，其优点是产物运行速度快，但编译较慢。而 `debug` 版本的产物则更易于调试，但运行速度较慢。

```shell
$ cjpm build -g
cjpm build success
```

```shell
$ ./target/debug/bin/main
hello world
```

## cjpm.toml 和 cjpm.lock

TODO
