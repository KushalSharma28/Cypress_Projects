class register {
  navigate() {
    cy.get('.ico-register').click();
  }
  fillForm(user) {
    cy.get('#gender-male').click();
    cy.get('#FirstName').type(user.firstName);
    cy.get('#LastName').type(user.lastName);
    cy.get('#Email').type(user.email);
    cy.get('#Password').type(user.password);
    cy.get('#ConfirmPassword').type(user.password);
    cy.get('#register-button').click();
  }
}
export default new register();