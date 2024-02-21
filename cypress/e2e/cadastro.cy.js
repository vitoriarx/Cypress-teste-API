/// <reference types = "cypress" /> 

describe("Teste de cadastro na API ReqRes" , () => { 
    it('Deve fazer cadastro com sucesso', () => { 
        cy.request({
            method: 'POST',
            url : 'https://reqres.in/api/registrar',
            body: {
                "e-mail": "eve22.holt@reqres.in",
                "senha": "pistola"
            }
        }).then((response) => {
            expect(response.status).to.equals(201);
    
        })
    })

    it('Não deve fazer cadastro devido a senha ausente', () => {
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/login',
            body : {
                "e-mail" : 'sydney@fife',
            
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.equal(400);
            expect(response.body.error).to.equal('Missing email or username');
        })
    })

})
