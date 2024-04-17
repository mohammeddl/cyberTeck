import { Button } from "@material-tailwind/react";
import { House, NoteBlank } from "@phosphor-icons/react";
import { ShoppingBag } from "lucide-react";
// import { login_route } from "../../router";
// import { useNavigate } from "react-router-dom";
// import { useUserContext } from "../context/UserContex";
import { useState } from "react";

export default function NavAdmin() {
    // const navigate = useNavigate();
    // const { logout } = useUserContext();
    // const logoutCall = async () => {
    //     await logout();
    //     navigate(login_route);
    // };
    // const user = useUserContext();

    const [mobileNav, setMobileNav] = useState(false);
    return (
        <aside
            className={`flex flex-col h-[87vh] p-3 bg-black dark:text-gray-800
            ${mobileNav ? "w-16" : "w-60"}
        `}
        >
            <div className="space-y-3 h-[100vh]">
                <div className="flex items-center justify-between ">
                    <h2 className={`${mobileNav ? "hidden" : "block"} text-white`}>
                        Dashboard
                    </h2>
                    <button
                        className="p-2"
                        onClick={() => setMobileNav(!mobileNav)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            className="w-5 h-5 fill-current text-gray-100"
                        >
                            <rect width="352" height="32" x="80" y="96"></rect>
                            <rect width="352" height="32" x="80" y="240"></rect>
                            <rect width="352" height="32" x="80" y="384"></rect>
                        </svg>
                    </button>
                </div>
                <div className="flex-1">
                    <ul className="pt-2 pb-4 space-y-1 text-sm">
                        <li className="rounded-sm">
                            <a
                                rel="noopener noreferrer"
                                href="#"
                                className="flex items-center text-white p-2 space-x-3 rounded-md"
                            >
                                <House size={25} />
                                <span
                                    className={`${
                                        mobileNav ? "hidden" : "block"
                                    }`}
                                >
                                    Home
                                </span>
                            </a>
                        </li>
                        <li className="rounded-sm dark:bg-gray-100 dark:text-gray-900">
                            <a
                                rel="noopener noreferrer"
                                href="#"
                                className="flex items-center p-2  text-white space-x-3 rounded-md"
                            >
                                <ShoppingBag size={24} />
                                <span
                                    className={`${
                                        mobileNav ? "hidden" : "block"
                                    }`}
                                >
                                    Products
                                </span>
                            </a>
                        </li>
                        <li className="rounded-sm dark:bg-gray-100 dark:text-gray-900">
                            <a
                                rel="noopener noreferrer"
                                href="#"
                                className="flex items-center p-2  text-white space-x-3 rounded-md"
                            >
                                <NoteBlank size={24} />
                                <span
                                    className={`${
                                        mobileNav ? "hidden" : "block"
                                    }`}
                                >
                                    Blogs
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex items-center p-2 mt-12 space-x-4 justify-self-end">
                <img
                    src="https://source.unsplash.com/100x100/?portrait"
                    alt=""
                    className="w-12 h-12 rounded-lg dark:bg-gray-500"
                />
                <div>
                    <h2 className="text-lg font-semibold">daali mohammed</h2>
                    <span className="flex items-center space-x-1">
                        <a
                            rel="noopener noreferrer"
                            href="#"
                            className="text-xs hover:underline dark:text-gray-600"
                        >
                            View profile
                        </a>
                    </span>
                </div>
            </div>
        </aside>
    );
}
