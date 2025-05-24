describe('Amazon Purchase Flow Without Login', () => {
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

  it('should complete purchase flow for Motorola phone without login', () => {
    // Step 2: Skip login (we'll proceed as guest at checkout)
    
    // Step 3: Select category for Electronic gadgets
    cy.get('#searchDropdownBox').select('Electronics');
    
    // Step 4: Search for Motorola phone
    cy.get('#twotabsearchtextbox').type('Motorola edge 40'); // Using a more common model
    cy.get('#nav-search-submit-button').click();
    
    // Step 5: Select a Motorola phone and add to cart
    // Using more specific selectors to avoid clicking wrong product
    cy.get('[data-component-type="s-search-result"]')
      .contains('Motorola edge 40')
      .first()
      .click();
    
    // Switch to new tab if product opens in new window
    cy.window().then((win) => {
      if (win.location.href.includes('/dp/')) {
        // On product page
        cy.get('#add-to-cart-button').click();
      } else {
        // Might be on a different page, handle accordingly
        cy.get('#add-to-cart-button').first().click();
      }
    });
    
    // Handle "No Thanks" button if it appears for protection plan
    cy.get('body').then(($body) => {
      if ($body.find('#attachSiNoCoverage').length > 0) {
        cy.get('#attachSiNoCoverage').click();
      }
      // Handle other popups that might appear
      if ($body.find('#attach-desktop-sideSheet').length > 0) {
        cy.get('#attach-close-sideSheet-button').click();
      }
    });
    
    // Step 6: Go to cart and proceed to checkout
    cy.get('#nav-cart').click();
    cy.get('[name="proceedToRetailCheckout"]').click();
    
    // At this point, Amazon will require login to proceed
    // We'll verify we reached the login page instead of trying to proceed further
    
    // Verify we're on the login page
    cy.get('#ap_email').should('exist');
    cy.url().should('include', 'signin');
    
    // For demonstration, we'll stop here since we can't proceed without real credentials
    cy.log('Reached login page - cannot proceed further without actual credentials');
  });
});