# AI-on-the-edge-device Web Installer

## Cấu trúc file

1. **index.html** - Trang web cài đặt chính
2. **manifest.json** - File cấu hình cho ESP Web Tools
3. **console.html** - Trang console USB
4. **firmware/** - Thư mục chứa các file firmware

## Cách sử dụng

### Cài đặt firmware:
1. Mở `index.html` trong trình duyệt (Chrome/Edge/Firefox)
2. Kết nối ESP32 qua USB
3. Chuyển ESP32 sang chế độ bootloader:
   - Nhấn giữ nút FLASH + nhấn nút RESET
   - Hoặc kéo GPIO0 xuống LOW
4. Nhấn nút "Connect" và chọn thiết bị ESP32
5. Nhấn "Install" để cài đặt firmware

### Sử dụng USB Console:
1. Nhấn "Open USB Console" từ trang chính
2. Nhấn "Connect" và chọn thiết bị ESP32
3. Gõ lệnh và nhấn Enter để gửi

## Yêu cầu

- Trình duyệt hỗ trợ Web Serial API (Chrome 89+, Edge 89+, Firefox không hỗ trợ đầy đủ)
- Kết nối HTTPS hoặc localhost
- File firmware đúng phiên bản

## Lưu ý

- Luôn backup dữ liệu trước khi cài đặt
- Đảm bảo ESP32 ở chế độ bootloader
- SD card cần được format FAT32