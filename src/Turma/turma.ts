import { Aluno } from '../Aluno/aluno';

export class Turma {
  constructor(
    public codigo: number, // entre 1 e 10
    public maximo: number, // de 5 a 10 alunos
    public alunos: Aluno[] = [],
    public descricao: string,
    public tipo: string // 'presencial' ou 'ead'
  ) {}

  adicionarAluno(aluno: Aluno): void {
    if (this.alunos.length >= this.maximo) {
      console.log('Turma atingiu o número máximo de alunos.');
    } else if (aluno.tipo !== this.tipo) {
      console.log('O tipo do aluno não corresponde ao tipo da turma.');
    } else {
      this.alunos.push(aluno);
      console.log(`Aluno ${aluno.nome} adicionado à turma ${this.codigo}.`);
    }
  }

  removerAluno(email: string): void {
    const index = this.alunos.findIndex((aluno) => aluno.email === email);
    if (index !== -1) {
      const alunoRemovido = this.alunos.splice(index, 1)[0];
      console.log(`Aluno ${alunoRemovido.nome} removido da turma ${this.codigo}.`);
    } else {
      console.log('Aluno não encontrado na turma.');
    }
  }

  buscarAluno(email: string): Aluno | undefined {
    return this.alunos.find((aluno) => aluno.email === email);
  }

  retornarAlunos(): Aluno[] {
    return this.alunos;
  }
}
