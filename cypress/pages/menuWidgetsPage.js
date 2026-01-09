// cypress/pages/MenuWidgetsPage.js
import { menuWidgetsElements as el } from '../elements/menuWidgetsElements'

class MenuWidgetsPage {
    clicarWidgets() {
        cy.get(el.menuWidgets).should('be.visible').click()
    }

    clicarItemProgressBar() {
        cy.contains('Progress Bar').should('be.visible').click()
    }

    clicarStartButton() {
        cy.get(el.startButton).should('be.visible').click({ force: true })
    }

    clicarResetButton() {
        cy.get(el.resetButton).should('be.visible').click()
    }

    validarProgressoBarMenorOuIgual(limite) {
        cy.get(el.progressoBar).invoke('attr', 'aria-valuenow').then((valorAtual) => {
            const valor = parseInt(valorAtual);
            expect(valor).to.be.at.most(limite); // "at most" significa menor ou igual (<=)
        });
    }

    esperarProgresso(valorAlvo) {
        cy.get(el.progressoBar, { timeout: 20000 }) // Aumenta o tempo se a barra for lenta
        .should('have.attr', 'aria-valuenow', valorAlvo);
    }
}

export const menuWidgetsPage = new MenuWidgetsPage()