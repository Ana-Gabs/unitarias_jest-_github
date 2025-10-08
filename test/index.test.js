const hash = require('./testindex');

test('Verificar Hash', () => {
    const message = 'contraseña';
    const hashtest = hash(message);
    expect(hashtest).toEqual("23992fcdd9366d66a163638d6b5a95e4204dc6ad3c4f07a33c8b7fc1c70c1baa");
});