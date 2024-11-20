-- CREATE DATABASE webbansach
USE webbansach

/* -------------------------------------------------------------------- */

INSERT INTO `users` (`username`, `password`, `email`, `last_name`, `first_name`, `sex`, `number_phone`, `shipping_address`, `purchase_address`)
VALUES
('cavoibien9888', '12345', 'cavoibien9888@gmail.com', 'Trần', 'Tấn Lộc', 'Nam', '0379383465', 'Dĩ An, Bình Dương', 'Dầu Tiếng, Bình Dương'),
('nguyenvanhoang', '12345', 'nguyenvanhoang@gmail.com', 'Nguyễn', 'Văn Hoàng', 'Nam', '0393456789', '123 Đường Lê Lợi, TP.HCM', '456 Đường Nguyễn Trãi, TP.HCM'),
('tranthilinh', '12345', 'tranthilinh@gmail.com', 'Trần', 'Thị Linh', 'Nữ', '0987654321', '789 Đường Lý Thường Kiệt, Hà Nội', '1010 Đường Phan Chu Trinh, Hà Nội'),
('lethimai', '12345', 'lethimai@gmail.com', 'Lê', 'Thị Mai', 'Nữ', '0343216789', '202 Đường Hai Bà Trưng, Đà Nẵng', '303 Đường Nguyễn Văn Linh, Đà Nẵng'),
('hoangminhtu', '12345', 'hoangminhtu@gmail.com', 'Hoàng', 'Minh Tú', 'Nam', '0678543210', '404 Đường Trần Phú, Hải Phòng', '505 Đường Quang Trung, Hải Phòng'),
('phamquanghieu', '12345', 'phamquanghieu@gmail.com', 'Phạm', 'Quang Hiếu', 'Nam', '0135792468', '606 Đường Lý Nam Đế, TP.HCM', '707 Đường Hoàng Văn Thụ, TP.HCM'),
('nguyenthihuyen', '12345', 'nguyenthihuyen@gmail.com', 'Nguyễn', 'Thị Huyền', 'Nữ', '0246813579', '808 Đường Nguyễn Tất Thành, TP.HCM', '909 Đường Nguyễn Khuyến, TP.HCM'),
('trinhthibich', '12345', 'trinhthibich@gmail.com', 'Trịnh', 'Thị Bích', 'Nữ', '0912333252', '1000 Đường Cách Mạng Tháng 8, Hà Nội', '1100 Đường Trương Định, Hà Nội'),
('dangquocduy', '12345', 'dangquocduy@gmail.com', 'Đặng', 'Quốc Duy', 'Nam', '0233445566', '1200 Đường Nguyễn Đình Chiểu, TP.HCM', '1300 Đường Nguyễn Bỉnh Khiêm, TP.HCM'),
('phanminhkhang', '12345', 'phanminhkhang@gmail.com', 'Phan', 'Minh Khang', 'Nam', '0344556677', '1400 Đường Hùng Vương, Bình Dương', '1500 Đường Nguyễn An Ninh, Bình Dương'),
('dothilien', '12345', 'dothilien@gmail.com', 'Đỗ', 'Thị Liên', 'Nữ', '0445566778', '1600 Đường Nguyễn Văn Cừ, TP.HCM', '1700 Đường Phạm Văn Bạch, TP.HCM');

/* -------------------------------------------------------------------- */

INSERT INTO `author` (`author_name`)
VALUES 
('Nguyễn Nhật Ánh'),
('Trần Thị Hồng Hạnh'),
('Lê Lương Minh'),
('Hoàng Anh Tú'),
('Phạm Quang Long'),
('Nguyễn Văn Huy'),
('Trịnh Thị Bích Ngọc'),
('Đặng Thiện Nguyên'),
('Phan Thị Lê'),
('Đỗ Thị Kim Anh'),
('Nhiều tác giả');

/* -------------------------------------------------------------------- */	

