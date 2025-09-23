import Image from "next/image";
import Link from "next/link";

const blogs = [
    {
        id: 1,
        title: "Revolutionizing Healthcare Spaces",
        description: "Explore the evolution of modern hospital design and how it's transforming patient experiences.",
        image: "/assets/images/blogs/blog1.webp",
        link: "https://medium.com/@themoderncirclecare/revolutionizing-healthcare-spaces-the-evolution-of-modern-hospital-design-f9816f5d6ea5",
    },
    {
        id: 2,
        title: "Living Room That Feels Like Home",
        description: "Discover how to create a warm and inviting living room that blends comfort with elegance.",
        image: "/assets/images/blogs/blog2.webp",
        link: "https://medium.com/@themoderncirclecare/living-room-that-feels-like-home-b8e4f7c32c32",
    },
    {
        id: 3,
        title: "Monochrome Magic: Modern Interiors",
        description: "Learn how to design sleek and stylish monochrome interiors that exude sophistication.",
        image: "/assets/images/blogs/blog3.webp",
        link: "https://medium.com/@themoderncirclecare/monochrome-magic-modern-interiors-for-your-room-5af441ffea35",
    },
];

export default function BlogSection() {
    return (
        <section className="py-16 px-6 bg-gradient-to-r from-gray-100 via-gray-300 to-gray-100">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl lg:text-4xl font-semibold mb-8">Our Blogs</h2>

                {/* Blog Grid */}
                <div className="grid md:grid-cols-3 gap-6">
                    {blogs.map((blog) => (
                        <div key={blog.id} className="relative group bg-white/10 p-6 rounded-xl shadow-lg border border-white/20 cursor-pointer transition-transform duration-300 hover:scale-105">
                            {/* Blog Image */}
                            <div className="relative w-full h-56 rounded-lg overflow-hidden">
                                <Image
                                    src={blog.image}
                                    alt={blog.title}
                                    fill
                                    className="object-cover transition-opacity duration-300 group-hover:opacity-80"
                                    loading="lazy"
                                />
                            </div>

                            {/* Blog Content */}
                            <div className="mt-4">
                                <h3 className="text-xl font-semibold text-gray-900">{blog.title}</h3>
                                <p className="text-gray-700 mt-2">{blog.description}</p>
                            </div>

                            {/* Read More Button */}
                            <div className="mt-4 flex justify-center">
                                <Link href={blog.link} target="_blank">
                                    <span
                                        className="inline-block px-5 py-2 rounded-lg text-white font-medium border border-transparent bg-primary hover:bg-transparent hover:text-black hover:border-black transition-all"
                                    >
                                        Read More →
                                    </span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
