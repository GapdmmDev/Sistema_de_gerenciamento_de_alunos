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

    calcularMedia(): number {
        const total = this.notas.reduce((i, nota) => i + nota.nota, 0);
        return this.notas.length > 0 ? total / this.notas.length : 0;
    }

    atualizarInformacoes(novasInformacoes: Partial<Aluno>): void {
        Object.assign(this, novasInformacoes);
    }

    mudarStatusAluno(situacao: boolean) {
        this.ativo = situacao;
        
        if(this.ativo) {
            console.log('Aluno ativado com sucesso!')
        }else{
            console.log('Aluno desativado com sucesso!')
        }
    }
}

export class Nota{
    constructor(
        public nota: number
    ){}
}