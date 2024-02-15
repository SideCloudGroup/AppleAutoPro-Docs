# 分享页API

支持通过分享页面代码，以JSON方式获取账号信息，用于对接其他APP。

分享页面代码指页面的代码，并非整个URL。

API地址：`/shareapi/<code>/[password]`\
请求方法：`GET`

例子：如果您的普通分享页面路径是 `/share/kfcv50`，密码设置为`crazy4`
，那么这个页面对应的API地址路径就是 `/shareapi/kfcv50/crazy4` 。\

### 输入参数

| 参数       | 值/类型   | 说明                |
|----------|--------|-------------------|
| code     | String | 分享页代码             |
| password | String | 分享页密码（若未设置密码则不需要） |

### 返回参数

| 参数       | 值/类型   | 说明          |
|----------|--------|-------------|
| status   | Bool   | 操作成功/失败     |
| msg      | String | 提示信息        |
| accounts | Array  | 账号列表（格式见下表） |

### 账号信息

| 参数               | 值/类型   | 说明     |
|------------------|--------|--------|
| username         | String | 账号     |
| password         | String | 密码     |
| status           | Bool   | 账号状态   |
| last\_check      | String | 上次检查时间 |
| frontend\_remark | String | 账号前端备注 |
