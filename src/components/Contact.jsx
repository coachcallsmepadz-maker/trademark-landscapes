import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real app, this would integrate with an API or email service.
        // For this design demo, we generate a mailto link.
        const subject = `New Inquiry from ${formData.name} - ${formData.service}`;
        const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0AService: ${formData.service}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
        window.location.href = `mailto:info@trademarklandscapes.com.au?subject=${subject}&body=${body}`;
    };

    return (
        <section id="contact" className="py-24 bg-[#1a1a1a] text-white relative border-t-8 border-[#2c5e3b]">
            {/* Background Pattern Map representation */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}
            />

            <div className="container mx-auto px-6 md:px-12 relative z-10">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-10"
                    >
                        <div>
                            <div className="flex items-center gap-4 mb-4">
                                <div className="h-px bg-[#4a7c59] w-12" />
                                <span className="text-[#4a7c59] font-semibold tracking-wider uppercase text-sm">Get in Touch</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                Ready to transform <br /> your property?
                            </h2>
                            <p className="text-gray-400 font-light text-lg max-w-md">
                                Reach out to Tom and the team at Trademark Landscapes today. We'd love to discuss your vision and how we can bring it to life.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="mt-1 bg-white/10 p-3 rounded-full text-[#4a7c59]">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">Location</h4>
                                    <p className="text-gray-400 font-light">Newtown, Toowoomba QLD 4350</p>
                                    <p className="text-[#e1e2d9] text-sm mt-1">Servicing Toowoomba & Southeast Queensland</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="mt-1 bg-white/10 p-3 rounded-full text-[#4a7c59]">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">Phone</h4>
                                    <p className="text-gray-400 font-light">Available Mon-Fri, 7am - 5pm</p>
                                    <a href="tel:0400000000" className="text-white hover:text-[#4a7c59] transition-colors mt-1 inline-block">Tom Michel: 0400 000 000</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="mt-1 bg-white/10 p-3 rounded-full text-[#4a7c59]">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">Email</h4>
                                    <p className="text-gray-400 font-light">Send us your project details</p>
                                    <a href="mailto:info@trademarklandscapes.com.au" className="text-white hover:text-[#4a7c59] transition-colors mt-1 inline-block">info@trademarklandscapes.com.au</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="mt-1 bg-white/10 p-3 rounded-full text-[#4a7c59]">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">QBCC License</h4>
                                    <p className="text-gray-400 font-light">Fully Licensed and Insured tradesman.</p>
                                </div>
                            </div>
                        </div>

                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-md p-8 md:p-10 rounded-2xl border border-white/10 shadow-2xl">
                            <h3 className="text-2xl font-bold mb-8">Request a Consultation</h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm text-gray-400">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#4a7c59] focus:ring-1 focus:ring-[#4a7c59] transition-colors"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm text-gray-400">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        required
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#4a7c59] focus:ring-1 focus:ring-[#4a7c59] transition-colors"
                                        placeholder="0400 000 000"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm text-gray-400">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#4a7c59] focus:ring-1 focus:ring-[#4a7c59] transition-colors"
                                        placeholder="john@example.com"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="service" className="text-sm text-gray-400">Service of Interest</label>
                                    <select
                                        id="service"
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#4a7c59] focus:ring-1 focus:ring-[#4a7c59] transition-colors appearance-none"
                                        style={{ backgroundColor: '#2a2a2a' }}
                                    >
                                        <option value="" disabled className="text-gray-500">Select a service</option>
                                        <option value="Hardscape">Construction (Hardscape)</option>
                                        <option value="Outdoor Living">Outdoor Living</option>
                                        <option value="Softscape">Horticulture (Softscape)</option>
                                        <option value="Maintenance">Maintenance</option>
                                        <option value="Other">Other / General</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-2 mb-8">
                                <label htmlFor="message" className="text-sm text-gray-400">Project Details</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#4a7c59] focus:ring-1 focus:ring-[#4a7c59] transition-colors resize-none"
                                    placeholder="Tell us a bit about your space and what you're looking to achieve..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#2c5e3b] hover:bg-[#4a7c59] text-white font-medium py-4 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 group"
                            >
                                Send Message
                                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>

                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
