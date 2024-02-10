# Chuyển Đổi Từ Phiên Bản Mở Rộng v2

## Giao Diện Phía Trước

1. Xóa tất cả các tệp trong thư mục trang web. (Lưu ý: nếu cần, hãy sao lưu nội dung trong .env, ví dụ như key)
2. Tham khảo [hướng dẫn cài đặt giao diện phía trước](front-end.md) và hoàn thành từ bước 1 đến 6.
3. Thực hiện lệnh\
   `php think migrate:run`\
   Thao tác này hỗ trợ nâng cấp cơ sở dữ liệu một cách mượt mà.\
   \*Lưu ý: Do thêm trường email, email mặc định của tất cả người dùng hiện tại sẽ được thiết lập thành tennguoidung@aikocute.com
4. Đến đây, bạn có thể mở trang web và kiểm tra xem nó có hoạt động bình thường không.

## Phần Mềm Phía Sau

Chỉ cần sao chép và thực hiện lệnh sau:

```bash
bash <(curl -Ls https://raw.githubusercontent.com/pplulee/AppleAutoPro-Backend/main/upgrade.sh)
```
