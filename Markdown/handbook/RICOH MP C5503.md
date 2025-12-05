# 🖨️ 理光复印机代码（RICOH MP C5503）



​	❤️ **维护模式**：**`复位(Reset)`**>**`806182`**>**`长按C键`**。

​	🔘 **温馨提示**：在执行时，**`OK`** 和 **`#`** 都代表确认。



### 一、执行了 `数据全清` 后，需要调整的设置。

> 数据全清：`System Sp` > `5801#` > `All Clear` > `EXECUTE` > `重启`

1. #### 设置中文

`用户工具/计数器(User Tools/Counter)` > `System Settings` > `Administrator Tools` > `第五页最后一项` > `Select Switchable Languages` > `全部设为简体中文` > `返回用户工具/计数器` > `选择简体字`。

2. #### 设置扫描

​	a. `System Sp` > `5985#` > `On Board NIC` > `改为1` > `#`
​	b. `System Sp` > `5985#` > `On Board USB` > `改为1` > `#`

3. #### 设置单位

`System Sp` > `5024#` > `mm/inch Display Selection` > `改为0` > `#`（0是毫米）。

4. #### 设置地区

`System Sp` > `5131#` > `Paper Size Type Selection` > `选择0:JP` > `#`（JP是日本）。

5. #### 设置纸盒

`System Sp` > `5181#` > `Size Adjust` > `下面的所有子选项均选择：0#`

6. #### 设置A3

**`长按#键`** > **`System Sp`** > **`5104#`** > **`Counter Size Setting`**

​	a. `A3/DLT Double Count` > `1:YES` > `#`

​	b. `Bypass Paper Size Undetection` > `1:A3(DLT)` > `#`

7. #### 激光对位

`System Sp` > `2111#` > `Forced Line Position Adj.` > `从4至1的顺序执行` > `EXECUTE`（Completed:成功；Failed:失败）。

8. #### 计数器

`System Sp` > `5045#` > `Accounting counter` > `2#`（0是显影技术；1是打印技术；2是覆盖率，7是彩色覆盖率）。

9. #### 附加参数

- **复印比例**：`用户工具` > `复印机特性` > `复印比例` > `复印比例`
- **网络设置**：`用户工具` > `系统设置` > `接口设置` > `设置IP`
- **编程键的使用**：`设置好复印最常用的参数` > `编程` > `作为默认值编入` > `编入`（扫描编入是相同的操作）。
- **优先级显示**：`用户工具/计数器(User Tools/Counter)` > `扫描仪特性` > `地址列表显示优先级` > `文件夹`
- **设置扫描目录**：
  - 在浏览器中输入（如）：192.168.1.50
  - 找到登录按钮 > 用户名 admin、密码空 > 设备管理 > 地址簿 > 简单输入 > 添加用户 > 目的地 > 文件夹目的地 > 名称 > 输入账号 > 完成。
- **备份与还原**：（间接解决报代码 SC544-1、544-2 换定影复位器保险丝的问题）
  - 前期工作：将SD卡插入主板最下方的卡槽
  - 数据上传至卡：`5824#` > `NV-RAM Data Upload` > `EXECUTE`
  - 数据全清：`System Sp` > `5801#` > `All Clear` > `EXECUTE` > `重启`
  - 从卡下载数据：`5825#` > `NV-RAM Data Download` > `EXECUTE` > `重启`。



### 二、常见问题

1. #### 彩色校检打印

- 第一种方式：

`Printer SP` > `1103#` > `Color Pattem` > `EXECUTE`

- 第二处方式：（代码繁琐NAS里有视频：`07_彩色校检打印.mp4`）

`System Sp` > `2109#` > `1:Vertical Line(1dot)` > `#` > `下一页` > `……`

处理方法：用机器自带的刷子，把四个激光顺刷一遍。

2. #### 初始化载体

`System Sp` > `3030#` > `Execute：ALL` > `EXECUTE`

3. #### 强制加粉

`System Sp` > `3050#` > `Force Tnr Supply：Exe` > `子选项谁缺粉加谁` > `EXECUTE`



### 三、2025年新学的

​	**维护模式**：**`复位(Reset)按两次`**>**`143`**>**`按C键两次，最后一次不放`**。

​	**温馨提示**：在执行时，**`OK`**和**`#`**都代表确认。

1. 1802#：查看机器：55M（未知学习中）。