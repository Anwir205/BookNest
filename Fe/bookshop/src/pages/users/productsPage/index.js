import { memo } from "react";
import Breadcrumb  from "../theme/breadcrumb";
import "./style.scss";
import { categories } from "../theme/header";
import { Link } from "react-router-dom";
import { ROUTERS } from "utils/router";
import ProductCard from "component/ProductCard";

import feature1Img from "assets/users/images/featured/s1.jpg";
import feature2Img from "assets/users/images/featured/s2.jpg";
import feature3Img from "assets/users/images/featured/s3.jpg";
import feature4Img from "assets/users/images/featured/s4.jpg";
import feature5Img from "assets/users/images/featured/s5.jpg";
import feature6Img from "assets/users/images/featured/s6.jpg";
import feature7Img from "assets/users/images/featured/t1.jpg";
import feature8Img from "assets/users/images/featured/t2.jpg";
import feature9Img from "assets/users/images/featured/t3.jpg";
import feature10Img from "assets/users/images/featured/t4.jpg";
import feature11Img from "assets/users/images/featured/t5.jpg";
import feature12Img from "assets/users/images/featured/t6.jpg";
import feature13Img from "assets/users/images/featured/e1.jpg";
import feature14Img from "assets/users/images/featured/e2.jpg";
import feature15Img from "assets/users/images/featured/e3.jpg";
import feature16Img from "assets/users/images/featured/e4.jpg";
import feature17Img from "assets/users/images/featured/e5.jpg";
import feature18Img from "assets/users/images/featured/e6.png";

const ProductsPage = () => {
    const sorts = [
        "Giá thấp đến cao",
        "Giá cao đến thấp",
        "Mới đến cũ",
        "Cũ đến mới",
        "Bán chạy nhất",
        "Đang giảm giá",                                                            
    ];
    const products = [
        // manga
                {
                    img:feature1Img,
                    name:"Niềm vui & chia sẻ",
                    price: 99000,
                },
                {
                    img:feature2Img,
                    name:"Lớp Học xã Stress",
                    price: 69000,
                },
                {
                    img: feature3Img,
                    name:"Doraemon",
                    price: 59000,
                },
                {
                    img: feature4Img,
                    name:"OnePiece",
                    price: 59000,
                },
                {
                    img: feature5Img,
                    name:"One Punch Man",
                    price: 59000,
                },
                {
                    img: feature6Img,
                    name:"Bakuman",
                    price: 59000,
                },

                // tiểu thuyết
                {
                    img: feature7Img,
                    name:"Hồ Điệp và Kình Ngư",
                    price: 109000,
                },
                {
                    img: feature8Img,
                    name:"Cố Mạn bên nhau trọn đời",
                    price: 109000,
                },
                {
                    img: feature9Img,
                    name:"Vụ bắt cóc đêm và sương mù",
                    price: 159000,
                },
                {
                    img: feature10Img,
                    name:"Kẻ trộm sách",
                    price: 159000,
                },
                {
                    img: feature11Img,
                    name:"5 centimet trên giây",
                    price: 79000,
                },
                {
                    img: feature12Img,
                    name:"Ở một góc nhân gian",
                    price: 79000,
                },

                //  English 
                {
                    img: feature13Img,
                    name:"English Discover",
                    price: 69000,
                },
                {
                    img: feature14Img,
                    name:"Debug Your English",
                    price: 69000,
                },
                {
                    img: feature15Img,
                    name:"English Code",
                    price: 79000,
                },
                {
                    img: feature16Img,
                    name:"English Life",
                    price: 79000,
                },
                {
                    img: feature17Img,
                    name:"English ielts A1",
                    price: 109000,
                },
                {
                    img: feature18Img,
                    name:"Basic English Grammar",
                    price: 79000,
                },

    ]
    return( 
    <>
    <Breadcrumb name="Danh sách sản phẩm" />
    <div className="container products-page">
        <div className="row">
            <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                <div className="slidebar">
                    <div className="slidebar__item">
                        <h2>Tìm kiếm</h2>
                        <input type="text" />
                    </div>
                    <div className="slidebar__item">
                        <h2>Mức giá</h2>
                        <div className="price-range-wrap">
                            <div>
                                <p>Từ</p>
                                <input type="number" min={0} />
                            </div>
                            <div>
                                <p>Đến</p>
                                <input type="number" min={0} />
                            </div>
                        </div>
                    </div>
                    <div className="slidebar__item">
                        <h2>Sắp xếp</h2>
                        <div className="tags">
                            {sorts.map((item, key) => (
                            <div className={`tag ${key ===0 ? "active" : ""}`} key={key} >
                                {item}
                            </div>
                        ))}
                        </div>
                    </div>
                     <div className="slidebar__item">
                        <h2>Thể loại khác</h2>
                        <ul className="categories-list">
                            {categories.map((name, key) => (
                            <li key = {key}>
                                <Link to={ROUTERS.USER.PRODUCTS}>{name}</Link>
                            </li>
                        ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12">
                <div className="row">
                    {products.map((item, key) => (
                        <div className="col-lg-4 col-md-6 col-sm-6" key={key}>
                            <ProductCard 
                            name={item.name} 
                            img={item.img} 
                            price={item.price}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
    </>
    );
};

export default memo(ProductsPage);

