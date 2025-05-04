describe('Amazon Sign In and Profile Settings', () => {
    it('should sign in and navigate to profile settings', () => {
      // Visit Amazon's login page
      cy.visit('https://www.amazon.in/ap/signin');
  
      // Enter email
      cy.get('input[type="email"]').type('kushalsharmaji2@gmail.com'); // Replace with your email
      cy.get('input[type="submit"]').click();
  
      // Enter password
      cy.get('input[type="password"]').type('Kushal@99'); // Replace with your password
      cy.get('input[type="submit"]').click();
  
      // Wait for the page to load and check if signed in
      cy.url().should('include', 'https://www.amazon.in/');
  
      // Navigate to Account & Lists
      cy.get('#nav-link-accountList').click();
  
      // Wait for the account menu to load and click on Your Account
      cy.get('a[href="/gp/css/homepage.html"]').contains('Your Account').click();
  
      // Verify that we are on the account settings page
      cy.url().should('include', 'https://www.amazon.in/gp/css/homepage.html');
      
      // Optionally, you can add assertions to check for specific elements on the profile settings page
      cy.contains('Your Account').should('be.visible');
    });
  });