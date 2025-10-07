class ElementsPage {
    visit() {
        cy.visit('/elements');
    }

    getTextBox() {
        return cy.get('.element-list').contains('Text Box');
    }

    get fullNameInput() {
        return cy.get('#userName');
    }

    get emailInput() {
        return cy.get('#userEmail');
    }

    get currentAddress() {
        return cy.get('#currentAddress');
    }

    get permanentAddress() {
        return cy.get('#permanentAddress');
    }

    get submitButton() {
        return cy.get('#submit');
    }

    getCheckBox() {
        return cy.get('.element-list').contains('Check Box');
    }

    getRadioButton() {
        return cy.get('.element-list').contains('Radio Button');
    }

    getWebTables() {
        return cy.get('.element-list').contains('Web Tables');
    }

    getButtons() {
        return cy.get('.element-list').contains('Buttons');
    }

    getLinks() {
        return cy.get('.element-list').contains('Links');
    }

    getBrokenLinksImages() {
        return cy.get('.element-list').contains('Broken Links - Images');
    }

    getUploadAndDownload() {
        return cy.get('.element-list').contains('Upload and Download');
    }

    getDynamicProperties() {
        return cy.get('.element-list').contains('Dynamic Properties');
    }

    clickTextBox() {
        this.getTextBox().should('be.visible').click();
        cy.url().should('include', '/text-box');
        this.fullNameInput.should('be.visible');
    }

    fillTextBox(name, email) {
        this.clickTextBox();
        this.fullNameInput.type(name);
        this.emailInput.type(email);
        this.currentAddress.type('123 Main St, City, Country');
        this.permanentAddress.type('456 Another St, City, Country');
        this.submitButton.click();
    }
}

export default new ElementsPage();