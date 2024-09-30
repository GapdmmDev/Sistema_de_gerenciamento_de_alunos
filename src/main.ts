import { Aluno, Nota } from "./Aluno/aluno";
import { Turma } from "./Turma/turma";

const aluno1 = new Aluno(
    'João',
    'Silva',
    'joao@email.com',
    'regular',
    3,
    new Date('2005-06-15'),
    [new Nota(9.5), new Nota(8.0), new Nota(7.0)],  // Array de notas
    true
)

const aluno2 = new Aluno(
  'Matheus',
  'Souza',
  'matheus@email.com',
  'regular',
  3,
  new Date('2005-06-15'),
  [new Nota(9.5), new Nota(8.0), new Nota(7.0)],  // Array de notas
  true
)

const aluno3 = new Aluno(
  'Julia',
  'Martins',
  'julia@email.com',
  'regular',
  3,
  new Date('2005-06-15'),
  [new Nota(9.5), new Nota(8.0), new Nota(7.0)],  // Array de notas
  true
)

const turma1 = new Turma(
  3,
  5,
  [aluno1, aluno2, aluno3],
  'Turma 3',
  'ead'
)

// Método para calcular a média
console.log(aluno2.calcularMedia())

// Método para atualizar informações de um aluno
aluno2.atualizarInformacoes({nome: 'Manoel'})
console.log(aluno2)

// Método para retornar lista de alunos

console.log(turma1.retornarAlunos()) 

// Método para desativar ou ativar aluno

aluno1.mudarStatusAluno(false)
console.log(aluno1)