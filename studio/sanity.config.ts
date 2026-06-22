import {ptBRLocale} from "@sanity/locale-pt-br";
import {defineConfig} from "sanity";
import {structureTool} from "sanity/structure";
import {schemaTypes} from "./schemaTypes";

const tournamentDocumentId = "nextTournament";

export default defineConfig({
  name: "default",
  title: "Raquetes Clube",
  projectId: "7eqc9tfi",
  dataset: "production",
  plugins: [
    ptBRLocale({title: "Português (Brasil)"}),
    structureTool({
      structure: (S) =>
        S.list()
          .title("Conteúdo do site")
          .items([
            S.listItem()
              .title("Próximo torneio")
              .child(
                S.document()
                  .schemaType("tournament")
                  .documentId(tournamentDocumentId)
                  .title("Próximo torneio"),
              ),
          ]),
    }),
  ],
  schema: {types: schemaTypes},
  document: {
    actions: (previousActions, context) =>
      context.schemaType === "tournament"
        ? previousActions.filter(({action}) =>
            ["publish", "discardChanges", "restore"].includes(action ?? ""),
          )
        : previousActions,
  },
});
