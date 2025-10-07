/// <reference types="cypress" />
import {login, homepage} from '../../fixtures/selectors'

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

describe('Login page Test', () => {
    // Runs once before all tests
    beforeEach(() => {
      cy.visit('/')
      cy.contains('h4', /Accepted usernames are|home|Swag Labs/i)
        .should('be.visible')
    })
  
    it('should not login with empty email and password', () => {
      cy.get(login.username).click()
      cy.get(login.password).click()
      cy.get(login.loginButton).click()
      cy.get(login.errorMsg).should('be.visible') // ✅ optional assertion
    })
  
    it('should not login with incorrect email and password', () => {
      cy.get(login.username).clear().type(login.invalidUsername)
      cy.get(login.password).clear().type(login.invalidPassword)
      cy.get(login.loginButton).click()
      cy.get(login.errorMsg).should('be.visible') // ✅ optional assertion
    })
  
    it('should login with correct email and password', () => {
      cy.get(login.username).clear().type('standard_user')
      cy.get(login.password).clear().type('secret_sauce')
      cy.get(login.loginButton).click()
      // Assert successful login
      cy.get(homepage.productTitle).should('have.text', 'Products')
    })
  })
  