import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
import Nav from "../components/nav";


export default function Layout(){
    return(
        <>
<Nav />
    <main>
    <Outlet />
    </main>
<footer>
    <Footer />
</footer>
        </>
    )
}
