
describe('Skjema', () => {
    before(() => {
      cy.visit('http://soco-cypress.surge.sh/')
  })
    it('Jeg forventer at det skal være mulig å fylle ut skjema', () => {
      const email = 'roger.hoem-martinsen@gmail.com';
      const navn = 'Roger Hoem-Martinsen';
      const mat = 'Kjøttkaker';
      const valgt = 'ditt';
      const ikkeValgt = 'datt';
      
      cy.get('#emailInput').type(email)
        .get('#navnInput').type(navn)
        .get('#matInput').select(mat)
        .get('[type="checkbox"]').check(valgt,{force: true});

      cy.contains('Send').click();

      cy.get('#status')
        .should('contain', email)
        .should('contain', navn)
        .should('contain', mat)
        .should('contain', valgt)
        .should('not.contain', ikkeValgt);
    })
})