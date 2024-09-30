import { Aluno, Nota } from './Aluno/aluno';
import { Turma } from './Turma/turma';
import { Escola } from './Escola/escola';

// Instância da escola
const escola = new Escola();

// Cadastro de turmas
const turma1 = new Turma(1, 5, [], 'Turma 1', 'presencial');
const turma2 = new Turma(2, 7, [], 'Turma 2', 'ead');

escola.cadastrarTurma(turma1);
escola.cadastrarTurma(turma2);

// Cadastro de alunos
const aluno1 = new Aluno(
  'João',
  'Silva',
  'joao@email.com',
  'presencial',
  1, // código da turma
  new Date('2005-06-15'),
  [new Nota(9.5), new Nota(8.0), new Nota(7.0)]
);

const aluno2 = new Aluno(
  'Maria',
  'Souza',
  'maria@email.com',
  'ead',
  2, // código da turma
  new Date('2006-08-20'),
  [new Nota(8.5), new Nota(9.0), new Nota(7.5)]
);

escola.cadastrarAluno(aluno1);
escola.cadastrarAluno(aluno2);

// Remover aluno
escola.removerAluno('joao@email.com');

// Atualizar informações do aluno
const alunoEncontrado = escola.buscarAluno(aluno2.email);
if (alunoEncontrado) {
  alunoEncontrado.atualizarInformacoes({ nome: 'Mariana' });
  console.log('Informações atualizadas:', alunoEncontrado);
}

// Buscar um aluno específico
const alunoBuscado = escola.buscarAluno('maria@email.com');
if (alunoBuscado) {
  console.log('Aluno encontrado:', alunoBuscado);
}

// Retornar a lista completa de alunos
const todosAlunos = escola.retornarTodosAlunos();
console.log('Lista completa de alunos:', todosAlunos);

// Retornar quantas turmas tem na escola
const totalTurmas = escola.contarTurmas();
console.log(`A escola tem ${totalTurmas} turmas.`);

// Calcular a média do aluno
if (alunoBuscado) {
  const media = alunoBuscado.calcularMedia();
  console.log(`A média de ${alunoBuscado.nome} é ${media.toFixed(2)}.`);
}
