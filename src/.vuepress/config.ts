import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "Cangjie by Example",
      description: "Learn cangjie programming language by example",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "例学仓颉",
      description: "通过例子学习仓颉编程语言",
    },
  },

  theme,
});
