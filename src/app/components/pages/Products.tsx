import { Car, Plane, Settings, ArrowRight, ShieldCheck, Zap, Globe, Microscope, Database, CheckCircle2 } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { motion } from "motion/react";

export function Products() {
  const categories = [
    {
      id: "Automobile",
      title: "Automobile Application",
      icon: Car,
      description: "High-precision rubber engineering for automotive ecosystems. Our components are designed to withstand extreme thermal stress, chemical exposure, and mechanical wear.",
      products: [
        {
          name: "General Moulded Components",
          description: "Precision engineered rubber parts for diverse automotive assemblies, including grommets, mounts, and custom fittings.",
          image: "/images/pr1.png",
          tags: ["High Durability", "Custom Profiles"]
        },
        {
          name: "Rubber to Metal Components",
          description: "Advanced bonding solutions for engine mounts, vibration isolators, and mechanical dampeners.",
          image: "/images/pr2.png",
          tags: ["Superior Bonding", "Anti-Vibration"]
        },
        {
          name: "Suspension & Seals",
          description: "Critical suspension bushings and high-pressure sealing rings for engine and chassis applications.",
          image: "/images/pr3.png",
          tags: ["Pressure Resistant", "Precision Seal"]
        },
        {
          name: "Control Cables & Boots",
          description: "Protective rubber bellows and boots ensuring longevity for steering and control cable systems.",
          image: "/images/pr4.png",
          tags: ["Weather Proof", "High Flex"]
        }
      ]
    },
    {
      id: "Aerospace",
      title: "Aerospace Application",
      icon: Plane,
      description: "Mission-critical polymer solutions for the aerospace sector. Designed for zero-failure performance under extreme pressure and temperature variations.",
      products: [
        {
          name: "Seals & Gaskets",
          description: "Aviation-grade sealing solutions specialized for high-altitude integrity and fuel compatibility.",
          image: "/images/pr5.png",
          tags: ["Aviation Grade", "Fuel Resistant"]
        },
        {
          name: "O-Rings & Bellows",
          description: "Precision O-rings and expansion bellows for aerospace hydraulic systems and airframes.",
          image: "/images/pr6.png",
          tags: ["Extreme Temp", "Zero Leakage"]
        }
      ]
    },
    {
      id: "Industrial",
      title: "Industrial & Food Application",
      icon: Settings,
      description: "Providing versatile polymer solutions from heavy industrial machinery to sanitary food-grade equipment.",
      products: [
        {
          name: "Ceramic Pad & Gasket",
          description: "Wear-resistant ceramic tiles bonded with high-grade rubber for extreme abrasion protection in industrial chutes.",
          image: "/images/pr7.png",
          tags: ["Abrasion Proof", "Impact Protection"]
        },
        {
          name: "Technical Serving Bowls",
          description: "Premium stainless steel bowls bonded with high-performance rubber bases for ultimate stability, insulation, and durability in both industrial and sanitary environments.",
          image: "/images/pr8.png",
          tags: ["Stainless Steel", "Industrial Grade", "Thermal Insulated"]
        },
        {
          name: "Industrial Seals",
          description: "Heavy-duty hydraulic and mechanical seals for pumps, valves, and industrial fluid management.",
          image: "/images/pr9.png",
          tags: ["Hydraulic Grade", "Long Life"]
        }
      ]
    }
  ];

  return (
    <div className="bg-white text-slate-900 min-h-screen pt-32 pb-24 font-outfit">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mb-12 md:mb-24 px-4 md:px-0"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00609C]/5 border border-[#00609C]/10 text-[#00609C] text-[10px] font-black uppercase tracking-[0.25em] mb-6">
            <Database className="w-3 h-3" /> Solutions Portfolio
          </div>
          <h1 className="text-4xl md:text-8xl font-black tracking-tighter mb-8 flex flex-wrap items-center gap-x-4">
            <span>Our Products</span>
            <motion.span
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-[#DF1E26]"
            >
              Range
            </motion.span>
          </h1>
          <p className="text-xl text-slate-500 leading-relaxed font-light">
            Precision-engineered polymer components serving global automotive, aerospace, and industrial sectors since 1978.
          </p>
        </motion.div>

        {/* Categories Sections */}
        <div className="space-y-40">
          {categories.map((cat, catIdx) => (
            <div key={cat.id} className="relative">
              {/* Category Header */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start mb-10 md:mb-16 border-b border-slate-100 pb-10 md:pb-12 px-4 md:px-0">
                <div className="md:w-1/3">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center text-white shadow-xl">
                      <cat.icon className="w-6 h-6" />
                    </div>
                    <h2 className="text-3xl font-black tracking-tight text-slate-900">{cat.title}</h2>
                  </div>
                  <div className="h-1 w-12 bg-[#00609C] rounded-full" />
                </div>
                <div className="md:w-2/3">
                  <p className="text-lg text-slate-500 font-light leading-relaxed max-w-2xl">
                    {cat.description}
                  </p>
                </div>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-10 px-4 md:px-0">
                {cat.products.map((product, pIdx) => (
                  <motion.div
                    key={product.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: pIdx * 0.1, duration: 0.6 }}
                    className="group bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
                  >
                    <div className="aspect-[16/10] overflow-hidden relative">
                      <ImageWithFallback
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute top-6 right-6 flex flex-wrap gap-2">
                        {product.tags.map(tag => (
                          <span key={tag} className="px-3 py-1 bg-white/95 backdrop-blur-md text-[8px] font-black text-slate-900 uppercase tracking-widest rounded-lg shadow-sm">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="p-10 flex flex-col flex-1">
                      <div className="flex-1">
                        <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-[#00609C] transition-colors">{product.name}</h3>
                        <p className="text-sm text-slate-500 font-light leading-relaxed mb-8">
                          {product.description}
                        </p>
                      </div>
                      <div className="pt-6 border-t border-slate-50 flex items-center justify-end">
                        <div className="flex gap-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                          <div className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                          <div className="w-1.5 h-1.5 rounded-full bg-[#00609C]/40" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quality Assurance Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-24 md:mt-40 p-8 md:p-16 rounded-[2.5rem] md:rounded-[4rem] bg-slate-900 text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none" />
          <div className="relative z-10 grid md:grid-cols-2 gap-10 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-4xl font-black mb-4 md:mb-6 leading-tight">Uncompromising <br /><span className="text-[#00609C]">Quality Control</span></h2>
              <p className="text-sm md:text-base text-slate-400 font-light leading-relaxed mb-6 md:mb-8">
                Every component undergoes rigorous testing—including tensile, rheometry, and durability analysis—before leaving our facility.
              </p>
              <div className="flex flex-wrap gap-4 md:gap-6">
                <div className="flex items-center gap-2 md:gap-3">
                  <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-[#00609C]" />
                  <span className="text-[10px] md:text-xs font-black uppercase tracking-widest">ISO Certified</span>
                </div>
                <div className="flex items-center gap-2 md:gap-3">
                  <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-[#00609C]" />
                  <span className="text-[10px] md:text-xs font-black uppercase tracking-widest">Global Standards</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <div className="p-6 md:p-8 rounded-2xl md:rounded-3xl bg-white/5 border border-white/10 text-center">
                <div className="text-2xl md:text-4xl font-black text-[#00609C] mb-1">100%</div>
                <div className="text-[8px] md:text-[9px] font-bold text-slate-500 uppercase tracking-widest">Inspected</div>
              </div>
              <div className="p-6 md:p-8 rounded-2xl md:rounded-3xl bg-white/5 border border-white/10 text-center">
                <div className="text-2xl md:text-4xl font-black text-[#DF1E26] mb-1">45+</div>
                <div className="text-[8px] md:text-[9px] font-bold text-slate-500 uppercase tracking-widest">Years Exp</div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
