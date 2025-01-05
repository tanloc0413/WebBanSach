import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./ProductTabs.css";
import Comment from './Comment'

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  commentsData: PropTypes.array,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function ProductTabs({commentsData}) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          centered
        >
          <Tab label="Mô tả" {...a11yProps(0)} />
          <Tab label="Đánh giá" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <div
          id="cpsContent"
          className="cps-block-content"
          style={{ maxHeight: "100000px" }}
        >
          <div className="ksp-content p-2 mb-2">
            <h2 className="ksp-title has-text-centered">Mô tả thêm</h2>
            <div>
              <ul>
                <li>
                  Đắc Nhân Tâm là một trong những tựa sách self-help nổi tiếng nhất thế giới với hơn 15 triệu bản được bán ra trên toàn cầu. Cuốn sách này được đánh giá là kho tàng kiến thức vô giá và là một nguồn cảm hứng thú vị cho những ai muốn nâng cao kỹ năng giao tiếp, cải thiện khả năng xây dựng mối quan hệ và tìm kiếm thành công trong cuộc sống.
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h2 style={{ textAlign: "justify" }}>
              <strong>
                Giới thiệu đôi nét về cuốn sách Đắc Nhân Tâm 
              </strong>
            </h2>
            <p style={{ textAlign: "justify" }}>
            Dale Carnegie (Dale Breckenridge Carnegie) sinh năm 1888 tại vùng Maryville, Missouri, Mỹ. Sau khi tốt nghiệp trường State Teachers College ở Warrensburg, Dale Carnegie đã phải làm nhiều công việc khác nhau để kiếm sống và phụ giúp gia đình.
Năm 1911, Dale Carnegie đã quyết định sử dụng toàn bộ số tiền mình có lúc đó là 500 USD để theo đuổi giấc mơ trở thành một nhà diễn thuyết. Tuy nhiên, sau nhiều sự kiện biến động trong cuộc sống, ông lại trở thành sinh viên tại trường American Academy of Dramatic Arts ở New York. Trong thời gian khó khăn này, Dale Carnegie bắt đầu dạy kỹ năng giao tiếp và thuyết trình trước công chúng. Các lớp học của ông được mọi người đón nhận nồng nhiệt, số lượng học viên tăng đều qua mỗi tuần và Dale đã dần trở thành diễn giả được yêu thích nhất trong thời kỳ đó. 
Khi đã thành công với vai trò là một diễn giả, Dale đã lựa chọn tiếp tục với sự nghiệp viết sách. Trong số những cuốn sách đã được xuất bản của ông, How to Win Friends and Influence People (Đắc Nhân Tâm) được xem là thành tựu lớn nhất, là tác phẩm đưa tên tuổi của ông trở nên nổi tiếng trên toàn thế giới.
            </p>
            <h2 style={{ textAlign: "justify" }}>
              <strong>
                Nội dung chính của cuốn sách

              </strong>
            </h2>
            <p style={{ textAlign: "justify" }}>
              Đắc Nhân Tâm của tác giả Dale Carnegie là một trong những cuốn sách kinh điển nhất trong lĩnh vực phát triển bản thân và kỹ năng giao tiếp. Cuốn sách này đã được viết và xuất bản lần đầu tiên vào năm 1936. Cho đến nay, Đắc Nhân Tâm vẫn được đánh giá là một trong những tác phẩm quan trọng nhất trong lịch sử văn học thế giới. 
            </p>
            <p style={{ textAlign: "justify" }}>
              <img
                src="https://tiki.vn/blog/wp-content/uploads/2023/08/noi-dung-chinh-dac-nhan-tam-1024x682.jpg"
                alt="sách"
                loading="lazy"
              />
            </p>
            <p style={{ textAlign: "justify" }}>
            Cuốn sách này tổng hợp một loạt các nguyên tắc và kỹ năng giúp độc giả nâng cao khả năng giao tiếp, xây dựng mối quan hệ tốt hơn và trở thành một người lãnh đạo toàn diện. Điểm hấp dẫn nhất ở Đắc Nhân Tâm chính là việc tác giả đã sử dụng các ví dụ cụ thể từ cuộc sống hàng ngày để đưa ra dẫn chứng, giải thích cho từng nguyên tắc. Nhờ vậy, người đọc sẽ dễ dàng hiểu được cách áp dụng những nguyên tắc này vào cuộc sống thường nhật.
            </p>
            <p style={{ textAlign: "justify" }}>
            Chính vì những giá trị kiến thức sâu sắc và không bao giờ “lỗi thời”, Đắc Nhân Tâm đã trở thành cuốn sách “gối đầu giường” của nhiều thế hệ. Triết lý tối cao ở Đắc Nhân Tâm không chỉ là “thuật thu phục lòng người”, cuốn sách này hướng bạn đến việc hiểu rõ chính mình. Điều này sẽ là nền tảng vững vàng để bạn thấu hiểu người khác, quan tâm đến họ, khơi gợi được những tiềm năng nơi họ và đưa họ đến một tầm cao mới.
            </p>
            <p style={{ textAlign: "justify" }}>
            Những điều mà Dale Carnegie muốn truyền tải trong cuốn sách đã dần được chuyển đổi thành những hành động thực tế của độc giả trong cuộc sống đời thực. Có thể nói, Đắc Nhân Tâm không đơn thuần là một cuốn sách để đọc, đó là một tác phẩm truyền cảm hứng kinh điển, là cuốn sách mà khi đọc xong có thể khiến bạn thay đổi để trở nên tốt hơn. 
            </p>
          </div>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Comment data={commentsData}/>
      </CustomTabPanel>
    </Box>
  );
}
