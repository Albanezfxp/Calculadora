const number = parseFloat(prompt("Qual o numero que você deseja calcular?"));
let result = " ";
for (let i = 1; i <= 20; i++) {
  result += "\n" + number + " x " + i + " = " + number * i;
}
alert("Tabuada do: " + number + "\n" + result);
