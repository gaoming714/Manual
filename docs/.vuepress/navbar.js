import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "Lambda",
    icon: "fas fa-hat-wizard",
    link: "/lambda/",
  },
  {
    text: "Delta",
    icon: "fas fa-hourglass-half",
    prefix: "/delta/",
    children: [
      {
        text: "Vim",
        icon: "fas fa-hourglass-half",
        link: ".vimrc",
      },
      {
        text: "None",
        icon: "fas fa-hourglass-half",
        link: "none",
      },
    ],
  },
  {
    text: "Support",
    icon: "book",
    link: "/support",
  },
]);
