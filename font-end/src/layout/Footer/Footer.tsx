import React from 'react';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

// file
import '../../css/footer.css';
import LogoIcon from '../../imgs/logo-web.png';

function Footer() {
  const service = [
    { name: "Điều khoản sử dụng", href: "#" },
    { name: "Chính sách bảo mật thông tin cá nhân", href: "#" },
    { name: "Chính sách bảo mật thanh toán", href: "#" },
    { name: "Giới thiệu Fahasa", href: "#" },
    { name: "Hệ thống trung tâm - nhà sách", href: "#" },
  ];

  const supports = [
    { name: "Chính sách đổi - trả - hoàn tiền", href: "#" },
    { name: "Chính sách bảo hành - bồi hoàn", href: "#" },
    { name: "Chính sách vận chuyển", href: "#" },
    { name: "Chính sách khách sỉ", href: "#" },
  ]

  return (
    <footer id='footer'>
      <div id='blk_footer'>
        <div id='blk_footer1'>
          <a id='blk_logo' href='/'>
            <img id='logo-img' src={LogoIcon} alt='Logo'/>
          </a>
          <div id='blk_footer-text'>
            <p className='text-address text'>
              <b>Địa chỉ:</b> Số 90, Đường GS1, P.Đông Hòa, Dĩ An, Bình Dương
            </p>
            <p className='text-nameStore text'>
              Book Store - Nhà sách trực tuyến bán lẻ hàng đầu Việt Nam
            </p>
            <p className='text-introduce text'>
              Book Store nhận đặt hàng trực tuyến và giao hàng tận nơi.
              KHÔNG hỗ trợ đặt mua và nhận hàng trực tiếp tại văn phòng cũng như tất cả Hệ Thống Book Store trên toàn quốc.
            </p>
          </div>
          <div id='blk_img-MIT'>
            <Image src="http://online.gov.vn/Content/EndUser/LogoCCDVSaleNoti/logoSaleNoti.png" className='img-MIT' />
          </div>
        </div>
        <div id='blk_footer2'>
          <div id='footer1'>
            <div id='footer-service'>
              <p className='text-title'>DỊCH VỤ</p>
              <div id='blk-content'>
                {service.map((link, index) => (
                  <a key={index} href={link.href} className='name-service'>
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
            <div id='footer-supports'>
              <p className='text-title'>HỖ TRỢ</p>
              <div id='blk-content'>
                {supports.map((link, index) => (
                  <a key={index} href={link.href} className='name-supports'>
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div id='footer2'>
            <p className='text-title text-contact'>Liên hệ</p>
            <div id='blk_contact'>
              <div className='contact-address contact'>
                <i className="fa-solid fa-location-dot"></i>
                <p className='text_small-contact'>122, P.Tân Đông Hiệp, Dĩ An, Bình Dương</p>
              </div>
              <div className='contact-email contact'>
                {/* <i class="fa-solid fa-envelope"></i> */}
                <i className="fa-regular fa-envelope mail-icon"></i>
                <p className='text_small-contact'>tranloc9888@gmail.com</p>
              </div>
              <div className='contact-phone contact'>
                <i className="fa-solid fa-phone"></i>
                <p className='text_small-contact'>0379383465</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </footer>
  )
}

export default Footer;