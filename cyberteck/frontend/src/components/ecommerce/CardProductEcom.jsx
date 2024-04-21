
import { Button } from "@/components/ui/button"

export default function CardProductEcom() {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-sm mx-auto">
      <div className="aspect-square bg-gray-100 overflow-hidden">
        <img
          alt="Gaming Headphones"
          className="object-cover w-full h-full"
          height="400"
          src="/placeholder.svg"
          style={{
            aspectRatio: "400/400",
            objectFit: "cover",
          }}
          width="400"
        />
      </div>
      <div className="p-6 space-y-4">
        <h3 className="text-2xl font-bold">Acme Gaming Headphones</h3>
        <p className="text-gray-500 text-sm">
          Immerse yourself in the ultimate gaming experience with our Acme Gaming Headphones. Featuring advanced audio
          technology and a comfortable, durable design.
        </p>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold">$79</span>
          <div className="flex gap-2">
            <Button size="lg" variant="outline">
              Add to Cart
            </Button>
            <Button size="lg">Buy Now</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

