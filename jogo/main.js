document
  .getElementById("player_name_add")
  .addEventListener("click", function (ev) {
    ev.preventDefault();

    const player_name1 = document.getElementById("name_player1").value;
    const player_name2 = document.getElementById("name_player2").value;

    let text_name1 = document.getElementById("players1");
    let text_name2 = document.getElementById("players2");

    text_name1.innerText = player_name1;
    text_name2.innerText = player_name2;

    const h3 = document.getElementById("h3_item");
    h3.innerText = player_name1;
  });

const casas = document.querySelectorAll(".game_item");
const player_1 = document.getElementById("name_player1").value;
const player_2 = document.getElementById("name_player2").value;
const h3_item = document.getElementById("h3_item");
h3_item.innerText = player_1;

for (let i = 0; i <= 9; i++) {
  casas[i].addEventListener("click", function () {
    if (h3_item.innerText === player_1) {
      casas[i].innerText = "X";
      casas[i].removeEventListener("click");
      h3_item.innerText = player_2;
    } else {
      casas[i].innerText = "O";
      casas[i].removeEventListener("click");
      h3_item.innerText = player_2;
    }
    victoria();
  });
}

function victoria(player) {
  const btn = document.getElementsByClassName("game_item");
  if (btn[0].value === btn[1].value && btn[1].value === btn[2].value) {
    const div_win = document.getElementById("win_text_container");
    const win_text = document.createElement("h3");
    win_text.innerText = player;
    win_text.id = "win_text_item";
    div_win.appendChild(win_text);
  } else if (btn[3].value === btn[4].value && btn[4].value === btn[5].value) {
    const div_win = document.getElementById("win_text_container");
    const win_text = document.createElement("h3");
    win_text.innerText = player;
    win_text.id = "win_text_item";
    div_win.appendChild(win_text);
  } else if (btn[6].value === btn[7].value && btn[7].value === btn[8].value) {
    const div_win = document.getElementById("win_text_container");
    const win_text = document.createElement("h3");
    win_text.innerText = player;
    win_text.id = "win_text_item";
    div_win.appendChild(win_text);
  } else if (btn[0].value === btn[3].value && btn[3].value === btn[6].value) {
    const div_win = document.getElementById("win_text_container");
    const win_text = document.createElement("h3");
    win_text.innerText = player;
    win_text.id = "win_text_item";
    div_win.appendChild(win_text);
  } else if (btn[1].value === btn[4].value && btn[4].value === btn[7].value) {
    const div_win = document.getElementById("win_text_container");
    const win_text = document.createElement("h3");
    win_text.innerText = player;
    win_text.id = "win_text_item";
    div_win.appendChild(win_text);
  } else if (btn[2].value === btn[5].value && btn[5].value === btn[8].value) {
    const div_win = document.getElementById("win_text_container");
    const win_text = document.createElement("h3");
    win_text.innerText = player;
    win_text.id = "win_text_item";
    div_win.appendChild(win_text);
  } else if (btn[0].value === btn[4].value && btn[4].value === btn[8].value) {
    const div_win = document.getElementById("win_text_container");
    const win_text = document.createElement("h3");
    win_text.innerText = player;
    win_text.id = "win_text_item";
    div_win.appendChild(win_text);
  } else if (btn[2].value === btn[4].value && btn[4].value === btn[6].value) {
    const div_win = document.getElementById("win_text_container");
    const win_text = document.createElement("h3");
    win_text.innerText = player;
    win_text.id = "win_text_item";
    div_win.appendChild(win_text);
  } else if (
    btn[0].innerText !== "" &&
    btn[1].innerText !== "" &&
    btn[2].innerText !== "" &&
    btn[3].innerText !== "" &&
    btn[4].innerText !== "" &&
    btn[5].innerText !== "" &&
    btn[6].innerText !== "" &&
    btn[7].innerText !== "" &&
    btn[8].innerText !== ""
  ) {
    alert("Deu velha");
  }
}
