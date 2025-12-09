// connect.js - Phiên bản đơn giản
export function connect(button) {
    console.log("Connect button clicked", button);
    
    // Hiển thị trạng thái đang cài đặt
    button.updateState("installing");
    
    // Simulate installation
    setTimeout(() => {
        button.updateState("installed");
        alert("✅ Cài đặt thành công!");
    }, 3000);
}