const footballSquads = [
  {
    name: "Inter",
    score: 0,
    foul: 0,
  },
  {
    name: "Milan",
    score: 0,
    foul: 0,
  },
  {
    name: "Roma",
    score: 0,
    foul: 0,
  },
];

console.log(footballSquads);

// Funzione per genrare un numero casuale
const randomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomNum = randomNumber(1, 20);

console.log(randomNum);

// Tramite ciclo for riassegno i valori delle due chiavi
footballSquads.forEach((squad) => {
  squad.score = randomNumber(0, 70);
  squad.foul = randomNumber(0, 20);
});

console.log(footballSquads);

// Tramite il metodo .map creo un nuovo array con i valori richiesti
const newSquads = footballSquads.map((squad) => {
  return {
    name: squad.name,
    foul: squad.foul,
  };
});

console.log(newSquads);
