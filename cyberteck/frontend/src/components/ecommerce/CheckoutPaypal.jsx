import PayPalButton from "./PayPalButton";

const CheckoutPaypal = () => {
    console.log("CheckoutPaypal component rendered");
    const handleSuccess = (details) => {
        console.log("Payment successful:", details);
        // Handle successful payment
    };

    const handleError = (err) => {
        console.error("Payment error:", err);
        // Handle payment error
    };

    return (
        <div>
            <h1>Checkout</h1>
            <PayPalButton
                amount="10.00"
                onSuccess={handleSuccess}
                onError={handleError}
            />
        </div>
    );
};

export default CheckoutPaypal;
