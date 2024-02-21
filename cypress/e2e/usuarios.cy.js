/// <reference types='cypress' />

describe('Listagem de usuários', () => {
    it('Fazer listagem de usuários', () => {
        cy.request({
            method: 'GET',
            url : 'https://reqres.in/api/users?page=2',
            body : {
                'email' : 'eve.holt@reqres.in',
                'password' : 'cityslicka'
            }
        }).then((response) => {
            //verifica se o status é 200
            expect(response.status).to.equal(200);
            //vai verificar se existe a propriedade data 
            expect(response.body).to.have.property('data');
            //atribui data a uma variavel
            const data = response.body.data;
            //usa o forEach para iterar os usuários do array
            data.forEach((user, index) => {
                cy.log(`Usuário ${index + 1} - ID: ${user.id}, Nome: ${user.first_name}, Last_name: ${user.last_name}, Email: ${user.email}`); // Substitua 'nome' e 'email' pelos nomes reais das propriedades
            });
        })
    })
})