import "bootstrap";
import "./style.css";

window.onload = () => {
  document
    .getElementById("generate-btn")
    .addEventListener("click", generateRandomCards);

  // Agregar un evento al botón "Clasificar"
  document
    .getElementById("sort-btn")
    .addEventListener("click", sortAndShowChanges);
};

let generateRandomNumber = () => {
  let numbers = [
    "A",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "J",
    "Q",
    "K"
  ];

  let indexNumbers = Math.floor(Math.random() * numbers.length);
  return numbers[indexNumbers];
};

let generateRandomSuit = () => {
  // Lista de cartas
  let suit = ["diamond", "spade", "heart", "club"];
  // Seleccionar carta aleatoria de la lista
  let indexSuit = Math.floor(Math.random() * suit.length);
  return suit[indexSuit];
};

// Función para generar cartas aleatorias y mostrarlas en el contenedor
let generateRandomCards = () => {
  // Obtener el número de cartas que el usuario quiere generar
  const numCards = parseInt(document.getElementById("num-cards").value, 10);
  // Obtener el contenedor de cartas
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = ""; // Limpiar el contenedor

  // Generar y mostrar las cartas
  for (let i = 0; i < numCards; i++) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.classList.add(generateRandomSuit());
    card.innerHTML = generateRandomNumber();
    cardContainer.appendChild(card);
  }
};

// Función para ordenar las cartas usando el BUBBLE SORT y mostrar los cambios
function sortAndShowChanges() {
  // Obtener el contenedor de cartas
  const cardsContainer = document.getElementById("card-container");
  // Obtener todas las cartas
  const cards = Array.from(cardsContainer.querySelectorAll(".card"));
  // Obtener el contenedor de cambios
  const cambiosDificilesContainer = document.getElementById(
    "cambios-dificiles-container"
  );

  cambiosDificilesContainer.innerHTML = ""; // Limpiar el registro

  // Función de BUBBLE SORT!
  function bubbleSortWithChanges(cards) {
    const n = cards.length;

    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (cards[j].innerHTML > cards[j + 1].innerHTML) {
          // Realizar el intercambio de cartas
          const temp = cards[j].innerHTML;
          cards[j].innerHTML = cards[j + 1].innerHTML;
          cards[j + 1].innerHTML = temp;

          // Agregar las cartas al registro horizontal después de cada cambio
          cards.forEach(card => {
            cambiosDificilesContainer.appendChild(card.cloneNode(true));
          });
        }
      }
    }
  }

  bubbleSortWithChanges(cards);

  // Agregar las cartas ordenadas al registro horizontal
  cards.forEach(card => {
    cambiosDificilesContainer.appendChild(card.cloneNode(true));
  });
}
