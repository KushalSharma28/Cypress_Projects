//import cypress = require("cypress");

class login{
    navigate(){
        cypress.get('.ico-login').click();
    }
    //login to the application
    fillForm(user){
        cy.get('#Email').should('be.visible').type(user.email)
        cy.get('#Password').should('be.visible').type(user.password)
        cy.get('form').conatains('Log in').click()
    }
}
export default new login();