"use client";

import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import siteContent from "@/config/siteContent";

const Carousel: React.FC = () => {
    const slides = siteContent.heroSlides;

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
        <div className="w-full p-0 relative">
            <Slider {...settings}>
                {slides.map((slide) => (
                    <div key={slide.id} className="relative h-[550px] lg:h-[620px]">
                        <Image
                            src={slide.img}
                            alt={slide.title}
                            fill
                            priority={slide.id === 1}
                            sizes="100vw"
                            unoptimized
                            className="object-cover"
                        />
                        {/* Dark Gradient Overlay */}
                        <div
                            className="absolute inset-0 z-[1]"
                            style={{
                                background: "linear-gradient(to bottom, rgba(51,5,42,0.45) 0%, rgba(0,0,0,0.75) 100%)"
                            }}
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-center z-[2] pb-12 px-4">
                            <div className="p-3 max-w-[900px] text-center">
                                <h4
                                    className="text-[#F566CE] uppercase font-bold tracking-[4px] mb-2 text-xs md:text-sm"
                                    style={{
                                        textShadow: "0 2px 4px rgba(0,0,0,0.8)"
                                    }}
                                >
                                    {slide.subtitle}
                                </h4>
                                <h1
                                    className="font-heading text-[2.8rem] md:text-[3.8rem] font-extrabold leading-[1.12] text-white mb-4 md:mb-5 max-w-4xl mx-auto"
                                    style={{
                                        textShadow: "3px 3px 6px rgba(0,0,0,0.8)"
                                    }}
                                >
                                    {slide.title}
                                </h1>
                                <p className="text-white/90 text-sm md:text-lg mb-6 max-w-2xl mx-auto drop-shadow font-medium leading-relaxed">
                                    {slide.description}
                                </p>
                                <Link
                                    href={slide.ctaLink}
                                    className="inline-block font-bold text-white bg-gradient-to-r from-[#E619B0] to-[#8A0F6B] hover:from-[#C11292] hover:to-[#6B0A52] py-3.5 px-8 text-sm md:text-base rounded-full no-underline transition-all shadow-xl hover:scale-105"
                                >
                                    {slide.ctaText}
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
            className={`absolute top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-[#33052A]/40 text-white transition-all duration-200 hover:scale-110 hover:bg-[#E619B0] focus:outline-none ${isPrevious ? "left-4" : "right-4"}`}
        >
            <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d={isPrevious ? "m15 18-6-6 6-6" : "m9 18 6-6-6-6"} />
            </svg>
        </button>
    );
};

export default Carousel;
