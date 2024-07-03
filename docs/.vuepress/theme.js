import { hopeTheme } from "vuepress-theme-hope";

import navbar from "./navbar.js";
// import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "http://xinxi.jokerpy.top",

  author: {
    name: "gaoming714",
    url: "https://github.com/gaoming714",
  },

  iconAssets: "fontawesome-with-brands",

  logo: "https://theme-hope-assets.vuejs.press/logo.svg",

  repo: "gaoming714/Manual",

  docsDir: "docs",

  navbar,

  // sidebar,

  // footer: "Build by Vuepress with vuepress-theme-hope",

  displayFooter: true,

  metaLocales: {
    editLink: "Edit this page on GitHub",
  },

  plugins: {
    components: {
      components: ["Badge", "VPCard"],
    },
    mdEnhance: {
      gfm: true,
    },
  },
});
