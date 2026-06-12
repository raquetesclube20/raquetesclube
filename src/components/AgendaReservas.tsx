import { useState, useMemo } from "react";
import { COURT_SLOTS_SAMPLE } from "../data";
import { CourtTimeSlot } from "../types";
import { motion, AnimatePresence } from "motion/react";
import { Calendar, Clock, MessageCircle, HelpCircle, Check, Users, Search, AlertCircle, Sparkles } from "lucide-react";

export default function AgendaReservas() {
  const [selectedSport, setSelectedSport] = useState("tenis");
  const [selectedDayOffset, setSelectedDayOffset] = useState(0); // 0 = Hoje, 1 = Amanhã, 2 = Depois
  const [selectedSlotId, setSelectedSlotId] = useState<string | null>(null);
  const [playerName, setPlayerName] = useState("");
  const [matchType, setMatchType] = useState("casual-simples"); // casual-simples, casual-duplas, ranking-desafio
  
  // Format dates from the visitor's current day.
  const days = useMemo(() => {
    const baseDate = new Date();
    
    return [0, 1, 2, 3].map((offset) => {
      const d = new Date(baseDate);
      d.setDate(baseDate.getDate() + offset);
      
      const weekday = d.toLocaleDateString("pt-BR", { weekday: "short" }).replace(".", "");
      const dayNum = d.getDate();
      const monthStr = d.toLocaleDateString("pt-BR", { month: "short" }).replace(".", "");
      
      return {
        offset,
        weekday: weekday.charAt(0).toUpperCase() + weekday.slice(1),
        dayNum,
        monthStr,
        fullDateStr: d.toLocaleDateString("pt-BR", { day: "numeric", month: "long" })
      };
    });
  }, []);

  const sportsList = [
    { id: "tenis", label: "Tênis", matches: "Tênis" },
    { id: "beach-tennis", label: "Beach Tennis", matches: "Beach Tennis" },
    { id: "squash", label: "Squash", matches: "Squash" },
    { id: "raquetinha", label: "Raquetinha", matches: "Raquetinha" },
    { id: "quadra-areia", label: "Quadra de Areia", matches: "Areia" },
  ];

  // Filtering court slots on the selected sport keyword
  const filteredSlots = useMemo(() => {
    const sportInfo = sportsList.find(s => s.id === selectedSport);
    if (!sportInfo) return [];
    
    // Filter sample slots matching name patterns
    return COURT_SLOTS_SAMPLE.filter(slot => {
      const nameLower = slot.courtName.toLowerCase();
      const matchWord = sportInfo.matches.toLowerCase();
      return nameLower.includes(matchWord);
    });
  }, [selectedSport]);

  const activeSlotObject = useMemo(() => {
    return filteredSlots.find(s => s.id === selectedSlotId);
  }, [selectedSlotId, filteredSlots]);

  // Dynamic generate WhatsApp link with precise prefilled Brazilian Portuguese text
  const whatsAppLink = useMemo(() => {
    const phone = "5519981522647";
    if (!activeSlotObject) {
      return `https://wa.me/${phone}?text=Ol%C3%A1!+Gostaria+de+informações+sobre+horários+disponíveis+no+Raquetes+Clube.`;
    }

    const dayName = days.find(d => d.offset === selectedDayOffset);
    const dateFormatted = dayName ? `${dayName.dayNum} de ${dayName.monthStr.toUpperCase()}` : "Hoje";
    
    const friendlyMatchName: { [key: string]: string } = {
      "casual-simples": "Simples Casual",
      "casual-duplas": "Duplas Casual",
      "ranking-desafio": "Desafio Oficial de Ranking"
    };

    let text = `Olá, Raquetes Clube! Gostaria de fazer uma reserva de quadra:\n\n`;
    text += `🎾 *Esporte*: ${sportsList.find(s => s.id === selectedSport)?.label}\n`;
    text += `📅 *Data*: ${dateFormatted}\n`;
    text += `⏰ *Horário*: ${activeSlotObject.time}\n`;
    text += `🏟️ *Quadra sugerida*: ${activeSlotObject.courtName}\n`;
    if (playerName.trim()) {
      text += `👤 *Nome*: ${playerName.trim()}\n`;
    }
    text += `🎯 *Formato*: ${friendlyMatchName[matchType] || "Casual"}\n\n`;
    text += `Por favor, confirmem se este horário está disponível para consolidação!`;

    return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  }, [selectedSport, selectedDayOffset, activeSlotObject, playerName, matchType, days]);

  return (
    <section className="relative py-20 bg-dark-bg" id="agenda">
      {/* Background radial highlight */}
      <div className="absolute top-[30%] right-[-10%] w-[40%] h-[40%] bg-court-neon/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[45%] h-[45%] bg-clay-orange/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-[0.3em] text-court-neon uppercase block mb-3">
            • FAÇA SEU JOGO •
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white mb-6 leading-tight">
            Agenda & <span className="text-gradient-neon font-extrabold">Reservas Online</span>
          </h2>
          <p className="text-gray-300 text-sm md:text-base">
            Escolha a modalidade, confira os horários sugeridos e fale com a secretaria pelo WhatsApp para confirmar a reserva.
          </p>
        </div>

        {/* Dynamic App Mock Container */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Form Step Controls (Left pane) */}
          <div className="lg:col-span-8 bg-panel-dark/50 border border-white/10 rounded-3xl p-6 md:p-8 space-y-8 backdrop-blur-md">
            
            {/* Step 1: Modality Selection */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-6 h-6 rounded-lg bg-court-neon/15 text-court-neon flex items-center justify-center font-mono text-xs font-bold">1</span>
                <h3 className="font-display font-bold text-lg text-white">Escolha a Modalidade</h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                {sportsList.map((sport) => (
                  <button
                    key={sport.id}
                    onClick={() => {
                      setSelectedSport(sport.id);
                      setSelectedSlotId(null); // Reset select on change
                    }}
                    className={`p-3.5 rounded-xl border text-center transition-all ${
                      selectedSport === sport.id
                        ? "border-court-neon bg-court-neon/15 text-court-neon font-bold shadow-md shadow-court-neon/10"
                        : "border-white/5 bg-panel-dark hover:border-white/20 text-gray-300 font-medium"
                    }`}
                  >
                    <span className="block text-xs uppercase tracking-wider">{sport.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Date Selector */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-6 h-6 rounded-lg bg-court-neon/15 text-court-neon flex items-center justify-center font-mono text-xs font-bold">2</span>
                <h3 className="font-display font-bold text-lg text-white">Data da Partida</h3>
              </div>
              <div className="grid grid-cols-4 gap-3">
                {days.map((day) => (
                  <button
                    key={day.offset}
                    onClick={() => setSelectedDayOffset(day.offset)}
                    className={`py-3 px-2 rounded-xl border flex flex-col items-center justify-center transition-all ${
                      selectedDayOffset === day.offset
                        ? "border-court-neon bg-court-neon/10 text-court-neon font-bold"
                        : "border-white/5 bg-panel-dark hover:border-white/15 text-gray-400"
                    }`}
                  >
                    <span className="text-[10px] font-mono tracking-widest uppercase mb-1">{day.weekday}</span>
                    <span className="text-xl font-display font-bold text-white mb-0.5">{day.dayNum}</span>
                    <span className="text-[9px] font-mono uppercase tracking-wider">{day.monthStr}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Hover Court/Slot Timelines inside Simulated Card Grid */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-lg bg-court-neon/15 text-court-neon flex items-center justify-center font-mono text-xs font-bold">3</span>
                  <h3 className="font-display font-bold text-lg text-white">Horários Disponíveis</h3>
                </div>
                <span className="text-xs font-mono text-gray-400">Clique para selecionar</span>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" id="slots-time-grid">
                {filteredSlots.map((slot) => (
                  <button
                    key={slot.id}
                    disabled={!slot.isAvailable}
                    onClick={() => setSelectedSlotId(slot.id)}
                    className={`p-4 rounded-xl border text-left flex items-center justify-between transition-all select-none ${
                      !slot.isAvailable
                        ? "bg-black/20 border-white/5 opacity-45 cursor-not-allowed"
                        : selectedSlotId === slot.id
                        ? "border-court-neon bg-court-neon/10 text-white"
                        : "border-white/5 bg-panel-dark/80 hover:border-white/15 text-gray-300"
                    }`}
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-gray-400" />
                        <span className="font-mono text-sm font-semibold">{slot.time}</span>
                      </div>
                      <span className="block text-[11px] text-gray-400 truncate max-w-[190px]">
                        {slot.courtName}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      {selectedSlotId === slot.id ? (
                        <span className="w-6 h-6 rounded-full bg-court-neon text-dark-bg flex items-center justify-center">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </span>
                      ) : !slot.isAvailable ? (
                        <span className="text-[10px] font-mono text-red-400 bg-red-400/5 py-0.5 px-2 rounded border border-red-500/10">Reservado</span>
                      ) : (
                        <span className="text-[10px] font-mono text-court-neon bg-court-neon/5 py-0.5 px-2 rounded border border-court-neon/10">Livre</span>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Player Match details */}
            <div className="grid md:grid-cols-2 gap-6 pt-4 border-t border-white/5">
              <div>
                <label className="block text-xs font-mono text-gray-400 uppercase tracking-widest mb-2">Seu Nome Completo</label>
                <input
                  type="text"
                  placeholder="Ex: Guilherme Silva"
                  value={playerName}
                  onChange={(e) => setPlayerName(e.target.value)}
                  className="w-full bg-panel-dark text-white text-sm font-medium border border-white/10 rounded-xl py-3 px-4 focus:outline-none focus:border-court-neon transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-gray-400 uppercase tracking-widest mb-2">Formato do Jogo</label>
                <select
                  value={matchType}
                  onChange={(e) => setMatchType(e.target.value)}
                  className="w-full bg-panel-dark text-white text-sm font-medium border border-white/10 rounded-xl py-3 px-4 focus:outline-none focus:border-court-neon transition-colors"
                >
                  <option value="casual-simples">🎾 Simples Casual (Dois Jogadores)</option>
                  <option value="casual-duplas">👥 Duplas Casual (Quatro Jogadores)</option>
                  <option value="ranking-desafio">🏆 Desafio Oficial de Ranking</option>
                </select>
              </div>
            </div>

          </div>

          {/* Ticket/Confirm Invoice Panel (Right pane) */}
          <div className="lg:col-span-4 bg-gradient-to-b from-panel-dark to-dark-bg border border-white/10 rounded-3xl p-6 relative overflow-hidden sticky lg:top-28">
            <div className="absolute top-0 left-0 w-full h-[5px] bg-gradient-to-r from-court-neon via-court-emerald to-sand-warm" />
            
            {/* Header info */}
            <div className="text-left mb-6">
              <span className="text-[10px] font-mono text-court-neon uppercase tracking-widest">Resumo do Ticket</span>
              <h4 className="font-display font-bold text-xl text-white">Confirmação de Reserva</h4>
              <p className="text-xs text-gray-400 mt-1">Conclua no WhatsApp</p>
            </div>

            {/* Dynamic Ticket body */}
            <div className="space-y-4 py-4 border-t border-b border-dashed border-white/10 text-left">
              <div className="flex justify-between items-start text-xs">
                <span className="text-gray-400">Modalidade:</span>
                <span className="font-bold text-white text-right">{sportsList.find(s => s.id === selectedSport)?.label}</span>
              </div>
              
              <div className="flex justify-between items-start text-xs">
                <span className="text-gray-400">Dia Selecionado:</span>
                <span className="font-bold text-white text-right">{days.find(d => d.offset === selectedDayOffset)?.fullDateStr}</span>
              </div>

              <div className="flex justify-between items-start text-xs">
                <span className="text-gray-400">Horário e Quadra:</span>
                <div className="text-right">
                  <span className="block font-bold text-court-neon">{activeSlotObject ? activeSlotObject.time : "Selecione um horário"}</span>
                  <span className="block text-[10px] text-gray-400 max-w-[180px] leading-tight mt-0.5">{activeSlotObject ? activeSlotObject.courtName : "Nenhum selecionado"}</span>
                </div>
              </div>

              <div className="flex justify-between items-start text-xs">
                <span className="text-gray-400">Nome do Atleta:</span>
                <span className="font-bold text-white text-right">{playerName.trim() || "- Não informado -"}</span>
              </div>

              <div className="flex justify-between items-start text-xs">
                <span className="text-gray-400">Formato:</span>
                <span className="font-bold text-white text-right">
                  {matchType === "casual-simples" ? "Simples" : matchType === "casual-duplas" ? "Duplas" : "Desafio Oficial"}
                </span>
              </div>
            </div>

            {/* Simulated Live preview message visual */}
            <div className="my-6 p-4 rounded-xl bg-black/40 border border-white/5 text-left text-[11px] font-mono leading-relaxed text-gray-400 space-y-1 relative">
              <div className="absolute top-2 right-2 flex items-center gap-1.5 text-[9px] text-court-neon">
                <Sparkles className="w-3 h-3" />
                Mensagem
              </div>
              <p className="text-white border-b border-white/5 pb-1 text-[10px] uppercase font-bold tracking-wider mb-2">Mensagem gerada:</p>
              
              <p className="truncate">Olá! Gostaria de reservar uma quadra...</p>
              <p className="truncate">🎯 Esporte: {sportsList.find(s => s.id === selectedSport)?.label}</p>
              <p className="truncate">📅 Data: {days.find(d => d.offset === selectedDayOffset)?.fullDateStr}</p>
              <p className="truncate">⏰ Horário: {activeSlotObject ? activeSlotObject.time : "___"}</p>
            </div>

            {/* Primary Action Button */}
            <a
              href={whatsAppLink}
              target="_blank"
              rel="noreferrer"
              className={`w-full flex items-center justify-center gap-2.5 text-center font-bold py-3.5 px-5 rounded-xl uppercase tracking-wider text-xs transition-all ${
                !activeSlotObject
                  ? "bg-white/5 text-gray-500 border border-white/5 cursor-not-allowed"
                  : "bg-court-neon hover:bg-white text-dark-bg shadow-lg shadow-court-neon/15"
              }`}
              id="confirm-booking-cta"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              {activeSlotObject ? "Reservar via WhatsApp" : "Selecione o horário primeiro"}
            </a>

            {/* Quick Helper Tips info */}
            <div className="mt-4 flex items-center gap-2 text-[10px] text-gray-400 text-left bg-white/5 p-3 rounded-lg border border-white/5">
              <AlertCircle className="w-4 h-4 text-court-neon shrink-0" />
              <span>Cancelamento livre sem taxas com até 4 horas de antecedência pelo chat do clube.</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
