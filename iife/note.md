1. IIFE là gọi hàm ngay lập tức, cú pháp (func)
()
2. Nên thêm ; trước IIFE
;(func)()
3. hàm ở trong IIFE sẽ không được gọi ở bên ngoài nhưng bên trong IIFE vẫn gọi bình thường
4. IIFE không có tính sử dụng lại vì ý 3
5. Khi sử dụng IIFE để mục đích che giấu các hàm, biến ở bên trong. không muốn bị ảnh hưởng bởi biến, hàm khác.Các thư viện thứ 3 sẽ thường dùng IIFE.Tính chất phạm vi bao đóng của IIFE là điểm mạnh
6. có nhiều cách để chạy IIFE vd:
;(func)()
or
;(func())