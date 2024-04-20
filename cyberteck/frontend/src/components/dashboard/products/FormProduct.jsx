import { useEffect, useState } from "react";
import AddProductModel from "./AddProductModel";
import { axiosClient } from "../../../api/axios";

export default function FormProduct() {
    const [categories, setCategories] = useState([]);

    const fetchCategories = async () => {
        const response = await axiosClient.get(
            "http://localhost:8000/api/categories"
        );
        setCategories(response.data.categories);
    };
    useEffect(() => {
        fetchCategories();
    }, []);

    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        category: "",
        price: "",
        stock: "",
        image: null,
    });

    const handleChange = async (e) => {
        e.preventDefault();

        const updatedFormData = { ...formData };
        updatedFormData[e.target.name] = e.target.value;
        setFormData(updatedFormData);

        try {
            const data = new FormData();
            data.append("name", formData.name);
            data.append("description", updatedFormData.description);
            data.append("category_id", updatedFormData.category);
            data.append("price", updatedFormData.price);
            data.append("stock_quantity", updatedFormData.stock);
            data.append("image", updatedFormData.image[0]);

            console.log(updatedFormData);

            const response = await axiosClient.post(
                "http://localhost:8000/api/products",
                data,{
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            if (response.status === 200) {
                console.log("product added successfully");
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleI = (e) => {
        const updatedFormData = { ...formData };
        updatedFormData[e.target.name] = e.target.value;
        setFormData(updatedFormData);
    };

    const handelImage = (e) => {
        const file = e.target.files[0];
        setFormData((prevData) => ({ ...prevData, image: file }));
    };

    return (
        <>
            <div className="w-full flex justify-center">
                <button
                    onClick={() => setIsOpen(true)}
                    className="mt-6 mx-4 p-2 rounded-lg bg-gray-900 text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
                >
                    Create Product
                </button>
            </div>

            <AddProductModel isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <form className="space-y-6 m-12" onSubmit={handleChange}>
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
                                className="hidden"
                                onChange={handelImage}
                            ></input>
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
                                name="name"
                                id="name"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                onChange={handleI}
                            />
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
                                onChange={handleI}
                                id="description"
                                name="description"
                                rows={3}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                defaultValue={""}
                            />
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
                                onChange={handleI}
                                id="category"
                                name="category"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
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
                                onChange={handleI}
                                type="number"
                                name="price"
                                id="price"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
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
                                onChange={handleI}
                                type="number"
                                name="stock"
                                id="stock"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                        <div className="py-4  ">
                            <button className="bg-black py-2 px-4 text-white hover:bg-gray-700">
                                Add Product
                            </button>
                        </div>
                    </div>
                </form>
            </AddProductModel>
        </>
    );
}
