import React, { ChangeEvent, useState } from 'react';
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
import { useNavigate } from 'react-router-dom';

interface AppProps {
  searchKeyword: string;
  setSearchKeyword: (keyword: string) => void;
}

function Header({searchKeyword, setSearchKeyword}: AppProps) {
  const navigate = useNavigate();
  const[tprKeyword, setTprKeyword] = useState('');

  // xử lý tìm kiếm
  const onSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    // setSearchKeyword(e.target.value);
    // từ khóa tạm thời tempory keyword
    setTprKeyword(e.target.value);
  }

  // xử lý tìm kiếm
  const handleSearch = () => {
    // setSearchKeyword(tprKeyword)
    if (tprKeyword.trim() !== '') {
      // navigate(`/tim-kiem?keyword=${encodeURIComponent(searchKeyword)}`);
      // setSearchKeyword(tprKeyword);
      setSearchKeyword(tprKeyword);
      // navigate(`/tim-kiem/${encodeURIComponent(searchKeyword)}`);
      navigate(`/tim-kiem/${encodeURIComponent(tprKeyword)}`);
      // setSearchKeyword(tprKeyword);
    }
  }

  // xử lý tìm kiếm khi nhấn enter
  const onSearchKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <header id='header'>
      <div id='blk_header1'>
        <a id='blk_logo' href='/'>
          <img id='header_logo-img' src={LogoIcon} alt='Logo'/>
        </a>
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
          </a>
          <a className='account blk_user-icon' href='tai-khoan'>
            <FaRegUser className='account-icon user-icon'/>
            <p className='account-text title_text-icons'>Tài Khoản</p>
          </a>

        </div>
      </div>
      <Navbar id='blk_header2'>
        <Container>
          <Navbar.Collapse>
            <Nav>
              <Nav.Link href="/">
                <i className="fa-solid fa-house house-icon"></i>
              </Nav.Link>
              <Nav.Link href="/sach" className='nav_link-text'>Tất cả sách</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
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
            </Nav>
          </Navbar.Collapse>  
        </Container>
      </Navbar>
    </header>
  )
}

export default Header;