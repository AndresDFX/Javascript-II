const { sumar } = require('./math');

test('Suma de 2 y 3 debe ser 5', () => {
    expect(sumar(2, 3)).toBe(5);
});

test('Suma de -1 y 1 debe ser 0', () => {
    expect(sumar(-1, 1)).toBe(0);
});
