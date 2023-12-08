# Hướng dẫn Cài đặt và Chạy Dự Án 
## Cấu hình 
Bước 1: Clone code về sau đó đó mở terminal cd lần lượt tới hai thư mục là client và server, chạy lệnh: npm install cho từng cái. Cài đặt MongoDB Compass, tạo mới cơ sở dữ liệu usersNetWork, tiếp đến tạo một collection mới là Users, import file du_lieu_da_loc.csv vào collection này.

Bước 2: Sau khi đã tạo dịch vụ cosmosDB trên Azure (Cần phải tạo bảng và có dữ liệu) , tiến hành copy connectionString và tableName. Vào file server/src/config/tableClient.js đổi hai chuỗi trong câu lệnh: TableClient.fromConnectionString. 

Bước 3: sử dụng lệnh npm start trong cả hai thư mục client và server để chạy dự án (lưu ý nhớ cd vào hai thư mục này). 

Bước 4: Thực hiện test chức năng (tại màn hình đăng nhập cần nhập đúng UserName của người dùng còn mật khẩu có thể nhập tùy ý)
