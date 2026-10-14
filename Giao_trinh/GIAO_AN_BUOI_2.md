# GIÁO ÁN CHI TIẾT: BUỔI 02
## TƯ DUY QUẢN LÝ THỰC CHIẾN & BỘ 3 VŨ KHÍ KHỞI TẠO VĂN BẢN DOANH NGHIỆP

- **Khóa học**: Ứng Dụng AI Trong Văn Phòng & Kỷ Nguyên AI Agent
- **Thời lượng**: 120 phút (2 tiếng)
- **Tài liệu tham chiếu**: 
  - *Giáo trình cơ bản*: Bài 5 (Trang 18-19) & Bài 6 (Trang 20-23)
  - *Giáo trình mở rộng*: Bài 1 (Trang 4-5), Bài 2 (Trang 6-7), Bài 3 (Trang 8-9)
- **Đối tượng học viên**: Dân văn phòng, Quản lý, Chuyên viên Nhân sự (HR), Marketing, Hành chính tổng hợp.

---

## 🎯 MỤC TIÊU ĐÀO TẠO (LEARNING OBJECTIVES)

1. **Về Tư duy (Mindset)**:
   - Xóa bỏ thói quen "chat hỏi đáp vu vơ", định vị bản thân là **Người quản lý / Giám sát thực tập sinh AI**.
   - Nắm vững **Ma trận đánh giá** và **Quy trình kiểm soát rủi ro 4 bước**, triệt tiêu nguy cơ AI đưa ra thông tin sai lệch hoặc ảo giác.
2. **Về Kỹ năng thực hành (Skillset)**:
   - Sử dụng thành thạo kỹ thuật **Phản biện AI (Đặt câu hỏi ngược)** để ép AI tự phát hiện lỗi sai trong bản thảo.
   - Khởi tạo chuẩn xác **3 cấp độ văn bản doanh nghiệp**:
     - *Cấp 1*: Email Báo cáo công việc tuần có số liệu đo lường gửi Quản lý.
     - *Cấp 2*: Báo cáo công việc hằng ngày (Daily Report) chuẩn 5 khối hành chính.
     - *Cấp 3*: Hợp đồng Lao động chính thức chuẩn Bộ luật Lao động Việt Nam, yêu cầu AI xuất trực tiếp file Microsoft Word (.docx).

---

## ⏱️ PHÂN BỔ THỜI LƯỢNG (TIMELINE - 120 PHÚT)

| Phần | Thời lượng | Nội dung trọng tâm | Hoạt động tương tác |
| :---: | :---: | :--- | :--- |
| **1** | 10 phút | Khởi động: Cầu nối từ Buổi 1 sang Buổi 2 | Mini-quiz ôn tập: Tại sao AI cần có người quản lý? |
| **2** | 25 phút | Bài 5 (Cơ bản): Tư duy Giao việc cho AI | So sánh trực quan Prompt Hỏi đáp vs Prompt Giao việc |
| **3** | 25 phút | Bài 6 (Cơ bản): Ma trận Đánh giá & Quy trình Kiểm soát 4 Bước | Thực hành kỹ thuật Phản biện AI & Prompt Khóa xác nhận |
| **4** | 20 phút | Bài 3 (Mở rộng): Soạn Email Báo cáo Tuần đo lường KPI | Viết Prompt Email tuần $\rightarrow$ Chuyển tiếp gửi Gmail |
| **5** | 20 phút | Bài 2 (Mở rộng): Soạn Báo cáo Công việc ngày chuẩn 5 khối | Thực hành tạo Báo cáo công việc $\rightarrow$ Copy chuẩn sang Word |
| **6** | 15 phút | Bài 1 (Mở rộng): Soạn HĐLĐ Pháp lý & Xuất file Word (.docx) | Chạy Master Prompt HR 15 năm kinh nghiệm xuất file Word |
| **7** | 05 phút | Tổng kết 3 Chân lý Buổi 2 & Giao bài tập về nhà | Thử thách 1-chạm sao chép bài tập ứng dụng thực tế |

---

## 📖 NỘI DUNG BÀI GIẢNG CHI TIẾT TỪNG PHẦN

