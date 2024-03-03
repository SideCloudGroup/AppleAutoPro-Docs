# Frontend Installation

## Preparations

### Software Environment

You need **PHP 7.4** for Frontend. Unfortunately, other versions of PHP haven't been supported.

We recommend MySQL 8.0 for better experience. Theoretically, MySQL5.x and MariaDB will also work well.

## Installation Procedure

> [!CAUTION]
> Document will only work if you follow every section and step precisely. Do **NOT** continue after something fails!

1. After purchasing the program, you will receive a download link for the source code. Download it to the root directory of your website and unzip it.
2. Copy the configuration file `.example.env`, rename it to `.env`, and fill in the settings.
3. If you are a Personal Edition (offline authorization) user, please [write in the license](license-manual) before proceeding.
4. Go to PHP settings, remove the prohibition on the `putenv` function, and install the `fileinfo` and `ioncube` extensions.

   For users of the BT panel, go to `Software Store` -> `PHP7.4 Settings`<br>
   `Disabled Functions` -> Remove `putenv` and `proc_open`<br>
   `Install Extensions` -> Install `fileinfo` and `ioncube`<br>
   If ioncube was previously installed, it is recommended to uninstall and then reinstall it to update to the latest version.
   BT Crack users need to manually update after installing the extension. [What to do?](../others/ioncube-error.md)
5. Go to the website's root directory and execute the following command:

   ```bash
   wget https://getcomposer.org/installer -O composer.phar
   php composer.phar
   php composer.phar install
   ```

   **If multiple PHP versions are installed on the server, please ensure that the command line is using PHP 7.4.**

6. Set the website's running directory to `/public` and configure the pseudo-static to
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
7. Execute the command in the website's root directory to import the database.

   ```bash
   php think migrate:run
   ```
   If an error occurs during the installation process, please check if the database information in the `.env` file is correct.

8. Execute the following command in the website's root directory to register an administrator user. <br>
   **The angle brackets are placeholders for required variables, please do not include them in the actual command.**
   `php think register <email> <username> <password>`

9. Set the permissions of the entire website directory to 755, and the owner to `www` (or the corresponding user).

10. At this point, you can open the website and check if it is running properly.


