# Quy Trình Nâng Cấp

## Nâng Cấp Giao Diện Phía Trước

Thực hiện lệnh `bash upgrade.sh` tại thư mục gốc của trang web.

Hãy kiểm tra đầu ra của script thực thi, nếu có thông báo cần cập nhật tệp env, hãy tự so sánh `.example.env` và `.env`.

Nếu tệp `upgrade.sh` không tồn tại, có nghĩa phiên bản giao diện phía trước quá cũ, vui lòng tải mã nguồn về và cập nhật thủ công.

## Nâng Cấp Phần Mềm Phía Sau

Phần mềm phía sau sẽ tự động cập nhật, không cần quản lý thủ công.

Để cập nhật thủ công, hãy thực hiện lệnh sau:

```bash
docker run --rm \
-v /var/run/docker.sock:/var/run/docker.sock \
containrrr/watchtower \
--run-once \
--cleanup \
appleautopro
```
