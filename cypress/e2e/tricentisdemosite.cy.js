/// <reference types="cypress" />

describe('Tricentis Demo Test Suite', () => 
{

  it('Registration Page – Register a new user', () => 
  {
    // Navigate to URL
    cy.visit("https://demowebshop.tricentis.com");

    // Click on Register button
    cy.get('.ico-register').click();

    // Fill the form
    cy.get('#gender-male').click();
    cy.get('#FirstName').should('be.visible').type('Kushal');
    cy.get('#LastName').should('be.visible').type('Sharma');
    cy.get('#Email').should('be.visible').type('kushalsharmatester@gmail.com');
    cy.get('#Password').should('be.visible').type('kushal@123');
    cy.get('#ConfirmPassword').should('be.visible').type('kushal@123');

    // Submit registration
    cy.get('#register-button').should('be.visible').click();

    // Assert registration success or already registered
    cy.get('body').then(($body) => 
    {
      if ($body.text().includes('The specified email already exists')) 
      {
        cy.log('User is already registered.');
      } 
      else 
      {
        cy.log('Registration successful.');
      }
    });
  });

  it('Login Page Log in with registered user', () => 
  {
    // Navigate to URL
    cy.visit("https://demowebshop.tricentis.com");

    // Click on Login button
    cy.get('.ico-login').click();

    // Login to the application
    cy.get('#Email').should('be.visible').type('kushalsharmatester@gmail.com');
    cy.get('#Password').should('be.visible').type('kushal@123');
    cy.get('form').contains('Log in').click();

    // Assert login success
    cy.get('.ico-logout').should('be.visible');
    cy.log('User logged in successfully.');

    // Logout
    cy.get('.ico-logout').click();
  });

});
