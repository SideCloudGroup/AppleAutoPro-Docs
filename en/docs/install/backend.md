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

#### standalone

The backend installation script includes single-node deployment functionality. Simply select the deployment option during running the script.

Note：**If you want to deploy Selenium on ARM devices, Please look at this:**
[**seleniarm/standalone-chromium**](https://hub.docker.com/r/seleniarm/standalone-chromium)

#### grid

Selenium Grid requires a central controller (Hub) and allows nodes to be deployed on multiple servers (node). The Hub automatically assigns Nodes upon receiving requests, achieving load balancing, and enabling multi-IP access, among other functionalities.

If you need to deploy a cluster, you can use the quick deployment script. Please refer to:[sahuidhsu/selenium-grid-docker](https://github.com/sahuidhsu/selenium-grid-docker) , this script provides support for both x86_64 and ARM deployments.

注意：**如果部署集群，请勿在下方部署后端时选择部署Selenium单机节点**

## 一键部署后端

```bash
bash <(curl -Ls https://raw.githubusercontent.com/SideCloudGroup/AppleAutoPro-Backend/main/install.sh)
```

安装时按照提示输入参数即可。如安装单机版Selenium请确保可以访问4444端口。
默认会以 **appleautopro** 为容器名部署一个Docker容器，这是**`后端管理器`**。
appleauto会自动获取任务，为每个任务部署一个**`任务容器`**
执行 **docker logs appleautopro** 查看**`后端管理器`**日志。


如需查看**任务容器**日志，请先执行**docker ps -a**，其中命名格式为"apple-auto_X"的则是任务容器，X代表了账号ID。使用 **docker logs apple-auto\_X** 即可查看日志。