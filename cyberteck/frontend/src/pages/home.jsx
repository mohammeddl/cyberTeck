import ListCard from "../components/ecommerce/ListCard";
import ShoppingCarts from "../components/ecommerce/ShoppingCarts";
import Offers from "../components/ecommerce/Offers";
import CategoryCard from "../components/ecommerce/CategoryCard";
import Hero from "../components/index/Hero";

import { ShoppingCartIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../components/context/UserContext";

export default function Home() {
    const { authenticated } = useUserContext();
    const navigate = useNavigate();
    useEffect(() => {
        if (!authenticated) {
            navigate("/login");
        }
    }, []);

    console.log(authenticated);
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
            <Hero />
        </>
    );
}
