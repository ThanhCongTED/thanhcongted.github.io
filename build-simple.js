const fs = require('fs');
const path = require('path');

console.log('=== Creating simple install-button.js ===');

// Tạo thư mục nếu chưa có
const distDir = 'dist/web';
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
  console.log(`Created directory: ${distDir}`);
}

// Code đơn giản cho install-button.js
const simpleCode = `import { LitElement, html, css } from 'https://cdn.jsdelivr.net/npm/lit@3.2.1/+esm';

class EspWebInstallButton extends LitElement {
  static properties = {
    manifest: { type: String }
  };

  static styles = css\`
    :host {
      display: block;
    }
    
    button {
      background: #007acc;
      color: white;
      border: none;
      padding: 12px 24px;
      border-radius: 4px;
      cursor: pointer;
      font-size: 16px;
      transition: all 0.2s;
    }
    
    button:hover {
      background: #005a9e;
    }
    
    button:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
    
    .status {
      margin-top: 10px;
      padding: 8px;
      border-radius: 4px;
      font-size: 14px;
    }
    
    .success {
      background: #d4edda;
      color: #155724;
    }
    
    .error {
      background: #f8d7da;
      color: #721c24;
    }
  \`;

  constructor() {
    super();
    this.manifest = 'manifest.json';
    this.installing = false;
    this.status = '';
  }

  async _install() {
    if (!('serial' in navigator)) {
      this.status = 'Trình duyệt không hỗ trợ Web Serial API';
      this.requestUpdate();
      return;
    }
    
    this.installing = true;
    this.status = 'Đang kết nối...';
    this.requestUpdate();
    
    try {
      // Kết nối với thiết bị
      const port = await navigator.serial.requestPort();
      await port.open({ baudRate: 115200 });
      
      this.status = 'Đang tải firmware...';
      this.requestUpdate();
      
      // Tải manifest
      const response = await fetch(this.manifest);
      const manifest = await response.json();
      
      // Tải và flash firmware
      if (manifest.builds && manifest.builds[0]) {
        const firmwareUrl = manifest.builds[0].parts[0].path;
        const firmwareRes = await fetch(firmwareUrl);
        const firmware = await firmwareRes.arrayBuffer();
        
        this.status = 'Đang ghi firmware...';
        this.requestUpdate();
        
        // Ghi firmware
        const writer = port.writable.getWriter();
        await writer.write(new Uint8Array(firmware));
        writer.releaseLock();
        
        await port.close();
        
        this.status = '✅ Cài đặt thành công!';
      } else {
        this.status = '❌ Manifest không hợp lệ';
      }
      
    } catch (error) {
      console.error('Install failed:', error);
      this.status = \`❌ Lỗi: \${error.message}\`;
    } finally {
      this.installing = false;
      this.requestUpdate();
    }
  }

  render() {
    return html\`
      <button 
        @click=\${this._install}
        ?disabled=\${this.installing}
      >
        \${this.installing ? '⏳ Đang cài đặt...' : '🚀 Cài Đặt Firmware'}
      </button>
      
      \${this.status ? html\`
        <div class="status \${this.status.includes('✅') ? 'success' : 'error'}">
          \${this.status}
        </div>
      \` : ''}
    \`;
  }
}

customElements.define('esp-web-install-button', EspWebInstallButton);

// Export cho module
export { EspWebInstallButton };
`;

// Ghi file
const outputPath = path.join(distDir, 'install-button.js');
fs.writeFileSync(outputPath, simpleCode);

// Tạo manifest.json mẫu nếu chưa có
if (!fs.existsSync('manifest.json')) {
  const manifestContent = {
    "name": "AI-on-the-edge-device",
    "version": "16.0.0",
    "builds": [
      {
        "chipFamily": "ESP32",
        "parts": [
          {
            "path": "https://github.com/jomjol/AI-on-the-edge-device/releases/download/v16.0.0/firmware.bin",
            "offset": 0
          }
        ]
      }
    ]
  };
  
  fs.writeFileSync('manifest.json', JSON.stringify(manifestContent, null, 2));
  console.log('Created manifest.json');
}

// Tạo index.html mẫu nếu chưa có
if (!fs.existsSync('index.html')) {
  const htmlContent = `<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cài Đặt CAMERA_AI Đồng hồ nước</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        h1 {
            color: #007acc;
        }
        .container {
            border: 1px solid #ddd;
            border-radius: 8px;
            padding: 20px;
            margin-top: 20px;
        }
    </style>
    <script type="module" src="dist/web/install-button.js"></script>
</head>
<body>
    <h1>🔧 Cài Đặt Firmware AI-on-the-edge</h1>
    
    <div class="container">
        <h2>📥 Cài đặt firmware v16.0.0</h2>
        
        <esp-web-install-button manifest="manifest.json">
        </esp-web-install-button>
        
        <div style="margin-top: 20px; color: #666;">
            <h3>📋 Hướng dẫn:</h3>
            <ol>
                <li>Cắm ESP32 vào USB</li>
                <li>Giữ nút FLASH + nhấn RESET</li>
                <li>Nhấn nút cài đặt</li>
                <li>Chọn cổng COM</li>
                <li>Chờ hoàn tất (~1-2 phút)</li>
            </ol>
        </div>
    </div>
</body>
</html>`;
  
  fs.writeFileSync('index.html', htmlContent);
  console.log('Created index.html');
}

// Thông tin file
const stats = fs.statSync(outputPath);
const fileSize = (stats.size / 1024).toFixed(2);

console.log('\\n✅ Build completed successfully!');
console.log('📁 File created:', outputPath);
console.log('📊 File size:', fileSize + ' KB');
console.log('\\n📂 Files created:');
console.log('  - dist/web/install-button.js');
console.log('  - manifest.json');
console.log('  - index.html (nếu chưa có)');
console.log('\\n🚀 Mở index.html trong trình duyệt để sử dụng!');