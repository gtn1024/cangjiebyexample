import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh/": [
    "",
    {
      text: "1. Hello World",
      link: "hello.md",
      collapsible: true,
      children: [
        {
          text: "1.1. 注释",
          link: "comment.md"
        }
      ]
    },
  ],
});
