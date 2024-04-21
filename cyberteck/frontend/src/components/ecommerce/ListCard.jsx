import { useEffect, useState } from "react";
import { axiosClient } from "../../api/axios";
import { useNavigate } from 'react-router-dom';

const productsOlde = [
    {
        id: 1,
        name: "Zip Tote Basket",
        color: "White and black",
        href: "#",
        imageSrc:
            "https://img.odcdn.com.br/wp-content/uploads/2020/12/cyberpunk.png",
        imageAlt:
            "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
        price: "$140",
    },
];

export default function ListCard() {
    const navigate = useNavigate();


    const [products, setProducts] = useState(productsOlde);

    const fetchData = async () => {
        try {
            const response = await axiosClient.get("/api/products");
            console.log(response.data.products);
            setProducts(response.data.products);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);

    const addToCart = (product) => {
        let cart = localStorage.getItem("cart")
            ? JSON.parse(localStorage.getItem("cart"))
            : [];

        // Check if the product is already in the cart
        const existingProduct = cart.find((item) => item.id === product.id);
        if (existingProduct) {
            // If the product is already in the cart, increase its quantity
            existingProduct.quantity += 1;
        } else {
            // If the product is not in the cart, add it with a quantity of 1
            cart.push({ ...product, quantity: 1 });
        }

        localStorage.setItem("cart", JSON.stringify(cart));
    };


    return (
        <div className="bg-white ">
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-xl font-bold text-gray-900">
                    Customers also bought
                </h2>

                <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
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
                                <div className="relative mt-4">
                                    <h3 className="text-sm font-medium text-gray-900">
                                        {product.name}
                                    </h3>
                                    {/* <p className="mt-1 text-sm text-gray-500">
                                        {product.color}
                                    </p> */}
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
                                    href={product.href}
                                    className="relative flex cursor-pointer bg-gray-100 border border-transparent rounded-md py-2 px-6 items-center justify-center text-sm font-medium text-gray-900 hover:bg-gray-200"
                                    onClick={() => addToCart(product)}
                                >
                                    Add to bag
                                </div>
                                <div
                                    href={product.href}
                                    className="relative flex cursor-pointer bg-gray-100 border border-transparent rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-gray-900 hover:bg-gray-200"
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
        </div>
    );
}
