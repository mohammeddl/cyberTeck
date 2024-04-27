import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "./context/UserContext";
import Logo from "../assets/logo.png";
export default function Nav() {
    const { authenticated, setAuthenticated } = useUserContext();
    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem("USER"));

    console.log(user);

    const handleLogout = () => {
        localStorage.removeItem("USER");
        localStorage.removeItem("ACCESS_TOKEN");
        setAuthenticated(false);
        navigate("/login");
    };

    return (
        <header>
            <section className="relative block w-full py-6 leading-10 text-center text-indigo-900 bg-black">
                <div className="w-full px-6 mx-auto leading-10 text-center lg:px-8 max-w-7xl">
                    <div className="box-border flex flex-wrap items-center justify-between -mx-4 text-indigo-900">
                        <div className="relative z-10 flex items-center w-auto px-4 leading-10 lg:flex-grow-0 lg:flex-shrink-0 lg:text-left">
                            <img src={Logo} className="h-14 "></img>
                        </div>

                        <div className="absolute left-0 z-0 justify-center hidden w-full px-4 -ml-5 space-x-4 font-medium leading-10 md:flex lg:-ml-0 lg:space-x-6 md:flex-grow-0 md:text-left lg:text-center">
                            <Link
                                to={"/"}
                                className="relative inline-block px-0.5 text-base font-bold text-gray-200 uppercase transition duration-150 ease hover:text-white"
                            >
                                <span className="block">Home</span>
                                <span className="absolute bottom-0 left-0 inline-block w-full h-2 -mb-2 overflow-hidden">
                                    <span className="absolute inset-0 inline-block w-full h-full transform translate-x-0 bg-black"></span>
                                    <svg
                                        className="w-auto h-full text-green-400 fill-current"
                                        viewBox="0 0 84 6"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g stroke="none">
                                            <g transform="translate(-8)">
                                                <path d="M90.3.9c-1.8 0-2.8.7-3.6 1.4-.7.5-1.2.9-2.4.9s-1.7-.4-2.4-.9c-.8-.6-1.8-1.4-3.6-1.4s-2.8.7-3.6 1.4c-.7.5-1.2.9-2.4.9-1.1 0-1.7-.4-2.4-.9-.8-.6-1.8-1.4-3.6-1.4s-2.8.7-3.6 1.4c-.7.5-1.2.9-2.4.9s-1.7-.4-2.4-.9c-.8-.6-1.8-1.4-3.6-1.4s-2.8.7-3.6 1.4c-.7.5-1.2.9-2.4.9-1.1 0-1.7-.4-2.4-.9-.8-.6-1.8-1.4-3.6-1.4s-2.8.7-3.6 1.4c-.7.5-1.2.9-2.4.9-1.1 0-1.7-.4-2.4-.9-.8-.6-1.8-1.4-3.6-1.4s-2.8.7-3.6 1.4c-.7.5-1.2.9-2.4.9s-1.7-.4-2.4-.9c-.8-.6-1.8-1.4-3.6-1.4s-2.8.7-3.6 1.4c-.7.5-1.2.9-2.4.9-1.1 0-1.7-.4-2.4-.9-.8-.6-1.9 1-1.2 1.5.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9s1.7.4 2.4.9c.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9 1.1 0 1.7.4 2.4.9.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9 1.1 0 1.7.4 2.4.9.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9s1.7.4 2.4.9c.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9 1.1 0 1.7.4 2.4.9.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9s1.7.4 2.4.9c.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9.6 0 1-.4 1-1s-.5-1-1-1z"></path>
                                            </g>
                                        </g>
                                    </svg>
                                </span>
                            </Link>
                            <Link
                                to={"blog"}
                                className="relative inline-block px-0.5 text-base font-bold text-gray-200 uppercase transition duration-150 ease hover:text-white"
                            >
                                <span className="block">Blog</span>
                                <span className="absolute bottom-0 left-0 inline-block w-full h-2 -mb-2 overflow-hidden">
                                    <span className="absolute inset-0 inline-block w-full h-full transform translate-x-0 bg-black"></span>
                                    <svg
                                        className="w-auto h-full text-green-400 fill-current"
                                        viewBox="0 0 84 6"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g stroke="none">
                                            <g transform="translate(-8)">
                                                <path d="M90.3.9c-1.8 0-2.8.7-3.6 1.4-.7.5-1.2.9-2.4.9s-1.7-.4-2.4-.9c-.8-.6-1.8-1.4-3.6-1.4s-2.8.7-3.6 1.4c-.7.5-1.2.9-2.4.9-1.1 0-1.7-.4-2.4-.9-.8-.6-1.8-1.4-3.6-1.4s-2.8.7-3.6 1.4c-.7.5-1.2.9-2.4.9s-1.7-.4-2.4-.9c-.8-.6-1.8-1.4-3.6-1.4s-2.8.7-3.6 1.4c-.7.5-1.2.9-2.4.9-1.1 0-1.7-.4-2.4-.9-.8-.6-1.8-1.4-3.6-1.4s-2.8.7-3.6 1.4c-.7.5-1.2.9-2.4.9-1.1 0-1.7-.4-2.4-.9-.8-.6-1.8-1.4-3.6-1.4s-2.8.7-3.6 1.4c-.7.5-1.2.9-2.4.9s-1.7-.4-2.4-.9c-.8-.6-1.8-1.4-3.6-1.4s-2.8.7-3.6 1.4c-.7.5-1.2.9-2.4.9-1.1 0-1.7-.4-2.4-.9-.8-.6-1.9 1-1.2 1.5.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9s1.7.4 2.4.9c.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9 1.1 0 1.7.4 2.4.9.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9 1.1 0 1.7.4 2.4.9.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9s1.7.4 2.4.9c.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9 1.1 0 1.7.4 2.4.9.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9s1.7.4 2.4.9c.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9.6 0 1-.4 1-1s-.5-1-1-1z"></path>
                                            </g>
                                        </g>
                                    </svg>
                                </span>
                            </Link>
                            {authenticated ? (
                                <Link
                                    to={"ecommerce"}
                                    className="relative inline-block px-0.5 text-base font-bold text-gray-200 uppercase transition duration-150 ease hover:text-white"
                                >
                                    <span className="block">Ecommerce</span>
                                    <span className="absolute bottom-0 left-0 inline-block w-full h-2 -mb-2 overflow-hidden">
                                        <span className="absolute inset-0 inline-block w-full h-full transform translate-x-0 bg-black"></span>
                                        <svg
                                            className="w-auto h-full text-green-400 fill-current"
                                            viewBox="0 0 84 6"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g stroke="none">
                                                <g transform="translate(-8)">
                                                    <path d="M90.3.9c-1.8 0-2.8.7-3.6 1.4-.7.5-1.2.9-2.4.9s-1.7-.4-2.4-.9c-.8-.6-1.8-1.4-3.6-1.4s-2.8.7-3.6 1.4c-.7.5-1.2.9-2.4.9-1.1 0-1.7-.4-2.4-.9-.8-.6-1.8-1.4-3.6-1.4s-2.8.7-3.6 1.4c-.7.5-1.2.9-2.4.9s-1.7-.4-2.4-.9c-.8-.6-1.8-1.4-3.6-1.4s-2.8.7-3.6 1.4c-.7.5-1.2.9-2.4.9-1.1 0-1.7-.4-2.4-.9-.8-.6-1.8-1.4-3.6-1.4s-2.8.7-3.6 1.4c-.7.5-1.2.9-2.4.9-1.1 0-1.7-.4-2.4-.9-.8-.6-1.8-1.4-3.6-1.4s-2.8.7-3.6 1.4c-.7.5-1.2.9-2.4.9s-1.7-.4-2.4-.9c-.8-.6-1.8-1.4-3.6-1.4s-2.8.7-3.6 1.4c-.7.5-1.2.9-2.4.9-1.1 0-1.7-.4-2.4-.9-.8-.6-1.9 1-1.2 1.5.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9s1.7.4 2.4.9c.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9 1.1 0 1.7.4 2.4.9.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9 1.1 0 1.7.4 2.4.9.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9s1.7.4 2.4.9c.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9 1.1 0 1.7.4 2.4.9.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9s1.7.4 2.4.9c.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9.6 0 1-.4 1-1s-.5-1-1-1z"></path>
                                                </g>
                                            </g>
                                        </svg>
                                    </span>
                                </Link>
                            ) : (
                                <div></div>
                            )}
                        </div>
                        {!authenticated ? (
                            <div className="relative items-center hidden px-4 mt-2 space-x-5 font-medium leading-10 md:flex md:flex-grow-0 md:flex-shrink-0 md:mt-0 md:text-right lg:flex-grow-0 lg:flex-shrink-0">
                                <Link
                                    to={"/login"}
                                    className="relative inline-block px-0.5 text-base font-bold text-gray-200 uppercase transition duration-150 ease hover:text-white"
                                >
                                    <span className="block">Login</span>
                                    <span className="absolute bottom-0 left-0 inline-block w-full h-2 -mb-2 overflow-hidden">
                                        <span className="absolute inset-0 inline-block w-full h-full transform translate-x-0 bg-black"></span>
                                        <svg
                                            className="w-auto h-full text-green-400 fill-current"
                                            viewBox="0 0 84 6"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g stroke="none">
                                                <g transform="translate(-8)">
                                                    <path d="M90.3.9c-1.8 0-2.8.7-3.6 1.4-.7.5-1.2.9-2.4.9s-1.7-.4-2.4-.9c-.8-.6-1.8-1.4-3.6-1.4s-2.8.7-3.6 1.4c-.7.5-1.2.9-2.4.9-1.1 0-1.7-.4-2.4-.9-.8-.6-1.8-1.4-3.6-1.4s-2.8.7-3.6 1.4c-.7.5-1.2.9-2.4.9s-1.7-.4-2.4-.9c-.8-.6-1.8-1.4-3.6-1.4s-2.8.7-3.6 1.4c-.7.5-1.2.9-2.4.9-1.1 0-1.7-.4-2.4-.9-.8-.6-1.8-1.4-3.6-1.4s-2.8.7-3.6 1.4c-.7.5-1.2.9-2.4.9-1.1 0-1.7-.4-2.4-.9-.8-.6-1.8-1.4-3.6-1.4s-2.8.7-3.6 1.4c-.7.5-1.2.9-2.4.9s-1.7-.4-2.4-.9c-.8-.6-1.8-1.4-3.6-1.4s-2.8.7-3.6 1.4c-.7.5-1.2.9-2.4.9-1.1 0-1.7-.4-2.4-.9-.8-.6-1.9 1-1.2 1.5.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9s1.7.4 2.4.9c.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9 1.1 0 1.7.4 2.4.9.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9 1.1 0 1.7.4 2.4.9.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9s1.7.4 2.4.9c.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9 1.1 0 1.7.4 2.4.9.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9s1.7.4 2.4.9c.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9.6 0 1-.4 1-1s-.5-1-1-1z"></path>
                                                </g>
                                            </g>
                                        </svg>
                                    </span>
                                </Link>
                                <Link
                                    to={"/signup"}
                                    className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-blue-950 border border-blue-400 rounded-md shadow-sm focus:ring-offset-gray-900 hover:bg-green-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400"
                                >
                                    Sign Up
                                </Link>
                            </div>
                        ) : (
                            <div>
                                <button
                                    className="inline-flex items-center cursor-pointer justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-blue-950 border border-blue-400 rounded-md shadow-sm focus:ring-offset-gray-900 hover:bg-green-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400"
                                    onClick={handleLogout}
                                >
                                    {" "}
                                    log out
                                </button>
                                <Link to={('/profile')}>
                                <img
                                    className="ml-12 inline-block h-12 w-12 rounded-full ring-2 ring-white"
                                    src={
                                        "http://localhost:8000/images/" +
                                        user.image
                                    }
                                />
                                </Link>
                            </div>
                        )}

                        <div className="flex items-center justify-center h-full mr-5 text-white md:hidden">
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M4 8h16M4 16h16"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </section>
        </header>
    );
}
