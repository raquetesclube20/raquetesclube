import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { Check, MapPin, MessageCircle, Navigation, PlayCircle } from "lucide-react";
import americanaImg from "../../assets/americana.png";
import novaOdessaImg from "../../assets/nova_odessa.png";
import americanaVideo1 from "../../assets/americana/vids/1am_torneio.MP4";
import americanaVideo2 from "../../assets/americana/vids/2am_torneio2.MP4";
import americanaPhoto2 from "../../assets/americana/asrfotografiaesportiva-217_2250743_224563.jpg";
import americanaPhoto3 from "../../assets/americana/raquetes aerea.png";
import americanaPhoto4 from "../../assets/americana/raquetes2.jpeg";
import americanaPhoto5 from "../../assets/americana/WhatsApp Image 2024-11-13 at 08.59.00 (2).jpeg";
import novaOdessaVideo3 from "../../assets/nova-odessa/vids/13no_por do sol.mp4";
import novaOdessaVideo4 from "../../assets/nova-odessa/vids/14nodrone.mp4";
import novaOdessaVideo5 from "../../assets/nova-odessa/vids/WhatsApp Video 2026-06-06 at 16.52.45.mp4";
import novaOdessaPhoto1 from "../../assets/nova-odessa/no.jpeg";
import novaOdessaPhoto2 from "../../assets/nova-odessa/WhatsApp Image 2026-05-28 at 17.52.19 (1).jpeg";

type UnitMedia = {
  type: "video" | "image";
  src: string;
  label: string;
};

type Unit = {
  id: number;
  slug: "americana" | "nova-odessa";
  name: string;
  shortName: string;
  tagline: string;
  address: string;
  phone: string;
  phoneRaw: string;
  description: string;
  courts: string[];
  directionLink: string;
  pagePath: string;
  image: string;
  media: UnitMedia[];
};

function buildUnits(): Unit[] {
  const americanaMedia: UnitMedia[] = [
    { type: "video", src: americanaVideo1, label: "Raquetes Clube Americana" },
    { type: "video", src: americanaVideo2, label: "Torneio em quadra" },
    { type: "image", src: americanaPhoto5, label: "Familia Raquetes" },
    { type: "image", src: americanaPhoto2, label: "Jogos Americana" },
    { type: "image", src: americanaPhoto3, label: "Quadras Americana" },
    { type: "image", src: americanaPhoto4, label: "Raquetes Clube Americana" },
  ];

  const novaOdessaMedia: UnitMedia[] = [
    { type: "video", src: novaOdessaVideo4, label: "Raquetes Clube Nova Odessa" },
    { type: "video", src: novaOdessaVideo3, label: "Por do sol" },
    { type: "video", src: novaOdessaVideo5, label: "Bastidores Nova Odessa" },
    { type: "image", src: novaOdessaPhoto1, label: "Estrutura Nova Odessa" },
    { type: "image", src: novaOdessaPhoto2, label: "Unidade Nova Odessa" },
  ];

  return [
    {
      id: 1,
      slug: "americana",
      name: "Unidade Americana",
      shortName: "Americana",
      tagline: "Tênis, raquetinha, squash, beach tennis e quadra de areia",
      address: "Av. de Cillo, 4451 - Pq Novo Mundo, Americana - SP",
      phone: "(19) 98152-2647",
      phoneRaw: "5519981522647",
      description:
        "Nossa unidade em Americana reúne tênis, raquetinha, squash, beach tennis e quadra de areia em uma estrutura completa para treinos, aulas, partidas e convivência no clube.",
      courts: ["Tênis", "Raquetinha", "Squash", "Beach Tennis", "Quadra de Areia"],
      directionLink: "https://maps.google.com/?q=Av.+de+Cillo,+4451+-+Pq+Novo+Mundo,+Americana+-+SP",
      pagePath: `${import.meta.env.BASE_URL}americana`,
      image: americanaImg,
      media: americanaMedia,
    },
    {
      id: 2,
      slug: "nova-odessa",
      name: "Unidade Nova Odessa",
      shortName: "Nova Odessa",
      tagline: "Tênis e raquetinha",
      address: "Av. Cinco, 227 - Bosque dos Eucaliptos, Nova Odessa - SP",
      phone: "(19) 92012-7054",
      phoneRaw: "5519920127054",
      description:
        "Nossa unidade em Nova Odessa atende jogadores de tênis e raquetinha com estrutura objetiva, acolhedora e preparada para partidas, treinos e aulas.",
      courts: ["Tênis", "Raquetinha"],
      directionLink: "https://maps.google.com/?q=Av.+Cinco,+227+-+Bosque+dos+Eucaliptos,+Nova+Odessa+-+SP",
      pagePath: `${import.meta.env.BASE_URL}nova-odessa`,
      image: novaOdessaImg,
      media: novaOdessaMedia,
    },
  ];
}

