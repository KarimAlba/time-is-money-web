import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'https://api.time-money.shop',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
