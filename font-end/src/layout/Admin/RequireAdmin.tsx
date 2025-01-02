import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

interface JwtPayload {
    isAdmin: boolean;
    isStaff: boolean;
    isUser: boolean;
}

const RequireAdmin = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
    const WithAdminCheck: React.FC<P> = (props) => {
        const navigate = useNavigate();

        const token = localStorage.getItem('token');
        
        useEffect(() => {
            // trong tình huống chưa đăng nhập
            if(!token) {
                navigate('/dang-nhap');
                return;
            }
            else {
                // giải mã token
                const decodedToken = jwtDecode(token) as JwtPayload;

                // lấy thông của người dùng từ token
                const isAdmin = decodedToken.isAdmin;

                // kiểm tra ko phải admin
                if(!isAdmin) {
                    navigate('/dang-nhap');
                    return;
                }

            }
        }, [navigate]);
        return <WrappedComponent {...props} />;
    }
    return WithAdminCheck;
}

export default RequireAdmin;