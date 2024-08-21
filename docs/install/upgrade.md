# 升级程序

## 前端升级

### 一键更新

> [!WARNING]
> **提示**：若服务器位于中国大陆，可能无法正常访问Github，建议使用手动更新。

在网站根目录执行 `bash upgrade.sh`

请查看脚本执行输出，如有提示需要更新env文件，请手动比对`.example.env`与`.env`

如果`upgrade.sh`不存在，说明前端版本过老，请手动下载源码并覆盖更新。

### 手动更新

前往"源码下载"，下载最新的前端源码，解压到网站根目录，覆盖原有文件。然后执行以下指令：

```bash
php composer.phar upgrade
php think migrate:run
```

## 后端升级

后端会自动更新，通常无需手动管理。

若要手动更新，请执行以下指令：

```bash
docker run --rm \
-v /var/run/docker.sock:/var/run/docker.sock \
containrrr/watchtower \
--run-once \
--cleanup \
appleautopro
```

