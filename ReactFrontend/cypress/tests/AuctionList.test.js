
describe("AuctionList", ()=>{
    
    it("Lists matching results when I search", ()=>{        
        cy.visit("/")
        cy.fixture('example.json').as('data').then((data)=>{            
            for(let term of data.searchTerms){ // ["chili", "cotton", "red", "pepper"]
                cy.get('.search-input').clear().type(term)
                cy.get('.card-title').contains(term, { matchCase: false })
            } 
        })               
    })

})