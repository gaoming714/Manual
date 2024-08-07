---
containerClass: home
home: true
heroFullScreen: true
icon: home
title: Home
heroImage: /winnie.png
bgImage: https://theme-hope-assets.vuejs.press/bg/6-light.svg
bgImageDark: https://theme-hope-assets.vuejs.press/bg/6-dark.svg
bgImageStyle:
  background-attachment: fixed
heroText: HoneyPot
tagline: A personal record document full of awesome🍯
actions:
  - text: Get Started
    link: ./lambda/
    icon: signs-post
    type: primary

  - text: Guide
    icon: lightbulb
    link: ./delta/

  - text: Demos
    icon: star
    link: ./lambda/vim

highlights:
  - header: Easy to install
    image: /assets/image/box.svg
    bgImage: https://theme-hope-assets.vuejs.press/bg/3-light.svg
    bgImageDark: https://theme-hope-assets.vuejs.press/bg/3-dark.svg
    highlights:
      - title: Run <code>pnpm create vuepress-theme-hope hope-project</code> to create a new project with this theme.
      - title: Run <code>pnpm create vuepress-theme-hope add .</code> in your project root to create a new project with this theme.

  - header: Add things you want in markdown
    description: We extended the standard commonMark specification and added tons of new features for you.
    image: /assets/image/markdown.svg
    bgImage: https://theme-hope-assets.vuejs.press/bg/2-light.svg
    bgImageDark: https://theme-hope-assets.vuejs.press/bg/2-dark.svg
    bgImageStyle:
      background-repeat: repeat
      background-size: initial
    features:
      - title: Links Check
        icon: clipboard-check
        details: Check markdown links
        link: ./guide/markdown/others.html#link-check

      - title: Hint box
        icon: box-archive
        details: Decorate Markdown content with styles
        link: ./guide/markdown/stylize/hint.html

      - title: GFM alerts
        icon: bell
        details: GFM alert box
        link: ./guide/markdown/stylize/alert.html

      - title: Tabs
        icon: table-columns
        details: Group similar content with tabs and switch them together
        link: ./guide/markdown/content/tabs.html

      - title: Code Tabs
        icon: code
        details: Group similar codes with tabs
        link: ./guide/markdown/code/code-tabs.html

      - title: Custom Align
        icon: align-center
        details: Let you decide to align paragraphs in the way you like
        link: ./guide/markdown/stylize/align.html

      - title: Attrs
        icon: code
        details: Allow you to add attributes for Markdown content
        link: ./guide/markdown/stylize/attrs.html

      - title: Superscript and subscript
        icon: superscript
        details: Inserting superscript and subscript
        link: ./guide/markdown/grammar/sup-sub.html

      - title: Footnote
        icon: quote-left
        details: Your Markdown now support footnotes
        link: ./guide/markdown/content/footnote.html

      - title: Mark
        icon: highlighter
        details: Mark and highlight contents
        link: ./guide/markdown/stylize/mark.html

      - title: Spoiler
        icon: eraser
        details: Mark spoiler contents
        link: ./guide/markdown/stylize/spoiler.html

      - title: Tasklist
        icon: square-check
        details: Use tasklist in Markdown
        link: ./guide/markdown/grammar/tasklist.html

      - title: Image syntax
        icon: image
        details: improve syntax to specify size and color scheme
        link: ./guide/markdown/grammar/image.html

      - title: Component Support
        icon: puzzle-piece
        details: Easily insert components in Markdown
        link: ./guide/component/grammar.html

      - title: Components
        icon: puzzle-piece
        details: Common components out fo box
        link: ./guide/component/built-in.html

      - title: Chart Support
        icon: chart-simple
        details: Display charts in Markdown
        link: ./guide/markdown/chart/chartjs.html

      - title: Flowchart Support
        icon: route
        details: Create your flowchart in Markdown
        link: ./guide/markdown/chart/flowchart.html

      - title: Mermaid Support
        icon: chart-pie
        details: Add mermaid diagram in Markdown
        link: ./guide/markdown/chart/mermaid.html

      - title: Plantuml Support
        icon: diagram-project
        details: Add plantuml in Markdown
        link: ./guide/markdown/chart/plantuml.html

      - title: Tex Support
        icon: square-root-variable
        details: Markdown now have Tex Support so you can write your formula
        link: ./guide/markdown/grammar/tex.html

      - title: Include snippet Support
        icon: fab fa-markdown
        details: split your docs with different parts and import them in Markdown
        link: ./guide/markdown/content/include.html

      - title: Playground Support
        icon: code
        details: You can add playground in Markdown files
        link: ./guide/markdown/code/playground.html

      - title: Kotlin playground Support
        icon: fab fa-kickstarter
        details: Reactive kotlin playground
        link: ./guide/markdown/code/kotlin-playground.html

      - title: Vue playground Support
        icon: fab fa-vuejs
        details: Show living vue component in playground
        link: ./guide/markdown/code/vue-playground.html

      - title: Sandpack playground Support
        icon: code
        details: A live coding environment driven by Sandpack.
        link: ./guide/markdown/code/sandpack.html

      - title: Code Demo Support
        icon: laptop-code
        details: You can insert code demo easily
        link: ./guide/markdown/code/demo.html

      - title: Presentation Support
        icon: person-chalkboard
        details: Insert presentation in Markdown files via Reveal.js
        link: ./guide/markdown/content/revealjs.html


---