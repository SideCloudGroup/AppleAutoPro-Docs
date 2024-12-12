# Backend Installation

## Resource Requirements

The backend program requires a machine with at least 4GB of memory. If you have many accounts, consider using a cluster.

It is **not recommended** to use **CentOS**.

Each account requires approximately 600MB of memory during operation, primarily used by WebDriver. When idle, memory
usage is below 100MB.

Each task execution consumes around 40MB of bandwidth when all detection features are enabled.

The backend operates on Docker, and the installation script will automatically detect if Docker is installed, so manual
installation is not necessary.

## Architecture Overview

The backend is mainly divided into two parts:

- `WebDriver` - Acts as a browser, available in standalone or clustered versions.
- `AppleAutoPro Backend Program` - **Calls WebDriver** to check accounts and execute tasks. Deployment is required on
  only one server.

### WebDriver Standalone

The standalone version runs WebDriver on a single server.

### WebDriver Cluster

The cluster consists of two components:

- `Hub` - The central controller that automatically assigns tasks to `Node` and provides a WebDriver panel. **Only one
  installation is required.**
- `Node` - Task-executing nodes that need to be installed on multiple servers.

## Network Requirements

Certain IP ranges may be blacklisted by Apple. It is recommended to use native IPs or dynamic IPs. For more details,
please refer to: [Network Requirements](../others/stat).

## Installation Process

1. [Deploy WebDriver (choose standalone or cluster)](#deploy-webdriver)
2. Ensure the WebDriver address is accessible in a browser, and the port is open. (Being accessible does not mean the
   port is open—check if the system has a firewall.)
   For example, if the server IP is 114.5.1.4 and the WebDriver port is 4444, enter `http://114.5.1.4:4444` in a browser
   to verify access.
3. Enter the `WEBDRIVER` address in the `.env` file of the frontend. \
   As in the previous step, use `http://114.5.1.4:4444`. If WebDriver requires authentication, use
   `http://username:password@114.5.1.4:4444`.
4. [Deploy the AppleAutoPro Backend](#deploy-appleautopro-backend)

## Deploy WebDriver

### For Non-Chinese Servers

```bash
bash <(curl -Ls https://raw.githubusercontent.com/sahuidhsu/selenium-grid-docker/main/wd.sh)
```

## Deploy AppleAutoPro Backend

### For Non-Chinese Servers

```bash
bash <(curl -Ls https://raw.githubusercontent.com/SideCloudGroup/AppleAutoPro-Backend/main/install.sh)
```

Follow the prompts during installation to enter the required parameters.

By default, a Docker container named **appleautopro** will be deployed as the **`Backend Manager`**. appleautopro will
automatically fetch tasks and deploy a **`Task Container`** for each task.

## Basic Docker Operations

### View All Containers

```bash
docker ps -a
```

### Stop a Container

```bash
docker stop container_name
```

### Restart a Container

```bash
docker restart container_name
```

### View Logs

```bash
docker logs container_name
```

To view the **`Backend Manager`** logs, execute:

```bash
docker logs appleautopro
```

To view **`Task Container`** logs, first execute:

```bash
docker ps -a
```

Task containers are named in the format `apple-auto_X`, where X represents the account number.

Use:

```bash
docker logs apple-auto_X
```

To view the logs of a specific task container.
