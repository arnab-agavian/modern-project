"use client";
import { useState } from "react";
import { FaUsers, FaDraftingCompass, FaCubes, FaTruckLoading, FaHome, FaBuilding } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ServicesPage() {
    const services = [
        { id: 1, title: "Meeting & Client Brief Understanding", description: "Understand client requirements to create personalized designs.", icon: <FaUsers />, bgColor: "bg-red-100" },
        { id: 2, title: "Space Planning & Conceptualization", description: "Strategic space planning for functionality and aesthetics.", icon: <FaDraftingCompass />, bgColor: "bg-green-100" },
        { id: 3, title: "3D Visualization & Design Development", description: "Bring concepts to life with high-quality 3D renderings.", icon: <FaCubes />, bgColor: "bg-blue-100" },
        { id: 4, title: "Execution & Project Delivery", description: "Seamless execution ensuring timely project completion.", icon: <FaTruckLoading />, bgColor: "bg-yellow-100" },
        { id: 5, title: "Residential 3BHK, 4BHK, 5BHK, Duplex Home", description: "Bespoke home designs tailored to your lifestyle.", icon: <FaHome />, bgColor: "bg-purple-100" },
        { id: 6, title: "Commercial Buildings", description: "Innovative commercial spaces designed for success.", icon: <FaBuilding />, bgColor: "bg-pink-100" },
    ];

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const [status, setStatus] = useState({ message: "", type: "" });
    const [loading, setLoading] = useState(false); // Loader state

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ message: "", type: "" });
        setLoading(true); // Show loader

        try {
            const response = await fetch("https://formspree.io/f/manqbrwg", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus({ message: "Your message has been sent successfully!", type: "success" });
                setFormData({ name: "", email: "", phone: "", message: "" });
            } else {
                setStatus({ message: "Oops! Something went wrong. Please try again.", type: "error" });
            }
        } catch (error) {
            setStatus({ message: "Network error! Please check your internet connection.", type: "error" });
        }

        setLoading(false); // Hide loader after response
    };

    return (
        <section className="relative w-full bg-white text-white max-w-screen-2xl mx-auto">
            {/* Video Banner */}
            <div className="relative w-full h-[50vh] sm:h-[80vh] md:h-[60vh] overflow-hidden">
                <video
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src="/assets/videos/services-banner.mp4" type="video/mp4" />
                    <source src="/assets/videos/services-banner.webm" type="video/webm" />
                </video>
                <div className="absolute inset-0 bg-black/30 flex items-center px-6 md:px-16 ">
                    <div className="max-w-lg">
                        <h1 className="text-4xl md:text-5xl font-semibold">Our Services</h1>
                        <p className="mt-4 text-lg">We bring creativity, elegance, and functionality to your living spaces. From conceptualization to execution, we ensure a seamless journey in designing and delivering your dream environment.</p>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="relative flex flex-col-reverse gap-16 lg:gap-0 md:flex-row px-6 md:px-16 py-16">
                {/* Services Section */}
                <div className="w-full md:w-1/2">
                    <div className="w-full text-center md:text-left mb-8 md:mb-6">
                        <h2 className="text-4xl font-semibold text-gray-900">Our Professional Services</h2>
                        <p className="text-lg text-gray-700 mt-2">Explore our range of services designed to bring your vision to life.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {services.map((service) => (
                            <motion.div
                                key={service.id}
                                className={`p-6 rounded-lg shadow-lg flex flex-col items-center text-center hover:shadow-2xl transition transform ${service.bgColor}`}
                                whileHover={{ scale: 1.1 }}
                            >
                                <div className="text-4xl text-gray-800 mb-4">{service.icon}</div>
                                <h4 className="text-xl font-semibold text-gray-900">{service.title}</h4>
                                <p className="text-gray-700 mt-2">{service.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Form Section */}
                <div className="relative w-full md:w-1/2 xl:w-2/3 flex justify-center -mt-32">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-full md:max-w-md lg:max-w-xl max-h-max">
                        <h2 className="text-black text-2xl mb-6">Fill in the form below and our team will reach out to you shortly.</h2>
                        <form className="text-black" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                className="w-full p-3 mb-3 bg-gray-200 rounded-lg"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                className="w-full p-3 mb-3 bg-gray-200 rounded-lg"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Your Phone Number"
                                className="w-full p-3 mb-3 bg-gray-200 rounded-lg"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />

                            <textarea
                                name="message"
                                placeholder="Your Message"
                                className="w-full p-3 mb-3 bg-gray-200 rounded-lg"
                                rows="4"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>

                            {/* Submit Button with Loader */}
                            <button
                                type="submit"
                                className="text-white w-full bg-blue-600 hover:bg-blue-500 p-3 rounded-lg font-semibold flex items-center justify-center"
                                disabled={loading}
                            >
                                {loading ? (
                                    <svg className="animate-spin h-5 w-5 mr-3 border-4 border-white border-t-transparent rounded-full" viewBox="0 0 24 24"></svg>
                                ) : (
                                    "Send Message"
                                )}
                            </button>
                        </form>

                        {/* Status Notification */}
                        {status.message && (
                            <div className={`mt-4 mx-auto w-fit px-4 py-2 rounded-lg text-white text-center shadow-md transition-opacity ${status.type === "success" ? "bg-green-500" : "bg-red-500"
                                }`}>
                                {status.message}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
