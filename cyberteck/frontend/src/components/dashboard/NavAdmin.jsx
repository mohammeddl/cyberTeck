import { Button } from "@material-tailwind/react";
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
            className={`flex flex-col h-[100vh] p-3 bg-black dark:text-gray-800
            ${mobileNav ? "w-16" : "w-60"}
        `}
        >
            <div className="space-y-3 h-[80vh]">
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
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                    className="w-5 h-5 fill-current text-gray-100"
                                >
                                    <path d="M469.666,216.45,271.078,33.749a34,34,0,0,0-47.062.98L41.373,217.373,32,226.745V496H208V328h96V496H480V225.958ZM248.038,56.771c.282,0,.108.061-.013.18C247.9,56.832,247.756,56.771,248.038,56.771ZM448,464H336V328a32,32,0,0,0-32-32H208a32,32,0,0,0-32,32V464H64V240L248.038,57.356c.013-.012.014-.023.024-.035L448,240Z"></path>
                                </svg>
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
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                    className="w-5 h-5 fill-current text-gray-100"
                                >
                                    <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                                </svg>
                                <span
                                    className={`${
                                        mobileNav ? "hidden" : "block"
                                    }`}
                                >
                                    Wishlist
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
