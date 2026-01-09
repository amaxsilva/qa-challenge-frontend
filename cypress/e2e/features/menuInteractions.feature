#language: pt
@desafio
Funcionalidade: Menu Interactions

    @menuInteractions
    Cenário: Validar Accordian
        Dado que acesso a demoqa
        Quando clico no menu Interactions
        E clico na opção Sortable
        E utilizo o drag and drop para mover os itens
        Então valido que os itens foram movidos com sucesso
        E ordeno os itens de forma crescente