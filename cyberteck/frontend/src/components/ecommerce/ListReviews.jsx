import { Fragment, useEffect, useState } from "react";
import { StarIcon } from "@heroicons/react/solid";
import { useParams } from "react-router-dom";

import { Tab } from "@headlessui/react";
import { axiosClient } from "../../api/axios";
import { LoaderIcon } from "lucide-react";
import { useCartContext } from "../context/CartContext";

// const products = {
//   name: 'Application UI Icon Pack',
//   version: { name: '1.0', date: 'June 5, 2021', datetime: '2021-06-05' },
//   price: '$220',
//   description:
//     'The Application UI Icon Pack comes with over 200 icons in 3 styles: outline, filled, and branded. This playful icon pack is tailored for complex application user interfaces with a friendly and legible look.',
//   imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-05-product-01.jpg',
//   imageAlt: 'Sample of 30 icons with friendly and fun details in outline, filled, and brand color styles.',
// }
const reviews = {
    average: 4,
    featured: [
        {
            id: 1,
            rating: 5,
            content: `
        <p>This icon pack is just what I need for my latest project. There's an icon for just about anything I could ever need. Love the playful look!</p>
      `,
            date: "July 16, 2021",
            datetime: "2021-07-16",
            author: "Emily Selman",
            avatarSrc:
                "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
        },
        {
            id: 2,
            rating: 5,
            content: `
        <p>Blown away by how polished this icon pack is. Everything looks so consistent and each SVG is optimized out of the box so I can use it directly with confidence. It would take me several hours to create a single icon this good, so it's a steal at this price.</p>
      `,
            date: "July 12, 2021",
            datetime: "2021-07-12",
            author: "Hector Gibbons",
            avatarSrc:
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
        },
    ],
};

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function ListReviews() {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [reviews, setReviews] = useState([]);

    const { addProduct } = useCartContext();

    const getReviews = async () => {
        try {
            const response = await axiosClient.get(`/api/reviews/${productId}`);
            if (response.status === 201) {
                console.log("Reviews:", response.data.review);
                setReviews(response.data.review);
            }
        } catch (error) {
            console.error("Error fetching reviews:", error);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosClient.get(
                    `/api/products/${productId}`
                ); // Fetch product by productId
                console.log(response.data);
                setProduct(response.data);
            } catch (error) {
                console.error("Error fetching product:", error);
            }
        };
        fetchData();
        getReviews();
    }, [productId]);

    if (!product) {
        return (
            <div className="flex items-center m-6 justify-center w-40">
                <LoaderIcon className="h-5 w-5 animate-spin" />
                Loading...
            </div>
        );
    }

    return (
        <div>
            {product && (
                <div className="bg-white">
                    <div className="mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                        <div className="lg:grid lg:grid-rows-1 lg:grid-cols-7 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">
                            <div className="lg:row-end-1 lg:col-span-4">
                                <div className="aspect-w-4 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden">
                                    <img
                                        src={
                                            "http://localhost:8000/images/" +
                                            product.image
                                        }
                                        alt={product.image}
                                        className="object-center object-cover"
                                    />
                                </div>
                            </div>

                            {/* Product details */}
                            <div className="max-w-2xl mx-auto mt-14 sm:mt-16 lg:max-w-none lg:mt-0 lg:row-end-2 lg:row-span-2 lg:col-span-3">
                                <div className="flex flex-col-reverse">
                                    <div className="mt-4">
                                        <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                                            {product.name}
                                        </h1>

                                        <h2
                                            id="information-heading"
                                            className="sr-only"
                                        >
                                            Product information
                                        </h2>
                                        {/* <p className="text-sm text-gray-500 mt-2">
                      Version {product.name} (Updated{' '}
                      <time dateTime={product.datetime}>{product.version.date}</time>)
                    </p> */}
                                    </div>
                                </div>

                                <p className="text-gray-500 mt-6">
                                    {product.description}
                                </p>

                                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
                                    <button
                                        type="button"
                                        className="w-full bg-blue-900 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                                        onClick={() => addProduct(product)}
                                    >
                                        Add To bag
                                    </button>
                                </div>
                            </div>

                            <div className="w-full max-w-2xl mx-auto mt-16 lg:max-w-none lg:mt-0 lg:col-span-4">
                                <Tab.Group as="div">
                                    <div className="border-b border-gray-200">
                                        <Tab.List className="-mb-px flex space-x-8">
                                            <Tab
                                                className={({ selected }) =>
                                                    classNames(
                                                        selected
                                                            ? "border-blue-900 text-gray-600"
                                                            : "border-transparent text-gray-700 hover:text-gray-800 hover:border-gray-300",
                                                        "whitespace-nowrap py-6 border-b-2 font-medium text-sm"
                                                    )
                                                }
                                            >
                                                Customer Reviews
                                            </Tab>
                                        </Tab.List>
                                    </div>
                                    <Tab.Panels as={Fragment}>
                                        <Tab.Panel className="-mb-10">
                                            <h3 className="sr-only">
                                                Customer Reviews
                                            </h3>

                                            {reviews &&
                                                reviews.map(
                                                    (review, reviewIdx) => (
                                                        <div
                                                            key={review.id}
                                                            className="flex text-sm text-gray-500 space-x-4"
                                                        >
                                                            <div className="flex-none py-10">
                                                                <img
                                                                    src={
                                                                        "http://localhost:8000/images/" +
                                                                        review
                                                                            .user
                                                                            .image
                                                                    }
                                                                    alt=""
                                                                    className="w-10 h-10 bg-gray-100 rounded-full"
                                                                />
                                                            </div>
                                                            <div
                                                                className={classNames(
                                                                    reviewIdx ===
                                                                        0
                                                                        ? ""
                                                                        : "border-t border-gray-200",
                                                                    "py-10"
                                                                )}
                                                            >
                                                                <h3 className="font-medium text-gray-900">
                                                                    {
                                                                        review
                                                                            .user
                                                                            .name
                                                                    }
                                                                </h3>
                                                                <p>
                                                                    <time
                                                                        dateTime={
                                                                            review.created_at
                                                                        }
                                                                    >
                                                                        {
                                                                            review.created_at
                                                                        }
                                                                    </time>
                                                                </p>
                                                                <div
                                                                    className="mt-4 prose prose-sm max-w-none text-gray-500"
                                                                    dangerouslySetInnerHTML={{
                                                                        __html: review.review,
                                                                    }}
                                                                />
                                                            </div>
                                                        </div>
                                                    )
                                                )}
                                        </Tab.Panel>
                                    </Tab.Panels>
                                </Tab.Group>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
