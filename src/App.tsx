import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Modalidades from "./components/Modalidades";
import Experiencia from "./components/Experiencia";
import AgendaReservas from "./components/AgendaReservas";
import RankingTorneios from "./components/RankingTorneios";
import AulasProfessores from "./components/AulasProfessores";
import Unidades from "./components/Unidades";
import Galeria from "./components/Galeria";
import CTAFinal from "./components/CTAFinal";
import Footer from "./components/Footer";
import QuickContactButton from "./components/QuickContactButton";

export default function App() {
  const [activeUnit, setActiveUnit] = useState<number>(1);

  return (
    <div className="min-h-screen bg-dark-bg text-slate-100 flex flex-col relative" id="app-root-frame">
      {/* Decorative global mesh or lighting dots */}
      <div className="absolute top-[15%] right-[-10%] w-[40%] h-[40%] bg-gradient-to-tr from-court-neon/5 to-court-emerald/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[60%] left-[-15%] w-[45%] h-[45%] bg-gradient-to-br from-clay-orange/5 to-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Navigation Header bar */}
      <Header />

      {/* Main Sections */}
      <main className="flex-grow">
        <Hero />
        <Modalidades />
        <AulasProfessores />
        <Experiencia />
        <AgendaReservas />
        <RankingTorneios />
        <Unidades activeUnit={activeUnit} setActiveUnit={setActiveUnit} />
        <Galeria />
        <CTAFinal />
      </main>

      {/* Global Interactive Floating widgets */}
      <QuickContactButton activeUnit={activeUnit} />

      {/* Footer information mapping */}
      <Footer />
    </div>
  );
}

