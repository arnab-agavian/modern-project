'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

const partners = [
    { id: 1, img: "/assets/images/partners/centuryply-logo-A57F89B0E5-seeklogo.com.png", alt: "Partner 1" },
    { id: 2, img: "/assets/images/partners/greenply-logo.png", alt: "Partner 2" },
    { id: 3, img: "/assets/images/partners/jaguar.webp", alt: "Partner 3" },
    { id: 4, img: "/assets/images/partners/kohler.png", alt: "Partner 4" },
    { id: 5, img: "/assets/images/partners/Laminate.jpeg", alt: "Partner 5" },
    { id: 6, img: "/assets/images/partners/hafele.png", alt: "Partner 6" },
    { id: 7, img: "/assets/images/partners/hybec.png", alt: "Partner 7" }
];

export default function PartnersPage() {
    return (
        <section className="relative h-screen flex flex-col items-center justify-center bg-dark-gray px-6 py-12">
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
            <h2 className="lg:text-5xl text-4xl font-semibold text-white mb-12 drop-shadow-lg">Our Partners</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-5xl">
                {partners.map((partner) => (
                    <motion.div
                        key={partner.id}
                        className="relative bg-white bg-opacity-20 backdrop-blur-md p-6 rounded-xl flex items-center justify-center shadow-lg transition-transform transform hover:scale-105"
                        whileHover={{ scale: 1.05 }}
                    >
                        <Image
                            src={partner.img}
                            alt={partner.alt}
                            width={120}
                            height={60}
                            className="object-contain"
                        />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
