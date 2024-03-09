/// <reference types="cypress" />

describe('My Third Test Suite', function()
{
    it('My Third Test Case', function(){
        cy.visit("https://epsweb.adminconsole.net/")
        cy.get('#EmailId').type('amey@npav.net')
        cy.get('#pwd').type('npav1')
        cy.get('#btnSubmit').click()
        cy.get('#nav-link-icon').click()

    })
})