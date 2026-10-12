# Nhật Ký Công Việc: Tối Giản Hóa Prompt Bài Tập Tình Huống (Dạng Khẩu Ngữ Tự Nhiên - Gõ 10 Giây)

- **Thời gian**: 2026-10-11 23:02:00 (GMT+7)
- **Người thực hiện**: Antigravity Assistant & Người dùng
- **Trạng thái**: ✅ Hoàn thành

---

## 1. 🎯 Yêu Cầu / Nhiệm Vụ Đặt Ra
- Người dùng yêu cầu: *"ở mục prompt của bài tập thực hành, hãy viết prompt đơn giản, chứ prompt này quá khó viết"*.
- Vấn đề thực tế: Dù prompt trước đó đã được rút ngắn, nhưng vẫn còn chứa các câu lệnh mang tính kỹ thuật, hàn lâm như *"Đóng vai Kế toán trưởng...", "Yêu cầu thực hiện: 1. ... 2. ...", "LỆNH BẮT BUỘC TRƯỚC KHI VIẾT", "theo bảng Markdown", "font Times New Roman cỡ 13..."*. Học viên và người đi làm cảm thấy rất khó nhớ và ngại gõ khi áp dụng thực tế.
- Giải pháp: Chuyển toàn bộ 5 prompt sang **ngôn ngữ tự nhiên 100% (khẩu ngữ văn phòng đời thường)**, chỉ 2-4 dòng ngắn ngủn, ai mở điện thoại hoặc máy tính lên cũng gõ được ngay trong 10 giây!

---

## 2. 🛠️ Các Hành Động & Giải Pháp Kỹ Thuật Đã Triển Khai
1. **Viết lại toàn bộ 5 Prompt bài tập thực hành theo hướng "Siêu dễ viết":**
   - **Tình huống 1 (CSKH giao hàng trễ)**:
     ```text
     Khách VIP bị giao trễ quà sinh nhật 3 ngày đang rất tức giận.
     Hãy viết giúp tôi:
     1. Lời thoại gọi điện xin lỗi khách thật chân thành.
     2. Gợi ý vài phương án đền bù (voucher, quà) để khách nguôi giận.
     ```
     *(Công thức: Sự cố + Xin lỗi + Gợi ý đền bù)*
   - **Tình huống 2 (Cắt giảm chi phí Q4 - Khóa xác nhận)**:
     ```text
     Tôi cần cắt giảm 15% chi phí quý 4 (không giảm lương, không sa thải ai).
     Đừng viết vội! Hãy tóm tắt cách bạn hiểu đề bài, tôi duyệt xong bạn mới viết chi tiết.
     ```
     *(Công thức: Nêu đề bài + Câu thần chú: "Đừng viết vội, tóm tắt tôi duyệt trước")*
   - **Tình huống 3 (Phản biện quy chế thưởng nóng - Tìm kẽ hở)**:
     ```text
     Công ty tôi định thưởng nóng 10% cho ai bán trên 200 triệu/tháng.
     Hãy chỉ ra 3 rủi ro nhân viên có thể lách luật để trục lợi và cách khắc phục.
     ```
     *(Công thức: Đưa quy chế + Hỏi: "Có kẽ hở nào lách luật được không?")*
   - **Tình huống 4 (Email sự cố Webinar)**:
     ```text
     Viết email gửi Giám đốc báo cáo sự kiện Webinar:
     - Chi phí 5 triệu, 120 người xem, chốt được 28 đơn (thu 56 triệu).
     - Đầu giờ micro bị rè mất 15 khách, nhưng đã gửi video bù kéo lại được 4 người.
     - Viết ngắn gọn, lịch sự, chuyên nghiệp.
     ```
     *(Công thức: Liệt kê số liệu thực tế + Sự cố & cách cứu + Giọng điệu)*
   - **Tình huống 5 (Hợp đồng Agency Ads)**:
     ```text
     Soạn hợp đồng thuê Agency chạy quảng cáo:
     - Bên A (Nova) thuê Bên B (Agency X) trong 6 tháng, phí 30 triệu/tháng.
     - Thêm điều khoản cam kết doanh số và bảo mật dữ liệu khách hàng.
     - Trình bày đầy đủ để tôi copy sang Word in ký.
     ```
     *(Công thức: Thông tin 2 bên + Điều khoản quan trọng + Xuất Word)*

