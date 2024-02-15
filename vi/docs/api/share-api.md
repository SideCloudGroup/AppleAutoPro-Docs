# API Trang Chia Sẻ

Hỗ trợ lấy thông tin tài khoản dưới dạng JSON thông qua mã code của trang chia sẻ, để tích hợp với các ứng dụng khác.

Mã trang chia sẻ chỉ là mã code của trang, không phải là URL đầy đủ.

Địa chỉ API: `/shareapi/<code>/[password]`\
Phương thức yêu cầu: `GET`

Ví dụ: Nếu đường dẫn trang chia sẻ thông thường của bạn là `/share/kfcv50` và mật khẩu được thiết lập là `crazy4`, thì địa chỉ API tương ứng cho trang này sẽ là `/shareapi/kfcv50/crazy4`.

### Tham Số Đầu Vào

| Tham Số  | Giá Trị/Loại | Mô Tả                                                          |
| -------- | ------------ | -------------------------------------------------------------- |
| code     | String       | Mã của trang chia sẻ                                           |
| password | String       | Mật khẩu của trang chia sẻ (nếu không thiết lập thì không cần) |

### Tham Số Trả Về

| Tham Số  | Giá Trị/Loại | Mô Tả                                             |
| -------- | ------------ | ------------------------------------------------- |
| status   | Bool         | Thành công/Thất bại                               |
| msg      | String       | Thông điệp thông báo                              |
| accounts | Array        | Danh sách tài khoản (định dạng như bảng dưới đây) |

### Thông Tin Tài Khoản

| Tham Số     | Giá Trị/Loại | Mô Tả                        |
| ----------- | ------------ | ---------------------------- |
| username    | String       | Tên tài khoản                |
| password    | String       | Mật khẩu                     |
| status      | Bool         | Trạng thái tài khoản         |
| last\_check | String       | Thời gian kiểm tra cuối cùng |
| remark      | String       | Ghi chú trước mặt tài khoản  |
