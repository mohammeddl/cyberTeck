import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Logo from "../assets/logo.png";

import { useNavigate } from "react-router-dom";

import { useUserContext } from "../components/context/UserContext";
import { home } from "../router";
import { axiosClient } from "../api/axios";

export default function Signup() {
    const navigate = useNavigate();

    const { handleSubmit, register } = useForm({
        defaultValues: {
            image: undefined,
            name: "",
            email: "",
            password: "",
        },
    });

    const { setUser } = useUserContext();

    const onSubmitRegister = async (values) => {
        const formData = new FormData();
        formData.append("image", values.image[0]);
        formData.append("name", values.name);
        formData.append("email", values.email);
        formData.append("password", values.password);

        try {
            const response = await axiosClient.post("/api/register", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            console.log("API Response after registration:", response);
            if (response && response.data) {
                setUser(response.data.user);
                window.localStorage.setItem(
                    "ACCESS_TOKEN",
                    response.data.access_token
                );
                window.localStorage.setItem(
                    "USER",
                    JSON.stringify(response.data.user)
                );
                navigate(home);
            }
        } catch (error) {
            console.error("Failed to register:", error);
        }
    };

    return (
        <>
        <div className="bg-background ">

            <div className="container flex items-center justify-center md:py-16 px-6 mx-auto">

                <form
                    className="w-full max-w-md"
                    onSubmit={handleSubmit(onSubmitRegister)}
                >
                    <div className="flex justify-center mx-auto">
                        <img
                            className="w-auto h-16 sm:h-16"
                            src={Logo}
                            alt=""
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="dropzone-file"
                            className="flex items-center px-3 py-3 mx-auto mt-6 text-center bg-white border-2 border-dashed rounded-lg cursor-pointer dark:border-gray-600 dark:bg-gray-900"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6 text-gray-300 dark:text-gray-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                                />
                            </svg>

                            <h2 className="mx-3 text-gray-400">
                                Profile Photo
                            </h2>
                            <input
                                id="dropzone-file"
                                type="file"
                                className="hidden"
                                {...register("image", { required: true })}
                            />
                        </label>
                    </div>
                    <div className="relative flex items-center mt-8">
                        <span className="absolute">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                />
                            </svg>
                        </span>

                        <input
                            id="name"
                            rows={3}
                            className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            placeholder="Username"
                            {...register("name", { required: true })}
                        />
                    </div>
                    <div className="relative flex items-center mt-8">
                        <span className="absolute">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                />
                            </svg>
                        </span>

                        <input
                            id="email"
                            rows={3}
                            className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            placeholder="Email address"
                            {...register("email", { required: true })}
                        />
                    </div>

                    <div className="relative flex items-center mt-8">
                        <span className="absolute">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                />
                            </svg>
                        </span>

                        <input
                            {...register("password", { required: true })}
                            type="password"
                            id="password"
                            className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            placeholder="Password"
                        />
                    </div>
                    <div className="py-4  ">
                        <button className="bg-black py-2 px-4 text-white hover:bg-gray-700">
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
        </>
    );
}
