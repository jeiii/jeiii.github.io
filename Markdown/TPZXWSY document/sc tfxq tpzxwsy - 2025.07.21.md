# 市平台公开的信息档案

> 微信：公立医疗机构网络安全群（2025.07.21_16:00 消息）：
>
> 卫计处肖凯文：市平台已完成中心端正式数据库初始化和配置，现将数据库相关资料发给各单位（含：机器的政务外网IP地址、端口、接入机构、用户名、密码），请转发给技术人员，后续请将达到切换标准的机构数据传输至该数据库中。

---

### 库表

| 区市县   | 内网IP        | 政务网IP地址端口  | 账号         | 密码         |
| -------- | ------------- | ----------------- | ------------ | ------------ |
| 天府新区 | 172.54.161.33 | 10.1.191.25:52369 | YLT_TFXQ_QPT | Ef8=LvB>aKR4 |

---

### 实时接口

- 接入机构：天府新区

| 接口名称              | 接口路径                                                 | appCode | sign                             | 备注           |
| --------------------- | -------------------------------------------------------- | ------- | -------------------------------- | -------------- |
| 实时数据上传_天府新区 | https://10.1.191.25:9099/apigateway/dataway/receive/tfxq | SFDqfo  | 7E732C20A87B7C9666D94AF38EEE70B8 | 基层31张接口表 |
| 实时数据上传          | https://10.1.191.25:9099/apigateway/dataway/receive      | SFDqfo  | 19F7D50DC2E2DDC0FDC9F4E42E0957A4 | 完整性指标     |

---

### 健康档案调阅

| 地址                                                  | 授权码                                                       |
| ----------------------------------------------------- | ------------------------------------------------------------ |
| [https://10.1.191.25:9099](https://10.1.191.25:9099/) | 客户端编码：yy_9位组织机构代码   授权码：9位组织机构代码@2024   示例：yy_450719311/450719311@2024 |

---

[--== 返回 ==--](template_1.html?md=Markdown/TPZXWSY%20document/sc%20tfxq%20tpzxwsy%20-%20index.md) 
