import { Aluno, Nota } from "./Aluno/aluno";
import { Turma } from "./Turma/turma";


const turmaPresencial = new Turma(1, 10, "Analise e desenvolvimento de sistemas", 'presencial');
const turmaEad = new Turma(5, 10, 'Turma de Data Science', 'ead');


const aluno1 = new Aluno(
  'João', 
  'Souza', 
  'joao@email.com', 
  'presencial', 
  turmaPresencial, 
  new Date('2005-06-15'), [new Nota(9.5), new Nota(8.0), new Nota(7.0)], 
  true, 
  "C");

const aluno2 = new Aluno(
  'Matheus',
  'Souza',
  'matheus@email.com',
  'presencial',
  turmaPresencial,
  new Date('2005-06-15'),
  [new Nota(9.5), new Nota(8.0), new Nota(7.0)],  // Array de notas
  true,
  "B"
)

const aluno3 = new Aluno(
  'Julia',
  'Martins',
  'julia@email.com',
  'ead',
  turmaEad,
  new Date('2005-06-15'),
  [new Nota(9.5), new Nota(8.0), new Nota(7.0)],  // Array de notas
  true,
  "A"
)


console.log(aluno2.calcularMedia())


aluno2.atualizarInformacoes({ nome: 'Manoel' })
console.log(aluno2)


aluno1.mudarStatusAluno(false)
console.log(aluno1)

console.log(aluno1.Idade())
turmaPresencial.adicionarAluno(aluno1)
turmaPresencial.adicionarAluno(aluno2)
turmaEad.adicionarAluno(aluno3)



console.log(turmaPresencial.alunos)