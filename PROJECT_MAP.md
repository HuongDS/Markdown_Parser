# (PROJECT BUSINESS MAP)

## 1. Cấu hình Công nghệ (Tech Stack)

- **Framework:** ASP.NET Core ahihi
- **Third-party Libraries:** VNPAY NetStandard SDK, BCrypt.Net, JWT

## 2. (Business Features)

### [FEATURE]: Payment through VNPAY

- **Business Logic:** Khách hàng nhấn nút thanh toán từ giỏ hàng. Hệ thống tiếp nhận thông tin đơn hàng, tính tổng tiền, cấu hình các tham số bảo mật (Hash) rồi tạo đường link chuyển hướng người dùng sang cổng thanh toán VNPAY.
- **HTTP Endpoint:** `POST /api/v1/orders/checkout`
- **(Entry Point):** `PaymentController.abc()`

### [FEATURE]: (Authentication)

- **Business Logic:** Người dùng nhập Email và Mật khẩu. Hệ thống kiểm tra tài khoản, mã hóa đối chiếu mật khẩu với cơ sở dữ liệu, nếu trùng khớp sẽ tiến hành cấp mã Token JWT để người dùng truy cập các API bảo mật.
- **HTTP Endpoint:** `POST /api/v1/auth/login`
- **(Entry Point):** `AuthController.Login()`
