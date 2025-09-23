import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {

    return (
        <section className="relative mx-auto max-w-screen-2xl w-full h-auto min-h-screen flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-24 lg:gap-20 text-white px-6 md:px-12 lg:px-24 py-12 lg:py-0">
            {/* Background Image with Dark Overlay */}
            <div className="absolute inset-0 w-full h-full bg-black/95">
                <Image
                    src="/assets/images/hero-bg.webp"
                    alt="Modern Interior Design"
                    fill
                    quality={80}
                    className="opacity-65 object-cover"
                    loading="lazy"
                />
            </div>

            {/* Content Section (Heading, Paragraph, Button) */}
            <div className="mt-16 lg:mt-0 relative z-10 max-w-lg text-center lg:text-left mb-12 lg:mb-0">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Building Modern Spaces
                </h1>
                <p className="text-lg md:text-xl text-gray-300 mb-6">
                    At The Modern Circle, we bring your vision to life through expert
                    interior design and architectural solutions. With over 10 years of
                    experience in creating elegant, modern, and functional spaces, we
                    have successfully completed 32+ projects and served more than 8000
                    happy customers. Our commitment to modern design, quality, and
                    customer satisfaction makes us a trusted name in the industry.
                </p>
                <Link
                    href="/services"
                    className="inline-block px-6 py-3 text-lg font-medium bg-white text-black rounded-full shadow-md hover:bg-gray-200 transition duration-300 animate-pulse"
                    prefetch={true}
                >
                    Know More
                </Link>
            </div>

            {/* Videos Section */}
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center w-full lg:w-1/2 lg:max-w-6xl opacity-85">
                {/* Top Video (Increased Size for lg screens) */}
                <div className="absolute -top-14 lg:-top-20  left-1/2 transform -translate-x-1/2 w-[200px] md:w-[250px] lg:w-[300px] border-[5px] lg:border-[10px] border-white/70 rounded-lg shadow-lg overflow-hidden">
                    <video className="w-full" autoPlay loop muted playsInline>
                        <source src="/assets/videos/v5.mp4" type="video/mp4" />
                    </video>
                </div>

                {/* Bottom Two Videos (More margin for spacing) */}
                <div className="flex gap-6 w-full justify-center mt-12 lg:mt-20">
                    <div className="w-[250px] md:w-[300px] lg:w-[400px] border-[5px] lg:border-[10px] border-white/70 rounded-lg shadow-lg overflow-hidden">
                        <video className="w-full" autoPlay loop muted playsInline >
                            <source src="/assets/videos/v7.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <div className="w-[250px] md:w-[300px] lg:w-[400px] border-[5px] lg:border-[10px] border-white/70 rounded-lg shadow-lg overflow-hidden">
                        <video className="w-full" autoPlay loop muted playsInline>
                            <source src="/assets/videos/v6.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
        </section>
    );
}
