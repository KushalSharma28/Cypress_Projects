describe('Tricentis Demo Test Suite', function()
{
    it('Tricentis Demo Test Case', function()
    {
        //navigate to url
        cy.visit("https://demowebshop.tricentis.com")
        //click on register button
        cy.get('.ico-register').click()

        //fill the form
        cy.get('#gender').should('be.visible').click()
        cy.get('#FirstName').should('be.visible').type('Kushal')
        cy.get('#LastName').should('be.visible').type('Sharma')
        cy.get('#Email').should('be.visible').type('kushalsharmatester@gmail.com')
        
    })
})