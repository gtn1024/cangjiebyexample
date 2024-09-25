---
title: Hello World
---

正如学习其他编程语言一样，我们从一个简单的 `Hello World` 程序开始。在这个例子中，我们将学习如何在仓颉中打印文本。

```cj
// This is our first cangjie program
// It will print "Hello World!" to the console

/* This is the program entry */
main() {
    // Print "Hello World!" to the console
    println("Hello World!")
}
```

`println` 是仓颉的一个内置函数，用于向控制台打印一行文本。

我们可以通过仓颉的编译器 `cjc` 将其编译为二进制文件。

```shell
$ cjc hello.cj -o hello
```

`cjc` 将会生成一个 `hello` 的二进制可执行程序。我们可以运行它：

```shell
$ ./hello
Hello World!
```

::: tip
如果你使用 Windows，请为生成的二进制文件添加 `.exe` 后缀：

```powershell
$ cjc hello.cj -o hello.exe
$ hello.exe
Hello World!
```

:::

## 练习

尝试修改上面的代码，使其打印输出如下内容：

```plain
Hello World!
你好仓颉！
```