INSERT INTO `role` (`role_name`)
VALUES
('Admin'),
('User'),
('Staff');

/* -------------------------------------------------------------------- */	

INSERT INTO `book` (`book_name`, `descripstion`, `list_price`, `price`, `quantity`, `average_rating`)
VALUES 
('Đại Gia Gatsby', 'Một tiểu thuyết viết bởi tác giả người Mỹ F. Scott Fitzgerald.', 20000, 18999, 100, 4.5),
('Giết Con Chim Nhại', 'Một tiểu thuyết của Harper Lee được xuất bản vào năm 1960, là một tác phẩm nổi tiếng trong các trường học tại Mỹ.', 14000, 15000, 50, 4.8),
('1984', 'Một tiểu thuyết khoa học viễn tưởng và cảnh báo xã hội, được viết bởi tác giả George Orwell.', 25000, 19000, 20, 4.7),
('Kiêu Hãnh và Định Kiến', 'Một tiểu thuyết lãng mạn của Jane Austen. Nó đề cập đến các vấn đề về đẳng cấp, hôn nhân và đạo đức.', 51000, 87800, 250, 4.9),
('Kẻ Bắt Lúa Mạch', 'Một tiểu thuyết của J.D. Salinger kể về câu chuyện của Holden Caulfield, một thiếu niên.', 12000, 13000, 120, 4.2),
('Moby-Dick', 'Một tiểu thuyết của Herman Melville, kể về cuộc phiêu lưu của Ishmael, một thủy thủ.', 18000, 20000, 80, 4.3),
('Chúa Tể Những Chiếc Nhẫn', 'Một tiểu thuyết giả tưởng của J.R.R. Tolkien, kể về cuộc phiêu lưu của Bilbo Baggins.', 11000, 32000, 10, 4.8),
('Chiến Tranh và Hòa Bình', 'Một tiểu thuyết lịch sử của Lev Tolstoy, được coi là một trong những tác phẩm vĩ đại nhất của Tolstoy.', 27000, 212000, 50, 4.6),
('Cuộc Phiêu Lưu của Odysseus', 'Một tác phẩm sử thi Hy Lạp cổ đại do Homer viết, kể về cuộc phiêu lưu của Odysseus.', 22300, 11200, 180, 4.7),
('Thế Giới Mới Tuyệt Vời', 'Một tiểu thuyết dystopia của Aldous Huxley, khám phá khái niệm về một xã hội hoàn hảo.', 32000, 15000, 200, 4.4),
('Sách - Tự Học Tiếng Nhật Dành Cho Người Mới Bắt Đầu', 'Cuốn sách “Tự học tiếng Nhật dành cho người mới bắt đầu” được biên soạn với mục đích giúp những người mới  bắt đầu có được sự tiếp xúc nhẹ nhàng với tiếng Nhật', 75000, 85000, 62, 4.9);

/* -------------------------------------------------------------------- */	

INSERT INTO `book_author` (`book_id`, `author_id`)
VALUES
(1, 1),
(2, 2),
(3, 11),
(4, 6),
(5, 7),
(6, 5),
(7, 9),
(8, 4),
(9, 2),
(10, 3);

/* -------------------------------------------------------------------- */	

INSERT INTO `category` (`category_name`)
VALUES 
('Khoa học viễn tưởng'),
('Lịch sử'),
('Văn học cổ điển'),
('Tiểu thuyết lãng mạn'),
('Kinh dị'),
('Trinh thám'),
('Tâm lý'),
('Phát triển bản thân'),
('Hài hước'),
('Chính trị'),
('Kinh tế'),
('Văn học thiếu nhi'),
('Thể thao'),
('Thần thoại'),
('Tình yêu'),
('Phim ảnh'),
('Học thuật'),
('Địa lý'),
('Tự truyện'),
('Chuyện tình yêu'),
('Bí ẩn'),
('Lịch sử nghệ thuật'),
('Kỹ thuật'),
('Văn học hiện đại'),
('Sinh học'),
('Tội phạm'),
('Kỹ năng sống'),
('Thử thách');

