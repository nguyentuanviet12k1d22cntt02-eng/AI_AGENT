# GIÁO ÁN CHI TIẾT: BUỔI 03
## ỨNG DỤNG GOOGLE NOTEBOOKLM TRONG VĂN PHÒNG: TỪ TỔNG HỢP VĂN BẢN ĐẾN XUẤT BẢN ĐA PHƯƠNG TIỆN

- **Khóa học**: Ứng Dụng AI Trong Văn Phòng & Kỷ Nguyên AI Agent
- **Thời lượng**: 120 phút (2 tiếng)
- **Tài liệu tham chiếu**: Giáo trình Mở rộng (`UNG-DUNG-AI-TRONG-VAN-PHONG-MO-RONG.pdf`), Chương 2: Bài 5, 6, 7, 8, 9, 10 (Trang 13 - 25).
- **Đối tượng học viên**: Nhân viên văn phòng, Quản lý, Chuyên viên Phân tích dữ liệu, Nhân sự, Truyền thông nội bộ, Trợ lý Giám đốc.

---

## 🎯 MỤC TIÊU ĐÀO TẠO (LEARNING OBJECTIVES)

1. **Về Tư duy công nghệ (Mindset)**:
   - Hiểu rõ khái niệm **Source Grounding (Neo dữ liệu nguồn)**: AI chỉ trả lời và suy luận dựa trên tài liệu người dùng tải lên, triệt tiêu nguy cơ ảo giác (Hallucination-free).
   - Nắm bắt sự chuyển dịch từ *"Giao tiếp AI dạng Chat thuần túy"* sang *"AI Studio Đa Phương Tiện"* (Văn bản $\rightarrow$ Podcast $\rightarrow$ Mind Map $\rightarrow$ Video $\rightarrow$ Infographic).
2. **Về Kỹ năng thao tác (Skillset)**:
   - Làm chủ 7 phân vùng chức năng của Google NotebookLM.
   - Thành thạo quy trình 6 bước xuất bản 5 định dạng tri thức từ tài liệu doanh nghiệp:
     - *Bài 6*: Bóc tách & Tóm tắt văn bản dài (Executive Summary).
     - *Bài 7*: Xuất bản Podcast âm thanh đối thoại 2 chuyên gia (Audio Overview).
     - *Bài 8*: Chuyển đổi tài liệu thành Sơ đồ tư duy trực quan (Mind Map).
     - *Bài 9*: Xuất bản Video bài giảng/thuyết trình tổng quan có giọng đọc AI (Video Overview).
     - *Bài 10*: Thiết kế Bản đồ họa thông tin (Infographic) minh họa quy trình.
3. **Về Năng lực ứng dụng thực tế (Application)**:
   - Tự tin giải quyết 3 bài toán văn phòng hóc búa thông qua 3 tình huống bài tập thực chiến (Bài 6: Tóm tắt Đề án Chiến lược Q3; Bài 9: Video Chính sách Nhân sự 2026; Bài 10: Infographic Onboarding 7 ngày).

---

## ⏱️ PHÂN BỔ THỜI LƯỢNG (TIMELINE - 120 PHÚT)

| Phần | Thời lượng | Nội dung trọng tâm | Hoạt động tương tác |
| :---: | :---: | :--- | :--- |
| **1** | 10 phút | Khởi động: Nỗi đau "Ngập trong tài liệu" & Giới thiệu NotebookLM | Demo thực tế 10 giây: Nạp PDF 50 trang $\rightarrow$ Hỏi đáp trích dẫn nguồn |
| **2** | 20 phút | Bài 5: Làm quen NotebookLM & Giải mã 7 phân vùng làm việc | Học viên truy cập `notebooklm.google.com` & tạo notebook đầu tiên |
| **3** | 20 phút | Hướng dẫn nhanh Bài 6 & 7: Tóm tắt văn bản & Podcast âm thanh | Xem slide P16-P19, phân tích công thức câu lệnh mẫu |
| **4** | 20 phút | Hướng dẫn nhanh Bài 8, 9 & 10: Sơ đồ tư duy, Video mô tả & Infographic | Xem slide P20-P25, khám phá phân khu "Studio" trực quan |
| **5** | 40 phút | **Thực hành Tình huống Doanh nghiệp**: Bài tập Bài 6, Bài 9 & Bài 10 | Làm việc cá nhân / nhóm trên 3 bộ dữ liệu giả lập có sẵn |
| **6** | 10 phút | Đánh giá sản phẩm, Thảo luận bảo mật dữ liệu & Bế mạc | Chia sẻ link NotebookLM, nghiệm thu kết quả và dặn dò |

---

## 📖 NỘI DUNG BÀI GIẢNG CHI TIẾT TỪNG BÀI

