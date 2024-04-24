import { useForm } from "react-hook-form";

import { useEffect, useState } from "react";
import { axiosClient } from "../../../api/axios";

export default function EditProductModel({ isOpen, closeModel, product }) {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        if (
            !data.name ||
            !data.description ||
            !data.category_id ||
            !data.price ||
            !data.stock_quantity
        ) {
            console.error("All fields are required");
            return;
        }
        const formData = new FormData();
        formData.append("_method", "PUT");
        formData.append("image", data.image[0]);
        formData.append("name", data.name);
        formData.append("description", data.description);
        formData.append("category_id", data.category_id);
        formData.append("price", data.price);
        formData.append("stock_quantity", data.stock_quantity);
        console.log("Sending FormData:", formData);

        console.log("Name field value:", data.name);

        try {
            const response = await axiosClient.post(
                `/api/products/${product.id}`,
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            console.log("Response:", response);
            if (response.status === 200) {
                reset();
                closeModel();
            }
        } catch (error) {
            console.error("Error updating product:", error);
            console.error(
                "Error updating product:",
                error.response ? error.response.data : error
            );
        }
    };

    const [categories, setCategories] = useState([]);
    const getCategories = async () => {
        try {
            const response = await axiosClient.get("/api/categories");
            setCategories(response.data.categories);
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    };

    useEffect(() => {
        getCategories();
    }, []);

    if (!isOpen) {
        return null;
    }
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div
                className="absolute inset-0 bg-black opacity-50"
                onClick={() => {
                    reset();
                    closeModel();
                }}
            ></div>
            <div className="bg-white rounded-lg z-50 w-1/2">
                <form
                    className="space-y-6 m-12"
                    onSubmit={handleSubmit(onSubmit)}
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
                                Upload or drag & drop your file SVG, PNG, JPG,
                                or GIF.
                            </p>

                            <input
                                id="dropzone-file"
                                type="file"
                                className=""
                                {...register("image", { required: true })}
                            />
                            {errors.image && (
                                <span>This field is required</span>
                            )}
                        </label>
                    </div>

                    <div className="col-span-full">
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
                            Name
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                id="name"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                defaultValue={product.name}
                                {...register("name", { required: true })}
                            />
                            {errors.name && <span>This field is required</span>}
                        </div>
                    </div>

                    <div className="col-span-full">
                        <label
                            htmlFor="description"
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
                            Description
                        </label>
                        <div className="mt-2">
                            <textarea
                                id="description"
                                rows={3}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                defaultValue={product.description}
                                {...register("description", { required: true })}
                            />
                            {errors.title && (
                                <span>This field is required</span>
                            )}
                        </div>
                    </div>

                    <div className="col-span-full">
                        <label
                            htmlFor="category"
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
                            Category
                        </label>
                        <div className="mt-2">
                            <select
                                id="category"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                {...register("category_id", {
                                    required: true,
                                })}
                            >
                                {categories.map((category) => (
                                    <option
                                        value={category.id}
                                        key={category.id}
                                    >
                                        {category.category_name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="col-span-full">
                        <label
                            htmlFor="price"
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
                            Price
                        </label>
                        <div className="mt-2">
                            <input
                                defaultValue={product.price}
                                {...register("price", { required: true })}
                                type="number"
                                id="price"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                            {errors.price && (
                                <span>This field is required</span>
                            )}
                        </div>
                    </div>

                    <div className="col-span-full">
                        <label
                            htmlFor="stock"
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
                            Stock
                        </label>
                        <div className="mt-2">
                            <input
                                defaultValue={product.stock_quantity}
                                {...register("stock_quantity", {
                                    required: true,
                                })}
                                type="number"
                                id="stock"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                            {errors.stock && (
                                <span>This field is required</span>
                            )}
                        </div>
                        <div className="py-4  ">
                            <button className="bg-black py-2 px-4 text-white hover:bg-gray-700">
                                Add Product
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
