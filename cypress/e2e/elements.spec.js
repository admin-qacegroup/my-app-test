import ElementsPage from '../pages/ElementsPage';

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

describe('Elements Page Test Suite', () => {
    beforeEach(() => {
        ElementsPage.visit();
    });

    it('should navigate to Text Box section and fill form', () => {
        ElementsPage.fillTextBox('John Doe', 'john@example.com');
        cy.contains('John Doe').should('be.visible');
    cy.contains('john@example.com').should('be.visible');
    });
});