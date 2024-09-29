export class Aluno {
    constructor(
        public nome: string,
        public sobrenome: string,
        public email: string,
        public tipo: string,
        public turma: number,
        public nascimento: Date,
        public notas: Nota[],
        public ativo: boolean,

    ){}
}

export class Nota{
    constructor(
        public nota: number
    ){}
}