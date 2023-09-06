let menu;

function areaDoTriangulo(base, altura) {
  return alert("A Área do seu Triangulo é de: " + "\n" + (base * altura) / 2);
}
function areaDoRetangulo(base, altura) {
  return alert("A Área do seu Retangulo é de: " + "\n" + base * altura);
}
function areaDoQuadrado(lado) {
  return alert("A Área do seu Quadrado é de: " + "\n" + lado * lado);
}
function areaDoTrapezio(baseMaior, baseMenor, altura) {
  return alert(
    "A Área do seu Trapezio é de: " +
      "\n" +
      ((baseMaior + baseMenor) * altura) / 2
  );
}
function areaDoCriculo(raio, pi = 3.14) {
  return alert("A Área do seu Circulo é de: " + "\n" + pi * (raio * raio));
}
do {
  menu = prompt(
    "Bem vindo a Calculadora geométrica1!" +
      "\n Qual a operação que você deseja realizar?" +
      "\n\n 1- Área do triangulo" +
      "\n 2- Área do retangulo" +
      "\n 3- Área do quadarado" +
      "\n 4- Área do trapezio" +
      "\n 5- Área do circulo" +
      "\n 6- Encerrar"
  );

  switch (menu) {
    case "1":
      areaDoTriangulo(
        parseFloat(prompt("Qual o valor da base?")),
        parseFloat(prompt("Qual o valor da altura?"))
      );
      break;
    case "2":
      areaDoRetangulo(
        parseFloat(prompt("Qual o valor da base?")),
        parseFloat(prompt("Qual o valor da altura?"))
      );
      break;
    case "3":
      areaDoQuadrado(parseFloat(prompt("Qual o valor do lado do quadrado?")));
      break;
    case "4":
      areaDoTrapezio(
        parseFloat(prompt("Qual o valor da Base Maior?")),
        parseFloat(prompt("Qual o valor da Base Menor?")),
        parseFloat(prompt("Qual o valor da Altura?"))
      );
      break;
    case "5":
      areaDoCriculo(parseFloat(prompt("Qual o valor do Raio?")));
      break;
    case "6":
      alert("Encerrando...");
      break;
    default:
      alert("Opção invalida");
      break;
  }
} while (menu !== "6");
