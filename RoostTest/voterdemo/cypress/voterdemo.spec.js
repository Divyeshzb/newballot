

describe('ROOST_SVC_URL', () => {
  it('Visits the ROOST_SVC_URL and checks the title and background color', () => {
    cy.visit(Cypress.env('ROOST_SVC_URL'))
    cy.title().should('eq', 'roost')
    cy.get('body').should('have.css', 'background-color', 'rgb(255, 255, 255)')
  })
})