#  ⚙️ Windows：cmd、Win+R、快捷键

### 一、内置有参数的命令：

> - 须知："/" = "-"		"/"前空格可有可无、"-"前空格必须要有		"?"显示命令的所有参数。

| 命令             | 参数      | 说明                                                         |
| ---------------- | --------- | ------------------------------------------------------------ |
| ping（ip、网址） | 无        | 默认 ping 4 组。                                             |
|                  | /n + 次数 | ping /n 5 qq.com（会发送5次请求后停止）。                    |
|                  | /l + 1000 | ping /l 1000 qq.com（会发送1000字节的大包；路由器关掉接收ping来防止数据包攻击）。 |
|                  | /w + 2000 | ping /w 2000 qq.com（等待2秒后若无回应则超时）。             |
|                  | /t        | ping /t qq.com（长时间监测网络稳定性；Ctrl + C 停止）。      |
|                  | /a        | ping内网IP会显主机名(如果有的话)；ping域名会显公网IP。       |
| ipconfig         | 无        | 本机网络配置主要信息。                                       |
|                  | /all      | 本机网络配置全部信息。                                       |
|                  | /release  | 释放当前IP，还给路由器。                                     |
|                  | /renew    | 在释放IP后，向路由器申请IP。                                 |
|                  | /flushdns | 清空本地的DNS缓存（当遇某网站打不开，但其他电脑能正常访问时，此命令特别有用）。 |
| arp              | /a        | 查看ARP缓存表：显示所有已缓存的IP地址与MAC地址的对应关系。   |
|                  | /a + IP   | arp/a 192.168.11.21（显示已缓存的此IP与MAC地址对应关系）。   |
|                  | /d        | arp/d 192.168.29.29（删除指定IP的ARP缓存）。                 |
|                  | /d + *    | 删除所有ARP缓存。                                            |
|                  | /s        | arp/s 192.168.11.22 11-22-33-44-55-66（将IP与MAC绑定，防止ARP欺骗）。 |
| netstat          | 无        | 扫描一切对外连接的情况（端口、接口、协议、连接等）           |
|                  | /ano      | a(连接和端口)；n(用数字IP,不进行域名解析,速度快)；o(显示进程ID)。 |
| nslookup         | 无        | nslookup qq.com（域名查询工具：用来跟DNS服务器打交道，用网址显公网IP）。 |
| systeminfo       | 无        | systeminfo 像是电脑的一份详细体检报告。                      |

### 二、Win + R 直调命令：

|                      命令及快捷键 | 功能及说明                   |                命令及快捷键 | 功能及说明         |
| --------------------------------: | ---------------------------- | --------------------------: | ------------------ |
|                           control | 控制面板                     |                  gpedit.msc | 本地组策略编辑器   |
|                          msconfig | 系统配置                     |                services.msc | 本地服务设置       |
| **devmgmt.msc** 或 **hdwwiz.cpl** | 设备管理器                   | **regedit** 或 **regedt32** | 注册表             |
|                           taskmgr | 显示内存使用情况             |                    dcomcnfg | 组件服务           |
|                          ncpa.cpl | 网络连接                     |                     taskmgr | 任务栏管理器       |
|                       lusrmgr.msc | 本地用户和组                 |                  fsmgmt.msc | 共享文件夹管理器   |
|                       certmgr.msc | 证书管理                     |                compmgmt.msc | 计算机管理         |
|                          cliconfg | SQL Server客户端网络实用工具 |                    odbcad32 | ODBC数据源管理程序 |
|                        appwiz.cpl | 添加、删除程序               |                    iexpress | 木马捆绑工具       |
|                          desk.cpl | 系统屏幕                     |                 inetcpl.cpl | Internet选项       |
|                          intl.cpl | 区域和语言选项               |                     joy.cpl | 游戏控制器         |
|                          eventvwr | 事件查看器                   |                         mmc | 控制台             |
|                            logoff | 注销                         |                       mstsc | 远程桌面           |
|                control access.cpl | 辅助功能选项                 |                      dxdiag | 检查DirectX信息    |
|                       perfmon.msc | 性能监视器                   |                    rsop.msc | 组策略的结果集     |
|                          explorer | 资源管理器                   |                     mobsync | 同步中心           |
|                      diskmgmt.msc | 硬盘管理                     |                    cleanmgr | 磁盘清理           |
|                               osk | 屏幕键盘                     |                   mmsys.cpl | 声音和音频设备     |
|                          eudcedit | 专用字符编辑程序             |                powercfg.cpl | 电源选项           |
|                           charmap | 字符映射表                   |                    narrator | 讲述人             |
|                          main.cpl | 鼠标                         |                     magnify | 放大镜             |
|                           dvdplay | 播放器                       |                     mspaint | 画图               |
|                              calc | 计算器                       |                     notepad | 记事本             |
|                      firewall.cpl | 防火墙                       |                             |                    |

### 三、快捷键：

|     快捷键 | 功能         | 快捷键 | 功能   |
| ---------: | ------------ | -----: | ------ |
|      Win+V | 剪贴板查看器 |  Win+R | 运行   |
|      Win+L | 锁定电脑     |  Win+I | 设置   |
|      Win+P | 切屏         | Win+。 | 表情包 |
| Win+方向键 | 分屏         |  Win+E | 此电脑 |

---

[--== 返回 ==--](template_1.html?md=/Markdown/Public%20document%20index.md)
