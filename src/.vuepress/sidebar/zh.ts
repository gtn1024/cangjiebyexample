import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh/": [
    "",
    {
      text: "基础",
      children: [
        {
          text: "1. Hello World",
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
