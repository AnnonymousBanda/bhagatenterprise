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

const Clients = () => {
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
};

export default Clients;
