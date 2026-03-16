// Interface em comum
export interface Descritivel {
  resumo(): string; // método comum exigido
}

// Classe 1: Livro
export class Livro implements Descritivel {
  constructor(public titulo: string, public paginas: number) {}

  atualizarPaginas(novasPaginas: number): void {
    if (novasPaginas <= 0) throw new Error('Páginas deve ser > 0');
    this.paginas = novasPaginas;
  }

  resumo(): string {
    return `Livro: ${this.titulo} (${this.paginas} páginas)`;
  }
}

// Classe 2: Curso
export class Curso implements Descritivel {
  constructor(public nome: string, public cargaHoraria: number) {}

  aumentarCarga(horasExtras: number): void {
    if (horasExtras < 0) throw new Error('Horas extras deve ser >= 0');
    this.cargaHoraria += horasExtras;
  }

  resumo(): string {
    return `Curso: ${this.nome} (${this.cargaHoraria}h)`;
  }
}
