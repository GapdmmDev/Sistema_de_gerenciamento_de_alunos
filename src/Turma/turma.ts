type Modalidade = 'presencial' | 'ead';
import { Aluno } from "../Aluno/aluno";

export class Turma{
    private static registroDeTurmas: number[] = []
    public alunos: Aluno[] = [];
    
    constructor(
        public codigo: number,
        public maximo: number,
        public descricao: string,
        public tipo: Modalidade
    ){
        try {
            if (codigo < 1 || codigo > 10) {
                throw new Error('É necessário o código de turma estar entre 1 e 10');
            }
            if (maximo < 5 || maximo > 10) {
                throw new Error('Limite máximo de alunos deve estar entre 5 e 10');
            }
            if (Turma.registroDeTurmas.includes(codigo)) {
                throw new Error('Turma com este código já existe');
            }
        } catch (error) {
            if (error instanceof Error) {
                console.error(error.message); 
            } else {
                console.error("Ocorreu um erro desconhecido");
            }
        }
        Turma.registroDeTurmas.push(codigo);
    }

    adicionarAluno(aluno: Aluno) {
        const alunoExistente = this.alunos.some(a => a.email === aluno.email);
      try {  if (alunoExistente) {
            console.log('Aluno já está matriculado nessa turma');
            }
          if (this.alunos.length >= this.maximo) {
            console.log('Essa turma já atingiu o seu limite máximo de alunos');
          }
          if (aluno.tipo !== this.tipo) {
            console.log('Tipo de ensino do aluno não corresponde ao ensino dessa turma');
          }
          if (this.alunos.some(a => a.classificacao === 'A' || a.classificacao === 'D') &&
              (aluno.classificacao === 'B' || aluno.classificacao === 'C')) {
            console.log('Alunos com classificação A e D não podem estar na turma com classificação de alunos B e C');
          }
          if ((this.alunos.some(a => a.classificacao === 'B' || a.classificacao === 'C')) &&
              (aluno.classificacao === 'A' || aluno.classificacao === 'D')) {
            console.log('Alunos com classificação B e C não podem estar na turma com classificação de alunos A e D');
          } }
          catch (error) {
            if (error instanceof Error) {
                console.error(error.message); 
            } else {
                console.error("Ocorreu um erro desconhecido");
            }
          this.alunos.push(aluno);
        }
    }
    

    retornarAlunos(): void{
        this.alunos.forEach(aluno => {
            console.log(aluno)
        })
    }

    
}