import { useEffect, useState } from "react";
import { axiosClient } from "../../api/axios";
import { useNavigate } from "react-router-dom";
import { ArrowBigLeftDash, ArrowBigRightDash } from "lucide-react";
import { useCartContext } from "../context/CartContext";

const productsOlde = [
    {
        id: 1,
        name: "Zip Tote Basket",
        color: "White and black",
        imageSrc:
            "https://img.odcdn.com.br/wp-content/uploads/2020/12/cyberpunk.png",
        imageAlt:
            "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
        price: "$140",
        categories: {
            category_name: "Action",
        },
    },
];

export default function ListCard() {
    const navigate = useNavigate();
    const [products, setProducts] = useState(productsOlde);
    const { addProduct } = useCartContext();

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(8);
    const [totalPages, setTotalPages] = useState(1);

    const fetchData = async () => {
        try {
            const response = await axiosClient.get("/api/products");
            setProducts(response.data.products);
            setTotalPages(
                Math.ceil(response.data.products.length / itemsPerPage)
            );
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="bg-white ">
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-xl font-bold text-gray-900">
                    Customers also bought
                </h2>

                <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
                    {currentProducts.map((product) => (
                        <div key={product.id}>
                            <div className="relative">
                                <div className="relative w-full h-72 rounded-lg overflow-hidden">
                                    <img
                                        src={
                                            "http://localhost:8000/images/" +
                                            product.image
                                        }
                                        alt={product.imageAlt}
                                        className="w-full h-full object-center object-cover"
                                    />
                                </div>
                                <div className="relative mt-4 flex justify-between">
                                    <h3 className="text-sm font-medium text-gray-900">
                                        {product.name}
                                    </h3>
                                    <p className=" text-sm text-gray-500">
                                        {product.categories &&
                                            product.categories.category_name}
                                    </p>
                                </div>
                                <div className="absolute top-0 inset-x-0 h-72 rounded-lg p-4 flex items-end justify-end overflow-hidden">
                                    <div
                                        aria-hidden="true"
                                        className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                                    />
                                    <p className="relative text-lg font-semibold text-white">
                                        {product.price + " USD"}
                                    </p>
                                </div>
                            </div>
                            <div className="mt-6 flex gap-4">
                                <div
                                    className="relative flex cursor-pointer bg-gray-100 border border-transparent rounded-md py-2 px-6 items-center justify-center text-sm font-medium text-gray-900 hover:bg-gray-200"
                                    onClick={() => addProduct(product)}
                                >
                                    Add to Cart
                                </div>
                                <div
                                    className="relative flex cursor-pointer bg-gray-900 border border-transparent rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-white   hover:bg-gray-700"
                                    onClick={() => {
                                        navigate(`/learn_more/${product.id}`);
                                    }}
                                >
                                    Learn more
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-center pb-8">
                <button
                    onClick={prevPage}
                    disabled={currentPage === 1}
                    className="mr-2 px-4 py-2 bg-gray-200 rounded"
                >
                    <ArrowBigLeftDash />
                </button>
                <span className="mr-2 pt-2">
                    Page {currentPage} of {totalPages}
                </span>
                <button
                    onClick={nextPage}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 bg-gray-200 rounded"
                >
                    <ArrowBigRightDash />
                </button>
            </div>
        </div>
    );
}
