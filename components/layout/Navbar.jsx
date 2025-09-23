'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { usePathname } from 'next/navigation'; // Import usePathname
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname(); // Get the current route

    const handleScroll = useCallback(() => {
        setIsScrolled(window.scrollY > 50);
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    // Close the menu when the route changes
    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
                } ${isMenuOpen ? 'bg-white' : 'bg-transparent'
                }`}
        >
            <div className="container mx-auto flex justify-between items-center p-4">
                {/* Logo */}
                <div className="text-2xl font-semibold text-gray-800 ">
                    <Link href="/">
                        <Image
                            src="/assets/images/logo.png"
                            alt="Logo"
                            width={65}
                            height={45}
                            priority
                            className="h-12 w-12 sm:h-20 sm:w-20"
                        />
                    </Link>
                </div>

                {/* Desktop Menu (Centered) */}
                <div className="hidden lg:flex space-x-6 mx-auto">
                    <Link href="/services" className="text-gray-800 hover:text-blue-600 transition duration-300" prefetch={true}>Services</Link>
                    <Link href="/contact" className="text-gray-800 hover:text-blue-600 transition duration-300" prefetch={true}>Contact</Link>
                    <Link href="/customerstories" className="text-gray-800 hover:text-blue-600 transition duration-300" prefetch={true}>Customer Stories</Link>
                    <Link href="/partners" className="text-gray-800 hover:text-blue-600 transition duration-300" prefetch={true}>Partners</Link>
                    <Link href="/projects" className="text-gray-800 hover:text-blue-600 transition duration-300" prefetch={true}>Projects</Link>
                </div>

                {/* Schedule Button (Far Right) */}
                <div className="hidden lg:block">
                    <Link
                        href="https://wa.me/919122150111?text=Hello,%20I%20want%20to%20schedule%20a%20meeting."
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="flex items-center px-4 py-2 border border-transparent bg-primary text-white rounded-lg hover:bg-transparent hover:text-black hover:border-black transition">
                            <FaWhatsapp className="mr-2" />
                            Schedule a Meet
                        </button>
                    </Link>
                </div>

                {/* Hamburger Menu (Mobile) */}
                <div className="lg:hidden relative w-8 h-8">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="relative z-50 transition-all duration-300 w-8 h-8"
                    >
                        <Bars3Icon
                            className={`h-6 w-6 text-gray-800 transition-transform duration-300 ${isMenuOpen ? 'rotate-180 opacity-0' : 'rotate-0 opacity-100'
                                }`}
                        />
                        <XMarkIcon
                            className={`h-6 w-6 text-gray-800 absolute top-0 left-0 transition-transform duration-300 ${isMenuOpen ? 'rotate-0 opacity-100' : 'rotate-180 opacity-0'
                                }`}
                        />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-screen py-4 bg-white' : 'max-h-0 bg-transparent'
                    } ${isScrolled ? 'bg-white' : 'bg-transparent'} lg:hidden flex flex-col space-y-4 px-6 shadow-lg`}
            >
                <Link href="/services" className="text-gray-800 hover:text-blue-600 transition duration-300" prefetch={true}>Services</Link>
                <Link href="/contact" className="text-gray-800 hover:text-blue-600 transition duration-300" prefetch={true}>Contact</Link>
                <Link href="/customerstories" className="text-gray-800 hover:text-blue-600 transition duration-300" prefetch={true}>Customer Stories</Link>
                <Link href="/partners" className="text-gray-800 hover:text-blue-600 transition duration-300" prefetch={true}>Partners</Link>
                <Link href="/projects" className="text-gray-800 hover:text-blue-600 transition duration-300" prefetch={true}>Projects</Link>
                <Link
                    href="https://wa.me/919122150111?text=Hello,%20I%20want%20to%20schedule%20a%20meeting."
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button className="w-full text-center justify-center flex items-center px-4 py-2 border border-transparent bg-primary text-white rounded-lg hover:bg-transparent hover:text-black hover:border-black transition">
                        <FaWhatsapp className="mr-2" />
                        Schedule a Meet
                    </button>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
