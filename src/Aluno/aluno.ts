import { Turma } from "../Turma/turma";

type classificacao = 'A' | 'B' | 'C' | 'D';
type Modalidade = 'presencial' | 'ead';

export class Aluno {
    static registroDeAlunos: string[];


    constructor(
        public _nome: string,
        public _sobrenome: string,
        public _email: string,
        public _tipo: Modalidade,
        public readonly _turma: Turma,
        public _nascimento: Date,
        public _notas: Nota[],
        public _ativo: boolean,
        private _classificacao: classificacao

    ){
        if (Aluno.registroDeAlunos.includes(_email)) {
            console.log("Esse e-mail já está registrado");
        } 
        if (this.Idade() < 16) {
            console.log("O aluno deve ter no minímo 16 anos");
        }
        Aluno.registroDeAlunos.push(_email);
    }


    get nome():string{
        return this._nome;
    }
    get sobrenome():string{
        return this._sobrenome;
    }
    get email():string{
        return this._email;
    }
    get tipo(): string{
        return this._tipo;
    }
    get turma(): Turma{
        return this._turma;
    }
    get ativo(): boolean{
        return this._ativo;
    }

    get classificacao(): classificacao{
        return this._classificacao;
    }

    calcularMedia(): number {
        const total = this._notas.reduce((i, nota) => i + nota.nota, 0);
        return this._notas.length > 0 ? total / this._notas.length : 0;
    }

    atualizarInformacoes(novasInformacoes: Partial<Aluno>): void {
        Object.assign(this, novasInformacoes);
    }


    Idade(): number {
        const hoje = new Date();
        let idadeAluno = hoje.getFullYear() - this._nascimento.getFullYear();
        
        if (hoje.getMonth() < this._nascimento.getMonth()) {
            idadeAluno--;
        } else if (hoje.getMonth() === this._nascimento.getMonth()) {
            if (hoje.getDate() < this._nascimento.getDate()) {
                idadeAluno--;
            }
        }

        return idadeAluno;
    }

    mudarStatusAluno(situacao: boolean) {
        this._ativo = situacao;
        
        if(this._ativo) {
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