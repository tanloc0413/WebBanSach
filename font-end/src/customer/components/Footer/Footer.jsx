import React from "react";
import PropTypes from "prop-types";
import ContactIcon from "../../../utils/images/phone-contact.png";
import "./Footer.css";
import { Box, Container } from "@mui/material";

Footer.propTypes = {};

function Footer(props) {
  return (
    <footer>
      <Box>
        <Container>
          <div className="footer__block">
            <div className="footer__block-maininfo1">
              <h3 className="footer__title-info">
                <a href="/about-shop">Về Shop Bán Sách</a>
              </h3>
              <div className="block-maininfo">
                <div className="block-introduce">
                  <p className="text-introduce texts">
                    Shop chuyên kinh doanh về sách tại
                    TP.HCM
                  </p>
                </div>
                <div className="block-contacts">
                  <p className="text-address texts">
                    <b>Địa chỉ: </b>
                    <span>
                      Số 6, phường Linh Trung, Tp.Thủ Đức, Tp. Hồ Chí Minh
                    </span>
                  </p>
                  <p className="text-phone texts">
                    <b>Điện thoại: </b>
                    <span>0379383465</span>
                  </p>
                  <p className="text-email texts">
                    <b>Email: </b>
                    <span>admin@shopbansach.com</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="footer__block-maininfo2">
              <h3 className="footer__title-info">Hỗ trợ khách hàng</h3>
              <div className="block-maininfo">
                <ul className="list-helps">
                  <li className="text-helps">
                    <a>Giới thiệu</a>
                  </li>
                  <li className="text-helps">
                    <a>Chính sách đổi trả</a>
                  </li>
                  <li className="text-helps">
                    <a>Chính sách bảo mật</a>
                  </li>
                  <li className="text-helps">
                    <a>Chính sách mua hàng online</a>
                  </li>
                  <li className="text-helps">
                    <a>Phương thức thanh toán</a>
                  </li>
                  <li className="text-helps">
                    <a>Liên hệ</a>
                  </li>
                  <li className="text-helps">
                    <a>Tuyển dụng</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer__block-maininfo3">
              <h3 className="footer__title-info">Chăm sóc khách hàng</h3>
              <div className="block-maininfo">
                <div className="contact-info">
                  <div className="icon-contact">
                    <img src={ContactIcon} className="img-contact" alt=""/>
                  </div>
                  <div className="contacts">
                    <p className="text-contact phone-contact">0379.383.465</p>
                    <p className="text-contact email-contact">
                      admin@shopbansach.com
                    </p>
                  </div>
                </div>
              </div>
              <h3 className="footer__title-info footer__title-follows">
                Follow Us
              </h3>
              <div className="block-maininfo">
                <div className="list-follow">
                  <a className="block-follows" href="https://www.facebook.com/">
                    <i class="fa-brands fa-facebook-f"></i>
                  </a>
                  <a className="block-follows">
                    <i class="fa-brands fa-twitter"></i>
                  </a>
                  <a className="block-follows">
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                  <a className="block-follows" href="https://www.youtube.com/">
                    <i class="fa-brands fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__copyright">
            <p className="text-copyright">
              Copyright © 2024 <a href="/">SHOPBANSACH</a>
              <span> by FITNLU</span>
            </p>
          </div>
        </Container>
      </Box>
    </footer>
  );
}

export default Footer;
