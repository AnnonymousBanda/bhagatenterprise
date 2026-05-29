'use client';
import { Mail, Phone, Box, Globe, Shield } from 'lucide-react';
import {
    motion,
    useMotionValueEvent,
    useScroll,
    useTransform,
} from 'framer-motion';
import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import { Navbar } from '@/components';
import Image from 'next/image';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const benefits = [
    {
        id: '01',
        title: (
            <>
                A single solution for maximum, automated{' '}
                <span className="underline decoration-1 underline-offset-[5px]">
                    throughput
                </span>
            </>
        ),
        description:
            'Deep integrations anticipate incoming loads, enabling our AI computer vision technology to automate gate check-ins and all critical yard operations: from assigning locations and maintaining real-time visibility to coordinating spotters for efficient load movement. It then closes the loop by validating assets before exit, providing comprehensive performance supervision across your entire yard network.',
        image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2075&auto=format&fit=crop',
    },
    {
        id: '02',
        title: (
            <>
                Easy, scalable{' '}
                <span className="underline decoration-1 underline-offset-[5px]">
                    operation
                </span>
            </>
        ),
        description:
            "Terminal was designed from the ground up for disruption-free operations. Easy to deploy and support, the system has a low IT lift with no 3rd party devices to support, and a modern UI/UX that's super-easy for operators to use from day one. Configurable to your yard, Terminal YOS integrates seamlessly with most TMS and WMS systems.",
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop',
    },
    {
        id: '03',
        title: (
            <>
                Rapid, repeatable{' '}
                <span className="underline decoration-1 underline-offset-[5px]">
                    ROI
                </span>
            </>
        ),
        description:
            "We know that yard operations run on lean budgets, which is why we price our all-inclusive solution as a service with terms that won't bust the bank. Ready to deploy right away, and rapid to scale over time.",
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop',
    },
];

