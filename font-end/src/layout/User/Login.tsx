import React, { useEffect, useState } from 'react';

import '../../css/login.css';
import GoogleIcon from '../../imgs/google.png';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/'); // Redirect to home if already logged in
    }
  }, [navigate]);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const loginRequest = {
      username: username,
      password: password,
    };
  
    fetch('http://localhost:8080/tai-khoan/dang-nhap', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginRequest),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Đăng nhập không thành công!');
      })
      .then((data) => {
        const { jwt } = data;
        // Lưu token vào localStorage
        localStorage.setItem('token', jwt);
  
        // Hiển thị thông báo đăng nhập thành công và điều hướng
        setSuccess('Đăng nhập thành công!');
        setTimeout(() => {
          // Chuyển về Trang chủ
          navigate('/'); 
          window.location.reload();
        }, 1000);
      })
      .catch((error) => {
        console.error('Đăng nhập thất bại: ', error);
        setError('Đăng nhập không thành công! Vui lòng kiểm tra username hoặc mật khẩu');
      });
  };
  


  return (
    <div id="login">
      <div className="login-form">
        <p className='login-title'>Đăng nhập</p>
        <form id='form-blockLogin' onSubmit={handleLogin}>
          <div className="input-box">
            <label htmlFor="username" className='login_input-text'>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Vui lòng nhập username"
              className='login-input login_username-input'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-box password-box">
            <label htmlFor="password" className='login_input-text'>Mật khẩu</label>
            <div className='login_block-password'>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Mật khẩu"
                className="login-input login_password-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className='login_block-eye' onClick={handleShowPassword}>
                {showPassword ? <FaRegEyeSlash className='eye-icon'/> : <FaRegEye className='eye-icon'/>}
              </div>
            </div>

          </div>
          <div className="input-box login_forgotPass-box">
            <a href="/dang-ky" className='login_signup-text'>Đăng ký ngay!</a>
            <a href="/quen-mat-khau" className='login_forgotPass-text'>Quên mật khẩu?</a>
          </div>
          <div className="input-box btn-box">
            <button
              type="submit"
              value="login"
              className='login-btn'
            >
              Đăng nhập
            </button>
            {error && <div id="error-login">{error}</div>}
            {success && <div id="success-login" className="success-message">{success}</div>}
            
          </div>
          <div className="hr-box">
            <hr className='hr-block'/>
            <p className='hr-text'>Hoặc</p>
            <hr className='hr-block'/>
          </div>
          <div className='google-box'>
            <button className='login-btn-google'>
              <img src={GoogleIcon} alt="google" className='img-google'/>
              <p className='text-google'>Đăng nhập bằng Google</p>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
