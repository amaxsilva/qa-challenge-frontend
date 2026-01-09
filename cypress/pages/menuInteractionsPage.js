// cypress/pages/MenuInteractionsPage.js
import { menuInteractionsElements as el } from '../elements/menuInteractionsElements'

class MenuInteractionsPage {
    clicarInteractions() {
        cy.get(el.menuInteractions).should('be.visible').click()
    }

    clicarItemSortable() {
        cy.get(el.itemSortable).should('be.visible').click()
    }

    baguncarLista() {
        // Pega o "One" e joga para o final da lista
        cy.contains('.list-group-item', 'One').drag('.list-group-item:nth-child(6)', { force: true })
        // Pega o "Two" e joga para o final também
        cy.contains('.list-group-item', 'Two').drag('.list-group-item:nth-child(6)', { force: true })
        //pega o 5 e joga para o começo
        cy.contains('.list-group-item', 'Five').drag('.list-group-item:nth-child(1)', { force: true })
        
        cy.log('Lista bagunçada para teste')
    }

    reordenarListaCrescente() {
        const ordemCrescente = ['One', 'Two', 'Three', 'Four', 'Five', 'Six']

        ordemCrescente.forEach((texto, index) => {
            cy.contains('.list-group-item', texto).drag(`.list-group-item:nth-child(${index + 1})`, { force: true })
        })
    }

    validarListaBaguncada() {
        const ordemCrescente = ['One', 'Two', 'Three', 'Four', 'Five', 'Six'];
        
        cy.get('.vertical-list-container .list-group-item').then(($itens) => {
            const ordemAtual = [...$itens].map(el => el.innerText);
            
            // Compara a ordem atual com a crescente. Se forem iguais, o teste falha.
            expect(ordemAtual).to.not.deep.equal(ordemCrescente);
            cy.log('Atestado: A lista está fora de ordem.');
        });
    }

    validarOrdemCrescente() {
    const ordemEsperada = ['One', 'Two', 'Three', 'Four', 'Five', 'Six']
    
    // Pegamos todos os itens de uma vez
    cy.get('.vertical-list-container .list-group-item')
        .should('have.length', 6) // Garante que todos os itens carregaram
        .then(($itens) => {
            // Convertemos a lista do HTML para uma array de strings (texto)
            const ordemAtual = [...$itens].map(item => item.innerText.trim())
            expect(ordemAtual).to.deep.equal(ordemEsperada)
        })
}
}

export const menuInteractionsPage = new MenuInteractionsPage()