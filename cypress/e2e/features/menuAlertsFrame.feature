#language: pt
@desafio
Funcionalidade: Menu Alerts, Frame & Windows

    @alertsFrame
    Cenário: Validar Browser Windows
        Dado que acesso a demoqa
        Quando clico no menu Forms
        E clico no menu Alerts, Frame & Windows
        E clico na opção Browser Windows
        Então sistema deve permitir abrir uma nova janela
        E validar se a nova janela foi aberta com sucesso