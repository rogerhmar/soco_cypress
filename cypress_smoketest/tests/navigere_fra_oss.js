 describe('Jeg kan navigere fra "om-oss"', () => {
    [
        {itemToClick: 'Medarbeidere', expectedUrl: '/ansatte'},
        {itemToClick: 'Samfunnsansvar', expectedUrl: '/samfunnsansvar'},
        {itemToClick: 'Kjerneverdier', expectedUrl: '/kjerneverdier'},
        {itemToClick: 'Gründere', expectedUrl: '/gr%C3%BCndere'}
    ]
        .forEach((side) => {
        it(`Jeg forventer å komme til siden ${side.itemToClick}`, () => {
            cy.visit("/om-oss")
            cy.get(".side-nav").contains(side.itemToClick).click({force:true});
            cy.url().should('eq', side.expectedUrl)
        })
      })
  })