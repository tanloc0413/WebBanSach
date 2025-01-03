-- CREATE DATABASE webbansach
-- USE webbansach;

/* -------------------------------------------------------------------- */

INSERT INTO `users` (`username`, `password`, `email`, `last_name`, `first_name`, `sex`, `number_phone`, `shipping_address`, `purchase_address`)
VALUES
    ('camap9888', '12345', 'camap9888@gmail.com', 'Trần', 'Tấn Lộc', 'Nam', '0379383465', 'Dĩ An, Bình Dương', 'Dầu Tiếng, Bình Dương'),
    ('cavoibien9888', '12345', 'cavoibien9888@gmail.com', 'Trần', 'Tấn Lộc', 'Nam', '0379383465', 'Dĩ An, Bình Dương', 'Dầu Tiếng, Bình Dương'),
    ('cavoibien7888', '12345', 'cavoibien7888@gmail.com', 'Nguyễn', 'Văn Hoàng', 'Nam', '0393456789', '123 Đường Lê Lợi, TP.HCM', '456 Đường Nguyễn Trãi, TP.HCM'),
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
    ('admin'),
    ('staff'),
    ('user');

/* -------------------------------------------------------------------- */

INSERT INTO `book` (`book_name`, `descripstion`, `list_price`, `price`, `quantity`, `average_rating`)
VALUES
    ('Đắc Nhân Tâm', 'Đắc Nhân Tâm của Dale Carnegie là quyển sách duy nhất về thể loại self-help liên tục đứng đầu danh mục sách bán chạy nhất (best-selling Books) do báo The New York Times bình chọn suốt 10 năm liền. Được xuất bản năm 1936, với số lượng bán ra hơn 15 triệu bản, tính đến nay, sách đã được dịch ra ở hầu hết các ngôn ngữ, trong đó có cả Việt Nam, và đã nhận được sự đón tiếp nhiệt tình của đọc giả ở hầu hết các quốc gia.', 108000, 90000, 62, 4.7),
    ('Sách Nghe Hiểu Tiếng Nhật N4', 'Giúp cho bạn học tiếng Nhật trở nên dễ dàng hơn.', 65000, 60000, 223, 4.8),
    ('Thỏ Bảy Màu', 'Thỏ Bảy Màu là một nhân vật hư cấu chẳng còn xa lạ gì với anh em dùng mạng xã hội với slogan "Nghe lời Thỏ, kiếp này coi như bỏ!". Thỏ Bảy Màu đơn giản chỉ là một con thỏ trắng với sự dở hơi, ngang ngược nhưng đáng yêu vô cùng tận. Nó luôn nghĩ rằng mình không có cuộc sống và không có bạn bè. Tuy nhiên, Thỏ lại chẳng bao giờ thấy cô đơn vì đến cô đơn cũng bỏ nó mà đi.', 99000, 84000, 54, 4.7),
    ('Đám Trẻ Ở Đại Dương Đen', 'Đám trẻ ở đại dương đen là lời độc thoại và đối thoại của những đứa trẻ ở đại dương đen, nơi từng lớp sóng của nỗi buồn và tuyệt vọng không ngừng cuộn trào, lúc âm ỉ, khi dữ dội. Những đứa trẻ ấy phải vật lộn trong những góc tối tâm lý, với sự u uất đè nén từ tổn thương khi không được sinh ra trong một gia đình toàn vẹn, ấm êm, khi phải mang trên đôi vai non dại những gánh nặng không tưởng.', 99000, 75000, 50, 4.6),
    ('Đại Gia Gatsby', 'Một tiểu thuyết viết bởi tác giả người Mỹ F. Scott Fitzgerald.', 20000, 18999, 100, 4.5),
    ('Giết Con Chim Nhại', 'Một tiểu thuyết của Harper Lee được xuất bản vào năm 1960, là một tác phẩm nổi tiếng trong các trường học tại Mỹ.', 14000, 15000, 50, 4.8),
    ('1984', 'Một tiểu thuyết khoa học viễn tưởng và cảnh báo xã hội, được viết bởi tác giả George Orwell.', 25000, 19000, 20, 4.7),
    ('Kiêu Hãnh và Định Kiến', 'Một tiểu thuyết lãng mạn của Jane Austen. Nó đề cập đến các vấn đề về đẳng cấp, hôn nhân và đạo đức.', 51000, 87800, 250, 4.9),
    ('Kẻ Bắt Lúa Mạch', 'Một tiểu thuyết của J.D. Salinger kể về câu chuyện của Holden Caulfield, một thiếu niên.', 12000, 13000, 120, 4.2),
    ('Moby-Dick', 'Một tiểu thuyết của Herman Melville, kể về cuộc phiêu lưu của Ishmael, một thủy thủ.', 18000, 20000, 80, 4.3),
    ('Chúa Tể Những Chiếc Nhẫn', 'Một tiểu thuyết giả tưởng của J.R.R. Tolkien, kể về cuộc phiêu lưu của Bilbo Baggins.', 11000, 32000, 10, 4.8),
    ('Chiến Tranh và Hòa Bình', 'Một tiểu thuyết lịch sử của Lev Tolstoy, được coi là một trong những tác phẩm vĩ đại nhất của Tolstoy.', 27000, 22000, 50, 4.6),
    ('Cuộc Phiêu Lưu của Odysseus', 'Một tác phẩm sử thi Hy Lạp cổ đại do Homer viết, kể về cuộc phiêu lưu của Odysseus.', 22300, 11200, 180, 4.7),
    ('Thế Giới Mới Tuyệt Vời', 'Một tiểu thuyết dystopia của Aldous Huxley, khám phá khái niệm về một xã hội hoàn hảo.', 32000, 15000, 200, 4.4),
    ('Sách - Tự Học Tiếng Nhật Dành Cho Người Mới Bắt Đầu', 'Cuốn sách "Tự học tiếng Nhật dành cho người mới bắt đầu" được biên soạn với mục đích giúp những người mới  bắt đầu có được sự tiếp xúc nhẹ nhàng với tiếng Nhật', 75000, 85000, 62, 4.9),
    ('Muôn Kiếp Nhân Sinh - Many Times, Many Lives', 'Nối tiếp câu chuyện và tinh thần của tập 1 và tập 2, Muôn Kiếp Nhân Sinh – tập 3 tiếp tục đưa bạn đọc đi qua hành trình thức tỉnh tâm linh của nhân vật chính Thomas. Không chỉ là hồi tiếp theo trong chuyến phiêu lưu của linh hồn, tập mới nhất và cũng là tập cuối cùng của bộ sách sẽ bàn luận sâu hơn về hiện tại và tương lai của nhân loại, đồng thời nhẹ nhàng khép lại câu chuyện tiền kiếp nhiều trăn trở, nhiều bài học của Thomas và giải đáp những câu hỏi còn bỏ ngỏ từ hai tập trước.', 128000, 89600, 15, 4.8),
    ('Tư Duy Ngược', 'Chúng ta thực sự có hạnh phúc không? Chúng ta có đang sống cuộc đời mình không? Chúng ta có dám dũng cảm chiến thắng mọi khuôn mẫu, định kiến, đi ngược đám đông để khẳng định bản sắc riêng của mình không? Có bao giờ bạn tự hỏi như thế, rồi có câu trả lời cho chính mình?', 139000, 69500, 65, 4.7),
    ('Nhà Lãnh Đạo Đáng Tin Cậy', 'Nhà lãnh đạo đáng tin cậy là quyển sách về sự tiên liệu, một quyển sách về tương lai, nơi khả năng lãnh đạo được xác định bởi độ đáng tin cậy. Một quyển sách về năng lực, tính chính trực và lòng nhân từ. Một quyển sách về việc phát triển những thói quen lãnh đạo mới sao cho phù hợp với một thế giới mới – một thế giới của sự minh bạch.', 190000, 85500, 54, 4.9),
    ('Những Trí Tuệ Vĩ Đại - Hawking: Người Đàn Ông Phi Thường, Một Thiên Tài Vĩ Đại Và Cha Đẻ Của Thuyết Vạn Vật', 'Stephen Hawking qua đời vào tháng 3 năm 2018 đã khép lại một trong những câu chuyện về cuộc đời khoa học truyền cảm hứng và đáng nhớ nhất mọi thời đại. Có lẽ là nhà vũ trụ học người Anh vĩ đại nhất kể từ thời của Newton và là nhà khoa học được săn đón nhất thời hiện đại, câu chuyện về cuộc đời của Hawking đã vượt ra ngoài lĩnh vực học thuật.', 229000, 139000, 95, 4.5),
    ('Hôn Nhân Của Cha Mẹ Dạy Con Cái Điều Gì? - Trồng Một Người Cha Gieo Lên Người Mẹ Và Đổ Đầy Hạnh Phúc Vào Những Đứa Trẻ', 'Hôn nhân và Nuôi dạy con cái có mối liên quan trực tiếp và tác động qua lại với nhau vô cùng mạnh. Một cuộc Hôn nhân Hạnh Phúc sẽ tạo ra những đứa trẻ Hạnh Phúc. Và ngược lại, chính những đứa trẻ là chất keo gắn kết và nuôi dưỡng Hôn nhân bền vững hơn. Ngay cả khi cuộc Hôn nhân đó không còn lành lặn, nếu người cha, người mẹ vẫn yêu thương con cái, mong muốn điều tốt đẹp nhất cho con thì Ly dị không phải là bi kịch với lũ trẻ.', 78000, 54600, 34, 4.6);

