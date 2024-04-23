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
    const [name, setName] = useState("spider man");
    const [category_id, setCategoryId] = useState(null);

    const getCategories = async () => {
        try {
            const response = await axiosClient.get("/api/categories");
            setCategories(response.data.categories);
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    };

    const handleSubmit = async () => {
        console.log("name", name);
        try {
            const response = await axiosClient.get("/api/search", {
                params: {
                    name,
                    category_id,
                },
            });
            console.log(response.data.products);
            setProduct(response.data.products);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };
        


    useEffect(() => {
        getCategories();
        handleSubmit();
    }, []);

    
    return (
        <>
            <div>
                <div className="flex gap-4 mb-4">
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
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                    {categories.slice(1, 5).map((category) => (
                        <div
                            key={category.id}
                            className="relative rounded-lg border border-gray-300 bg-slate-200 px-4 py-3 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                            onClick={() => {
                                setCategoryId(category.id);
                                handleSubmit();
                            }}
                        >
                            <div className="flex-shrink-0">
                                <img
                                    className="h-14 w-14 rounded-full"
                                    src="https://cdn.dribbble.com/users/975607/screenshots/15985552/media/74463943d41de4a8734913885a7cccbd.png"
                                    alt=""
                                />
                            </div>
                            <div className="flex-1 min-w-0 pr-12">
                                <a href="#" className="focus:outline-none">
                                    <span
                                        className="absolute inset-0"
                                        aria-hidden="true"
                                    />
                                    <p className="text-sm font-medium text-gray-900">
                                        {category.category_name}
                                    </p>
                                    <p className="text-sm text-gray-500 truncate">
                                        display more +4
                                    </p>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {products && products.length > 0 && (
                <div className="flex flex-wrap gap-5 justify-center py-6">
                    {products.map((product) => (
                        <CardProductEcom key={product.id} product={product} />
                    ))}
                </div>
            )}
        </>
    );
}
