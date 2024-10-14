const soma = require('./soma')

describe ('testes de soma', () => {
    test('deve verificar o resultado de uma soma', ()=> {
        expect (soma(3,8)).toBe (11)
    })
    test('deve verificar o resultado de uma soma', ()=> {
        expect (soma(3,8)).not.toBe (12)
    })
})