const GSAPPinnedBenefits = () => {
    const scrollContainerRef = useRef(null);
    const triggersRef = useRef<Array<HTMLDivElement | null>>([]);
    const imageRefs = useRef<Array<HTMLImageElement | null>>([]);
    const titleBlockRefs = useRef<Array<HTMLDivElement | null>>([]);
    const descBlockRefs = useRef<Array<HTMLDivElement | null>>([]);
    const labelRefs = useRef<Array<HTMLSpanElement | null>>([]);
    const titleRefs = useRef<Array<HTMLHeadingElement | null>>([]);
    const descRefs = useRef<Array<HTMLParagraphElement | null>>([]);
    const progressLineRef = useRef(null);
    const numbersTextRef = useRef(null);

    useGSAP(
        () => {
            let currentStep = 0;

            benefits.forEach((_, i) => {
                if (i !== 0) {
                    gsap.set(titleBlockRefs.current[i], { autoAlpha: 0 });
                    gsap.set(descBlockRefs.current[i], { autoAlpha: 0 });
                    gsap.set(imageRefs.current[i], {
                        autoAlpha: 0,
                        yPercent: 100,
                    });
                    gsap.set(
                        [
                            labelRefs.current[i],
                            titleRefs.current[i],
                            descRefs.current[i],
                        ],
                        { y: '100%' }
                    );
                }
            });

            gsap.to(progressLineRef.current, {
                scaleY: 1,
                ease: 'none',
                scrollTrigger: {
                    trigger: scrollContainerRef.current,
                    start: 'top top',
                    end: 'bottom bottom',
                    scrub: true,
                },
            });

            const goToStep = (index: number) => {
                if (currentStep === index) return;

                const isScrollingDown = index > currentStep;
                const yOutText = isScrollingDown ? '-100%' : '100%';
                const yInText = isScrollingDown ? '100%' : '-100%';
                const yOutImg = isScrollingDown ? -100 : 100;
                const yInImg = isScrollingDown ? 100 : -100;

                const currentImage = imageRefs.current[currentStep];
                const currentTitleBlock = titleBlockRefs.current[currentStep];
                const currentDescBlock = descBlockRefs.current[currentStep];
                const currentTexts = [
                    labelRefs.current[currentStep],
                    titleRefs.current[currentStep],
                    descRefs.current[currentStep],
                ];

                const nextImage = imageRefs.current[index];
                const nextTitleBlock = titleBlockRefs.current[index];
                const nextDescBlock = descBlockRefs.current[index];
                const nextTexts = [
                    labelRefs.current[index],
                    titleRefs.current[index],
                    descRefs.current[index],
                ];

                const tl = gsap.timeline({ overwrite: true });

                tl.set(
                    [nextTitleBlock, nextDescBlock, nextImage],
                    { autoAlpha: 1 },
                    0
                );

                tl.to(
                    currentImage,
                    { yPercent: yOutImg, duration: 0.8, ease: 'power3.inOut' },
                    0
                );
                tl.fromTo(
                    nextImage,
                    { yPercent: yInImg },
                    { yPercent: 0, duration: 0.8, ease: 'power3.inOut' },
                    0
                );

                tl.to(
                    currentTexts,
                    {
                        y: yOutText,
                        duration: 0.4,
                        ease: 'power3.in',
                        stagger: 0.05,
                    },
                    0
                );

                tl.set(
                    [currentTitleBlock, currentDescBlock],
                    { autoAlpha: 0 },
                    0.6
                );

                tl.fromTo(
                    nextTexts,
                    { y: yInText },
                    {
                        y: '0%',
                        duration: 0.4,
                        ease: 'power3.out',
                        stagger: 0.05,
                    },
                    0.4
                );

                gsap.to(numbersTextRef.current, {
                    y: `-${index * 16}px`,
                    duration: 0.4,
                    ease: 'power3.inOut',
                    overwrite: true,
                });

                currentStep = index;
            };

            triggersRef.current.forEach((trigger, i) => {
                ScrollTrigger.create({
                    trigger: trigger,
                    start: 'top center',
                    end: 'bottom center',
                    onEnter: () => goToStep(i),
                    onEnterBack: () => goToStep(i),
                });
            });
        },
        { scope: scrollContainerRef }
    );

    return (
        <div
            ref={scrollContainerRef}
            className="relative h-[300vh] w-full bg-white"
        >
            <div
                ref={(el) => {
                    triggersRef.current[0] = el;
                }}
                className="absolute top-0 h-screen w-full pointer-events-none"
            />
            <div
                ref={(el) => {
                    triggersRef.current[1] = el;
                }}
                className="absolute top-[100vh] h-screen w-full pointer-events-none"
            />
            <div
                ref={(el) => {
                    triggersRef.current[2] = el;
                }}
                className="absolute top-[200vh] h-screen w-full pointer-events-none"
            />

            <div className="sticky top-0 h-screen w-full flex flex-col bg-white overflow-hidden">
                <div className="relative flex-[2] w-full bg-[#0A1B28] overflow-hidden">
                    <div className="absolute left-8 md:left-12 top-1/2 -translate-y-1/2 z-30 h-32 md:h-48 w-[2px] bg-white/20 rounded-full">
                        <div
                            ref={progressLineRef}
                            className="absolute top-0 left-0 w-full h-full bg-[#B6FF00] origin-top scale-y-0 rounded-full"
                        />
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 overflow-hidden h-4">
                            <div
                                ref={numbersTextRef}
                                className="flex flex-col text-[10px] md:text-[11px] font-mono text-white tracking-widest font-bold"
                            >
                                {benefits.map((benefit) => (
                                    <span
                                        key={`num-${benefit.id}`}
                                        className="h-4 leading-4 flex items-center"
                                    >
                                        {benefit.id}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {benefits.map((benefit, index) => (
                        <Image
                            key={`img-${benefit.id}`}
                            ref={(el) => {
                                imageRefs.current[index] = el;
                            }}
                            src={benefit.image}
                            alt=""
                            fill
                            className="absolute inset-0 w-full h-full object-cover"
                            style={{
                                opacity: index === 0 ? 1 : 0,
                                visibility: index === 0 ? 'visible' : 'hidden',
                            }}
                        />
                    ))}
                    <div className="absolute inset-0 bg-black/20" />
                </div>

                <div className="relative flex-[1] w-full bg-white flex items-center justify-center">
                    <div className="w-full max-w-7xl mx-auto px-8 md:px-16 grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-12 md:gap-24 items-start relative">
                        <div className="relative w-full">
                            <div className="invisible pointer-events-none select-none">
                                <div className="py-1 mb-1">
                                    <span className="block text-2xl font-light">
                                        Benefit 01
                                    </span>
                                </div>
                                <div className="py-1">
                                    <h2 className="block text-[34px] md:text-[40px] font-medium tracking-tight leading-[1.1]">
                                        A single solution for maximum, automated
                                        throughput
                                    </h2>
                                </div>
                            </div>

                            {benefits.map((benefit, index) => (
                                <div
                                    key={`title-${index}`}
                                    ref={(el) => {
                                        titleBlockRefs.current[index] = el;
                                    }}
                                    className="absolute top-0 left-0 w-full h-full flex flex-col"
                                    style={{
                                        visibility:
                                            index === 0 ? 'visible' : 'hidden',
                                    }}
                                >
                                    <div className="overflow-hidden py-1 mb-1">
                                        <span
                                            ref={(el) => {
                                                labelRefs.current[index] = el;
                                            }}
                                            className="block text-[#8492a6] text-2xl font-light translate-y-0"
                                        >
                                            Benefit {benefit.id}
                                        </span>
                                    </div>
                                    <div className="overflow-hidden py-1">
                                        <h2
                                            ref={(el) => {
                                                titleRefs.current[index] = el;
                                            }}
                                            className="block text-[34px] md:text-[40px] font-medium text-[#0A1B28] tracking-tight leading-[1.1] translate-y-0"
                                        >
                                            {benefit.title}
                                        </h2>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="relative w-full">
                            <div className="invisible pointer-events-none select-none">
                                <div className="py-2">
                                    <p className="block text-[17px] leading-[1.65] font-light">
                                        {benefits[0].description}
                                    </p>
                                </div>
                            </div>

                            {benefits.map((benefit, index) => (
                                <div
                                    key={`desc-${index}`}
                                    ref={(el) => {
                                        descBlockRefs.current[index] = el;
                                    }}
                                    className="absolute top-0 left-0 w-full h-full"
                                    style={{
                                        visibility:
                                            index === 0 ? 'visible' : 'hidden',
                                    }}
                                >
                                    <div className="overflow-hidden py-2">
                                        <p
                                            ref={(el) => {
                                                descRefs.current[index] = el;
                                            }}
                                            className="block text-[#5c6b7c] text-[17px] leading-[1.65] font-light translate-y-0"
                                        >
                                            {benefit.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const logos = [
    {
        id: 'ryder',
        render: () => (
            <div className="flex items-center transition-transform duration-700 group-hover:scale-105">
                <svg width="140" height="40" viewBox="0 0 140 40" fill="none">
                    <path
                        d="M6 32 Q22 8 46 20"
                        stroke="#9ca3af"
                        strokeWidth="1.5"
                        fill="none"
                        strokeLinecap="round"
                        className="transition-colors duration-500 group-hover:stroke-[#132731]"
                    />
                    <text
                        x="22"
                        y="30"
                        fontFamily="'Georgia', serif"
                        fontSize="22"
                        fontWeight="300"
                        fill="#9ca3af"
                        letterSpacing="-0.5"
                        fontStyle="italic"
                        className="transition-colors duration-500 group-hover:fill-[#132731]"
                    >
                        Ryder
                    </text>
                    <circle
                        cx="108"
                        cy="13"
                        r="6"
                        fill="#9ca3af"
                        className="transition-colors duration-500 group-hover:fill-[#132731]"
                    />
                    <text
                        x="105"
                        y="17"
                        fontFamily="sans-serif"
                        fontSize="7"
                        fill="white"
                        fontWeight="bold"
                    >
                        R
                    </text>
                </svg>
            </div>
        ),
    },
    {
        id: 'prologis',
        render: () => (
            <div className="flex items-center gap-2 transition-transform duration-700 group-hover:scale-105">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="#9ca3af"
                        strokeWidth="1.8"
                        className="transition-colors duration-500 group-hover:stroke-[#132731]"
                    />
                    <path
                        d="M2 12 Q12 6 22 12"
                        stroke="#9ca3af"
                        strokeWidth="1.5"
                        fill="none"
                        className="transition-colors duration-500 group-hover:stroke-[#132731]"
                    />
                    <path
                        d="M2 12 Q12 18 22 12"
                        stroke="#9ca3af"
                        strokeWidth="1.5"
                        fill="none"
                        className="transition-colors duration-500 group-hover:stroke-[#132731]"
                    />
                    <line
                        x1="12"
                        y1="2"
                        x2="12"
                        y2="22"
                        stroke="#9ca3af"
                        strokeWidth="1.5"
                        className="transition-colors duration-500 group-hover:stroke-[#132731]"
                    />
                </svg>
                <span className="font-sans font-semibold text-[15px] tracking-[1.8px] text-gray-400 transition-colors duration-500 group-hover:text-[#132731]">
                    PROLOGIS
                </span>
                <sup className="text-[9px] font-normal text-gray-400 mt-1 transition-colors duration-500 group-hover:text-[#132731]">
                    ®
                </sup>
            </div>
        ),
    },
    {
        id: 'nfi',
        render: () => (
            <div className="transition-transform duration-700 group-hover:scale-105">
                <svg width="120" height="54" viewBox="0 0 120 54" fill="none">
                    <ellipse
                        cx="58"
                        cy="34"
                        rx="52"
                        ry="16"
                        stroke="#9ca3af"
                        strokeWidth="1.5"
                        fill="none"
                        className="transition-colors duration-500 group-hover:stroke-[#132731]"
                    />
                    <text
                        x="14"
                        y="42"
                        fontFamily="'Helvetica Neue', Arial, sans-serif"
                        fontSize="30"
                        fontWeight="900"
                        fill="#9ca3af"
                        fontStyle="italic"
                        letterSpacing="-1.5"
                        className="transition-colors duration-500 group-hover:fill-[#132731]"
                    >
                        NFI
                    </text>
                    <path
                        d="M90 24 L95 19 L100 24 L95 29 Z"
                        fill="#9ca3af"
                        className="transition-colors duration-500 group-hover:fill-[#132731]"
                    />
                </svg>
            </div>
        ),
    },
    {
        id: 'lineage',
        render: () => (
            <div className="flex items-center gap-2 transition-transform duration-700 group-hover:scale-105">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M12 2L4 7v10l8 5 8-5V7L12 2z"
                        fill="#9ca3af"
                        stroke="#9ca3af"
                        strokeWidth="0.3"
                        className="transition-colors duration-500 group-hover:fill-[#132731] group-hover:stroke-[#132731]"
                    />
                </svg>
                <span className="font-sans font-semibold text-[20px] text-gray-400 tracking-tight transition-colors duration-500 group-hover:text-[#132731]">
                    Lineage
                </span>
                <sup className="text-[9px] font-normal text-gray-400 mt-1 transition-colors duration-500 group-hover:text-[#132731]">
                    ®
                </sup>
            </div>
        ),
    },
    {
        id: '8vc',
        render: () => (
            <span className="font-sans font-light text-[44px] tracking-[6px] text-gray-300 pl-2 transition-all duration-700 group-hover:text-[#132731] group-hover:scale-105 inline-block">
                8VC
            </span>
        ),
    },
];

function LogosSection() {
    return (
        <section className="w-full min-h-screen bg-white flex flex-col justify-center py-32">
            <div className="text-center px-6 pt-[4rem] pb-[3rem] md:pb-32">
                <h2
                    className="font-serif text-[#132731] leading-[1.22] font-normal"
                    style={{ fontSize: 'clamp(32px, 4.5vw, 56px)' }}
                >
                    Built by logistics leaders
                    <br />
                    who want a new industry
                    <br />
                    standard in the yard
                </h2>
            </div>

            <div
                className="grid w-full"
                style={{
                    gridTemplateColumns: 'repeat(5, 1fr)',
                    gridTemplateRows: '120px auto 120px',
                }}
            >
                {Array.from({ length: 5 }).map((_, i) => (
                    <div
                        key={`top-${i}`}
                        className="relative border-b border-r border-gray-100"
                        style={i === 4 ? { borderRight: 'none' } : {}}
                    >
                        <span className="absolute -bottom-[5px] -right-[5px] text-gray-300 text-[11px] leading-none select-none font-mono z-10 hidden md:block">
                            +
                        </span>
                    </div>
                ))}

                {logos.map((logo, i) => {
                    const isLast = i === logos.length - 1;

                    return (
                        <div
                            key={logo.id}
                            className={[
                                'group relative flex items-center justify-center h-[280px] md:h-[360px] overflow-hidden transition-all duration-300 ease-out',
                                'border-t border-b border-gray-100 hover:border-[#b6d400] hover:z-20',
                                isLast
                                    ? ''
                                    : 'border-r hover:border-r-[#b6d400]',
                            ].join(' ')}
                        >
                            <div className="absolute inset-0 bg-gradient-to-b from-[#eeff88]/5 to-[#eeff88]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out pointer-events-none" />

                            <div className="relative z-10">{logo.render()}</div>

                            <span className="absolute -bottom-[5px] -right-[5px] text-gray-300 text-[11px] leading-none select-none font-mono z-30 hidden md:block">
                                +
                            </span>
                        </div>
                    );
                })}

                {Array.from({ length: 5 }).map((_, i) => (
                    <div
                        key={`bot-${i}`}
                        className="relative border-t border-r border-gray-100"
                        style={i === 4 ? { borderRight: 'none' } : {}}
                    >
                        <span className="absolute -top-[5px] -right-[5px] text-gray-300 text-[11px] leading-none select-none font-mono z-10 hidden md:block">
                            +
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}

const GlowingCircuitBackground = () => {
    // This defines the curve. You can draw your own in Figma,
    // export as SVG, and copy the 'd' attribute here.
    const path1 = 'M -100 200 Q 200 200 300 400 T 800 500 T 1200 300';
    const path2 = 'M 200 -100 L 200 300 Q 200 450 400 450 L 1200 450';

    return (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <svg
                className="w-full h-full"
                preserveAspectRatio="xMidYMid slice"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* --- DEFINITIONS: The Glow Filter --- */}
                <defs>
                    <filter
                        id="neon-glow"
                        x="-50%"
                        y="-50%"
                        width="200%"
                        height="200%"
                    >
                        {/* The blur size dictates how far the glow spreads */}
                        <feGaussianBlur stdDeviation="12" result="blur" />
                        {/* Merges the blurred glow underneath the solid stroke */}
                        <feComposite
                            in="SourceGraphic"
                            in2="blur"
                            operator="over"
                        />
                    </filter>
                </defs>

                {/* --- PATH GROUP 1 --- */}
                <g>
                    {/* The Faint Track */}
                    <path
                        d={path1}
                        stroke="#e5e7eb" // Faint gray
                        strokeWidth="1"
                        fill="none"
                    />
                    {/* The Glowing Snake */}
                    <motion.path
                        d={path1}
                        stroke="#B6FF00" // Terminal Neon
                        strokeWidth="2"
                        fill="none"
                        filter="url(#neon-glow)"
                        strokeLinecap="round"
                        // 150 is the snake length, 1500 is the invisible gap
                        strokeDasharray="150 1500"
                        // Animate from offset 1650 to 0 to make it travel
                        initial={{ strokeDashoffset: 1650 }}
                        animate={{ strokeDashoffset: 0 }}
                        transition={{
                            duration: 12,
                            repeat: Infinity,
                            ease: 'linear',
                        }}
                    />
                </g>

                {/* --- PATH GROUP 2 --- */}
                <g>
                    <path
                        d={path2}
                        stroke="#e5e7eb"
                        strokeWidth="1"
                        fill="none"
                    />
                    <motion.path
                        d={path2}
                        stroke="#B6FF00"
                        strokeWidth="2"
                        fill="none"
                        filter="url(#neon-glow)"
                        strokeLinecap="round"
                        strokeDasharray="100 2000"
                        initial={{ strokeDashoffset: 2100 }}
                        animate={{ strokeDashoffset: 0 }}
                        transition={{
                            duration: 15,
                            repeat: Infinity,
                            ease: 'linear',
                            delay: 2,
                        }}
                    />
                </g>
            </svg>
        </div>
    );
};

const experiences = [
    {
        id: '01',
        title: 'Edible Oil',
        subtitle: 'Transportation',
        description:
            'Safe and hygienic transportation solutions for edible oil manufacturers and distributors.',
        image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2069&auto=format&fit=crop',
        accent: '#facc15',
    },
    {
        id: '02',
        title: 'Chemicals',
        subtitle: 'Logistics',
        description:
            'Reliable transportation handling for industrial and commercial chemical products.',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop',
        accent: '#0ea5e9',
    },
    {
        id: '03',
        title: 'Resins',
        subtitle: 'Transportation',
        description:
            'Secure logistics support for resin and industrial material movement.',
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop',
        accent: '#7c3aed',
    },
    {
        id: '04',
        title: 'Ethanol',
        subtitle: 'Transportation',
        description:
            'Professional and compliant ethanol transportation services with safety-first operations.',
        image: 'https://images.unsplash.com/photo-1616423640778-28d1b53229bd?q=80&w=2070&auto=format&fit=crop',
        accent: '#10b981',
    },
];

const ExperienceSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const bgTextRef = useRef<HTMLHeadingElement>(null);
    const progressRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const track = trackRef.current;
            const bgText = bgTextRef.current;

            if (!track || !bgText) return;

            const panels = gsap.utils.toArray('.exp-panel');

            const getScrollAmount = () =>
                -(track.scrollWidth - window.innerWidth);
            const getBgScrollAmount = () => -(window.innerWidth * 0.8);

            const scrollTween = gsap.to(track, {
                x: getScrollAmount,
                ease: 'none',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    pin: true,
                    scrub: 1,
                    end: () => '+=' + track.scrollWidth,
                    invalidateOnRefresh: true,
                },
            });

            gsap.to(progressRef.current, {
                scaleX: 1,
                ease: 'none',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    scrub: 1,
                    start: 'top top',
                    end: () => '+=' + track.scrollWidth,
                },
            });

            gsap.to(bgText, {
                x: getBgScrollAmount,
                ease: 'none',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    scrub: 1,
                    start: 'top top',
                    end: () => '+=' + track.scrollWidth,
                    invalidateOnRefresh: true,
                },
            });

            gsap.from('.section-label', {
                y: -20,
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top center',
                },
            });

            panels.forEach((panel: any) => {
                const img = panel.querySelector('.exp-image');
                const textGroup = panel.querySelectorAll('.stagger-text');
                const num = panel.querySelector('.exp-num');

                gsap.fromTo(
                    img,
                    { x: '15%', scale: 1.2 },
                    {
                        x: '-15%',
                        ease: 'none',
                        scrollTrigger: {
                            trigger: panel,
                            containerAnimation: scrollTween,
                            start: 'left right',
                            end: 'right left',
                            scrub: true,
                        },
                    }
                );

                gsap.from(textGroup, {
                    y: 50,
                    opacity: 0,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: panel,
                        containerAnimation: scrollTween,
                        start: 'left center',
                        toggleActions: 'play none none reverse',
                    },
                });

                gsap.from(num, {
                    y: -30,
                    opacity: 0,
                    duration: 0.8,
                    ease: 'back.out(1.5)',
                    scrollTrigger: {
                        trigger: panel,
                        containerAnimation: scrollTween,
                        start: 'left center',
                        toggleActions: 'play none none reverse',
                    },
                });
            });
        },
        { scope: sectionRef }
    );

    return (
        <section
            ref={sectionRef}
            className="relative h-screen w-full bg-[#0A1B28] text-white overflow-hidden"
        >
            <div
                ref={progressRef}
                className="absolute top-0 left-0 h-1 bg-[#B6FF00] w-full origin-left scale-x-0 z-50"
            />

            <div className="absolute top-1/2 left-0 -translate-y-1/2 whitespace-nowrap opacity-[0.03] pointer-events-none z-0">
                <h2
                    ref={bgTextRef}
                    className="text-[20vh] font-serif font-bold tracking-tighter"
                >
                    BHAGAT ENTERPRISE • TRANSPORTATION • LOGISTICS • INDUSTRY
                    LEADERS • BHAGAT ENTERPRISE • TRANSPORTATION • LOGISTICS •
                    INDUSTRY LEADERS
                </h2>
            </div>

            <div className="section-label absolute top-12 left-8 md:left-16 z-30 pointer-events-none flex items-center gap-6">
                <span className="text-[#B6FF00] font-mono text-sm tracking-widest uppercase font-bold">
                    Our Experience
                </span>
                <div className="hidden md:flex items-center gap-2 text-gray-500 font-mono text-xs uppercase opacity-70">
                    <span className="w-8 h-[1px] bg-gray-500" />
                    Scroll to explore
                </div>
            </div>

            <div ref={trackRef} className="flex h-full w-max relative z-10">
                {experiences.map((exp) => (
                    <div
                        key={exp.id}
                        className="exp-panel w-screen h-full flex flex-col md:flex-row items-center justify-center px-8 md:px-24 gap-12 md:gap-24 flex-shrink-0"
                    >
                        <div className="w-full md:w-5/12 flex flex-col pt-20 md:pt-0">
                            <div className="exp-num flex items-center gap-6 mb-8">
                                <span className="text-[#B6FF00] font-mono text-2xl tracking-widest font-bold">
                                    {exp.id}
                                </span>
                                <div className="h-[2px] w-20 bg-white/20" />
                            </div>

                            <h3 className="stagger-text font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] mb-2 tracking-tight text-white">
                                {exp.title}
                            </h3>
                            <span className="stagger-text font-sans text-3xl md:text-4xl lg:text-5xl text-[#a1b0c0] font-light tracking-tight mb-8">
                                {exp.subtitle}
                            </span>

                            <p className="stagger-text text-[#d1d5db] font-light text-lg md:text-xl leading-[1.65] max-w-md">
                                {exp.description}
                            </p>
                        </div>

                        <div className="w-full md:w-6/12 h-[50vh] md:h-[70vh] relative overflow-hidden rounded-[2rem] border border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                            <Image
                                src={exp.image}
                                alt={exp.title}
                                fill
                                className="exp-image absolute inset-0 w-full h-full object-cover"
                                unoptimized
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1B28] via-[#0A1B28]/20 to-transparent opacity-80 mix-blend-multiply" />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

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

            <GSAPPinnedBenefits />
            <LogosSection />
            <GlowingCircuitBackground />
            <ExperienceSection />

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
                                <Phone size={16} className="text-[#B6FF00]" />{' '}
                                +1 (800) 555-0199
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
        </main>
    );
}
