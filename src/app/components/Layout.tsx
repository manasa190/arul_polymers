import { Outlet, Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MenuBar } from "./ui/glow-menu";
import { Home, Users, Package, Phone, FileText, Award, Microscope, Factory, MapPin, Mail } from "lucide-react";

export function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navigation = [
    { name: "Home", path: "/", icon: Home, color: "#00609C", gradient: "radial-gradient(circle, rgba(0,96,156,0.15) 0%, rgba(0,96,156,0.06) 50%, transparent 100%)" },
    { name: "About Us", path: "/about", icon: Users, color: "#DF1E26", gradient: "radial-gradient(circle, rgba(223,30,38,0.15) 0%, rgba(223,30,38,0.06) 50%, transparent 100%)" },
    { name: "Quality", path: "/quality", icon: Award, color: "#00609C", gradient: "radial-gradient(circle, rgba(0,96,156,0.15) 0%, rgba(0,96,156,0.06) 50%, transparent 100%)" },
    { name: "R&D", path: "/rd", icon: Microscope, color: "#DF1E26", gradient: "radial-gradient(circle, rgba(223,30,38,0.15) 0%, rgba(223,30,38,0.06) 50%, transparent 100%)" },
    { name: "Infrastructure", path: "/infrastructure", icon: Factory, color: "#00609C", gradient: "radial-gradient(circle, rgba(0,96,156,0.15) 0%, rgba(0,96,156,0.06) 50%, transparent 100%)" },
    { name: "Products", path: "/products", icon: Package, color: "#DF1E26", gradient: "radial-gradient(circle, rgba(223,30,38,0.15) 0%, rgba(223,30,38,0.06) 50%, transparent 100%)" },
    { name: "Contact", path: "/contact", icon: Phone, color: "#00609C", gradient: "radial-gradient(circle, rgba(0,96,156,0.15) 0%, rgba(0,96,156,0.06) 50%, transparent 100%)" },
  ];

  const menuItems = navigation.map(item => ({
    icon: item.icon,
    label: item.name,
    href: item.path,
    gradient: item.gradient,
    iconColor: item.color
  }));

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 selection:bg-[#00609C]/20">
      {/* Light Premium Header */}
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? "border-b border-gray-100 bg-white/90 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60 shadow-sm py-4"
          : "bg-white/80 backdrop-blur-md border-b border-transparent py-6"
          }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center group">
              <img
                src="/images/logo.png"
                alt="Arul Polymers Logo"
                className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                  const fallback = document.getElementById('logo-fallback');
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              <div id="logo-fallback" className="hidden items-center text-2xl font-bold tracking-tighter">
                <span className="text-[#00609C]">ARUL</span>
                <span className="text-[#DF1E26] ml-1">POLYMERS</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center">
              <MenuBar
                items={menuItems}
                activeItem={location.pathname}
                className="bg-white/50 border-none shadow-none backdrop-blur-none py-1"
              />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full text-slate-800 hover:bg-slate-100 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-xl origin-top"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="p-4 space-y-1">
                  {navigation.map((item, index) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <motion.div
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.05 }}
                        className={`flex items-center gap-4 py-4 px-5 rounded-2xl transition-all ${isActive(item.path)
                          ? "bg-[#00609C]/5 text-[#00609C] font-black shadow-sm"
                          : "text-slate-500 hover:bg-slate-50 hover:text-[#00609C]"
                          }`}
                      >
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${isActive(item.path) ? "bg-[#00609C] text-white" : "bg-slate-100 text-slate-400 group-hover:bg-[#00609C]/10 transition-colors"}`}>
                          <item.icon className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-bold tracking-tight">{item.name}</span>
                      </motion.div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </motion.header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white pt-24 pb-12 overflow-hidden relative">
        {/* Subtle Background Glow */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00609C]/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#DF1E26]/5 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

            {/* Column 1: Identity & Navigation */}
            <div className="space-y-8">
              <Link to="/" className="flex items-center gap-2">
                <div className="p-4 bg-white rounded-2xl shadow-lg border border-slate-100">
                  <img
                    src="/images/logo.png"
                    alt="Arul Polymers Logo"
                    className="h-16 w-auto object-contain"
                  />
                </div>
              </Link>
              <p className="text-slate-400 text-sm font-light leading-relaxed">
                Precision engineered polymer solutions since 1978. Empowering global industries with uncompromising chemical formulations.
              </p>
              <div className="space-y-3">
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#00609C]">Quick Links</h4>
                <ul className="grid grid-cols-2 gap-y-2 gap-x-4">
                  {navigation.map(n => (
                    <li key={n.name}>
                      <Link
                        to={n.path}
                        className="text-xs text-slate-500 hover:text-white transition-colors flex items-center gap-2 group"
                      >
                        <div className="w-1 h-1 rounded-full bg-slate-700 group-hover:bg-[#00609C] transition-colors" />
                        {n.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Column 2: Locations */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <Factory className="w-5 h-5 text-[#00609C]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-2">Factory (Unit - 2)</h4>
                    <p className="text-xs text-slate-400 font-light leading-relaxed">
                      No.: 16/12A, Plot No.: 1 TO 5, Zuzuwadi,<br />
                      Hosur - 635 126,<br />
                      Krishnagiri Dt., Tamil Nadu, India.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#DF1E26]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-2">Head Office</h4>
                    <p className="text-xs text-slate-400 font-light leading-relaxed">
                      A – 6C, SIDCO Industrial Estate,<br />
                      Hosur - 635 126,<br />
                      Krishnagiri Dt., Tamil Nadu, India.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 3: Contact Persons */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#00609C]" />
                  Contact Numbers
                </h4>
                <div className="space-y-4">
                  <div className="group">
                    <div className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1 group-hover:text-[#00609C] transition-colors">G. Raja</div>
                    <a href="tel:+919994555845" className="text-sm text-white font-medium hover:text-[#00609C] transition-colors">+91 99945 55845</a>
                  </div>
                  <div className="group">
                    <div className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1 group-hover:text-[#DF1E26] transition-colors">A. Arunagiri</div>
                    <a href="tel:+919600989533" className="text-sm text-white font-medium hover:text-[#DF1E26] transition-colors">+91 96009 89533</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 4: Electronics & Connect */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#DF1E26]" />
                  Mail Us
                </h4>
                <div className="space-y-3">
                  <a href="mailto:bdh@arulpolymers.com" className="block text-xs text-slate-400 hover:text-white transition-colors truncate">bdh@arulpolymers.com</a>
                  <a href="mailto:gm.marketing@arulpolymers.com" className="block text-xs text-slate-400 hover:text-white transition-colors truncate">gm.marketing@arulpolymers.com</a>
                </div>
              </div>
              <div className="pt-4 flex gap-4">
                <a
                  href="https://www.facebook.com/profile.php?id=100069847757821#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#00609C] hover:scale-110 transition-all cursor-pointer"
                >
                  <span className="text-[10px] font-black">FB</span>
                </a>
                <a
                  href="https://x.com/ArulPolymers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#DF1E26] hover:scale-110 transition-all cursor-pointer"
                >
                  <span className="text-[10px] font-black">X</span>
                </a>
                <a
                  href="https://www.linkedin.com/search/results/companies/?keywords=arul%20polymers&origin=SWITCH_SEARCH_VERTICAL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#00609C] hover:scale-110 transition-all cursor-pointer"
                >
                  <span className="text-[10px] font-black">IN</span>
                </a>
              </div>
            </div>

          </div>

          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600">
            <div>&copy; {new Date().getFullYear()} Arul Polymers Pvt. Ltd. All rights reserved.</div>
            <div className="flex gap-10">
              <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
              <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}