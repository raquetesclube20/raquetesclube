import {CalendarIcon} from "@sanity/icons";
import {defineField, defineType} from "sanity";

export default defineType({
  name: "tournament",
  title: "Próximo torneio",
  type: "document",
  icon: CalendarIcon,
  fields: [
    defineField({
      name: "active",
      title: "Exibir no site",
      description: "Desative quando não houver um torneio para divulgar.",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "title",
      title: "Nome do torneio",
      type: "string",
      validation: (rule) => rule.required().max(100),
    }),
    defineField({
      name: "banner",
      title: "Banner",
      description: "Use uma imagem horizontal. Tamanho recomendado: 1200 x 420 px.",
      type: "image",
      options: {hotspot: true},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "altText",
      title: "Descrição da imagem",
      description: "Exemplo: Banner do Torneio de Duplas do Raquetes Clube.",
      type: "string",
      validation: (rule) => rule.required().max(160),
    }),
    defineField({
      name: "eventDate",
      title: "Data do torneio",
      type: "date",
      options: {dateFormat: "DD/MM/YYYY"},
    }),
    defineField({
      name: "registrationUrl",
      title: "Link para inscrição",
      description: "Pode ser um link do LetzPlay, WhatsApp ou outra página de inscrição.",
      type: "url",
      validation: (rule) => rule.uri({scheme: ["http", "https"]}),
    }),
    defineField({
      name: "buttonLabel",
      title: "Texto do botão",
      type: "string",
      initialValue: "Inscreva-se",
      validation: (rule) => rule.max(30),
    }),
    defineField({
      name: "expiresAt",
      title: "Remover automaticamente em",
      description: "Depois desta data e horário, o banner deixa de aparecer no site.",
      type: "datetime",
    }),
  ],
  preview: {
    select: {title: "title", media: "banner", active: "active", eventDate: "eventDate"},
    prepare({title, media, active, eventDate}) {
      return {
        title: title || "Próximo torneio",
        subtitle: active
          ? eventDate
            ? `Publicado - ${eventDate}`
            : "Publicado"
          : "Oculto no site",
        media,
      };
    },
  },
});
