"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, useReducedMotion, AnimatePresence } from "motion/react";
import { cn } from "../../../lib/utils";

export interface GradientOption {
    id: string;
    label: string;
    value: string;
    color: string;
    gradientFrom: string;
    gradientTo: string;
    title?: string;
    desc?: string;
}

interface GradientSelectorProps {
    options: GradientOption[];
    defaultSelected?: string;
    onSelectionChange?: (option: GradientOption, index: number) => void;
    className?: string;
}

export function GradientSelector({
    options,
    defaultSelected,
    onSelectionChange,
    className
}: GradientSelectorProps) {
    const [selectedIndex, setSelectedIndex] = useState<number>(
        defaultSelected ? options.findIndex(opt => opt.id === defaultSelected) : 0
    );
    const [direction, setDirection] = useState(0);

    const [gradientPosition, setGradientPosition] = useState<{ x: number; y: number } | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const circleRefs = useRef<(HTMLDivElement | null)[]>([]);
    const shouldReduceMotion = useReducedMotion();

    // Update gradient position when selection changes
    useEffect(() => {
        if (selectedIndex >= 0 && circleRefs.current[selectedIndex] && containerRef.current) {
            const circleElement = circleRefs.current[selectedIndex];
            const containerElement = containerRef.current;

            const circleRect = circleElement.getBoundingClientRect();
            const containerRect = containerElement.getBoundingClientRect();

            const relativeX = circleRect.left + (circleRect.width / 2) - containerRect.left;
            const relativeY = circleRect.top + (circleRect.height / 2) - containerRect.top;

            setGradientPosition({ x: relativeX, y: relativeY });
        } else {
            setGradientPosition(null);
        }
    }, [selectedIndex]);

    const handleCircleClick = (option: GradientOption, index: number) => {
        setDirection(index > selectedIndex ? 1 : -1);
        setSelectedIndex(index);
        onSelectionChange?.(option, index);
    };

    const createOrbitalDots = (count: number, radius: number, color: string) => {
        const dots = [];
        for (let i = 0; i < count; i++) {
            const angle = (i / count) * 2 * Math.PI;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            dots.push(
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 rounded-full"
                    initial={{
                        opacity: 0,
                        scale: 0.3,
                        rotate: shouldReduceMotion ? 0 : -90,
                        x: x - 2,
                        y: y - 2
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        rotate: 0,
                        x: x - 2,
                        y: y - 2
                    }}
                    transition={{
                        duration: shouldReduceMotion ? 0.2 : 0.6,
                        delay: shouldReduceMotion ? 0 : i * 0.03,
                        type: "spring",
                        stiffness: 400,
                        damping: 25,
                        ease: "easeOut"
                    }}
                    style={{
                        backgroundColor: color,
                        left: '50%',
                        top: '50%',
                    }}
                />
            );
        }
        return dots;
    };

    const getLineStyle = (lineIndex: number) => {
        const isLitUp = selectedIndex > lineIndex;
        const currentOption = options[lineIndex];
        const nextOption = options[lineIndex + 1];

        if (isLitUp) {
            return {
                background: `linear-gradient(to right, ${currentOption.gradientFrom}, ${nextOption?.gradientTo || currentOption.gradientTo})`
            };
        } else {
            return {
                background: `rgba(255, 255, 255, 0.1)`
            };
        }
    };

    return (
        <div
            ref={containerRef}
            className={cn("relative flex flex-col items-center gap-12 p-12 pt-24", className)}
        >
            {selectedIndex >= 0 && gradientPosition && (
                <div
                    className="absolute inset-0 pointer-events-none z-0"
                    style={{
                        background: `radial-gradient(circle at ${gradientPosition.x}px ${gradientPosition.y + 100}px, ${options[selectedIndex].color}30 0%, transparent 60%)`,
                    }}
                />
            )}

            <div className="relative z-10 flex items-center gap-0 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full p-6 md:p-8 px-8 md:px-12 w-full md:w-auto overflow-x-auto no-scrollbar md:overflow-visible mx-2 md:mx-0">
                {options.map((option, index) => (
                    <div key={option.id} className="flex items-center shrink-0">
                        <div
                            ref={(el) => { circleRefs.current[index] = el; }}
                            className={cn(
                                "relative cursor-pointer transition-all duration-300 hover:scale-125 z-20",
                                "w-5 h-5 rounded-full border-2 border-white/20"
                            )}
                            onClick={() => handleCircleClick(option, index)}
                            style={{
                                backgroundColor: selectedIndex >= index ? option.color : 'rgba(255, 255, 255, 0.2)',
                                boxShadow: selectedIndex === index
                                    ? `0 0 30px ${option.color}60, 0 0 60px ${option.color}40`
                                    : 'none'
                            }}
                        >
                            {selectedIndex === index && createOrbitalDots(16, 22, option.color)}

                            <div className={cn(
                                "absolute -top-10 md:-top-14 left-1/2 -translate-x-1/2 text-[10px] md:text-sm font-black transition-all duration-300 whitespace-nowrap",
                                selectedIndex >= index ? "text-white opacity-100 scale-110" : "text-white/40 opacity-50 scale-100"
                            )}>
                                {option.label}
                            </div>
                        </div>

                        {index < options.length - 1 && (
                            <div
                                className="w-16 sm:w-24 md:w-32 h-1 rounded-full transition-all duration-500 z-10 -mx-1"
                                style={getLineStyle(index)}
                            />
                        )}
                    </div>
                ))}
            </div>

            <div className="relative z-10 w-full max-w-4xl text-center min-h-[140px] overflow-hidden">
                <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                        key={options[selectedIndex].id}
                        custom={direction}
                        initial={{
                            opacity: 0,
                            x: direction * 50,
                            filter: "blur(10px)"
                        }}
                        animate={{
                            opacity: 1,
                            x: 0,
                            filter: "blur(0px)"
                        }}
                        exit={{
                            opacity: 0,
                            x: -direction * 50,
                            filter: "blur(10px)"
                        }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="space-y-4"
                    >
                        <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-4">
                            {options[selectedIndex].title}
                        </h3>
                        <p className="text-lg md:text-xl text-blue-100/80 leading-relaxed font-normal max-w-2xl mx-auto">
                            {options[selectedIndex].desc}
                        </p>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
