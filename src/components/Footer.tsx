import React from "react";
import { MapPin, Phone, Instagram, Calendar, Users, Award, Shield, ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const handleScrollToSec = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
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
  };

  return (
    <footer className="bg-dark-bg border-t border-white/5 pt-16 pb-8 relative z-10" id="main-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Brand Banner Top row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/5 items-start">
          
          {/* Logo & Slogan Column */}
          <div className="md:col-span-5 flex flex-col items-start text-left space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-court-neon to-court-emerald flex items-center justify-center glow-neon">
                <span className="font-display font-extrabold text-dark-bg text-base">R</span>
              </div>
              <span className="font-display font-black text-xl tracking-tight text-white">
                RAQUETES<span className="text-court-neon">CLUBE</span>
              </span>
            </div>
            
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed max-w-sm">
              Inovando a cena dos esportes de raquete e areia em Americana-SP com infraestrutura boutique de alto nível, academia especializada e rankings ativos.
            </p>

            <div className="space-y-3.5 pt-2 text-xs text-gray-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-court-neon shrink-0 mt-0.5" />
                <div>
                  <span className="block font-bold text-[10px] uppercase font-mono text-court-neon">Unidade Americana</span>
                  <span className="text-[11px] leading-relaxed">Av. de Cillo, 4451 - Parque Novo Mundo, Americana - SP, 13467-600</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-court-emerald shrink-0 mt-0.5" />
                <div>
                  <span className="block font-bold text-[10px] uppercase font-mono text-court-emerald">Unidade Nova Odessa</span>
                  <span className="text-[11px] leading-relaxed">Chácara Sol Nascente - Av. Cinco, 227 - Bosque dos Eucaliptos, Nova Odessa - SP, 13381-060</span>
                </div>
              </div>
            </div>
          </div>

          {/* Modalidades Column */}
          <div className="md:col-span-2 text-left space-y-4">
            <h4 className="text-xs font-mono tracking-widest text-white uppercase font-bold">Modalidades</h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li><a href="#modalidades" onClick={(e) => handleScrollToSec(e, "modalidades")} className="hover:text-court-neon transition-colors">Tênis de Saibro</a></li>
              <li><a href="#modalidades" onClick={(e) => handleScrollToSec(e, "modalidades")} className="hover:text-court-neon transition-colors">Beach Tennis</a></li>
              <li><a href="#modalidades" onClick={(e) => handleScrollToSec(e, "modalidades")} className="hover:text-court-neon transition-colors">Squash Climatizado</a></li>
              <li><a href="#modalidades" onClick={(e) => handleScrollToSec(e, "modalidades")} className="hover:text-court-neon transition-colors">Raquetinha Oficial</a></li>
              <li><a href="#modalidades" onClick={(e) => handleScrollToSec(e, "modalidades")} className="hover:text-court-neon transition-colors">Quadra de Areia</a></li>
            </ul>
          </div>

          {/* Links Rápidos Column */}
          <div className="md:col-span-2 text-left space-y-4">
            <h4 className="text-xs font-mono tracking-widest text-white uppercase font-bold">Navegação</h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li><a href="#experiencia" onClick={(e) => handleScrollToSec(e, "experiencia")} className="hover:text-court-neon transition-colors">O Clube Boutique</a></li>
              <li><a href="#unidades" onClick={(e) => handleScrollToSec(e, "unidades")} className="hover:text-court-neon transition-colors">Nossas Unidades</a></li>
              <li><a href="#agenda" onClick={(e) => handleScrollToSec(e, "agenda")} className="hover:text-court-neon transition-colors">Reserva de Quadras</a></li>
              <li><a href="#aulas" onClick={(e) => handleScrollToSec(e, "aulas")} className="hover:text-court-neon transition-colors">Aulas & Professores</a></li>
              <li><a href="#rankings" onClick={(e) => handleScrollToSec(e, "rankings")} className="hover:text-court-neon transition-colors">Tabelas de Ranking</a></li>
              <li><a href="#galeria" onClick={(e) => handleScrollToSec(e, "galeria")} className="hover:text-court-neon transition-colors">Galeria de Fotos</a></li>
            </ul>
          </div>

          {/* Socials column including hours */}
          <div className="md:col-span-3 text-left space-y-4">
            <h4 className="text-xs font-mono tracking-widest text-white uppercase font-bold">Conecte-se</h4>
            <p className="text-xs text-gray-400">Acompanhe fotos diárias, novidades de torneios e avisos de quadras livres.</p>
            
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com/raquetesclube"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-court-neon/15 hover:text-court-neon border border-white/10 flex items-center justify-center transition-colors text-white"
                aria-label="Instagram Raquetes Clube"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/5519999999999"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-court-neon/15 hover:text-court-neon border border-white/10 flex items-center justify-center transition-colors text-white"
                aria-label="WhatsApp Raquetes Clube"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>

            <div className="bg-white/5 p-3 rounded-xl border border-white/5 text-[11px] text-gray-400 font-mono space-y-1">
              <span className="block text-white font-bold text-xs mb-1">Horário de Funcionamento</span>
              <span className="block">Seg a Sáb: 07h - 22h</span>
              <span className="block">Dom e Feriados: 07h - 18h</span>
            </div>
          </div>

        </div>

        {/* Bottom row: copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-mono">
          <div>
            <span>© {currentYear} Raquetes Clube Americana v2.0 • Todos os direitos reservados.</span>
          </div>
          
          <div className="flex items-center gap-4">
            <button
              onClick={handleScrollToTop}
              className="flex items-center gap-1 bg-white/5 hover:bg-court-neon/10 hover:text-court-neon border border-white/5 rounded-lg py-1 px-3.5 transition-colors cursor-pointer"
            >
              Voltar ao Topo
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
