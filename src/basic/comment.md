---
title: 注释
---

注释是程序中的一种特殊文本，用于解释代码的作用。在仓颉中，注释可以帮助我们更好地理解代码的含义。

在仓颉中，注释有两种类型：

- 常规注释：编译时将会被编译器忽略，不会影响程序的编译和运行。
  - 单行注释：以 `//` 开头，直到行尾
  - 多行注释：以 `/*` 开头，以 `*/` 结尾
- 文档注释：为自动生成文档而写的注释，是一种带有特殊功能的注释。

  文档注释以 `/**` 开头，以 `*/` 结尾，可以包含一些特殊的注解，用于生成文档。

## 常规注释

```cj
main() {
    // 这是一个单行注释
    println("Hello World!") // 这是另一个单行注释

    // println("Hello World!") // 这行代码被注释掉了，不会执行

    /*
     * 这是一个多行注释
     * 它可以跨越多行
     *
     * 前面的 * 只是为了好看，不是必须的
     */
    println("你好仓颉！")
}
```

## 文档注释

文档注释是一种特殊的注释，用于生成文档。文档注释以 `/**` 开头，以 `*/` 结尾，可以包含一些特殊的注解，用于生成文档。

例如：

```cj
/**
 * @brief 实现 a + b
 *
 * 这个函数是一个仓颉函数\n
 * 主要用来实现
 * a + b
 *
 * @param a 第一个数字
 * @param b 第二个数字
 * @return a + b 的结果
 */
func plus(a: Int64, b: Int64) {
    a + b
}
```

| **标签**     | **描述**                   | **示例**                                |
| ------------ | -------------------------- | --------------------------------------- |
| `@file`      | 文件描述信息               | `@file file description`                |
| `@author`    | 标识作者                   | `@author description`                   |
| `@version`   | 指定版本                   | `@version info`                         |
| `@date`      | 指定日期                   | `@date datetime`                        |
| `@since`     | 标记当引入一个特定的变化时 | `@since release`                        |
| `@see`       | 指定一个到另一个主题的链接 | `@see anchor`                           |
| `@brief`     | 标记简要描述               | `@brief brief description`              |
| `@param`     | 说明一个方法的参数         | `@param parameter-name explanation`     |
| `@return`    | 说明返回值类型             | `@return explanation`                   |
| `@throws`    | 和 `@exception` 标签一样   | `@throws exception-name explanation`    |
| `@exception` | 标志抛出的异常             | `@exception exception-name explanation` |
| `@note`      | 标记提示信息               | `@note note text`                       |
| `@warning`   | 标记告警信息               | `@warning warning text`                 |
| `@attention` | 标记需要注意的信息         | `@attention attention text`             |

下面的注解不推荐在正式代码中使用

| **标签**      | **描述**               | **示例**                                        |
| ------------- | ---------------------- | ----------------------------------------------- |
| `@todo`       | 标记后续需要做的事     | `@todo paragraph describing what is to be done` |
| `@bug`        | 标记代码中未解决的 bug | `@bug bug description`                          |
| `@deprecated` | 标记过期的用法         | `@deprecated description`                       |
