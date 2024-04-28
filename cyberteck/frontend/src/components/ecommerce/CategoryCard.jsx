import { useEffect, useState } from "react";
import { axiosClient } from "../../api/axios";
import { Button, Input } from "@material-tailwind/react";

import CardProductEcom from "./CardProductEcom";

// const categoriesd = [
//     {
//         name: "Action",
//         display: "Co-Founder / CEO",
//         imageUrl:
//             "https://cdn.dribbble.com/users/975607/screenshots/15985552/media/74463943d41de4a8734913885a7cccbd.png",
//     },
//     {
//         name: "Action",
//         display: "Co-Founder / CEO",
//         imageUrl:
//             "https://cdn.dribbble.com/users/975607/screenshots/15985552/media/74463943d41de4a8734913885a7cccbd.png",
//     },
//     {
//         name: "Action",
//         display: "Co-Founder / CEO",
//         imageUrl:
//             "https://cdn.dribbble.com/users/975607/screenshots/15985552/media/74463943d41de4a8734913885a7cccbd.png",
//     },
//     {
//         name: "Action",
//         display: "Co-Founder / CEO",
//         imageUrl:
//             "https://cdn.dribbble.com/users/975607/screenshots/15985552/media/74463943d41de4a8734913885a7cccbd.png",
//     },
// ];

export default function CategoryCard() {
    const [products, setProduct] = useState([]);
    const [categories, setCategories] = useState([]);
    const [name, setName] = useState([]);
    const [category_id, setCategoryId] = useState(null);
    const [loadingSearch, setLoadingSearch] = useState(false);

    const getCategories = async () => {
        try {
            const response = await axiosClient.get("/api/categories");
            setCategories(response.data.categories);
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    };

    const handleSubmit = async () => {
        setLoadingSearch(true);
        try {
            const response = await axiosClient.get("/api/search", {
                params: {
                    name,
                    category_id,
                },
            });
            setProduct(response.data.products);
            setLoadingSearch(false);
        } catch (error) {
            console.error("Error fetching products:", error);
            setProduct([]);
            setLoadingSearch(false);
        }
    };

    useEffect(() => {
        getCategories();
    }, []);
    useEffect(() => {
        handleSubmit();
    }, [category_id]);

    return (
        <>
            <div>
                <div className="flex gap-4 mb-4 mx-24">
                    <Input
                        type="text"
                        placeholder="Search by title..."
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <Button color="black" onClick={handleSubmit}>
                        Search
                    </Button>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="grid grid-cols-2 cursor-pointer gap-4 sm:grid-cols-6 m-4 md:mx-24">
                    {categories.map((category) => (
                        <div
                            key={category.id}
                            className={`relative cursor-pointer rounded-lg border border-gray-300 bg-slate-200 px-4 py-3 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500 ${
                                category_id === category.id
                                    ? "border-2 border-gray-400"
                                    : ""
                            }`}
                            onClick={() => {
                                setCategoryId(category.id);
                            }}
                        >
                            <div className="flex-shrink-0">
                                <img
                                    className="h-10 w-10  md:h-14 md:w-14 rounded-full"
                                    src="https://cdn.dribbble.com/users/975607/screenshots/15985552/media/74463943d41de4a8734913885a7cccbd.png"
                                    alt=""
                                />
                            </div>
                            <div className="flex-1 min-w-0 pr-12">
                                <div className="focus:outline-none">
                                    <span
                                        className="absolute inset-0"
                                        aria-hidden="true"
                                    />
                                    <p className="text-sm font-medium text-gray-900">
                                        {category.category_name}
                                    </p>
                                    {/* <p className="text-sm text-gray-500 truncate">
                                        display more +4
                                    </p> */}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {loadingSearch && (
                <div className="flex justify-center">
                    <div className="flex justify-center items-center mt-20">
                        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900" />
                    </div>
                </div>
            )}
            {products && products.length > 0 && (
                <div className="flex flex-wrap gap-5 justify-center pb-6">
                    {products.map((product) => (
                        <CardProductEcom key={product.id} product={product} />
                    ))}
                </div>
            )}
        </>
    );
}
