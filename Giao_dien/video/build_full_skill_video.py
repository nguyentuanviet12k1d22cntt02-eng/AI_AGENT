import os
import sys
import asyncio
import subprocess
import json
import edge_tts
import wave
import numpy as np

if sys.stdout:
    sys.stdout.reconfigure(encoding='utf-8')
if sys.stderr:
    sys.stderr.reconfigure(encoding='utf-8')

VIDEO_PART1 = "d:/AI/AI_AGENT/Giao_dien/video/TẠO SKILL.mp4"
VIDEO_PART2 = "d:/AI/AI_AGENT/Giao_dien/video/NỐI TIẾP VIDEO TẠO SKILL .mp4"
BUILD_DIR = "d:/AI/AI_AGENT/Giao_dien/video/build_skill_full"
OUTPUT_VIDEO = "d:/AI/AI_AGENT/Giao_dien/video/Huong_dan_tao_va_su_dung_SKILL_Thuyet_minh.mp4"
VOICE = "vi-VN-NamMinhNeural" # Giọng nam chuyên nghiệp, truyền cảm

os.makedirs(BUILD_DIR, exist_ok=True)

script_items = [
    # [00:00 - 00:25] Giới thiệu & Truy cập giao diện Skills
    (1.0, "Chào mừng các bạn đến với video hướng dẫn tạo và kích hoạt Skill trên Gemini."),
    (6.0, "Trong bài học này, chúng ta sẽ học cách nạp kỹ năng Chuyên gia Marketing từ file SKILL.md."),
    (12.5, "Đầu tiên, các bạn truy cập vào mục Quản lý Skills trên thanh công cụ Gemini."),
    (18.5, "Tại đây, hệ thống cho phép bạn tạo kỹ năng thủ công hoặc tải lên từ file đóng gói sẵn."),

    # [00:25 - 00:55] Tải lên file SKILL.md (Upload a skill)
    (25.0, "Chúng ta nhấn vào biểu tượng Tải lên (Upload a skill) ở góc trên."),
    (31.0, "Hộp thoại tải lên xuất hiện, bạn chỉ việc chọn file SKILL.md đã chuẩn bị sẵn."),
    (38.0, "Hệ thống sẽ tự động đọc toàn bộ cấu hình: từ vai trò CMO, quy trình phân tích đến các nguyên tắc vận hành."),
    (46.0, "Ngay lập tức, kỹ năng marketing-expert-assistant đã được kích hoạt thành công trong danh sách Active!"),

    # [00:55 - 01:25] Kích hoạt Skill và đính kèm dữ liệu thực tế
    (54.0, "Bây giờ, chúng ta cùng trải nghiệm sức mạnh thực tế của kỹ năng này."),
    (60.0, "Hãy mở một cuộc trò chuyện mới trong Gemini."),
    (65.5, "Tại ô nhập lệnh, bạn gõ dấu gạch chéo xược marketing-expert-assistant để gọi kỹ năng."),
    (73.5, "Đồng thời, đính kèm file Excel chứa 400 đơn hàng E-commerce từ Shopee, Lazada và TikTok Shop."),
    (82.5, "Yêu cầu AI: Hãy sử dụng skill này để đánh giá và phân tích hiệu quả các kênh bán hàng trong file."),

    # [01:25 - 02:10] AI Agent tự hành phân tích dữ liệu đa kênh
    (91.0, "Ngay khi nhận lệnh, AI Agent sẽ tự động chạy code Python để bóc tách toàn bộ 400 đơn hàng."),
    (98.5, "Bước 1: AI xác định rõ chân dung khách hàng, hành vi mua sắm và nỗi đau của người tiêu dùng."),
    (107.0, "Bước 2: AI xuất bảng tổng quan hiệu suất chi tiết cho từng kênh bán hàng:"),
    (114.5, "Shopee chiếm 45% tổng số đơn với doanh thu hơn 64 triệu đồng."),
    (121.5, "Lazada đạt giá trị đơn hàng trung bình cao nhất, lên tới 506 nghìn đồng mỗi đơn."),
    (129.0, "TikTok Shop ghi nhận 113 đơn hàng, đóng góp hơn 46 triệu đồng doanh thu."),
    (136.5, "Tổng doanh thu thực thu đạt hơn 166 triệu đồng với tỷ lệ giao hàng thành công 95%!"),

    # [02:10 - 02:50] Đề xuất chiến lược tối ưu ROI & LTV
    (144.0, "Đặc biệt ở Bước 4, AI đóng đúng vai Giám đốc Marketing đưa ra hành động tối ưu chiến lược:"),
    (151.5, "Tập trung đẩy mạnh quảng cáo mặt hàng giá trị cao trên Lazada để tận dụng giá trị đơn lớn."),
    (158.0, "Tăng tần suất Livestream trên TikTok Shop cho ngành hàng Thời trang và Mỹ phẩm."),
    (164.0, "Thiết lập kịch bản chăm sóc khách hàng tự động sau 3 ngày để tối ưu giá trị vòng đời LTV!"),

    # [02:50 - 03:33] (PHẦN NỐI TIẾP) Trực quan hóa Báo cáo Web Canvas tương tác
    (171.0, "Tiếp theo, hãy cùng yêu cầu Gemini trực quan hóa toàn bộ báo cáo sang giao diện Web Canvas."),
    (177.0, "Bạn gõ câu lệnh: Hãy dựa vào thông tin trên, báo cáo cho tôi với giao diện web chế độ Canvas."),
    (184.5, "Gemini lập tức kích hoạt chế độ Canvas, tự động render một Dashboard tương tác chuyên nghiệp."),
    (192.0, "Tại tab Tổng quan, hệ thống hiển thị đầy đủ thẻ chỉ số KPI, biểu đồ cột kênh bán và biểu đồ tròn trạng thái đơn."),
    (199.5, "Các tab Customer Insights và Phễu nội dung cung cấp sẵn kịch bản quảng cáo mẫu kèm nút sao chép tiện lợi."),
    (206.5, "Đặc biệt, thanh trượt mô phỏng giúp bạn dự báo tức thì doanh thu khi tối ưu giá trị đơn hàng!")
]