2. **Cập nhật giao diện Web tương tác**:
   - Thêm nhãn thẻ: `<span class="case-tag tag-primary"><i class="fa-solid fa-terminal"></i> Prompt Siêu Dễ Viết (Chỉ 10 giây)</span>`.
   - Bổ sung ô xanh **"Công thức 1 dòng dễ nhớ"** ở mỗi tình huống để học viên nhìn là hiểu ngay quy luật giao việc.
   - Tăng kích cỡ chữ `<pre>` lên `0.95rem` và giãn dòng `1.7` cho dễ đọc.
   - Đồng bộ hoàn chỉnh giữa `Giao_dien/buoi2.html` và `buoi2.html`.

3. **Cập nhật Kịch bản Giảng viên (Teleprompter) trong `buoi2.js`**:
   - Cập nhật mục tiêu và kịch bản sư phạm Slide 8: Nhấn mạnh triết lý *"Đừng biến prompt thành gánh nặng học thuật. Giao việc cho AI chỉ cần tự nhiên, trực diện và ngắn gọn như giao việc cho trợ lý"*.

4. **Đồng bộ Giáo án chi tiết Buổi 2**:
   - Bổ sung **Phần 8** vào [Giao_trinh/GIAO_AN_BUOI_2.md](file:///d:/AI/AI_AGENT/Giao_trinh/GIAO_AN_BUOI_2.md) ghi chép trọn vẹn 5 prompt tối giản và công thức 1 dòng.

---

## 3. 📁 Các File Thay Đổi / Tạo Mới
- [Cập nhật] [Giao_dien/buoi2.html](file:///d:/AI/AI_AGENT/Giao_dien/buoi2.html)
- [Cập nhật] [buoi2.html](file:///d:/AI/AI_AGENT/buoi2.html)
- [Cập nhật] [Giao_dien/buoi2.js](file:///d:/AI/AI_AGENT/Giao_dien/buoi2.js)
- [Cập nhật] [buoi2.js](file:///d:/AI/AI_AGENT/buoi2.js)
- [Cập nhật] [Giao_trinh/GIAO_AN_BUOI_2.md](file:///d:/AI/AI_AGENT/Giao_trinh/GIAO_AN_BUOI_2.md)
- [Tạo mới] [Nhật ký/2026/10/2026-10-11_toi_gian_hoa_prompt_khau_ngu_10s.md](file:///d:/AI/AI_AGENT/Nh%E1%BA%ADt%20k%C3%BD/2026/10/2026-10-11_toi_gian_hoa_prompt_khau_ngu_10s.md)
- [Cập nhật] [Nhật ký/TONG_HOP_TIEN_DO.md](file:///d:/AI/AI_AGENT/Nh%E1%BA%ADt%20k%C3%BD/TONG_HOP_TIEN_DO.md)

---

## 4. ✅ Kết Quả Đạt Được & Kiểm Thử
- 100% prompt đều là văn nói tự nhiên, không còn các từ đao to búa lớn như *"LỆNH BẮT BUỘC TRƯỚC KHI VIẾT"*, *"Đóng vai Kế toán trưởng & Ban kiểm soát"*, *"chuẩn bảng Markdown"*, *"font Times New Roman cỡ 13"*.
- Học viên chỉ mất đúng 5 - 10 giây để gõ hoặc hiểu cấu trúc.
- Nút Sao chép 1-chạm hoạt động tức thì, sao chép trọn vẹn văn bản sạch vào clipboard.
