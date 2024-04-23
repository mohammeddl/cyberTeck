import ListCard from "../components/ecommerce/ListCard";
import ShoppingCarts from "../components/ecommerce/ShoppingCarts";
import Offers from "../components/ecommerce/Offers";
import CategoryCard from "../components/ecommerce/CategoryCard";

import CardProductEcom from "../components/ecommerce/CardProductEcom";
import { ShoppingCartIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Home() {
    const navigate = useNavigate();
    useEffect(() => {
        const user = localStorage.getItem("USER");
        if (!user) {
            navigate("/login");
        }
    }, [navigate]);
    const [openCart, setOpenCart] = useState(false);
    return (
        <>
            <div className="flex w-full justify-end ">
                <ShoppingCartIcon
                    onClick={() => setOpenCart(!openCart)}
                    className={`${
                        openCart
                            ? "hidden "
                            : "w-8 h-8 mr-4 mt-3 cursor-pointer  fixed z-50"
                    }`}
                />
            </div>
            <Offers />
            <CategoryCard />
            <ShoppingCarts isOpen={openCart} setOpen={setOpenCart} />
            <ListCard />
            {/* <CardProductEcom /> */}
        </>
    );
}
