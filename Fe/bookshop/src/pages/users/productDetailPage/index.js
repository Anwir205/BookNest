import { memo } from "react";
import Breadcrumb  from "../theme/breadcrumb";
import "./style.scss";
import feature1Img from "assets/users/images/featured/s1.jpg";
import feature2Img from "assets/users/images/featured/s2.jpg";
import feature3Img from "assets/users/images/featured/s3.jpg";
import { AiOutlineCopy, AiOutlineEye, AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai";
import { formatter } from "utils/fomater";
import { ProductCard, Quanlity } from "component";
import { featProducts } from "utils/common";


const ProductDetailPage = () => {
const imgs = [feature1Img, feature2Img, feature3Img]
    
    return( 
    <>
    <Breadcrumb name="Chi tiết sản phẩm" />
    <div className="container product__detail">
        <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 product__detail__pic ">
                <img src={feature1Img} alt="pr1" />
                <div className="main">
                    {
                    imgs.map((item, key) => (
                            <img src={item} alt="pr1" key={key} />
                        ))
                    }
                </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 product__detail__text">
                <h2>Niềm vui và Chia sẻ</h2>
                <div className="seen-icon">
                    <AiOutlineEye />
                    {` 10 ( lượt đã xem) `}
                </div>
                <h3>{formatter(99000)}</h3>
                <p>
                    Niềm vui và chia sẻ là một cuốn sách thuộc Bộ sách giáo dục sớm dành cho trẻ em từ 2–8 tuổi,
                    nằm trong Tủ sách Ươm Mầm. Cuốn sách mang đến cho bé những bài học nhẹ nhàng về việc biết 
                    sẻ chia và cảm nhận niềm vui khi cho đi, qua những hình ảnh minh hoạ gần gũi với các bạn 
                    nhỏ: chú cáo, bạn thỏ và chuột nhỏ giữa khung cảnh rừng thu dịu dàng.
                </p>
                    <Quanlity />
                <ul>
                    <li><b>Lời:</b> Hứa Bình Bình</li>
                    <li><b>Tranh:</b> Khổng Xảo Lệ</li>
                    <li><b>Người dịch:</b> Hà Giang</li>
                    <li><b>Nhà xuất bản:</b> Nhà xuất bản Hà Nội</li>
                    <li><b>Chia sẻ:</b>{" "}
                    <span>
                        <AiOutlineFacebook />
                        <AiOutlineLinkedin />
                        <AiOutlineCopy />
                    </span>
                    </li>
                </ul>
            </div>
        </div>
        <div className="product__detail__tab">
            <h4> Thông tin chi tiết </h4>
            <div>
                <p>
            Niềm vui và Chia sẻ là cuốn sách thiếu nhi thuộc Bộ sách giáo dục sớm
            dành cho trẻ từ 2–8 tuổi, nằm trong Tủ sách Ươm Mầm. Với phần lời của
            Hứa Bình Bình cùng tranh minh hoạ mềm mại, tông màu ấm của Khổng Xảo Lệ,
            cuốn sách đưa bé đến gần hơn với những giá trị đầu đời như biết sẻ chia,
            biết yêu thương và cảm nhận niềm vui khi cho đi.
        </p>
        <p>
            Các nhân vật gần gũi như chú cáo, bạn thỏ và chuột nhỏ giúp bé dễ hình
            dung, đồng thời gợi mở những cuộc trò chuyện giữa ba mẹ và con về cách
            đối xử với bạn bè, người thân. Cuốn sách phù hợp để đọc cùng bé mỗi ngày,
            làm quà tặng, hoặc bổ sung vào tủ sách gia đình và thư viện lớp học.
        </p>

        <table>
            <tbody>
                <tr><td>Tên sách</td><td>Niềm vui và Chia sẻ</td></tr>
                <tr><td>Bộ sách</td><td>Bộ sách giáo dục sớm</td></tr>
                <tr><td>Tủ sách</td><td>Ươm Mầm</td></tr>
                <tr><td>Độ tuổi</td><td>2 – 8 tuổi</td></tr>
                <tr><td>Lời</td><td>Hứa Bình Bình</td></tr>
                <tr><td>Tranh</td><td>Khổng Xảo Lệ</td></tr>
                <tr><td>Người dịch</td><td>Hà Giang</td></tr>
                <tr><td>Nhà xuất bản</td><td>Nhà xuất bản Hà Nội</td></tr>
                {/* thêm nếu có: Số trang, Khổ sách, Loại bìa... */}
            </tbody>
        </table>
            </div>
        </div>
        <div className="section-title">
            <h2>Sản phẩm tương tự</h2>
        </div>
        <div className="row">
            {featProducts.all.products.slice(0, 6).map((item, key) => (
                <div key={key} className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <ProductCard img={item.img} name={item.name} price={item.price} />
            </div>
            ))}
        </div>
    </div>
    </>
    );
};

export default memo(ProductDetailPage);

