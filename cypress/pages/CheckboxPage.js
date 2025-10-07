class CheckboxPage {
    constructor() {
        this.checkboxSelector = '.rct-checkbox'; // Update to target the clickable element
    }

    visit() {
        cy.visit('/checkbox',{ failOnStatusCode: false }); // Adjust the URL to match your application
    }

    checkCheckbox() {
        cy.get(this.checkboxSelector).click(); // Use click() instead of check()
    }

    uncheckCheckbox() {
        cy.get(this.checkboxSelector).click(); // Use click() to toggle the checkbox
    }
}

export default CheckboxPage;