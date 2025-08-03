import { defineUserConfig } from "vuepress";
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "例学仓颉",
  description: "通过例子学习仓颉编程语言",

  theme,

  plugins: [
    googleAnalyticsPlugin({
      id: 'G-VKPRXKB0K2',
    }),
  ]
});