/* -------------------------------------------------------------------- */	

INSERT INTO `book_genre` (`category_id`, `book_id`)
VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5),
(6, 6),
(7, 7),
(8, 8),
(9, 9),
(10, 10),
(1, 6),
(3, 4),
(5, 10),
(7, 9),
(2, 1),
(4, 2),
(6, 3),
(8, 5),
(10, 7);

/* -------------------------------------------------------------------- */	

INSERT INTO `delivery_method` (`dm_name`, `delivery_cost`, `description`)
VALUES 
   ('Giao hàng tiêu chuẩn', 15000, 'Giao hàng trong vòng 5-7 ngày làm việc'),
   ('Giao hàng nhanh', 20000, 'Giao hàng trong vòng 2-3 ngày làm việc'),
   ('Giao hàng hỏa tốc', 50000, 'Giao hàng trong ngày kế tiếp'),
   ('Giao hàng miễn phí', 0, 'Giao hàng trong vòng 7-10 ngày cho đơn hàng trên 1 triệu VNĐ');
   
/* -------------------------------------------------------------------- */	

INSERT INTO `evaluate` (`comment`, `rating_points`, `book_id`, `user_id`)
VALUES
('Sách đẹp, nhận hàng nhanh, đủ vừa rèn chữ, vừa lí thuyết vừa bài tập rất hay ạ', 4.5, 11, 5),
('sách thơm, như mô tả, chưa đọc nhưng chắc là sẽ dễ học', 5, 11, 9),
('Sách dạy dễ hiểu, hàng ok', 5, 11, 1);
('Sách đẹp, nhận hàng nhanh, đủ vừa rèn chữ, vừa lí thuyết vừa bài tập rất hay ạ', 4.5, 3, 2),
('sách thơm, như mô tả, chưa đọc nhưng chắc là sẽ dễ học', 5, 8, 7),
('Sách dạy dễ hiểu, hàng ok', 5, 5, 4);

/* -------------------------------------------------------------------- */	

INSERT INTO `favorite_book` (`book_id`, `user_id`)
VALUES
(11, 5), (11, 1), (11, 3), (11, 4), (11, 6), (11, 7),
(10, 5), (10, 2), (11, 2), (11, 10), (11, 9),  (11, 5);

/* -------------------------------------------------------------------- */	

INSERT INTO `image` (`img_name`, `check_icon`, `img_path`, `img_data`, `book_id`)
VALUES
('book.jpg', 0, 'https://salt.tikicdn.com/cache/750x750/ts/product/ff/e7/1e/486bb535e258f2d21708e434dccd9d6b.jpg.webp', 'data 1', 11),
('5s1d5s.jpg', 0, 'https://salt.tikicdn.com/ts/product/ab/72/01/40e8e5cd4437d4df9bb35810e638eae7.jpg', 'data 2', 7),
('klsioks.jpg', 0, 'https://thuviensachnoi.com/anh-book/chien-tranh-va-hoa-binh.webp', 'data 3', 2),
('komdkmods.png', 0, 'https://bizweb.dktcdn.net/thumb/1024x1024/100/363/455/products/dai-gia-gatsby-new-bia-mem-01.jpg?v=1696407622907', 'data 4', 1),
('iosdm5.jpg', 0, 'https://m.media-amazon.com/images/M/MV5BZWUyOTgyMzktMjhmNi00NThkLTkxMGEtMGU0ZDEzZWQxNjNlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg', 'data 5', 5),
('hsdids6.png', 0, 'https://salt.tikicdn.com/cache/w1200/ts/product/ae/20/e2/3eebdaad664c4fc803113ee7ffa41e3e.jpg', 'data 6', 9),
('abetrgc.jpg', 0, 'https://cdn0.fahasa.com/media/catalog/product/b/_/b_a-1---_c-nh_n-t_m.jpg', 'data 12', 12),
('652as5a.jpg', 0, 'https://cdn0.fahasa.com/media/catalog/product/8/9/8934974204480.jpg', 'data 13', 13),
('siujfsdvh.jpg', 0, 'https://cdn0.fahasa.com/media/catalog/product/u/n/untitled-2_44.jpg', 'data 14', 14),
('skodmso.jpg', 0, 'https://cdn0.fahasa.com/media/catalog/product/i/m/image_195509_1_10840.jpg', 'data 3', 3),
('dsukjsd.jpg', 0, 'https://cdn0.fahasa.com/media/catalog/product/k/i/kieu-hanh-va-dinh-kien---bia-ao-cung-1_2.jpg?_gl=1*3vnbds*_gcl_aw*R0NMLjE3MzIwMDU3NzguRUFJYUlRb2JDaE1JNWNEMW9vRG9pUU1WWVJGN0J4M2VtUVBXRUFBWUFTQUFFZ0lJaGZEX0J3RQ..*_gcl_au*MTE1MDA2NTg5OC4xNzMyMDA1NzY5*_ga*ODUzMTQzMDk3LjE3MzIwMDU3Njk.*_ga_460L9JMC2G*MTczMjAwNTc2OC4xLjEuMTczMjAwNjk4NC42MC4wLjY5MDk2ODMy', 'data 4', 4),
('sndjocn5.jpg', 0, 'https://salt.tikicdn.com/cache/w1200/ts/product/16/2b/cb/ceb8d5add49f2110bc319e366b37c3b8.jpg', 'data 6', 6);

