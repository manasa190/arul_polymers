import { motion, AnimatePresence } from "motion/react";
import { ShieldCheck, Award, CheckCircle2, FlaskConical, Gauge, Droplets, ArrowRight, Expand, X } from "lucide-react";
import { useState } from "react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { AnimatedText } from "../ui/animated-underline-text-one";

export function Quality() {
    const [selectedCert, setSelectedCert] = useState<string | null>(null);

    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8 }
    };



    return (
        <div className="bg-white text-slate-900 min-h-screen pt-32 pb-0 font-outfit">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Quality Hero */}
                <motion.div {...fadeIn} className="max-w-4xl mx-auto text-center mb-24">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#00609C] text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                        <ShieldCheck className="w-3 h-3" /> Zero-Failure Standards
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tight">
                        Measuring up to <br />
                        <span className="text-[#00609C]">International Quality Standards</span>
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed font-light max-w-3xl mx-auto italic">
                        "The fact that we cater to a wide global clientele entitles that our quality standards are on par with the best. Our testing parameters are spot on and meet the most stringent standards."
                    </p>
                </motion.div>

                {/* Pursuit of Quality Section */}
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
                    <motion.div {...fadeIn} className="space-y-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DF1E26]/5 border border-[#DF1E26]/10 text-[#DF1E26] text-[10px] font-black uppercase tracking-[0.3em] mb-2">
                            <Award className="w-3 h-3" /> The Pursuit
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-[1.1]">
                            Quality as a <br />
                            <span className="text-[#DF1E26]">Fundamental Asset</span>
                        </h2>
                        <div className="space-y-6 text-lg text-slate-600 font-normal leading-relaxed">
                            <p>
                                We are committed to putting quality above all and have set in motion processes and systems that ensure the highest standards maintained not only in our products but also in our business conduct.
                            </p>
                            <p className="pl-6 border-l-2 border-[#00609C]/20 bg-slate-50 p-6 rounded-r-2xl italic text-slate-500">
                                "Quality is a fundamental working asset which drives and impacts all our activities. We ensure standards are maintained right through the production process including raw material sourcing and proto tool manufacturing."
                            </p>
                            <div className="flex items-center gap-4 p-4 bg-white border border-[#00609C]/10 rounded-2xl shadow-sm">
                                <div className="w-12 h-12 rounded-xl bg-[#00609C] flex items-center justify-center text-white shrink-0">
                                    <FlaskConical className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-sm font-black text-slate-900 uppercase tracking-wider">Traceability System</div>
                                    <div className="text-xs text-slate-500">Unique bar-coding from raw material to end product.</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        {...fadeIn}
                        onClick={() => setSelectedCert('c1')}
                        className="relative aspect-[1/1.41] rounded-[2rem] overflow-hidden shadow-2xl group bg-white border border-slate-200 cursor-pointer"
                    >
                        <ImageWithFallback
                            src="/images/c1.png"
                            alt="IATF Certificate"
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-102"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white/95 backdrop-blur-md p-5 rounded-full shadow-2xl z-20">
                            <Expand className="w-10 h-10 text-[#00609C]" />
                        </div>
                    </motion.div>
                </div>



                {/* WRAS Section */}
                <div className="grid lg:grid-cols-2 gap-16 items-start mb-40">
                    <motion.div
                        {...fadeIn}
                        onClick={() => setSelectedCert('c2')}
                        className="relative aspect-[1/1.41] rounded-[2rem] overflow-hidden shadow-2xl bg-white border border-slate-200 cursor-pointer group"
                    >
                        <ImageWithFallback
                            src="/images/c2.png"
                            alt="WRAS Certificate"
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-102"
                        />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white/95 backdrop-blur-md p-5 rounded-full shadow-2xl z-20">
                            <Expand className="w-10 h-10 text-[#00609C]" />
                        </div>
                    </motion.div>
                    <motion.div {...fadeIn} className="space-y-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#00609C] text-[10px] font-black uppercase tracking-[0.3em]">
                            Global Approvals
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
                            WRAS – Water Regulations <br />
                            <span className="text-[#00609C]">Advisory Scheme</span>
                        </h2>
                        <div className="space-y-6 text-slate-600 leading-relaxed font-normal text-lg">
                            <p>
                                We are proud to announce that our <span className="text-[#00609C] font-bold">WRAS NR80E Ebonite</span> compound is approved for drinking water applications globally.
                            </p>
                            <div className="p-8 rounded-[2rem] bg-slate-900 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#00609C] opacity-20 blur-[60px]" />
                                <p className="relative z-10 font-normal leading-relaxed text-slate-100">
                                    Our Ebonite is built to last. It easily resists ozone, chemicals, and water-based chlorine, making it the safest and most reliable choice for clean drinking water systems worldwide.
                                </p>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    "Ozone Resistant", "Grease Resistant", "Polar Chemical Shield", "Low Temp Flexible"
                                ].map(feat => (
                                    <div key={feat} className="flex items-center gap-2 text-sm font-bold text-slate-800 bg-slate-50 p-3 rounded-xl border border-slate-100">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-500" /> {feat}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

            </div>

            {/* Certificate Modal */}
            <AnimatePresence>
                {selectedCert && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-slate-900/90 backdrop-blur-xl flex items-center justify-center p-4"
                        onClick={() => setSelectedCert(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            className="relative w-full max-w-[95vw] h-full max-h-[95vh] bg-white rounded-2xl overflow-hidden shadow-2xl border-2 border-white flex flex-col items-center justify-center m-4"
                            onClick={e => e.stopPropagation()}
                        >
                            <div className="w-full h-full p-4 overflow-hidden">
                                <ImageWithFallback
                                    src={selectedCert === 'c1' ? '/images/c1.png' : '/images/c2.png'}
                                    alt="Certificate"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <button
                                onClick={() => setSelectedCert(null)}
                                className="absolute top-6 right-6 w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-800 hover:bg-[#DF1E26] hover:text-white transition-all shadow-lg"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
