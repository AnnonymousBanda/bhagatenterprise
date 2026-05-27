import Image from 'next/image';
import { Mail, Phone, ChevronDown, Box, Globe, Shield } from 'lucide-react';
import * as motion from 'motion/react-client';

const navLinks = ['System', 'Markets', 'Featured', 'Resources', 'About'];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 flex flex-col relative overflow-hidden font-sans selection:bg-[#B6FF00] selection:text-black">
      {/* 1. Navbar */}
      <div className="fixed top-4 left-0 right-0 w-full z-50 flex justify-center px-4 pointer-events-none">
        <nav className="flex items-center justify-between px-3 py-2 bg-[#383735]/95 backdrop-blur-md rounded-2xl border border-white/10 font-sans text-sm tracking-wide w-full max-w-[900px] shadow-2xl pointer-events-auto">
          {/* Logo */}
          <div className="flex items-center gap-2 px-3">
            <span className="text-white bg-transparent h-6 flex items-center justify-center">
              <Box size={22} strokeWidth={2.5} />
            </span>
            <span className="text-lg font-bold tracking-tight text-white font-display">Terminal</span>
          </div>

          {/* Links */}
          <div className="hidden md:flex gap-6 text-gray-300 items-center font-medium mx-auto pl-4">
            {navLinks.map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="flex items-center gap-1.5 hover:text-white transition-colors duration-300 text-[13px]">
                {link} {link !== 'About' && <ChevronDown size={14} className="opacity-70" />}
              </a>
            ))}
          </div>

          {/* Buttons */}
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

      {/* 2. Hero Section */}
      <section className="relative h-screen flex flex-col justify-center pt-20 bg-white">
        <div className="absolute inset-y-0 right-0 w-full md:w-3/5 z-0 hidden md:block m-4 rounded-[32px] overflow-hidden bg-[#8b7966]">
          {/* Using a warm cinematic render-like image since we can't generate one instantly */}
          <Image
            src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2075&auto=format&fit=crop"
            alt="Truck Trailer Cinematic"
            fill
            className="object-cover opacity-80"
            referrerPolicy="no-referrer"
            priority
          />
          <div className="absolute top-8 left-8 border border-white/30 rounded-lg p-2 backdrop-blur-md">
             <div className="w-32 h-16 border border-white/40 flex flex-col justify-end p-2 opacity-80">
                <div className="text-white text-[8px] font-mono whitespace-nowrap">CHECK IN: 2:34 PM</div>
             </div>
          </div>
        </div>

        <div className="relative z-10 flex flex-col items-start px-8 md:px-16 w-full max-w-7xl mx-auto">
          <div className="max-w-[500px] bg-white/80 md:bg-transparent backdrop-blur-md md:backdrop-blur-none p-6 md:p-0 rounded-3xl mt-24">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-medium text-[42px] leading-[1.05] md:text-5xl lg:text-6xl tracking-tight text-[#0A1A24] mb-8"
            >
              Autonomous, agentic AI-driven workflows from gate to dock
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-gray-400 font-sans text-[10px] tracking-widest font-bold"
            >
              01
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Value Prop */}
      <section className="bg-white py-24 pb-32">
        <div className="max-w-7xl mx-auto px-8 md:px-16 grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-12 md:gap-24 items-start">
           <div className="flex flex-col">
             <span className="text-[#8492a6] text-2xl font-light mb-1">Benefit 01</span>
             <h2 className="text-[34px] md:text-[40px] font-medium text-[#0A1B28] tracking-tight leading-[1.1]">
               A single solution for maximum, automated <span className="underline decoration-1 underline-offset-[5px]">throughput</span>
             </h2>
           </div>
           <div className="flex items-center text-[#5c6b7c] text-[17px] leading-[1.65] font-light">
             <p>
               Deep integrations anticipate incoming loads, enabling our AI computer vision technology to automate gate check-ins and all critical yard operations: from assigning locations and maintaining real-time visibility to coordinating spotters for efficient load movement. It then closes the loop by validating assets before exit, providing comprehensive performance supervision across your entire yard network.
             </p>
           </div>
        </div>
      </section>

      {/* 5. Clients Grid Section */}
      <section className="w-full min-h-[50vh] flex-1 bg-white relative flex flex-col justify-center overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-5 grid-rows-[1fr_auto_1fr]">
          
          {/* Top Row Cells */}
          {Array.from({ length: 5 }).map((_, i) => (
             <div key={`top-${i}`} className="hidden md:block border-b border-r border-gray-100/80 relative">
                <div className="absolute -bottom-[4px] -right-[4px] text-gray-300 text-[10px] leading-none select-none pointer-events-none z-10 font-mono">+</div>
             </div>
          ))}

          {/* Middle Row Cells (Logo Row) */}
          <div className="border-b md:border-b-0 border-gray-100/80 relative md:border-r h-48 md:h-[280px] flex items-center justify-center">
             <span className="font-display font-bold text-4xl md:text-5xl italic tracking-tighter text-[#132731] flex items-center pr-4 relative">
               {/* Swoosh simulation */}
               <svg className="w-full h-8 absolute -top-8 left-0 opacity-80" viewBox="0 0 100 20" preserveAspectRatio="none"><path d="M0 20 Q 50 0 100 20" fill="none" stroke="#132731" strokeWidth="2" strokeDasharray="50,150" strokeDashoffset="-25"/></svg>
               <span className="bg-[#132731] text-white rounded-full w-2 h-4 mr-0.5 inline-block rotate-[30deg]"></span>Ryder<span className="text-xl font-sans not-italic font-normal align-top leading-none ml-1 text-gray-600">®</span>
             </span>
             <div className="absolute -bottom-[4px] -right-[4px] text-gray-300 text-[10px] leading-none select-none z-10 hidden md:block font-mono">+</div>
          </div>

          <div className="border-b md:border-b-0 border-gray-100/80 relative md:border-r h-48 md:h-[280px] flex items-center justify-center">
             <span className="font-sans font-bold text-2xl md:text-[28px] text-[#132731] tracking-tight flex items-center gap-2">
               <Globe size={28} className="text-[#132731]" strokeWidth={2.5} /> PROLOGIS<span className="text-sm align-top font-normal text-gray-600">®</span>
             </span>
             <div className="absolute -bottom-[4px] -right-[4px] text-gray-300 text-[10px] leading-none select-none z-10 hidden md:block font-mono">+</div>
          </div>

          <div className="border-b md:border-b-0 relative md:border-r h-48 md:h-[280px] flex items-center justify-center group overflow-hidden">
             
             <span className="font-display font-black text-5xl md:text-[64px] text-[#0A1A24] tracking-tighter italic whitespace-nowrap relative z-30">
               N<span className="text-gray-300 inline-block -ml-1">F</span>I
               <span className="absolute top-2 -right-4">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5"><path d="M12 2L15 9H22L16 14L18 21L12 17L6 21L8 14L2 9H9L12 2Z" fill="#0A1A24"/></svg>
               </span>
             </span>
             
             {/* Neon Green Accent */}
             <div className="absolute bottom-[0px] left-0 right-0 h-[2px] bg-[#B6FF00] z-20" />
             <div className="absolute bottom-[0px] left-0 right-0 h-24 bg-gradient-to-t from-[#B6FF00]/10 to-transparent z-10 pointer-events-none" />
             
             <div className="absolute -bottom-[4px] -right-[4px] text-gray-300 text-[10px] leading-none select-none z-30 hidden md:block font-mono">+</div>
          </div>

          <div className="border-b md:border-b-0 border-gray-100/80 relative md:border-r h-48 md:h-[280px] flex items-center justify-center">
             <span className="font-sans font-semibold text-3xl md:text-3xl text-[#1e2a3b] flex items-center gap-2">
               <Shield className="fill-[#132731] text-white" size={32} /> Lineage<span className="text-sm align-top font-normal text-gray-600">®</span>
             </span>
             <div className="absolute -bottom-[4px] -right-[4px] text-gray-300 text-[10px] leading-none select-none z-10 hidden md:block font-mono">+</div>
          </div>

          <div className="border-b md:border-b-0 border-gray-100/80 relative md:border-r-0 h-48 md:h-[280px] flex items-center justify-center">
             <span className="font-sans font-light text-[40px] md:text-6xl text-gray-700 tracking-widest pl-2">
               8VC
             </span>
          </div>
          
          {/* Bottom Row Cells */}
          {Array.from({ length: 5 }).map((_, i) => (
             <div key={`bot-${i}`} className="hidden md:block border-t border-r border-gray-100/80 relative" />
          ))}
        </div>
      </section>

      {/* 6. Footer / Contact Form */}
      <footer className="relative bg-[#0F1115] text-white pt-24 pb-0 min-h-[50vh] flex flex-col justify-end overflow-hidden">
         <div className="max-w-7xl mx-auto w-full px-8 md:px-16 grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-16 md:gap-32 mb-24 relative z-10">
            {/* Left Content */}
            <div className="flex flex-col gap-6">
              <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight leading-tight">
                Ready to transform <br/> your logistics?
              </h2>
              <p className="text-[#8492a6] font-light text-[17px] max-w-md">
                Get in touch to schedule a demo and learn how our platform can optimize your yard operations.
              </p>
              
              <div className="mt-6 flex flex-col gap-4 text-[13px] text-gray-300 tracking-wide font-medium">
                <span className="flex items-center gap-3"><Phone size={16} className="text-[#B6FF00]"/> +1 (800) 555-0199</span>
                <span className="flex items-center gap-3"><Mail size={16} className="text-[#B6FF00]"/> contact@terminal.inc</span>
              </div>
            </div>

            {/* Right Form */}
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

         {/* Bottom Bar */}
         <div className="border-t border-white/5 relative z-10 bg-[#0F1115]">
           <div className="max-w-7xl mx-auto px-8 md:px-16 py-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 gap-4">
              <div className="font-display text-base font-medium text-white flex items-center gap-2">
                <Box size={16} /> Terminal
              </div>
              <div className="text-[#8492a6]">© 2024 Terminal Industries. All rights reserved.</div>
              <div className="flex gap-6">
                 <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                 <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              </div>
           </div>
         </div>
      </footer>
    </main>
  );
}
