import { When, Then } from '@badeball/cypress-cucumber-preprocessor'
import { menuWidgetsPage } from '../../pages/menuWidgetsPage'

When('clico no menu Widgets', () => {
    menuWidgetsPage.clicarWidgets()
})

When('clico na opção Progress Bar', () => {
    menuWidgetsPage.clicarItemProgressBar()
})

When('clico no botão Start', () => {
    menuWidgetsPage.clicarStartButton()
})

When('paro antes dos 25%', () => {
    // Ele vai repetir esse comando até que o valor chegue entre 20 e 25
    cy.get('.progress-bar', { timeout: 10000 }).should(($el) => {
        const valor = parseInt($el.attr('aria-valuenow'))
        expect(valor).to.be.greaterThan(24)
    }).then(() => {
        // 2. Assim que chegar no valor, ele clica IMEDIATAMENTE
        menuWidgetsPage.clicarStartButton()
    })
    // Espera o botão voltar a dizer "Start" antes de terminar o passo
    cy.get('#startStopButton').should('contain', 'Start')
})

Then('validar que o valor do progresso Bar é menor ou igual aos 25%', () => {
    menuWidgetsPage.validarProgressoBarMenorOuIgual(25)
})

Then('apertar Start novamente e ao chegar em 100% resetar a barra de progresso', () => {
    menuWidgetsPage.clicarStartButton() // Clica para retomar
    
    // Espera chegar ao fim com um timeout maior (a barra demora uns segundos)
    cy.get('.progress-bar', { timeout: 20000 }).should('have.attr', 'aria-valuenow', '100')
    
    menuWidgetsPage.clicarResetButton()
})