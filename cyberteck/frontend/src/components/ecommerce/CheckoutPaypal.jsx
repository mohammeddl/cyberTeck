import { axiosClient } from "../../api/axios";
import PayPalButton from "./PayPalButton";

export default function CheckoutPaypal({ total }) {

    const handleSuccess = async (details) => {
        console.log("Payment successful:", details);

        try {
            const userString = localStorage.getItem("USER");
            const user = JSON.parse(userString);
            const userId = user.id;

            const cartString = localStorage.getItem("cart");
            const cart = JSON.parse(cartString);

            for (const item of cart) {
                const response = await axiosClient.post("/api/checkout", {
                    user_id: userId,
                    product_id: item.id,
                    quantity: item.quantity,
                });

                console.log(response.data.message);
            }
            localStorage.removeItem("cart");
        } catch (error) {
            console.error("Error storing cart:", error);
        }
    };

    const handleError = (err) => {
        console.error("Payment error:", err);
        // Handle payment error
    };

    return (
        <div>
            <h1>Checkout with PayPal </h1>
            <PayPalButton
                amount={total}
                onSuccess={handleSuccess}
                onError={handleError}
            />
        </div>
    );
}
