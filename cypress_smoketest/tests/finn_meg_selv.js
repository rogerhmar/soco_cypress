
describe('Finn meg selv (OK)', () => {
    before(() => {
        cy.visit("/")
        cy.get(".menu-button").click()
        cy.contains("Om oss").click()
        cy.get(".side-nav").contains("Medarbeidere").click({force:true});
  })
    it('Jeg forventer å finne meg selv', () => {
        cy.contains("Roger Hoem-Martinsen") 
    })
})