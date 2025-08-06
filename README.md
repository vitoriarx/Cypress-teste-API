# Projeto de Teste de API com Cypress – ReqRes

> "Mesmo um teste simples carrega a responsabilidade de proteger a experiência do usuário."

Este repositório apresenta um conjunto de testes automatizados com **Cypress** para a API pública do [ReqRes](https://reqres.in/).  
Aqui validei endpoints de login, cadastro e listagem de usuários, utilizando o `cy.request()` com asserções claras e simulações de erro — exatamente como seria feito em um cenário real de QA.

---

## Objetivo

Desenvolver e praticar testes de API utilizando Cypress, com foco em:
- Requisições HTTP reais
- Validações de status code, corpo da resposta e mensagens de erro
- Simulação de falhas e respostas negativas
- Organização e boas práticas de escrita de testes

---

## ecnologias e Ferramentas

- [Cypress](https://www.cypress.io/) para testes automatizados
- JavaScript (ES6+)
- Mocha + Chai (inclusos no Cypress)
- API ReqRes (ambiente simulado)

---

## Estrutura dos testes

cypress/
├── e2e/
│ ├── login.cy.js → login com sucesso e falha
│ ├── cadastro.cy.js → cadastro válido e inválido
│ └── usuarios.cy.js → listagem de usuários com validação de resposta
├── fixtures/ → (reservado para dados simulados)
├── support/ → (possível para comandos customizados futuros)

yaml
Copiar
Editar

---

## O que está sendo testado?

- **Login**
  - Validação de token no login bem-sucedido
  - Mensagem de erro no login inválido
- **Cadastro**
  - Registro com sucesso
  - Cadastro com senha ausente
- **Usuários**
  - Requisição GET para listar usuários
  - Iteração com `.forEach()` e `cy.log()` para visualizar os dados

---

## Aprendizados aplicados

Como testar endpoints com Cypress usando `cy.request()`  
Como validar mensagens de erro com `failOnStatusCode: false`  
Como usar `expect()` para testar propriedades de resposta  
Como iterar dados retornados de uma API  
Como estruturar testes claros e organizados por fluxo  

---

## Como rodar o projeto localmente

```bash
# Clone o projeto
git clone https://github.com/vitoriarx/Cypress-teste-API.git

# Acesse a pasta
cd Cypress-teste-API

# Instale as dependências
npm install

# Execute os testes com interface
npx cypress open

# Ou execute em modo headless
npx cypress run
