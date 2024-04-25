import { Button } from "@/components/ui/button";
import { LoaderIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { axiosClient } from "../../api/axios";
import { useForm } from "react-hook-form";
import ReviewForm from "./ReviewForm";

export default function HistoryProfile({ user }) {
    console.log("User:", user.id);

    const [history, setHistory] = useState([]);


    const { register, handleSubmit, formState: { errors } } = useForm();

    const submitReviews = async (data) => {
        const formData = new FormData();
        formData.append("review", data.review);
        formData.append("product_id", data.product.id);
        formData.append("user_id", data.id);
        console.log("Form Data:", formData);

        try {
            const response = await axiosClient.post(
                "/api/reviews",
                formData
            );
            if (response.status === 201) {
                console.log("Review saved successfully!");
            }
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };


    const getHistory = async () => {
        try {
            const response = await axiosClient.get(
                `/api/history/${user.id}`
            );
            if (response.status === 201) {
                console.log("History:", response.data.cart);
                setHistory(response.data.cart);
            }
        } catch (error) {
            console.error("Error fetching history:", error);
        }
    };


    useEffect(() => {
        getHistory();
    }, [user]);

    if (!history) {
        return (
            <div className="flex items-center m-6 justify-center w-40">
                <LoaderIcon className="h-5 w-5 animate-spin" />
                Loading...
            </div>
        );
    }

    return (
        <>
                <h1 className="text-xl mx-8 md:mx-40 font-bold text-gray-900">All history products</h1>
            <div className="max-w-2xl flex justify-between mx-auto  px-4  sm:px-6 lg:max-w-7xl lg:px-8">
                {history &&
                    history.map((historyItem) => (
                        <div
                            key={historyItem.id}
                            className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"
                        >
                            <div className=" ">
                                <h3 className="font-semibold text-lg">
                                    {historyItem.product.name}
                                </h3>
                                <div className="flex items-center gap-1.5 text-sm">
                                    <img
                                        src={"http://localhost:8000/images/"+historyItem.product.image}
                                        className="w-56 h-28  object-cover"
                                    />
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    {"$"+historyItem.product.price}
                                </p>
                            </div>
                            <div >
                            <ReviewForm productId={historyItem.product.id} userId={user.id} />
                            </div>
                        </div>
                    ))}
            </div>
        </>
    );
}
