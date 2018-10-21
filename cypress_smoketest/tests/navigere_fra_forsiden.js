
  describe('Jeg kan navigere fra forsiden', () => {
    before(() => {
      cy.visit("http://soco.no")
      cy.get(".menu-button").click()
      cy.contains("Om oss").click()
  })
    it('Jeg forventer å komme til siden "om oss"', () => {
        cy.url().should('eq', 'http://soco.no/om-oss')
        cy.contains("Om oss")
      })
  })