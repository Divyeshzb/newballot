

describe('Visit ROOST_SVC_URL and check the title', () => {
  it('Visits the ROOST_SVC_URL and checks the title', () => {
    cy.visit(Cypress.env('ROOST_SVC_URL'))
    cy.title().should('include', 'Roost')
  })
})