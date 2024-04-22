import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

const PayPalButton = ({ amount, onSuccess, onError }) => {
    return (
        <PayPalScriptProvider
            options={{ "client-id": "ASPGQm0YGjA9nxLaP-VKLNYoEzgYfTMzaFECLiPabXRnvJ5dCQKy213FtGEUdBS7HRXL6_QnDEztrErh" }}
        >
            <PayPalButtons
                style={{ layout: "horizontal" }}
                createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    value: amount,
                                },
                            },
                        ],
                    });
                }}
                onApprove={(data, actions) => {
                    return actions.order.capture().then(function (details) {
                        onSuccess(details);
                    });
                }}
                onError={(err) => {
                    console.error("PayPal error:", err);
                    onError(err);
                }}
            />
        </PayPalScriptProvider>
    );
};

export default PayPalButton;
