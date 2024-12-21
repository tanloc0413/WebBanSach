import React from 'react';
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


function Header() {
  return (
    <header id='header'>
      <div id='blk_header1'>
        <a id='blk_logo' href='/'>
          <img id='header_logo-img' src={LogoIcon} alt='Logo'/>
        </a>
        <div id='blk_search'>
          <input type='search' placeholder='Tìm kiếm' id='input-search'/>
          <div id='blk_search-icon'>
            <button id='search'>
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
              <Nav.Link href="#link">Link</Nav.Link>
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