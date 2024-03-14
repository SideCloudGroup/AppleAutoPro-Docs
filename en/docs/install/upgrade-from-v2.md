# Migrating from Opensource Edition v2

## Frontend

1. Delete all files within the site folder. (Please note, if necessary, backup the contents of the .env file, such as keys.)
2. Read [Frontend Installation](frontend.md) , finish steps 1~6.
3. Execute the command below:<br>
   `php think migrate:run`
   
   By finishing this,
   \*注：由于新增email字段，所有已存在用户默认邮箱会被设为 用户名@qq.com
4. 至此，你可以打开网站，检查是否正常运行。



## 后端

仅需复制并执行以下指令

```bash
bash <(curl -Ls https://raw.githubusercontent.com/SideCloudGroup/AppleAutoPro-Backend/main/upgrade.sh)
```
