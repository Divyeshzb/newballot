

describe('Visit Roost Home Page', () => {
  it('should have title of "Roost"', () => {
    cy.visit(ROOST_SVC_URL)
    cy.title().should('eq', 'Roost')
  })
})