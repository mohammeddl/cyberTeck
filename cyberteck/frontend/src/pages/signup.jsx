import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

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
            <form
                className="space-y-6 m-12"
                onSubmit={handleSubmit(onSubmitRegister)}
            >
                <div>
                    <label
                        htmlFor="file"
                        className="block text-sm text-gray-500 dark:text-gray-300"
                    >
                        File
                    </label>

                    <label
                        htmlFor="dropzone-file"
                        className="flex flex-col items-center w-full max-w-lg p-5 mx-auto mt-2 text-center bg-white border-2 border-gray-300 border-dashed cursor-pointer dark:bg-gray-900 dark:border-gray-700 rounded-xl"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-8 h-8 text-gray-500 dark:text-gray-400"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                            />
                        </svg>

                        <h2 className="mt-1 font-medium tracking-wide text-gray-700 dark:text-gray-200">
                            Payment File
                        </h2>

                        <p className="mt-2 text-xs tracking-wide text-gray-500 dark:text-gray-400">
                            Upload or drag & drop your file SVG, PNG, JPG, or
                            GIF.
                        </p>

                        <input
                            id="dropzone-file"
                            type="file"
                            className=""
                            {...register("image", { required: true })}
                        />
                    </label>
                </div>
                <div className="col-span-full">
                    <label
                        htmlFor="name"
                        className="block text-sm font-medium leading-6 text-gray-900"
                    >
                        User Name
                    </label>
                    <div className="mt-2">
                        <input
                            id="description"
                            rows={3}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            {...register("name", { required: true })}
                        />
                    </div>
                </div>
                <div className="col-span-full">
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium leading-6 text-gray-900"
                    >
                        Email
                    </label>
                    <div className="mt-2">
                        <input
                            id="description"
                            rows={3}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            {...register("email", { required: true })}
                        />
                    </div>
                </div>

                <div className="col-span-full">
                    <label
                        htmlFor="price"
                        className="block text-sm font-medium leading-6 text-gray-900"
                    >
                        Password
                    </label>
                    <div className="mt-2">
                        <input
                            {...register("password", { required: true })}
                            type="password"
                            id="price"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
                <div className="py-4  ">
                    <button className="bg-black py-2 px-4 text-white hover:bg-gray-700">
                        Register
                    </button>
                </div>
            </form>
        </>
    );
}
