import { hopeTheme } from "vuepress-theme-hope";

import { enNavbar, zhNavbar } from "./navbar/index.js";
import { enSidebar, zhSidebar } from "./sidebar/index.js";

import cjGrammar from './Cangjie.tmLanguage.json'

export default hopeTheme({
  hostname: "https://cangjiebyexample.com",

  repo: "gtn1024/cangjiebyexample",
  docsBranch: "master",

  docsDir: "src",

  pure: true,

  pageInfo: false,

  locales: {
    "/": {
      // navbar
      navbar: enNavbar,

      // sidebar
      sidebar: enSidebar,

      footer: "Default footer",

      displayFooter: false,

      metaLocales: {
        editLink: "Edit this page on GitHub",
      },
    },

    "/zh/": {
      // navbar
      navbar: zhNavbar,

      // sidebar
      sidebar: zhSidebar,

      footer: "默认页脚",

      displayFooter: false,

      metaLocales: {
        editLink: "在 GitHub 上编辑此页",
      },
    },
  },

  plugins: {
    searchPro: {
      indexContent: true,
    },
    components: {
      components: ["Badge", "VPCard"],
    },
    mdEnhance: {
      hint: true,
    },
    shiki: {
      langs: [
        // https://raw.githubusercontent.com/Zxilly/playground-cj/6c36b9ba49069fe03f9ba25b81bd43bb4ab0e4e1/src/lib/Cangjie.tmLanguage.json
        cjGrammar as any,
        'shell',
        'powershell',
        'toml',
      ],
      langAlias: {
        'cj': 'cangjie',
      },
    }
  },

  prevLink: false,
  nextLink: false,
});
