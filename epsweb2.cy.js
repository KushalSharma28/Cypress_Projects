/// <reference types="cypress" />

describe('Admin Console Test', function()
{
    it('should login and navigate through the application', function()
    {
        // Visit the EPS Website
        cy.visit("https://epsweb.adminconsole.net/")

        // EPS Website login
        cy.get('#EmailId').type('amey@npav.net')
        cy.get('#pwd').type('npav1')
        cy.get('#btnSubmit').click()
        cy.get('#nav-link-icon').click()

        // Click on the Menu toggle
        cy.xpath('/html/body/div[2]/header/nav/div[1]/ul/li/[i]/a/i').click();

        // Select Key-details tab
        cy.xpath('/html/body/div[2]/aside/section/ul/li[2]/a/span').click();

        cy.xpath('//*[@id="tblKeyDet_filter"]/label/input').type('V-EFCA8EA698');

        // Select Key using checkbox
        cy.get('.SelectedChk').click();
        
        // Select Policy for Key
        cy.get('#select2-ddlpolicy-container').click();
        cy.wait(2000);

        // Select the Dropdown value
        cy.xpath("//option[@value='1209']").click();

        // Close the dropdown by clicking outside
        cy.get('body').click();
        cy.wait(3000);

        // Logout from profile Menu
        cy.get('#imagelogout').click();
        cy.wait(3000);

        cy.get('.ti-lock.text-muted.mr-2').click();

        // Wait before closing the browser (optional)

        cy.wait(3000);
    })
})
