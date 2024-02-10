# Gọi Kho Kiến Thức V2Board

## Tải File

Tải file [KnowledgeController](https://raw.githubusercontent.com/pplulee/appleid\_auto/backend/embed/v2board/KnowledgeController.php) phù hợp cho AppleAuto.

Đi đến `thư mục gốc V2board/app/Http/Controllers/User/`, thay thế file `KnowledgeController.php`.

## Chỉnh Sửa File

Mở file `KnowledgeController.php`.

Biến `$share_url` trong khung đỏ biểu thị liên kết API trang chia sẻ.

Nếu trang chia sẻ của bạn là `https://test.com/share/kfcv50`, thì API trang chia sẻ sẽ là `https://test.com/shareapi/kfcv50`. Nếu trang chia sẻ có mật khẩu, bạn cần đặt nó thành `https://test.com/shareapi/kfcv50/mật khẩu của bạn`.

<figure><img src="../.gitbook/assets/image (12).png" alt=""><figcaption></figcaption></figure>

## Gọi Kho Kiến Thức

Khi chỉnh sửa kiến thức, bạn có thể trực tiếp điền các biến sau:

Tài khoản: `{{apple_idX}}`

Mật khẩu: `{{apple_pwX}}`

Trạng thái: `{{apple_statusX}}`

Thời gian cập nhật: `{{apple_timeX}}`

X là số thứ tự bắt đầu từ 0.

## Kết Quả Hoàn Thành

<figure><img src="../.gitbook/assets/image (8).png" alt=""><figcaption></figcaption></figure>
