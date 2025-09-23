'use client';

import { useState, useEffect } from "react";
import { FaStar, FaArrowLeft, FaArrowRight, FaUserCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import Image from "next/image";

const ratings = [
    {
        name: "Dr. Abhinav Shekhar",
        designation: "Oncologist, Artemis Hospital, Gurgaon",
        project: "Residential Project",
        feedback: "I wanted a home that was truly a retreat—comforting, modern, peaceful—especially after long, tiring days at the hospital. The Modern Circle didn’t just build me a house; they built me a home. What I appreciate is the quality and smoothness of how all was managed. There was no more seamless collaboration between the designers, construction team and project managers, keeping me in the loop at all times as well. They still even during and after the project was done need to know that things are working as they should. Really rare to find that level of care."
    },
    {
        name: "Dr. Shashi",
        designation: "Hematologist, Vedanta Hospital, Patna",
        project: "Hospital Design",
        feedback: "Making hospital design functional, efficient and most importantly comforting for patients is not an easy task. The Modern Circle got this concept spot on. Their team, from the very first start, were hands on making sure everything, from the layout to the lighting was designed to cater to doctors as well as patients. Their professionalism and commitment to meeting deadlines is what truly impressed me. They’ve been really supportive, even after I’m done, checking in to see if I need to make sure everything is running smoothly. That’s the level of commitment you want when you’re doing something so important."
    },
    {
        name: "Mr. Sourabh Rathore",
        designation: "Bureau Chief, CNN News18, Bihar",
        feedback: "As a person who has a very busy job, I wanted my house to be a haven where I could truly de-stress. The Modern Circle provided just that. They didn’t just sell me on aesthetics, they took the time to get to know my lifestyle and built a space that is perfectly me. The whole experience was seamless and hassle-free because their squad operated like a well-oiled machine. The designers, contractors, and project managers were in constant communication with each other, ensuring everything stayed on schedule. Even once I moved in, they continued to check to make sure that all was in order. That is rare, and it shows how much they care about their work."
    },
    {
        name: "Er. Chandrashekhar",
        designation: "Executive Engineer, Building Construction Department, Bihar",
        feedback: "I work in construction myself, and know first-hand how messy some projects can get, but the team at The Modern Circle took care of everything so smoothly. Their team worked seamlessly, they met deadlines, and the entire experience was effortless. They were honest every step of the way, communicated along the way, and most significantly, delivered on what they promised. Even after the work was done, they were proactive in ensuring everything worked as intended. That level of follow-up is what differentiates them."
    },
    {
        name: "Rohit Minku",
        designation: "Judge, Civil Court, Hajipur",
        feedback: "I wanted to have a home that really reflected my personality—simple, elegant, and timeless. That was possible with The MODERN CIRCLE, through which they did it with such professionalism. Everyone from meetings to painting made sure to do it just right. What I really love is how they accomplish all that. They were punctual, solved any problems quickly, and even now, they’re a phone call away if I need any service. It’s good to know I was working with people who care about their clients."
    },
    {
        name: "Aditya Dev Aggarwal",
        designation: "Businessman, Patna",
        feedback: "Home for me is an investment, and I wanted it to be masterful. The Modern Circle saw to it. They walk a fine line between luxury and functionality, and they completely over-delivered. What struck me most was how organised and efficient the entire thing was. I never had to fret about delays or miscommunication — the crew was always on top of everything. Even after I’d moved in, they stayed in touch to ensure everything was perfect. It’s rare to get this kind of commitment to a cause."
    },
    {
        name: "Aditya",
        designation: "Entrepreneur",
        feedback: "Opening a café was my dream, and Modern Circle supported me to realize it like I wanted it to be. They got my vision and created a space customers love. The work done by the design team was done in close communication with the construction team to ensure everything was perfect and achieved on time. What surprised me was how invested they were in the project — even now that the café is open, they still follow up to see if everything is good."
    }
];

export default function CustomerRatings() {
    const [selected, setSelected] = useState(0);
    const [expanded, setExpanded] = useState(false);

    const nextSlide = () => {
        setSelected((prev) => (prev + 1) % ratings.length);
        setExpanded(false);
    };

    const prevSlide = () => {
        setSelected((prev) => (prev - 1 + ratings.length) % ratings.length);
        setExpanded(false);
    };

    const handlers = useSwipeable({
        onSwipedLeft: nextSlide,
        onSwipedRight: prevSlide,
    });

    return (
        <section className="relative flex items-center justify-center h-screen px-4">
            <div className="absolute inset-0 w-full h-full">

                {/* Desktop Background */}
                <div className="hidden md:block">
                    <Image
                        src="/assets/images/contact-bg.webp"
                        alt="Modern Interior Design"
                        fill
                        quality={80}
                        priority
                        className="object-cover"
                    />
                </div>

                {/* Mobile Background */}
                <div className="block md:hidden">
                    <Image
                        src="/assets/images/contact-bg-2.webp"
                        alt="Modern Interior Design Mobile"
                        fill
                        quality={80}
                        priority
                        className="object-cover"
                    />
                </div>

                <div className="absolute inset-0 bg-black opacity-45" />
            </div>
            <div
                className="relative bg-white bg-opacity-30 backdrop-blur-md shadow-xl rounded-2xl p-10 md:px-20 max-w-3xl text-gray-800 text-center w-full border-l-8 border-gray-500"
                {...handlers}
            >
                <FaUserCircle className="text-6xl text-gray-500 mx-auto mb-4" />
                <motion.div>
                    <h3 className="text-2xl font-bold text-white">{ratings[selected].name}</h3>
                    <p className="text-lg text-gray-200">{ratings[selected].designation}</p>
                    <p className="text-md text-gray-700 mt-1">{ratings[selected].project}</p>
                    <div className="flex justify-center mt-2">
                        {[...Array(5)].map((_, index) => (
                            <FaStar key={index} className="text-yellow-300" />
                        ))}
                    </div>
                    <p className="mt-2 text-white">{expanded ? ratings[selected].feedback : ratings[selected].feedback.slice(0, 100) + '...'}</p>
                    <button
                        onClick={() => setExpanded(!expanded)}
                        className="mt-4 px-4 py-2 bg-gradient-to-r from-gray-500 to-gray-600 text-white rounded-lg shadow-lg hover:from-gray-400 hover:to-gray-500 transition-all"
                    >
                        {expanded ? "Read Less" : "Read More"}
                    </button>
                </motion.div>
                <div className="hidden md:block absolute top-1/2 left-4 transform -translate-y-1/2">
                    <FaArrowLeft className="text-gray-300 hover:text-gray-500 cursor-pointer" onClick={prevSlide} />
                </div>
                <div className="hidden md:block absolute top-1/2 right-4 transform -translate-y-1/2">
                    <FaArrowRight className="text-gray-300 hover:text-gray-500 cursor-pointer" onClick={nextSlide} />
                </div>
                <div className="flex justify-center mt-6 space-x-2">
                    {ratings.map((_, index) => (
                        <span key={index} className={`w-3 h-3 rounded-full ${index === selected ? 'bg-gray-500' : 'bg-gray-300'}`} />
                    ))}
                </div>
            </div>
        </section>

    );
}
