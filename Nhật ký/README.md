# HƯỚNG DẪN & QUY CHUẨN GHI NHẬT KÝ DỰ ÁN

Hệ thống nhật ký được thiết lập nhằm lưu vết toàn bộ tiến độ, các thay đổi kỹ thuật, sửa đổi nội dung và quyết định kiến trúc trong dự án **AI & AI Agent Workshop**.

---

## 📂 Cấu Trúc Thư Mục Nhật Ký

```
Nhật ký/
├── README.md               # Quy định & quy chuẩn ghi nhật ký (file này)
├── TONG_HOP_TIEN_DO.md      # Bảng tổng kết dòng thời gian tiến độ dự án (Timeline & Changelog)
├── templates/
│   └── mau_nhat_ky.md      # Biểu mẫu chuẩn dùng cho mỗi phiên làm việc
└── [Năm]/                  # Ví dụ: 2026/
    └── [Tháng]/            # Ví dụ: 10/
        └── YYYY-MM-DD_[ten_cong_viec].md
```

---

## 📋 Quy Chuẩn Ghi Chép Bắt Buộc

Cứ sau mỗi lần hoàn thành một công việc hoặc yêu cầu từ người dùng, trợ lý AI sẽ tự động:

1. **Tạo / Cập nhật file chi tiết** theo định dạng `[Năm]/[Tháng]/YYYY-MM-DD_[noi_dung].md` sử dụng biểu mẫu từ `templates/mau_nhat_ky.md`.
2. **Cập nhật dòng tóm tắt** vào bảng mốc thời gian trong `TONG_HOP_TIEN_DO.md`.

### Nội dung mỗi bản ghi nhật ký gồm:
- **Thời gian thực hiện**: Ngày & giờ chính xác.
- **Yêu cầu / Mục tiêu**: Tóm lược nhiệm vụ người dùng yêu cầu.
- **Hành động & Giải pháp**: Chi tiết các bước đã tiến hành (code, tối ưu, sửa lỗi, tạo tài nguyên).
- **Danh sách file thay đổi**: Đường dẫn link file cụ thể.
- **Kết quả & Kiểm thử**: Kết quả đạt được, trạng thái hoạt động.
- **Bước tiếp theo (nếu có)**: Các việc còn tồn đọng hoặc khuyến nghị.
