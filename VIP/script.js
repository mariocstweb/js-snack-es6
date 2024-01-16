// Recupero gli elementi dal DOM
const list = document.getElementById("list");

const tableName = "Tavolo Vip";
// Array con i nomi degli invitati
const guests = [
  "Brad Pitt",
  "Johnny Depp",
  "Lady Gaga",
  "Cristiano Ronaldo",
  "Georgina Rodriguez",
  "Chiara Ferragni",
  "Fedez",
  "George Clooney",
  "Amal Clooney",
  "Maneskin",
];

// Inizializzo un nuovo vuoto array vuoto dove inserirò i nuovi oggetti generati
guestsList = [];

for (let i = 0; i < guests.length; i++) {
  const newObject = {
    table: tableName,
    guess: guests[i],
    place: i + 1,
  };
  guestsList.push(newObject);
}

// console.log(guestsList);

// Flagvuoto
let tableList = "";

for (let i = 0; i < guestsList.length; i++) {
  const guest = guestsList[i];
  tableList += `
  <li>
    Tavolo: ${guest.table}, Ospite: ${guest.guess}, Posto: ${guest.place}
  </li>
`;
}

list.innerHTML += tableList;
