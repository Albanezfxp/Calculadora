let menu = parseFloat(
  prompt(
    "Qual das opções abaixo você quer? \n1-Saque\n2-Deposito\n3-Transferencia\n4- PIX\n5-Encerrar"
  )
);
do {
  switch (menu) {
    case 1:
      alert("Você escolheu a opção de saque");
      break;
    case 2:
      alert("Você escolheu a opção de Deposito");
      break;
    case 3:
      alert("Você escolheu a opção de Transferencia");
      break;
    case 4:
      alert("Você escolheu a opção de PIX");
      break;
  }
  menu = parseFloat(
    prompt(
      "Qual das opções abaixo você quer? \n1-Saque\n2-Deposito\n3-Transferencia\n4- PIX\n5-Encerrar"
    )
  );
} while (menu < 5);

alert("Você saiu do menu! Volte sempre! ");
