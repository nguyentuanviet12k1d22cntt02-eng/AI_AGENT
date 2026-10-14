/**
 * AI & AGENT WORKSHOP - BUỔI 02 LOGIC
 * Tư Duy Quản Lý Thực Chiến & Bộ 3 Vũ Khí Khởi Tạo Văn Bản Doanh Nghiệp
 */

document.addEventListener('DOMContentLoaded', () => {
  const hasGSAP = typeof gsap !== 'undefined';

  // ==========================================
  // 1. ĐIỀU HƯỚNG SLIDE 2D MƯỢT MÀ
  // ==========================================
  const totalSlides = 8;
  let currentSlide = 1;
  let isAnimating = false;

  const slidePages = document.querySelectorAll('.slide-page');
  const slidePillsContainer = document.getElementById('slidePillsContainer');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const speakerDrawer = document.getElementById('speakerDrawer');
  const speakerNotesToggle = document.getElementById('speakerNotesToggle');
  const closeDrawerBtn = document.getElementById('closeDrawerBtn');
  const drawerSlideTag = document.getElementById('drawerSlideTag');
  const drawerContent = document.getElementById('drawerContent');
  const fullscreenToggle = document.getElementById('fullscreenToggle');

  // Khởi tạo thanh chỉ số slide pills
  function initPills() {
    if (!slidePillsContainer) return;
    slidePillsContainer.innerHTML = '';
    for (let i = 1; i <= totalSlides; i++) {
      const pill = document.createElement('button');
      pill.className = `slide-pill ${i === currentSlide ? 'active' : ''}`;
      pill.textContent = i;
      pill.title = `Chuyển tới Slide ${i}`;
      pill.addEventListener('click', () => goToSlide(i));
      slidePillsContainer.appendChild(pill);
    }
  }

  // Chuyển slide
  function goToSlide(targetSlide) {
    if (targetSlide < 1 || targetSlide > totalSlides || targetSlide === currentSlide || isAnimating) {
      return;
    }

    const currentEl = document.getElementById(`slide-${currentSlide}`);
    const nextEl = document.getElementById(`slide-${targetSlide}`);
    const direction = targetSlide > currentSlide ? 1 : -1;

    if (!currentEl || !nextEl) return;

    isAnimating = true;

    // Cập nhật trạng thái pills
    if (slidePillsContainer) {
      const pills = slidePillsContainer.querySelectorAll('.slide-pill');
      pills.forEach((p, idx) => {
        p.classList.toggle('active', idx + 1 === targetSlide);
      });
    }

    currentSlide = targetSlide;

    // Cập nhật trạng thái nút prev / next
    if (prevBtn) {
      prevBtn.disabled = currentSlide === 1;
      prevBtn.style.opacity = currentSlide === 1 ? '0.35' : '1';
    }
    if (nextBtn) {
      nextBtn.disabled = currentSlide === totalSlides;
      nextBtn.style.opacity = currentSlide === totalSlides ? '0.35' : '1';
    }

    // Cập nhật kịch bản giảng viên teleprompter
    updateSpeakerNotes(currentSlide);

    if (hasGSAP) {
      gsap.to(currentEl, {
        opacity: 0,
        x: -direction * 24,
        duration: 0.25,
        ease: 'power2.inOut',
        onComplete: () => {
          currentEl.classList.remove('active');
          gsap.set(currentEl, { clearProps: 'all' });

          nextEl.classList.add('active');
          gsap.fromTo(nextEl, 
            { opacity: 0, x: direction * 24 },
            {
              opacity: 1,
              x: 0,
              duration: 0.35,
              ease: 'power2.out',
              onComplete: () => {
                isAnimating = false;
              }
            }
          );

          const fades = nextEl.querySelectorAll('.gsap-fade');
          if (fades.length) {
            gsap.fromTo(fades, 
              { opacity: 0, y: 12 },
              { opacity: 1, y: 0, stagger: 0.05, duration: 0.35, ease: 'power2.out' }
            );
          }

          const staggers = nextEl.querySelectorAll('.gsap-stagger');
          if (staggers.length) {
            gsap.fromTo(staggers, 
              { opacity: 0, y: 16 },
              { opacity: 1, y: 0, stagger: 0.07, duration: 0.4, ease: 'power2.out' }
            );
          }
        }
      });
    } else {
      currentEl.classList.remove('active');
      nextEl.classList.add('active');
      isAnimating = false;
    }
  }

  if (prevBtn) prevBtn.addEventListener('click', () => goToSlide(currentSlide - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => goToSlide(currentSlide + 1));

  // Điều hướng bằng bàn phím
  window.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT' || e.target.tagName === 'TEXTAREA') {
      return;
    }

    switch (e.key) {
      case 'ArrowRight':
      case ' ':
      case 'PageDown':
        e.preventDefault();
        goToSlide(currentSlide + 1);
        break;
      case 'ArrowLeft':
      case 'PageUp':
        e.preventDefault();
        goToSlide(currentSlide - 1);
        break;
      case 's':
      case 'S':
        e.preventDefault();
        toggleSpeakerDrawer();
        break;
      case 'f':
      case 'F':
        e.preventDefault();
        toggleFullscreen();
        break;
      default:
        const num = parseInt(e.key);
        if (num >= 1 && num <= totalSlides) {
          goToSlide(num);
        }
    }
  });

  // ==========================================
  // 2. KỊCH BẢN GIẢNG VIÊN BUỔI 02 (TELEPROMPTER)
  // ==========================================
  const speakerNotesData = {
    1: {
      timing: "10 phút",
      objective: "Bẻ gãy thói quen chat hỏi đáp vu vơ; xác lập tư duy Người Quản Lý điều khiển Thực tập sinh AI.",
      talkingPoints: [
        "Mở đầu: Chào mừng học viên đến Buổi 2. Nhắc lại Buổi 1: AI là cỗ máy đoán xác suất (Next-Token), Context Window có hạn.",
        "Cảnh báo rủi ro: Nếu để một cỗ máy đoán xác suất tự do trả lời, nó sẽ 'bịa số liệu', vi phạm pháp lý hoặc trả lời lý thuyết sáo rỗng.",
        "Khẳng định vị thế mới: Trong văn phòng, bạn KHÔNG PHẢI NGƯỜI HỎI. Bạn là NGƯỜI QUẢN LÝ (Supervisor). AI là Thực tập sinh siêu tốc.",
        "Quy trình quản lý: Quản lý phải cấp mục tiêu, cấp tài liệu nguồn, kiểm soát khuôn khổ và ký duyệt nghiệm thu.",
        "Giới thiệu 3 vũ khí hôm nay: Email báo cáo tuần, Báo cáo công việc ngày và Hợp đồng lao động chuẩn Bộ luật Lao động."
      ],
      questions: [
        "Tại sao khi hỏi AI câu ngắn ngủn như 'Làm sao để tăng doanh số?', nó chỉ trả về toàn lời khuyên chung chung không áp dụng được?",
        "Nếu nhân viên mới vào công ty chưa hiểu việc, bạn giao việc thế nào thì với AI cũng y như vậy!"
      ]
    },
    2: {
      timing: "25 phút",
      objective: "Truyền tải trọn vẹn Bộ 5 Quy Tắc Vàng Giao Việc Văn Phòng theo Giáo trình cơ bản Trang 18-19.",
      talkingPoints: [
        "Quy tắc 1: AI không hiểu ý – Chỉ hiểu lệnh. Ý nghĩ trong đầu bạn AI không đọc được, chỉ có câu lệnh cụ thể mới định hình kết quả.",
        "Quy tắc 2: Chuyển từ hỏi sang giao việc. Không hỏi 'viết sao cho hay', hãy giao nhiệm vụ và thẩm quyền cụ thể.",
        "Quy tắc 3: Mô tả đủ 3 chân kiềng: [Làm gì] + [Căn cứ dữ liệu nào] + [Định dạng đầu ra là gì].",
        "Quy tắc 4: Chia nhỏ việc lớn (Multi-step). Đừng bắt AI làm 1 lèo bản kế hoạch 20 trang. Hãy chia: Dàn ý -> Từng mục chi tiết -> Rà soát.",
        "Quy tắc 5: Luôn kiểm tra lại. Người dùng chịu trách nhiệm pháp lý và hành chính cuối cùng, không phải AI."
      ],
      questions: [
        "Vì sao một câu lệnh dài 5 dòng có cấu trúc lại mang lại hiệu quả cao hơn 10 lần một câu lệnh ngắn 1 dòng?"
      ]
    },
    3: {
      timing: "25 phút",
      objective: "Ma trận 6 kỹ thuật đánh giá & Thực hành Kỹ thuật Phản biện AI (Đặt câu hỏi ngược) theo Trang 20-22.",
      talkingPoints: [
        "Giới thiệu ma trận 6 kỹ thuật: Đọc đối chiếu thực tế, Bắt AI tự giải thích cơ sở, Kiểm tra dữ liệu đầu vào, So sánh chéo...",
        "Nhấn mạnh ĐẶC SẢN: Kỹ thuật Phản Biện AI (Socratic Reverse Challenge).",
        "Cách dùng: Khi AI xuất bản thảo, KHÔNG bấm dùng ngay. Hãy gõ lệnh phản biện: 'Hãy đọc lại văn bản trên và chỉ ra 3 điểm thiếu sót, mâu thuẫn logic hoặc rủi ro pháp lý lớn nhất?'.",
        "Hiệu ứng tâm lý: AI sẽ đổi góc nhìn sang vai 'Thanh tra kiểm toán' và tự lột trần các lỗi sai mà ban đầu nó bỏ sót!"
      ],
      questions: [
        "Tại sao khi ta thách thức 'Bạn có chắc chắn điều khoản này đúng luật không?', AI thường sẽ giật mình xin lỗi và đính chính lại số liệu chuẩn?"
      ]
    },
    4: {
      timing: "25 phút",
      objective: "Khắc sâu Quy trình kiểm soát chuẩn 4 bước & Prompt Khóa xác nhận theo Trang 23 giáo trình.",
      talkingPoints: [
        "Giới thiệu 4 bước chuẩn: Bước 1: Yêu cầu phân tích đề -> Bước 2: AI mô tả lại hiểu biết -> Bước 3: Người dùng bấm xác nhận -> Bước 4: AI mới thực hiện.",
        "Tại sao cần bước Khóa xác nhận? Tránh tình trạng AI hiểu sai đề bài rồi sinh ra hàng ngàn từ rác, gây lãng phí thời gian và ô nhiễm ngữ cảnh.",
        "Thực hành câu lệnh thần chú: 'Trước khi bắt đầu trả lời, hãy tóm tắt lại bài toán theo cách hiểu của bạn và CHỜ TÔI XÁC NHẬN rồi mới làm!'"
      ],
      questions: [
        "Có bao giờ bạn giao việc mà nhân viên làm xong mới biết họ hiểu nhầm đề bài chưa? Quy trình 4 bước này sinh ra để triệt tiêu vĩnh viễn rủi ro đó!"
      ]
    },
    5: {
      timing: "20 phút",
      objective: "Thực chiến Bài 3 mở rộng: Soạn Email Báo cáo Tuần đo lường KPI (+20% tương tác, 35 Leads) & Gửi Gmail.",
      talkingPoints: [
        "Bối cảnh bài toán: Nhân viên marketing Nguyễn Văn An báo cáo tuần 1 tháng 9/2026 gửi Trưởng phòng.",
        "Điểm mấu chốt của email công sở: Tiêu đề rõ ràng, lời chào trang trọng, tách bạch Công việc hoàn thành với Số liệu kết quả đo lường.",
        "Hướng dẫn học viên bấm nút 'Sao chép Prompt 1-chạm', dán vào ChatGPT/Gemini và trải nghiệm việc chuyển tiếp gửi thẳng qua Gmail."
      ],
      questions: [
        "So sánh giữa email toàn chữ văn xuôi với email có số liệu định lượng (+20% tương tác, 35 khách), sếp sẽ đánh giá năng lực của bạn ra sao?"
      ]
    },
    6: {
      timing: "20 phút",
      objective: "Thực chiến Bài 2 mở rộng: Soạn Báo cáo Công việc ngày chuẩn 5 khối hành chính, copy không lỗi sang MS Word.",
      talkingPoints: [
        "Bối cảnh bài toán: Báo cáo công việc hằng ngày ngày 30/05/2026 tại Trung tâm Tin Học Sao Việt.",
        "Phân tích chuẩn 5 khối: 1. Thông tin chung; 2. Công việc đã làm; 3. Kết quả đạt được; 4. Khó khăn/Điểm nghẽn; 5. Kế hoạch ngày tới.",
        "Kỹ thuật xuất định dạng: Ép AI dùng gạch đầu dòng rõ ràng, phân cách các phần để copy trực tiếp sang MS Word không bị lỗi thụt lề hay vỡ bảng."
      ],
      questions: [
        "Tại sao mục 'Khó khăn / Điểm nghẽn' lại là phần được các cấp quản lý đọc kỹ nhất trong một báo cáo ngày?"
      ]
    },
    7: {
      timing: "15 phút",
      objective: "Thực chiến Bài 1 mở rộng: Master Prompt HĐLĐ chuẩn Bộ luật Lao động, xuất link tải Word .docx & Giao bài tập.",
      talkingPoints: [
        "Bài toán đỉnh cao: Soạn Hợp đồng lao động 12 tháng (Công ty ABC tuyển Nhân viên Bán hàng Trần Thị Mai, 9 triệu/tháng).",
        "Master Prompt HR 15 năm kinh nghiệm: Đầy đủ 14 điều khoản thực tế, bảo mật, chấm dứt, BHXH, thuế TNCN.",
        "Yêu cầu kỹ thuật nâng cao: Khổ A4, Times New Roman 13, Header công ty, Footer số trang, bảng chữ ký 2 bên và xuất link tải file Word .docx.",
        "Chốt lại 3 chân lý Buổi 2 và hướng dẫn bài tập về nhà ứng dụng tại chính phòng ban của học viên."
      ],
      questions: [
        "Ai có thể tự tin áp dụng ngay Quy trình 4 Bước và kỹ thuật Phản biện để soạn thảo văn bản cho công việc ngày mai?"
      ]
    },
    8: {
      timing: "25 phút",
      objective: "Thực chiến 5 bài tập tình huống thực tế: Nắm vững bộ Prompt chuẩn doanh nghiệp (vừa vặn 5-8 dòng, đủ chuyên nghiệp, không dài dòng hàn lâm).",
      talkingPoints: [
        "Nhấn mạnh tiêu chuẩn vàng: Prompt cho AI không nên quá dài dòng hàn lâm gây ngợp, nhưng cũng không nên quá cộc lốc thiếu tính chuyên nghiệp. Độ dài lý tưởng là 5-8 dòng có cấu trúc 3 phần: [Vai trò/Bối cảnh] + [Dữ liệu & Ràng buộc] + [Định dạng đầu ra].",
        "Phân tích 5 tình huống: CSKH xử lý khủng hoảng (giữ chân khách), Khóa xác nhận cắt giảm OPEX Q4 (tránh làm bừa), Phản biện kiểm soát nội bộ (vạch kẽ hở gian lận), Email sự cố Webinar (định lượng 3 khối) và Hợp đồng Agency Ads (xuất Word).",
        "Hướng dẫn học viên quan sát tính chuyên nghiệp trong từng câu chữ: Có dữ liệu số cụ thể, có ràng buộc rủi ro rõ ràng, định dạng chuẩn quy chuẩn công sở.",
        "Cho học viên bấm nút Sao chép 1-chạm, dán trực tiếp vào ChatGPT / Gemini để kiểm chứng kết quả phản hồi sâu sắc và thực tế."
      ],
      questions: [
        "Một prompt vừa vặn 5-8 dòng có cấu trúc giúp AI làm việc chính xác hơn prompt 1 dòng cộc lốc ở những điểm nào?",
        "Trong 5 tình huống trên, bạn thấy tình huống nào sát sườn nhất với phòng ban của mình?"
      ]
    }
  };

  function updateSpeakerNotes(slide) {
    const data = speakerNotesData[slide];
    if (!data || !drawerSlideTag || !drawerContent) return;

    drawerSlideTag.textContent = `Slide ${slide} / ${totalSlides} (Thời lượng: ${data.timing})`;
    
    drawerContent.innerHTML = `
      <div class="notes-section">
        <div class="notes-heading"><i class="fa-solid fa-bullseye"></i> Mục tiêu sư phạm:</div>
        <div class="notes-text">${data.objective}</div>
      </div>
      <div class="notes-section">
        <div class="notes-heading"><i class="fa-solid fa-microphone-lines"></i> Kịch bản dẫn dắt & Nội dung cần nói:</div>
        <ul class="notes-questions">
          ${data.talkingPoints.map(point => `<li>${point}</li>`).join('')}
        </ul>
      </div>
      <div class="notes-section">
        <div class="notes-heading"><i class="fa-solid fa-comments"></i> Câu hỏi tương tác học viên (Socratic Questioning):</div>
        <ul class="notes-questions">
          ${data.questions.map(q => `<li>${q}</li>`).join('')}
        </ul>
      </div>
    `;
  }

  function toggleSpeakerDrawer() {
    if (!speakerDrawer) return;
    speakerDrawer.classList.toggle('open');
  }

  if (speakerNotesToggle) {
    speakerNotesToggle.addEventListener('click', toggleSpeakerDrawer);
  }

  if (closeDrawerBtn) {
    closeDrawerBtn.addEventListener('click', toggleSpeakerDrawer);
  }

  // Toàn màn hình
  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.warn(`Fullscreen error: ${err.message}`);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }

  if (fullscreenToggle) {
    fullscreenToggle.addEventListener('click', toggleFullscreen);
  }

  // ==========================================
  // 3. SAO CHÉP PROMPT 1-CHẠM (ONE-TOUCH COPY)
  // ==========================================
  document.querySelectorAll('.copy-prompt-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      const targetEl = document.getElementById(targetId);
      if (!targetEl) return;

      const textToCopy = targetEl.innerText || targetEl.textContent;
      navigator.clipboard.writeText(textToCopy.trim()).then(() => {
        const originalHTML = btn.innerHTML;
        btn.innerHTML = '<i class="fa-solid fa-check"></i> Đã sao chép!';
        btn.classList.add('copied');
        setTimeout(() => {
          btn.innerHTML = originalHTML;
          btn.classList.remove('copied');
        }, 2200);
      }).catch(err => {
        console.error('Copy failed: ', err);
      });
    });
  });

  // ==========================================
  // 4. WIDGET DEMO TƯƠNG TÁC PHẢN BIỆN AI
  // ==========================================
  const triggerChallengeBtn = document.getElementById('triggerChallengeBtn');
  const challengeResponseBox = document.getElementById('challengeResponseBox');

  if (triggerChallengeBtn && challengeResponseBox) {
    triggerChallengeBtn.addEventListener('click', () => {
      triggerChallengeBtn.disabled = true;
      triggerChallengeBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> AI đang tự phản biện & rà soát...';
      challengeResponseBox.style.display = 'block';
      challengeResponseBox.innerHTML = '<p style="color:#64748b; font-style:italic;">Đang quét toàn bộ các điều khoản và tìm kiếm lỗ hổng rủi ro...</p>';

      setTimeout(() => {
        triggerChallengeBtn.disabled = false;
        triggerChallengeBtn.innerHTML = '<i class="fa-solid fa-rotate-right"></i> Chạy lại thử nghiệm phản biện';
        challengeResponseBox.innerHTML = `
          <div style="background:#fef2f2; border:1px solid #fecaca; border-radius:8px; padding:12px; margin-top:8px;">
            <strong style="color:#dc2626;"><i class="fa-solid fa-triangle-exclamation"></i> AI tự phát hiện 3 rủi ro sau khi nhận câu hỏi ngược:</strong>
            <ul style="margin:8px 0 0 16px; color:#991b1b; font-size:0.88rem; line-height:1.5;">
              <li><strong>Rủi ro 1 (Pháp lý):</strong> Chưa quy định rõ thời hạn báo trước khi chấm dứt HĐLĐ 12 tháng theo Điều 35 & 36 Bộ luật Lao động 2019 (tối thiểu 30 ngày).</li>
              <li><strong>Rủi ro 2 (Tài chính):</strong> Mức lương 9.000.000đ chưa bóc tách rõ Lương cơ bản đóng BHXH và các khoản Phụ cấp không tính đóng BHXH.</li>
              <li><strong>Rủi ro 3 (Bảo mật):</strong> Chưa có điều khoản Cam kết không làm việc cho đối thủ cạnh tranh (Non-Compete Agreement - NCA) trong ngành bán lẻ.</li>
            </ul>
            <div style="margin-top:8px; font-size:0.82rem; color:#059669; font-weight:700;">
              <i class="fa-solid fa-circle-check"></i> Đề xuất: Đã tự động bổ sung 3 điều khoản bảo vệ doanh nghiệp vào bản thảo v2!
            </div>
          </div>
        `;
      }, 900);
    });
  }

  // ==========================================
  // 5. CHUYỂN TAB 5 BÀI TẬP TÌNH HUỐNG (SLIDE 8)
  // ==========================================
  const exerciseTabBtns = document.querySelectorAll('.exercise-tab-btn');
  const exercisePanes = document.querySelectorAll('.exercise-pane');

  exerciseTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-tab');
      exerciseTabBtns.forEach(b => b.classList.remove('active'));
      exercisePanes.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetPane = document.getElementById(targetId);
      if (targetPane) targetPane.classList.add('active');
    });
  });

  // Khởi tạo
  initPills();
  updateSpeakerNotes(1);
});
