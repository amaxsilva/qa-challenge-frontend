import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import { menuElementsPage } from '../../pages/menuElementsPage'
import { faker } from '@faker-js/faker'

// Lista para guardar os e-mails dos registros criados dinamicamente
let  emailsCriados = [];

When(`clico no menu Elements`, () => {
    menuElementsPage.clicarElements()
});

When(`clico na opção Web Tables`, () => {
    menuElementsPage.clicarItemWebTables()
});

Then(`sistema deve permitir adicionar um novo registro na tabela`, () => {
    menuElementsPage.clicarAddButton()

    //confre de dados criado no commonSteps.js
    cy.get('@usuario').then((dados) => { 
        menuElementsPage.preencherFormularioTabela(dados)
    })
});

Then(`permitir editar o registro adicionado`, () => {
    // 1. Abre o cofre
    cy.get('@usuario').then((u) => {
        menuElementsPage.editarRegistroTabela(u.email)
    })
});

Then(`permitir deletar o registro adicionado`, () => {
    // 1. Abre o cofre
    cy.get('@usuario').then((u) => {
        menuElementsPage.deletarRegistro(u.email)
    })
});

//bonus

When('adiciono {string} novos registros dinâmicos na tabela', (quantidade) => {
    for (let i = 0; i < parseInt(quantidade); i++) {
        // 1. Geramos um dado NOVO em cada volta do laço
        const novoUsuario = {
            nome: faker.person.firstName(),
            sobrenome: faker.person.lastName(),
            email: faker.internet.email(), // Cada um terá seu e-mail único
            idade: '30',
            salario: '5000',
            departamento: 'TI'
        };

        // 2. Guardamos o e-mail na nossa lista de "alvos" para deletar depois
        emailsCriados.push(novoUsuario.email);

        // 3. Executamos a ação: Abre modal -> Preenche e Salva
        menuElementsPage.clicarAddButton(); 
        menuElementsPage.preencherFormularioTabela(novoUsuario);
    }
});

Then('todos os registros criados devem ser deletados', () => {
    emailsCriados.forEach((email) => {
        menuElementsPage.deletarRegistro(email);
        cy.contains('.rt-tr-group', email).should('not.exist');
    });
    
    // Limpa a lista para o próximo teste começar do zero
    emailsCriados = [];
});