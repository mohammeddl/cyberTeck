import { Button } from "@/components/ui/button";
import { LoaderIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { axiosClient } from "../../api/axios";
import { useForm } from "react-hook-form";

export default function HistoryProfile({ user }) {
    console.log("User:", user.id);

    const [history, setHistory] = useState([]);


    const { register, handleSubmit, formState: { errors } } = useForm();

    const submitReviews = async (data) => {
        const formData = new FormData();
        formData.append("review", data.review);
        formData.append("product_id", history.product.id);
        formData.append("user_id", user.id);
        console.log("Form Data:", formData);

        try {
            const response = await axiosClient.post(
                `/api/reviews`,
                formData
            );
            if (response.status === 200) {
                console.log("Review saved successfully!");
            }
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };





    useEffect(() => {
        const getHistory = async () => {
            try {
                const response = await axiosClient.get(
                    `/api/history/${user.id}`
                );
                if (response.status === 200) {
                    console.log("History:", response.data.cart);
                    setHistory(response.data.cart);
                }
            } catch (error) {
                console.error("Error fetching history:", error);
            }
        };
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
                    history.map((history) => (
                        <div
                            key={history.id}
                            className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"
                        >
                            <div className=" ">
                                <h3 className="font-semibold text-lg">
                                    {history.product.name}
                                </h3>
                                <div className="flex items-center gap-1.5 text-sm">
                                    <img
                                        src={"http://localhost:8000/images/"+history.product.image}
                                        className="w-56 h-28  object-cover"
                                    />
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    {"$"+history.product.price}
                                </p>
                            </div>

                            <div >
                                <form onSubmit={handleSubmit(submitReviews)}  className="grid gap-2.5">
                                    <textarea
                                        className="min-h-[100px]"
                                        id="review-1"
                                        placeholder="Write your review"
                                        {...register("review", {
                                            required: true,
                                        })}
                                    />
                                    {errors.review && (
                                        <span className="text-red">
                                            This field is required
                                        </span>
                                    )}
                                    <Button type="submit">Submit</Button>
                                </form>
                            </div>
                        </div>
                    ))}
            </div>
        </>
    );
}
