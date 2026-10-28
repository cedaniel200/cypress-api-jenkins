describe('Request', () => {
  it('GET /posts/1', () => {
    cy.request('/posts/1').then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.include({ id: 1, title: 'post 1' })
    })
  })

  it('POST /posts', () => {
    cy.request('POST', '/posts', { title: 'nuevo post', author: 'Cesar' }).then(
      (response) => {
        expect(response.status).to.eq(201)
        expect(response.body).to.include({ title: 'nuevo post', author: 'Cesar' })
        expect(response.body.id).to.be.a('number')
      }
    )
  })

  it('PATCH /posts/1', () => {
    cy.request('PATCH', '/posts/1', { title: 'post actualizado' }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.title).to.eq('post actualizado')
    })
  })

  it('DELETE /posts/3', () => {
    cy.request('DELETE', '/posts/3').then((response) => {
      expect(response.status).to.eq(200)
    })
  })
})
