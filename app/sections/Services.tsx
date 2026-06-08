import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Image from 'next/image';
import { useRef } from 'react';

const services = [
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

const Services = () => {
    const scrollContainerRef = useRef<HTMLDivElement | null>(null);
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

            services.forEach((_, i) => {
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
                                {services.map((service) => (
                                    <span
                                        key={`num-${service.id}`}
                                        className="h-4 leading-4 flex items-center"
                                    >
                                        {service.id}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {services.map((service, index) => (
                        <Image
                            key={`img-${service.id}`}
                            ref={(el) => {
                                imageRefs.current[index] = el;
                            }}
                            src={service.image}
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

                            {services.map((service, index) => (
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
                                            Service {service.id}
                                        </span>
                                    </div>
                                    <div className="overflow-hidden py-1">
                                        <h2
                                            ref={(el) => {
                                                titleRefs.current[index] = el;
                                            }}
                                            className="block text-[34px] md:text-[40px] font-medium text-[#0A1B28] tracking-tight leading-[1.1] translate-y-0"
                                        >
                                            {service.title}
                                        </h2>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="relative w-full">
                            <div className="invisible pointer-events-none select-none">
                                <div className="py-2">
                                    <p className="block text-[17px] leading-[1.65] font-light">
                                        {services[0].description}
                                    </p>
                                </div>
                            </div>

                            {services.map((service, index) => (
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
                                            {service.description}
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

export default Services;
