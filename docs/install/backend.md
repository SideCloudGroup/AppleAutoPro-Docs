# 后端安装

## 资源需求

程序后端对机器配置要求较高，推荐至少4G内存。如账号较多，请考虑使用集群。

建议**不要**使用 **CentOS** 。

单个账号在运行时需要约600MB内存，主要由WebDriver占用。空闲时在100MB以内。

每次执行任务，在开启所有检测功能的情况下，约消耗40MB流量。

后端运行基于 Docker ，安装脚本会自动检测 Docker 是否安装，因此无需手动安装。

## 架构介绍

后端主要分为两部分：

- `WebDriver` - 可以理解为浏览器，可选择单机版或集群版。
- `AppleAutoPro后端程序` - **调用WebDriver**，检测账号，执行任务。仅需在一台服务器上部署。

### WebDriver单机版（Standalone）

单机版仅在一台服务器上运行WebDriver。

### WebDriver集群

集群分为两部分：

- `Hub` - 中心控制器，自动分配任务给`Node`，提供WebDriver面板。**仅需在一台服务器上安装。**
- `Node` - 执行任务的节点，需要在多台服务器上安装。

## 网络需求

部分IP段存在被苹果拉黑的情况。推荐使用原生IP或动态IP。如需更多信息， 请参阅：[网络需求](../others/stat)

若服务器位于中国大陆，则需要先更换Docker Registry镜像源。请参阅：[更换Docker Registry镜像源](../others/docker-mirror)

## 安装流程

**若您的服务器位于中国大陆，请先[手动安装Docker](../others/docker-install-cn)。**

1. [部署WebDriver（可选集群或单机版）](#部署webdriver)
2. 确保WebDriver的地址可以被浏览器打开，端口已放行。（能打开不代表端口已放行，请检查系统是否有防火墙）\
   例如服务器IP为114.5.1.4，WebDriver端口为4444，则在浏览器输入`http://114.5.1.4:4444`，检查是否能访问
3. 在前端`.env`文件中填写`WEBDRIVER`地址。 \
   与上一步一样，填写`http://114.5.1.4:4444`即可。如WebDriver有身份验证，则填写`http://用户名:密码@114.5.1.4:4444`
4. [部署AppleAutoPro后端](#部署appleautopro后端)

## 部署WebDriver

### 海外服务器

```bash
bash <(curl -Ls https://raw.githubusercontent.com/sahuidhsu/selenium-grid-docker/main/wd.sh)
```

### 中国大陆服务器

```bash
bash <(curl -Ls https://ghp.ci/raw.githubusercontent.com/sahuidhsu/selenium-grid-docker/main/wd.sh)
```

## 部署AppleAutoPro后端

### 海外服务器

```bash
bash <(curl -Ls https://raw.githubusercontent.com/SideCloudGroup/AppleAutoPro-Backend/main/install.sh)
```

### 中国大陆服务器

```bash
bash <(curl -Ls https://ghp.ci/raw.githubusercontent.com/SideCloudGroup/AppleAutoPro-Backend/main/install.sh)
```

安装时按照提示输入参数即可。
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