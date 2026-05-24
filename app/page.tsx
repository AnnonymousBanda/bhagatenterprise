import Image from 'next/image';
import { ArrowDown, Mail, ShieldAlert, Terminal, Lock } from 'lucide-react';
import * as motion from 'motion/react-client';

const navLinks = ['TELEMETRY', 'SERVICES', 'FLEET', 'NETWORK'];
const services = [
  'GOODS TRANSPORT',
  'TANKER SERVICE',
  'BULK SUPPLY',
  'OUTSTATION DELIVERY',
];
const clients = ['ADANI WILMAR', 'EMAMI', 'TATA STEEL', 'RELIANCE', 'ADANI WILMAR'];

export default function Home() {
  return (
    <main className="min-h-screen bg-void flex flex-col relative overflow-hidden">
      {/* 1. Navbar */}
      <nav className="fixed top-0 w-full z-50 flex items-center justify-between px-6 py-4 bg-void/90 backdrop-blur-md border-b border-border-muted font-mono text-sm uppercase tracking-wider">
        <div className="flex items-center gap-12">
          <div className="text-xl font-bold tracking-tight text-accent font-display">BHAGAT_ENT</div>
          <div className="hidden md:flex gap-8 text-secondary-text">
            {navLinks.map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="hover:text-primary-text transition-colors duration-300 hover:border-b-accent hover:border-b pb-1">
                {link}
              </a>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="hidden md:flex items-center justify-center w-8 h-8 rounded-none border border-border-muted hover:border-accent text-secondary-text hover:text-accent transition-colors">
            <Terminal size={14} />
          </button>
          <button className="px-4 py-2 border border-border-muted hover:border-accent hover:text-accent transition-colors bg-white text-void font-semibold tracking-tight hover:bg-transparent">
            SYSTEM_LOGIN
          </button>
          <button className="px-6 py-2 bg-accent text-void border border-accent hover:bg-void hover:text-accent transition-colors font-semibold tracking-tight">
            CONTACT
          </button>
        </div>
      </nav>

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

      {/* 5. Clients Marquee */}
      <section className="w-full bg-white text-void py-8 overflow-hidden border-b border-border-muted relative flex items-center">
        {/* Subtle left/right fade masks */}
        <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-white to-transparent z-10" />
        
        <div className="flex w-fit whitespace-nowrap animate-marquee">
          {/* Repeat multiple times for smooth loop */}
          {[...clients, ...clients, ...clients, ...clients].map((client, i) => (
            <div key={i} className="flex-none px-12 text-center flex items-center justify-center">
              <span className="font-display font-bold text-3xl md:text-4xl lg:text-5xl uppercase tracking-tighter whitespace-nowrap">
                {client}
              </span>
            </div>
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