/* -------------------------------------------------------------------- */

INSERT INTO `book_author` (`book_id`, `author_id`)
VALUES
    (1, 1),
    (2, 2),
    (3, 3),
    (4, 4),
    (5, 5),
    (6, 6),
    (7, 1),
    (8, 1),
    (9, 1),
    (10, 1);

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
    ('Sinh học'),
    ('Tội phạm'),
    ('Kỹ năng sống'),
    ('Thử thách');

/* -------------------------------------------------------------------- */

INSERT INTO `delivery_method` (`dm_name`, `delivery_cost`, `description`)
VALUES
    ('Giao hàng miễn phí', 0, 'Giao hàng trong vòng 7-10 ngày cho đơn hàng trên 1 triệu VNĐ'),
    ('Giao hàng tiêu chuẩn', 15000, 'Giao hàng trong vòng 5-7 ngày làm việc'),
    ('Giao hàng nhanh', 20000, 'Giao hàng trong vòng 2-3 ngày làm việc'),
    ('Giao hàng hỏa tốc', 50000, 'Giao hàng trong ngày kế tiếp');

/* -------------------------------------------------------------------- */

INSERT INTO `evaluate` (`comment`, `rating_points`, `book_id`, `user_id`)
VALUES
    ('Sách đẹp, nhận hàng nhanh, đủ vừa rèn chữ, vừa lí thuyết vừa bài tập rất hay ạ', 3.5, 3, 6),
    ('Sách thơm, như mô tả, chưa đọc nhưng chắc là sẽ dễ học', 4.5, 3, 7),
    ('Giao hàng nhanh, hàng ok, đóng gói kỹ', 1.5, 3, 8),
    ('Sách đẹp, nhận hàng nhanh, đủ vừa rèn chữ, vừa lí thuyết vừa bài tập rất hay ạ', 3.5, 3, 9),
    ('Sách thơm, như mô tả, chưa đọc nhưng chắc là sẽ dễ học', 3.5, 3, 10);

