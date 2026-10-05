/**
 * AI & AGENT WORKSHOP - CLEAN & MODERN PRESENTATION LOGIC
 * Smooth 2D Transitions, Next-Token Probability Simulator & Teacher Notes
 */

document.addEventListener('DOMContentLoaded', () => {
  const hasGSAP = typeof gsap !== 'undefined';

  // ==========================================
  // 1. SLIDE NAVIGATION WITH CLEAN 2D TRANSITIONS
  // ==========================================
  const totalSlides = 6;
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

  // Initialize navigation pills
  function initPills() {
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

  // Go to specific slide with gentle, clean transition
  function goToSlide(targetSlide) {
    if (targetSlide < 1 || targetSlide > totalSlides || targetSlide === currentSlide || isAnimating) {
      return;
    }

    const currentEl = document.getElementById(`slide-${currentSlide}`);
    const nextEl = document.getElementById(`slide-${targetSlide}`);
    const direction = targetSlide > currentSlide ? 1 : -1;

    if (!currentEl || !nextEl) return;

    isAnimating = true;

    // Pause any playing videos when moving away from current slide
    document.querySelectorAll('video').forEach((v) => {
      if (!v.paused) {
        v.pause();
      }
    });

    // Update pills status
    const pills = slidePillsContainer.querySelectorAll('.slide-pill');
    pills.forEach((p, idx) => {
      p.classList.toggle('active', idx + 1 === targetSlide);
    });

    currentSlide = targetSlide;

    // Update prev/next disabled state
    prevBtn.disabled = currentSlide === 1;
    nextBtn.disabled = currentSlide === totalSlides;
    prevBtn.style.opacity = currentSlide === 1 ? '0.35' : '1';
    nextBtn.style.opacity = currentSlide === totalSlides ? '0.35' : '1';

    // Update speaker notes
    updateSpeakerNotes(currentSlide);

    if (hasGSAP) {
      // Gentle slide exit
      gsap.to(currentEl, {
        opacity: 0,
        x: -direction * 24,
        duration: 0.25,
        ease: 'power2.inOut',
        onComplete: () => {
          currentEl.classList.remove('active');
          gsap.set(currentEl, { clearProps: 'all' });

          // Gentle slide enter
          nextEl.classList.add('active');
          gsap.fromTo(nextEl, 
            {
              opacity: 0,
              x: direction * 24
            },
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

          // Subtle stagger for content
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
      // Fallback without GSAP
      currentEl.classList.remove('active');
      nextEl.classList.add('active');
      isAnimating = false;
    }
  }

  // Next / Prev click listeners
  prevBtn.addEventListener('click', () => goToSlide(currentSlide - 1));
  nextBtn.addEventListener('click', () => goToSlide(currentSlide + 1));

  // Keyboard navigation
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
  // 2. SPEAKER NOTES TELEPROMPTER DATA (6 SLIDES)
  // ==========================================
  const speakerNotesData = {
    1: {
      timing: "15 phút",
      objective: "Phá bỏ ảo tưởng AI là thần thánh bằng tình huống thực tế kinh điển: Hỏi gà trả lời vịt.",
      talkingPoints: [
        "Mở màn: Chào mừng học viên đến với khóa học AI & AI Agent. Khẳng định: 'Muốn điều khiển một AI Agent tự hành làm việc, trước hết phải hiểu cỗ máy bên dưới hoạt động ra sao'.",
        "Chiếu Case Study thực tế: Đưa chuỗi 'strbeekaspoaispojkapsjdoihaiuwnxro;abhdiosdn' và hỏi 'có bao nhiêu chữ r'.",
        "Chỉ ra sự nghịch lý hài hước: ChatGPT không hề trả lời có mấy chữ r, mà lại đi đếm 'có 44 ký tự, nếu không tính dấu ; thì có 43 chữ cái'!",
        "Phân tích 3 lý do kỹ thuật: 1) Tokenization (bị băm nhỏ hơn 20 mảnh, không nhìn được chữ cái); 2) Attention Hijacking (bị hút vào dấu ; và độ dài chuỗi); 3) Next-Token Prediction (chỉ đoán từ ngữ theo thói quen bài tập đếm chuỗi chứ không hề chạy code đếm).",
        "ĐÚC KẾT THỰC CHIẾN CHO DÂN VĂN PHÒNG: Khi ném hợp đồng 20 trang hoặc bảng Excel lớn vào, AI cũng sẽ bị ngợp và đếm nhầm như vậy! Phải nhớ 3 quy tắc: 1) Khoanh vùng cụ thể (chỉ đọc Điều X, bỏ qua phần còn lại); 2) Đóng khung đầu ra (ép trả về bảng 2 cột, cấm viết văn xuôi lan man); 3) Tư duy quản lý (bắt AI xác nhận hiểu đề bài trước khi chốt số liệu).",
        "Cầu nối sang AI Agent: Agent văn phòng tương lai sẽ tự động mở file, lọc đúng cột và kiểm tra logic 100% trước khi nộp báo cáo!"
      ],
      questions: [
        "Tại sao người hỏi rất rõ ràng 'có bao nhiêu chữ r' mà ChatGPT lại tự ý đi đếm tổng số ký tự và dấu chấm phẩy?",
        "Nếu giao việc phân tích số liệu tài chính hay hợp đồng mà AI tự ý 'đoán ý rồi trả lời lạc đề' như vậy thì nguy hiểm thế nào?"
      ]
    },
    2: {
      timing: "20 phút",
      objective: "Dùng 2 hình ảnh đối đầu thực tế chứng minh cả 2 AI đều trả lời dựa trên xác suất chứ không biết thực tế.",
      talkingPoints: [
        "Chiếu song song 2 ảnh: ChatGPT (điền 'trong xanh.') và Gemini (điền 'Bầu trời hôm nay rất sấm sét').",
        "Chỉ ra sự mâu thuẫn: Cùng một câu lệnh, cùng một người hỏi tại cùng một giây, tại sao một bên bảo trời 'trong xanh', bên kia lại bảo trời 'sấm sét'?",
        "Hỏi học viên: Nếu AI thực sự thông minh và có mắt nhìn thấy thế giới, tại sao lại có 2 câu trả lời đá nhau chan chát như vậy?",
        "Bóc tách bản chất: ChatGPT chọn từ phổ biến nhất theo thống kê ('trong xanh'); còn Gemini bị con quay Temperature bốc trúng ô xác suất thấp ('sấm sét')!",
        "ĐÚC KẾT VĂN PHÒNG: 1) Luôn cấp dữ liệu nguồn; 2) Đối chiếu chéo; 3) THIẾT LẬP SKILL cho AI/Agent: tự động kiểm tra lại phép tính so với bảng dữ liệu và bắt buộc trích dẫn rõ nguồn (dòng mấy, cột mấy) để không bị nhầm số liệu!"
      ],
      questions: [
        "Nếu hỏi cùng một giây mà 2 AI trả lời trái ngược nhau 180 độ, liệu chúng ta có thể đem số liệu chưa kiểm chứng của AI đi báo cáo sếp không?"
      ]
    },
    3: {
      timing: "25 phút",
      objective: "Gắn liền bài giảng với Giáo trình cơ bản Sao Việt (Trang 18-25).",
      talkingPoints: [
        "Nhắc lại Trang 19 giáo trình: 'Người dùng là người quản lý, không phải người hỏi'.",
        "Nếu AI là cỗ máy xác suất, muốn có câu trả lời chuẩn, ta phải 'khóa không gian xác suất' bằng đủ 3 yếu tố: Nhiệm vụ + Ngữ cảnh + Tài liệu tham chiếu (Trang 28, 34).",
        "Nhấn mạnh Tư duy đa bước (Trang 24-25): Chia nhỏ bài toán phức tạp thành từng bước liên hoàn.",
        "Giới thiệu kỹ thuật Tương tác đảo ngược (Trang 43): Bắt AI hỏi lại mình trước khi nó viết bài."
      ],
      questions: [
        "Nếu nhân viên mới vào công ty chưa hiểu quy trình, bạn giao việc chung chung hay phải đưa tài liệu mẫu và quy định cụ thể? AI cũng y như vậy!"
      ]
    },
    4: {
      timing: "35 phút",
      objective: "Trang bị trọn bộ 4 Kỹ thuật Đặt lệnh & 2 Video thực hành thực chiến (ChatGPT Projects & Gemini Skills + Canvas).",
      talkingPoints: [
        "Kỹ thuật 1 - Phân vai chuyên sâu (Trang 26): Cấp chức danh, số năm kinh nghiệm và bối cảnh để AI chuyển đổi phong cách viết chuyên nghiệp.",
        "Kỹ thuật 2 - Đưa mẫu tham chiếu (Few-Shot - Trang 31): Đưa trước 1 dòng mẫu đầu ra mong muốn để AI bắt chước chuẩn 100%.",
        "Kỹ thuật 3 - Suy luận từng bước (Trang 24): Ép AI phân rã logic và tính toán từng phần trước khi chốt kết quả.",
        "Kỹ thuật 4 - Đóng khung định dạng & Lệnh cấm (Trang 35): Ép xuất bảng Markdown, cấm từ ngữ sáo rỗng.",
        "Công thức Master Prompt: [Vai trò] + [Nhiệm vụ] + [Bối cảnh/Dữ liệu] + [Định dạng/Lệnh cấm].",
        "Video 1 (3:03): Hướng dẫn tạo Dự án, nạp file tri thức nội bộ & chia sẻ nhóm trên ChatGPT.",
        "Video 2 (3:33): Nạp file cấu hình SKILL.md Chuyên gia Marketing, phân tích 400 đơn hàng & tự động tạo Web Canvas Dashboard tương tác trên Gemini."
      ],
      questions: [
        "Tại sao khi giao việc cho ChatGPT, việc đưa ra 1 ví dụ mẫu (Few-Shot) lại hiệu quả hơn việc giải thích bằng 10 câu văn xuôi?",
        "Tính năng Canvas trên Gemini giúp ích gì khi bạn cần trực quan hóa số liệu kinh doanh cho ban giám đốc?"
      ]
    },
    5: {
      timing: "20 phút",
      objective: "Tạo bước nhảy vọt (Bridge) từ LLM thụ động sang Kỷ nguyên AI Agent tự hành.",
      talkingPoints: [
        "Đặt câu hỏi: Dù đặt lệnh giỏi đến mấy, Chatbot vẫn chỉ là 'bộ não trong lọ thủy tinh' nếu không có công cụ.",
        "Giải pháp: Cấp cho nó CÔNG CỤ (Tools) gọi API, chạy Code Python, đọc dữ liệu máy tính, gửi email tự động.",
        "Giới thiệu 4 thành tố tạo nên một AI Agent: LLM (Bộ não) + Planning (Kế hoạch) + Memory (Trí nhớ) + Tools (Công cụ thực thi).",
        "Nhấn mạnh: AI Agent chính là giải pháp dứt điểm giải quyết sai lệch xác suất (như ví dụ 'sấm sét') bằng cách tự kích hoạt công cụ kiểm chứng dữ liệu thật 100%!"
      ],
      questions: [
        "Sự khác biệt lớn nhất giữa một 'Chatbot thông thường' và một 'AI Agent tự hành' là gì?"
      ]
    },
    6: {
      timing: "10 phút",
      objective: "Chốt 3 chân lý cốt lõi và hướng dẫn bài tập thực chiến Lập kế hoạch tuần chuẩn Quản lý.",
      talkingPoints: [
        "Yêu cầu học viên đọc lại 3 điều khắc cốt ghi tâm.",
        "Hướng dẫn bài tập thực hành: Lập Kế Hoạch Tuần bằng Kỹ thuật Tương tác đảo ngược (Trang 43 giáo trình).",
        "Nhấn mạnh: Để AI tự nghĩ 3-5 câu hỏi mấu chốt để mình trả lời, sau đó nhận bảng kế hoạch chuẩn 100%.",
        "Bật mí Buổi 2: Tự tay cấu hình một AI Agent có khả năng gọi công cụ tìm kiếm và phân tích số liệu."
      ],
      questions: [
        "Ai có thắc mắc gì về mô hình xác suất của AI trước khi kết thúc buổi 1 không?"
      ]
    }
  };

  function updateSpeakerNotes(slide) {
    const data = speakerNotesData[slide];
    if (!data) return;

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
    speakerDrawer.classList.toggle('open');
    speakerNotesToggle.classList.toggle('active', speakerDrawer.classList.contains('open'));
  }

  speakerNotesToggle.addEventListener('click', toggleSpeakerDrawer);
  closeDrawerBtn.addEventListener('click', toggleSpeakerDrawer);

  // Fullscreen toggle
  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
    }
  }
  fullscreenToggle.addEventListener('click', toggleFullscreen);

  // ==========================================
  // 3. SLIDE 1: CASE STUDY ACCORDION
  // ==========================================
  const btnExplainWhy = document.getElementById('btnExplainWhy');
  const whyExplanationBox = document.getElementById('whyExplanationBox');
  const zoomCaseStudy = document.getElementById('zoomCaseStudy');

  if (btnExplainWhy && whyExplanationBox) {
    btnExplainWhy.addEventListener('click', () => {
      const isHidden = whyExplanationBox.classList.contains('hidden');

      if (isHidden) {
        whyExplanationBox.classList.remove('hidden');
        btnExplainWhy.innerHTML = '<i class="fa-solid fa-chevron-up"></i> Thu gọn giải thích kỹ thuật';

        if (hasGSAP) {
          gsap.fromTo(whyExplanationBox.querySelectorAll('.reason-card'),
            { opacity: 0, y: 14 },
            { opacity: 1, y: 0, stagger: 0.08, duration: 0.35, ease: 'power2.out' }
          );
        }
      } else {
        whyExplanationBox.classList.add('hidden');
        btnExplainWhy.innerHTML = '<i class="fa-solid fa-lightbulb"></i> Tại sao AI lại trả lời kỳ quặc như vậy? (Giải mã kỹ thuật)';
      }
    });
  }

  // ==========================================
  // 4. IMAGE LIGHTBOX ZOOM
  // ==========================================
  const zoomGemini = document.getElementById('zoomGemini');
  const zoomChatGPT = document.getElementById('zoomChatGPT');
  const imageModal = document.getElementById('imageModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxClose = document.getElementById('lightboxClose');

  function openLightbox(src, caption) {
    lightboxImg.src = src;
    lightboxCaption.textContent = caption;
    imageModal.classList.add('open');

    if (hasGSAP) {
      gsap.fromTo('.lightbox-content', 
        { scale: 0.95, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.25, ease: 'power2.out' }
      );
    }
  }

  if (zoomCaseStudy) {
    zoomCaseStudy.addEventListener('click', () => {
      openLightbox('assets/chatgpt_count_r_bug.png', 'Case Study Slide 1: Người hỏi đếm chữ r, ChatGPT đi đếm tổng ký tự và dấu chấm phẩy');
    });
  }

  if (zoomGemini) {
    zoomGemini.addEventListener('click', () => {
      openLightbox('assets/gemini_samset.png', 'Minh chứng thực tế trên Google Gemini: "Bầu trời hôm nay rất sấm sét"');
    });
  }

  if (zoomChatGPT) {
    zoomChatGPT.addEventListener('click', () => {
      openLightbox('assets/chatgpt_trongxanh.png', 'Minh chứng thực tế trên OpenAI ChatGPT: "trong xanh."');
    });
  }

  if (lightboxClose) {
    lightboxClose.addEventListener('click', () => {
      imageModal.classList.remove('open');
    });
  }

  imageModal.addEventListener('click', (e) => {
    if (e.target === imageModal) {
      imageModal.classList.remove('open');
    }
  });

  // ==========================================
  // 5. COPY MISSION PROMPT TO CLIPBOARD
  // ==========================================
  const btnCopyMissionPrompt = document.getElementById('btnCopyMissionPrompt');
  const missionPromptText = document.getElementById('missionPromptText');
  const copyBtnText = document.getElementById('copyBtnText');

  if (btnCopyMissionPrompt && missionPromptText) {
    btnCopyMissionPrompt.addEventListener('click', () => {
      const textToCopy = missionPromptText.innerText.trim();
      navigator.clipboard.writeText(textToCopy).then(() => {
        btnCopyMissionPrompt.classList.add('copied');
        btnCopyMissionPrompt.innerHTML = '<i class="fa-solid fa-check"></i> <span>Đã sao chép!</span>';
        setTimeout(() => {
          btnCopyMissionPrompt.classList.remove('copied');
          btnCopyMissionPrompt.innerHTML = '<i class="fa-regular fa-copy"></i> <span>Sao chép</span>';
        }, 2200);
      }).catch(() => {
        // Fallback
        const textarea = document.createElement('textarea');
        textarea.value = textToCopy;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        btnCopyMissionPrompt.classList.add('copied');
        btnCopyMissionPrompt.innerHTML = '<i class="fa-solid fa-check"></i> <span>Đã sao chép!</span>';
        setTimeout(() => {
          btnCopyMissionPrompt.classList.remove('copied');
          btnCopyMissionPrompt.innerHTML = '<i class="fa-regular fa-copy"></i> <span>Sao chép</span>';
        }, 2200);
      });
    });
  }

  // Initialize
  initPills();
  goToSlide(1);
});
