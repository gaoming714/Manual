import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,a as o,o as a}from"./app-BHGf34mk.js";const n={};function s(r,e){return a(),i("div",null,e[0]||(e[0]=[o(`<h1 id="git-webhook-introduction" tabindex="-1"><a class="header-anchor" href="#git-webhook-introduction"><span>Git Webhook Introduction</span></a></h1><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>webhook script and sha-256 tip</p></div><blockquote><p>A minimal Flask application to handle github webhook.<br><a href="https://github.com/gaoming714/HookScript" target="_blank" rel="noopener noreferrer">HookScript</a></p></blockquote><h2 id="tips" tabindex="-1"><a class="header-anchor" href="#tips"><span>TIPS</span></a></h2><h3 id="如何用postman模拟github-webhook" tabindex="-1"><a class="header-anchor" href="#如何用postman模拟github-webhook"><span>如何用postman模拟github webhook</span></a></h3><p>获取webhook 的 header和payload(json)<br> header 需要</p><ul><li>Request method: POST</li><li>Content-Type: application/json</li><li>X-Hub-Signature: sha1=8cabbcfb32f29bf9049b3ddc8c173f09f1a0d7a4</li><li>X-Hub-Signature-256: sha256=5a8148126b75c6484d1964df04fd34161d0ca3785a2443c396efd96b38c81e21</li></ul><p>payload 需要使用json <em>一定要去掉所有的空格和换行</em></p><p>然后就可以用postman模拟发送post请求了</p><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>也推荐使用 httpie</p></div><h3 id="测试代码-sha-256-算法-测试-webhook-有效负载验证" tabindex="-1"><a class="header-anchor" href="#测试代码-sha-256-算法-测试-webhook-有效负载验证"><span>测试代码 sha-256 算法(测试 Webhook 有效负载验证)</span></a></h3><p>可以使用以下的 secret 和 payload 值来验证实现是否正确：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>secret: &quot;It&#39;s a Secret to Everybody&quot;</span></span>
<span class="line"><span>payload: &quot;Hello, World!&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果实现正确，则生成的签名应与以下签名值匹配：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>signature: 757107ea0eb2509fc211221cce984b8a37570b6d7586c22c46f4379c8b043e17</span></span>
<span class="line"><span>X-Hub-Signature-256: sha256=757107ea0eb2509fc211221cce984b8a37570b6d7586c22c46f4379c8b043e17</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div>`,15)]))}const l=t(n,[["render",s],["__file","Git_webhook.html.vue"]]),c=JSON.parse('{"path":"/lambda/Git_webhook.html","title":"Git Webhook Introduction","lang":"en-US","frontmatter":{"icon":"fab fa-github-alt","description":"Git Webhook Introduction Tips webhook script and sha-256 tip A minimal Flask application to handle github webhook. HookScript TIPS 如何用postman模拟github webhook 获取webhook 的 header和...","head":[["meta",{"property":"og:url","content":"http://xinxi.jokerpy.top/lambda/Git_webhook.html"}],["meta",{"property":"og:site_name","content":"HoneyPot"}],["meta",{"property":"og:title","content":"Git Webhook Introduction"}],["meta",{"property":"og:description","content":"Git Webhook Introduction Tips webhook script and sha-256 tip A minimal Flask application to handle github webhook. HookScript TIPS 如何用postman模拟github webhook 获取webhook 的 header和..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-13T11:21:21.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-13T11:21:21.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Git Webhook Introduction\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-13T11:21:21.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"gaoming714\\",\\"url\\":\\"https://github.com/gaoming714\\"}]}"]]},"headers":[{"level":2,"title":"TIPS","slug":"tips","link":"#tips","children":[{"level":3,"title":"如何用postman模拟github webhook","slug":"如何用postman模拟github-webhook","link":"#如何用postman模拟github-webhook","children":[]},{"level":3,"title":"测试代码 sha-256 算法(测试 Webhook 有效负载验证)","slug":"测试代码-sha-256-算法-测试-webhook-有效负载验证","link":"#测试代码-sha-256-算法-测试-webhook-有效负载验证","children":[]}]}],"git":{"createdTime":1719884272000,"updatedTime":1731496881000,"contributors":[{"name":"gaoming714","email":"gaoming714@outlook.com","commits":3}]},"readingTime":{"minutes":0.6,"words":180},"filePathRelative":"lambda/Git_webhook.md","localizedDate":"July 2, 2024","autoDesc":true,"excerpt":"\\n<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">Tips</p>\\n<p>webhook script and sha-256 tip</p>\\n</div>\\n<blockquote>\\n<p>A minimal Flask application to handle github webhook.<br>\\n<a href=\\"https://github.com/gaoming714/HookScript\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">HookScript</a></p>\\n</blockquote>"}');export{l as comp,c as data};