"use client";

import { cn } from "../../../lib/utils";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

const Card = ({
    className,
    image,
    children,
}: {
    className?: string;
    image?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "w-[280px] md:w-[350px] cursor-pointer h-[320px] md:h-[400px] overflow-hidden bg-white/90 backdrop-blur-md rounded-[2rem] shadow-xl border border-white/20 relative group/card",
                className
            )}
        >
            {/* Accent Border */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00609C] to-[#DF1E26] opacity-70" />

            {image && (
                <div className="relative h-40 md:h-64 rounded-3xl shadow-2xl overflow-hidden w-[calc(100%-1.5rem)] mx-3 mt-4 border border-white/10">
                    <img
                        src={image}
                        alt="card"
                        className="object-cover w-full h-full transition-transform duration-500 group-hover/card:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
                </div>
            )}
            {children && (
                <div className="px-6 py-4 flex flex-col gap-y-2">{children}</div>
            )}
        </div>
    );
};

interface CardData {
    image: string;
    title: string;
    description: string;
}

const StackedCardsInteraction = ({
    cards,
    spreadDistance = 20, // Reduced for a tighter deck feel
    rotationAngle = 3,
    animationDelay = 0.05,
}: {
    cards: CardData[];
    spreadDistance?: number;
    rotationAngle?: number;
    animationDelay?: number;
}) => {
    const [isHovering, setIsHovering] = useState(false);
    const [order, setOrder] = useState(cards.map((_, i) => i));
    const [isShuffling, setIsShuffling] = useState(false);

    const moveFrontToBack = () => {
        if (isShuffling) return;
        setIsShuffling(true);

        // Let the animation play first, then update the state
        setTimeout(() => {
            setOrder((prevOrder) => {
                const front = prevOrder[0];
                const rest = prevOrder.slice(1);
                return [...rest, front];
            });
            setIsShuffling(false);
        }, 400); // Matches animation duration
    };

    return (
        <div className="relative w-full h-full flex items-center justify-center">
            <div
                className="relative w-[280px] md:w-[350px] h-[320px] md:h-[400px]"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
            >
                <AnimatePresence initial={false}>
                    {order.slice().reverse().map((cardIndex, visualIndex) => {
                        const card = cards[cardIndex];
                        const positionInStack = order.indexOf(cardIndex);
                        const isFront = positionInStack === 0;

                        // Vertical stacking visuals
                        const yOffset = positionInStack * 15;
                        const scale = 1 - positionInStack * 0.05;
                        const opacity = 1 - positionInStack * 0.2;
                        const rotation = positionInStack * rotationAngle * (cardIndex % 2 === 0 ? 1 : -1);

                        return (
                            <motion.div
                                key={cardIndex}
                                className={cn(
                                    "absolute inset-0 origin-bottom",
                                    isFront ? "cursor-pointer" : "pointer-events-none"
                                )}
                                style={{
                                    zIndex: cards.length - positionInStack,
                                }}
                                animate={isShuffling && isFront ? {
                                    x: [0, 200, 0],
                                    rotate: [0, 20, 0],
                                    scale: [1, 1.05, 0.8],
                                    zIndex: [20, 20, 0],
                                } : {
                                    y: isHovering ? yOffset : 0,
                                    x: 0,
                                    rotate: isHovering ? rotation : 0,
                                    scale: scale,
                                    opacity: opacity,
                                }}
                                transition={{
                                    duration: isShuffling && isFront ? 0.6 : 0.4,
                                    ease: "circOut"
                                }}
                                onClick={() => isFront && moveFrontToBack()}
                            >
                                <Card
                                    className={cn(
                                        "transition-shadow duration-300",
                                        isFront ? "shadow-2xl ring-4 ring-white" : "shadow-lg grayscale-[0.3]"
                                    )}
                                    image={card.image}
                                >
                                    <h2 className="font-black text-slate-800 text-[11px] uppercase tracking-tight">{card.title}</h2>
                                    <p className="text-[9px] text-slate-500 leading-tight line-clamp-2">{card.description}</p>
                                </Card>
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
            </div>
        </div>
    );
};

export { StackedCardsInteraction, Card };
