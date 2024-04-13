import ListCard from "../components/ecommerce/ListCard";
import ShoppingCarts from "../components/ecommerce/ShoppingCarts";
import ListReviews from "../components/ecommerce/ListReviews";
import Offers from "../components/ecommerce/Offers";
import CategoryCard from "../components/ecommerce/CategoryCard";
export default function Home() {
    return (
        <>
        <Offers/>
        <CategoryCard/>
            <ShoppingCarts />
            {/* <ListReviews/> */}
            <ListCard />
        </>
    );
}
