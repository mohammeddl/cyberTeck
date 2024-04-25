import { Button } from "@/components/ui/button";
import { LoaderIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { axiosClient } from "../../api/axios";

export default function HistoryProfile({ user }) {
    console.log("User:", user.id);

    const [history, setHistory] = useState([]);






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

                            <div onSubmit={handleSubmit(submitReviews)}>
                                <form  className="grid gap-2.5">
                                    <textarea
                                        className="min-h-[100px]"
                                        id="review-1"
                                        placeholder="Write your review"
                                    />
                                    <Button type="submit">Submit</Button>
                                </form>
                            </div>
                        </div>
                    ))}
            </div>
        </>
    );
}
