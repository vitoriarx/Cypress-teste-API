/// <reference types = 'cypress' />

describe('Fazer login na API ReqRes', () => {
    it('Fazer login com sucesso', () => {
        cy.request({
            method: 'POST',
            url : 'https://reqres.in/api/login',
            body : {
                "email": "eve.holt@reqres.in",
                "password" : "cityslicka"
            }
        }).then((response) => {
            expect(response.status).to.equal(200)
            expect(response.body.token).to.be.a('string')

        })
    })

    it('Fazer login sem sucesso', () => {
        cy.request({
            method : 'POST',
            url :  'https://reqres.in/api/login',
            body : {
                "email" : "peter@klaven"
            },
            failOnStatusCode : false
        }).then((response) => {
            expect(response.status).to.equal(400) //aqui vai comparar o status da aplicação (nesse caso a API)
            expect(response.body).to.have.property("error") //vai verificar se dentro da aplicação tem alguma propriedade "ERROR" e se for encontrada essa propriedade vai retornar como {error: Missing password} e passar no teste
            expect(response.body.error).to.equal('Missing password') //aqui vai fazer a  comparação e vai verificar a mesma propriedade acima (as duas opções são válidas)
        })
    })
})