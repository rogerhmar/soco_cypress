
  describe('Jeg kan navigere fra forsiden', () => {
    before(() => {
      cy.visit("/")
      cy.get(".menu-button").click()
      cy.contains("Om oss").click()
  })
    it('Jeg forventer å komme til siden "om oss"', () => {
        cy.url().should('contain','/om-oss')
        cy.contains("Om oss")
      })
  })