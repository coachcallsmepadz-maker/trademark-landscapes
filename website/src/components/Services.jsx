import React from 'react';
import { motion } from 'framer-motion';
import { Hammer, Flame, Sprout, Scissors } from 'lucide-react';

const Services = () => {
    const services = [
        {
            id: 1,
            name: 'Construction (Hardscape)',
            description: 'Durable and aesthetic structural landscaping including stone and timber retaining walls, custom paving, precise garden edging, and functional pathways.',
            icon: <Hammer size={32} className="text-[#2c5e3b]" />
        },
        {
            id: 2,
            name: 'Outdoor Living',
            description: 'Transform your backyard into an entertainment hub with bespoke fire pits, complete outdoor kitchens, wood-fired pizza ovens, and custom concrete benchtops.',
            icon: <Flame size={32} className="text-[#2c5e3b]" />
        },
        {
            id: 3,
            name: 'Horticulture (Softscape)',
            description: 'Lush and thriving garden environments featuring expert turf preparation and laying, strategic planting, and efficient, water-saving irrigation systems.',
            icon: <Sprout size={32} className="text-[#2c5e3b]" />
        },
        {
            id: 4,
            name: 'Maintenance',
            description: 'Keep your landscape pristine with our programmed maintenance visits. We offer professional hedge pruning, comprehensive weed control, and lawn refurbishment.',
            icon: <Scissors size={32} className="text-[#2c5e3b]" />
        }
    ];

    return (
        <section id="services" className="py-24 bg-white relative">
            <div className="container mx-auto px-6 md:px-12 relative z-10">

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center justify-center gap-4 mb-4"
                    >
                        <div className="h-px bg-[#4a7c59] w-12" />
                        <span className="text-[#4a7c59] font-semibold tracking-wider uppercase text-sm">Our Expertise</span>
                        <div className="h-px bg-[#4a7c59] w-12" />
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                    >
                        Comprehensive Landscape <span className="text-[#2c5e3b]">Solutions</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-lg text-gray-600 font-light"
                    >
                        From the initial design to the final build and ongoing care, we offer a full suite of services across both "hard" and "soft" landscaping sectors.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className="bg-[#f9f9f9] rounded-2xl p-8 border border-gray-100 hover:border-[#2c5e3b]/30 hover:shadow-xl hover:shadow-[#2c5e3b]/5 transition-all duration-300 group"
                        >
                            <div className="bg-white w-16 h-16 rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#e1e2d9]/50 transition-transform duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#2c5e3b] transition-colors">{service.name}</h3>
                            <p className="text-gray-600 font-light leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Services;