/* -------------------------------------------------------------------- */

INSERT INTO `payment_method` (`pm_name`, `description`, `payment_cost`)
VALUES
    ('COD', 'Nhận hàng rồi mới thanh toán', 2000),
    ('Quét mã QR', 'Quét mã QR để thanh toán', 0),
    ('Thẻ tín dụng', 'Thanh toán bằng thẻ tín dụng', 5000),
    ('Ví điện tử', 'Thanh toán thông qua ví điện tử', 0),
    ('Chuyển khoản Ngân hàng', 'Thanh toán bằng chuyển khoản', 0);

/* -------------------------------------------------------------------- */

INSERT INTO `image` (`img_name`, `check_icon`, `img_path`, `img_data`, `book_id`)
VALUES
    ('book.jpg', 0, 'https://salt.tikicdn.com/cache/750x750/ts/product/ff/e7/1e/486bb535e258f2d21708e434dccd9d6b.jpg.webp', 'data 1', 1),
    ('5s1d5s.jpg', 0, 'https://salt.tikicdn.com/ts/product/ab/72/01/40e8e5cd4437d4df9bb35810e638eae7.jpg', 'data 2', 2),
    ('klsioks.jpg', 0, 'https://thuviensachnoi.com/anh-book/chien-tranh-va-hoa-binh.webp', 'data 3', 3),
    ('komdkmods.png', 0, 'https://bizweb.dktcdn.net/thumb/1024x1024/100/363/455/products/dai-gia-gatsby-new-bia-mem-01.jpg?v=1696407622907', 'data 4', 4),
    ('iosdm5.jpg', 0, 'https://m.media-amazon.com/images/M/MV5BZWUyOTgyMzktMjhmNi00NThkLTkxMGEtMGU0ZDEzZWQxNjNlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg', 'data 5', 5),
    ('hsdids6.png', 0, 'https://salt.tikicdn.com/cache/w1200/ts/product/ae/20/e2/3eebdaad664c4fc803113ee7ffa41e3e.jpg', 'data 6', 6),
    ('abetrgc.jpg', 0, 'https://nhasachphuongnam.com/images/thumbnails/730/900/detailed/217/dac-nhan-tam-bc.jpg', 'data 7', 7),
    ('652as5a.jpg', 0, 'https://cdn0.fahasa.com/media/catalog/product/8/9/8934974204480.jpg', 'data 8', 8),
    ('siujfsdvh.jpg', 0, 'https://cdn0.fahasa.com/media/catalog/product/9/7/9786043561272_1_1.jpg', 'data 9', 9),
    ('skodmso.jpg', 0, 'https://cdn0.fahasa.com/media/catalog/product/i/m/image_195509_1_10840.jpg', 'data 10', 10),
    ('dsukjsd.jpg', 0, 'https://cdn0.fahasa.com/media/catalog/product/k/i/kieu-hanh-va-dinh-kien---bia-ao-cung-1_2.jpg?_gl=1*3vnbds*_gcl_aw*R0NMLjE3MzIwMDU3NzguRUFJYUlRb2JDaE1JNWNEMW9vRG9pUU1WWVJGN0J4M2VtUVBXRUFBWUFTQUFFZ0lJaGZEX0J3RQ..*_gcl_au*MTE1MDA2NTg5OC4xNzMyMDA1NzY5*_ga*ODUzMTQzMDk3LjE3MzIwMDU3Njk.*_ga_460L9JMC2G*MTczMjAwNTc2OC4xLjEuMTczMjAwNjk4NC42MC4wLjY5MDk2ODMy', 'data 11', 11);

/* -------------------------------------------------------------------- */

INSERT INTO `book_genre` (`category_id`, `book_id`)
VALUES
    (1, 1), (2, 2), (3, 3), (4, 4), (5, 5),
    (6, 6), (7, 7), (8, 8), (9, 9), (10, 10),
    (1, 11), (3, 12), (5, 13), (7, 14), (2, 15);

/* -------------------------------------------------------------------- */

INSERT INTO `favorite_book` (`book_id`, `user_id`)
VALUES
    (1, 1), (2, 1), (1, 2), (2, 2), (3, 1), (4, 1),
    (5, 1), (6, 1), (7, 1), (8, 1), (3, 2),  (4, 2);

/* -------------------------------------------------------------------- */

INSERT INTO `role_user` (`user_id`, `role_id`)
VALUES
    (1, 1), (2, 1), (3, 1),
    (4, 2), (5, 2), (6, 2),
    (7, 3), (8, 3), (9, 3),
    (10, 3), (11, 3), (12, 3);

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

