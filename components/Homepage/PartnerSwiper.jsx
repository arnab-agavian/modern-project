import Image from "next/image";

const partners = [
    { id: 1, img: "/assets/images/partners/centuryply-logo-A57F89B0E5-seeklogo.com.png", alt: "Partner 1" },
    { id: 2, img: "/assets/images/partners/greenply-logo.png", alt: "Partner 2" },
    { id: 3, img: "/assets/images/partners/jaguar.webp", alt: "Partner 3" },
    { id: 4, img: "/assets/images/partners/kohler.png", alt: "Partner 4" },
    { id: 5, img: "/assets/images/partners/Laminate.jpeg", alt: "Partner 5" },
    { id: 6, img: "/assets/images/partners/hafele.png", alt: "Partner 6" },
    { id: 7, img: "/assets/images/partners/hybec.png", alt: "Partner 7" }
];

export default function PartnersSwiper() {
    return (
        <div className="w-full bg-gradient-to-r from-gray-100 via-gray-300 to-gray-100 py-16 overflow-hidden">
            <div className="max-w-5xl lg:max-w-screen-2xl mx-auto">
                <h2 className="text-center text-black text-3xl lg:text-4xl font-semibold mb-12 lg:mb-18">
                    Our Trustworthy Business Partners & Suppliers
                </h2>

                {/* Scrolling Container */}
                <div className="relative w-full overflow-hidden">
                    <div className="marquee-wrapper">
                        <div className="marquee flex min-w-max">
                            {/* Duplicate logos for seamless looping */}
                            {[...partners, ...partners].map((partner, index) => (
                                <div key={index} className="mx-6 lg:mx-16 flex-shrink-0">
                                    <Image
                                        src={partner.img}
                                        alt={partner.alt}
                                        width={150}
                                        height={75}
                                        className="h-16 md:h-20 lg:h-32 object-contain transition-all duration-300"
                                        loading="lazy"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
