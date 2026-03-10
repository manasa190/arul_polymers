import { motion } from "motion/react";
import { ShieldCheck, Target, Eye, Gem, Users, Lightbulb, Landmark, Award, Globe, FlaskConical, CheckCircle2, Factory, Microscope, MapPin, Gauge, Droplets, Plane } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { AnimatedText } from "../ui/animated-underline-text-one";
import { AnimatedTabs } from "../ui/animated-tabs";
import { GradientSelector } from "../ui/gradient-selector-card";

export function About() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  const milestones = [
    { year: "1978", title: "The Foundation", desc: "Arul Rubbers established as a leading rubber lining specialist for industrial equipment." },
    { year: "1998", title: "Arul Polymers", desc: "Formed as a specialized unit focusing on high-tech rubber and polymer formulations." },
    { year: "2010", title: "Aerospace Entry", desc: "Earned prestigious CEMILAC and DGAQA approvals for defense-grade manufacturing." },
    { year: "2015", title: "Global Expansion", desc: "Executed major international projects across Thailand, Indonesia, and India." },
    { year: "2023", title: "Next-Gen R&D", desc: "Inaugurated state-of-the-art lab for advanced compounds like FKM and HNBR." },
  ];

  const values = [
    { icon: <ShieldCheck className="w-6 h-6 text-[#00609C]" />, title: "Quality First", desc: "Uncompromising standards from raw material selection to final delivery." },
    { icon: <Users className="w-6 h-6 text-[#DF1E26]" />, title: "Customer Focus", desc: "Tailoring bespoke solutions to meet specific engineering challenges." },
    { icon: <Lightbulb className="w-6 h-6 text-[#00609C]" />, title: "Innovation", desc: "Continuous R&D to lead in material science and efficiency." },
    { icon: <Gem className="w-6 h-6 text-[#DF1E26]" />, title: "Integrity", desc: "Building long-term relationships through transparency and trust." },
  ];

  return (
    <div className="bg-white text-slate-900 min-h-screen pt-24 md:pt-32 pb-0 font-outfit">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero Section */}
        <motion.div {...fadeIn} className="max-w-4xl mx-auto text-center mb-16 md:mb-24 px-4 mt-8 md:mt-0">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-100 text-slate-400 text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] mb-8 shadow-sm">
            <Landmark className="w-3 h-3 text-[#00609C]" /> Established 1978
          </div>
          <div className="flex flex-col items-center mb-6 md:mb-8">
            <h1 className="text-3xl md:text-8xl font-black tracking-tight text-slate-900 leading-tight">
              Engineered for
            </h1>
            <AnimatedText
              text="Decades of Trust."
              textClassName="text-2xl md:text-7xl font-black tracking-tighter text-[#DF1E26] py-2"
              underlineClassName="text-[#DF1E26] opacity-60 h-1 md:h-2"
              className="mt-1 md:mt-2"
              underlineDuration={2}
            />
          </div>
          <p className="text-base md:text-2xl text-slate-500 leading-relaxed font-light max-w-2xl mx-auto">
            From industrial rubber lining to aerospace-grade mastery, we've spent three decades perfecting the science of polymer performance.
          </p>
        </motion.div>

        {/* Story Section - Redesigned for Senior UI/UX */}
        <div className="grid lg:grid-cols-2 gap-12 md:gap-24 items-start mb-24 md:mb-40">
          <motion.div {...fadeIn} className="relative">
            <div className="absolute -left-12 top-0 w-24 h-24 bg-[#00609C]/5 rounded-full blur-3xl" />

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#DF1E26]/5 border border-[#DF1E26]/10 text-[#DF1E26] text-[10px] font-black uppercase tracking-[0.3em] mb-6 shadow-sm">
              <Factory className="w-3 h-3" /> THE COMPANY
            </div>

            <h3 className="text-2xl md:text-6xl font-black mb-6 md:mb-8 text-slate-900 leading-tight md:leading-[1] tracking-tight">
              A Legacy of Specialized <br />
              <span className="text-[#00609C]">Rubber Engineering</span>
            </h3>

            <div className="space-y-6 md:space-y-8 text-slate-600 leading-relaxed font-normal">
              <div className="relative pl-6 border-l-2 border-[#00609C]/20 text-sm md:text-xl italic text-slate-500 max-w-lg">
                "Since 1978, we have proved our mettle as an apex name in specialized rubber manufacturing."
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 group hover:shadow-xl hover:shadow-slate-200/50 transition-all">
                  <div className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <ShieldCheck className="w-5 h-5 text-[#00609C]" />
                  </div>
                  <h5 className="font-bold text-slate-900 mb-2">Aerospace Mastery</h5>
                  <p className="text-xs font-light">Authorized by CEMILAC & DGAQA for critical defense-grade supply.</p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 group hover:shadow-xl hover:shadow-slate-200/50 transition-all">
                  <div className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Gauge className="w-5 h-5 text-[#DF1E26]" />
                  </div>
                  <h5 className="font-bold text-slate-900 mb-2">Precision Compounds</h5>
                  <p className="text-xs font-light">Experts in FKM, HNBR, and VAMAC for global tier-1 automotive.</p>
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-slate-600">
                  Beyond our aerospace mastery, we maintain an apex position across the <span className="text-[#00609C] font-bold">Automobile</span> and <span className="text-[#DF1E26] font-bold">Industrial</span> sectors. Our engineering team specializes in the design and synthesis of high-tolerance components that operate under extreme pressure, heat, and chemical stress.
                </p>

                <div className="grid grid-cols-1 gap-4">
                  {[
                    { title: "Precision Sealing Systems", desc: "Ultra-durable O-rings, Quad-rings, and bespoke dynamic Seals for hydraulic performance.", icon: <ShieldCheck className="w-4 h-4" /> },
                    { title: "Vibration Isolation", desc: "Complex rubber-to-metal bonded parts and anti-vibration mountings for heavy machinery.", icon: <Gauge className="w-4 h-4" /> },
                    { title: "Fluid Management", desc: "Ceramic-reinforced and high-tensile industrial hoses for aggressive media transport.", icon: <Droplets className="w-4 h-4" /> },
                    { title: "Custom Molded Solutions", desc: "Bellows, boots, suspension parts, and specialized diaphragms for global Tier-1 suppliers.", icon: <Factory className="w-4 h-4" /> }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100/50 hover:bg-white hover:border-[#00609C]/20 hover:shadow-lg hover:shadow-slate-200/50 transition-all cursor-default group">
                      <div className="mt-1 w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center text-[#00609C] group-hover:bg-[#00609C] group-hover:text-white transition-colors">
                        {item.icon}
                      </div>
                      <div>
                        <h6 className="font-bold text-slate-900 text-sm mb-1">{item.title}</h6>
                        <p className="text-xs text-slate-500 font-light">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="text-sm italic text-slate-400 font-light border-l-2 border-slate-100 pl-4 py-1">
                  We supply critical components to global supply chains, ensuring zero-defect standards for international infrastructure and automotive platforms.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div {...fadeIn} className="relative mt-12 lg:mt-0">
            {/* Multi-layered Composition */}
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.25)] aspect-[4/3] group">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent z-10" />
              <ImageWithFallback
                src="/images/manufacturing_plant.png"
                alt="Advanced manufacturing facility"
                className="w-full h-full object-cover transition-transform duration-[20s] group-hover:scale-110"
              />

              {/* Floating ID Card Badge */}
              <div className="absolute top-8 right-8 z-20">
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-2xl flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#DF1E26] flex items-center justify-center animate-pulse">
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>
                  <div className="text-white">
                    <div className="text-[10px] font-black uppercase tracking-tighter opacity-70">Facility Status</div>
                    <div className="text-xs font-bold">Technically Operational</div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-10 left-10 right-10 z-20 space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/90 backdrop-blur-md text-slate-900 text-sm font-bold shadow-xl">
                  <MapPin className="w-4 h-4 text-[#DF1E26]" /> 24,000 sq.ft Manufacturing Unit
                </div>
                <div className="flex gap-4">
                  <div className="p-4 rounded-2xl bg-[#00609C]/90 backdrop-blur-md text-white flex-1 border border-white/10">
                    <Microscope className="w-6 h-6 mb-2" />
                    <div className="text-xs font-black uppercase tracking-widest opacity-70">Lab Standard</div>
                    <div className="font-bold">NABL Compliant R&D</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/90 backdrop-blur-md text-slate-900 flex-1 border border-black/5">
                    <Factory className="w-6 h-6 mb-2 text-[#DF1E26]" />
                    <div className="text-xs font-black uppercase tracking-widest opacity-50">Location</div>
                    <div className="font-bold">Hosur HQ, India</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#00609C]/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-[#DF1E26]/5 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-32">
          <motion.div
            {...fadeIn}
            className="p-10 rounded-[2rem] bg-slate-50 border border-slate-100 hover:border-[#00609C]/20 transition-colors group"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#00609C] flex items-center justify-center mb-8 shadow-lg shadow-[#00609C]/20 group-hover:scale-110 transition-transform">
              <Eye className="w-7 h-7 text-white" />
            </div>
            <h4 className="text-2xl font-bold mb-4 text-slate-900">Our Vision</h4>
            <p className="text-slate-500 leading-relaxed font-light">
              To achieve global leadership in the Aerospace, Defense, and Automobile segments, extending our brand of excellence across a wide spectrum of world-class products that benefit our customers and society.
            </p>
          </motion.div>

          <motion.div
            {...fadeIn}
            className="p-10 rounded-[2rem] bg-slate-50 border border-slate-100 hover:border-[#DF1E26]/20 transition-colors group"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#DF1E26] flex items-center justify-center mb-8 shadow-lg shadow-[#DF1E26]/20 group-hover:scale-110 transition-transform">
              <Target className="w-7 h-7 text-white" />
            </div>
            <h4 className="text-2xl font-bold mb-4 text-slate-900">Our Mission</h4>
            <p className="text-slate-500 leading-relaxed font-light">
              To deliver superior measurable value to all stakeholders by leveraging our innovative spirit, advanced technology, and flexible service to meet specific requirements with customized polymer products.
            </p>
          </motion.div>
        </div>

        {/* Values Section with Animated Tabs */}
        <div className="mb-40 flex flex-col items-center">
          <motion.div {...fadeIn} className="text-center mb-12 md:mb-16 px-4">
            <h2 className="text-[10px] font-black text-[#DF1E26] uppercase tracking-[0.4em] mb-4">Core Values</h2>
            <h3 className="text-2xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">The Principles that <br /> Define our Excellence</h3>
          </motion.div>

          <AnimatedTabs
            className="max-w-6xl w-full"
            tabs={[
              {
                id: "quality",
                label: "Quality First",
                content: (
                  <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center p-6 md:p-12">
                    <div className="relative aspect-square md:aspect-auto md:h-80 rounded-3xl flex items-center justify-center bg-slate-50 border border-slate-100 shadow-inner overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#00609C]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      {/* @ts-ignore */}
                      <lord-icon
                        src="https://cdn.lordicon.com/wjdlpfml.json"
                        trigger="hover"
                        colors="primary:#00609C,secondary:#DF1E26"
                        style={{ width: "220px", height: "220px" }}
                      />
                      <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/60 backdrop-blur-md border border-white/40 shadow-sm opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                        <div className="text-[10px] font-black text-[#00609C] uppercase tracking-widest mb-1">Standard</div>
                        <div className="text-xs font-bold text-slate-800">ISO 9001:2015 Compliant</div>
                      </div>
                    </div>
                    <div className="space-y-6">
                      <div className="w-12 h-1 bg-[#00609C] rounded-full" />
                      <h4 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight">Uncompromising <br /><span className="text-[#00609C]">Precision</span></h4>
                      <p className="text-sm md:text-lg text-slate-500 leading-relaxed font-light">
                        We maintain the highest standards in every aspect of our operations, from raw material selection to final product delivery. Our ISO-certified process ensures zero-failure performance.
                      </p>
                      <div className="space-y-4">
                        {[
                          { text: "Spectrometric Verification", icon: <CheckCircle2 className="w-4 h-4" /> },
                          { text: "Zero-Tolerance Policy", icon: <CheckCircle2 className="w-4 h-4" /> },
                          { text: "End-to-End Traceability", icon: <CheckCircle2 className="w-4 h-4" /> }
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-[#00609C]/30 transition-all group/item">
                            <div className="text-[#00609C] group-hover/item:scale-110 transition-transform">{item.icon}</div>
                            <span className="text-xs md:text-sm font-bold text-slate-700">{item.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              },
              {
                id: "customer",
                label: "Customer Focus",
                content: (
                  <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center p-6 md:p-12">
                    <div className="relative aspect-square md:aspect-auto md:h-80 rounded-3xl flex items-center justify-center bg-slate-50 border border-slate-100 shadow-inner overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#DF1E26]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      {/* @ts-ignore */}
                      <lord-icon
                        src="https://cdn.lordicon.com/fqbvgezn.json"
                        trigger="hover"
                        colors="primary:#00609C,secondary:#DF1E26"
                        style={{ width: "220px", height: "220px" }}
                      />
                      <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/60 backdrop-blur-md border border-white/40 shadow-sm opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                        <div className="text-[10px] font-black text-[#DF1E26] uppercase tracking-widest mb-1">Impact</div>
                        <div className="text-xs font-bold text-slate-800">150+ Global Partnerships</div>
                      </div>
                    </div>
                    <div className="space-y-6">
                      <div className="w-12 h-1 bg-[#DF1E26] rounded-full" />
                      <h4 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight">Empowering <br /><span className="text-[#DF1E26]">Your Vision</span></h4>
                      <p className="text-sm md:text-lg text-slate-500 leading-relaxed font-light">
                        Our success is measured by your satisfaction. We work closely with our global partners to engineer materials that solve their most complex technical challenges.
                      </p>
                      <div className="space-y-4">
                        {[
                          { text: "24/7 Technical Support", icon: <CheckCircle2 className="w-4 h-4" /> },
                          { text: "Custom Polymer Formulation", icon: <CheckCircle2 className="w-4 h-4" /> },
                          { text: "Joint Engineering Sprints", icon: <CheckCircle2 className="w-4 h-4" /> }
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-[#DF1E26]/30 transition-all group/item">
                            <div className="text-[#DF1E26] group-hover/item:scale-110 transition-transform">{item.icon}</div>
                            <span className="text-xs md:text-sm font-bold text-slate-700">{item.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              },
              {
                id: "innovation",
                label: "Innovation",
                content: (
                  <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center p-6 md:p-12">
                    <div className="relative aspect-square md:aspect-auto md:h-80 rounded-3xl flex items-center justify-center bg-slate-50 border border-slate-100 shadow-inner overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#00609C]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      {/* @ts-ignore */}
                      <lord-icon
                        src="https://cdn.lordicon.com/jectmwqf.json"
                        trigger="hover"
                        colors="primary:#DF1E26,secondary:#00609C"
                        style={{ width: "220px", height: "220px" }}
                      />
                      <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/60 backdrop-blur-md border border-white/40 shadow-sm opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                        <div className="text-[10px] font-black text-[#00609C] uppercase tracking-widest mb-1">Frontier</div>
                        <div className="text-xs font-bold text-slate-800">Advanced Material Science</div>
                      </div>
                    </div>
                    <div className="space-y-6">
                      <div className="w-12 h-1 bg-[#00609C] rounded-full" />
                      <h4 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight">Pioneering <br /><span className="text-[#00609C]">Chemistry</span></h4>
                      <p className="text-sm md:text-lg text-slate-500 leading-relaxed font-light">
                        Continuous investment in R&D and frontier technology keeps us at the forefront of the polymer industry. We don't just follow trends—we set the benchmark.
                      </p>
                      <div className="space-y-4">
                        {[
                          { text: "Next-Gen Material Synthesis", icon: <CheckCircle2 className="w-4 h-4" /> },
                          { text: "Advanced Spectrometry", icon: <CheckCircle2 className="w-4 h-4" /> },
                          { text: "Patent-Pending Formulations", icon: <CheckCircle2 className="w-4 h-4" /> }
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-[#00609C]/30 transition-all group/item">
                            <div className="text-[#00609C] group-hover/item:scale-110 transition-transform">{item.icon}</div>
                            <span className="text-xs md:text-sm font-bold text-slate-700">{item.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              },
              {
                id: "integrity",
                label: "Integrity",
                content: (
                  <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center p-6 md:p-12">
                    <div className="relative aspect-square md:aspect-auto md:h-80 rounded-3xl flex items-center justify-center bg-slate-50 border border-slate-100 shadow-inner overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#DF1E26]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      {/* @ts-ignore */}
                      <lord-icon
                        src="https://cdn.lordicon.com/rpviwvwn.json"
                        trigger="hover"
                        colors="primary:#00609C,secondary:#DF1E26"
                        style={{ width: "220px", height: "220px" }}
                      />
                      <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/60 backdrop-blur-md border border-white/40 shadow-sm opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                        <div className="text-[10px] font-black text-[#DF1E26] uppercase tracking-widest mb-1">Foundation</div>
                        <div className="text-xs font-bold text-slate-800">Radical Transparency</div>
                      </div>
                    </div>
                    <div className="space-y-6">
                      <div className="w-12 h-1 bg-[#DF1E26] rounded-full" />
                      <h4 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight">Foundations <br /><span className="text-[#DF1E26]">of Trust</span></h4>
                      <p className="text-sm md:text-lg text-slate-500 leading-relaxed font-light">
                        We believe in honest communication and building long-term relationships based on radical transparency and ethical manufacturing practices.
                      </p>
                      <div className="space-y-4">
                        {[
                          { text: "Transparent Supply Chain", icon: <CheckCircle2 className="w-4 h-4" /> },
                          { text: "Fair Labor Practices", icon: <CheckCircle2 className="w-4 h-4" /> },
                          { text: "Verified ESG Reporting", icon: <CheckCircle2 className="w-4 h-4" /> }
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-[#DF1E26]/30 transition-all group/item">
                            <div className="text-[#DF1E26] group-hover/item:scale-110 transition-transform">{item.icon}</div>
                            <span className="text-xs md:text-sm font-bold text-slate-700">{item.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              },
            ]}
          />
        </div>

        {/* Journey Timeline with Gradient Selector */}
        <div className="mb-24 md:mb-32 p-4 md:p-12 py-12 md:py-20 bg-slate-900 rounded-[2rem] md:rounded-[3rem] text-white relative overflow-hidden mx-2 md:mx-0">
          <div className="absolute top-0 right-0 w-full h-full bg-[#00609C]/10 blur-[120px] rounded-full pointer-events-none" />

          <motion.div {...fadeIn} className="relative z-10 text-center mb-8 md:mb-12">
            <h2 className="text-10px font-extrabold text-[#DF1E26] uppercase tracking-[0.3em] mb-4">Our Journey</h2>
            <h3 className="text-2xl md:text-5xl font-bold tracking-tight">Key Milestones</h3>
          </motion.div>

          <GradientSelector
            className="border-none bg-transparent p-0"
            options={[
              {
                id: "1978",
                label: "1978",
                value: "1978",
                color: "#00609C",
                gradientFrom: "#00609C",
                gradientTo: "#0080B0",
                title: "The Legacy Begins",
                desc: "Arul Rubbers is established in 1978, quickly solidifying its position as India's premier specialist in industrial rubber lining for heavy chemical, fertilizer, and engineering equipment."
              },
              {
                id: "1998",
                label: "1998",
                value: "1998",
                color: "#0080B0",
                gradientFrom: "#0080B0",
                gradientTo: "#DF1E26",
                title: "Arul Polymers Evolution",
                desc: "Strategic expansion into high-precision polymer engineering. We began manufacturing bespoke molded products and specialized compounds for diverse technical applications."
              },
              {
                id: "2010",
                label: "2010",
                value: "2010",
                color: "#DF1E26",
                gradientFrom: "#DF1E26",
                gradientTo: "#FF4D4D",
                title: "Aerospace & Defense Mastery",
                desc: "A major turning point: We earned the prestigious CEMILAC and DGAQA approvals, officially finding acceptance as a strategic supplier for the demanding Aerospace and Defense sectors."
              },
              {
                id: "2015",
                label: "2015",
                value: "2015",
                color: "#FF4D4D",
                gradientFrom: "#FF4D4D",
                gradientTo: "#00609C",
                title: "Global Infrastructure Footprint",
                desc: "Thinking Global. We successfully executed high-impact industrial projects and supply chains across Thailand, Indonesia, and various regions in India, proving our international engineering mettle."
              },
              {
                id: "2023",
                label: "2023",
                value: "2023",
                color: "#00609C",
                gradientFrom: "#00609C",
                gradientTo: "#0080B0",
                title: "Next-Gen Materials R&D",
                desc: "Investing in the future: We inaugurated our state-of-the-art R&D center, dedicated to synthesizing next-generation compounds like FKM, HNBR, and VAMAC for zero-failure performance."
              }
            ]}
          />
        </div>

        {/* Quality Section - Interactive Certification Cards */}
        <div className="max-w-6xl mx-auto mb-40">
          <motion.div {...fadeIn} className="text-center mb-16">
            <div className="w-20 h-20 rounded-2xl bg-[#00609C]/5 flex items-center justify-center mx-auto mb-8 shadow-inner">
              <Award className="w-10 h-10 text-[#00609C]" />
            </div>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Certified Excellence</h3>
            <p className="text-xl text-slate-500 max-w-3xl mx-auto font-light leading-relaxed">
              Our quality standards are validated by the world's most demanding certification bodies, ensuring every part we produce meets <span className="text-slate-900 font-medium">absolute performance benchmarks</span>.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                id: "ISO 9001",
                label: "ISO 9001:2015",
                desc: "Quality Management Systems",
                icon: <ShieldCheck className="w-8 h-8 text-[#00609C]" />,
                accent: "bg-[#00609C]",
                shadow: "shadow-[#00609C]/10",
                bg: "bg-[#00609C]/5"
              },
              {
                id: "ISO 14001",
                label: "ISO 14001:2015",
                desc: "Environmental Standards",
                icon: <Globe className="w-8 h-8 text-[#00609C]" />,
                accent: "bg-[#00609C]",
                shadow: "shadow-[#00609C]/10",
                bg: "bg-[#00609C]/5"
              },
              {
                id: "WRAS",
                label: "WRAS-UK",
                desc: "Water Regulations Approval",
                icon: <Droplets className="w-8 h-8 text-[#DF1E26]" />,
                accent: "bg-[#DF1E26]",
                shadow: "shadow-[#DF1E26]/10",
                bg: "bg-[#DF1E26]/5"
              },
              {
                id: "AS9100D",
                label: "AS9100D",
                desc: "Aviation, Space & Defense",
                icon: <Plane className="w-8 h-8 text-[#DF1E26]" />,
                accent: "bg-[#DF1E26]",
                shadow: "shadow-[#DF1E26]/10",
                bg: "bg-[#DF1E26]/5"
              }
            ].map((cert) => (
              <motion.div
                key={cert.id}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`relative p-8 rounded-[2.5rem] bg-white border border-slate-100 ${cert.shadow} group overflow-hidden transition-all hover:shadow-2xl`}
              >
                {/* Visual Color Coding - Background Glow */}
                <div className={`absolute -right-10 -top-10 w-40 h-40 ${cert.accent} opacity-[0.03] group-hover:opacity-10 rounded-full blur-3xl transition-opacity duration-500`} />
                <div className={`absolute -left-10 -bottom-10 w-40 h-40 ${cert.accent} opacity-[0.02] group-hover:opacity-5 rounded-full blur-3xl transition-opacity duration-500`} />

                {/* Side Color bar */}
                <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-12 ${cert.accent} rounded-r-full opacity-20 group-hover:h-24 group-hover:opacity-100 transition-all duration-500`} />

                <div className={`w-16 h-16 rounded-2xl ${cert.bg} flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-all duration-300`}>
                  {cert.icon}
                </div>

                <h5 className="text-xl font-black text-slate-900 mb-2 truncate">{cert.label}</h5>
                <p className="text-sm text-slate-500 font-light leading-snug">{cert.desc}</p>

                <div className="mt-8 flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${cert.accent} animate-pulse`} />
                  <span className={`text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-slate-600 transition-colors`}>Verified Status</span>
                </div>

                {/* Corner Accent */}
                <div className={`absolute top-0 right-0 w-12 h-12 ${cert.accent} opacity-5 rounded-bl-[2rem] group-hover:opacity-20 transition-opacity`} />
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* Final CTA Strip */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="w-full bg-[#00609C] py-20 text-center text-white"
      >
        <h3 className="text-3xl font-bold mb-8">Ready to see our precision in action?</h3>
        <a href="/products" className="inline-flex h-14 items-center justify-center rounded-full bg-white px-8 text-base font-bold text-[#00609C] transition-transform hover:scale-105">
          Explore Our Solutions
        </a>
      </motion.div>
    </div>
  );
}
