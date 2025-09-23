import { FaPhoneAlt, FaEnvelope, FaFacebook, FaInstagram, FaPinterest, FaYoutube, FaHouzz, FaLinkedin, FaMedium, FaTwitter } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="bg-black text-white py-12 bg-opacity-90">
            <div className="max-w-7xl mx-auto px-6">
                {/* Main Footer Content - Flex for Larger Screens, Stack for Smaller Screens */}
                <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start space-y-8 lg:space-y-0">
                    {/* Logo Section */}
                    <div className="text-center lg:text-left flex flex-col items-center lg:items-start space-y-4 lg:space-y-2">
                        <div className="text-4xl font-bold">The Modern Circle</div>
                        <p className="text-lg text-gray-400">Connect Now !!!</p>
                    </div>

                    {/* Company Description Section */}
                    <div className="text-center lg:text-left lg:max-w-lg">
                        <p className="text-sm text-gray-400">
                            We are widely recognized for our modern design elements. Each project is a journey we embark on together,
                            blending innovation, elegance, and functionality to create spaces that truly feel like you. At The Modern Circle,
                            we believe great design isn’t just seen—it’s felt.
                        </p>
                    </div>

                    {/* Contact Section */}
                    <div className="flex flex-col items-center lg:items-start space-y-4">
                        <a href="tel:+91 9122150111" className="flex items-center space-x-3">
                            <FaPhoneAlt className="w-5 h-5 text-white" />
                            <span>+91 9122150111</span>
                        </a>
                        <a href="mailto:Info@themoderncircle.com" className="flex items-center space-x-3">
                            <FaEnvelope className="w-5 h-5 text-white" />
                            <span>Info@themoderncircle.com</span>
                        </a>
                    </div>
                </div>

                {/* Social Media Section */}
                <div className="flex flex-wrap justify-center lg:justify-start space-x-6 mt-8 gap-y-2">
                    {/* Social Media Icons */}
                    <a href="https://www.facebook.com/themoderncircle/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <FaFacebook className="w-8 h-8 text-white hover:text-blue-600 transition duration-300" />
                    </a>
                    <a href="https://www.instagram.com/themoderncircleindia/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <FaInstagram className="w-8 h-8 text-white hover:text-pink-500 transition duration-300" />
                    </a>
                    <a href="https://www.houzz.in/hznb/professionals/interior-designers-and-decorators/the-modern-circle-pfvwin-pf~474264149" target="_blank" rel="noopener noreferrer" aria-label="Houzz">
                        <FaHouzz className="w-8 h-8 text-white hover:text-green-600 transition duration-300" />
                    </a>
                    <a href="https://www.youtube.com/@themoderncircle" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                        <FaYoutube className="w-8 h-8 text-white hover:text-red-600 transition duration-300" />
                    </a>
                    <a href="https://in.pinterest.com/themoderncircle/" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
                        <FaPinterest className="w-8 h-8 text-white hover:text-red-500 transition duration-300" />
                    </a>
                    <a href="https://kreatecube.com/profile/the-modern-circle" target="_blank" rel="noopener noreferrer" aria-label="Kreatecube">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-white hover:text-gray-500 transition duration-300">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.5 3.75L12 1.5l7.5 2.25v7.5l-7.5 2.25-7.5-2.25V6z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.5 12v7.5l7.5 2.25 7.5-2.25V12" />
                        </svg>
                    </a>
                    <a href="https://in.linkedin.com/company/themoderncircle" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <FaLinkedin className="w-8 h-8 text-white hover:text-blue-700 transition duration-300" />
                    </a>
                    <a href="https://medium.com/@themoderncirclecare" target="_blank" rel="noopener noreferrer" aria-label="Medium">
                        <FaMedium className="w-8 h-8 text-white hover:text-black transition duration-300" />
                    </a>
                    <a href="https://x.com/ThemodernC34059" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                        <FaTwitter className="w-8 h-8 text-white hover:text-blue-500 transition duration-300" />
                    </a>
                </div>

                {/* Rights Reserved */}
                <div className="mt-8 text-center text-sm text-gray-400">
                    <p>&copy; {new Date().getFullYear()} The Modern Circle. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
