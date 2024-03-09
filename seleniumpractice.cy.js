/// <reference types="cypress" />

describe('My First Test Suite', function()
{
    it('My First Test Case', function()
    {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.wait(1000)
    //selenium get url in browser , cypress get acts like findElement of selenium
        cy.get('.product').should('have.length',5)
        cy.get('.product:visible').should('have.length',4)
        cy.get('.products').find('.product').should('have.length',4)
        cy.get(':nth-child(3) > .product-action > button').click()
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
        console.log('sf')
        cy.get('.products').find('.product').each(($el, index, $list) =>
        {
            const textVeg=$el.find('.h4.product-name').text()
            if (textVeg.includes('Cashews')) 
            {
                $el.find('button').click()
            }
        })
        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()

        // cy.get('.brand').then(function(logoelement)
        // {
        //     cy.log(logoelement.text())
        // })
        // const logo=cy.get('.brand')
        
        // cy.get('.brand').text()
        // cy.log(logo.text())
    })
})