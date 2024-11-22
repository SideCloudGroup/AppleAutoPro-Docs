## 安装 Docker
执行脚本
```bash
bash <(curl -sSL https://linuxmirrors.cn/docker.sh) --source-registry "https://docker.1panel.live" --install-latest true --ignore-backup-tips
```

安装时，可以优先选择您的服务商的软件源，以提高下载速度。

**使用此脚本安装的 Docker 无需再进行更换 Docker Registry 镜像源的操作。**

## 更换 Docker Registry 镜像源教程

本教程将指导您如何通过修改 `daemon.json` 文件来更换 Docker Registry 镜像源。

### 1. 打开或创建 `daemon.json` 文件

通常情况下，`daemon.json` 文件位于 `/etc/docker/` 目录下。如果该文件不存在，您需要手动创建它。可以使用如下命令：

```sh
nano /etc/docker/daemon.json
```

当然，您也可以使用其他编辑器来创建或修改此文件。

### 2. 修改 `daemon.json` 文件

在 `daemon.json` 文件中添加或修改以下内容，以更换 Docker Registry 镜像源。下面是一个示例内容：

```json
{
    "registry-mirrors": [
        "https://docker.1panel.live"
    ]
}
```

也可以选择其他的镜像源地址。

### 3. 重启 Docker 服务

保存并关闭 `daemon.json` 文件后，使用以下命令重启 Docker 服务，使更改生效：

```sh
systemctl restart docker
```

### 4. 验证配置是否生效

您可以使用以下命令验证配置是否生效：

```sh
docker info
```

在输出信息中，您应该能够看到您配置的镜像源地址。
