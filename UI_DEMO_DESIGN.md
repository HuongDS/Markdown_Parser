# Project Business Map Parser - UI Demo Design

Tệp Markdown này mô tả chi tiết giao diện người dùng (UI) cho dự án **Markdown Parser**. Dựa vào mô tả này, bạn có thể đưa vào các công cụ sinh giao diện (như v0.dev, Stitch, Cursor, v.v.) để tự động tạo ra một giao diện hoàn chỉnh.

## 1. Tổng quan giao diện (Overview)
- **Tên ứng dụng:** ProjectMap Dashboard
- **Mục đích:** Cung cấp giao diện trực quan cho công cụ `ProjectMapParser`. Người dùng có thể tải lên tệp `PROJECT_MAP.md` hoặc dán trực tiếp nội dung Markdown, sau đó hệ thống sẽ tự động phân tích cú pháp (parse) và hiển thị kết quả dưới dạng một Dashboard quản lý dự án trực quan (dựa trên các DTOs: `ProjectBusinessMap`, `TechStack`, `BusinessFeature`, `EntryPoint`).
- **Phong cách thiết kế (Design Aesthetics):** 
  - Phong cách hiện đại, tối giản (Modern & Minimalist), giao diện kính (Glassmorphism) nhẹ.
  - Chế độ màu: Hỗ trợ Light/Dark mode, nhưng mặc định là một giao diện Dark Mode bóng bẩy với màu chủ đạo là Xanh dương đậm (Navy Blue) điểm xuyết bằng màu Tím / Xanh lơ (Cyan) cho các hiệu ứng neon gradient.
  - Sử dụng phông chữ hiện đại: `Inter` hoặc `Outfit`.
  - Có các viền cong (border-radius: 12px đến 16px) và đổ bóng mượt mà (soft shadows).

## 2. Bố cục trang (Layout Structure)

Trang web được chia làm hai cột (ở màn hình desktop) hoặc xếp chồng (ở màn hình mobile):
- **Cột bên trái (Input Section - 40% width):** Khu vực nhập dữ liệu Markdown.
- **Cột bên phải (Output Dashboard - 60% width):** Khu vực hiển thị kết quả đã được Parse.

### A. Cột bên trái: Khu vực nhập liệu (Markdown Input)
- **Tiêu đề:** "Nhập nội dung PROJECT_MAP.md"
- **Thành phần:**
  - Một khu vực kéo thả tệp (Drag & Drop zone) có viền đứt nét (dashed border), biểu tượng đám mây và dòng chữ "Kéo thả file .md vào đây hoặc nhấn để chọn file".
  - Hoặc một khung nhập liệu văn bản (Textarea) lớn, hỗ trợ monospace font để dán mã Markdown trực tiếp. Textarea này nên có thanh cuộn (scrollbar) được tuỳ biến đẹp mắt.
  - Nút **"Phân tích cú pháp" (Parse Map)**: Nút bấm to, nổi bật, có hiệu ứng hover gradient (chuyển từ Xanh dương sang Tím).

### B. Cột bên phải: Dashboard Kết quả (Parsed DTOs)
Khi chưa có dữ liệu, hiển thị một trạng thái rỗng (Empty State) với một biểu tượng 3D hoặc hình minh họa mờ nhạt kèm chữ "Hãy phân tích một file Markdown để xem kết quả".

Khi có dữ liệu (Ví dụ dữ liệu được lấy từ file `PROJECT_MAP.md` của dự án), sẽ chia thành 2 phần chính:

#### Phần B1: Cấu hình Công nghệ (Tech Stack)
- Trực quan hóa DTO `TechStack`.
- **Giao diện:** Một Thẻ (Card) bo góc mượt, nền bán trong suốt (translucent background).
- Bên trong Card:
  - **Framework:** Hiển thị nổi bật bằng một huy hiệu (Badge/Tag) lớn. Ví dụ: `[ASP.NET Core]`.
  - **Third-party Libraries:** Hiển thị thành một danh sách các Tag nhỏ, nhiều màu sắc (ví dụ: `VNPAY NetStandard SDK`, `BCrypt.Net`, `JWT`). Có hiệu ứng micro-animation (hơi nảy lên) khi di chuột vào từng tag.

