# Nhật Ký Công Việc: Tạo Đề Bài Thực Hành AI Agent Trực Quan Hóa Dữ Liệu & Tự Động Thiết Kế Slide Báo Cáo

- **Thời gian**: 2026-10-14 16:28:00 (GMT+7)
- **Người thực hiện**: Antigravity Assistant & tuanvietdev
- **Trạng thái**: Hoàn thành

---

## 1. 🎯 Yêu Cầu / Nhiệm Vụ Đặt Ra
- Xây dựng một **tình huống đề bài thực tế**, cho học viên sử dụng **AI Agent** để tạo slide về **trực quan hóa dữ liệu**.
- Tự động sinh ra tệp dữ liệu giả lập thực tế phục vụ học viên nạp vào AI Agent để thực hiện phân tích và thiết kế slide.
- Tích hợp đề bài và tài nguyên vào trang web dự án ([Giao_dien/buoi3.html](file:///d:/AI/AI_AGENT/Giao_dien/buoi3.html)) và biên soạn tài liệu hướng dẫn độc lập cho giảng viên.

---

## 2. 🛠️ Các Hành Động Đã Thực Hiện
- **Khởi tạo tệp dữ liệu giả lập chuẩn kinh doanh đa kênh**:
  - Tạo tệp CSV [`Giao_dien/assets/du_lieu_kinh_doanh_da_kenh_2026.csv`](file:///d:/AI/AI_AGENT/Giao_dien/assets/du_lieu_kinh_doanh_da_kenh_2026.csv) gồm 36 dòng dữ liệu: 9 tháng đầu năm 2026 cho 4 kênh bán lẻ (Shopee, TikTok Shop, Website Direct, Showroom Offline).
  - Cài cắm các chỉ số thực tế: Doanh thu, Chi phí Ads, Đơn hàng, Tỷ lệ hoàn đơn, AOV, CSAT.
  - Cài đặt "nghịch lý dữ liệu" sâu sắc: TikTok Shop tăng doanh thu gấp 3.38 lần nhưng tỷ lệ hoàn hủy leo thang lên 13.4% và CSAT tụt xuống 3.9; trong khi Shopee và Website/Showroom duy trì biên lợi nhuận và độ hài lòng cực cao.
- **Biên soạn tài liệu đề bài sư phạm chi tiết**:
  - Tạo tệp [`Giao_trinh/DE_BAI_THUC_HANH_AGENT_TRUC_QUAN_HOA_SLIDE.md`](file:///d:/AI/AI_AGENT/Giao_trinh/DE_BAI_THUC_HANH_AGENT_TRUC_QUAN_HOA_SLIDE.md) gồm 6 phần: Bối cảnh doanh nghiệp, Bộ dữ liệu mẫu, Các insight cốt lõi cần tìm, Master Prompt điều phối AI Agent, Bảng Rubric tự đánh giá 5 sao và Quy trình 5 bước thực hành tại lớp.
- **Tích hợp Tab 4 vào Slide 8 của giao diện Web**:
  - Cập nhật [`Giao_dien/buoi3.html`](file:///d:/AI/AI_AGENT/Giao_dien/buoi3.html): Thêm tab nút bấm *"Tình Huống 4 (AI Agent): Trực Quan Hóa Dữ Liệu Tạo Slide"* vào thanh điều hướng bài tập.
  - Xây dựng khung hiển thị `exPane4` đồng bộ giao diện: Tích hợp nút Tải file CSV, nút Sao chép dữ liệu CSV 1-chạm, bảng dữ liệu 36 dòng, Master Prompt chuyên gia và hộp checklist nghiệm thu.

---

## 3. 📁 Các File Thay Đổi / Tạo Mới
- [Tạo mới] [`Giao_dien/assets/du_lieu_kinh_doanh_da_kenh_2026.csv`](file:///d:/AI/AI_AGENT/Giao_dien/assets/du_lieu_kinh_doanh_da_kenh_2026.csv): Tệp dữ liệu giả lập kinh doanh 9 tháng.
- [Tạo mới] [`Giao_trinh/DE_BAI_THUC_HANH_AGENT_TRUC_QUAN_HOA_SLIDE.md`](file:///d:/AI/AI_AGENT/Giao_trinh/DE_BAI_THUC_HANH_AGENT_TRUC_QUAN_HOA_SLIDE.md): Bản hướng dẫn đề bài chi tiết 6 phần.
- [Sửa] [`Giao_dien/buoi3.html`](file:///d:/AI/AI_AGENT/Giao_dien/buoi3.html): Bổ sung Tab 4 đề bài thực hành AI Agent vào Slide 8.
- [Tạo mới] [`Nhật ký/2026/10/2026-10-14_tao_de_bai_agent_truc_quan_hoa_du_lieu_slide.md`](file:///d:/AI/AI_AGENT/Nh%E1%BA%ADt%20k%C3%BD/2026/10/2026-10-14_tao_de_bai_agent_truc_quan_hoa_du_lieu_slide.md): Nhật ký phiên làm việc.
- [Sửa] [`Nhật ký/TONG_HOP_TIEN_DO.md`](file:///d:/AI/AI_AGENT/Nh%E1%BA%ADt%20k%C3%BD/TONG_HOP_TIEN_DO.md): Thêm mốc STT 16.

---

## 4. ✅ Kết Quả Đạt Được & Kiểm Thử
- Đề bài thực tế, mang tính ứng dụng cao cho dân văn phòng và nhà quản lý.
- Dữ liệu CSV giả lập sinh động, logic chặt chẽ, tạo cơ sở phân tích phong phú cho AI Agent.
- Tính năng tải file và sao chép 1-chạm trên web hoạt động mượt mà.

---

## 5. 💡 Ghi Chú & Kế Hoạch Tiếp Theo (Nếu Có)
- Giảng viên có thể hướng dẫn học viên kết hợp kết quả tạo ra từ AI Agent với **Gamma App** (`gamma.app`) để tự động kết xuất ra slide trình chiếu hoàn chỉnh trong 30 giây.
