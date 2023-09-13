const perso1 = prompt("Qual o nome do personagem?");
const attck1 = parseFloat(prompt("Qual o poder de ataque do seu personagem?"));

const perso2 = prompt("Qual o nome do personagem 2?");
let life = prompt("Quanto de life terá " + perso2 + "?");
const defender = parseFloat(
  prompt("Qual o poder de defesa do seu personagem?")
);
const shield = confirm("Seu personagem possui escudo?\n Sim ou não?");

const dano = attck1 - defender;
const danoAndShield = dano / 2;

if (attck1 > defender && shield) {
  alert(
    perso1 +
      "\nPoder de ataque: " +
      attck1 +
      "\nDano causado: " +
      danoAndShield +
      "\n\n" +
      perso2 +
      ":\nLife:" +
      life +
      "\nPoder de defesa: " +
      defender +
      "\nPossuía escudo: Sim\n\nO ataque do " +
      perso1 +
      " causou " +
      danoAndShield +
      " E deixou " +
      perso2 +
      " com " +
      (life - danoAndShield) +
      " de Life"
  );
} else if (attck1 > defender) {
  alert(
    "Atacante\n Poder de ataque: " +
      attck1 +
      "\nDano causado: " +
      dano +
      "\n\n" +
      perso2 +
      ":\nLife:" +
      life +
      "\nPoder de defesa: " +
      defender +
      "\nPossuía escudo: Não\n\nO ataque do " +
      perso1 +
      " causou " +
      dano +
      " E deixou " +
      perso2 +
      " com " +
      (life - dano) +
      " de Life"
  );
} else if (attck1 < defender) {
  alert("O ataque do seu Personagem não deu nenhum dano");
  alert(
    "Atacante\n Poder de ataque: " +
      attck1 +
      "\nDano causado: " +
      attck1 +
      "\n\n" +
      perso2 +
      ":\nLife:" +
      life +
      "\nPoder de defesa: " +
      defender +
      "\nPossuía escudo: Não\n\nO ataque do " +
      perso1 +
      " causou 0 E deixou " +
      perso2 +
      " com " +
      life +
      " de Life"
  );
}
