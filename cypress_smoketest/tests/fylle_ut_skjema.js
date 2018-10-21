
describe('Er jeg en del av teamet? (OK)', () => {
    before(() => {
      cy.visit("http://soco-cypress.surge.sh/")
  })
    it('Jeg forventer å finne meg selv', () => {
        cy.contains("Roger Hoem-Martinsen") 
      })
})