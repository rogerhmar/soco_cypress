describe('Er SOCO norges Testpartner?', () => {
  beforeEach(() => {
    cy.visit("/")
  })
  it('så forventer jeg å se at vi er norges testpartner', () => {
      cy.contains("Vi er Norges testpartner")
  })
})