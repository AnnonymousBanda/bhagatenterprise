import gsap from 'gsap';

import { useGSAP } from '@gsap/react';

import Image from 'next/image';
import { useRef } from 'react';

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

const Experience = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const bgTextRef = useRef<HTMLHeadingElement>(null);
    const progressRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const track = trackRef.current;
            const bgText = bgTextRef.current;

            if (!track || !bgText) return;

            const panels = gsap.utils.toArray<HTMLElement>('.exp-panel');
            let cachedScrollWidth = track.scrollWidth;

            gsap.set([track, bgText, '.exp-image', '.exp-panel'], {
                willChange: 'transform',
                force3D: true,
            });

            const scrollTween = gsap.to(track, {
                x: () => -(track.scrollWidth - window.innerWidth),
                ease: 'none',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    pin: true,
                    scrub: 0.5,
                    anticipatePin: 1,
                    fastScrollEnd: true,
                    end: () => {
                        cachedScrollWidth = track.scrollWidth;
                        return '+=' + cachedScrollWidth;
                    },
                    invalidateOnRefresh: true,
                },
            });

            gsap.to(progressRef.current, {
                scaleX: 1,
                ease: 'none',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    scrub: 0.5,
                    start: 'top top',
                    end: () => '+=' + cachedScrollWidth,
                },
            });

            gsap.to(bgText, {
                x: () => -(window.innerWidth * 0.8),
                ease: 'none',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    scrub: 3,
                    start: 'top top',
                    end: () => '+=' + cachedScrollWidth,
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

            panels.forEach((panel) => {
                const img = panel.querySelector('.exp-image');
                const textGroup = panel.querySelectorAll('.stagger-text');
                const num = panel.querySelector('.exp-num');

                gsap.fromTo(
                    img,
                    { x: '12%' },
                    {
                        x: '-12%',
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

                gsap.from([...Array.from(textGroup), num], {
                    y: 40,
                    opacity: 0,
                    duration: 0.7,
                    stagger: 0.1,
                    ease: 'power3.out',
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

                        <div
                            className="w-full md:w-6/12 h-[50vh] md:h-[70vh] relative rounded-[2rem] border border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                            style={{ transform: 'translateZ(0)' }}
                        >
                            <Image
                                src={`${exp.image}&w=1200&q=75`}
                                alt={exp.title}
                                fill
                                sizes="(max-width: 768px) 100vw, 55vw"
                                className="exp-image absolute inset-0 w-full h-full object-cover rounded-[2rem]"
                                style={{
                                    willChange: 'transform',
                                    transform: 'translateZ(0)',
                                }}
                                priority={exp.id === '01'}
                            />
                            <div
                                className="absolute inset-0 rounded-[2rem] pointer-events-none z-10"
                                style={{
                                    background:
                                        'linear-gradient(to top, #0A1B28 0%, transparent 60%)',
                                }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
