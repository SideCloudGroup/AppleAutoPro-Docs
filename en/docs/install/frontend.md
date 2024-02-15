# 前端安装

前端运行环境需要 **PHP 7.4**，暂不支持其他PHP版本

MySQL推荐版本为8.0，理论支持MySQL5.x和MariaDB

***

1. 购买程序后，你将会获得源码下载链接。将其下载到网站根目录并解压。
2. 将配置文件`.example.env`复制一份，名字改为`.env`，并填写设置项
3. 如果是个人版（离线授权）用户，请先[写入证书](license-manual.md)继续操作
4. 前往PHP设置，删除对`putenv`函数的禁用，并安装`fileinfo`和`ioncube`拓展\
   \
   对于宝塔用户，请前往`软件商店`->`PHP7.4设置`\
   `禁用函数`->删除 `putenv` 和 `proc_open`\
   `安装拓展`->安装 `fileinfo`和`ioncube`\
   若原先安装过ioncube，建议卸载再安装一次，以更新到最新版本\
   宝塔开心版用户需在安装拓展后手动更新，[点此查看](../others/ioncube-error.md)
5.  前往网站根目录，执行以下指令\
    \*如果服务器上安装了多个php版本，请确认命令行中使用的是php7.4\
    \*对于宝塔用户，可以前往`网站`-`PHP命令行版本` 中修改

    ```bash
    wget https://getcomposer.org/installer -O composer.phar
    php composer.phar
    php composer.phar install
    ```
6.  设置网站运行目录为`/public`，并设置伪静态为

    ```nginx
    location ~* (runtime|application)/{    
        return 403;
    }
    location / {
        if (!-e $request_filename){
            rewrite  ^(.*)$  /index.php?s=$1  last;   break;
        }
    }
    ```
7.  在网站根目录下执行指令，导入数据库\
    \*如安装过程中有报错，请自行检查env中数据库信息是否正确。

    ```bash
    php think migrate:run
    ```
8. 在网站根目录下执行指令，注册管理员用户\
   \*尖括号仅供展示必填变量，请勿填写到实际指令中\
   `php think register <邮箱> <用户名> <密码>`
9.  将整个网站目录权限设置为755，所有者为www（或其他对应的用户）

    宝塔用户可执行以下操作：\
    前往/www/wwwroot，找到网站的文件夹，点击“权限”\


    <figure><img src="../.gitbook/assets/image (10).png" alt=""><figcaption></figcaption></figure>

    然后确认权限为755，所有者为www，选中“应用到子目录”\


    <figure><img src="../.gitbook/assets/image (11).png" alt=""><figcaption></figcaption></figure>

    然后点击确定。
10. 至此，你可以打开网站，检查是否正常运行。\


