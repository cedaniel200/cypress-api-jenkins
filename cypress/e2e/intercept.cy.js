describe('Intercept', () => {
  it('mockea la respuesta de /posts', () => {
    cy.intercept('GET', '/posts', { fixture: 'intercept/posts.json' }).as('getPosts')

    cy.visit('/')
    cy.window().then((win) => win.fetch('/posts'))

    cy.wait('@getPosts')
      .its('response.body.posts')
      .should('have.length', 3)
  })
})
