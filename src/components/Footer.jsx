import React from 'react';
import { ArrowUp, Instagram } from 'lucide-react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-black text-gray-400 py-12 border-t border-white/10 section-fade pb-8">
            <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">

                {/* Logo & Copyright */}
                <div className="flex flex-col items-center md:items-start gap-4">
                    <img
                        src="/images/logo.png"
                        alt="Trademark Landscapes Logo"
                        className="h-10 w-auto object-contain rounded-full brightness-0 invert opacity-80"
                    />
                    <p className="text-sm">
                        &copy; {new Date().getFullYear()} Trademark Landscapes. All rights reserved. <br className="hidden md:block" />
                        <span className="text-gray-500 text-xs mt-1 block">QBCC Licensed | Newtown, Toowoomba</span>
                    </p>
                </div>

                {/* Back to top */}
                <a
                    href="https://www.instagram.com/trademarklandscapes/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/5 hover:bg-[#4a7c59] rounded-full transition-colors border border-white/10 text-gray-400 hover:text-white"
                    aria-label="Instagram"
                >
                    <Instagram size={20} />
                </a>

                <button
                    onClick={scrollToTop}
                    className="flex items-center justify-center p-3 bg-white/5 hover:bg-white/10 rounded-full transition-colors border border-white/10 group"
                    aria-label="Scroll to top"
                >
                    <ArrowUp className="text-gray-400 group-hover:text-white transition-colors" size={20} />
                </button>

            </div>
        </footer>
    );
};

export default Footer;
