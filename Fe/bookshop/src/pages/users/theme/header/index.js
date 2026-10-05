import { memo, useState } from "react";
import './style.scss';
import { AiOutlineFacebook, AiOutlineInstagram,AiFillBell,
    AiOutlineLinkedin,AiOutlineUser, 
AiFillFire, AiOutlineShoppingCart, 
AiOutlineMenu, AiOutlinePhone} from "react-icons/ai";
import { Link } from "react-router-dom";
import { formatter } from "utils/fomater";
import { ROUTERS } from "utils/router";

const Header = () => {
    const [isShowcategories, setShowCategories] = useState(true);
    const [menus] = useState([
        {
            name: "Trang chủ",
            path: ROUTERS.USER.HOME,
        },
        {
            name: "Cửa Hàng",
            path: ROUTERS.USER.PRODUCTS,
        },
        {
            name: "Loại Sách",
            path: "",
            isShowSubmenu: false,
            child: [
                {
                    name: "Sách bán chạy",
                    path: "",
                },
                {
                    name: "Sách sắp phát hành",
                    path: "",
                },
                {
                    name: "Sách - Truyện Hay",
                    path: "",
                }
            ]
        },
        {
            name: "Bài Viết",
            path: "",
        },
        {
            name: "Liên Hệ" ,
            path: "",
        },
    ])

    return (
        <>
            <div className="header__top">
            <div className="container"> 
                <div className="row">
                    <div className="col-6 header__top_left">
                        <ul>
                            <li> 
                                <AiFillBell />
                                Welcome to Lovely Shop
                            </li>
                            <li>
                                <AiFillFire />
                                Miễn phí ship với đơn từ {formatter(200000)} 
                            </li>
                        </ul>
                    </div>
                    <div className="col-6 header__top_right">
                        <ul>
                            <li>
                                <Link to={""}>
                                <AiOutlineFacebook />
                                </Link>
                            </li>
                            <li>
                                <Link to={""}>
                                <AiOutlineInstagram />
                                </Link>
                            </li>
                            <li>
                                <Link to={""}>
                                <AiOutlineLinkedin />
                                </Link>
                            </li>
                            <li>
                                <Link to={""}>
                                <AiOutlineUser />
                                </Link>
                                <span>Login</span>
                            </li>
                        </ul>
                    </div>
                </div>
             </div>
            </div>
            <div className="container">
            <div className="row">
                <div className=" col-xl-3 col-md-6">
                    <div className="header__logo">  
                        <h1>LoveLy Shop </h1>
                    </div>
                </div>
                <div className=" col-xl-6 col-md-6">
                    <div className="header__menu">
                        <ul>        
                            {menus?.map((menu, menuKey) => (
                                <li key={menuKey} className={menuKey === 0 ? "active" : ""}>
                                    <Link to={menu?.path}>
                                    {menu?.name}
                                    </Link>
                                    {
                                        menu.child && (
                                            <ul className="header_menu_dropdown">
                                                {menu.child.map((childItem, childKey) => (
                                                    <li key={'$(menuKey) - $(childKey)'}>
                                                    <Link to={childItem.path}>{childItem.name}</Link>
                                                </li>
                                                ))}
                                            </ul>
                                        )
                                    }
                                </li>
                            ))}
                            </ul>
                            {/* <li>
                                <Link to="">Sách</Link>
                                <ul>
                                    <li>Sách bán chạy</li>
                                    <li>Sách bán chạy</li>
                                </ul>
                            </li> */}
                        
                    </div>
                </div>
                <div className=" col-xl-3 ">
                    <div className="header_cart">  
                        <div className="header_cart_prize">
                            <span>{formatter(100000)}</span>
                        </div>
                        <ul>    
                            <li>
                                <Link to="#">
                                    <AiOutlineShoppingCart /> <span>5</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
            </div>
            <div className="container">
                <div className="row hero__categories__container">
                    <div className="col-lg-3 hero__categories">
                        <div className="hero__categories__all" onClick={() => setShowCategories(!isShowcategories)}>
                            <AiOutlineMenu />
                            Danh sách sản phẩm
                            </div>
    
                        <ul className={isShowcategories ? "" : "hidden"} >
                            <li>
                                <Link to={"#"}>Tiểu Thuyết</Link>
                            </li>
                            <li>
                                <Link to={"#"}>Sách Khoa Học</Link>
                            </li>
                            <li>
                                <Link to={"#"}>Truyện Tranh</Link>
                            </li>
                            <li>
                                <Link  to={"#"}>Kỹ Năng Sống</Link >
                            </li>
                            <li>
                                <Link  to={"#"}>Ngoại Ngữ</Link >
                            </li>
                            <li>
                                <Link to={"#"}>Kinh Tế - Quản Trị</Link >
                            </li>
                        </ul>
                        
                    </div>
                    <div className="col-lg-9 hero__search__container">
                        <div className="hero__search">
                            <div className="hero__search__form">
                                <form>
                                    <input 
                                    type="text" 
                                    name ="" 
                                    value=""
                                    placeholder="Bạn đang tìm gì ?"/>
                                    <button type="submit">Tìm kiếm</button> 
                                </form>
                            </div>
                            <div className="hero__search__phone">
                                <div className="hero__search__phone__icon">
                                    <AiOutlinePhone />
                                </div>
                                <div className="hero__search__phone__text">
                                    <p>0123.456.789</p>
                                    <span>Hỗ trợ 24/7</span>
                                </div>
                            </div>
                        </div>
                        <div className="hero__items">
                            <div className="hero__text">
                                <span>Sách mới</span>
                                <h2>Tri thức <br />
                                    là nguồn sống <br />
                                    của con người</h2>
                                <p>Miễn phí giao hàng tận nơi <AiFillFire/></p>
                                <Link to="" className="primary-btn">
                                Mua Ngay
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default memo(Header);


