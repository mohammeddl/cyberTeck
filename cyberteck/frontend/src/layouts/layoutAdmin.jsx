import { Outlet } from "react-router-dom";
import Nav from "../components/nav";

export default function LayoutAdmin() {
    return (
        <>
            <Nav />
            <main>
                <Outlet />
            </main>

        </>
    );
}
