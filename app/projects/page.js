"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// Category Content
const categoryContent = {
    Residential: {
        title: "Residential Spaces: Modern Living",
        description:
            "Discover the future of urban living with our intelligently designed residential spaces. Experience seamless smart home automation, eco-conscious architecture, and vibrant community-driven amenities. From cozy 3BHK apartments to luxurious villas, our residences redefine comfort, style, and sustainability. With IoT-enabled lighting, security, and climate control, every aspect of your home adapts to your lifestyle, ensuring a perfect blend of modernity and elegance."
    },
    Commercial: {
        title: "Commercial Spaces: Innovation & Adaptability",
        description:
            "Step into the next generation of commercial environments, where innovation meets sustainability. Our dynamic spaces cater to diverse business needs, featuring adaptive layouts, state-of-the-art security, and AI-driven analytics for optimal efficiency. Whether it's a retail hub, a corporate headquarters, or a vibrant shopping complex, our commercial spaces seamlessly integrate smart technology with energy-efficient design. Foster creativity, collaboration, and success in an environment built for the future."
    },
    "Office Space": {
        title: "Office Spaces: The Modern Era of Productivity",
        description:
            "Elevate workplace productivity with intelligently designed office spaces that prioritize efficiency and employee well-being. Our agile workspaces balance open collaboration areas with quiet, private zones, catering to all work styles. High-speed connectivity, AI-powered workstations, and smart meeting rooms streamline operations, while ergonomic furniture, natural lighting, and eco-friendly designs promote health and sustainability. Designed to inspire innovation, our offices set the benchmark for the future of work."
    }
};

// Images Data
const categories = {
    Residential: [
        "/assets/images/projects/residential/img1.webp",
        "/assets/images/projects/residential/img2.webp",
        "/assets/images/projects/residential/img3.webp",
        "/assets/images/projects/residential/img4.webp",
        "/assets/images/projects/residential/img5.webp",
        "/assets/images/projects/residential/img6.webp",
        "/assets/images/projects/residential/img7.webp",
        "/assets/images/projects/residential/img8.webp",
        "/assets/images/projects/residential/img9.webp",
        // "/assets/images/projects/residential/img10.webp",
        "/assets/images/projects/residential/img11.webp",
        "/assets/images/projects/residential/img12.webp"
    ],
    Commercial: [
        "/assets/images/projects/commercial/img1.webp",
        "/assets/images/projects/commercial/img2.webp",
        "/assets/images/projects/commercial/img3.webp",
        "/assets/images/projects/commercial/img4.webp",
        "/assets/images/projects/commercial/img5.webp",
        "/assets/images/projects/commercial/img6.webp",
        "/assets/images/projects/commercial/img7.webp",
        "/assets/images/projects/commercial/img8.webp",
        "/assets/images/projects/commercial/img9.webp",
        "/assets/images/projects/commercial/img10.webp"
    ],
    Hospital: [
        "/assets/images/projects/hospital/img1.webp",
        "/assets/images/projects/hospital/img2.webp",
        "/assets/images/projects/hospital/img3.webp",
        "/assets/images/projects/hospital/img4.webp",
        "/assets/images/projects/hospital/img5.webp",
        "/assets/images/projects/hospital/img6.webp",
        "/assets/images/projects/hospital/img7.webp",
        "/assets/images/projects/hospital/img8.webp",
        "/assets/images/projects/hospital/img9.webp",
        "/assets/images/projects/hospital/img10.webp",
        "/assets/images/projects/hospital/img11.webp"
    ],
    "Office Space": [
        "/assets/images/projects/office/img1.webp",
        "/assets/images/projects/office/img2.webp",
        "/assets/images/projects/office/img3.webp",
        "/assets/images/projects/office/img4.webp"
    ],
};



export default function ProjectGallery() {
    const [selectedCategory, setSelectedCategory] = useState("Residential");
    const [lightbox, setLightbox] = useState({ open: false, img: null, index: 0 });
    const images = categories[selectedCategory];

    const openLightbox = (img, index) => setLightbox({ open: true, img, index });
    const closeLightbox = () => setLightbox({ open: false, img: null, index: 0 });
    const nextImage = () => setLightbox({ open: true, img: images[(lightbox.index + 1) % images.length], index: (lightbox.index + 1) % images.length });
    const prevImage = () => setLightbox({ open: true, img: images[(lightbox.index - 1 + images.length) % images.length], index: (lightbox.index - 1 + images.length) % images.length });

    return (
        <section className="p-6 pt-32 bg-gray-100 min-h-screen mx-auto max-w-screen-2xl">
            <div className="flex flex-col items-start mb-8">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Projects</h2>
                <div className="flex flex-wrap gap-3">
                    {Object.keys(categories).map((category) => (
                        <button
                            key={category}
                            className={`px-5 py-2 rounded-lg text-lg font-medium transition-all ${selectedCategory === category ? "bg-gray-900 text-white" : "bg-gray-300 hover:bg-gray-400"}`}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            {categoryContent[selectedCategory] && (
                <div className="mb-6">
                    <h3 className="text-2xl font-semibold text-black">{categoryContent[selectedCategory].title}</h3>
                    <p className="text-gray-600 mt-2">{categoryContent[selectedCategory].description}</p>
                </div>
            )}

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {images.map((img, index) => (
                    <motion.div key={index} className="relative cursor-pointer overflow-hidden rounded-lg" whileHover={{ scale: 1.05 }} onClick={() => openLightbox(img, index)}>
                        <Image src={img} alt="Project Image" width={400} height={300} className="w-full h-48 object-cover rounded-lg shadow-lg" loading="lazy" />
                    </motion.div>
                ))}
            </div>

            {lightbox.open && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 px-4">
                    <button className="absolute top-4 right-4 text-white text-4xl" onClick={closeLightbox}><X className="w-8 h-8" /></button>
                    <button className="absolute left-4 text-white text-4xl md:left-6 z-10" onClick={prevImage}><ChevronLeft className="w-10 h-10" /></button>
                    <div className="relative w-full max-w-4xl flex justify-center">
                        <Image src={lightbox.img} alt="Full View" width={900} height={600} className="w-auto h-auto max-h-[80vh] object-contain rounded-lg" loading="lazy" />
                    </div>
                    <button className="absolute right-4 text-white text-4xl md:right-6" onClick={nextImage}><ChevronRight className="w-10 h-10" /></button>
                </div>
            )}
        </section>
    );
}
