
describe('Er jeg en del av teamet? (Bedre)', () => {
    before(() => {
      cy.visit("http://soco.no/ansatte")
  })
    it('Jeg forventer å finne meg selv', () => {
        cy.contains("Roger Hoem-Martinsen") 
      })
  })
  