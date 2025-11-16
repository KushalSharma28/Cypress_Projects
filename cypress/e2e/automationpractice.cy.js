/// <reference types="cypress" />

describe('Automation Practice Test Suite', () => {
  it('Automation Practice Test Case', () => {
    // Visit the practice page
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    // Checkboxes
    cy.get('#checkBoxOption1')
      .check()
      .should('be.checked')
      .and('have.value', 'option1');

    cy.get('#checkBoxOption1')
      .uncheck()
      .should('not.be.checked');

    cy.get('input[type="checkbox"]').check(['option2', 'option3']);

    // Static dropdown
    cy.get('select')
      .select('option2')
      .should('have.value', 'option2'); // fixed assertion

    // Dynamic dropdown
    cy.get('#autocomplete').type('ind');
    cy.get('.ui-menu-item div').each(($el) => {
      if ($el.text() === 'India') {
        cy.wrap($el).click(); // wrap for Cypress click
      }
    });

    // Autocomplete validation
    cy.get('#autocomplete').should('have.value', 'India');

    // Visible / Invisible textbox
    cy.get('#displayed-text').should('be.visible');
    cy.get('#hide-textbox').click(); // fixed click
    cy.get('#displayed-text').should('not.be.visible');

    // Radio buttons
    cy.get('[value="radio2"]').check().should('be.checked');
  });
});
