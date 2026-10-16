/**
 * AI & AGENT WORKSHOP - BUỔI 04 LOGIC
 * Tự Động Hóa Google Sheets Với AI Agent & Google Cloud API: Báo Cáo Kho 3D
 */

document.addEventListener('DOMContentLoaded', () => {
  const hasGSAP = typeof gsap !== 'undefined';

  // ==========================================
  // 1. ĐIỀU HƯỚNG SLIDE
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

  // Khởi tạo thanh slide pills
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

    // Cập nhật pills
    if (slidePillsContainer) {
      const pills = slidePillsContainer.querySelectorAll('.slide-pill');
      pills.forEach((p, idx) => {
        p.classList.toggle('active', idx + 1 === targetSlide);
      });
    }

    currentSlide = targetSlide;

    // Cập nhật trạng thái nút điều hướng
    if (prevBtn) {
      prevBtn.disabled = currentSlide === 1;
      prevBtn.style.opacity = currentSlide === 1 ? '0.35' : '1';
    }
    if (nextBtn) {
      nextBtn.disabled = currentSlide === totalSlides;
      nextBtn.style.opacity = currentSlide === totalSlides ? '0.35' : '1';
    }

    // Cập nhật kịch bản giảng viên
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
        }
      });
    } else {
      currentEl.classList.remove('active');
      nextEl.classList.add('active');
      isAnimating = false;
    }
  }

  // Sự kiện nút Prev / Next
  if (prevBtn) {
    prevBtn.addEventListener('click', () => goToSlide(currentSlide - 1));
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', () => goToSlide(currentSlide + 1));
  }

  // Phím tắt bàn phím
  document.addEventListener('keydown', (e) => {
    // Tránh nhảy slide khi đang gõ trong input/textarea
    if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;

    if (e.key === 'ArrowRight' || e.key === 'PageDown') {
      e.preventDefault();
      goToSlide(currentSlide + 1);
    } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
      e.preventDefault();
      goToSlide(currentSlide - 1);
    } else if (e.key.toLowerCase() === 's') {
      e.preventDefault();
      toggleSpeakerDrawer();
    } else if (e.key.toLowerCase() === 'f') {
      e.preventDefault();
      toggleFullscreen();
    } else if (e.key === 'Escape') {
      if (speakerDrawer && speakerDrawer.classList.contains('active')) {
        toggleSpeakerDrawer(false);
      }
      closeLightbox();
    }
  });

  // Toàn màn hình
  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.warn('Lỗi bật toàn màn hình:', err);
      });
    } else {
      document.exitFullscreen().catch(err => {
        console.warn('Lỗi thoát toàn màn hình:', err);
      });
    }
  }
  if (fullscreenToggle) {
    fullscreenToggle.addEventListener('click', toggleFullscreen);
  }

  // ==========================================
  // 2. KỊCH BẢN GIẢNG VIÊN (SPEAKER NOTES)
  // ==========================================
  const speakerNotesData = {
    1: {
      title: "Mở Đầu: Bước Chuyển Mình Sang Tự Động Hóa Google Cloud API",
      time: "15 phút",
      notes: `
        <p><strong>🎯 Mục tiêu slide:</strong> Khơi gợi nỗi đau thao tác thủ công, giải thích tại sao văn phòng hiện đại cần kết nối AI Agent với Enterprise API.</p>
        <ul>
          <li><strong>Mở đầu:</strong> Hỏi học viên: <em>"Bao nhiêu bạn từng thức đến 11h đêm chỉ để copy số liệu từ các file Excel rời rạc rồi vẽ biểu đồ báo cáo cho sếp?"</em></li>
          <li><strong>Nhấn mạnh:</strong> Buổi 4 sẽ mở ra một chân trời mới: AI Agent không chỉ là chatbot trả lời câu hỏi, mà là một "kỹ sư tự động hóa" có thể can thiệp thẳng vào Google Sheets.</li>
          <li><strong>Giới thiệu sơ đồ:</strong> Bấm vào nút <strong>"Phóng To Sơ Đồ Gốc"</strong> để học viên thấy rõ luồng đi: GCP ➔ Service Account Key ➔ AI Agent ➔ Google Sheets 3D.</li>
        </ul>
      `
    },
    2: {
      title: "Thiết Lập Google Cloud Platform & Bật 2 API",
      time: "15 phút",
      notes: `
        <p><strong>🎯 Mục tiêu slide:</strong> Hướng dẫn học viên làm quen với Google Cloud Console và hiểu rõ chức năng của từng API.</p>
        <ul>
          <li><strong>Giải thích rõ:</strong> Google Sheets API là công cụ thao tác với dữ liệu ô tính và biểu đồ. Google Drive API là công cụ quản lý tệp và quyền truy cập.</li>
          <li><strong>Thao tác mẫu:</strong> Hướng dẫn tạo Project <code>Hello</code>, chờ Google khởi tạo tài nguyên.</li>
          <li><strong>Lưu ý:</strong> API hoàn toàn miễn phí cho hạn mức sử dụng cá nhân và doanh nghiệp vừa/nhỏ (hàng triệu requests mỗi ngày).</li>
        </ul>
      `
    },
    3: {
      title: "Khởi Tạo Service Account & Tải credential.json",
      time: "20 phút",
      notes: `
        <p><strong>🎯 Mục tiêu slide:</strong> Nắm vững khái niệm Service Account và nguyên tắc an ninh bảo mật khóa JSON.</p>
        <ul>
          <li><strong>Khái niệm cốt lõi:</strong> Service Account là "robot identity" – tài khoản riêng dành cho máy móc, không cần xác thực 2 bước (2FA/OTP).</li>
          <li><strong>Checklist thao tác:</strong> Đặt tên <code>Tuanviet</code>, tạo Key dạng JSON, tải về máy.</li>
          <li><strong>Quy chuẩn thư mục:</strong> Tạo thư mục <code>Desktop/hello</code>, đổi tên file thành <code>credential.json</code> và lưu email vào <code>ten mail.txt</code>.</li>
          <li><strong>Cảnh báo đỏ:</strong> Nhấn mạnh nguyên tắc Zero Trust: Không bao giờ đẩy file này lên GitHub công khai!</li>
        </ul>
      `
    },
    4: {
      title: "Đồng Bộ Google Drive Desktop & Kiến Trúc Hybrid",
      time: "15 phút",
      notes: `
        <p><strong>🎯 Mục tiêu slide:</strong> Hiểu mô hình làm việc Hybrid: Mã nguồn chạy tốc độ cao trên Local nhưng dữ liệu luôn được backup trên Cloud.</p>
        <ul>
          <li><strong>Thực hành:</strong> Cài đặt Google Drive for Desktop, cấu hình đồng bộ thư mục <code>Desktop/hello</code>.</li>
          <li><strong>Kiểm tra kết quả:</strong> Mở <code>drive.google.com</code> trên trình duyệt để học viên thấy thư mục và file khóa đã xuất hiện an toàn.</li>
          <li><strong>Lợi ích:</strong> Giúp dự án sẵn sàng mở rộng triển khai lên server hoặc chia sẻ trong nhóm làm việc.</li>
        </ul>
      `
    },
    5: {
      title: "Cái Bắt Tay Bảo Mật (Security Handshake) Cấp Quyền Sheet",
      time: "15 phút",
      notes: `
        <p><strong>🎯 Mục tiêu slide:</strong> Xóa tan 90% lỗi kết nối thường gặp nhất của học viên: Lỗi 403 Forbidden.</p>
        <ul>
          <li><strong>Tình huống:</strong> Học viên thường thắc mắc: <em>"Tại sao em có file credential.json rồi mà AI vẫn báo lỗi không ghi được?"</em></li>
          <li><strong>Nguyên lý:</strong> File Google Sheet thuộc về tài khoản cá nhân. Phải nhấn <strong>Chia sẻ (Share)</strong> và cấp quyền <strong>Editor</strong> cho email của Service Account!</li>
          <li><strong>Thực hành:</strong> Hướng dẫn copy Spreadsheet ID từ thanh địa chỉ trình duyệt.</li>
        </ul>
      `
    },
    6: {
      title: "Rạp Chiếu Video Thực Hành: Toàn Bộ 37 Phân Cảnh (10:54)",
      time: "25 phút",
      notes: `
        <p><strong>🎯 Mục tiêu slide:</strong> Trình chiếu video thực tế dài 10 phút 54 giây, hướng dẫn học viên theo dõi chi tiết từng thao tác.</p>
        <ul>
          <li><strong>Tương tác thông minh:</strong> Sử dụng danh mục 37 Chapter bên phải để tua nhanh tới bất kỳ phân đoạn nào học viên chưa hiểu rõ.</li>
          <li><strong>Nhạc nền & Phụ đề:</strong> Video đã được remix beat Syensan bắt tai, lọc giọng hát và giữ trọn phụ đề tiếng Việt đồng bộ.</li>
          <li><strong>Khuyến khích:</strong> Cho học viên bấm tải video về máy để xem lại sau buổi học.</li>
        </ul>
      `
    },
    7: {
      title: "Vòng Lặp Tự Sửa Lỗi (Self-Debugging) Của AI Agent",
      time: "15 phút",
      notes: `
        <p><strong>🎯 Mục tiêu slide:</strong> Phân tích tư duy Agentic AI: Khả năng phản biện, bắt lỗi và tự hồi phục mã nguồn (Self-Healing).</p>
        <ul>
          <li><strong>Tình huống phút 09:02:</strong> Google Sheets API từ chối tạo Column Chart 3D.</li>
          <li><strong>Bài học lớn:</strong> Đừng sợ lỗi khi lập trình cùng AI! Hãy học cách đọc lỗi cùng Agent và để Agent tự điều chỉnh sang <code>BAR_3D</code> và <code>PIE_3D</code>.</li>
          <li><strong>Tư duy quản trị:</strong> Con người làm chủ mục tiêu (Goal-oriented), AI Agent tự tìm giải pháp kỹ thuật tối ưu.</li>
        </ul>
      `
    },
    8: {
      title: "Thử Thách Master: Xây Dựng Dashboard Kho 3D 20 SKU",
      time: "20 phút",
      notes: `
        <p><strong>🎯 Mục tiêu slide:</strong> Học viên tự tay copy Prompt mẫu, dán vào Antigravity IDE và ngắm nhìn Dashboard 3D xuất hiện trên Google Sheets của mình.</p>
        <ul>
          <li><strong>Thực hành ngay:</strong> Yêu cầu học viên bấm nút <strong>"Sao chép Prompt"</strong>, thay thế <code>SPREADSHEET_ID</code> và bấm Run.</li>
          <li><strong>Đánh giá kết quả:</strong> Kiểm tra xem bảng tính của học viên đã có đủ 4 thẻ KPI, biểu đồ thanh 3D, biểu đồ tròn 3D và định dạng cảnh báo tồn kho chưa.</li>
          <li><strong>Tổng kết:</strong> Chúc mừng học viên đã chinh phục trọn vẹn năng lực Tự Động Hóa Google Cloud với AI Agent!</li>
        </ul>
      `
    }
  };

  function updateSpeakerNotes(slideNum) {
    if (!drawerContent || !drawerSlideTag) return;
    const data = speakerNotesData[slideNum] || {
      title: `Kịch Bản Slide ${slideNum}`,
      time: "10-15 phút",
      notes: "<p>Nội dung giảng dạy đang được cập nhật.</p>"
    };

    drawerSlideTag.textContent = `Slide ${slideNum} / ${totalSlides} • ${data.time}`;
    drawerContent.innerHTML = `
      <h4 style="font-size:1.05rem; font-weight:800; color:#0f172a; margin-bottom:0.75rem;">${data.title}</h4>
      ${data.notes}
    `;
  }

  function toggleSpeakerDrawer(forceState) {
    if (!speakerDrawer) return;
    const shouldOpen = typeof forceState === 'boolean' ? forceState : !speakerDrawer.classList.contains('active');
    speakerDrawer.classList.toggle('active', shouldOpen);
    speakerDrawer.setAttribute('aria-hidden', !shouldOpen);
    if (shouldOpen) {
      updateSpeakerNotes(currentSlide);
    }
  }

  if (speakerNotesToggle) {
    speakerNotesToggle.addEventListener('click', () => toggleSpeakerDrawer());
  }
  if (closeDrawerBtn) {
    closeDrawerBtn.addEventListener('click', () => toggleSpeakerDrawer(false));
  }

  // ==========================================
  // 3. TRÌNH PHÁT VIDEO & CHAPTER TIMELINE
  // ==========================================
  const videoPlayer = document.getElementById('courseVideoPlayer');
  const chaptersListContainer = document.getElementById('chaptersListContainer');
  const restartVideoBtn = document.getElementById('restartVideoBtn');

  if (chaptersListContainer && videoPlayer) {
    const chapterButtons = chaptersListContainer.querySelectorAll('.chapter-item');

    chapterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetSeconds = parseFloat(btn.getAttribute('data-time') || '0');
        videoPlayer.currentTime = targetSeconds;
        videoPlayer.play().catch(e => console.log('Auto-play blocked:', e));

        chapterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });

    // Tự động highlight chapter theo thời gian phát video
    videoPlayer.addEventListener('timeupdate', () => {
      const curTime = videoPlayer.currentTime;
      let activeBtn = null;

      chapterButtons.forEach(btn => {
        const t = parseFloat(btn.getAttribute('data-time') || '0');
        if (curTime >= t) {
          activeBtn = btn;
        }
      });

      if (activeBtn && !activeBtn.classList.contains('active')) {
        chapterButtons.forEach(b => b.classList.remove('active'));
        activeBtn.classList.add('active');
      }
    });

    if (restartVideoBtn) {
      restartVideoBtn.addEventListener('click', () => {
        videoPlayer.currentTime = 0;
        videoPlayer.play().catch(e => console.log(e));
      });
    }
  }

  // ==========================================
  // 4. LIGHTBOX MODAL CHO SƠ ĐỒ GỐC
  // ==========================================
  const diagramLightbox = document.getElementById('diagramLightbox');
  const openDiagramModalBtn = document.getElementById('openDiagramModalBtn');
  const previewDiagramCard = document.getElementById('previewDiagramCard');
  const closeLightboxBtn = document.getElementById('closeLightboxBtn');

  function openLightbox() {
    if (diagramLightbox) {
      diagramLightbox.classList.add('active');
      diagramLightbox.setAttribute('aria-hidden', 'false');
    }
  }

  function closeLightbox() {
    if (diagramLightbox) {
      diagramLightbox.classList.remove('active');
      diagramLightbox.setAttribute('aria-hidden', 'true');
    }
  }

  if (openDiagramModalBtn) {
    openDiagramModalBtn.addEventListener('click', openLightbox);
  }
  if (previewDiagramCard) {
    previewDiagramCard.addEventListener('click', openLightbox);
  }
  if (closeLightboxBtn) {
    closeLightboxBtn.addEventListener('click', closeLightbox);
  }
  if (diagramLightbox) {
    diagramLightbox.addEventListener('click', (e) => {
      if (e.target === diagramLightbox) {
        closeLightbox();
      }
    });
  }

  // ==========================================
  // 5. SAO CHÉP PROMPT BUỔI 4 (1-CLICK COPY)
  // ==========================================
  const copyPromptBuoi4Btn = document.getElementById('copyPromptBuoi4Btn');
  const promptTextBuoi4 = document.getElementById('promptTextBuoi4');

  if (copyPromptBuoi4Btn && promptTextBuoi4) {
    copyPromptBuoi4Btn.addEventListener('click', () => {
      const textToCopy = promptTextBuoi4.textContent || '';
      navigator.clipboard.writeText(textToCopy).then(() => {
        const originalHtml = copyPromptBuoi4Btn.innerHTML;
        copyPromptBuoi4Btn.innerHTML = '<i class="fa-solid fa-check"></i> Đã sao chép!';
        copyPromptBuoi4Btn.style.background = '#10b981';

        setTimeout(() => {
          copyPromptBuoi4Btn.innerHTML = originalHtml;
          copyPromptBuoi4Btn.style.background = '';
        }, 2200);
      }).catch(err => {
        console.error('Lỗi sao chép:', err);
      });
    });
  }

  // ==========================================
  // KHỞI ĐỘNG BAN ĐẦU
  // ==========================================
  initPills();
  updateSpeakerNotes(1);
});
