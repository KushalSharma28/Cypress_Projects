/// <reference types="cypress" />

// Ignore site-side JS errors
Cypress.on("uncaught:exception", () => false);

describe("ICICI Bank Business Loan Processing Fee Validation", () => {
  it("Validates that the Processing Fee is mentioned as 'Up to 2%'", () => 
    {
    // Directly open the Charges Applicable page for Business Loans
    cy.visit("https://www.icicibank.com/business-banking/finance/loans-charges-applicable");

    // Wait for the Business Loan Applicable fees and charges table
    cy.contains("Business Loan Applicable fees and charges", { timeout: 15000 })
      .scrollIntoView();

    // Locate the 'Processing Fee' row and check its value
    cy.contains("td", "Processing Fee", { timeout: 10000 }).parent().within(() => 
      {
        cy.get("td")
          .eq(1) // second column with the fee value
          .invoke("text")
          .then((value) => 
          {
            const normalized = value.trim().toLowerCase();

            if (normalized.includes("up to 2%")) 
            {
              cy.log("The processing fee mentioned is up to 2%.");
            } 
            else 
            {
              throw new Error(`Processing fee is not 'up to 2%'. Actual value: ${value}`);
            }

            expect(normalized).to.contain("up to 2%");
          });
      });

    // Optional: Take a screenshot for proof
    cy.screenshot("icici-processing-fee-validation");
  });
});

