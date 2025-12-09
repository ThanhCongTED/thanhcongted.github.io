1. Welcome
Dự án đồng hồ nước thông minh dùng ESP32 -CAMERA

Đây là tài liệu. Để biết mã nguồn, vui lòng truy cập

Các hệ thống dựa trên trí tuệ nhân tạo đã được thiết lập trong cuộc sống hàng ngày của chúng ta. Hãy nghĩ đến nhận dạng giọng nói hoặc hình ảnh. Hầu hết các hệ thống đều dựa vào bộ xử lý mạnh mẽ hoặc kết nối trực tiếp với đám mây để thực hiện các phép tính. Với sức mạnh ngày càng tăng của bộ xử lý hiện đại, các hệ thống AI đang tiến gần hơn đến người dùng cuối - thường được gọi là điện toán biên. Ở đây, điện toán biên này được đưa vào một ví dụ hướng đến thực tiễn, trong đó mạng lưới AI được triển khai trên thiết bị ESP32, tức là: AI ở biên.

1.1 Các tính năng chính
Tích hợp Tensorflow Lite (TFlite) - bao gồm trình bao bọc dễ sử dụng Xử lý hình ảnh nội tuyến (phát hiện đặc điểm, căn chỉnh, trích xuất ROI) Thiết bị nhỏ gọn và giá rẻ (3x4,5x2 cm³, < 10 EUR) Tích hợp camera và đèn chiếu sáng Giao diện web để quản trị và điều khiển Giao diện OTA để cập nhật trực tiếp thông qua giao diện web Tích hợp đầy đủ vào Home Assistant Hỗ trợ Influx DB 1 và 2 MQTT API REST 1.2 Idea Idea alt text 1.2.1 Hardware Watermeter All Main Size alt text 1.2.2 Web interface Watermeter alt text 1.2.3 Configuration Interface alt text Edit Reference Hãy tận hưởng niềm vui khi nghiên cứu những khả năng và ý tưởng mới.

Bài viết này nói về nhận dạng và số hóa hình ảnh, được thực hiện hoàn toàn trên bo mạch ESP32 giá rẻ sử dụng trí tuệ nhân tạo dưới dạng mạng nơ-ron tích chập (CNN). Mọi thứ, từ chụp ảnh (OV2640), tiền xử lý ảnh (tự động căn chỉnh, nhận dạng ROI) cho đến nhận dạng hình ảnh (cấu trúc CNN) và độ tin cậy của kết quả, đều được thực hiện trên một thiết bị giá rẻ chỉ 300.000 VND.

Tất cả được tích hợp trong một môi trường thiết lập và sử dụng dễ dàng, đảm nhiệm tất cả các quá trình xử lý và xử lý nền, bao gồm cả trình lập lịch công việc thông thường. Giao diện người dùng là một máy chủ web tích hợp, có thể dễ dàng điều chỉnh và cung cấp dữ liệu dưới dạng API với nhiều tùy chọn khác nhau.

Nhiệm vụ được trình bày ở đây là tự động đọc kết quả của đồng hồ nước dạng analog. Lượng nước tiêu thụ sẽ được ghi lại trong một hệ thống tự động hóa của ngôi nhà và đồng hồ nước hoàn toàn là dạng analog mà không cần bất kỳ giao diện điện tử nào. Do đó, nhiệm vụ được giải quyết bằng cách thường xuyên chụp ảnh đồng hồ nước và số hóa kết quả đọc.

Có hai loại CNN được triển khai: một mạng phân loại để đọc các số chữ số và một mạng đầu ra đơn để số hóa các con trỏ analog cho các số đọc dưới chữ số.

Dự án này là một sự phát triển của hệ thống đồng hồ nước hoàn chỉnh, sử dụng ESP32-CAM chỉ để chụp ảnh và một ảnh Docker 1GB để chạy xương sống của mạng nơ-ron. Mọi thứ được tích hợp trong một mô-đun ESP32-CAM với 8MB RAM và thẻ SD làm bộ nhớ dữ liệu.