# 离线授权证书使用方法

## 个人版

在购买产品后，你将会获得一串字符串，如图所示，这就是证书的内容。

![license.png](/assets/images/license-example.png)

在 `网站根目录/data/certs/` 有`license.example`文件，将其重命名为`license`，使用文本编辑器打开，然后粘贴证书内容即可。

## 商业版

商业版产品默认使用在线授权，仅需在`.env`文件中填写授权码即可。

若服务器遇到通联问题无法使用在线授权，可前往[此处](https://license.cloudsides.com/client/download)获取证书。

在 `网站根目录/data/certs/` 中创建`license`文件，将其内容粘贴到该文件中即可。

**注意：** 当产品进行续费操作后，请重新获取证书并替换原有证书内容。
