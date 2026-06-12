import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import UnidadesCarrossel from "./components/UnidadesCarrossel";
import Modalidades from "./components/Modalidades";
import Experiencia from "./components/Experiencia";
import AgendaReservas from "./components/AgendaReservas";
import RankingTorneios from "./components/RankingTorneios";
import AulasProfessores from "./components/AulasProfessores";
import InstagramSection from "./components/InstagramSection";
import Footer from "./components/Footer";
import QuickContactButton from "./components/QuickContactButton";
import UnidadePage from "./components/UnidadePage";

export default function App() {
  const path = window.location.pathname.replace(/\/$/, "");

  if (path.endsWith("/americana")) {
    return (
      <div className="min-h-screen bg-dark-bg text-slate-100 flex flex-col relative" id="app-root-frame">
        <Header />
        <main className="flex-grow">
          <UnidadePage unitId="americana" />
        </main>
        <QuickContactButton />
        <Footer />
      </div>
    );
  }

  if (path.endsWith("/nova-odessa")) {
    return (
      <div className="min-h-screen bg-dark-bg text-slate-100 flex flex-col relative" id="app-root-frame">
        <Header />
        <main className="flex-grow">
          <UnidadePage unitId="nova-odessa" />
        </main>
        <QuickContactButton />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-bg text-slate-100 flex flex-col relative" id="app-root-frame">
      {/* Navigation Header bar */}
      <Header />

      {/* Main Sections */}
      <main className="flex-grow">
        <Hero />
        <UnidadesCarrossel />
        <Modalidades />
        <AulasProfessores />
        <Experiencia />
        <InstagramSection />
        <AgendaReservas />
        <RankingTorneios />
      </main>

      {/* Global Interactive Floating widgets */}
      <QuickContactButton />

      {/* Footer information mapping */}
      <Footer />
    </div>
  );
}
