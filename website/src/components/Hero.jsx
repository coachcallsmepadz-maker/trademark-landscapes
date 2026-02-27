import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
    return (
        <section
            id="home"
            className="relative h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Background Image & Overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed scale-105"
                style={{ backgroundImage: "url('/images/our work.png')" }}
            />
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

            {/* Content */}
            <div className="container mx-auto px-6 relative z-20 text-center flex flex-col items-center">

                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="uppercase tracking-[0.2em] text-sm md:text-base font-semibold text-[#e1e2d9] mb-4"
                >
                    Toowoomba & Southeast Queensland
                </motion.span>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight drop-shadow-lg"
                >
                    Transform Your <br />
                    <span className="text-[#e1e2d9] italic font-serif">Outdoor Space</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200 mb-10 leading-relaxed font-light"
                >
                    Premium residential landscaping, structural design, and horticulture by experienced craftsmen. Client-first approach. Fully licensed and insured.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <a
                        href="#services"
                        className="px-8 py-4 bg-[#2c5e3b] text-white rounded-full font-medium text-lg hover:bg-[#1f4229] transition-all duration-300 shadow-xl hover:shadow-[#2c5e3b]/30 w-full sm:w-auto transform hover:-translate-y-1"
                    >
                        Explore Services
                    </a>
                    <a
                        href="#contact"
                        className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white rounded-full font-medium text-lg hover:bg-white hover:text-[#1a1a1a] transition-all duration-300 border-opacity-50 w-full sm:w-auto transform hover:-translate-y-1"
                    >
                        Get a Quote
                    </a>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-2"
            >
                <span className="text-white/60 text-xs tracking-widest uppercase">Scroll</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                >
                    <ChevronDown className="text-white/80" size={24} />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
