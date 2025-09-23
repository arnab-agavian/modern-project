import Link from "next/link";
import React from "react";

export default function HeroSectionTwo() {
    return (
        <section className="relative w-full h-auto flex flex-col lg:flex-row items-center justify-center px-6 py-12 lg:px-16 max-w-screen-2xl mx-auto">
            {/* Text Section (Left) */}
            <div className="relative z-10 text-center lg:text-left max-w-2xl lg:max-w-xl text-black p-8">
                <h1 className="text-3xl lg:text-4xl font-semibold mb-8">
                    Crafting Elegant Spaces
                </h1>
                <p className="text-lg md:text-xl mb-6 leading-relaxed">
                    At The Modern Circle, we blend creativity and functionality to design
                    interiors that inspire. With a passion for modern aesthetics and
                    exceptional craftsmanship, we bring your vision to life.
                </p>
                <Link href={"/projects"} prefetch={true} className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 hover:text-black transition-all duration-300">
                    Explore More
                </Link>
            </div>

            {/* Video Section (Right) */}
            <div className="relative w-full sm:w-1/2 sm:h-auto lg:w-1/2 h-[30vh] lg:h-auto overflow-hidden">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src="/assets/videos/hero-2.mp4" type="video/mp4" />
                    <source src="/assets/videos/hero-2.webm" type="video/webm" />
                </video>
            </div>
        </section>
    );
}
