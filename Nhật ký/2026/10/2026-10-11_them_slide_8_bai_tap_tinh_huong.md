# Nhật Ký Công Việc: Thêm Slide 8 - Bộ 5 Bài Tập Tình Huống Doanh Nghiệp Thực Tế

- **Thời gian**: 2026-10-11 22:42:00 (GMT+7)
- **Người thực hiện**: Antigravity Assistant & Người dùng
- **Trạng thái**: ✅ Hoàn thành

---

## 1. 🎯 Yêu Cầu / Nhiệm Vụ Đặt Ra
- Bổ sung thêm mục số 8 (Slide 8) vào bài giảng Buổi 2: **Bài tập thực hành tổng hợp gồm 5 câu hỏi tương ứng với 5 tình huống doanh nghiệp thực tế**.
- Tích hợp giao diện trực quan, chuyển đổi tab mượt mà, phân tích bối cảnh và cung cấp nút bấm sao chép Prompt mẫu 1-chạm cho từng tình huống.

---

## 2. 🛠️ Các Hành Động Đã Thực Hiện
1. **Thiết kế chi tiết 5 tình huống công sở chuẩn hóa**:
   - **Tình huống 1 (Bài 5 Cơ bản)**: Khủng hoảng khiếu nại khách hàng VIP vì giao hàng trễ 3 ngày &rarr; Phân vai Chuyên gia CSKH 10 năm kinh nghiệm, lập Kịch bản gọi điện 1:1 và Bảng phương án bồi thường.
   - **Tình huống 2 (Bài 6 Cơ bản)**: Lập Đề án cắt giảm 15% OPEX Quý 4 có ràng buộc nghiêm cấm sa thải nhân viên &rarr; Áp dụng Quy trình kiểm soát 4 bước và Prompt Khóa xác nhận ép AI dừng lại chờ duyệt.
   - **Tình huống 3 (Bài 6 Cơ bản)**: Rà soát lỗ hổng Quy chế Thưởng nóng KPI phòng Kinh doanh &rarr; Kỹ thuật Phản biện AI (Đặt câu hỏi ngược), đổi vai sang Trưởng ban Kiểm soát & Kế toán trưởng để bóc tách gian lận số liệu và rủi ro thuế.
   - **Tình huống 4 (Bài 2 & 3 Mở rộng)**: Email báo cáo sự cố âm thanh và đo lường ROI hội thảo Webinar (+28 học viên, ROI x11.2 lần) gửi Giám đốc Điều hành &rarr; Báo cáo định lượng, thẳng thắn nhìn nhận điểm nghẽn và đưa kèm giải pháp cứu vãn.
   - **Tình huống 5 (Bài 1 Mở rộng)**: Hợp đồng Dịch vụ thuê Agency chạy Ads 6 tháng &rarr; Master Prompt Pháp chế am hiểu Luật Thương mại, cam kết CPA, điều khoản bảo mật dữ liệu khách hàng (NDA) và xuất link tải file Word (.docx) chuẩn A4.
2. **Triển khai Mã nguồn Giao diện & Logic**:
   - Cập nhật [Giao_dien/style.css](file:///d:/AI/AI_AGENT/Giao_dien/style.css): Thêm CSS cho hệ thống Tab chuyển đổi (`.exercise-nav`, `.exercise-tab-btn`, `.exercise-pane`).
   - Cập nhật [Giao_dien/buoi2.js](file:///d:/AI/AI_AGENT/Giao_dien/buoi2.js): Tăng `totalSlides = 8`, thêm nội dung teleprompter Giảng viên cho Slide 8 và sự kiện chuyển đổi tab mượt mà.
   - Cập nhật [Giao_dien/buoi2.html](file:///d:/AI/AI_AGENT/Giao_dien/buoi2.html): Chèn cấu trúc HTML Slide 8 gồm 5 tab tình huống tương tác có sẵn code prompt và nút sao chép 1-chạm.
   - Đồng bộ hóa toàn bộ các file sang thư mục gốc.
   - Cập nhật [README.md](file:///d:/AI/AI_AGENT/README.md).

---

## 3. 📁 Các File Thay Đổi / Tạo Mới
- [Cập nhật] [Giao_dien/buoi2.html](file:///d:/AI/AI_AGENT/Giao_dien/buoi2.html) & [buoi2.html](file:///d:/AI/AI_AGENT/buoi2.html): Thêm Slide 8 với 5 tab tình huống.
- [Cập nhật] [Giao_dien/buoi2.js](file:///d:/AI/AI_AGENT/Giao_dien/buoi2.js) & [buoi2.js](file:///d:/AI/AI_AGENT/buoi2.js): Nâng lên 8 slides, thêm speaker notes & logic tab.
- [Cập nhật] [Giao_dien/style.css](file:///d:/AI/AI_AGENT/Giao_dien/style.css) & [style.css](file:///d:/AI/AI_AGENT/style.css): Thêm style exercise tabs.
- [Cập nhật] [README.md](file:///d:/AI/AI_AGENT/README.md): Cập nhật tổng quan Slide 8 Buổi 2.
- [Tạo mới] [Nhật ký/2026/10/2026-10-11_them_slide_8_bai_tap_tinh_huong.md](file:///d:/AI/AI_AGENT/Nh%E1%BA%ADt%20k%C3%BD/2026/10/2026-10-11_them_slide_8_bai_tap_tinh_huong.md): Bản ghi chi tiết.
- [Cập nhật] [Nhật ký/TONG_HOP_TIEN_DO.md](file:///d:/AI/AI_AGENT/Nh%E1%BA%ADt%20k%C3%BD/TONG_HOP_TIEN_DO.md): Thêm mốc công việc số 06.

---

## 4. ✅ Kết Quả Đạt Được & Kiểm Thử
- Kiểm tra cú pháp HTML: Đủ 8 slides (`1` đến `8`), 0 thẻ lỗi.
- Thanh chỉ số slide pills tự động sinh 8 nút điều hướng, chuyển đổi tab tình huống nhanh chóng, hỗ trợ sao chép từng prompt mẫu chỉ với 1 click.