export default function UnidadesCarrossel() {
  const units = useMemo(() => buildUnits(), []);

  return (
    <section className="relative py-20 bg-dark-bg border-b border-white/5 overflow-hidden" id="unidades">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(8,174,234,0.12),transparent_30%),radial-gradient(circle_at_85%_45%,rgba(255,220,74,0.1),transparent_28%)] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-dark-bg/92 to-dark-bg pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-mono tracking-[0.3em] text-court-neon uppercase block mb-3">
            • ESTRUTURA E UNIDADES BOUTIQUE •
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white mb-5 leading-tight">
            Nossas <span className="text-gradient-neon font-extrabold">Unidades</span>
          </h2>
          <p className="text-gray-300 text-sm md:text-base">
            Conheça as duas unidades do Raquetes Clube em sequência. Primeiro Americana, depois Nova Odessa, cada uma com estrutura, modalidades, endereço e contatos rápidos.
          </p>
        </div>

        <div className="space-y-14">
          {units.map((unit, index) => (
            <UnitSection key={unit.slug} unit={unit} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function UnitSection({ unit, index }: { unit: Unit; index: number; key?: string }) {
  const [mediaIndex, setMediaIndex] = useState(0);
  const activeMedia = unit.media[mediaIndex] || unit.media[0];

  const handleWhatsAppContact = () => {
    const text = `Olá! Gostaria de falar com a secretaria do Raquetes Clube - *${unit.name}*. Vim pelo site e gostaria de saber as informações sobre reserva de quadras e aulas livres.`;
    window.open(`https://wa.me/${unit.phoneRaw}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.55, ease: [0.25, 1, 0.5, 1] }}
      className="relative"
    >
      <div className="mb-5 flex flex-wrap items-center gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-court-neon text-dark-bg font-black shadow-[0_0_26px_rgba(8,174,234,0.35)]">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div>
          <p className="text-[10px] font-mono uppercase tracking-[0.22em] text-court-neon">Unidade {index + 1}</p>
          <h3 className="font-display text-2xl sm:text-3xl font-black text-white">{unit.name}</h3>
        </div>
      </div>

      <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch ${index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
        <div className="lg:col-span-6 relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl min-h-[320px] sm:min-h-[410px] lg:min-h-[520px] group">
          {activeMedia.type === "video" ? (
            <video
              src={activeMedia.src}
              poster={unit.image}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              aria-label={`${unit.name}: ${activeMedia.label}`}
            />
          ) : (
            <img
              src={activeMedia.src}
              alt={`${unit.name}: ${activeMedia.label}`}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/95 via-dark-bg/16 to-transparent" />
          <div className="absolute top-6 left-6 px-4 py-2 bg-black/60 backdrop-blur-md rounded-2xl border border-white/10 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-court-neon animate-pulse" />
            <span className="text-court-neon font-mono font-bold text-xs uppercase tracking-widest">{unit.shortName}</span>
          </div>

          <div className="absolute top-6 right-6 px-3 py-2 bg-black/60 backdrop-blur-md rounded-2xl border border-white/10">
            <span className="text-white font-mono font-bold text-[10px] uppercase tracking-widest">
              {activeMedia.type === "video" ? "Video" : "Foto"} {mediaIndex + 1}/{unit.media.length}
            </span>
          </div>

          <div className="absolute bottom-6 left-6 right-6">
            <span className="text-[10px] font-mono uppercase tracking-widest text-court-neon block mb-1">
              {activeMedia.type === "video" ? "Mídia em destaque" : "Galeria da unidade"}
            </span>
            <p className="text-white text-sm font-bold truncate">{activeMedia.label}</p>

            <div className="mt-4 grid grid-cols-5 gap-2">
              {unit.media.map((media, idx) => (
                <button
                  key={`${unit.slug}-${media.type}-${idx}`}
                  onClick={() => setMediaIndex(idx)}
                  className={`relative h-14 rounded-xl overflow-hidden border transition-all ${
                    mediaIndex === idx ? "border-court-neon shadow-[0_0_14px_rgba(8,174,234,0.35)]" : "border-white/10 opacity-75 hover:opacity-100"
                  }`}
                  aria-label={`Ver ${media.type === "video" ? "video" : "foto"} ${idx + 1} de ${unit.shortName}`}
                >
                  {media.type === "video" ? (
                    <>
                      <video src={media.src} muted playsInline preload="metadata" className="w-full h-full object-cover" />
                      <span className="absolute inset-0 grid place-items-center bg-black/35 text-white">
                        <PlayCircle className="w-5 h-5" />
                      </span>
                    </>
                  ) : (
                    <img src={media.src} alt="" className="w-full h-full object-cover" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 flex flex-col justify-between bg-panel-dark/48 border border-white/5 rounded-3xl p-6 sm:p-8 lg:p-10 text-left backdrop-blur-sm shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-court-neon mb-2 block">RAQUETES CLUBE</span>
            <h4 className="font-display font-black text-2xl sm:text-4xl text-white mb-2 leading-tight">{unit.name}</h4>
            <p className="text-gray-400 text-xs sm:text-sm font-medium italic mb-6">{unit.tagline}</p>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6">{unit.description}</p>

            <div className="space-y-3 mb-6 border-t border-b border-white/5 py-5">
              <h5 className="text-xs font-mono tracking-wider uppercase text-white font-bold">Modalidades e estrutura</h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {unit.courts.map((court) => (
                  <div key={court} className="flex items-center gap-2 text-xs text-gray-300">
                    <Check className="w-4 h-4 text-court-neon shrink-0" />
                    <span>{court}</span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href={unit.directionLink}
              target="_blank"
              rel="noreferrer"
              className="bg-black/35 hover:bg-black/45 p-4 rounded-2xl border border-white/5 hover:border-court-neon/20 mb-6 flex items-start gap-3 transition-colors"
            >
              <MapPin className="w-5 h-5 text-court-neon shrink-0 mt-0.5" />
              <div className="space-y-0.5">
                <span className="text-[9px] font-mono text-gray-500 uppercase block">Endereço oficial</span>
                <p className="text-xs text-white leading-relaxed font-sans">{unit.address}</p>
                <p className="text-[11px] text-gray-400 font-semibold">{unit.phone}</p>
              </div>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-auto">
            <button
              onClick={handleWhatsAppContact}
              className="w-full py-3.5 px-4 rounded-xl bg-court-neon hover:bg-white text-dark-bg font-bold font-sans text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:shadow-white/5"
            >
              <MessageCircle className="w-4.5 h-4.5 fill-dark-bg" />
              WhatsApp
            </button>

            <a
              href={unit.pagePath}
              className="w-full py-3.5 px-4 rounded-xl bg-sand-warm hover:bg-white text-dark-bg font-bold font-sans text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              Ver unidade
            </a>

            <a
              href={unit.directionLink}
              target="_blank"
              rel="noreferrer"
              className="w-full py-3.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-white font-bold font-sans text-xs uppercase tracking-wider transition-all border border-white/10 hover:border-court-neon/30 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Navigation className="w-4 h-4 text-court-neon" />
              Rota
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
