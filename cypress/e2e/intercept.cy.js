describe('Intercept Demo', () => {

    it('Mocked API Response', () => {

        cy.intercept('GET', '/posts', {
            fixture: 'intercept/posts.json'
        }).as('getPosts')

        cy.intercept('GET', '/db', {
            fixture: 'intercept/db.json'
        }).as('getDB')

        cy.visit('http://localhost:3000')
        
        cy.wait('@getDB')

        cy.get(':nth-child(1) > sup').should('contain', 3)
        cy.get(':nth-child(2) > sup').should('contain', 2)
    })
    
});