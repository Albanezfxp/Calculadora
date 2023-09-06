let cards = [];
let menu;
let baralho = " ";
let lastCards;
do {
  menu = parseFloat(
    prompt(
      "Seja bem vindo ao baralho de cartas!\n" +
        baralho +
        "\n\nO que deseja fazer?\n" +
        "1- Adcionar uma carta\n" +
        "2- Puxar uma carta\n" +
        "3- encerrar"
    )
  );

  switch (menu) {
    case 1:
      cards.unshift(prompt("Qual carta você deseja adcionar?"));

      break;
    case 2:
      lastCards = cards.slice(0, 1);
      alert("Você retirou a carta:\n" + lastCards);
      cards.shift();
      break;
  }
  baralho = " ";
  for (let i = 0; i < cards.length; i++) {
    baralho += i + "-" + cards[i] + "\n";
  }
} while (menu !== 3);

alert("Você saiu com as cartas:\n" + baralho);
