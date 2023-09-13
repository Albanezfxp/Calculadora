let metros = parseFloat(prompt("Qual seria a medida desejada (em metros)?"));
let medida = prompt(
  "Você deseja?\na) Milimetros(mm)\nb) Centímetros(cm)\nc) Decímetro(dm)\nd) Decâmetro(dam)\ne) Hectômetro(hm)\nf) Quilometro(km)"
);
switch (medida) {
  case "a":
    alert("Convertido para " + metros * 1000 + "Mm");
    break;
  case "b":
    alert("Convertido para " + metros * 100 + "Cm");
    break;
  case "c":
    alert("Convertido para " + metros * 10 + "Dm");
    break;
  case "d":
    alert("Convertido para " + metros / 10 + "Dam");
    break;
  case "e":
    alert("Convertido para " + metros / 100 + "Hm");
    break;
  case "f":
    alert("Convertido para " + metros / 1000 + "Km");
    break;
  default:
    alert("Forma de conversão definida não existe .");
}
