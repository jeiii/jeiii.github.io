# Github - 甬哥的项目 —— 部署步骤！

1. 仓库：https://github.com/yonggekkk/Cloudflare-vless-trojan （选择：Vless_workers_pages > nat64套壳版混淆.js）。
2. 托管：https://cloudflare.com （Apple ID登陆）。

   - 计算和AI > Workers和Pages > 创建应用程序 > 从 Hello World! 开始 > 重命名 > 部署。
   - 编辑代码 > 删除原有代码 > 复制甬哥的项目代码（Vless_workers_pages > nat64套壳版混淆.js）> 部署。
   - 设置 > 添加·变量和机密 > 文本/变量名称`uuid`/值（软件和网页都能生成）>  部署。
   - 设置 > 添加·域和路由 > 自定义域 > 在已有域名前加前缀 > 添加域。
3. 获取：用生成的有前缀的域名 + 斜杠`/` + uuid = 订阅地址（推荐使用：聚合通用订阅链接）。

   - `uuid` 和 `自定义域名` 可修改：推荐每月修改一次，以防止被人当资源使用。

　


> 【注意】：防止 cloudflare 封号，让创建的每一个应用程序都是 “老资格” ；使用不明代码，请用小号！
> - 在 cloudflare 中创建的应用程序是可以重命名的。
> - 在操作中做到：不要频繁创建和删除应用程序；用修改、重命名、替换代码等方式修复失效的应用程序。

---

[--== 返回 ==--](Markdown/Network%20Manual/index.html)