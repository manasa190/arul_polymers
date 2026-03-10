"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { cn } from "../../../lib/utils";

interface Tab {
    id: string;
    label: string;
    content: React.ReactNode;
}

interface AnimatedTabsProps {
    tabs: Tab[];
    defaultTab?: string;
    className?: string;
}

const AnimatedTabs = ({
    tabs,
    defaultTab,
    className,
}: AnimatedTabsProps) => {
    const [activeTab, setActiveTab] = useState<string>(defaultTab || tabs[0]?.id);

    if (!tabs?.length) return null;

    return (
        <div className={cn("w-full flex flex-col gap-y-4 md:gap-y-6", className)}>
            <div className="w-full overflow-x-auto no-scrollbar pb-2 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0">
                <div className="flex gap-1 md:gap-2 p-1.5 bg-slate-50 border border-slate-100 rounded-2xl w-max md:mx-auto">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={cn(
                                "relative px-4 md:px-6 py-2 md:py-2.5 text-xs md:text-sm font-bold rounded-xl outline-none transition-colors duration-300 whitespace-nowrap",
                                activeTab === tab.id ? "text-white" : "text-slate-500 hover:text-slate-800"
                            )}
                        >
                            {activeTab === tab.id && (
                                <motion.div
                                    layoutId="active-tab"
                                    className="absolute inset-0 bg-[#00609C] shadow-lg shadow-[#00609C]/20 rounded-xl"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            <span className="relative z-10">{tab.label}</span>
                        </button>
                    ))}
                </div>
            </div>

            <div className="relative p-1 md:p-3 bg-white rounded-[1.5rem] md:rounded-[2.5rem] border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.04)] min-h-[350px] md:min-h-[450px] overflow-hidden">
                {tabs.map(
                    (tab) =>
                        activeTab === tab.id && (
                            <motion.div
                                key={tab.id}
                                initial={{
                                    opacity: 0,
                                    y: 10,
                                    filter: "blur(4px)",
                                }}
                                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                                transition={{
                                    duration: 0.4,
                                    ease: "easeOut",
                                }}
                                className="h-full"
                            >
                                {tab.content}
                            </motion.div>
                        )
                )}
            </div>
        </div>
    );
};

export { AnimatedTabs };
