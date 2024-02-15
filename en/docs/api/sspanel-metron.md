# SSPanel-Metron对接

## 下载文件

前往[https://github.com/pplulee/appleid\_auto/tree/backend/embed/SSPanel-Metron](https://github.com/pplulee/appleid\_auto/tree/backend/embed/SSPanel-Metron)\
下载适用于AppleAuto的文件，并替换

## 修改文件

打开`src\Controllers\UserController.php`文件

<figure><img src="../../.gitbook/assets/image%20(13).png" alt=""><figcaption></figcaption></figure>

红框处变量`$share_url`表示分享页API链接

如果你的分享页是`https://test.com/share/kfcv50`，则分享页API为`https://test.com/shareapi/kfcv50`。如分享页有密码，则将其设为`https://test.com/shareapi/kfcv50/你的密码`

完成后可在使用教程中直接显示账号
