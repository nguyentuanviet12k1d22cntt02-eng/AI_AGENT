# Nhật Ký Công Việc: Khởi Tạo Nội Dung & Giao Diện Web Tương Tác Buổi 3

- **Thời gian**: 2026-10-14 16:00:00 (GMT+7)
- **Người thực hiện**: Antigravity Assistant & tuanvietdev
- **Trạng thái**: Hoàn thành

---

## 1. 🎯 Yêu Cầu / Nhiệm Vụ Đặt Ra
- Xây dựng trọn bộ nội dung và giao diện tương tác cho **Buổi 3**:
  - Chủ đề: **Chương 2 Giáo trình Mở rộng (Bài 5, 6, 7, 8, 9, 10)** - Ứng dụng Google NotebookLM trong văn phòng.
  - Sử dụng trực tiếp hình ảnh của mỗi slide trong tài liệu `UNG-DUNG-AI-TRONG-VAN-PHONG-MO-RONG.pdf` làm hướng dẫn nhanh, nội dung ngắn gọn nhưng đầy đủ, súc tích.
  - Xây dựng bộ bài tập tình huống thực hành chuyên sâu cho **Bài 6 (Tóm tắt văn bản dài)**, **Bài 9 (Tạo Video mô tả tổng quan)** và **Bài 10 (Tạo Bản đồ họa thông tin / Infographic)**.
  - Đưa trực tiếp toàn bộ nội dung lên website dự án, tích hợp bộ chuyển đổi buổi học (Session Switcher 3 nút: Buổi 1, Buổi 2, Buổi 3).

---

