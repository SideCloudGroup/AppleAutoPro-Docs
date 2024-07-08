# 后端安装

## 架构介绍

后端主要分为两部分：

- `WebDriver` - 可以理解为浏览器，可选择单机版或集群版。
- `AppleAutoPro后端程序` - **调用WebDriver**，检测账号，执行任务。仅需在一台服务器上部署。

### WebDriver单机版

单机版仅在一台服务器上运行WebDriver。在执行一键部署后端时，可以选择**同时部署Selenium单机节点**。**无需额外手动安装。**

注意：**如需在ARM设备上使用 Selenium ，请参阅：**[**seleniarm/standalone-chromium
**](https://hub.docker.com/r/seleniarm/standalone-chromium)

### WebDriver集群

集群分为两部分：

- `Hub` - 中心控制器，自动分配任务给`Node`，提供WebDriver面板。仅需在一台服务器上安装。
- `Node` - 执行任务的节点，需要在多台服务器上安装。

如需部署集群，可使用快速部署脚本。请参考：[sahuidhsu/selenium-grid-docker](https://github.com/sahuidhsu/selenium-grid-docker)
，这个脚本提供x86_64和arm部署支持。

注意：**如使用集群，在执行一键部署后端脚本时，无需选择部署Selenium单机节点**

## 资源需求

程序后端对机器配置要求较高，推荐至少4G内存。如账号较多，请考虑使用集群。

建议**不要**使用 **CentOS 7** 。

单个账号在运行时需要约600MB内存，主要由WebDriver占用。空闲时在100MB以内。

每次执行任务大概需要20MB流量。

后端运行基于 Docker ，安装脚本会自动检测 Docker 是否安装，因此无需手动安装。

## 网络需求

部分IP段存在被苹果拉黑的情况。推荐使用原生IP或动态IP。如需更多信息， 请参阅：[网络需求](../others/stat)

若服务器位于中国大陆，则需要先更换Docker Registry镜像源。请参阅：[更换Docker Registry镜像源](../others/docker-mirror)

## 一键部署后端

```bash
bash <(curl -Ls https://raw.githubusercontent.com/SideCloudGroup/AppleAutoPro-Backend/main/install.sh)
```

安装时按照提示输入参数即可。如安装单机版Selenium请确保可以访问4444端口。
默认会以 **appleautopro** 为容器名部署一个Docker容器，这是 **`后端管理器`**。
appleautopro会自动获取任务，为每个任务部署一个 **`任务容器`**

## Docker基本操作

### 查看所有容器

```bash
docker ps -a
```

### 关闭容器

```bash
docker stop 容器名
```

### 重启容器

```bash
docker restart 容器名
```

### 查看日志

```bash
docker logs 容器名
```

执行 **docker logs appleautopro** 查看 **`后端管理器`** 日志。

如需查看 **`任务容器`** 日志，请先执行 **docker ps -a**，其中命名格式为 `apple-auto_X` 的则是任务容器，X代表了账号序号。

使用 **docker logs apple-auto_X** 即可查看日志。