#### Phần B2: Chức năng Nghiệp vụ (Business Features)
- Trực quan hóa danh sách `List<BusinessFeature>`.
- **Giao diện:** Hiển thị dưới dạng Grid (lưới) hoặc một danh sách các Thẻ (Feature Cards). Mỗi tính năng nghiệp vụ sẽ là một Card riêng biệt.
- **Cấu trúc của một Feature Card:**
  - **Header của thẻ:**
    - Tên tính năng (tương ứng thuộc tính `Name`). Ví dụ: *"Payment through VNPAY"*. Chữ in đậm, kích thước lớn.
  - **Body của thẻ:**
    - **Mô tả (Business Logic):** Đoạn văn bản mô tả logic nghiệp vụ (tương ứng thuộc tính `Description`). Text màu xám nhạt (text-gray-300).
    - **HTTP Endpoint:** Được đặt trong một khối chữ nhật giống giao diện Swagger. Ví dụ: 
      - Có một thẻ nhỏ chữ `POST` nền màu xanh lá cây (màu đặc trưng của phương thức POST).
      - Đường dẫn `/api/v1/orders/checkout` font monospace, nền đen xám.
    - **Entry Point:** Hiển thị dưới dạng mã code hoặc đường dẫn hàm. Ví dụ:
      - Icon của file C#.
      - Text monospace: `PaymentController.abc()` (được kết hợp từ DTO `EntryPoint.Class` và `EntryPoint.Method`).

## 3. Hoạt ảnh & Trải nghiệm người dùng (Animations & UX)
- **Hiệu ứng Load:** Khi nhấn "Parse Map", hiển thị trạng thái đang phân tích bằng một spinner hiện đại hoặc các dòng code chạy giả lập trong 1 giây trước khi hiển thị Cột bên phải.
- **Fade In:** Các Feature Cards ở cột bên phải sẽ xuất hiện lần lượt với hiệu ứng `Fade In Up` (từ từ hiện lên và trượt nhẹ từ dưới lên), tạo cảm giác mượt mà và cao cấp.
- **Hover Effects:** Khi di chuột vào các thẻ Feature Card, thẻ sẽ có viền sáng (glow border) hoặc nhích nhẹ lên trên (`transform: translateY(-4px)`).

## 4. Dữ liệu Mẫu (Sample Data Mockup)
Dữ liệu mẫu này được trích xuất trực tiếp từ file `PROJECT_MAP.md` gốc để công cụ sinh UI có thể preview:

**Tech Stack:**
- Framework: ASP.NET Core ahihi
- Libraries: VNPAY NetStandard SDK, BCrypt.Net, JWT

**Features:**
1. **Name:** Payment through VNPAY
   - **Business Logic:** Khách hàng nhấn nút thanh toán từ giỏ hàng. Hệ thống tiếp nhận thông tin đơn hàng, tính tổng tiền, cấu hình các tham số bảo mật (Hash) rồi tạo đường link chuyển hướng người dùng sang cổng thanh toán VNPAY.
   - **Endpoint:** POST `/api/v1/orders/checkout`
   - **Entry:** `PaymentController.abc()`

2. **Name:** Authentication
   - **Business Logic:** Người dùng nhập Email và Mật khẩu. Hệ thống kiểm tra tài khoản, mã hóa đối chiếu mật khẩu với cơ sở dữ liệu, nếu trùng khớp sẽ tiến hành cấp mã Token JWT để người dùng truy cập các API bảo mật.
   - **Endpoint:** POST `/api/v1/auth/login`
   - **Entry:** `AuthController.Login()`
