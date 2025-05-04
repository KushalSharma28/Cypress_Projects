/// <reference types="cypress" />

describe('My Second Test Suite', function()
{
    it('My Second Test Case', function()
    {
        //check boxes
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get('input[type="checkbox"]').check(['option2','option3'])
        
        // static dropdown
        cy.get('select').select('option2').should('have.value','option1')

        // dynamic dropdown
        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item div').each(($el, index, $title) => 
        {
            if($el.text()==='india')
            {
                $el.click()
            }
        })
        
        // autocomplete
        cy.get('#autocomplete').should('have.value','india')
        
        // visible invisible
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click('be.visible')
        cy.get('#displayed-text').should('not.be.visible')

        // radio buttons
        cy.get('[value="radio2"]').check().should('be.checked')
    })
})