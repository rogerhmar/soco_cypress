 describe('Jeg kan navigere fra "om-oss"', () => {
    [
        {itemToClick: 'Medarbeidere', expectedUrl: 'http://soco.no/ansatte'},
        {itemToClick: 'Samfunnsansvar', expectedUrl: 'http://soco.no/om-oss/samfunnsansvar'},
        {itemToClick: 'Kjerneverdier', expectedUrl: 'http://soco.no/om-oss/kjerneverdier'},
        {itemToClick: 'Gründere', expectedUrl: 'http://soco.no/om-oss/gr%C3%BCndere'}
    ]
        .forEach((side) => {
        it(`Jeg forventer å komme til siden ${side.itemToClick}`, () => {
            cy.visit("http://soco.no/om-oss")
            cy.get(".side-nav").contains(side.itemToClick).click({force:true});
            cy.url().should('eq', side.expectedUrl)
        })
      })
  })