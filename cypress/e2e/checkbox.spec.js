import CheckboxPage from '../pages/CheckboxPage';
const checkboxPage = new CheckboxPage(); // Create an instance of the class

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
});

describe('Checkbox Page Test Suite', () => {
    beforeEach(() => {
        checkboxPage.visit(); // Use the instance to call the method
    });

    it('should navigate to Checkbox section and interact with checkboxes', () => {
        checkboxPage.checkCheckbox();
        cy.contains('You have selected :').should('be.visible');
    });
});