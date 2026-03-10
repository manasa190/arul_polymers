import { motion, AnimatePresence } from "motion/react";
import { Microscope, FlaskConical, Gauge, Activity, Target, Zap, Waves, Settings, Award, Layers, Sparkles, Database, ChevronRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { StackedCardsInteraction } from "../ui/stacked-cards-interaction";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function RD() {
    const [activeTab, setActiveTab] = useState("WHAT WE DO?");

    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8 }
    };

    const sections = [
        {
            id: "WHAT WE DO?",
            icon: <Target className="w-5 h-5" />,
            title: "What We Do?",
            content: (
                <div className="space-y-6">
                    <p className="text-lg leading-relaxed text-slate-500 font-light border-l-2 border-[#DF1E26]/30 pl-6 py-1">
                        Research & Development is at the heart of all our endeavours. Our growth depends on it.
                    </p>
                    <div className="grid md:grid-cols-2 gap-8 mt-8">
                        <div className="space-y-4">
                            <p className="text-sm text-slate-500 font-medium">
                                We have developed several critical components like:
                            </p>
                            <ul className="grid grid-cols-1 gap-2">
                                {["Bonded Valve", "Electrical resistance components (8 TὨ)", "Shock Mount", "Grid separator (VARNASTURA)"].map(item => (
                                    <li key={item} className="flex items-center gap-3 p-3 bg-slate-50 border border-slate-100/50 rounded-xl text-xs font-bold text-slate-600">
                                        <CheckCircle2 className="w-3.5 h-3.5 text-[#DF1E26]" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="p-6 bg-slate-50 border border-slate-100 rounded-3xl relative overflow-hidden">
                            <h4 className="text-xs font-black mb-4 uppercase tracking-widest text-slate-400">Critical Polymers</h4>
                            <div className="flex flex-wrap gap-2">
                                {["FKM", "AEM", "ACM", "CSM", "Silicone", "Viton"].map(p => (
                                    <span key={p} className="px-3 py-1 rounded-full bg-white border border-slate-100 text-[9px] font-bold text-slate-500 tracking-widest uppercase">
                                        {p}
                                    </span>
                                ))}
                            </div>
                            <p className="mt-6 text-[11px] text-slate-400 font-light leading-relaxed">
                                High-performance elastomers for extreme environments.
                            </p>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: "FACILITY",
            icon: <Settings className="w-5 h-5" />,
            title: "Facility",
            content: (
                <div className="space-y-16">
                    {/* Top Row: Text Left, f1.png Right */}
                    <div className="flex flex-col md:flex-row gap-10 items-center">
                        <div className="flex-1 space-y-4">
                            <h3 className="text-2xl font-bold text-slate-800 tracking-tight">Equipped to excel</h3>
                            <p className="text-sm text-slate-500 leading-relaxed font-light">
                                Our facilities are world class and we have invested in the finest technologies and process systems to ensure that every product that rolls out of our factory meet the highest quality standards. Constant upgrading of facilities, strong R&D and testing parameters all add up to position us on the cutting edge.
                            </p>
                        </div>
                        <div className="flex-1 w-full relative aspect-video rounded-2xl overflow-hidden shadow-sm border border-slate-100">
                            <ImageWithFallback
                                src="/images/f1.png"
                                alt="Advanced Testing Facility"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Bottom Row: f2.png Left, Text Right */}
                    <div className="flex flex-col md:flex-row-reverse gap-10 items-center">
                        <div className="flex-1 space-y-4">
                            <h3 className="text-2xl font-bold text-slate-800 tracking-tight">Innovation is the key</h3>
                            <p className="text-sm text-slate-500 leading-relaxed font-light">
                                As a company that responds to customer requirements with customized solutions, innovation rides high with us. This challenge is what drives us and going by our track record no challenge is challenge enough for us.
                            </p>
                            <div className="pt-4 flex gap-4">
                                <div className="px-4 py-2 rounded-lg bg-slate-50 border border-slate-100 text-[10px] font-black uppercase tracking-widest text-[#00609C]">Customized Solutions</div>
                                <div className="px-4 py-2 rounded-lg bg-slate-50 border border-slate-100 text-[10px] font-black uppercase tracking-widest text-[#DF1E26]">Global Track Record</div>
                            </div>
                        </div>
                        <div className="flex-1 w-full relative aspect-video rounded-2xl overflow-hidden shadow-sm border border-slate-100">
                            <ImageWithFallback
                                src="/images/f2.png"
                                alt="Innovation & R&D"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: "STANDARDS",
            icon: <Award className="w-5 h-5" />,
            title: "Standards",
            content: (
                <div className="space-y-12">
                    <div className="max-w-xl">
                        <h3 className="text-xl font-bold text-slate-800 tracking-tight mb-2">Measuring up to International Quality Standards</h3>
                        <p className="text-sm text-slate-500 leading-relaxed font-light">
                            The fact that we cater to a wide global clientele entitles that our quality standards are on par with the best. Our testing parameters are spot on and meet the most stringent standards.
                        </p>
                    </div>

                    <div className="relative w-full max-w-4xl mx-auto rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm">
                        <ImageWithFallback
                            src="/images/s.png"
                            alt="International Standards Chart"
                            className="w-full h-auto"
                        />
                    </div>
                </div>
            )
        },
        {
            id: "OUR RANGE OF RUBBERS",
            icon: <Database className="w-5 h-5" />,
            title: "Our Range of Rubbers",
            content: (
                <div className="space-y-12">
                    <div className="max-w-2xl">
                        <p className="text-sm text-slate-500 leading-relaxed font-light mb-6">
                            We have developed various compounds for the hardness ranging from 35 – 100 shore A & 35 to 90 shore D, using a wide range of polymers such as NR, SBR, Nitrile, NBR + PVC, Silicone, Viton, EPDM, Hypalon.
                        </p>
                    </div>
                    <div className="relative w-full max-w-4xl mx-auto rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm">
                        <ImageWithFallback
                            src="/images/r.png"
                            alt="Range of Rubbers"
                            className="w-full h-auto"
                        />
                    </div>
                </div>
            )
        },
        {
            id: "TESTING EQUIPMENTS",
            icon: <FlaskConical className="w-5 h-5" />,
            title: "Testing Equipments",
            content: (
                <div className="space-y-12">
                    <div className="max-w-2xl">
                        <p className="text-sm text-slate-500 leading-relaxed font-light mb-6">
                            Our Research and Development includes state of art testing equipment and testing machines that are regularly maintained and calibrated. Various testing procedures are carried out from raw material stage to the final products.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center py-10">
                        <div className="h-[350px] md:h-[450px] flex items-center justify-center">
                            <StackedCardsInteraction
                                cards={[
                                    {
                                        image: "/images/e1.png",
                                        title: "Tensile Tester",
                                        description: "Precision tensile strength and elongation testing for polymer samples."
                                    },
                                    {
                                        image: "/images/e2.png",
                                        title: "Rheometer",
                                        description: "Advanced curing characteristics and viscosity measurement."
                                    },
                                    {
                                        image: "/images/e3.png",
                                        title: "Durometer",
                                        description: "Shore A & D hardness testing for precise material grading."
                                    }
                                ]}
                            />
                        </div>
                        <div className="h-[350px] md:h-[450px] flex items-center justify-center">
                            <StackedCardsInteraction
                                cards={[
                                    {
                                        image: "/images/e4.png",
                                        title: "Specific Gravity",
                                        description: "High-accuracy balance for density verification."
                                    },
                                    {
                                        image: "/images/e5.png",
                                        title: "Aging Oven",
                                        description: "Accelerated aging tests for long-term durability assessment."
                                    },
                                    {
                                        image: "/images/e6.png",
                                        title: "Compression Set",
                                        description: "Testing rubber recovery properties under constant load."
                                    },
                                    {
                                        image: "/images/e7.png",
                                        title: "Microscopic Analysis",
                                        description: "Structural evaluation and molecular distribution analysis."
                                    }
                                ]}
                            />
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: "EXPERIENCE",
            icon: <Activity className="w-5 h-5" />,
            title: "Experience",
            content: (
                <div className="space-y-12">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-6">
                            <h4 className="text-lg font-bold text-[#00609C] uppercase tracking-tight">Expertise since 1978</h4>
                            <p className="text-sm text-slate-500 leading-relaxed font-light">
                                Since 1978, rubber has been our mainstay. We have perfected the art of compounding—an intricate process using varied ingredient ratios.
                            </p>
                            <div className="p-6 rounded-2xl border-l-4 border-[#00609C] bg-blue-50/30">
                                <p className="text-xs italic font-medium text-slate-600 leading-relaxed">"Consistently ensuring quality through decades of field expertise."</p>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <h4 className="text-lg font-bold text-[#DF1E26] uppercase tracking-tight">Thinking Out of the Box</h4>
                            <p className="text-sm text-slate-500 leading-relaxed font-light">
                                Constant innovation distinguishes our pursuit. Every step optimize quality and speeds up production parameters.
                            </p>
                            <div className="flex gap-4">
                                <div className="p-6 rounded-xl border border-blue-100 bg-blue-50/50 flex-1 text-center group hover:bg-[#00609C] transition-colors">
                                    <div className="text-2xl font-black text-[#00609C] group-hover:text-white mb-1 transition-colors">1978</div>
                                    <div className="text-[8px] font-black text-[#00609C]/60 group-hover:text-white/60 uppercase tracking-widest transition-colors">Start</div>
                                </div>
                                <div className="p-6 rounded-xl border border-red-100 bg-red-50/50 flex-1 text-center group hover:bg-[#DF1E26] transition-colors">
                                    <div className="text-2xl font-black text-[#DF1E26] group-hover:text-white mb-1 transition-colors">20+</div>
                                    <div className="text-[8px] font-black text-[#DF1E26]/60 group-hover:text-white/60 uppercase tracking-widest transition-colors">Experts</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }

    ];

    return (
        <div className="bg-white text-slate-900 min-h-screen pt-32 pb-24 font-outfit">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* RD Hero */}
                <motion.div {...fadeIn} className="max-w-4xl mx-auto text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-[#DF1E26] text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                        <Microscope className="w-3 h-3" /> Core Endeavour
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tight">
                        Research & <span className="text-[#DF1E26]">Development</span>
                    </h1>
                </motion.div>

                {/* Main Interactive Section */}
                <div className="flex flex-col lg:flex-row gap-12 bg-white rounded-[3rem] border border-slate-100 shadow-2xl p-4 md:p-8 min-h-[600px]">

                    {/* Sidebar Navigation */}
                    <div className="lg:w-1/3 lg:border-r border-slate-100 pr-0 lg:pr-8 py-4">
                        <div className="flex flex-col gap-1 sticky top-36">
                            {sections.map((section) => (
                                <button
                                    key={section.id}
                                    onClick={() => setActiveTab(section.id)}
                                    className={`flex items-center justify-between group px-4 py-3 rounded-xl transition-all duration-200 text-left mb-1 ${activeTab === section.id
                                        ? "bg-red-50 text-[#DF1E26] border-l-4 border-[#DF1E26]"
                                        : "bg-transparent text-slate-400 hover:text-slate-600 border-l-4 border-transparent"
                                        }`}
                                >
                                    <span className={`text-xs font-bold uppercase tracking-widest ${activeTab === section.id ? "text-[#DF1E26]" : "text-slate-500"
                                        }`}>
                                        {section.id}
                                    </span>
                                    <ChevronRight className={`w-4 h-4 transition-transform ${activeTab === section.id ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0 group-hover:opacity-40"}`} />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Dynamic Content Area */}
                    <div className="lg:w-3/4 py-4 lg:pl-10">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                                className="h-full"
                            >
                                {/* Header for content */}
                                <div className="mb-8">
                                    <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight">
                                        {activeTab}
                                    </h2>
                                    <div className="h-0.5 w-12 bg-[#DF1E26] mt-2 rounded-full" />
                                </div>

                                {/* Actual Tab Content */}
                                <div className="text-slate-600">
                                    {sections.find(s => s.id === activeTab)?.content}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

            </div>
        </div>
    );
}
