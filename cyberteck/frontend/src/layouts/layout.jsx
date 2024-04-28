import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
import Nav from "../components/nav";

import { useUserContext } from "../components/context/UserContext";

export default function Layout() {

    const {user,authenticated} = useUserContext()

    console.log(authenticated)
    console.log(user)

     return (
        <>
            <Nav />
            <main>
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    );
}
