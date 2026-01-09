#language: pt
@desafio
Funcionalidade: Menu Forms

    @practiveForm
    Cenário: Validar Practice Form
        Dado que acesso a demoqa
        E gero dados para um novo usuário
        Quando clico no menu Forms
        E clico na opção Practice Form
        Então sistema deve permitir o input dos dados do formulário
        E clicar no botão Submit
        E validar mensagem de sucesso