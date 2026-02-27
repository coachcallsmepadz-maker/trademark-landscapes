import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Contact', href: '#contact' }
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
                {/* Logo */}
                <a href="#home" className="flex items-center gap-3">
                    <img
                        src="/images/logo.png"
                        alt="Trademark Landscapes Logo"
                        className="h-12 w-auto object-contain"
                    />
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={`text-sm font-medium tracking-wide transition-colors ${isScrolled ? 'text-gray-800 hover:text-[#2c5e3b]' : 'text-white hover:text-[#e1e2d9]'
                                }`}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all shadow-sm ${isScrolled
                                ? 'bg-[#2c5e3b] text-white hover:bg-[#1f4229] hover:shadow-md'
                                : 'bg-white text-[#2c5e3b] hover:bg-gray-100 hover:shadow-md'
                            }`}
                    >
                        Get a Quote
                    </a>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-2 text-current"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen
                        ? <X className={isScrolled ? 'text-gray-900' : 'text-white'} size={28} />
                        : <Menu className={isScrolled ? 'text-gray-900' : 'text-white'} size={28} />
                    }
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-100 overflow-hidden"
                    >
                        <div className="flex flex-col px-6 py-6 gap-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-gray-800 text-lg font-medium hover:text-[#2c5e3b] transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="#contact"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="inline-block text-center px-6 py-3 bg-[#2c5e3b] text-white rounded-lg font-medium shadow-md active:bg-[#1f4229]"
                            >
                                Get a Quote
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
