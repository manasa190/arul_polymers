import { Link } from "react-router";
import { ArrowRight, ChevronRight, Activity, ShieldCheck, Cpu } from "lucide-react";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import InteractiveSelector from "../ui/interactive-selector";
import CountUp from 'react-countup';
import { InfiniteSlider } from "../ui/infinite-slider";
import { GlowEffect } from "../ui/glow-effect";

export function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  return (
    <div className="bg-white text-slate-900 overflow-hidden" ref={containerRef}>
      {/* Hero Section */}
      <InteractiveSelector />

      {/* Stats / Proof Section */}
      <section className="relative z-20 py-12 mt-12 mb-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 bg-white/80 backdrop-blur-xl border border-slate-200 shadow-xl shadow-slate-200/50 rounded-3xl p-6 md:p-8"
        >
          {[
            { label: "Years Experience", value: 25, suffix: "+" },
            { label: "Global Partners", value: 150, suffix: "+" },
            { label: "Product Lines", value: 40, suffix: "+" },
            { label: "ISO Certified", value: 9001, suffix: "" }
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl md:text-5xl font-black text-[#00609C] mb-1">
                <CountUp end={stat.value} duration={3} enableScrollSpy scrollSpyOnce />
                {stat.suffix}
              </div>
              <div className="text-[9px] md:text-sm font-black text-slate-500 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Our Partners Section */}
      <section className="py-16 bg-slate-50 overflow-hidden border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Our Partners</h2>
          <div className="w-20 h-1 bg-[#DF1E26] mx-auto mt-4 rounded-full" />
        </div>
        <InfiniteSlider gap={40} duration={40}>
          {[...Array(11)].map((_, i) => (
            <div key={i} className="flex items-center justify-center w-40 h-20 md:w-48 md:h-24 px-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
              <img
                src={`/images/p${i + 1}.png`}
                alt={`Partner ${i + 1}`}
                className="w-auto h-auto max-w-[85%] max-h-[60%] object-contain"
              />
            </div>
          ))}
        </InfiniteSlider>
      </section>

      {/* Company Background & Certification Section */}
      <section className="py-12 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-100 overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col relative z-20"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#DF1E26]/20 bg-[#DF1E26]/5 text-[#DF1E26] text-xs font-semibold uppercase tracking-widest mb-6 w-max">
              <ShieldCheck className="w-4 h-4" /> Defense & Aerospace Grade
            </div>

            <h2 className="text-4xl md:text-5xl font-semibold mb-8 tracking-tight leading-tight text-slate-900">
              Harnessing the power of technology to provide <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00609C] to-[#DF1E26]">innovative solutions.</span>
            </h2>

            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Since inception in the year 1998, we have proved our mettle as a leading name in the manufacture of specialized rubber products. In fact, we have proved our standing by finding acceptance in the Aerospace industry by virtue of our strong technical and design capabilities.
            </p>

            <div className="relative p-6 mb-10 group isolate">
              {/* Glow background */}
              <GlowEffect
                colors={['#00609C', '#DF1E26', '#00609C', '#DF1E26']}
                mode="rotate"
                blur="strongest"
                duration={8}
                className="opacity-0 group-hover:opacity-10 transition-opacity duration-1000 scale-105"
              />

              <div className="relative z-10 bg-white/80 backdrop-blur-sm border border-slate-100 rounded-2xl p-6 shadow-sm overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#00609C]/5 rounded-bl-[100px] pointer-events-none" />
                <p className="text-slate-700 font-medium leading-relaxed relative z-10">
                  A measure of our quality standards is evident from the fact that we have earned the approval from <strong className="text-slate-900">CEMILAC</strong> (Center for Military Airworthiness and Certification) & <strong className="text-slate-900">DGAQA</strong> (Directorate General of Aeronautical Quality Assurance).
                </p>
              </div>
            </div>

            <Link to="/about" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all duration-300 ease-in-out rounded-full bg-[#00609C] hover:bg-[#004b7a] shadow-lg shadow-[#00609C]/20 hover:scale-105 hover:shadow-xl hover:shadow-[#00609C]/30 w-max group">
              Learn More <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-[500px] w-full"
          >
            {/* Soft background blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#00609C]/10 rounded-full blur-[80px]" />

            {/* Staggered Image Grid */}
            <div className="absolute top-0 right-4 w-[65%] h-[60%] rounded-3xl overflow-hidden shadow-2xl border-4 border-white z-20 group bg-slate-200">
              <div className="absolute inset-0 bg-[#00609C]/5 transition-colors group-hover:bg-transparent z-10 mix-blend-multiply" />
              <ImageWithFallback src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&q=80&w=2000" alt="Aerospace Application" className="w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-110" />
            </div>

            <div className="absolute bottom-10 left-0 w-[55%] h-[55%] rounded-3xl overflow-hidden shadow-2xl border-4 border-white z-30 group">
              <div className="absolute inset-0 bg-[#DF1E26]/10 transition-colors group-hover:bg-transparent z-10 mix-blend-multiply" />
              <ImageWithFallback src="/images/lab.png" alt="Quality Testing Lab" className="w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-110" />
            </div>

            {/* Floating Trust Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-[20%] -translate-y-1/2 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-slate-100 z-40 flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900 leading-tight">DGAQA & CEMILAC</div>
                <div className="text-xs font-semibold text-emerald-600 uppercase tracking-wider">Certified</div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* Call to Action - Minimalist Premium */}
      <section className="pt-8 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[2.5rem] bg-white border border-slate-100 p-12 md:p-24 text-center shadow-[0_40px_80px_-20px_rgba(0,0,0,0.04)] overflow-hidden"
        >
          {/* Extremely subtle ambient glow in corners */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#00609C]/5 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#DF1E26]/5 rounded-full blur-[80px] translate-x-1/2 translate-y-1/2 pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="w-16 h-1.5 bg-gradient-to-r from-[#00609C] to-[#DF1E26] rounded-full mb-12 opacity-30"
            />

            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tight leading-tight">
              Elevate your <span className="text-slate-400 font-medium italic">supply chain.</span>
            </h2>

            <p className="text-lg md:text-xl text-slate-500 mb-12 max-w-xl leading-relaxed">
              Join the hundreds of industry-leading companies who trust <span className="text-[#00609C] font-semibold">Arul Polymers</span> for specialized precision materials.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 items-center">
              <Link
                to="/contact"
                className="px-10 py-4.5 bg-[#00609C] text-white text-base font-bold rounded-2xl hover:bg-[#004b7a] transition-all duration-300 shadow-lg shadow-[#00609C]/10 hover:shadow-xl hover:scale-[1.02]"
              >
                Request Consultation
              </Link>
              <Link
                to="/products"
                className="px-10 py-4.5 bg-white text-slate-600 text-base font-semibold rounded-2xl border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-all duration-300"
              >
                Explore Solutions
              </Link>
            </div>

            <div className="mt-16 pt-10 border-t border-slate-50 w-full flex justify-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
              <div className="text-[10px] font-bold text-slate-400 tracking-[0.3em] uppercase">ISO 9001:2015</div>
              <div className="text-[10px] font-bold text-slate-400 tracking-[0.3em] uppercase">CEMILAC APPROVED</div>
              <div className="text-[10px] font-bold text-slate-400 tracking-[0.3em] uppercase">DGAQA CERTIFIED</div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
