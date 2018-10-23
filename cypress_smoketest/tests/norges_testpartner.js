
describe('Kan jeg åpne nrk.no?', () => {
  beforeEach(() => {
    cy.visit("https://nrk.no")
  })
  it('Jeg forventer å se "nrk"', () => {
      cy.contains("nrk")
  })
})