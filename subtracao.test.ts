import subtracao from './subtracao'

describe ('testes de subtração', ()=> {
    test('deve verificar o resultado de uma subtração', ()=> {
        expect (subtracao(6,2)).not.toBe (8)
        expect (subtracao(6,8)).toBe (-2)
        expect (subtracao(60,2)).toBe (58)
    })
})