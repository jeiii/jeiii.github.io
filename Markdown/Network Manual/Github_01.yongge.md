# Github - 甬哥的项目 —— 部署步骤！

1. 仓库：https://github.com/yonggekkk/Cloudflare-vless-trojan （选择：Vless_workers_pages > nat64套壳版混淆.js）。
2. 托管：https://cloudflare.com

   - 1️⃣ 计算和AI > Workers和Pages > 创建应用程序 > 从 Hello World! 开始 > ⌨️ `yongge-20260101` > 部署（得到一个 “应用程序” 用 “⚙️” 表示）。
     - ⚙️ > 设置 > 添加·变量和机密 > 文本/变量名称 ⌨️ `uuid` /值（软件和网页都能生成）>  部署。
     - ⚙️ > 设置 > 添加·域和路由 > 自定义域 > 在已有域名前加前缀 > 添加域。
   - 2️⃣ ⚙️ > 编辑代码 > 删除原有代码 > 复制甬哥的项目代码（Vless_workers_pages > nat64套壳版混淆.js）> 部署。
3. 获取：用生成的有前缀的域名 + 斜杠`/` + uuid = 订阅地址。


　

> 【注意】：使用不明代码，请用小号，防止 cloudflare 重要账号被封！
>
> - 在 cloudflare 中创建的应用程序是可以重命名的，其中它的属性：自定义域名、UUID可任意修改。
> - 在维护中做到：不频繁创建和删除应用程序；用修改、重命名、替换代码等方式修复失效的应用程序。
> - 推荐每月修改一次UUID或自定义域名，以防止被人当资源使用。
> - ⚙️在部署中让修改生效！

---

[--== 返回 ==--](Markdown/Network%20Manual/index.html)