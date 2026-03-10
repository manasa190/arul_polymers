import { motion } from "motion/react";
import { Factory, Cpu, Layers, ShieldCheck, Microscope } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Carousel } from "../ui/carousel";

export function Infrastructure() {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8 }
    };

    return (
        <div className="bg-white text-slate-900 min-h-screen pt-32 pb-24 font-outfit overflow-x-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header Section */}
                <motion.div {...fadeIn} className="max-w-4xl mx-auto text-center mb-24">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#00609C] text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                        <Factory className="w-3 h-3" /> Technical Backbone
                    </div>
                    <h1 className="text-4xl md:text-7xl font-black mb-6 md:mb-8 leading-tight tracking-tight text-slate-900">
                        Our <span className="text-[#00609C]">Infrastructure</span>
                    </h1>
                    <p className="text-base md:text-xl text-slate-500 font-light leading-relaxed max-w-3xl mx-auto">
                        A major investment in cutting-edge rubber processing technology to stay competitive and relevant to the evolving needs of the global market.
                    </p>
                </motion.div>

                {/* Narrative Sections - Card Grid Layout */}
                <div className="grid md:grid-cols-3 gap-8 mb-32">

                    {/* Visionary Card */}
                    <motion.div {...fadeIn} className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 space-y-6">
                        <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center text-[#00609C]">
                            <Cpu className="w-6 h-6" />
                        </div>
                        <h2 className="text-2xl font-black text-slate-900 leading-snug">Global Standards, <br />Local Excellence</h2>
                        <p className="text-slate-500 text-sm leading-relaxed font-light">
                            As befitting a company that seeks to stay on the cutting edge of rubber processing technology, we have made major investments in building strong infrastructure which essentially is the backbone of our efforts to stay competitive. Our facilities are on par with the best in the world with state of the art machinery and highly skilled professionals.
                        </p>
                    </motion.div>

                    {/* Shop Floor Card */}
                    <motion.div {...fadeIn} className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 space-y-6">
                        <div className="w-12 h-12 rounded-2xl bg-red-100 flex items-center justify-center text-[#DF1E26]">
                            <Layers className="w-6 h-6" />
                        </div>
                        <h2 className="text-2xl font-black text-slate-900 leading-snug">The Spacious <br />Shop Floor</h2>
                        <p className="text-slate-500 text-sm leading-relaxed font-light">
                            The shop floor is spacious and houses all our manufacturing facilities, integrated to ensure seamless functionality. This includes the mixing yard with mixing mill and kneaders, and moulding zone with semi-automatic carbon batching facilities.
                        </p>
                    </motion.div>

                    {/* Quality Card */}
                    <motion.div {...fadeIn} className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 space-y-6">
                        <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-600">
                            <ShieldCheck className="w-6 h-6" />
                        </div>
                        <h2 className="text-2xl font-black text-slate-900 leading-snug">Constant Quality <br />Control</h2>
                        <p className="text-slate-500 text-sm leading-relaxed font-light">
                            Constant quality control checks are carried out to ensure standards are met and we regularly update information, processes and technologies to stay relevant to the needs of the customers.
                        </p>
                    </motion.div>
                </div>

                {/* Infrastructure Highlight - The 6 PNGs in a Row Animations */}
                <div className="space-y-16 mb-32">
                    <div className="text-center relative">
                        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter bg-gradient-to-r from-[#00609C] to-[#DF1E26] bg-clip-text text-transparent inline-block relative">
                            Infrastructure Showcase
                            <motion.svg
                                className="absolute -bottom-4 left-0 w-full h-3 text-[#DF1E26]"
                                viewBox="0 0 300 20"
                                fill="none"
                                preserveAspectRatio="none"
                                initial={{ pathLength: 0, opacity: 0 }}
                                whileInView={{ pathLength: 1, opacity: 1 }}
                                transition={{ duration: 1.2, ease: "easeOut" }}
                            >
                                <path
                                    d="M0 10C50 0 100 20 150 10C200 0 250 20 300 10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                />
                            </motion.svg>
                        </h2>
                    </div>

                    <div className="relative h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
                        <Carousel slides={[
                            { title: "Mixing Yard", button: "", src: "/images/1.png" },
                            { title: "Moulding Zone", button: "", src: "/images/3.png" },
                            { title: "Quality Lab", button: "", src: "/images/4.png" },
                            { title: "Production Line", button: "", src: "/images/5.png" },
                            { title: "Technical Center", button: "", src: "/images/6.png" },
                        ]} />
                    </div>
                </div>

                {/* Experience Banner - Premium Redesign */}
                <motion.div
                    {...fadeIn}
                    className="relative p-8 md:p-24 rounded-[3rem] md:rounded-[4rem] bg-white border border-slate-100 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.05)] overflow-hidden mb-32 group"
                >
                    {/* Artistic Glows */}
                    <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#00609C]/5 blur-[80px] md:blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#DF1E26]/5 blur-[80px] md:blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />

                    <div className="relative z-10 grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/5 text-slate-500 text-[10px] font-black uppercase tracking-[0.3em] mb-6 md:mb-8">
                                <Microscope className="w-3 h-3" /> The Alchemy of Rubber
                            </div>
                            <h3 className="text-3xl md:text-6xl font-black mb-6 md:mb-8 leading-[1.2] md:leading-[1.1] tracking-tighter text-slate-900">
                                Rubber Compounding <br />
                                is both a <span className="text-[#00609C] italic">Science</span> <br className="hidden md:block" />
                                <span className="md:hidden"> </span>and an <span className="text-[#DF1E26]">Art</span>.
                            </h3>
                            <p className="text-slate-500 text-base md:text-lg font-light leading-relaxed max-w-xl">
                                Above all, is our experience in the field that certainly makes the difference. We have perfected both. Our products reflect it and our customers acknowledge it at all times.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {/* Science Card */}
                            <div className="p-8 rounded-3xl bg-blue-50/50 border border-blue-100/50 backdrop-blur-sm group/card hover:bg-white hover:shadow-2xl hover:shadow-blue-200/20 transition-all duration-500">
                                <div className="w-14 h-14 rounded-2xl bg-[#00609C] flex items-center justify-center text-white mb-6 shadow-lg shadow-blue-500/30 group-hover/card:scale-110 transition-transform">
                                    <Microscope className="w-7 h-7" />
                                </div>
                                <h4 className="text-xl font-bold text-slate-900 mb-3">Science Point</h4>
                                <p className="text-xs text-slate-500 font-light leading-relaxed">
                                    Rigid empirical testing and precise molecular formulations ensuring zero-defect performance.
                                </p>
                            </div>

                            {/* Art Card */}
                            <div className="p-8 rounded-3xl bg-red-50/50 border border-red-100/50 backdrop-blur-sm group/card hover:bg-white hover:shadow-2xl hover:shadow-red-200/20 transition-all duration-500 mt-0 sm:mt-12">
                                <div className="w-14 h-14 rounded-2xl bg-[#DF1E26] flex items-center justify-center text-white mb-6 shadow-lg shadow-red-500/30 group-hover/card:scale-110 transition-transform">
                                    <Layers className="w-7 h-7" />
                                </div>
                                <h4 className="text-xl font-bold text-slate-900 mb-3">Artistic Precision</h4>
                                <p className="text-xs text-slate-500 font-light leading-relaxed">
                                    Decades of master-craft intuition that transforms chemistry into high-tolerance mechanical reality.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Decorative element */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-[300px] bg-gradient-to-b from-transparent via-slate-100 to-transparent hidden lg:block opacity-50" />
                </motion.div>

            </div>
        </div>
    );
}
