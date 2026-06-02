# Project Business Map Parser (Module 1)

Bộ Parser mã nguồn bằng C# (.NET 8) thuộc hệ thống **Graph-Based RAG**. Chức năng cốt lõi là đọc hiểu và trích xuất các (Business Anchors) từ file định dạng Markdown (`PROJECT_MAP.md`) của sinh viên, làm tiền đề kích hoạt thuật toán Phân tích tĩnh (Static Analysis).

## Tính năng cốt lõi
- **Tiền xử lý chuỗi thông minh (Robust Stripping):** Tự động gọt sạch các ký tự định dạng Markdown (`*`, `` ` ``, `_`) để tránh lỗi phân tích.
- **Duyệt dòng chịu lỗi cao (Line-by-Line Regex):** Nhận diện chính xác cấu trúc Tech Stack và các Feature độc lập bất kể lỗi khoảng trắng hay thụt lề từ sinh viên.
- **Bóc tách Entry Point:** Tách rõ ràng cấu trúc lớp (`Class`) và phương thức xử lý (`Method`) từ chuỗi neo (ví dụ: `PaymentController.abc()`).

## Cấu trúc dữ liệu đầu ra (JSON Output)
Sau khi parse thành công, hệ thống chuyển đổi văn bản sang Object có cấu trúc:
```json
{
  "TechStack": {
    "Framework": "ASP.NET Core 8.0",
    "ThirdPartyLibraries": [ "VNPAY NetStandard SDK", "JWT" ]
  },
  "Features": [
    {
      "Name": "Thanh toán đơn hàng qua VNPAY",
      "Description": "Khách hàng nhấn nút thanh toán...",
      "HttpEndpoint": "POST /api/v1/orders/checkout",
      "EntryPoint": {
        "Class": "PaymentController",
        "Method": "abc"
      }
    }
  ]
}
