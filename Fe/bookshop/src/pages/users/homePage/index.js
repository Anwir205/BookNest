import { memo } from "react";
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
import 'react-multi-carousel/lib/styles.css';
import ig1Img from "assets/users/images/categories/ig1.jpg";
import ig2Img from "assets/users/images/categories/ig2.png";
import ig3Img from "assets/users/images/categories/ig3.jpg";
import ig4Img from "assets/users/images/categories/ig4.jpg";
import ig5Img from "assets/users/images/categories/ig5.jpg";

// featured 
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

// banner end
import banner1end from "assets/users/images/banner/b1.jpg";
import banner2end from "assets/users/images/banner/b2.jpg";

import "./style.scss";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { AiOutlineEye, AiOutlineShoppingCart } from "react-icons/ai";
import { formatter } from "utils/fomater";


const HomePage = () => {

    const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
    };

    const sliderItems = [
        {
            igImg: ig1Img,
            name:"Truyện Kiều",
        },
        {
            igImg: ig2Img,
            name:"Truyện Ngụ Ngôn",
        },
        {
            igImg: ig3Img,
            name:"Mùa hè",
        },
        {
            igImg: ig4Img,
            name:"The Three Little Pig",
        },
        {
            igImg: ig5Img,
            name:"Ôn thi Ielts",
        },
    ];

    const featProducts = {
        all: {
            title: "Toàn bộ",
            products: [
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
        },
        Manga: {
            title: "Truyện tranh",
            products: [
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
            ]
        },
        LightNovels: {
            title: "Tiểu Thuyết",
            products: [
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
            ]
        },
        English: {
            title: "Tiếng Anh - English",
            products: [
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
        },
    }

    const renderFeaturedProducts = (data) => {
        const tabList = [];
        const tabPanels = [];
        
        Object.keys(data).forEach((key, index) => {
            tabList.push(<Tab key={index}>{data[key].title}</Tab>)
            
            const tabPanel =[];
            data[key].products.forEach((item, j) => {
                tabPanel.push(
                    <div className="col-lg-3 col-md-6 col-sm-6" key={j}>
                        <div className="featured__item">
                            <div className="featured__item__pic"
                            style={{
                                backgroundImage:`url(${item.img})`,
                            }}>
                                <ul className="featured__item__pic__hover">
                                    <li>
                                        <AiOutlineEye/>
                                    </li>
                                    <li>
                                        <AiOutlineShoppingCart/>
                                    </li>
                                </ul>
                            </div>
                            <div className="featured__item__text">
                                <h6>
                                    <Link to="">{item.name}</Link>
                                </h6>
                                <h5>{formatter(item.price)}</h5>
                            </div>

                        </div>
                    </div>
                );
            });
            tabPanels.push(tabPanel);
        });

        return (
            <Tabs>
                <TabList>{tabList}</TabList>
                {
                    tabPanels.map((item, key) => (
                        <TabPanel key={key}>
                            <div className="row">
                                {item}
                            </div>
                        </TabPanel>
                    ))}
            </Tabs>
        )
    }

    return (
    <>
    {/*Categories Begin*/}

    <div className="container container__Categories__slider">
        <Carousel responsive={responsive} className="Categories__slider">
            {sliderItems.map((item, key) => (
                <div className="Categories__slider__items" key={key}>
                <div
                    className="Categories__slider__items__thumb"
                    style={{ backgroundImage: `url(${item.igImg})` }}
                ></div>
                <p className="Categories__slider__items__name">{item.name}</p>
            </div>
            ))}
        
        </Carousel>
    </div>
    {/*Categories End*/}
    {/*featured begin*/}
    <div className="container">
       <div className="featured">
            <div className="section-title">
                <h2>Sản phẩm nổi bật</h2>
                
            </div>
            {renderFeaturedProducts(featProducts)}
        </div> 
    </div>
    {/*featured end*/}
    {/*banner begin*/}
    <div className="container">
        <div className="banner">
            <div className="banner__pic">
                <img src={banner1end} alt="banner1" />
            </div>
            <div className="banner__pic">
                <img src={banner2end} alt="banner2" />
            </div>
        </div>
    </div>
    {/*banner end*/}
    </>
    );
};

export default memo(HomePage);

