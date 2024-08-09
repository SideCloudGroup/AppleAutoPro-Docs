
# Backend Installation

## Resource Requirements

The program backend has high requirements for machine configuration, and at least 4GB of memory is recommended. If there are many accounts, consider using a cluster.

It is recommended **not** to use **CentOS 7**.

A single account requires about 600MB of memory when running, mainly occupied by WebDriver. When idle, it is within 100MB.

Each task execution requires about 20MB of traffic.

The backend runs based on Docker, and the installation script will automatically detect whether Docker is installed, so manual installation is not required.

## Architecture Introduction

The backend is mainly divided into two parts:

- `WebDriver` - Can be understood as a browser, available in standalone or cluster versions.
- `AppleAutoPro Backend Program` - **Calls WebDriver**, checks accounts, and executes tasks. It only needs to be deployed on one server.

### WebDriver Standalone Version

The standalone version runs WebDriver on only one server. When executing the one-click deployment of the backend, you can choose to **deploy the Selenium standalone node simultaneously**. **No additional manual installation is required.**

### WebDriver Cluster

The cluster is divided into two parts:

- `Hub` - Central controller that automatically assigns tasks to `Node` and provides a WebDriver panel. **It only needs to be installed on one server.**
- `Node` - The node that executes tasks needs to be installed on multiple servers.

## Network Requirements

Some IP segments are blocked by Apple. It is recommended to use native IPs or dynamic IPs. For more information, please refer to: [Network Requirements](../others/stat)

## Installation Process

1. [Deploy WebDriver (Cluster or Standalone version optional)](#deploy-webdriver)
2. Ensure that the WebDriver address can be opened by the browser, and the port is unblocked. (Being able to open it does not mean the port is unblocked, please check if there is a firewall in the system.)
   For example, if the server IP is 114.5.1.4 and the WebDriver port is 4444, then enter `http://114.5.1.4:4444` in the browser and check whether it is accessible.
3. Fill in the `WEBDRIVER` address in the front-end `.env` file.
   As in the previous step, just fill in `http://114.5.1.4:4444`. If WebDriver has authentication, fill in `http://username:password@114.5.1.4:4444`.
4. [Deploy AppleAutoPro Backend](#deploy-appleautopro-backend)

## Deploy WebDriver

Please go to [sahuidhsu/selenium-grid-docker](https://github.com/sahuidhsu/selenium-grid-docker) to view the installation script.

## Deploy AppleAutoPro Backend

Execute the following command:

```bash
bash <(curl -Ls https://raw.githubusercontent.com/SideCloudGroup/AppleAutoPro-Backend/main/install.sh)
```

Follow the prompts to enter parameters during installation.
By default, a Docker container is deployed with the container name **appleautopro**, which is the **`Backend Manager`**.
appleautopro will automatically obtain tasks and deploy a **`Task Container`** for each task.

## Basic Docker Operations

### View all containers

```bash
docker ps -a
```

### Stop a container

```bash
docker stop <container_name>
```

### Restart a container

```bash
docker restart <container_name>
```

### View logs

```bash
docker logs <container_name>
```

Execute **docker logs appleautopro** to view the **`Backend Manager`** logs.

To view **`Task Container`** logs, first execute **docker ps -a**, where the naming format `apple-auto_X` is the task container, and X represents the account number.

Use **docker logs apple-auto_X** to view the logs.
