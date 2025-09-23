'use client';

import React from 'react';
import '..//../public/assets/styles/Blogs.css'
import Link from "next/link";
import Image from "next/image";
import { motion } from 'framer-motion';



export const Blog1 = () => {
  return (
    <>
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
                <h1 className="text-4xl md:text-6xl font-bold mb-4" style={{fontSize:'3rem'}}>
                    NABH-Compliant Hospital Construction for Modern Healthcare
                </h1>
                <p className="text-lg md:text-xl text-gray-300 mb-6">
                    A well-thought-out healthcare facility design and build process ensures that patients,families, and caregivers experience comfort, safety, and trust right from the reception area.
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
                    {/* <video className="w-full" autoPlay loop muted playsInline>
                        <source src="/assets/videos/v5.mp4" type="video/mp4" />
                    </video> */}
                    <img className="w-full" src="/assets/images/blogs/blog1-img1.jpg" alt="blog1-img1.png" />
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
        <section className="relative w-full h-fit flex p-2">
            {/* Background with Gradient Overlay */}
            <div className="absolute inset-0 w-full h-full" style={{ zIndex:'-1'}}>

                {/* Desktop Background */}
                {/* <div className="hidden md:block">
                    <Image
                        src="/assets/images/contact-bg.webp"
                        alt="Modern Interior Design"
                        fill
                        quality={80}
                        priority
                        className="object-cover"
                    />
                </div> */}

                {/* Mobile Background */}
                {/* <div className="block md:hidden">
                    <Image
                        src="/assets/images/contact-bg-2.webp"
                        alt="Modern Interior Design Mobile"
                        fill
                        quality={80}
                        priority
                        className="object-cover"
                    />
                </div> */}

                <div className="absolute inset-0 bg-black opacity-45" style={{backgroundColor: 'rgba(255, 255, 255, 1)', zIndex:'-1'}} />
            </div>
            <section className='blog-section w-full h-full'>
                <div className='blog-content'>
                    <div className='blog-heading' style={{backgroundImage: "url('/assets/images/contact-bg.webp')", padding:'1rem', borderRadius:'14px'}}>
                        <h1>Designing Healing Spaces: NABH-Compliant Hospital Construction for Modern Healthcare</h1>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                            <p className='mb-2 text-gray-500'>Walking into a hospital should feel reassuring, not overwhelming. A well-thought-out healthcare facility
                            design and build process ensures that patients, families, and caregivers experience comfort, safety, and trust
                            right from the reception area</p>
                            <p className='text-gray-500'>The photo above is a perfect example of how thoughtful design transforms healthcare spaces. Clean lines,
                            natural light, warm wooden tones, and intuitive layouts create a welcoming environment while supporting
                            efficiency and compliance.</p>
                        </div>
                    </div>
                    <div className='blog-body'>
                        <div className='blog-body-inner'>
                            <div className='blog-body-inner-one'>
                                <h2 className='sub-heading mb-2'>Why NABH Compliance Matters in Hospital Design</h2>
                                <p className='text-gray-500 mb-1'>When planning a hospital, design isn’t only about aesthetics — it’s about patient safety, operational efficiency, and regulatory standards. This is where NABH-compliant hospital construction comes in.</p>
                                <p className='text-gray-500'>The National Accreditation Board for Hospitals & Healthcare Providers (NABH) sets strict benchmarks for quality, safety, and infrastructure. A NABH hospital design ensures that:</p>

                                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-2 gap-6 w-full mt-6">
                                    <motion.div
                                        className="relative text-center bg-white bg-opacity-20 backdrop-blur-md p-6 rounded-xl flex items-center justify-center shadow-lg transition-transform transform hover:scale-105"
                                        whileHover={{ scale: 1.05 }}
                                        style={{backgroundColor: "#87ceeb54"}}
                                    >
                                        <p className='text-black-500'>Patient flow is seamless, reducing stress and confusion</p>
                                    </motion.div>

                                    <motion.div
                                        className="relative text-center bg-white bg-opacity-20 backdrop-blur-md p-6 rounded-xl flex items-center justify-center shadow-lg transition-transform transform hover:scale-105"
                                        whileHover={{ scale: 1.05 }}
                                        style={{backgroundColor: "rgb(234, 215, 248)"}}
                                    >
                                        <p className='text-black-500'>Infection control is built into the infrastructure.</p>
                                    </motion.div>

                                    <motion.div
                                        className="relative text-center bg-white bg-opacity-20 backdrop-blur-md p-6 rounded-xl flex items-center justify-center shadow-lg transition-transform transform hover:scale-105"
                                        whileHover={{ scale: 1.05 }}
                                        style={{backgroundColor: "rgba(235, 135, 135, 0.33)"}}
                                    >
                                        <p className='text-black-500'>Accessibility is prioritized, from wheelchair-friendly corridors to emergency-ready layouts.</p>
                                    </motion.div>

                                    <motion.div
                                        className="relative text-center bg-white bg-opacity-20 backdrop-blur-md p-6 rounded-xl flex items-center justify-center shadow-lg transition-transform transform hover:scale-105"
                                        whileHover={{ scale: 1.05 }}
                                        style={{backgroundColor: "#87ebb354"}}
                                    >
                                        <p className='text-black-500'>Safety protocols are supported by clear zoning and efficient space planning.</p>
                                    </motion.div>
                                </div>
                            </div>
                            <div className='blog-body-inner-two'>
                                <img
                                    src={'/assets/images/blogs/blog1-img1.jpg'}
                                    alt={'partner.alt'}
                                    className="object-contain"
                                    style={{width:'100%', height:'100%', borderRadius:"14px"}}
                                />
                            </div>
                        </div>

                        <div className='mt-10'>
                            <h2 className='sub-heading mb-2'>From Vision to Reality: Healthcare Facility Design and Build</h2>
                            <p className='text-black-500 mb-1'>Every healthcare project starts with a vision. The right design partner helps translate that vision into reality — from concept drawings to fully functional, NABH-certified hospitals. This involves:</p>
 
                            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6 w-full mt-6">
                                <motion.div
                                    className="relative text-center bg-white bg-opacity-20 backdrop-blur-md p-6 rounded-xl flex items-center justify-center shadow-lg transition-transform transform hover:scale-105"
                                    whileHover={{ scale: 1.05 }}
                                    // style={{backgroundColor: "#87ceeb54"}}
                                >
                                    <p className='text-black-500'>Detailed planning of patient-centric spaces.</p>
                                </motion.div>

                                <motion.div
                                    className="relative text-center bg-white bg-opacity-20 backdrop-blur-md p-6 rounded-xl flex items-center justify-center shadow-lg transition-transform transform hover:scale-105"
                                    whileHover={{ scale: 1.05 }}
                                    // style={{backgroundColor: "rgb(234, 215, 248)"}}
                                >
                                    <p className='text-black-500'>Use of durable, hygienic, and sustainable materials.</p>
                                </motion.div>

                                <motion.div
                                    className="relative text-center bg-white bg-opacity-20 backdrop-blur-md p-6 rounded-xl flex items-center justify-center shadow-lg transition-transform transform hover:scale-105"
                                    whileHover={{ scale: 1.05 }}
                                    // style={{backgroundColor: "rgba(235, 135, 135, 0.33)"}}
                                >
                                    <p className='text-black-500'>Smart technology integration for better patient care.</p>
                                </motion.div>

                                <motion.div
                                    className="relative text-center bg-white bg-opacity-20 backdrop-blur-md p-6 rounded-xl flex items-center justify-center shadow-lg transition-transform transform hover:scale-105"
                                    whileHover={{ scale: 1.05 }}
                                    // style={{backgroundColor: "#87ebb354"}}
                                >
                                    <p className='text-black-500'>Compliance with NABH standards at every stage of construction.</p>
                                </motion.div>
                            </div>
                        </div>

                        <div className='mt-10 w-full'>
                            <div className='h-500-lg' style={{backgroundImage: "url('/assets/images/blogs/blog1-img2.png')", padding:'1rem', borderRadius:'14px', color:'white', minHeight: '300px', display: 'flex',justifyContent: 'center',alignItems: 'center',height: 'fit-content'}}>
                                <div className="text-center">
                                    <h2 className='sub-heading mb-2'>Creating Spaces That Heal</h2>
                                    <h3 className='text-black-500 mb-1'>In the end, a hospital is more than just a building. It’s a space where healing begins. A well-executed healthcare
                                    facility design and build project, rooted in NABH-compliant hospital construction, ensures that hospitals not
                                    only meet global standards but also feel humane and comforting for every visito</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    </>
  )
}
