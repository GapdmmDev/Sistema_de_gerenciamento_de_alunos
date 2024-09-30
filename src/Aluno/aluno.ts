export class Aluno {
    constructor(
      public nome: string,
      public sobrenome: string,
      public email: string,
      public tipo: string, // 'presencial' ou 'ead'
      public turma: number, // código da turma
      public nascimento: Date,
      public notas: Nota[],
      public ativo: boolean = true // padrão true
    ) {}
  
    calcularMedia(): number {
      const total = this.notas.reduce((i, nota) => i + nota.nota, 0);
      return this.notas.length > 0 ? total / this.notas.length : 0;
    }
  
    atualizarInformacoes(novasInformacoes: Partial<Aluno>): void {
      Object.assign(this, novasInformacoes);
    }
  
    mudarStatusAluno(situacao: boolean): void {
      this.ativo = situacao;
      if (this.ativo) {
        console.log('Aluno ativado com sucesso!');
      } else {
        console.log('Aluno desativado com sucesso!');
      }
    }
  }
  
  export class Nota {
    constructor(public nota: number) {}
  }
  