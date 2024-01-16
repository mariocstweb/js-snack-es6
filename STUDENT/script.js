const studentsList = [
  {
    id: 213,
    name: "Marco della Rovere",
    vote: 78,
  },
  {
    id: 110,
    name: "Paola Cortellessa",
    vote: 96,
  },
  {
    id: 250,
    name: "Andrea Mantegna",
    vote: 48,
  },
  {
    id: 145,
    name: "Gaia Borromini",
    vote: 74,
  },
  {
    id: 196,
    name: "Luigi Grimaldello",
    vote: 68,
  },
  {
    id: 102,
    name: "Piero della Francesca",
    vote: 50,
  },
  {
    id: 120,
    name: "Francesca da Polenta",
    vote: 84,
  },
];

// Tramite .filter filtro appunto dall'array precedente gli studenti che soddisfano i requisiti richiesti
// Studenti con almeno 70 di voto
const seventyStudent = studentsList.filter((student) => student.vote >= 70);

console.log(seventyStudent);

// Studenti con almeno 70 di voto e id superiore a 120
const studentNew = studentsList.filter(
  (student) => student.vote >= 70 && student.id >= 120
);

console.log(studentNew);