### BÀI 5: LÀM QUEN VỚI CÔNG CỤ GOOGLE NOTEBOOKLM (Trang 13-15)
- **Bản chất công nghệ**: Khác với ChatGPT/Gemini chat chung chung (lấy tri thức từ toàn bộ internet và dễ bị bịa đặt), NotebookLM là mô hình **RAG (Retrieval-Augmented Generation)** cá nhân hóa. Nó chỉ đọc tài liệu bạn cấp và mọi câu trả lời đều có số chú thích `[1]`, `[2]` trỏ ngược lại đúng đoạn văn gốc.
- **7 Phân vùng làm việc chuẩn**:
  1. *Thêm nguồn*: Hỗ trợ Google Drive (Docs, Slides), Tải PDF/Text từ máy tính, Copy liên kết trang Web, YouTube link, hoặc dán trực tiếp đoạn văn.
  2. *Danh sách nguồn*: Cho phép bật/tắt từng nguồn tài liệu linh hoạt.
  3. *Khu vực trò chuyện (Chat / Query)*: Đặt câu hỏi truy vấn nội dung.
  4. *Studio (Xưởng sáng tạo)*: Nơi tạo Podcast, Video, Sơ đồ tư duy, Báo cáo, Đồ họa thông tin.
  5. *Sản phẩm đã tạo (Notes)*: Lưu vết các ghi chú, câu trả lời ưng ý.
  6. *Tài khoản*: Quản lý đăng nhập Google Workspace cá nhân/doanh nghiệp.
  7. *Chia sẻ & Cài đặt*: Cấp quyền cộng tác đồng nghiệp (Viewer / Editor).

---

### BÀI 6: ỨNG DỤNG AI TÓM TẮT VĂN BẢN (Trang 16-17)
- **Quy trình 6 bước siêu tốc**:
  1. Truy cập NotebookLM $\rightarrow$ 2. Tạo Notebook mới $\rightarrow$ 3. Chuẩn bị nội dung $\rightarrow$ 4. Dán văn bản $\rightarrow$ 5. Bấm Chèn $\rightarrow$ 6. Viết Prompt tóm tắt.
- **Tiêu chuẩn tóm tắt văn phòng**:
  - Không tóm tắt cụt ngủn; cần chia làm 3 tầng: Executive Summary (1 đoạn), Key Takeaways (Bullet điểm nhấn), và Action Matrix (Bảng việc cần làm).
- **Prompt chuẩn từ slide P17**:
  > *"Tóm tắt ngắn gọn, súc tích, dễ hiểu. Loại bỏ nội dung lặp lại hoặc ít quan trọng. Trình bày theo cấu trúc rõ ràng với tiêu đề và các mục lớn. Sử dụng danh sách bullet hoặc đánh số khi cần. Đảm bảo người đọc chỉ cần xem bản tóm tắt vẫn hiểu được nội dung cốt lõi của tài liệu."*

---

### BÀI 7: ỨNG DỤNG AI TẠO PODCAST ÂM THANH (Trang 18-19)
- **Tính năng độc quyền (Audio Overview)**:
  - Tự động sinh cuộc đối thoại radio chuyên nghiệp giữa 2 chuyên gia (1 nam, 1 nữ) thảo luận sôi nổi về tài liệu của bạn.
- **Cách dùng nhanh**: Vào phân khu **Studio** $\rightarrow$ Chọn **Tổng quan bằng âm thanh** $\rightarrow$ Bấm **Tùy chỉnh (Customize)**.
- **Prompt tùy chỉnh từ slide P19**:
  > *"Hãy tạo một podcast âm thanh bằng tiếng Việt dựa trên tài liệu được cung cấp. Yêu cầu: Tóm tắt các ý chính một cách dễ hiểu. Giải thích các khái niệm quan trọng bằng ngôn ngữ đơn giản. Đưa ra ví dụ thực tế khi phù hợp. Trình bày dưới dạng cuộc trò chuyện tự nhiên giữa hai người dẫn chương trình. Giọng điệu thân thiện, chuyên nghiệp và hấp dẫn. Kết thúc bằng phần tổng kết ngắn gọn các nội dung quan trọng."*

---

### BÀI 8: ỨNG DỤNG AI TẠO SƠ ĐỒ TƯ DUY (Trang 20-21)
- **Ứng dụng**: Phục vụ việc ôn tập kiến thức, vẽ cây phân cấp chính sách công ty, hoặc hệ thống hóa tài liệu kỹ thuật phức tạp.
- **Cách dùng nhanh**: Vào **Studio** $\rightarrow$ Chọn **Bản đồ tư duy (Mind map)**.
- **Prompt tùy chỉnh từ slide P21**:
  > *"Tạo sơ đồ tư duy bằng tiếng Việt dựa trên tài liệu được cung cấp. Yêu cầu: Xác định chủ đề trung tâm. Phân chia thành các nhánh chính và nhánh phụ rõ ràng. Tóm tắt nội dung bằng từ khóa ngắn gọn. Làm nổi bật các khái niệm, số liệu và kết luận quan trọng. Sắp xếp theo cấu trúc logic, dễ học và dễ ghi nhớ."*

---

