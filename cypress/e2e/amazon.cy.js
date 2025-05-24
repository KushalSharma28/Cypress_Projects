describe('Amazon Purchase Flow', () => {
    // Test data - replace with your dummy credentials
    var testUser = {
      email: 'kushalsharmaji2@gmail.com', // testuser@example.com
      password: 'Kushal@99' // TestPassword123
    };
    
    var paymentInfo = {
      cardNumber: '4111111111111111',
      name: 'Test User',
      expiry: '12/25',
      cvv: '123'
    };
  
    beforeEach(() => {
      // Step 1: Go to website
      cy.visit('https://www.amazon.in');
      
      // Handle cookie consent if it appears
      cy.get('body').then(($body) => {
        if ($body.find('#sp-cc-accept').length > 0) {
          cy.get('#sp-cc-accept').click();
        }
      });
    });
  
    it('should complete purchase flow for Motorola phone', () => {
      // Step 2: Sign in to website
      cy.get('#nav-link-accountList').click();
      cy.get('#ap_email_login').type(testUser.email);
      cy.get('#continue').click();
      cy.get('#ap_password').type(testUser.password);
      cy.get('#signInSubmit').click();
  
      // Step 3: Select category for Electronic gadgets
      cy.get('#searchDropdownBox').select('Electronics');
      
      // Step 4: Search for Motorola phone
      cy.get('#twotabsearchtextbox').type('Motorola 60 Pro');
      cy.get('#nav-search-submit-button').click();
      
      // Step 5: Select Motorola 60 Pro and add to cart
      cy.contains('Motorola 60 Pro').first().click();
      cy.get('#add-to-cart-button').click();
      
      // Handle "No Thanks" button if it appears for protection plan
      cy.get('body').then(($body) => {
        if ($body.find('#attachSiNoCoverage').length > 0) {
          cy.get('#attachSiNoCoverage').click();
        }
      });
      
      // Step 6: Go to cart and proceed to checkout
      cy.get('#nav-cart').click();
      cy.get('[name="proceedToRetailCheckout"]').click();
      
      // Fill payment information (using dummy data)
      cy.get('#addCreditCardNumber').type(paymentInfo.cardNumber);
      cy.get('#pp').type(paymentInfo.name);
      cy.get('#pp').type(paymentInfo.expiry);
      cy.get('#pp').type(paymentInfo.cvv);
      
      // Note: In a real scenario, you wouldn't complete the purchase with dummy data
      // This is just for demonstration
      cy.get('.a-button-input').contains('Place your order').click();
      
      // Verify order confirmation
      cy.contains('Thank you').should('be.visible');
    });
  });