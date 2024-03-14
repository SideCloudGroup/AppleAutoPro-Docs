# 从开源版v2迁移

## 前端

1. 删除站点文件夹内所有文件。（请注意，如有需要，请备份 .env 中的内容，例如key）
2. 参考[前端安装教程](frontend.md)，完成1\~6步
3. 执行指令<br>
   `php think migrate:run`<br>
   该操作支持无缝升级数据库！<br>
   *注：由于新增email字段，所有已存在用户默认邮箱会被设为 用户名@qq.com
4. 至此，你可以打开网站，检查是否正常运行。

## 后端

仅需复制并执行以下指令

```bash
bash <(curl -Ls https://raw.githubusercontent.com/SideCloudGroup/AppleAutoPro-Backend/main/upgrade.sh)
```
