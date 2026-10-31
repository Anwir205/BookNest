import { memo } from "react";
import './style.scss';
import { Link } from "react-router-dom";
// import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";
import { ROUTERS } from "utils/router";

const Breadcrumb = (props) => {
    return <div className="breadcrumb">
        <div className="breadscrumb__text">
            <h2>LovelyShop</h2>
            <div className="breadscrumb__option">
                <ul>
                    <li className="Link">
                        <Link to={ROUTERS.USER.HOME}>Trang Chủ</Link>
                    </li>
                    <li>{props.name}</li>
                </ul>
            </div>
        </div>
    </div>
};

export default memo( Breadcrumb);

