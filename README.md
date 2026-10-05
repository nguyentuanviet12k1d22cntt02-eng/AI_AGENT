# Khóa Học: Nền Tảng AI & Kỷ Nguyên AI Agent Thực Chiến

> **Bài Giảng Tương Tác 6 Slides**: Mô hình hoạt động của AI (LLM Next-Token Prediction) và bước đệm tiến vào kỷ nguyên AI Agent dành cho Dân Văn Phòng & Quản Lý.

---

## 🌟 Tổng Quan Nội Dung Giáo Trình (Slide 1 - Slide 6)

1. **Slide 1: Bản Chất LLM (Next-Token Prediction)**:
   - Case study thực tế: Đếm chữ cái `r` trong chuỗi và giải mã kỹ thuật Tokenization, Attention Hijacking.
   - 3 quy tắc thực chiến cho người làm văn phòng: Khoanh vùng cụ thể, Đóng khung đầu ra, Xác nhận trước khi chốt số.
2. **Slide 2: Minh Chứng Thực Tế (ChatGPT vs Gemini)**:
   - "Trong xanh" vs "Sấm sét": AI không nhìn thấy bầu trời thật mà chỉ chọn từ theo phân phối xác suất và nhiệt độ (Temperature).
3. **Slide 3: Tư Duy Điều Khiển AI Chuẩn Quản Lý (Giáo Trình Trang 18-25)**:
   - Xem AI là thực tập sinh mới vào nghề.
   - Tư duy đa bước (*Multi-step*).
   - Công thức khóa xác suất: `[Nhiệm vụ] + [Ngữ cảnh] + [Tham chiếu]`.
   - Kỹ thuật Tương tác đảo ngược (*Reverse Interaction*).
4. **Slide 4: Bộ 4 Kỹ Thuật Prompt Engineering & 2 Video Thực Hành**:
   - 4 Kỹ thuật: Phân vai (*Role*), Mẫu chuẩn (*Few-Shot*), Suy luận từng bước (*Step-by-Step*), Đóng khung & Lệnh cấm (*Negative Constraints*).
   - **🎬 Video Thực Hành 1 (3:03)**: Tạo Dự án, nạp tài liệu tri thức nội bộ & chia sẻ nhóm trên *ChatGPT Projects*.
   - **🎬 Video Thực Hành 2 (3:33)**: Nạp file `SKILL.md` (CMO Assistant), phân tích 400 đơn hàng thực tế & tự động tạo Web Canvas Dashboard tương tác trên *Gemini*.
5. **Slide 5: Cầu Nối Sang Kỷ Nguyên AI Agent**:
   - So sánh: Chatbot thuần túy (*"Bộ não ngâm trong lọ thủy tinh"*) vs Hệ sinh thái AI Agent 4 khối (*LLM + Planning + Memory + Tools*).
6. **Slide 6: Tổng Kết 3 Chân Lý & Thử Thách Về Nhà**:
   - 3 Chân lý khắc cốt ghi tâm.
   - Thử thách thực chiến: Lập Kế Hoạch Tuần bằng kỹ thuật tương tác đảo ngược (có nút sao chép prompt 1 chạm).

---

## 🚀 Hướng Dẫn Cài Đặt & Chạy Trực Tiếp

1. Mở thư mục `Giao_dien`:
   ```bash
   cd Giao_dien
   ```
2. Khởi chạy Web Server cục bộ:
   ```bash
   python -m http.server 8085
   ```
3. Mở trình duyệt và truy cập:
   ```
   http://localhost:8085/index.html
   ```

---

## 📂 Cấu Trúc Thư Mục `Giao_dien/`

```
Giao_dien/
├── index.html                                        # Giao diện chính 6 slides tương tác
├── style.css                                         # Flat minimal modern design system
├── app.js                                            # Điều hướng slide, kịch bản giảng viên & logic âm thanh
├── assets/                                           # Hình ảnh minh họa, bằng chứng đối đầu & poster video
│   ├── chatgpt_count_r_bug.png
│   ├── chatgpt_trongxanh.png
│   ├── gemini_samset.png
│   ├── video_poster.jpg
│   └── skill_video_poster.jpg
└── video/                                            # Video thực hành đã biên tập (Mute, Thuyết minh AI & Vietsub)
    ├── Huong_dan_su_dung_ChatGPT_Project_Thuyet_minh.mp4
    └── Huong_dan_tao_va_su_dung_SKILL_Thuyet_minh.mp4
```
