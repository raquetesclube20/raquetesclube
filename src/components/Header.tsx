import React, { useState, useEffect } from "react";
import { Menu, X, Calendar, MessageCircle, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Modalidades", href: "#modalidades" },
    { label: "O Clube", href: "#experiencia" },
    { label: "Agenda", href: "#agenda" },
    { label: "Rankings", href: "#rankings" },
    { label: "Aulas", href: "#aulas" },
    { label: "Unidades", href: "#unidades" },
    { label: "Galeria", href: "#galeria" },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth"
      });
    }
    setIsOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-dark-bg/95 backdrop-blur-md border-b border-white/5 py-4 shadow-xl" 
        : "bg-transparent py-6"
    }`} id="main-header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-court-neon to-court-emerald flex items-center justify-center glow-neon transition-transform duration-300 group-hover:rotate-12">
              <span className="font-display font-extrabold text-dark-bg text-lg">R</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-xl tracking-tight text-white group-hover:text-court-neon transition-colors">
                RAQUETES<span className="text-court-neon">CLUBE</span>
              </span>
              <span className="text-[9px] font-mono tracking-widest text-gray-400 -mt-1 leading-none uppercase">
                AMERICANA • v2.0
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href.slice(1))}
                className="text-sm font-medium text-gray-300 hover:text-court-neon transition-colors duration-200 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-court-neon after:transition-all hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop Call to Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#agenda"
              className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-court-neon bg-court-neon/5 hover:bg-court-neon/15 border border-court-neon/30 py-2 px-4 rounded-xl transition-all duration-300 glow-neon"
              id="cta-schedule-top"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById("agenda");
                if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
              }}
            >
              <Calendar className="w-4 h-4" />
              Ver Agenda
            </a>
            <a
              href="https://wa.me/5519999999999?text=Ol%C3%A1!+Gostaria+de+reservar+uma+quadra+no+Raquetes+Clube."
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-dark-bg bg-court-neon hover:bg-white border border-court-neon py-2 px-5 rounded-xl transition-all duration-300 shadow-md font-sans"
              id="cta-whatsapp-top"
            >
              <MessageCircle className="w-5 h-5 fill-dark-bg" />
              Reservar Quadra
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-gray-300 bg-white/5 hover:bg-white/10 hover:text-white transition-all border border-white/5"
              aria-label="Toggle Menu"
              id="mobile-menu-toggle"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer (Framer Motion) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden w-full bg-dark-bg/95 border-b border-white/10 backdrop-blur-lg overflow-hidden absolute top-full left-0 shadow-2xl"
          >
            <div className="px-4 py-6 space-y-4 max-h-[80vh] overflow-y-auto">
              <nav className="flex flex-col space-y-3">
                {menuItems.map((item, idx) => (
                  <motion.a
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    key={item.label}
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href.slice(1))}
                    className="text-base font-medium text-gray-300 hover:text-court-neon hover:pl-2 transition-all py-2 border-b border-white/5"
                  >
                    {item.label}
                  </motion.a>
                ))}
              </nav>

              <div className="pt-4 flex flex-col gap-3">
                <a
                  href="#agenda"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsOpen(false);
                    const el = document.getElementById("agenda");
                    if (el) window.scrollTo({ top: el.offsetTop - 85, behavior: "smooth" });
                  }}
                  className="flex items-center justify-center gap-2 w-full text-center py-3 px-4 rounded-xl text-court-neon bg-court-neon/10 border border-court-neon/20 font-semibold text-sm uppercase tracking-wider"
                >
                  <Calendar className="w-4 h-4" />
                  Ver Agenda Online
                </a>
                <a
                  href="https://wa.me/5519999999999?text=Ol%C3%A1!+Gostaria+de+reservar+uma+quadra+no+Raquetes+Clube."
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 w-full text-center py-3 px-4 rounded-xl bg-court-neon text-dark-bg hover:bg-white transition-colors duration-300 font-semibold text-sm uppercase tracking-wider shadow-lg"
                >
                  <MessageCircle className="w-5 h-5 fill-dark-bg" />
                  Reservar pelo WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
