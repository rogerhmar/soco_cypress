
describe('Jeg kan navigere fra meny fra forsiden', () => {
    beforeEach(() => {
      cy.visit("/")
      cy.get(".menu-button").click()
    })

    describe('Om oss', () => {
        beforeEach(() => {
            cy.contains("Om oss").click()
        })
        it('Jeg forventer å komme til siden "om oss"', () => {
            cy.url().should('contain','/om-oss')
            cy.contains("Om oss")
        })      
    })

    describe('Kontakt', () => {
        beforeEach(() => {
            cy.contains("Kontakt").click()
        })
        it('Jeg forventer å komme til siden "Kontakt"', () => {
            cy.url().should('contain','/kontakt')
            cy.contains("Kontakt")
        })      
    })
})