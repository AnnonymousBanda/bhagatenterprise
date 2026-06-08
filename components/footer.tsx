import { Mail, Phone, Box } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="relative bg-[#0F1115] text-white pt-24 pb-0 min-h-[50vh] flex flex-col justify-end overflow-hidden">
            <div className="max-w-7xl mx-auto w-full px-8 md:px-16 grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-16 md:gap-32 mb-24 relative z-10">
                <div className="flex flex-col gap-6">
                    <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight leading-tight">
                        Ready to transform <br /> your logistics?
                    </h2>
                    <p className="text-[#8492a6] font-light text-[17px] max-w-md">
                        Get in touch to schedule a demo and learn how our
                        platform can optimize your yard operations.
                    </p>

                    <div className="mt-6 flex flex-col gap-4 text-[13px] text-gray-300 tracking-wide font-medium">
                        <span className="flex items-center gap-3">
                            <Phone size={16} className="text-[#B6FF00]" /> +1
                            (800) 555-0199
                        </span>
                        <span className="flex items-center gap-3">
                            <Mail size={16} className="text-[#B6FF00]" />{' '}
                            contact@terminal.inc
                        </span>
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full bg-[#1A1C20] border border-white/5 rounded-xl p-4 text-[13px] text-white focus:border-white/20 focus:outline-none transition-colors"
                    />
                    <input
                        type="email"
                        placeholder="Business Email"
                        className="w-full bg-[#1A1C20] border border-white/5 rounded-xl p-4 text-[13px] text-white focus:border-white/20 focus:outline-none transition-colors"
                    />
                    <textarea
                        rows={3}
                        placeholder="How can we help?"
                        className="w-full bg-[#1A1C20] border border-white/5 rounded-xl p-4 text-[13px] text-white focus:border-white/20 focus:outline-none transition-colors resize-none"
                    />
                    <button className="w-auto self-start mt-2 bg-[#B6FF00] text-[#0A1A24] py-[14px] px-8 rounded-xl font-bold tracking-wide hover:brightness-110 transition-colors text-xs uppercase">
                        Submit Inquiry
                    </button>
                </div>
            </div>

            <div className="border-t border-white/5 relative z-10 bg-[#0F1115]">
                <div className="max-w-7xl mx-auto px-8 md:px-16 py-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 gap-4">
                    <div className="font-display text-base font-medium text-white flex items-center gap-2">
                        <Box size={16} /> Terminal
                    </div>
                    <div className="text-[#8492a6]">
                        © 2024 Terminal Industries. All rights reserved.
                    </div>
                    <div className="flex gap-6">
                        <a
                            href="#"
                            className="hover:text-white transition-colors"
                        >
                            Privacy Policy
                        </a>
                        <a
                            href="#"
                            className="hover:text-white transition-colors"
                        >
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
