import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'


import theme from "./theme.js";

export default defineUserConfig({
  lang: 'en-US',

  title: 'HoneyPot',
  description: 'My first VuePress Site',

  theme,

  bundler: viteBundler(),

})
