// cypress/pages/MenuElementsPage.js
import { menuElementsElements as el } from '../elements/menuElementsElements'

class MenuElementsPage {
    clicarElements() {
        cy.get(el.menuElements).should('be.visible').click()
    }

    clicarItemWebTables() {
        cy.contains('Web Tables').should('be.visible').click()
    }

    clicarAddButton() {
        cy.get(el.addButton).should('be.visible').click()
    }

    preencherFormularioTabela(dados) {
        cy.get(el.firstNameInput).type(dados.nome)
        cy.get(el.lastNameInput).type(dados.sobrenome)
        cy.get(el.emailInput).type(dados.email)
        cy.get(el.ageInput).type(dados.idade)
        cy.get(el.salaryInput).type(dados.salario)
        cy.get(el.departmentInput).type(dados.departamento)
        cy.get(el.submitTableButton).click({ force: true }) 
    }
    
    editarRegistroTabela(emailParaBuscar) {
        // O Cypress vai varrer a tabela
        cy.contains('.rt-tr-group', emailParaBuscar) // "Ache a linha que tem esse e-mail"
        .find('[title="Edit"]')                     // "Dentro dessa linha, ache o botão Edit"
        .click()                                    

        // Agora o modal de edição abriu. Digite os novos dados.
        cy.get(el.ageInput).clear().type('40')
        cy.get(el.submitTableButton).click()
    }

    deletarRegistro(emailParaBuscar) {
        cy.contains('.rt-tr-group', emailParaBuscar)
        .find('[title="Delete"]') // Agora em vez de Edit, procura o Delete
        .click()
    }
}

export const menuElementsPage = new MenuElementsPage()