import {When, Then} from '@badeball/cypress-cucumber-preprocessor'
import { menuAlertsFramePage } from '../../pages/menuAlertsFramePage'

//alerts frames windows
When(`clico no menu Alerts, Frame & Windows`, () => {
    menuAlertsFramePage.clicarAlertsFrameWindows()
});

When(`clico na opção Browser Windows`, () => {
    menuAlertsFramePage.clicarItemBrowserWindows() 
});

Then(`sistema deve permitir abrir uma nova janela`, () => {
    menuAlertsFramePage.clicarNewWindowButton()
});

Then(`validar se a nova janela foi aberta com sucesso`, () => {
    menuAlertsFramePage.validarNovaJanela()
});