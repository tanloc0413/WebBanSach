import React, { useEffect, useState } from 'react';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';

import '../../css/register.css';

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [email, setEmail] = useState('');
    const [lastName, setLastName] = useState(''); // họ
    const [firstName, setFirstName] = useState(''); // tên
    const [sex, setSex] = useState('nam');
    const [numberPhone, setNumberPhone] = useState('');
    const [notify, setNotify] = useState('');
    const [errorNotify, setErrorNotify] = useState('');

    const bgrImg = [
        'url(https://images2.alphacoders.com/138/thumb-1920-1383289.png)',
        'url(https://images4.alphacoders.com/641/thumb-1920-641968.jpg)',
        'url(https://images8.alphacoders.com/134/thumb-1920-1349722.png)',
        'url(https://images6.alphacoders.com/134/thumb-1920-1346734.png)',
        'url(https://images4.alphacoders.com/973/thumb-1920-973967.jpg)'
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

    // báo lỗi khi điền form
    const [errorUsername, setErrorUsername] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [errorRePass, setErrorRePass] = useState('');

    // gửi form đăng ký
    const handleSubmit = async(e: React.FormEvent) => {
        // clear hết toàn bộ input khi đăng ký thành công
        setErrorUsername('');
        setErrorEmail('');
        setErrorPassword('');
        setErrorRePass('');

        // tránh click liên tục
        e.preventDefault();

        // kiểm tra các điều kiện và gán kết quả vào biến
        const isUsernameValid = !await checkUsernameExist(username);
        const isEmailValid = !await checkEmailExist(email);
        const isPasswordValid = !checkPassword(password);
        const isRePassValid = !checkRePass(rePassword);

        // kiểm tra tất cả điều kiện
        if(isUsernameValid && isEmailValid && isPasswordValid && isRePassValid) {
            try {
                const url = 'http://localhost:8080/tai-khoan/dang-ky'

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
                        password: password
                    })
                });

                const responseData = await response.json();

                if(response.ok) {
                    setNotify('Đăng ký tài khoản thành công!');
                } else {
                    console.log(responseData);
                    setErrorNotify('Đã xảy ra lỗi trong quá trình đăng ký!');
                }
            } catch(error) {
                console.log(error);
                setErrorNotify('Đăng ký không thành công!');
            }
        }
    }

    // kiểm tra tên đăng nhập đã tồn tại
    const checkUsernameExist = async(username: string) => {
        // end-point
        const url = `http://localhost:8080/nguoi-dung/search/existsByUsername?username=${username}`;

        // call API
        try {
            const response = await fetch(url);
            const data = await response.text();

            if(data === 'true') {
                setErrorUsername('Tên đăng nhập đã tồn tại!');
                return true;
            }
            return false;
        } catch(error) {
            console.error('Lỗi khi kiểm tra tên đăng nhập: ', error);
            return false;
        }
    }

    const handleUsernameChange = async(e: React.ChangeEvent<HTMLInputElement>) => {
        // thay đổi giá trị
        setUsername(e.target.value);

        // kiểm tra
        setErrorUsername('');

        return checkUsernameExist(e.target.value);
    }

    // kiểm tra tên đăng nhập đã tồn tại
    const checkEmailExist = async(email: string) => {
        // end-point
        const url = `http://localhost:8080/nguoi-dung/search/existsByEmail?email=${email}`;

        // call API
        try {
            const response = await fetch(url);
            const data = await response.text();

            if(data === 'true') {
                setErrorEmail('Email đã tồn tại!');
                return true;
            }
            return false;
        } catch(error) {
            console.error('Lỗi khi kiểm tra email: ', error);
            return false;
        }
    }

    const handleEmailChange = async(e: React.ChangeEvent<HTMLInputElement>) => {
        // thay đổi giá trị
        setEmail(e.target.value);

        // kiểm tra
        setErrorEmail('');

        return checkEmailExist(e.target.value);
    }

    // kiểm tra mật khẩu
    const checkPassword = async(password: string) => {
        const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,}$/;
        // const passRegex = /^(?=.*[a-z]){5,}$/;

        if(!passRegex.test(password)) {
            setErrorPassword('Mật khẩu phải ít nhất 5 ký tự, bao gồm chữ hoa, chữ thường, số và ký tự đặc biệt!');
            return true;
        }
        else {
            setErrorPassword('');
            return false;
        }
    }

    const handlePasswordChange = async(e: React.ChangeEvent<HTMLInputElement>) => {
        // thay đổi giá trị
        setPassword(e.target.value);

        // kiểm tra
        setErrorPassword('');

        return checkPassword(e.target.value);
    }

    // kiểm tra nhập lại mật khẩu
    const checkRePass = async(password: string) => {
        if(rePassword !== password) {
            setErrorRePass('Mật khẩu không trùng khớp!');
            return true;
        }
        else {
            setErrorRePass('');
            return false;
        }
    }

    const handleRePassChange = async(e: React.ChangeEvent<HTMLInputElement>) => {
        // thay đổi giá trị
        setRePassword(e.target.value);

        // kiểm tra
        setErrorRePass('');

        return checkRePass(e.target.value);
    }

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
                                    value="nam"
                                    control={<Radio />}
                                    label="Nam"
                                    color='black'
                                />
                                <FormControlLabel
                                    value="nữ"
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
                                onChange={(e) => setNumberPhone(e.target.value)}
                            />
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
                        <div id='register_btn'>
                            <Button
                                variant="outlined"
                                size='large'
                                type='submit'
                                // onClick={handleSubmit}
                            >
                                Đăng ký
                            </Button>
                            {/* <div>{notify || errorNotify}</div> */}
                        </div>
                    </form>
                    {notify &&
                        (
                            <Alert severity="success">
                                {notify}
                            </Alert>
                        )
                    }
                    {errorNotify &&
                        (
                            <Alert variant="outlined" severity="error">
                                {errorNotify}
                            </Alert>
                        )
                    }
                </div>

            </div>
        </div>
    )
}

export default Register;