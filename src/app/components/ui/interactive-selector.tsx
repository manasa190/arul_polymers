import React, { useState, useEffect } from 'react';
import { Factory, Car, Bike, Tractor, Plane } from 'lucide-react';
import { motion } from "motion/react";
import { Text_03 } from './wave-text';

const InteractiveSelector = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animatedOptions, setAnimatedOptions] = useState<number[]>([]);

    const options = [
        {
            title: "Industry",
            description: "Heavy-duty industrial manufacturing",
            image: "/images/industry.png",
            icon: <Factory size={22} className="text-white" />
        },
        {
            title: "Car and Truck",
            description: "High-performance automotive polymers",
            image: "/images/car_truck.png",
            icon: <Car size={22} className="text-white" />
        },
        {
            title: "Two Wheeler",
            description: "Durable and lightweight materials",
            image: "/images/two_wheeler.png",
            icon: <Bike size={22} className="text-white" />
        },
        {
            title: "Agriculture",
            description: "Resilient solutions for outdoor use",
            image: "/images/agriculture.png",
            icon: <Tractor size={22} className="text-white" />
        },
        {
            title: "Aerospace",
            description: "Advanced defense-grade formulations",
            image: "/images/aerospace.png",
            icon: <Plane size={22} className="text-white" />
        }
    ];

    const handleOptionClick = (index: number) => {
        if (index !== activeIndex) {
            setActiveIndex(index);
        }
    };

    useEffect(() => {
        const timers: number[] = [];

        options.forEach((_, i) => {
            const timer = setTimeout(() => {
                setAnimatedOptions(prev => [...prev, i]);
            }, 180 * i);
            timers.push(timer);
        });

        return () => {
            timers.forEach(timer => clearTimeout(timer));
        };
    }, []);

    return (
        <div className="relative flex flex-col items-center justify-center min-h-[600px] md:min-h-[850px] bg-slate-50 font-sans text-slate-900 w-full pt-16 md:pt-20 overflow-hidden">
            {/* Playful background shapes */}
            <div className="absolute top-10 left-10 w-64 h-64 bg-[#00609C]/10 rounded-full blur-3xl animate-pulse z-0 pointer-events-none" />
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#DF1E26]/10 rounded-full blur-3xl z-0 pointer-events-none" />

            {/* Header Section */}
            <div className="w-full max-w-4xl px-6 mt-8 mb-2 text-center z-10">
                <motion.h1
                    whileHover="hover"
                    initial="initial"
                    className="text-3xl md:text-7xl font-bold tracking-tight text-slate-900 mb-4 drop-shadow-sm animate-fadeInTop delay-300 flex flex-wrap justify-center items-center gap-x-2 md:gap-x-4 overflow-visible cursor-pointer"
                >
                    <Text_03 text="Powering" className="w-auto py-2 pointer-events-none" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00609C] to-[#DF1E26] py-2 px-1 overflow-visible pointer-events-none">
                        <Text_03 text="Industry." className="w-auto" delayOffset={9} />
                    </span>
                </motion.h1>
                <p className="text-base md:text-xl text-slate-600 font-medium max-w-sm md:max-w-xl mx-auto animate-fadeInTop delay-600">
                    Discover our specialized polymer applications across key global sectors.
                </p>
            </div>

            <div className="h-12 z-10"></div>

            {/* Options Container */}
            <div className="options flex flex-col md:flex-row w-full max-w-[1200px] h-auto md:h-[500px] px-4 md:px-0 mx-auto items-stretch overflow-hidden relative z-10 gap-4 md:gap-2">
                {options.map((option, index) => (
                    <div
                        key={index}
                        className={`
              option relative flex flex-col justify-end overflow-hidden transition-all duration-700 ease-in-out
              ${activeIndex === index ? 'active' : ''}
              rounded-2xl
            `}
                        style={{
                            backgroundImage: `url('${option.image}')`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backfaceVisibility: 'hidden',
                            opacity: animatedOptions.includes(index) ? 1 : 0,
                            transform: animatedOptions.includes(index)
                                ? 'translateY(0)'
                                : (window.innerWidth < 768 ? 'translateY(20px)' : 'translateX(-60px)'),
                            minHeight: activeIndex === index ? '280px' : '80px',
                            borderWidth: '2px',
                            borderStyle: 'solid',
                            borderColor: activeIndex === index ? 'rgba(255,255,255,0.5)' : 'transparent',
                            cursor: 'pointer',
                            boxShadow: activeIndex === index
                                ? '0 20px 40px rgba(0,96,156,0.30)'
                                : '0 10px 20px rgba(0,0,0,0.10)',
                            flex: activeIndex === index ? '12 1 0%' : '1 1 0%',
                            zIndex: activeIndex === index ? 10 : 1,
                            willChange: 'flex-grow, box-shadow, min-height'
                        }}
                        onClick={() => handleOptionClick(index)}
                    >
                        {/* Shadow overlay gradient */}
                        <div
                            className="absolute left-0 right-0 bottom-0 pointer-events-none transition-all duration-700 ease-in-out bg-gradient-to-t from-black/90 via-black/40 to-transparent"
                            style={{
                                height: activeIndex === index ? '160px' : '80px',
                            }}
                        ></div>

                        {/* Label with icon and info */}
                        <div className="absolute left-0 right-0 bottom-4 flex items-center justify-start h-12 z-20 pointer-events-none px-4 gap-3 w-full">
                            <div className={`min-w-[40px] max-w-[40px] h-[40px] md:min-w-[44px] md:max-w-[44px] md:h-[44px] flex items-center justify-center rounded-full backdrop-blur-[10px] shadow-lg flex-shrink-0 flex-grow-0 transition-all duration-500 ease-in-out ${activeIndex === index ? 'bg-[#DF1E26]' : 'bg-[#00609C]'}`}>
                                {React.cloneElement(option.icon as React.ReactElement, { size: window.innerWidth < 768 ? 18 : 22 })}
                            </div>
                            <div className="text-white whitespace-pre relative overflow-hidden flex flex-col justify-center max-w-[calc(100%-55px)]">
                                <div
                                    className="font-bold text-lg md:text-3xl transition-all duration-700 ease-in-out truncate"
                                    style={{
                                        opacity: activeIndex === index ? 1 : 0,
                                        transform: activeIndex === index ? 'translateX(0)' : 'translateX(25px)'
                                    }}
                                >
                                    {option.title}
                                </div>
                                <div
                                    className="text-xs md:text-base text-gray-200 transition-all duration-700 ease-in-out truncate"
                                    style={{
                                        opacity: activeIndex === index ? 1 : 0,
                                        transform: activeIndex === index ? 'translateX(0)' : 'translateX(25px)'
                                    }}
                                >
                                    {option.description}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Custom animations */}
            <style>{`
        @keyframes fadeInFromTop {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInTop {
          opacity: 0;
          transform: translateY(-20px);
          animation: fadeInFromTop 0.8s ease-in-out forwards;
        }
        
        .delay-300 {
          animation-delay: 0.3s;
        }
        
        .delay-600 {
          animation-delay: 0.6s;
        }
      `}</style>
        </div>
    );
};

export default InteractiveSelector;
