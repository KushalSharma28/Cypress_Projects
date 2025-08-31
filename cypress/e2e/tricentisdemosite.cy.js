describe('Tricentis Demo Test Suite', function()
{
    it('Tricentis Demo Test Case', function()
    {
        //navigate to url
        cy.visit("https://demowebshop.tricentis.com")
        
        //click on register button
        //cy.get('.ico-register').click()

        //fill the form
        // cy.get('#gender-male').click();
        // cy.get('#FirstName').should('be.visible').type('Kushal')
        // cy.get('#LastName').should('be.visible').type('Sharma')
        // cy.get('#Email').should('be.visible').type('kushalsharmatester@gmail.com')
        // cy.get('#Password').should('be.visible').type('kushal@123')
        // cy.get('#ConfirmPassword').should('be.visible').type('kushal@123')
        // cy.get('#register-button').should('be.visible').click()

        //click on login button
        cy.get('.ico-login').click()

        //login to the application
        cy.get('#Email').should('be.visible').type('kushalsharmatester@gmail.com')
        cy.get('#Password').should('be.visible').type('kushal@123')
        cy.get('form').contains('Log in').click()

        //logout from the application
        cy.get('.ico-logout').click()
    })
})