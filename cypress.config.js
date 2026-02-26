const { defineConfig } = require("cypress");
require('dotenv').config();          // ← loads .env into process.env

module.exports = defineConfig({
  // default reporter configuration (mochawesome)
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true,
    charts: true,
    embeddedScreenshots: true,
    inlineAssets: true,
    reportFilename: '[name]-report'
  },

  e2e: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
