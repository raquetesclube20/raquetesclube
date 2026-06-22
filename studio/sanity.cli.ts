import {defineCliConfig} from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: "7eqc9tfi",
    dataset: "production",
  },
  deployment: {
    appId: "f1qjrfczvz4ldtrq1pwvlu8m",
    autoUpdates: true,
  },
});