## 2. 🛠️ Các Hành Động Đã Thực Hiện
- **Khảo sát & Trích xuất dữ liệu đa phương tiện từ PDF Mở rộng**:
  - Khảo sát các trang 13 đến 25 trong tệp [UNG-DUNG-AI-TRONG-VAN-PHONG-MO-RONG.pdf](file:///d:/AI/AI_AGENT/Giao_trinh/UNG-DUNG-AI-TRONG-VAN-PHONG-MO-RONG.pdf).
  - Sử dụng thư viện `PyMuPDF` kết xuất trực tiếp 13 slide chất lượng cao (3000x1688 px) từ Trang 13 đến Trang 25 lưu vào `assets/buoi3/slide_p13.png` $\rightarrow$ `slide_p25.png`.
  - Trích xuất 11 ảnh chụp màn hình giao diện làm việc gốc của NotebookLM (các phân vùng, Studio, Video Overview, Mindmap, Infographic...) lưu vào `assets/buoi3/ui_pxx_imgx.png`.
  - Đồng bộ toàn bộ 24 ảnh sang thư mục [Giao_dien/assets/buoi3/](file:///d:/AI/AI_AGENT/Giao_dien/assets/buoi3/).
- **Biên soạn Giáo án chi tiết Buổi 3 (120 phút)**:
  - Tạo tệp giáo án [GIAO_AN_BUOI_3.md](file:///d:/AI/AI_AGENT/Giao_trinh/GIAO_AN_BUOI_3.md) theo chuẩn sư phạm, phân bổ timeline 6 phần, kịch bản dẫn dắt từ nỗi đau "Ảo giác AI" sang công nghệ "Source Grounding".
- **Phát triển giao diện Web tương tác Buổi 3 ([buoi3.html](file:///d:/AI/AI_AGENT/buoi3.html))**:
  - Dựng 8 slide tương tác theo chuẩn thẩm mỹ hiện đại:
    - *Slide 1*: Bìa & Đối đầu tri thức AI Chat vs NotebookLM Source Grounded.
    - *Slide 2*: [Bài 5] Làm quen NotebookLM & Phân tích 7 khu vực làm việc (Slide P13, 14, 15).
    - *Slide 3*: [Bài 6] Tóm tắt văn bản dài 3 tầng & Prompt mẫu P17.
    - *Slide 4*: [Bài 7] Tạo Podcast âm thanh đối thoại 2 người (Audio Overview) & Prompt P19.
    - *Slide 5*: [Bài 8] Tạo Sơ đồ tư duy logic (Mind Map) & Prompt P21.
    - *Slide 6*: [Bài 9] Tạo Video mô tả tổng quan (Video Overview) bám sát đúng hình ảnh slide 23/57 người dùng cung cấp.
    - *Slide 7*: [Bài 10] Tạo Bản đồ họa thông tin (Infographic) & Prompt P25.
    - *Slide 8*: Bộ 3 Bài tập tình huống thực chiến doanh nghiệp (Bài 6, 9, 10) dạng tab, tích hợp sẵn Khối dữ liệu nguồn giả lập và Khối prompt mẫu chuẩn công sở.
- **Xây dựng kịch bản và tính năng tương tác ([buoi3.js](file:///d:/AI/AI_AGENT/buoi3.js))**:
  - Điều hướng slide mượt mà (GSAP fallback), phím tắt bàn phím (Mũi tên, S, F, Esc).
  - Tích hợp tính năng Lightbox Modal: Nhấp vào bất kỳ ảnh slide nào để xem cận cảnh toàn màn hình sắc nét.
  - Kịch bản giảng viên Teleprompter Drawer cập nhật động nội dung sư phạm cho từng slide.
  - Nút **Sao chép Prompt** và **Sao chép Dữ liệu Mẫu** 1-chạm kèm hiệu ứng chuyển màu xác nhận.
- **Mở rộng CSS hệ thống ([style.css](file:///d:/AI/AI_AGENT/style.css))**:
  - Bổ sung layout 2 cột `.b3-guide-grid`, khung slide frame `.b3-slide-frame`, thumbnail `.b3-ui-thumb`, thẻ dữ liệu mẫu `.sample-data-card`, và modal phóng to ảnh `.image-lightbox`.
- **Cập nhật Session Switcher đồng bộ 3 buổi học**:
  - Bổ sung nút Buổi 3 vào cả [index.html](file:///d:/AI/AI_AGENT/index.html), [buoi2.html](file:///d:/AI/AI_AGENT/buoi2.html), [buoi3.html](file:///d:/AI/AI_AGENT/buoi3.html) và đồng bộ trọn vẹn sang thư mục [Giao_dien/](file:///d:/AI/AI_AGENT/Giao_dien/).

---

## 3. 📁 Các File Thay Đổi / Tạo Mới
- [Tạo mới] [`Giao_trinh/GIAO_AN_BUOI_3.md`](file:///d:/AI/AI_AGENT/Giao_trinh/GIAO_AN_BUOI_3.md): Giáo án chi tiết 120 phút cho Giảng viên.
- [Tạo mới] [`buoi3.html`](file:///d:/AI/AI_AGENT/buoi3.html) & [`Giao_dien/buoi3.html`](file:///d:/AI/AI_AGENT/Giao_dien/buoi3.html): Mã nguồn trang web Buổi 3 hoàn chỉnh.
- [Tạo mới] [`buoi3.js`](file:///d:/AI/AI_AGENT/buoi3.js) & [`Giao_dien/buoi3.js`](file:///d:/AI/AI_AGENT/Giao_dien/buoi3.js): Kịch bản Javascript tương tác cho Buổi 3.
- [Tạo mới] Thư mục ảnh [`assets/buoi3/`](file:///d:/AI/AI_AGENT/assets/buoi3/) & [`Giao_dien/assets/buoi3/`](file:///d:/AI/AI_AGENT/Giao_dien/assets/buoi3/) gồm 24 file ảnh chất lượng cao.
- [Sửa] [`style.css`](file:///d:/AI/AI_AGENT/style.css) & [`Giao_dien/style.css`](file:///d:/AI/AI_AGENT/Giao_dien/style.css): Thêm khối style Buổi 3 & Lightbox modal.
- [Sửa] [`index.html`](file:///d:/AI/AI_AGENT/index.html) & [`Giao_dien/index.html`](file:///d:/AI/AI_AGENT/Giao_dien/index.html): Cập nhật Session Switcher 3 nút.
- [Sửa] [`buoi2.html`](file:///d:/AI/AI_AGENT/buoi2.html) & [`Giao_dien/buoi2.html`](file:///d:/AI/AI_AGENT/Giao_dien/buoi2.html): Cập nhật Session Switcher 3 nút.
- [Tạo mới] [`Nhật ký/2026/10/2026-10-14_khoi_tao_noi_dung_buoi_3.md`](file:///d:/AI/AI_AGENT/Nh%E1%BA%ADt%20k%C3%BD/2026/10/2026-10-14_khoi_tao_noi_dung_buoi_3.md): Nhật ký phiên làm việc.
- [Sửa] [`Nhật ký/TONG_HOP_TIEN_DO.md`](file:///d:/AI/AI_AGENT/Nh%E1%BA%ADt%20k%C3%BD/TONG_HOP_TIEN_DO.md): Thêm mốc công việc STT 13.

---

## 4. ✅ Kết Quả Đạt Được & Kiểm Thử
- Website Buổi 3 hoàn thành đồng bộ với giao diện cao cấp, hình ảnh gốc trích xuất từ giáo trình cực nét, bố cục thông thoáng, rõ ràng.
- Người dùng chuyển đổi mượt mà giữa Buổi 1, Buổi 2 và Buổi 3 từ thanh điều hướng trên cùng.
- Tính năng Lightbox phóng to ảnh hoạt động trơn tru; các nút copy prompt và copy dataset phản hồi tức thì.
- Bài tập tình huống cho Bài 6, 9, 10 sát với bài toán công sở thực tế, có đầy đủ tài liệu nguồn để nạp thử nghiệm ngay.

---

## 5. 💡 Ghi Chú & Kế Hoạch Tiếp Theo (Nếu Có)
- Giảng viên có thể mở trực tiếp [`buoi3.html`](file:///d:/AI/AI_AGENT/buoi3.html) trên trình duyệt Chrome/Edge hoặc qua Web Server để bắt đầu giảng dạy.
- Có thể đẩy commit lên GitHub repository để cập nhật trên GitHub Pages.
