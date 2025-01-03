import React, { useEffect, useState } from 'react';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import { Link, useNavigate } from 'react-router-dom';

import '../../css/register.css';

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [email, setEmail] = useState('');
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [sex, setSex] = useState('nam');
    const [numberPhone, setNumberPhone] = useState('');
    const [notify, setNotify] = useState('');
    const [errorNotify, setErrorNotify] = useState('');

    // điều hướng trang
    const navigate = useNavigate();

    const bgrImg = [
        'url(https://images2.alphacoders.com/138/thumb-1920-1383289.png)',
        'url(https://images4.alphacoders.com/641/thumb-1920-641968.jpg)',
        'url(https://images8.alphacoders.com/134/thumb-1920-1349722.png)',
        'url(https://images6.alphacoders.com/134/thumb-1920-1346734.png)',
        'url(https://images4.alphacoders.com/973/thumb-1920-973967.jpg)',
    ];
    
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                (prevIndex + 1) % bgrImg.length
            );
        }, 10000);
        return () => clearInterval(interval);
    }, [bgrImg.length]);

    const [errorUsername, setErrorUsername] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [errorRePass, setErrorRePass] = useState('');
    const [errorPhone, setErrorPhone] = useState('');

    const checkPassword = (password: string) => {
        const passRegex = /^.{5,}$/;

        if (!passRegex.test(password)) {
            setErrorPassword('Mật khẩu phải ít nhất 5 ký tự!');
            return true;
        } else {
            setErrorPassword('');
            return false;
        }
    };

    const checkRePass = (rePassword: string) => {
        if (rePassword !== password) {
            setErrorRePass('Mật khẩu không trùng khớp!');
            return true;
        } else {
            setErrorRePass('');
            return false;
        }
    };

    const checkUsernameExist = async(username: string) => {
        const url = `http://localhost:8080/nguoi-dung/search/existsByUsername?username=${username}`;

        try {
            const response = await fetch(url);
            const data = await response.text();

            if (data === 'true') {
                setErrorUsername('Tên đăng nhập đã tồn tại!');
                return true;
            }
            return false;
        } catch (error) {
            console.error('Lỗi khi kiểm tra tên đăng nhập: ', error);
            return false;
        }
    }

    const checkEmailExist = async(email: string) => {
        const url = `http://localhost:8080/nguoi-dung/search/existsByEmail?email=${email}`;

        try {
            const response = await fetch(url);
            const data = await response.text();

            if (data === 'true') {
                setErrorEmail('Email đã tồn tại!');
                return true;
            }
            return false;
        } catch (error) {
            console.error('Lỗi khi kiểm tra email: ', error);
            return false;
        }
    }

    const checkPhone = (phone: string) => {
        const phoneRegex = /^0\d{9}$/;
        if (!phoneRegex.test(phone)) {
            setErrorPhone('Số điện thoại phải bắt đầu bằng 0 và có 10 chữ số!');
            return true;
        } else {
            setErrorPhone('');
            return false;
        }
    };

    const handleUsernameChange = async(e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
        setErrorUsername('');
        return checkUsernameExist(e.target.value);
    }

    const handleEmailChange = async(e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        setErrorEmail('');
        return checkEmailExist(e.target.value);
    }

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
        setErrorPassword('');
        return checkPassword(e.target.value);
    }

    const handleRePassChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRePassword(e.target.value);
        setErrorRePass('');
        return checkRePass(e.target.value);
    }

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let phoneInput = e.target.value;
    
        // Nếu dấu '.' xuất hiện ở đầu input, loại bỏ nó ngay lập tức
        if (phoneInput[0] === '.') {
            phoneInput = phoneInput.slice(1);
        }
        // Kiểm tra nếu input chứa dấu '.' và tự động xóa nó
        else if (phoneInput.includes('.')) {
            phoneInput = phoneInput.replace('.', '');
        }
        // Kiểm tra nếu input chứa ký tự không phải là số, bao gồm dấu chấm hoặc ký tự khác
        else if (/[^0-9]/.test(phoneInput)) {
            return;  // Nếu có ký tự không phải là số thì không cho nhập
        }
        // Nếu input trống thì ẩn lỗi
        else if (phoneInput === "") {
            setErrorPhone("");
            setNumberPhone(phoneInput);
            return;
        }
        // Nếu số điện thoại không bắt đầu bằng 0
        else if (phoneInput[0] !== "0") {
            setErrorPhone('Số điện thoại phải bắt đầu bằng 0!');
            setNumberPhone(phoneInput);
        } 
        // Nếu nhập đủ 10 số và bắt đầu bằng 0 thì không báo lỗi và không cho nhập thêm
        else if (phoneInput.length === 10) {
            setNumberPhone(phoneInput);
            setErrorPhone('')
        }
        // Nếu nhập số bắt đầu bằng 0 nhưng chưa đủ 10 số
        else if (phoneInput.length < 10) {
            setNumberPhone(phoneInput);
            setErrorPhone('Số điện thoại phải đủ 10 số!');
        }
    };
    

    const handleSubmit = async (e: React.FormEvent) => {
        setErrorUsername('');
        setErrorEmail('');
        setErrorPassword('');
        setErrorRePass('');
        setErrorPhone('');
        
        e.preventDefault();

        // Kiểm tra xem có trường nào trống không
        if (!username || !email || !lastName || !firstName || !numberPhone || !password || !rePassword) {
            setErrorNotify('Vui lòng điền đầy đủ thông tin!');
            return;
        }

        const isUsernameValid = await checkUsernameExist(username);
        const isEmailValid = await checkEmailExist(email);
        const isPasswordValid = await checkPassword(password);
        const isRePassValid = await checkRePass(rePassword);
        const isPhoneValid = await checkPhone(numberPhone);

        if (!isUsernameValid && !isEmailValid && !isPasswordValid && !isRePassValid && !isPhoneValid) {
            try {
                const url = 'http://localhost:8080/tai-khoan/dang-ky';
                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        username: username,
                        email: email,
                        lastName: lastName,
                        firstName: firstName,
                        sex: sex,
                        numberPhone: numberPhone,
                        password: password,
                        activateAcc: 0,
                        activationCode: "" // mã kích hoạt
                    })
                });

                if (response.ok) {
                    // Clear form
                    setUsername('');
                    setPassword('');
                    setRePassword('');
                    setEmail('');
                    setLastName('');
                    setFirstName('');
                    setSex('nam');
                    setNumberPhone('');
                    setNotify('Đăng ký tài khoản thành công!');
                    setErrorNotify('');
                } else {
                    setNotify('');
                    setErrorNotify('Đăng ký không thành công! Vui lòng kiểm tra email để kích hoạt tài khoản!');
                }
            } catch (error) {
                setNotify('');
                setErrorNotify('Đã xảy ra lỗi trong quá trình đăng ký!');
            }
        }
    };
    
    // set thời gian 1s cho thông báo
    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (notify || errorNotify) {
            timer = setTimeout(() => {
                setNotify('');
                setErrorNotify('');
            }, 15000);
        }
    
        return () => clearTimeout(timer);
    }, [notify, errorNotify]);

    return (
        <div
            id='block_register'
            style={{
                width: '100%',
                height: '100%'
            }}
        >
            <div
                id='register'
                style={{
                    width: '100%',
                    height: '100%',
                    backgroundImage: bgrImg[currentImageIndex],
                    backgroundSize: 'cover',
                    
                }}
            >
                <div id='register_block'>
                    <p id='register-title'>đăng ký</p>
                    <form id='register_blk' onSubmit={handleSubmit}>
                        <div id='register_input-blk'>
                            <label
                                htmlFor='username'
                                className='label_register'
                            >
                                Tên tài khoản
                            </label>
                            <input
                                type='text'
                                id='input_register'
                                value={username}
                                onChange={handleUsernameChange}
                            />
                            <p id='error_register'>
                                {errorUsername}
                            </p>
                        </div>
                        <div id='register_input-blk'>
                            <label
                                htmlFor='email'
                                className='label_register'
                            >
                                Email
                            </label>
                            <input
                                type='email'
                                id='input_register'
                                value={email}
                                onChange={handleEmailChange}
                            />
                            <p id='error_register'>
                                {errorEmail}
                            </p>
                        </div>
                        <div id='register_input-blk'>
                            <label
                                htmlFor='lastName'
                                className='label_register'
                            >
                                Họ
                            </label>
                            <input
                                type='text'
                                id='input_register'
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>
                        <div id='register_input-blk'>
                            <label
                                htmlFor='firstName'
                                className='label_register'
                            >
                                Tên
                            </label>
                            <input
                                type='text'
                                id='input_register'
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div>
                        <div id='register_input-blk'>
                            <label
                                id="demo-row-radio-buttons-group-label"
                                htmlFor='sex'
                                className='label_register'
                            >
                                Giới tính
                            </label>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                                value={sex}
                                onChange={(e) => setSex(e.target.value)}
                            >
                                <FormControlLabel
                                    // value={`nam`}
                                    value='nam'
                                    control={<Radio />}
                                    label="Nam"
                                    color='black'
                                />
                                <FormControlLabel
                                    value="nữ"
                                    // value={`nữ`}
                                    control={<Radio />}
                                    label="Nữ"
                                    color='black'
                                />
                            </RadioGroup>

                        </div>
                        <div id='register_input-blk'>
                            <label
                                htmlFor='numberPhone'
                                className='label_register'
                            >
                                Số điện thoại
                            </label>
                            <input
                                type='number'
                                id='input_register'
                                value={numberPhone}
                                // onChange={(e) => setNumberPhone(e.target.value)}
                                onChange={handlePhoneChange}
                                // onFocus={() => setErrorPhone('')}
                            />
                            <p id='error_register'>
                                {errorPhone}
                            </p>
                        </div>
                        <div id='register_input-blk'>
                            <label
                                htmlFor='password'
                                className='label_register'
                            >
                                Mật khẩu
                            </label>
                            <input
                                type='password'
                                id='input_register'
                                value={password}
                                onChange={handlePasswordChange}
                            />
                            <p id='error_register'>
                                {errorPassword}
                            </p>
                        </div>
                        <div id='register_input-blk'>
                            <label
                                htmlFor='rePassword'
                                className='label_register'
                            >
                                Nhập lại mật khẩu
                            </label>
                            <input
                                type='password'
                                id='input_register'
                                value={rePassword}
                                onChange={handleRePassChange}
                            />
                            <p id='error_register'>
                                {errorRePass}
                            </p>
                        </div>
                        {(notify || errorNotify) &&
                            (
                                <div id='block_notify'>
                                    <Alert
                                        severity={notify ? "success" : "error"} 
                                        className={`block_notify-${notify ? "success" : "error"} block_notification`}
                                    >
                                        {notify || errorNotify}
                                    </Alert>
                                </div>
                            )
                        }
                        <div id='register_btn'>
                            <Button
                                variant="outlined"
                                size='large'
                                type='submit'
                                // style={{minWidth: '70px'}}                             
                            >
                                Đăng ký
                            </Button>
                            {/* <button type='submit'   >đăng ký</button> */}
                        </div>
                        
                    </form>
                    <div id='back_signin'>
                        <p id='back_signin-text'>Đã có tài khoản? <span><Link to={'/dang-nhap'} className='back_signin-textLink'>Đăng nhập ngay!</Link></span></p>
                    </div>
                </div>

                
            </div>
        </div>
    )
}

export default Register;
