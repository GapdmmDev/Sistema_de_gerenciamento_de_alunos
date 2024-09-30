import { Turma } from '../Turma/turma';
import { Aluno } from '../Aluno/aluno';

export class Escola {
  private turmas: Turma[] = [];

  cadastrarTurma(turma: Turma): void {
    if (turma.codigo < 1 || turma.codigo > 10) {
      console.log('O código da turma deve ser entre 1 e 10.');
      return;
    }
    if (turma.maximo < 5 || turma.maximo > 10) {
      console.log('O número máximo de alunos na turma deve ser entre 5 e 10.');
      return;
    }
    if (this.turmas.find((t) => t.codigo === turma.codigo)) {
      console.log('Já existe uma turma com esse código.');
      return;
    }
    this.turmas.push(turma);
    console.log(`Turma ${turma.codigo} cadastrada com sucesso.`);
  }

  cadastrarAluno(aluno: Aluno): void {
    const turma = this.turmas.find((t) => t.codigo === aluno.turma);
    if (!turma) {
      console.log('Turma não encontrada.');
      return;
    }
    turma.adicionarAluno(aluno);
  }

  removerAluno(email: string): void {
    for (const turma of this.turmas) {
      const alunoEncontrado = turma.buscarAluno(email);
      if (alunoEncontrado) {
        turma.removerAluno(email);
        return;
      }
    }
    console.log('Aluno não encontrado em nenhuma turma.');
  }

  buscarAluno(email: string): Aluno | undefined {
    for (const turma of this.turmas) {
      const alunoEncontrado = turma.buscarAluno(email);
      if (alunoEncontrado) {
        return alunoEncontrado;
      }
    }
    console.log('Aluno não encontrado.');
    return undefined;
  }

  retornarTodosAlunos(): Aluno[] {
    let todosAlunos: Aluno[] = [];
    for (const turma of this.turmas) {
      todosAlunos = todosAlunos.concat(turma.retornarAlunos());
    }
    return todosAlunos;
  }

  contarTurmas(): number {
    return this.turmas.length;
  }
}
