describe('AboutPage', () => {

    it('toggles more info when I click the "more info" button', () => {  
        cy.visit('/about')     
        cy.get('#more-info-button').click()
        cy.get('#more-info-element')
        .should("contain", "There is more than meets the eye");
        cy.get('#more-info-button').click()
        cy.get('#more-info-element')
        .should("be.empty");
    })
  })