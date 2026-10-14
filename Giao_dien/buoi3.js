/**
 * AI & AGENT WORKSHOP - BUỔI 03 LOGIC
 * Ứng Dụng Google NotebookLM Trong Văn Phòng: Từ Tổng Hợp Văn Bản Đến Xuất Bản Đa Phương Tiện
 * Bám sát Chương 2: Bài 5, 6, 7, 8, 9, 10 Giáo Trình Mở Rộng
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

    // Cập nhật trạng thái nút
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

  if (prevBtn) {
    prevBtn.addEventListener('click', () => goToSlide(currentSlide - 1));
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', () => goToSlide(currentSlide + 1));
  }

  // ==========================================
  // 2. KỊCH BẢN GIẢNG VIÊN (TELEPROMPTER NOTES)
  // ==========================================
  const speakerNotesData = {
    1: `
      <h4>Slide 1: Tổng Quan Buổi 3 - Kỷ Nguyên AI Grounded & NotebookLM</h4>
      <p class="tele-lead"><strong>Thông điệp cốt lõi:</strong> Hãy giải thoát học viên khỏi nỗi ám ảnh 'AI nói hươu nói vượn' bằng công nghệ Source Grounding.</p>
      <div class="tele-checklist">
        <div><strong>1. Đặt vấn đề:</strong> "Bao nhiêu anh chị từng gặp tình cảnh hỏi ChatGPT một chính sách công ty nhưng nó trả lời sai luật hoặc bịa thông tin?"</div>
        <div><strong>2. Định vị NotebookLM:</strong> Đây là 'Bộ não số' khép kín của riêng bạn. Nó chỉ trả lời dựa trên file bạn nạp vào, kèm trích dẫn số trang [1], [2].</div>
        <div><strong>3. Lộ trình Buổi 3:</strong> Đi qua trọn vẹn 6 bài (Bài 5 đến 10) từ Làm quen $\\rightarrow$ Tóm tắt $\\rightarrow$ Podcast $\\rightarrow$ Sơ đồ tư duy $\\rightarrow$ Video $\\rightarrow$ Infographic, kết thúc bằng 3 bài tập thực chiến.</div>
      </div>
    `,
    2: `
      <h4>Slide 2: [Bài 5] Làm Quen NotebookLM & Khám Phá 7 Vùng Làm Việc</h4>
      <p class="tele-lead"><strong>Mục tiêu:</strong> Học viên tạo tài khoản, làm quen giao diện và phân biệt được 7 khu vực chức năng.</p>
      <div class="tele-checklist">
        <div><strong>1. Thao tác mẫu:</strong> Hướng dẫn học viên mở tab mới gõ <code>notebooklm.google.com</code> và đăng nhập tài khoản Gmail/Workspace.</div>
        <div><strong>2. Chỉ rõ 7 vùng:</strong> Nhấn mạnh Vùng 1 (Nạp đa dạng tài liệu PDF, Drive, Web, YouTube) và Vùng 4 (Studio - Trái tim tạo ra sản phẩm đa phương tiện).</div>
        <div><strong>3. Điểm cộng RAG:</strong> Giải thích nhanh cơ chế Citation: Bấm vào số trích dẫn bên dưới câu trả lời là màn hình tự nhảy tới đúng vị trí nguồn.</div>
      </div>
    `,
    3: `
      <h4>Slide 3: [Bài 6] Ứng Dụng AI Tóm Tắt Văn Bản Dài</h4>
      <p class="tele-lead"><strong>Mục tiêu:</strong> Chuẩn hóa tư duy tóm tắt công sở: Không lấy bản tóm tắt cụt lủn mà cần 3 tầng giá trị.</p>
      <div class="tele-checklist">
        <div><strong>1. Phân tích slide P16-P17:</strong> Trình bày quy trình 6 bước siêu nhanh để nạp tài liệu và nhận bản tóm tắt tức thì.</div>
        <div><strong>2. Giải mã Prompt chuẩn P17:</strong> Phân tích vì sao phải có điều kiện: "Loại bỏ nội dung lặp lại", "Trình bày tiêu đề & mục lớn", "Dùng danh sách bullet".</div>
        <div><strong>3. Kêu gọi học viên:</strong> Bấm nút copy prompt để dùng ngay cho tình huống văn bản của riêng họ.</div>
      </div>
    `,
    4: `
      <h4>Slide 4: [Bài 7] Tạo Podcast Âm Thanh Đôi (Audio Overview)</h4>
      <p class="tele-lead"><strong>Mục tiêu:</strong> Học viên bất ngờ khi tài liệu khô khan biến thành cuộc đối thoại Radio sinh động.</p>
      <div class="tele-checklist">
        <div><strong>1. Giới thiệu tính năng:</strong> Audio Overview mô phỏng 2 chuyên gia (1 nam, 1 nữ) tranh luận sâu về nội dung tài liệu.</div>
        <div><strong>2. Tùy chỉnh (Customize):</strong> Hướng dẫn bấm vào nút tùy chỉnh để đưa prompt tiếng Việt, yêu cầu ngôn từ đời thường và ví dụ thực tế.</div>
        <div><strong>3. Ứng dụng thực tế:</strong> Rất thích hợp để nhân viên nghe trên xe hơi, lúc đi làm hoặc nghe lướt báo cáo trước cuộc họp.</div>
      </div>
    `,
    5: `
      <h4>Slide 5: [Bài 8] Tạo Sơ Đồ Tư Duy (Mind Map Generator)</h4>
      <p class="tele-lead"><strong>Mục tiêu:</strong> Nắm bắt cách trực quan hóa cấu trúc kiến thức thành cây sơ đồ logic.</p>
      <div class="tele-checklist">
        <div><strong>1. Bối cảnh sử dụng:</strong> Khi đọc tài liệu kỹ thuật, quy chế nội bộ dài hoặc phân tích thị trường có nhiều nhánh thông tin.</div>
        <div><strong>2. Kỹ thuật Prompt P21:</strong> Định rõ Chủ đề trung tâm $\\rightarrow$ Nhánh chính $\\rightarrow$ Nhánh phụ $\\rightarrow$ Từ khóa đắt giá.</div>
        <div><strong>3. Đánh giá:</strong> Giúp nhân viên mới học việc nhanh gấp 3 lần so với đọc văn bản word thông thường.</div>
      </div>
    `,
    6: `
      <h4>Slide 6: [Bài 9] Tạo Video Mô Tả Trực Quan (Video Overview)</h4>
      <p class="tele-lead"><strong>Mục tiêu:</strong> Trọng tâm bám sát slide 23/57: Tạo video thuyết trình bài giảng tự động.</p>
      <div class="tele-checklist">
        <div><strong>1. Điểm danh tính năng mới:</strong> Khám phá Studio $\\rightarrow$ Tổng quan bằng video, chọn phong cách (Tự động, Cổ điển, Bảng trắng...).</div>
        <div><strong>2. Phân tích hộp thoại máy chủ:</strong> Máy chủ AI hỏi: "Máy chủ AI nên tập trung vào điều gì?" $\\rightarrow$ Dán trọn vẹn bộ 6 yêu cầu chuẩn từ slide 23.</div>
        <div><strong>3. Demo trực quan:</strong> Nhấn mạnh sản phẩm video đầu ra có slide hình ảnh ăn khớp với giọng đọc thuyết minh chuyên nghiệp.</div>
      </div>
    `,
    7: `
      <h4>Slide 7: [Bài 10] Tạo Đồ Họa Thông Tin (Infographic) & Hình Ảnh Mô Tả</h4>
      <p class="tele-lead"><strong>Mục tiêu:</strong> Biến các con số và tiến trình thành ấn phẩm truyền thông nội bộ bắt mắt.</p>
      <div class="tele-checklist">
        <div><strong>1. Phân biệt với AI tạo ảnh nghệ thuật:</strong> Đây là ảnh đồ họa thông tin phục vụ truyền đạt ý tưởng, biểu đồ quy trình.</div>
        <div><strong>2. Prompt chuẩn P25:</strong> Nhấn mạnh "Thể hiện chính xác ý tưởng", "Phong cách trực quan dễ hiểu", "Phù hợp đối tượng xem".</div>
        <div><strong>3. Ứng dụng:</strong> Đăng bảng tin Workplace, slide họp hoặc gửi kèm email chào mừng nhân sự mới.</div>
      </div>
    `,
    8: `
      <h4>Slide 8: [Thực Hành Tình Huống] Bộ 3 Bài Tập Tình Huống Doanh Nghiệp</h4>
      <p class="tele-lead"><strong>Mục tiêu:</strong> Học viên giải quyết độc lập 3 bài toán thực tế công sở bằng Bài 6, 9, 10.</p>
      <div class="tele-checklist">
        <div><strong>1. Chia 3 trạm thực hành:</strong>
          <br>• Trạm 1: Tóm tắt Đề án Chiến lược Q3 (Bài 6).
          <br>• Trạm 2: Tạo Video Thuyết trình Chính sách Phúc lợi (Bài 9).
          <br>• Trạm 3: Thiết kế Infographic Onboarding 7 ngày (Bài 10).
        </div>
        <div><strong>2. Cơ chế 1-chạm:</strong> Hướng dẫn học viên bấm nút 'Sao chép dữ liệu mẫu' nạp vào NotebookLM, sau đó bấm 'Sao chép Prompt' để chạy ngay.</div>
        <div><strong>3. Chấm điểm & Trình chiếu:</strong> Gọi 2-3 học viên xung phong chia sẻ màn hình kết quả video và infographic.</div>
      </div>
    `
  };

  function updateSpeakerNotes(slideNum) {
    if (!drawerSlideTag || !drawerContent) return;
    drawerSlideTag.textContent = `SLIDE 0${slideNum} / 08`;
    drawerContent.innerHTML = speakerNotesData[slideNum] || '<p>Đang cập nhật ghi chú...</p>';
  }

  // Toggle drawer
  function toggleDrawer() {
    if (!speakerDrawer) return;
    speakerDrawer.classList.toggle('active');
  }

  if (speakerNotesToggle) {
    speakerNotesToggle.addEventListener('click', toggleDrawer);
  }
  if (closeDrawerBtn) {
    closeDrawerBtn.addEventListener('click', toggleDrawer);
  }

  // ==========================================
  // 3. TOÀN MÀN HÌNH (FULLSCREEN)
  // ==========================================
  if (fullscreenToggle) {
    fullscreenToggle.addEventListener('click', () => {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {
          console.warn('Lỗi bật fullscreen:', err);
        });
        fullscreenToggle.innerHTML = '<i class="fa-solid fa-compress"></i>';
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
          fullscreenToggle.innerHTML = '<i class="fa-solid fa-expand"></i>';
        }
      }
    });
  }

  // ==========================================
  // 4. LIGHTBOX PHÓNG TO ẢNH SLIDE & UI
  // ==========================================
  const imageLightbox = document.getElementById('imageLightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxCloseBtn = document.getElementById('lightboxCloseBtn');

  function openLightbox(src, caption) {
    if (!imageLightbox || !lightboxImg) return;
    lightboxImg.src = src;
    if (lightboxCaption) {
      lightboxCaption.textContent = caption || 'Xem ảnh chi tiết giáo trình';
    }
    imageLightbox.classList.add('active');
  }

  function closeLightbox() {
    if (!imageLightbox) return;
    imageLightbox.classList.remove('active');
  }

  if (lightboxCloseBtn) {
    lightboxCloseBtn.addEventListener('click', closeLightbox);
  }
  if (imageLightbox) {
    imageLightbox.addEventListener('click', (e) => {
      if (e.target === imageLightbox) {
        closeLightbox();
      }
    });
  }

  // Gắn sự kiện zoom ảnh cho các khung slide frame và UI thumbs
  document.querySelectorAll('.b3-slide-frame, .b3-ui-thumb, .clickable-preview').forEach(el => {
    el.addEventListener('click', () => {
      const img = el.querySelector('img');
      const caption = el.getAttribute('data-caption') || (img ? img.alt : '');
      if (img && img.src) {
        openLightbox(img.src, caption);
      }
    });
  });

  // ==========================================
  // 5. TABS TƯƠNG TÁC BÀI TẬP THỰC HÀNH (SLIDE 8)
  // ==========================================
  const exerciseTabBtns = document.querySelectorAll('.exercise-tab-btn');
  const exercisePanes = document.querySelectorAll('.exercise-pane');

  exerciseTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetPaneId = btn.getAttribute('data-tab');
      if (!targetPaneId) return;

      exerciseTabBtns.forEach(b => b.classList.remove('active'));
      exercisePanes.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetPane = document.getElementById(targetPaneId);
      if (targetPane) {
        targetPane.classList.add('active');
      }
    });
  });

  // ==========================================
  // 6. NÚT SAO CHÉP PROMPT & SAO CHÉP DỮ LIỆU
  // ==========================================
  function setupCopyButtons() {
    // Copy Prompt
    document.querySelectorAll('.copy-prompt-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-target');
        const textEl = document.getElementById(targetId);
        if (!textEl) return;

        const textToCopy = textEl.innerText.trim();
        navigator.clipboard.writeText(textToCopy).then(() => {
          const originalHTML = btn.innerHTML;
          btn.innerHTML = '<i class="fa-solid fa-check"></i> Đã sao chép prompt!';
          btn.style.background = '#10b981';
          btn.style.color = '#ffffff';

          setTimeout(() => {
            btn.innerHTML = originalHTML;
            btn.style.background = '';
            btn.style.color = '';
          }, 2200);
        }).catch(err => {
          console.error('Không thể sao chép:', err);
        });
      });
    });

    // Copy Sample Data
    document.querySelectorAll('.copy-data-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-target');
        const textEl = document.getElementById(targetId);
        if (!textEl) return;

        const textToCopy = textEl.innerText.trim();
        navigator.clipboard.writeText(textToCopy).then(() => {
          const originalHTML = btn.innerHTML;
          btn.innerHTML = '<i class="fa-solid fa-check"></i> Đã sao chép dữ liệu!';
          btn.style.background = '#059669';

          setTimeout(() => {
            btn.innerHTML = originalHTML;
            btn.style.background = '';
          }, 2200);
        }).catch(err => {
          console.error('Không thể sao chép dữ liệu:', err);
        });
      });
    });
  }

  setupCopyButtons();

  // ==========================================
  // 7. BÀN PHÍM ĐIỀU HƯỚNG & PHÍM TẮT
  // ==========================================
  document.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

    if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
      e.preventDefault();
      goToSlide(currentSlide + 1);
    } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
      e.preventDefault();
      goToSlide(currentSlide - 1);
    } else if (e.key === 's' || e.key === 'S') {
      e.preventDefault();
      toggleDrawer();
    } else if (e.key === 'Escape') {
      closeLightbox();
      if (speakerDrawer && speakerDrawer.classList.contains('active')) {
        toggleDrawer();
      }
    }
  });

  // Khởi động
  initPills();
  updateSpeakerNotes(1);
  if (prevBtn) {
    prevBtn.disabled = true;
    prevBtn.style.opacity = '0.35';
  }
});
