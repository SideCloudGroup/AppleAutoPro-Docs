# To Upgrade

## To upgrade Frontend

Execute in the website's root directory `bash upgrade.sh`

请查看脚本执行输出，如有提示需要更新env文件，请手动比对`.example.env`与`.env`

如果`upgrade.sh`不存在，说明前端版本过老，请手动下载源码并覆盖更新。

## To upgrade Backend

后端会自动更新，无需手动管理。

若要手动更新，请执行以下指令：

```bash
docker run --rm \
-v /var/run/docker.sock:/var/run/docker.sock \
containrrr/watchtower \
--run-once \
--cleanup \
appleautopro
```

