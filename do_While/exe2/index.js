let saldo = parseFloat(prompt("Qual o valor do seu saldo?"));
let saldoSacado = 0;
let saldoDepositado = 0;
let saldoDisponivel = 0;

do {
  saldoDisponivel = parseFloat(
    prompt(
      "Seu saldo é de: " +
        saldo +
        "\nO que deseja realizar com o dinheiro?\n1-Sacar\n2-Depositar\n3-Encerrar"
    )
  );
  switch (saldoDisponivel) {
    case 1:
      saldoSacado = parseFloat(prompt("Qual valor você deseja sacar?"));
      saldo = saldo - saldoSacado;
      break;
    case 2:
      saldoDepositado = parseFloat(prompt("Qual valor você deseja depositar?"));
      saldo = saldo + saldoDepositado;
      break;
  }
} while (saldoDisponivel < 3);

alert("Você saiu!\nSeu saldo: R$" + saldo + "\nVolte sempre!");
