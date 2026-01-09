// cypress/pages/MenuFormsPage.js
import { menuFormsElements as el } from '../elements/menuFormsElements'

class MenuFormsPage {

    acessarHome() {
        cy.visit('/')
    }

    clicarForms() {
        cy.get(el.menuForms).should('be.visible').click()
    }

    //métodos do Practice Form

    clicarItemPracticeForm() {
        cy.contains('Practice Form').should('be.visible').click()
    }

    preencherFormulario(usuario) {
        cy.get(el.firstName).type(usuario.nome)
        cy.get(el.lastName).type(usuario.sobrenome)
        cy.get(el.inputEmail).type(usuario.email)

        cy.get(el.genderLabel).contains(usuario.genero).click()
        cy.get(el.dateOfBirthInput).type(usuario.nascimento)

        cy.get(el.mobileInput).type(usuario.telefone)
        cy.get(el.subjectsInput).type(`${usuario.materia}{enter}`)
        cy.get(el.hobbiesLabel).contains(usuario.hobbies).click()
        cy.get(el.pictureInput).selectFile(usuario.arquivo, { force: true })

        cy.get(el.addressInput).type(usuario.endereco)

        cy.get(el.stateInput).type(`${usuario.estado}{enter}`, { force: true })
        cy.get(el.cityInput).type(`${usuario.cidade}{enter}`, { force: true })
    }

    submeterFormulario() {
        cy.get(el.submitButton).click({ force: true })
    }

    validarMensagemSucesso() {
        cy.get(el.successMessage).should('be.visible').and('contain', 'Thanks for submitting the form')
    }

    validarDadosExibidos(usuario) {
        // Validação dos dados exibidos na tabela de confirmação
        cy.get('.modal-body').within(() => {
        cy.contains(`${usuario.nome} ${usuario.sobrenome}`)
        cy.contains(usuario.email)
        cy.contains(usuario.genero)
        cy.contains(usuario.telefone)
        cy.contains(usuario.materia)
        cy.contains(usuario.hobbies)
        cy.contains(usuario.endereco)
        cy.contains(`${usuario.estado} ${usuario.cidade}`)
        })
        cy.get(el.closeButton).click({ force: true })
    }
}

export const menuFormsPage = new MenuFormsPage()
