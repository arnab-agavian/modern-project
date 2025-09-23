import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const projects = [
    {
        id: 1,
        title: "Home Design",
        description: "Timeless exteriors that blend beauty and functionality.",
        image: "/assets/images/projects/home-design.webp",
    },
    {
        id: 2,
        title: "Kitchen Interiors",
        description: "Crafting spaces where style meets culinary creativity.",
        image: "/assets/images/projects/kitchen.webp",
    },
    {
        id: 3,
        title: "Commercial Buildings",
        description: "Modern architecture redefining business spaces.",
        image: "/assets/images/projects/commercial.webp",
    },
    {
        id: 4,
        title: "Home Décor",
        description: "Elegant interiors tailored for comfort and luxury.",
        image: "/assets/images/projects/home-decor.webp",
    },
];

export default function ProjectsSection() {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [isLargeScreen, setIsLargeScreen] = useState(false);

    // ✅ Track screen size dynamically
    useEffect(() => {
        const checkScreenSize = () => setIsLargeScreen(window.innerWidth >= 1024);

        checkScreenSize(); // Run on mount
        window.addEventListener("resize", checkScreenSize); // Listen for resize
        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    return (
        <section className="py-16">
            <div className="container mx-auto px-6">

                {/* Wrapper for project rows */}
                <div className="flex flex-col gap-1">
                    {[0, 2].map((rowIndex) => (
                        <div key={rowIndex} className="flex flex-col lg:flex-row gap-1">
                            {[0, 1].map((colIndex) => {
                                const index = rowIndex + colIndex;
                                const project = projects[index];

                                const isHovered = hoveredIndex === index;
                                const isSiblingHovered =
                                    hoveredIndex !== null && Math.floor(hoveredIndex / 2) === Math.floor(index / 2);

                                return (
                                    <div
                                        key={project.id}
                                        className="relative h-64 md:h-80 rounded-sm overflow-hidden transition-all duration-500 ease-in-out"
                                        onMouseEnter={() => setHoveredIndex(index)}
                                        onMouseLeave={() => setHoveredIndex(null)}
                                        style={{
                                            width: isLargeScreen
                                                ? isHovered
                                                    ? "70%"
                                                    : isSiblingHovered
                                                        ? "30%"
                                                        : "50%"
                                                : "100%",
                                            transition: "width 0.5s ease-in-out",
                                        }}
                                    >
                                        {/* Background Image */}
                                        <Image loading="lazy" src={project.image} alt={project.title} fill className="object-cover" />

                                        {/* Overlay Content */}
                                        <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-start p-6">
                                            <h3 className="text-4xl font-semibold text-white">{project.title}</h3>
                                            <p className="text-white mt-2">{project.description}</p>
                                            <Link href={`/projects`} prefetch={true}>
                                                <button className="mt-4 py-2 bg-transparent text-white transition-all">
                                                    Know More →
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
