import ListCard from "../components/ecommerce/ListCard";
import ShoppingCarts from "../components/ecommerce/ShoppingCarts";
import ListReviews from "../components/ecommerce/ListReviews";
export default function Home() {
    return (
        <>
            <ShoppingCarts />
            {/* <ListReviews/> */}
            <ListCard />
        </>
    );
}
