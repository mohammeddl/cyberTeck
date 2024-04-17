import {  useRef } from "react";
import { Text } from "../atoms/Text";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card } from "../molecules/Card";
import { Button } from "../atoms/Button";
import {  CaretLeft, CaretRight } from "@phosphor-icons/react";
import { IconButton } from "@material-tailwind/react";
import { ShoppingCart } from "lucide-react";


export default function Hero() {
    const sliderRef = useRef(null);

    const next = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    };

    const previous = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    dots: false,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                },
            },
        ],
    };


    

    return (
        <section className="w-full h-auto flex flex-col items-center justify-center relative lg:px-24 md:px-20 px-6 mb-20">
            {/* Controllers  */}
            <div className="mt- w-full flex justify-end gap-5 items-center md:px-6 px-3">
                <Button
                    onClick={previous}
                    className="cursor-pointer outline-none border-none bg-color2/30 text-color3 hover:bg-color2 p-2 rounded-full"
                    type="button"
                >
                    <CaretLeft size={18} color="currentColor" />
                </Button>
                <Button
                    onClick={next}
                    className="cursor-pointer outline-none border-none bg-color2/30 text-color3 hover:bg-color2 p-2 rounded-full"
                    type="button"
                >
                    <CaretRight size={18} color="currentColor" />
                </Button>
            </div>

            {/* Slides  */}
            <div className="w-full h-auto mt-4">
                <Slider
                    ref={(slider) => (sliderRef.current = slider)}
                    {...settings}
                >
                    {cardOffer.map((cardOffer, index) => (
                        <div key={index} className="md:px-6 px-3">
                            <Card
                                cardClass="overflow-hidden shadow-md rounded-lg cursor-pointer group"
                                imageAlt={cardOffer.image}
                                imageSrc={cardOffer.image}
                                imageWrapperClass="w-full h-[250px] overflow-hidden"
                                cover="group-hover:scale-125 transition duration-500 ease"
                                textWrapperClass="flex flex-col gap-4 w-full px-5 py-5"
                            >
                                <div className="flex justify-between items-center">
                                    <Text
                                        as="h4"
                                        className="text-base font-medium text-color3"
                                    >
                                        {cardOffer.title}
                                    </Text>
                                    <Text
                                        as="small"
                                        className=" text-color3 font-light text-sm"
                                    >
                                        {cardOffer.duration}
                                    </Text>
                                </div>
                                <div className="w-full flex gap-4 items-center justify-between text-color3">
                                    <div className="flex gap-4">
                                    <ShoppingCart size={28} />
                                        <Text
                                            as="p"
                                            className=" text-color3 font-light text-base"
                                        >
                                            {/* {cardOffer.categories.categoryName} */}
                                        </Text>
                                    </div>
                                    <IconButton
                                        size="sm"
                                        color="red"
                                        variant="text"
                                        className=" "
                                        // onClick={() => addToList(cardOffer.id)}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="h-6 w-6"
                                        >
                                            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                                        </svg>
                                    </IconButton>
                                </div>
                            </Card>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
}

const cardOffer = [
    {
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202306/1219/1c7b75d8ed9271516546560d219ad0b22ee0a263b4537bd8.png",
        title: "spider man 2",
        duration: "2 days",
        id: 1,
    },
    {
        image: "data:image/jpeg;base64,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",
        title: "call of duty",
        duration: "2 days",
        id: 2,
    },
    {
        image:"data:image/jpeg;base64,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",
        title: "playstation plus",
        duration: "2 days",
        id: 3,
    }
];
