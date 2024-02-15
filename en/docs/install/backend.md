# Backend Installation

## Preparations

### Hardware Requirement

The backend of the program has higher machine configuration requirements, recommending a minimum of 4GB of RAM. If there are many accounts, consider using a cluster.<br>
It is advised **NOT** to use **CentOS 7** 。

### Software Environment

The backend runs on Docker, and the installation script will automatically detect whether Docker is installed, so manual installation is not required.

### Selenium

The backend executes tasks by invoking Webdriver, which can be understood as a browser.

Selenium has two deployment methods: **standanlone** and **grid**.

#### 单机节点（standalone）

后端安装脚本包含了单机节点部署功能，在运行时选择部署即可。

注意：**If you want to deploy Selenium on ARM devices, Please look at this:**
[**seleniarm/standalone-chromium**](https://hub.docker.com/r/seleniarm/standalone-chromium)

#### 集群（grid）

Selenium Grid 需要一个中心控制器（Hub），并允许在多台服务器上部署节点（Node）。Hub收到请求后会自动分配 Node ，实现负载均衡，多IP访问等功能。

如需部署集群，可使用快速部署脚本。请参考：[sahuidhsu/selenium-grid-docker](https://github.com/sahuidhsu/selenium-grid-docker) (这个脚本提供x86\_64和arm部署支持)。

注意：**如果部署集群，请勿在下方部署后端时选择部署Selenium单机节点**

## 一键部署后端

```bash
bash <(curl -Ls https://raw.githubusercontent.com/pplulee/AppleAutoPro-Backend/main/install.sh)
```

安装时按照提示输入参数即可。如安装单机版Selenium请确保可以访问4444端口。
默认会以 **appleautopro** 为容器名部署一个Docker容器，这是**`后端管理器`**。
appleauto会自动获取任务，为每个任务部署一个**`任务容器`**
执行 **docker logs appleautopro** 查看**`后端管理器`**日志。


如需查看**任务容器**日志，请先执行**docker ps -a**，其中命名格式为"apple-auto_X"的则是任务容器，X代表了账号ID。使用 **docker logs apple-auto\_X** 即可查看日志。