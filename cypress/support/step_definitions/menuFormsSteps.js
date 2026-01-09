import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import { menuFormsPage } from '../../pages/menuFormsPage'

When('clico no menu Forms', () => {
    menuFormsPage.clicarForms()
})

When('clico na opção Practice Form', () => {
    menuFormsPage.clicarItemPracticeForm()
})

Then('sistema deve permitir o input dos dados do formulário', () => {
    cy.get('@usuario').then((usuario) => {
        menuFormsPage.preencherFormulario(usuario)
    })
})

Then('clicar no botão Submit', () => {
    menuFormsPage.submeterFormulario()
})

Then('validar mensagem de sucesso', () => {
    menuFormsPage.validarMensagemSucesso()
    cy.get('@usuario').then((usuario) => {
        menuFormsPage.validarDadosExibidos(usuario)
    })
})