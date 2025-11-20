/**
 * CYPRESS ADVANCED CONCEPTS (FIXED & ROBUST)
 * Target: https://example.cypress.io/commands/network-requests
 * * Concepts Covered:
 * 1. cy.intercept() - API Spying & Mocking
 * 2. Promises - Async logic handling
 * 3. Callbacks - Data verification
 * 4. Hoisting - JS Scope behavior
 */

// --- CONCEPT 4: HOISTING ---
// Calling a function before it is defined. 
// This proves the file is parsed as standard JavaScript.
const testConfig = getTestConfiguration();

describe('Robust API Testing & Advanced JavaScript Patterns', () => {

    beforeEach(() => {
        // We visit the specific page designed for Network Request testing
        cy.visit('https://example.cypress.io/commands/network-requests');
    });

    it('Demonstrates cy.intercept (Spying) on a real JSON API', () => {
        // --- CONCEPT 1: INTERCEPT (SPYING) ---
        // We catch the call to "jsonplaceholder" when the button is clicked.
        // We are NOT modifying the response here, just observing it.
        cy.intercept('GET', '**/comments/*').as('getComment');

        // Click the button that triggers the network call
        cy.get('.network-btn').click();

        // Wait for the API call to finish
        cy.wait('@getComment').then((interception) => {
            // --- CONCEPT 3: CALLBACK FUNCTION ---
            // This callback runs immediately after the request finishes.
            
            // Log to Cypress Command Log for debugging
            cy.log('Intercepted Response:', interception.response.body);

            // 1. Status Code Assertion
            expect(interception.response.statusCode).to.equal(200);

            // 2. Body Content Assertion
            // The API returns an object, not an array, for a single comment
            expect(interception.response.body).to.have.property('email');
            expect(interception.response.body.id).to.be.a('number');
        });
    });

    it('Demonstrates cy.intercept (Mocking/Stubbing) to force UI state', () => {
        // --- CONCEPT 1: INTERCEPT (MOCKING) ---
        // We create a fake response object.
        const mockResponse = {
            id: 123,
            name: "Cypress User",
            email: "test@cypress.io",
            body: "This data was injected by Cypress!"
        };

        // We intercept the request and force the browser to use OUR mockResponse
        cy.intercept('GET', '**/comments/*', {
            statusCode: 200,
            body: mockResponse,
            delay: 500 // Simulate network latency
        }).as('mockedComment');

        cy.get('.network-btn').click();

        cy.wait('@mockedComment');

        // Verify the UI displays our MOCKED data, not real data
        cy.get('.network-comment').should('contain', mockResponse.body);
    });

    it('Demonstrates Promises and Async logic via cy.wrap()', () => {
        // --- CONCEPT 2: PROMISES ---
        // Cypress commands are async, but sometimes you need to handle
        // non-Cypress async operations (like a DB seed or complex calc).
        
        const performAsyncCalculation = (val) => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(val * 2);
                }, 1000); // Resolves after 1 second
            });
        };

        cy.log('Starting Promise...');

        // We use cy.wrap() to integrate the Promise into the Cypress command chain
        cy.wrap(performAsyncCalculation(50)).then((result) => {
            expect(result).to.equal(100);
            cy.log(`Async calculation finished: ${result}`);
        });
    });

    it('Demonstrates Callbacks and Iteration over elements', () => {
        // Check the sidebar links to demonstrate .each() callbacks
        
        // --- CONCEPT 3: CALLBACKS IN ITERATION ---
        cy.get('.dropdown-menu li a').first(5).each(($el, index, $list) => {
            // This callback runs for every element found
            const text = $el.text();
            cy.log(`Menu Item ${index}: ${text}`);

            // We can use JavaScript logic inside the callback
            if (text.includes('Querying')) {
                expect($el.attr('href')).to.include('/commands/querying');
            }
        });
    });
});

// --- CONCEPT 4: HOISTED FUNCTION ---
// Defined at the bottom, called at the top.
function getTestConfiguration() {
    return {
        env: 'staging',
        retries: 2
    };
}