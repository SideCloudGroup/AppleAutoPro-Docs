# ionCube相关报错

如果出现ionCube相关报错，请检查是否在PHP拓展中安装`ioncube`

## 更新ionCube拓展

在更新前，请先确保拓展已安装

1. 在PHP配置文件中搜索`zend_extension` 如图所示，此处该文件所在的路径为`/usr/local/ioncube/`

2. 前往[https://www.ioncube.com/loaders.php](https://www.ioncube.com/loaders.php)下载对应系统版本的ionCube插件
   解压后找到`ioncube_loader_lin_7.4.so`，上传到上面的路径，替换现有文件
3. 重启PHP，完成
