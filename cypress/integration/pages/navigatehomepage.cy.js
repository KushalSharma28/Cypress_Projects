class navigatehomepage {
    visit() {
        cy.visit('https://demowebshop.tricentis.com');
    }
    clickregister() {
        cy.get('.ico-register').click();
    }
    clicklogin() {
        cy.get('.ico-login').click();
    }
    clickShoppingCart() {
        cy.get('.ico-cart').click();
    }
    clickWishlist() {
        cy.get('.ico-wishlist').click();
    }
}
export default new navigatehomepage();