async def generate_single_tts(text, outfile):
    for attempt in range(6):
        try:
            communicate = edge_tts.Communicate(text, VOICE, rate="+6%")
            await communicate.save(outfile)
            return True
        except Exception as e:
            await asyncio.sleep(1.0 + attempt * 0.5)
    raise RuntimeError(f"Failed to generate TTS for: {text}")

async def run_all_tts():
    print("=== BƯỚC 1: SINH FILE ÂM THANH TTS ===")
    cue_metadata = []
    for i, (target_start, text) in enumerate(script_items):
        seg_mp3 = os.path.join(BUILD_DIR, f"seg_{i:02d}.mp3")
        await generate_single_tts(text, seg_mp3)
        
        seg_wav = os.path.join(BUILD_DIR, f"seg_{i:02d}.wav")
        subprocess.run([
            "ffmpeg", "-y", "-i", seg_mp3,
            "-ar", "48000", "-ac", "2", seg_wav
        ], capture_output=True, check=True)

        with wave.open(seg_wav, "rb") as wf:
            frames = wf.getnframes()
            rate = wf.getframerate()
            duration = frames / float(rate)

        cue_metadata.append({
            "index": i,
            "text": text,
            "target_start": target_start,
            "duration": duration,
            "wav_path": seg_wav
        })
        print(f"[{i:02d}] Start: {target_start:5.1f}s | Dur: {duration:4.2f}s | {text[:45]}...")
        await asyncio.sleep(0.2)
    return cue_metadata

cue_metadata = asyncio.run(run_all_tts())

# Adjust start times to prevent overlaps
current_time = 0.0
adjusted_cues = []
for cue in cue_metadata:
    start_t = max(cue["target_start"], current_time + 0.15)
    end_t = start_t + cue["duration"]
    current_time = end_t
    adjusted_cues.append({
        "index": cue["index"],
        "text": cue["text"],
        "start": start_t,
        "end": end_t,
        "duration": cue["duration"],
        "wav_path": cue["wav_path"]
    })

TOTAL_DURATION = 170.07 + 43.40 # 213.47 seconds
SAMPLE_RATE = 48000
total_samples = int(TOTAL_DURATION * SAMPLE_RATE)
master_audio_buffer = np.zeros((total_samples, 2), dtype=np.int16)

