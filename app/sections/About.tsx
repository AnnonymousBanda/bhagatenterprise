import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const SplitText = ({
    text,
    className = '',
    letterClass = '',
    startColor = 'rgba(255,255,255,0.12)',
    endColor = '#ffffff',
}: {
    text: string;
    className?: string;
    letterClass?: string;
    startColor?: string;
    endColor?: string;
}) => (
    <span className={`inline-block ${className}`}>
        {text.split(' ').map((word, wordIndex) => (
            <span
                key={wordIndex}
                className="inline-block whitespace-nowrap mr-[0.2em]"
            >
                {word.split('').map((char, charIndex) => (
                    <span
                        key={charIndex}
                        className="inline-block overflow-hidden"
                        style={{ verticalAlign: 'bottom' }}
                    >
                        <span
                            className={`inline-block ${letterClass}`}
                            style={{
                                transform: 'translateY(115%)',
                                color: startColor,
                            }}
                            data-end-color={endColor}
                        >
                            {char}
                        </span>
                    </span>
                ))}
            </span>
        ))}
    </span>
);

const About = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            gsap.set('.route-line', {
                strokeDasharray: 150,
                strokeDashoffset: 150,
            });
            gsap.set('.location-label', { opacity: 0 });
            gsap.set('.node-kolkata', {
                opacity: 0,
                scale: 0,
                transformOrigin: 'center',
            });
            gsap.set('.map-bg', {
                filter: 'blur(8px) grayscale(1)',
                opacity: 0.28,
                scale: 0.95,
            });
            gsap.set('.frame2', { autoAlpha: 0 });
            gsap.set('.f1-meta', { opacity: 0, y: 10 });
            gsap.set('.f1-photo', {
                opacity: 0,
                scale: 1.08,
                filter: 'blur(10px)',
            });
            gsap.set('.f1-line', { scaleX: 0, transformOrigin: 'left center' });
            gsap.set('.frame2-subtitle', { opacity: 0, y: 12 });
            gsap.set(
                '.list-index-0, .list-index-1, .list-index-2, .list-index-3',
                {
                    opacity: 0,
                    x: -14,
                }
            );

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    pin: true,
                    scrub: 1,
                    start: 'top top',
                    end: '+=5500',
                },
            });

            tl.to('.f1-meta', {
                opacity: 1,
                y: 0,
                duration: 0.4,
                stagger: 0.12,
            })

                .to(
                    '.frame1-title-white .letter-inner',
                    {
                        y: '0%',
                        color: '#ffffff',
                        duration: 0.2,
                        stagger: 0.035,
                        ease: 'power3.out',
                    },
                    '-=0.1'
                )

                .to(
                    '.frame1-title-lime .letter-inner',
                    {
                        y: '0%',
                        color: '#B6FF00',
                        duration: 0.2,
                        stagger: 0.035,
                        ease: 'power3.out',
                    },
                    '-=0.35'
                )

                .to(
                    '.f1-line',
                    { scaleX: 1, duration: 0.6, ease: 'power2.inOut' },
                    '-=0.1'
                )

                .to('.f1-prop', { opacity: 1, y: 0, duration: 0.4 }, '-=0.3')

                .to(
                    '.f1-photo',
                    {
                        opacity: 1,
                        scale: 1,
                        filter: 'blur(0px)',
                        duration: 1.1,
                        ease: 'power2.out',
                    },
                    '-=0.5'
                )

                .to(
                    '.frame1',
                    {
                        opacity: 0,
                        y: -50,
                        filter: 'blur(10px)',
                        duration: 0.8,
                        ease: 'power2.inOut',
                    },
                    '+=0.9'
                )

                .to('.frame2', { autoAlpha: 1, duration: 0.1 })
                .to('.frame2-subtitle', { opacity: 1, y: 0, duration: 0.4 })

                .to(
                    '.list-index-0',
                    { opacity: 1, x: 0, duration: 0.25, ease: 'power2.out' },
                    '+=0.05'
                )
                .to(
                    '.frame2-item-0 .letter-inner',
                    {
                        y: '0%',
                        color: '#ffffff',
                        duration: 0.16,
                        stagger: 0.022,
                        ease: 'power3.out',
                    },
                    '<'
                )
                .to('.list-index-1', {
                    opacity: 1,
                    x: 0,
                    duration: 0.25,
                    ease: 'power2.out',
                })
                .to(
                    '.frame2-item-1 .letter-inner',
                    {
                        y: '0%',
                        color: '#ffffff',
                        duration: 0.16,
                        stagger: 0.022,
                        ease: 'power3.out',
                    },
                    '<'
                )
                .to('.list-index-2', {
                    opacity: 1,
                    x: 0,
                    duration: 0.25,
                    ease: 'power2.out',
                })
                .to(
                    '.frame2-item-2 .letter-inner',
                    {
                        y: '0%',
                        color: '#ffffff',
                        duration: 0.16,
                        stagger: 0.022,
                        ease: 'power3.out',
                    },
                    '<'
                )
                .to('.list-index-3', {
                    opacity: 1,
                    x: 0,
                    duration: 0.25,
                    ease: 'power2.out',
                })
                .to(
                    '.frame2-item-3 .letter-inner',
                    {
                        y: '0%',
                        color: '#ffffff',
                        duration: 0.16,
                        stagger: 0.022,
                        ease: 'power3.out',
                    },
                    '<'
                )

                .to(
                    '.frame2',
                    {
                        opacity: 0,
                        y: -50,
                        filter: 'blur(10px)',
                        duration: 0.8,
                        ease: 'power2.inOut',
                    },
                    '+=0.9'
                )

                .to('.map-bg', {
                    filter: 'blur(0px) grayscale(1)',
                    opacity: 0.82,
                    scale: 1,
                    duration: 1.5,
                    ease: 'power2.out',
                })
                .to(
                    '.node-kolkata',
                    {
                        opacity: 1,
                        scale: 1,
                        duration: 0.5,
                        ease: 'back.out(1.7)',
                    },
                    '+=0.6'
                )
                .to('.route-line', {
                    strokeDashoffset: 0,
                    duration: 2,
                    ease: 'power1.inOut',
                })
                .to(
                    '.location-label',
                    { opacity: 1, duration: 0.8, stagger: 0.2 },
                    '-=1'
                );
        },
        { scope: containerRef }
    );

    return (
        <section
            ref={containerRef}
            className="relative w-full h-screen bg-[#0A1B28] text-white overflow-hidden font-sans"
        >
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-[0.04]">
                <defs>
                    <pattern
                        id="crossGrid"
                        width="64"
                        height="64"
                        patternUnits="userSpaceOnUse"
                    >
                        <path
                            d="M 32 28 L 32 36 M 28 32 L 36 32"
                            fill="none"
                            stroke="#B6FF00"
                            strokeWidth="0.5"
                        />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#crossGrid)" />
            </svg>

            <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
                <div className="relative w-[90vw] h-[90vh] max-w-5xl">
                    <img
                        src="/map.svg"
                        alt="India Map"
                        className="map-bg absolute inset-0 w-full h-full object-contain"
                    />
                    <svg
                        viewBox="0 0 242 280"
                        className="absolute inset-0 w-full h-full overflow-visible"
                    >
                        <circle
                            cx="175"
                            cy="135"
                            r="3"
                            fill="#B6FF00"
                            className="node-kolkata"
                        />
                        <circle
                            cx="175"
                            cy="135"
                            r="8"
                            fill="#B6FF00"
                            opacity="0.25"
                            className="node-kolkata"
                        />
                        <path
                            d="M175,135 Q165,120 150,110"
                            className="route-line"
                            fill="none"
                            stroke="#B6FF00"
                            strokeWidth="1"
                            strokeLinecap="round"
                        />
                        <circle
                            cx="150"
                            cy="110"
                            r="1.5"
                            fill="#B6FF00"
                            className="location-label"
                        />
                        <text
                            x="146"
                            y="105"
                            fill="#8492a6"
                            className="location-label font-mono text-[6px] tracking-widest uppercase"
                            textAnchor="end"
                        >
                            Bihar
                        </text>
                        <path
                            d="M175,135 Q145,140 115,160"
                            className="route-line"
                            fill="none"
                            stroke="#B6FF00"
                            strokeWidth="1"
                            strokeLinecap="round"
                        />
                        <circle
                            cx="115"
                            cy="160"
                            r="1.5"
                            fill="#B6FF00"
                            className="location-label"
                        />
                        <text
                            x="110"
                            y="163"
                            fill="#8492a6"
                            className="location-label font-mono text-[6px] tracking-widest uppercase"
                            textAnchor="end"
                        >
                            Nagpur
                        </text>
                        <path
                            d="M175,135 Q170,150 160,165"
                            className="route-line"
                            fill="none"
                            stroke="#B6FF00"
                            strokeWidth="1"
                            strokeLinecap="round"
                        />
                        <circle
                            cx="160"
                            cy="165"
                            r="1.5"
                            fill="#B6FF00"
                            className="location-label"
                        />
                        <text
                            x="156"
                            y="172"
                            fill="#8492a6"
                            className="location-label font-mono text-[6px] tracking-widest uppercase"
                            textAnchor="end"
                        >
                            Odisha
                        </text>
                        <path
                            d="M175,135 Q140,125 110,135"
                            className="route-line"
                            fill="none"
                            stroke="#B6FF00"
                            strokeWidth="1"
                            strokeLinecap="round"
                        />
                        <circle
                            cx="110"
                            cy="135"
                            r="1.5"
                            fill="#B6FF00"
                            className="location-label"
                        />
                        <text
                            x="106"
                            y="133"
                            fill="#8492a6"
                            className="location-label font-mono text-[6px] tracking-widest uppercase"
                            textAnchor="end"
                        >
                            Madhya Pradesh
                        </text>
                        <text
                            x="182"
                            y="137"
                            fill="#B6FF00"
                            className="node-kolkata font-mono text-[8px] font-medium tracking-widest"
                        >
                            KOL
                        </text>
                    </svg>
                </div>
            </div>

            <div className="frame1 absolute inset-0 z-10 flex items-center justify-center px-8 md:px-14 lg:px-20">
                <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center lg:items-end gap-10 lg:gap-20">
                    <div className="flex-1 min-w-0 flex flex-col">
                        <p className="f1-meta text-[#8492a6] font-mono text-[11px] tracking-[0.3em] uppercase mb-5">
                            Estd. Since 1997
                        </p>

                        <h1 className="text-[clamp(3.2rem,9.5vw,8rem)] font-semibold tracking-tighter leading-[0.88]">
                            <SplitText
                                text="BHAGAT"
                                className="frame1-title-white block"
                                letterClass="letter-inner"
                                startColor="rgba(255,255,255,0.1)"
                                endColor="#ffffff"
                            />
                        </h1>

                        <h1 className="text-[clamp(3.2rem,9.5vw,8rem)] font-semibold tracking-tighter leading-[0.88] mb-5">
                            <SplitText
                                text="ENTERPRISE"
                                className="frame1-title-lime block"
                                letterClass="letter-inner"
                                startColor="rgba(182,255,0,0.1)"
                                endColor="#B6FF00"
                            />
                        </h1>

                        <div className="f1-line h-px bg-[#B6FF00] w-full mb-5" />

                        <p
                            className="f1-prop text-[#8492a6] font-mono text-[11px] tracking-[0.28em] uppercase"
                            style={{ opacity: 0, transform: 'translateY(8px)' }}
                        >
                            Proprietor — RK Bhagat
                        </p>
                    </div>

                    <div className="f1-photo relative flex-shrink-0 w-44 md:w-52 lg:w-60 xl:w-64">
                        <div className="absolute -top-2 -left-2 w-5 h-5 border-t-2 border-l-2 border-[#B6FF00]" />
                        <div className="absolute -top-2 -right-2 w-5 h-5 border-t-2 border-r-2 border-[#B6FF00]" />
                        <div className="absolute -bottom-2 -left-2 w-5 h-5 border-b-2 border-l-2 border-[#B6FF00]" />
                        <div className="absolute -bottom-2 -right-2 w-5 h-5 border-b-2 border-r-2 border-[#B6FF00]" />

                        <img
                            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80"
                            alt="RK Bhagat — Proprietor"
                            className="w-full aspect-[3/4] object-cover object-top"
                            style={{
                                filter: 'grayscale(1) contrast(1.08) brightness(0.92)',
                            }}
                        />

                        <div
                            className="absolute inset-0 pointer-events-none"
                            style={{
                                backgroundImage:
                                    'repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,0.08) 2px,rgba(0,0,0,0.08) 4px)',
                            }}
                        />

                        <div
                            className="absolute bottom-0 left-0 right-0 px-3 py-2 flex justify-between items-center"
                            style={{ background: 'rgba(10,27,40,0.75)' }}
                        >
                            <span className="font-mono text-[9px] tracking-[0.2em] text-[#8492a6] uppercase">
                                Kolkata, India
                            </span>
                            <span className="font-mono text-[9px] tracking-widest text-[#B6FF00]">
                                KOL
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="frame2 absolute inset-0 z-10 flex flex-col items-center justify-center px-8 md:px-20 lg:px-32 w-full">
                <div className="w-full max-w-5xl">
                    <p className="frame2-subtitle text-[#B6FF00] font-mono text-sm md:text-lg tracking-[0.28em] uppercase mb-8">
                        &gt; WE EXCEL IN_
                    </p>
                    <div className="flex flex-col w-full">
                        {[
                            'EDIBLE OIL TRANSPORTATION',
                            'TANKER SERVICE',
                            'BULK DELIVERY',
                            'GOODS TRANSPORT',
                        ].map((item, index) => (
                            <div
                                key={index}
                                className={`flex items-center gap-5 border-b border-[#1E3A52] py-5 md:py-6`}
                            >
                                <span
                                    className={`list-index-${index} text-[#B6FF00] font-mono text-base md:text-xl tabular-nums w-8 flex-shrink-0`}
                                >
                                    0{index + 1}
                                </span>
                                <div className="text-[clamp(1.6rem,4.5vw,3.5rem)] font-semibold tracking-tight">
                                    <SplitText
                                        text={item}
                                        className={`frame2-item-${index} block`}
                                        letterClass="letter-inner"
                                        startColor="rgba(255,255,255,0.1)"
                                        endColor="#ffffff"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
