import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as n,o as l}from"./app-BHGf34mk.js";const e={};function t(h,s){return l(),a("div",null,s[0]||(s[0]=[n(`<h1 id="msys2-config" tabindex="-1"><a class="header-anchor" href="#msys2-config"><span>msys2 config</span></a></h1><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>My solution</p></div><h2 id="lite-context" tabindex="-1"><a class="header-anchor" href="#lite-context"><span>lite context</span></a></h2><ol start="0"><li>mkdir /root</li><li>run msys2 , wait for the terminal prompt, close msys2</li><li>run msys2, install packages <code>pacman -S vim zsh git p7zip rsync winpty</code></li><li>alias vim to vi <code>ln -s /bin/vim.exe /bin/vi</code></li><li>edit nsswitch.conf, change home_path to /root</li><li>edit nsswitch.conf, change shell to zsh (db_shell: /usr/bin/zsh)</li><li>install on-my-zsh, <code>sh install.sh</code></li><li>install vimrc</li><li>configure zshrc</li><li>activate poetry</li><li>cp font to folder</li></ol><h2 id="pacman-source" tabindex="-1"><a class="header-anchor" href="#pacman-source"><span>pacman_source</span></a></h2><p>configure source (deprecated)</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">/etc/pacman.d/mirrorlist.mingw32</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Server</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> http://mirrors.ustc.edu.cn/msys2/mingw/i686</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">/etc/pacman.d/mirrorlist.mingw64</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Server</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> http://mirrors.ustc.edu.cn/msys2/mingw/x86_64</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">/etc/pacman.d/mirrorlist.msys</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Server</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> http://mirrors.ustc.edu.cn/msys2/msys/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$arch</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>config file link:</p><p><a href="/delta/msys64_build/root/src/mirrorlist.mingw32">mirrorlist.mingw32</a></p><p><a href="/delta/msys64_build/root/src/mirrorlist.mingw64">mirrorlist.mingw64</a></p><p><a href="/delta/msys64_build/root/src/mirrorlist.msys">mirrorlist.msys</a></p><h2 id="configure-path" tabindex="-1"><a class="header-anchor" href="#configure-path"><span>configure PATH</span></a></h2><p>mkdir /root</p><p>configure nsswitch.conf</p><p>change db_home to /root</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># Begin /etc/nsswitch.conf</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">passwd:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> files</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> db</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">group:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> files</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> db</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">db_enum:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> cache</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> builtin</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">db_home:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /root</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">db_shell:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /usr/bin/bash</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">db_gecos:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> cygwin</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> desc</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># End /etc/nsswitch.conf</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="install-packages" tabindex="-1"><a class="header-anchor" href="#install-packages"><span>Install packages</span></a></h2><p>pacman -S vim (ln -s /bin/vim.exe /bin/vi)<br> pacman -S zsh<br> pacman -S git<br> pacman -S p7zip<br> pacman -S rsync<br> pacman -S winpty</p><h2 id="install-oh-my-zsh" tabindex="-1"><a class="header-anchor" href="#install-oh-my-zsh"><span>install oh-my-zsh</span></a></h2><p>At first, make sure db_home is /root</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">with</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> curl</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    sh</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -c</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;$(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">curl</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -fsSL</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)&quot;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">or</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> wget</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    sh</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -c</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;$(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">wget</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">-O</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> -)&quot;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">or</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> manual</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> clone</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> https://github.com/ohmyzsh/ohmyzsh.git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ~/tmp</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    sh</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ~/tmp/tools/install.sh</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">or</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mine</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    copy</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> github.com/ohmyzsh/ohmyzsh.git:tools/install.sh</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> to</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /root/install.sh</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    sh</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /root/install.sh</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>update configure PATH nsswitch.conf</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>db_shell: /usr/bin/zsh</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="install-vim" tabindex="-1"><a class="header-anchor" href="#install-vim"><span>Install VIM</span></a></h2><p>copy .vimrc to ~/.vimrc<br> copy .vim/autoload to ~/.vim/ (Enable autoload)</p><p><a href="/delta/vim/.vim/autoload">.vim/autoload</a><br><a href="/delta/vim/.vimrc">.vimrc</a></p><h2 id="若需要打包" tabindex="-1"><a class="header-anchor" href="#若需要打包"><span>若需要打包</span></a></h2><p>升级系统<br> pacman -Syu</p><p>删除所有缓存<br> pacman -Scc</p><h2 id="plus-zshrc" tabindex="-1"><a class="header-anchor" href="#plus-zshrc"><span>Plus zshrc</span></a></h2><p>copy .zshrc.win to ~/.zshrc<br><a href="/delta/vim/.vimrc">.zshrc.win</a></p><h2 id="readme-md-for-msys2" tabindex="-1"><a class="header-anchor" href="#readme-md-for-msys2"><span><a href="http://README.md" target="_blank" rel="noopener noreferrer">README.md</a> for Msys2</span></a></h2><p>This is a custom version of msys2</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>HOME PATH   is /root</span></span>
<span class="line"><span>source      is mirrors.ustc.edu.cn</span></span>
<span class="line"><span>manager     is pacman</span></span>
<span class="line"><span>vim         is built with vim-plug</span></span>
<span class="line"><span>Shell       is ZSH with on-my-zsh</span></span>
<span class="line"><span>Font        is SourceCodePro-Semibold</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Install SourceCodePro-Semibold.otf at first.</p><p>Python &amp; nodejs can be append to .zshrc:</p>`,36)]))}const c=i(e,[["render",t],["__file","Install_msys2.html.vue"]]),d=JSON.parse('{"path":"/lambda/Install_msys2.html","title":"msys2 config","lang":"en-US","frontmatter":{"icon":"fab fa-steam","description":"msys2 config Tips My solution lite context mkdir /root run msys2 , wait for the terminal prompt, close msys2 run msys2, install packages pacman -S vim zsh git p7zip rsync winpty...","head":[["meta",{"property":"og:url","content":"http://xinxi.jokerpy.top/lambda/Install_msys2.html"}],["meta",{"property":"og:site_name","content":"HoneyPot"}],["meta",{"property":"og:title","content":"msys2 config"}],["meta",{"property":"og:description","content":"msys2 config Tips My solution lite context mkdir /root run msys2 , wait for the terminal prompt, close msys2 run msys2, install packages pacman -S vim zsh git p7zip rsync winpty..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-13T11:21:21.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-13T11:21:21.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"msys2 config\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-13T11:21:21.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"gaoming714\\",\\"url\\":\\"https://github.com/gaoming714\\"}]}"]]},"headers":[{"level":2,"title":"lite context","slug":"lite-context","link":"#lite-context","children":[]},{"level":2,"title":"pacman_source","slug":"pacman-source","link":"#pacman-source","children":[]},{"level":2,"title":"configure PATH","slug":"configure-path","link":"#configure-path","children":[]},{"level":2,"title":"Install packages","slug":"install-packages","link":"#install-packages","children":[]},{"level":2,"title":"install oh-my-zsh","slug":"install-oh-my-zsh","link":"#install-oh-my-zsh","children":[]},{"level":2,"title":"Install VIM","slug":"install-vim","link":"#install-vim","children":[]},{"level":2,"title":"若需要打包","slug":"若需要打包","link":"#若需要打包","children":[]},{"level":2,"title":"Plus zshrc","slug":"plus-zshrc","link":"#plus-zshrc","children":[]},{"level":2,"title":"README.md  for  Msys2","slug":"readme-md-for-msys2","link":"#readme-md-for-msys2","children":[]}],"git":{"createdTime":1596645650000,"updatedTime":1731496881000,"contributors":[{"name":"gaoming714","email":"gaoming714@outlook.com","commits":3}]},"readingTime":{"minutes":1.04,"words":311},"filePathRelative":"lambda/Install_msys2.md","localizedDate":"August 5, 2020","autoDesc":true,"excerpt":"\\n<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">Tips</p>\\n<p>My solution</p>\\n</div>\\n<h2>lite context</h2>\\n<ol start=\\"0\\">\\n<li>mkdir /root</li>\\n<li>run msys2 , wait for the terminal prompt, close msys2</li>\\n<li>run msys2, install packages  <code>pacman -S vim zsh git p7zip rsync winpty</code></li>\\n<li>alias vim to vi <code>ln -s /bin/vim.exe /bin/vi</code></li>\\n<li>edit nsswitch.conf, change home_path to /root</li>\\n<li>edit nsswitch.conf, change shell to zsh (db_shell: /usr/bin/zsh)</li>\\n<li>install on-my-zsh, <code>sh install.sh</code></li>\\n<li>install vimrc</li>\\n<li>configure zshrc</li>\\n<li>activate poetry</li>\\n<li>cp font to folder</li>\\n</ol>"}');export{c as comp,d as data};