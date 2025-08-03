import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    {
      text: "仓颉语言基础",
      children: [
        {
          text: '1. 第一次相见',
          link: "first-try/README.md",
          collapsible: true,
          children: [
            {
              text: '1.1. 安装仓颉环境',
              link: "first-try/installation.md",
            },
            {
              text: '1.2. 编辑器',
              link: "first-try/editor.md",
            },
            {
              text: '1.3. 认识 cjpm',
              link: "first-try/cjpm.md",
            },
            {
              text: '1.4. 不只是 Hello World',
              link: "first-try/beyond-hello-world.md",
            },
          ]
        },
        {
          text: "2. Hello World",
          link: "basic/hello.md",
          collapsible: true,
          children: [
            {
              text: "1.1. 注释",
              link: "basic/comment.md"
            }
          ]
        },
      ]
    },
    {
      text: "常用第三方类库",
      // link: "lib/README.md",
      children: [
        "lib/cjdotenv.md"
      ]
    },
  ],
});
