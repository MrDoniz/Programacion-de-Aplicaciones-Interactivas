const secuenciaCollatz = require('./the-sequence-of-Collatz.js');

test('The sequence of Collatz 3', () => {
  expect(secuenciaCollatz(3)).toEqual(7);
});
test('The sequence of Collatz 1', () => {
  expect(secuenciaCollatz(1)).toEqual(0);
});
test('The sequence of Collatz 40', () => {
  expect(secuenciaCollatz(40)).toEqual(8);
});
