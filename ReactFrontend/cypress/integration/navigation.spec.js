describe('navigation', () => {

    beforeEach(() => {
        cy.log('I run before every test in navigation')
        cy.visit('/about')
    })

    it('opens about-page when I click the link', () => {
        cy.get('a[href="/about"]').click()
        cy.get('h2').contains("about our auctions", { matchCase: false })
    })

    it('opens home when I click the link', () => {
        cy.get('a[href="/"]').click()
        cy.get('h2').contains("Active auctions", { matchCase: false })
    })

  })