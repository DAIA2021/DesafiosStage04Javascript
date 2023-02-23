
const students = [
  {
    name:'Paulo',
    noteOne:5,
    noteTwo:7,
  },
  {
    name:'Saulo',
    noteOne: 8,
    noteTwo: 7,
  },
  {
    name:'Leticia',
    noteOne:3,
    noteTwo:5,
  },
]

function gradeAverage(noteOne, noteTwo) {
  return Number((noteOne + noteTwo / 2).toFixed(2));
}

function printStudentAverage(student) {
  return `A média do(a) aluno(a) ${student.name} é: ${gradeAverage(student.noteOne, student.noteTwo)}`;
}

function printStudentMessage(student) {
  if (gradeAverage(student.noteOne, student.noteTwo) >= 7) {
      return `Parabéns, ${student.name}! Você foi aprovado(a) no concurso!`;
  } else {
      return `Não foi dessa vez, ${student.name}! Tente novamente!`;
  }
}

for (let student of students) {
  let studentAverage = printStudentAverage(student);
  let studentMessage = printStudentMessage(student);

  alert(`${studentAverage}\n${studentMessage}`);
}

 






 
 