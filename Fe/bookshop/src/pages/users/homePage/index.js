import { memo } from "react";
import Carousel from "react-multi-carousel";
// import { Link } from "react-router-dom";
import 'react-multi-carousel/lib/styles.css';
import ig1Img from "assets/users/images/categories/ig1.jpg";
import ig2Img from "assets/users/images/categories/ig2.png";
import ig3Img from "assets/users/images/categories/ig3.jpg";
import ig4Img from "assets/users/images/categories/ig4.jpg";
import ig5Img from "assets/users/images/categories/ig5.jpg";

// banner end
import banner1end from "assets/users/images/banner/b1.jpg";
import banner2end from "assets/users/images/banner/b2.jpg";

import "./style.scss";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import { AiOutlineEye, AiOutlineShoppingCart } from "react-icons/ai";
// import { formatter } from "utils/fomater";
import ProductCard from "component/ProductCard";
import { featProducts } from "utils/common";


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

    const renderFeaturedProducts = (data) => {
        const tabList = [];
        const tabPanels = [];
        
        Object.keys(data).forEach((key, index) => {
            tabList.push(<Tab key={index}>{data[key].title}</Tab>)
            
            const tabPanel =[];
            data[key].products.forEach((item, j) => {
                tabPanel.push(
                    <div className="col-lg-3 col-md-6 col-sm-6" key={j}>
                        <ProductCard name={item.name} img={item.img} price={item.price}/>
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

