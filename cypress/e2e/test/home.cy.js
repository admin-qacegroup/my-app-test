/// <reference types="cypress" />

describe('example to-do app', () => {
    beforeEach(() => {
      cy.visit('/')
      cy.contains('h4', /Accepted usernames are|home|Swag Labs/i).should('be.visible')
    })

  })
  