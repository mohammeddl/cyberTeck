import { Button } from "@material-tailwind/react";
import { House, NoteBlank } from "@phosphor-icons/react";
import { ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

import { useState } from "react";
import { blog } from "../../router";

export default function NavAdmin() {

    const [mobileNav, setMobileNav] = useState(false);
    return (
        <aside
            className={`flex flex-col  max-h-fit p-3 bg-black dark:text-gray-800
            ${mobileNav ? "w-16" : "w-60"}
        `}
        >
            <div className=" space-y-3  h-[100vh]">
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
                            <Link to={('/dashboard')}
                                rel="noopener noreferrer"
                                
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
                            </Link>
                        </li>
                        <li className="rounded-sm dark:bg-gray-100 dark:text-gray-900">
                            <Link to={("/products") }className="flex items-center p-2  text-white space-x-3 rounded-md"                               
                            >
                                <ShoppingBag size={24} />
                                <span
                                    className={`${
                                        mobileNav ? "hidden" : "block"
                                    }`}
                                >
                                    Products
                                </span>
                            </Link>
                            
                        </li>
                        <li className="rounded-sm dark:bg-gray-100 dark:text-gray-900">
                            <Link to={(blog)}
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
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </aside>
    );
}
