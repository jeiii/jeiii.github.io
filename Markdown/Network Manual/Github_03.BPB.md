# Github - BPB —— 部署步骤！

1. 仓库：https://github.com/bia-pain-bache/BPB-Worker-Panel （版本中下载文件：**worker.js**）。
2. 托管：https://cloudflare.com

   - 1️⃣ 计算和AI > Workers和Pages > 创建应用程序 > 从 Hello World! 开始 > ⌨️ `bpb-20260101` > 部署（得到一个 “应用程序” 用 “⚙️” 表示）。
     - ⚙️ > 设置 > 添加·变量和机密 > 文本/变量名称 ⌨️ `UUID`/值（软件和网页都能生成）> 部署。
     - ⚙️ > 设置 > 添加·变量和机密 > 文本/变量名称 ⌨️ `TR_PASS`/值（任意填写）>  部署。
     - ⚙️ > 设置 > 添加·变量和机密 > 文本/变量名称 ⌨️ `NAT64PREFIX`/值（[官方值](https://github.com/bia-pain-bache/BPB-Worker-Panel/blob/main/docs/NAT64Prefixes.md) 如：⌨️ `[2a02:898:146:64::],[2602:fc59:b0:64::],[2602:fc59:11:64::]`）>  部署。
     - 存储和数据库 > Workers KV > Create Instance > 重命名（如：⌨️ `bpbKV`） > 创建。
     - 进入创建的⚙️ > 绑定KV命名空间:变量名称  ⌨️ `kv` ；选择KV命名空间 > 绑定。
     - ⚙️ > 设置 > 添加·域和路由 > 自定义域 > 在已有域名前加前缀 > 添加域。
   - 2️⃣ ⚙️ > 编辑代码 > 删除原有代码 > 复制BPB的项目代码（版本中下载文件worker.js）> 部署。
3. 获取：用生成的有前缀的域名 + 斜杠`/` + ⌨️ `panel` = 订阅后台。

4. BPB面板设置要点：（不用设置也可用，设置了会更好）
   - VLESS - Trojan：
     1. Remote DNS（远程DNS）。
     2. Chain Proxy（链式代理： `socks://user:pass@address:port`、`http://user.pass@address:port`）
     3. Clean IPs / Domains（优选IP工具）：https://github.com/XIU2/CloudflareSpeedTest ✔️

　


> 【注意】：使用不明代码，请用小号，防止 cloudflare 重要账号被封！
>
> - 在 cloudflare 中创建的应用程序是可以重命名的，其中它的属性：自定义域名、UUID可任意修改。
> - 在维护中做到：不频繁创建和删除应用程序；用修改、重命名、替换代码等方式修复失效的应用程序。
> - 推荐每月修改一次UUID或自定义域名，以防止被人当资源使用。
> - ⚙️在部署中让修改生效！

---

[--== 返回 ==--](Markdown/Network%20Manual/index.html)

