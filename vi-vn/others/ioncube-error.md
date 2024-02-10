# Lỗi Liên Quan đến ionCube

Nếu xuất hiện lỗi liên quan đến ionCube, hãy kiểm tra xem bạn đã cài đặt tiện ích mở rộng `ioncube` trong PHP hay chưa.

**Người dùng Bảo Tạ phiên bản Khoái cảm cần cập nhật thủ công tiện ích mở rộng ionCube**

## Cập Nhật Tiện Ích Mở Rộng ionCube

Trước khi cập nhật, hãy chắc chắn rằng tiện ích mở rộng đã được cài đặt.

1. Trong tệp cấu hình PHP, tìm kiếm `zend_extension` như hình dưới đây, đường dẫn tệp ở đây là `/usr/local/ioncube/`\
   \*Đối với người dùng Bảo Tạ, tệp cấu hình PHP có thể được tìm thấy tại Cửa hàng phần mềm -> Cài đặt PHP7.4 -> Tệp cấu hình\\

<figure><img src="../.gitbook/assets/image (3).png" alt=""><figcaption></figcaption></figure>

2. Truy cập [https://www.ioncube.com/loaders.php](https://www.ioncube.com/loaders.php) để tải tiện ích mở rộng ionCube phù hợp với phiên bản hệ thống của bạn.\
   Giải nén và tìm `ioncube_loader_lin_7.4.so`, sau đó tải lên đường dẫn trên và thay thế tệp hiện tại.
3. Khởi động lại PHP, hoàn tất quá trình cập nhật.
