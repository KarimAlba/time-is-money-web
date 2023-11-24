/// <reference types="cypress" />

// Project start testing
describe('Project starts', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080)
  })
  it('project successfully started', () => {
    cy.visit('/');
  })

  // it('current page is "Главная"', () => {

  // })
})

