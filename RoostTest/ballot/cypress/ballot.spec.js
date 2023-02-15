

describe('Visit ROOST_SVC_URL and check the title', () => {
  it('Visits the ROOST_SVC_URL', () => {
    cy.visit(Cypress.env('ROOST_SVC_URL'))
  })

  it('Checks the title', () => {
    cy.title().should('include', 'ROOST')
  })
})