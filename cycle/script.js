// Creo un array di oggetti di bici con il loro peso
const bikes = [
  {
    brand: "Legnano",
    weight: 10,
  },
  {
    brand: "Bianchi",
    weight: 12,
  },
  {
    brand: "Piaggio",
    weight: 11,
  },
  {
    brand: "Lombardo",
    weight: 9,
  },
];

// Utilizzo il metodo reduce per trovare la bicicletta con il peso minore
const minWeightBike = bikes.reduce(
  (min, bike) => (bike.weight < min.weight ? bike : min),
  bikes[0]
);

console.log("Bicicletta con peso minore:", minWeightBike);
