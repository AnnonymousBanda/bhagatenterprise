'use client';
import { motion } from 'framer-motion';
import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import Image from 'next/image';

import { Navbar, Footer } from '@/components';
import { Clients, Services, Experience } from './sections';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
}

// const GlowingCircuitBackground = () => {
//     // This defines the curve. You can draw your own in Figma,
//     // export as SVG, and copy the 'd' attribute here.
//     const path1 = 'M -100 200 Q 200 200 300 400 T 800 500 T 1200 300';
//     const path2 = 'M 200 -100 L 200 300 Q 200 450 400 450 L 1200 450';

//     return (
//         <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
//             <svg
//                 className="w-full h-full"
//                 preserveAspectRatio="xMidYMid slice"
//                 xmlns="http://www.w3.org/2000/svg"
//             >
//                 {/* --- DEFINITIONS: The Glow Filter --- */}
//                 <defs>
//                     <filter
//                         id="neon-glow"
//                         x="-50%"
//                         y="-50%"
//                         width="200%"
//                         height="200%"
//                     >
//                         {/* The blur size dictates how far the glow spreads */}
//                         <feGaussianBlur stdDeviation="12" result="blur" />
//                         {/* Merges the blurred glow underneath the solid stroke */}
//                         <feComposite
//                             in="SourceGraphic"
//                             in2="blur"
//                             operator="over"
//                         />
//                     </filter>
//                 </defs>

//                 {/* --- PATH GROUP 1 --- */}
//                 <g>
//                     {/* The Faint Track */}
//                     <path
//                         d={path1}
//                         stroke="#e5e7eb" // Faint gray
//                         strokeWidth="1"
//                         fill="none"
//                     />
//                     {/* The Glowing Snake */}
//                     <motion.path
//                         d={path1}
//                         stroke="#B6FF00" // Terminal Neon
//                         strokeWidth="2"
//                         fill="none"
//                         filter="url(#neon-glow)"
//                         strokeLinecap="round"
//                         // 150 is the snake length, 1500 is the invisible gap
//                         strokeDasharray="150 1500"
//                         // Animate from offset 1650 to 0 to make it travel
//                         initial={{ strokeDashoffset: 1650 }}
//                         animate={{ strokeDashoffset: 0 }}
//                         transition={{
//                             duration: 12,
//                             repeat: Infinity,
//                             ease: 'linear',
//                         }}
//                     />
//                 </g>

//                 {/* --- PATH GROUP 2 --- */}
//                 <g>
//                     <path
//                         d={path2}
//                         stroke="#e5e7eb"
//                         strokeWidth="1"
//                         fill="none"
//                     />
//                     <motion.path
//                         d={path2}
//                         stroke="#B6FF00"
//                         strokeWidth="2"
//                         fill="none"
//                         filter="url(#neon-glow)"
//                         strokeLinecap="round"
//                         strokeDasharray="100 2000"
//                         initial={{ strokeDashoffset: 2100 }}
//                         animate={{ strokeDashoffset: 0 }}
//                         transition={{
//                             duration: 15,
//                             repeat: Infinity,
//                             ease: 'linear',
//                             delay: 2,
//                         }}
//                     />
//                 </g>
//             </svg>
//         </div>
//     );
// };

export default function Home() {
    return (
        <main className="min-h-screen bg-white text-gray-900 block relative font-sans selection:bg-[#B6FF00] selection:text-black">
            <Navbar />

            <section className="relative h-screen flex flex-col justify-center pt-20 bg-white">
                <div className="absolute inset-y-0 right-0 w-full md:w-3/5 z-0 hidden md:block m-4 rounded-[32px] overflow-hidden bg-[#8b7966]">
                    <Image
                        src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2075&auto=format&fit=crop"
                        alt="Truck Trailer Cinematic"
                        fill
                        className="w-full h-full object-cover opacity-80"
                        referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-8 left-8 border border-white/30 rounded-lg p-2 backdrop-blur-md">
                        <div className="w-32 h-16 border border-white/40 flex flex-col justify-end p-2 opacity-80">
                            <div className="text-white text-[8px] font-mono whitespace-nowrap">
                                CHECK IN: 2:34 PM
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative z-10 flex flex-col items-start px-8 md:px-16 w-full max-w-7xl mx-auto">
                    <div className="max-w-[500px] bg-white/80 md:bg-transparent backdrop-blur-md md:backdrop-blur-none p-6 md:p-0 rounded-3xl mt-24">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.8,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            className="font-display font-medium text-[42px] leading-[1.05] md:text-5xl lg:text-6xl tracking-tight text-[#0A1A24] mb-8"
                        >
                            Autonomous, agentic AI-driven workflows from gate to
                            dock
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

            <Services />
            <Clients />
            <Experience />
            <Footer />
        </main>
    );
}
