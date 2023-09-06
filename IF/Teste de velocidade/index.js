const nameTheFirstCar = prompt("Insira o nome do veiculo");
const velocity1 = parseFloat(prompt("Insira a velocidade do veiculo 1"));
const nameTheSecondCar = prompt("Insira o nome do veiculo");
const velocity2 = parseFloat(prompt("Insira a velocidade do veiculo 2"));

if (velocity1 > velocity2) {
  alert(
    "O veiculo " + nameTheFirstCar + " É mais rapido que " + nameTheSecondCar
  );
} else if (velocity2 > velocity1) {
  alert(
    "O veiculo " + nameTheSecondCar + " É mais rapido que " + nameTheFirstCar
  );
}
if (velocity1 === velocity2) {
  alert("Ambos veiculos tem a mesma velocidade");
}
