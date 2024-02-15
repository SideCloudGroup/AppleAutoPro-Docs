# Giới Thiệu

Đây là một chương trình tự động kiểm tra & mở khóa Apple ID dựa trên câu hỏi bảo mật.

Giao diện phía trước dùng để quản lý tài khoản, hỗ trợ thêm nhiều tài khoản và cung cấp trang hiển thị thông tin tài khoản;

Hỗ trợ tạo trang chia sẻ chứa nhiều tài khoản và có thể đặt mật khẩu và thời hạn cho trang chia sẻ.

Phần mềm phía sau tự động kiểm tra tài khoản bị khóa hay không, nếu bị khóa hoặc bật xác minh hai bước thì sẽ tự động mở khóa, đổi mật khẩu và báo lại mật khẩu qua API.

Đăng nhập Apple ID và tự động xóa thiết bị trong Apple ID.

Sử dụng hồ bơi proxy và cụm Selenium để tăng tỷ lệ thành công trong việc mở khóa, ngăn chặn kiểm soát rủi ro.

Dưới đây là so sánh các tính năng giữa các phiên bản khác nhau. Phiên bản mở rộng đã **ngừng cập nhật**, nếu muốn tiếp tục sử dụng, nên chuyển sang phiên bản cá nhân hoặc thương mại.

Phiên bản thương mại chủ yếu bổ sung tính năng bán hàng, vui lòng chọn theo nhu cầu.

Phiên bản mở rộng và Pro (phiên bản cá nhân, thương mại) sử dụng phiên bản phần mềm phía sau khác nhau, phiên bản mở rộng phía sau chỉ cập nhật các chức năng chính, phiên bản Pro sẽ được tối ưu và cập nhật liên tục.

<table><thead><tr><th width="258">Chức Năng</th><th>Phiên Bản Mở Rộng</th><th>Phiên Bản Cá Nhân</th><th>Phiên Bản Thương Mại</th></tr></thead><tbody><tr><td>Kiểm tra định kỳ tài khoản</td><td>✅</td><td>✅</td><td>✅</td></tr><tr><td>Tự động mở khóa &#x26; đóng xác minh hai bước</td><td>✅</td><td>✅</td><td>✅</td></tr><tr><td>Sử dụng nhiều người dùng</td><td>✅</td><td>✅</td><td>✅</td></tr><tr><td>Kiểm tra đơn tài khoản</td><td>❌</td><td>✅</td><td>✅</td></tr><tr><td>Giới hạn tên miền trang chia sẻ*</td><td>❌</td><td>✅</td><td>✅</td></tr><tr><td>Thêm tài khoản hàng loạt</td><td>❌</td><td>✅</td><td>✅</td></tr><tr><td>Tùy chỉnh tiền tố mật khẩu</td><td>❌</td><td>✅</td><td>✅</td></tr><tr><td>Nhãn phân loại tài khoản</td><td>❌</td><td>❌</td><td>✅</td></tr><tr><td>Thiết lập quyền người dùng*</td><td>❌</td><td>❌</td><td>✅</td></tr><tr><td>Bán gói mở khóa*</td><td>❌</td><td>❌</td><td>✅</td></tr><tr><td>Cho thuê tài khoản*</td><td>❌</td><td>❌</td><td>✅</td></tr><tr><td>Thanh toán trực tuyến*</td><td>❌</td><td>❌</td><td>✅</td></tr><tr><td>Mã thẻ nạp</td><td>❌</td><td>❌</td><td>✅</td></tr><tr><td>Đổi tài khoản</td><td>❌</td><td>❌</td><td>✅</td></tr><tr><td>Bảo trì lâu dài</td><td>❌</td><td>✅</td><td>✅</td></tr><tr><td>Hình thức cấp phép</td><td>-</td><td>Cấp phép một lần</td><td>Theo thời gian/một lần</td></tr></tbody></table>

* **Giới hạn tên miền trang chia sẻ:** Chỉ có tên miền được cấp phép mới có thể sử dụng trang chia sẻ, ngăn chặn việc bị đánh cắp.
* **Thiết lập quyền người dùng:** Có thể thiết lập thời hạn người dùng, số lượng tài khoản tối đa, khoảng thời gian mở khóa ngắn nhất, v.v.
* **Bán gói mở khóa:** Trang web có tính năng cửa hàng, quản trị viên có thể thiết lập các gói (chu kỳ, khoảng thời gian thực hiện ngắn nhất, v.v.) để người dùng mua.
* **Cho thuê tài khoản:** Quản trị viên có thể thiết lập tài khoản để cho thuê, đặt giá cho mỗi tài khoản (tính theo ngày). Người dùng có thể gia hạn thuê tài khoản.
* **Thanh toán trực tuyến:** Hiện tại hỗ trợ Yipay và nạp bằng mã thẻ.

## Demo

* [Phiên Bản Thương Mại](https://demo-b.appleidauto.org/)
* [Phiên Bản Cá Nhân](https://demo-p.appleidauto.org/)

Bạn có thể đăng ký tài khoản để trải nghiệm.
