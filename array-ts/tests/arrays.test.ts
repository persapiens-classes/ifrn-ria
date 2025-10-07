import {
  quadradosFor,
  quadradosForEach,
  concatenarComEspaco,
  ordenarDecrescente,
  pegarDoisPrimeiros,
  filtrarPares
} from '../src/arrays';

// 1.1
test('quadrados (for) com [3,5,7,3,8,9,1]', () => {
  expect(quadradosFor([3,5,7,3,8,9,1])).toEqual([9,25,49,9,64,81,1]);
});

// 1.1 (forEach)
test('quadrados (forEach) com [3,5,7,3,8,9,1]', () => {
  expect(quadradosForEach([3,5,7,3,8,9,1])).toEqual([9,25,49,9,64,81,1]);
});

// 2.1
test("concatenarComEspaco com transform em UPPERCASE", () => {
  const out = concatenarComEspaco(['Arrays','com','TypeScript'], s => s.toUpperCase());
  expect(out).toBe('ARRAYS COM TYPESCRIPT');
});

// 3.1
test("ordenarDecrescente(['carro','boneco','ave','lapis'])", () => {
  const entrada = ['carro','boneco','ave','lapis'];
  const saida = ordenarDecrescente(entrada);
  expect(saida).toEqual([...entrada].sort((a,b)=> (a<b?1:a>b?-1:0)));
});

// 4.1
test('pegarDoisPrimeiros([2,4,6,2,8,9,5]) => [2,4]', () => {
  expect(pegarDoisPrimeiros([2,4,6,2,8,9,5])).toEqual([2,4]);
});

// 5.1
test('filtrarPares([8,3,9,5,6,12]) => [8,6,12]', () => {
  expect(filtrarPares([8,3,9,5,6,12])).toEqual([8,6,12]);
});
