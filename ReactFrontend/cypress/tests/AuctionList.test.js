
describe("AuctionList", ()=>{

    it("Lists matching results when I search", ()=>{        
        cy.visit("/")
        // cy.fixture('example.json').as('fixData')
        let terms = ["chili", "cotton", "red", "pepper"]
        for(let term of terms){
            cy.get('.search-input').clear().type(term)
            cy.get('.card-title').contains(term, { matchCase: false })
        }        
    })

})