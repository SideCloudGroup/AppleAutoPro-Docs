# Cài Đặt Phần Mềm Phía Sau

## Lưu Ý

### Yêu Cầu Môi Trường

Phần mềm phía sau chạy dựa trên Docker, script cài đặt sẽ tự động kiểm tra xem Docker có được cài đặt hay không.

### Selenium

Phần mềm phía sau cần gọi Webdriver để thực hiện nhiệm vụ, bạn có thể hiểu nó như một trình duyệt.

Selenium có hai phương thức triển khai: nút đơn (standalone) và cụm (grid).

#### Nút Đơn (standalone)

**Script cài đặt phía sau bao gồm chức năng triển khai nút đơn, chỉ cần chọn triển khai khi chạy.**

**Để sử dụng Selenium trên thiết bị ARM, vui lòng tham khảo** [**seleniarm/standalone-chromium**](https://hub.docker.com/r/seleniarm/standalone-chromium)

#### Cụm (grid)

Selenium Grid cần một bộ điều khiển trung tâm (Hub) và cho phép triển khai các nút (Node) trên nhiều máy chủ. Hub nhận yêu cầu và tự động phân phối Node, thực hiện cân bằng tải, truy cập nhiều IP, v.v.

Để triển khai cụm, bạn có thể sử dụng script triển khai nhanh. Hãy tham khảo [sahuidhsu/selenium-grid-docker](https://github.com/sahuidhsu/selenium-grid-docker) (script này hỗ trợ triển khai trên x86\_64 và arm). Nếu triển khai cụm, vui lòng không chọn triển khai nút đơn Selenium khi cài đặt phần mềm phía sau.

## Cài Đặt Phần Mềm Phía Sau Bằng Một Cú Click

```bash
bash <(curl -Ls https://raw.githubusercontent.com/SideCloudGroup/AppleAutoPro-Backend/main/install.sh)
```

Chỉ cần theo hướng dẫn để nhập các tham số khi cài đặt.\
Mặc định sẽ triển khai một container Docker với tên **appleautopro**, đây là **`quản lý phía sau`**.\
appleauto sẽ tự động nhận nhiệm vụ và triển khai một **`container nhiệm vụ`** cho mỗi nhiệm vụ.\
Chạy **docker logs appleautopro** để xem nhật ký của **`quản lý phía sau`**.

Để xem nhật ký của **container nhiệm vụ**, hãy chạy **docker ps -a** trước, những container có tên theo định dạng "apple-auto\_X" là container nhiệm vụ, trong đó X đại diện cho ID tài khoản. Sử dụng **docker logs apple-auto\_X** để xem nhật ký.
