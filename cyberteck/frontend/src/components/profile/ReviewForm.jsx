
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { axiosClient } from "../../api/axios";

export default function ReviewForm({ productId, userId }) {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const submitReviews = async (data) => {
        const formData = new FormData();
        formData.append("review", data.review);
        formData.append("product_id", productId);
        formData.append("user_id", userId);
        console.log("Form Data:", formData);

        

        try {
            const response = await axiosClient.post(
                "/api/reviews",
                formData
            );

            console.log("Response:", response);
            if (response.status === 201) {
                console.log("Review saved successfully!");
            }
        } catch (error) {
            console.error("Error saving review:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit(submitReviews)} className="grid gap-2.5">
            <input
                type="hidden"
                name="product_id"
                value={productId}
                {...register("product_id")}
            />
            <input
                type="hidden"
                name="user_id"
                value={userId}
                {...register("user_id")}
            />
            <textarea
                className="min-h-[100px]"
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
    );
}
