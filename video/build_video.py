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

VIDEO_PATH = "d:/AI/AI_AGENT/Giao_dien/video/Sử dụng chatgpt.mp4"
BUILD_DIR = "d:/AI/AI_AGENT/Giao_dien/video/build"
OUTPUT_VIDEO = "d:/AI/AI_AGENT/Giao_dien/video/Huong_dan_su_dung_ChatGPT_Project_Thuyet_minh.mp4"
VOICE = "vi-VN-NamMinhNeural" # Giọng nam truyền cảm, chuẩn mực

os.makedirs(BUILD_DIR, exist_ok=True)

script_items = [
    # [00:00 - 00:25] Giới thiệu & Khởi tạo dự án
    (1.0, "Chào mừng các bạn đến với video hướng dẫn làm việc nhóm trên ChatGPT."),
    (5.8, "Để bắt đầu, tại thanh menu bên trái, các bạn chọn vào mục Dự án."),
    (10.5, "Sau đó, chúng ta nhấn vào nút Tạo ở góc trên bên phải."),
    (15.0, "Tại bảng Tạo dự án, hãy đặt tên cho dự án là Chuyên gia Marketing."),
    (20.0, "Ở phần bộ nhớ, chọn Bộ nhớ chỉ cho dự án để AI lưu trữ bối cảnh độc lập."),
    (24.5, "Nhấn Tạo dự án để hoàn tất bước khởi tạo."),

    # [00:25 - 00:52] Cung cấp tài liệu tri thức (Sources)
    (28.0, "Bước tiếp theo rất quan trọng: chúng ta sẽ nạp dữ liệu tri thức nội bộ cho AI."),
    (33.5, "Hãy chuyển sang tab Nguồn và nhấn nút Thêm nguồn."),
    (38.5, "Tải lên tài liệu tri thức doanh nghiệp chứa Brand DNA và tệp khách hàng mục tiêu."),
    (45.5, "File tài liệu đã được tải lên thành công và sẵn sàng làm nguồn tham chiếu."),

    # [00:52 - 01:25] Cấu hình Vai trò & Chỉ dẫn chuyên sâu (Custom Instructions)
    (51.0, "Tiếp theo, chúng ta cần định hình vai trò chuyên gia cho dự án."),
    (56.5, "Ở đây, mình sử dụng bộ khung Prompt định hình vai trò Giám đốc Marketing CMO."),
    (63.0, "Bộ chỉ dẫn này bao gồm sứ mệnh tối ưu doanh thu, nguyên tắc vận hành thực chiến,"),
    (70.0, "và giao thức phản hồi chuẩn mực giúp AI đưa ra câu trả lời chuyên sâu nhất."),
    (77.5, "Chúng ta sao chép toàn bộ nội dung chỉ dẫn này và dán vào phần cấu hình của dự án."),

    # [01:25 - 02:25] Chia sẻ dự án cho đồng nghiệp & Phân quyền
    (85.5, "Bây giờ là tính năng quan trọng nhất: Chia sẻ dự án cho phòng ban cùng làm việc."),
    (91.5, "Các bạn hãy nhấn vào nút Chia sẻ ở góc trên bên phải màn hình."),
    (97.0, "Hộp thoại chia sẻ hiện ra, chúng ta nhập email của đồng nghiệp cần mời vào."),
    (104.0, "Ví dụ ở đây, mình nhập địa chỉ email của bạn Việt vào ô người nhận."),
    (111.0, "Sau khi nhập xong, bạn nhấn gửi lời mời tham gia dự án."),
    (117.0, "Tiếp theo, hãy thiết lập quyền truy cập cho thành viên:"),
    (122.5, "Bạn có thể chọn Có thể trò chuyện nếu chỉ muốn đồng nghiệp hỏi đáp,"),
    (129.0, "hoặc Có thể chỉnh sửa nếu cho phép họ cập nhật thêm tài liệu tri thức."),
    (136.0, "Ngoài ra, bạn cũng có thể bấm nút Sao chép liên kết để gửi nhanh qua Zalo nội bộ."),

    # [02:25 - 03:03] Thành viên tham gia & Trải nghiệm thực tế
    (145.0, "Bây giờ, chúng ta cùng xem trải nghiệm từ phía đồng nghiệp được chia sẻ."),
    (151.5, "Khi thành viên mở email hoặc đường liên kết mời tham gia,"),
    (157.5, "họ sẽ truy cập trực tiếp vào không gian làm việc chung của dự án Chuyên gia Marketing."),
    (165.0, "Toàn bộ tài liệu doanh nghiệp và vai trò CMO đã được tích hợp sẵn sàng."),
    (171.5, "Bất kỳ ai trong nhóm cũng có thể giao bài toán để AI giải quyết một cách chuẩn xác!"),
    (178.0, "Chúc các bạn áp dụng thành công tính năng Dự án để tối ưu hóa hiệu suất làm việc nhóm!")
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
        
        # Convert seg_mp3 to wav for precise sample-level stitching
        seg_wav = os.path.join(BUILD_DIR, f"seg_{i:02d}.wav")
        subprocess.run([
            "ffmpeg", "-y", "-i", seg_mp3,
            "-ar", "48000", "-ac", "2", seg_wav
        ], capture_output=True, check=True)

        # Get exact duration
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
        await asyncio.sleep(0.3)
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

print("\n=== BƯỚC 2: GHÉP AUDIO TRACK CHÍNH XÁC VÀO TIMELINE 183.6S ===")
SAMPLE_RATE = 48000
TOTAL_DURATION = 183.6
total_samples = int(TOTAL_DURATION * SAMPLE_RATE)
master_audio_buffer = np.zeros((total_samples, 2), dtype=np.int16)

for cue in adjusted_cues:
    with wave.open(cue["wav_path"], "rb") as wf:
        n_frames = wf.getnframes()
        raw_bytes = wf.readframes(n_frames)
        data = np.frombuffer(raw_bytes, dtype=np.int16).reshape(-1, 2)
        
        start_sample = int(cue["start"] * SAMPLE_RATE)
        end_sample = min(start_sample + len(data), total_samples)
        actual_len = end_sample - start_sample
        
        # Overlay with clipping protection
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
Title: Huong Dan ChatGPT Projects
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

print("\n=== BƯỚC 4: RENDER VIDEO (MUTE GỐC + AUDIO MỚI + BURN PHỤ ĐỀ) ===")
escaped_ass = ass_path.replace(":", "\\:")

ffmpeg_render_cmd = [
    "ffmpeg", "-y",
    "-i", VIDEO_PATH,
    "-i", master_audio_wav,
    "-vf", f"ass='{escaped_ass}'",
    "-map", "0:v",
    "-map", "1:a",
    "-c:v", "libx264",
    "-preset", "medium",
    "-crf", "19",
    "-c:a", "aac",
    "-b:a", "192k",
    "-t", "183.6",
    "-movflags", "+faststart",
    OUTPUT_VIDEO
]

print("Đang tiến hành render video hoàn thiện...")
subprocess.run(ffmpeg_render_cmd, check=True)

print(f"\n==========================================")
print(f"RENDER VIDEO THÀNH CÔNG 100%!")
print(f"File video thành phẩm: {OUTPUT_VIDEO}")
print(f"Dung lượng: {os.path.getsize(OUTPUT_VIDEO) / (1024*1024):.2f} MB")
print(f"==========================================")