### PHẦN 1: CẦU NỐI BUỔI 1 SANG BUỔI 2 (10 PHÚT)
- **Thông điệp mở màn**:
  > *"Ở Buổi 1, chúng ta đã bóc trần cỗ máy AI: Nó chỉ đoán từ tiếp theo (Next-Token) và trí nhớ có hạn (Context Window). Vậy nếu đưa một cỗ máy chỉ biết đoán xác suất vào công việc văn phòng thực tế, điều gì sẽ xảy ra? Nó sẽ 'hỏi gà trả lời vịt', bịa số liệu hoặc nói sai luật! Giải pháp duy nhất: Bạn phải trở thành NGƯỜI QUẢN LÝ chỉ huy cỗ máy đó!"*
- **Socratic Questioning**:
  - *"Khi công ty bạn tuyển một thực tập sinh mới ra trường rất thông minh nhưng chưa biết việc, bạn sẽ để bạn ấy tự làm bừa hay bạn sẽ giao việc có quy trình và kiểm soát từng bước?"*

---

### PHẦN 2: BÀI 5 - TƯ DUY GIAO VIỆC CHO AI (25 PHÚT)
*(Bám sát Giáo trình cơ bản Trang 18 - 19)*

#### 1. Sự khác biệt giữa "Hỏi" và "Giao việc"
- **Tư duy cũ (Người hỏi)**: Coi AI như Google Search thông minh, hỏi câu ngắn, thụ động, nhận về câu trả lời chung chung, không dùng được.
- **Tư duy mới (Người quản lý)**: Coi AI như Thực tập sinh AI. Người dùng là Quản lý: Có thẩm quyền, giao mục tiêu, cấp dữ liệu, quy định khuôn khổ và nghiệm thu kết quả.

#### 2. Bộ 5 Quy Tắc Vàng Giao Việc Văn Phòng:
1. **AI không hiểu ý – Chỉ hiểu lệnh**: AI không đọc được suy nghĩ trong đầu bạn. Chất lượng câu lệnh quyết định chất lượng đầu ra.
2. **Chuyển từ hỏi sang giao việc**: Thay vì hỏi *"Làm thế nào để tăng doanh số?"*, hãy giao việc *"Đóng vai Quản lý bán hàng, lập kế hoạch hành động 3 bước tăng 15% doanh số cho ngành hàng F&B"*.
3. **Mô tả đủ 3 chân kiềng**:
   $$\text{[Làm việc gì]} + \text{[Dựa trên nguồn dữ liệu/bối cảnh nào]} + \text{[Định dạng đầu ra là gì]}$$
4. **Chia nhỏ việc lớn (Multi-step)**: Việc lớn làm một lần luôn sai lệch. Phải chia thành từng công đoạn: *Dàn ý $\rightarrow$ Bản thảo $\rightarrow$ Tối ưu*.
5. **Luôn kiểm tra lại**: Không bao giờ lấy nguyên văn bản đầu tiên gửi sếp mà không rà soát lại logic và con số.

---

### PHẦN 3: BÀI 6 - TƯ DUY ĐÁNH GIÁ & KIỂM SOÁT AI (25 PHÚT)
*(Bám sát Giáo trình cơ bản Trang 20 - 23)*

#### 1. Ma trận 6 Kỹ Thuật Đánh Giá Kết Quả:
1. **Đọc đối chiếu logic thực tế**: Thấy số liệu lạ hoặc quy định không quen thuộc $\rightarrow$ Bật đèn đỏ kiểm tra ngay.
2. **Yêu cầu AI tự giải thích cơ sở**: *"Giải thích tại sao bạn lại đưa ra điều khoản/con số này?"* (Nếu AI lúng túng $\rightarrow$ Có ảo giác).
3. **Kỹ thuật Phản Biện AI (Đặt câu hỏi ngược)**:
   > *"Hãy đọc lại bản thảo trên và chỉ ra 3 điểm thiếu sót hoặc rủi ro pháp lý lớn nhất có thể gặp phải?"*
   - Ép AI tự đóng vai đối thủ hoặc thanh tra kiểm toán để tự vạch lá tìm sâu.
