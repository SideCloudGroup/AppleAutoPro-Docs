# SSPanel-Metron对接

## 下载文件

前往[https://github.com/pplulee/appleid_auto/tree/backend/embed/SSPanel-Metron](https://github.com/pplulee/appleid\_auto/tree/backend/embed/SSPanel-Metron)
下载适用于AppleAuto的对接文件，并替换网站程序。

## 修改文件

打开`src\Controllers\UserController.php`文件

![SSPanel-Metron.png](/assets/images/ssp-metron.png)

红框处变量`$share_url`表示分享页API链接

如果你的分享页是`https://test.com/share/kfcv50`，则分享页API为`https://test.com/shareapi/kfcv50`。如分享页有密码，则将其设为`https://test.com/shareapi/kfcv50/你的密码`

完成后可在使用教程中直接显示账号
