let cityTheVisited = 0;
let cityTheName = "";
const name = prompt("Qual o seu nome?");
let visitedTheCity = prompt("Você já visitou alguma cidade?\na)Sim\nb)Não");

while (visitedTheCity === "a") {
  cityTheName += " " + prompt("Qual a cidade que você visitou?");
  cityTheVisited += 1;
  visitedTheCity = prompt("Você viajou para mais algum lugar?\na)Sim\nb)Não");
  if (visitedTheCity === "b") {
    break;
  }
}

alert(
  "Turista: " +
    name +
    " \nViajou para as cidades: " +
    cityTheName +
    " \nVisitou o total de: " +
    cityTheVisited +
    " Cidades"
);
