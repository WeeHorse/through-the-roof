describe('AuctionList', () => {

    it('shows matching results when I search', () => {    
        cy.visit('/')          
        for(let term of ["chili", "pepper"]){
            cy.get('.search-input').clear().type(term)
            cy.get('.card').each(($el)=>{
                cy.get($el).contains(term, { matchCase: false })
            })
        }
    })
  })