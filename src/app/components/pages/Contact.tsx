import { motion } from "motion/react";
import { Mail, Phone, MapPin, Star, ExternalLink } from "lucide-react";
import { Map, MapMarker, MarkerContent, MapControls } from "../ui/map";
import { Button } from "../ui/button";

export function Contact() {
  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-16"
        >
          <div className="text-[#DF1E26] font-semibold tracking-wider uppercase mb-4 text-[10px] md:text-sm">Partner Network</div>
          <h1 className="text-4xl md:text-7xl font-semibold tracking-tighter mb-6 text-slate-900">
            Let's build <br /> <span className="text-[#00609C]">something enduring.</span>
          </h1>
          <p className="text-xl text-slate-500 leading-relaxed font-light">
            Contact our engineering and sales teams to secure the chemical foundations of your next big project.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 md:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-12"
          >
            {[
              {
                icon: MapPin,
                title: "Arul Polymers Pvt. Ltd.",
                text: "Dt, Unit - I, A6, SIDCO Industrial Estate, Sipcot Ph. I, Hosur, Tamil Nadu 635126, India",
                link: "https://www.google.com/maps/dir//Arul+Polymers+Pvt.+Ltd.,+Dt,+Unit+-+I,+A6,+SIDCO+Industrial+Estate,+Sipcot+Ph.+I,+Hosur,+Tamil+Nadu+635126,+India/@12.7533611,77.8080556,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bae713f8c8e1e75:0x8797f766e4092b7!2m2!1d77.85!2d12.7552778?entry=ttu"
              },
              { icon: Phone, title: "Direct Line", text: "+91 98427 34863" },
              { icon: Mail, title: "Enterprise Sales", text: "arulpolymers@gmail.com" },
            ].map((contact, i) => (
              <div key={i} className="flex gap-6 group">
                <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center shrink-0 group-hover:border-[#00609C]/30 transition-colors">
                  <contact.icon className="w-6 h-6 text-[#00609C]" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-1 text-slate-800">{contact.title}</h3>
                  <p className="text-slate-500 font-light max-w-sm mb-2">{contact.text}</p>
                  {contact.link && (
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-1">
                        <span className="text-sm font-bold text-amber-500">4.5</span>
                        <div className="flex text-amber-500">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-current" />
                          ))}
                        </div>
                        <span className="text-[10px] text-slate-400 font-medium">(14 Reviews)</span>
                      </div>
                      <a
                        href={contact.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-bold text-[#00609C] uppercase tracking-widest hover:underline flex items-center gap-1"
                      >
                        Open in Maps
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white border border-slate-200 shadow-xl shadow-slate-200/50 rounded-3xl p-10"
          >
            <h2 className="text-2xl font-black text-slate-900 mb-8 tracking-tight">Send Your Query</h2>
            <form className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 outline-none focus:border-[#00609C] transition-all text-sm shadow-inner" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Mail ID</label>
                  <input type="email" placeholder="john@example.com" className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 outline-none focus:border-[#00609C] transition-all text-sm shadow-inner" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Mobile</label>
                  <input type="tel" placeholder="+91 00000 00000" className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 outline-none focus:border-[#00609C] transition-all text-sm shadow-inner" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Subject</label>
                  <input type="text" placeholder="Product Inquiry" className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 outline-none focus:border-[#00609C] transition-all text-sm shadow-inner" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Message</label>
                <textarea rows={4} placeholder="How can we help you?" className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 outline-none focus:border-[#00609C] transition-all text-sm shadow-inner resize-none" />
              </div>
              <button className="w-full bg-[#00609C] text-white font-black uppercase tracking-widest text-[10px] py-4 rounded-xl hover:bg-[#004b7a] transition-all duration-300 shadow-lg shadow-[#00609C]/20 hover:shadow-xl hover:shadow-[#00609C]/30 hover:-translate-y-1">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24"
        >
          <div className="bg-white border border-slate-200 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] rounded-[2rem] md:rounded-[3rem] overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-3">
              <div className="lg:col-span-2 h-[350px] md:h-[500px] relative">
                <Map
                  center={[77.8546, 12.7554]}
                  zoom={15}
                >
                  <MapControls showZoom showLocate position="top-right" />
                  <MapMarker longitude={77.8546} latitude={12.7554}>
                    <MarkerContent>
                      <div className="relative group">
                        <div className="absolute -inset-4 bg-[#DF1E26]/20 rounded-full blur-xl group-hover:bg-[#DF1E26]/40 transition-colors animate-pulse" />
                        <div className="relative w-8 h-8 bg-white border-2 border-[#DF1E26] rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                          <MapPin className="w-4 h-4 text-[#DF1E26]" />
                        </div>
                      </div>
                    </MarkerContent>
                  </MapMarker>
                </Map>
              </div>
              <div className="p-6 md:p-12 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-slate-100 bg-slate-50/50">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#DF1E26]/5 border border-[#DF1E26]/10 text-[#DF1E26] text-[10px] font-black uppercase tracking-[0.2em] mb-8 w-max">
                  <Star className="w-3 h-3 fill-current" /> Official Factory Location
                </div>
                <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">Visit Us</h3>
                <p className="text-lg text-slate-500 font-light leading-relaxed mb-8">
                  <strong className="text-slate-900 block mb-2">Arul Polymers Pvt. Ltd.</strong>
                  Dt, Unit - I, A6, SIDCO Industrial Estate,<br />
                  Sipcot Ph. I, Hosur, Tamil Nadu,<br />
                  635126, India
                </p>

                <div className="flex items-center gap-2 mb-10">
                  <span className="text-2xl font-black text-slate-900">4.5</span>
                  <div className="flex text-amber-500 gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-slate-400 font-medium ml-2">(14 Reviews)</span>
                </div>

                <Button
                  asChild
                  className="w-full h-16 rounded-2xl font-black uppercase tracking-widest text-[11px] shadow-xl shadow-[#00609C]/20"
                >
                  <a
                    href="https://www.google.com/maps/dir//Arul+Polymers+Pvt.+Ltd.,+Dt,+Unit+-+I,+A6,+SIDCO+Industrial+Estate,+Sipcot+Ph.+I,+Hosur,+Tamil+Nadu+635126,+India/@12.7554,77.8546,15z"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open in Google Maps <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
