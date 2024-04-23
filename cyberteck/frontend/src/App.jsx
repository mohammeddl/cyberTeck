
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import CartStateContext from "./components/context/CartContext";

function App() {
    return (
        <>
            <CartStateContext>
                <RouterProvider router={router} />
            </CartStateContext>
        </>
    );
}

export default App;
