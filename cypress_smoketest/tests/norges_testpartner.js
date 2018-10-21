describe('Er SOCO norges Testpartner?', () => {
  before(() => {
    cy.visit("http://soco.no")
  })
  it('så forventer jeg å se at vi er norges testpartner', () => {
      cy.get("#intro").contains("Vi er Norges testpartner")
    })
})