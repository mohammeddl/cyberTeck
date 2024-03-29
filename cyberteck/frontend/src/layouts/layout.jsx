import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
import Nav from "../components/nav";
import Faq from "../components/faq";

export default function Layout(){
    return(
        <>
<Nav />
    <main>
    <Outlet />
    </main>
<footer>
    <Faq />
    <Footer />
</footer>
        </>
    )
}
