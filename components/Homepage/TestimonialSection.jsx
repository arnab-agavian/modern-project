export default function TestimonialSection() {
    const testimonials = [
        {
            id: 1,
            name: "Dr. Abhinav Shekhar",
            designation: "Oncologist, Artemis Hospital",
            location: "Gurgaon, India",
            text: "I wanted a home that was truly a retreat—comforting, modern, peaceful—especially after long, tiring days at the hospital. The Modern Circle didn’t just build me a house; they built me a home. What I appreciate is the quality and smoothness of how all was managed. There was no more seamless collaboration between the designers, construction team and project managers, keeping me in the loop at all times as well. They still even during and after the project was done need to know that things are working as they should. Really rare to find that level of care.",
            image: "/assets/user.png"
        },
        {
            id: 2,
            name: "Dr. Shashi",
            designation: "Hematologist, Vedanta Hospital",
            location: "Patna, India",
            text: "Hospital Design Making hospital design functional, efficient and most importantly comforting for patients is not an easy task. The Modern Circle got this concept spot on. Their team, from the very first start, were hands on making sure everything, from the layout to the lighting was designed to cater to doctors as well as patients. Their professionalism and commitment to meeting deadlines is what truly impressed me. They’ve been really supportive, even after I’m done, checking in to see if I need to make sure everything is running smoothly. That’s the level of commitment you want when you’re doing something so important.",
            image: "/assets/user.png"
        },
        {
            id: 3,
            name: "Mr. Sourabh Rathore",
            designation: "Bureau Chief,CNN News18",
            location: "Bihar, India",
            text: "As a person who has a very busy job, I wanted my house to be a haven where I could truly de-stress. The Modern Circle provided just that. They didn’t just sell me on aesthetics, they took the time to get to know my lifestyle and built a space that is perfectly me. The whole experience was seamless and hassle-free because their squad operated like a well-oiled machine. The designers, contractors, and project managers were in constant communication with each other, ensuring everything stayed on schedule. Even once I moved in, they continued to check to make sure that all was in order. That is rare, and it shows how much they care about their work.",
            image: "/assets/user1.png"
        }
    ];

    return (
        <section className="bg-gray-100 py-16">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">What Our Clients Say</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="bg-white p-6 shadow-lg rounded-lg">
                            <div className="flex items-center space-x-4 mb-4">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-14 h-14 rounded-full border-2 border-gray-300"
                                />
                                <div>
                                    <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                                    <p className="text-sm text-gray-500">{testimonial.designation} - {testimonial.location}</p>
                                </div>
                            </div>
                            <p className="text-gray-700">{testimonial.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
