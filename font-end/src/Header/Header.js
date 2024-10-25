import React from 'react';
import '../css/header.css';
import LogoIcon from '../imgs/logo-web.png';
import { IoMdSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineBell } from "react-icons/ai";
// import { CiBellOn } from "react-icons/ci";




function Header() {
  return (
    <header id='header'>
      <div id='blk_header'>
        <a id='blk_logo' href='/'>
          <img id='logo-img' src={LogoIcon} alt='Logo'/>
        </a>
        <div id='blk_search'>
          <input type='search' placeholder='Tìm kiếm' id='input-search'/>
          <div id='blk_search-icon'>
            <div id='search'>
              <IoMdSearch className='search-icon'/>
            </div>
          </div>
        </div>
        <div id='blk_user'>
          <div className='notification blk_user-icon'>
            <AiOutlineBell className='notification-icon user-icon'/>
            <p className='notification-text title_text-icons'>Thông Báo</p>
          </div>
          <div className='cart blk_user-icon'>
            <IoCartOutline className='cart-icon user-icon'/>
            <p className='cart-text title_text-icons'>Giỏ Hàng</p>
          </div>
          <div className='account blk_user-icon'>
            <FaRegUser className='account-icon user-icon'/>
            <p className='account-text title_text-icons'>Tài Khoản</p>
          </div>

        </div>
      </div>
    </header>
  )
}

export default Header;