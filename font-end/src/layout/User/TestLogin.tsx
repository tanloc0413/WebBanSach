import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";


const TestLogin = () => {
    const [username, setUsername] = useState<string | null>(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const userData = jwtDecode(token);
            console.log("userData: ", userData);

            if(userData) {
                setUsername(userData.sub + '');
            }
        }
    }, []);

    return (
        <div>
            {username ? <p>Chào mừng <b>{username}</b> đến với trang web của chúng tôi</p> : <p>Bạn chưa đăng nhập</p>}
        </div>
    )
}

export default TestLogin;