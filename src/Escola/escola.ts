import { Turma } from '../Turma/turma';
import { Aluno } from '../Aluno/aluno';

export class Escola {
    private turmas: Turma[] = [];

    cadastrarTurma(turma: Turma): void {
        if (this.turmas.find((t) => t.codigo === turma.codigo)) {
            console.log('Já existe uma turma com esse código.');
            return;
        }
        this.turmas.push(turma);
        console.log(`Turma ${turma.codigo} cadastrada com sucesso.`);
    }

    cadastrarAluno(aluno: Aluno): void {
        const turma = this.turmas.find((t) => t.codigo === aluno.turma.codigo);
        if (!turma) {
            console.log('Turma não encontrada.');
            return;
        }
        turma.adicionarAluno(aluno);
    }

    // outros métodos...
}