4. **Kiểm tra chéo**: Đưa cùng đề bài qua Gemini / ChatGPT hoặc tra cứu Google đối sánh.
5. **Kiểm tra dữ liệu đầu vào**: Rác vào thì rác ra (Garbage In $\rightarrow$ Garbage Out).
6. **Chia nhỏ để kiểm tra từng phần**: Kiểm tra riêng phần số liệu, riêng phần căn cứ pháp lý.

#### 2. Quy Trình Kiểm Soát Chuẩn 4 Bước (Bắt Buộc):
$$\boxed{\text{Bước 1: Phân tích đề}} \longrightarrow \boxed{\text{Bước 2: AI mô tả lại hiểu biết}} \longrightarrow \boxed{\text{Bước 3: Người dùng bấm xác nhận}} \longrightarrow \boxed{\text{Bước 4: AI mới thực thi}}$$

- **Prompt Khóa Xác Nhận**:
  > *"Trước khi bắt đầu thực hiện bài toán trên, bạn hãy tóm tắt lại các yêu cầu chính theo cách hiểu của bạn và chờ tôi gõ chữ 'ĐỒNG Ý' thì mới bắt đầu làm!"*

---

### PHẦN 4: BÀI 3 (MỞ RỘNG) - SOẠN EMAIL DOANH NGHIỆP CÓ ĐO LƯỜNG (20 PHÚT)
*(Bám sát Giáo trình mở rộng Trang 8 - 9)*

- **Bối cảnh thực tế**: Nhân viên Marketing (Nguyễn Văn An) soạn email báo cáo kết quả tuần 1 tháng 9/2026 gửi Trưởng phòng Marketing.
- **Số liệu đo lường**: Thiết kế 5 post Facebook, tăng tương tác Fanpage 20%, đem về 35 khách hàng tiềm năng.
- **Tiêu chuẩn Email công sở**:
  - Tiêu đề ngắn gọn chuẩn quy ước: `[BÁO CÁO TUẦN] - Kết quả Marketing Tuần 1 Tháng 9/2026 - Nguyễn Văn An`.
  - Phân tách rõ ràng: Công việc hoàn thành $\rightarrow$ Kết quả đo lường định lượng $\rightarrow$ Kế hoạch tuần tới.
  - Văn phong trang trọng, có lời cảm ơn và đề xuất hỗ trợ.
- **Thực hành**: Chạy Prompt trên ChatGPT $\rightarrow$ Copy định dạng gửi thử qua Gmail.

---

### PHẦN 5: BÀI 2 (MỞ RỘNG) - SOẠN BÁO CÁO NGÀY CHUẨN 5 KHỐI HÀNH CHÍNH (20 PHÚT)
*(Bám sát Giáo trình mở rộng Trang 6 - 7)*

- **Bối cảnh thực tế**: Báo cáo công việc hằng ngày (Daily Work Report) ngày 30/05/2026 tại Trung tâm Tin Học Sao Việt.
- **Cấu trúc 5 khối nội dung hành chính chuẩn**:
  1. *Khối 1 - Thông tin nhân sự*: Họ tên, chức vụ, phòng ban, ngày báo cáo.
  2. *Khối 2 - Công việc đã hoàn thành*: Chi tiết 4 đầu việc cụ thể (Facebook, Python, CRM...).
  3. *Khối 3 - Kết quả định lượng*: Tỷ lệ 100%, trưởng bộ phận duyệt, 50 khách hàng trên CRM.
  4. *Khối 4 - Khó khăn & Điểm nghẽn (Blockers)*: Thiếu ảnh tư liệu, data khách hàng thiếu số điện thoại.
  5. *Khối 5 - Kế hoạch ngày tiếp theo* & Chữ ký người lập báo cáo.
- **Thực hành**: Yêu cầu AI xuất định dạng bảng và các gạch đầu dòng chuẩn để copy trực tiếp sang MS Word không bị vỡ font/lỗi thụt lề.

---

### PHẦN 6: BÀI 1 (MỞ RỘNG) - HỢP ĐỒNG LAO ĐỘNG PHÁP LÝ & XUẤT FILE WORD (15 PHÚT)
*(Bám sát Giáo trình mở rộng Trang 4 - 5)*

