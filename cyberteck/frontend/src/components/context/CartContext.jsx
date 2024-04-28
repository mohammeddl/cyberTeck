import { createContext, useContext, useState } from "react";

const CartStateContext = createContext({
    products: {},
    setProducts: () => {},
    addProduct: () => {},
    removeProduct: () => {},
    itemCount: 0,
    setItemCount: () => {},
});

export default function CartContext({ children }) {
    const [itemCount, setItemCount] = useState(0);
    

    const [products, setProducts] = useState(
        window.localStorage.getItem("cart")
            ? JSON.parse(window.localStorage.getItem("cart"))
            : []
    );

    const addProduct = (product) => {
        let cart = window.localStorage.getItem("cart")
            ? JSON.parse(window.localStorage.getItem("cart"))
            : [];

        const existingProduct = cart.find((item) => item.id === product.id);
        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
            setItemCount(itemCount + 1)
        }

        window.localStorage.setItem("cart", JSON.stringify(cart));
        setProducts(cart)
        
    };

    const removeProduct = (product) => {
        let cart = window.localStorage.getItem("cart")
            ? JSON.parse(window.localStorage.getItem("cart"))
            : [];

        const existingProduct = cart.find((item) => item.id === product.id);
        if (existingProduct) {
            existingProduct.quantity -= 1;
            if (existingProduct.quantity === 0) {
                cart = cart.filter((item) => item.id !== product.id);
            }
        }

        window.localStorage.setItem("cart", JSON.stringify(cart));
        setProducts(cart);
    };

    return (
        <>
            <CartStateContext.Provider
                value={{
                    products,
                    setProducts,
                    addProduct,
                    removeProduct,
                    itemCount,
                    setItemCount,
                }}
            >
                {children}
            </CartStateContext.Provider>
        </>
    );
}

export const useCartContext = () => useContext(CartStateContext);
