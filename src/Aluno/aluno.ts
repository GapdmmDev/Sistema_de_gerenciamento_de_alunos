import { Turma } from "../Turma/turma";

type classificacao = 'A' | 'B' | 'C' | 'D';
type Modalidade = 'presencial' | 'ead';

export class Aluno {
    static registroDeAlunos: string[] = [];


    constructor(
        public nome: string,
        public sobrenome: string,
        public email: string,
        public tipo: Modalidade,
        public readonly turma: Turma,
        public nascimento: Date,
        public notas: Nota[],
        public ativo: boolean,
        public classificacao: classificacao

    ){
        if (Aluno.registroDeAlunos.includes(email)) {
            console.log("Esse e-mail já está registrado");
        } 
        if (this.Idade() < 16) {
            console.log("O aluno deve ter no minímo 16 anos");
        }
        Aluno.registroDeAlunos.push(email);
    }


   

    calcularMedia(): number {
        const total = this.notas.reduce((i, nota) => i + nota.nota, 0);
        return this.notas.length > 0 ? total / this.notas.length : 0;
    }

    atualizarInformacoes(novasInformacoes: Partial<Aluno>): void {
        Object.assign(this, novasInformacoes);
    }


    Idade(): number {
        const hoje = new Date();
        let idadeAluno = hoje.getFullYear() - this.nascimento.getFullYear();
        
        if (hoje.getMonth() < this.nascimento.getMonth()) {
            idadeAluno--;
        } else if (hoje.getMonth() === this.nascimento.getMonth()) {
            if (hoje.getDate() < this.nascimento.getDate()) {
                idadeAluno--;
            }
        }

        return idadeAluno;
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