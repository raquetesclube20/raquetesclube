import React, { useState, useEffect } from "react";
import { Menu, X, Calendar, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import logo from "../../assets/logo.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const menuItems = [
    { label: "Unidades", href: "#unidades" },
    { label: "Modalidades", href: "#modalidades" },
    { label: "Aulas", href: "#aulas" },
    { label: "O Clube", href: "#experiencia" },
    { label: "Agenda", href: "#agenda" },
    { label: "Rankings", href: "#rankings" },
    { label: "Galeria", href: "#galeria" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      if (window.scrollY < 100) {
        setActiveSection("");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = menuItems.map(item => item.href.slice(1));
    
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -55% 0px", // triggers when section is in the main viewing zone
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach(id => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

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
          <a href="#" className="flex items-center gap-2 group" onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}>
            <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center glow-neon transition-transform duration-300 group-hover:rotate-6 overflow-hidden p-1">
              <img src={logo} alt="Raquetes Clube" className="w-full h-full object-contain" />
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
          <nav className="hidden lg:flex items-center gap-1 bg-white/[0.02] border border-white/5 p-1 rounded-full backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_4px_20px_rgba(0,0,0,0.2)]">
            {menuItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href.slice(1))}
                  className={`text-[10px] uppercase tracking-wider font-mono font-bold transition-all duration-300 relative px-3 py-1.5 rounded-full cursor-pointer select-none ${
                    isActive 
                      ? "text-dark-bg" 
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  <span className="relative z-10 transition-colors duration-300">{item.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeNavBubble"
                      className="absolute inset-0 bg-gradient-to-r from-court-neon to-sand-warm rounded-full shadow-[0_0_15px_rgba(8,174,234,0.45)] border border-court-neon/45"
                      transition={{ type: "spring", stiffness: 380, damping: 28 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop Call to Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#agenda"
              className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-court-neon bg-court-neon/5 hover:bg-court-neon/15 border border-court-neon/30 py-2 px-4 rounded-xl transition-all duration-300 glow-neon"
              id="cta-schedule-top"
              onClick={(e) => scrollToSection(e, "agenda")}
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
              <nav className="flex flex-col space-y-2.5">
                {menuItems.map((item, idx) => {
                  const isActive = activeSection === item.href.slice(1);
                  return (
                    <motion.a
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: idx * 0.05 }}
                      key={item.label}
                      href={item.href}
                      onClick={(e) => scrollToSection(e, item.href.slice(1))}
                      className={`text-base font-bold transition-all py-2.5 px-3 rounded-xl flex items-center justify-between relative overflow-hidden ${
                        isActive 
                          ? "text-court-neon bg-gradient-to-r from-court-neon/10 to-transparent border-l-2 border-court-neon pl-4 shadow-[inset_1px_0_0_rgba(8,174,234,0.1)]" 
                          : "text-gray-300 hover:text-white hover:bg-white/[0.02] border-l-2 border-transparent pl-2 hover:pl-4"
                      }`}
                    >
                      <span>{item.label}</span>
                      {isActive && <div className="w-1.5 h-1.5 rounded-full bg-court-neon shadow-[0_0_6px_#08aeea]" />}
                    </motion.a>
                  );
                })}
              </nav>

              <div className="pt-4 flex flex-col gap-3">
                <a
                  href="#agenda"
                  onClick={(e) => scrollToSection(e, "agenda")}
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
