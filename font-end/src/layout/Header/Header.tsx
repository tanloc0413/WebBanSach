import React, { ChangeEvent, useEffect, useState } from 'react';
import { IoMdSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineBell } from "react-icons/ai";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

// files
import '../../css/header.css';
import LogoIcon from '../../imgs/logo-web.png';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../Cart/CartContext';

interface AppProps {
  searchKeyword: string;
  setSearchKeyword: (keyword: string) => void;
}

function Header({searchKeyword, setSearchKeyword}: AppProps) {
  const navigate = useNavigate();
  const[tprKeyword, setTprKeyword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));
  const [showLogout, setShowLogout] = useState(false);
  const { cart } = useCart();

  
  // const [categoryName, setCategoryName] = useState('');
  const settings = [
    {
      
    },
    'Account'
    , 'Dashboard', 'Logout'
  ];

  // xử lý tìm kiếm
  const onSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    // từ khóa tạm thời tempory keyword
    setTprKeyword(e.target.value);
  }

  // xử lý tìm kiếm
  const handleSearch = () => {
    if (tprKeyword.trim() !== '') {
      setSearchKeyword(tprKeyword);
      navigate(`/tim-kiem/${encodeURIComponent(tprKeyword)}`);
      // navigate(`/tim-kiem/${encodeURIComponent(tprKeyword)}/the-loai/${encodeURIComponent(categoryName)}`);
      // setSearchKeyword(tprKeyword);
    }
  }

  // xử lý tìm kiếm khi nhấn enter
  const onSearchKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  // đăng nhập
  useEffect(() => {
    // Cập nhật trạng thái nếu token thay đổi
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);
  
  // đăng xuất
  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    window.location.reload();
  };

  const handleShowLogout = () => {
    setShowLogout(!showLogout);
  };

  

  return (
    <header id='header'>
      <div id='blk_header1'>
        <Link id='blk_logo' to={'/'}>
          <img id='header_logo-img' src={LogoIcon} alt='Logo'/>
        </Link>
        <div id='blk_search'>
          <input
            type='search'
            placeholder='Tìm kiếm'
            id='input-search'
            onChange={onSearchInputChange}
            value={tprKeyword}
            onKeyDown={onSearchKeyPress}
          />
          <div id='blk_search-icon'>
            <button id='search'
              onClick={handleSearch}
            >
              <IoMdSearch className='search-icon'/>
            </button>
          </div>
        </div>
        <div id='blk_user'>
          <div className='notification blk_user-icon'>
            <AiOutlineBell className='notification-icon user-icon'/>
            <p className='notification-text title_text-icons'>Thông Báo</p>
          </div>
          <a className='cart blk_user-icon' href='/gio-hang'>
            <IoCartOutline className='cart-icon user-icon'/>
            <p className='cart-text title_text-icons'>Giỏ Hàng</p>
            <p>({cart.reduce((total, item) => total + item.quantity, 0)})</p>
          </a>
          {/* <div className='account blk_user-icon'>
            <FaRegUser className='account-icon user-icon'/>
            <p className='account-text title_text-icons'>Tài Khoản</p>
          </div> */}
          {/* 
            // <div id='block_header-account'>
            <Link to='/dang-ky' className='button_signup'>
              Đăng Ký
              
            </Link> 
          </div> */}
          {!isLoggedIn ? (
            <Link to='/dang-nhap' className='button_login'>
              Đăng Nhập
            </Link>
          ) : (
            <div>
              <div className='account blk_user-icon' onClick={handleShowLogout}>
                <FaRegUser className='account-icon user-icon' />
                <p className='account-text title_text-icons'>Tài Khoản</p>
              </div>
              {showLogout && (
                <div id='block_header-account'>
                  <button onClick={handleLogout} className='logout-button'>
                    Đăng Xuất
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <Navbar id='blk_header2'>
        <Container>
          <Navbar.Collapse>
            <Nav>
              <Nav.Link href="/">
                <i className="fa-solid fa-house house-icon"></i>
              </Nav.Link>
              <Nav.Link href="/sach" className='nav_link-text'>Sách</Nav.Link>
              <NavDropdown title="Thể Loại Sách" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/lien-he" className='nav_link-text'>Liên hệ</Nav.Link>
            </Nav>
          </Navbar.Collapse>  
        </Container>
      </Navbar>
    </header>
  )
}

export default Header;