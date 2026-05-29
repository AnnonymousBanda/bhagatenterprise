import React from 'react';
import { Phone, ChevronDown, Box } from 'lucide-react';

const Navbar = () => {
    const navLinks = ['System', 'Markets', 'Featured', 'Resources', 'About'];

    return (
        <div className="fixed top-4 left-0 right-0 w-full z-50 flex justify-center px-4 pointer-events-none">
            <nav className="flex items-center justify-between px-3 py-2 bg-[#1d1d1f]/50 backdrop-blur-xl backdrop-saturate-150 rounded-2xl border border-white/10 font-sans text-sm tracking-wide w-full max-w-[900px] shadow-2xl pointer-events-auto transition-all duration-300">
                <div className="flex items-center gap-2 px-3">
                    <span className="text-white bg-transparent h-6 flex items-center justify-center">
                        <Box size={22} strokeWidth={2.5} />
                    </span>
                    <span className="text-lg font-bold tracking-tight text-white font-display">
                        Terminal
                    </span>
                </div>

                <div className="hidden md:flex gap-6 text-gray-300 items-center font-medium mx-auto pl-4">
                    {navLinks.map((link) => (
                        <a
                            key={link}
                            href={`#${link.toLowerCase()}`}
                            className="flex items-center gap-1.5 hover:text-white transition-colors duration-300 text-[13px]"
                        >
                            {link}{' '}
                            {link !== 'About' && (
                                <ChevronDown size={14} className="opacity-70" />
                            )}
                        </a>
                    ))}
                </div>

                <div className="flex items-center gap-3 pr-2 ml-auto md:ml-0">
                    <button className="hidden sm:flex items-center justify-center w-10 h-10 rounded-xl border border-white/20 text-gray-300 hover:text-white hover:border-white/40 transition-colors">
                        <Phone size={18} />
                    </button>
                    <button className="px-5 py-2.5 rounded-xl bg-white text-black font-bold tracking-wide hover:bg-gray-100 transition-colors text-[11px] uppercase hidden sm:block">
                        DEMO
                    </button>
                    <button className="px-5 py-2.5 rounded-xl bg-[#B6FF00] text-black font-bold tracking-wide hover:brightness-110 transition-all border-none text-[11px] uppercase">
                        CONTACT
                    </button>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
