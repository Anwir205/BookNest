export const ADMIN__PATH = "/quan-tri"

export const ROUTERS = {
    USER: {
        HOME: "/",
        PROFILE: "profile",
        PRODUCTS: "/san-pham",
        PRODUCT: "/san-pham/chi-tiet/:id",
        SHOPPING_CART: "/gio-hang",
        CHECKOUT: "/thanh-toan",
    },
    ADMIN: {
        LOGIN: `${ADMIN__PATH}/dang-nhap`,
        ORDERS: `${ADMIN__PATH}/dat-hang`,
        LOGOUT: `${ADMIN__PATH}/dang-xuat`,
    }
};