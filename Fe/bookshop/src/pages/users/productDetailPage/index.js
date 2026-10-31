import { memo } from "react";
import Breadcrumb  from "../theme/breadcrumb";
import "./style.scss";


const ProductDetailPage = () => {
    
    return( 
    <>
    <Breadcrumb name="Chi tiết sản phẩm" />
    <div className="container products-page">
        <div className="row">
            <div className="col-lg-6">
                Hinh anh
            </div>
            <div className="col-lg-6">
                Chi tiet
            </div>
        </div>
    </div>
    </>
    );
};

export default memo(ProductDetailPage);