### BÀI 9: ỨNG DỤNG AI TẠO VIDEO MÔ TẢ (Trang 22-23)
*(Trọng tâm - Bám sát hình ảnh người dùng đã cung cấp từ Slide 23/57)*
- **Ứng dụng**: Biến văn bản buồn ngủ thành video tổng quan sinh động kèm hình ảnh minh họa và giọng thuyết minh chuyên nghiệp, dùng cho đào tạo nội bộ hoặc báo cáo dự án.
- **Cách dùng nhanh**: Vào **Studio** $\rightarrow$ Chọn **Tổng quan bằng video (Video Overview)** $\rightarrow$ Mở hộp thoại *"Tùy chỉnh bản Tổng quan bằng video"* $\rightarrow$ Nhập chỉ dẫn trọng tâm $\rightarrow$ Nhấn nút **Tạo**.
- **Prompt tùy chỉnh từ slide P23**:
  > *"Tạo video tổng quan bằng tiếng Việt dựa trên tài liệu được cung cấp. Yêu cầu: Tóm tắt các nội dung quan trọng nhất. Trình bày theo cấu trúc rõ ràng, dễ theo dõi. Sử dụng hình ảnh minh họa phù hợp với nội dung. Nhấn mạnh các số liệu, khái niệm và kết luận chính. Giọng thuyết minh chuyên nghiệp, dễ hiểu. Kết thúc bằng phần tổng kết ngắn gọn."*

---

### BÀI 10: ỨNG DỤNG AI TẠO HÌNH ẢNH MÔ TẢ / ĐỒ HỌA THÔNG TIN (Trang 24-25)
- **Ứng dụng**: Tạo Infographic tóm lược quy trình, biểu đồ mô hình hoạt động để chèn vào slide PowerPoint hoặc chia sẻ trên nhóm Zalo/Workplace công ty.
- **Cách dùng nhanh**: Vào **Studio** $\rightarrow$ Chọn **Bản đồ họa thông tin / Hình ảnh mô tả**.
- **Prompt tùy chỉnh từ slide P25**:
  > *"Tạo hình ảnh minh họa bằng tiếng Việt dựa trên tài liệu được cung cấp. Yêu cầu: Thể hiện chính xác nội dung và ý tưởng chính. Làm nổi bật các khái niệm quan trọng. Sử dụng phong cách trực quan, dễ hiểu. Bố cục rõ ràng, chuyên nghiệp. Hình ảnh phù hợp với đối tượng người xem và mục đích của tài liệu."*

---

## 🏆 PHẦN BÀI TẬP THỰC HÀNH TÌNH HUỐNG THỰC CHIẾN (BÀI 6, 9, 10)

### TÌNH HUỐNG 1: THỰC HÀNH BÀI 6 - TÓM TẮT ĐỀ ÁN CHIẾN LƯỢC KINH DOANH Q3
- **Bối cảnh**: Ban Giám đốc nhận được bản Đề án Chiến lược & Ngân sách Q3 dài 30 trang đầy thuật ngữ tài chính. Giám đốc chỉ có 5 phút trước cuộc họp HĐQT và cần một bản Executive Summary sắc bén.
- **Nhiệm vụ học viên**: Nạp văn bản nguồn mẫu vào NotebookLM, áp dụng Prompt tóm tắt 3 tầng để xuất bản:
  1. Tóm lược 3 điểm nghẽn nghiêm trọng nhất.
  2. Bảng 4 chỉ tiêu tài chính cốt lõi.
  3. Danh sách hành động ưu tiên cao (Action Items) có Deadline và PIC.

### TÌNH HUỐNG 2: THỰC HÀNH BÀI 9 - TẠO VIDEO THUYẾT TRÌNH CHÍNH SÁCH NHÂN SỰ 2026
- **Bối cảnh**: Phòng Nhân sự ban hành cuốn "Sổ tay Phúc lợi & Thưởng KPI 2026". Nhân viên các chi nhánh ngại đọc văn bản 40 trang dẫn đến thắc mắc và khiếu nại dồn dập.
- **Nhiệm vụ học viên**: Nạp tài liệu chính sách vào NotebookLM, sử dụng phân khu **Studio $\rightarrow$ Tổng quan bằng video**, thiết lập câu lệnh tùy chỉnh bằng tiếng Việt để tạo ra video thuyết minh 3 phút sinh động, nhấn mạnh quyền lợi và các mốc thời gian chi trả.

### TÌNH HUỐNG 3: THỰC HÀNH BÀI 10 - THIẾT KẾ INFOGRAPHIC ONBOARDING 7 NGÀY
- **Bối cảnh**: Bộ phận Đào tạo cần một ấn phẩm trực quan dạng Infographic tóm tắt "Lộ trình Hội nhập 7 ngày cho nhân sự mới" để gửi email chào mừng và in dán tại bảng tin văn phòng.
- **Nhiệm vụ học viên**: Nạp bản mô tả quy trình hội nhập vào NotebookLM, vào **Studio $\rightarrow$ Bản đồ họa thông tin**, áp dụng prompt phong cách Flat Design hiện đại, phân lớp rõ ràng 4 giai đoạn hội nhập từ Ngày 1 đến Ngày 7.
