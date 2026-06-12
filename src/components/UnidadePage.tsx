import { useEffect } from "react";
import { ArrowLeft, Check, MapPin, MessageCircle, Navigation } from "lucide-react";
import americanaImg from "../../assets/americana.png";
import novaOdessaImg from "../../assets/nova_odessa.png";
import americanaVideo from "../../assets/americana/vids/1am_torneio.MP4";
import novaOdessaVideo from "../../assets/nova-odessa/vids/14nodrone.mp4";

type UnitId = "americana" | "nova-odessa";

interface UnidadePageProps {
  unitId: UnitId;
}

const units = {
  americana: {
    city: "Americana",
    title: "Raquetes Clube Americana",
    subtitle: "Tênis, raquetinha, squash, beach tennis e quadra de areia",
    address: "Av. de Cillo, 4451 - Pq Novo Mundo, Americana - SP",
    phone: "(19) 98152-2647",
    phoneRaw: "5519981522647",
    image: americanaImg,
    video: americanaVideo,
    mapLink: "https://maps.google.com/?q=Av.+de+Cillo,+4451+-+Pq+Novo+Mundo,+Americana+-+SP",
    modalities: ["Tênis", "Raquetinha", "Squash", "Beach Tennis", "Quadra de Areia"],
    description:
      "A unidade de Americana reúne as principais modalidades do clube em um só endereço, com estrutura para aulas, reservas, jogos casuais e rankings.",
  },
  "nova-odessa": {
    city: "Nova Odessa",
    title: "Raquetes Clube Nova Odessa",
    subtitle: "Tênis e raquetinha",
    address: "Av. Cinco, 227 - Bosque dos Eucaliptos, Nova Odessa - SP",
    phone: "(19) 92012-7054",
    phoneRaw: "5519920127054",
    image: novaOdessaImg,
    video: novaOdessaVideo,
    mapLink: "https://maps.google.com/?q=Av.+Cinco,+227+-+Bosque+dos+Eucaliptos,+Nova+Odessa+-+SP",
    modalities: ["Tênis", "Raquetinha"],
    description:
      "A unidade de Nova Odessa atende jogadores de tênis e raquetinha com uma estrutura direta para treinar, jogar e falar com a secretaria da unidade.",
  },
};

export default function UnidadePage({ unitId }: UnidadePageProps) {
  const unit = units[unitId];
  const homePath = import.meta.env.BASE_URL;

  useEffect(() => {
    document.title = `${unit.title} | Endereço, WhatsApp e modalidades`;

    const metaDescription =
      document.querySelector<HTMLMetaElement>('meta[name="description"]') ||
      document.head.appendChild(document.createElement("meta"));
    metaDescription.name = "description";
    metaDescription.content = `${unit.title}: ${unit.subtitle}. Endereço: ${unit.address}. WhatsApp: ${unit.phone}.`;
  }, [unit]);

  const whatsAppText = encodeURIComponent(
    `Olá! Gostaria de falar com a secretaria do ${unit.title}. Vim pelo site e quero informações sobre reservas e aulas.`
  );

  return (
    <section className="relative min-h-screen pt-32 pb-20 bg-dark-bg overflow-hidden">
      <video
        key={unitId}
        src={unit.video}
        poster={unit.image}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        data-unit-video="background"
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-dark-bg via-dark-bg/78 to-dark-bg/40 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-dark-bg/70 pointer-events-none" />
      <div className="absolute top-24 right-[-15%] w-[45%] h-[45%] bg-court-neon/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <a
          href={homePath}
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-court-neon hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar para o site
        </a>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 text-left rounded-3xl bg-dark-bg/55 border border-white/10 backdrop-blur-md p-6 sm:p-8 shadow-2xl">
            <span className="text-xs font-mono tracking-[0.25em] text-court-neon uppercase block mb-4">
              Unidade {unit.city}
            </span>
            <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white leading-tight mb-5">
              {unit.title}
            </h1>
            <p className="text-xl text-squash-cyan font-semibold mb-5">{unit.subtitle}</p>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl mb-8">
              {unit.description}
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="rounded-2xl bg-panel-dark/60 border border-white/10 p-5">
                <MapPin className="w-5 h-5 text-court-neon mb-3" />
                <span className="block text-[10px] font-mono uppercase tracking-widest text-gray-400 mb-1">
                  Endereço
                </span>
                <p className="text-sm text-white leading-relaxed">{unit.address}</p>
              </div>

              <div className="rounded-2xl bg-panel-dark/60 border border-white/10 p-5">
                <MessageCircle className="w-5 h-5 text-court-neon mb-3" />
                <span className="block text-[10px] font-mono uppercase tracking-widest text-gray-400 mb-1">
                  WhatsApp
                </span>
                <p className="text-sm text-white leading-relaxed">{unit.phone}</p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="font-display font-bold text-xl text-white mb-4">Modalidades da unidade</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {unit.modalities.map((modality) => (
                  <div key={modality} className="flex items-center gap-2 text-sm text-gray-200">
                    <Check className="w-4 h-4 text-court-neon shrink-0" />
                    <span>{modality}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`https://wa.me/${unit.phoneRaw}?text=${whatsAppText}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-court-neon hover:bg-white text-dark-bg px-6 py-3.5 text-xs font-bold uppercase tracking-wider transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                Falar com a unidade
              </a>
              <a
                href={unit.mapLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/5 hover:bg-white/10 text-white px-6 py-3.5 text-xs font-bold uppercase tracking-wider border border-white/10 transition-colors"
              >
                <Navigation className="w-4 h-4 text-court-neon" />
                Ver rota no mapa
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 min-h-[320px] lg:min-h-[520px] shadow-2xl">
              <img src={unit.image} alt={unit.title} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/75 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-black/55 border border-white/10 backdrop-blur-md p-4">
                <p className="text-sm font-bold text-white">{unit.title}</p>
                <p className="text-xs text-gray-300 mt-1">{unit.address}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
