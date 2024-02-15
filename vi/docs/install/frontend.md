# Cài Đặt Giao Diện Phía Trước

Môi trường chạy giao diện phía trước cần **PHP 7.4**, hiện tại không hỗ trợ các phiên bản PHP khác.

Phiên bản MySQL được khuyến nghị là 8.0, lý thuyết hỗ trợ MySQL 5.x.

***

1. Sau khi mua chương trình, bạn sẽ nhận được liên kết tải mã nguồn. Tải xuống và giải nén vào thư mục gốc của trang web.
2. Sao chép file cấu hình `.example.env` thành một bản sao với tên `.env`, sau đó điền các thông tin cài đặt.
3. Truy cập cài đặt PHP, gỡ bỏ lệnh cấm chức năng `putenv` và cài đặt tiện ích mở rộng `fileinfo` và `ioncube`.\
   \
   Đối với người dùng Bảo Tạ, truy cập `Cửa hàng phần mềm` -> `Cài đặt PHP7.4`\
   `Chức năng bị cấm` -> Xóa `putenv` và `proc_open`\
   `Cài đặt tiện ích mở rộng` -> Cài đặt `fileinfo` và `ioncube`\
   Nếu đã cài đặt ioncube trước đó, nên gỡ bỏ và cài lại để cập nhật phiên bản mới nhất.\
   Người dùng Bảo Tạ phiên bản Khoái cảm cần cập nhật thủ công sau khi cài đặt tiện ích mở rộng, [xem chi tiết tại đây](../others/ioncube-error.md)
4.  Truy cập thư mục gốc của trang web, thực hiện các lệnh sau:\
    \*Nếu máy chủ đã cài nhiều phiên bản PHP, hãy đảm bảo rằng bạn đang sử dụng PHP 7.4 trên dòng lệnh.\
    \*Đối với người dùng Bảo Tạ, bạn có thể thay đổi trong mục `Trang web` - `Phiên bản dòng lệnh PHP`.

    ```bash
    wget https://getcomposer.org/installer -O composer.phar
    php composer.phar
    php composer.phar install
    ```
5.  Thiết lập thư mục chạy trang web là `/public`, và cấu hình URL gọn gàng như sau:

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
6.  Trong thư mục gốc trang web, chạy lệnh sau để nhập cơ sở dữ liệu:\
    \*Nếu có lỗi trong quá trình cài đặt, vui lòng tự kiểm tra thông tin cơ sở dữ liệu trong file env.

    ```bash
    php think migrate:run
    ```
7. Trong thư mục gốc trang web, chạy lệnh sau để đăng ký người dùng quản trị:\
   \*Dấu ngoặc nhọn chỉ để hiển thị các biến cần điền, không điền vào lệnh thực tế.\
   `php think register <email> <tên người dùng> <mật khẩu>`
8.  Thiết lập quyền truy cập cho toàn bộ thư mục trang web là 755, chủ sở hữu là www (hoặc người dùng tương ứng khác).

    Người dùng Bảo Tạ có thể thực hiện như sau:\
    Truy cập /www/wwwroot, tìm thư mục của trang web, nhấp vào “Quyền”.

    Sau đó xác nhận quyền là 755, chủ sở hữu là www, chọn “Áp dụng cho thư mục con”.

    ![permission.png](/assets/images/permission2.png)

    Sau đó nhấp vào xác nhận.
9. Đến đây, bạn có thể mở trang web để kiểm tra xem nó có hoạt động bình thường không.
