# Sửa Lỗi Hiển Thị Ngôn Ngữ

Nếu gặp sự cố với việc tải ngôn ngữ (như hình dưới), đây là lỗi của Thinkphp, vui lòng thực hiện theo hướng dẫn này để sửa lỗi.

<figure><img src="../.gitbook/assets/image.png" alt=""><figcaption></figcaption></figure>

Mở file `Lang.php` tại đường dẫn `thư mục gốc/vendor/topthink/framework/src/think/` và tìm nội dung sau:

```php
protected $config = [
    // Ngôn ngữ mặc định
    'default_lang'    => 'zh-cn',
    // Danh sách ngôn ngữ được chấp nhận
    'allow_lang_list' => [],
    // Sử dụng Cookie để ghi nhớ
    'use_cookie'      => true,
    // Mở rộng gói ngôn ngữ
    'extend_list'     => [],
    // Biến cookie ngôn ngữ
    'cookie_var'      => 'think_lang',
    // Biến header ngôn ngữ
    'header_var'      => 'think-lang',
    // Tự động phát hiện biến ngôn ngữ
    'detect_var'      => 'lang',
    // Chuyển đổi Accept-Language thành tên gói ngôn ngữ tương ứng
    'accept_language' => [],
    // Hỗ trợ nhóm ngôn ngữ
    'allow_group'     => false,
];
```

Bạn cần chỉnh sửa ba tham số đầu. Nếu muốn cố định ngôn ngữ là en-us, hãy sửa như sau:

```php
protected $config = [
    // Ngôn ngữ mặc định
    'default_lang'    => 'en-us', // Thay đổi thành ngôn ngữ mong muốn
    // Danh sách ngôn ngữ được chấp nhận
    'allow_lang_list' => ['en-us'], // Chỉ bao gồm ngôn ngữ này trong mảng
    // Sử dụng Cookie để ghi nhớ
    'use_cookie'      => false, // Tắt tự động nhận diện ngôn ngữ
    // Mở rộng gói ngôn ngữ
    'extend_list'     => [],
    // Biến cookie ngôn ngữ
    'cookie_var'      => 'think_lang',
    // Biến header ngôn ngữ
    'header_var'      => 'think-lang',
    // Tự động phát hiện biến ngôn ngữ
    'detect_var'      => 'lang',
    // Chuyển đổi Accept-Language thành tên gói ngôn ngữ tương ứng
    'accept_language' => [],
    // Hỗ trợ nhóm ngôn ngữ
    'allow_group'     => false,
];
```

Lưu file, xóa Cookies, làm mới trang web, hoàn tất.
