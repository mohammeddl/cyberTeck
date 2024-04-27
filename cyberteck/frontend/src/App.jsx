import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import CartStateContext from "./components/context/CartContext";
import UserContext from "./components/context/UserContext";

function App() {
    return (
        <>
            <UserContext>
                <CartStateContext>
                    <RouterProvider router={router} />
                </CartStateContext>
            </UserContext>
        </>
    );
}

export default App;