print(f"\n=== BƯỚC 2: GHÉP AUDIO TRACK VÀO TIMELINE TỔNG {TOTAL_DURATION:.2f}S ===")
for cue in adjusted_cues:
    with wave.open(cue["wav_path"], "rb") as wf:
        n_frames = wf.getnframes()
        raw_bytes = wf.readframes(n_frames)
        data = np.frombuffer(raw_bytes, dtype=np.int16).reshape(-1, 2)
        
        start_sample = int(cue["start"] * SAMPLE_RATE)
        end_sample = min(start_sample + len(data), total_samples)
        actual_len = end_sample - start_sample
        
        segment = master_audio_buffer[start_sample:end_sample].astype(np.int32) + data[:actual_len].astype(np.int32)
        master_audio_buffer[start_sample:end_sample] = np.clip(segment, -32768, 32767).astype(np.int16)

master_audio_wav = os.path.join(BUILD_DIR, "master_voiceover_clean.wav")
with wave.open(master_audio_wav, "wb") as wf:
    wf.setnchannels(2)
    wf.setsampwidth(2)
    wf.setframerate(SAMPLE_RATE)
    wf.writeframes(master_audio_buffer.tobytes())

print(f"Master audio generated: {master_audio_wav}")

print("\n=== BƯỚC 3: TẠO FILE PHỤ ĐỀ ASS ĐỒNG BỘ ĐẸP MẮT ===")
def format_ass_time(seconds):
    h = int(seconds // 3600)
    m = int((seconds % 3600) // 60)
    s = int(seconds % 60)
    cs = int((seconds - int(seconds)) * 100)
    return f"{h:01d}:{m:02d}:{s:02d}.{cs:02d}"

ass_path = os.path.join(BUILD_DIR, "subtitles.ass").replace("\\", "/")

ass_header = """[Script Info]
Title: Huong Dan Tao Va Su Dung Skill Ket Hop Canvas
ScriptType: v4.00+
WrapStyle: 0
ScaledBorderAndShadow: yes
YCbCr Matrix: TV.601
PlayResX: 1280
PlayResY: 720

[V4+ Styles]
Format: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding
Style: Default,Segoe UI,26,&H00FFFFFF,&H0000FFFF,&H00000000,&HA0000000,-1,0,0,0,100,100,0,0,1,3.2,1.8,2,40,40,36,1

[Events]
Format: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text
"""

events = []
for cue in adjusted_cues:
    start_str = format_ass_time(cue["start"])
    end_str = format_ass_time(cue["end"] + 0.15)
    text_clean = cue["text"].replace("\n", " ")
    events.append(f"Dialogue: 0,{start_str},{end_str},Default,,0,0,0,,{text_clean}")

with open(ass_path, "w", encoding="utf-8") as f:
    f.write(ass_header + "\n".join(events))

print(f"ASS subtitle file generated: {ass_path}")

print("\n=== BƯỚC 4: RENDER GHÉP NỐI 2 VIDEO + AUDIO MỚI + BURN PHỤ ĐỀ ===")
escaped_ass = ass_path.replace(":", "\\:")

# Concat filter in ffmpeg: join 0:v (170.07s) and 1:v (43.40s) -> apply ass filter -> map with 2:a (voiceover)
filter_complex = f"[0:v:0][1:v:0]concat=n=2:v=1:a=0[v_merged];[v_merged]ass='{escaped_ass}'[v_out]"

ffmpeg_render_cmd = [
    "ffmpeg", "-y",
    "-i", VIDEO_PART1,
    "-i", VIDEO_PART2,
    "-i", master_audio_wav,
    "-filter_complex", filter_complex,
    "-map", "[v_out]",
    "-map", "2:a",
    "-c:v", "libx264",
    "-preset", "medium",
    "-crf", "19",
    "-c:a", "aac",
    "-b:a", "192k",
    "-movflags", "+faststart",
    OUTPUT_VIDEO
]

print("Đang tiến hành ghép nối và render video hoàn chỉnh...")
subprocess.run(ffmpeg_render_cmd, check=True)

print(f"\n==========================================")
print(f"RENDER VIDEO GHÉP NỐI THÀNH CÔNG 100%!")
print(f"File video thành phẩm: {OUTPUT_VIDEO}")
print(f"Dung lượng: {os.path.getsize(OUTPUT_VIDEO) / (1024*1024):.2f} MB")
print(f"==========================================")