/* -------------------------------------------------------------------- */	

INSERT INTO `payment_method` (`pm_name`, `description`, `payment_cost`)
VALUES
('COD', 'Nhận hàng rồi mới thanh toán', 2000),
('Quét mã QR', 'Quét mã QR để thanh toán', 0),
('Thẻ tín dụng', 'Thanh toán bằng thẻ tín dụng', 5000),
('Ví điện tử', 'Thanh toán thông qua ví điện tử', 0),
('Chuyển khoản Ngân hàng', 'Thanh toán bằng chuyển khoản', 0);

/* -------------------------------------------------------------------- */	

INSERT INTO `orders` (`payment_cost`, `shipping_cost`, `date_created`, `shipping_address`, `purchase_address`, `total_product`, `total_amount`, `user_id`, `dm_id`, `pm_id`)
VALUES
(0, 15000, '2024-10-10', '123 Đường Lê Lợi, TP.HCM', 'Q1, Tp.HCM', 20000, 35000, 2, 1, 2),
(2000, 50000, '2024-11-01', '202 Đường Hai Bà Trưng, Đà Nẵng', 'Dĩ An, Bình Dương', 85000, 137000, 4, 3, 1),
(5000, 20000, '2024-11-11', '1400 Đường Hùng Vương, Bình Dương', 'Q.Hoàng Mai, HN', 64000, 89000, 10, 2, 3),
(0, 0, '2024-11-18', '404 Đường Trần Phú, Hải Phòng', 'Q1, Tp.HCM', 18000, 18000, 5, 4, 5),
(0, 15000, '2024-11-19', '1200 Đường Nguyễn Đình Chiểu, TP.HCM', 'Biên Hòa, ĐN', 45000, 60000, 9, 1, 4);

/* -------------------------------------------------------------------- */

INSERT INTO `order_detail` (`order_id`, `book_id`, `quantity`, `price`)
VALUES
(1, 12, 1, 20000),
(2, 11, 1, 85000),
(3, 7, 2, 32000),
(4, 7, 1, 18000),
(5, 2, 3, 15000);

/* -------------------------------------------------------------------- */

INSERT INTO `role_user` (`user_id`, `role_id`)
VALUES
(1, 1), (2, 3),
(3, 2),
(4, 2),
(5, 2),
(6, 2),
(7, 2),
(8, 2),
(9, 2),
(10, 2),
(11, 2);
 

