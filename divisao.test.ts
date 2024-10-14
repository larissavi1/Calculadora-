import divisao from './divisao'

describe ('testes de divisão', ()=> {
    test('deve verificar o resultado de uma divisão', ()=> {
        expect (divisao(6.6,2)).toBeCloseTo (3.3)
        expect (divisao(2,8)).toBeCloseTo (0.25)
        expect (divisao(60,2)).toBeCloseTo (30)
    })
})