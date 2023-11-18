const dayjs = require('dayjs')

describe('Request Demo Get - Post - Patch', () => {
    it('Get API Request', () => {
        cy.request('GET','https://reqres.in/api/users/1').as('getUser')

        cy.get('@getUser').should((response) => {
            expect(response.status).to.equal(200)
            expect(response.body).to.have.property('data')
            expect(response.body.data).to.have.property('id')
            expect(response.body.data).to.have.property('email')
            expect(response.body.data.email).to.equal('george.bluth@reqres.in')
          })
    })  
    
    it('Post API Request', function() {
        cy.fixture('request/user').as('data')

        cy.request('POST','https://reqres.in/api/users', this.data).as('createUser')

        cy.get('@createUser').should((response) => {
            expect(response.status).to.equal(201)
            expect(response.body).to.have.property('id')
            expect(response.body).to.have.property('createdAt')
            expect(response.body.id).to.be.a('string')
          })
    }) 

    it('Patch API Request', function() {
        cy.fixture('request/userUpdate').as('data')

        cy.request('PATCH','https://reqres.in/api/users/1', this.data).as('updateUser')

        cy.get('@updateUser').should((response) => {
            expect(response.status).to.equal(200)
            expect(response.body).to.have.property('updatedAt')
            expect(response.body.updatedAt).to.include(dayjs().format('YYYY-MM-DD'))
          })
    }) 
});

describe('Request Demo', () => {

    let id;

    beforeEach(function(){
        cy.fixture('request/user').as('data')
        cy.request('POST','https://reqres.in/api/users', this.data).as('createUser')

        cy.get('@createUser').then((response) => {
            expect(response.status).to.equal(201)
            id = response.body.id  
            console.log(`Usuario: ${id}`)          
          })
    })

    it('Delete API Request', () => {
        cy.request('DELETE',`https://reqres.in/api/users/${id}`).as('deleteUser')

        cy.get('@deleteUser').should((response) => {
            expect(response.status).to.equal(204)
          })
    }) 
    
});