/*
('sndjocn5.jpg', 0,
'https://salt.tikicdn.com/cache/w1200/ts/product/16/2b/cb/ceb8d5add49f2110bc319e366b37c3b8.jpg',
'data 6', 12),
('ksknkn33.jpg', 0, 'https://newshop.vn/public/uploads/products/54520/sach-dam-tre-o-dai-duong-den.jpg', 'data 13', 13),
('thkjsdklsl.jpg', 0, 'https://cdn0.fahasa.com/media/catalog/product/b/u/bup_sen_xanh_bia_phien_ban_ky_niem_2020.jpg', 'data 26', 26),
('aneiosdklsl.jpg', 0, 'https://cdn0.fahasa.com/media/catalog/product/b/u/bup_sen_xanh_bia_phien_ban_ky_niem_2020.jpg', 'data 27', 27),
('thpowlklsl.jpg', 0, 'https://cdn0.fahasa.com/media/catalog/product/b/u/bup_sen_xanh_bia_phien_ban_ky_niem_2020.jpg', 'data 28', 28),
('kjniojiw.jpg', 0, 'https://cdn0.fahasa.com/media/catalog/product/b/u/bup_sen_xanh_bia_phien_ban_ky_niem_2020.jpg', 'data 29', 29),
('mvngmnflg3.jpg', 0, 'https://cdn0.fahasa.com/media/catalog/product/b/u/bup_sen_xanh_bia_phien_ban_ky_niem_2020.jpg', 'data 30', 30),
('klnknij049.jpg', 0, 'https://cdn0.fahasa.com/media/catalog/product/b/u/bup_sen_xanh_bia_phien_ban_ky_niem_2020.jpg', 'data 31', 31),
('dnbnbbhbu27.jpg', 0, 'https://cdn0.fahasa.com/media/catalog/product/b/u/bup_sen_xanh_bia_phien_ban_ky_niem_2020.jpg', 'data 32', 32),
('nmxnfkjw82.jpg', 0, 'https://cdn0.fahasa.com/media/catalog/product/b/u/bup_sen_xanh_bia_phien_ban_ky_niem_2020.jpg', 'data 33', 33),
('noepohogit7488.jpg', 0, 'https://cdn0.fahasa.com/media/catalog/product/b/u/bup_sen_xanh_bia_phien_ban_ky_niem_2020.jpg', 'data 34', 34),
('kj6516jskjlds.jpg', 0, 'https://cdn0.fahasa.com/media/catalog/product/b/u/bup_sen_xanh_bia_phien_ban_ky_niem_2020.jpg', 'data 35', 35),
('mkns.jpg', 0, 'https://cdn0.fahasa.com/media/catalog/product/m/u/muonkiepnhansinh3_khonho_bia1_1.jpg?_gl=1*1xozw8k*_ga*ODYzMzUxMDczLjE3MzQ0MzM0Mjk.*_ga_D3YYPWQ9LN*MTczNDQzMzQyOC4xLjEuMTczNDQzNDkwMi4wLjAuMA..*_gcl_au*MzM0MTUzMjI4LjE3MzQ0MzM0Mjk.*_ga_460L9JMC2G*MTczNDQzMzQyOC4xLjEuMTczNDQzNDkwMi40MS4wLjk1NzEzMTk0NQ..', 'data 1', 16),
('tdn.jpg', 0, 'https://cdn0.fahasa.com/media/flashmagazine/images/page_images/tu_duy_nguoc/2022_10_21_16_49_32_1-390x510.jpg?_gl=1*knwfhf*_ga*ODYzMzUxMDczLjE3MzQ0MzM0Mjk.*_ga_D3YYPWQ9LN*MTczNDQzMzQyOC4xLjEuMTczNDQzMzc5MC4wLjAuMA..*_gcl_au*MzM0MTUzMjI4LjE3MzQ0MzM0Mjk.*_ga_460L9JMC2G*MTczNDQzMzQyOC4xLjEuMTczNDQzMzc5MC41MC4wLjk1NzEzMTk0NQ..', 'data 2', 17),
('nlddtc.jpg', 0, 'https://cdn0.fahasa.com/media/flashmagazine/images/page_images/nha_lanh_dao_dang_tin_cay/2021_04_01_17_12_37_1-390x510.jpg?_gl=1*16onxfo*_ga*ODYzMzUxMDczLjE3MzQ0MzM0Mjk.*_ga_D3YYPWQ9LN*MTczNDQzMzQyOC4xLjEuMTczNDQzNDA5OS4wLjAuMA..*_gcl_au*MzM0MTUzMjI4LjE3MzQ0MzM0Mjk.*_ga_460L9JMC2G*MTczNDQzMzQyOC4xLjEuMTczNDQzNDA5OS4xOS4wLjk1NzEzMTk0NQ..', 'data 3', 18),
('nttvd.jpg', 0, 'https://cdn0.fahasa.com/media/flashmagazine/images/page_images/nhung_tri_tue_vi_dai___hawking_nguoi_dan_ong_phi_thuong__mot_thien_tai_vi_dai_va_cha_de_cua_thuyet_van_vat/2024_01_27_10_58_32_1-390x510.jpg?_gl=1*76ig6u*_ga*ODYzMzUxMDczLjE3MzQ0MzM0Mjk.*_ga_D3YYPWQ9LN*MTczNDQzMzQyOC4xLjEuMTczNDQzNTAxMS4wLjAuMA..*_gcl_au*MzM0MTUzMjI4LjE3MzQ0MzM0Mjk.*_ga_460L9JMC2G*MTczNDQzMzQyOC4xLjEuMTczNDQzNTAxMS44LjAuOTU3MTMxOTQ1', 'data 4', 19),
('hnccm.jpg', 0, 'https://cdn0.fahasa.com/media/flashmagazine/images/page_images/hon_nhan_cua_cha_me_day_con_cai_dieu_gi___trong_mot_nguoi_cha_gieo_len_nguoi_me_va_do_day_hanh_phuc_vao_nhung_dua_tre/2024_07_12_08_30_55_1-390x510.jpg?_gl=1*1ry2i0p*_ga*ODYzMzUxMDczLjE3MzQ0MzM0Mjk.*_ga_D3YYPWQ9LN*MTczNDQzMzQyOC4xLjEuMTczNDQzNDc1NS4wLjAuMA..*_gcl_au*MzM0MTUzMjI4LjE3MzQ0MzM0Mjk.*_ga_460L9JMC2G*MTczNDQzMzQyOC4xLjEuMTczNDQzNDc1NS42MC4wLjk1NzEzMTk0NQ..', 'data 5', 20),
('bmxpt.jpg', 0, 'https://cdn0.fahasa.com/media/catalog/product/b/o/bon_mua_tren_xu_phu_tang__1_2018_10_29_14_53_21.jpg?_gl=1*1kk3lbf*_ga*ODYzMzUxMDczLjE3MzQ0MzM0Mjk.*_ga_D3YYPWQ9LN*MTczNDQzMzQyOC4xLjEuMTczNDQzNDQ3Ny4wLjAuMA..*_gcl_au*MzM0MTUzMjI4LjE3MzQ0MzM0Mjk.*_ga_460L9JMC2G*MTczNDQzMzQyOC4xLjEuMTczNDQzNDQ3Ny4yMy4wLjk1NzEzMTk0NQ..', 'data 6', 21),
('skdg.jpg', 0, 'https://cdn0.fahasa.com/media/catalog/product/8/9/8936184340132.jpg?_gl=1*1c78uyy*_ga*ODYzMzUxMDczLjE3MzQ0MzM0Mjk.*_ga_D3YYPWQ9LN*MTczNDQzMzQyOC4xLjEuMTczNDQzNTA3Ni4wLjAuMA..*_gcl_au*MzM0MTUzMjI4LjE3MzQ0MzM0Mjk.*_ga_460L9JMC2G*MTczNDQzMzQyOC4xLjEuMTczNDQzNTA3Ni42LjAuOTU3MTMxOTQ1', 'data 7', 22),
('thsl.jpg', 0, 'https://cdn0.fahasa.com/media/catalog/product/9/7/9780312924584.jpg', 'data 8', 23),
('igiu.jpg', 0, 'https://cdn0.fahasa.com/media/catalog/product/e/n/english_grammar_in_use_book_w_ans_1_2018_09_19_15_25_47.JPG?_gl=1*m6c0l6*_ga*ODYzMzUxMDczLjE3MzQ0MzM0Mjk.*_ga_D3YYPWQ9LN*MTczNDQzMzQyOC4xLjEuMTczNDQzNTU1NC4wLjAuMA..*_gcl_au*MzM0MTUzMjI4LjE3MzQ0MzM0Mjk.*_ga_460L9JMC2G*MTczNDQzMzQyOC4xLjEuMTczNDQzNTU1NC41OS4wLjk1NzEzMTk0NQ..', 'data 9', 24),
('tdtctvc.jpg', 0, 'https://cdn0.fahasa.com/media/flashmagazine/images/page_images/thay_doi_tat_ca_chi_tru_vo_va_con/2020_04_13_11_10_42_1-390x510.JPG?_gl=1*ao8kr1*_ga*ODYzMzUxMDczLjE3MzQ0MzM0Mjk.*_ga_D3YYPWQ9LN*MTczNDQzMzQyOC4xLjEuMTczNDQzNTcyNi4wLjAuMA..*_gcl_au*MzM0MTUzMjI4LjE3MzQ0MzM0Mjk.*_ga_460L9JMC2G*MTczNDQzMzQyOC4xLjEuMTczNDQzNTcyNi41My4wLjk1NzEzMTk0NQ..', 'data 10', 25),
('thkjsdklsl.jpg', 0, 'https://cdn0.fahasa.com/media/catalog/product/b/u/bup_sen_xanh_bia_phien_ban_ky_niem_2020.jpg', 'data 26', 26),
('aneiosdklsl.jpg', 0, 'https://cdn0.fahasa.com/media/catalog/product/s/u/suoi-am-mat-troi-01-_1__1.jpg', 'data 27', 27),
('thpowlklsl.jpg', 0, 'https://cdn0.fahasa.com/media/catalog/product/h/s/hsp---bia-mem---b1_1.jpg?_gl=1*1bzzs41*_ga*ODA1MTE2MjE1LjE3MjY5NzA0NTg.*_ga_D3YYPWQ9LN*MTczNDkwOTEwOS4xLjEuMTczNDkwOTkzOS4wLjAuMA..*_gcl_au*Mzc1NjczMDk4LjE3MzQ5MDkxMDk.*_ga_460L9JMC2G*MTczNDkwOTEwOS4yNC4xLjE3MzQ5MDk5MzkuMjIuMC4xMzkwOTYyMjgw', 'data 28', 28),
('kjniojiw.jpg', 0, 'https://cdn0.fahasa.com/media/catalog/product/0/0/00_1_2.jpg', 'data 29', 29),
('mvngmnflg3.jpg', 0, 'https://cdn0.fahasa.com/media/catalog/product/t/h/thep_da_toi_the_day___bia_1.jpg', 'data 30', 30),
('klnknij049.jpg', 0, 'https://cdn0.fahasa.com/media/catalog/product/9/7/9786043230086---copy.jpg?_gl=1*dppb1f*_ga*ODA1MTE2MjE1LjE3MjY5NzA0NTg.*_ga_D3YYPWQ9LN*MTczNDkwOTEwOS4xLjEuMTczNDkxMDQwNC4wLjAuMA..*_gcl_au*Mzc1NjczMDk4LjE3MzQ5MDkxMDk.*_ga_460L9JMC2G*MTczNDkwOTEwOS4yNC4xLjE3MzQ5MTA0MDQuNjAuMC4xMzkwOTYyMjgw', 'data 31', 31),
('dnbnbbhbu27.jpg', 0, 'https://cdn0.fahasa.com/media/catalog/product/2/0/2023_05_26_11_44_14_1-390x510_1.jpg?_gl=1*1tkd8zr*_ga*ODA1MTE2MjE1LjE3MjY5NzA0NTg.*_ga_D3YYPWQ9LN*MTczNDkwOTEwOS4xLjEuMTczNDkxMDU4OC4wLjAuMA..*_gcl_au*Mzc1NjczMDk4LjE3MzQ5MDkxMDk.*_ga_460L9JMC2G*MTczNDkwOTEwOS4yNC4xLjE3MzQ5MTA1ODkuNTYuMC4xMzkwOTYyMjgw', 'data 32', 32),
('nmxnfkjw82.jpg', 0, 'https://cdn0.fahasa.com/media/catalog/product/p/h/phuthuyxuoz_1.jpg?_gl=1*1rw4g8z*_ga*ODA1MTE2MjE1LjE3MjY5NzA0NTg.*_ga_D3YYPWQ9LN*MTczNDkwOTEwOS4xLjEuMTczNDkxMDcyNC4wLjAuMA..*_gcl_au*Mzc1NjczMDk4LjE3MzQ5MDkxMDk.*_ga_460L9JMC2G*MTczNDkwOTEwOS4yNC4xLjE3MzQ5MTA3MjYuNTguMC4xMzkwOTYyMjgw', 'data 33', 33),
('noepohogit7488.jpg', 0, 'https://cdn0.fahasa.com/media/catalog/product/n/h/nhung_tam_long_cao_ca_b1.jpg?_gl=1*m5q3hi*_ga*ODA1MTE2MjE1LjE3MjY5NzA0NTg.*_ga_D3YYPWQ9LN*MTczNDkwOTEwOS4xLjEuMTczNDkxMDg2NC4wLjAuMA..*_gcl_au*Mzc1NjczMDk4LjE3MzQ5MDkxMDk.*_ga_460L9JMC2G*MTczNDkwOTEwOS4yNC4xLjE3MzQ5MTA4NjguNDguMC4xMzkwOTYyMjgw', 'data 34', 34),
('kj6516jskjlds.jpg', 0, 'https://cdn0.fahasa.com/media/catalog/product/9/7/9786043230574_1.jpg?_gl=1*1naouoy*_ga*ODA1MTE2MjE1LjE3MjY5NzA0NTg.*_ga_D3YYPWQ9LN*MTczNDkwOTEwOS4xLjEuMTczNDkxMTAwNi4wLjAuMA..*_gcl_au*Mzc1NjczMDk4LjE3MzQ5MDkxMDk.*_ga_460L9JMC2G*MTczNDkwOTEwOS4yNC4xLjE3MzQ5MTEwMDYuMTEuMC4xMzkwOTYyMjgw', 'data 35', 35);
('Thay Đổi Tất Cả Chỉ Trừ Vợ Và Con', 'Những bài học phát triển bản thân và chiến lược quản trị từ cuộc đời của Lee Kun Hee - Chủ tịch Tập đoàn Samsung!', 148000, 103600, 41, 5.0),
('Búp Sen Xanh (Tái Bản 2020)', 'Búp Sen Xanh là nơi tiểu thuyết và lịch sử đã gặp nhau và hoạ nên một giai đoạn trong cuộc đời người Cha già của dân tộc Việt Nam. Nơi ấy, có quê nhà xứ Nghệ, có làng Sen, có khung dệt của mẹ, có lời dạy của cha, có những người bạn và những kỷ niệm ấu thơ. Nơi ấy có xứ Huế mà trong cuộc sống nghèo khổ có trăn trở tuổi trẻ, về con người, về vận mệnh dân tộc, có mất mát và đau thương...', 72000, 64800, 21, 4.7),
('Sưởi Ấm Mặt Trời - Phần Tiếp Theo Của Cây Cam Ngọt Của Tôi', 'Zezé, cậu bé tinh nghịch siêu hạng đồng thời cũng đáng yêu bậc nhất ngày ngào giờ đã thoát khỏi cuộc sống nghèo khó, cũng không còn phải chịu cảnh bị đánh đập thường xuyên như trong quá khứ. Cậu đã chuyển đến Natal sống cùng gia đình cha đỡ đầu, được học ở một ngôi trường tốt, dần dần tiến bộ cả về mặt trí tuệ lẫn thể chất. Nhưng nỗi đau mất mát vẫn đè nặng lên trái tim cậu và Zezé vẫn là một cậu nhóc hầu như lúc nào cũng buồn, thậm chí có lẽ là một trong những cậu nhóc buồn nhất quả đất.', 160000, 128000, 57, 4.8),
('Hai Số Phận (Tái Bản 2023)', 'HAI SỐ PHẬN (tên gốc tiếng Anh là Kane and Abel) là cuốn tiểu thuyết được ông viết dựa theo câu chuyện của anh em Cain và Abel trong Kinh Thánh Cựu Ước. Truyện kể về hai người đàn ông với xuất thân địa vị xã hội và hoàn cảnh sống hoàn toàn khác nhau nhưng có chung một đức tính là luôn chiến đấu hết mình để chinh phục những điều mà mình đã đặt ra. Họ là những người có hoài bão, lý tưởng sống và trên hết họ có một tâm hồn cao quý.', 195000, 159900, 37, 4.3),
('Bố Già', 'Thế giới ngầm được phản ánh trong tiểu thuyết Bố già là sự gặp gỡ giữa một bên là ý chí cương cường và nền tảng gia tộc chặt chẽ theo truyền thống mafia xứ Sicily với một bên là xã hội Mỹ nhập nhằng đen trắng, mảnh đất màu mỡ cho những cơ hội làm ăn bất chính hứa hẹn những món lợi kếch xù. Trong thế giới ấy, hình tượng Bố già được tác giả dày công khắc họa đã trở thành bức chân dung bất hủ trong lòng người đọc. Từ một kẻ nhập cư tay trắng đến ông trùm tột đỉnh quyền uy, Don Vito Corleone là con rắn hổ mang thâm trầm, nguy hiểm khiến kẻ thù phải kiềng nể, e dè, nhưng cũng được bạn bè, thân quyến xem như một đấng toàn năng đầy nghĩa khí. Nhân vật trung tâm ấy đồng thời cũng là hiện thân của một pho triết lí rất đời được nhào nặn từ vốn sống của hàng chục năm lăn lộn giữa chốn giang hồ bao phen vào sinh ra tử, vì thế mà có ý kiến cho rằng Bố già là sự tổng hòa của mọi hiểu biết. Bố già là đáp án cho mọi câu hỏi.', 230000, 184000, 73, 4.6),
('Thép Đã Tôi Thế Đấy! (Tái Bản 2023)', 'Thép Đã Tôi Thế Đấy không phải là một tác phẩm văn học chỉ nhìn đời mà viết. Tác giả sống nó rồi mới viết nó. Nhân vật trung tâm Pa-ven chính là tác giả: Nhi-ca-lai A-xtơ-rốp-xki. Là một chiến sĩ cách mạng tháng Mười, ông đã sống một cách nồng cháy nhất, như nhân vật Pa-ven của ông. Cũng không phải một cuốn tiểu thuyết tự thuật thường vì hứng thú hay lợi ích cá nhân mà viết. A-xtơ-rốp-xki viết Thép Đã Tôi Thế Đấy trên giường bệnh, trong khi bại liệt và mù, bệnh tật tàn phá chín phần mười cơ thể.', 168000, 137760, 34, 4.1),
('The Picture of Dorian Gray - Bức Tranh Dorian Gray - Song Ngữ Việt-Anh', 'Bức tranh Dorian Gray là cuốn tiểu thuyết đầu tiên và duy nhất của Oscar Wilde. Ngay từ khi mới ra đời năm 1890, nó đã gây tranh cãi và bị hắt hủi bởi nhiều nhà phê bình.', 119000, 95200, 50, 4.7),
('Bức Họa Dorian Gray', 'Bức họa Dorian Gray là cuốn tiểu thuyết đầu tay và duy nhất trong sự nghiệp sáng tác của Oscar Wilde. Lấy bối cảnh nước Anh thời Victoria, Oscar Wilde đã kể lại câu chuyện cuộc đời chàng trai trẻ Dorian Gray, trong mối quan hệ với hoạ sĩ Basil Hallward và Huân tước Henry Woton; rồi từ đó mượn câu chuyện bức hoạ Dorian ma quái để gửi gắm triết lý nghệ thuật của riêng mình. Tại đây, ông phô bày các cuộc đối thoại về cái đẹp, sự sáng tạo, phê bình nghệ thuật, về người nghệ sĩ và nhà phê bình. Mỗi nhân vật chính của truyện lại thể hiện một khía cạnh trong con người Oscar Wilde theo thời gian, đúng như ông từng thổ lộ: Basil Hallward là người mà tôi nghĩ là tôi, Huân tước Henry là người mà thế giới nghĩ về tôi, còn Dorian là người mà tôi muốn trở thành, trong những thời đại khác nhau, có lẽ vậy.', 120000, 96000, 87, 4.6),
('The Wonderful Wizard of Oz - Phù Thuỷ Xứ Oz - Song Ngữ Việt-Anh', 'Phù Thuỷ Xứ Oz (The Wonderful Wizard of Oz) của L. Frank Baum là tác phẩm văn học kinh điển đưa người đọc vào thế giới huyền diệu của xứ Oz, nơi cô bé Dorothy và những người bạn của mình trải qua một cuộc phiêu lưu kỳ thú, đầy ắp yếu tố kỳ diệu và những bài học ý nghĩa về lòng dũng cảm, trí tuệ, và tình bạn chân thành.', 89000, 71200, 4.6),
('Bốn Mùa Trên Xứ Phù Tang', 'Cuốn sách không thể thiếu với những ai yêu thích con người và văn hóa Nhật Bản, muốn đắm mình trong nguồn mỹ cảm tuyệt vời của xứ Phù Tang. Lần theo trục xoay chuyển của thời gian, đi qua các mùa để tiếp cận Nhật Bản, tập du kí của Nguyễn Chí Linh không chỉ đưa người đọc đến với những địa danh nổi tiếng mà còn đào sâu vào lịch sử, văn hóa để kể cho người đọc câu chuyện của một đất nước. Kèm theo đó, là lời giải cho câu hỏi chung của rất nhiều người: Vì sao nước Nhật, người Nhật lại được cả thế giới kính trọng?', 168000, 89040, 62, 4.8),
('Cuốn Sách Nhỏ Giúp Bạn Sống Khỏe Đến Già', 'Đúng như tên gọi, Cuốn sách nhỏ giúp bạn SỐNG KHỎE ĐẾN GIÀ sẽ đưa ra 12 lời khuyên giúp chúng ta nhìn lại cuộc sống và thực hành để có một sức khỏe bền bỉ, hài hòa giữa ba phần của cơ thể đến tận giai đoạn cuối của cuộc đời.', 95000, 57000, 32, 4.9),
('Silence of the Lambs', 'As part of the search for a serial murderer nicknames Buffalo Bill, FBI trainee Clarice Starling is given an assignment. She must visit a man confined to a high-security facility for the criminally insane and interview him.', 264000, 211200, 75, 4.9),
('English Grammar in Use Book w Ans', 'The worlds best-selling grammar series for learners of English. English Grammar in Use Fourth edition is an updated version of the worlds best-selling grammar title. It has a fresh, appealing new design and clear layout, with revised and updated examples, but retains all the key features of clarity and accessibility that have made the book popular with millions of learners and teachers around the world. This with answers version is ideal for self-study.', 198000, 158400, 83, 4.8),
('Những Tấm Lòng Cao Cả (Tái Bản 2024)', 'Một tác phẩm kinh điển, chắc chắn sẽ hàm chứa bên trong những vẻ đẹp vĩnh cửu cùng năm tháng, những triết lý nhân sinh sâu sắc và những thủ pháp nghệ thuật siêu việt. Lứa tuổi thiếu niên nhi đồng đang trong giai đoạn tìm hiểu và nhận thức cuộc sống, hình thành nên nhân sinh quan và thế giới quan, bởi vậy, những kiệt tác kinh điển đã vượt qua được sự chọn lọc và đào thải khắc nghiệt của thời gian chắc chắn sẽ là những người thầy hướng đạo tuyệt vời. Các tác phẩm được lựa chọn đều có nội dung tư tưởng sâu sắc, nghệ thuật ngôn từ độc đáo, toát lên tư tưởng nhân văn cao đẹp, bồi đắp vẻ đẹp tâm hồn và trí tuệ cho con người. Đặc biệt hơn nữa, nội dung tác phẩm đều được kết hợp với hệ thống minh họa đẹp mắt, sống động chắp cánh cho trí tưởng tượng của độc giả bay cao, hòa mình vào không gian tuyệt vời của tác phẩm.', 115000, 94300, 32, 4.2),
('Không Gia Đình - Nobody’s Boy - Song Ngữ Anh-Việt - Tập 1', 'Không Gia Đình của tác giả Hector Malot là một trong những tác phẩm văn học Pháp kinh điển. Nội dung là câu chuyện đầy cảm động và sâu sắc về cuộc đời và hành trình đi tìm lại gia đình thật của cậu bé mồ côi Remi. Remi được ông Barberin nhặt được vào một đêm mùa đông giữa thủ đô Paris và mang về cho vợ của ông là bà Barberin hiền lành, tốt bụng nuôi dưỡng. Remi được mẹ nuôi hết mực yêu thương và chăm sóc như con ruột. Nhưng khi Remi 8 tuổi, gia đình bố mẹ nuôi gặp biến cố, cậu bé đã bị bố nuôi bán cho cụ Vitalis, một nghệ sĩ đường phố già. Cụ Vitalis dẫn dắt Remi cùng đoàn xiếc của mình gồm chú khỉ Joli-Cœur, chú chó thông minh Capi và hai chú chó nhỏ khác đi biểu diễn khắp nước Pháp để kiếm sống. Trên đường đi, Rémi học hỏi được nhiều kỹ năng sống và cũng dần phát hiện ra niềm đam mê âm nhạc của mình, cậu bé cũng cảm nhận được tình yêu mà cụ Vitalis dành cho cậu dù cả hai cụ cháu không phải là ruột thịt máu mủ.', 89000, 71200, 56, 4.5),
*/