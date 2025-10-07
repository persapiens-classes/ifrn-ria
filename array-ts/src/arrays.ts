export function quadradosFor(valores: number[]): number[] {
  const out: number[] = [];
  for (let i = 0; i < valores.length; i++) {
    out.push(valores[i] * valores[i]);
  }
  return out;
}

export function quadradosForEach(valores: number[]): number[] {
  const out: number[] = [];
  valores.forEach((n) => out.push(n * n));
  return out;
}

export function concatenarComEspaco(
  partes: string[],
  transform: (s: string) => string = (s) => s
): string {
  return partes.map(transform).join(' ');
}

export function ordenarDecrescente(palavras: string[]): string[] {
  return [...palavras].sort((a, b) => (a < b ? 1 : a > b ? -1 : 0));
}

export function pegarDoisPrimeiros<T>(arr: T[]): T[] {
  return arr.slice(0, 2);
}

export function filtrarPares(valores: number[]): number[] {
  return valores.filter((n) => n % 2 === 0);
}
