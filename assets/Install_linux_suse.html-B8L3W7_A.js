import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as t,o as n}from"./app-BHGf34mk.js";const r={};function i(o,e){return n(),a("div",null,e[0]||(e[0]=[t(`<h1 id="opensuse-install" tabindex="-1"><a class="header-anchor" href="#opensuse-install"><span>opensuse install</span></a></h1><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>personal way to install suse linux</p></div><hr><h2 id="edit-repositories-and-control" tabindex="-1"><a class="header-anchor" href="#edit-repositories-and-control"><span>edit Repositories and Control</span></a></h2><p>add Repository</p><p>zypper addrepo -f <a href="https://mirrors.aliyun.com/opensuse/distribution/leap/15.0/repo/oss/" target="_blank" rel="noopener noreferrer">https://mirrors.aliyun.com/opensuse/distribution/leap/15.0/repo/oss/</a> openSUSE-Oss<br> zypper addrepo -f <a href="https://mirrors.aliyun.com/opensuse/distribution/leap/15.0/repo/non-oss/" target="_blank" rel="noopener noreferrer">https://mirrors.aliyun.com/opensuse/distribution/leap/15.0/repo/non-oss/</a> openSUSE-Non-Oss<br> zypper addrepo -f <a href="https://mirrors.aliyun.com/opensuse/update/leap/15.0/oss/" target="_blank" rel="noopener noreferrer">https://mirrors.aliyun.com/opensuse/update/leap/15.0/oss/</a> openSUSE-Update-Oss<br> zypper addrepo -f <a href="https://mirrors.aliyun.com/opensuse/update/leap/15.0/non-oss/" target="_blank" rel="noopener noreferrer">https://mirrors.aliyun.com/opensuse/update/leap/15.0/non-oss/</a> openSUSE-Update-Non-Oss<br> zypper addrepo -f <a href="https://mirrors.aliyun.com/packman/openSUSE_Leap_15.0/" target="_blank" rel="noopener noreferrer">https://mirrors.aliyun.com/packman/openSUSE_Leap_15.0/</a> Packman</p><p>edit boot loader time =&gt; 0<br> language<br> network for name</p><p>tweak for ctrl</p><h3 id="install-disk" tabindex="-1"><a class="header-anchor" href="#install-disk"><span>install disk</span></a></h3><p>ls -al /dev/disk/by-uuid<br> vi /etc/fstab</p><h3 id="softwares" tabindex="-1"><a class="header-anchor" href="#softwares"><span>softwares</span></a></h3><p>aptitude<br> gnome-tweak-tool<br> fcitx-googlepinyin<br> virtualbox<br> openssh-server<br> freerdp2-x11<br> git<br> nodejs<br> npm<br> nginx<br> testdist<br> tree<br> cmatrix</p><h2 id="zsh-and-oh-my-zsh" tabindex="-1"><a class="header-anchor" href="#zsh-and-oh-my-zsh"><span>zsh and &#39;oh my zsh&#39;</span></a></h2><p>cat /etc/shells<br> install zsh<br> $ sh -c &quot;$(wget <a href="https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh" target="_blank" rel="noopener noreferrer">https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh</a> -O -)&quot;<br> restart</p><p>anual</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> clone</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> git://github.com/robbyrussell/oh-my-zsh.git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ~/.oh-my-zsh.git</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">cp</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ~/.zshrc</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ~/.zshrc.orig</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">cp</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ~/.oh-my-zsh/templates/zshrc.zsh-template</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ~/.zshrc</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">chsh</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -s</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /bin/zsh</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">shutdown</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -r</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> now</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="fonts" tabindex="-1"><a class="header-anchor" href="#fonts"><span>fonts</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>sudo cp ./Documents/DocX_help/font/SourceCodePro-Semibold.otf /usr/share/fonts</span></span>
<span class="line"><span>sudo fc-cache -fv</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="zshrc" tabindex="-1"><a class="header-anchor" href="#zshrc"><span>~/.zshrc</span></a></h2><p>export PATH=$HOME/bin:$HOME/Nightly:/usr/local/bin:$PATH</p><p>alias @create=&quot;bash create_activate&quot;<br> alias @act=&quot;source activate&quot;<br> alias @dct=&quot;deactivate&quot;<br> alias @venv=&quot;source /home/lambda/bin/AlphaBeta/.venv/Scripts/activate&quot;<br> alias @@@=&quot;cd /home/lambda/bin/AlphaBeta&quot;</p>`,21)]))}const h=s(r,[["render",i],["__file","Install_linux_suse.html.vue"]]),d=JSON.parse(`{"path":"/lambda/Install_linux_suse.html","title":"opensuse install","lang":"en-US","frontmatter":{"icon":"fab fa-steam","description":"opensuse install Tips personal way to install suse linux edit Repositories and Control add Repository zypper addrepo -f https://mirrors.aliyun.com/opensuse/distribution/leap/15....","head":[["meta",{"property":"og:url","content":"http://xinxi.jokerpy.top/lambda/Install_linux_suse.html"}],["meta",{"property":"og:site_name","content":"HoneyPot"}],["meta",{"property":"og:title","content":"opensuse install"}],["meta",{"property":"og:description","content":"opensuse install Tips personal way to install suse linux edit Repositories and Control add Repository zypper addrepo -f https://mirrors.aliyun.com/opensuse/distribution/leap/15...."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-13T11:21:21.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-13T11:21:21.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"opensuse install\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-13T11:21:21.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"gaoming714\\",\\"url\\":\\"https://github.com/gaoming714\\"}]}"]]},"headers":[{"level":2,"title":"edit Repositories and Control","slug":"edit-repositories-and-control","link":"#edit-repositories-and-control","children":[{"level":3,"title":"install disk","slug":"install-disk","link":"#install-disk","children":[]},{"level":3,"title":"softwares","slug":"softwares","link":"#softwares","children":[]}]},{"level":2,"title":"zsh and 'oh my zsh'","slug":"zsh-and-oh-my-zsh","link":"#zsh-and-oh-my-zsh","children":[]},{"level":2,"title":"fonts","slug":"fonts","link":"#fonts","children":[]},{"level":2,"title":"~/.zshrc","slug":"zshrc","link":"#zshrc","children":[]}],"git":{"createdTime":1519962068000,"updatedTime":1731496881000,"contributors":[{"name":"gaoming714","email":"gaoming714@outlook.com","commits":3}]},"readingTime":{"minutes":0.59,"words":178},"filePathRelative":"lambda/Install_linux_suse.md","localizedDate":"March 2, 2018","autoDesc":true,"excerpt":"\\n<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">Tips</p>\\n<p>personal way to install suse linux</p>\\n</div>\\n<hr>\\n<h2>edit Repositories and Control</h2>\\n<p>add Repository</p>\\n<p>zypper addrepo -f <a href=\\"https://mirrors.aliyun.com/opensuse/distribution/leap/15.0/repo/oss/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://mirrors.aliyun.com/opensuse/distribution/leap/15.0/repo/oss/</a> openSUSE-Oss<br>\\nzypper addrepo -f <a href=\\"https://mirrors.aliyun.com/opensuse/distribution/leap/15.0/repo/non-oss/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://mirrors.aliyun.com/opensuse/distribution/leap/15.0/repo/non-oss/</a> openSUSE-Non-Oss<br>\\nzypper addrepo -f <a href=\\"https://mirrors.aliyun.com/opensuse/update/leap/15.0/oss/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://mirrors.aliyun.com/opensuse/update/leap/15.0/oss/</a> openSUSE-Update-Oss<br>\\nzypper addrepo -f <a href=\\"https://mirrors.aliyun.com/opensuse/update/leap/15.0/non-oss/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://mirrors.aliyun.com/opensuse/update/leap/15.0/non-oss/</a> openSUSE-Update-Non-Oss<br>\\nzypper addrepo -f <a href=\\"https://mirrors.aliyun.com/packman/openSUSE_Leap_15.0/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://mirrors.aliyun.com/packman/openSUSE_Leap_15.0/</a> Packman</p>"}`);export{h as comp,d as data};