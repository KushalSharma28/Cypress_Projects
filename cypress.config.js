const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    reporter: "junit",
    reporterOptions: {
      mochaFile: "cypress/results/results-[hash].xml",
      toConsole: true
    },
    experimentalSessionAndOrigin: true, // Required for cy.origin()
    chromeWebSecurity: false, // Recommended for cross-origin testing
    //setupNodeEvents(on, config) {
      // implement node event listeners here
    //},
  },
});
