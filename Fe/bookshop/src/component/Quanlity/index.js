import { memo } from "react";      
import './style.scss';


const Quanlity = ({hasAddToCart = true}) => {
    return (
        <> 
        <div className="quanlity-container">
            <div className="quanlity">
                <span className="qtybtn">-</span>
                <input type="number" defaultValue={1} />
                <span className="qtybtn">+</span>
            </div>
            {
                hasAddToCart && (
                    <button type="submit" className="button-submit">
                        Thêm giỏ hàng
                    </button>
                )
            }
        </div>           
        </>
    )
}
export default memo(Quanlity);