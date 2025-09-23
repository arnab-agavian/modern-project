"use client";
import { MapPin, Mail, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin, FaPinterest, FaHouzz, FaTwitter } from "react-icons/fa";
import { MdOutlineWeb } from "react-icons/md";
import { FaMedium } from "react-icons/fa";

const socialLinks = [
    { id: 1, name: "Facebook", url: "https://www.facebook.com/themoderncircle/", icon: <FaFacebook />, color: "#1877F2" },
    { id: 2, name: "Instagram", url: "https://www.instagram.com/themoderncircleindia/", icon: <FaInstagram />, color: "#E4405F" },
    { id: 3, name: "Houzz", url: "https://www.houzz.in/hznb/professionals/interior-designers-and-decorators/the-modern-circle-pfvwin-pf~474264149", icon: <FaHouzz />, color: "#4CAF50" },
    { id: 4, name: "YouTube", url: "https://www.youtube.com/@themoderncircle", icon: <FaYoutube />, color: "#FF0000" },
    { id: 5, name: "Pinterest", url: "https://in.pinterest.com/themoderncircle/", icon: <FaPinterest />, color: "#E60023" },
    { id: 6, name: "KreateCube", url: "https://kreatecube.com/profile/the-modern-circle", icon: <MdOutlineWeb />, color: "#FF5722" },
    { id: 7, name: "LinkedIn", url: "https://in.linkedin.com/company/themoderncircle", icon: <FaLinkedin />, color: "#0077B5" },
    { id: 8, name: "Twitter", url: "https://x.com/ThemodernC34059", icon: <FaTwitter />, color: "#1DA1F2" },
    { id: 9, name: "Medium", url: "https://medium.com/@themoderncirclecare", icon: <FaMedium />, color: "#000000" },
];

export default function ContactPage() {
    return (
        <section className="relative w-full h-screen flex items-center justify-center">
            {/* Background with Gradient Overlay */}
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

            {/* Contact Card */}
            <div className="relative z-10 w-full max-w-3xl bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg border border-white/20 m-3 lg:mx-0 ">
                <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">Get in Touch</h1>

                <div className="space-y-6 text-white text-lg">
                    <div className="flex items-center space-x-4">
                        <MapPin className="text-yellow-400 w-6 h-6 min-w-[24px] min-h-[24px]" />
                        <p>212B, The modern circle, Sandro marg, near S.k puri park,Boring road, Patna, 800001</p>
                    </div>

                    <div className="flex items-center space-x-4">
                        <Mail className="text-blue-300 w-6 h-6 min-w-[24px] min-h-[24px]" />
                        <a href="mailto:info@themoderncircle.com" className="hover:underline">
                            Info@themoderncircle.com
                        </a>
                    </div>

                    <div className="flex items-center space-x-4">
                        <Phone className="text-green-300 w-6 h-6 min-w-[24px] min-h-[24px]" />
                        <a href="tel:+919876543210" className="hover:underline">
                            +91 9122150111
                        </a>
                    </div>

                    {/* Social Media Buttons */}
                    <div className="flex flex-wrap justify-center gap-4 mt-6">
                        {socialLinks.map((social) => (
                            <Link key={social.id} href={social.url} target="_blank">
                                <span
                                    className="flex items-center space-x-2 text-white text-lg px-5 py-2 rounded-full transition-all duration-300"
                                    style={{
                                        backgroundColor: "#444",
                                        transition: "background-color 0.3s ease-in-out, transform 0.3s",
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor = social.color;
                                        e.currentTarget.style.transform = "scale(1.1)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor = "#444";
                                        e.currentTarget.style.transform = "scale(1)";
                                    }}
                                >
                                    {social.icon}
                                    <span>{social.name}</span>
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
