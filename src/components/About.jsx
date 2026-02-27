import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Leaf, PenTool, CheckCircle } from 'lucide-react';

const About = () => {
    const stats = [
        { icon: <ShieldCheck size={28} />, title: 'QBCC Licensed', desc: 'Fully licensed & insured for structural work.' },
        { icon: <Leaf size={28} />, title: '10+ Years Exp', desc: 'Expertise in horticulture & garden design.' },
        { icon: <CheckCircle size={28} />, title: 'Client First', desc: 'Practical, high-value living spaces.' },
        { icon: <PenTool size={28} />, title: 'Craftsmanship', desc: 'Precision in every stone and timber.' },
    ];

    return (
        <section id="about" className="py-24 relative">
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
                style={{ backgroundImage: "url('/images/about_bg.png')" }}
            />
            <div className="absolute inset-0 z-10 bg-[#f9f9f9]/90 backdrop-blur-sm" />

            <div className="container mx-auto px-6 md:px-12 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <div className="h-px bg-[#2c5e3b] w-12" />
                            <span className="text-[#2c5e3b] font-semibold tracking-wider uppercase text-sm">About Us</span>
                            <div className="h-px bg-[#2c5e3b] w-12" />
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                            Crafting Premium <br />
                            <span className="text-[#4a7c59]">Landscapes Since 2014</span>
                        </h2>

                        <div className="space-y-4 text-lg text-gray-600 font-light leading-relaxed">
                            <p>
                                Based in the historic suburb of Newtown, Toowoomba, <strong className="font-semibold text-gray-900">Trademark Landscapes</strong> is a premier landscaping firm dedicated to elevating outdoor environments across Southeast Queensland.
                            </p>
                            <p>
                                Founded and directed by <strong>Tom Michel</strong>, a qualified tradesman with over a decade of dedicated horticulture and construction experience, we specialize in turning residential outdoor areas into stunning, practical, and high-value extensions of your home.
                            </p>
                        </div>

                        <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {stats.map((stat, idx) => (
                                <div key={idx} className="flex flex-col gap-2 p-4 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                    <div className="text-[#4a7c59] bg-[#e1e2d9]/30 p-3 rounded-xl w-fit">
                                        {stat.icon}
                                    </div>
                                    <h4 className="font-bold text-gray-900 text-lg">{stat.title}</h4>
                                    <p className="text-sm text-gray-500 leading-snug">{stat.desc}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl group"
                    >
                        <img
                            src="/images/our work.png"
                            alt="Landscaping work by Trademark Landscapes"
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                        {/* Subtle overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80" />

                        {/* Overlay card */}
                        <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl flex items-center justify-between">
                            <div>
                                <p className="text-[#2c5e3b] font-bold text-xl">Service Area</p>
                                <p className="text-gray-600 font-medium text-sm mt-1">Toowoomba & Southeast QLD</p>
                            </div>
                            <div className="h-12 w-12 bg-[#2c5e3b] rounded-full flex items-center justify-center text-white shadow-lg">
                                <ShieldCheck size={24} />
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;
