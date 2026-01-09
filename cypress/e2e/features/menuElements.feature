#language: pt
@desafio
Funcionalidade: Menu Elements

    @webTables 
    Cenário: Validar Web Tables
        Dado que acesso a demoqa
        E gero dados para um novo usuário
        Quando clico no menu Elements
        E clico na opção Web Tables
        Então sistema deve permitir adicionar um novo registro na tabela
        E permitir editar o registro adicionado
        E permitir deletar o registro adicionado

    @bonus
    Cenário: Criar e deletar múltiplos registros dinamicamente
        Dado que acesso a demoqa
        E gero dados para um novo usuário
        Quando clico no menu Elements
        E clico na opção Web Tables
        Quando adiciono "12" novos registros dinâmicos na tabela
        Então todos os registros criados devem ser deletados