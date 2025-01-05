import React, { useContext } from "react";
// Font Awesome
import "@fortawesome/fontawesome-free/css/all.min.css";
// CSS
import "./HomePage.css";
// Icon
import ChatIcon from "../../../utils/images/chats.svg";
// Page
import Carousel from "./components/CarouselHome";
import { Box, Container } from "@mui/material";
import { CategoryContext } from "../../../constants";
import Collection from "./components/Collection";

export default function HomePage() {
  const categories = useContext(CategoryContext);

  return (
    <Box
      sx={{
        bgcolor: "#f4f4f4",
      }}
    >
      <div className="div__menu">
        <div className="menu-list-items">
          <ul className="list-items">
            {categories &&
              categories.map((c) => (
                <li className="items">
                  <a
                    className="block-pages"
                    href={`/categories/${c.categoryName}`}
                  >
                    {c.categoryName}
                  </a>
                </li>
              ))}
          </ul>
        </div>
      </div>
      <Container>
        <div className="div__chat">
          <img src={ChatIcon} className="chat-icon" alt="chat" />
        </div>
        <div className="contents">
          <div className="carouselMain">
            <div className="div-carousel">
              <Carousel />
              <div className="block__service">
                <h4 className="service-title">Ưu đãi của bạn</h4>
                <div className="block__service-list">
                  <ul className="service-list">
                    <li className="service">
                      <p className="service-text1">Miễn phí giao hàng</p>
                      <p className="service-text2">
                        Freeship cho đơn hàng thanh toán trước
                      </p>
                    </li>
                    {/* <li className="service">
                      <p className="service-text1">Đổi trả/ Bảo hành</p>
                      <p className="service-text2">
                        Đổi trả 7 ngày, bảo hành đến 2 năm
                      </p>
                    </li> */}
                    <li className="service">
                      <p className="service-text1">Chấp nhận COD</p>
                      <p className="service-text2">
                        Kiểm tra hàng trước khi thanh toán
                      </p>
                    </li>
                    <li className="service">
                      <p className="service-text1">
                        Gửi feedback nhận quà ngay
                      </p>
                      <p className="service-text2">
                        Với mỗi feedback được gửi, quý khách nhận ngay voucher
                        giảm 5% cho đơn hàng tiếp theo
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="accessoryMain">
            <Collection categories={categories} />
          </div>
        </div>
      </Container>
    </Box>
  );
}
