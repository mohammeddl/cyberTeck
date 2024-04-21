import ListCard from "../components/ecommerce/ListCard";
import ShoppingCarts from "../components/ecommerce/ShoppingCarts";
import Offers from "../components/ecommerce/Offers";
import CategoryCard from "../components/ecommerce/CategoryCard";

import CardProductEcom from "../components/ecommerce/CardProductEcom";
export default function Home() {
    return (
        <>
        <Offers/>
        <CategoryCard/>
            <ShoppingCarts />
            <ListCard />
            <CardProductEcom/>
        </>
    );
}



