import { Button } from "@/components/ui/button";
import { StarIcon } from "lucide-react";

export default function HistoryProfile() {


    
    return (
        <>
            <div className="max-w-2xl flex justify-between mx-auto  px-4  sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <div className=" ">
                        <h3 className="font-semibold text-lg">
                            Acme Prism T-Shirt
                        </h3>
                        <div className="flex items-center gap-1.5 text-sm">
                            <div className="flex items-center gap-0.5">
                                <StarIcon className="w-4 h-4 fill-primary" />
                                <StarIcon className="w-4 h-4 fill-primary" />
                                <StarIcon className="w-4 h-4 fill-primary" />
                                <StarIcon className="w-4 h-4 fill-muted stroke-muted-foreground" />
                                <StarIcon className="w-4 h-4 fill-muted stroke-muted-foreground" />
                            </div>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            The Acme Prism T-Shirt is a stylish and comfortable
                            addition to any wardrobe. The unique prism design
                            adds a touch of flair to this classic tee.
                        </p>
                    </div>

                    <div className="grid gap-2.5">
                        <form className="grid gap-2.5">
                            <textarea
                                className="min-h-[100px]"
                                id="review-1"
                                placeholder="Write your review"
                            />
                            <Button type="submit">Submit</Button>
                        </form>
                    </div>
                </div>
                <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <div className="grid  ">
                        <h3 className="font-semibold text-lg">
                            Acme Prism T-Shirt
                        </h3>
                        <div className="flex items-center gap-1.5 text-sm">
                            <div className="flex items-center gap-0.5">
                                <StarIcon className="w-4 h-4 fill-primary" />
                                <StarIcon className="w-4 h-4 fill-primary" />
                                <StarIcon className="w-4 h-4 fill-primary" />
                                <StarIcon className="w-4 h-4 fill-muted stroke-muted-foreground" />
                                <StarIcon className="w-4 h-4 fill-muted stroke-muted-foreground" />
                            </div>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            The Acme Prism T-Shirt is a stylish and comfortable
                            addition to any wardrobe. The unique prism design
                            adds a touch of flair to this classic tee.
                        </p>
                    </div>

                    <div className="grid ">
                        <h3 className="font-semibold text-lg"></h3>
                        <form className="grid ">
                            <textarea
                                className="min-h-[100px]"
                                id="review-1"
                                placeholder="Write your review"
                            />
                            <Button type="submit">Submit</Button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
