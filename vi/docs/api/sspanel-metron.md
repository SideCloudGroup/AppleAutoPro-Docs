# Tích Hợp SSPanel-Metron

## Tải File

Truy cập [https://github.com/pplulee/appleid\_auto/tree/backend/embed/SSPanel-Metron](https://github.com/pplulee/appleid\_auto/tree/backend/embed/SSPanel-Metron)\
Tải file phù hợp cho AppleAuto và thay thế.

## Chỉnh Sửa File

Mở file `src\Controllers\UserController.php`

<figure><img src="../.gitbook/assets/image%20(13).png" alt=""><figcaption></figcaption></figure>

Biến `$share_url` trong khung đỏ biểu thị liên kết API trang chia sẻ.

Nếu trang chia sẻ của bạn là `https://test.com/share/kfcv50`, thì API trang chia sẻ sẽ là `https://test.com/shareapi/kfcv50`. Nếu trang chia sẻ có mật khẩu, bạn cần đặt nó thành `https://test.com/shareapi/kfcv50/mật khẩu của bạn`.

Sau khi hoàn thành, thông tin tài khoản có thể được hiển thị trực tiếp trong hướng dẫn sử dụng.
