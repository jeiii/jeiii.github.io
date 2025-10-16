# Windows 11 Recall 召回功能有重大隐患，如何检测并禁用。

> 最新版本的 Windows 11 系统中，微软默认启用了备受争议的 Recall 功能。这一功能通过定期截取用户屏幕并进行分析，旨在帮助用户快速检索过去操作的信息。然而，其潜在的安全和隐私风险引发了广泛关注。

### **Recall 功能为何引发担忧？**

- **隐私泄露风险：** Recall功能可能无意中截取包含敏感信息的屏幕截图，例如密码、银行账户信息等，这些信息一旦泄露，将对用户造成严重损失。

- **数据滥用隐患：** 虽然微软声称会对数据进行加密和匿名化处理，但仍无法完全排除数据被滥用的可能性。

- **系统性能影响：** 不断的屏幕截图和数据分析可能占用大量系统资源，影响电脑运行速度。

  　

> **检测是否开启：**

```
Dism /Online /Get-Featureinfo /Featurename:Recall
```

> **关闭 Recall 功能：**

```
Dism /Online /Disable-Feature /Featurename:Recall
```

—— 只需在CMD终端下，以管理员身份运行以上命令即可！

据外媒消息：在听取用户反馈后，目前 Windows 11 已默认关闭 Recall 功能，可用上方命令验证。

---

```
开启 Recall 功能：Dism /Online /Enable-Feature /Featurename:Recall
```

---

[--== 返回 ==--](template_1.html?md=/Markdown/Public%20document%20index.md)