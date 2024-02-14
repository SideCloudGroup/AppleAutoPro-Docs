# V2Board知识库调用

## 下载文件

下载适用于AppleAuto的[KnowledgeController](https://raw.githubusercontent.com/pplulee/appleid\_auto/backend/embed/v2board/KnowledgeController.php)文件

前往 `V2board根目录/app/Http/Controllers/User/`，替换`KnowledgeController.php`

## 修改文件

打开KnowledgeController.php文件

红框处变量`$share_url`表示分享页API链接

如果你的分享页是`https://test.com/share/kfcv50`，则分享页API为`https://test.com/shareapi/kfcv50`。如分享页有密码，则将其设为`https://test.com/shareapi/kfcv50/你的密码`

<figure><img src="../.gitbook/assets/image (12).png" alt=""><figcaption></figcaption></figure>

## 知识库调用

在编辑知识时，可直接填写以下变量

帐号：`{{apple_idX}}`

密码： `{{apple_pwX}}`

状态： `{{apple_statusX}}`

更新时间： `{{apple_timeX}}`

X为从0开始的数字序号

## 完成效果

<figure><img src="../.gitbook/assets/image (8).png" alt=""><figcaption></figcaption></figure>
