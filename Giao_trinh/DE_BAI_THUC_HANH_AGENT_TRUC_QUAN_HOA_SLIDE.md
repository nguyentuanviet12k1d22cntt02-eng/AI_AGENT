# ĐỀ BÀI THỰC HÀNH: ỨNG DỤNG AI AGENT TRỰC QUAN HÓA DỮ LIỆU & TỰ ĐỘNG THIẾT KẾ SLIDE TRÌNH CHIẾU CHIẾN LƯỢC

- **Khóa học**: Ứng Dụng AI Trong Văn Phòng & Kỷ Nguyên AI Agent
- **Chuyên đề**: Phân tích Dữ liệu Nâng cao & Tự động hóa Thiết kế Slide Báo cáo (Chương 4 & 5 Giáo trình Mở rộng)
- **Tệp dữ liệu thực hành đính kèm**:
  - 📗 **File Excel Đơn Hàng Chi Tiết (750 dòng)**: [`Giao_dien/assets/Bao_Cao_Kinh_Doanh_Chi_Tiet_2026.xlsx`](file:///d:/AI/AI_AGENT/Giao_dien/assets/Bao_Cao_Kinh_Doanh_Chi_Tiet_2026.xlsx) (Bao gồm đầy đủ Mã đơn, Ngày đặt, Kênh, Sản phẩm, Doanh thu, Chiết khấu, Trạng thái hoàn hủy, CSAT và Sheet Hướng dẫn nhiệm vụ).
  - 📄 **File CSV Tóm Tắt (36 dòng)**: [`Giao_dien/assets/du_lieu_kinh_doanh_da_kenh_2026.csv`](file:///d:/AI/AI_AGENT/Giao_dien/assets/du_lieu_kinh_doanh_da_kenh_2026.csv)
- **Đối tượng học viên**: Chuyên viên Phân tích Dữ liệu (Data Analyst), Trưởng phòng Kinh doanh, Marketing, Kế toán Quản trị, Trợ lý Ban Giám đốc.

---

## 🎯 1. BỐI CẢNH DOANH NGHIỆP & ĐỀ BÀI ĐẶT RA

### Bối cảnh:
Bạn đang đảm nhiệm vị trí **Chuyên viên Phân tích Dữ liệu (Lead Data Analyst)** tại một công ty thời trang & mỹ phẩm bán lẻ đa kênh tại Việt Nam. 

Ban Tổng Giám Đốc chuẩn bị có cuộc họp Chiến lược đặc biệt với Hội đồng Quản trị vào sáng mai để:
1. Đánh giá bức tranh tăng trưởng kinh doanh 9 tháng đầu năm 2026.
2. Mổ xẻ hiệu quả chi phí quảng cáo (ROAS) và các điểm nghẽn vận hành của 4 kênh: **Shopee**, **TikTok Shop**, **Website Direct**, và **Showroom Offline**.
3. Phê duyệt ngân sách và kế hoạch hành động trọng điểm cho Quý 4 (Mùa mua sắm cuối năm).

### Thách thức:
Thay vì lập một file Excel khô khan với hàng chục bảng biểu phức tạp mà lãnh đạo không có thời gian đọc, Giám Đốc giao nhiệm vụ cho bạn:
> *"Hãy sử dụng **AI Agent** để phân tích toàn bộ tệp dữ liệu kinh doanh 9 tháng, phát hiện ra các nghịch lý tiềm ẩn đằng sau sự tăng trưởng doanh số, sau đó tự động thiết kế bộ **Slide Báo Cáo Trực Quan Hóa Dữ Liệu 4 Trang** (theo phong cách Executive Strategic Deck) để tôi trình chiếu trực tiếp trước Hội đồng Quản trị."*

---

## 📊 2. BỘ DỮ LIỆU GIẢ LẬP KINH DOANH 9 THÁNG (36 DÒNG)

Học viên có thể tải file trực tiếp tại: [`Giao_dien/assets/du_lieu_kinh_doanh_da_kenh_2026.csv`](file:///d:/AI/AI_AGENT/Giao_dien/assets/du_lieu_kinh_doanh_da_kenh_2026.csv) hoặc sao chép đoạn dữ liệu dạng bảng dưới đây:

```csv
Thang,Kenh_Ban_Hang,Doanh_Thu_Trieu_VND,Chi_Phi_Ads_Trieu_VND,Don_Hang_Thanh_Cong,Ty_Le_Hoan_Huy_Percent,Gia_Tri_Don_TB_K_VND,CSAT_Rating
T1,Shopee,850,120,3400,4.2,250,4.7
T1,TikTok Shop,620,150,3100,8.5,200,4.4
T1,Website Direct,410,60,1170,2.1,350,4.8
T1,Showroom,520,40,650,1.2,800,4.9
T2,Shopee,920,130,3680,4.0,250,4.7
T2,TikTok Shop,780,190,3900,9.1,200,4.3
T2,Website Direct,430,65,1220,2.0,352,4.8
T2,Showroom,490,40,610,1.1,803,4.9
T3,Shopee,1100,160,4400,4.5,250,4.6
T3,TikTok Shop,1050,260,5250,10.2,200,4.2
T3,Website Direct,480,70,1330,2.2,360,4.8
T3,Showroom,580,45,710,1.0,816,4.9
T4,Shopee,1020,150,4080,4.3,250,4.7
T4,TikTok Shop,980,240,4900,9.8,200,4.3
T4,Website Direct,510,75,1380,2.1,369,4.8
T4,Showroom,610,45,740,1.2,824,4.9
T5,Shopee,1250,180,5000,4.6,250,4.6
T5,TikTok Shop,1350,340,6750,11.5,200,4.1
T5,Website Direct,550,80,1450,1.9,379,4.8
T5,Showroom,640,50,770,1.0,831,4.9
T6,Shopee,1400,210,5600,4.8,250,4.6
T6,TikTok Shop,1600,420,8000,12.1,200,4.0
T6,Website Direct,590,85,1510,1.8,390,4.9
T6,Showroom,670,50,800,0.9,837,4.9
T7,Shopee,1320,195,5280,4.4,250,4.7
T7,TikTok Shop,1450,380,7250,11.2,200,4.2
T7,Website Direct,620,90,1550,1.7,400,4.9
T7,Showroom,690,50,810,0.9,851,4.9
T8,Shopee,1480,220,5920,4.7,250,4.6
T8,TikTok Shop,1750,460,8750,12.8,200,4.0
T8,Website Direct,660,95,1610,1.6,409,4.9
T8,Showroom,720,55,830,0.8,867,4.9
T9,Shopee,1650,240,6600,4.5,250,4.7
T9,TikTok Shop,2100,550,10500,13.4,200,3.9
T9,Website Direct,710,100,1690,1.5,420,4.9
T9,Showroom,760,55,870,0.8,873,5.0
```

---

## 🔍 3. CÁC INSIGHT VÀ NGHỊCH LÝ CỐT LÕI AI AGENT CẦN PHÁT HIỆN

Học viên cần điều phối AI Agent tìm ra các phát hiện chiến lược sau:
1. **Nghịch lý TikTok Shop (Tăng trưởng nóng vs Báo động rủi ro)**:
   - Doanh thu tăng gấp **3.38 lần** (từ 620 triệu T1 lên 2.100 triệu T9), trở thành kênh doanh thu lớn nhất tháng 9.
   - *Mặt trái nguy hiểm*: Tỷ lệ hoàn hủy hàng tăng vọt từ **8.5% lên 13.4%**; điểm hài lòng khách hàng (CSAT) tụt dốc từ **4.4 xuống 3.9**; chi phí Ads tăng phi mã lên 550 triệu (hệ số ROAS suy giảm nghiêm trọng từ 4.13 xuống còn 3.81).
2. **Kênh Shopee (Cỗ máy tiền mặt ổn định - Cash Cow)**:
   - Tăng trưởng đều đặn và bền vững từ 850 triệu lên 1.650 triệu, ROAS giữ vững mức xuất sắc **6.8 - 7.0**, tỷ lệ hoàn hủy kiểm soát an toàn dưới **4.8%**, CSAT cao 4.6 - 4.7.
3. **Kênh Website Direct & Showroom (Biên lợi nhuận vàng & Trung thành cao)**:
   - Tỷ lệ hoàn đơn cực thấp (chỉ **0.8% - 2.1%**); Giá trị đơn hàng trung bình (AOV) cao nhất (350k - 873k); CSAT gần như hoàn hảo (**4.8 - 5.0**). Đây là kênh giữ chân khách hàng cần được mở rộng quy mô.

---

## 🤖 4. MASTER PROMPT ĐIỀU PHỐI AI AGENT TẠO BỘ SLIDE

Học viên sao chép toàn bộ Master Prompt dưới đây để gửi cho AI Agent (ChatGPT Plus/Team/Canvas, Google Gemini Advanced, Anthropic Claude, hoặc nạp vào Gamma App):

```markdown
Bạn là một AI Agent chuyên gia cao cấp về Phân tích Dữ liệu và Thiết kế Trình Chiếu Chiến Lược Doanh Nghiệp (Data Visualization & Strategic Deck Designer).

Dưới đây là tệp dữ liệu CSV kết quả kinh doanh 9 tháng năm 2026 của 4 kênh bán lẻ: Shopee, TikTok Shop, Website Direct, Showroom.
[Dán dữ liệu CSV vào đây]

Nhiệm vụ của bạn: Hãy phân tích số liệu và tự động khởi tạo BỘ SLIDE BÁO CÁO TRỰC QUAN HÓA DỮ LIỆU gồm 4 SLIDE theo đúng cấu trúc chuẩn bị cho cuộc họp Hội đồng Quản trị:

SLIDE 1: TỔNG QUAN ĐIỀU HÀNH & KẾT QUẢ KINH DOANH 9 THÁNG (EXECUTIVE SUMMARY)
- 3 Thẻ chỉ số KPI (KPI Cards): Tổng Doanh thu toàn công ty 9 tháng, Tốc độ tăng trưởng T9 so với T1, Tỷ suất lợi nhuận trung bình.
- Biểu đồ đề xuất: Stacked Bar Chart thể hiện cơ cấu đóng góp doanh thu của 4 kênh qua từng tháng (T1 đến T9).
- 1 Nhận định điều hành mang tính đòn bẩy cao nhất.

SLIDE 2: SO SÁNH HIỆU QUẢ CÁC KÊNH & ĐO LƯỜNG ROAS QUẢNG CÁO
- Bảng Ma trận so sánh: Kênh | Doanh thu T9 | Chi phí Ads | Hệ số ROAS (Doanh thu / Chi phí Ads) | AOV (Giá trị đơn trung bình) | Tỷ lệ hoàn đơn.
- Phân tích vị thế: Phân định rõ đâu là kênh "Cỗ máy tiền mặt" (Cash Cow), đâu là kênh "Ngôi sao tăng trưởng" và đâu là kênh "Trải nghiệm trung thành".

SLIDE 3: CẢNH BÁO NGUY CƠ: ĐIỂM NGHẼN HOÀN HỦY & SỤT GIẢM CSAT TRÊN TIKTOK SHOP
- Biểu đồ đề xuất: Biểu đồ đường kết hợp trục kép (Dual-axis Line Chart) chứng minh: Khi đơn hàng TikTok tăng từ 3.100 lên 10.500 đơn -> Tỷ lệ hoàn hủy leo thang từ 8.5% lên 13.4% và điểm CSAT tụt dốc từ 4.4 xuống 3.9.
- Chỉ ra 3 nguyên nhân cốt lõi về vận hành đóng gói, giao hàng trễ và quá tải CSKH.

SLIDE 4: ĐỀ XUẤT HÀNH ĐỘNG CHIẾN LƯỢC QUÝ 4 (ACTIONABLE STRATEGY & ROADMAP)
- 3 Đòn bẩy hành động cấp bách:
  1. Tối ưu quy trình vận hành TikTok Shop, hạ tỷ lệ hoàn hủy về dưới 7%.
  2. Tái cấu trúc ngân sách Ads: Tăng 30% ngân sách cho Website Direct và Showroom (kênh biên lợi nhuận cao, hoàn đơn <2%).
  3. Triển khai AI Agent chăm sóc khách hàng 24/7 để cải thiện CSAT.
- Lộ trình thực hiện dạng Timeline 60 ngày phân chia 3 giai đoạn rõ ràng.

Yêu cầu định dạng đầu ra:
- Cung cấp định dạng Markdown Slide chi tiết, mỗi slide có tiêu đề sắc bén, số liệu định lượng chính xác 100%, mã gợi ý trực quan (Chart Type & Visual Layout).
- Sẵn sàng xuất khẩu mã prompt sang Gamma App hoặc HTML/PPTX Dashboard.
```

---

## 🏆 5. TIÊU CHUẨN ĐÁNH GIÁ KẾT QUẢ CỦA HỌC VIÊN (RUBRIC 5 SAO)

| Tiêu chí | Mô tả tiêu chuẩn đạt yêu cầu | Điểm tối đa |
| :--- | :--- | :---: |
| **1. Tính chính xác của dữ liệu** | Toàn bộ số liệu Doanh thu, Chi phí Ads, ROAS, CSAT khớp 100% với bảng CSV, không bịa đặt số liệu. | 25đ |
| **2. Phát hiện nghịch lý sắc bén** | Chỉ rõ được điểm nghẽn hoàn hủy 13.4% và CSAT 3.9 của TikTok Shop đối lập với doanh thu bùng nổ. | 25đ |
| **3. Lựa chọn biểu đồ phù hợp** | Slide 1 dùng Stacked Bar; Slide 2 dùng Ma trận Matrix; Slide 3 dùng Dual-axis Line Chart; Slide 4 dùng Timeline. | 20đ |
| **4. Tính hành động (Actionable)** | Có đề xuất giải pháp cụ thể và số đo định lượng rõ ràng cho Quý 4 thay vì nói lý thuyết chung chung. | 20đ |
| **5. Thẩm mỹ & Trực quan** | Trình bày theo phong cách Executive Slide hiện đại, bố cục thông thoáng, dễ đọc trong 3 phút. | 10đ |

---

## 💡 6. CÁC BƯỚC HỌC VIÊN THỰC HÀNH TẠI LỚP (30 PHÚT)

1. **Bước 1 (3 phút)**: Truy cập trang web Buổi 3 tại [`Giao_dien/buoi3.html`](file:///d:/AI/AI_AGENT/Giao_dien/buoi3.html), di chuyển đến **Slide 8** và chọn tab **"Tình Huống 4 (AI Agent)"**.
2. **Bước 2 (2 phút)**: Nhấn nút **"Sao chép Toàn Bộ CSV"** hoặc tải tệp CSV mẫu về máy tính.
3. **Bước 3 (5 phút)**: Nhấn nút **"Sao chép Master Prompt"**, mở công cụ AI Agent (ChatGPT / Gemini / Claude) và dán toàn bộ nội dung câu lệnh cùng dữ liệu CSV.
4. **Bước 4 (15 phút)**: Quan sát AI Agent phân tích, tương tác tinh chỉnh thêm các biểu đồ và copy nội dung slide sang **Gamma App** (`gamma.app`) hoặc công cụ thiết kế slide để tạo slide thành phẩm.
5. **Bước 5 (5 phút)**: Trình chiếu và đối chiếu kết quả theo bảng Rubric đánh giá.
