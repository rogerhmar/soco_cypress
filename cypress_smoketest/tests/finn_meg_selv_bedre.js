
describe('Er jeg en del av teamet? (Bedre)', () => {
    before(() => {
      cy.visit("/ansatte")
  })
    it('Jeg forventer å finne meg selv', () => {
        cy.contains("Roger Hoem-Martinsen") 
      })
  })
  