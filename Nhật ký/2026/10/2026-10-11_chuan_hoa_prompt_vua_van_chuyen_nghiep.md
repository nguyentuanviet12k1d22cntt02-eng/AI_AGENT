# Nhật Ký Công Việc: Chuẩn Hóa Bộ Prompt Bài Tập Vừa Vặn & Đạt Chuẩn Doanh Nghiệp

- **Thời gian**: 2026-10-11 23:12:00 (GMT+7)
- **Người thực hiện**: Antigravity Assistant & Người dùng
- **Trạng thái**: ✅ Hoàn thành

---

## 1. 🎯 Yêu Cầu / Nhiệm Vụ Đặt Ra
- Người dùng phản hồi: *"ngắn thì cũng đừng ngắn quá, vừa vừa mà đủ chuyên nghiệp cho tôi"*.
- Định hướng chuẩn hóa:
  - Tránh 2 thái cực: Quá hàn lâm, dài dòng lê thê (15-20 dòng) VÀ Quá cộc lốc, khẩu ngữ thiếu tính chuyên nghiệp (1-3 dòng).
  - Tìm điểm cân bằng vàng (Goldilocks Zone): **Độ dài vừa vặn từ 5 - 8 dòng**, có cấu trúc 3 phần rõ ràng:
    1. *Vai trò / Bối cảnh nghiệp vụ*.
    2. *Dữ liệu số thực tế & Điều kiện ràng buộc rủi ro*.
    3. *Đầu ra chuyên nghiệp & Quy chuẩn trình bày*.

---

## 2. 🛠️ Các Hành Động & Giải Pháp Kỹ Thuật Đã Triển Khai
1. **Tái cấu trúc 5 Prompt bài tập thực hành theo chuẩn mực doanh nghiệp:**
   - **Tình huống 1 (CSKH xử lý khủng hoảng giao trễ)**:
     - Giao việc từ góc độ Trưởng nhóm CSKH, xử lý đơn sinh nhật của khách VIP trễ 3 ngày.
     - Yêu cầu kịch bản gọi điện (đồng cảm - nhận trách nhiệm - giải pháp) và bảng đền bù (voucher, quà bù đắp, freeship).
     - Văn phong khéo léo, ưu tiên giữ chân khách hàng.
   - **Tình huống 2 (Đề án cắt giảm OPEX Q4 - Khóa xác nhận)**:
     - Bài toán cắt giảm 15% OPEX Quý 4 với ràng buộc cấm sa thải nhân viên & không giảm lương.
     - Áp dụng lệnh khóa 2 bước chặt chẽ: Bước 1 tóm tắt nhóm chi phí tiềm năng & dàn ý; Bước 2 DỪNG LẠI chờ duyệt mới viết chi tiết.
   - **Tình huống 3 (Phản biện ngược Quy chế thưởng nóng KPI)**:
     - Đóng vai Kiểm soát nội bộ thẩm định quy chế thưởng 10% doanh thu thuần ngày 5 tháng sau.
     - Vạch 3 kẽ hở gian lận (hợp đồng ảo hủy đơn sau nhận thưởng, nợ xấu, ghi nhận doanh thu non) và viết 3 điều khoản bịt lỗ hổng trước khi trình Tổng Giám Đốc.
   - **Tình huống 4 (Email báo cáo kết quả & sự cố Webinar)**:
     - Đóng vai Trưởng nhóm Marketing báo cáo số liệu thực tế (5tr chi phí, 120 khách, 28 chốt đơn, 56tr doanh thu).
     - Báo cáo sự cố rè mic 10 phút đầu (15 khách thoát) và hành động cứu vãn (gửi video recap + voucher 15% kéo lại được 4 người).
     - Định dạng chuẩn 3 khối: Kết quả - Sự cố - Giải pháp.
   - **Tình huống 5 (Hợp đồng dịch vụ Agency Ads & Xuất Word)**:
     - Đóng vai Chuyên viên Pháp chế, nêu rõ bên A, bên B, thời hạn 6 tháng, phí 30tr/tháng.
     - Ràng buộc KPI CPA và điều khoản bảo mật dữ liệu khách hàng.
     - Yêu cầu xuất đầy đủ điều khoản và bảng chữ ký để copy hoàn chỉnh sang Microsoft Word.

2. **Cập nhật & Đồng bộ Giao diện**:
   - Thẻ hiển thị: `<span class="case-tag tag-primary"><i class="fa-solid fa-terminal"></i> Prompt Chuẩn Doanh Nghiệp (Copy 1-Chạm)</span>`.
   - Giữ nguyên cỡ chữ code preview `0.90rem` giãn dòng `1.65` để văn bản thoáng đãng, sang trọng.
   - Đồng bộ hoàn chỉnh giữa [Giao_dien/buoi2.html](file:///d:/AI/AI_AGENT/Giao_dien/buoi2.html) và [buoi2.html](file:///d:/AI/AI_AGENT/buoi2.html).

3. **Cập nhật Kịch bản Giảng viên (Teleprompter) & Giáo án**:
   - Cập nhật [buoi2.js](file:///d:/AI/AI_AGENT/Giao_dien/buoi2.js): Nhấn mạnh tiêu chuẩn vàng về độ dài lý tưởng 5-8 dòng và tính chuyên nghiệp trong giao việc cho AI.
   - Đồng bộ Phần 8 trong [Giao_trinh/GIAO_AN_BUOI_2.md](file:///d:/AI/AI_AGENT/Giao_trinh/GIAO_AN_BUOI_2.md).

---

## 3. 📁 Các File Thay Đổi / Tạo Mới
- [Cập nhật] [Giao_dien/buoi2.html](file:///d:/AI/AI_AGENT/Giao_dien/buoi2.html)
- [Cập nhật] [buoi2.html](file:///d:/AI/AI_AGENT/buoi2.html)
- [Cập nhật] [Giao_dien/buoi2.js](file:///d:/AI/AI_AGENT/Giao_dien/buoi2.js)
- [Cập nhật] [buoi2.js](file:///d:/AI/AI_AGENT/buoi2.js)
- [Cập nhật] [Giao_trinh/GIAO_AN_BUOI_2.md](file:///d:/AI/AI_AGENT/Giao_trinh/GIAO_AN_BUOI_2.md)
- [Tạo mới] [Nhật ký/2026/10/2026-10-11_chuan_hoa_prompt_vua_van_chuyen_nghiep.md](file:///d:/AI/AI_AGENT/Nh%E1%BA%ADt%20k%C3%BD/2026/10/2026-10-11_chuan_hoa_prompt_vua_van_chuyen_nghiep.md)
- [Cập nhật] [Nhật ký/TONG_HOP_TIEN_DO.md](file:///d:/AI/AI_AGENT/Nh%E1%BA%ADt%20k%C3%BD/TONG_HOP_TIEN_DO.md)

---

## 4. ✅ Kết Quả Đạt Được & Kiểm Thử
- Bộ prompt đạt độ dài lý tưởng: Mỗi prompt từ 5 đến 8 dòng, vừa vặn trên 1 màn hình preview không bị ngợp và cũng không bị sơ sài.
- Văn phong chuẩn công sở, thể hiện rõ tư duy của cấp quản lý / chuyên viên có năng lực khi giao việc cho AI.
- Nút Copy 1-chạm hoạt động trơn tru.
