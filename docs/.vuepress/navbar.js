import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "Lambda",
    icon: "book",
    link: "/lambda/",
  },

  {
    text: "Delta",
    icon: "lightbulb",
    prefix: "/delta/",
    children: [
      {
        text: "Vim",
        icon: "lightbulb",
        link: ".vimrc",
      },
      {
        text: "None",
        icon: "lightbulb",
        link: "none",
      },
    ],
  },
  {
    text: "V2 Docs",
    icon: "book",
    link: "https://theme-hope.vuejs.press/",
  },
]);
