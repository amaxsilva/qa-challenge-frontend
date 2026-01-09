import { faker } from '@faker-js/faker/locale/pt_BR'

Cypress.Commands.add('criarUsuarioFake', () => {
    return {
        nome: faker.person.firstName(),
        sobrenome: faker.person.lastName(),
        email: faker.internet.email(),
        genero: 'Male',
        telefone: faker.string.numeric(10),
        nascimento: '10 Dec 1990',
        materia: 'Maths',
        hobbies: 'Sports',
        endereco: faker.location.streetAddress(),
        estado: 'NCR',
        cidade: 'Delhi',
        arquivo: 'cypress/fixtures/arquivoTeste.txt',
        salario: faker.number.int({ min: 1000, max: 10000 }).toString(),
        departamento: 'Engineering',
        idade: faker.number.int({ min: 18, max: 65 }).toString()
    }
})
