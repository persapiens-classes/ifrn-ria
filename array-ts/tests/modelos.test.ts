import { Livro, Curso, Descritivel } from '../src/modelos';

// 6.5
test('instancia classes, altera atributos e usa método comum da interface', () => {
  const l: Descritivel = new Livro('Clean Code', 464);
  const c: Descritivel = new Curso('TypeScript do Zero', 20);

  // alterar atributos por métodos próprios
  (l as Livro).atualizarPaginas(500);
  (c as Curso).aumentarCarga(10);

  expect(l.resumo()).toBe('Livro: Clean Code (500 páginas)');
  expect(c.resumo()).toBe('Curso: TypeScript do Zero (30h)');
});
