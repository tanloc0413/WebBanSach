import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '../../css/activateAcc.css';

function ActivateAccount() {
    const [email, setEmail] = useState('');
    const [activationCode, setActivationCode] = useState('');
    const [activated, setActivatedAcc] = useState(false);
    const [notify, setNotify] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        const emailParams = searchParams.get('email');
        const activateCodeParams = searchParams.get('activationCode');

        if (emailParams && activateCodeParams) {
            setEmail(emailParams);
            setActivationCode(activateCodeParams);
            handleActivateAction();
        }
    }, []);

    const handleActivateAction = async () => {
        console.log("Email: ", email);
        console.log("Activation code: ", activationCode);

        try {
            const url = `http://localhost:8080/tai-khoan/kich-hoat?email=${email}&activationCode=${activationCode}`;


            const response = await fetch(url, {
                method: 'GET'
            });

            if (response.ok) {
                setActivatedAcc(true);
            } else {
                setNotify(response.text + '');
            }
        } catch (error) {
            setNotify('Lỗi kết nối với server');
            console.log("Lỗi khi kích hoạt:",error);
        }
    };

    // Điều hướng về trang chủ
    useEffect(() => {
        if (activated) {
            const timer = setTimeout(() => {
                navigate('/');
            }, 5000); // Chuyển hướng sau 5 giây

            return () => clearTimeout(timer);
        }
    }, [activated, navigate]);

    return (
        <div id='actiavted-account'>
            <h1 id='actiavted-title'>Thông báo!</h1>
            {
                activated ? (
                    <div id='actiavted_block'>
                        <h3 id='actiavted_text-success'>Tài khoản của bạn đã được kích hoạt thành công!</h3>
                        <p>Bạn sẽ được chuyển về trang chủ sau 5 giây...</p>
                    </div>
                ) : (
                    <div id='actiavted_block'>
                        <h3 id='actiavted_text-error'>Kích hoạt tài khoản thất bại</h3>
                        <p id='actiavted_text-notify'><b>Lỗi:</b> {notify}</p>
                    </div>
                )
            }
        </div>
    );
}

export default ActivateAccount;
