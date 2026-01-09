import { Given } from '@badeball/cypress-cucumber-preprocessor';
import { menuFormsPage } from '../../pages/menuFormsPage';

Given('que acesso a demoqa', () => {
    menuFormsPage.acessarHome()
})

Given('gero dados para um novo usuário', () => {
    cy.criarUsuarioFake().as('usuario')
});