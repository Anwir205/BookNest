import { memo, useEffect, useState } from "react";
import "./style.scss";
import { formatter } from "utils/fomater";

const STATUS = {
    ORDERED: {
        key: "ORDERED",
        label: "Đã đặt",
        className: "orders__dropdown-item",
    },
    PREPARING: {
        key: "PREPARING",
        label: "Lên đơn",
        className: "orders__dropdown-item",
    },
    DIVIVERED: {
        key: "DIVIVERED",
        label: "Đã giao hàng",
        className: "orders__dropdown-item",
    },
    CANCELLED: {
        key: "CANCELLED",
        label: "Hủy đơn",
        className: "orders__dropdown-item orders__dropdown-item--danger",
    },
}

const OrderAdPage = () => {
    const [orders, setOrders] = useState([
    {
        id: 1,
        total: 99000,
        customerName: "Anwir",
        date: "11/11/2026",
        status: "ORDERED"
    },
    {
        id: 2,
        total: 99000,
        customerName: "John",
        date: "10/12/2026",
        status: "PREPARING"
    },
]);

const handleChangeStatus = (orderId, newStatus) => {
    setOrders(prevOrders =>
        prevOrders.map(order =>
            order.id === orderId
                ? { ...order, status: newStatus }
                : order
        )
    );

    setActivedDropdown(null);
};

    const [activedDropdown, setActivedDropdown] =useState(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            const isDropdown = event.target.closest(".orders__dropdown");
            if(!isDropdown) {
                setActivedDropdown(null);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
            return () => 
                document.removeEventListener("mousedown", handleClickOutside);
    },[]);

    return <div className="container">
        <div className="orders">
            <h2>Quản lý đơn hàng</h2>

            <div className="orders__content">
                <table className="orders__table">
                    <thead >
                        <tr>
                            <th>Mã đơn hàng</th>
                            <th>Tổng đơn</th>
                            <th>Khách mua</th>
                            <th>Ngày đặt</th>
                            <th>Trạng thái</th>
                        </tr>                      
                    </thead>
                    <tbody>
                            {
                                orders.map((item, i) => (
                                    <tr key={i}>
                                        <td><span>{item.id}</span></td>
                                        <td>{formatter(item.total)}</td>
                                        <td>{item.customerName}</td>
                                        <td>{new Date(item.date).toLocaleDateString()}</td>
                                        <td>
                                            <div className="orders__dropdown">
                                                    <button
                                                        className="orders__action-button"
                                                        onClick={() => setActivedDropdown(
                                                            activedDropdown === item.id ? null : item.id
                                                        )}
                                                    >
                                                        {STATUS[item.status].label}
                                                        <span className="arrow">▽</span>
                                                    </button>
                                                {
                                                    activedDropdown === item.id && (
                                                        <div className="orders__dropdown-menu">
                                                            {Object.values(STATUS).map((status) => (
                                                                <button
                                                                    key={status.key}
                                                                    className={status.className}
                                                                    onClick={() => handleChangeStatus(item.id, status.key)}
                                                                >
                                                                    {status.label}
                                                                </button>
                                                            ))}
                                                        </div>
                                                    )
                                                }
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            }           
                        </tbody>
                </table>
            </div>
            
            <div className="orders__footer">
                <div className="orders__pagination">
                    <div className="orders__page-numbers">
                        <button className="orders__page-btn">
                            -
                        </button>
                        <button className="orders__page-btn orders__page-btn--active">
                            1
                        </button>
                        <button className="orders__page-btn">
                            2
                        </button>
                        <button className="orders__page-btn">
                            3
                        </button>
                        <button className="orders__page-btn">
                            4
                        </button>
                        <button className="orders__page-btn">
                            5
                        </button>
                        <button className="orders__page-btn">
                            +
                        </button>
                    </div>
                </div>
            </div>
    </div>
    </div>
};

export default memo(OrderAdPage);

