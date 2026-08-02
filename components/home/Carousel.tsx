import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Slide } from "@/models/Slide";
import Link from "next/link";
import siteConfig from "@/app/siteConfig";

export const slides: Slide[] = [
    {
        id: 2,
        img: "/img/carousel-2.jpeg",
        title: "Hotel Reservations",
        description: "Relax in top-notch hotels as you enjoy breathtaking sunsets and delicious local cuisine along Lake Victoria or in Kampala.",
        link: "#special-offer",
    },
    {
        id: 3,
        img: "/img/antelope.jpeg",
        title: "Wildlife Safaris",
        description: "Discover Uganda's remarkable wildlife on thoughtfully planned safari experiences.",
        link: "#special-offer",
    },
    {
        id: 4,
        img: "/img/elephant-crowd.jpeg",
        title: "Big Game Encounters",
        description: "Witness magnificent elephants and other iconic wildlife in their natural habitat.",
        link: "#special-offer",
    },
    {
        id: 5,
        img: "/img/packages/chimpanzee-kibale-park.jpg",
        title: "Chimpanzee Tracking",
        description: "Explore Kibale's lush forests with memorable primate-tracking adventures.",
        link: "#special-offer",
    },
    {
        id: 6,
        img: "/img/packages/gorilla-trekking.jpg",
        title: "Gorilla Trekking",
        description: "Experience the wonder of meeting mountain gorillas in Uganda's wild landscapes.",
        link: "#special-offer",
    },
];

const Carousel: React.FC = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        pauseOnHover: false,
        prevArrow: <CarouselArrow direction="previous" />,
        nextArrow: <CarouselArrow direction="next" />,
    };

    return (
        <div className="w-full p-0">
            <Slider {...settings}>
                {slides.map((slide) => (
                    <div key={slide.id} className="relative h-[600px]">
                        <Image
                            src={slide.img}
                            alt={slide.title}
                            fill
                            sizes="100vw"
                            unoptimized
                            className="object-cover"
                        />
                        {/* Gradient overlay for better text readability */}
                        <div
                            className="absolute top-0 left-0 right-0 bottom-0 z-[1]"
                            style={{
                                background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.6))'
                            }}
                        />
                        <div
                            className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center z-[2]"
                        >
                            <div className="p-3 max-w-[900px]">
                                <h4
                                    className="text-white uppercase mb-0 md:mb-3 text-lg"
                                    style={{
                                        letterSpacing: '3px',
                                        textShadow: '2px 2px 4px rgba(0,0,0,0.8)'
                                    }}
                                >
                                    {siteConfig.company.name} - Uganda
                                </h4>
                                <h1
                                    className="text-[3.5rem] max-[1200px]:text-[calc(1.475rem_+_2.7vw)] font-light leading-[1.2] text-white mb-0 md:mb-4"
                                    style={{
                                        textShadow: '3px 3px 6px rgba(0,0,0,0.8)',
                                        fontWeight: 'bold'
                                    }}
                                >
                                    {slide.title}
                                </h1>
                                <Link
                                    href={slide.link || "#special-offer"}
                                    className="inline-block font-normal text-center align-middle select-none bg-[#7AB730] border border-[#7AB730] text-white py-[0.375rem] px-[0.75rem] md:py-3 md:px-5 text-base leading-[1.5] mt-2 no-underline hover:bg-[#669928] hover:border-[#5f8f25] hover:text-white transition-[color_0.15s_ease-in-out,background-color_0.15s_ease-in-out,border-color_0.15s_ease-in-out,box-shadow_0.15s_ease-in-out]"
                                    style={{
                                        boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
                                    }}
                                >
                                    Book Now
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

interface ArrowProps {
    direction: "previous" | "next";
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const CarouselArrow: React.FC<ArrowProps> = ({ direction, onClick }) => {
    const isPrevious = direction === "previous";

    return (
        <button
            type="button"
            aria-label={`${isPrevious ? "Previous" : "Next"} slide`}
            onClick={onClick}
            className={`absolute top-1/2 z-10 flex h-20 w-20 -translate-y-1/2 items-center justify-center rounded-full bg-transparent text-6xl font-light leading-none text-white transition-all duration-200 hover:scale-110 hover:bg-[#212121]/80 focus:outline-none focus:ring-0 ${isPrevious ? "left-5" : "right-5"}`}
        >
            <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-11 w-11"
                fill="none"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d={isPrevious ? "m15 18-6-6 6-6" : "m9 18 6-6-6-6"} />
            </svg>
        </button>
    );
};

export default Carousel;
