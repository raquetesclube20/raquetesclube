import React from "react";
import { motion } from "motion/react";
import { MessageCircle, Calendar, ArrowUpRight } from "lucide-react";

export default function CTAFinal() {
  const handleScrollToAgenda = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const el = document.getElementById("agenda");
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 85,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="relative py-20 lg:py-28 bg-dark-bg overflow-hidden" id="cta-final-sec">
      {/* Background spot light effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-gradient-to-tr from-court-neon/10 to-court-emerald/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Main box card styled with glassmorphism */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-panel-dark/55 border border-white/10 rounded-3xl p-8 md:p-16 backdrop-blur-md relative overflow-hidden shadow-2xl"
        >
          {/* Subtle line elements inside */}
          <div className="absolute top-0 left-0 w-32 h-[1px] bg-gradient-to-r from-court-neon to-transparent" />
          <div className="absolute bottom-0 right-0 w-32 h-[1px] bg-gradient-to-l from-court-neon to-transparent" />

          {/* Icon indicator */}
          <div className="w-12 h-12 rounded-2xl bg-court-neon/15 text-court-neon flex items-center justify-center mx-auto mb-6">
            <Calendar className="w-6 h-6" />
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white mb-6 leading-tight max-w-2xl mx-auto">
            Sua próxima partida <span className="text-gradient-neon font-extrabold">começa aqui</span>.
          </h2>

          <p className="text-gray-300 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Reserve uma quadra premium, agende uma aula experimental de alta performance ou venha conhecer a melhor comunidade esportiva de Americana.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <a
              href="https://wa.me/5519999999999?text=Ol%C3%A1%2C+Raquetes+Clube!+Gostaria+de+reservar+uma+quadra+ou+agendar+uma+aula+experimental."
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider bg-court-neon hover:bg-white text-dark-bg transition-all duration-300 shadow-lg shadow-court-neon/15 hover:shadow-white/10 cursor-pointer font-sans"
              id="cta-whatsapp-bottom"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              Falar no WhatsApp
            </a>

            <button
              onClick={handleScrollToAgenda}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider bg-white/5 hover:bg-white/10 border border-white/10 hover:border-court-neon/35 text-white transition-all cursor-pointer"
            >
              Ver Agenda Online
              <ArrowUpRight className="w-4 h-4 text-court-neon" />
            </button>
          </div>

          {/* Social reassurance tag */}
          <p className="text-[11px] font-mono text-gray-500 mt-8 uppercase tracking-widest leading-none">
            • Americana • SP • Aberto todos os dias das 07h às 22h •
          </p>

        </motion.div>

      </div>
    </section>
  );
}
