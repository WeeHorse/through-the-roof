describe("Navigation", ()=>{

    it("Navigates to About", ()=>{
        cy.visit("/about")
        cy.get("h2").contains("About our auctions")
    })

    it("Navigates to Home", ()=>{
        cy.visit("/")
        cy.get("h2").contains("Active auctions")
    })

})