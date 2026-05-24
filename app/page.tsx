import Image from 'next/image';
import { ArrowDown, Mail, ShieldAlert, Terminal, Lock, ChevronDown, Phone } from 'lucide-react';
import * as motion from 'motion/react-client';

const navLinks = ['System', 'Markets', 'Featured', 'Resources', 'About'];
const services = [
  'GOODS TRANSPORT',
  'TANKER SERVICE',
  'BULK SUPPLY',
  'OUTSTATION DELIVERY',
];
const clients = ['RYDER', 'PROLOGIS', 'NFI', 'LINEAGE', '8VC'];

export default function Home() {
  return (
    <main className="min-h-screen bg-void flex flex-col relative overflow-hidden">
      {/* 1. Navbar */}
      <div className="fixed top-6 left-0 right-0 w-full z-50 flex justify-center px-4 pointer-events-none">
        <nav className="flex items-center justify-between px-4 py-3 bg-carbon/90 backdrop-blur-md rounded-xl border border-border-muted/50 font-sans text-sm tracking-wide w-full max-w-[1200px] shadow-2xl pointer-events-auto transition-transform">
          {/* Logo */}
          <div className="flex items-center gap-3 pr-6">
            <div className="bg-white text-void p-1.5 rounded-md">
              <Terminal size={20} strokeWidth={2.5} />
            </div>
            <span className="text-xl font-bold tracking-tight text-white font-display">BHAGAT_ENT</span>
          </div>

          {/* Links */}
          <div className="hidden lg:flex gap-8 text-secondary-text items-center font-medium">
            {navLinks.map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="flex items-center gap-1.5 hover:text-white transition-colors duration-300">
                {link} {link !== 'About' && <ChevronDown size={14} className="opacity-60" />}
              </a>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-1 lg:flex-none justify-end lg:justify-start items-center gap-3 sm:gap-4">
            <button className="hidden sm:flex items-center justify-center w-10 h-10 rounded-lg border border-border-muted/50 hover:border-accent text-secondary-text hover:text-white transition-colors">
              <Phone size={18} />
            </button>
            <button className="px-5 sm:px-6 py-2.5 rounded-lg bg-white text-void font-bold tracking-widest hover:bg-gray-200 transition-colors uppercase text-[11px]">
              DEMO
            </button>
            <button className="px-5 sm:px-6 py-2.5 rounded-lg bg-accent text-void font-bold tracking-widest hover:shadow-[0_0_15px_#B6FF00] transition-shadow border-none uppercase text-[11px]">
              CONTACT
            </button>
          </div>
        </nav>
      </div>

      {/* 2. Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1601004664551-7ec24a520ed7?q=80&w=2070&auto=format&fit=crop"
            alt="Tanker Truck"
            fill
            className="object-cover opacity-30 grayscale"
            referrerPolicy="no-referrer"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-void/50 via-void/80 to-void mix-blend-multiply" />
        </div>

        <div className="relative z-10 flex flex-col items-center text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-bold text-5xl md:text-7xl lg:text-8xl tracking-tighter mb-4"
          >
            BHAGAT ENTERPRISE
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-secondary-text font-mono text-sm md:text-base tracking-[0.2em] uppercase"
          >
            Delivering trust across every mile
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-12 flex flex-col items-center gap-4 text-accent font-mono text-xs uppercase"
        >
          <span>SCROLL TO INITIATE</span>
          <div className="h-16 w-[1px] bg-accent/30 relative overflow-hidden">
             <motion.div 
               animate={{ y: [0, 64] }}
               transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
               className="w-full h-8 bg-accent absolute top-[-32px]"
             />
          </div>
        </motion.div>
      </section>

      {/* 3. Info Grid Section */}
      <section className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 px-8 py-24 bg-void border-t border-border-muted">
        {/* Left Col */}
        <div className="flex flex-col border-t border-border-muted pt-4 relative">
          <div className="text-secondary-text font-mono text-xs mb-8 uppercase tracking-wider">META_DATA_01</div>
          <h2 className="font-display text-3xl font-bold mb-2">ESTABLISHED 1997</h2>
          <p className="text-secondary-text font-mono text-xs uppercase">Decades of Trust, Modernized</p>
        </div>

        {/* Center Col */}
        <div className="flex flex-col border-t border-border-muted pt-4 relative items-center text-center border-x-0 md:border-x border-border-muted/30 md:px-8">
           <div className="absolute -top-12 h-12 w-[1px] bg-border-muted left-1/2 -ml-[0.5px] hidden md:block" />
           <div className="w-full flex justify-between absolute top-4 px-4 text-secondary-text font-mono text-xs uppercase tracking-wider">
             <span>META_DATA_02</span>
           </div>
          <h2 className="font-display text-2xl font-bold mb-6 mt-12 uppercase leading-tight">COVERAGE: EAST INDIA & NEPAL</h2>
          <div className="relative w-full aspect-video border border-border-muted shadow-lg bg-carbon/50 overflow-hidden group">
            <Image 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop"
              alt="Map visualization"
              fill
              className="object-cover opacity-40 grayscale group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 mix-blend-color bg-accent/10" />
            {/* Fake map point highlight */}
            <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-accent rounded-full shadow-[0_0_10px_#B6FF00] animate-pulse" />
          </div>
          <div className="absolute -bottom-24 h-24 w-[1px] bg-border-muted left-1/2 -ml-[0.5px] hidden md:block">
            <ArrowDown size={14} className="text-border-muted absolute -bottom-4 left-1/2 -ml-[7px]" />
          </div>
        </div>

        {/* Right Col */}
        <div className="flex flex-col border-t border-border-muted pt-4 justify-end relative h-full">
            <div className="absolute top-4 right-0 text-accent font-mono text-xs uppercase tracking-wider flex items-center gap-2">
              <div className="w-2 h-2 bg-accent animate-pulse" /> SYSTEM_STATUS
            </div>
            <div className="mt-24 md:mt-auto pb-8">
              <h2 className="font-display text-3xl font-bold text-accent mb-2">OPERATIONAL STATUS</h2>
              <p className="text-secondary-text font-mono text-xs uppercase tracking-wider">24/7 ACTIVE</p>
            </div>
        </div>
      </section>

      {/* 4. Services Section */}
      <section className="border-y border-border-muted relative bg-carbon">
        <div className="px-8 py-4 border-b border-border-muted">
           <span className="font-mono text-xs uppercase text-secondary-text tracking-wider">SERVICES_MATRIX</span>
        </div>
        <div className="flex flex-col w-full">
          {services.map((service, index) => (
            <div 
              key={service}
              className="group relative w-full border-b border-border-muted last:border-b-0 h-28 md:h-40 flex items-center justify-between px-6 md:px-12 cursor-pointer overflow-hidden bg-carbon transition-colors duration-300 hover:bg-white"
            >
              {/* Background texture on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 z-0 mix-blend-multiply">
                <Image
                  src="https://images.unsplash.com/photo-1586528148970-17937402662c?q=80&w=2070&auto=format&fit=crop"
                  alt="Industrial background"
                  fill
                  className="object-cover grayscale"
                  referrerPolicy="no-referrer"
                />
              </div>

              <h3 className="relative z-10 font-display text-3xl md:text-6xl font-bold uppercase tracking-tighter text-primary-text group-hover:text-void transition-colors duration-300">
                {service}
              </h3>
              
              <div className="relative z-10 font-mono text-xs tracking-wider text-secondary-text group-hover:text-void opacity-50 transition-colors duration-300">
                SYS.0{index + 1}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Clients Grid Section */}
      <section className="w-full min-h-screen bg-void relative flex flex-col justify-center border-b border-border-muted overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-5 grid-rows-[1fr_auto_1fr]">
          
          {/* Top Row Cells */}
          {Array.from({ length: 5 }).map((_, i) => (
             <div key={`top-${i}`} className="hidden md:block border-b border-r border-border-muted/30 relative">
                <div className="absolute -bottom-[5px] -right-[5px] text-border-muted opacity-30 text-[10px] leading-none select-none pointer-events-none">+</div>
             </div>
          ))}

          {/* Middle Row Cells (Logo Row) */}
          {clients.map((client, i) => (
             <div key={`mid-${i}`} className="border-b md:border-b-0 border-border-muted/30 relative md:border-b md:border-r h-48 md:h-[400px] flex items-center justify-center group cursor-pointer hover:bg-carbon/40 transition-colors duration-500">
               {/* Foreground Logo */}
               <span className="font-display font-medium text-3xl md:text-4xl text-secondary-text group-hover:text-primary-text transition-colors tracking-tighter uppercase px-4 text-center z-10">
                 {client}
               </span>
               {/* Hover Accent Line */}
               <div className="absolute bottom-[0px] left-0 w-full h-[2px] bg-transparent group-hover:bg-accent group-hover:shadow-[0_0_20px_#B6FF00] transition-colors duration-300 z-20" />
               <div className="absolute -bottom-[5px] -right-[5px] text-border-muted opacity-30 text-[10px] leading-none select-none pointer-events-none z-0 hidden md:block">+</div>
             </div>
          ))}
          
          {/* Bottom Row Cells */}
          {Array.from({ length: 5 }).map((_, i) => (
             <div key={`bot-${i}`} className="hidden md:block border-r border-border-muted/30 relative" />
          ))}
        </div>
      </section>

      {/* 6. Footer / Contact Form */}
      <footer className="relative bg-void border-t border-border-muted overflow-hidden flex flex-col justify-end pt-24 min-h-[80vh]">
         {/* Background Truck Image in footer */}
         <div className="absolute bottom-0 left-0 w-[80%] md:w-1/2 h-full z-0 opacity-20 md:opacity-30 origin-bottom-left grayscale pointer-events-none">
            <Image
              src="https://images.unsplash.com/photo-1620050815456-c0c1692298c5?q=80&w=1964&auto=format&fit=crop"
              alt="Truck Trailer"
              fill
              className="object-contain object-left-bottom"
              referrerPolicy="no-referrer"
            />
         </div>
         <div className="absolute inset-0 bg-gradient-to-r from-void via-void/80 to-void/0 z-0" />

         <div className="relative z-10 flex flex-col lg:flex-row gap-16 px-8 lg:px-24 mb-24 justify-between w-full">
            {/* Left Content */}
            <div className="flex flex-col gap-6 max-w-md w-full">
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-text uppercase tracking-tighter leading-[0.9]">
                SECURE<br/>TRANSMISSION
              </h2>
              <p className="font-mono text-xs md:text-sm text-secondary-text tracking-wide uppercase mt-4 leading-relaxed">
                Initiate a secure comms channel to schedule freight, inquire about tanker routing, or establish a bulk supply contract.
              </p>
              
              <div className="mt-8 flex flex-col gap-3 font-mono text-xs text-secondary-text uppercase tracking-widest">
                <span className="text-white mb-2">CONTACT</span>
                <span className="flex items-center gap-3"><Lock size={14} className="text-accent opacity-80"/> +91 98XXX XXXXX</span>
                <span className="flex items-center gap-3"><Mail size={14} className="text-accent opacity-80"/> COMMUNICATIONS@BHAGAT.COM</span>
                <span className="flex items-center gap-3"><Terminal size={14} className="text-accent opacity-80"/> INFO@BHAGAT_ENT.COM</span>
              </div>
            </div>

            {/* Right Form */}
            <div className="flex flex-col gap-4 max-w-lg lg:max-w-xl w-full z-20">
               <input 
                  type="text" 
                  placeholder="IDENTIFIER [NAME]" 
                  className="w-full bg-void border border-border-muted p-4 md:p-5 font-mono text-xs uppercase text-primary-text focus:border-accent focus:outline-none transition-colors"
                />
               <input 
                  type="email" 
                  placeholder="COMMS_LINK [EMAIL]"
                  className="w-full bg-void border border-border-muted p-4 md:p-5 font-mono text-xs uppercase text-primary-text focus:border-accent focus:outline-none transition-colors"
                />
               <textarea 
                  rows={4}
                  placeholder="TRANSMISSION_PAYLOAD [MESSAGE]"
                  className="w-full bg-void border border-border-muted p-4 md:p-5 font-mono text-xs uppercase text-primary-text focus:border-accent focus:outline-none transition-colors resize-none"
                />
               <button className="w-full mt-4 bg-accent text-void py-5 px-4 font-display font-bold text-lg md:text-xl uppercase tracking-wider hover:bg-white transition-colors flex items-center justify-center gap-3">
                 INITIATE TRANSMISSION
               </button>
            </div>
         </div>

         {/* Bottom Bar */}
         <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-8 py-4 border-t border-border-muted font-mono text-[10px] text-secondary-text uppercase tracking-widest gap-4">
            <div className="font-display text-base font-bold text-accent">BHAGAT_ENT</div>
            <div className="text-center">© 1997-2024 BHAGAT ENTERPRISE. ALL SYSTEMS OPERATIONAL.</div>
            <div className="flex gap-4 sm:gap-6">
               <a href="#" className="hover:text-white transition-colors">TERMINAL</a>
               <a href="#" className="hover:text-white transition-colors">PRIVACY_PROTOCOL</a>
               <a href="#" className="flex items-center gap-2 hover:text-white transition-colors">
                 <ShieldAlert size={10} className="text-accent"/> ENCRYPTED_AUTH
               </a>
            </div>
         </div>
      </footer>
    </main>
  );
}
