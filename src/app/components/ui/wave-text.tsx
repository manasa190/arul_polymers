"use client";

import { cn } from "../../../lib/utils";
import { motion } from "motion/react";

interface AnimatedTextProps {
    text?: string;
    className?: string;
    delayOffset?: number;
}

function Text_03({
    text = "Hover me",
    className = "",
    delayOffset = 0,
}: AnimatedTextProps) {
    return (
        <motion.span
            className={cn(
                "w-full text-center inline-block transition-all",
                className
            )}
        >
            {text.split("").map((char, index) => (
                <motion.span
                    key={index}
                    className="inline-block whitespace-pre"
                    variants={{
                        initial: {
                            y: 0,
                            scale: 1,
                        },
                        hover: {
                            y: -4,
                            scale: 1.2,
                            transition: {
                                type: "spring",
                                stiffness: 300,
                                damping: 15,
                                delay: (index + delayOffset) * 0.03,
                            },
                        },
                    }}
                >
                    {char}
                </motion.span>
            ))}
        </motion.span>
    );
}

export { Text_03 }
