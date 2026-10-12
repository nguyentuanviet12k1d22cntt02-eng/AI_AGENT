# Khóa Học: Nền Tảng AI & Kỷ Nguyên AI Agent Thực Chiến

> **Hệ Thống Bài Giảng Tương Tác Web**: Dành riêng cho Dân Văn Phòng, Chuyên Viên & Quản Lý Doanh Nghiệp.
> - **Buổi 01**: Giải Mã Mô Hình AI (Next-Token Prediction & Nền Tảng AI Agent)
> - **Buổi 02**: Tư Duy Quản Lý Thực Chiến & Bộ 3 Vũ Khí Khởi Tạo Văn Bản Doanh Nghiệp

---

## 🌟 Tổng Quan Chương Trình Học

### 🟢 BUỔI 01: GIẢI MÃ MÔ HÌNH HOẠT ĐỘNG CỦA AI (`index.html`)
1. **Slide 1: Bản Chất LLM (Next-Token Prediction)**: Case study đếm chữ cái `r` và bẫy Tokenization.
2. **Slide 2: Minh Chứng Thực Tế (ChatGPT vs Gemini)**: Đối đầu "trong xanh" vs "sấm sét" & tham số Temperature.
3. **Slide 3: Cơ Chế Tích Lũy Ngữ Cảnh (Context Window)**: Sơ đồ vector Multi-turn, Cut-off Line & Lost in the Middle.
4. **Slide 4: Tư Duy Điều Khiển AI Chuẩn Quản Lý**: Công thức khóa xác suất `[Nhiệm vụ] + [Ngữ cảnh] + [Tham chiếu]`.
5. **Slide 5: Bộ 4 Kỹ Thuật Prompt & 2 Video Thực Hành**: ChatGPT Projects & Gemini Skills (`SKILL.md`) + Canvas.
6. **Slide 6: Cầu Nối Sang Kỷ Nguyên AI Agent**: Chatbot thụ động vs AI Agent 4 khối (`LLM + Planning + Memory + Tools`).
7. **Slide 7: Tổng Kết 3 Chân Lý & Thử Thách Về Nhà**: Lập Kế Hoạch Tuần bằng tương tác đảo ngược.

### 🔵 BUỔI 02: TƯ DUY QUẢN LÝ & KHỞI TẠO VĂN BẢN DOANH NGHIỆP (`buoi2.html`)
1. **Slide 1: Nâng Cấp Vị Thế**: Từ "Người hỏi thụ động" sang "Người quản lý thực tập sinh AI".
2. **Slide 2: Bộ 5 Quy Tắc Vàng Giao Việc Văn Phòng** *(Bài 5 Cơ Bản - Trang 18-19)*: 3 Chân kiềng đầu vào & Tư duy đa bước.
3. **Slide 3: Ma Trận 6 Kỹ Thuật Đánh Giá & Phản Biện AI** *(Bài 6 Cơ Bản - Trang 20-22)*: Câu hỏi ngược ép AI tự vạch lá tìm sâu.
4. **Slide 4: Quy Trình Kiểm Soát Chuẩn 4 Bước** *(Bài 6 Cơ Bản - Trang 23)*: Pipeline 4 bước & Prompt Khóa xác nhận 1-chạm.
5. **Slide 5: Thực Chiến 1 - Email Báo Cáo Tuần Đo Lường KPI** *(Bài 3 Mở Rộng - Trang 8-9)*: Số liệu định lượng (+20% tương tác, 35 leads) & gửi Gmail.
6. **Slide 6: Thực Chiến 2 - Báo Cáo Công Việc Ngày Chuẩn 5 Khối** *(Bài 2 Mở Rộng - Trang 6-7)*: Cấu trúc 5 khối hành chính, copy không lỗi sang MS Word.
7. **Slide 7: Thực Chiến 3 - Master Prompt HĐLĐ Pháp Lý & Xuất File Word** *(Bài 1 Mở Rộng - Trang 4-5)*: HR 15 năm kinh nghiệm, chuẩn Bộ luật Lao động, xuất link tải file Word `.docx` & 3 Chân lý tổng kết.
8. **Slide 8: Bộ 5 Bài Tập Tình Huống Doanh Nghiệp Thực Tế**: 5 Tình huống công sở (CSKH khiếu nại, Đề án cắt giảm OPEX Q4, Phản biện quy chế thưởng KPI, Email báo cáo sự cố Webinar & Hợp đồng Agency Ads 6 tháng) có tabs tương tác và nút copy prompt 1-chạm.

---

## 🚀 Hướng Dẫn Cài Đặt & Chạy Trực Tiếp

1. Mở thư mục `Giao_dien` (hoặc thư mục gốc dự án):
   ```bash
   cd Giao_dien
   ```
2. Khởi chạy Web Server cục bộ:
   ```bash
   python -m http.server 8085
   ```
3. Mở trình duyệt và truy cập:
   - Buổi 1: `http://localhost:8085/index.html`
   - Buổi 2: `http://localhost:8085/buoi2.html`
   *(Có thể nhấp chuyển đổi trực tiếp giữa Buổi 1 & Buổi 2 ngay trên thanh Top Navigation)*.

---

## 📂 Cấu Trúc File Chính

```
d:\AI\AI_AGENT/
├── index.html                                        # Giao diện trình chiếu Buổi 1 (7 slides)
├── buoi2.html                                        # Giao diện trình chiếu Buổi 2 (7 slides)
├── style.css                                         # Flat minimal modern design system (Apple/Vercel Light)
├── app.js                                            # Logic điều hướng slide & teleprompter Buổi 1
├── buoi2.js                                          # Logic điều hướng slide & teleprompter Buổi 2
├── Giao_dien/                                        # Bản sao đồng bộ của ứng dụng web
├── Giao_trinh/                                       # Tài liệu giáo trình PDF gốc & giáo án
│   ├── UNG-DUNG-AI-TRONG-VAN-PHONG-CO-BAN-KY-NANG-GIAO-TIEP-1 (2).pdf
│   ├── UNG-DUNG-AI-TRONG-VAN-PHONG-MO-RONG.pdf
│   └── GIAO_AN_BUOI_2.md
├── assets/                                           # Hình ảnh minh họa, bằng chứng đối đầu & vector
├── video/                                            # Video thực hành đã lồng tiếng AI tiếng Việt
└── Nhật ký/                                          # Nhật ký tiến độ và dòng thời gian dự án
```
