import { useEffect, useState } from "react";
import { axiosClient } from "../../api/axios";
import { LoaderIcon } from "lucide-react";
import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

export default function Offers() {
    const [offer, setOffer] = useState([]);
    const navigate = useNavigate();

    const getOffers = async () => {
        try {
            const response = await axiosClient.get("/api/offer");
            setOffer(response.data.products);
        } catch (error) {
            console.error("Error fetching offers:", error);
        }
    };

    useEffect(() => {
        getOffers();
    }, []);


    if (!offer) {
        return (
            <div className="flex items-center m-6 justify-center w-40">
                <LoaderIcon className="h-5 w-5 animate-spin" />
                Loading...
            </div>
        );
    }

    return (
        <div className="bg-white pt-16 lg:py-24">
            <div className="pb-16 bg-gray-900 lg:pb-0 lg:z-10 lg:relative">
                <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8">
                    <div className="relative lg:-my-8">
                        <div
                            aria-hidden="true"
                            className="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden"
                        />
                        <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full">
                            <div className="aspect-w-10 aspect-h-6 rounded-xl shadow-xl overflow-hidden sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
                                <img
                                    className="object-cover lg:h-full lg:w-full"
                                    src={
                                        "http://localhost:8000/images/" +
                                        offer.image
                                    }
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 lg:m-0 lg:col-span-2 lg:pl-8">
                        <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none">
                            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                                today's offer
                            </h2>
                            <div>
                                <div>
                                    <p className="mt-6 text-2xl font-medium text-white">
                                        {offer.name}
                                    </p>
                                    <p className="mt-6 text-2xl font-medium text-white">
                                        {offer.description}
                                    </p>
                                    <p className="mt-6 text-2xl font-medium text-white">
                                        {offer.cate}
                                    </p>
                                </div>
                                <div className=" space-y-4 items-center  justify-between">
                                    <span className="text-gray-300 text-2xl line-through mr-2">
                                        {"$" + offer.price}
                                    </span>
                                    <span className="text-red-500 font-bold text-3xl">
                                        {"$" + offer.offer}
                                    </span>
                                    <div className="flex items-center justify-between">
                                        <div className="flex gap-2">
                                            <Button
                                                variant="outline"
                                                className="bg-white hover:bg-gray-300 text-black"
                                            >
                                                Add to Cart
                                            </Button>
                                            <Button
                                                variant="outline"
                                                className="bg-blue-900 hover:bg-gray-700 text-white"
                                                onClick={() => {
                                                    navigate(`/learn_more/${offer.id}`);
                                                }}
                                            >
                                                Learn More
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
