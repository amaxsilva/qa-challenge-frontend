// cypress/support/step_definitions/menuInteractionsSteps.js
import { When, Then} from '@badeball/cypress-cucumber-preprocessor';
import { menuInteractionsPage } from '../../pages/menuInteractionsPage';

When(`clico no menu Interactions`, () => {
    menuInteractionsPage.clicarInteractions()
});

When(`clico na opção Sortable`, () => {
    menuInteractionsPage.clicarItemSortable()
});

When(`utilizo o drag and drop para mover os itens`, () => {
    menuInteractionsPage.baguncarLista()
});

Then(`valido que os itens foram movidos com sucesso`, () => {
    menuInteractionsPage.validarListaBaguncada()
});

Then(`ordeno os itens de forma crescente`, () => {
    menuInteractionsPage.reordenarListaCrescente()
});