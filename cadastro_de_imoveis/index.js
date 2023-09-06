const imoveis = [];
let menu;

do {
  menu = parseFloat(
    prompt(
      "Olá! Seja bem vindo ao Cadastre seu imovel!\n" +
        "No momento temos: " +
        imoveis.length +
        " imoveis cadastrados\n\n" +
        "O que deseja fazer?\n\n" +
        "1- Adcionar imovel\n" +
        "2- Imoveis adcionados\n" +
        "3- Sair"
    )
  );

  switch (menu) {
    case 1:
      const imovel = {};
      imovel.Proprietario = prompt("Qual o nome do proprietario?");
      imovel.Quartos = parseFloat(prompt("Qual a quantidade de quartos?"));
      imovel.Banehiros = parseFloat(prompt("Quantidade de banheiros?"));
      imovel.Garagem = prompt("Possuí garagem?");

      const confirm = confirm(
        "Você deseja salvar o imovel nos dados\n" +
          "Proprietario:" +
          imovel.Proprietario +
          "\nQuartos: " +
          imovel.Quartos +
          "\nBanehiros: " +
          imovel.Banehiros +
          "\nGaragem: " +
          imovel.Garagem
      );

      if (confirm) {
        imoveis.push(imovel);
        alert("Imovel salvo com sucesso!");
      } else break;
    case 2:
      for (let i = 0; i < imoveis.length; i++) {
        alert(
          "Imovel: " +
            (i + 1) +
            "Proprietario: " +
            imoveis.Proprietario +
            "Quartos: " +
            imoveis.Quartos +
            "Banehiros: " +
            imoveis.Banehiros +
            "Garagem: " +
            imoveis.Garagem
        );
      }
      break;
    case 3:
      alert("Saindo...");
      break;
    default:
      alert("Essa opção é invalida!");
  }
} while (menu !== 3);
