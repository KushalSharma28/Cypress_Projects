/// <reference types="cypress" />

describe('My Third Test Suite', function()
{
    before(function(){
        cy.fixture('example').then(function(data)
        {
            this.data=data
        })
    })
    it('My Third Test Case', function(){
        cy.visit("https://rahulshettyacademy.com/angularpractice/")
        cy.get('input[name="name"]:nth-child(2)').type(this.data.data)
        cy.get('select').select(this.data.gender)
        cy.get(':nth-child(4) > .ng-untouched').should('have.value',this.data.name)
        cy.get('input[name="name"]:nth-child(2)').should('have.attr','minlength','2')
        cy.get('#inlineRadio3').should('be.disabled')
        cy.get(':nth-child(2) > .nav-link').click()
        cy.selectProduct('Blackberry')
        cy.get('h4.card-title').each(($el, index, $list) => 
        {
            if($el.text().includes('blackberry'))
            {
                cy.get('button.btn.btn-info').eq(index).click()
            }
        })
    })
})