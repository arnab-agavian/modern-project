import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const stats = [
    { id: 1, value: 32, suffix: "+", label: "Successful Projects" },
    { id: 2, value: 10, suffix: " Years", label: "Experience" },
    { id: 3, value: 8000, suffix: "+", label: "Happy Customers" },
];

const Counter = ({ value, suffix }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const end = value;
        const duration = 2000; // 2 seconds
        const increment = end / (duration / 16);

        const counter = setInterval(() => {
            start += increment;
            if (start >= end) {
                clearInterval(counter);
                setCount(end);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);

        return () => clearInterval(counter);
    }, [value]);

    return (
        <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-medium text-black"
        >
            {count}
            {suffix}
        </motion.span>
    );
};

export default function ByTheNumbers() {
    return (
        <section className="pt-8 pb-16 ">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    {stats.map((stat) => (
                        <div key={stat.id} className="flex flex-col items-center">
                            <Counter value={stat.value} suffix={stat.suffix} />
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                                className="text-lg text-black mt-2"
                            >
                                {stat.label}
                            </motion.p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
