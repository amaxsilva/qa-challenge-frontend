// cypress/pages/menuAlertsFramePage.js
import { menuAlertsFrameElements as el } from '../elements/menuAlertsFrameElements'

class MenuAlertsFramePage {
    // Métodos para Alerts, Frames & Windows
        clicarMenuAlertsFrame() {
            cy.get(el.menuAlertsFrame).should('be.visible').click()
        }

        clicarAlertsFrameWindows() {
            cy.contains('Alerts, Frame & Windows').should('be.visible').click()
        }
        
        clicarItemBrowserWindows() {
            cy.contains('Browser Windows').should('be.visible').click()
        }
        
        clicarNewWindowButton() {
            //Interceptamos a chamada para window.open e a substituímos por um stub
            cy.window().then((win) => {
                cy.stub(win, 'open').as('novaJanela')
            })
            cy.get(el.newWindowButton).click()
        }
    
        validarNovaJanela() {
            //Verifica se o navegador tentou abrir o link '/sample'
            cy.get('@novaJanela').should('be.calledWith', '/sample')
            
            //Como o Cypress não muda de janela, nós visitamos a URL manualmente 
            cy.visit('/sample')
            cy.contains('This is a sample page').should('be.visible')
            cy.go('back') 
        }
}

export const menuAlertsFramePage = new MenuAlertsFramePage()