import { Button } from "@/components/ui/button";

export default function CardProductEcom({ product  }) {

    return (
        <div  className="bg-white rounded-lg shadow-lg overflow-hidden   w-full max-w-sm mx-auto">
            <div className="aspect-square bg-gray-100 overflow-hidden">
                <img
                    alt="Gaming Headphones"
                    className="object-cover w-full h-full"
                    height="200"
                    src={"http://localhost:8000/images/" + product.image}
                    style={{
                        aspectRatio: "200/200",
                        objectFit: "cover",
                    }}
                    width="400"
                />
            </div>
            <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold">{product.name}</h3>
                <p className="text-gray-500 text-sm">{product.description}</p>
                <p>{product.categories.category_name}</p>
                <div className="flex items-center px-4 justify-between">
                    <span className="text-2xl font-bold">
                        {product.price + "USD"}
                    </span>
                    <div className="flex gap-2">
                        <Button variant="outline">
                            Add to Cart
                        </Button>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}