- **Bối cảnh thực tế**: Soạn thảo Hợp đồng Lao động xác định thời hạn 12 tháng giữa Công ty TNHH Thương mại ABC và bà Trần Thị Mai (Nhân viên Bán hàng, 9 triệu/tháng).
- **Master Prompt Đỉnh Cao (HR 15 năm kinh nghiệm)**:
  - Phân vai chuyên gia HCNS am hiểu Bộ luật Lao động, BHXH, Thuế TNCN.
  - Đầy đủ 14 điều khoản pháp lý: Địa điểm, giờ làm việc, lương/thưởng, chế độ bảo hiểm, chấm dứt hợp đồng, bảo mật thông tin.
- **Yêu cầu kỹ thuật xuất file (.docx)**:
  - Khổ giấy A4, font Times New Roman cỡ 13, tiêu đề in hoa cỡ 18 căn giữa.
  - Có Header tên công ty, Footer đánh số trang, bảng chữ ký 2 bên và tạo link tải trực tiếp file `.docx`.

---

### PHẦN 7: TỔNG KẾT & THỬ THÁCH VỀ NHÀ (05 PHÚT)

- **3 Chân lý Buổi 2**:
  1. Bạn là **Quản lý**, AI là **Thực tập sinh**. Ra lệnh rõ ràng, cụ thể mới có kết quả tốt.
  2. Luôn dùng **Quy trình Kiểm soát 4 Bước & Phản biện AI** trước khi phê duyệt bất kỳ văn bản nào.
  3. Mọi văn bản xuất ra phải chuẩn **Thể thức doanh nghiệp**, có cấu trúc rõ ràng và số liệu đo lường định lượng.
- **Thử thách về nhà**:
  - Chọn 1 văn bản công việc thực tế tại chính vị trí của học viên (Biên bản cuộc họp / Email đề xuất tăng ngân sách / Báo cáo tuần).
  - Áp dụng kỹ thuật: Phân vai chuyên gia + Quy trình kiểm soát 4 bước để hoàn thiện văn bản và gửi nộp bài tập.

---

### PHẦN 8: BỘ 5 BÀI TẬP TÌNH HUỐNG THỰC TẾ (PROMPT CHUẨN DOANH NGHIỆP - VỪA VẶN & CHUYÊN NGHIỆP)
*(Thiết kế theo tiêu chuẩn vàng: Vừa vặn 5-8 dòng, đủ chiều sâu nghiệp vụ, không dài dòng hàn lâm nhưng vẫn đảm bảo tính chặt chẽ công sở)*

1. **Tình huống 1: Khủng hoảng CSKH khiếu nại khách VIP giao trễ**
   - *Công thức chuẩn:* `[Vai trò CSKH] + [Bối cảnh sự cố cụ thể] + [Kịch bản 3 bước & Bảng đền bù]`
   - *Prompt chuẩn doanh nghiệp:*
     ```text
     Đóng vai Trưởng nhóm CSKH, hãy xử lý sự cố giao trễ đơn quà sinh nhật 3 ngày của khách VIP:

     1. Soạn kịch bản gọi điện thoại xin lỗi chân thành (thể hiện sự đồng cảm, nhận trách nhiệm rõ ràng và giải thích nguyên nhân ngắn gọn).
     2. Đề xuất bảng phương án đền bù thỏa đáng (voucher giảm giá, quà tặng bù đắp, miễn phí vận chuyển cho các đơn sau).

     Yêu cầu: Văn phong khéo léo, ưu tiên làm dịu bức xúc và giữ chân khách hàng, định dạng bảng rõ ràng.
     ```

2. **Tình huống 2: Đề án cắt giảm 15% chi phí Q4 (Khóa xác nhận)**
   - *Công thức chuẩn:* `[Mục tiêu bài toán] + [Ràng buộc không được phạm] + [Lệnh khóa xác nhận 2 bước]`
   - *Prompt chuẩn doanh nghiệp:*
     ```text
     Tôi cần xây dựng Đề án cắt giảm 15% chi phí vận hành (OPEX) Quý 4.
     Ràng buộc quan trọng: Tuyệt đối không sa thải nhân viên và không cắt giảm lương thưởng.

     Quy tắc thực hiện:
     - Bước 1: Hãy tóm tắt lại các nhóm chi phí tiềm năng có thể tối ưu và dàn ý chính của đề án.
     - Bước 2: DỪNG LẠI và chờ tôi xác nhận duyệt dàn ý thì mới bắt đầu viết nội dung chi tiết.
     ```

