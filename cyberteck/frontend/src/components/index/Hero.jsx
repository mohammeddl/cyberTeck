import {  useRef } from "react";
import { Text } from "../atoms/Text";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card } from "../molecules/Card";
import { Button } from "../atoms/Button";
import { AirplaneTilt, CaretLeft, CaretRight } from "@phosphor-icons/react";
import { IconButton } from "@material-tailwind/react";
import { axiosClient } from "../../api/axios";


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
        <section className="w-full h-auto flex flex-col items-center justify-center relative lg:px-24 md:px-20 px-6 my-20">
            <Text
                as="p"
                className="font-light text-base text-color3/80 tracking-widest"
            >
                {TopDestinationTexts.firstText}
            </Text>

            <Text
                as="h2"
                className="md:text-4xl text-2xl font-medium capitalize text-color3"
            >
                {TopDestinationTexts.secondText}
            </Text>

            {/* Controllers  */}
            <div className="mt-12 w-full flex justify-end gap-5 items-center md:px-6 px-3">
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
                                imageSrc={
                                    "http://localhost:8000/images/" +
                                    cardOffer.image
                                }
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
                                        <AirplaneTilt
                                            size={20}
                                            color="currentColor"
                                        />
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
                                        onClick={() => addToList(cardOffer.id)}
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
        imaga: "test.png",
        title: "test",
        duration: "2 days",
        id: 1,
    },
    {
        imaga: "test.png",
        title: "test",
        duration: "2 days",
        id: 2,
    }
];
