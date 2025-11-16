const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://demowebshop.tricentis.com/",
    specPattern: "cypress/e2e/demowebshop/**/*.cy.js",
    supportFile: "cypress/support/e2e.js",
  }
});