3. **Tình huống 3: Phản biện quy chế thưởng nóng 10% (Tìm kẽ hở lách luật)**
   - *Công thức chuẩn:* `[Vai trò Kiểm soát] + [Dự thảo quy chế] + [Yêu cầu vạch 3 kẽ hở & viết 3 điều khoản bịt lỗ hổng]`
   - *Prompt chuẩn doanh nghiệp:*
     ```text
     Đóng vai trò Kiểm soát nội bộ, hãy thẩm định dự thảo quy chế thưởng sau:
     "Nhân viên đạt doanh số trên 200 triệu/tháng sẽ được thưởng nóng ngay 10% doanh thu thuần vào ngày 5 tháng sau."

     Nhiệm vụ phản biện:
     1. Chỉ ra 3 kẽ hở hoặc rủi ro trục lợi lớn nhất (hợp đồng ảo hủy đơn sau nhận thưởng, nợ xấu, ghi nhận doanh thu non).
     2. Đề xuất 3 điều khoản bổ sung cụ thể để bịt kín các rủi ro trên trước khi trình Ban Giám Đốc.
     ```

4. **Tình huống 4: Email báo cáo sự cố Webinar & đo lường kết quả**
   - *Công thức chuẩn:* `[Vai trò Marketing] + [Số liệu định lượng & Sự cố] + [Cấu trúc 3 phần chuẩn email công sở]`
   - *Prompt chuẩn doanh nghiệp:*
     ```text
     Đóng vai Trưởng nhóm Marketing, hãy soạn email báo cáo kết quả Webinar gửi Giám đốc:
     - Dữ liệu thực tế: Chi phí 5.000.000đ | Người tham dự: 120 | Chốt đơn khóa học: 28 (Doanh thu: 56.000.000đ).
     - Sự cố kỹ thuật: 10 phút đầu bị rè micro khiến 15 người rời phòng sớm.
     - Hành động xử lý: Đã gửi video recap kèm voucher ưu đãi 15%, chuyển đổi thêm được 4 khách hàng.

     Yêu cầu: Tiêu đề email chuẩn quy chuẩn, văn phong công sở trang trọng, tách bạch rõ Kết quả - Sự cố - Giải pháp.
     ```

5. **Tình huống 5: Hợp đồng thuê Agency chạy quảng cáo xuất Word**
   - *Công thức chuẩn:* `[Vai trò Pháp chế] + [Thông tin 2 bên & Thỏa thuận kinh tế] + [Điều khoản bảo mật & Xuất Word]`
   - *Prompt chuẩn doanh nghiệp:*
     ```text
     Đóng vai Chuyên viên Pháp chế, hãy soạn Hợp đồng dịch vụ Marketing & Quảng cáo:
     - Bên A: Công ty TNHH Bán Lẻ Nova (Bên thuê).
     - Bên B: Công ty Truyền Thông Agency X (Bên thực hiện).
     - Thời hạn hợp đồng: 06 tháng | Phí dịch vụ: 30.000.000 VNĐ/tháng.
     - Điều khoản bắt buộc: Cam kết chỉ số chi phí trên đơn hàng (CPA) và Bảo mật tuyệt đối tệp dữ liệu khách hàng.

     Yêu cầu: Soạn đầy đủ các điều khoản pháp lý, bảng thông tin 2 bên và chữ ký để copy hoàn chỉnh sang Microsoft Word.
     ```

---

## 🛠️ DANH SÁCH TÀI LIỆU & CÔNG CỤ CẦN CHUẨN BỊ CHO BUỔI 2
1. Slide bài giảng tương tác Buổi 2 trên Web.
2. Trình mô phỏng Prompt tương tác (Interactive Prompt Sandbox):
   - Nút copy prompt 1-chạm cho Email Tuần, Báo Cáo Ngày, Hợp Đồng Lao Động.
   - Hộp giả lập Phản Biện AI (Socratic Reverse QA).
3. Mẫu file Word (.docx) mẫu đối sánh chuẩn.
