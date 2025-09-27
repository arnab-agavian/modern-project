'use client';

import React from 'react';
import '..//../public/assets/styles/Blogs.css'
import Link from "next/link";
import Image from "next/image";
import { motion } from 'framer-motion';



export const Blog2 = () => {
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
                    Trending Hotel & Resort Designs with Poolside Luxury
                </h1>
                <p className="text-lg md:text-xl text-gray-300 mb-6">
                    Discover how The Modern Circle designs trending hotels and resorts with stunning pools, modern detailing, and storytelling architecture. Learn why space planning and detail make all the difference.
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
                        <h1>Introduction</h1>
                        <div className='grid grid-row-1 lg:grid-row-2'>
                            <p className='mb-2 text-gray-500'>Every hotel tells a story, but not all stories are remembered. At The Modern Circle, we believe that architecture is more than building walls—it’s about shaping experiences.</p>
                            <p className='mb-2 text-gray-500'>Today’s travelers seek more than a stay; they want moments—lounging by infinity pools, walking through lobbies that inspire awe, and resting in rooms where every detail feels intentional. This is why modern hotel and resort design is evolving. It’s no longer about function alone; it’s about creating an emotional journey.</p>
                            <p className='text-gray-500'>In this blog, we’ll share how pool resorts are redefining hospitality, why detailing in every space matters, and how our Modern Circle design philosophy transforms hotels into destinations.</p>
                        </div>
                    </div>
                    <div className='blog-body'>
                        <div className='blog-body-inner'>
                            <div className='blog-body-inner-one'>
                                <h2 className='sub-heading mb-2'>Why Pools Are the Soul of Resorts?</h2>
                                <p className='text-gray-500 mb-1'>For us, water is more than an element. It is energy, renewal, and connection. That’s why pools are never an afterthought in our designs they are often the heart of the resort.</p>
                                <div className='mt-4' style={{background: '#3c05ff08',padding: '1rem 1rem 2rem 1rem',borderRadius: '14px'}}>
                                    <h4 className='text-500' style={{fontSize:'1.2rem', fontWeight:'400'}}>We ask ourselves: What story will this pool tell?</h4>

                                    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-2 gap-6 w-full mt-6">
                                        <motion.div
                                            className="relative text-center bg-white bg-opacity-20 backdrop-blur-md p-6 rounded-xl flex items-center justify-center shadow-lg transition-transform transform hover:scale-105"
                                            whileHover={{ scale: 1.05 }}
                                            style={{backgroundColor: "#87ceeb54"}}
                                        >
                                            <p className='text-black-500'>A rooftop infinity pool that meets the skyline.</p>
                                        </motion.div>

                                        <motion.div
                                            className="relative text-center bg-white bg-opacity-20 backdrop-blur-md p-6 rounded-xl flex items-center justify-center shadow-lg transition-transform transform hover:scale-105"
                                            whileHover={{ scale: 1.05 }}
                                            style={{backgroundColor: "rgb(234, 215, 248)"}}
                                        >
                                            <p className='text-black-500'>A lagoon that feels like it has always belonged to the land.</p>
                                        </motion.div>

                                        <motion.div
                                            className="relative text-center bg-white bg-opacity-20 backdrop-blur-md p-6 rounded-xl flex items-center justify-center shadow-lg transition-transform transform hover:scale-105"
                                            whileHover={{ scale: 1.05 }}
                                            style={{backgroundColor: "rgba(235, 135, 135, 0.33)"}}
                                        >
                                            <p className='text-black-500'>A spa pool where silence heals.</p>
                                        </motion.div>

                                        <motion.div
                                            className="relative text-center bg-white bg-opacity-20 backdrop-blur-md p-6 rounded-xl flex items-center justify-center shadow-lg transition-transform transform hover:scale-105"
                                            whileHover={{ scale: 1.05 }}
                                            style={{backgroundColor: "#87ebb354"}}
                                        >
                                            <p className='text-black-500'>Each one is a chapter in the story of the place.</p>
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                            <div className='blog-body-inner-two'>
                                <img
                                    src={'/assets/images/blogs/blog2-img1.png'}
                                    alt={'partner.alt'}
                                    className="object-contain"
                                    style={{width:'100%', height:'100%', borderRadius:"14px"}}
                                />
                            </div>
                        </div>
                        <div className='lg:flex gap-4 mt-10'>
                            <div className='mt-10 w-full'>
                                <h2 className='sub-heading mb-2'>Our Belief in Detail</h2>
                                <p className='text-black-500 mb-1'>We believe guests don’t remember dimensions—they remember feelings.</p>

                                <ul style={{listStyle:'circle', listStylePosition:'inside', marginTop:'1rem'}}>
                                    <li>The way natural light falls on a breakfast table.</li>
                                    <li>The texture of a wall that feels warm to the touch.</li>
                                    <li>The sense of calm when they step into their room.</li>
                                </ul>
                            </div>
                            <div className='mt-10 w-full'>
                                <h2 className='sub-heading mb-2'>The Modern Circle Philosophy</h2>
                                <p className='text-black-500 mb-1'>What we call The modern circle of hotel design is a balance between:</p>
    
                                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-2 gap-6 w-full mt-6">
                                    <motion.div
                                        className="relative text-center bg-white bg-opacity-20 backdrop-blur-md p-6 rounded-xl flex items-center justify-center shadow-lg transition-transform transform hover:scale-105"
                                        whileHover={{ scale: 1.05 }}
                                        // style={{backgroundColor: "#87ceeb54"}}
                                    >
                                        <div className='h-full'>
                                            <strong>Sustainability </strong>
                                            <p className='text-black-500'>Eco-friendly resorts with solar energy and water treatment systems.</p>
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        className="relative text-center bg-white bg-opacity-20 backdrop-blur-md p-6 rounded-xl flex items-center justify-center shadow-lg transition-transform transform hover:scale-105"
                                        whileHover={{ scale: 1.05 }}
                                        // style={{backgroundColor: "rgb(234, 215, 248)"}}
                                    >
                                        <div className='h-full'>
                                            <strong>Technology </strong>
                                            <p className='text-black-500'>Smart automation, efficient HVAC, and integrated fire safety.</p>
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        className="relative text-center bg-white bg-opacity-20 backdrop-blur-md p-6 rounded-xl flex items-center justify-center shadow-lg transition-transform transform hover:scale-105"
                                        whileHover={{ scale: 1.05 }}
                                        // style={{backgroundColor: "rgba(235, 135, 135, 0.33)"}}
                                    >
                                        <div className='h-full'>
                                            <strong>Culture & Aesthetics </strong>
                                            <p className='text-black-500'>Designs that echo local heritage while embracing global luxury.</p>
                                        </div>
                                    </motion.div>
                                    <motion.div
                                        className="relative text-center bg-white bg-opacity-20 backdrop-blur-md p-6 rounded-xl flex items-center justify-center shadow-lg transition-transform transform hover:scale-105"
                                        whileHover={{ scale: 1.05 }}
                                        // style={{backgroundColor: "rgba(235, 135, 135, 0.33)"}}
                                    >
                                        <div className='h-full'>
                                            <strong>Functionality </strong>
                                            <p className='text-black-500'>Banquet halls, rooftop restaurants, and spas built for both beauty and practicality.</p>
                                        </div>
                                    </motion.div>

                                </div>
                            </div>
                        </div>

                        <div className='mt-10 w-full'>
                            <div className='h-500-lg' style={{backgroundImage: "url('/assets/images/blogs/blog2-img1.png')", padding:'1rem', borderRadius:'14px', color:'white', minHeight: '300px', display: 'flex',justifyContent: 'center',alignItems: 'center',height: 'fit-content'}}>
                                <div className="text-center">
                                    <h2 className='sub-heading mb-2' style={{fontSize:'2rem'}}>Why Work With Us</h2>
                                    <h3 className='text-black-500 mb-1' style={{fontSize:'1.2rem'}}>We don’t just design hotels and resorts. We create places where people fall in love with the experience.</h3>
                                    <div className='mt-4' style={{display:'flex', justifyContent:'center'}}>
                                        <h3 className='text-black-500 my-4 w-fit' style={{backgroundColor: '#cbcbcb6e',padding: '1rem',borderRadius: '14px'}}>When you work with us, you don’t just get architecture. <strong>You get</strong>:</h3>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-fit mt-6">

                                        <motion.div
                                            className="relative text-center bg-white bg-opacity-20 backdrop-blur-md p-6 rounded-xl flex items-center justify-center shadow-lg transition-transform transform hover:scale-105"
                                            whileHover={{ scale: 1.05 }}
                                            // style={{backgroundColor: "rgb(234, 215, 248)"}}
                                        >
                                            <p className='text-black-500'>A vision that aligns with your story.</p>
                                        </motion.div>

                                        <motion.div
                                            className="relative text-center bg-white bg-opacity-20 backdrop-blur-md p-6 rounded-xl flex items-center justify-center shadow-lg transition-transform transform hover:scale-105"
                                            whileHover={{ scale: 1.05 }}
                                            // style={{backgroundColor: "rgba(235, 135, 135, 0.33)"}}
                                        >
                                            <p className='text-black-500'>A design where luxury and detail meet seamlessly.</p>
                                        </motion.div>

                                        <motion.div
                                            className="relative text-center bg-white bg-opacity-20 backdrop-blur-md p-6 rounded-xl flex items-center justify-center shadow-lg transition-transform transform hover:scale-105"
                                            whileHover={{ scale: 1.05 }}
                                            // style={{backgroundColor: "#87ebb354"}}
                                        >
                                            <p className='text-black-500'>A destination where every guest feels part of something bigger.</p>
                                        </motion.div>
                                        <motion.div
                                            className="relative text-center bg-white bg-opacity-20 backdrop-blur-md p-6 rounded-xl flex items-center justify-center shadow-lg transition-transform transform hover:scale-105"
                                            whileHover={{ scale: 1.05 }}
                                            // style={{backgroundColor: "#87ebb354"}}
                                        >
                                            <p className='text-black-500'>Because to us, a hotel is not a product. It’s a story waiting to be lived.</p>
                                        </motion.div>
                                    </div>
                                    <div className='mt-8' style={{display:'flex', justifyContent:'center'}}>
                                        <div className="w-fit">
                                            <a className="w-fit" rel="noopener noreferrer" href="/contact">
                                                <button class="flex items-center px-4 py-2 border border-transparent bg-primary text-white rounded-lg hover:bg-transparent hover:text-black hover:border-black transition">
                                                    Get in Touch
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='pt-2 mt-10' style={{borderTop:'1px solid #80808057'}}>
                            <h3 style={{fontSize:'1.2rem'}}>At The Modern Circle, we design with intention. We design with emotion. We design with detail. Most of all, we design to create places where every guest feels: This is where I belong.</h3>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    </>
  )
}
