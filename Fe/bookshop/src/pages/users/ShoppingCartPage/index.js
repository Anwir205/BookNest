import { memo, useState } from "react";
import Breadcrumb from "../theme/breadcrumb";
import "./style.scss";
import { formatter } from "utils/fomater";
import { Quanlity } from "component";
import { AiOutlineClose } from "react-icons/ai";

import feature1Img from "assets/users/images/featured/s1.jpg";
import feature2Img from "assets/users/images/featured/s2.jpg";
import { useNavigate } from "react-router-dom";
import { ROUTERS } from "utils/router";
const ShoppingCartPage = () => {

        const navigate = useNavigate();

        const [cartItems, setCartItems] = useState([
            { id: 1, img: feature1Img, name: "Niềm vui & chia sẻ", price: 99000, quantity: 1 },
            { id: 2, img: feature2Img, name: "Lớp Học xả Stress", price: 69000, quantity: 1 },
        ]);

         const removeItem = (id) =>
        setCartItems((prev) => prev.filter((item) => item.id !== id));

        const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <>
            <Breadcrumb name="Giỏ hàng" />
            <div className="container">
                <div className="table__cart">
                    <table>
                        <thead>
                            <tr>
                                <th>Tên</th>
                                <th>Giá</th>
                                <th>Số lượng</th>
                                <th>Thành tiền</th>
                                <th />
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((item) => (
                                <tr key={item.id}>
                                    <td className="shopping__cart__item">
                                        <img src={item.img} alt={item.name} />
                                        <h4>{item.name}</h4>
                                    </td>
                                    <td>{formatter(item.price)}</td>
                                    <td>
                                        <Quanlity quanlity={item.quantity} hasAddToCart={false} />
                                    </td>
                                    <td>{formatter(item.price * item.quantity)}</td>
                                    <td className="icon_close" onClick={() => removeItem(item.id)}>
                                        <AiOutlineClose />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div >
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                        <div className="shopping__continue">
                            <h3>Mã giảm giá: </h3>
                            <div className="shopping__discount">
                                <input type="text" placeholder="Nhập mã giảm giá" />
                                <button type="button" className="button-submit">Áp dụng</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                        <div className="shopping__checkout">
                            <h2>Tổng đơn:</h2>
                            <ul>
                                <li>Số lượng: <span>{2}</span></li>
                                <li>Tổng tiền: <b>{formatter(total)}</b></li>
                            </ul>
                            <button type="button" className="button-submit" onClick={() => navigate(ROUTERS.USER.CHECKOUT)}>Thanh Toán</button>
                        </div>
                    </div>    
                </div> 
            </div>
        </>
    );
};

export default memo(ShoppingCartPage);

