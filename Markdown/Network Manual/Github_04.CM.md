# Github - CM —— 部署步骤！

1. 仓库：https://github.com/cmliu/edgetunnel （选择：**_workers.js**）。
2. 托管：https://cloudflare.com

   - 1️⃣ 计算和AI > Workers和Pages > 创建应用程序 > 从 Hello World! 开始 > ⌨️ `cm-20260101` > 部署（得到一个 “应用程序” 用 “⚙️” 表示）。
     
     - ⚙️ > 设置 > 添加·变量和机密 > 文本/变量名称 ⌨️ `ADMIN` /值（是密码，要设置复杂一点）>  部署。
       - 存储和数据库 > Workers KV > Create Instance > 重命名（如：⌨️ `cmKV` ） > 创建。
       - 进入创建的⚙️ > 绑定KV命名空间:变量名称 ⌨️ `KV` ；选择KV命名空间 > 绑定。
       - ⚙️ > 设置 > 添加·域和路由 > 自定义域 > 在已有域名前加前缀 > 添加域。
   - 2️⃣ ⚙️ > 编辑代码 > 删除原有代码 > 复制 CM 的项目代码（选择：_workers.js）> 部署。
   
     > 可选项：JavaScript Obfuscator 代码混淆：[obfuscator.io](https://obfuscator.io) （混淆后速度会变慢，但不易被封）。
3. 获取：用生成的有前缀的域名 + 斜杠`/` + `ADMIN` = 进入订阅后台。


　


> 【注意】：使用不明代码，请用小号，防止 cloudflare 重要账号被封！
> - 在 cloudflare 中创建的应用程序是可以重命名的，其中它的属性：自定义域名、UUID可任意修改。
> - 在维护中做到：不频繁创建和删除应用程序；用修改、重命名、替换代码等方式修复失效的应用程序。
> - 推荐每月修改一次UUID或自定义域名，以防止被人当资源使用。
> - ⚙️在部署中让修改生效！

---

[--== 返回 ==--](Markdown/Network%20Manual/index.html)