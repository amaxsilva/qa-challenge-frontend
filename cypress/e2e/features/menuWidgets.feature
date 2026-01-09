#language: pt
@desafio
Funcionalidade: Menu Widgets

    @menuWidgets
    Cenário: Validar Accordian
        Dado que acesso a demoqa
        Quando clico no menu Widgets
        E clico na opção Progress Bar
        E clico no botão Start
        E paro antes dos 25%
        Então validar que o valor do progresso Bar é menor ou igual aos 25%
        E apertar Start novamente e ao chegar em 100% resetar a barra de progresso