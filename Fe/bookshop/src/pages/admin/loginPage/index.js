import { memo } from "react";
import "./style.scss";
import { ROUTERS } from "utils/router";
import { useNavigate, Link } from "react-router-dom";
import bgImg from "assets/admin/images/banner/bannerlogin.jpeg";

const LoginPage = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(ROUTERS.ADMIN.ORDERS);
    };

    return (
        <div className="login" style={{ backgroundImage: `url(${bgImg})` }}>
            <div className="login__container">
                <div className="login__brand">LoveLy Shop</div>
                <h2 className="login__title">TRUY CẬP HỆ THỐNG ADMIN</h2>
                <p className="login__subtitle">Đăng nhập để quản lý cửa hàng</p>

                <form className="login__form" onSubmit={handleSubmit}>
                    <div className="login__form-group">
                        <label htmlFor="username" className="login__label">
                            Tên đăng nhập
                        </label>
                        <input type="text" id="username" name="username" required />
                    </div>
                    <div className="login__form-group">
                        <label htmlFor="password" className="login__label">
                            Mật khẩu
                        </label>
                        <input type="password" id="password" name="password" required />
                    </div>
                    <button type="submit" className="login__button">Đăng nhập</button>
                </form>
                <Link to="/" className="login__back">← Về trang chủ</Link>
            </div>
        </div>
    );
};

export default memo(LoginPage);