import { Aluno } from "../Aluno/aluno";

export class Turma{
    constructor(
        public codigo: number,
        public maximo: number,
        public alunos: Aluno[],
        public descricao: string,
        public tipo: string
    ){}
}